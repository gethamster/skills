# Examples: Implementing Frequent Delivery Cycles in Crystal Projects

## Setting a cadence for an internal operations tool

**Scenario:**

Illustrative scenario: a five-person team is replacing a spreadsheet workflow used by a twelve-person operations group. The team lead is tempted to adopt two-week sprints because a sister team uses them.

**Walkthrough:**

The lead first writes a context note: small team, moderate criticality, users in the same building, and deployment the team controls. Instead of copying the sister team, she asks how long operations can work with a wrong assumption before it becomes costly, and the answer is about a month. She sets a three-week cadence and publishes delivery dates to the operations group. The first slice is narrow: users can log one type of request end to end in the new tool while everything else stays in the spreadsheet.

After delivery, two users try it for real work and report that a required field blocks urgent requests. The team makes that field optional in the next slice and records the change in the plan.

## Delivering to a client that will not accept updates

**Scenario:**

Illustrative scenario: a team is building scheduling software for a hospital client whose IT policy forbids installing anything before final acceptance. The contract runs nine months, and the team fears it will get no user feedback until the end.

**Walkthrough:**

The team does not treat the policy as a reason to skip users. It sets up a test workstation in a meeting room at the client site and asks a ward coordinator who has volunteered to use it for an hour after each four-week cycle. The coordinator books real shifts from last month's data and narrates what confuses her. When a later cycle's increment depends on data the workstation cannot hold, the team drops one rung and runs a user viewing, walking three coordinators through the feature and taking questions.

The team records which rung each cycle used. By the time final acceptance arrives, the coordinators have already rejected two designs that would otherwise have shipped.

## Recovering from demo-only cycles

**Scenario:**

Illustrative scenario: a team has run six cycles, each ending in a polished demo to stakeholders, but no user has operated the software. The product manager suspects the cycles are not really deliveries.

**Walkthrough:**

She checks the last six cycles against the definition of running, tested, usable software in users' hands and finds none qualify. The root causes are slices built as architecture layers and integration saved for the final days. For the next cycle the team selects one user task end to end, integrates daily and holds a mid-cycle check on whether the slice passes tests. The slice is smaller than any demo so far, and it reaches two real users on schedule.

Their first session surfaces a navigation problem the demos never revealed because presenters always knew where to click. The team adopts the end-to-end slice rule as a working agreement in its next reflection workshop.
