# Examples: Comparing Now-Next-Later to Quarterly and Timeline Roadmaps

## Example: Early-stage B2B SaaS startup with 8 engineers

**Scenario:**

A seed-stage SaaS company has a small engineering team, no external partners depending on their release dates, and a product strategy that shifts monthly based on customer discovery interviews. Their CEO currently asks for quarterly roadmaps but rarely references them after the planning meeting. The team spends roughly one full day per quarter re-estimating dates that change within weeks.

**Walkthrough:**

The PM runs the five-dimension assessment. Planning Certainty scores 1 (estimates are routinely off by 2x or more). Stakeholder Expectations scores 2 (the CEO wants visibility into priorities but does not actually coordinate based on dates). Delivery Cadence scores 2 (shipping is irregular, driven by feature completion).

External Dependencies scores 1 (no external teams depend on their schedule). Organizational Culture scores 2 (the CEO evaluates the team on customer outcomes, not date adherence). Total: 8. This falls clearly in the Now-Next-Later range.

The PM maps their existing quarterly roadmap items into Now (3 items actively in development), Next (4 items that completed customer interviews), and Later (6 items from the strategic brainstorm). The CEO is briefed with a focus on the pain point: 'We spend a full day estimating dates that change within three weeks. ' The CEO agrees to a two-week trial. After two weeks, the CEO reports that the Now-Next-Later board is actually more useful because it shows what the team is actually doing rather than what they hoped to do three months ago.

## Example: Mid-size B2C product team with partner integrations

**Scenario:**

A 40-person product and engineering organization ships a consumer mobile app. They have three external integration partners who need API release dates for their own development cycles. The internal team operates in two-week sprints with reasonable estimation accuracy. Leadership reviews roadmap progress monthly against quarterly OKRs.

**Walkthrough:**

The PM scores the assessment. Planning Certainty: 3 (sprint estimates are decent, but quarterly estimates drift). Stakeholder Expectations: 4 (partners contractually need date ranges for API releases). Delivery Cadence: 4 (consistent two-week sprints).

External Dependencies: 4 (three partners with their own development timelines). Organizational Culture: 3 (mixed, outcomes matter but quarterly OKR reviews create date pressure). Total: 18. This falls squarely in the hybrid range.

The PM sets up a Now-Next-Later board as the internal source of truth for planning and prioritization. Translation rules are documented: only Now items and the top two Next items that have completed technical design get date estimates. Date precision is sprint-level for Now items and quarter-level for top Next items. Partners receive a quarterly timeline view derived from the Now-Next-Later board, refreshed biweekly.

The internal team uses the Now-Next-Later view for sprint planning and discovery work. After one quarter, the PM reports that internal reprioritization is faster (no Gantt bar shuffling), while partners still receive the date commitments they need.

## Example: Enterprise platform team in a regulated industry

**Scenario:**

A financial services company has a platform team responsible for compliance-critical infrastructure. Regulatory deadlines are externally imposed and non-negotiable. The team has 60 engineers across multiple squads. Leadership requires date-level commitments for board reporting and regulatory filings.

Estimation accuracy is high because the work is well-understood infrastructure, not greenfield product development.

**Walkthrough:**

The PM scores the assessment. Planning Certainty: 4 (mature team with historical velocity data). Stakeholder Expectations: 5 (board and regulators require specific dates). Delivery Cadence: 4 (monthly release trains).

External Dependencies: 5 (regulatory deadlines, cross-team platform dependencies). Organizational Culture: 5 (date adherence is a compliance requirement, not a preference). Total: 23. This clearly favors a quarterly or timeline roadmap.

The PM recommends staying with the current timeline format but adds one modification: a separate Now-Next-Later view is maintained for the 20% of the team's capacity allocated to non-compliance innovation work. This innovation track uses Now-Next-Later because it operates under different conditions (high uncertainty, no external date dependencies, outcome-focused). The compliance track stays on the timeline because that format matches its environment. The PM documents this split-format decision and the rule that any innovation item that receives a regulatory dependency immediately moves to the timeline format.

## Example: Growth-stage B2B team transitioning away from Gantt charts

**Scenario:**

A 150-person B2B company has used Gantt-chart roadmaps since its early days. As the company grew, the Gantt chart became a source of frustration: updates take half a day, dependencies create cascading date changes, and engineering leadership spends more time defending timeline slips than building product. The VP of Product wants to switch to Now-Next-Later but faces resistance from the sales team, which uses the Gantt chart to make delivery promises to enterprise prospects.

**Walkthrough:**

The PM interviews five stakeholders and identifies two distinct pain points. Engineering and product leaders cite excessive time spent maintaining fictional dates (8 hours per sprint on roadmap updates). The sales team cites the Gantt chart as essential for closing enterprise deals with contractual delivery commitments. Assessment scores: Planning Certainty 2, Stakeholder Expectations 4 (sales needs dates for contracts), Delivery Cadence 3, External Dependencies 3, Organizational Culture 3.

Total: 15. This sits right at the hybrid threshold. The PM proposes a phased transition. Phase 1 (weeks 1 to 4): move internal planning to Now-Next-Later, eliminating the Gantt maintenance burden for engineering.

Phase 2 (weeks 3 to 6): create a simplified quarterly commitment view derived from Now items only, specifically for sales-facing communication. Translation rule: only items that have completed engineering estimation and received VP-level commitment qualify for the sales view. Phase 3 (weeks 5 to 8): retire the Gantt chart entirely. The sales team gets a cleaner, more accurate quarterly view.

Engineering gets a flexible planning tool. The parallel period runs for three weeks before the Gantt is retired. Post-transition, the team reports saving approximately six hours per sprint on roadmap maintenance while sales reports that the simplified quarterly view is actually easier for prospects to understand than the dense Gantt chart was.
