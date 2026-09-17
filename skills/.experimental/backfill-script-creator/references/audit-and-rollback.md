# Audit and rollback

## The problem

Supabase doesn't give you a transactional rollback for a long-running tsx script. Once a `.delete()` runs, the row is gone. If the script crashes 80% of the way through, you have no automatic recovery — you're left with partially-mutated data, no record of what changed, and a panicked Slack thread.

The audit + rollback machinery in the template solves this by recording, before each mutation:

1. **A row snapshot** — what the data looked like before the mutation
2. **A reverse SQL statement** — what to run to undo this mutation

Both are written to disk synchronously, so even if the script is killed mid-run, you have an artifact you can use to recover.

## What gets generated

An execute-mode run produces three files in `apps/web/supabase/scripts/logs/`:

| File | Purpose |
| --- | --- |
| `<script>-<run-id>.jsonl` | Append-only event log. One JSON object per line. Includes lifecycle events (run-start, run-end, errors) and one entry per mutation with row snapshots and metadata. |
| `<script>-<run-id>.rollback.journal.sql` | Raw reverse SQL statements as they were generated, in chronological order. Useful for forensics and partial recovery. |
| `<script>-<run-id>.rollback.sql` | The "official" rollback. Reverse-ordered statements wrapped in `BEGIN; ... COMMIT;`. This is what you run in psql to recover. |

The journal is reverse of the rollback — the journal is chronological for forensics, the rollback is reversed because dependencies must be undone latest-first.

## The four audit helpers

Pick the right helper based on the mutation shape. The template provides exactly four:

### `auditDeletedRows(ctx, table, rows, message, mutate, meta?)`

For `delete` operations. The rollback is an `insert ... on conflict do nothing` reconstructed from the row snapshot via `json_populate_record`.

```ts
// Read the rows you're about to delete (you need the snapshot for rollback)
const stale = await queryOrDie('fetch stale rows', () =>
  supabase.from('jobs').select('*').eq('status', 'expired'),
);

await auditDeletedRows(
  ctx,
  'jobs',
  toAuditRows(stale),
  'Deleted expired jobs',
  () =>
    mutateOrDie('delete expired jobs', () =>
      supabase.from('jobs').delete().eq('status', 'expired'),
    ),
  { reason: 'expired-cleanup' },
);
```

**Critical**: You MUST read the rows BEFORE the delete and pass them in. Otherwise the rollback can't reconstruct what to insert.

### `auditUpdatedRowsById(ctx, table, rows, columns, message, mutate, meta?)`

For `update` operations where the table has a primary `id` column. The rollback is an `update ... where target.id = source.id` that restores the listed columns from the snapshot.

```ts
// Snapshot the rows BEFORE the update
const briefs = await queryOrDie('fetch briefs', () =>
  supabase.from('brief').select('id, primary_initiative_id').in('id', briefIds),
);

await auditUpdatedRowsById(
  ctx,
  'brief',
  toAuditRows(briefs),
  ['primary_initiative_id'],  // columns the rollback should restore
  'Refreshed primary_initiative_id',
  () =>
    mutateOrDie('update primary_initiative_id', () =>
      supabase
        .from('brief')
        .update({ primary_initiative_id: keeperInitiativeId })
        .in('id', briefIds),
    ),
);
```

The `columns` argument is what tells the rollback which columns to write back. Don't list columns the script didn't change — they'll be overwritten with stale snapshot values.

**Restore-all-except-id pattern.** When the mutation is opaque — most commonly a Supabase RPC that mutates server-side logic you don't want to mirror in the script — you don't know which columns it'll touch. The safe move is to snapshot the whole row with `select('*')` and pass `getRestorableColumns(row)` as the `columns` argument. That helper (provided by the template) returns every key of the snapshot except `id`, so the rollback restores all columns as they were at snapshot time while using `id` to find the row:

```ts
const row = await queryOrDie('snapshot brief', () =>
  supabase.from('brief').select('*').eq('id', briefId).single(),
);

await auditUpdatedRowsById(
  ctx,
  'brief',
  [toAuditRow(row)],
  getRestorableColumns(row),          // every column except id
  'Refreshed brief primary initiative shadow field',
  () =>
    mutateOrDie('refresh_brief_primary_initiative', () =>
      supabase.rpc('refresh_brief_primary_initiative', { p_brief_id: briefId }),
    ),
);
```

The trade-off: the rollback writes more than strictly necessary (every non-id column of the row). That's correct behavior — if the RPC only touched one column, rolling back every column to its snapshot value is still a no-op for the untouched columns, and it guarantees you cover whatever the RPC actually changed. Use this pattern only when you genuinely don't know the column footprint; for known columns, list them explicitly to keep the rollback scope tight.

