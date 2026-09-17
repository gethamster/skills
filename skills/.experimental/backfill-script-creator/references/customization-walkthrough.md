# Customization walkthrough

This is a step-by-step guide for taking the template script and turning it into a working backfill. Read this the first time you scaffold a script — once you've done it once, the structure will be obvious.

## The mental model

The template has two parts split by an explicit comment banner:

```
// -----------------------------------------------------------------------------
// USER-EDITED SECTION
// -----------------------------------------------------------------------------
```

**Above the banner**: shared infrastructure. Env loading, audit helpers, pagination, SQL builders, fail-fast wrappers. You should not edit anything above the banner unless you have a specific reason — it's load-bearing safety code that's been hardened in #1687.

**Below the banner**: the actual backfill. Read functions, mutation steps, the dry-run preview, and the orchestration in `run()`.

The goal of customization is to keep edits below the banner so reviewers know exactly where to look. If you find yourself wanting to edit infrastructure, first check whether the existing helpers can do what you need.

## Step 1: Replace the placeholders

Copy the template, then do a find-and-replace pass on the new file:

| Placeholder | Replace with |
| --- | --- |
| `__SCRIPT_NAME__` | The kebab-case script name, e.g., `backfill-document-titles` |
| `__SCRIPT_DESCRIPTION__` | One-line description of what the script does |

Don't forget the env template — `assets/env-1password.template` has the same placeholder for the script name in its comment block.

The `SCRIPT_NAME` constant near the top of the script must exactly match the filename (minus the `.ts` extension). It's used to construct the env file path AND the audit log filenames.

**Also remove the `/* oxlint-disable */` directive at the top of the file.** It's only there to silence oxlint on the skill scaffold itself (where the helpers are intentionally unused until you wire them up). Once you've customized the script and every helper is used, the directive is dead weight, and sibling scripts in `apps/web/supabase/scripts/` don't have it.

## Step 2: Define your row types

Find the `// TODO: Define the row shape interfaces` comment near the top of the user-edited section. Add an interface per row shape you read:

```ts
interface DocumentRow {
  id: string;
  account_id: string;
  title: string | null;
  raw_content: string | null;
}

interface BriefRow {
  id: string;
  account_id: string;
  document_id: string;
}
```

Use the actual column names from the database. If you're not sure of the column types, check `packages/supabase/src/database.types.ts` (auto-generated from the schema) or run `pnpm supabase:web:typegen` to refresh them.

## Step 3: Write read functions

Each data source becomes a `fetchAll<Thing>()` function that uses `fetchAllPages`. Pattern:

```ts
async function fetchDocumentsMissingTitles(): Promise<DocumentRow[]> {
  return fetchAllPages<DocumentRow>('fetch documents missing titles', (from, to) =>
    supabase
      .from('document')
      .select('id, account_id, title, raw_content')
      .is('title', null)
      .order('id', { ascending: true })
      .range(from, to),
  );
}
```

Things to check:

- **Filter narrows to candidates** — `.is('title', null)` makes the script idempotent. Once you've backfilled a row, it's no longer a candidate.
- **`select` lists only the columns you need** — don't `.select('*')` unless you'll use everything; smaller rows = faster pagination.
- **`order` is stable** — `id` is unique, so this is fine.
- **`range(from, to)`** — `fetchAllPages` provides these. Don't add a `.limit()`.

If your script reads from multiple tables, write one function per table — and run them in parallel via `Promise.all` when the reads are independent. The project's React/Next perf rules call out waterfalls as a critical anti-pattern, and the same applies in scripts:

```ts
// Sequential reads — slow when each takes ~1s
const docs = await fetchDocumentsMissingTitles();
const accounts = await fetchActiveAccounts();
const links = await fetchExistingLinks();

// Parallel reads — total time = max(individual times)
const [docs, accounts, links] = await Promise.all([
  fetchDocumentsMissingTitles(),
  fetchActiveAccounts(),
  fetchExistingLinks(),
]);
```

Sequential is only correct when one read depends on the result of another (e.g., "fetch docs, then fetch their related metadata by ID").

## Step 4: Write the dry-run preview

The preview is what reviewers see when they run the script with no flags. It should give them enough information to spot a bad query before it mutates anything.

```ts
function printPreview(documents: DocumentRow[]) {
  console.log(`\n=== PREVIEW: backfill document titles ===\n`);
  console.log(`Documents missing titles: ${documents.length}`);

  const sample = documents.slice(0, 10);
  for (const doc of sample) {
    const preview = doc.raw_content?.slice(0, 60) ?? '(no content)';
    console.log(`  ${doc.id} (account ${doc.account_id}): "${preview}..."`);
  }

  if (documents.length > 10) {
    console.log(`  ... and ${documents.length - 10} more`);
  }
}
```

