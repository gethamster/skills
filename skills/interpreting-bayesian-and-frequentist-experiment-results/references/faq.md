# FAQ: Interpreting Bayesian and Frequentist Results in PostHog

## How do I interpret PostHog experiment results when Bayesian win probability is between 80% and 95%?

A win probability between 80% and 95% means the data leans toward a winner but has not reached conventional confidence. Check the credible interval: if it excludes zero and the lower bound exceeds your minimum meaningful effect, you may have a case for shipping, especially if the change is low-cost to maintain. If the interval still includes zero, extend the experiment with a hard cutoff date. Document the current state and set specific criteria for what must be true at the cutoff to ship.

Many teams treat 90% as an acceptable threshold for low-risk changes and 95% for changes with significant maintenance costs.

## Should I use Bayesian or frequentist mode for my PostHog experiment?

Use Bayesian for most product experiments, especially onboarding flows where you want to monitor results continuously. Bayesian analysis produces valid probabilities at any sample size, so peeking does not inflate error rates. Use frequentist when you need a fixed-sample design with well-characterized false positive rates, such as experiments with external stakeholder reporting requirements or regulated contexts. PostHog defaults to Bayesian, and the posthog experiments docs recommend it for most use cases.

The key discipline difference: Bayesian lets you look anytime but you still need a narrow credible interval to act, while frequentist demands you wait for minimum sample size before making any conclusion.

## How long should I run a PostHog experiment before interpreting results?

At minimum, run the experiment for 2 full weeks to capture weekday and weekend traffic patterns. PostHog calculates a recommended minimum sample size based on your expected effect size and baseline conversion rate. Do not interpret final results until you reach that sample size for frequentist tests. For Bayesian tests, focus on the credible interval width rather than a sample target: if the interval is still wide enough that the upper and lower bounds would lead to different business decisions, the experiment needs more data.

Set a maximum duration of 4-6 weeks for most onboarding experiments. If the experiment has not reached significance by then, the effect is likely too small to detect at your traffic volume.

## Why does my PostHog experiment show a high win probability but a credible interval that includes zero?

This happens when the posterior distributions for the two variants overlap slightly but the majority of the probability mass favors one variant. 2% means the model thinks the test is probably better, but there is still a meaningful chance (roughly 12%) that it is equal or slightly worse. The credible interval including zero is the stronger signal here: it means you have not yet ruled out no effect. This is most common at moderate sample sizes where the trend is real but the data has not yet pinched the interval tight enough.

Wait for more data rather than acting on the win probability alone.

## How do I handle conflicting results between primary and guardrail metrics?

When the primary metric improves but a guardrail metric degrades, you have a tradeoff, not a clear winner. First, verify the guardrail degradation is statistically meaningful (not just directional noise). 1, take it seriously. Then assess the magnitude: a 5% improvement in onboarding completion with a 1% decrease in 7-day retention might be acceptable, but a 5% improvement with a 10% retention drop is not.

Document both effects in your memo and present the tradeoff to stakeholders explicitly. In most onboarding experiments, retention and engagement guardrails should take precedence because short-term conversion gains that reduce long-term engagement destroy more value than they create.

## Can I restart a PostHog experiment if the initial results look wrong?

You can, but you should not restart an experiment to get different numbers. Legitimate reasons to restart include: discovering a bug in event tracking that corrupted data, finding that the feature flag was not assigning users correctly, or realizing you targeted the wrong user segment. In these cases, fix the issue, create a new experiment (do not reuse the old one, since its data is tainted), and start fresh. If you restart because you did not like the results, you are introducing selection bias and your next result will be untrustworthy.

Document why you restarted and ensure the new experiment has a clean hypothesis and clean data.

## How do I interpret results for experiments with very low traffic where PostHog shows wide credible intervals after weeks?

Low-traffic experiments require larger effect sizes to detect reliably. If your credible interval is still spanning 15+ percentage points after 3-4 weeks, the experiment is underpowered for the effect you are trying to detect. You have three options: increase the effect by making bolder variant changes (a bigger difference between control and test), broaden the audience (segment less aggressively to include more users), or accept that you need a longer experiment runtime. For onboarding flows with under 200 signups per week per variant, consider testing only high-impact changes where you expect a lift of 5+ percentage points.

Small, incremental optimizations are not testable at low traffic volumes. The posthog experiments docs recommend a minimum of 100 unique users per variant before drawing any conclusions, even directional ones.
