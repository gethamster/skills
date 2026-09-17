---
title: SQL Style Guide
tags: sql, style, naming, formatting
---

# SQL Style Guide

## Naming Conventions

### Tables

```sql
-- ✅ Correct: snake_case, plural
public.user_profiles
public.team_memberships
public.project_tasks

-- ❌ Incorrect
public.UserProfiles    -- PascalCase
public.user_profile    -- Singular
public.tbl_users       -- Hungarian notation
```

### Columns

```sql
-- ✅ Correct: snake_case
id
account_id
created_at
is_active
total_count

-- ❌ Incorrect
userId          -- camelCase
CreatedAt       -- PascalCase
IsActive        -- PascalCase
```

### Primary Keys

```sql
-- ✅ Use 'id' for primary key
id uuid primary key default extensions.uuid_generate_v4()

-- ❌ Avoid table_name_id pattern
user_id uuid primary key  -- Only for foreign keys
```

### Foreign Keys

```sql
-- ✅ Correct: referenced_table_id (singular)
account_id uuid references public.accounts(id)
project_id uuid references public.projects(id)
created_by uuid references auth.users(id)

-- ❌ Incorrect
accounts_id     -- Plural
proj_id         -- Abbreviated
fk_account      -- Prefixed
```

### Indexes

```sql
-- ✅ Pattern: ix_table_column(s)
create index ix_tasks_project_id on public.tasks(project_id);
create index ix_tasks_status_created on public.tasks(status, created_at);

-- ❌ Incorrect
create index tasks_project_id_index on public.tasks(project_id);
create index idx_1 on public.tasks(project_id);
```

### Constraints

```sql
-- ✅ Pattern: table_column_constraint
constraint tasks_status_check check (status in ('draft', 'active'))
constraint memberships_user_account_unique unique (user_id, account_id)

-- ❌ Incorrect
constraint chk_status check (status in ('draft', 'active'))
```

## Keyword Casing

Use **lowercase** for all SQL keywords:

```sql
-- ✅ Correct: lowercase keywords
select id, name, created_at
from public.projects
where account_id = '...'
order by created_at desc;

-- ❌ Incorrect: uppercase keywords
SELECT id, name, created_at
FROM public.projects
WHERE account_id = '...'
ORDER BY created_at DESC;
```

## Formatting

### SELECT Statements

```sql
-- Simple query
select id, name from public.projects where id = '...';

-- Complex query (one clause per line)
select
  p.id,
  p.name,
  p.status,
  count(t.id) as task_count
from public.projects p
left join public.tasks t on t.project_id = p.id
where p.account_id = '...'
  and p.status = 'active'
group by p.id
order by p.created_at desc
limit 10;
```

### INSERT Statements

```sql
insert into public.projects (
  account_id,
  name,
  description,
  status
)
values (
  '...',
  'Project Name',
  'Description here',
  'draft'
)
returning *;
```

### UPDATE Statements

```sql
update public.projects
set
  name = 'New Name',
  status = 'active',
  updated_at = now()
where id = '...'
returning *;
```

### CREATE TABLE

```sql
create table if not exists public.my_table (
  id uuid unique not null default extensions.uuid_generate_v4(),
  account_id uuid references public.accounts(id) on delete cascade not null,
  name text not null,
  description text,
  status text default 'draft' not null,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  primary key (id)
);
```

### Policies

```sql
create policy "descriptive_name" on public.my_table
  for select
  to authenticated
  using (
    account_id = (select auth.uid())
    or public.has_role_on_account(account_id)
  );
```

## Type Conventions

| Data Type | Use Case |
| --- | --- |
| `uuid` | Primary keys, foreign keys |
| `text` | Variable-length strings |
| `timestamptz` | All timestamps (timezone-aware) |
| `boolean` | True/false flags |
| `jsonb` | Structured metadata |
| `integer` | Counts, quantities |
| `numeric(p,s)` | Money, precise decimals |

### Avoid

- `varchar(n)` - Use `text` with check constraints if needed
- `timestamp` - Use `timestamptz` for timezone awareness
- `char(n)` - Use `text`
- `json` - Use `jsonb` (faster, indexable)

## Boolean Columns

```sql
-- ✅ Correct: is_ or has_ prefix
is_active boolean default true not null
is_deleted boolean default false not null
has_children boolean default false not null

-- ❌ Incorrect
active boolean      -- Ambiguous
deleted boolean     -- Ambiguous
```

## Comments

```sql
-- Table comment
comment on table public.projects is 'Stores project information for team accounts';

-- Column comment
comment on column public.projects.status is 'Project lifecycle status: draft, active, archived';
```