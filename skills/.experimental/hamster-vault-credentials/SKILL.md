---
name: hamster-vault-credentials
description: "Store and retrieve encrypted credentials using Supabase Vault. Use when implementing features that need secure credential storage such as API keys, OAuth tokens, or sensitive configuration. Triggers when adding credential storage to a feature, implementing OAuth flows, or storing user-provided secrets."
---

# Supabase Vault Credentials

Implement secure credential storage using Supabase Vault. This pattern is **framework-agnostic** - it works with any TypeScript environment that uses the Supabase client.

## Architecture

Credentials are stored **at runtime** when users provide them (OAuth flows, API key submission). The pattern:

1. Store secret in Vault → receive UUID reference
2. Store UUID in table's `*_secret_id` column
3. Never store actual credentials in regular tables

**Key principle**: Verify access BEFORE acquiring admin client, return `null` on failure (graceful degradation).

## Implementation Workflow

### 1. Gather Context

Ask the user:

- What feature needs credential storage? (e.g., "stripe", "github", "twilio")
- What type of credentials? (API key, OAuth tokens, etc.)
- Which table will reference the secret?

### 2. Add Table Column

In the schema file (`apps/web/supabase/schemas/XX-feature.sql`):

```sql
create table if not exists public.my_feature (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.accounts(id) on delete cascade,
  -- Vault reference - stores UUID pointing to encrypted secret
  credentials_secret_id uuid,
  created_at timestamptz default now() not null
);

comment on column public.my_feature.credentials_secret_id
  is 'UUID reference to vault.secrets for encrypted credentials';
```

### 3. Create Vault Helper Functions

Add to schema file. See [references/sql-functions.md](references/sql-functions.md) for complete templates.

Required functions:

- `store_[feature]_credentials(p_user_id, p_account_id, p_credential_data)` → returns UUID
- `get_[feature]_credentials(p_secret_id)` → returns decrypted text
- `delete_[feature]_credentials(p_secret_id)` → returns boolean

Grant execute to `service_role` only.

### 4. Core Pattern (Framework-Agnostic)

The vault pattern requires two Supabase clients:

- **RLS client**: For access verification and table operations
- **Admin client**: For vault operations (bypasses RLS)

```typescript
import type { SupabaseClient } from '@supabase/supabase-js';

/**
 * Store credentials in vault
 * Works with any Supabase client instance
 */
async function storeCredentials(
  client: SupabaseClient,      // RLS-enforced client
  adminClient: SupabaseClient, // Admin client for vault
  credentialData: string,
  userId: string,
  accountId: string,
): Promise<string | null> {
  // 1. Verify access via RLS client FIRST
  const { data: hasAccess } = await client.rpc('has_role_on_account', {
    account_id: accountId,
  });
  if (!hasAccess) return null;

  // 2. Store in vault via admin client
  const { data: secretId, error } = await adminClient.rpc('store_feature_credentials', {
    p_user_id: userId,
    p_account_id: accountId,
    p_credential_data: credentialData,
  });
  if (error) return null;

  return secretId;
}

/**
 * Retrieve decrypted credentials
 */
async function getCredentials(
  client: SupabaseClient,
  adminClient: SupabaseClient,
  secretId: string,
  accountId: string,
): Promise<string | null> {
  // Verify access first
  const { data: hasAccess } = await client.rpc('has_role_on_account', {
    account_id: accountId,
  });
  if (!hasAccess) return null;

  const { data, error } = await adminClient.rpc('get_feature_credentials', {
    p_secret_id: secretId,
  });
  if (error) return null;

  return data;
}

/**
 * Delete credentials from vault
 */
async function deleteCredentials(
  client: SupabaseClient,
  adminClient: SupabaseClient,
  secretId: string,
  accountId: string,
): Promise<boolean> {
  const { data: hasAccess } = await client.rpc('has_role_on_account', {
    account_id: accountId,
  });
  if (!hasAccess) return false;

  const { data, error } = await adminClient.rpc('delete_feature_credentials', {
    p_secret_id: secretId,
  });
  if (error) return false;

  return data ?? false;
}
```

### 5. Usage Example

```typescript
// Store credentials and save reference
const secretId = await storeCredentials(client, adminClient, apiKey, userId, accountId);
if (!secretId) throw new Error('Failed to store credentials');

// Save UUID reference in table (NOT the actual credential)
await client.from('my_feature').insert({
  account_id: accountId,
  credentials_secret_id: secretId,
});
```

### 6. Soft Delete Pattern

When deleting records:

1. Delete from vault first
2. Clear `credentials_secret_id` reference
3. Soft delete the record

```typescript
if (record.credentials_secret_id) {
  await deleteCredentials(client, adminClient, record.credentials_secret_id, accountId);
}
await softDelete(recordId);
```

## Client Separation Rule

| Operation | Client Type | RLS |
| --------- | ----------- | --- |
| Vault operations | Admin client | ❌ Manual auth required |
| Table CRUD | RLS client | ✅ Enforced |
| Access verification | RLS client | ✅ Uses `has_role_on_account` |

How to get these clients varies by framework - see [references/repository-pattern.md](references/repository-pattern.md) for Next.js and NestJS examples.

## Existing Examples

Reference these implementations:

- **SQL Functions**: `apps/web/supabase/schemas/25-context-connections.sql`, `apps/web/supabase/schemas/29-coding-agents.sql`
- **NestJS Repository**: `apps/ai/src/modules/coding-agent/repositories/agent-config.repository.ts`

## Security Checklist

- [ ] Vault functions use `security definer` with `set search_path = ''`
- [ ] Only `service_role` has execute permissions on vault functions
- [ ] Access verified via RLS client BEFORE acquiring admin client
- [ ] Vault operations return `null`/`false` on failure (graceful degradation)
- [ ] Actual credentials never stored in regular table columns
- [ ] Soft delete clears `credentials_secret_id` reference
