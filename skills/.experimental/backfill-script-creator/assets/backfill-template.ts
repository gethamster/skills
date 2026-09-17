#!/usr/bin/env tsx
/* oxlint-disable */
// This is a skill scaffold, not a standalone source file. Its helpers are
// intentionally unused until copied into `apps/web/supabase/scripts/<name>.ts`
// and wired up by the consumer. Disabling oxlint keeps lint quiet without
// excluding the file globally in `.oxlintrc.json`.
import { type SupabaseClient, createClient } from '@supabase/supabase-js';

import { config as dotenvConfig } from 'dotenv';

import { getRequiredEnv } from '@kit/shared/utils';

/**
 * __SCRIPT_NAME__ — __SCRIPT_DESCRIPTION__
 *
 * Usage (from apps/web):
 *   VAULT_NAME=Tux op inject \
 *     --in-file=supabase/scripts/.env.1p.__SCRIPT_NAME__ \
 *     --out-file=supabase/scripts/.env.__SCRIPT_NAME__ \
 *     --force
 *
 *   pnpm exec tsx supabase/scripts/__SCRIPT_NAME__.ts            # dry-run (default)
 *   pnpm exec tsx supabase/scripts/__SCRIPT_NAME__.ts --execute  # mutate (requires TTY confirmation)
 *
 * Default mode is dry-run. Execute mode requires interactive confirmation.
 *
 * Audit artifacts (execute mode only) land under apps/web/supabase/scripts/logs/
 *   <script>-<run-id>.jsonl                — append-only event log with row snapshots
 *   <script>-<run-id>.rollback.journal.sql — raw reverse statements as generated
 *   <script>-<run-id>.rollback.sql         — finalized rollback wrapped in BEGIN/COMMIT
 */
