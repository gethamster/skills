# Examples: Creating and Launching A/B Tests in PostHog Experiments

## A shorter setup checklist in onboarding

**Scenario:**

Illustrative scenario: a developer tool's onboarding ends with a checklist of six setup tasks. Funnel data shows many new users stop at the checklist, and session replays show them scrolling past tasks that do not apply to them. The team wants to test a version that shows only the three tasks relevant to the framework each user picked.

**Walkthrough:**

The product manager writes the hypothesis, names onboarding completion as the primary metric and first event ingested as a secondary metric, and adds support conversations in the first week as a counter metric. The running time calculator, fed with the current completion rate and daily signups, gives an end date a few weeks out, which the team accepts.

In the Experiments tab she creates the experiment with the default `control` and `test` variants and an even split, adds the metrics with a conversion window matching the usual onboarding time, and saves a draft. After saving, she restricts the flag to users who signed up after the launch date. The engineer reads the flag just before the checklist renders, then uses an override on his own account to check both versions. Two days after launch the exposures are balanced and errors are flat, so nobody looks at the result again until the planned end.

## A draft that failed its own test

**Scenario:**

Illustrative scenario: a team building a project management app sets up an experiment on a new welcome screen and is ready to launch on a Friday.

**Walkthrough:**

During the override test, the engineer sees exposures for the test variant but none for control. The cause is a code path that returns early for control users before the flag is read, so control users are never exposed. If the team had launched, the analysis would have compared a full test group with an almost empty control group.

The engineer moves the flag check above the early return, keeps the eligibility check first, and repeats the override test for both variants. Both now record exposures and the secondary metric events. The team launches on Monday with a note in the description about what was fixed.

## Ending an experiment that did not move

**Scenario:**

Illustrative scenario: a team tests a shorter signup form. At the planned end, the primary metric shows no significant difference and the interval is wide on both sides of zero.

**Walkthrough:**

The team checks the three things PostHog's analyzing results guide lists for a null result. The sample reached the planned size, the variants were visibly different in replays, and the calculator's MDE was larger than any effect they could plausibly expect from the change. They conclude the form length is not what holds users back at this step.

They end the experiment and keep control, since it is the code already in production, and write the finding in the description so the idea is not retested next quarter without new evidence. The flag is handed to the cleanup process the same week.
