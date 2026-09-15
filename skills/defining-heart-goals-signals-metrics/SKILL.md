---
name: defining-heart-goals-signals-metrics
description: "This skill teaches you how to use the Goals-Signals-Metrics (GSM) process to translate each HEART dimension into measurable, actionable product metrics that directly connect user experience outcomes to data you can track."
metadata:
  method: heart-framework
---

# Defining Goals, Signals, and Metrics with the HEART Framework: Essential Product Manager Skills

> This skill teaches you how to use the Goals-Signals-Metrics (GSM) process to translate each HEART dimension into measurable, actionable product metrics that directly connect user experience outcomes to data you can track.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 60-90 minutes |
| Outcome | You will be able to systematically convert abstract UX objectives into a concrete, trackable metrics table for any product or feature, ensuring every number on your dashboard has a clear purpose and connection to user outcomes. |
| Prerequisites | Basic understanding of the five HEART dimensions (Happiness, Engagement, Adoption, Retention, Task Success), Familiarity with product analytics tools (e.g., Amplitude, Mixpanel, Google Analytics), Experience writing product goals or OKRs |
| Part of | [HEART Framework](../../methods/heart-framework/METHOD.md) |

## Overview

The HEART Framework gives product teams five powerful lenses for evaluating user experience—Happiness, Engagement, Adoption, Retention, and Task Success. But the framework's real value isn't in the categories themselves; it's in the **Goals-Signals-Metrics (GSM) process** that transforms those categories from abstract labels into numbers your team can act on. Without GSM, teams end up with vanity metrics or dashboards full of data that nobody trusts.

Defining Goals, Signals, and Metrics is one of the most important **product manager skills** because it sits at the intersection of strategy and execution. A well-constructed GSM table forces clarity: What are we actually trying to improve? How will we know if users are behaving differently? What specific number will we track, and how will we compute it? This rigor prevents the common failure mode where teams ship features but have no way to evaluate whether users' lives actually improved.

