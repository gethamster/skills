# Examples: Running Continuous Learning Loops from Field Deployments

## Example: Data pipeline startup building its first registry

**Scenario:**

A 12-person data pipeline company has 3 forward deployed engineers working across 8 customer accounts. The FDEs communicate feedback via Slack messages to the CTO, who also serves as product lead. Key insights get lost in message threads. The team has no structured feedback process and the CTO feels overwhelmed by unfiltered deployment noise.

**Walkthrough:**

The team sets up a Notion database as their field insight registry with the five-category taxonomy. They seed it with 12 entries from the past month by asking each FDE to recall their top 4 deployment friction points. Within two weeks, the registry has 28 entries. During the first weekly pattern scan, the registry owner notices that 5 of 8 customers required a custom workaround for the same date timezone handling issue in the ingestion layer, costing an estimated 4 hours per customer.

This pattern scores 75 on the priority composite (frequency 5, revenue weight 3, time cost 5). At the first biweekly sync, the CTO immediately recognizes this as a known pain point but had not realized how widespread it was. The engineering team ships a configurable timezone setting in the next sprint, eliminating an estimated 20+ hours of future deployment work. The CTO starts checking the registry before sprint planning.

Within 6 weeks, the three FDEs report that their average deployment setup time has dropped by roughly 15% because product fixes now address patterns they previously worked around manually.

## Example: Enterprise analytics platform with a 20-person FDE team

**Scenario:**

A mid-stage B2B analytics company has 20 forward deployed engineers embedded at Fortune 500 customers. Each FDE works at one or two accounts for 3-6 months. The company has a product team of 8 and an engineering team of 40. Field feedback currently arrives through quarterly business reviews and occasional email threads. Product engineers rarely interact directly with FDEs.

**Walkthrough:**

The FDE team lead establishes a Linear project as the shared registry with custom fields for the taxonomy, severity, frequency, and revenue weight. They designate 4 regional registry owners (Americas East, Americas West, EMEA, APAC), each responsible for weekly scans of their region's entries. After the first month, the registry contains 94 entries. Cross-regional pattern detection reveals that 12 of 20 active deployments require custom data connectors for legacy ERP systems, a gap the product team believed affected only 2-3 customers.

The composite score is 100 (frequency 5, revenue weight 4, time cost 5). The pattern briefing includes 6 different workaround code snippets from 6 different FDEs, each solving the same problem slightly differently. The core engineering team uses these snippets to design a generic ERP connector framework, shipping it in two sprints. The FDE team also discovers a low-frequency but high-severity pattern: 3 customers in regulated industries need audit logging for every data transformation, representing 22% of company ARR.

This pattern, invisible in individual account reports, becomes the number two roadmap item for Q3. Within two quarters, the biweekly sync is the most anticipated meeting on the product team's calendar because it consistently surfaces insights they cannot get from usage analytics alone.

## Example: B2C SaaS with analytics engineer customer deployments at agency partners

**Scenario:**

A marketing analytics SaaS company deploys engineers to help agency partners integrate the product with their clients' ad platforms. The company has 5 analytics engineers working across 30 agency accounts. Each engineer handles 5-7 accounts simultaneously and spends most of their time on configuration and troubleshooting rather than building custom solutions. Feedback currently arrives as one-line Slack messages like "Agency X needs better Google Ads support."

**Walkthrough:**

The team creates a lightweight Airtable registry, choosing simplicity over sophistication because the high account-to-engineer ratio means capture time must be minimal. They limit each entry to 6 fields: date, agency, category, severity, one-line title, and two-sentence description. The mandatory time cost field estimates hours in 15-minute increments. After three weeks and 47 entries, the weekly scan reveals two dominant patterns.

First, 18 of 30 agencies need to pull data from Google Ads API v14 while the product only supports v12, causing a daily manual export workaround that costs each agency 20 minutes per day. Second, 11 agencies have requested the ability to white-label dashboards for their end clients. The Google Ads pattern scores highest (frequency 5, revenue weight 5, time cost 4 = 100) because it affects a daily workflow. The team presents both patterns at the first biweekly sync with the product lead.

The Google Ads API update ships within one sprint since it was a known debt item that lacked urgency data. The white-label request, now backed by 11 agencies and revenue data, enters the Q4 roadmap as a new product tier. " which signals that the loop has shifted from push to pull.

## Example: Infrastructure company with long deployment cycles

**Scenario:**

A cloud infrastructure company sends forward deployed engineers to enterprise customers for 6-12 month engagements. Each engineer works deeply in one customer's environment, building custom integrations with the company's core platform. The long engagement cycles mean that patterns emerge slowly and the risk of knowledge loss when engineers rotate off accounts is high.

**Walkthrough:**

The team builds their registry in Confluence (matching their existing tool stack) with a template that includes an additional field: "knowledge transfer risk" rated low, medium, or high. This field captures whether the observation represents knowledge that would be lost if the current engineer rotated off the account. Over the first quarter, 3 engineers log 38 entries. The weekly scans are done by a single registry owner who has read access to all accounts.

Pattern detection at this pace is slower, but by week 10, the owner identifies a pattern across all 3 active engagements: customers consistently underestimate the IAM permissions required for the platform's data collection agents, leading to a 1-2 week debugging phase in every deployment. The pattern scores 60 (frequency 3, revenue weight 4, time cost 5). The engineering brief includes the specific IAM policy documents from all three customers, highlighting the common missing permissions. Core engineering responds by building an IAM prerequisite checker that runs before deployment begins, eliminating the debugging phase entirely.

The registry also flags 7 entries with high knowledge transfer risk, all documenting customer-specific architectural decisions that are not recorded anywhere else. These entries become the foundation for structured account handoff documents, solving a long-standing rotation problem. The quarterly audit shows that the 38 entries have led to 2 product improvements and 7 knowledge preservation artifacts, giving the FDE program concrete ROI data for leadership.
