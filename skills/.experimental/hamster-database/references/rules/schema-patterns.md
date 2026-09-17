---
title: Schema Patterns
tags: schema, tables, database, supabase
---

# Schema Patterns

## Standard Table Template

Every feature table should follow this template:

```sql
create table if not exists public.my_feature (
  -- Primary key
  id uuid unique not null default extensions.uuid_generate_v4(),

  -- Multi-tenant foreign key (REQUIRED)
  account_id uuid references public.accounts(id) on delete cascade not null,

  -- Audit columns
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  created_by uuid references auth.users(id),
  updated_by uuid references auth.users(id),

  -- Feature-specific columns
  title text not null,
  description text,
  status text default 'draft' not null,

  primary key (id)
);

-- CRITICAL: Enable RLS
alter table public.my_feature enable row level security;

-- Revoke default permissions
revoke all on public.my_feature from authenticated, service_role;

-- Grant specific permissions
grant select, insert, update, delete on table public.my_feature to authenticated;

-- Add audit triggers
create trigger set_timestamps
  before insert or update on public.my_feature
  for each row execute function public.trigger_set_timestamps();

create trigger set_user_tracking
  before insert or update on public.my_feature
  for each row execute function public.trigger_set_user_tracking();
```

## Required Elements

### 1. Multi-Tenant Foreign Key

```sql
account_id uuid references public.accounts(id) on delete cascade not null,
```

**Rule**: ALL feature data MUST reference `accounts`. This enables RLS with `has_role_on_account()`.

### 2. Row Level Security

```sql
alter table public.my_feature enable row level security;
```

**Never skip this.** Tables without RLS are world-readable.

### 3. Explicit Grants

```sql
revoke all on public.my_feature from authenticated, service_role;
grant select, insert, update, delete on table public.my_feature to authenticated;
```

### 4. Audit Triggers (When Applicable)

Only add if the table has the corresponding columns:

| Trigger | Required Columns |
| --- | --- |
| `trigger_set_timestamps` | `created_at`, `updated_at` |
| `trigger_set_user_tracking` | `created_by`, `updated_by` |

## Column Patterns

### UUIDs

```sql
-- Primary key
id uuid unique not null default extensions.uuid_generate_v4(),

-- Foreign key
parent_id uuid references public.parent_table(id) on delete cascade,
```

### Timestamps

```sql
created_at timestamptz default now() not null,
updated_at timestamptz default now() not null,
expires_at timestamptz,
```

### Status/Type Columns

```sql
-- Use check constraint for fixed values
status text not null default 'draft'
  check (status in ('draft', 'active', 'archived')),

-- Or reference an enum
status public.feature_status not null default 'draft',
```

### JSON Columns

```sql
-- Structured metadata
metadata jsonb default '{}'::jsonb not null,

-- With specific schema validation
config jsonb not null
  check (jsonb_typeof(config) = 'object'),
```

## Relationships

### One-to-Many

```sql
-- Parent table
create table public.projects (
  id uuid primary key default extensions.uuid_generate_v4(),
  account_id uuid references public.accounts(id) on delete cascade not null
);

-- Child table
create table public.tasks (
  id uuid primary key default extensions.uuid_generate_v4(),
  project_id uuid references public.projects(id) on delete cascade not null,
  account_id uuid references public.accounts(id) on delete cascade not null
);
```

### Many-to-Many

```sql
create table public.project_members (
  project_id uuid references public.projects(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  role text not null default 'member',
  primary key (project_id, user_id)
);
```

## Indexes

```sql
-- Foreign key index (recommended)
create index ix_tasks_project_id on public.tasks(project_id);

-- Compound index for common queries
create index ix_tasks_project_status on public.tasks(project_id, status);

-- Partial index for filtered queries
create index ix_tasks_active on public.tasks(project_id)
  where status = 'active';
```

## Adding Permissions

If your feature needs custom permissions:

```sql
-- Add to the enum (requires COMMIT in transaction)
alter type public.app_permissions add value 'my_feature.manage';
commit;
```

Then reference in RLS policies:

```sql
using (public.has_permission(auth.uid(), account_id, 'my_feature.manage'::app_permissions))
```