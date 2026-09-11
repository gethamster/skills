# FAQ: Running A/B Tests in the PostHog Experiments Tab

## How long should I wait before checking my PostHog experiment results?

Check the experiment detail page within the first hour after launch, but only to verify instrumentation: confirm both variants have non-zero participant counts and the goal metric is receiving events. After that, check daily for the first three days to catch data issues, then switch to weekly until your planned sample size is reached. If you are using frequentist analysis, do not make shipping decisions based on intermediate results. Bayesian mode is more forgiving of peeking because its probability estimates are valid at any sample size.

## Can I run multiple PostHog experiments at the same time?

Yes, but you need to be deliberate about audience overlap. If two experiments target the same users, a single user may be enrolled in both, and any interaction between the two changes will be invisible in the results. For most teams, the safest approach is to ensure experiments target non-overlapping user segments or different surfaces (for example, one experiment on the onboarding flow and another on the pricing page). If you must run overlapping experiments, document the overlap and plan to analyze for interaction effects after both conclude.

## Should I use Bayesian or frequentist analysis in PostHog?

For most product teams, Bayesian analysis (PostHog's default) is the better choice. It produces intuitive 'probability of being best' outputs, tolerates peeking at results during the experiment, and does not require a fixed-sample commitment. Frequentist analysis is appropriate if your organization has strict statistical standards or regulatory requirements that demand p-values and confidence intervals. The analysis mode is set at the project level in PostHog Settings, not per experiment, so check which one is active before you launch.

See the sibling skill Interpreting Bayesian and Frequentist Results in PostHog for deeper guidance.

## How do I handle experiments in PostHog where the goal metric has a very low conversion rate?

Low baseline conversion rates (below 5%) require very large sample sizes to detect meaningful differences. The sample size calculator will tell you exactly how many users you need. If the number is impractical for your traffic volume, you have three options: increase the minimum detectable effect to something larger (accepting that you will only detect big wins), use a more sensitive metric earlier in the funnel (such as CTA clicks instead of completed purchases), or narrow the audience to a segment with higher baseline conversion. Do not launch a low-conversion experiment hoping for the best, because the most likely outcome is an inconclusive result after weeks of waiting.

## What happens if my PostHog experiment shows different results for the primary and secondary metrics?

This is common and expected. The primary metric is your decision metric; if it shows a statistically significant winner, that is normally your shipping decision. The secondary metrics provide context for whether the win is safe. If the primary metric shows a lift but a secondary metric like retention or revenue shows a significant decline, investigate before shipping.

If secondary metrics are flat or slightly negative without significance, they are usually noise. The key is to designate the primary metric before launch so that conflicting signals do not paralyze the decision.

## How do I run experiments in PostHog for server-rendered pages where JavaScript flags load too late?

For server-rendered applications, evaluate the feature flag on the server side using PostHog's server SDK (available for Python, Node, Ruby, Go, and others). The server checks the flag before rendering the page and sends the appropriate variant's HTML to the browser. This eliminates the flicker problem entirely. The tradeoff is that the server needs access to the user's distinct ID at render time, which usually means the user must be authenticated or you must use a cookie-based anonymous ID.

Make sure the same distinct ID is used on both server and client so PostHog can match flag evaluations to goal events.

## Why does my PostHog experiment show unequal participant counts between variants?

Small imbalances (within 2-3% of the expected split) are normal due to the deterministic hashing algorithm. Larger imbalances usually indicate a targeting or implementation problem. Common causes include: the feature flag has override rules that force specific users into one variant, the flag is not evaluating for some users (returning the default value, which is typically control), or users are being identified with inconsistent distinct IDs across sessions. Check the feature flag's evaluation logs in PostHog, review your targeting rules, and verify that your SDK's identify calls are consistent.
