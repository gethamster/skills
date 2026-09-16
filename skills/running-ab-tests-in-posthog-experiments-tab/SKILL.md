---
name: running-ab-tests-in-posthog-experiments-tab
description: "This skill teaches you how to run experiments in PostHog from start to finish, covering experiment creation, variant allocation via feature flags, goal metric configuration, launch, and result monitoring inside the Experiments UI."
metadata:
  homepage: https://tryhamster.com
  method: posthog-experiments-onboarding-a-b-test-method
---

# How to Run Experiments in PostHog Using the Experiments Tab

> This skill teaches you how to run experiments in PostHog from start to finish, covering experiment creation, variant allocation via feature flags, goal metric configuration, launch, and result monitoring inside the Experiments UI.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes |
| Outcome | You can independently create, launch, and monitor a properly configured A/B test in PostHog's Experiments tab, with correct variant allocation, meaningful goal metrics, and a clear stopping rule, so that your team ships product changes backed by real user data instead of opinions. |
| Prerequisites | PostHog account with project-level admin or experiment-creation permissions, PostHog JS snippet or SDK installed and sending events from your application, Basic understanding of feature flags in PostHog (see sibling skill: Setting Up PostHog Feature Flags for Experiment Variants), A written hypothesis and at least one measurable success metric defined before starting (see sibling skill: Designing Experiment Hypotheses and Success Metrics for Onboarding), Familiarity with event-based analytics concepts such as custom events, page views, and funnels |
| Part of | [PostHog Experiments Onboarding A/B Test Method](../../methods/posthog-experiments-onboarding-a-b-test-method/METHOD.md) |

## Overview

Running an A/B test in PostHog's Experiments tab is the central execution step inside the [PostHog Experiments Onboarding A/B Test Method](https://tryhamster.com/methods/posthog-experiments-onboarding-a-b-test-method). Before you reach this step, you will have already written a hypothesis and selected success metrics. After it, you will interpret results and ship the winning variant. This skill covers the middle ground: the actual mechanics of creating, configuring, launching, and monitoring an experiment inside the PostHog UI.

The Experiments tab is where hypothesis meets infrastructure. You name the experiment, attach a feature flag that controls which users see which variant, define goal metrics as PostHog Insights (trends or funnels), specify a minimum acceptable sample size, and press Launch. From that moment, PostHog begins splitting eligible traffic between control and test groups, collecting event data, and computing statistical results in real time. The artifact you produce is a live, correctly configured experiment that your team can monitor on a shared dashboard without needing to write any queries.

Getting this step right matters more than it looks. A misconfigured experiment can burn weeks of traffic before anyone notices the goal metric is firing on the wrong event, or that the feature flag is only evaluating server-side while the UI change is client-side. Common failure modes include mismatched flag keys between code and the experiment, goals that measure page views when you need funnel completion, and launching before the SDK is confirmed to be sending the right events. This skill walks through each configuration field, explains why it exists, and flags the spots where silent misconfiguration is most likely.

By the end, you will have a running experiment with a clean audit trail: a named hypothesis, linked feature flag, defined goals, documented sample size requirement, and a monitoring cadence. That package is what makes the difference between "we tried an A/B test once" and a repeatable experimentation practice your team can scale across onboarding flows, pricing pages, and feature rollouts.

## How It Works

PostHog's Experiments tab is a coordination layer that ties together three subsystems: feature flags for traffic splitting, event ingestion for data collection, and the statistical engine for result computation. Understanding how these pieces connect helps you debug problems and adapt the workflow to situations the UI does not explicitly cover.

When you create a new experiment, the first thing PostHog asks for is a feature flag. This flag is the mechanism that assigns each user to a variant. PostHog uses deterministic hashing on a user's distinct ID so that the same user always sees the same variant, even across sessions and devices (as long as the distinct ID is consistent). The flag can have two variants for a simple A/B test or multiple variants for an A/B/n test. The experiment record stores which flag key it is linked to, so PostHog knows how to segment incoming event data by variant.

Next, you define goal metrics. Each goal is a PostHog Insight, either a trend (count of an event over time) or a funnel (conversion rate through a sequence of events). When the experiment is running, PostHog filters that Insight by the feature flag variant each user received and computes the metric separately for control and test groups. This is why the events feeding your goal must be firing from the same users who are being flagged. If your flag evaluates on the backend but your goal event fires from a frontend snippet with a different distinct ID, the numbers will not connect.

