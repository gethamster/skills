---
name: interpreting-bayesian-and-frequentist-experiment-results
description: "Teaches you how to read PostHog's experiment results dashboard, understand the difference between Bayesian credible intervals and frequentist p-values, and make confident ship-or-kill decisions based on the statistical output."
metadata:
  method: posthog-experiments-onboarding-a-b-test-method
---

# Interpreting Bayesian and Frequentist Experiment Results in PostHog

> Teaches you how to read PostHog's experiment results dashboard, understand the difference between Bayesian credible intervals and frequentist p-values, and make confident ship-or-kill decisions based on the statistical output.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes |
| Outcome | You can read any PostHog experiment results dashboard, correctly interpret whether the data supports a winner, identify premature conclusions, and make a defensible ship-or-kill decision backed by the right statistical framework. |
| Prerequisites | A running PostHog experiment with at least one goal metric collecting data, Basic understanding of conversion rates and sample sizes, Familiarity with the PostHog experiments tab (see sibling skill: Running A/B Tests in the PostHog Experiments Tab), Access to PostHog project with experiment results visible |
| Part of | [PostHog Experiments Onboarding A/B Test Method](../../methods/posthog-experiments-onboarding-a-b-test-method/METHOD.md) |

## Overview

Every experiment eventually reaches a moment where you need to stop watching the numbers climb and make a decision. Interpreting experiment results is the skill that separates teams who ship data-informed product changes from teams who either call experiments too early (wasting the statistical rigor they set up) or too late (leaving conversion gains on the table for weeks). PostHog surfaces both Bayesian and frequentist statistics on its experiment results page, and understanding what each number means, when to trust it, and when to wait is the core of this skill.

