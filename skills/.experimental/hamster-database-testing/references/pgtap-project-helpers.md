# Project Helpers (Makerkit)

Defined in `apps/web/supabase/tests/database/00000-makerkit-helpers.sql`.
Loaded automatically before test files (alphabetical ordering via `00000-` prefix).

## makerkit.authenticate_as

```sql
makerkit.authenticate_as(identifier text) RETURNS void
```

Wraps `tests.authenticate_as` and also sets session AAL to `aal1`.
**Always use this instead of `tests.authenticate_as` directly** - it ensures MFA session state is correct.

```sql
select makerkit.authenticate_as('alice');
```

## makerkit.get_id_by_identifier

```sql
makerkit.get_id_by_identifier(identifier text) RETURNS uuid
```

Look up user ID from the `test_identifier` in `auth.users.raw_user_meta_data`.

## makerkit.get_account_by_slug

```sql
makerkit.get_account_by_slug(account_slug text) RETURNS setof accounts
```

Get account record(s) by slug.

```sql
select * from makerkit.get_account_by_slug('testteam');
```

## makerkit.get_account_id_by_slug

```sql
makerkit.get_account_id_by_slug(account_slug text) RETURNS uuid
```

Get just the account UUID by slug. Most common helper for setting up test data.

```sql
-- Use in INSERT statements for test setup
insert into public.some_table (account_id, ...)
values (makerkit.get_account_id_by_slug('testteam'), ...);
```

## makerkit.set_session_aal

```sql
makerkit.set_session_aal(session_aal auth.aal_level) RETURNS void
```

Set the session's AAL (Authentication Assurance Level). Called automatically by `makerkit.authenticate_as` with `aal1`.

## makerkit.set_mfa_factor

```sql
makerkit.set_mfa_factor(identifier text default gen_random_uuid()) RETURNS void
```

Add a verified MFA factor for the current user. Use when testing MFA-gated functionality.

```sql
select makerkit.authenticate_as('alice');
select makerkit.set_mfa_factor();
select makerkit.set_session_aal('aal2');
-- Now alice has MFA-verified session
```

## makerkit.set_super_admin

```sql
makerkit.set_super_admin() RETURNS void
```

Set the current user's `app_metadata.role` to `super-admin`. Use when testing super-admin-only functionality.

```sql
select makerkit.authenticate_as('admin_user');
select makerkit.set_super_admin();
-- Now public.is_super_admin() returns true
```

## Common Test Setup Pattern

```sql
-- 1. Create users
select tests.create_supabase_user('owner', 'owner@test.com');
select tests.create_supabase_user('member', 'member@test.com');
select tests.create_supabase_user('outsider', 'outsider@test.com');

-- 2. Create team account (as owner)
select makerkit.authenticate_as('owner');
select public.create_team_account('MyTeam');

-- 3. Add members (as postgres to bypass RLS)
set local role postgres;
insert into public.accounts_memberships (account_id, user_id, account_role)
values (makerkit.get_account_id_by_slug('myteam'), tests.get_supabase_uid('member'), 'member');

-- 4. Create feature-specific data (as postgres)
insert into public.threads (id, title, account_id, created_by, status)
values (
    'aaaaaaaa-0000-0000-0000-000000000001',
    'Test Thread',
    makerkit.get_account_id_by_slug('myteam'),
    tests.get_supabase_uid('owner'),
    'active'
);

-- 5. Switch to test user context
select makerkit.authenticate_as('member');
-- Run assertions...
```