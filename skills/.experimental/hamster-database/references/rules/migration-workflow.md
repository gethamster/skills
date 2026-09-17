---
title: Migration Workflow
tags: migration, supabase, database, workflow
---

# Migration Workflow

## Critical Rule

**ALWAYS** use `supabase:db:diff` to generate migrations. NEVER manually copy schema files to migrations.

## Why Diff Instead of Copy?

- Ensures correct SQL formatting for Supabase
- Handles `CONCURRENTLY` indexes properly
- Captures constraints, triggers, and policies in correct order
- Validates the migration will actually work

## Standard Workflow

### 1. Create or Edit Schema File

```bash
# New feature
touch apps/web/supabase/schemas/NN-my-feature.sql

# Modify existing
edit apps/web/supabase/schemas/NN-existing.sql
```

**Schema file naming**: `NN-description.sql` (e.g., `25-activities.sql`)

### 2. Reset Database

```bash
pnpm supabase:web:reset
```

This applies all schemas to a fresh database, including your changes.

### 3. Generate Migration from Diff

```bash
pnpm --filter web supabase:db:diff -f my-feature-name
```

The diff tool compares:

- Shadow DB (from migrations) vs Local DB (from schemas)
- Outputs only the changes needed

### 4. Generate TypeScript Types

```bash
pnpm supabase:web:typegen
```

### 5. Review Migration for Missing Elements (CRITICAL)

The diff tool can miss critical elements. **Always compare the generated migration against your schema file** to verify nothing is missing:

- **Function grants** - `GRANT EXECUTE ON FUNCTION ... TO authenticated`
- **RLS policy grants** - Ensure policies are created
- **Trigger definitions** - Verify triggers are included
- **Index definitions** - Check indexes are present

### 6. If Revising Before Commit

Delete the generated migration and repeat from step 2:

```bash
rm apps/web/supabase/migrations/TIMESTAMP_my-feature-name.sql
# Make more schema changes
pnpm supabase:web:reset
pnpm --filter web supabase:db:diff -f my-feature-name
```

## Diff Tool Limitations (CRITICAL)

### Missing Function Grants

The diff tool sometimes omits `GRANT` statements for functions. After generating a migration, check that all grants from your schema are present:

```sql
-- Schema has this:
grant execute on function public.my_function(uuid) to authenticated;

-- Verify it appears in the migration!
```

### Enum Alterations Cause Data Loss

**WARNING**: When modifying enum types, the diff tool often generates migrations that DROP and RECREATE the enum column. This causes **data loss**.

```sql
-- ❌ WRONG - Diff tool may generate this (CAUSES DATA LOSS)
alter table public.my_table drop column status;
alter table public.my_table add column status new_enum_type;

-- ✅ CORRECT - Use ADD VALUE instead
alter type public.my_enum add value 'new_value';
```

**When adding enum values:**

1. Check the generated migration for any `DROP COLUMN` on enum columns
2. Replace with `ALTER TYPE ... ADD VALUE` statement
3. Note: `ADD VALUE` cannot run inside a transaction block in some cases

```sql
-- Adding a new enum value (safe)
alter type public.task_status add value 'cancelled';
commit; -- May be required outside transaction
```

## Migration File Guidelines

### File Naming

Generated migrations use a UTC timestamp prefix in `YYYYMMDDHHmmss_description.sql` format:

```
20241215123456_my-feature-name.sql
```

- **`db:diff` writes the prefix in UTC automatically** — you do not pick the timestamp yourself when creating a new migration.
- **MUST be UTC, never local time.** Local-time prefixes drift across contributors and collide when two PRs land in the same minute. The `.github/workflows/05-migration-order.yml` check enforces ordering against the base branch and will fail the PR if a new migration's timestamp is older than the latest on `dev`.
- **Renaming after an ordering failure:** regenerate the prefix with `date -u`, never bare `date`:

```bash
ts=$(date -u +%Y%m%d%H%M%S)
  git mv apps/web/supabase/migrations/<old>_my-feature.sql \
         apps/web/supabase/migrations/${ts}_my-feature.sql
```

  The `-u` flag is required — `date +%Y%m%d%H%M%S` returns local time and reproduces the drift the rule exists to prevent.

See `.cursor/rules/supabase/create-migration.mdc` for the canonical naming rule.

### Safe Patterns

```sql
-- Add nullable column (safe)
alter table public.accounts
add column if not exists description text;

-- Add column with default (safe)
alter table public.accounts
add column if not exists is_verified boolean default false not null;

-- Create index concurrently (safe for large tables)
create index concurrently if not exists ix_accounts_created_at
on public.accounts (created_at desc);
```

### Unsafe Patterns (Avoid)

```sql
-- ❌ Non-null without default (will fail if data exists)
alter table public.accounts add column required_field text not null;

-- ❌ Dropping columns with data
alter table public.accounts drop column important_data;
```

## Useful Commands

```bash
# View migration status
pnpm --filter web supabase migrations list

# Reset database completely
pnpm supabase:web:reset

# Apply pending migrations
pnpm --filter web supabase migrations up

# Generate types after migration
pnpm supabase:web:typegen
```

## Troubleshooting

### Migration fails on reset

1. Check for syntax errors in schema files
2. Verify dependency order (numbered files)
3. Check for circular references

### Diff generates unexpected changes

1. Ensure you reset before diffing
2. Check if manual changes were made to local DB
3. Verify schema files match intended state

### Types not updating

1. Run `pnpm supabase:web:typegen` after migrations
2. Restart TypeScript server in IDE
3. Check `packages/supabase/src/database.types.ts` updated