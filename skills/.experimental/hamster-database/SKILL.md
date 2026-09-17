---
name: hamster-database
description: "Supabase database patterns for Hamster Studio. Use when working with schemas, migrations, RLS policies, SQL functions, or database queries. Essential for any database-related work."
version: "1.1.0"
---

# Hamster Database Patterns

## Overview

Database conventions for the Hamster Studio multi-tenant SaaS. Covers Supabase schema design, RLS policies, migrations, and SQL functions.

## When to Apply

- Creating or modifying database tables
- Writing RLS policies
- Creating database functions or triggers
- Running migrations
- Writing SQL queries

## Quick Reference

| Task | Pattern | Reference |
| --- | --- | --- |
| Create table | Enable RLS, add `account_id`, use triggers | `references/rules/schema-patterns.md` |
| Add RLS policy | Use helper functions, test all operations | `references/rules/rls-policies.md` |
| Create migration | Use `supabase:db:diff`, never copy manually | `references/rules/migration-workflow.md` |
| Write function | SECURITY INVOKER, set `search_path = ''` | `references/rules/sql-functions.md` |
| SQL style | Lowercase keywords, snake_case names | `references/rules/sql-style-guide.md` |

## Core Architecture

### Multi-Tenant Data Model

```
accounts (personal + team)
    ↓ account_id FK
feature_tables (all user data)
    ↓ RLS policies
has_role_on_account() / has_permission()
```

**Rule**: ALL feature data MUST have `account_id` foreign key to `accounts`.

### RLS Helper Functions

| Function | Use Case | Example |
| --- | --- | --- |
| `has_role_on_account(account_id)` | Team membership | SELECT, basic access |
| `has_permission(user_id, account_id, permission)` | Specific capability | INSERT, UPDATE, DELETE |
| `is_account_owner(account_id)` | Owner-only actions | Destructive operations |

### Standard Table Template

```sql
create table if not exists public.my_feature (
  id uuid unique not null default extensions.uuid_generate_v4(),
  account_id uuid references public.accounts(id) on delete cascade not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  created_by uuid references auth.users(id),
  updated_by uuid references auth.users(id),
  -- feature columns
  primary key (id)
);

-- CRITICAL: Always enable RLS
alter table public.my_feature enable row level security;

-- Revoke defaults, grant specific
revoke all on public.my_feature from authenticated, service_role;
grant select, insert, update, delete on public.my_feature to authenticated;

-- Add standard triggers
create trigger set_timestamps
  before insert or update on public.my_feature
  for each row execute function public.trigger_set_timestamps();

create trigger set_user_tracking
  before insert or update on public.my_feature
  for each row execute function public.trigger_set_user_tracking();
```

## Migration Workflow (CRITICAL)

**ALWAYS** use the diff tool, never copy schema files:

```bash
# 1. Create/edit schema file
apps/web/supabase/schemas/NN-my-feature.sql

# 2. Reset database to apply schemas
pnpm supabase:web:reset

# 3. Generate migration from diff
pnpm --filter web supabase:db:diff -f my-feature-name

# 4. Generate TypeScript types
pnpm supabase:web:typegen
```

> Migration filenames follow `YYYYMMDDHHmmss_description.sql` in UTC. `db:diff` writes the prefix automatically; if a CI ordering check rejects your migration, rename with `date -u +%Y%m%d%H%M%S` (the `-u` flag is required). See `references/rules/migration-workflow.md`.

## RLS Policy Patterns

### Personal + Team Access (Most Common)

```sql
create policy "read" on public.my_feature for select
  to authenticated using (
    account_id = (select auth.uid()) or
    public.has_role_on_account(account_id)
  );
```

### Permission-Based Write

```sql
create policy "write" on public.my_feature for insert
  to authenticated with check (
    public.has_permission(auth.uid(), account_id, 'feature.manage'::app_permissions)
  );
```

### UPDATE Requires Both USING and WITH CHECK

```sql
create policy "update" on public.my_feature for update
  to authenticated
  using (public.has_permission(auth.uid(), account_id, 'feature.manage'::app_permissions))
  with check (public.has_permission(auth.uid(), account_id, 'feature.manage'::app_permissions));
```

## Function Security

```sql
create or replace function public.my_function(param uuid)
returns setof public.my_table
language plpgsql
security invoker  -- Inherit caller's RLS (preferred)
set search_path = ''  -- Prevent injection
as $$
begin
  return query select * from public.my_table where id = param;
end;
$$;

grant execute on function public.my_function(uuid) to authenticated;
```

