# Examples: Shipping Winning Variants and Cleaning Up Flags

## A clean handoff after a winning onboarding test

**Scenario:**

Illustrative scenario: an onboarding experiment testing a shorter setup checklist ends with a clear win on completion and flat support contacts. The team uses GitHub and has PostHog's GitHub integration connected.

**Walkthrough:**

The product manager clicks End experiment, chooses the test variant and ticks the option to open a draft cleanup PR. PostHog rolls the test variant out to everyone. For three days the team watches completion and errors, which look like the test group's numbers.

An engineer reviews the draft PR, finds one extra reference in a test fixture that the PR missed, and adds it. After the deploy, the flag's evaluations drop away, and only then does she disable the flag. The product manager archives the experiment and writes the result, interval and decision in its description.

## Keeping control after a loss

**Scenario:**

Illustrative scenario: a test of an interactive tutorial in onboarding shows the variant losing on completion. The team decides to keep the existing flow.

**Walkthrough:**

Ending the experiment with control selected rolls control out to everyone, so no user sees the tutorial any more. The cleanup PR removes the tutorial component, its flag checks and its assets.

The written record matters most here. The description notes the hypothesis, the losing result and the team's reading of the replays: users skipped the tutorial and then stalled. When the idea comes up again, the record shows what was tried and why it failed.

## Finding forgotten experiment flags

**Scenario:**

Illustrative scenario: during a routine review, an engineer filters the PostHog flag list for stale flags and finds several that belonged to experiments ended months earlier.

**Walkthrough:**

Each of those flags is rolled out to everyone with no property filters, which means the code checks a flag that always returns the same value. For each one, she searches the codebase for the key, hardcodes the shipped path and removes the dead branch.

She deploys the changes, confirms the flags are no longer evaluated, and then disables and deletes them. The experiments keep their history. The team adds a rule that every new experiment flag gets a cleanup task in the backlog when it is created.
