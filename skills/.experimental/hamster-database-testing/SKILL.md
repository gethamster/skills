---
name: hamster-database-testing
description: "Database testing patterns for Hamster Studio. Covers both Vitest (RLS policies, constraints via Supabase client) and pgTAP (triggers, functions, schema assertions via SQL). Use when writing, reviewing, or debugging any database test — this skill helps you pick the right tool."
version: "1.1.0"
---

# Hamster Database Testing

## Vitest or pgTAP? Pick the Right Tool

| Use Vitest (TypeScript) | Use pgTAP (SQL) |
| --- | --- |
| RLS policy enforcement (SELECT/INSERT/UPDATE/DELETE) | Schema assertions (table/column/index exists) |
| Multi-user access scenarios (owner/member/outsider) | Trigger logic verification |
| Constraint violations via Supabase client | PL/pgSQL function behavior |
| Integration with TypeScript types | RPC function testing (security invoker/definer) |
| Tests that benefit from typed `@kit/supabase/database` | Complex SQL query result verification |

**Rule of thumb**: If the test impersonates different users to verify access control, use **Vitest**. If the test checks SQL internals (triggers, functions, schema shape, RPC), use **pgTAP**.

## Quick Reference

| Task | Tool | Reference |
| --- | --- | --- |
| Test RLS policies (SELECT/INSERT/UPDATE/DELETE) | Vitest | [vitest-rls-testing.md](references/vitest-rls-testing.md) |
| Test FK/CHECK/UNIQUE constraints | Vitest | [vitest-rls-testing.md](references/vitest-rls-testing.md) |
| Test triggers, functions, schema shape | pgTAP | [pgtap-testing.md](references/pgtap-testing.md) |
| Test RPC functions under user contexts | pgTAP | [pgtap-testing.md](references/pgtap-testing.md) |
| pgTAP assertion reference | pgTAP | [pgtap-assertion-patterns.md](references/pgtap-assertion-patterns.md) |
| Basejump test helper API | pgTAP | [pgtap-basejump-api.md](references/pgtap-basejump-api.md) |
| Makerkit project helpers | pgTAP | [pgtap-project-helpers.md](references/pgtap-project-helpers.md) |

## Commands

```bash
# Vitest database tests (RLS, constraints)
pnpm --filter web test:db

# pgTAP database tests (triggers, functions, schema)
pnpm --filter web supabase:test
```

## Prerequisites

- Local Supabase running: `pnpm supabase:web:start`
- Database reset with latest schema: `pnpm supabase:web:reset`

## File Organization

```
apps/web/
├── test/database/                  # Vitest tests
│   ├── setup.ts                    # Loads env, validates vars
│   ├── helpers/
│   │   ├── exec-sql.ts             # Raw SQL execution via psql
│   │   ├── client.ts               # Admin & authenticated client factories
│   │   ├── seed.ts                 # User, team, data seeding
│   │   └── cleanup.ts              # Best-effort cleanup
│   ├── rls/
│   │   └── *.test.ts               # RLS policy tests
│   └── constraints/
│       └── *.test.ts               # FK, CHECK, unique constraint tests
├── supabase/tests/database/        # pgTAP tests
│   ├── 00000-makerkit-helpers.sql  # Shared helpers (auto-loaded first)
│   └── *.test.sql                  # Test files
└── vitest.config.db.ts             # Vitest config for database tests
```

## Vitest Patterns (RLS & Constraints)

### Test Structure

```typescript
import type { SupabaseClient } from '@supabase/supabase-js';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import type { Database } from '@kit/supabase/database';
import { cleanupTestData } from '../helpers/cleanup';
import { createAdminClient, createAuthenticatedClient } from '../helpers/client';
import { DEFAULT_PASSWORD, createTestUser, createTestTeam, getAccountIdBySlug } from '../helpers/seed';

const EMAIL_PREFIX = 'xxx-yyy'; // unique per file
const OWNER_EMAIL = `${EMAIL_PREFIX}-owner@test.com`;

let adminClient: SupabaseClient<Database>;
let ownerClient: SupabaseClient<Database>;

beforeAll(async () => {
  adminClient = createAdminClient();
  await createTestUser(adminClient, { email: OWNER_EMAIL });
  ownerClient = await createAuthenticatedClient(OWNER_EMAIL, DEFAULT_PASSWORD);
  // Create teams, seed data...
});

afterAll(() => {
  cleanupTestData({ userEmails: [OWNER_EMAIL] });
});
```