### `auditUpdatedRowsByMatch(ctx, table, rows, columns, getCurrentMatch, ...)`

For updates on tables without a single `id` (composite-key tables like `initiative_briefs(initiative_id, brief_id)`). The fifth parameter `getCurrentMatch` is a **function** `(row) => Record<string, unknown>` that maps each snapshot to the matching where-clause for the **post-mutation** state. The function shape is what makes the rename clearer than `currentMatch` — every call site immediately reveals it's per-row computed, not a static object.

```ts
const links = await queryOrDie('fetch links', () =>
  supabase.from('initiative_briefs').select('*').eq('initiative_id', dupId),
);

await auditUpdatedRowsByMatch(
  ctx,
  'initiative_briefs',
  toAuditRows(links),
  ['initiative_id'],
  // After the update, the row will have keeper_id as initiative_id and the
  // unchanged brief_id. That's how we find it again to roll back.
  (row) => ({ brief_id: row.brief_id, initiative_id: keeperId }),
  'Reassigned links to keeper',
  () =>
    mutateOrDie('reassign links', () =>
      supabase
        .from('initiative_briefs')
        .update({ initiative_id: keeperId })
        .eq('initiative_id', dupId),
    ),
);
```

This is the trickiest helper. The mental model: "after the mutation runs, this is the new where-clause that identifies the row, and I want to restore these columns from the snapshot."

### `auditInsertedRows(ctx, table, rows, matchColumns, message, mutate, meta?)`

For `insert` operations. The rollback is `delete from table where <match-columns from snapshot>`.

```ts
const newLinks = missingLinks.map((l) => ({
  initiative_id: l.initiative_id,
  brief_id: l.brief_id,
  relationship_type: 'primary',
}));

for (const batch of chunkArray(newLinks, MUTATION_BATCH_SIZE)) {
  await auditInsertedRows(
    ctx,
    'initiative_briefs',
    toAuditRows(batch),
    ['initiative_id', 'brief_id'],  // composite key for the rollback delete
    'Inserted missing links',
    async () => {
      const { error } = await supabase.from('initiative_briefs').insert(batch);
      if (error) throw new Error(`insert failed: ${error.message}`);
    },
  );
}
```

`matchColumns` should uniquely identify the inserted row. Usually it's the natural key or composite key. If you use a column that's not unique, the rollback `delete` will remove more rows than the script inserted.

### Nullable match columns

Nulls in a match column are handled correctly. The template's `sqlEquals` helper emits `column IS NULL` when the snapshotted value is null and `column = literal` otherwise, so a rollback like `delete from t where tenant_id = 'x' and slug is null` finds the right row. If it used `= null` instead — as a naive WHERE builder would — the predicate would evaluate to UNKNOWN and the rollback would silently match zero rows, making the mutation unrecoverable.

This applies to both `auditInsertedRows` (via `buildDeleteByMatchSql`) and `auditUpdatedRowsByMatch` (via `buildRestoreByMatchSql`). You don't need to do anything special — just know that "nullable match column" is not a reason to avoid these helpers.

## Lifecycle: when audit context is created and finalized

`auditContext` is a top-level `let` that starts as `null`. It's created lazily on the first execute-mode run inside `run()`:

```ts
auditContext = await createAuditContext();
const ctx = auditContext;

await appendAuditEvent(ctx, {
  action: 'run-start',
  message: '...',
  meta: { supabaseUrl },
});
```

It's finalized in BOTH the success and failure handlers at the bottom of the script:

```ts
run()
  .then(async () => {
    if (auditContext) await finalizeAuditContext(auditContext, 'completed');
  })
  .catch(async (err) => {
    console.error('Fatal error:', err);
    if (auditContext) await finalizeAuditContext(auditContext, 'failed', err.message);
    process.exit(1);
  });
```

`finalizeAuditContext`:

1. Appends a `run-end` event to the JSONL log
2. Reverses the in-memory rollback statements
3. Wraps them in `BEGIN; ... COMMIT;`
4. Writes the final `.rollback.sql` file

The `finalized` flag prevents double-finalization if both handlers somehow run.

