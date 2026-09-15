# Examples: Prioritizing Competing Outcomes Across Product Teams

## Example: E-Commerce Platform with Growth vs. Reliability Tension

**Scenario:**

A mid-stage e-commerce SaaS company has three product teams. The Growth team wants to pursue 'Increase merchant activation rate from 34% to 50%' (they believe a redesigned onboarding flow will drive this). The Platform team wants to pursue 'Reduce P95 checkout latency from 2.8s to 1.2s' (merchants are complaining about slow checkouts during peak hours). The Marketplace team wants to pursue 'Launch seller-to-seller messaging to increase repeat purchase rate by 15%.' The VP of Product needs to decide how to allocate the next quarter's engineering capacity across these three outcomes.

**Walkthrough:**

The team scores all three outcomes using a 1-10 scale across Impact (40%), Confidence (25%), Strategic Alignment (25%), and Effort-Inverse (10%). The activation outcome scores Impact: 8, Confidence: 6, Alignment: 9, Effort-Inv: 5 → composite 7.35. The latency outcome scores Impact: 7, Confidence: 9, Alignment: 7, Effort-Inv: 4 → composite 7.0. The messaging outcome scores Impact: 6, Confidence: 4, Alignment: 6, Effort-Inv: 6 → composite 5.6. During calibration, the project manager flags that the latency fix is a prerequisite for the activation outcome—merchants won't activate on a slow platform. The final priority order is: (1) Reduce latency (sequence first due to dependency), (2) Increase activation (highest strategic priority), (3) Messaging deprioritized to next quarter. The messaging team receives a clear rationale and the conditions under which their outcome would be reconsidered.

## Example: B2B SaaS with Product Manager vs Project Manager Collaboration

**Scenario:**

A B2B analytics company has a product manager who owns the vision for a new self-serve dashboard feature aimed at increasing expansion revenue, and a project manager who manages the delivery schedule across a shared data infrastructure team. The product manager has also identified 'reduce time-to-first-insight from 3 days to 4 hours' as a competing outcome. Both outcomes need the same backend team. The product manager vs project manager dynamic comes into play because the PM rates the dashboard feature as a 9 on Impact (it directly drives expansion ARR), but the project manager rates Confidence at 3 because the backend team has a 6-week backlog and the data pipeline needs migration first.

**Walkthrough:**

In the scoring session, the divergence between the product manager's Impact score (9) and the project manager's Confidence score (3) becomes the focal point of discussion. The project manager explains that the data pipeline migration must happen before either outcome is achievable, and estimates it at 4 weeks of effort. The team recalculates: if the pipeline migration is treated as a prerequisite (not a separate outcome), then the 'time-to-first-insight' outcome has a Confidence of 7 (it's a simpler change once the pipeline is done) vs. the dashboard's Confidence of 5 (more complex UI and API work). Rerunning the composite scores with updated confidence, 'time-to-first-insight' rises to #1, the dashboard drops to #2, and the pipeline migration is sequenced as a necessary first step. The product manager and project manager co-author the rationale document, lending credibility from both the strategic and operational perspectives.

## Example: Multi-Product Organization Quarterly Planning

**Scenario:**

A company with three product lines (CRM, Marketing Automation, and Customer Support) is running quarterly outcome prioritization. Each product line has submitted 4-5 candidate outcomes, totaling 14 outcomes competing for a shared pool of 3 platform engineers and a design team of 4. The CEO's stated priority for the year is 'land and expand in mid-market,' which not all outcomes directly serve.

**Walkthrough:**

The prioritization team adds a Strategic Alignment dimension weighted at 30%, specifically calibrated to 'How directly does this outcome serve mid-market land-and-expand?' Outcomes like 'Increase CRM deal-close rate for companies with 50-500 employees by 20%' score Alignment: 10, while 'Reduce support ticket resolution time by 30%' scores Alignment: 5 (indirectly helps retention but doesn't drive acquisition). After independent scoring and calibration, the top 5 outcomes are stack-ranked. Two CRM outcomes, two Marketing Automation outcomes, and one Support outcome make the cut. The 9 deprioritized outcomes are documented with individual rationales. The project managers then run a capacity check: the top 5 outcomes require an estimated 4.2 platform engineers—more than the 3 available. The #5 outcome is moved to a 'stretch' category, deliverable only if the first four finish ahead of schedule. This creates a realistic, honest plan rather than an overcommitted wishlist.
