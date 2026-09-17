---
name: posthog-ab-testing
description: "Guides users through designing, launching, and reading A/B tests via PostHog from Hamster. Covers experiment setup, feature flag wiring, metrics, cohorts, and results analysis."
---

This skill governs how to create and manage A/B tests through PostHog's API from within Hamster. It assumes the PostHog connection is active. Use this skill whenever the user wants to design, launch, duplicate, check, or interpret an experiment — not just when they say "A/B test" but also when they say "try two variants," "test this change," or "which version performs better."

## Prerequisites

- **PostHog connection must be active.** If the user asks to run an experiment but PostHog isn't connected, tell them to connect it in Connections before proceeding.
- **Project ID required.** Most PostHog actions need a `project_id`. If the user doesn't provide one, call `POSTHOG_LIST_ORGANIZATION_PROJECTS` to list available projects and ask which to use.
- **A clear hypothesis.** Before creating anything, help the user articulate: what change, what outcome, what audience, what duration.

## The A/B test lifecycle

A well-run experiment moves through five stages. Each stage maps to specific PostHog tools.

### 1. Define the hypothesis

Before touching any tool, nail down:

- **What** — the specific change being tested (e.g., "Move signup CTA above the fold")
- **Why** — the expected mechanism (e.g., "Reduces scroll friction for first-time visitors")
- **Metric** — the primary success metric (e.g., "Signup conversion rate")
- **Audience** — who's included (e.g., "New visitors, last 7 days")
- **Duration** — how long to run before calling it (e.g., "14 days or 1,000 users per variant, whichever comes first")

If the user can't answer these, ask. Don't create a half-baked experiment.

### 2. Create the feature flag

PostHog experiments run on top of feature flags. Create the flag first.

**Tool:** `POSTHOG_CREATE_FEATURE_FLAG`

Key fields:

- `name` — descriptive, e.g., `"signup-cta-placement-test"`
- `key` — the flag key used in code, e.g., `"signup_cta_placement"`
- `variants` — at minimum `control` and `test` (or more descriptive names like `variant_a`, `variant_b`)
- `rollout_percentage` — typically `100` for an A/B test (the experiment handles variant allocation)

**Supporting tools:**

- `POSTHOG_GET_FEATURE_FLAG_DETAILS` — verify the flag was created correctly
- `POSTHOG_GET_FEATURE_FLAG_STATUS` — check if the flag is active and serving
- `POSTHOG_CREATE_FEATURE_FLAG_COHORT` — if you need to restrict flag exposure to a specific cohort

### 3. Create the experiment

**Tool:** `POSTHOG_CREATE_PROJECT_EXPERIMENT`

Key fields:

- `name` — human-readable experiment name
- `feature_flag_id` — the ID of the flag created in step 2
- `variants` — must match the flag's variants
- `metrics` — the event(s) or saved metric(s) that define success
- `filters` — optional targeting (e.g., property filters for audience scoping)
- `start_date` / `end_date` — optional, but recommended for time-boxing

**Supporting tools:**

- `POSTHOG_CREATE_EXPERIMENT_SAVED_METRIC` — create a reusable metric definition (e.g., "signup conversion" as a funnel from `page_view` → `signup_completed`). Reference this saved metric in the experiment's `metrics` field.
- `POSTHOG_GET_EXPERIMENT_SAVED_METRIC` — retrieve an existing saved metric by ID
- `POSTHOG_CREATE_EXPERIMENT_EXPOSURE_COHORT` — create a cohort that tracks who was exposed to the experiment, useful for after-the-fact analysis
- `POSTHOG_CREATE_EXPERIMENT_HOLDOUT` — create a holdout group (users who see neither variant) if the user wants to compare against a no-change baseline
- `POSTHOG_GET_EXPERIMENTS_ELIGIBLE_FEATURE_FLAGS` — if unsure which flags can be used for experiments, list eligible ones

### 4. Monitor and verify

Once the experiment is live:

**Tools:**

- `POSTHOG_GET_EXPERIMENT_DETAILS` — retrieve full experiment config, status, and variant setup
- `POSTHOG_GET_EXPERIMENTS_STATS` — pull experiment results: variant counts, metric values, significance levels
- `POSTHOG_GET_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION` — find experiments where the flag hasn't been wired into code yet (catches the "we launched but forgot to implement" mistake)

### 5. Read results and decide

**Tool:** `POSTHOG_GET_EXPERIMENTS_STATS`

Interpret the output:

- **Significant + positive** — ship the winning variant. Update the feature flag to roll out 100% to that variant.
- **Significant + negative** — keep control. Archive the experiment.
- **Insignificant** — either run longer (more sample) or conclude there's no meaningful difference. Don't fake a winner.

**Cleanup tools:**

