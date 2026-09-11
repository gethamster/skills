# Examples: Prioritizing Product Ideas Using ICE Confidence Scoring

## Example: Early-Stage B2B SaaS with 5 Ideas and a 3-Person Team

**Scenario:**

A 3-person startup building a project management tool for freelancers has accumulated 5 ideas from customer interviews. Their primary goal is to increase free-trial-to-paid conversion from 4% to 8% within 6 months. The team has limited engineering bandwidth (one full-stack developer) and no dedicated data analyst. They have 12 customer interview transcripts and basic analytics from Mixpanel.

**Walkthrough:**

The team runs a 45-minute ICE session. They align on "30-day trial-to-paid conversion rate" as the Impact metric. Idea A (add a client invoicing feature) scores Impact 8, Confidence 4, Ease 3 (ICE = 96). The Impact is high because 7 of 12 interviewees mentioned invoicing, but Confidence is only 4 because none of those interviewees were asked whether invoicing would make them pay, and Ease is low because invoicing requires payment integration.

Idea B (improve the onboarding checklist) scores Impact 6, Confidence 7, Ease 9 (ICE = 378). Confidence is higher because the team has Mixpanel data showing 60% of users who complete onboarding convert, versus 8% who do not, and Ease is high because it is a UI change to existing screens. Idea B ranks first despite lower Impact because the evidence is strong and the test is cheap. The team designs a two-week step-project to A/B test a redesigned onboarding flow, with a clear success criterion of 15% improvement in checklist completion.

## Example: Mid-Stage B2C Mobile App Scoring 15 Ideas Across Engineering and Growth

**Scenario:**

A fitness app with 200,000 monthly active users and a 12-person team needs to prioritize 15 ideas spanning new features, performance improvements, and growth experiments. The primary goal is to increase 7-day retention from 35% to 45%. They have a robust analytics stack, a user research team that runs monthly studies, and historical data from 6 previous A/B tests on onboarding and engagement features.

**Walkthrough:**

The product manager assembles a scoring group of 5: herself, a senior engineer, a data analyst, a designer, and a growth marketer. She shares the idea list and goal metric 24 hours in advance with links to relevant analytics dashboards and past experiment results. During the 90-minute session, the data analyst brings Confidence evidence that significantly reshapes the ranking. Idea #3 (gamified workout streaks) had been assumed high-Impact, but the analyst shows that a previous experiment with daily reminders, a conceptually similar engagement mechanic, produced only a 2% retention lift.

The team scores its Confidence at 5 instead of the 8 the PM had initially estimated, dropping it from the top 3 to position 7. Idea #9 (personalized rest-day recommendations) surfaces a high-spread situation: the engineer scores Ease at 3 (citing ML model complexity) while the growth marketer scores it at 8 (thinking of a rules-based heuristic). Discussion reveals that a simple rules-based version ("if you worked out 3 days in a row, suggest rest") could be tested in one week without ML. Ease is re-scored at 7.

The final top 3 are all ideas with Confidence scores of 6 or higher and Ease scores of 7 or higher, meaning the team can run three parallel step-projects in the next sprint cycle.

## Example: Enterprise Platform Team Re-Scoring After a Failed Experiment

**Scenario:**

An enterprise analytics platform team scored 8 ideas last quarter. Their top-ranked idea was a self-serve dashboard builder (ICE = 504). They ran a 4-week step-project offering a prototype to 20 beta users. Only 3 users engaged meaningfully, and none reported it as a must-have feature. The team needs to re-score and reprioritize for the next quarter.

**Walkthrough:**

The PM updates the scoring sheet before the re-scoring session. The self-serve dashboard builder's Confidence drops from 7 to 2 based on the beta results, collapsing its ICE score from 504 (I:9, C:7, E:8) to 144 (I:9, C:2, E:8). The justification reads: "Beta test showed low engagement. 3 of 20 users engaged.

Zero reported must-have. " Meanwhile, Idea #4 (automated anomaly alerts) had its Confidence increase from 4 to 7. During the beta period, the support team logged 23 tickets from churned customers citing "I did not realize the data had changed until it was too late" as a key frustration. This is indirect but strong evidence.

Its ICE score rises from 192 (I:8, C:4, E:6) to 336 (I:8, C:7, E:6). The re-scored ranking is materially different from last quarter's. The team designs a step-project for anomaly alerts: a 3-week build of email-based alerts for the top 5 anomaly types, with success measured by alert open rates and a post-experiment churn cohort comparison.

## Example: Answering a Product Manager Interview Question About ICE Scoring

**Scenario:**

A product manager candidate is asked in an interview: "You have three feature ideas and limited engineering resources for the next quarter. How would you decide what to build?" The candidate needs to demonstrate structured thinking, honest treatment of uncertainty, and a connection to business outcomes. This is one of the most common product manager interview questions about prioritization.

**Walkthrough:**

The candidate structures their answer using ICE. They say: "I would start by confirming the team's primary metric for the quarter so I have a consistent measure of Impact. Then I would score each idea on Impact, Confidence, and Ease on a 1-10 scale. Impact is how much each idea moves that metric if it works.

Confidence is how much evidence I have, not how excited I am. " They give a concrete example: "Imagine the goal is reducing support ticket volume by 30%. Idea A is an AI chatbot (Impact 8, Confidence 3, Ease 2, ICE = 48). Idea B is better error messages on the top 10 error pages (Impact 5, Confidence 8, Ease 9, ICE = 360).

Idea C is a knowledge base redesign (Impact 6, Confidence 5, Ease 5, ICE = 150). I would start with Idea B because it has the strongest evidence and the fastest feedback loop. " The candidate then notes: "ICE gives me a starting ranking, but I would bring it to the team for discussion. " This answer demonstrates the scoring mechanics, honest treatment of Confidence, and awareness that the score is a tool, not a decision.
