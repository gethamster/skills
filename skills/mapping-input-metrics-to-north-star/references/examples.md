# Examples: Mapping Input Metrics That Drive Your North Star

## Example: B2B Project Management SaaS

**Scenario:**

A mid-stage B2B project management tool has defined 'weekly active projects' as their North Star Metric. The product team has 25 people across four squads (onboarding, core editor, collaboration, and integrations). They have 18 months of analytics data and have noticed growth plateauing despite steady new sign-ups, suggesting a retention and engagement problem rather than an acquisition one.

**Walkthrough:**

The team brainstorms 14 candidate inputs, including projects created, tasks added, collaborators invited, templates used, integrations connected, files uploaded, comments posted, and mobile app usage. After filtering for influenceability and running cohort analyses on 12 months of data, they find three clear causal drivers: (1) 'Projects with 3+ collaborators in the first 14 days' (collaboration squad, r=0.72 with subsequent weekly activity), (2) 'Tasks completed in first 7 days' (core editor squad, strong leading indicator), and (3) 'At least one integration connected' (integrations squad, users who connect an integration have 2.3x higher 30-day retention). They drop 'templates used' despite high correlation because a cohort test showed that encouraging template use didn't move weekly active projects—motivated users just happened to use templates. Each squad now has one input metric they own, and the onboarding squad takes on a cross-cutting mission to improve all three inputs during the first-time user experience. The quarterly product manager roadmap is restructured: 60% of engineering capacity goes to initiatives explicitly tagged to one of these three inputs.

## Example: Consumer Fitness App

**Scenario:**

A consumer fitness app has chosen 'weekly workouts completed' as their North Star Metric. They're a 30-person company with a single product team. They've seen strong download numbers from a viral TikTok campaign, but 7-day retention is only 18%. They need to figure out which behaviors in the first week predict whether a user becomes a regular exerciser through the app.

**Walkthrough:**

The team maps the user journey from download to third-week retention and identifies 11 candidate behaviors. Cohort analysis reveals four strong inputs: (1) 'Completed onboarding workout' (users who finish the introductory workout are 4.1x more likely to be active in week 3), (2) 'Set a weekly workout goal' (goal-setters have 2.8x higher retention), (3) 'Added a workout buddy' (social accountability drives 3.2x more weekly workouts), and (4) 'Logged a workout streak of 3+ days' (streak behavior strongly predicts long-term habit formation). They drop 'profile photo uploaded' and 'explored the exercise library' as correlated but not causal—experiments nudging those behaviors didn't move the North Star. The team settles on inputs 1, 2, and 3 for the current quarter, deferring streaks to Q2 since it depends on first getting users through inputs 1-3. The product manager roadmap shifts: the team deprioritizes a planned social feed feature (not connected to any input) and instead focuses on reducing friction in the onboarding workout (input 1) and making buddy invitations seamless (input 3).

## Example: B2B Marketplace Platform

**Scenario:**

A two-sided B2B marketplace connecting manufacturers with distributors has defined 'monthly completed transactions' as their North Star Metric. They have separate teams for the supply side (manufacturer onboarding and catalog management) and demand side (distributor search and ordering). Both sides of the marketplace need to be healthy for the North Star to grow, but the teams have been working in silos with no shared framework for prioritization.

**Walkthrough:**

The cross-functional mapping session surfaces 16 candidates spanning both sides. After analysis, they identify four inputs: (1) 'New manufacturers with 10+ SKUs listed' (supply-side team—below this threshold, manufacturers don't get enough orders to stay active), (2) 'Distributors who complete their first order within 30 days of signing up' (demand-side team—first purchase is the strongest retention predictor), (3) 'Repeat order rate' (demand-side team—measuring the percentage of distributors who place a second order within 60 days), and (4) 'Average catalog freshness score' (supply-side team—a composite metric measuring how recently manufacturers updated pricing and availability, since stale catalogs drive distributors to competitors). The teams discover that their biggest North Star bottleneck isn't acquisition on either side—it's catalog freshness. Distributors abandon the platform when they encounter outdated pricing. This shifts the product manager roadmap dramatically: instead of building more distributor acquisition features, the supply team prioritizes automated catalog sync integrations, and the demand team builds real-time inventory visibility. Within one quarter, repeat order rate increases by 22%.
