# Examples: Identifying Cross-Journey Insights and Patterns

## Example: B2B SaaS platform with onboarding, upgrade, and renewal journeys

**Scenario:**

A mid-market SaaS company with 2,000 customers has mapped 8 journeys at L2: trial signup, onboarding, first-value realization, expansion (adding seats), upgrade (plan tier change), support escalation, renewal, and offboarding. They have quantitative data for conversion rates at each stage and NPS scores collected at key moments. Two product teams and one customer success team own different subsets of these journeys.

**Walkthrough:**

The team tagged all 8 journeys using a 6-type vocabulary and generated 94 tag instances. Sorting by tag type revealed three significant clusters. First, "account verification" appeared as a pain point in trial signup (28% drop-off), expansion (12% abandonment), and upgrade (19% abandonment). 1 seconds.

Composite score: frequency 3, severity 4, strategic weight 5 = 60. Second, "billing context loss" appeared as a handoff pain point in upgrade, renewal, and support escalation. Customers who contacted support about billing during an upgrade or renewal had to re-explain their situation because the support system did not surface the active transaction. Root cause: the billing and support systems shared no session context.

Composite score: frequency 3, severity 3, strategic weight 4 = 36. Third, "onboarding checklist redundancy" showed up as a redundant step: expansion users who added seats were presented with the full onboarding checklist, including steps the account had completed months earlier. Composite score: frequency 2, severity 2, strategic weight 3 = 12. The team documented all three in the register, presented the top two to leadership, and the KYB API replacement was approved for Q2.

The billing context integration was scoped for Q3. The onboarding checklist fix was assigned as a quick win to a product team with available sprint capacity.

## Example: E-commerce retailer with acquisition, purchase, return, and loyalty journeys

**Scenario:**

A direct-to-consumer retailer with 50,000 monthly orders has mapped 6 journeys: browsing/discovery, first purchase, repeat purchase, return/exchange, loyalty program enrollment, and customer service. Quantitative data includes conversion rates, return rates by product category, and CSAT scores from post-interaction surveys. The marketing, operations, and customer service teams each own different journeys with minimal cross-team coordination.

**Walkthrough:**

Tagging produced 72 instances across the 6 journeys. The most striking cluster was "address entry friction," tagged as a pain point in first purchase (7% cart abandonment at the address step), return/exchange (customers manually re-entering the return address despite having an account), and loyalty enrollment (a separate address form with different validation rules). All three traced to the same root cause: three different address input components built by three different teams at different times, none connected to the account's stored address. Composite score: frequency 3, severity 3, strategic weight 4 = 36.

A second cluster, "inconsistent communication tone," appeared across discovery (playful brand voice in ads), first purchase (formal transactional emails), and return/exchange (legalistic return policy language). " Composite score: frequency 3, severity 2, strategic weight 3 = 18. A third pattern was a data dependency: the loyalty program had no visibility into return behavior, so customers who returned 40% of purchases were still receiving loyalty rewards at the same rate as high-retention customers. This was both a cost issue and a segmentation failure.

Composite score: frequency 2, severity 3, strategic weight 4 = 24. The register drove two immediate actions: a unified address component project (engineering) and a brand voice guideline with journey-specific adaptations (marketing). The loyalty data integration was queued for the next planning cycle.

## Example: Healthcare provider network with patient acquisition, treatment, and billing journeys

**Scenario:**

A regional healthcare system with 12 clinics has mapped 7 patient journeys: appointment scheduling, new patient intake, specialist referral, treatment/visit, follow-up care, billing/insurance, and feedback/complaint. Quantitative data includes no-show rates, time-to-appointment, billing dispute rates, and patient satisfaction scores. Three departments (operations, clinical, and revenue cycle) own different journeys and use different systems.

**Walkthrough:**

The analysis team tagged 108 instances across the 7 journeys. The dominant cluster was "information re-collection": patients provided the same demographic, insurance, and medical history information at scheduling, intake, referral, and billing. Four journeys, four separate forms, four separate data entry points. Root cause: each department used a different system with no shared patient context.

Composite score: frequency 4, severity 4, strategic weight 5 = 80, the highest-scoring insight in the register. " Patients received confirmation messages from different systems (scheduling, clinic, specialist office) with different formats, sometimes with conflicting instructions about arrival time or required documents. Frequency 3, severity 3, strategic weight 3 = 27. A third pattern emerged from the compliance gate tag: HIPAA consent collection happened at scheduling, intake, and referral, three separate consent events for what was often the same episode of care.

Patients expressed frustration in satisfaction surveys ("I already signed this"), and intake staff reported spending 4-6 minutes per patient on redundant consent workflows. Composite score: frequency 3, severity 2, strategic weight 4 = 24. The insight register led to a multi-year patient data platform initiative (addressing the information re-collection insight) and an immediate quick win of consolidating confirmation messages into a single, branded communication channel. The consent consolidation required legal review and was documented as a Q3 investigation item.

## Example: Small startup with limited journey data running a lightweight analysis

**Scenario:**

A 15-person B2B startup has mapped only 4 journeys at L2: website visit to trial signup, trial to paid conversion, paid customer onboarding, and support ticket resolution. Quantitative data is sparse: they have trial-to-paid conversion rates and support ticket volume, but limited stage-level metrics. The entire company operates as one team with no formal journey ownership.

**Walkthrough:**

Given the small portfolio, the team ran the analysis in a single 90-minute session using a whiteboard. They applied a simplified 4-type tag vocabulary (pain point, handoff, redundancy, data dependency) and generated 31 tag instances. Two clusters surfaced immediately. First, "feature discovery gap": trial users who did not find the reporting feature during trial (tagged as a pain point in trial-to-paid) were the same users who generated the most support tickets after converting (tagged as a pain point in support).

The reporting feature was the product's core differentiator, but it was buried three clicks deep in navigation. Composite score: frequency 2, severity 4, strategic weight 5 = 40. Second, "context loss at conversion": when a trial user converted to paid, their trial configuration (custom fields, integrations, sample data) was wiped and they started from a blank state. This was tagged as a pain point in onboarding and as a handoff issue between trial and paid.

Composite score: frequency 2, severity 3, strategic weight 4 = 24. With only two high-scoring insights, the team did not need a formal register. They created two Jira epics, one for surfacing the reporting feature in the trial experience, and one for preserving trial configuration through conversion. Both shipped within six weeks.

7% over the following quarter, and support ticket volume for reporting-related questions dropped by 35%.