Inside the [PostHog Experiments Onboarding A/B Test Method](https://tryhamster.com/methods/posthog-experiments-onboarding-a-b-test-method), this skill sits at the decision point between collecting data and shipping the winning variant. You have already designed your hypothesis, set up feature flags, segmented your cohorts, and launched the experiment. Now you are staring at a dashboard with win probabilities, credible intervals, conversion rates, and possibly p-values. The artifact you produce is a written interpretation memo: a short document (even a Slack message or Notion block) that states the metric, the observed lift, the statistical evidence, whether the result is conclusive, and the recommended action. This memo is what your team uses to decide whether to ship, extend, or kill the experiment.

The reason this skill requires its own focused practice is that PostHog gives you two statistical frameworks, Bayesian analysis (the default) and frequentist analysis, and they answer subtly different questions. Bayesian analysis tells you the probability that one variant is better than another given the data you have collected so far. Frequentist analysis tells you the probability of seeing data this extreme if there were truly no difference between variants. Mixing up these interpretations, or peeking at Bayesian results with a frequentist mindset, leads to premature calls and false confidence. By the end of this skill, you will know exactly which numbers to read, which to ignore at various stages, and how to document your conclusion so the team can act on it.

The posthog experiments docs describe these frameworks in detail, but the documentation assumes you already know which numbers matter for your decision. This skill fills that gap with a step-by-step reading process and worked examples across different experiment types.

## How It Works

PostHog runs statistical analysis on your experiment data in real time, updating as new events arrive. The mental model you need is this: the dashboard is not a scoreboard showing who is winning. It is a probability calculator showing how confident you should be in a difference, given the data collected so far.

**Bayesian analysis (PostHog's default)** uses prior distributions and incoming data to compute a posterior distribution for each variant's conversion rate (or mean value for continuous metrics). From these posteriors, PostHog calculates a win probability: the percentage chance that variant B's true rate is higher than variant A's true rate. It also shows credible intervals, which are ranges that contain the true parameter value with a stated probability (typically 95%). The key insight is that Bayesian win probability is a direct answer to the question you actually care about: "Given what I have seen, how likely is it that B is genuinely better?" This makes it intuitive, but it also makes it tempting to peek early. A win probability of 80% after 50 users is not the same quality of evidence as 80% after 5,000 users, even though the number looks the same. The width of the credible interval is what tells you how much the estimate could still shift.

**Frequentist analysis** takes a different approach. It computes a test statistic (typically a z-test for proportions or a t-test for means), derives a p-value, and compares it to your significance threshold (alpha, usually 0.05). The p-value answers: "If there were truly no difference between variants, how likely would I be to see a result this extreme or more extreme?" A small p-value means the observed difference is unlikely to be pure noise. Frequentist analysis also produces confidence intervals, which are ranges that, if the experiment were repeated many times, would contain the true effect size 95% of the time. The critical discipline with frequentist tests is that you must reach your pre-calculated minimum sample size before checking the p-value for a final decision. Peeking inflates your false positive rate because every intermediate check is an implicit hypothesis test.

The practical difference: Bayesian results let you look at the dashboard any time and get a calibrated probability, but you should still wait until the credible interval is narrow enough to matter for your business. Frequentist results require discipline about when you look, but give you a framework with well-understood error rates. PostHog lets you choose which framework to use when you create the experiment, and you can see both if you switch modes, but the numbers mean different things and should not be compared directly.

The posthog experiments docs explain that the platform uses a Beta-Binomial model for conversion metrics in Bayesian mode and a standard two-proportion z-test in frequentist mode. Understanding this is not necessary for day-to-day interpretation, but it explains why Bayesian results update smoothly while frequentist p-values can jump erratically at low sample sizes. The Bayesian model is "smoothed" by its prior, which stabilizes early estimates but means early results are partially driven by the prior rather than your data. As sample size grows, the prior's influence shrinks and the posterior is dominated by observed data. This is why patience matters regardless of which framework you use.

## Step-by-Step Guide

### Step 1: Step 1: Open the experiment results page and confirm data is flowing

Navigate to the Experiments tab in PostHog, find your experiment, and click into it. Before reading any statistical output, verify that both variants are receiving traffic. Check the participant count for control and test. If one variant has zero or near-zero participants, you have a feature flag configuration issue, not a results interpretation task.

Confirm that the primary goal metric (the one you defined in your hypothesis) is recording events for both variants. Look at the event count, not the conversion rate, at this stage. If events are flowing for both variants, proceed. If not, troubleshoot the flag assignment or event instrumentation before interpreting any numbers.

> **Pro tip:** PostHog shows a banner when an experiment has not yet reached the minimum recommended sample size. If you see this banner, you can observe trends but should not make a ship decision.

### Step 2: Step 2: Identify which statistical framework your experiment is using

Check whether the experiment was configured for Bayesian or frequentist analysis. This is set at experiment creation time and determines which numbers on the results page are meaningful. In Bayesian mode, the primary output is a win probability and credible interval. In frequentist mode, the primary output is a p-value and confidence interval.

If you are unsure which mode was chosen, look at the results card: Bayesian mode shows "Probability of being best" as a percentage, while frequentist mode shows a p-value as a decimal. Write down which mode you are interpreting so you do not accidentally apply the wrong reading framework in the next steps.

> **Pro tip:** If your team did not consciously choose a framework, PostHog defaults to Bayesian. This is fine for most onboarding experiments because it lets you monitor results continuously without inflating false positive rates.

### Step 3: Step 3: Read the primary metric result for Bayesian experiments

For Bayesian experiments, locate the "Probability of being best" for each variant. This is the win probability. A 95% probability for the test variant means, given the observed data, there is a 95% chance the test variant's true conversion rate is higher than control's. Next, look at the credible interval for the difference between variants.

4%". This means the true lift is 95% likely to fall somewhere in that range. 2%"), the data has not yet ruled out the possibility of no effect or a negative effect. Record three numbers: the win probability, the lower bound of the credible interval, and the upper bound.

These three numbers are what your interpretation memo will reference.

> **Pro tip:** A win probability of 90% with a credible interval of +0.1% to +12% is much weaker evidence than a win probability of 90% with a credible interval of +2.5% to +5.1%. The width of the interval tells you how uncertain the estimate still is.

### Step 4: Step 4: Read the primary metric result for frequentist experiments

For frequentist experiments, locate the p-value. 05 (or whatever alpha you set at experiment creation), the result is statistically significant. Next, check the confidence interval for the difference. Like the Bayesian credible interval, this is a range for the estimated lift.

If the confidence interval does not include zero, the result is significant at your chosen level. Crucially, verify that the experiment has reached the minimum sample size PostHog calculated when the experiment was created. If you have not reached that sample size, the p-value is unreliable regardless of how small it looks. Record: the p-value, the confidence interval bounds, the current sample size, and the target sample size.

> **Pro tip:** If you are tempted to peek at frequentist results before minimum sample size, consider switching your mental model to Bayesian. PostHog lets you view Bayesian stats on any experiment. Use Bayesian for monitoring progress, but only rely on the frequentist conclusion once sample size is met.

### Step 5: Step 5: Check secondary metrics for guardrail violations

Most experiments track more than one metric. Your primary metric is the one you are trying to improve (for example, onboarding completion rate). Secondary metrics are guardrails: metrics you need to not get worse (for example, session duration, or retention at day 7). Scroll down to secondary metrics on the results page.

For each guardrail metric, check whether the test variant shows a statistically significant negative effect. A small, non-significant dip in a guardrail is usually acceptable. A significant decline, especially if the credible or confidence interval for the guardrail excludes zero in the negative direction, is a red flag that the test variant may be improving conversions at the expense of something important. Document any guardrail that shows a concerning movement, even if it has not reached significance yet.

> **Pro tip:** Onboarding experiments often improve immediate completion rates while reducing downstream engagement. Always check a retention or activation metric at least 7 days out as a guardrail.

### Step 6: Step 6: Assess practical significance alongside statistical significance

Statistical significance tells you the effect is real. Practical significance tells you the effect matters. 3% may be statistically significant with a large sample, but may not justify the engineering and design cost of shipping and maintaining the change. Before writing your interpretation memo, define the minimum effect size that would make the experiment worth shipping.

For most onboarding flows, a lift below 1 percentage point on a key conversion step is marginal. A lift above 3 percentage points is clearly actionable. If the observed lift falls in between, use the credible or confidence interval: if the lower bound is above your minimum meaningful effect, the result is both statistically and practically significant. If the lower bound is below your minimum, the true effect could be too small to matter even though the point estimate looks good.

> **Pro tip:** Write down your minimum meaningful effect size before looking at the results. This prevents you from rationalizing a small lift as "good enough" after the fact.

### Step 7: Step 7: Decide: ship, extend, or kill

Based on your readings, make one of three decisions. 05 with minimum sample in frequentist), the credible or confidence interval excludes zero, the practical effect size exceeds your minimum, and no guardrail metrics show significant degradation. Extend the experiment if the win probability is between 80% and 95% (Bayesian) or you have not yet reached minimum sample size (frequentist), and the directional trend is positive. Set a specific end date for the extension, typically 1-2 more weeks, and define what you need to see to ship.

