---
name: hamster-migration-rollout-safety
description: "Rollout safety rules for every change under apps/web/supabase/migrations/**. Use whenever you write, review, rename, or recover a Supabase migration — especially in pre-PR review or when a deploy broke an environment. Migrations install schema and fail closed; production data repair, backfill, reconciliation, and CREATE INDEX CONCURRENTLY belong in explicit audited scripts run before/after deployment. Trigger even if the user only says 'add a column', 'fix these legacy rows in the migration', 'add an index', 'drop this old table', or 'just edit the migration that already shipped' — those are exactly the cases that corrupt data or wedge a deploy."
---

# Migration Rollout Safety

## Why this skill exists

A migration is not a script. It runs unattended, on every environment, at a time
you do not choose, against data you cannot inspect first. It has no dry run, no
per-row audit log, no immutable reviewed plan of the rows it will touch, and no
automatic rollback or recovery once it has applied successfully — everything a
repair script gives you by construction. (A migration that raises inside an
explicit transaction *does* roll back — that is exactly why guards belong there;
what you cannot undo is a migration that succeeded on data it should have
refused.) On dev and prod it runs through Supabase Branching — *outside* GitHub
Actions, before the new app code is serving — so a failure is invisible in CI
and a silent success on wrong data is worse.

Repeated failure modes this skill blocks:

- An `update ... where <legacy condition>` buried in a migration, invented to
  "fix legacy rows" — unbounded, and applied unattended the moment the PR
  merges, without anyone inspecting the rows it affects or recording what it
  changed.
- `alter table ... add column if not exists` added to paper over a *local*
  iteration — hiding the fact that the schema contract it depends on was never
  merged, or was rejected.
- `create index concurrently` inside a migration — index builds on real data
  need an operator-controlled statement timeout, progress reporting, retry, and
  `INVALID`-index recovery, none of which a migration can offer.
- A blocking `create index` on a large existing table — it holds a write lock
  for the whole build and can hit the runner's timeout. Separately, an
  interrupted `CONCURRENTLY` build (from the out-of-band script) can leave an
  `INVALID` index behind that `create index if not exists` will never repair.
- `drop table` / `drop column` on a state-bearing object that still has live
  rows or still-referenced Vault secrets — data and secrets orphaned forever.
- Editing or renaming a migration that already shipped, without knowing which
  environments applied it.

## Scope

Applies to **any** change under `apps/web/supabase/migrations/**` — new file,
edit to an unshipped file, emergency edit to a shipped file, or a rename.

Complements, does not replace:

| Need | Skill |
| --- | --- |
| Schema/RLS/function conventions, diff workflow, env delivery matrix | `.agents/skills/hamster-database/SKILL.md` |
| Writing the audited repair/backfill script this skill sends you to | `.agents/skills/backfill-script-creator/SKILL.md` |
| Concurrent index builder scripts | `apps/web/supabase/scripts/lib/concurrent-index-build.sh` (header is the contract) |
| Context-graph perf validation for index/RPC changes | `.agents/skills/hamster-context-graph-perf/SKILL.md` |

## The core rule

> **Migrations install schema and fail closed. Production data repair,
> backfill, and reconciliation run in explicit, audited scripts — before or
> after the deploy, never inside it.**

A migration may *read* data to assert its own preconditions and postconditions.
It may not *fix* data it finds wrong. When the data is wrong, the migration
raises and names the script the operator must run.

## Decision table: migration or script?

| What you need to do | Where it goes |
| --- | --- |
| Create/alter table, column, constraint, enum, policy, trigger, function, view | Migration |
| Create a small/new-table index | Migration (`create index if not exists`) |
| Create an index on a large existing table | `apps/web/supabase/scripts/build-*-index*.sh` (CONCURRENTLY, out of band) **before** the migration; the migration reconciles + asserts |
| Repair legacy/invalid rows so new schema invariants hold | `apps/web/supabase/scripts/repair-*.ts` **before** the migration; the migration only asserts |
| Populate a new column for existing rows (unbounded, or independent of the DDL) | `apps/web/supabase/scripts/backfill-*.ts` **after** the migration |
| Dedup rows before adding a unique constraint | `repair-*`/`dedupe-*` script before; migration asserts zero duplicates, then adds the constraint |
| Delete/cleanup obsolete rows or Vault secrets | Audited cleanup script (e.g. `cleanup-orphaned-connection-secrets.ts`); migration asserts empty and refuses otherwise |
| Convert an existing column into its replacement, where the new schema is unusable without it and the conversion is bounded + deterministic | Migration, under the narrow exception below |
| Reset/patch a specific tenant's data | Script, never a migration |
| Insert fixed-literal seed / lookup rows the schema or product defines (idempotent, no dependency on existing rows) | Migration |

