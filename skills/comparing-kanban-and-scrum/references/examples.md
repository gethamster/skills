# Examples: Comparing Kanban and Scrum for Your Team

## Example: SaaS Product Team Moving from Ad-Hoc to Structured

**Scenario:**

A 6-person product team at a B2B SaaS startup has been working without a formal method. They ship features when ready, handle bugs as they come, and hold weekly syncs. The CTO wants to introduce a process but the team is divided between Scrum advocates and those who want to keep things flexible. Work history shows 30% unplanned items.

Requirements change on about 25% of items after start. Stakeholders plan 2-3 weeks ahead. The team is fully dedicated. They deploy daily.

The broader company has no strong method culture.

**Walkthrough:**

The team scored: Work Predictability 2 (30% unplanned is moderate), Requirement Stability 2 (25% changes, right in the middle), Planning Cadence 2 (stakeholders plan ahead but not rigidly), Team Structure 3 (fully dedicated), Delivery Frequency 1 (continuous deployment), Culture 2 (no strong organizational norm). Total: 12, squarely in hybrid territory. The team adopted two-week sprints for planning and retrospectives, giving stakeholders the predictable rhythm they wanted. Within sprints, they used a Kanban board with WIP limits of 2 items per engineer in progress, eliminating the context-switching that had been slowing them down.

They tracked both sprint goal completion and cycle time. After 8 weeks, cycle time dropped from 6 days to 4 days, and sprint goals were met 80% of the time. The daily deployment cadence was preserved because sprint goals were not tied to a release train.

## Example: IT Operations Team Handling Tickets and Projects

**Scenario:**

A 4-person IT ops team at a mid-size company handles a mix of infrastructure projects and incoming support tickets. Roughly 60% of their work is unplanned tickets. Project requirements rarely change once started but ticket priorities shift constantly. Stakeholders (other department heads) submit tickets ad hoc and want quick turnaround.

Team members are shared: two are pulled into security reviews monthly. They do not have formal releases. The company runs Scrum across engineering, and leadership asks for sprint reports from all teams.

**Walkthrough:**

Scores: Work Predictability 1 (60% unplanned), Requirement Stability 2 (projects stable, tickets shift), Planning Cadence 1 (stakeholders want continuous queue), Team Structure 1 (shared members), Delivery Frequency 1 (no batch releases), Culture 3 (company expects Scrum reports). Total: 9, strong Kanban lean, but the culture score of 3 creates tension. The team adopted Kanban with a twist: they used a two-week reporting cadence that mirrored the engineering sprints, producing a summary of throughput and cycle time every two weeks in a format leadership could compare alongside sprint reports. Their board had three swim lanes, one for tickets, one for projects, and one for security reviews, each with its own WIP limit.

They set a WIP limit of 3 tickets and 1 project in progress at any time. 8 days because the WIP limit stopped engineers from juggling five tickets at once. Leadership accepted the Kanban reporting format because it delivered the same predictability signal as sprint velocity.

## Example: Large Enterprise Team Migrating from Scrum to Kanban

**Scenario:**

A 12-person platform engineering team at a Fortune 500 company has been running Scrum for two years. " Work history shows 55% of sprint items are unplanned production incidents. The team is dedicated. They deploy via a weekly release train.

The organization has a PMO that tracks all teams via Jira sprint boards.

**Walkthrough:**

Scores: Work Predictability 1 (55% unplanned), Requirement Stability 1 (production incidents change everything), Planning Cadence 2 (stakeholders accept planning but want interrupt flexibility), Team Structure 3 (fully dedicated), Delivery Frequency 2 (weekly release train), Culture 3 (PMO expects sprint data). Total: 12, but the pattern is revealing. Three dimensions scored 1 while two scored 3, indicating a team whose work screams Kanban but whose organization screams Scrum. The team proposed a phased migration: Phase 1 (weeks 1-4), keep two-week sprints but add WIP limits and separate the board into planned work and interrupt lanes, tracking each independently.

Phase 2 (weeks 5-8), replace sprint commitments with flow-based forecasting using cycle time data, while maintaining the two-week review cadence the PMO expected. Phase 3 (weeks 9-12), drop sprint planning in favor of continuous backlog refinement, using throughput data to provide delivery forecasts. They presented the PMO with a mapping document showing how Kanban metrics (throughput, cycle time, CFD) answered the same questions the PMO had been asking via velocity charts. The PMO agreed to the trial.

After 12 weeks, sprint goal failures were no longer a topic because there were no sprint goals to miss. 1 days, giving the PMO more reliable forecasting than erratic velocity had ever provided.

## Example: Agency Creative Team Choosing a Method for Client Work

**Scenario:**

A 5-person design agency team handles 3-4 client projects simultaneously. Each project has defined scope and deadlines, but clients frequently request revisions and new directions mid-project. The team lead wants to introduce structure without adding overhead. Two designers are junior and new to any formal method.

There are no deployments per se, but deliverables go out at project milestones. The agency has no method culture.

**Walkthrough:**

Scores: Work Predictability 2 (projects are planned but client revisions are frequent), Requirement Stability 1 (clients change direction regularly), Planning Cadence 2 (milestone-based, moderately predictable), Team Structure 2 (mostly dedicated but occasionally pulled for pitches), Delivery Frequency 2 (milestone-based delivery), Culture 1 (no organizational method norms). Total: 10, leaning Kanban. The team set up a single Kanban board with swim lanes per client project and a WIP limit of 2 active design tasks per person. They held a 15-minute daily standup (borrowed from Scrum) and a weekly board review where they reprioritized across clients.

No sprint planning was needed because client priorities shifted too frequently for two-week commitments to hold. They tracked cycle time per deliverable type (logo concepts: 2 days, landing page mockups: 4 days) and used these benchmarks to give clients realistic timelines. The junior designers appreciated the visual board because it made the team's capacity tangible. After 6 weeks, the team lead reported that client satisfaction scores improved because delivery estimates, based on actual cycle time data rather than gut feel, were met 90% of the time.