Kill the experiment if the control variant is winning with high probability, or if guardrail metrics are degrading significantly, or if the experiment has run for more than 2x the expected duration with no clear signal.

> **Pro tip:** Never leave an experiment running indefinitely in "let's see" mode. Set a hard stop date when you extend, and commit to making a decision on that date regardless of where the numbers land.

### Step 8: Step 8: Write the interpretation memo

Document your conclusion in a structured format that your team can act on. Include: the experiment name and date range, the primary metric name and observed lift (point estimate plus interval), the statistical evidence (win probability or p-value), the sample sizes for each variant, the practical significance assessment, the guardrail metric status, and the decision (ship, extend, or kill) with reasoning. Keep it to one page or one Slack message. This memo becomes the artifact that justifies the next action in the workflow, whether that is shipping the winning variant using the cleanup process or archiving the experiment as a non-result.

Share it with stakeholders before acting on the decision.

> **Pro tip:** Include a screenshot of the PostHog results dashboard in the memo. Numbers in context are easier for non-technical stakeholders to trust than numbers alone.

## Best Practices

- Define your decision criteria before the experiment collects data: specify the significance threshold (95% win probability or p &lt; 0.05), the minimum meaningful effect size, and the guardrail metrics you will check. Writing these down in the experiment description inside PostHog prevents post-hoc rationalization when the results are ambiguous. Teams that skip this step tend to move the goalposts once they see numbers they like or dislike.
- Use Bayesian mode for most onboarding experiments because it lets you monitor results at any time without inflating error rates. Frequentist mode is appropriate when you need a fixed-sample test with well-characterized Type I error rates, which is common in regulated or high-stakes environments. For typical SaaS onboarding experiments, Bayesian provides the flexibility you need since onboarding flows have variable traffic and you will want to check progress regularly.
- Wait for the credible interval to narrow to a range your business can act on, not just for the win probability to cross 95%. A win probability of 96% with a credible interval of +0.2% to +15% tells you the variant is probably better, but you have no idea by how much. If the lower bound of +0.2% is below your minimum meaningful effect, the uncertainty is still too high to make a good decision. Let the experiment run until the interval is tight enough to be useful.
- Check all goal metrics, not just the primary one. PostHog lets you attach multiple metrics to an experiment, and a variant that lifts one metric while tanking another is not a winner. Review every metric before writing your interpretation memo. Guardrail violations on secondary metrics are the most common reason an apparently successful experiment should actually be killed.
- Never compare Bayesian and frequentist numbers side by side as though they measure the same thing. 05. They answer different questions using different math. Pick one framework for your final decision and reference only that framework's numbers in your memo.

