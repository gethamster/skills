# Examples: Building Planned Journey Funnel Visualizations

## Example: Automotive Manufacturer with National Campaign

**Scenario:**

A mid-size automotive brand launches a national awareness campaign and wants to visualize the journey from initial awareness to dealership purchase for a new SUV model. The marketing team has web analytics data, dealer CRM data, and quarterly brand tracking survey results. The purchase cycle averages 4-6 months. The team needs to present funnel findings to the VP of Marketing to justify shifting budget from awareness to evaluation-stage content.

**Walkthrough:**

The team defines stage boundaries: latent entry is any user who viewed the brand's SUV category page or searched a branded SUV keyword (Q3 volume: 480,000 unique users). Evaluation entry is any user who configured a vehicle online, requested a brochure, or visited 3+ model-specific pages in one session (Q3 volume: 58,000). Buying entry is any user who scheduled a test drive or requested a dealer quote (Q3 volume: 9,200). Completed purchases from dealer CRM data: 3,100.

The team builds a three-tier funnel with proportional widths. The latent bar spans the full slide width. The evaluation bar is 12% as wide, creating a dramatic visual narrowing. The buying bar is about 16% the width of evaluation, and the purchase bar is 34% of buying.

7%. 65%. Internal evaluation-stage analysis reveals that 71% of configurator users abandon before reaching the pricing summary, and exit survey data indicates that monthly payment estimates are not shown until the final configurator step, which causes sticker shock. The team annotates this finding with a callout box on the funnel.

The accompanying narrative recommends moving monthly payment estimates to step two of the configurator. 8M in revenue.

## Example: B2B SaaS for Enterprise HR Software

**Scenario:**

A B2B HR software company with a 9-12 month enterprise sales cycle wants to visualize the journey from initial problem awareness to signed contract. Data sources include marketing automation (HubSpot), Salesforce CRM, and win/loss analysis interviews. The audience is the cross-functional revenue team (marketing, sales, customer success). The team of 15 people meets monthly to review pipeline health.

**Walkthrough:**

Stage boundaries are adapted for B2B: latent entry is a marketing-qualified visitor who downloaded a gated asset or attended a webinar (H1 volume: 6,200 contacts). Evaluation entry is a sales-accepted lead who booked a discovery call (H1 volume: 1,050). Buying entry is an opportunity that reached the proposal stage in Salesforce (H1 volume: 310). Won deals: 62.

The funnel is built as a Sankey diagram in a dashboard tool, with flow widths proportional to volume. 9%) is broken into sub-flows by lead source: webinar attendees convert at 24%, whitepaper downloaders at 11%, and paid ad leads at 8%. This immediately shows the team that webinar investment has 3x the downstream yield of paid ads on a per-lead basis. Within the evaluation stage, the team overlays the average number of days between discovery call and proposal.

Deals that received a custom ROI analysis within 14 days of the discovery call advance to proposal at 41%, versus 22% for deals that did not receive one. This finding is annotated directly on the funnel. The narrative recommends standardizing a templated ROI analysis delivered within 10 business days of every discovery call. The revenue team uses this funnel in their monthly meeting, updating it with fresh Salesforce data each cycle.

## Example: Consumer Electronics Retailer Launching a Premium Product Line

**Scenario:**

A national electronics retailer is launching a premium home theater product line with an average basket size of $4,500. The purchase journey spans 3-8 weeks. The team has Google Analytics data, in-store foot traffic sensors, and post-purchase survey data. The visualization needs to convince the CEO to invest in in-store demo experiences rather than additional online advertising.

**Walkthrough:**

The team defines a hybrid online-offline funnel. Latent entry is any user who viewed the premium home theater landing page or walked past the in-store display zone (combined Q4 volume: 210,000 online, 85,000 in-store). Evaluation entry is a user who engaged with a product comparison tool online or spent more than 3 minutes in the demo zone in-store (38,000 online, 12,400 in-store). Buying entry is a user who added a product to cart online or requested an in-store consultation (5,800 online, 4,100 in-store).

Completed purchases: 1,900 online, 2,800 in-store. The funnel is built as two parallel funnels on a single slide, one for online and one for in-store, with a bridge showing crossover (customers who researched online and purchased in-store). 1% vs. 3% vs.

8%). The bridge annotation shows that 1,400 of the 2,800 in-store purchases involved customers who first visited the online comparison tool. The narrative frames the in-store demo experience as the single highest-leverage conversion driver. A what-if scenario shows that adding demo zones to 20 additional stores (currently only in 35 locations) could capture an estimated 1,600 incremental purchases per quarter.

The CEO approves the demo zone expansion based on the funnel's clear visual evidence.

## Example: Financial Services Firm Visualizing Mortgage Origination Journey

**Scenario:**

A regional mortgage lender wants to understand and communicate why its application-to-close rate has dropped 8 percentage points year-over-year. The team has application data from its loan origination system, website analytics, and call center logs. The audience is the operations leadership team responsible for process improvements. The mortgage journey typically spans 6-10 weeks from first inquiry to closing.

**Walkthrough:**

Stage boundaries map to the mortgage process: latent entry is a user who visited the mortgage rates page or called the general inquiry line (Q2 volume: 42,000). Evaluation entry is a user who started a pre-qualification form online or completed a phone-based needs assessment (Q2 volume: 8,600). Buying entry is a user who submitted a full mortgage application (Q2 volume: 3,200). Closed loans: 1,280.

The team builds a year-over-year comparison funnel showing the same three tiers for Q2 this year and Q2 last year, side by side. Latent volume is actually up 11% (from 37,800 to 42,000), and latent-to-evaluation conversion is flat at around 20%. The drop appears between evaluation and buying: pre-qualification-to-application conversion fell from 48% to 37%. Internal evaluation-stage analysis reveals that the firm introduced a new document upload portal mid-year that has a 23% error rate on mobile devices.

Call center logs confirm a spike in complaints about upload failures. The funnel annotates this specific touchpoint with the error rate and call volume data. The operations team prioritizes a mobile portal fix. A what-if scenario shows that restoring the prior 48% conversion rate would recover approximately 950 additional applications per quarter, which at historic close rates would produce 380 incremental funded loans.

The visualization is updated monthly to track whether the portal fix moves the conversion rate back toward the target.
