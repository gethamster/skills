---
title: RLS Policies
tags: rls, security, authorization, supabase
---

# RLS Policy Guidelines

## Core Principles

1. **Always enable RLS** on every table in `public` schema
2. **Use helper functions** (`has_role_on_account`, `has_permission`) over raw queries
3. **Test all operations** - SELECT, INSERT, UPDATE, DELETE each need policies
4. **Optimize for performance** - Use subqueries, avoid joins in policies

## Helper Functions

### `has_role_on_account(account_id uuid)`

Returns TRUE if user has any role on the account (member, admin, owner).

```sql
-- Use for basic team access
using (public.has_role_on_account(account_id))
```

### `has_permission(user_id uuid, account_id uuid, permission app_permissions)`

Returns TRUE if user has the specific permission on the account.

```sql
-- Use for specific capabilities
using (public.has_permission(auth.uid(), account_id, 'notes.manage'::app_permissions))
```

### `is_account_owner(account_id uuid)`

Returns TRUE if user is the primary owner.

```sql
-- Use for owner-only operations
using (public.is_account_owner(account_id))
```

### `is_team_ai_user(user_id uuid, account_id uuid)`

Returns TRUE **only** when `user_id` is the synthetic AI agent account
bound to the given team `account_id`. Every team has exactly one AI
agent; background workers run under that identity via
`AiUserSessionProvider`. This is the predicate to reach for when a row
represents **trusted backend output that no human — admin included —**
**should be able to author directly**.

```sql
-- Gate writes to the AI session, per-tenant
with check (
  public.is_team_ai_user((select auth.uid()), account_id)
)
```

**When to use it**

- Rows are derived by a pipeline the tenant already authorized
  upstream (the dispatch endpoint, the OAuth connection flow) and the
  tenant must not be able to forge them post-hoc.
- Examples: `guest_participants` with `source='meeting_bot'`,
  calendar-sync attendee records, AI-generated activity summaries that
  other policies trust as evidence.

**When NOT to use it**

- Events that any team member should be able to create or observe
  through normal product flows. Plain `has_role_on_account` or
  permission-based gates still belong there.
- Rows that need to be authored by admins via a UI. Use
  `has_permission(..., 'settings.manage')` instead.
- Tables where the AI user is just another participant rather than
  the canonical producer — gating those on `is_team_ai_user` would
  lock humans out of their own data.

Pair it with a separate admin-gated policy when the same table also
stores human-authored rows (see pattern below).

## Policy Patterns

### Personal + Team Access (Most Common)

```sql
create policy "select" on public.notes for select
  to authenticated using (
    account_id = (select auth.uid()) or
    public.has_role_on_account(account_id)
  );
```

### Team-Only Access

```sql
create policy "select" on public.team_resources for select
  to authenticated using (
    public.has_role_on_account(account_id)
  );
```

### Permission-Based Write Access

```sql
create policy "insert" on public.notes for insert
  to authenticated with check (
    public.has_permission(auth.uid(), account_id, 'notes.manage'::app_permissions)
  );
```

### UPDATE Policies (Require Both Clauses)

```sql
create policy "update" on public.notes for update
  to authenticated
  using (public.has_permission(auth.uid(), account_id, 'notes.manage'::app_permissions))
  with check (public.has_permission(auth.uid(), account_id, 'notes.manage'::app_permissions));
```

**Why both?**

- `USING` - filters which rows can be selected for update
- `WITH CHECK` - validates the new row values

### DELETE Policies

```sql
create policy "delete" on public.notes for delete
  to authenticated using (
    public.has_permission(auth.uid(), account_id, 'notes.manage'::app_permissions)
  );
```

### AI-Derived vs Human-Authored Split (trusted backend output)

When a table mixes rows produced by a background pipeline (the AI
session) with rows a human deliberately creates, split the writes by
the column that distinguishes them — usually `source`.