Mixing frameworks creates confusion for stakeholders and can lead to contradictory conclusions.
- Run experiments for complete business cycles. If your onboarding flow gets different traffic on weekdays versus weekends (nearly all SaaS products do), run the experiment for full weeks, not partial weeks. A result that looks significant on Wednesday may reverse by Sunday because the weekend cohort behaves differently. Minimum recommended duration is 2 full weeks for most onboarding experiments.
- Document every experiment result, including non-results and losses. Negative results and inconclusive experiments are valuable data. They prevent your team from re-running the same test six months later, and they build institutional knowledge about what does and does not move your onboarding metrics. Store memos in a shared location with tags for the metric, the variant type, and the outcome.

## Common Mistakes

- **Calling a winner based on win probability alone when the credible interval still includes zero** — 3%. This means the model thinks the variant is probably better, but it has not ruled out the possibility that it is actually slightly worse. The tell is the lower bound of the credible interval crossing zero. When you see this, the experiment needs more data.

Wait until both the win probability exceeds your threshold AND the credible interval excludes zero before calling a winner.
- **Peeking at frequentist p-values before reaching minimum sample size and acting on a significant result** — Frequentist tests produce valid p-values only at the pre-specified sample size. Checking the p-value after 500 users when you planned for 5,000 is effectively running 10 hypothesis tests, which inflates your false positive rate dramatically. 41 at 5,000. The early significance was noise.

If you need to monitor results before reaching sample size, switch to viewing Bayesian statistics for progress monitoring and only use the frequentist conclusion once the sample target is hit.
- **Ignoring practical significance because the statistical result looks clean** — 1% lift in conversion rate can become statistically significant. 1% lift introduces code complexity, design debt, and maintenance cost that likely exceeds the value. This happens most often on high-traffic pages where PostHog accumulates large samples quickly. Before writing your memo, always check the point estimate of the lift against your minimum meaningful effect size.

If the upper bound of the credible interval barely clears your minimum, the experiment is telling you the effect is real but too small to bother with.
- **Treating the experiment as failed because the test variant lost** — A test variant that clearly loses is a successful experiment. You learned that the change makes things worse, which is valuable information. The real failure mode is an inconclusive experiment that runs for weeks and produces a win probability hovering around 50-60%. This typically means the effect size is too small to detect at your traffic level, or the variants are not different enough.

When a variant loses decisively (control win probability > 95%), document what you learned about why the change hurt, kill the experiment, and move on. These insights often inform the next experiment's hypothesis.
- **Switching between Bayesian and frequentist frameworks mid-experiment to find the one that gives a significant result** — Both frameworks analyze the same data but with different assumptions and different thresholds. It is always possible that one shows significance while the other does not, especially near boundary cases. If you find yourself checking both and picking the one that agrees with your desired outcome, you are p-hacking. Choose one framework at experiment creation time, commit to it in your hypothesis document, and reference only that framework's output in your interpretation memo.

The framework choice should be documented before any data is collected.
- **Running the experiment indefinitely because the results are "almost" significant** — Experiments that hover near the significance boundary for more than 2x the expected duration are telling you something: the effect is probably smaller than you hypothesized. Continuing to run them wastes the opportunity cost of testing something else. Set a hard maximum runtime (typically 4-6 weeks for onboarding experiments) and commit to making a decision at that point. If the result is still ambiguous, the correct interpretation is: the effect, if it exists, is too small to detect at your traffic level, and you should move on to higher-impact experiments.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/posthog-experiments-onboarding-a-b-test-method/METHOD.md) — PostHog Experiments Onboarding A/B Test Method

## Related Skills

- [Running A/B Tests in the PostHog Experiments Tab](../running-ab-tests-in-posthog-experiments-tab/SKILL.md)
- [Setting Up PostHog Feature Flags for Experiment Variants](../setting-up-posthog-feature-flags-for-experiments/SKILL.md)
- [Comparing PostHog Experiments with Eppo, LaunchDarkly, and Other Platforms](../comparing-posthog-experiments-with-alternative-platforms/SKILL.md)
- [Shipping the Winning Variant and Cleaning Up Feature Flags](../shipping-winning-variants-and-cleaning-up-experiments/SKILL.md)
- [Designing Experiment Hypotheses and Success Metrics for Onboarding](../designing-onboarding-experiment-hypotheses-and-metrics/SKILL.md)
- [Segmenting New User Cohorts for Onboarding Experiments](../segmenting-new-user-cohorts-for-onboarding-tests/SKILL.md)
- [Integrating PostHog A/B Tests with Webflow and Marketing Pages](../integrating-posthog-experiments-with-webflow-and-marketing-pages/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