Rule of thumb: **if the statement reads or depends on production history, it
belongs in a script.** A statement whose row set is fixed literals, or derives
only from the DDL in the same file, may stay — the latter under the exception
below.

## Forbidden in migrations (pre-PR blockers)

```sql
-- ❌ Open-ended production repair: unbounded, no reviewed plan of the affected
-- rows, no record of what changed, applied unattended on merge.
update public.account_deletion_requests
set lease_expires_at = coalesce(started_at, updated_at, now()) + interval '6 hours'
where status = 'running' and lease_expires_at is null;

-- ❌ Re-homing / reparenting / re-keying legacy rows by heuristic.
update public.document d set parent_document_id = <guessed root> where <edge is invalid>;

-- ❌ Deleting "bad" rows so a constraint can be added.
delete from public.sync_entity_mappings where <duplicate predicate>;

-- ❌ Defensive DDL papering over a local revision: it hides that the schema
-- contract it depends on was never merged (or was rejected).
alter table public.account_deletion_requests
  add column if not exists phase integer not null default 0;

-- ❌ CREATE INDEX CONCURRENTLY: needs a dedicated session, an operator-set
-- statement timeout, progress polling and INVALID-index recovery, so it belongs
-- in a builder script — and it can never sit inside begin/commit.
create index concurrently idx_foo on public.big_table (account_id);

-- ❌ Blocking build on a large existing table: holds a write lock for the whole
-- build and can hit the runner's ~2 min cap, aborting the deploy.
create index idx_foo on public.big_table (account_id);

-- ❌ Unguarded destructive DDL on a state-bearing table that may hold live rows.
drop table public.job_webhook_secrets;
```

**What is not forbidden.** Inserting fixed-literal seed or lookup rows that the
schema or product defines is ordinary migration work, provided it is idempotent
(`on conflict do nothing` / `where not exists`) and does not read existing rows.
The blocker targets `update`/`delete` and any `insert` **derived from** existing
rows — that is repair, not seeding.

Note: `create index concurrently` is described as "safe for large tables" in
generic Postgres advice and in older notes. **In this repo it is a blocker
inside a migration** — not because concurrency is wrong, but because a real-data
index build needs an operator in the loop: a raised statement timeout, progress
reporting, retry, and drop-and-rebuild recovery for an `INVALID` index, all of
which the builder script provides and a migration cannot. On top of that, any
apply path that wraps the file in a transaction rejects `CONCURRENTLY` outright.
Use the builder-script path.

Replace each with: an assertion in the migration + a named script in the rollout
notes. Assertion template:

```sql
do $$
declare
  v_invalid bigint;
begin
  select count(*) into v_invalid
  from public.document d
  left join public.document p on p.id = d.parent_document_id
  where d.document_type = 'blueprint'
    and d.parent_document_id is not null
    and (p.id is null or p.document_type <> 'blueprint'
         or p.account_id is distinct from d.account_id);

  if v_invalid > 0 then
    raise exception
      'Cannot separate Blueprint folders: % Blueprint(s) have an invalid parent edge, which the new hierarchy reads would silently adopt into another bucket. Run supabase/scripts/repair-invalid-blueprint-parent-edges.ts --env <env> --execute before retrying',
      v_invalid
      using errcode = '23514';
  end if;
end;
$$;
```

Assertion quality bar — a raise that does not tell the operator what to run is
half a guard:

1. States the invariant that is now being trusted, and why violating it is bad.
2. Reports the offending counts.
3. Names the exact script + flags to fix it.
4. Sets `using errcode = '23514'` (check violation) so it is distinguishable
   from an incidental SQL error.
