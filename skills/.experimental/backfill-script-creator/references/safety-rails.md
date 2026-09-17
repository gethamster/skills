# Safety rails: the why behind every rule

This file exists to explain the reasoning behind every safety pattern in the template, so reviewers (and future-you) can judge edge cases instead of mechanically applying rules. Every pattern below is tied to a real failure mode that has happened or was caught just before happening.

## Dry-run by default

**The rule**: Running the script with no flags is read-only. Mutation requires `--execute` AND interactive `execute` confirmation.

**Why it exists**: Before #1687, the original backfill mutated data on its first run with no flags. The intended workflow was "set a `DRY_RUN=true` env var" but in practice nobody did, and one accidental run-without-the-var meant production data was changed without anyone meaning to start.

**The deeper principle**: Default safety is the only safety that holds under pressure. When you're in an incident at 11pm and reaching for a backfill script you wrote 6 months ago, the default behaviour is what you get. Make the default behaviour the one you want at 11pm, not the one you want when you're focused.

**How to apply**: The dry-run path must produce a useful preview — not a stub that says "would mutate things". Reviewers need enough information from the dry-run to verify the script is going to do the right thing.

## Two-factor execute mode

**The rule**: `--execute` flag plus typing `execute` at an interactive prompt.

**Why it exists**: A single flag isn't enough — flags are easy to copy-paste from a Slack message without reading. The interactive confirmation forces the operator to look at the summary the script printed (counts, target URL) and physically type a confirmation. The TTY requirement also ensures the script can't be invoked from CI or a cron without explicit operator presence.

**Edge case**: Sometimes operators legitimately need to run the script in a non-interactive context (e.g., a one-off via SSH where the TTY detection is unreliable). The right answer is to fix the TTY detection, not to add a `--yes` bypass flag. Bypass flags become the default.

**How to apply**: The summary printed before the prompt must include the actual numbers — "Will delete 17,432 rows from `jobs`" not "Will delete some rows". Reviewers verify the summary at confirm time.

## Pagination on every full-table read

**The rule**: Any `select` that could exceed 1000 rows uses `fetchAllPages`.

**Why it exists**: Supabase silently caps `select` at 1000 rows. The bug is invisible in dev (small datasets) and catastrophic in prod (script makes decisions based on a fraction of the data, missing rows are never touched). #1687 added `fetchAllPages` after this exact pattern was discovered in the original script.

**Edge case**: If a query has a hard upper bound — `.limit(N)` for small N, or filtering to a single account — pagination is unnecessary. But "I think this query won't return more than 1000 rows" is not a hard upper bound. If you can't prove it, page.

**How to apply**: Search the script for any `.select(` that doesn't have either `.range(` or `.limit(` with `N <= 1000`. Each one is a candidate for `fetchAllPages`.

## Chunked writes

**The rule**: Bulk inserts use `chunkArray(rows, MUTATION_BATCH_SIZE)` (500 by default).

**Why it exists**: A single insert with 50,000 rows can time out, hold long locks, or fail partway through with no recovery. Even when it works, it's an opaque atomic blob with no progress reporting and no granular audit trail.

**Edge case**: If you only have a handful of rows to insert (< MUTATION_BATCH_SIZE), the chunking loop is a no-op and adds zero overhead. Always wrap in the loop — the cost is one `for` statement, the benefit is consistency across scripts.

**How to apply**: Every `.insert([...])` in the user-edited section should be inside a `for (const batch of chunkArray(...))` loop, even if the input array is small.

## Audit on every mutation

**The rule**: All mutations go through one of the four `audit*` helpers.

**Why it exists**: A backfill that crashes mid-run with no audit log is unrecoverable. The team has no way to know which rows were touched or how to undo them. The audit log + rollback journal turns "we have to restore from backup" (hours of work, lost data since the backup) into "we have to run the rollback file" (minutes, no data loss).

**Edge case**: Truly read-only operations don't need auditing. But "I'm going to update one column on one row, surely I don't need the helper" is still wrong — that's still a mutation that should be recoverable, and the helper costs you nothing.

**How to apply**: Grep the user-edited section for `.insert(`, `.update(`, `.delete(`. Every one should be inside the `mutate` callback of an `audit*` helper. No exceptions.

## Audit context finalized in both paths

**The rule**: The top-level `.then` and `.catch` both call `finalizeAuditContext`.