Two things make a preview good:

1. **Counts** — the reviewer needs to know the order of magnitude. "We're about to update 12 rows" vs "12 million rows" is the difference between routine and cancel-the-merge.
2. **Samples** — show ~10 representative rows. If they don't look right, the bug is in the read query and the run should be aborted before it mutates.

Don't print every row. Use `slice(0, 10)` and a summary line. A 50,000-row dump in the terminal is useless and slow.

## Step 5: Wire up the `run()` function

The `run()` function orchestrates the entire backfill. The structure:

```ts
async function run() {
  console.log(`Mode: ${DRY_RUN ? 'DRY RUN (default, read-only)' : 'EXECUTE'}`);
  console.log(`Supabase URL: ${supabaseUrl}\n`);

  // 1. Read everything
  const documents = await fetchDocumentsMissingTitles();
  console.log(`Found ${documents.length} documents missing titles`);

  // 2. Dry-run path: preview and return
  if (DRY_RUN) {
    printPreview(documents);
    console.log('\n=== Summary ===');
    console.log(`  Documents to update: ${documents.length}`);
    console.log('\nRun with --execute to apply.\n');
    return;
  }

  // 3. Execute path: confirm, init audit, mutate, report
  await confirmExecuteOrDie({
    'Documents to update': documents.length,
  });

  auditContext = await createAuditContext();
  const ctx = auditContext;

  await appendAuditEvent(ctx, {
    action: 'run-start',
    message: 'backfill-document-titles started',
    meta: { supabaseUrl },
  });

  console.log(`Audit log: ${jsonlPath(ctx)}`);
  console.log(`Rollback journal: ${rollbackJournalPath(ctx)}`);
  console.log(`Rollback SQL: ${rollbackPath(ctx)}`);

  // 4. Apply mutations using audit helpers — BATCHED, not per-row.
  //
  // Per-row audit calls would JSON-stringify each row separately and call
  // appendFile twice per row. For documents.length === 50_000, that's
  // 100,000 syscalls. Batching to MUTATION_BATCH_SIZE drops it to ~200.
  //
  // The pattern: compute the new value for every row up front, group rows
  // that share the same mutation, then dispatch one helper call per chunk.
  // For backfills where each row needs a *unique* update value (the title
  // is different per document), the chunk loop still helps because each
  // chunk produces ONE audit event with N row snapshots — not N events.

  const updates = documents.map((doc) => ({
    doc,
    newTitle: extractTitleFromContent(doc.raw_content),  // <-- your business logic
  }));

  let updated = 0;

  for (const batch of chunkArray(updates, MUTATION_BATCH_SIZE)) {
    await auditUpdatedRowsById(
      ctx,
      'document',
      toAuditRows(batch.map((u) => u.doc)),
      ['title'],
      'Backfilled document titles',
      async () => {
        // Per-row UPDATE statements via Supabase: a single .update().eq() per
        // row, but all under one audit event. If your mutation is uniform
        // across the batch (same new value), use .in() instead for one round-
        // trip per chunk.
        for (const { doc, newTitle } of batch) {
          const { error } = await supabase
            .from('document')
            .update({ title: newTitle })
            .eq('id', doc.id);
          if (error) throw new Error(`update ${doc.id}: ${error.message}`);
        }
      },
    );

    updated += batch.length;
    reportProgress('document title backfill', updated, updates.length);
  }

  // 5. Final report
  const remaining = await countExactOrThrow('remaining missing titles', () =>
    supabase
      .from('document')
      .select('id', { count: 'exact', head: true })
      .is('title', null),
  );

  console.log('\n=== Final Report ===');
  console.log(`  Updated: ${updated}`);
  console.log(`  Remaining missing titles: ${remaining}`);
}
```

The five-step structure (read → preview → confirm → mutate → report) is consistent across every backfill. A reviewer reading the file knows exactly what to look for in each section.

## Step 6: Verify the safety rails

Before considering the script done, walk through the [safety rails reference](safety-rails.md) checklist:

- [ ] `DRY_RUN = !EXECUTE` is intact — you didn't change the default
- [ ] Every read uses `fetchAllPages` (or has a hard `.limit(N)` with N <= 1000)
- [ ] Every mutation goes through an `audit*` helper, never raw `.insert/update/delete`
- [ ] Every bulk insert is wrapped in `chunkArray(rows, MUTATION_BATCH_SIZE)`
- [ ] The dry-run path returns BEFORE `confirmExecuteOrDie` is reached
- [ ] You haven't added a top-level `try/catch` that swallows errors
- [ ] Account scoping is explicit on every query (or the cross-tenant scope is commented)
- [ ] The final report queries match the operation (e.g., counting "remaining unfixed" after a fix)

## Step 7: Test on local Supabase

Always run dry-run against local Supabase first:

```bash
# Start local Supabase if not already running
pnpm supabase:web:start

# Generate the local env file (use the Local vault)
cd apps/web
VAULT_NAME=Local op inject \
  --in-file=supabase/scripts/.env.1p.<script-name> \
  --out-file=supabase/scripts/.env.<script-name> \
  --force

# Dry-run
pnpm exec tsx supabase/scripts/<script-name>.ts
```

The dry-run output should make sense. If you have seed data that exercises the candidate condition, the candidate count should be > 0.

If you don't have appropriate seed data, manually insert a few candidate rows via the local Supabase Studio (`http://localhost:54323`) and re-run.

Once dry-run looks right, run with `--execute` and verify:

1. The interactive `execute` confirmation appears
2. The audit log file is created in `apps/web/supabase/scripts/logs/`
3. The rollback SQL file is created
4. The candidate rows are actually updated (check via the Studio)
5. Re-running the script finds zero candidates (idempotency)

## Step 8: Test the rollback

Take the generated rollback file and run it through psql:

```bash
psql "postgresql://postgres:postgres@localhost:54322/postgres" \
  -f apps/web/supabase/scripts/logs/<script>-<run-id>.rollback.sql
```

The rollback should restore the previous state. Verify by re-running the script — the candidate count should be back to what it was before the first execute run.

If the rollback doesn't restore cleanly, the audit helpers were used incorrectly. Common issues:

- Snapshotting AFTER the mutation instead of BEFORE
- Listing wrong columns in `auditUpdatedRowsById` (extra columns get overwritten with stale values)
- Using a non-unique `matchColumns` in `auditInsertedRows`

See the [audit and rollback reference](audit-and-rollback.md) for details on each helper.

## Step 9: Commit and PR

The committed files:

- `apps/web/supabase/scripts/<script-name>.ts`
- `apps/web/supabase/scripts/.env.1p.<script-name>`

NOT committed (gitignored):

- `apps/web/supabase/scripts/.env.<script-name>` — local env file with secrets
- `apps/web/supabase/scripts/logs/` — audit logs and rollback files

PR description should include:

1. **What** — one-line summary of what the backfill does
2. **Why** — what state the data is in now and why we need it different
3. **Read query** — paste the candidate-finding query so reviewers can sanity-check it
4. **Dry-run output** — paste the preview from a local run
5. **Rollback plan** — confirm the script generates a rollback file and you've tested it on local

A good PR for a backfill is much more about the description than the code. The code is mostly the template; the value is in the explanation.

## What if the template doesn't fit my use case?

The template covers ~80% of backfill shapes. If yours is in the other 20%:

- **Read from external systems (Linear, Stripe, etc.)** — keep all the safety machinery, just add an external API client at the top of the user-edited section. The audit helpers still work for the resulting Supabase mutations.
- **Multi-step pipelines with intermediate state** — break `run()` into named functions (`step1ReadCandidates`, `step2ComputeChanges`, `step3ApplyChanges`) but keep the dry-run gate between read and apply.
- **Need to call RPCs that mutate** — wrap the RPC call in an `auditUpdatedRowsById` helper. Snapshot the affected rows BEFORE the RPC runs with `select('*')`, pass `getRestorableColumns(row)` as the columns argument (so the rollback restores the entire row because you don't know which columns the RPC touches), then call the RPC inside the `mutate` callback. If the RPC can return a structured error object, record a `mutation-error` lifecycle event before re-throwing so the audit log captures the error context. The reference backfill does this with `refresh_brief_primary_initiative`; see the "Restore-all-except-id pattern" and "Recording structured errors inside a mutation" sections of [audit-and-rollback.md](audit-and-rollback.md) for the full patterns.
- **Need cross-script coordination** — extract shared helpers into `apps/web/supabase/scripts/_lib/` (this directory does not exist yet — create it on first need). Don't share the SCRIPT_NAME constant or env file across scripts.

If you find yourself fundamentally fighting the template, that's a signal to step back and ask whether what you're doing is actually a backfill, or whether it should be a schema migration or an in-app cron instead. See the "When NOT to use this skill" section in the main SKILL.md.