5. Uses the **same predicate** the repair script postchecks, so "script is
   done" means exactly "migration will now pass".

## Narrow exception: schema-coupled conversion

A data-touching statement may stay in the migration **only if every one of
these holds**. If you cannot state all five in the migration's comment header,
it goes in a script.

1. **Schema-coupled** — the new schema is unusable without it (e.g. a marker
   column the new reads depend on), and it must be atomic with the DDL: a
   window where the DDL has landed and the value has not is a broken product.
2. **Bounded and derived from the DDL, not from history** — writes at most one
   row per pre-existing logical entity (e.g. one workspace-root marker per
   account), not "all rows matching a legacy condition".
3. **Deterministic** — the source of the value is unambiguous and enforced. If
   ambiguity is possible (two candidate roots), the migration must *refuse*, not
   pick.
4. **Transaction-wrapped, with the lock taken before the check** — see below.
5. **Guarded by read-only pre- and post-assertions** — a preflight proving the
   premise still holds *inside* the transaction, and a postcondition proving the
   conversion actually produced the intended state.

Worked example: `20260814101500_blueprint-workspace-root-marker.sql`. It adds
`is_workspace_root`, derives it from the formerly-unique parentless root, and
then drops the index enforcing that uniqueness. Its preflight, inside the
transaction and behind the lock, proves (a) the old unique index still exists
*and is valid*, and (b) every account owning Blueprints has exactly one
parentless one — raising with the seeding script name when it does not. Whatever
an operator queried before deploying is irrelevant; only a check inside the
transaction proves the premise still holds at apply time.

Missing-vs-duplicate is worth reporting separately: they need different
remediation (seed one, or reparent extras).

## Explicit transactions and lock scope

**Apply paths differ, so never rely on implicit atomicity.** A local
`supabase migration up` may execute a migration's statements without wrapping
them, while remote `db push` / Branching may wrap the file in a transaction. You
cannot depend on either. Any migration that takes a lock, or performs a
multi-statement conversion that must be all-or-nothing, MUST open with `begin;`
and end with `commit;` so its atomicity is a property of the file rather than of
the runner that happens to apply it.

```sql
begin;

-- Hold the writer lock for the whole transaction so no concurrent write can
-- slip in between the check and the DDL. Reads are unaffected.
lock table public.document in share row exclusive mode;

-- preflight assertions (inside the transaction, behind the lock)
-- DDL
-- bounded conversion
-- postcondition assertion

commit;
```

Lock rules:

- **Take the lock before you count.** A count outside the lock proves nothing:
  a service-role insert between the count and the `drop`/`alter` reintroduces
  exactly the state you refused to run on.
- **Pick the weakest lock that closes the race.** `share row exclusive` blocks
  writers but not readers — right for a conversion. `access exclusive` (blocks
  everything, including reads) is only for a `drop`-class change, e.g. proving
  `public.job_webhook_secrets` is empty before dropping it.
- **Keep the locked section short.** No unbounded scans, no per-row loops, no
  `analyze` inside it.
- `create index concurrently` cannot run inside a transaction block, so it can
  never be added to a transaction-wrapped migration — and it needs
  operator-controlled timeout, progress and `INVALID`-index recovery anyway, so
  it moves out of band to a builder script (see below).

## Concurrent index workflow

Never `create index concurrently` in a migration. Never blocking-build on a
large existing table. Instead:

1. **Operator script**, declaring targets and delegating to the shared engine —
   copy `apps/web/supabase/scripts/build-account-delete-foreign-key-indexes.sh`.
   Set `TARGET_MIGRATION`, `NAMES`, `DDL` (`create index concurrently if not
   exists ...`), `SIZE_TABLES`, `ANALYZE_TABLES`, then
   `source lib/concurrent-index-build.sh; concurrent_index_build_main "$@"`.
   The engine owns dry-run-by-default, the env→session-pooler map, typed remote
   confirmation, invalid-index scan, drop+rebuild of `INVALID` indexes, progress
   polling, verify, and `analyze`.
   - Remote envs must use the **session pooler (5432)** — the transaction pooler
     (6543) cannot run `CONCURRENTLY`; the direct `db.<ref>` host is IPv6-only.
   - Run `--env <env> --apply` on every **deployed** environment (dev, tux,
     prod) *before* the migration lands there. Local is not a deployed env: a
     fresh `pnpm supabase:web:reset` is reconciled by the migration's own
     `create index if not exists`.
