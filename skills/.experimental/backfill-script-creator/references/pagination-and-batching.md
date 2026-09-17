# Pagination and batching

## Why pagination matters

Supabase's PostgREST API caps `select` responses at 1000 rows by default. A query like:

```ts
const { data } = await supabase.from('big_table').select('*');
```

against a table with 50,000 rows returns the first 1000 rows with **no error**. The script silently sees a fraction of the data, makes decisions based on it, and the missing 49,000 rows are never touched. This is the failure mode that prompted #1687 — the original backfill ran in dev (small dataset) and was about to ship to production (large dataset) with this bug latent.

The cap is configurable on the server side, but you cannot rely on it being set for the database you're targeting. The only safe pattern is to page through `range(from, to)` until you get a partial page.

## The `fetchAllPages` helper

The template includes:

```ts
async function fetchAllPages<T>(
  label: string,
  fetchPage: (from: number, to: number) => PromiseLike<{
    data: T[] | null;
    error: { message: string } | null;
  }>,
): Promise<T[]> {
  const rows: T[] = [];

  for (let from = 0; ; from += SELECT_PAGE_SIZE) {
    const { data, error } = await fetchPage(from, from + SELECT_PAGE_SIZE - 1);
    if (error) throw new Error(`${label}: ${error.message}`);
    const page = data ?? [];
    rows.push(...page);
    if (page.length < SELECT_PAGE_SIZE) return rows;
  }
}
```

The contract:

- Caller provides a `fetchPage(from, to)` closure that runs ONE page query.
- The helper loops, advancing `from` by `SELECT_PAGE_SIZE` each iteration.
- Termination: when a returned page has fewer rows than the page size, that's the last page.
- Errors abort the entire walk via `throw` — there is no partial result.

## Writing a paginated read

Wrap every `select` that could exceed 1000 rows. Always include a stable `order` clause so pages don't overlap or skip rows:

```ts
async function fetchAllOpenJobs(): Promise<JobRow[]> {
  return fetchAllPages<JobRow>('fetch open jobs', (from, to) =>
    supabase
      .from('jobs')
      .select('id, account_id, status, created_at')
      .eq('status', 'open')
      .order('id', { ascending: true })  // stable order is REQUIRED
      .range(from, to),
  );
}
```

### Stable order rules

Pagination only works if the underlying order is deterministic. Two rules:

1. **Order by a column that doesn't change** during the run (`id`, `created_at`).
2. **If your order column has duplicates**, add a tiebreaker (`order('created_at').order('id')`).

If a row's order key changes mid-walk (e.g., you `order` by `updated_at` and the script also updates rows), you can skip or double-count rows. Don't do that.

## When to chunk a read instead of paging

Use `chunkArray` (not `fetchAllPages`) when you already have a list of IDs and need to fetch their related rows:

```ts
async function fetchDocumentTitles(docIds: string[]) {
  const titleByDocId = new Map<string, string>();

  for (const idChunk of chunkArray(docIds, SELECT_PAGE_SIZE)) {
    const docs = await queryOrDie('fetch document titles', () =>
      supabase.from('document').select('id, title').in('id', idChunk),
    );

    for (const doc of docs) {
      titleByDocId.set(doc.id, doc.title);
    }
  }

  return titleByDocId;
}
```

`.in('id', [...])` has its own limits — Postgres can handle thousands, but the URL length cap on PostgREST kicks in around a few hundred IDs. Chunking at `SELECT_PAGE_SIZE` keeps it well within bounds and produces consistent latency.

## Why chunked writes matter

A `.insert([...50_000_rows])` will:

- Time out the request
- OR succeed but block the database for an unacceptable window
- OR fail partway through, leaving you with half-inserted data and no clean recovery

Even when it works, a single 50,000-row insert is an atomic unit you cannot pause, monitor, or recover. Chunking gives you:

- Per-batch progress reporting
- Smaller blast radius if a batch fails
- Audit log granularity (one event per batch instead of one event for the entire run)

The template uses `MUTATION_BATCH_SIZE = 500`. This is conservative; you can tune up if you've measured and your inserts are simple, but 500 is safe almost everywhere.

## The chunked insert pattern

```ts
const insertedLinks = candidates.map((c) => ({
  candidate_id: c.id,
  value: 'computed-from-c',
}));

let insertedCount = 0;

for (const batch of chunkArray(insertedLinks, MUTATION_BATCH_SIZE)) {
  await auditInsertedRows(
    ctx,
    'target_table',
    toAuditRows(batch),
    ['candidate_id'],
    'Inserted backfill rows',
    async () => {
      const { error } = await supabase.from('target_table').insert(batch);
      if (error) throw new Error(`insert failed: ${error.message}`);
    },
  );

  insertedCount += batch.length;
  reportProgress('backfill inserts', insertedCount, insertedLinks.length);
}
```

