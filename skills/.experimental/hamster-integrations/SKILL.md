---
name: hamster-integrations
description: "External integration patterns including Airweave context connectors, OAuth flows, and third-party service connections. Use when implementing new integrations or working with context connections."
---

# Hamster Integrations

## Quick Reference

| Task | Pattern | Reference |
| --- | --- | --- |
| Add new OAuth integration | Create service + DTO + callback + dialog | [oauth-patterns.md](references/oauth-patterns.md) |
| Get/create Airweave collection | `getOrCreateCollection(accountId)` | [airweave-collections.md](references/airweave-collections.md) |
| Create source connection | Use `access_token` format | [airweave-collections.md](references/airweave-collections.md) |
| Find integration specs | Check OAuth type and scopes | [integration-catalog.md](references/integration-catalog.md) |

## When to Apply

- Adding new context connector integrations
- Working with Airweave collections
- Implementing OAuth flows
- Troubleshooting integration authentication

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    Integration Architecture                      │
├─────────────────────────────────────────────────────────────────┤
│ Frontend           →  OAuth Redirect  →  Third-Party Provider   │
│ (Connect Dialog)      (with SITE_URL)                           │
│                                                                 │
│ OAuth Callback     →  Exchange Code   →  Token Response         │
│ (Next.js API)         (NestJS)                                  │
│                                                                 │
│ NestJS Service     →  Store Token     →  Vault                  │
│                    →  Create Source   →  Airweave               │
│                                                                 │
│ Airweave           →  Sync Data       →  Team Collection        │
└─────────────────────────────────────────────────────────────────┘
```

## Critical Rules

1. **Use same SITE_URL** - Frontend and callback must use same URL to avoid `bad_redirect_uri`
2. **access_token format** - Airweave expects `{ access_token: token }`, not nested credentials
3. **Lazy collection creation** - Collections created on first context connection
4. **Self-healing collections** - Verify "active" collections actually exist in Airweave

## Key Patterns

### Source Connection Authentication

```typescript
// CORRECT - matches Airweave's oauth_token authentication type
authentication: {
  access_token: tokenResponse.access_token,
}

// WRONG - nested credentials not recognized
authentication: {
  credentials: { bot_token: tokenResponse.access_token }
}
```

### OAuth Types

| Type | Description | Refresh Needed |
| --- | --- | --- |
| `access_only` | Tokens don't expire | No |
| `with_refresh` | Standard refresh tokens | Yes |
| `with_rotating_refresh` | New refresh token each refresh | Yes |
| `oauth1` | Legacy OAuth 1.0a | N/A |

### Collection States

| Status | Meaning |
| --- | --- |
| `initializing` | DB record created, Airweave collection pending |
| `active` | Collection exists in both DB and Airweave |
| `failed` | Collection creation failed (will retry on next attempt) |

## Adding a New Integration

1. Create OAuth service: `apps/ai/src/modules/context-connections/[provider]-oauth.service.ts`
2. Add DTO: `apps/ai/src/modules/context-connections/dto/create-[provider]-oauth-connection.dto.ts`
3. Add schema: `packages/shared/src/context-connections/schemas.ts`
4. Create callback route: `apps/web/app/api/oauth/[provider]/callback/route.ts`
5. Create dialog: `apps/web/app/home/[account]/context-settings/_components/connect-[provider]-dialog.tsx`
6. Add to `AVAILABLE_SERVICES` in constants
7. Add i18n translations

## References

- [oauth-patterns.md](references/oauth-patterns.md) - OAuth flow implementation
- [airweave-collections.md](references/airweave-collections.md) - Collection management
- [integration-catalog.md](references/integration-catalog.md) - All 40+ integrations with specs

## Key Files

| File | Purpose |
| --- | --- |
| `apps/ai/src/modules/context-connections/` | OAuth services and handlers |
| `apps/ai/src/modules/context-connections/collection-creation.helper.ts` | Collection helper |
| `apps/web/app/api/oauth/` | OAuth callback routes |
| `apps/web/app/home/[account]/context-settings/` | Connection UI |
| `public.airweave_collections` | Collection database table |