2. **Migration reconciles and asserts.** Plain `create index if not exists` —
   a fast no-op after the out-of-band build, and still correct for fresh local
   and CI databases. Around it:
   - **Preflight per target index:**
     - *absent* → allowed only if the table is small; raise if
       `pg_table_size(...) > 256 * 1024 * 1024`, because a blocking build there
       would freeze writes. Name the builder script and `--env <env> --apply`.
     - *present but `INVALID`* (interrupted `CONCURRENTLY` build) → raise **at
       any table size**. `create index if not exists` sees the name, skips
       forever, and the index is never used. Only a drop + rebuild fixes it.
   - **Postcondition:** every target index exists and `indisvalid`. This catches
     an index dropped or invalidated between the preflight and the DDL, and any
     target the reconciliation skipped. Report the offending names.

Reference implementation of both halves:
`apps/web/supabase/migrations/20260814005700_index-account-delete-foreign-keys.sql`
plus its builder script.

## Destructive DDL

`drop table` / `drop column` on anything that holds production state must
**assert empty state and stop if cleanup is needed** — never discard rows as a
side effect of a schema change.

**Scope:** this applies to *state-bearing* objects only. Dropping a stateless
object — function, policy, trigger, view — is ordinary schema work and needs no
empty-state guard. For `drop column`, require either an assertion that no
non-null values remain, **or** explicit reviewed evidence in the PR that
discarding that data is intentional.

```sql
begin;

-- Strongest lock: taken before counting, so nothing can be inserted between
-- the count and the DROP.
lock table public.job_webhook_secrets in access exclusive mode;

do $$
declare
  v_rows bigint;
  v_secrets bigint;
begin
  select count(*) into v_rows from public.job_webhook_secrets;

  select count(*) into v_secrets
  from vault.secrets
  where name like 'job!_webhook!_%' escape '!';

  if v_rows > 0 or v_secrets > 0 then
    raise exception
      'Cannot remove per-job webhook secrets: % row(s) remain in public.job_webhook_secrets and % Vault secret(s) named job_webhook_%% remain. Resolve them with a reviewed, audited cleanup before retrying',
      v_rows, v_secrets
      using errcode = '23514';
  end if;
end;
$$;

drop table public.job_webhook_secrets;

commit;
```

Checklist:

- Count the rows **and** every satellite resource the rows own (Vault secrets,
  storage objects, queue jobs). A dropped row that owned a Vault secret orphans
  that secret permanently — `on delete cascade` does not reach `vault.secrets`.
- Escape `_`/`%` in `like` patterns (`like 'job!_webhook!_%' escape '!'`) —
  unescaped wildcards silently widen or narrow the match.
- Double `%%` in `raise` format strings when the literal `%` is part of the
  message.
- Cleanup lives in a script (see `cleanup-orphaned-connection-secrets.ts`,
  `revoke-orphaned-context-connection-secrets.ts`), not in the migration.

## Editing a migration that already shipped

**Default: write a follow-up migration.** Editing or renaming a shipped file is
an emergency exception, permitted only when both hold:

1. **Environment migration state is proven** — you have confirmed, per
   environment, whether the file was already applied. Supabase Dashboard →
   Database → Migrations for dev/prod; the `migrate-tux` job log for tux.
   "Probably not applied yet" is not proof.
2. **Rollout and reconciliation are explicit** — the PR states, per
   environment, what will happen on the next apply and what an operator must
   run to converge already-applied environments.

| Env | How schema arrives | Visible in GitHub Actions? | Effect of editing a shipped file |
| --- | --- | --- | --- |
| local | `pnpm supabase:web:reset` | n/a | Free; reset re-applies from scratch |
| dev | Supabase Branching on `dev` | No | Already applied (async, ungated by CI). Edited SQL does **not** re-run; a **rename** re-runs the whole file and fails on any non-idempotent statement |
| tux | `supabase db push` in the `migrate-tux` CI job | Yes (gates `deploy-tux`) | Pushes anything not yet applied; a renamed file with new SQL executes as a fresh migration |
| prod | Supabase Branching on `main` | No | Same as dev |

