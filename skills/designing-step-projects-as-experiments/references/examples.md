# Examples: Designing Step-Projects to Validate Product Ideas

## Example: B2B SaaS team testing demand for an AI feature

**Scenario:**

A 12-person B2B SaaS company that sells project management software has an idea to add AI-powered task prioritization. The idea scored ICE 7/3/6 (high impact, low confidence, moderate ease). The team has 500 active customers and a 2-week sprint cycle. The product manager vs project manager distinction matters here because a project manager would start planning the engineering work, while the product manager needs to validate whether customers actually want AI-assisted prioritization.

**Walkthrough:**

The team listed 8 assumptions. The riskiest was 'Project managers trust AI to prioritize their tasks' (uncertainty: 3, consequence: 3, risk score: 9). They designed a 2-week step-project using a fake door test: they added an 'AI Prioritize' button to the task list view that, when clicked, showed a modal explaining the upcoming feature and asking users to join a waitlist. ' They set guard rails excluding any actual AI development.

After 2 weeks, 12% of users clicked and 45% joined the waitlist. The assumption was validated, so the team advanced to a second step-project: a 4-week concierge test where a team member manually re-prioritized tasks for 15 waitlist volunteers and measured whether they followed the AI suggestions. The Confidence score for the idea moved from 3 to 6 after the first step-project.

## Example: Small startup testing a new market segment

**Scenario:**

A 3-person startup building an expense tracking app for freelancers has an idea to expand into small agency teams (5-15 people). The idea scored ICE 8/2/4. The team has very limited engineering resources and a $500 experiment budget. They need to validate whether agencies have the same pain points as freelancers before investing any development time.

**Walkthrough:**

' The team designed a 3-week step-project using customer interviews. They recruited 8 agency owners through LinkedIn outreach and a small Reddit ad ($200 spend). ' The team conducted 45-minute interviews using a structured script that avoided leading questions. Results: 6 out of 8 described expense tracking as a major pain, but the pain was different, focusing on approval workflows and policy compliance rather than receipt capture.

Only 2 expressed willingness to pay $50/month for the team use case. The team pivoted the idea from 'freelancer expense tracking for agencies' to 'expense approval workflow tool for small agencies' and designed a follow-up step-project to test the revised value proposition with a landing page and mockups.

## Example: Large product team testing a technical feasibility assumption

**Scenario:**

A 40-person product organization at an e-commerce company has an idea to offer real-time personalized pricing. The idea scored ICE 9/4/2. The low Ease score reflects uncertainty about whether the pricing engine can respond within 50ms at scale. The team includes a dedicated data science group and has access to a staging environment with production-like traffic.

**Walkthrough:**

The team identified 11 assumptions. Normally desirability would be tested first, but the feasibility risk was so severe (the entire idea depends on sub-50ms response times) that a failed technical spike would save months of user research. They designed a 3-week step-project: build a proof-of-concept pricing engine using a simplified model, deploy it to the staging environment, and run load tests simulating 10,000 concurrent requests. ' The scope explicitly excluded production deployment, A/B testing infrastructure, and any customer-facing changes.

The result: P95 was 72ms. The team analyzed the bottleneck (database lookups for user history) and determined that caching could reduce latency by 40%, bringing estimated P95 to 43ms. They advanced to a second step-project: a 4-week engineering spike to implement the caching layer and re-run the load test. The Confidence score moved from 4 to 5, with the understanding that a second validation was needed before user-facing experiments.

## Example: B2C mobile app testing a retention mechanic

**Scenario:**

A fitness app with 50,000 monthly active users has an idea to add streak-based challenges (e.g., 'Work out 5 days this week to earn a badge'). The idea scored ICE 7/5/7. The product manager is concerned that streaks might increase short-term engagement but cause burnout and churn. The product manager vs project manager difference is stark here: a project manager would estimate the development timeline, while the product manager needs evidence that streaks help retention rather than hurt it.

**Walkthrough:**

' The team designed a 6-week step-project using a simplified MVP: they implemented a basic streak counter (no badges, no social features, just a 'You have worked out X days in a row' message) and deployed it to 10% of users via a feature flag. ' The scope excluded gamification elements, social sharing, and streak recovery mechanics. After 6 weeks with 5,000 users in each group, the streak group showed 8 percentage points higher 30-day retention and no measurable increase in churn. The assumption was validated.

The team advanced to a second step-project focused on whether adding badges and social sharing would amplify the effect or dilute it. The idea's Confidence score moved from 5 to 8.
