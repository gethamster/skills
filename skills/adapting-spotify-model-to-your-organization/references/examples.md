# Examples: Adapting the Spotify Model to Your Organization

## Example: 120-Person B2B SaaS Company with a Monolithic Codebase

**Scenario:**

A B2B SaaS company with 120 engineers organized into frontend, backend, and QA departments. They ship a monolithic application where most features touch shared database schemas and a central API layer. Cycle time from idea to production averages 6 weeks. Cross-department handoffs are the primary bottleneck. Leadership wants to move to squads but worries about the monolith.

**Walkthrough:**

The team audits their topology and discovers that 70% of delivery delays are caused by backend API changes that require coordination between the frontend and backend departments. They identify 8 product areas with relatively distinct user workflows (onboarding, billing, reporting, workspace management, integrations, admin panel, notifications, and search). They form 8 squads, each owning one product area with 2-3 backend engineers, 2 frontend engineers, 1 QA engineer, and a shared product manager across pairs of squads. They group these into 2 tribes: a "Core Product" tribe (onboarding, workspace, admin, search) and a "Growth and Revenue" tribe (billing, reporting, integrations, notifications).

Because the monolith prevents true deployment independence, they create a parallel technical initiative: a "Strangler Fig" plan where each squad carves out their domain into a deployable service over 6 months. They establish backend and frontend chapters within each tribe, with chapter leads responsible for code review standards and shared library maintenance. They skip guilds entirely in the first iteration because there is no immediate cross-tribe knowledge-sharing pain. The 90-day pilot runs on the Core Product tribe.

5 weeks for features within a single squad's domain. Cross-squad features still take 5 weeks. They adjust by creating a lightweight cross-squad planning sync every two weeks and expanding the pilot to the second tribe.

## Example: 40-Person Startup Transitioning from Functional Teams

**Scenario:**

A 40-person startup with 18 engineers, 4 designers, 3 product managers, and 15 in other functions. Engineering is organized by function (mobile, web, backend). The company has 3 main product lines: a consumer app, a merchant dashboard, and an internal operations tool. Growth is rapid, and the CEO worries about coordination as they plan to double the team in 12 months.

**Walkthrough:**

Given the small size, the entire engineering group forms a single tribe of about 25 people (engineers, designers, PMs). They create 3 squads, one per product line: Consumer (5 engineers, 1 designer, 1 PM), Merchant (5 engineers, 2 designers, 1 PM), and Ops Tool (4 engineers, 1 designer, shared PM with Consumer). Each squad is cross-functional with mobile, web, and backend engineers on the same team. They establish two chapters: Engineering (covering all disciplines, led by the VP of Engineering) and Design (led by the Head of Design).

Given there is only one tribe, there is no need for guilds or multi-tribe coordination. They keep their existing sprint cadence but add a weekly tribe sync where squad leads share priorities and flag dependencies. The decision-rights matrix is simple: PMs decide what, squads decide how, the CEO resolves inter-squad priority conflicts. They skip the formal pilot because the entire organization fits in one tribe, but they set a 60-day retrospective to evaluate whether the squad boundaries are right.

After 60 days, they discover that the Ops Tool squad frequently needs backend changes that affect the Consumer squad's API. They resolve this by moving one backend engineer to a shared "platform" role that both squads can access, creating a lightweight internal contract for API changes. They document this as a known deviation from pure squad autonomy, acknowledging the tradeoff rather than forcing a structure that does not fit.

## Example: 500-Person Enterprise Migrating from SAFe

**Scenario:**

A 500-person enterprise technology division currently using SAFe (Scaled Agile Framework) with Agile Release Trains (ARTs), PI Planning, and a centralized architecture review board. Teams are frustrated with heavy ceremony and long planning cycles. The CTO wants to shift to a lighter-weight model that preserves alignment but increases team autonomy. The division spans 4 product lines across 3 geographies.

**Walkthrough:**

The transformation team conducts a 3-week topology audit across all 4 product lines, interviewing 40 team leads and reviewing the past year of PI Planning artifacts. They discover that 60% of the cross-ART dependencies identified in PI Planning are never actually realized because priorities shift mid-quarter, meaning the heavy coordination overhead is addressing phantom dependencies. They design the migration in three phases. Phase 1 (months 1-3): Convert one ART of 80 people into a tribe of 10 squads, dissolving the ART-level ceremonies and replacing them with a bi-weekly tribe sync and monthly strategic review.

They preserve the architecture review board as a guild-like "Architecture Council" that meets monthly to set guardrails but no longer reviews individual team decisions. They establish engineering, QA, and product design chapters within the pilot tribe. Phase 2 (months 4-6): Based on Phase 1 results, convert a second ART. They adjust the tribe size downward to 60 people (8 squads) because the Phase 1 tribe found that 10 squads created too many coordination touchpoints for one Tribe Lead.

Phase 3 (months 7-12): Convert remaining ARTs, creating a total of 6 tribes. They establish cross-tribe guilds for security, accessibility, and API design because these concerns now span multiple tribes. The Architecture Council evolves into the API Design guild. Key customization: they keep a quarterly strategic alignment event (adapted from PI Planning but reduced from 2 days to 4 hours) where tribe leads present priorities and identify genuine cross-tribe dependencies.

After 12 months, average cycle time drops 40%, and the quarterly alignment event identifies 75% fewer dependencies than the old PI Planning, validating that lighter-weight coordination is sufficient.

## Example: 200-Person Agency Adapting Squads for Client Work

**Scenario:**

A 200-person digital agency with 120 delivery staff (developers, designers, strategists) serving 15-20 concurrent client accounts. Teams are currently organized per-client, which creates knowledge silos and inconsistent quality. Senior developers are spread thin across too many accounts. The agency wants to improve craft quality and reduce key-person dependencies.

**Walkthrough:**

The agency adapts the model to its project-based reality. They cannot create permanent product squads because client engagements start and end. Instead, they create "capability squads" organized around service offerings: Frontend Development, Backend and Infrastructure, UX and Design, and Strategy. Each capability squad has 8-12 members who are the permanent home base for that discipline.

Client projects are staffed by assembling cross-functional project teams drawn from the capability squads, similar to how guilds create temporary working groups. Capability squad leads function as chapter leads, responsible for craft standards, code reviews, career development, and knowledge sharing within the discipline. They meet bi-weekly for capability squad syncs focused on technique sharing, tooling decisions, and retrospectives on completed client projects. The agency creates two "tribes" by client segment: Enterprise Accounts (larger, longer engagements) and Growth Accounts (smaller, faster engagements).

Tribe leads coordinate staffing and ensure client-facing project teams have the right mix of skills. They establish two guilds: an Accessibility guild and a Performance Optimization guild, both voluntary and meeting monthly to share techniques across capability squads. The 90-day pilot runs on the Enterprise tribe only. After 90 days, code quality metrics improve (defect escape rate drops 30%) and senior developers report feeling less isolated because they have a consistent peer group in their capability squad.

The main adjustment needed is a more structured handoff process when individuals move between client projects, which they solve with a lightweight project onboarding checklist maintained by each capability squad.