**Rule**: Use `security definer` ONLY when bypassing RLS is necessary, with explicit auth checks.

## Data Access Patterns

Choose the right approach: **Queries** (default), **Views** (computed), or **Functions** (complex).

| Pattern | Use When | Maintenance Cost |
| --- | --- | --- |
| **Query** | Simple CRUD, FK relations, filters | Low (code change) |
| **View** | Read-only aggregations, UNIONs | Medium (migration) |
| **Function** | Atomic transactions, complex joins, business logic | High (migration) |

### Use Supabase Queries (Default)

Queries live in code, are easy to modify, and handle FK relationships automatically.

```typescript
// FK relationships work - no function needed
const { data } = await client
  .from('brief')
  .select(`*, document:document!inner(*)`)
  .eq('account_id', accountId);

// Join through FK for related data
const { data } = await client
  .from('task_dependencies')
  .select(`
    depends_on_task_id,
    tasks!task_dependencies_depends_on_task_id_fkey (id, title, status)
  `)
  .eq('task_id', taskId);
```

### Use Views

For read-only computed data, UNIONs, and pre-joined data.

> :warning: **CRITICAL: Views and RLS**
> 
> Views run with the privileges of the view *creator* by default, **bypassing RLS** on underlying tables. This is a major security risk that has caused data leaks.
> 
> **ALWAYS** use `security_invoker = true` on views to inherit the *caller's* RLS policies.

```sql
-- UNION of multiple sources
-- MUST use security_invoker to enforce RLS on underlying tables
create view public.waitlist_merged with (security_invoker = true) as
select ... from waitlist
union all
select ... from accounts where not exists (...);

-- Pre-joined workspace data
create view public.user_accounts with (security_invoker = true) as
select account.id, account.name, membership.account_role
from accounts account
join accounts_memberships membership on account.id = membership.account_id
where membership.user_id = auth.uid();
```

**Why `security_invoker = true` is mandatory:**

- Without it: View runs as creator → RLS bypassed → data leak
- With it: View runs as caller → RLS enforced → secure

### Use Functions

For atomic transactions, complex multi-table joins, or business logic.

```sql
-- Atomic multi-table update (status + positions must succeed together)
create function public.change_status_and_reorder(
  p_account_id uuid, p_task_id uuid, p_new_status text,
  p_task_updates jsonb, p_updated_by uuid
) returns void as $$
begin
  update tasks set status = p_new_status::task_status where id = p_task_id;
  for rec in select * from jsonb_array_elements(p_task_updates) loop
    update tasks set position = (rec ->> 'position')::integer
    where id = (rec ->> 'taskId')::uuid;
  end loop;
end;
$$ language plpgsql;
```

Call functions with `.rpc()`:

```typescript
const { data } = await client.rpc('reorder_briefs', {
  p_account_id: accountId,
  p_brief_id: briefId,
  p_new_position: newPosition,
});
```

### Decision Checklist

1. Can Supabase query builder express this? → **Use query**
2. Is it read-only aggregation/UNION? → **Use view**
3. Needs atomic multi-table updates? → **Use function**
4. Needs recursive CTEs or complex joins? → **Use function**
5. Enforces business invariants? → **Use function (often as trigger)**

**Default to queries. Functions require migrations to change—avoid overusing them.**

## Testing

For database testing patterns, see the [hamster-database-testing](../hamster-database-testing/SKILL.md) skill. It covers:

- **Vitest** — RLS policies, constraints (via Supabase client, multi-user scenarios)
- **pgTAP** — Triggers, functions, schema assertions (via SQL)

## Key Files

| File | Purpose |
| --- | --- |
| `apps/web/supabase/schemas/` | Schema definitions (numbered) |
| `apps/web/supabase/migrations/` | Generated migrations |
| `apps/web/supabase/CLAUDE.md` | Detailed database workflow |
| `packages/supabase/src/database.types.ts` | Generated TypeScript types |

## References

- `references/rules/rls-policies.md` - RLS policy guidelines and examples
- `references/rules/migration-workflow.md` - Migration file conventions
- `references/rules/schema-patterns.md` - Table creation patterns
- `references/rules/sql-functions.md` - Database function patterns
- `references/rules/sql-style-guide.md` - SQL naming and formatting
