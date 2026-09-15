# Examples: Measuring FDE Success by Business Outcomes

## Example: B2B SaaS reducing enterprise onboarding time

**Scenario:**

A 40-person SaaS company sells data analytics to enterprise customers. Their average onboarding takes 45 days, and they lose 15% of new accounts before go-live because the integration process stalls. They embed one FDE for a 6-month engagement. The FDE needs to prove value to justify the $250K engagement cost.

**Walkthrough:**

The FDE starts by documenting the baseline: 45-day average onboarding, 15% pre-go-live churn, $180K average annual contract value. The lagging metrics on the scorecard are: average onboarding days (target: under 10), pre-go-live churn rate (target: under 5%), and revenue retained from faster onboarding (target: $540K in saved ARR, calculated as 10% churn reduction times average ACV times projected new accounts). Leading indicators are: number of integration steps automated (weekly), percentage of new accounts reaching first data import within 48 hours (weekly), and support tickets per onboarding account (weekly). By month 3, the FDE has automated 7 of the 12 manual integration steps.

The leading indicators show 68% of accounts reach first import within 48 hours (up from 22%), and support tickets per onboarding dropped from 14 to 4. The lagging metrics are moving: average onboarding is at 18 days and trending down, pre-go-live churn is at 9%. At the month 4 stakeholder review, the FDE presents a scorecard showing the trajectory and projects that by month 6, onboarding will be under 10 days. The "so what" column shows $390K in retained ARR so far, already exceeding the engagement cost.

The renewal conversation is straightforward.

## Example: Fintech reducing manual reconciliation costs

**Scenario:**

A fintech company deploys an FDE to a large banking client that processes 50,000 transactions daily. The bank's operations team spends 120 person-hours per week on manual reconciliation of failed transactions. The 4-month engagement costs $180K. The bank's VP of Operations is the executive sponsor and needs to justify the spend to the CFO.

**Walkthrough:**

The FDE documents the baseline: 120 person-hours per week at an average fully loaded cost of $65/hour, totaling $7,800 per week or $405,600 annually. The lagging metric is operational cost reduction in reconciliation, with a target of 70% reduction ($283K annual savings). Leading indicators are: percentage of transaction types with automated reconciliation rules (updated weekly) and manual interventions per 1,000 transactions (updated daily via the bank's ticketing system). The FDE builds the scorecard in a shared Google Sheet the VP of Operations can access anytime.

By week 6, automated reconciliation covers 60% of transaction types, and manual interventions drop from 24 per 1,000 transactions to 9. " By month 3, the lagging metric shows a 62% reduction in reconciliation costs. " The bank expands the engagement.

## Example: Small startup proving FDE value for a single strategic account

**Scenario:**

A 12-person startup deploys their CTO part-time as an FDE to their largest customer (40% of revenue). The customer is a logistics company struggling with real-time fleet visibility. There is no formal engagement budget, but the startup risks losing the $600K annual contract if the customer does not see improvement within 90 days.

**Walkthrough:**

The CTO-as-FDE keeps the scorecard minimal: one lagging metric (percentage of fleet with real-time visibility, baseline 35%, target 90%) and two leading indicators (number of vehicle types integrated with the tracking API, and data freshness measured as average latency of position updates). The scorecard lives in a shared Notion page with the customer's Head of Logistics. Every Friday, the CTO updates the leading indicators and adds a one-sentence note explaining what changed. By week 4, three of five vehicle types are integrated and average latency drops from 8 minutes to 45 seconds.

The lagging metric moves from 35% to 58% fleet visibility. At the 60-day check-in, the CTO shows the scorecard and says: "You can now see 72% of your fleet in real time, up from 35%. " The customer renews and increases the contract by 30%.

## Example: Forward deployed engineer vs software engineer metric comparison at a large enterprise

**Scenario:**

A platform company has both a core engineering team of 80 software engineers and a 6-person FDE team. Leadership asks for a unified performance report. The FDE team lead needs to demonstrate why FDE metrics look different from the core team's metrics without appearing to undermine the engineering org.

**Walkthrough:**

The FDE team lead creates a side-by-side comparison document that frames the difference as complementary rather than competitive. The core engineering team reports on deployment frequency (daily), test coverage (87%), P95 latency (120ms), and sprint velocity (42 points per sprint). These are appropriate metrics for a team building and maintaining a platform product. 1M over the past two quarters).

The team lead frames this in the report: "Core engineering makes the product excellent. FDE makes the product successful in complex customer environments. " This framing, rooted in the forward deployed engineer vs software engineer distinction, helps leadership understand that both measurement approaches are correct for their respective contexts. The comparison document becomes a template other FDE orgs in the company adopt.
