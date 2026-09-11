# Examples: Choosing Between Scrum, Kanban, and Hybrid Approaches

## Example: SaaS Product Team With a Quarterly Roadmap

**Scenario:**

A 6-person product team at a B2B SaaS company builds features from a quarterly roadmap. Work is planned 4-6 weeks ahead. Items are mostly medium-sized (3-8 story points). Scope changes happen about once per sprint. Stakeholders expect biweekly demos. The team depends on a platform team for API changes roughly 30% of the time.

**Walkthrough:**

The team scores: work predictability 4 (85% planned items), batch size consistency 4 (most items 3-8 points), scope stability 3 (one change per sprint on average), cadence need 5 (biweekly demos required), organizational coupling 4 (platform dependencies frequent). Total: 20, which falls in the Scrum zone. They set up 2-week sprints with standard Scrum ceremonies. During the trial, they hit their sprint goal in week 1 but missed it in week 2 due to a platform team blocker.

The retrospective surfaced that platform dependencies needed explicit handling. They adjusted by adding a "blocked by external" column and a pre-sprint dependency check. After the adjustment, the next 2-week cycle hit all success criteria. They committed to Scrum with the dependency check as a permanent addition.

## Example: Customer Support Engineering Team

**Scenario:**

A 4-person support engineering team at a mid-stage startup handles escalated customer bugs, infrastructure alerts, and small feature requests from the support team. Work arrives daily with no predictable pattern. Items range from 15-minute configuration fixes to 3-day investigation projects. The team has no regular stakeholder demo, they just close tickets and notify the support team.

**Walkthrough:**

The team scores: work predictability 1 (fewer than 20% of items are planned even one day ahead), batch size consistency 1 (items range from minutes to days), scope stability 1 (priorities change multiple times daily), cadence need 2 (no regular delivery checkpoint needed, though a weekly update would help), organizational coupling 2 (few external dependencies, mostly self-contained). Total: 7, firmly in the Kanban zone. They set up a board with columns: Triage, In Progress, Review, Done. WIP limit of 3 on In Progress (4 people, minus one).

They add a weekly 15-minute metrics review instead of sprint planning. 8 days. 6. They committed to Kanban and added a policy: any item in Triage for more than 2 days gets escalated to the product manager for reprioritization.

## Example: Growth Team at an E-Commerce Company

**Scenario:**

A 5-person growth team runs experiments across marketing, product, and data. They plan experiments in 2-week batches but frequently get pulled into urgent requests from the CMO. Experiment sizes vary from a half-day copy test to a 2-week checkout flow redesign. They present results to leadership monthly. They depend on the data engineering team for tracking implementation about 40% of the time.

**Walkthrough:**

The team scores: work predictability 3 (they plan experiments but interrupts are frequent), batch size consistency 2 (high variance in experiment size), scope stability 2 (CMO requests disrupt roughly half of their planned batches), cadence need 4 (monthly leadership presentation requires deliverable results), organizational coupling 4 (data engineering is a frequent blocker). Total: 15, squarely in hybrid territory. The breakdown shows cadence and coupling pull toward Scrum, while batch size and scope stability pull toward Kanban. They design a Scrumban trial: 2-week sprints with planning and retrospective, but no sprint scope freeze.

Instead, they use a WIP limit of 4 on In Progress and a policy that allows new urgent items to enter if the requester identifies which existing item to deprioritize. They add a pre-sprint dependency check with the data engineering team. After the trial, throughput stayed flat but unplanned work disruption dropped from 50% to 25% because the deprioritization policy made the cost of interrupts visible. The team committed to the hybrid with minor tweaks.

## Example: Small Agency Team Serving Multiple Clients

**Scenario:**

A 3-person design agency team juggles 4-6 active client projects simultaneously. Each client has different timelines and expectations. Work items range from logo revisions (1 hour) to full website redesigns (3 weeks). Client feedback arrives unpredictably. There are no external engineering dependencies since the team handles everything end-to-end.

**Walkthrough:**

The team scores: work predictability 2 (client feedback timing is unpredictable), batch size consistency 1 (massive variance across clients), scope stability 2 (client changes are frequent), cadence need 3 (some clients want weekly check-ins, others are ad hoc), organizational coupling 1 (fully self-contained). Total: 9, in the Kanban zone. They set up a Kanban board with swimlanes per client and a global WIP limit of 5 items across all clients (forcing them to finish work before starting new client requests). They add a Friday 30-minute review to update all clients simultaneously.

During the trial, the per-client swimlanes made it immediately visible when one client was consuming disproportionate capacity. The WIP limit prevented the common failure mode of starting work for every client simultaneously and finishing nothing. Cycle time dropped from 8 days to 5 days average. They committed to Kanban and added a client-level WIP limit of 2 items per client to prevent any single client from dominating the board.
