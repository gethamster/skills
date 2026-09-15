# Examples: Defining Measurable Product Goals in GIST

## Example: Early-stage B2B SaaS (team of 5)

**Scenario:**

A small B2B SaaS company selling a project management tool to agencies has 800 paying customers and is pre-Series A. The CEO's stated priority is 'reduce churn to extend runway.' The product team has one PM, two engineers, and one designer. Analytics are basic: Mixpanel for events, Stripe for revenue.

**Walkthrough:**

5% for the past six months. She also finds that churn is concentrated among accounts in their first 60 days: 42% of churned accounts never completed onboarding. She maps the CEO's priority to two candidate metrics: overall monthly churn rate and 60-day onboarding completion rate. She selects the 60-day completion rate as the primary goal because it is more directly influenceable by the product team and likely a leading indicator of churn.

The baseline is 38% of new accounts completing onboarding within 60 days. She sets the target at 55% by end of Q2, which would roughly halve the churn contribution from unactivated accounts. As a guardrail, she adds 'monthly gross churn must not exceed 7%' to ensure that fixing onboarding does not come at the expense of retention for mature accounts. She brainstorms five ideas: a guided setup wizard, an in-app checklist, a 'quick start' template, proactive outreach from support on day 3, and a reduced free trial period to create urgency.

Each is stored in the idea bank with an ICE score for later prioritization. The goal sheet is a single Notion page shared with the CEO and engineering lead.

## Example: Mid-stage B2C mobile app (team of 12)

**Scenario:**

A consumer fitness app with 2 million MAU and a freemium model. The company just raised Series B and the board wants to see 'improvement in monetization.' The product org has three squads. This squad owns the premium upgrade experience. The analytics stack includes Amplitude, RevenueCat, and a data warehouse.

**Walkthrough:**

40/month. The board's 'improvement in monetization' maps to multiple candidate metrics, but the PM focuses on what her squad controls: trial start rate and trial-to-paid conversion. She eliminates ARPPU because it depends on pricing changes that the growth team owns. She sets two goals.

' The second goal is a guardrail. She deliberately does not set a combined revenue target because she wants the team thinking about the behavioral funnel, not the revenue number. During stress-testing, the designer flags that the easiest way to increase trial starts is to add dark patterns, like auto-enrolling users in trials. ' She brainstorms eight ideas, including a contextual trial prompt after the user's tenth workout, a comparison screen showing premium vs.

free features, and a social proof banner showing how many users upgraded this week. The goal sheet is published in the squad's Confluence space and reviewed biweekly.

## Example: Enterprise platform team (team of 20+)

**Scenario:**

A large enterprise software company's platform team is responsible for APIs and developer tools that other product teams build on. The company's annual plan calls for 'accelerating time-to-market for new features across all product lines.' The platform team has no direct end-user metrics, which makes goal-setting uniquely challenging.

**Walkthrough:**

The platform PM realizes that 'accelerating time-to-market' is a company-level objective, not a platform goal. 2 days integrating with the platform's authentication service every time they build a new feature. She validates this with data from Jira, counting the average number of days spent on auth-related tickets per feature project. ' The metric is measurable (average days per integration project, tracked in Jira), influenceable (the platform team controls the auth SDK), and strategically aligned (fewer integration days equals faster time-to-market).

' She then brainstorms ideas: a self-serve auth SDK with documentation, a pre-configured auth template for the internal framework, and an auth-as-a-service API that eliminates integration entirely. The goal sheet is shared with all product team leads so they understand the platform team's priorities and can plan accordingly. Monthly reviews include pulling integration time data from the three most recent feature projects.

## Example: Product manager updating a traditional roadmap (individual contributor)

**Scenario:**

A product manager at a mid-size company has been asked to present her Q4 product manager roadmap to the leadership team. Her current roadmap is a Gantt-style timeline with feature names and delivery dates. She wants to restructure it using GIST goals to make the roadmap outcome-oriented instead of output-oriented.

**Walkthrough:**

She starts by listing the features on her current roadmap: a new dashboard redesign, a Slack integration, and an in-app notification system. ' and traces each answer to a user or business outcome. The dashboard redesign is meant to increase daily active usage. The Slack integration is meant to reduce churn among team accounts.

The notification system is meant to increase feature discovery. 1%/month, and feature discovery rate (percentage of users who try a feature within 30 days of release) is 11%. ' The original features become ideas under these goals, not the goals themselves. This means the Slack integration is no longer a commitment.

It is one hypothesis for reducing team churn, sitting alongside alternatives like an onboarding email series for teams or an admin dashboard showing team engagement. When she presents the updated roadmap to leadership, she leads with the three goals and their baselines, then presents the top-ranked ideas under each goal. Leadership appreciates the clarity because they can now evaluate progress by metric movement, not by whether a feature shipped on time.