PostHog supports two statistical frameworks: Bayesian (default) and frequentist. In Bayesian mode, you see a probability that each variant is the best, updating continuously as data arrives. In frequentist mode, you see p-values and confidence intervals, and you should not peek at results before the planned sample size is reached. You choose the framework at the project level in Settings, not per experiment, so make sure you know which one is active before you launch. The [PostHog Experiments Onboarding A/B Test Method](https://tryhamster.com/methods/posthog-experiments-onboarding-a-b-test-method) recommends the Bayesian approach for most onboarding experiments because it tolerates early peeking and produces intuitive "probability of being best" outputs.

The minimum detectable effect (MDE) and sample size calculator built into the experiment creation form help you estimate how long the test needs to run. You enter your current baseline conversion rate and the smallest improvement you care about detecting. PostHog calculates the number of users per variant needed to reach statistical significance. This number is a guide, not a hard cutoff, but launching without it means you have no way to know whether a null result is a true null or simply underpowered.

Finally, the experiment detail page is your monitoring surface. It shows cumulative counts per variant, the goal metric trend over time, and the current statistical result. PostHog also flags if the experiment has reached its recommended sample size. The detail page is shareable via URL, making it the single source of truth your team checks during the experiment's run.

## Step-by-Step Guide

### Step 1: Step 1: Confirm your hypothesis and metric are documented

Before touching the Experiments tab, verify that you have a written hypothesis statement and at least one measurable goal metric. The hypothesis should follow the format: 'If we [change], then [metric] will [direction] by at least [minimum detectable effect], because [reasoning].' Check that the event or funnel you plan to use as your goal metric is already firing in PostHog by navigating to Events and searching for it. If the event does not appear, you need to instrument it in your codebase and confirm it arrives before proceeding. This pre-check prevents the most common mistake: launching an experiment and discovering days later that the goal metric has zero data.

> **Pro tip:** Run a quick test by triggering the event yourself in a staging or development environment, then searching for your distinct ID in PostHog's Events tab. If the event shows up with the correct properties, you are ready.

### Step 2: Step 2: Create a new experiment in the Experiments tab

Navigate to the Experiments section in PostHog's left sidebar and click 'New Experiment.' Enter a descriptive name that includes the surface area and the change being tested, such as 'Onboarding Step 2 - Single CTA vs Dual CTA.' Paste your hypothesis into the description field so that anyone viewing the experiment later understands the intent without needing to find a separate document. Select the project and environment if your PostHog instance uses multiple. This name and description become the experiment's permanent audit trail, so write them as if a new team member will read them six months from now.

> **Pro tip:** Use a consistent naming convention across experiments, such as '[Flow] - [Change] - [Date]'. This makes the experiment list scannable when you have dozens of past tests.

### Step 3: Step 3: Link or create the feature flag for variant allocation

In the experiment creation form, you will see a field for the feature flag key. If you have already created a multivariate feature flag for this experiment (covered in the sibling skill Setting Up PostHog Feature Flags for Experiment Variants), select it here. If not, PostHog can auto-create one for you. ' For an A/B/n test, add additional variants.

Set the rollout percentage to the traffic split you want, typically 50/50 for two variants. Confirm that the flag's evaluation context matches where your code checks it. If your application checks the flag client-side using the PostHog JS SDK, the flag must be available for client-side evaluation. If your application checks it server-side via the API, ensure the server has the user's distinct ID.

> **Pro tip:** Always verify the feature flag key in the experiment matches exactly what your code references. A single character mismatch means the flag evaluates to the default value for every user, silently putting everyone in the control group.

### Step 4: Step 4: Define your primary goal metric

Click 'Add goal metric' and choose either a Trend or a Funnel. For a trend goal, select the event you want to count (such as 'onboarding_completed') and set the aggregation. Unique users is the most common aggregation for conversion experiments. ' Set the funnel window, which is the maximum time a user has to complete the sequence.

PostHog will compute this metric separately for each variant and use it as the primary basis for determining a winner. You may add secondary goal metrics as well, such as a retention event or a revenue event, but designate one metric as the primary decision metric to avoid ambiguity when results are mixed.

> **Pro tip:** If your primary metric is a funnel, keep the funnel to 2-4 steps maximum. Each additional step adds noise and reduces the measured conversion rate, which increases the sample size needed to detect a difference.

### Step 5: Step 5: Set your minimum sample size and expected runtime

PostHog's experiment creation form includes a sample size calculator. Enter your baseline conversion rate (the current rate before the experiment) and the minimum detectable effect (the smallest improvement that would be worth shipping). PostHog will calculate the number of users per variant you need. Multiply by the number of variants to get total users required.

Then divide by your daily eligible traffic to estimate how many days the experiment needs to run. Write this expected end date in the experiment description. If the required sample size exceeds what you can realistically collect in 4-6 weeks, consider increasing the minimum detectable effect or narrowing the audience to a higher-traffic segment.

> **Pro tip:** If you do not know your baseline conversion rate, run a one-week observation period using a PostHog Insight filtered to the same audience and event before launching the experiment. Guessing the baseline is the fastest way to end up with an underpowered test.

### Step 6: Step 6: Review targeting and exclusion rules

Check the feature flag's targeting rules to make sure the experiment only enrolls eligible users. For an onboarding experiment, you typically want to target new users only, which might mean filtering by a property like 'signup_date is within last 7 days' or by a cohort you have defined in PostHog. Exclude internal team members by filtering out email domains or known distinct IDs. If you are running multiple experiments simultaneously, verify that the audiences do not overlap in ways that could contaminate results.

PostHog does not automatically prevent interaction effects between experiments, so you need to manage this through targeting rules or mutual exclusion groups if your plan supports them.

> **Pro tip:** Create a persistent cohort called 'Internal Team' in PostHog that includes all employees. Exclude this cohort from every experiment flag to avoid polluting data with non-representative behavior.

### Step 7: Step 7: Launch the experiment

Click 'Launch' to activate the experiment. PostHog will enable the linked feature flag and begin assigning users to variants. Immediately after launching, verify that the experiment is collecting data by checking the experiment detail page within 15-30 minutes (or faster if your traffic volume is high). Look for non-zero participant counts in each variant.

If one variant shows zero participants, something is wrong with the flag evaluation or the event instrumentation. Also verify the goal metric is receiving events by checking the trend line on the experiment detail page. A flat line at zero means the goal event is not firing for flagged users, and you should pause the experiment and debug before wasting traffic.

> **Pro tip:** Have a teammate or test user trigger the experiment flow right after launch and confirm via PostHog's Persons view that they were assigned to the expected variant and their events appear under the experiment.

### Step 8: Step 8: Monitor results on a set cadence

Resist the urge to check results hourly. Set a monitoring cadence: daily for the first three days (to catch instrumentation issues), then weekly until the sample size target is reached. On each check, review four things: total participants per variant (should be roughly equal), goal metric values per variant (should have non-trivial event counts), the statistical significance indicator, and any error flags PostHog surfaces. If you are using the Bayesian framework, you can glance at the probability-of-best metric without adjusting for multiple looks.

If you are using the frequentist framework, do not make shipping decisions based on intermediate p-values. Document each check in a shared channel or note so the team has a log of the experiment's progression.

> **Pro tip:** Set a calendar reminder for your planned end date. The most common reason experiments run too long is that nobody remembers to check when the sample size was supposed to be met.

### Step 9: Step 9: Decide to ship, iterate, or discard

When the experiment reaches its minimum sample size and the statistical engine reports a result, you face one of three outcomes. 05), proceed to shipping the winner using the sibling skill Shipping the Winning Variant and Cleaning Up Feature Flags. If the control wins or there is no significant difference, document the result in the experiment description, stop the experiment, and archive the feature flag. If results are directionally positive but not significant, you can extend the experiment's runtime with a larger sample, but set a hard cutoff to avoid indefinite drift.

