# Examples: Tracking Innovation Accounting Metrics

## Example: Pre-Revenue B2B SaaS with 200 Beta Users

**Scenario:**

A three-person team has launched a project management tool for freelance designers. They have 200 beta users acquired through a Product Hunt launch. No users are paying yet. The founders need to demonstrate progress to angel investors within 8 weeks.

**Walkthrough:**

The team identifies three leap-of-faith assumptions: (1) freelance designers find the task-tracking workflow valuable, (2) users will return weekly, and (3) users will pay $15/month. They assign metrics: activation rate (percentage completing the first project within 48 hours of signup), week-2 retention rate, and trial-to-paid conversion rate (to be measured once pricing is introduced in week 5). Baselines from the first cohort show 18% activation, 8% week-2 retention, and 0% conversion. They set minimum viable targets: 30% activation, 20% week-2 retention, and 5% trial-to-paid conversion.

In weeks 1-2, they redesign onboarding with a guided first-project template. Activation rises to 27% in the next cohort. In weeks 3-4, they add a weekly email digest showing incomplete tasks, and week-2 retention improves to 16%. In week 5, they introduce pricing.

Trial-to-paid conversion is 3%, below the 5% target but not zero. They present the scorecard to investors showing a clear upward trajectory on activation and retention, with an honest assessment that monetization needs more work. The investors fund them for another three months because the learning velocity is visible and credible.

## Example: Consumer Mobile App with 5,000 Downloads

**Scenario:**

A mobile fitness app has 5,000 downloads but only 300 monthly active users. The team of five suspects the onboarding is broken but has no structured measurement in place. They are spending $2,000/month on paid acquisition and need to decide whether to keep spending.

**Walkthrough:**

The team maps their funnel and identifies four metrics: download-to-registration rate, registration-to-first-workout rate (activation), Day-7 retention rate, and Day-30 retention rate. They instrument each event in their analytics tool and measure the most recent two-week cohort. Baselines: 60% download-to-registration, 22% registration-to-first-workout, 11% Day-7 retention, 3% Day-30 retention. The bottleneck is clear: most users register but never complete a workout.

They set a minimum viable target of 40% registration-to-first-workout. They run three experiments over six weeks: simplifying the workout selection screen, adding a 3-minute starter workout, and sending a push notification 2 hours after registration. Activation climbs from 22% to 31% to 38%. Day-7 retention improves in lockstep, rising from 11% to 19%.

They pause paid acquisition during the experiments to avoid confounding and only resume once activation reaches target. The scorecard shows that $2,000/month in acquisition now produces roughly twice the number of retained users, validating the decision to resume spending.

## Example: Enterprise SaaS with Pilot Customers

**Scenario:**

A 15-person B2B company has signed three enterprise pilot customers for a compliance automation platform. Each pilot is worth $50,000/year. The VP of Product needs to prove that the product delivers value before the 90-day pilot window closes, or the customers will churn.

**Walkthrough:**

With only three customers, traditional statistical significance is impossible. The team adapts innovation accounting to qualitative-plus-quantitative measurement. They define three metrics per pilot: (1) percentage of compliance tasks automated (measured by comparing the customer's pre-pilot manual checklist against tasks now handled by the platform), (2) time-to-first-value in days (how long until the customer's compliance team starts using the tool daily), and (3) Net Promoter Score from the compliance team lead (a proxy for renewal likelihood). Baselines are set at pilot kickoff: 0% tasks automated, zero days elapsed, no NPS.

Targets: 60% task automation, time-to-first-value under 21 days, and NPS of 8+. The team updates these metrics weekly per customer. At week 4, Customer A is at 55% automation and NPS 9. Customer B stalled at 20% automation because their compliance framework uses non-standard categories the platform does not support.

Customer C is at 45% automation and NPS 7. The scorecard immediately surfaces Customer B's structural problem, leading to a focused sprint to add custom category mapping. By week 10, all three customers are above 50% automation, and two of three have NPS 8+. The scorecard becomes the centerpiece of the renewal conversation, replacing vague claims with documented progress.

## Example: Marketplace Startup Measuring Both Sides

**Scenario:**

A two-sided marketplace connecting home chefs with local diners has 50 chefs and 400 registered diners. The team needs to track metrics for both supply and demand sides while keeping the scorecard manageable.

**Walkthrough:**

The team identifies assumptions per side: supply-side (chefs will list meals weekly and fulfill orders reliably) and demand-side (diners will order at least once per month and reorder). They limit the scorecard to five metrics: chef weekly listing rate (percentage of chefs who post at least one meal per week), order fulfillment rate (percentage of orders delivered without cancellation), diner activation rate (percentage of registered diners who place a first order within 14 days), diner monthly reorder rate, and average order value. Baselines from the first month: 40% chef listing rate, 85% fulfillment, 12% diner activation, 8% reorder rate, $18 average order. They set targets: 65% chef listing, 95% fulfillment, 25% diner activation, 20% reorder, $22 average order.

They prioritize diner activation first because the supply side is useless without demand. Over four weeks, they test three activation experiments: a first-order discount ($5 off), a curated "meal of the week" email, and a simplified checkout flow. Diner activation climbs from 12% to 21%. Reorder rate moves from 8% to 13% organically as the product experience improves.

The scorecard reveals that chef listing rate dropped to 35% during the same period, flagging a supply-side problem they need to address next cycle.