**Why it exists**: If only the success path finalizes, a crashed run leaves the rollback journal on disk but never produces the wrapped `.rollback.sql` file. Recovery is still possible (the journal is plain SQL) but slower and more error-prone. The dual finalization is a small amount of code that closes the loop on the worst-case scenario.

**Edge case**: `finalizeAuditContext` checks the `finalized` flag and is a no-op on the second call, so dual finalization is safe. Don't strip either branch.

**How to apply**: Don't refactor the bottom of the script. The structure is load-bearing. Add new error reporting INSIDE the `.catch` if needed; don't replace it.

## Service role key, no fallback

**The rule**: `getRequiredEnv('SUPABASE_SERVICE_ROLE_KEY')`. No `||`, no `??`, no defaults.

**Why it exists**: The project's security guidelines (root `CLAUDE.md`) explicitly forbid secret fallbacks. A pattern like `process.env.SECRET || 'demo-value'` looks safe ("we'll never run with the demo value in prod") but accidentally leaks placeholder values into deployed environments. The defence is a no-fallback policy enforced at every secret read site.

**Edge case**: There is no edge case. Every secret should fail fast on missing.

**How to apply**: If you need a secret, use `getRequiredEnv`. Period.

## Stable order on paginated queries

**The rule**: Every paginated `select` includes an `order` by a deterministic, immutable column.

**Why it exists**: Pagination relies on the order of results being identical across pages. If you order by a column that has duplicate values (or worse, a column the script is mutating), you can skip rows or process the same row twice. Either is silently wrong.

**Edge case**: If your natural sort column has duplicates (e.g., `created_at`), add a tiebreaker (`order('created_at').order('id')`). The id is unique, so the combined order is deterministic.

**How to apply**: Every `range()` query needs an `order()` chain. Verify the order column is unique or has a unique tiebreaker.

## Idempotent design

**The rule**: Re-running the script on already-fixed data should be a no-op.

**Why it exists**: Backfills get re-run. Sometimes intentionally (a partial failure, then a re-run after fixing the bug). Sometimes unintentionally (someone forgets it ran yesterday). A non-idempotent script makes both cases worse: a partial-failure re-run double-applies the fix, and an accidental re-run trashes data.

**How to apply**: Frame every read as "find rows that still need fixing", not "find all the rows we've fixed". The reference backfill does this with `.is('initiative_id', null)` — once a row has a non-null `initiative_id`, it's no longer a candidate.

For dedup scripts, the candidate is "rows that match the duplicate signature". Once duplicates are gone, the candidate set is empty.

## Account scoping

**The rule**: Multi-tenant data MUST be filtered by `account_id` unless the script is explicitly cross-tenant.

**Why it exists**: The service role key bypasses RLS. Without explicit `account_id` filtering, a `.delete()` will affect every tenant. This is the same failure mode as forgetting a `WHERE` clause in a SQL `DELETE` — except worse, because the script is "supposed" to be doing a real operation and the missing filter looks intentional.

**How to apply**: Every read query should have an `.eq('account_id', ...)` clause unless there's a comment explaining why it's cross-tenant. Cross-tenant scripts are legitimate (e.g., schema-wide dedup) but should be clearly marked.

## Don't catch errors inside the script body

**The rule**: The only `try/catch` is at the top level (the `.then`/`.catch` after `run()`). Inside `run()` and the helpers, errors propagate.

**Why it exists**: Inner try/catch swallows errors that should kill the run. A backfill that "handles" a Supabase error by logging it and continuing is the worst possible behaviour — it produces a partial mutation with no record of what failed.

**Edge case**: There are legitimate uses of try/catch — e.g., `try { ... } finally { rl.close(); }` for cleaning up a readline interface. The rule is "no try/catch that swallows errors", not "no try/catch ever".

**How to apply**: Look for `catch` blocks. Each one should either re-throw, exit the process, or run a cleanup before re-throwing. None should silently log and continue.

## The compounding effect

Each safety rail in isolation is a small thing. The compounding effect is what makes the pattern work: dry-run by default catches the "wrong target" mistake, the interactive confirmation catches the "wrong intent" mistake, pagination catches the "missing data" mistake, the audit log catches the "what just happened" mistake, and the rollback file catches the "we need to undo this" mistake. Strip any one and the safety net loses its main feature: that you don't have to think about safety to get safety.

When you're tempted to skip a rail because "this script is small", remember that "this script is small" is exactly the framing that produces unsafe scripts. Small scripts run the same code in production as large ones.