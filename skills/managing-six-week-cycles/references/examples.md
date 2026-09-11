# Examples: Managing Six-Week Build Cycles

## Example: B2B SaaS team shipping a reporting dashboard

**Scenario:**

A 12-person product team at a B2B SaaS company has shaped a pitch for a new reporting dashboard. The appetite is six weeks. The team consists of one designer and two programmers. The company has never used Shape Up before and is transitioning from two-week sprints.

**Walkthrough:**

The team runs its first betting table with three shaped pitches. They select the reporting dashboard and one smaller project (a two-week small batch for improving CSV exports). The dashboard team kicks off by reading the pitch, which describes the problem (customers cannot see usage trends without exporting to Excel), the rough solution (an in-app dashboard with three chart types), and the no-gos (no custom report builder, no PDF export). For the first three days, the team explores the data model and sketches layout options.

By day four, they identify three scopes: data aggregation pipeline, chart rendering, and dashboard layout. They place all three on the uphill side of the hill chart. By week two, the data aggregation scope moves over the hill. By week three, chart rendering is midway up the hill, and dashboard layout is descending.

In week four, the team realizes that one chart type (a stacked area chart) requires a library they have not used before. They cut it and replace it with a simpler line chart, documenting the cut as a future pitch. The project ships on day five of week six, with two chart types instead of three. Customers get the core value, and the stacked area chart becomes a small batch pitch for a future cycle.

## Example: Small startup running its first three cycles

**Scenario:**

A five-person startup (two programmers, one designer, one founder/PM, one marketer) is adopting Shape Up. They can only staff one cycle project at a time. The founder is also the shaper and the person running the betting table.

**Walkthrough:**

Cycle one: the founder shapes a pitch for onboarding flow improvements (six-week appetite). The betting table is a 30-minute conversation between the founder and the CTO. They bet on it. The team (one designer, one programmer) kicks off and discovers during orientation that the existing codebase makes certain flow changes harder than expected.

They identify two scopes: a simplified signup form and a guided first-run experience. By week three, the signup form is over the hill but the guided experience is stuck. In week four, the team simplifies the guided experience to three tooltip-based prompts instead of a full interactive walkthrough. They ship in week five.

Cycle two: the founder shapes two small batch pitches (two-week appetite each). Both ship. The third small batch from that cycle gets circuit-broken because the programmer discovered a data migration issue that made the work larger than anticipated. Cycle three: the failed project from cycle two gets reshaped with the data migration called out as a rabbit hole and a reduced scope.

It ships in four weeks. By cycle three, the team has internalized the rhythm and scope-cutting feels natural rather than like a failure.

## Example: Large product org running parallel cycles across squads

**Scenario:**

A 40-person product organization with four squads is running Shape Up. Each squad runs its own cycle projects, but cycles are synchronized so the entire organization starts and ends together. The betting table includes the VP of Product, the CTO, and the four squad leads.

**Walkthrough:**

The betting table reviews eight shaped pitches and selects five: three big batch (six-week) projects and two sets of small batch work. Two squads each get one big batch project. The third squad gets the third big batch project plus handles the small batch set alongside it with a separate sub-team. The fourth squad is assigned entirely to a platform migration that was shaped as a special six-week project.

During the cycle, the VP of Product checks hill charts every Tuesday and Thursday. In week three, she notices that Squad B's project has two scopes stuck uphill. She has a conversation with the squad lead, who explains that an API dependency is unclear. They decide to cut the scope that depends on the external API and build a simpler version using cached data.

Squad D's platform migration hits a wall in week five when a third-party service changes its authentication flow. The team cannot ship the migration safely, so the circuit breaker is invoked. The project goes back to shaping, where the authentication issue is documented as a solved rabbit hole, and the project is re-bet in the next cycle with a four-week appetite because most of the foundational work is already done. Cool-down runs for one week, during which teams fix 23 bugs, one programmer builds a prototype for a pitch idea, and the betting table for the next cycle is held on cool-down day four.

## Example: Agency adapting six-week cycles for client work

**Scenario:**

A digital product agency with eight developers and three designers uses Shape Up internally. They take on client projects with fixed budgets and need to fit client work into their cycle cadence. A new client wants a mobile app MVP built.

**Walkthrough:**

" The first cycle covers core functionality: user authentication, the main feed, and basic content creation. The second cycle covers social features and notifications. At the betting table, the agency assigns one designer and two programmers to the client project for cycle one. The client receives the shaped pitch and agrees to the no-gos (no custom themes in cycle one, no offline mode).

During the cycle, the team discovers that the client's preferred authentication provider has a complex SDK. Rather than spending two weeks on it, they cut to email/password only for cycle one and document the preferred provider as a scope for cycle two. The MVP core ships at the end of cycle one. The client sees working software after six weeks, which builds trust.

Cycle two begins after a one-week cool-down. The team bets on social features plus the authentication provider integration, cutting push notifications to a potential cycle three. The app launches after two cycles with a clear backlog of shaped future work rather than an ambiguous list of unfinished features.
