# FAQ: PostHog Experiment Cohort Filters for New Users

## Can I target a PostHog experiment at a cohort?

Yes, through the release conditions of the experiment's flag, which you edit after saving the draft. The cohort must be usable as a flag target: dynamic cohorts built only from person properties work, and static cohorts work. Dynamic cohorts with behavioral or lifecycle criteria do not, so snapshot them as static or use a person property instead.

## What is the most reliable way to define a new user?

A person property your code sets at signup, such as a signup date or an onboarding version. It can be matched directly in a release condition and does not wait for cohort recalculation. Make sure the property is available to the client when the flag is read, for example by passing it to `identify()`.

## Why do some new users get no variant?

Usually because the flag was evaluated before the property it depends on was available, which PostHog's troubleshooting guide says is most likely for new users in onboarding. The exposure then carries no valid variant and the user is dropped. Pass the property with the flag request, bootstrap the value, or evaluate on the server.

## Is a release condition enough on its own?

It controls assignment, but the code controls exposure. Check eligibility in code before reading the flag so users who match the condition but will not see the change are not exposed. PostHog's best practices show this ordering.

## How often do dynamic cohorts update?

PostHog updates dynamic cohorts once every 24 hours. That delay is another reason to avoid them for targeting brand new users, who may not appear in a cohort until well after they finish onboarding. Realtime cohorts are described as an early beta that most projects do not have yet.