- `POSTHOG_DELETE_PROJECT_EXPERIMENT` — remove the experiment after it's concluded
- `POSTHOG_BULK_DELETE_FEATURE_FLAGS` — clean up flags that are no longer needed
- `POSTHOG_DELETE_EXPERIMENT_SAVED_METRIC` — remove saved metrics that won't be reused
- `POSTHOG_DELETE_EXPERIMENT_HOLDOUT` — remove holdout groups no longer in use

## No-code web experiments

If the user wants to test a visual change without engineering involvement (e.g., swapping a headline, changing a button color):

**Tool:** `POSTHOG_CREATE_WEB_EXPERIMENT`

This uses PostHog's visual editor — no feature flag or code deployment required. Good for fast, low-risk tests on marketing pages.

**Cleanup:** `POSTHOG_DELETE_WEB_EXPERIMENT`

## Duplicating experiments

If the user wants to run a similar test with a small variation:

**Tool:** `POSTHOG_DUPLICATE_EXPERIMENT`

This copies the experiment config (variants, metrics, targeting) so you only change what's different. Faster than recreating from scratch.

## Tool reference — quick lookup

| Stage | Tool slug | Action |
| --- | --- | --- |
| Setup | `POSTHOG_LIST_ORGANIZATION_PROJECTS` | List projects to get project_id |
| Flag | `POSTHOG_CREATE_FEATURE_FLAG` | Create the flag that powers variants |
| Flag | `POSTHOG_GET_FEATURE_FLAG_DETAILS` | Verify flag config |
| Flag | `POSTHOG_GET_FEATURE_FLAG_STATUS` | Check if flag is live |
| Flag | `POSTHOG_CREATE_FEATURE_FLAG_COHORT` | Restrict flag to a cohort |
| Metric | `POSTHOG_CREATE_EXPERIMENT_SAVED_METRIC` | Create reusable success metric |
| Metric | `POSTHOG_GET_EXPERIMENT_SAVED_METRIC` | Read a saved metric |
| Metric | `POSTHOG_DELETE_EXPERIMENT_SAVED_METRIC` | Delete a saved metric |
| Experiment | `POSTHOG_CREATE_PROJECT_EXPERIMENT` | Create the experiment |
| Experiment | `POSTHOG_GET_EXPERIMENT_DETAILS` | Read experiment config |
| Experiment | `POSTHOG_GET_EXPERIMENTS_STATS` | Read results & significance |
| Experiment | `POSTHOG_DUPLICATE_EXPERIMENT` | Clone an experiment |
| Experiment | `POSTHOG_DELETE_PROJECT_EXPERIMENT` | Delete an experiment |
| Audience | `POSTHOG_CREATE_EXPERIMENT_EXPOSURE_COHORT` | Track who was exposed |
| Audience | `POSTHOG_CREATE_EXPERIMENT_HOLDOUT` | Create a holdout group |
| Audience | `POSTHOG_GET_EXPERIMENT_HOLDOUTS` | List holdouts |
| Audience | `POSTHOG_GET_EXPERIMENT_HOLDOUT_DETAILS` | Read a holdout |
| Audience | `POSTHOG_DELETE_EXPERIMENT_HOLDOUT` | Delete a holdout |
| Eligibility | `POSTHOG_GET_EXPERIMENTS_ELIGIBLE_FEATURE_FLAGS` | List flags eligible for experiments |
| Eligibility | `POSTHOG_GET_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION` | Find experiments missing flag wiring |
| Web | `POSTHOG_CREATE_WEB_EXPERIMENT` | No-code visual experiment |
| Web | `POSTHOG_DELETE_WEB_EXPERIMENT` | Delete a web experiment |
| Cleanup | `POSTHOG_BULK_DELETE_FEATURE_FLAGS` | Bulk delete unused flags |

## Common mistakes

- **Creating the experiment before the feature flag.** PostHog experiments require a feature flag to exist first. Always create the flag, then the experiment.
- **Vague metrics.** "Engagement" is not a metric. Define a specific event or funnel (e.g., `$pageview → signup_completed`). Use saved metrics for reuse across experiments.
- **No sample size plan.** Launching without a sense of how many users you need leads to calling insignificant results "trends." Estimate sample size before starting.
- **Peeking too early.** Checking stats daily and stopping at the first significant p-value inflates false positives. Pre-commit to a duration or minimum sample.
- **Forgetting to wire the flag into code.** The experiment is live but the flag isn't checked anywhere in the codebase. Use `POSTHOG_GET_EXPERIMENTS_REQUIRING_FLAG_IMPLEMENTATION` to catch this.
- **Not cleaning up.** Old experiments and flags accumulate. Delete concluded experiments and unused flags to keep the workspace navigable.

## Prompts to get unstuck

- "What change are you testing, and what do you expect to happen?"
- "What event tells you the test worked?"
- "Who should be in this experiment — everyone, or a specific segment?"
- "How long are you willing to run this before calling it?"
- "Is this a code-backed test or a no-code visual change?"
