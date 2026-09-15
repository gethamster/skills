# Examples: Comparing MoSCoW with RICE, ICE, WSJF, and Other Frameworks

## Example: Early-Stage SaaS Choosing Between MoSCoW and RICE for MVP Planning

**Scenario:**

A pre-launch B2B SaaS startup has 47 feature ideas from customer discovery interviews. The founding team (CEO, CTO, Head of Design) needs to define their MVP scope in a single afternoon. They have no usage data, no revenue metrics, and limited engineering capacity (3 developers for 8 weeks).

**Walkthrough:**

The team starts by attempting RICE scoring but immediately stalls on Reach estimates—they have no users yet, so every Reach number is speculative. After 30 minutes of debate over whether Feature A reaches 500 or 5,000 users, they abandon RICE.

They switch to a MoSCoW workshop. In 90 minutes, they categorize all 47 features: 11 Must-haves (core workflow that solves the primary pain point), 14 Should-haves (features that make the product competitive), 15 Could-haves (nice-to-have enhancements), and 7 Won't-haves (out of scope for V1). The Must-have list fits within their 8-week capacity.

For the Should-have bucket, they apply a simple ICE score (1-10 for each dimension) to sequence the features for a fast-follow release. This takes 30 additional minutes. The result: a clear MVP scope from MoSCoW, plus a ranked post-MVP roadmap from ICE.

Six months post-launch, with real usage data, they transition to RICE scoring for ongoing backlog prioritization—now the Reach and Impact estimates are grounded in actual metrics.

## Example: Enterprise Product Team Layering MoSCoW with WSJF in SAFe PI Planning

**Scenario:**

A 40-person product organization running SAFe needs to plan their next Program Increment (10 weeks, 4 teams). They have 83 features and enablers across 6 stakeholder groups, plus compliance requirements from legal and security teams.

**Walkthrough:**

During pre-PI planning, the product management team runs a MoSCoW session with all stakeholder groups. The categorical approach works well because it forces the compliance team to explicitly label regulatory requirements as Must-haves (non-negotiable) without needing to argue about WSJF scores against revenue-generating features.

The session produces: 18 Must-haves (including 7 compliance items), 29 Should-haves, 24 Could-haves, and 12 Won't-haves. Must-haves consume roughly 55% of available capacity across the 4 teams.

For the remaining 45% capacity, product managers apply WSJF to the Should-have and Could-have items. They estimate Cost of Delay using three components (user-business value, time criticality, risk reduction) and divide by job size. The WSJF scores sequence the remaining features to maximize economic value flow.

The layered approach resolves a common PI planning conflict: compliance and infrastructure teams feel heard through MoSCoW's Must-have designation, while business stakeholders see their features ranked by economic impact through WSJF. Both prioritization technique outputs feed into the PI objectives.

## Example: Discovering Framework Divergence Reveals Hidden Strategic Assumptions

**Scenario:**

A consumer mobile app product manager notices that her MoSCoW outputs and RICE rankings consistently disagree. She runs a side-by-side comparison on 20 backlog items to understand why.

**Walkthrough:**

After scoring all 20 items with both methods, she finds three categories of divergence:

1. **High RICE, low MoSCoW (Could-have):** A push notification optimization scored high on RICE (high Reach, low Effort) but was categorized as Could-have in MoSCoW. Investigation revealed that stakeholders undervalued incremental improvements because they were focused on new capabilities.

2. **Low RICE, high MoSCoW (Must-have):** A data migration tool scored low on RICE (small Reach—only affects power users) but was a MoSCoW Must-have because losing those power users would destroy the product's reputation in its niche.

3. **Agreement zone:** 12 of 20 items ranked similarly across both frameworks, confirming that the frameworks agree on the majority of decisions.

The PM used the divergence analysis to adjust her process: she now runs MoSCoW first to protect strategically important but low-Reach items, then uses RICE to sequence within the Should-have bucket. She also adjusted her RICE Impact scores to weight power-user segments more heavily, reducing future divergence. The comparison exercise took 2 hours but fundamentally improved her team's prioritization accuracy.
