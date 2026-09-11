# FAQ: Designing Experiment Hypotheses and Success Metrics for Onboarding

## How do I choose between a funnel conversion rate and an activation rate as my primary metric?

Use a funnel conversion rate when the bottleneck is a specific step in your onboarding flow and the change you are testing targets that step directly. Use an activation rate when the bottleneck is not a single step but a general failure to reach the aha moment. The rule of thumb: if your change modifies one screen or interaction, measure the conversion rate through that screen. If your change restructures the entire flow, measure end-to-end activation.

Mixing them (changing one step but measuring overall activation) dilutes the signal and makes the experiment harder to interpret.

## How long should designing the hypothesis and metrics take for an experienced team?

For a team that has run three or more onboarding experiments, the full process from bottleneck identification through a finalized brief should take 30-45 minutes. The first time, expect 60-90 minutes because you will be establishing templates, finding baseline data, and debating metric definitions. If it takes longer than two hours, you are either over-engineering the hypothesis or lacking the baseline data you need, in which case you should pause and instrument your funnel before proceeding.

## Should I design the hypothesis before or after segmenting my user cohorts?

Design the hypothesis first, then refine the cohort. The hypothesis tells you which users are relevant to the test. If your hypothesis is about solo evaluators abandoning a team-invite step, your cohort should exclude users who arrive with a team invitation link. Segmenting first (without a hypothesis) often leads to testing a generic change on a narrow cohort, which reduces power without improving signal.

That said, high-level cohort thinking (new signups vs. returning users, free vs. paid) should inform the hypothesis, so the two steps are iterative. See [segmenting new user cohorts](https://tryhamster.com/skills/segmenting-new-user-cohorts-for-onboarding-tests) for the detailed segmentation workflow.

## What if my onboarding flow does not have enough traffic to detect a small MDE?

You have three options: raise the MDE (accept that you will only detect large effects), extend the experiment duration (if you can tolerate a longer timeline), or change the metric to one with higher variance reduction (e.g., a step-level conversion rate instead of a full-funnel rate). A fourth option is to batch multiple small changes into a single variant and test the bundle, but this sacrifices your ability to attribute the result to any single change. For flows with fewer than 200 new users per week, consider qualitative methods (user interviews, session recordings, usability tests) instead of statistical experiments.

## Why does my hypothesis keep changing after I start building the variant?

This usually happens because the hypothesis was written at too high a level of abstraction. When the engineer starts building, they discover constraints (technical limitations, edge cases, design conflicts) that force the variant to differ from what was originally described. The fix is to involve engineering in the hypothesis drafting step, or at least run the hypothesis past an engineer before finalizing it. A 10-minute feasibility check prevents hypothesis drift during implementation.

If the variant must change materially, rewrite the hypothesis before launch rather than proceeding with a mismatch.

## Can I use the same guardrail metrics across all my onboarding experiments?

You can and should have a standing set of default guardrails (Day 7 retention, support ticket volume, error rates) that apply to every experiment. But each experiment should also have at least one experiment-specific guardrail based on the change being tested. For example, an experiment that removes a tutorial step should guardrail the feature adoption rate for whatever that tutorial was teaching. Default guardrails catch generic regressions.

Experiment-specific guardrails catch the predictable side effects of the particular change you are making.

## How do I handle experiments where the primary metric is a time-to-event metric rather than a rate?

Time-to-event metrics (like median minutes to first activation) require different statistical treatment than conversion rates. In PostHog, you can track these as trend metrics rather than funnel metrics. , 'reduce median time to first event from 45 minutes to 35 minutes, a 22% reduction') rather than an absolute number. Be aware that time metrics are typically skewed (a few users take very long), so use medians rather than means, and note that you may need a larger sample size to detect differences in medians.

If your team is not comfortable with survival analysis or percentile comparisons, consider converting the time metric into a rate metric ('percentage of users who activate within 48 hours') for simpler analysis.