Consequences to reason about explicitly:

- A rename is a **new** migration to Branching: every statement in the file must
  be idempotent (`if not exists`, `create or replace`, `drop ... if exists` +
  recreate) or dev/prod will fail on a duplicate-object error. This is a
  different question from "is the SQL correct".
- Editing SQL in place converges nothing on dev/prod — the old version stays
  applied. Any divergence must be closed by a follow-up migration or a script.
- A guard added to an already-applied migration is still worth adding: it
  protects the environments that have not applied it yet and every fresh
  database (local, CI, new branch). Say so in the PR, and say what closes the
  gap on the environments that already ran the unguarded version.
- Renaming for the ordering check (`.github/workflows/101-pr-policy.yml`, which
  runs `apps/web/supabase/scripts/check-migration-order.ts`)
  uses `date -u +%Y%m%d%H%M%S` — never bare `date`. See
  `.agents/skills/hamster-database/references/rules/migration-workflow.md`.

## Required PR / runbook evidence

A migration PR is not reviewable without these. Missing evidence is a blocker.

- **Rollout order**, explicitly ordered, per environment: which script runs
  before the migration, which after, and which are no-ops. Repeat it as a
  comment header in the migration file itself (`-- ROLLOUT: ...`), because the
  operator debugging a failed Branching apply reads the SQL, not the PR.
- **Preconditions asserted** — list them, and for each, the script that fixes a
  violation.
- **Postconditions asserted** — what proves the migration achieved its intent.
- **Lock and transaction posture** — which lock mode, why that mode, and
  confirmation of explicit `begin;`/`commit;` if a lock or atomic conversion is
  involved.
- **Script evidence** — dry-run output per environment for every script in the
  rollout, and a note that the script's postcheck uses the migration's
  predicate.
- **Fresh-database proof** — `pnpm supabase:web:reset` succeeds (guards must not
  fire on an empty database), plus
  `pnpm supabase:web:diff:drift-check` after editing any schema or
  migration file, and regenerated types (`pnpm supabase:web:typegen`).
- **Shipped-file edits** — the environment state proof and convergence plan from
  the section above.

## Pre-PR review: blocker triage

Start from the staged diff:

```bash
git diff origin/dev...HEAD --name-only -- 'apps/web/supabase/migrations/**'
git diff origin/dev...HEAD -- 'apps/web/supabase/migrations/**'
```

Read every added statement against the table below.

| Finding | Severity |
| --- | --- |
| `create index concurrently` inside a migration | **Blocker** |
| Non-concurrent index build on a large existing table, no size guard | **Blocker** |
| `update`/`delete`, or an `insert` derived from existing rows, that fails the five-point exception | **Blocker** |
| `drop table`/`drop column` on a state-bearing object with no empty-state assertion (and, for `drop column`, no reviewed evidence that discarding the data is intended) | **Blocker** |
| Lock taken, or atomic conversion performed, without explicit `begin;`/`commit;` | **Blocker** |
| Count/assertion taken before the lock (racy guard) | **Blocker** |
| Edit or rename of a shipped migration without proven env state + convergence plan | **Blocker** |
| `add column if not exists` covering a local-only iteration | **Blocker** (fold into the original DDL) |
| Assertion that raises without naming the remediation script, or without `errcode` | Should-fix |
| Missing postcondition assertion on a conversion or index reconciliation | Should-fix |
| Rollout order absent from the migration's comment header | Should-fix |

## Key paths

| Path | Purpose |
| --- | --- |
| `apps/web/supabase/migrations/` | Migrations (this skill's scope) |
| `apps/web/supabase/scripts/lib/concurrent-index-build.sh` | Shared CONCURRENTLY build engine + flag contract |
| `apps/web/supabase/scripts/build-account-delete-foreign-key-indexes.sh` | Builder script to copy |
| `apps/web/supabase/scripts/repair-invalid-blueprint-parent-edges.ts` | Audited pre-migration repair to copy |
| `apps/web/supabase/scripts/check-migration-order.ts` | Local ordering check |
| `.github/workflows/101-pr-policy.yml` | CI gate that runs the ordering check |
