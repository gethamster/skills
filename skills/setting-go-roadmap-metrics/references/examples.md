# Examples: Setting Metrics and Success Criteria for Each Roadmap Goal

## Example: Early-stage B2B SaaS improving trial-to-paid conversion

**Scenario:**

A 15-person B2B SaaS company with a freemium model has a roadmap goal of "increase the percentage of trial users who convert to a paid plan." The team ships monthly, has about 500 new trial signups per month, and currently converts 8% of trials to paid. They use Mixpanel for product analytics and Stripe for revenue data.

**Walkthrough:**

" The primary KPI is 14-day trial-to-paid conversion rate. 2%, measured on March 1 via the Mixpanel trial cohort report. The leading indicator is "percentage of trial users who complete the three-step onboarding flow within 48 hours," currently at 34%. The guardrail metric is "paid user churn at 60 days," currently at 6%, because the team wants to ensure they are not converting users who immediately cancel.

The target is 12% conversion by June 30, based on the observation that users who complete onboarding convert at 19%, so improving onboarding completion should lift the overall rate. " The team reviews onboarding completion weekly and conversion rate bi-weekly. After this exercise, feature prioritization becomes straightforward: any feature that does not plausibly improve onboarding completion or reduce friction in the upgrade flow gets deprioritized.

## Example: Enterprise platform reducing time-to-value for new accounts

**Scenario:**

A 200-person enterprise platform company has a roadmap goal of "accelerate time-to-value for new enterprise accounts." Implementation timelines currently average 14 weeks. The company has a dedicated customer success team and tracks implementation milestones in Salesforce. The roadmap covers two quarters.

**Walkthrough:**

" The primary KPI is median time-to-first-production-workflow, measured in calendar days. The baseline is 98 days (median across the last 12 implementations, pulled from Salesforce on April 15). The leading indicator is "percentage of implementation milestones completed on schedule," currently at 62%. 8 out of 10, because a faster implementation achieved by cutting corners on training would damage satisfaction.

The target is 70 days median by December 31. The rationale: the three longest implementation phases (data migration, SSO configuration, and custom reporting setup) account for 55 of the 98 days, and the Q3-Q4 roadmap includes a self-service data migration tool, pre-built SSO templates, and a reporting wizard that collectively should compress those phases by 40%. " The customer success lead owns the metric and reports monthly to the product and executive teams.

## Example: Consumer mobile app increasing weekly active usage

**Scenario:**

A consumer mobile app with 2 million monthly active users has a roadmap goal of "deepen user engagement." The product team is a 6-person squad. They ship bi-weekly and use Amplitude for analytics. Weekly active users (WAU) have been flat at around 800,000 for three months.

**Walkthrough:**

" The primary KPI is WAU (3+ sessions), which is a stricter definition than the standard WAU. The baseline is 320,000 users (40% of the 800K WAU), measured on May 1 in Amplitude's behavioral cohort report. The leading indicator is "Day 1 to Day 7 return rate for new users," currently at 28%, because early return behavior predicts sustained weekly engagement. 2 minutes, because the team wants to ensure that more frequent visits do not come at the cost of shallower sessions driven by spammy push notifications.

The target is 400,000 WAU (3+ sessions) by October 31, a 25% lift. The stretch target is 450,000. The rationale draws on a cohort analysis showing that users who receive a personalized content recommendation within their first session return 3+ times per week at 58%, compared to the 40% baseline. The Q3 roadmap features a recommendation engine and personalized push notifications.

" The PM checks the leading indicator weekly and the primary KPI bi-weekly.

## Example: B2B marketplace reducing seller churn

**Scenario:**

A B2B marketplace connecting suppliers and buyers has 4,500 active sellers. Annual seller churn is 22%, and the roadmap goal for the next two quarters is "improve seller retention." The platform tracks seller activity in a custom analytics dashboard built on BigQuery. The product team of 8 is split across buyer and seller squads.

**Walkthrough:**

" The primary KPI is 12-month seller churn rate. The baseline is 22%, measured using the cohort of sellers active on January 1 and tracked through December 31 of the prior year, pulled from the BigQuery dashboard. Because 12-month churn is extremely lagging, the team selects a more responsive leading indicator: "percentage of sellers with at least one transaction in the trailing 30 days," currently at 71%. The guardrail metric is average seller revenue per transaction, currently at $2,400, to ensure that retention efforts do not attract low-value transactions that dilute marketplace quality.

The target is to increase the trailing-30-day active seller rate from 71% to 80% by December 31, which the team models as equivalent to reducing annualized churn from 22% to approximately 16%. " The PM checks the leading indicator weekly and reports to the marketplace GM monthly. This example illustrates how to handle extremely lagging primary KPIs by pairing them with a responsive leading indicator that the team can act on in real time.
