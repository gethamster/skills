# Examples: Evaluating gstack Against Your Current AI Coding Setup

## A team whose problem turned out to be style

**Scenario:**

Illustrative scenario: a team using Cursor wants to evaluate gstack because AI-written code in their repository looks inconsistent: different error handling, different naming, different test layouts.

**Walkthrough:**

In Step 2 the team maps each problem to a layer. All three are style and conventions problems, which project rules files are built to handle. They write a rules file for error handling, naming and test layout and run it for two weeks.

The inconsistency drops, and nobody reports scope or review problems. The team records the decision: no gstack trial for now, rules file adopted, revisit in a quarter. The evaluation took an afternoon instead of a full trial because the layer question came first.

## A parallel trial on a real feature

**Scenario:**

Illustrative scenario: two engineers on a product team build the same small feature, a saved-search alert, one with the team's current Claude Code setup and one with gstack.

**Walkthrough:**

Before starting, they agree on four criteria: problems found before merge, problems found in the week after merge, rework after review, and time spent answering the agent's questions. They weight post-merge problems highest, because escaped bugs are the team's main pain.

The gstack run spends more time up front, mostly in `/office-hours` and the plan reviews, and `/review` catches a race condition before merge. The other run ships sooner and has one bug reported after release. The team decides to adopt `/review` and `/qa` for every branch, and to use the planning skills only for new features, then sets a date to revisit.

## A team that decided against full adoption

**Scenario:**

Illustrative scenario: a platform team with a mature review process, strict CI and written architecture records trials gstack on an internal service change.

**Walkthrough:**

The trial shows that the planning reviews mostly repeat decisions already captured in the team's architecture records, and the team repeatedly overrides the preference for broader implementations. `/qa` adds little, because the service has no browser interface.

The `/codex` second opinion, however, finds one issue their own review missed. The team's written decision adopts `/codex` for changes to critical paths and keeps the rest of their process. They note the friction with the defaults as the main reason against full adoption.
