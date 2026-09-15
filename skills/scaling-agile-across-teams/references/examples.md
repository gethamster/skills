# Examples: Scaling Agile Across Multiple Teams and Departments

## Example: SaaS Startup Scaling from 3 to 7 Engineering Teams

**Scenario:**

A B2B SaaS company with a single product has grown from 3 to 7 engineering teams over 12 months. Teams run 2-week sprints with Scrum, and each team owns a microservice or feature area. Integration issues have increased, with 2-3 cross-team blockers per sprint. No scaling framework is currently in place. The CTO wants coordination without heavy process overhead.

**Walkthrough:**

The engineering lead maps all 7 teams and their service ownership, producing a dependency matrix that reveals 11 active cross-team dependencies, with 6 of them concentrated between 4 teams sharing a data platform. Given the moderate team count, single product, and desire for minimal overhead, they select Nexus as their framework. They form a Nexus Integration Team of 3 people: a senior Scrum Master, a platform architect, and a rotating team member. All 7 teams align to the same 2-week sprint cadence starting on Mondays.

They create a three-level backlog hierarchy: quarterly objectives (owned by VP Product), features (owned by 2 product managers), and stories (owned by team POs). They introduce a Nexus Daily Scrum on Tuesdays and Thursdays, 15 minutes with one rep per team, focused only on cross-team integration issues. They pilot with the 4 most-coupled teams for 3 sprints. After the pilot, cross-team blockers drop from 2-3 per sprint to under 1.

They expand to all 7 teams and add a joint sprint review where all teams demo integrated functionality to stakeholders. Total coordination overhead settles at about 8% of team capacity.

## Example: Enterprise Financial Services Firm Implementing SAFe Agile

**Scenario:**

A large bank is moving its consumer digital products division (12 teams, roughly 120 people across 3 countries) from waterfall to agile. Teams have been running Scrum for 6 months with mixed results. The division needs to coordinate quarterly regulatory releases, integrate with legacy mainframe systems, and align with corporate IT governance. The CPO has executive sponsorship for SAFe agile adoption.

**Walkthrough:**

The transformation lead conducts a readiness assessment, scoring team maturity at 3/5, architecture at 2/5 (heavy mainframe coupling), management support at 4/5, and geographic distribution at 2/5 (teams in New York, London, and Bangalore). Given the team count, regulatory complexity, and multi-geography constraints, they adopt SAFe at the Essential level (not Full or Portfolio). They form one Agile Release Train grouping all 12 teams, with a 10-week PI cadence aligned to quarterly regulatory milestones. They hire an experienced Release Train Engineer and appoint a System Architect who owns integration standards.

The first PI Planning event is a 2-day virtual session using video conferencing and a digital collaboration board. Each team identifies their PI objectives and maps dependencies on a shared program board. The first PI reveals that 40% of dependencies trace back to a single mainframe integration team, confirming the architecture readiness gap. The second PI includes a dedicated infrastructure team tasked with building API abstractions over mainframe services.

By the fourth PI (10 months in), mainframe dependencies are handled through APIs, cross-team blockers drop by 60%, and the division delivers its first on-time regulatory release in 2 years.

## Example: Product Agency Coordinating 4 Client-Facing Teams

**Scenario:**

A digital product agency has 4 cross-functional teams, each typically working on its own client project. The agency wins a large engagement requiring all 4 teams to collaborate on a single platform build for 6 months. Teams are co-located, highly skilled at Scrum, and accustomed to full autonomy. The engagement lead needs coordination without stifling the team culture.

**Walkthrough:**

Given the high team maturity, single product, co-location, and team count of 4, the engagement lead selects LeSS as the framework. They appoint one product owner for the entire engagement who manages a single prioritized product backlog. Each team pulls from the same backlog during a joint Sprint Planning 1 session where the PO presents the highest-priority items and teams self-organize into who takes what. Teams coordinate informally throughout the sprint, aided by co-location and a shared Slack channel dedicated to integration questions.

They implement a shared continuous integration pipeline from day one, with a rule that all teams push to the shared environment at least twice per sprint. The system definition of done includes end-to-end tests passing across all components. A single joint sprint review replaces separate team reviews, with the client attending to see integrated functionality. After 3 sprints, the PO finds that self-selection occasionally leaves lower-priority but critical infrastructure work unclaimed.

They address this by flagging infrastructure stories in planning and asking teams to volunteer explicitly. By sprint 6, the 4 teams are delivering integrated features every 2 weeks with a coordination overhead of only 5% of capacity, preserving the autonomy-driven culture the agency values.

## Example: E-Commerce Company Scaling with a Platform Team Model

**Scenario:**

A mid-size e-commerce company has 6 product teams and 2 platform teams (infrastructure and data). Product teams each own a customer-facing feature area (checkout, search, catalog, recommendations, accounts, promotions). Platform teams provide shared services. Every product team depends on at least one platform team, creating a persistent bottleneck. Sprint cadence is 2 weeks.

**Walkthrough:**

The VP of Engineering maps dependencies and finds that 80% of platform requests are routine (provision a new environment, add a Kafka topic, update a data pipeline) and only 20% involve genuine collaboration. They split the problem into two strategies. For routine requests, they invest in self-service tooling so product teams can provision infrastructure and data pipelines without platform team involvement, reducing 80% of the dependency volume. For the remaining 20% of collaborative work, they adopt a lightweight Nexus-inspired coordination structure.

Each platform team sends a liaison to a weekly cross-team sync with product teams that have active collaborative dependencies. They implement a shared integration cadence where all teams demo against a unified staging environment every Friday. Platform teams shift from a ticket-based request model to embedding a platform engineer in product teams for the duration of major collaborative features. After one quarter, cross-team blockers related to platform services drop from 5 per sprint to 1 per sprint.

' The key insight is that the right answer was not a comprehensive scaling framework but a targeted investment in self-service tooling combined with minimal coordination for genuine collaboration.