This skill is applicable whether you're working on a new feature launch, a redesign of an existing flow, or a company-wide UX measurement initiative. By the end, you'll have a repeatable process for filling out a GSM table for any HEART dimension, grounded in real user behaviors rather than business-centric vanity metrics. The GSM process is the foundational step that powers every other skill in the [HEART Framework](https://tryhamster.com/methods/heart-framework) methodology.

## How It Works

The GSM process works as a three-layer funnel that progressively narrows abstract intentions into concrete data points.

**Goals** are qualitative, user-centered statements about what you want to achieve within a HEART dimension. They answer the question: *What outcome do we want for the user?* A good goal for the Engagement dimension might be "Users find enough value in the product to incorporate it into their weekly routine." Notice this is about the user's experience, not about a business KPI like revenue.

**Signals** are observable user behaviors or attitudes that would indicate the goal is being achieved. They answer: *How would we know if the goal is happening?* For the engagement goal above, signals might include "Users return to the product multiple times per week" or "Users interact with core features during each session." Signals are still somewhat abstract—they describe categories of evidence, not exact calculations.

**Metrics** are the specific, instrumented measurements derived from signals. They answer: *What exact number will we track, and how is it computed?* A metric for the engagement signal above might be "7-day active users / 28-day active users (DAU/MAU ratio)" or "median number of core-feature interactions per session per user."

The power of this three-layer process is that it creates an **audit trail from strategy to data**. When a stakeholder asks "Why are we tracking this number?" you can trace it back: this metric measures this signal, which indicates this goal, which supports this HEART dimension. This traceability is what separates rigorous product measurement from dashboard clutter.

Critically, you don't need to fill out every cell for every HEART dimension. The GSM process is also a **prioritization tool**—it forces teams to discuss which dimensions matter most for a given product or feature and focus instrumentation effort there.

## Step-by-Step Guide

### Step 1: Step 1: Choose the Right HEART Dimensions for Your Product or Feature

Before you fill out a single cell, decide which HEART dimensions are most relevant. Not every dimension applies to every project. A brand-new feature might focus on Adoption and Task Success, while a mature product might prioritize Retention and Happiness.

Gather your cross-functional team (PM, design, engineering, data) and ask: "Given what we're building or improving, which aspects of user experience matter most right now?" Select 2-3 dimensions to start with. Trying to instrument all five simultaneously often leads to shallow metrics across the board.

Write your selected dimensions across the top of a table (physical whiteboard or shared doc). You'll fill in rows for Goals, Signals, and Metrics underneath each one.

> **Pro tip:** If you're struggling to choose, ask: 'If this project succeeds wildly, what would users be doing differently?' The answer usually maps to 1-2 HEART dimensions naturally.

### Step 2: Step 2: Articulate User-Centered Goals for Each Dimension

For each selected dimension, write a goal statement that describes the desired user outcome in plain language. The goal must be about the **user's** experience, not about a business outcome. 'Increase revenue by 15%' is not a HEART goal. 'Users successfully complete their core task without needing support' is.

Use this template to get started: *"We want users to [feel/do/achieve] [specific outcome] when [using this product/feature]."* For example, under Happiness: "We want users to feel confident that the product gives them accurate, trustworthy results." Under Task Success: "We want users to complete the checkout flow without errors or confusion."

Discuss each goal as a team. Push back on goals that are too vague ("Users like the product") or too metric-shaped ("Users have a 90% completion rate"). Goals should be aspirational and qualitative—the quantification comes later.

> **Pro tip:** Read each goal aloud and ask: 'Could a designer and an engineer both independently identify work that supports this goal?' If not, it's too vague.

### Step 3: Step 3: Identify Observable Signals for Each Goal

For each goal, brainstorm user behaviors or attitudes that would serve as evidence the goal is being met. Signals fall into two categories:

- **Behavioral signals** are things users do: returning to the app, completing a task, sharing content, upgrading their account, abandoning a flow.
- **Attitudinal signals** are things users feel or express: survey responses, NPS scores, support ticket sentiment, app store review language.

List 2-5 candidate signals per goal. Be specific about the behavior. Instead of "users engage with the feature," write "users click into the detail view after seeing search results" or "users create more than one project within their first week."

After brainstorming, evaluate each signal on two criteria: (1) **Sensitivity** — will this signal actually change when the user experience changes? (2) **Feasibility** — can we actually observe and log this behavior with our current or planned instrumentation? Drop signals that fail either test.

> **Pro tip:** Attitudinal signals (like survey responses) are essential for the Happiness dimension but are often overlooked for others. Consider mixing behavioral and attitudinal signals where possible for a richer picture.

### Step 4: Step 4: Translate Signals into Specific, Computable Metrics

Now convert each surviving signal into a precise metric definition. A good metric definition includes:

- **Name**: A clear, descriptive label (e.g., "Weekly active rate")
- **Formula**: How it's calculated (e.g., "Count of users with ≥1 session in trailing 7 days / Count of users with ≥1 session in trailing 28 days")
- **Granularity**: How often it's computed (daily, weekly, monthly) and at what level (per-user, per-cohort, per-feature)
- **Data source**: Where the raw data comes from (event log, survey platform, CRM)

Avoid composite metrics that blend too many signals together—they become impossible to diagnose when they move. Prefer metrics that are **specific enough to be actionable**: when the number goes down, the team should be able to form a hypothesis about why.

For each HEART dimension, aim for 1-2 primary metrics and optionally 1 supporting metric. More than three metrics per dimension signals that you haven't prioritized enough.

> **Pro tip:** Write the metric formula in a way that a data engineer could implement it without a follow-up meeting. Ambiguity in metric definitions is the #1 source of 'the numbers don't match' arguments later.

### Step 5: Step 5: Validate Metrics Against Real Data

Before committing to your GSM table, do a quick sanity check. Pull a sample of real data (even a week's worth) and compute your proposed metrics. You're checking for:

- **Variance**: Does the metric actually move, or is it flatlined? A metric stuck at 99.8% won't help you detect improvements.
- **Sensitivity to known events**: If you recently shipped a change, does the metric reflect it? If you had an outage, does it dip?
- **Distribution shape**: Is the metric heavily skewed by outliers? Median might be more useful than mean.
- **Sample size**: Do you have enough data for the metric to be statistically meaningful at your desired granularity?

If a metric fails these checks, revise it. Sometimes you need to adjust the time window, change from a mean to a percentile, or pick a different signal entirely. This validation step often saves weeks of dashboard-building effort on metrics that turn out to be useless.

> **Pro tip:** If you don't have historical data yet (e.g., for a new feature), define the metrics anyway but add a 'validation checkpoint' to your project plan for 2 weeks after launch.

### Step 6: Step 6: Assemble and Socialize the GSM Table

Compile your work into a clean GSM table—a grid with HEART dimensions as columns and Goals, Signals, Metrics as rows. Each cell should be concise but specific enough that someone who wasn't in the room can understand it.

Share this table with stakeholders beyond the immediate team: engineering leads who will instrument the events, data scientists who will build the dashboards, and leadership who will use the metrics in decision-making. The act of socializing the table often surfaces blind spots: an engineer might point out that a particular event isn't currently logged, or a stakeholder might challenge whether a goal is truly user-centered.

Treat the GSM table as a **living document**. Revisit it quarterly or whenever the product strategy shifts. Metrics that made sense at launch may become irrelevant as the product matures. The table is the artifact, but the conversation it generates is the real value.

> **Pro tip:** Store the GSM table alongside your product strategy doc or PRD, not in a standalone analytics wiki. This keeps the 'why' connected to the 'what' and makes it easier for new team members to understand the measurement philosophy.

## Best Practices

- Always start with goals before signals or metrics. Teams that jump straight to metrics end up measuring what's easy to track rather than what matters to users.
- Limit each HEART dimension to 1-2 primary metrics. More metrics create dashboard bloat and dilute focus. If everything is a priority metric, nothing is.
- Write metric definitions with enough precision that two different analysts would compute the same number independently. Include the formula, time window, user cohort definition, and any filters (e.g., excluding internal users).
- Mix leading and lagging indicators. Signals like 'user completed onboarding' (leading) and 'user retained at 30 days' (lagging) give you both early warnings and outcome confirmation.
- Revisit your GSM table after major product changes. A metric defined for a V1 feature may not capture the user experience of V2. Schedule a quarterly GSM review as a team ritual.
- Use the GSM table as a communication tool, not just a measurement tool. When proposing a new feature, show which cell in the GSM table it's expected to move. This grounds prioritization conversations in user outcomes.

## Common Mistakes

- **Writing business goals instead of user goals (e.g., 'Increase conversion rate to 5%' instead of 'Users find the signup process easy and trustworthy').** — Reframe every goal from the user's perspective. Ask: 'What does this goal mean for the person using the product?' Business KPIs can be secondary metrics, but HEART goals must be user-centered.
- **Choosing metrics that are too composite or abstract, like a single 'UX score' that averages across dimensions.** — Keep metrics granular and dimension-specific. Composite scores hide what's actually changing. If Engagement goes up but Happiness goes down, a blended score would mask both movements.
- **Trying to fill every cell for all five HEART dimensions, resulting in 15+ metrics nobody actually monitors.** — Prioritize 2-3 dimensions most relevant to your current product phase. It's better to deeply instrument and act on two dimensions than to superficially track five.
- **Confusing signals with metrics. Teams write 'DAU/MAU ratio' in the signals row, skipping the conceptual step of identifying what user behavior they're trying to observe.** — Enforce the distinction: signals describe categories of behavior ('users return frequently'), metrics define exactly how you'll count it ('DAU/MAU ratio, computed daily, for users who completed onboarding'). The signal layer is where you think; the metric layer is where you compute.
- **Setting the GSM table once and never revisiting it, even as the product evolves significantly.** — Schedule explicit GSM review checkpoints—at minimum quarterly, and always after a major launch or strategy pivot. Outdated metrics are worse than no metrics because they create false confidence.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/heart-framework/METHOD.md) — HEART Framework

## Related Skills

- [Measuring Adoption Rates and Task Success for New Features](../measuring-adoption-and-task-success/SKILL.md)
- [Tracking Engagement and Retention Metrics at Scale](../tracking-engagement-and-retention-metrics/SKILL.md)
- [Measuring User Happiness Through Surveys and Satisfaction Scores](../measuring-user-happiness-surveys/SKILL.md)
- [Running HEART Framework Workshops with Cross-Functional Teams](../running-heart-framework-workshops/SKILL.md)
- [Presenting HEART Metrics in Product Manager Interviews](../presenting-heart-metrics-in-interviews/SKILL.md)
- [Building HEART Metric Dashboards for Product Teams](../building-heart-dashboards/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
