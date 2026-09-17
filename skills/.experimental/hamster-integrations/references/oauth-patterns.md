---
title: OAuth Patterns
tags: oauth, integration, authentication
---

# OAuth Flow Patterns

## Standard OAuth Flow

```
1. Frontend → Redirect user to OAuth provider with NEXT_PUBLIC_SITE_URL callback
2. OAuth Callback (Next.js) → Exchange code, call NestJS API
3. NestJS Service → Exchange code for token, store in Vault, create Airweave source
```

**Critical**: Use same `SITE_URL` env var in both frontend and callback to avoid `bad_redirect_uri` errors.

## OAuth Types

### access_only (Tokens don't expire)

Used by: Slack, Linear, Notion, Intercom, Monday, ClickUp, Todoist

```typescript
// No refresh logic needed
// Store access_token and use directly
await airweaveClient.sources.create({
  authentication: {
    access_token: tokenResponse.access_token,
  },
});
```

### with_refresh (Standard refresh tokens)

Used by: Gmail, Google Drive, Google Docs, Asana, HubSpot, Salesforce, GitLab

```typescript
// Store both tokens
await vaultService.storeTokens(userId, {
  access_token: tokenResponse.access_token,
  refresh_token: tokenResponse.refresh_token,
  expires_at: Date.now() + tokenResponse.expires_in * 1000,
});

// Refresh before expiry
if (isTokenExpired(tokens.expires_at)) {
  const newTokens = await refreshAccessToken(tokens.refresh_token);
  await vaultService.updateTokens(userId, newTokens);
}
```

### with_rotating_refresh (New refresh token each refresh)

Used by: Microsoft Teams, Confluence, Jira, SharePoint, Outlook

```typescript
// CRITICAL: Store the NEW refresh token after each refresh
const response = await fetch(tokenUrl, {
  method: 'POST',
  body: new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: currentRefreshToken,
    client_id: clientId,
    client_secret: clientSecret,
  }),
});

const newTokens = await response.json();

// Store BOTH new access_token AND new refresh_token
await vaultService.updateTokens(userId, {
  access_token: newTokens.access_token,
  refresh_token: newTokens.refresh_token,  // NEW refresh token!
  expires_at: Date.now() + newTokens.expires_in * 1000,
});
```

### oauth1 (Legacy OAuth 1.0a)

Used by: Trello

```typescript
// 3-legged flow: request token → authorize → access token
// 1. Get request token
const requestToken = await getRequestToken(consumerKey, consumerSecret);

// 2. Redirect user to authorize
redirect(`https://trello.com/1/OAuthAuthorizeToken?oauth_token=${requestToken}`);

// 3. Exchange for access token (in callback)
const accessToken = await getAccessToken(requestToken, verifier);
```

## Adding a New OAuth Integration

### 1. Create OAuth Service

```typescript
// apps/ai/src/modules/context-connections/[provider]-oauth.service.ts
@Injectable()
export class ProviderOAuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly airweaveClient: AirweaveClientService,
    private readonly vaultService: VaultService,
  ) {}

  async exchangeCodeForTokens(code: string, redirectUri: string) {
    const response = await fetch('https://provider.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: this.configService.get('PROVIDER_CLIENT_ID'),
        client_secret: this.configService.get('PROVIDER_CLIENT_SECRET'),
      }),
    });

    return response.json();
  }

  async createSourceConnection(
    collectionId: string,
    tokens: TokenResponse,
    userId: string,
  ) {
    // Store tokens in Vault
    await this.vaultService.storeTokens(userId, 'provider', tokens);

    // Create Airweave source
    return this.airweaveClient.sources.create({
      collection_id: collectionId,
      short_name: 'provider',
      authentication: {
        access_token: tokens.access_token,
      },
    });
  }
}
```

### 2. Add DTO

```typescript
// apps/ai/src/modules/context-connections/dto/create-[provider]-oauth-connection.dto.ts
import { createZodDto } from 'nestjs-zod';
import { CreateProviderConnectionSchema } from '@kit/shared/context-connections';

