---
title: SQL Functions
tags: functions, plpgsql, supabase, security
---

# Database Function Patterns

## Security Model

### SECURITY INVOKER (Preferred)

Functions inherit the caller's permissions. RLS policies apply automatically.

```sql
create or replace function public.get_account_notes(target_account_id uuid)
returns setof public.notes
language plpgsql
security invoker  -- RLS applies
set search_path = ''
as $$
begin
  -- Caller's RLS policies filter results
  return query
    select * from public.notes
    where account_id = target_account_id
    order by created_at desc;
end;
$$;

grant execute on function public.get_account_notes(uuid) to authenticated;
```

### SECURITY DEFINER (Use Sparingly)

Functions run with the owner's permissions, bypassing RLS. **Requires manual authorization.**

```sql
create or replace function public.create_team_account(account_name text)
returns public.accounts
language plpgsql
security definer  -- Bypasses RLS
set search_path = ''
as $$
declare
  new_account public.accounts;
begin
  -- CRITICAL: Validate permissions first
  if not public.is_set('enable_team_accounts') then
    raise exception 'Team accounts are not enabled';
  end if;

  if length(account_name) < 3 then
    raise exception 'Account name must be at least 3 characters';
  end if;

  -- Now safe to proceed with elevated privileges
  insert into public.accounts (name, is_personal_account)
  values (account_name, false)
  returning * into new_account;

  return new_account;
end;
$$;

grant execute on function public.create_team_account(text) to authenticated;
```

## Function Template

```sql
create or replace function public.function_name(
  param1 uuid,
  param2 text default null
)
returns return_type
language plpgsql
security invoker
set search_path = ''
as $$
declare
  result_var return_type;
begin
  -- Function body
  return result_var;
end;
$$;

-- Always grant to authenticated (or specific role)
grant execute on function public.function_name(uuid, text) to authenticated;
```

## Return Types

### Single Row

```sql
returns public.my_table
-- or
returns record
```

### Multiple Rows

```sql
returns setof public.my_table
-- or
returns table(id uuid, name text)
```

### Void (Side Effects Only)

```sql
returns void
```

### JSON

```sql
returns jsonb
```

## Common Patterns

### Upsert Function

```sql
create or replace function public.upsert_preference(
  p_user_id uuid,
  p_key text,
  p_value jsonb
)
returns public.user_preferences
language plpgsql
security invoker
set search_path = ''
as $$
declare
  result public.user_preferences;
begin
  insert into public.user_preferences (user_id, key, value)
  values (p_user_id, p_key, p_value)
  on conflict (user_id, key)
  do update set value = excluded.value, updated_at = now()
  returning * into result;

  return result;
end;
$$;
```

### Aggregation Function

```sql
create or replace function public.get_account_stats(p_account_id uuid)
returns jsonb
language plpgsql
security invoker
set search_path = ''
as $$
begin
  return jsonb_build_object(
    'total_projects', (select count(*) from public.projects where account_id = p_account_id),
    'active_tasks', (select count(*) from public.tasks where account_id = p_account_id and status = 'active'),
    'members', (select count(*) from public.memberships where account_id = p_account_id)
  );
end;
$$;
```

### Trigger Function

```sql
create or replace function public.trigger_set_timestamps()
returns trigger
language plpgsql
as $$
begin
  if TG_OP = 'INSERT' then
    new.created_at = now();
  end if;
  new.updated_at = now();
  return new;
end;
$$;
```

## Error Handling

```sql
create or replace function public.safe_operation(p_id uuid)
returns void
language plpgsql
security invoker
set search_path = ''
as $$
begin
  -- Validate input
  if p_id is null then
    raise exception 'ID cannot be null';
  end if;

  -- Check existence
  if not exists (select 1 from public.my_table where id = p_id) then
    raise exception 'Record not found: %', p_id;
  end if;

  -- Perform operation
  update public.my_table set status = 'processed' where id = p_id;

exception
  when others then
    -- Log error and re-raise
    raise warning 'Error in safe_operation: %', sqlerrm;
    raise;
end;
$$;
```

## Security Checklist

1. **Always set `search_path = ''`** - Prevents SQL injection via search path
2. **Prefer `security invoker`** - Let RLS handle authorization
3. **Validate inputs in `security definer`** - Manual auth checks required
4. **Grant to specific roles** - Don't use `public`
5. **Use `raise exception`** - Fail fast on invalid state