Record the outcome, the key numbers, and the next action in your experiment log, because the learning is valuable even when the variant loses.

> **Pro tip:** Before declaring a winner, check the secondary metrics. A variant that improves onboarding completion by 8% but increases churn by 12% is not a winner. The primary metric is the decision metric, but secondary metrics are the sanity check.

## Best Practices

- Name experiments with enough context that someone scanning a list of 50 past experiments can understand the surface area, the change, and the approximate date without clicking into each one. Vague names like 'Test 1' or 'Onboarding experiment' become useless within weeks. A pattern like 'Onboarding Step 3 - Progress Bar vs Checklist - Q2 2024' scales well.
- Always run the sample size calculator before launching, even for experiments you think will have obvious results. Skipping this step is the root cause of inconclusive tests. Teams that skip the calculator tend to stop experiments based on gut feeling rather than statistical power, leading to false positives and wasted engineering cycles.
- Use a single primary goal metric per experiment to make the ship/no-ship decision unambiguous. Adding secondary metrics is valuable for context, but if you have three goal metrics and each points in a different direction, your team will argue about interpretation instead of acting. Decide the primary metric before launch and write it in the experiment description.
- Verify event instrumentation in a staging or development environment before launching the experiment in production. Send yourself through the experiment flow, find your distinct ID in PostHog's Persons view, and confirm the correct events appear with the correct properties. This five-minute check prevents the most expensive mistake: burning a week of production traffic on a broken experiment.
- Exclude internal users from every experiment by maintaining a persistent cohort or property filter. Internal users behave fundamentally differently from real users. They click faster, skip content, and test edge cases. Even a small number of internal users can skew results for low-traffic experiments.
- Document the experiment result in PostHog's description field immediately after the decision is made, including the winning variant, the lift observed, the confidence level, and the next action. This turns the Experiments tab into a searchable institutional memory. Teams that rely on Slack messages or meeting notes to record results lose the context within months.
- When running multiple experiments simultaneously, map out audience overlap before launching. If Experiment A targets all new users and Experiment B also targets all new users, a single user might be in both experiments. This does not automatically invalidate results, but it introduces interaction effects that are impossible to untangle unless you are running a factorial design. For most teams, non-overlapping audiences or sequential experiments are simpler and safer.
- Keep experiment runtime under 4-6 weeks for onboarding experiments. Longer experiments suffer from novelty effects wearing off, seasonal traffic shifts, and code changes unrelated to the experiment altering behavior. If your sample size calculator says you need 8 weeks, consider increasing the minimum detectable effect or focusing on a higher-traffic segment.

