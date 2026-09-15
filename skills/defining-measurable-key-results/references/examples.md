# Examples: Defining Measurable Key Results

## Example: B2B SaaS Product Team, 12-Person Startup

**Scenario:**

A product team at an early-stage B2B SaaS company (Series A, 12 people) sets the quarterly objective: "Make our onboarding experience so good that new users succeed without hand-holding." The team has access to Mixpanel for product analytics, Intercom for support data, and a simple NPS survey. They need to write key results that prove onboarding is genuinely improving, not just that features were shipped.

**Walkthrough:**

The team brainstorms 8 possible signals of onboarding success: activation rate, time to first value, onboarding completion rate, support ticket volume from new users, trial-to-paid conversion, NPS for first-week users, feature adoption breadth, and number of onboarding flows shipped. They filter for measurability and influence. "Number of onboarding flows shipped" is an output, so it is dropped. "NPS for first-week users" requires a new survey mechanism that would take 3 weeks to build, so it is deferred.

7 days (median, Mixpanel), onboarding support tickets are 47 per week (Intercom tag). 0 days, (3) Reduce onboarding-related support tickets from 47/week to 20/week. KR1 is a lagging indicator of overall onboarding success. KR2 is a leading indicator that gives early signal.

KR3 is a quality check that prevents the team from "improving" activation by making the threshold easier while users are still confused. The team is about 65% confident on KR1 and KR2, and 70% confident on KR3. They document data sources and assign the product manager as measurement owner with weekly pulls every Monday.

## Example: Enterprise Marketing Team, 200-Person Company

**Scenario:**

A marketing team at a mid-size enterprise software company (200 employees, $30M ARR) sets the quarterly objective: "Become the go-to thought leader in our category for mid-market buyers." The team has access to Google Analytics, HubSpot, SEMrush, and a brand tracking survey run quarterly. They have two content marketers, a demand gen manager, and a part-time designer. The challenge is translating "thought leadership" into numbers.

**Walkthrough:**

The team lists 10 possible signals: organic traffic, branded search volume, share of voice in SEMrush, number of articles published, social media followers, backlinks from industry publications, speaking invitations received, podcast guest appearances, email subscriber growth, and content-sourced pipeline. They filter ruthlessly. "Speaking invitations" is not trackable in a system. "Articles published" is an output.

"Social followers" is a vanity metric disconnected from the objective. They pull baselines: organic traffic to blog is 34,000 monthly sessions (GA4, trailing 3 months), branded search volume is 2,400/month (SEMrush), share of voice is 12% (SEMrush, category keyword set of 450 terms), content-sourced pipeline is $180K/quarter (HubSpot attribution). They select four key results: (1) Increase organic blog traffic from 34,000 to 55,000 monthly sessions, (2) Grow branded search volume from 2,400 to 4,000 monthly searches, (3) Increase share of voice from 12% to 20% across tracked keyword set, (4) Grow content-sourced pipeline from $180K to $350K per quarter. KR1 and KR3 are leading indicators of thought leadership reach.

KR2 measures whether more people are actively seeking the brand. KR4 ties thought leadership to business impact, preventing a scenario where the team produces admired content that generates no leads. Confidence ranges from 55% (KR2, hardest to influence directly) to 70% (KR1). The demand gen manager owns weekly measurement for KR1 and KR4, while a content marketer pulls KR2 and KR3 monthly from SEMrush.

## Example: Platform Engineering Team, Large Organization

**Scenario:**

A platform engineering team at a 1,500-person company sets the quarterly objective: "Make our internal developer platform reliable and fast enough that product teams never wait on infrastructure." The team runs Kubernetes clusters, a CI/CD pipeline, and an internal API gateway. They have Datadog for monitoring, PagerDuty for incidents, and Jira for tracking internal service requests. Six engineers report to the platform team lead.

**Walkthrough:**

The team brainstorms signals: deployment frequency, deployment failure rate, mean time to recovery (MTTR), platform uptime, CI/CD pipeline duration, time to provision a new service, internal satisfaction score, number of infrastructure-related incidents, and P0 incident count. They filter: "internal satisfaction score" requires a new survey (deferred). "Number of incidents" is too broad (includes incidents caused by product team code, not platform issues). 1% (Datadog).

5 days. KR1 is a committed key result (non-negotiable reliability target) and is scored pass/fail. KR2 is a developer productivity metric that gives daily signal. 2 days of waiting is the biggest complaint from product teams.

The team is 50% confident on KR3 (requires significant automation work), 65% on KR2, and 55% on KR1 (requires infrastructure hardening). Datadog dashboards are the data source for KR1 and KR2, with automated weekly reports. KR3 is measured via a Jira filter the team lead runs weekly.

## Example: Small B2C Mobile App Team, 4-Person Team

**Scenario:**

A four-person team building a consumer fitness app sets the quarterly objective: "Build a habit loop so strong that users come back every day without push notification reminders." The team has Firebase Analytics, a simple Postgres database, and App Store Connect data. No dedicated data analyst. The founder, one engineer, one designer, and one part-time marketer make up the team.

**Walkthrough:**

The team lists signals: DAU/MAU ratio, Day-1/Day-7/Day-30 retention, streak length (consecutive days of app use), organic vs. notification-driven sessions, app store rating, and workout completion rate. They filter: "app store rating" is influenced by many factors beyond habit formation. "Organic vs.

notification-driven sessions" requires event tagging they have not built yet, but the engineer estimates it can be added in 2 days, so they keep it. 4 days. 4 days to 5 days. They initially considered a fourth key result about organic session percentage but decided against it because the event tagging work would consume a full sprint and they only have one engineer.

They made a team decision to add that metric next quarter once instrumentation is in place. KR1 is a leading indicator that gives weekly signal. KR2 is the lagging indicator that confirms the habit loop is real. KR3 is a user-facing metric that directly maps to the language of the objective ("come back every day").

The founder owns weekly measurement, pulling numbers from a Firebase dashboard every Monday morning. Confidence is about 60% across all three key results. 35 DAU/MAU would put them in the top quartile for fitness apps, which is ambitious but achievable if their new social features land well.