```sql
-- Derived rows: only the per-team AI agent may write them.
create policy "AI can insert derived guests"
  on public.guest_participants for insert
  to authenticated with check (
    source in ('meeting_bot', 'calendar_sync')
    and public.is_team_ai_user((select auth.uid()), account_id)
  );

create policy "AI can update derived guests"
  on public.guest_participants for update
  to authenticated
  using (
    source in ('meeting_bot', 'calendar_sync')
    and public.is_team_ai_user((select auth.uid()), account_id)
  )
  with check (
    source in ('meeting_bot', 'calendar_sync')
    and public.is_team_ai_user((select auth.uid()), account_id)
  );

-- Manual rows: admins only (separate deliberate authorship).
create policy "Admins can insert manual guests"
  on public.guest_participants for insert
  to authenticated with check (
    source = 'manual'
    and public.has_permission(
      (select auth.uid()),
      account_id,
      'settings.manage'::public.app_permissions
    )
  );
```

This prevents two distinct failure modes:

1. Non-admin members forging "trusted system output" rows.
2. The worker session silently dropping writes when it lacks
  `settings.manage` (which it often does — AI agents run at
  creator-level, not admin-level).

## Performance Optimization

### Use Subqueries Over Functions

```sql
-- ✅ Good - Single subquery
using (account_id = (select auth.uid()))

-- ❌ Avoid - Function call in hot path
using (account_id = auth.uid())
```

### Index Foreign Keys

```sql
create index ix_notes_account_id on public.notes(account_id);
```

### Avoid Joins in Policies

```sql
-- ❌ Slow - Join in policy
using (
  exists (
    select 1 from public.memberships m
    join public.accounts a on m.account_id = a.id
    where m.user_id = auth.uid() and a.id = account_id
  )
)

-- ✅ Fast - Use helper function
using (public.has_role_on_account(account_id))
```

## Storage Bucket Policies

```sql
create policy "documents_policy" on storage.objects for all using (
  bucket_id = 'documents'
  and (
    kit.get_storage_filename_as_uuid(name) = auth.uid()
    or
    public.has_role_on_account(kit.get_storage_filename_as_uuid(name))
  )
)
with check (
  bucket_id = 'documents'
  and (
    kit.get_storage_filename_as_uuid(name) = auth.uid()
    or
    public.has_permission(
      auth.uid(),
      kit.get_storage_filename_as_uuid(name),
      'files.upload'::app_permissions
    )
  )
);
```

## Testing RLS Policies

```sql
-- Test as authenticated user
set role authenticated;
set request.jwt.claims to '{"sub": "user-uuid-here"}';

-- Run queries and verify access
select * from public.notes;

-- Reset
reset role;
reset request.jwt.claims;
```

## Views and RLS (CRITICAL)

Views bypass RLS by default because they run with the view creator's privileges.

### Always Use `security_invoker = true`

```sql
-- ✅ CORRECT - RLS enforced via caller's context
create view public.my_view with (security_invoker = true) as
select * from public.my_table;

-- ❌ DANGEROUS - Bypasses RLS on underlying tables
create view public.my_view as
select * from public.my_table;
```

### Why This Matters

Without `security_invoker = true`:

- View runs as the user who created it (often a superuser)
- RLS policies on underlying tables are completely bypassed
- Any authenticated user can see ALL data through the view

This pattern has caused data leaks in production.

### Auditing Existing Views

```sql
-- Find views missing security_invoker
select schemaname, viewname
from pg_views
where schemaname = 'public'
  and viewname not in (
    select c.relname from pg_class c
    join pg_reloptions_to_table(c.reloptions) r on true
    where r.option_name = 'security_invoker' and r.option_value = 'true'
  );
```

## Common Mistakes

1. **Forgetting to enable RLS** - Table is world-readable
2. **Missing WITH CHECK on UPDATE** - Updates may silently fail
3. **Using joins instead of helpers** - Performance degradation
4. **Not testing all operations** - INSERT/UPDATE/DELETE may be blocked
5. **Views without `security_invoker = true`** - Bypasses RLS entirely