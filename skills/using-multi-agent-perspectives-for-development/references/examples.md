# Examples: Using gstack's Role Perspectives

## A feature request that the CEO review reframes

**Scenario:**

Illustrative scenario: a product engineer is asked to add CSV import to a small scheduling app, so customers can bring in appointments from an old tool.

**Walkthrough:**

The engineer runs `/office-hours`, then `/plan-ceo-review` in selective expansion mode. The CEO review asks what the import is really for and suggests the underlying job is switching tools without losing history. It surfaces two opt-in additions: mapping the old tool's columns automatically, and a preview before anything is written.

The engineer accepts the preview and declines automatic mapping for now. `/plan-eng-review` then locks the design: a staging table, a validation step and a test plan covering malformed rows. Each role stayed on its own question, and the plan the build starts from reflects both.

## Two reviewers on a payment change

**Scenario:**

Illustrative scenario: a developer changes how refunds are recorded in a billing service. The change is small but touches money.

**Walkthrough:**

The developer runs `/review`, which auto-fixes a stale comment and asks about a missing idempotency check. Because the code handles money, the developer also runs `/codex` in review mode on the same branch.

The comparison shows one overlapping finding, the idempotency check, and one unique to Codex: a refund amount compared without handling currency rounding. The developer confirms the rounding problem with a test, fixes both issues, and notes in the pull request which reviewer found what. The overlapping finding was fixed first, as the strongest signal.

## When the roles disagree

**Scenario:**

Illustrative scenario: during `/autoplan` on a dashboard redesign, the CEO review proposes adding real-time updates, and the engineering review flags that the current backend cannot support them without new infrastructure.

**Walkthrough:**

`/autoplan` surfaces the conflict as a taste decision instead of settling it. The team lead reads both positions: the CEO review's case that live data is what users want, and the engineering review's estimate of the infrastructure work.

The lead decides to ship the redesign with manual refresh now and records real-time updates as a separate item with the engineering review's notes attached. The decision and its reasoning go into the plan, so the next review does not reopen it.
