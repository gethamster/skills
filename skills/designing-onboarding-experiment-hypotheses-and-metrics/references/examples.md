# Examples: Designing Experiment Hypotheses and Success Metrics for Onboarding

## Example: B2B SaaS product with a multi-step onboarding wizard (small team, 800 signups/week)

**Scenario:**

A project management tool sees 800 new signups per week. The onboarding wizard has five steps: create account, name your workspace, invite teammates, create first project, add first task. Funnel data shows a 38% drop-off between 'invite teammates' and 'create first project.' The team suspects the invite step creates friction for solo evaluators who have no one to invite yet. The team has three engineers and no dedicated data scientist.

**Walkthrough:**

' They articulate the causal mechanism: solo evaluators hit the invite step, feel the product requires a team, and leave. Session recordings confirm this, showing users hovering on the 'Skip' button (which is styled as a secondary link and easy to miss) before closing the tab. ' Primary metric: step conversion rate from 'invite teammates' to 'create first project,' baseline 62%. MDE: 5 percentage points.

Secondary metric: teammate invitations sent within 14 days (to check whether skipping hurts eventual team adoption). Guardrail: Day 7 retention must not drop below 20% (baseline 23%). 5 weeks. Decision criteria: ship if primary metric lifts by 5pp+ at 95% confidence and Day 7 retention stays above 20%.

The team writes this into a Notion card, reviews it in a 15-minute standup, and hands it to the engineer configuring the PostHog experiment.

## Example: B2C mobile app with a single-screen onboarding (large team, 15,000 installs/week)

**Scenario:**

A fitness app gets 15,000 new installs per week. The onboarding is a single screen asking users to select their fitness goal (lose weight, build muscle, stay active). After selection, users are taken to a personalized workout plan. The activation metric is 'completed first workout within 48 hours,' currently at 18%.

The product team believes the three goal options are too generic and that adding a follow-up question about experience level would improve workout plan relevance and first-workout completion.

**Walkthrough:**

2% of new users complete their first workout within 48 hours, n=128,000. They write the causal mechanism: users who receive a workout plan mismatched to their experience level (a beginner getting an advanced routine, or vice versa) abandon the first workout because it feels too hard or too easy. Support tickets and app store reviews confirm complaints about difficulty mismatch. 2%.

MDE: 2 percentage points. Secondary metrics: onboarding completion rate (to check if the extra screen causes drop-off), second workout completion within 7 days. Guardrail: onboarding screen completion rate must not drop by more than 3 percentage points (baseline 89%, threshold 86%). At 15,000 installs/week, a 2pp MDE on an 18% baseline requires roughly 7,500 users per variant, so the experiment reaches adequate power in about one week.

Decision criteria: ship if primary lifts 2pp+ at 95% confidence and onboarding completion stays above 86%. The team documents this in the PostHog experiment description field and sets the experiment to auto-calculate significance using Bayesian analysis.

## Example: Developer tool with API-first onboarding (mid-size team, 2,000 signups/week)

**Scenario:**

A developer analytics platform gets 2,000 new signups per week. Onboarding involves signing up, creating an API key, installing the SDK, and sending the first event. The bottleneck is between 'created API key' and 'first event received,' where conversion drops from 71% to 34%. The team hypothesizes that the SDK installation docs are too long and overwhelming, and that providing a one-click copy-paste snippet for the user's detected framework would reduce friction.

**Walkthrough:**

Historical data from the last 90 days shows 34% of users who create an API key send their first event within 72 hours, n=18,000. Session recordings show users spending 3-5 minutes scrolling through documentation before many leave the page entirely. The team writes the mechanism: developers who see a wall of documentation for multiple frameworks experience decision paralysis and defer setup to 'later,' which often means never. ' Primary metric: conversion from 'created API key' to 'first event received' within 72 hours, baseline 34%.

MDE: 4 percentage points. Secondary: median time from API key creation to first event (expecting a decrease). 2%), and 14-day retention must stay above 15% (baseline 18%). Sample size calculation: 4pp MDE on 34% baseline requires about 1,200 per variant.

5 weeks total. Decision criteria are documented in a GitHub issue linked from the PostHog experiment, reviewed by the engineering lead and the PM.

## Example: E-commerce platform with seller onboarding (small team, 400 new sellers/week)

**Scenario:**

An online marketplace onboards 400 new sellers per week. The seller onboarding has four steps: create account, set up store profile, list first product, and receive first order. The team is focused on the gap between 'set up store profile' and 'list first product,' where conversion is 52%. They believe the product listing form is too complex for first-time sellers and want to test a guided listing wizard.

**Walkthrough:**

The team reviews 45 days of data: 52% of sellers who complete their store profile list their first product within 14 days, n=2,520. Support tickets reveal that sellers frequently ask which fields are required and what makes a good listing. The mechanism: first-time sellers face a blank product form with 18 fields and no guidance on which fields matter most, leading to form abandonment. ' Primary metric: 14-day first-product listing rate, baseline 52%.

MDE: 6 percentage points (higher than usual because at 400 sellers/week, a smaller MDE would require too long a run time). Secondary: median time from profile completion to first listing. Guardrails: listing quality score (computed from completeness of optional fields) must not drop by more than 10% (baseline 72/100, threshold 65/100), because a simpler form might produce lower-quality listings. Sample size: 6pp MDE on 52% baseline requires about 550 per variant, so the experiment needs roughly 3 weeks at 50/50 split, plus 14 days for the observation window, totaling about 5 weeks.

The team acknowledges this is a long experiment and agrees to resist peeking at results before the planned end date. Decision criteria are written into a shared Google Doc and reviewed with the marketplace operations lead.