import { existsSync } from 'node:fs';
import { appendFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import process from 'node:process';
import { createInterface } from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const SCRIPT_NAME = '__SCRIPT_NAME__';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const envFilePath = resolve(scriptDir, `.env.${SCRIPT_NAME}`);
const auditOutputDirPath = join(scriptDir, 'logs');

const { supabaseKey, supabaseUrl } = loadBackfillConfig(envFilePath);

const args = process.argv.slice(2);
const EXECUTE = args.includes('--execute');
const EXPLICIT_DRY_RUN = args.includes('--dry-run');

if (EXECUTE && EXPLICIT_DRY_RUN) {
  throw new Error('Use either --execute or --dry-run, not both.');
}

const DRY_RUN = !EXECUTE;

// We construct the Supabase client directly instead of using
// `getSupabaseServerAdminClient` from `@kit/supabase` because that factory
// imports `server-only`, which throws when loaded outside the Next.js bundler.
// tsx scripts can't satisfy that constraint, so every standalone backfill
// uses `createClient` with the colocated env file.
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// -- Tunables -----------------------------------------------------------------
//
// SELECT_PAGE_SIZE governs how many rows we pull per `range()` call. Supabase
// caps `select` at 1000 rows by default; 500 leaves headroom and keeps memory
// pressure predictable. Increase only if you've measured.
//
// MUTATION_BATCH_SIZE governs bulk insert sizing. 500 keeps individual
// requests fast and bounds the blast radius of any single failed batch.

const SELECT_PAGE_SIZE = 500;
const MUTATION_BATCH_SIZE = 500;

// -- Types --------------------------------------------------------------------

type AuditRow = Record<string, unknown>;

interface AuditContext {
  basePath: string;
  finalized: boolean;
  rollbackStatements: string[];
  runId: string;
  sequence: number;
}

const jsonlPath = (ctx: AuditContext) => `${ctx.basePath}.jsonl`;
const rollbackJournalPath = (ctx: AuditContext) =>
  `${ctx.basePath}.rollback.journal.sql`;
const rollbackPath = (ctx: AuditContext) => `${ctx.basePath}.rollback.sql`;

type MutationAuditEvent = {
  action: 'delete' | 'insert' | 'update';
  message: string;
  rows: AuditRow[];
  table: string;
  meta?: Record<string, unknown>;
};

// Lifecycle events are the non-mutation entries in the JSONL log. `run-start`
// and `run-end` are emitted automatically by the template. `mutation-error` is
// a slot for recording structured errors inside a `mutate` callback BEFORE
// re-throwing — use it when an opaque failure (e.g., an RPC returning an
// error) would otherwise leave only a stack trace in the `.catch` handler. See
// references/audit-and-rollback.md for the pattern.
type LifecycleAuditEvent = {
  action: 'mutation-error' | 'run-end' | 'run-start';
  message: string;
  meta?: Record<string, unknown>;
};

type AuditEvent = LifecycleAuditEvent | MutationAuditEvent;

let auditContext: AuditContext | null = null;

// TODO: Define the row shape interfaces for the rows you read.
//
// interface CandidateRow {
//   id: string;
//   account_id: string;
//   // ...
// }

// -- Env loading --------------------------------------------------------------

function loadBackfillEnv(path: string) {
  if (!existsSync(path)) {
    throw new Error(
      `Missing required env file: ${path}. Generate it with:\n` +
        `  VAULT_NAME=<vault> op inject \\\n` +
        `    --in-file=supabase/scripts/.env.1p.${SCRIPT_NAME} \\\n` +
        `    --out-file=supabase/scripts/.env.${SCRIPT_NAME} \\\n` +
        `    --force`,
    );
  }

  const result = dotenvConfig({ path, override: true });

  if (!result.error) {
    return;
  }

  throw result.error;
}

function loadBackfillConfig(path: string) {
  loadBackfillEnv(path);

  const supabaseUrl = process.env.SUPABASE_URL;
  const hasSupabaseKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  if (!supabaseUrl || !hasSupabaseKey) {
    throw new Error(
      `Missing required env vars. SUPABASE_URL: ${supabaseUrl ? '✓' : '✗'}, ` +
        `SUPABASE_SERVICE_ROLE_KEY: ${hasSupabaseKey ? '✓' : '✗'}. ` +
        `Regenerate ${path} from .env.1p.${SCRIPT_NAME} and try again.`,
    );
  }

  const supabaseKey = getRequiredEnv('SUPABASE_SERVICE_ROLE_KEY');

  return { supabaseKey, supabaseUrl };
}

// -- Fail-fast wrappers -------------------------------------------------------
//
// queryOrDie / mutateOrDie surface Supabase errors immediately and abort the
// run. Backfills should NEVER swallow errors silently — partial mutations are
// the worst possible outcome.

async function queryOrDie<T>(
  label: string,
  fn: () => PromiseLike<{ data: T | null; error: { message: string } | null }>,
): Promise<T> {
  const { data, error } = await fn();
  if (error) {
    throw new Error(`${label}: ${error.message}`);
  }

  if (data === null) {
    throw new Error(`${label}: query returned null data`);
  }

  return data as T;
}

async function mutateOrDie(
  label: string,
  fn: () => PromiseLike<{ error: { message: string } | null }>,
) {
  const { error } = await fn();

  if (error) {
    throw new Error(`${label}: ${error.message}`);
  }
}

async function countExactOrThrow(
  label: string,
  fn: () => PromiseLike<{
    count: number | null;
    error: { message: string } | null;
  }>,
): Promise<number> {
  const { count, error } = await fn();

  if (error) {
    throw new Error(`${label} count query failed: ${error.message}`);
  }

  if (count === null) {
    throw new Error(`${label} count query returned null`);
  }

  return count;
}

// -- Generic helpers ----------------------------------------------------------

function createRunId() {
  return `${new Date().toISOString().replace(/[:.]/g, '-')}-${Math.random().toString(36).slice(2, 8)}`;
}

function chunkArray<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

function toAuditRows<T extends object>(rows: T[]): AuditRow[] {
  return rows as unknown as AuditRow[];
}

// Returns every key of the snapshot except `id`. Use this when you've
// snapshotted a row with `select('*')` and want the rollback to restore every
// column (e.g., after an opaque RPC whose column footprint you don't know).
// The `id` exclusion keeps the primary key out of the SET clause so the
// rollback can use `where id = …` to find the row.
function getRestorableColumns(row: AuditRow): string[] {
  return Object.keys(row).filter((column) => column !== 'id');
}

// Track last reported percent per label so the non-TTY branch doesn't emit
// a log line for every row when nothing observable has changed. A 1M-row
// backfill at one log line per row is unworkable in CI; capping at 101 lines
// (every percent + final) is plenty.
const lastReportedPercent = new Map<string, number>();

function reportProgress(label: string, current: number, total: number) {
  const totalSafe = Math.max(total, 1);
  const percent = Math.floor((current / totalSafe) * 100);
  const message = `${label}: ${current}/${total} (${percent}%)`;

  if (process.stdout.isTTY) {
    process.stdout.write(`\r${message}`);
    if (current >= total) process.stdout.write('\n');
    return;
  }

  if (lastReportedPercent.get(label) === percent && current < total) return;
  lastReportedPercent.set(label, percent);
  console.log(message);
}

// -- Pagination ---------------------------------------------------------------
//
// fetchAllPages walks `range(from, to)` until a partial page is returned.
// REQUIRED for any read that could exceed 1000 rows. A raw `.select()` against
// a large table silently caps and the script will skip data.

async function fetchAllPages<T>(
  label: string,
  fetchPage: (
    from: number,
    to: number,
  ) => PromiseLike<{ data: T[] | null; error: { message: string } | null }>,
): Promise<T[]> {
  const rows: T[] = [];

  for (let from = 0; ; from += SELECT_PAGE_SIZE) {
    const { data, error } = await fetchPage(from, from + SELECT_PAGE_SIZE - 1);

    if (error) {
      throw new Error(`${label}: ${error.message}`);
    }

    const page = data ?? [];
    rows.push(...page);

    if (page.length < SELECT_PAGE_SIZE) {
      return rows;
    }
  }
}

// -- SQL literal escaping -----------------------------------------------------
//
// Used by the rollback statement builders below. The rollback file is plain
// SQL run via psql, so we have to escape values ourselves. `json_populate_record`
// lets us snapshot a row as JSON and reconstruct it without enumerating columns.
const SQL_IDENTIFIER_PATTERN = /^[A-Za-z_][A-Za-z0-9_]*$/;

function sqlLiteral(value: unknown): string {
  if (value === null || value === undefined) {
    return 'null';
  }

  if (typeof value === 'number') {
    if (!Number.isFinite(value)) {
      throw new Error(`Unsupported SQL literal value: ${value}`);
    }

    return `${value}`;
  }

  if (typeof value === 'bigint') {
    return `${value}`;
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (value instanceof Date) {
    return `'${value.toISOString()}'`;
  }

  if (typeof value === 'object') {
    throw new Error(`Unsupported SQL literal value: ${JSON.stringify(value)}`);
  }

  return `'${String(value).replace(/'/g, "''")}'`;
}

function sqlJsonLiteral(value: unknown): string {
  return `'${JSON.stringify(value).replace(/'/g, "''")}'::json`;
}

// Rollback SQL uses fixed public schema names, but helper callers still pass
// table and column identifiers. Validate before quoting so user-controlled
// strings cannot widen a rollback statement into arbitrary SQL.
function sqlIdentifier(name: string): string {
  if (!SQL_IDENTIFIER_PATTERN.test(name)) {
    throw new Error(`Unsafe SQL identifier: ${name}`);
  }

  return `"${name}"`;
}

// WHERE-clause builder that handles nulls correctly. `column = null` always
// evaluates to UNKNOWN in SQL and will never match a row — so if a match column
// is nullable and the snapshotted value is null, the rollback statement would
// silently fail to find its target and the mutation would become unrecoverable.
// Emit `column IS NULL` for nulls and `column = literal` otherwise. Use this
// for every match predicate in the rollback builders below.
// Pass pre-quoted identifiers (via sqlIdentifier) for the column argument.
function sqlEquals(column: string, value: unknown): string {
  if (value === null || value === undefined) {
    return `${column} is null`;
  }

  return `${column} = ${sqlLiteral(value)}`;
}

function requireNonEmpty<T>(items: T[], message: string): T[] {
  if (items.length === 0) {
    throw new Error(message);
  }

  return items;
}

function buildInsertFromSnapshotSql(table: string, row: AuditRow): string {
  const t = sqlIdentifier(table);

  return `insert into public.${t} select * from json_populate_record(null::public.${t}, ${sqlJsonLiteral(row)}) on conflict do nothing;`;
}

function buildDeleteByMatchSql(
  table: string,
  match: Record<string, unknown>,
): string {
  const clauses = requireNonEmpty(
    Object.entries(match).map(([column, value]) =>
      sqlEquals(sqlIdentifier(column), value),
    ),
    'Rollback delete requires at least one match column.',
  );

  return `delete from public.${sqlIdentifier(table)} where ${clauses.join(' and ')};`;
}

function buildRestoreByIdSql(
  table: string,
  row: AuditRow,
  columns: string[],
): string {
  if (row.id === null || row.id === undefined) {
    throw new Error('Rollback update by id requires a row id.');
  }

  const t = sqlIdentifier(table);
  const assignments = requireNonEmpty(
    columns.map(
      (column) => `${sqlIdentifier(column)} = source.${sqlIdentifier(column)}`,
    ),
    'Rollback update requires at least one column.',
  );

  return `update public.${t} as target set ${assignments.join(', ')} from json_populate_record(null::public.${t}, ${sqlJsonLiteral(row)}) as source where target.id = ${sqlLiteral(row.id)};`;
}

function buildRestoreByMatchSql(
  table: string,
  row: AuditRow,
  columns: string[],
  currentMatch: Record<string, unknown>,
): string {
  const t = sqlIdentifier(table);
  const assignments = requireNonEmpty(
    columns.map(
      (column) => `${sqlIdentifier(column)} = source.${sqlIdentifier(column)}`,
    ),
    'Rollback update requires at least one column.',
  );
  const clauses = requireNonEmpty(
    Object.entries(currentMatch).map(([column, value]) =>
      sqlEquals(`target.${sqlIdentifier(column)}`, value),
    ),
    'Rollback update requires at least one match column.',
  );

  return `update public.${t} as target set ${assignments.join(', ')} from json_populate_record(null::public.${t}, ${sqlJsonLiteral(row)}) as source where ${clauses.join(' and ')};`;
}

// -- Audit context ------------------------------------------------------------
//
// AuditContext owns the JSONL file, the rollback journal, and the in-memory
// list of rollback statements. It is created lazily on the first execute-mode
// run and finalized in the top-level .then/.catch handlers — both success
// and failure paths MUST hit finalizeAuditContext.

async function createAuditContext(): Promise<AuditContext> {
  await mkdir(auditOutputDirPath, { recursive: true });

  const runId = createRunId();

  return {
    basePath: join(auditOutputDirPath, `${SCRIPT_NAME}-${runId}`),
    finalized: false,
    rollbackStatements: [],
    runId,
    sequence: 0,
  };
}

async function appendAuditEvent(ctx: AuditContext, event: AuditEvent) {
  ctx.sequence += 1;

  await appendFile(
    jsonlPath(ctx),
    `${JSON.stringify({
      action: event.action,
      message: event.message,
      meta: event.meta,
      rows: 'rows' in event ? event.rows : undefined,
      runId: ctx.runId,
      seq: ctx.sequence,
      table: 'table' in event ? event.table : undefined,
      ts: new Date().toISOString(),
    })}\n`,
  );
}

async function appendRollbackStatements(
  ctx: AuditContext,
  statements: string[],
) {
  if (statements.length === 0) return;

  ctx.rollbackStatements.push(...statements);
  await appendFile(rollbackJournalPath(ctx), `${statements.join('\n')}\n`);
}

async function executeAuditedMutation(
  ctx: AuditContext,
  rollbackStatements: string[],
  mutate: () => Promise<unknown>,
  event: MutationAuditEvent,
) {
  await appendRollbackStatements(ctx, rollbackStatements);
  await mutate();

  // Empty-rows mutations are valid (e.g., a chunk that turned out to have
  // nothing to do) but they shouldn't pollute the audit log with no-op events.
  if (event.rows.length > 0) {
    await appendAuditEvent(ctx, event);
  }
}

// -- Audit helpers (use these for ALL mutations) ------------------------------
//
// Each helper:
//   1. Records the rollback statement(s) BEFORE running the mutation
//   2. Runs the mutation via mutateOrDie
//   3. Appends an audit event with the row snapshots
//
// Choose by mutation shape:
//   auditDeletedRows         — for deletes (rollback = re-insert from snapshot)
//   auditUpdatedRowsById     — for updates keyed by primary id
//   auditUpdatedRowsByMatch  — for updates keyed by composite columns
//   auditInsertedRows        — for inserts (rollback = delete by match)

async function auditDeletedRows(
  ctx: AuditContext,
  table: string,
  rows: AuditRow[],
  message: string,
  mutate: () => Promise<unknown>,
  meta?: Record<string, unknown>,
) {
  await executeAuditedMutation(
    ctx,
    rows.map((row) => buildInsertFromSnapshotSql(table, row)),
    mutate,
    { action: 'delete', message, meta, rows, table },
  );
}

async function auditUpdatedRowsById(
  ctx: AuditContext,
  table: string,
  rows: AuditRow[],
  columns: string[],
  message: string,
  mutate: () => Promise<unknown>,
  meta?: Record<string, unknown>,
) {
  await executeAuditedMutation(
    ctx,
    rows.map((row) => buildRestoreByIdSql(table, row, columns)),
    mutate,
    { action: 'update', message, meta, rows, table },
  );
}

async function auditUpdatedRowsByMatch(
  ctx: AuditContext,
  table: string,
  rows: AuditRow[],
  columns: string[],
  // `getCurrentMatch` is a function (not a static object) so each row can
  // synthesize its own post-mutation where-clause from the snapshot. Renaming
  // makes the function shape obvious at the call site.
  getCurrentMatch: (row: AuditRow) => Record<string, unknown>,
  message: string,
  mutate: () => Promise<unknown>,
  meta?: Record<string, unknown>,
) {
  await executeAuditedMutation(
    ctx,
    rows.map((row) =>
      buildRestoreByMatchSql(table, row, columns, getCurrentMatch(row)),
    ),
    mutate,
    { action: 'update', message, meta, rows, table },
  );
}

async function auditInsertedRows(
  ctx: AuditContext,
  table: string,
  rows: AuditRow[],
  matchColumns: string[],
  message: string,
  mutate: () => Promise<unknown>,
  meta?: Record<string, unknown>,
) {
  await executeAuditedMutation(
    ctx,
    rows.map((row) =>
      buildDeleteByMatchSql(
        table,
        Object.fromEntries(matchColumns.map((column) => [column, row[column]])),
      ),
    ),
    mutate,
    { action: 'insert', message, meta, rows, table },
  );
}

async function finalizeAuditContext(
  ctx: AuditContext,
  status: 'completed' | 'failed',
  errorMessage?: string,
) {
  if (ctx.finalized) {
    return;
  }

  ctx.finalized = true;

  await appendAuditEvent(ctx, {
    action: 'run-end',
    message:
      status === 'completed'
        ? `${SCRIPT_NAME} run completed`
        : `${SCRIPT_NAME} run failed`,
    meta: {
      errorMessage,
      rollbackPath: rollbackPath(ctx),
      status,
    },
  });

  // Reverse statement order so the rollback unwinds the run from latest to
  // earliest mutation, which is the only correct order when mutations have
  // dependencies on each other.
  const rollbackContent = [
    `-- ${SCRIPT_NAME} rollback`,
    `-- run id: ${ctx.runId}`,
    'begin;',
    ...[...ctx.rollbackStatements].reverse(),
    'commit;',
    '',
  ].join('\n\n');

  await writeFile(rollbackPath(ctx), rollbackContent);
}

// -- Execute confirmation -----------------------------------------------------

async function confirmExecuteOrDie(summary: Record<string, number>) {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error(
      'Execute mode requires an interactive terminal for confirmation. Use --dry-run or rerun in a TTY.',
    );
  }

  console.log('\nExecute mode requested. This will mutate data.');
  for (const [label, count] of Object.entries(summary)) {
    console.log(`  ${label}: ${count}`);
  }
  console.log("Type 'execute' to continue.");

  const rl = createInterface({ input: process.stdin, output: process.stdout });

  try {
    const answer = await rl.question('> ');

    if (answer.trim().toLowerCase() !== 'execute') {
      throw new Error('Execution cancelled. Confirmation text did not match.');
    }
  } finally {
    rl.close();
  }
}

// -----------------------------------------------------------------------------
// USER-EDITED SECTION
// -----------------------------------------------------------------------------
//
// Everything above this line is shared infrastructure. Below is where you
// implement the actual backfill. Keep the structure consistent across scripts
// so reviewers know where to look.

// -- Read functions -----------------------------------------------------------
//
// TODO: Implement one read function per data source. Each MUST use
// fetchAllPages so it doesn't silently truncate at 1000 rows.
//
// Example:
//
// async function fetchCandidates(): Promise<CandidateRow[]> {
//   return fetchAllPages<CandidateRow>('fetch candidates', (from, to) =>
//     supabase
//       .from('my_table')
//       .select('id, account_id, ...')
//       .is('needs_backfill_column', null)
//       .order('id', { ascending: true })
//       .range(from, to),
//   );
// }

// -- Dry-run preview ----------------------------------------------------------
//
// TODO: Print what the user will see in dry-run mode. The preview should give
// a reviewer enough information to spot a bad query before it mutates anything.
//
// function printPreview(candidates: CandidateRow[]) {
//   console.log(`\n=== PREVIEW: ${SCRIPT_NAME} ===\n`);
//   console.log(`Rows to update: ${candidates.length}`);
//   for (const row of candidates.slice(0, 10)) {
//     console.log(`  ${row.id} (account ${row.account_id})`);
//   }
//   if (candidates.length > 10) {
//     console.log(`  ... and ${candidates.length - 10} more`);
//   }
// }

// -- Main ---------------------------------------------------------------------

async function run() {
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN (default, read-only)' : 'EXECUTE'}`);
  console.log(`Supabase URL: ${supabaseUrl}\n`);

  // TODO: Step 1 — gather everything you need from the database. Reads only.
  // const candidates = await fetchCandidates();
  // console.log(`Found ${candidates.length} candidates`);

  if (DRY_RUN) {
    // TODO: Show the dry-run preview and return without mutating.
    // printPreview(candidates);
    console.log('\n=== Summary ===');
    // console.log(`  Rows to update: ${candidates.length}`);
    console.log('\nRun with --execute to apply.\n');
    return;
  }

  await confirmExecuteOrDie({
    // TODO: list the counts the operator should see before confirming
    // 'Rows to update': candidates.length,
  });

  auditContext = await createAuditContext();
  const ctx = auditContext;

  await appendAuditEvent(ctx, {
    action: 'run-start',
    message: `${SCRIPT_NAME} run started`,
    meta: { supabaseUrl },
  });

  console.log(`Audit log: ${jsonlPath(ctx)}`);
  console.log(`Rollback journal: ${rollbackJournalPath(ctx)}`);
  console.log(`Rollback SQL: ${rollbackPath(ctx)}`);

  // TODO: Step 2 — apply mutations. EVERY mutation MUST go through an audit
  // helper. See the audit helpers above for the four supported shapes.
  //
  // CRITICAL: call audit helpers per CHUNK, not per ROW. Each call appends two
  // files and serializes the row payload as JSON. A 50,000-row backfill with
  // per-row calls is 100x slower than the same backfill with chunked calls
  // because every audit invocation pays the syscall cost. Always gather rows
  // into a batch first, then call the helper once for the whole chunk.
  //
  // Example (chunked insert — the canonical pattern):
  //
  // const inserted = candidates.map((c) => ({ candidate_id: c.id, value: 'x' }));
  // let count = 0;
  // for (const batch of chunkArray(inserted, MUTATION_BATCH_SIZE)) {
  //   await auditInsertedRows(
  //     ctx,
  //     'my_target_table',
  //     toAuditRows(batch),
  //     ['candidate_id'],
  //     'Inserted backfill rows',
  //     async () => {
  //       const { error } = await supabase.from('my_target_table').insert(batch);
  //       if (error) throw new Error(`insert failed: ${error.message}`);
  //     },
  //   );
  //   count += batch.length;
  //   reportProgress('inserts', count, inserted.length);
  // }
  //
  // Example (chunked update — same shape, applied to in-place mutation):
  //
  // for (const batch of chunkArray(candidates, MUTATION_BATCH_SIZE)) {
  //   const ids = batch.map((c) => c.id);
  //   await auditUpdatedRowsById(
  //     ctx,
  //     'my_table',
  //     toAuditRows(batch),  // snapshots taken from the read step
  //     ['some_column'],     // ONLY columns the mutation changes
  //     'Backfilled some_column',
  //     () =>
  //       mutateOrDie('update some_column', () =>
  //         supabase.from('my_table').update({ some_column: 'new' }).in('id', ids),
  //       ),
  //   );
  //   reportProgress('updates', /* ... */, candidates.length);
  // }

  // TODO: Step 3 — final report. Run count queries to confirm the post-state
  // matches expectations.
  //
  // const total = await countExactOrThrow('final count', () =>
  //   supabase.from('my_target_table').select('id', { count: 'exact', head: true }),
  // );
  // console.log(`\n=== Final Report ===`);
  // console.log(`  Total rows: ${total}`);
}

// -----------------------------------------------------------------------------
// END OF USER-EDITED SECTION
// -----------------------------------------------------------------------------

run()
  .then(async () => {
    if (auditContext) {
      try {
        await finalizeAuditContext(auditContext, 'completed');
        console.log(`Audit log saved to ${jsonlPath(auditContext)}`);
        console.log(
          `Rollback journal saved to ${rollbackJournalPath(auditContext)}`,
        );
        console.log(`Rollback SQL saved to ${rollbackPath(auditContext)}`);
      } catch (finalizeError) {
        console.error('Failed to finalize audit artifacts:', finalizeError);
        process.exit(1);
      }
    }
  })
  .catch(async (err) => {
    console.error('Fatal error:', err);

    if (auditContext) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      try {
        await finalizeAuditContext(auditContext, 'failed', errorMessage);
        console.error(`Audit log saved to ${jsonlPath(auditContext)}`);
        console.error(
          `Rollback journal saved to ${rollbackJournalPath(auditContext)}`,
        );
        console.error(`Rollback SQL saved to ${rollbackPath(auditContext)}`);
      } catch (finalizeError) {
        console.error('Failed to finalize audit artifacts:', finalizeError);
        console.error(
          `Rollback journal may be partially available at ${rollbackJournalPath(auditContext)}`,
        );
      }
    }

    process.exit(1);
  });
