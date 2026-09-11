# FAQ: Scaling Agile Across Multiple Teams and Departments

## How do I choose between SAFe agile, LeSS, and Nexus for my organization?

The choice depends on three factors: team count, dependency complexity, and organizational maturity. Nexus works well for 3-9 teams building one product with moderate dependencies. LeSS suits a similar team count but assumes high team maturity and willingness to simplify rather than add structure. SAFe agile fits organizations with 50+ people in a value stream, significant business and political dependencies beyond just technical ones, and a need for portfolio-level coordination.

Start with the lightest framework that manages your actual dependencies. If you are unsure, begin with Nexus and add structure only when specific coordination failures demand it.

## How long does it take to implement a scaling framework effectively?

Plan for 4-8 weeks from assessment to pilot launch, then another 2-3 months of iteration before you have a stable scaling configuration. The assessment and framework selection phase takes 1-2 weeks. Designing your backlog hierarchy, cadences, and roles takes another 1-2 weeks. The pilot runs for 2-4 sprints (4-8 weeks at a 2-week cadence).

After the pilot, expect to spend 1-2 full quarters refining before the structure feels natural. Organizations that try to compress this into 2 weeks invariably produce a paper process that teams do not follow.

## Should I scale agile before or after improving individual team maturity?

After. Scaling amplifies whatever state your teams are in. If teams deliver reliably, scaling helps them deliver together. If teams struggle with basic sprint execution, scaling adds process overhead on top of existing dysfunction, making everything worse.

A useful threshold: scale only when at least 80% of your teams complete 80% of their sprint commitments consistently. If you are below that threshold, invest in the [coaching agile team adoption](https://tryhamster.com/skills/coaching-agile-team-adoption) skill first.

## How do I prevent the scaling framework from killing team autonomy?

Three guardrails help. First, keep team-level ceremonies (planning, retros, daily standups) intact and separate from cross-team events. Teams should never feel that their own ceremonies are redundant because decisions are made elsewhere. Second, limit cross-team ceremonies to dependency management only, not work assignment or status reporting.

If the Scrum of Scrums starts feeling like a project status meeting, restructure it around the three dependency questions. Third, measure team autonomy directly by surveying teams quarterly on whether they feel empowered to make decisions. A declining score is a leading indicator that the scaling structure needs pruning.

## Why does my cross-team dependency count keep growing despite better coordination?

A stable or growing dependency count despite improved coordination usually signals an architecture problem, not a process problem. If your product is a tightly coupled monolith where changes ripple across components, no coordination framework will reduce the number of dependencies. The fix is investing in modular architecture: well-defined API contracts between team-owned services, independent deployment capabilities, and decoupled data stores. Process coordination manages dependency pain.

Architectural investment eliminates dependencies at the source. If dependency count is not trending down after two quarters of scaled operation, shift investment toward architecture.

## Can I mix frameworks, using SAFe agile for some teams and LeSS for others?

You can, but it adds complexity. The most common pattern is SAFe at the portfolio or program level for strategic alignment, with teams internally running lighter practices inspired by LeSS or Nexus. The key constraint is cadence alignment: all teams that need to coordinate must share the same sprint cadence and integration checkpoints, regardless of which framework's terminology they use. Avoid mixing frameworks just because different managers prefer different approaches.

The inconsistency creates translation overhead and confusion. If you mix, document explicitly which elements come from which framework and why.

## How do I handle teams that resist joining a scaling framework?

Resistance usually comes from one of two sources. High-performing teams resist because they see the scaling framework as overhead that slows them down, and they are often right that parts of it do not serve them. Address this by involving resistant teams in designing the coordination structure, letting them see the dependency data, and giving them influence over which elements apply to them. Struggling teams resist because they are already overwhelmed and cannot absorb new process.

Address this by stabilizing their team-level agile practices first, then gradually introducing cross-team elements. In both cases, leading with the dependency data ('here are the 6 times another team's work blocked your sprint last quarter') is more persuasive than leading with the framework name.