**Never strip the `.then`/`.catch` block.** A crash before finalization still leaves the rollback journal on disk (it's append-only and synced on every mutation), so you can recover, but you lose the wrapped, reversed `.rollback.sql` artifact.

## Reading the JSONL audit log

Each line is a self-contained JSON object:

```json
{
  "action": "delete",
  "message": "Deleted expired jobs",
  "meta": { "reason": "expired-cleanup" },
  "rows": [{ "id": "...", "status": "expired", "...": "..." }],
  "runId": "2026-04-08T...",
  "seq": 17,
  "table": "jobs",
  "ts": "2026-04-08T..."
}
```

To inspect a run:

```bash
# Pretty-print every event
jq '.' apps/web/supabase/scripts/logs/<script>-<run-id>.jsonl

# Count mutations by table
jq -r '.table // empty' <log> | sort | uniq -c

# Find the failure
jq 'select(.action == "run-end")' <log>
```

## Running a rollback

If something went wrong, take the `.rollback.sql` file and run it through psql against the same database:

```bash
psql "$DATABASE_URL" -f apps/web/supabase/scripts/logs/<script>-<run-id>.rollback.sql
```

The file is wrapped in `BEGIN/COMMIT`, so the entire rollback either succeeds or rolls back atomically. Inspect the file before running it — it should look like a sequence of `insert`, `update`, and `delete` statements that obviously undo what the script did.

If the rollback file references rows that don't exist anymore (e.g., another process deleted them after the backfill ran), some statements may be no-ops or fail. The `on conflict do nothing` clause on inserts handles the common case.

## When to NOT use the audit helpers

There's exactly one situation where you skip them: **read-only operations**. If your script is just printing a report, no audit is needed.

For everything else — even "small" mutations like updating a single row — go through the helpers. The cost is two `appendFile` syscalls plus one JSON-stringify of the row payload PER CALL; the benefit is a recoverable artifact. The cost-benefit math always favours the helpers — provided you call them per BATCH, not per row (see below).

## Batch your audit calls — this is the most important rule

The four audit helpers all accept `rows: AuditRow[]` and are designed to be called ONCE per chunk with the entire chunk's worth of rows. For a backfill that mutates 50,000 rows uniformly, the difference between per-row and per-batch usage is the difference between the script being fast and the script being unworkable:

**Per-row** — for a 50,000-row backfill:

- 50,000 helper invocations
- 100,000 `appendFile` syscalls (one to the audit log, one to the rollback journal per call)
- 50,000 `JSON.stringify` calls
- Total runtime is dominated by audit I/O, not the actual database mutations

**Per-batch** — same 50,000 rows, `MUTATION_BATCH_SIZE = 500`:

- 100 helper invocations
- 200 `appendFile` syscalls
- 100 `JSON.stringify` calls (each one larger, but fewer total bytes are wasted on JSON overhead)
- Total runtime is dominated by the database operations themselves, as it should be

Per-batch is also easier to read in the audit log: one event per chunk (with N row snapshots inside) beats N single-row events.

The helper signature makes per-batch usage trivial — `auditUpdatedRowsById(ctx, table, ALL_ROWS_FOR_THIS_CHUNK, ...)` — but the per-row pattern is easy to fall into when you're translating "for each row, update it" mentally. The fix: gather rows into a `chunkArray` loop FIRST, then call the helper once per batch.

```ts
// ❌ Avoid: per-row audit calls when the mutation is uniform across rows
for (const row of rows) {
  await auditUpdatedRowsById(ctx, 'tbl', [row], ['col'], '...', () => /* ... */);
}

// ✅ Prefer: chunk first, audit once per chunk
for (const batch of chunkArray(rows, MUTATION_BATCH_SIZE)) {
  await auditUpdatedRowsById(ctx, 'tbl', batch, ['col'], '...', () => /* ... */);
}
```

### When per-row IS the right shape

Per-row audit calls are legitimate in two narrow situations, and the reference backfill uses both. Don't contort the code to avoid them when they're the natural fit:

1. **The batch size is inherently tiny.** Inside a dedup loop that iterates one duplicate group at a time, each group might only have 1-3 duplicate rows. Wrapping `auditDeletedRows([singleRow], ...)` inside a small inner loop is clearer than adding an outer `chunkArray` layer that never fills a chunk. The I/O cost is proportional to the rows mutated, not to the helper count, so small batches are cheap.
2. **The mutation is inherently per-row.** If the mutation is a Supabase RPC that takes a single ID (e.g., `rpc('refresh_brief_primary_initiative', { p_brief_id: id })`), you can't send the whole batch at once. You can still get most of the audit-I/O win by wrapping the per-row RPC calls in a `chunkArray` loop and calling the audit helper once per chunk — snapshot all N rows in that chunk up front, then loop over them inside the `mutate` callback, running the RPC for each. The customization walkthrough (step 5) shows this pattern.

The rule of thumb: if the mutation shape is "same update applied uniformly to N rows", you MUST batch. If the mutation shape is "small group" or "per-row API call", per-row audit calls are fine but per-chunk is still preferred when it's easy.

**Example from the reference backfill (`backfill-initiative-briefs.ts`).** Inside the duplicate-group loop, each duplicate's conflicting link is deleted individually with its own single-row audit call. This is fine because the enclosing loop already bounds the batch to a handful of rows per group:

```ts
for (const link of dupLinks) {
  if (keeperBriefIds.has(link.brief_id)) {
    await auditDeletedRows(
      ctx,
      'initiative_briefs',
      [toAuditRow(link)],          // legitimate: the group already limits this
      'Deleted conflicting initiative_brief during initiative dedup',
      () =>
        mutateOrDie('delete conflicting initiative_brief', () =>
          supabase
            .from('initiative_briefs')
            .delete()
            .eq('initiative_id', dupId)
            .eq('brief_id', link.brief_id),
        ),
      { briefId: link.brief_id, duplicateInitiativeId: dupId },
    );
  }
}
```

The key signal is the surrounding context: `dupLinks` is the small set of links belonging to one duplicate group (usually 1-3 entries), and each deletion needs its own `.eq('brief_id', ...)` filter, so there's no clean batched mutation shape to reach for. Trying to collect these into an outer `chunkArray` loop would make the code harder to read without any real I/O win.

## Recording structured errors inside a mutation

When a mutation can fail in a way that loses useful context — most commonly a Supabase RPC returning an error, where the error string is all you get — you can record a structured audit event BEFORE re-throwing so the JSONL log captures the error payload with correlated metadata. The template pre-declares the `'mutation-error'` action in `LifecycleAuditEvent` for exactly this case:

```ts
await auditUpdatedRowsById(
  ctx,
  'brief',
  [row],
  getRestorableColumns(row),
  'Refreshed brief primary initiative shadow field',
  async () => {
    const { error } = await supabase.rpc(
      'refresh_brief_primary_initiative',
      { p_brief_id: briefId },
    );

    if (error) {
      await appendAuditEvent(ctx, {
        action: 'mutation-error',
        message: `Failed to refresh brief ${briefId}`,
        meta: { briefId, errorMessage: error.message },
      });
      throw new Error(`Failed to refresh brief ${briefId}: ${error.message}`);
    }
  },
);
```

Why bother, when the top-level `.catch` handler already logs the error and finalizes the audit context? Two reasons:

1. **Structured meta.** The `.catch` records the error message but nothing about which row was being processed. The `mutation-error` event captures `{ briefId, errorMessage }` as structured fields — easy to grep, easy to aggregate across a partial run, easy to feed into a recovery script.
2. **Correlation with the mutation event.** The `mutation-error` event lands in the JSONL log between the rollback-statement append and the (non-occurring) mutation audit event, so when you read the log after a failure you can see exactly which audit context the error belongs to.

Don't use this for every mutation — the happy path already has good audit coverage via the mutation events, and adding a try/wrap around every `mutate` callback would dilute the "errors propagate" rule. Use it when an opaque sub-call (an RPC, a service API, anything you don't control) can return an error object that would otherwise vanish into a stack trace.