export class CreateProviderConnectionDto extends createZodDto(
  CreateProviderConnectionSchema,
) {}
```

### 3. Add Schema

```typescript
// packages/shared/src/context-connections/schemas.ts
export const CreateProviderConnectionSchema = z.object({
  code: z.string(),
  redirectUri: z.string().url(),
  accountId: z.string().uuid(),
});
```

### 4. Create Callback Route

```typescript
// apps/web/app/api/oauth/[provider]/callback/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');  // Contains accountId
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}/home/${state}/context-settings?error=${error}`,
    );
  }

  // Call NestJS API to exchange code
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/context-connections/provider/oauth`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        code,
        redirectUri: `${process.env.NEXT_PUBLIC_SITE_URL}/api/oauth/provider/callback`,
        accountId: state,
      }),
    },
  );

  if (!response.ok) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}/home/${state}/context-settings?error=connection_failed`,
    );
  }

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_SITE_URL}/home/${state}/context-settings?success=true`,
  );
}
```

### 5. Create Connect Dialog

```tsx
// apps/web/app/home/[account]/context-settings/_components/connect-[provider]-dialog.tsx
'use client';

export function ConnectProviderDialog({ accountId }: Props) {
  const handleConnect = () => {
    const authUrl = new URL('https://provider.com/oauth/authorize');
    authUrl.searchParams.set('client_id', process.env.NEXT_PUBLIC_PROVIDER_CLIENT_ID!);
    authUrl.searchParams.set('redirect_uri', `${process.env.NEXT_PUBLIC_SITE_URL}/api/oauth/provider/callback`);
    authUrl.searchParams.set('scope', 'read write');
    authUrl.searchParams.set('state', accountId);
    authUrl.searchParams.set('response_type', 'code');

    window.location.href = authUrl.toString();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Connect Provider</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Connect to Provider</DialogTitle>
        </DialogHeader>
        <Button onClick={handleConnect}>
          Authorize
        </Button>
      </DialogContent>
    </Dialog>
  );
}
```

## Special OAuth Parameters

### Google (requires offline access)

```typescript
additional_frontend_params: {
  access_type: 'offline',
  prompt: 'consent',  // Force consent to get refresh token
}
```

### Atlassian (Confluence, Jira)

```typescript
additional_frontend_params: {
  audience: 'api.atlassian.com',
  prompt: 'consent',
  response_mode: 'query',
  state: 'YOUR_USER_BOUND_VALUE',
}
```

### Microsoft

```typescript
additional_frontend_params: {
  response_type: 'code',
  response_mode: 'query',
}
```

### Slack (user_scope, not scope)

```typescript
// Slack uses user_scope for user tokens
const authUrl = new URL('https://slack.com/oauth/v2/authorize');
authUrl.searchParams.set('user_scope', 'search:read');  // NOT 'scope'
```

### Notion (credentials in header)

```typescript
// Notion uses Basic auth in header, not body
const response = await fetch('https://api.notion.com/v1/oauth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
  },
  body: new URLSearchParams({ grant_type: 'authorization_code', code }),
});
```

### Airtable (requires PKCE)

```typescript
// Generate PKCE verifier and challenge
const codeVerifier = generateRandomString(64);
const codeChallenge = await sha256(codeVerifier);

authUrl.searchParams.set('code_challenge', codeChallenge);
authUrl.searchParams.set('code_challenge_method', 'S256');

// Include verifier in token exchange
body.append('code_verifier', codeVerifier);
```

### Zendesk (template URLs)

```typescript
// URLs require subdomain from user
const subdomain = userInput.subdomain;  // e.g., 'yourcompany'
const authUrl = `https://${subdomain}.zendesk.com/oauth/authorizations/new`;
const tokenUrl = `https://${subdomain}.zendesk.com/oauth/tokens`;
```