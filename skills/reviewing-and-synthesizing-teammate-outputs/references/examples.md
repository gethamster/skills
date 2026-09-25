# Examples: Reviewing and Synthesizing Teammate Outputs

## Backend, frontend and tests split for a new endpoint

**Scenario:**

Illustrative scenario: a lead ran three teammates to add a saved-searches feature. One built the API endpoint, one built the UI panel, and one wrote end-to-end tests against the agreed schema.

**Walkthrough:**

The lead first confirmed all three tasks were done; the test teammate had not marked its task complete but its diff was finished. Comparing the endpoint against the schema stub showed a field renamed from query to searchQuery. The UI had been built against the stub, so the lead reverted the rename in the backend rather than touching the UI. After merging backend first, then UI, the end-to-end suite failed on pagination: the backend returned a cursor while the tests expected page numbers.

The lead treated this as a decision conflict, chose cursors, and issued a scoped rework task to the test teammate with the failing test attached. The rerun passed and the lead accepted all three tasks.

## Duplicate helpers after a refactor

**Scenario:**

Illustrative scenario: two teammates refactored separate directories of a billing service and each needed a currency-formatting function.

**Walkthrough:**

Both diffs merged without textual conflicts and every test passed. During the acceptance review, the lead read the combined diff and found two formatting helpers with slightly different rounding behavior. This was a semantic conflict that no test caught because each directory's tests used its own helper. The lead kept the helper that matched existing invoices, moved it to a shared utility module, and updated both call sites directly since the change was small.

It added a test pinning the rounding behavior and noted in the synthesis log that shared utilities should be assigned an owner in future decompositions.

## Independent review before a risky migration

**Scenario:**

Illustrative scenario: a team changed a database schema, the data access layer and a background job, and the change would run against production data.

**Walkthrough:**

After merging and passing cross-module checks, the lead did not accept immediately. It handed the combined diff to a reviewer teammate whose role was limited to checking correctness and safety and reporting findings. The reviewer flagged that the background job read a column the migration dropped before the job's new code deployed. The lead resolved it by splitting the migration into an additive step and a later removal step, then issued rework to the teammate who owned migrations.

The reviewer rechecked only the revised migration, found no further issues, and the lead accepted the change with the deployment order recorded in the synthesis note.
