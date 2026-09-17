# pgTAP Testing Patterns

Use pgTAP for testing **triggers, functions, schema shape, and RPC functions**. For RLS policy and constraint testing, use [Vitest](vitest-rls-testing.md) instead.

## Test File Template

```sql
BEGIN;
create extension "basejump-supabase_test_helpers" version '0.0.6';

select no_plan();

-- Create test users
select tests.create_supabase_user('owner1', 'owner1@test.com');
select tests.create_supabase_user('member1', 'member1@test.com');
select tests.create_supabase_user('outsider1', 'outsider1@test.com');

-- Set up test data as authenticated user
select makerkit.authenticate_as('owner1');
select public.create_team_account('TestTeam');

-- Add members as postgres (bypasses RLS)
set local role postgres;
insert into public.accounts_memberships (account_id, user_id, account_role)
values (makerkit.get_account_id_by_slug('testteam'), tests.get_supabase_uid('member1'), 'member');

-- Test as different users
select makerkit.authenticate_as('owner1');
-- assertions here...

select makerkit.authenticate_as('outsider1');
-- assertions here...

select * from finish();
ROLLBACK;
```

## Key Patterns

### Schema Assertions

```sql
select has_table('public', 'my_table', 'table should exist');
select has_column('public', 'my_table', 'status', 'should have status column');
select has_function('public', 'my_function', 'function should exist');
select tests.rls_enabled('public', 'my_table');
```

### Testing RLS (Allow / Deny)

```sql
-- RLS allows access
select isnt_empty(
    $$ SELECT * FROM public.my_table WHERE account_id = '...' $$,
    'User should see records they have access to'
);

select lives_ok(
    $$ INSERT INTO public.my_table (col) VALUES ('val') $$,
    'User should be able to insert'
);

-- RLS denies access
select is_empty(
    $$ SELECT * FROM public.my_table WHERE account_id = '...' $$,
    'Outsider should not see records'
);

select throws_ok(
    $$ INSERT INTO public.my_table (col) VALUES ('val') $$,
    '42501',
    'new row violates row-level security policy',
    'Outsider should be blocked by RLS'
);
```

### Testing RPC Functions

```sql
-- Authorized user succeeds
select makerkit.authenticate_as('owner1');
select lives_ok(
    $$ SELECT public.my_rpc_function('arg1', 'arg2') $$,
    'Authorized user can call RPC'
);

-- Unauthorized user fails
select makerkit.authenticate_as('outsider1');
select throws_ok(
    $$ SELECT public.my_rpc_function('arg1', 'arg2') $$,
    'Access denied: not a thread participant',
    'Unauthorized user gets custom error from RPC'
);
```

### Testing Silent RLS Failures (UPDATE/DELETE)

RLS on UPDATE/DELETE silently skips rows rather than throwing. Verify the data is unchanged:

```sql
select makerkit.authenticate_as('outsider1');
select lives_ok(
    $$ UPDATE public.my_table SET name = 'hacked' WHERE id = '...' $$,
    'Update attempt should not crash'
);
-- Verify data unchanged
select makerkit.authenticate_as('owner1');
select row_eq(
    $$ SELECT name FROM public.my_table WHERE id = '...' $$,
    row('original_name'::varchar),
    'Name should be unchanged after unauthorized update'
);
```

### Escalating to Postgres for Setup

```sql
set local role postgres;
-- Direct inserts that bypass RLS for test setup
insert into public.my_table (...) values (...);
-- Then switch back to test user
select makerkit.authenticate_as('test_user');
```

## Debugging security invoker vs definer

When a direct insert works but the RPC fails with RLS error:

1. **security invoker**: RLS applies to all queries inside the function. The INSERT inside the function hits the same RLS policy as a direct insert, but the function's preceding queries may also be affected by RLS visibility.
2. **security definer**: Bypasses RLS entirely. Queries run as the function owner (usually postgres).
3. **Common trap**: A security invoker function that calls a security definer helper — the definer call bypasses RLS, but subsequent operations back in the invoker context still have RLS applied.

Write tests that isolate each path to pinpoint where RLS blocks.