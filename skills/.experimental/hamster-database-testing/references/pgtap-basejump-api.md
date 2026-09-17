# Basejump Test Helpers API

Extension: `basejump-supabase_test_helpers` version `0.0.6`

Load in every test file:

```sql
create extension "basejump-supabase_test_helpers" version '0.0.6';
```

## User Management

### tests.create_supabase_user

```sql
tests.create_supabase_user(
  identifier text,
  email text default null,
  phone text default null,
  metadata jsonb default null
) RETURNS uuid
```

Create a test user in `auth.users`. The `identifier` is used to reference the user later. Email defaults to `{identifier}@test.com` if not provided.

```sql
select tests.create_supabase_user('alice', 'alice@example.com');
select tests.create_supabase_user('bob');  -- email: bob@test.com
select tests.create_supabase_user('agent', metadata := '{"role": "ai"}'::jsonb);
```

### tests.get_supabase_uid

```sql
tests.get_supabase_uid(identifier text) RETURNS uuid
```

Get the UUID of a user created with `create_supabase_user`.

```sql
select tests.get_supabase_uid('alice');  -- returns uuid
```

### tests.get_supabase_user

```sql
tests.get_supabase_user(identifier text) RETURNS json
```

Get full user record as JSON.

## Authentication

### tests.authenticate_as

```sql
tests.authenticate_as(identifier text) RETURNS void
```

Set the current session to act as the specified user. Sets `request.jwt.claims` and role to `authenticated`. All subsequent queries run under this user's RLS context.

```sql
select tests.authenticate_as('alice');
-- now auth.uid() returns alice's UUID
-- RLS policies evaluate against alice
```

### tests.authenticate_as_service_role

```sql
tests.authenticate_as_service_role() RETURNS void
```

Set role to `service_role` and clear authentication claims. Use for testing service-role access patterns.

### tests.clear_authentication

```sql
tests.clear_authentication() RETURNS void
```

Clear authentication and set role to `anon`. Use for testing unauthenticated access.

## RLS Verification

### tests.rls_enabled

```sql
-- Check all tables in a schema
tests.rls_enabled(testing_schema text) RETURNS text

-- Check a specific table
tests.rls_enabled(testing_schema text, testing_table text) RETURNS text
```

pgTAP assertion that verifies RLS is enabled.

```sql
select tests.rls_enabled('public');
select tests.rls_enabled('public', 'threads');
```

## Time Control

### tests.freeze_time

```sql
tests.freeze_time(frozen_time timestamptz) RETURNS void
```

Override `now()` to return a fixed time. Useful for testing time-dependent logic.

```sql
select tests.freeze_time('2024-01-01 12:00:00+00');
-- now() returns '2024-01-01 12:00:00+00' everywhere
```

### tests.unfreeze_time

```sql
tests.unfreeze_time() RETURNS void
```

Restore normal `now()` behavior.