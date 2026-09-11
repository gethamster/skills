# Examples: Evaluating Spotify Model Tradeoffs and Common Pitfalls

## Example: 40-person startup evaluating a full adoption

**Scenario:**

A Series B startup with 40 engineers, 6 product managers, and a monolithic Rails application. The CTO read the Spotify whitepaper and proposed adopting the model to support growth from 40 to 120 engineers over the next 18 months. The current structure is five feature teams with shared backend engineers.

**Walkthrough:**

The team listed five elements: squads, tribes, chapters, guilds, and the PO/Chapter Lead role structure. The current-state map revealed a monolithic deployment pipeline where all five teams deploy through a single CI/CD process, with shared database schemas coupling most features. Squads scored 2 on feasibility (monolith coupling prevents independent deployment), 4 on benefit (teams are blocked by cross-team dependencies weekly), and 4 on risk (without architectural decoupling, squads would be cosmetic). Net score: 2.

Tribes scored 1 on feasibility (40 engineers is one tribe at most), 1 on benefit (no multi-tribe coordination problem exists yet), and 2 on risk (low because there is nothing to get wrong). Net score: 0. Chapters scored 3 on feasibility (enough backend and frontend engineers to form chapters), 3 on benefit (some inconsistency in code quality across teams), and 3 on risk (dual reporting is confusing at this size). Net score: 3.

Guilds scored 4 on feasibility (small enough that voluntary cross-team collaboration is easy), 3 on benefit (knowledge sharing is decent but could improve), and 1 on risk (low downside to trying). Net score: 6. The final recommendation was: start a service decomposition initiative as the prerequisite for squads, launch two guilds immediately (testing practices and frontend architecture), defer tribes entirely, and revisit chapters and squads after the first three services are extracted from the monolith. The CTO adjusted the 18-month roadmap to include architectural work before organizational restructuring.

## Example: 300-person enterprise division assessing a partial adoption

**Scenario:**

A financial services company with a 300-person technology division organized into 25 teams across three departments. Teams are discipline-specific (separate backend, frontend, QA, and ops teams). Leadership wants to adopt squads and tribes to improve delivery speed, but regulatory compliance requires formal approval chains for production deployments.

**Walkthrough:**

The evaluation team scored squads at 3 on feasibility (cross-functional teams are achievable but require significant reorganization of discipline-based teams), 5 on benefit (handoffs between discipline teams are the single biggest source of delay), and 4 on risk (the regulatory approval chain means squads cannot deploy independently without a compliance automation layer). Net score: 4. Tribes scored 4 on feasibility (natural product-area groupings exist), 4 on benefit (the three departments create silos that would benefit from tribe-level coordination), and 3 on risk (tribe leads may conflict with existing department heads). Net score: 5.

Chapters scored 5 on feasibility (plenty of specialists in each discipline), 4 on benefit (discipline quality is inconsistent across teams), and 2 on risk (chapter lead role maps well to existing tech lead positions). Net score: 7. Guilds scored 4 on feasibility, 2 on benefit (existing communities of practice already serve this function), and 1 on risk. Net score: 5.

The recommendation was to adopt chapters first, since they scored highest and required the least disruption. Squads would follow after a compliance automation workstream made independent deployment possible within regulatory constraints. Tribes would come third, with tribe leads positioned as product-area directors to avoid conflicting with existing department structure. Guilds were skipped because existing communities of practice already filled the need.

## Example: B2C product team recovering from a failed Spotify adoption

**Scenario:**

A consumer mobile app company with 80 engineers had adopted the full Spotify Model 12 months ago. Squads were formed, tribes were declared, chapters were created, and guilds were launched. After a year, delivery speed had not improved, chapter meetings were poorly attended, two of three guilds were inactive, and engineers reported confusion about whether they reported to their squad lead or chapter lead.

**Walkthrough:**

The team used the tradeoff scorecard retroactively to diagnose what went wrong. Squads scored 4 on original feasibility (the app had a microservices architecture), but the risk score was recalculated at 5 because squad autonomy was undermined by a centralized architecture review board that approved all technical decisions, a failure mode the original evaluation missed. Chapters scored 2 on feasibility in retrospect because the company only had 15 frontend engineers across 8 squads, making chapter meetings too small and too frequent to be useful. The chapter lead role created confusion because it was layered on top of existing engineering manager roles without clarifying which role owned performance reviews and career development.

Guilds scored 1 on benefit because the company had never had a knowledge-sharing problem, so guilds solved nothing. The retrospective scorecard showed that only squads and tribes had net scores above 4, and even squads required a prerequisite (dissolving the architecture review board in favor of squad-level architectural guidelines). The recovery recommendation was: keep the squad structure but give squads real deployment authority by replacing the review board with published architecture principles, dissolve chapters and return discipline management to engineering managers, dissolve guilds, and keep tribes as a lightweight coordination layer. Within three months of simplifying, the team reported a measurable improvement in deployment frequency.

## Example: Distributed remote company evaluating guilds and chapters only

**Scenario:**

A fully remote company with 60 engineers across four time zones. Teams are already cross-functional and autonomous, operating with a team-topologies approach. The VP of Engineering is not interested in squads or tribes but wants to improve cross-team knowledge sharing and discipline consistency by adopting guilds and chapters from the Spotify Model.

**Walkthrough:**

Because the scope was narrow, the evaluation focused only on guilds and chapters. Guilds scored 4 on feasibility (the company already used Slack channels for cross-team topics, providing a cultural foundation), 4 on benefit (engineers in exit interviews cited professional isolation as a concern), and 3 on risk (time zone spread makes synchronous guild meetings difficult, and asynchronous guilds historically decay faster). Net score: 5. Chapters scored 3 on feasibility (enough engineers in key disciplines, but the four-timezone spread means chapter leads would need to run meetings at inconvenient times for someone), 3 on benefit (some inconsistency in code review standards and testing practices), and 4 on risk (chapter lead as people manager is impractical when direct reports are in four time zones, and the dual-reporting confusion risk is high).

Net score: 2. The recommendation was to adopt guilds with a specific adaptation: each guild designates an async-first communication format using written RFCs and recorded demos instead of live meetings, with one optional synchronous session per month rotated across time zones. Chapters were replaced by a lighter-weight alternative: discipline-specific style guides and review checklists maintained by a rotating 'craft steward' role, without the formal chapter lead management structure. This gave the company the knowledge-sharing benefit without the management overhead that would have been dysfunctional in a remote-first context.
