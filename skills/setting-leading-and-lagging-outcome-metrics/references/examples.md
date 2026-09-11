# Examples: Setting Leading and Lagging Metrics for Roadmap Outcomes

## Example: SaaS Onboarding Redesign to Improve Trial-to-Paid Conversion

**Scenario:**

A B2B project management SaaS has a lagging metric problem: trial-to-paid conversion is 8%, and the company needs it at 12% to hit revenue targets. The product team has redesigned the onboarding flow to get users to their 'aha moment' (creating a project and inviting a teammate) faster. The senior product manager needs to set up leading and lagging metrics so the team doesn't have to wait the full 14-day trial period to know if the redesign is working.

**Walkthrough:**

The lagging metric is clear: trial-to-paid conversion rate, measured at trial expiration (day 14). The senior product manager maps the causal chain backwards: a user converts when they experience enough value to justify payment. Historical data shows users who create a project AND invite at least one teammate within the first 3 days convert at 22%, versus 4% for those who don't. The team selects two leading indicators: (1) percentage of trial users who create a project within 24 hours of signup (target: ≥ 65%), and (2) percentage of trial users who invite a teammate within 72 hours (target: ≥ 40%). They also add a medium-term indicator: day-7 active usage rate (target: ≥ 55%). The dashboard shows all three leading indicators updated daily alongside the trailing 4-week conversion rate. The decision trigger is: if the 24-hour project creation rate falls below 50% for one week, the team pauses the rollout and investigates. Within the first week of the new onboarding, the 24-hour creation rate hits 71% and the 72-hour invite rate reaches 38%. The team knows they're directionally correct even though conversion data won't be definitive for two more weeks.

## Example: E-Commerce Reducing Customer Support Costs Through Self-Service

**Scenario:**

An e-commerce company's customer support cost per order has risen to $3.40 and the target is $2.00. The product team has built a self-service order tracking and returns portal to deflect support tickets. The initiative is expensive and the VP of Operations wants evidence it's working before committing to phase 2 development. The senior product manager needs leading metrics that provide signal within weeks, not months.

**Walkthrough:**

The lagging metric is support cost per order, calculated monthly (total support cost / total orders). The causal chain: if customers can resolve their issues through self-service, they won't contact support, which reduces ticket volume, which reduces cost. The team identifies three leading indicators: (1) self-service portal adoption rate—percentage of customers with an active order who visit the portal at least once (target: ≥ 30% within 4 weeks of launch), (2) self-service resolution rate—percentage of portal visitors who don't subsequently contact support within 48 hours (target: ≥ 70%), and (3) weekly support ticket volume for order-status and returns categories (target: 25% reduction from baseline within 6 weeks). They validate with historical data: a pilot group that had early access to the portal showed a 0.6 correlation between portal adoption and reduced ticket creation. After launch, portal adoption reaches 34% in week 3, but self-service resolution is only 58%—below the 70% target. The team investigates, discovers the returns flow has a confusing step, fixes it in week 4, and resolution climbs to 73% by week 6. Meanwhile, ticket volume in the target categories drops 22%, just shy of the 25% target. The leading indicators told the story three months before the quarterly cost-per-order lagging metric would have confirmed it.

## Example: Mobile App Feature Launch to Drive Weekly Active Users

**Scenario:**

A fitness app team has launched a social challenges feature (users can invite friends to weekly step competitions) to improve their core lagging metric: weekly active users (WAU), which has plateaued at 1.2 million and needs to reach 1.5 million. The feature was a significant engineering investment, and the senior product manager must demonstrate traction quickly to justify continued iteration versus reallocating the team.

**Walkthrough:**

The lagging metric is WAU, measured weekly. The causal hypothesis is that social challenges create a re-engagement loop: users return to the app to check standings, log activity, and respond to friend notifications. The team selects leading indicators: (1) challenge creation rate—number of challenges created per 1,000 eligible users per week (target: ≥ 15 per 1,000), (2) challenge acceptance rate—percentage of invitees who join a challenge (target: ≥ 40%), and (3) notification-driven return rate—percentage of challenge participants who open the app via a challenge notification (target: ≥ 25%). They also track a medium-term bridge metric: 2-week retention of users who participated in at least one challenge versus non-participants. In week 1, challenge creation is at 18 per 1,000 (above target), but acceptance rate is only 28% (below target). Investigation reveals that the invite flow defaults to SMS, and many users prefer in-app invitations. After adding an in-app invite path in week 2, acceptance climbs to 44%. By week 4, notification-driven return rate stabilizes at 31%, and the 2-week retention gap between challengers and non-challengers is 18 percentage points. WAU begins ticking up by week 5. The leading indicators not only confirmed the feature's potential but also pinpointed the exact friction point (SMS-only invites) that would have suppressed the lagging metric if left unaddressed.
