# Examples: Batching and Parallelizing Decisions

## Support triage in one call

**Scenario:**

Illustrative scenario: a support agent makes five separate model calls per ticket for urgency, product area, sentiment, language and whether a refund is mentioned.

**Walkthrough:**

The team maps the five decisions and finds none uses another's answer, and all read the ticket text plus account metadata. They define the five questions in code and send them with one snapshot. Code routes each answer on its own threshold, so an uncertain sentiment score escalates only that field. Replaying 300 recorded tickets through both paths, answers match on every question, and the made-up numbers in their dashboard show the decision stage dropping from five round trips to one.

They switch the live loop and keep the sequential path as a replay baseline.

## Splitting a research agent into two tiers

**Scenario:**

Illustrative scenario: a research agent asks which sources are relevant, which specialist should summarize, and which of that specialist's tools to run, all in one batch.

**Walkthrough:**

Agreement testing shows the tool answer shifting between batched and sequential runs. The pairwise check reveals the tool question depends on the specialist answer, since each specialist has a different toolset. The team moves relevance scoring and specialist choice into the first tier, has code act on the specialist choice and write it into state, then asks the tool question in a second tier. Agreement returns to full on the replay set.

The loop now makes two calls instead of one per source plus two.

## Removing a dependency by rewording

**Scenario:**

Illustrative scenario: a coding agent asks whether a change is risky, then separately asks whether tests are needed given the risk answer.

**Walkthrough:**

The second question consumes the first answer, forcing a second tier. The team rewrites it to judge the diff directly: does this change touch code paths without existing tests. Both questions now read only the diff and repository metadata, so they pass the independence test. They batch the pair with the existing routing question in one call.

Replaying 200 recorded diffs shows matching answers and one fewer round trip per iteration.
