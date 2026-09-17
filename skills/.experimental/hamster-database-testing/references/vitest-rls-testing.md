# Vitest Database Testing (RLS & Constraints)

Use Vitest for testing **RLS policies and database constraints** via the Supabase client. For triggers, functions, and schema assertions, use [pgTAP](pgtap-testing.md) instead.

## Setup

### Prerequisites

- Local Supabase running: `pnpm supabase:web:start`
- Database reset with latest schema: `pnpm supabase:web:reset`

### Run Tests

```bash
pnpm --filter web test:db
```

### Configuration

- **Vitest config**: `apps/web/vitest.config.db.ts`
- **Env vars**: `apps/web/.env` (reuses the app's env file)
- **Setup file**: `apps/web/test/database/setup.ts`

## Helper API

### Client Factories (`helpers/client.ts`)

```typescript
import { createAdminClient, createAuthenticatedClient } from '../helpers/client';

// Admin client - bypasses RLS (for seed/cleanup)
const admin = createAdminClient();

// Authenticated client - enforces RLS
const ownerClient = await createAuthenticatedClient('owner@test.com', 'password');
```

### Seed Functions (`helpers/seed.ts`)

```typescript
import {
  createTestUser,
  createTestTeam,
  addTeamMember,
  seedAgentConfig,
  seedJob,
  seedJobRun,
  getAccountIdBySlug,
} from '../helpers/seed';

// Create users (admin API, email pre-confirmed)
const user = await createTestUser(admin, { email: 'user@test.com' });

// Create team (via authenticated client - user becomes owner)
await createTestTeam(ownerClient, 'MyTeam');

// Look up team account ID
const teamId = await getAccountIdBySlug(admin, 'myteam');

// Add member to team
await addTeamMember(admin, { accountId: teamId, userId: memberId });

// Seed agent data
await seedAgentConfig(authClient, { id: CONFIG_ID, accountId: teamId });
await seedJob(authClient, { id: JOB_ID, accountId: teamId, agentId: CONFIG_ID, type: 'agent_run' });
await seedJobRun(authClient, { id: JOB_RUN_ID, jobId: JOB_ID, accountId: teamId });
```

### Cleanup (`helpers/cleanup.ts`)

```typescript
import { cleanupTestData } from '../helpers/cleanup';

afterAll(() => {
  cleanupTestData({
    userEmails: [OWNER_EMAIL, MEMBER_EMAIL],
  });
});
```

## Test Patterns

### RLS Test Structure

```typescript
describe('table_name RLS policies', () => {
  describe('SELECT', () => {
    it('team owner can see rows', async () => {
      const { data, error } = await ownerClient.from('table').select('*').eq('id', ROW_ID);
      expect(error).toBeNull();
      expect(data).toHaveLength(1);
    });

    it('outsider cannot see rows', async () => {
      const { data, error } = await outsiderClient.from('table').select('*').eq('id', ROW_ID);
      expect(error).toBeNull();
      expect(data).toHaveLength(0); // RLS filters silently
    });
  });

  describe('INSERT', () => {
    it('outsider cannot insert', async () => {
      const { error } = await outsiderClient.from('table').insert({ ... });
      expect(error).not.toBeNull();
      expect(error!.code).toBe('42501'); // insufficient_privilege
    });
  });
});
```

### Constraint Test Structure

```typescript
describe('table_name constraints', () => {
  it('rejects FK violation', async () => {
    const { error } = await ownerClient.from('table').insert({ bad_fk: '...' });
    expect(error!.code).toBe('23503'); // foreign_key_violation
  });

  it('rejects CHECK violation', async () => {
    const { error } = await ownerClient.from('table').insert({ value: -1 });
    expect(error!.code).toBe('23514'); // check_violation
  });

  it('rejects unique violation', async () => {
    const { error } = await ownerClient.from('table').insert({ duplicate: '...' });
    expect(error!.code).toBe('23505'); // unique_violation
  });
});
```

## Test File Template

```typescript
import type { SupabaseClient } from '@supabase/supabase-js';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { Database } from '@kit/supabase/database';
import { cleanupTestData } from '../helpers/cleanup';
import { createAdminClient, createAuthenticatedClient } from '../helpers/client';
import { DEFAULT_PASSWORD, createTestUser, createTestTeam, addTeamMember, getAccountIdBySlug } from '../helpers/seed';

// Deterministic IDs
const CONFIG_ID = 'aX000000-0000-0000-0000-000000000001';
// ... more IDs

const EMAIL_PREFIX = 'xxx-yyy'; // unique per file
const OWNER_EMAIL = `${EMAIL_PREFIX}-owner@test.com`;

let adminClient: SupabaseClient<Database>;
// ... more state

beforeAll(async () => {
  adminClient = createAdminClient();
  // Create users, teams, seed data
});

afterAll(() => {
  cleanupTestData({ userEmails: [OWNER_EMAIL, MEMBER_EMAIL] });
});

describe('feature RLS', () => {
  // tests
});
```

## Conventions

- **Email prefix**: Unique per test file to avoid collisions (e.g., `rls-arj-owner@test.com`)
- **Deterministic UUIDs**: Use fixed UUIDs per file with distinct hex prefix (e.g., `a1000000-...` for file 1, `a2000000-...` for file 2)
- **Team names**: Unique per file (e.g., `RlsArjTestTeam`)

## Postgres Error Codes

| Code | Name | Use |
| --- | --- | --- |
| `23503` | foreign_key_violation | FK constraint fails |
| `23505` | unique_violation | Unique/PK constraint fails |
| `23514` | check_violation | CHECK constraint fails |
| `42501` | insufficient_privilege | RLS policy blocks access |

## Troubleshooting

| Issue | Solution |
| --- | --- |
| Tests fail with "relation does not exist" | Run `pnpm supabase:web:reset` |
| Leftover data from previous run | Run `pnpm supabase:web:reset` or run tests again (cleanup runs first) |
| Auth errors on createAuthenticatedClient | Ensure user was created with `email_confirm: true` |
| Member can't see team data | Re-create auth client after `addTeamMember` (JWT needs refresh) |
| Timeout on beforeAll | Increase `hookTimeout` in vitest config or check Supabase is running |