## Common Mistakes

- **Launching the experiment before verifying the goal event is actually firing for flagged users** — This happens because the experiment creation form does not validate whether your goal event has any data. You can set a goal metric referencing an event that does not exist or that fires from a different distinct ID than the one the feature flag evaluates against. The signal is a goal metric showing zero conversions for both variants after 24 hours of traffic. Before launching, navigate to the Events tab, filter by the goal event name, and confirm recent events are present.

After launching, check the experiment detail page within the first hour to verify non-zero event counts.
- **Mismatching the feature flag key between code and the experiment configuration** — This usually happens when a developer creates the flag in PostHog with one key and references a slightly different string in the codebase, or when the experiment auto-creates a flag with a generated key that nobody copies into the code. The result is that every user evaluates to the default variant (usually control), and the test variant gets zero traffic. You can catch this by checking the experiment detail page for lopsided participant counts within the first few hours. Always copy the flag key directly from PostHog's UI into your code rather than typing it from memory.
- **Peeking at frequentist results daily and stopping the experiment as soon as p &lt; 0.05** — Frequentist p-values are only valid at the pre-planned sample size. Checking daily and stopping at the first significant result inflates your false positive rate dramatically, sometimes to 20-30% instead of the intended 5%. This happens because teams confuse the Bayesian and frequentist frameworks or because the excitement of early positive results overrides discipline. If you are using frequentist analysis, commit to the sample size before launch and do not make decisions until you reach it.

If you want to peek safely, switch to PostHog's Bayesian mode, which is designed for sequential monitoring.
- **Using page views as the goal metric instead of a specific conversion event** — Page views are noisy and do not represent the action you actually care about. This mistake happens because page views are the easiest event to find in PostHog and require no additional instrumentation. A page view goal will show high event counts but will not tell you whether users actually completed the desired action. Invest the time to instrument a specific event like 'onboarding_step_completed' or 'signup_form_submitted' and use that as your goal.

The extra instrumentation work pays for itself many times over in decision quality.
- **Running the experiment on too small an audience and declaring results after a handful of conversions** — Small sample sizes produce unstable results that look dramatic but are not reliable. This happens when teams are eager to ship quickly or when the experiment targets a niche segment with low traffic. A variant showing a 40% lift with 15 conversions per group is almost certainly noise. Use the sample size calculator before launch, and if the required sample is larger than your available traffic, widen the audience or accept a larger minimum detectable effect.

Do not lower your standards for statistical power just because you want faster answers.
- **Forgetting to stop the experiment and clean up the feature flag after reaching a decision** — Orphaned experiments with active feature flags accumulate technical debt and can interfere with future experiments. This happens because the team celebrates the result and moves on without completing the cleanup step. The experiment continues to split traffic unnecessarily, the flag remains in the codebase adding conditional logic, and new experiments on the same surface may conflict. Set a reminder to complete the cleanup within one sprint of the decision.

See the sibling skill Shipping the Winning Variant and Cleaning Up Feature Flags for the full process.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/posthog-experiments-onboarding-a-b-test-method/METHOD.md) — PostHog Experiments Onboarding A/B Test Method

## Related Skills

- [Setting Up PostHog Feature Flags for Experiment Variants](../setting-up-posthog-feature-flags-for-experiments/SKILL.md)
- [Comparing PostHog Experiments with Eppo, LaunchDarkly, and Other Platforms](../comparing-posthog-experiments-with-alternative-platforms/SKILL.md)
- [Shipping the Winning Variant and Cleaning Up Feature Flags](../shipping-winning-variants-and-cleaning-up-experiments/SKILL.md)
- [Designing Experiment Hypotheses and Success Metrics for Onboarding](../designing-onboarding-experiment-hypotheses-and-metrics/SKILL.md)
- [Segmenting New User Cohorts for Onboarding Experiments](../segmenting-new-user-cohorts-for-onboarding-tests/SKILL.md)
- [Interpreting Bayesian and Frequentist Results in PostHog](../interpreting-bayesian-and-frequentist-experiment-results/SKILL.md)
- [Integrating PostHog A/B Tests with Webflow and Marketing Pages](../integrating-posthog-experiments-with-webflow-and-marketing-pages/SKILL.md)
