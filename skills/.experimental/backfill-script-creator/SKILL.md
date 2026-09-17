---
name: backfill-script-creator
description: "Create a new Supabase data backfill, dedup, or one-off data correction script for Hamster Studio in apps/web/supabase/scripts/. Use whenever the user asks for a backfill script, data migration script, dedup script, one-off data fix, repair job, or anything that needs to mutate production data outside of a regular schema migration. Provides a battle-tested template with dry-run-by-default safety, paginated reads, chunked writes, append-only audit logging, and auto-generated rollback SQL. Trigger even if the user only says 'I need to fix some bad rows in production' or 'we need to fill in this column for all existing accounts' — those are exactly the situations this skill exists for."
---

# Backfill Script Creator

## What this skill is for

Backfills are the riskiest scripts in the codebase. They run against production data, often touch every row in a table, and a bug can corrupt or delete data with no automatic rollback. This skill captures the patterns from `apps/web/supabase/scripts/backfill-initiative-briefs.ts` (hardened in #1687) so every new backfill inherits the same safety rails:

- **Dry-run by default** — no mutation can happen without an explicit `--execute` flag and an interactive `execute` confirmation typed at the prompt
- **Paginated reads** — Supabase silently caps `select` at 1000 rows; full-table scans MUST page through `range()`
- **Chunked writes** — bulk inserts split into batches so a single failure doesn't take down the whole run
- **Append-only audit log** — every mutation is recorded to a JSONL file with row snapshots
- **Auto-generated rollback SQL** — execute-mode runs produce a `*.rollback.sql` file with reverse statements wrapped in `BEGIN`/`COMMIT`
- **Colocated env** — secrets loaded from a `.env.<script-name>` file next to the script, generated from a 1Password template

If the user is writing a script that mutates production data, this skill applies. The template handles ~80% of the boilerplate; the user only fills in the read queries and the mutation steps.

## Workflow

Follow these steps in order. Each is a checkpoint — confirm the previous one is sound before moving on.

### 1. Gather requirements

Before touching any code, get these from the user (or read them from a Linear ticket if linked):

- **Goal** — what state do we want the data in after the run?
- **Tables affected** — read sources and write targets
- **Read shape** — how do we identify candidate rows? (e.g., `where x is null`, `where created_at < ...`)
- **Mutation plan** — for each step, is it `insert`, `update`, or `delete`?
- **Idempotency** — can the script be safely re-run? (it should be — design for it)
- **Account scoping** — does this need to respect `account_id` boundaries, or is it cross-tenant?
- **Validation** — how will we know it worked? (count queries, spot checks, downstream feature behaviour)

If anything is unclear, ask before scaffolding. A backfill written against the wrong understanding of the schema is worse than no backfill.

### 2. Scaffold from the template

Copy the template assets into place. The script lives next to the existing backfills so it inherits gitignore rules, env loading conventions, and the `logs/` directory:

```bash
# from repo root
cp .agents/skills/backfill-script-creator/assets/backfill-template.ts \
   apps/web/supabase/scripts/<script-name>.ts

cp .agents/skills/backfill-script-creator/assets/env-1password.template \
   apps/web/supabase/scripts/.env.1p.<script-name>
```

Naming convention: `<verb>-<entity>.ts`. Examples: `backfill-initiative-briefs.ts`, `dedupe-orphan-documents.ts`, `repair-stuck-jobs.ts`.

After copying, replace placeholders inside both files:

- `__SCRIPT_NAME__` → the kebab-case script name (e.g., `backfill-initiative-briefs`)
- `__SCRIPT_DESCRIPTION__` → one-line summary

### 3. Customize the business logic

The template ships with all helpers in place. The user only needs to edit four sections, each clearly marked with `// TODO:` in the template:

| Section | What to write | Reference |
| --- | --- | --- |
| **Types** | Row shape interfaces for the rows you read | — |
| **Read functions** | One function per fetch, using `fetchAllPages()` | [references/pagination-and-batching.md](references/pagination-and-batching.md) |
| **Mutation steps in `run()`** | Each mutation MUST go through an `audit*` helper | [references/audit-and-rollback.md](references/audit-and-rollback.md) |
| **Dry-run preview** | What the user sees in default mode | — |

**Critical rule**: NEVER call `supabase.from(...).insert/update/delete(...)` outside of an `audit*` helper's `mutate` callback. The four helpers are:

- `auditDeletedRows(ctx, table, rows, message, mutate)` — for deletes
- `auditUpdatedRowsById(ctx, table, rows, columns, message, mutate)` — for updates by primary key
- `auditUpdatedRowsByMatch(ctx, table, rows, columns, getCurrentMatch, message, mutate)` — for updates by composite key. `getCurrentMatch` is a **function** `(row) => match` that synthesizes the post-mutation where-clause for each row.
- `auditInsertedRows(ctx, table, rows, matchColumns, message, mutate)` — for inserts

These helpers snapshot the affected rows BEFORE the mutation, append the snapshot to the JSONL audit log, and synthesize a reverse SQL statement into the rollback journal. Bypassing them means the rollback file will be incomplete and the run is no longer recoverable.

**Equally critical: call audit helpers per CHUNK, not per ROW.** Each helper invocation pays a fixed cost (two `appendFile` syscalls plus JSON serialization of the row payload). For a 50,000-row backfill, per-row usage is roughly 100x slower than the same backfill with chunked usage. Gather mutations into batches via `chunkArray(rows, MUTATION_BATCH_SIZE)` and call the helper once per batch, with the entire batch as the `rows` argument. The helpers are designed for batch operation; per-row use defeats their purpose.

### 4. Pre-execute review checklist

Before the user runs the script in execute mode, verify ALL of these. If any fail, fix before running:

- [ ] Dry-run mode is the default (`const DRY_RUN = !EXECUTE` line present)
- [ ] Execute mode requires both `--execute` flag AND interactive `execute` confirmation
- [ ] Every `select` that could return >1000 rows uses `fetchAllPages()` — no raw `.select()` without `.range()`
- [ ] Every `insert` of >500 rows uses `chunkArray(rows, MUTATION_BATCH_SIZE)`
- [ ] Every mutation goes through an `audit*` helper, never raw `.insert/update/delete()`
- [ ] `account_id` filters are correct for multi-tenant scoping (or explicitly cross-tenant with a comment explaining why)
- [ ] The final report queries are present (counts after the run for sanity checking)
- [ ] The script is idempotent — re-running it on already-fixed data is a no-op
- [ ] `.env.1p.<script-name>` only contains 1Password references, never literal secrets
- [ ] `apps/web/supabase/scripts/logs/` is gitignored (already covered by repo `.gitignore`)

For the safety rationale behind each item, see [references/safety-rails.md](references/safety-rails.md).

### 5. Run instructions for the user

The script is invoked from `apps/web`:

```bash
# 1. Generate the local env file from the 1Password template
VAULT_NAME=Tux op inject \
  --in-file=supabase/scripts/.env.1p.<script-name> \
  --out-file=supabase/scripts/.env.<script-name> \
  --force

# 2. Dry-run (default). Read-only — prints a preview of every mutation.
pnpm exec tsx supabase/scripts/<script-name>.ts

# 3. Execute (requires interactive TTY + typing 'execute' to confirm)
pnpm exec tsx supabase/scripts/<script-name>.ts --execute
```

Vault name (`Tux`, `Local`, etc.) depends on which Supabase environment the user is targeting. Production runs use the production vault and MUST be reviewed by a second engineer before execution.

After an execute run completes, three artifacts land in `apps/web/supabase/scripts/logs/`:

- `<script-name>-<run-id>.jsonl` — append-only event log with row snapshots
- `<script-name>-<run-id>.rollback.journal.sql` — raw reverse statements as they were generated
- `<script-name>-<run-id>.rollback.sql` — final rollback wrapped in `BEGIN/COMMIT`, statements in reverse order

To roll back, the operator runs the `.rollback.sql` file through psql against the same database. Rollback support means "we generated artifacts to recover from"; it does NOT mean automatic transactional rollback — the database is mutated as the script runs.

## Safety invariants (non-negotiable)

These are the rules that exist because they prevented real incidents in #1687. A backfill script that violates any of them is broken even if it appears to work:

1. **Dry-run is the default execution mode.** A user who runs the script without flags gets a read-only preview. Mutation requires both the flag and the interactive confirmation. Never invert this.
2. **Every full-table read pages through `range()`.** Supabase caps at 1000 rows per request. A `select` without paging silently truncates and the script will skip rows.
3. **Bulk inserts are chunked.** A single `insert` with 50,000 rows will fail or time out. Chunk to `MUTATION_BATCH_SIZE` (500).
4. **Every mutation flows through an audit helper.** Direct `.insert/update/delete()` calls bypass the audit log AND the rollback journal. There is no recovery path for what you didn't record.
5. **Audit context is finalized in both success and failure paths.** The template's top-level `.then`/`.catch` already does this — don't strip it. A crashed run with a half-written rollback journal is still recoverable; a crashed run with no journal is not.
6. **Secrets come from 1Password via the colocated env file.** Never hardcode keys, never use `process.env.SECRET || 'fallback'`, never commit `.env.<script-name>` files.

## Reference files

Read these when you need depth on a specific area. Don't read all of them upfront — the SKILL.md above is enough for ~80% of cases.

| File | Read when |
| --- | --- |
| [references/pagination-and-batching.md](references/pagination-and-batching.md) | Implementing read functions, bulk inserts, or wiring up progress reporting for long-running phases |
| [references/audit-and-rollback.md](references/audit-and-rollback.md) | Designing mutation steps, choosing the right audit helper, or understanding the rollback model |
| [references/env-setup.md](references/env-setup.md) | Setting up the 1Password template, debugging env loading errors, or running against a non-default Supabase environment |
| [references/safety-rails.md](references/safety-rails.md) | Reviewing a backfill before merge, or explaining to a reviewer why the safety patterns exist |
| [references/customization-walkthrough.md](references/customization-walkthrough.md) | First time customizing the template — walks through which lines to edit and what to leave alone |

## What goes in the assets

| File | Purpose |
| --- | --- |
| [assets/backfill-template.ts](assets/backfill-template.ts) | Full scaffolding script. Copy and customize. ~700 lines, mostly helpers — the user-edited section is small. |
| [assets/env-1password.template](assets/env-1password.template) | 1Password injection template. Copy and rename to `.env.1p.<script-name>`. |

## Common mistakes to avoid

- **Calling `.select('*')` without paging** — works fine in dev with 50 rows, silently drops data in prod with 50,000.
- **Wrapping the whole script in a try/catch** — the top-level `.then`/`.catch` is the right place. Inner try/catch swallows errors that should kill the run.
- **Logging instead of auditing** — `console.log('updated 500 rows')` is not an audit log. The audit helper is what creates the recoverable artifact.
- **Forgetting to re-check derived state after dedup** — if a backfill deletes rows, downstream computations that depend on those rows must re-run AFTER the dedup. The reference backfill does this with `findMissingInitiativeBriefs()` after `applyInitiativeDedup()`.
- **Skipping the dry-run before execute** — the dry-run preview is the only opportunity to catch a bad query before it mutates. Always run dry-run first, even for "small" backfills.
- **Hand-writing rollback SQL after the fact** — by then it's too late. The rollback file must be generated as the script runs, not reconstructed later.

## When NOT to use this skill

- **Schema migrations** — use `pnpm --filter web supabase:db:diff` and `apps/web/supabase/migrations/` instead. Schema changes belong in migrations, not in tsx scripts.
- **Idempotent housekeeping inside the app** — if the operation runs continuously (e.g., a cron) it belongs in the NestJS app (`apps/ai/`), not as a one-off script.
- **Read-only data exports** — a script that only reads doesn't need any of the safety machinery. Just write a tsx file that queries and prints/writes a CSV.

If the user's task fits one of these, point them at the right pattern instead of using this skill.
