---
name: goal-stewardship
description: "Guides the construction of OGSM goals — choosing units, direction, aggregation, baseline, and target. Enforces that every measurable goal has a metric with all 5 components. Validates that the measurement story is honest (not vanity). Flags goals with no linked initiatives (unanchored goals are wishes). Use when creating or editing a goal in the OGSM framework, setting up goals or OKRs, or reviewing whether a goal is well-formed."
version: "1.0.0"
metadata:
  category: "Workflows"
---

# Goal Stewardship

This skill governs the construction of measurable goals in the OGSM framework (Objective → Goals → Strategies → Measures, annual cadence). It powers Phase 1 (Set Goals) of the Hamster Company Direction workflow: Set Goals (OGSM) → Commit Work (Initiatives) → Run Discovery → Write Briefs → Routines Monitor & Feedback.

In OGSM, Objectives are qualitative. Goals are measurable and sit under Objectives. Strategies are qualitative and sit under Goals; they accept initiatives. Measures are measurable and sit under Strategies. This skill governs the Goal layer — the measurable outcomes that translate a qualitative objective into something you can track.

## Trigger Conditions

- When creating or editing a goal in the OGSM framework.
- When a user asks to set up goals, OKRs, or measurable outcomes for an annual planning cycle.
- When reviewing whether a goal is well-formed before committing it.
- When a goal lacks a metric, has a partial metric, or has a metric missing one of the 5 components.
- When a goal has no linked initiatives and needs to be flagged as unanchored.
- When converting a qualitative objective into measurable goals.

## Core Guidance

### Every measurable goal MUST have a metric with all 5 components

1. **Unit** — The concrete thing being counted. Must be specific and unambiguous. Good: "weekly active users," "net revenue retention rate," "p50 page load time." Bad: "engagement," "growth," "user satisfaction."
2. **Direction** — Whether the goal is to increase or decrease the metric. Must be explicit: "increase" or "decrease." Never leave direction implicit.
3. **Aggregation** — How the metric is computed over the measurement period. Must specify the aggregation function and the time window. Good: "weekly average over the fiscal year," "cumulative sum for Q3," "p50 of daily values in the last 30 days." Bad: "average" without a time window.
4. **Baseline** — The current measured value of the metric before the goal period starts. Must be a real number from actual measurement, never an estimate or "to be determined." If you cannot measure the baseline, you cannot measure progress — the goal is not ready.
5. **Target** — The specific value the metric must reach by the end of the goal period. Must be a single number, not a range. Must be achievable given the baseline and the time available — but ambitious enough to matter.

### Honesty rules

- Never use a vanity metric as the unit. A vanity metric is one that goes up regardless of whether the team is doing good work (total signups, total downloads, total page views). Always use an outcome metric that the team's work can actually move (weekly active users, activation rate, retention rate, p50 load time).
- Never set a target without checking the baseline. A target without a baseline is a wish — there is no way to know if it represents progress.
- Never use a metric you cannot measure today. If the instrumentation does not exist to produce the baseline, the goal is blocked until instrumentation is built.
- Never aggregate in a way that hides regressions. A cumulative sum over a year hides a collapse in Q4. Choose aggregation that surfaces the signal you care about.

### Anchoring rules

- Every goal MUST have at least one linked initiative. A goal with no initiatives is unanchored — it is a wish, not a commitment. Flag it explicitly: "This goal has no linked initiatives. It is unanchored. Link initiatives before committing."
- If a goal cannot attract initiatives, the goal itself may be wrong — either the metric is not actionable or the target is not credible. Surface this as a problem to resolve, not a gap to tolerate.

### Structural rules

- Objectives are qualitative. Goals are measurable. Never write a goal that is qualitative — that is an objective, not a goal. If the statement has no number, it is not a goal.
- One goal, one metric. Never bundle two metrics into a single goal (e.g., "increase WAU and decrease churn"). Split into two goals.
- The goal period must match the OGSM cadence (annual). State the period explicitly.

## Concrete Examples

### Example 1: Activation goal

**Objective:** Make Hamster the default workspace for product teams.

**Goal:** Increase the weekly activation rate of new workspaces.

