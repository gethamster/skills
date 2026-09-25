# Examples: Defining Product Outcomes Over Outputs

## Example: B2B SaaS Onboarding Team (Small Team, 4 People)

**Scenario:**

A 4-person product team at a project management SaaS company is told their business metric is improving trial-to-paid conversion rate, currently at 8%. They have 3,000 new trial signups per month and a 14-day trial period. The team has access to Mixpanel for analytics and conducts weekly customer interviews.

**Walkthrough:**

The team maps the trial user journey and identifies six key behaviors: account setup completion, first project creation, first task assignment to a teammate, first status update, first use of reporting, and first integration connection. They pull cohort data from Mixpanel comparing users who converted to paid versus those who didn't. The data reveals that users who create a project AND assign at least one task to a teammate within the first 5 days convert at 22%, nearly 3x the overall rate. Users who only create a project but don't collaborate convert at just 10%. The team drafts their outcome: 'Increase the percentage of trial users who assign a task to a teammate within 5 days of signup from 15% to 25% by end of Q2, as a leading indicator of trial-to-paid conversion.'

They validate with leadership that collaboration is indeed a strategic priority, confirm with engineering that the event is already tracked, and establish the 15% baseline from the last 8 weeks of data. This outcome opens up multiple discovery paths: they might improve the onboarding flow, make teammate invitation easier, create collaborative templates, or reduce friction in the invitation-acceptance flow. Their weekly customer interviews now focus on understanding why trial users do or don't invite teammates, surfacing opportunities that map directly to the outcome.

## Example: B2C Mobile App Growth Team (Large Organization)

**Scenario:**

A product team within a fitness app's growth organization is responsible for user retention. The business metric is 12-month retention rate, currently at 18%. The app has 2 million monthly active users. The team is one of five product teams, and they need an outcome scoped tightly enough to avoid overlapping with the other teams focused on acquisition, monetization, social features, and content.

**Walkthrough:**

The team analyzes retention curves by user cohort and discovers a sharp drop-off between weeks 2 and 4, the period after initial motivation fades. They segment users by behavior and find that users who set a recurring workout schedule (rather than logging workouts ad hoc) retain at 31% at 12 months versus 11% for ad-hoc loggers. This behavior is clearly within their scope, it's a product surface they own, and doesn't overlap with the social team's focus on community features or the content team's workout library. They draft: 'Increase the percentage of users who set a recurring weekly workout schedule within their first 30 days from 22% to 35% by end of Q3, as a leading indicator of 12-month retention.'

The guardrail metric is 'weekly active workout completions must not decrease', ensuring they don't just get people to set schedules they never follow. Through customer interviews, they discover that many users don't know the scheduling feature exists, others find it too rigid ('I can't always work out at 7am on Tuesdays'), and some want schedule suggestions rather than building their own. Each insight becomes an opportunity in their tree, and the team runs assumption tests on flexible scheduling versus AI-suggested schedules versus guided setup wizards.

## Example: B2B Platform Team (Internal-Facing Outcome)

**Scenario:**

A platform team at an e-commerce company builds internal tools used by 200 merchant support agents. The business metric is merchant satisfaction score (MSAT), currently at 3.2 out of 5. The team has no direct customer contact, their 'users' are internal support agents. They have basic usage analytics and can interview agents weekly.

**Walkthrough:**

The team initially gravitates toward 'improve MSAT' as their outcome, but quickly realizes they can't directly influence how merchants feel, they can only influence how effectively agents serve merchants. They map agent workflows and identify that agents spend an average of 4.2 minutes per support ticket searching for merchant account information across three different internal tools. They hypothesize that reducing information lookup time would let agents resolve issues faster and more accurately, improving MSAT as a downstream effect. The outcome: 'Reduce the average time agents spend locating merchant account information per ticket from 4.2 minutes to under 2 minutes by end of Q2, as a contributing factor to first-contact resolution rate and merchant satisfaction.'

The guardrail is 'first-contact resolution rate must not decrease', ensuring faster lookups don't lead to sloppy, incomplete answers. Through weekly interviews with support agents, the team discovers that the problem isn't just scattered information, agents often need contextual information that requires interpretation (like understanding a merchant's integration setup to diagnose an issue). This shifts their discovery from 'better search' to 'contextual information surfacing,' opening up solution paths they wouldn't have explored if they'd been handed the output 'build a unified agent dashboard.'

## Example: Early-Stage Startup with Limited Data (3 Founders)

**Scenario:**

A 3-person startup building an AI writing assistant has 400 active users and minimal analytics beyond basic signup and usage counts. Their business metric is monthly recurring revenue, currently at $4,200. They've talked to about 30 users informally but haven't established systematic discovery habits. They use a simple analytics tool that tracks page views and basic events.

**Walkthrough:**

With limited quantitative data, the team leans heavily on qualitative patterns from their user conversations. They've noticed that users who integrate the tool into their existing writing workflow (using it inside Google Docs or their CMS rather than in the standalone editor) tend to become paying customers and stay longer. They can count integrations in their database: 38% of active users have connected at least one integration, and those users have a 45% conversion-to-paid rate versus 12% for standalone-only users. The team drafts: 'Increase the percentage of active users who connect at least one integration within their first 7 days from 38% to 55% by end of Q3, as a leading indicator of paid conversion.'

Because they lack sophisticated analytics, they instrument five specific events in their product: integration setup started, integration type selected, OAuth completed, first use within integration, and second-day use within integration. This gives them a funnel view they didn't have before. Their weekly customer interviews now specifically explore integration setup experiences, where users get stuck, which integrations they want that aren't available, and what triggers the decision to integrate versus stay standalone. Within 6 weeks, they discover that the integration setup for their most-requested platform (Notion) has a 60% drop-off rate at the permissions screen, which becomes their highest-priority opportunity.