Note that the audit helper wraps the entire batch in a single audit event with all the row snapshots. The rollback for that batch is a single `delete from target_table where candidate_id in (...)` statement per row, all journaled before the mutation runs.

## Progress reporting with `reportProgress`

The template ships a `reportProgress(label, current, total)` helper that the chunk loop calls after each batch completes. It's a small thing but it prevents two real failure modes, and the behavior differs depending on where the script is running.

**TTY mode (interactive terminal).** Writes `label: current/total (percent%)` and uses a carriage return to overwrite the line in place, so the counter animates instead of scrolling. A final newline is emitted when `current >= total` so the cursor ends up on a fresh line before the next phase prints.

```
Initiative dedup progress: 3421/50000 (6%)
```

**Non-TTY mode (CI logs, `nohup`, piped output).** Emits a new `console.log` line only when the percent rounds up to a value that hasn't been reported yet for this label. The throttle is backed by a module-level `Map<string, number>` (`lastReportedPercent`) so each phase's progress is capped at ~101 lines (every whole percent from 0 to 100, plus the final `current === total` line). Without this, a 1M-row backfill piped to a log file would emit 1M lines — enough to make CI artifacts unreadable and slow the run down significantly from I/O alone.

### How to use it

- **Call it per batch, not per row.** Update a running counter after each `chunkArray` iteration and pass the counter as `current`. The non-TTY throttle hides the visible cost of per-row calls but you're still paying for `console.log` and percent math on every row if you put it inside an inner loop.
- **Use a distinct `label` per phase.** The label is the throttle key. If your script has multiple phases ("initiative dedup", "brief dedup", "link backfill"), each needs its own label — otherwise the second phase inherits the first phase's "100%" state from the map and emits nothing until it rolls over.
- **Labels should read as sentences.** They appear verbatim in the log, so `"initiative dedup progress"` is better than `"phase1"`.
- **Pass the true total.** `total` is the denominator for the percent calculation. If you're chunking a 50,000-row update, pass 50,000, not the chunk size.

### Pattern

```ts
let processed = 0;

for (const batch of chunkArray(rows, MUTATION_BATCH_SIZE)) {
  await auditUpdatedRowsById(ctx, 'tbl', toAuditRows(batch), ['col'], '...', () =>
    mutateOrDie('update batch', () =>
      supabase.from('tbl').update({ col: 'x' }).in('id', batch.map((r) => r.id)),
    ),
  );

  processed += batch.length;
  reportProgress('my phase label', processed, rows.length);
}
```

### When to leave it alone vs extend it

The default implementation is tuned for the common case (one-shot tsx script with a handful of phases). Leave it alone unless you hit one of these:

- **Multi-run processes.** The `lastReportedPercent` map is module-level, so repeated runs within the same process (e.g., a script that calls `run()` in a loop) will see stale throttle state from the previous run. For backfills this doesn't matter — the script exits after one run. If you ever extract the helper into a shared module used by a long-running process, you'll need to either clear the map per run or key it on `(runId, label)` instead of `label`.
- **You want ETA or rate.** The helper deliberately doesn't compute ETA or rows-per-second. If you need that, wrap it with your own helper rather than adding complexity here — the template keeps this tight because every backfill needs basic progress and most don't need more.
- **You want a different throttle granularity.** Once-per-percent (~101 lines per phase) is a sensible default, but a very fast phase might want once-per-10-percent. Copy the helper, change the `Math.floor(percent / 10)` key, and use the new version in that phase.

## When you don't need pagination

You can skip `fetchAllPages` if any of these are true:

- The query has a `.limit(N)` where `N <= 1000`
- The query is filtered to a single account or other small scope you have hard upper bounds on
- It's a count query (`{ count: 'exact', head: true }`) — there's no row payload

If you're not sure, use `fetchAllPages`. The overhead is one extra round-trip when there's only one page.

## Counting before mutating

Before kicking off a long mutation loop, count the candidates and print the total. This serves three purposes:

1. The operator knows how long to expect the run to take
2. The dry-run preview matches what execute mode will do
3. Anomalies are caught early — "wait, why are there 12 million candidates" beats discovering it 6 hours into a run

```ts
const candidateCount = await countExactOrThrow('candidate count', () =>
  supabase
    .from('big_table')
    .select('id', { count: 'exact', head: true })
    .is('needs_backfill', true),
);
console.log(`Candidates: ${candidateCount}`);
```