## Common audit mistakes

- **Calling helpers per-row for mutations that could be batched.** See the "Batch your audit calls" section above. This is the most common and most damaging performance mistake in large backfills. (Per-row calls are fine when the mutation shape genuinely requires them — see "When per-row IS the right shape".)
- **Snapshotting AFTER the mutation.** The whole point is to capture the pre-state. Read first, mutate second.
- **Listing the wrong columns in `auditUpdatedRowsById`.** Only list columns the mutation changes. Listing extra columns means the rollback will overwrite unrelated data with stale snapshot values.
- **Using `auditInsertedRows` with a non-unique `matchColumns`.** The rollback delete will catch unrelated rows.
- **Trying to roll back via the JSONL log.** The JSONL is for forensics; the `.rollback.sql` is for execution. Don't mix them.
- **Treating a partial-rollback failure as catastrophic.** If your rollback fails midway, you can edit the file (it's plain SQL) and re-run from the failure point. The transaction wrapper means a failed run rolls back to the pre-rollback state, not to a worse state.

## Memory considerations for very large backfills

`AuditContext.rollbackStatements` is an in-memory `string[]` that grows for the lifetime of the run, because `finalizeAuditContext` reverses it before writing the final `.rollback.sql`. Each statement is hundreds of bytes (a `restoreById` for a wide row can be >1KB). Rough math:

| Rows mutated | In-memory rollback statements |
| --- | --- |
| 10,000 | ~10 MB |
| 100,000 | ~100 MB |
| 1,000,000 | ~1 GB |

For backfills under 100k rows this is irrelevant. For multi-million-row backfills, monitor RSS during a staging run. If memory pressure is a concern, the journal file on disk (`*.rollback.journal.sql`) is the source of truth and can be reversed externally with `tac` after the run — at the cost of losing the wrapped `BEGIN/COMMIT` artifact. The template prioritizes the cleanly-wrapped output file over memory efficiency, which is the right trade-off for backfills sized at the scale Hamster Studio actually runs.