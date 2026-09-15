# Examples: Generating and Prioritizing Deliverables from Impacts

## Example: SaaS Onboarding Conversion — From Impact to Roadmap

**Scenario:**

A B2B SaaS company has an impact map with the goal 'Increase trial-to-paid conversion from 8% to 12% in Q3.' One actor is 'New trial user (solo practitioner)' and one mapped impact is 'Experiences a meaningful success within 48 hours of signup.' The product team needs to generate and prioritize deliverables for this impact to populate their product manager roadmap.

**Walkthrough:**

The team runs a 12-minute silent brainstorm and generates 11 candidate deliverables: (1) interactive product tour, (2) pre-built template gallery, (3) 'quick win' wizard that creates a shareable output in 5 minutes, (4) personalized onboarding email drip, (5) in-app checklist with progress bar, (6) live webinar for new users, (7) Slack community invitation at signup, (8) simplified first-run UI hiding advanced features, (9) a short video walkthrough in the welcome screen, (10) a human-sent personal email from a CSM after first login, (11) removing the credit card requirement from trial signup.

After clustering and de-duplication, they have 9 distinct deliverables. They write assumption statements for each. For example: 'We believe the quick-win wizard will cause new trial users to experience meaningful success within 48 hours because it removes the blank-canvas problem and produces a tangible output they can share.'

Scoring reveals: the quick-win wizard scores High contribution, Medium confidence, Medium effort. The personal CSM email scores Medium contribution, High confidence, Small effort. The simplified first-run UI scores High contribution, Low confidence, Large effort.

Final tiers: **Tier 1** — quick-win wizard and personal CSM email (ship this sprint). **Tier 2** — simplified first-run UI (run a prototype test with 20 users first to validate the assumption). **Tier 3** — product tour, email drip, checklist. **Tier 4** — removing credit card requirement (data shows it doesn't correlate with this impact).

The Tier 1 items go onto the product manager roadmap for the current cycle, tagged with their parent impact and goal for full traceability.

## Example: Marketplace Seller Retention — Prioritizing Across Two Impacts

**Scenario:**

An online marketplace has mapped two impacts for the actor 'Small seller with 10-50 listings': Impact A is 'Lists 5+ new products per month' and Impact B is 'Responds to buyer inquiries within 2 hours.' The team needs to generate deliverables for both impacts and decide which to tackle first on the product manager roadmap.

**Walkthrough:**

For Impact A, the team brainstorms: bulk upload tool improvement, AI-generated listing descriptions, listing quality score with tips, seasonal product suggestions email, and a referral bonus for inviting other sellers. For Impact B: push notifications for new inquiries, pre-written response templates, auto-responder for after-hours messages, and a seller response-time badge visible to buyers.

After scoring, the standout for Impact A is the AI-generated listing descriptions (High contribution, Medium confidence, Medium effort) and for Impact B, push notifications (High contribution, High confidence, Small effort). The team decides to ship push notifications immediately (small effort, high confidence) and run a concierge experiment for AI descriptions (have a human write descriptions for 20 sellers and measure listing velocity change). This approach builds the product manager roadmap incrementally, validating the bigger bet before committing engineering resources.