### RLS Assertions

```typescript
// SELECT: owner sees data
const { data, error } = await ownerClient.from('table').select('*').eq('id', ID);
expect(error).toBeNull();
expect(data).toHaveLength(1);

// SELECT: outsider sees nothing (RLS filters silently)
const { data, error } = await outsiderClient.from('table').select('*').eq('id', ID);
expect(error).toBeNull();
expect(data).toHaveLength(0);

// INSERT: outsider blocked
const { error } = await outsiderClient.from('table').insert({ ... });
expect(error).not.toBeNull();
expect(error!.code).toBe('42501'); // insufficient_privilege
```

### Constraint Assertions

```typescript
expect(error!.code).toBe('23503'); // foreign_key_violation
expect(error!.code).toBe('23505'); // unique_violation
expect(error!.code).toBe('23514'); // check_violation
```

## pgTAP Patterns (Triggers, Functions, Schema)

### Test Structure

```sql
BEGIN;
create extension "basejump-supabase_test_helpers" version '0.0.6';
select no_plan();

select tests.create_supabase_user('owner1', 'owner1@test.com');
select makerkit.authenticate_as('owner1');
select public.create_team_account('TestTeam');

-- assertions...

select * from finish();
ROLLBACK;
```

### Common Assertions

```sql
-- Schema exists
select has_table('public', 'my_table', 'table should exist');
select has_column('public', 'my_table', 'status', 'should have status column');

-- RLS is enabled
select tests.rls_enabled('public', 'my_table');

-- Trigger fires correctly
set local role postgres;
insert into public.my_table (...) values (...);
select is(
    (select updated_at from public.my_table where id = '...'),
    now(),
    'Trigger should set updated_at'
);

-- Function returns expected result
select row_eq(
    $$ SELECT public.my_function('arg') $$,
    row('expected'::text),
    'Function should return expected value'
);
```

## Naming Conventions

- **Vitest email prefix**: Unique per test file (e.g., `rls-arj-owner@test.com`)
- **Vitest UUIDs**: Deterministic per file with distinct hex prefix (`a1000000-...`, `a2000000-...`)
- **Vitest team names**: Unique per file (e.g., `RlsArjTestTeam`)
- **pgTAP user identifiers**: Short descriptive names (`owner1`, `member1`, `outsider1`)

## Postgres Error Codes

| Code | Name | Use |
| --- | --- | --- |
| `23503` | foreign_key_violation | FK constraint fails |
| `23505` | unique_violation | Unique/PK constraint fails |
| `23514` | check_violation | CHECK constraint fails |
| `42501` | insufficient_privilege | RLS policy blocks access |
| `P0001` | raise_exception | Custom RAISE from function |

## Troubleshooting

| Issue | Solution |
| --- | --- |
| "relation does not exist" | Run `pnpm supabase:web:reset` |
| Leftover data from previous run | Run `pnpm supabase:web:reset` or re-run tests |
| Auth errors on createAuthenticatedClient | Ensure user was created with `email_confirm: true` |
| Member can't see team data | Re-create auth client after `addTeamMember` (JWT needs refresh) |
| Timeout on beforeAll | Increase `hookTimeout` in vitest config or check Supabase is running |
| Direct insert works but RPC fails | Check security invoker vs definer — see [pgtap-testing.md](references/pgtap-testing.md) |

## Key Files

| File | Purpose |
| --- | --- |
| `apps/web/vitest.config.db.ts` | Vitest config for database tests |
| `apps/web/test/database/setup.ts` | Vitest setup (env loading) |
| `apps/web/test/database/helpers/` | Vitest seed/cleanup/client helpers |
| `apps/web/supabase/tests/database/` | pgTAP test files |
| `.github/workflows/02-test.yml` | CI (database job) |
