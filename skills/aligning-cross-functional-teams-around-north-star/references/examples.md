# Examples: Aligning Cross-Functional Teams Around a Shared North Star

## Example: Aligning a B2B SaaS Company Around 'Weekly Active Teams'

**Scenario:**

A project management SaaS company has selected 'Weekly Active Teams' as their North Star Metric. They have 4 cross functional teams: Product Engineering, Product Design, Growth Marketing, and Customer Success. Currently, Engineering tracks deployment frequency, Design tracks NPS, Marketing tracks MQLs, and Customer Success tracks ticket resolution time. These metrics have no explicit connection to each other or to the North Star.

**Walkthrough:**

The VP of Product starts by auditing each team's current metrics and finds that Marketing's MQL target incentivizes individual signups, but the North Star requires *teams* to be active—a fundamental misalignment.

In the alignment workshop, each function maps their causal chain:
- **Engineering:** 'When we reduce p95 page load time below 2 seconds, team collaboration features become usable on slow connections → more teams complete their first project → Weekly Active Teams increases.' Input metric: **p95 load time for collaboration features**.
- **Design:** 'When we improve the team onboarding flow, new teams reach their first shared project faster → Weekly Active Teams increases.' Input metric: **% of new teams creating a shared project within 7 days**.
- **Marketing:** 'When we shift from individual lead generation to team-based acquisition (targeting admin/manager personas who bring their team), we get higher-quality signups that convert to active teams.' Input metric: **Team signups (3+ users from same domain)**.
- **Customer Success:** 'When we proactively reach out to teams whose activity is declining, we prevent churn before it happens.' Input metric: **% of at-risk teams re-engaged within 14 days**.

The team builds a shared dashboard showing Weekly Active Teams at the top, with the four input metrics below. They modify their bi-weekly sprint review to include a 5-minute 'North Star check-in' where each team reports their input metric and connects shipped work to it. After one quarter, they discover that Design's onboarding improvement had a 3x larger effect on the North Star than Engineering's load time work, which leads to a reallocation of engineering resources toward onboarding infrastructure for the next quarter.

## Example: Resolving Cross-Functional Conflict Through North Star Framing

**Scenario:**

At a consumer fintech app, the Marketing team wants to run a viral referral campaign that would drive a spike in new signups. The Engineering team pushes back because the infrastructure can't handle a sudden traffic spike without degrading the experience for existing users. The North Star Metric is 'Monthly Users Who Complete a Financial Action.'

**Walkthrough:**

Rather than framing this as Marketing vs. Engineering, the product leader brings both teams back to the North Star. The referral campaign would drive signups, but if infrastructure degrades and existing users can't complete financial actions, the North Star could actually *decrease* during the campaign period.

The resolution: Marketing agrees to a phased rollout (referral access released to 10% of users first, scaling weekly), giving Engineering time to provision capacity. Engineering agrees to prioritize infrastructure scaling work above their planned refactoring sprint. Both teams frame their commitments as input metric targets: Marketing targets 'Referred users who complete first financial action within 14 days,' and Engineering targets '99.9% uptime for core transaction flow during campaign.'

The conflict, which initially felt like a turf war, becomes a collaborative planning exercise because both teams are optimizing for the same North Star rather than defending their functional territory.
