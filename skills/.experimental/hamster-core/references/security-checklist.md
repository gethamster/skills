---
title: Security Checklist
tags: security, authentication, authorization, rls
---

# Security Checklist

## Server Actions

**MUST:**

```typescript
'use server';

import { enhanceAction } from '@kit/next/actions';
import { MySchema } from '../schema';

export const myAction = enhanceAction(
  async (data, user) => {
    // user is authenticated, data is validated
    return processData(data);
  },
  {
    auth: true,        // Require authentication
    schema: MySchema,  // Validate input
  }
);
```

**MUST NOT:**

- Skip `enhanceAction` wrapper
- Omit `'use server'` directive
- Skip schema validation
- Trust client-provided data

## Route Handlers

**MUST:**

```typescript
import { enhanceRouteHandler } from '@kit/next/routes';
import { RouteSchema } from '../schema';

export const POST = enhanceRouteHandler(
  async ({ body, user }) => {
    // Validated body, authenticated user
    return NextResponse.json({ success: true });
  },
  {
    auth: true,
    schema: RouteSchema,
  }
);
```

## Client Components

**MUST NOT pass to client:**

- API keys or secrets
- Server environment variables
- Raw cookies or headers
- Unsanitized user input

**MUST:**

```typescript
// Only NEXT_PUBLIC_* vars are safe
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## Database Security

**Always enable RLS:**

```sql
ALTER TABLE public.my_table ENABLE ROW LEVEL SECURITY;
```

**Standard RLS pattern:**

```sql
CREATE POLICY "select" ON public.my_table FOR SELECT
  TO authenticated
  USING (has_role_on_account(account_id));
```

**Avoid SECURITY DEFINER** - use SECURITY INVOKER when possible.

## Permission Checks

**Team data access:**

```typescript
// Server-side
const hasAccess = await hasRoleOnAccount(accountId);

// RLS policy
USING (has_role_on_account(account_id))
```

**Specific permissions:**

```typescript
const canEdit = await hasPermission(
  user.id,
  accountId,
  'entity.update'
);
```

**Client-side (UI only, not security):**

```typescript
function EditButton() {
  const { account } = useTeamAccountWorkspace();
  if (!account.permissions.includes('entity.update')) return null;
  return <Button>Edit</Button>;
}
```

## Error Handling

**MUST NOT expose internal errors:**

```typescript
try {
  await sensitiveOperation();
} catch (error) {
  logger.error({ error }, 'Operation failed');
  return { error: 'Unable to complete operation' }; // Generic message
}
```

## Environment Variables

| Prefix | Visibility | Use For |
| --- | --- | --- |
| `NEXT_PUBLIC_*` | Client + Server | Public URLs, feature flags |
| No prefix | Server only | API keys, secrets, DB URLs |

**Incorrect:**

```typescript
// NEVER do this
<Component apiKey={process.env.SECRET_KEY} />
```

**Correct:**

```typescript
// Server-only usage
import 'server-only';
const secret = process.env.SECRET_KEY;
```

**MUST NOT:**

- Hardcode placeholder secrets, JWTs, or service-role keys as fallbacks in code, scripts, tests, or examples
- Use secret fallbacks like `process.env.SECRET_KEY || 'placeholder'` or `process.env.TOKEN ?? 'demo-value'`

**MUST:**

- Validate required secret env vars explicitly and fail fast when they are missing
- Reserve fallback defaults for non-sensitive local config only (for example localhost URLs or ports)

## OTP for Destructive Actions

Use one-time passwords for:

- Account deletion
- Ownership transfer
- Bulk data deletion

See `@kit/otp` package for implementation.