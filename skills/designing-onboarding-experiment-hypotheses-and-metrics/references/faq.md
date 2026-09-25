# FAQ: Onboarding Experiment Hypotheses and Success Metrics

## What makes a good onboarding experiment hypothesis?

It names the users, the change, the mechanism and the metric that should move. PostHog's best practices describe a good hypothesis as including the goal metric, how the change should improve it, and relevant context. The mechanism matters most, because it tells you which supporting metrics should move and what you learned if the test loses.

## Is there a hypothesis template I can reuse?

A simple shape works: for an audience, changing an element to a variant will increase a primary metric, because of a mechanism; supporting metrics should move and a counter metric should not worsen. Filling in every part forces the team to agree on what success means. Paste the finished sentence into the hypothesis field of the PostHog experiment.

## Which metrics should an onboarding A/B test track?

One primary metric, usually onboarding completion or an activation event measured as a funnel from exposure. A few secondary metrics that should move with it, such as time to first key action. At least one counter metric, such as early retention or support contacts. PostHog's analyzing results guide shows why related metrics are more useful than a long unrelated list.

## Should the primary metric be completion or retention?

Use completion when the change targets a specific step and completion has room to move. Use retention when completion is already high or the change aims at longer-term engagement; PostHog lists onboarding effectiveness as a use case for retention metrics. Retention tests usually need longer to reach a decision.

## Why write metrics before launch if PostHog lets me add them later?

Because metrics chosen after seeing results tend to be the ones that look good. PostHog recommends defining metrics upfront to avoid biasing the analysis. Treat any metric added later as a lead for a follow-up experiment.