- **Unit:** Percentage of new workspaces that create at least one brief within 7 days of creation.
- **Direction:** Increase.
- **Aggregation:** Weekly average over the fiscal year (each week's rate averaged across all weeks in the year).
- **Baseline:** 23% (measured Jan 1, current activation rate from PostHog funnel).
- **Target:** 40%.

This goal is well-formed: the unit is specific and outcome-focused, the baseline is a real measurement, the target is ambitious but plausible (nearly doubling activation), and the direction is explicit.

### Example 2: Performance goal

**Objective:** Make Hamster feel instant.

**Goal:** Decrease p50 page load time for the workspace dashboard.

- **Unit:** p50 of page load time (milliseconds) for the workspace dashboard route, measured client-side via the browser performance API.
- **Direction:** Decrease.
- **Aggregation:** p50 of daily values, averaged over the last 30 days of the fiscal year.
- **Baseline:** 1,840ms (measured via PostHog performance events, 30-day rolling average ending Jan 1).
- **Target:** 800ms.

This goal is well-formed: decreasing direction is explicit, the aggregation surfaces the median experience (not just bad days or good days), the baseline is a real measurement, and the target is specific.

### Example 3: Retention goal

**Objective:** Make Hamster a daily habit, not a monthly tool.

**Goal:** Increase net revenue retention rate for paying accounts.

- **Unit:** Net revenue retention rate (NRR) — (starting MRR + expansion - contraction - churn) / starting MRR, measured across all paying accounts.
- **Direction:** Increase.
- **Aggregation:** Quarterly NRR, averaged across the 4 quarters of the fiscal year.
- **Baseline:** 92% (measured from Stripe + Supabase, full-year trailing average).
- **Target:** 110%.

This goal is well-formed: NRR is an honest outcome metric (not a vanity metric), the aggregation is explicit, the baseline is real, and the target represents a meaningful step-change (from net churn to net expansion).

## Anti-Patterns

### Anti-pattern 1: Goal with a metric but no baseline

> **Goal:** Increase weekly active users. Target: 50,000.

**Why it fails:** No baseline. You cannot measure progress without knowing where you started. The team cannot tell if 50,000 is a 10% improvement or a 10x improvement. The goal is not ready to commit.

**Fix:** Measure the baseline first: "Baseline: 12,000 WAU (measured Jan 1). Target: 50,000."

### Anti-pattern 2: Vanity metric as the unit

> **Goal:** Increase total signups. Target: 100,000.

**Why it fails:** Total signups is a vanity metric — it goes up regardless of whether the product is getting better. A team can hit this goal while activation, retention, and revenue all collapse. The metric does not measure an outcome the team's work can move.

**Fix:** Replace with an outcome metric: "Increase weekly active users. Baseline: 12,000. Target: 50,000." Now the team must actually make the product worth using, not just drive top-of-funnel noise.

### Anti-pattern 3: Unanchored goal (no linked initiatives)

> **Goal:** Decrease p50 page load time to 800ms. Baseline: 1,840ms.

**Why it fails:** No initiatives are linked to this goal. Nobody has committed work that would move the metric. The goal is a wish — it will not move itself. Without initiatives, there is no path from baseline to target.

**Fix:** Flag it: "This goal has no linked initiatives. It is unanchored. Link initiatives before committing." Then either link existing initiatives or create new ones that plausibly move the metric (e.g., code-splitting initiative, image optimization initiative, query optimization initiative).

### Anti-pattern 4: Qualitative goal (it is actually an objective)

> **Goal:** Improve the onboarding experience.

**Why it fails:** There is no number. This is a qualitative statement — it is an objective, not a goal. Without a metric, there is nothing to measure and no way to know if the goal was achieved.

**Fix:** Convert to a measurable goal: "Increase the percentage of new workspaces that create at least one brief within 7 days. Baseline: 23%. Target: 40%."

### Anti-pattern 5: Bundled metrics

> **Goal:** Increase weekly active users and decrease churn.

**Why it fails:** Two metrics in one goal. The team cannot track which initiative moved which metric. Progress on one can mask regression on the other. One goal, one metric.

**Fix:** Split into two goals: (1) "Increase weekly active users. Baseline: 12,000. Target: 50,000." (2) "Decrease monthly churn rate. Baseline: 8%. Target: 4%."

### Anti-pattern 6: Target without checking if the baseline makes it achievable

> **Goal:** Increase NRR to 150%. Baseline: 92%.

**Why it fails:** The gap between baseline (92%) and target (150%) is 58 percentage points in a single year. This is not a stretch goal — it is a fantasy. The team will disengage because the target is not credible. Goals must be ambitious but achievable.

**Fix:** Set a target that is ambitious but plausible: "Baseline: 92%. Target: 110%." Then, if the team exceeds 110%, celebrate. But do not set a target that the team does not believe is achievable.

## Validation Criteria

A goal is well-formed when ALL of the following are true:

1. **Metric completeness:** The goal has a metric with all 5 components — unit, direction, aggregation, baseline, target. None are missing. None are "to be determined."
2. **Unit honesty:** The unit is an outcome metric the team's work can move, not a vanity metric. If the unit goes up regardless of whether the team does good work, it fails this check.
3. **Baseline is real:** The baseline is a measured number from actual instrumentation, not an estimate. If the instrumentation does not exist, the goal is blocked.
4. **Target is credible:** The target is ambitious but achievable given the baseline and the time available. The gap between baseline and target is large enough to matter but not so large that the team disengages.
5. **Direction is explicit:** The goal says "increase" or "decrease." Direction is never implicit.
6. **One goal, one metric:** The goal has exactly one metric. No bundled metrics.
7. **Anchored:** The goal has at least one linked initiative. If it does not, it is flagged as unanchored and must not be committed until initiatives are linked.
8. **Period is stated:** The goal period is explicit and matches the OGSM cadence (annual).
9. **Not qualitative:** The goal statement contains a number. If it does not, it is an objective, not a goal.
