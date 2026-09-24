# Examples: Defining Verifiable Success Criteria

## Data backfill agent

**Scenario:**

Illustrative scenario: a team asks an agent to backfill a missing region field on a customer table. The original ticket says 'fix the region data'.

**Walkthrough:**

The outcome sentence becomes 'every active customer row has a valid region code'. Scope is set to active customers only, with archived rows excluded. The threshold is 100% of in-scope rows non-null and matching the allowed code list, checked by a saved SQL query. A disqualifying error is any change to rows outside scope, detected by comparing row counts and a checksum of excluded rows before and after.

The step plan pairs 'write backfill script' with 'dry run returns expected row count' and 'apply' with the final query. The agent's run log must include the query output, not a summary.

## Support triage classifier rollout

**Scenario:**

Illustrative scenario: an agent is deployed to route incoming billing tickets, and the product owner wants it to be 'accurate'.

**Walkthrough:**

The team replaces 'accurate' with a target of at least 90% agreement with human routing on a sample, a number they chose as a recommendation. The time window is the first two weeks after launch, and scope is English billing tickets with spam excluded. The method is a weekly random sample of 50 tickets reviewed by one named support lead against a written routing guide. Evidence is the review sheet stored with the rollout record.

An exception rule says a known outage week is excluded and triggers a fresh review window.

## Documentation update agent

**Scenario:**

Illustrative scenario: an agent is asked to update API docs after an endpoint rename, and the first draft of the criteria reads 'docs updated'.

**Walkthrough:**

The team rewrites it as three assertions: no page references the old endpoint name, every code sample using the new endpoint runs without error, and the changelog has an entry for the rename. Each assertion maps to a check: a text search returning zero matches, a script that executes the samples, and a file check on the changelog. Scope is the public docs folder only, and edits outside it are disqualifying. The qualitative requirement that explanations stay clear becomes a three-level rubric applied by a reviewer.

Partial progress is reported per assertion, so a passing search with failing samples is visible as incomplete.
