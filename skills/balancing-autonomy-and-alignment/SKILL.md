---
name: balancing-autonomy-and-alignment
description: "This skill teaches you how to set guardrails, write mission briefs, and use OKRs so squads can move fast on their own while staying strategically coherent with the rest of the organization."
metadata:
  homepage: https://tryhamster.com
  method: spotify-squad-model
---

# Balancing Squad Autonomy with Organizational Alignment in Agile at Spotify

> This skill teaches you how to set guardrails, write mission briefs, and use OKRs so squads can move fast on their own while staying strategically coherent with the rest of the organization.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Advanced |
| Time to Learn | 3-5 hours for initial framework setup, then 1-2 hours per quarter for recalibration |
| Outcome | You produce a living alignment system consisting of mission briefs, OKRs, and technical guardrails that lets every squad make independent decisions without drifting from company strategy. |
| Prerequisites | Understanding of the Spotify Squad Model structure (squads, tribes, chapters, guilds), Familiarity with OKR frameworks and how objectives cascade through an organization, Experience forming or leading at least one autonomous squad, Basic knowledge of system architecture concepts like API boundaries and service ownership |
| Part of | [Spotify Squad Model](../../methods/spotify-squad-model/METHOD.md) |

## Overview

The defining tension in any scaled agile organization is the pull between speed and coherence. Give squads total freedom and you get duplicated work, incompatible systems, and teams optimizing for local wins that hurt the whole company. Lock squads into rigid plans and you lose the responsiveness that made small teams effective in the first place. Balancing squad autonomy with organizational alignment is the skill that resolves this tension, and it is the single hardest thing to get right when practicing agile at Spotify or any model inspired by it.

Inside the [Spotify Squad Model](https://tryhamster.com/methods/spotify-squad-model), alignment is not achieved through top-down command structures or detailed project plans. Instead, it emerges from three interlocking mechanisms: mission briefs that give each squad a clear purpose without dictating tasks, OKRs that express desired outcomes measured quarterly, and technical guardrails that define the boundaries within which squads operate freely. When these three mechanisms work together, squads can ship features, run experiments, and pivot direction without waiting for permission, because the boundaries of acceptable action are already clear.

The concrete artifact you produce is an alignment framework document. This document contains the company mission statement, tribe-level mission briefs, squad-level mission briefs, a set of quarterly OKRs at each level, a catalog of technical guardrails (API contracts, shared infrastructure rules, data governance standards), and a calendar of alignment checkpoints. You also produce a dependency map that shows where squads need to coordinate and where they can move independently. Teams that master this skill report fewer cross-squad escalations, faster time to production, and higher scores on squad health checks, particularly in the "mission clarity" and "easy to release" dimensions.

This skill sits at the center of the Spotify Squad Model because every other structural element depends on it. [Forming autonomous squads](https://tryhamster.com/skills/forming-autonomous-squads) creates the units, [organizing tribes](https://tryhamster.com/skills/organizing-tribes-for-alignment) groups them, and [running chapters](https://tryhamster.com/skills/running-chapters-for-craft-excellence) maintains craft quality. But none of those structures deliver value unless squads are both empowered to act and pointed in the same strategic direction. Without this skill, the model degenerates into either chaos (too much autonomy) or bureaucracy (too much alignment).

## How It Works

The mental model behind this skill is captured in a phrase that Henrik Kniberg, one of the architects of agile at Spotify, popularized: "Be autonomous, but don't sub-optimize." The underlying principle is that alignment and autonomy are not opposites on a slider. They are independent dimensions. You can have high alignment and high autonomy simultaneously, and that is the quadrant you want to occupy. Low alignment plus high autonomy produces every squad running in its own direction. High alignment plus low autonomy produces a traditional command-and-control hierarchy dressed up in squad vocabulary.

The mechanism that makes this work is the separation of the "what" from the "how." Leadership defines the strategic intent: what outcomes matter, what the company needs to be true in six months, where competitive advantage lies. Squads decide the implementation: which features to build, which experiments to run, which technical approaches to use. This separation only works when strategic intent is expressed clearly enough that squads can make daily decisions without checking upward, and broadly enough that squads have genuine room to discover solutions leadership could not have predicted.

OKRs are the primary tool for encoding this separation. A well-written OKR has an objective that describes a qualitative change in the world ("New users find value in their first session") and key results that are measurable and time-bound ("Reduce time-to-first-value from 8 minutes to under 3 minutes by end of Q2"). The objective constrains the direction. The key results make success concrete. Neither tells the squad what to build. When OKRs are poorly written, they collapse into task lists ("Launch onboarding wizard v2"), and the autonomy disappears.

Mission briefs reinforce alignment at a longer time horizon than quarterly OKRs. A squad's mission brief describes the user problem it owns, the business metric it influences, and the boundaries of its domain. A mission brief for a "Search Experience" squad might read: "Make it effortless for users to find the content they need. We own the search index, query processing, and results ranking. We do not own content ingestion or user profile data. Our north star metric is search success rate." This brief changes rarely, perhaps annually. It tells the squad what territory is theirs and what belongs to someone else, which prevents both gaps and overlaps.

Technical guardrails form the third layer. These are not optional guidelines. They are hard constraints on how squads build and ship. Examples include: all services must expose a versioned REST or gRPC API, all data writes go through the shared event bus, every deployment must pass the CI pipeline including integration tests, squads must not take direct database dependencies on another squad's data store. These guardrails exist because autonomy in feature decisions requires coupling discipline in technical decisions. If squad A reads directly from squad B's database, every schema change becomes a cross-squad coordination nightmare. Guardrails prevent this coupling from forming in the first place.

The system works because each layer operates at a different cadence and scope. Mission briefs set direction over months or years. OKRs calibrate focus quarterly. Guardrails remain stable unless the architecture fundamentally changes. Squads operate freely within the space these three layers define. When a new situation arises that the existing alignment system does not address, it surfaces as a tension. Leadership then decides whether to update the mission brief, add a guardrail, or leave the decision to the squad. The framework evolves through these moments of tension, not through periodic redesigns.

## Step-by-Step Guide

### Step 1: Step 1: Articulate the Company Mission and Strategic Priorities

Gather the leadership team and write a single-paragraph company mission that describes the customer problem you exist to solve and the change you want to create in the market. Below that mission, list three to five strategic priorities for the next 12 months. Each priority should be a sentence describing an outcome, not a project name. For example, "Become the default tool for mid-market e-commerce teams" is a strategic priority.

"Build Shopify integration" is a project. The mission and priorities become the top of your alignment cascade. Every tribe mission and squad mission must trace back to at least one strategic priority. If a squad's work does not connect to any priority, you have either a missing priority or a squad that needs a new mission.

> **Pro tip:** Test your strategic priorities by asking each tribe lead to explain in their own words how their tribe contributes. If their answers diverge wildly from what leadership intended, the priorities are too vague. Rewrite them with more concrete language about who the customer is and what success looks like.

### Step 2: Step 2: Write Tribe-Level Mission Briefs

For each tribe, draft a mission brief of three to five sentences. The brief should state the user segment or problem domain the tribe owns, the primary business metric the tribe influences, and what is explicitly outside its scope. Share the draft with tribe leads for feedback and adjust until there is zero ambiguity about domain ownership. Overlap between tribes is the most common source of coordination friction.

If two tribes believe they own the "onboarding experience," you will get conflicting roadmaps. Resolve these overlaps now, during the brief-writing process, by drawing clear lines. A tribe's mission brief should be stable enough that it does not change more than once or twice a year.

> **Pro tip:** Use the "newspaper test": read each tribe brief out loud and ask whether a new hire joining the company would understand what the tribe does and does not own. If the brief requires insider knowledge to parse, it needs rewriting.

### Step 3: Step 3: Cascade to Squad-Level Mission Briefs

Each squad within a tribe writes its own mission brief that zooms in on a specific slice of the tribe's domain. The squad brief names the user problem the squad owns, the slice of the product or system it operates on, its north star metric, and explicit boundaries with neighboring squads. The squad lead drafts the brief with input from the product owner and at least one engineer. The tribe lead reviews all squad briefs together to verify coverage, looking for gaps (parts of the tribe domain no squad owns) and overlaps (parts two squads claim).

Gaps should be assigned. Overlaps should be resolved by splitting responsibility along a clear boundary, often a technical boundary like an API contract or a user journey boundary like pre-purchase vs. post-purchase.

> **Pro tip:** Include a short list of "we do NOT own" items in each squad brief. This negative space is surprisingly powerful for preventing scope creep and reducing ambiguity during planning sessions.

### Step 4: Step 4: Set Quarterly OKRs at Company, Tribe, and Squad Levels

Starting from the company strategic priorities, define two to four company-level OKRs for the quarter. Each objective should be qualitative and inspiring. Each key result should be measurable with a current baseline and a target. Tribe leads then draft tribe OKRs that contribute to at least one company OKR.

Squad product owners draft squad OKRs that contribute to at least one tribe OKR. The cascade should feel logical but not mechanical. A squad OKR does not need to be a direct subset of a tribe OKR. It needs to tell a credible story about how achieving the squad's key results will move the tribe's key results.

Allow one squad OKR per quarter that is purely squad-driven, unconnected to the cascade. This preserves autonomy for locally important improvements like paying down tech debt or improving developer experience.

> **Pro tip:** Cap the total at three objectives and four key results per squad per quarter. More than that dilutes focus and turns OKRs into a task list. If a squad cannot fit their work into three objectives, they are either trying to do too much or their objectives are too narrow.

### Step 5: Step 5: Define Technical Guardrails

Convene the chapter leads (the technical discipline leaders across squads) and the architecture team, if you have one, to define a set of non-negotiable technical guardrails. , event-driven messaging vs. synchronous APIs), data ownership (each data entity has exactly one owning squad, and others access it through defined interfaces), deployment standards (CI/CD pipeline requirements, feature flagging, rollback procedures), and quality gates (test coverage minimums, performance budgets, security scanning). Write each guardrail as a rule with a rationale.

For example: "All inter-squad data access must go through a published API. " Publish guardrails in a shared document and review them every six months.

> **Pro tip:** Do not try to define fifty guardrails on your first pass. Start with ten to fifteen that address your most painful coordination problems today. Add new guardrails only when a real incident or conflict reveals the need. Over-specified guardrails feel like bureaucracy and erode trust in the system.

### Step 6: Step 6: Build a Dependency Map

Ask each squad to list the other squads they depend on to deliver their current quarter's OKRs. For each dependency, note what the dependency is (an API, a shared dataset, a design system component, a deployment pipeline), who owns it, and what the expected timeline for delivery is. Compile these into a visual dependency map, using a simple diagram with squads as nodes and dependencies as directed edges. Identify clusters where multiple squads depend on the same squad or component.

These are your bottlenecks and alignment risks. For each high-risk dependency, agree on a coordination mechanism: a shared Slack channel, a weekly sync, or an explicit SLA from the owning squad. The goal is not to eliminate dependencies but to make them visible and managed.

> **Pro tip:** Update the dependency map at the start of each quarter during OKR planning. Dependencies shift as priorities change, and a stale map gives a false sense of safety.

### Step 7: Step 7: Establish Alignment Checkpoints

Schedule recurring checkpoints at three cadences. Weekly: each squad reviews its own progress toward its key results in its regular standup or retro. Bi-weekly or monthly: tribe leads meet to review cross-squad dependencies, surface blockers, and discuss whether any squad's mission or OKRs need adjustment. Quarterly: the company leadership reviews company OKRs, scores the previous quarter's results, and sets new OKRs.

" If market conditions shift mid-quarter, update OKRs rather than pretending the original plan is still valid. Document decisions from each checkpoint so teams not present can understand what changed and why.

> **Pro tip:** Keep tribe-level checkpoints under 45 minutes. If they routinely run over, you likely have too many squads in the tribe or too many unresolved dependencies. Consider restructuring the tribe or elevating a persistent dependency into a platform squad.

### Step 8: Step 8: Run a Squad Health Check for Alignment Indicators

At least once a quarter, run a health check with each squad using the Spotify health check model or a variant. ). Use a traffic-light system: green means good, yellow means warning, red means action needed. Aggregate results across the tribe to spot systemic issues.

A pattern of yellow or red on "mission clarity" across multiple squads signals that mission briefs or OKRs need revision. A pattern on "ease of release" signals that guardrails or the dependency map need attention.

> **Pro tip:** Separate the health check from the performance review. If squads believe red indicators will lead to punishment, they will report green even when things are broken. Frame the health check as a diagnostic tool for the system, not an evaluation of the squad.

### Step 9: Step 9: Iterate the Alignment Framework Based on Signals

After two or three quarters of operating with your alignment framework, review how well it is working. Look at three signals. First, decision speed: are squads able to make product and technical decisions without escalating to leadership? If escalations are frequent, your mission briefs or guardrails may be too vague.

Second, strategic coherence: when you zoom out and look at what all squads shipped last quarter, does it add up to progress on the company strategic priorities? If squads are shipping good work that does not contribute to strategy, your OKR cascade is broken. Third, squad satisfaction: are health check scores trending up or down on alignment indicators? Adjust the framework based on what you find.

Tighten guardrails where coupling problems recur. Loosen mission briefs where squads feel over-constrained. Add or remove OKR layers based on the size of the organization.

> **Pro tip:** Keep a log of alignment framework changes and the signal that triggered each change. Over time, this log becomes your organizational playbook for calibrating autonomy and alignment in your specific context.

## Best Practices

- Write mission briefs in user-problem language, not in product-feature language. A brief that says "we own the recommendations engine" invites technical scope debates. A brief that says "we help users discover content they did not know they wanted" invites creative solutions. The observable consequence of ignoring this: squads fight over system ownership instead of collaborating on user outcomes.
- Express OKR key results as lagging indicators (user behavior, business metrics) rather than leading indicators (features shipped, story points completed). When key results are output-based, squads game the system by shipping low-impact features to hit targets. When key results are outcome-based, squads are forced to think about whether their work actually matters.
- Limit the number of cross-squad dependencies to two or fewer per squad per quarter. Each dependency is a coordination tax that slows the squad down. If a squad has four or five dependencies, the mission brief or the technical architecture needs restructuring so the squad can operate more independently. Track dependency count as a health metric alongside velocity and cycle time.
- Publish all mission briefs, OKRs, guardrails, and dependency maps in a single, searchable location that every employee can access. Alignment cannot work if the alignment artifacts are scattered across private documents and individual slide decks. Transparency is not a nice-to-have; it is the mechanism by which squads self-coordinate. When a squad can see another squad's mission and OKRs, they can resolve minor boundary questions without scheduling a meeting.
- Require every guardrail to have a written rationale that explains the problem it prevents. Guardrails without rationale feel arbitrary and breed resentment. When engineers understand why a guardrail exists, they respect it and can also identify cases where the guardrail should evolve. Review guardrails every six months and retire any whose rationale no longer applies.
- Run alignment reviews at the tribe level, not only at the squad level. A single squad can be perfectly aligned to its own mission and OKRs while being completely out of sync with sibling squads. Tribe-level reviews catch these gaps by comparing what squads are doing side by side. If tribe-level reviews consistently surface the same friction points, that is a signal to adjust squad boundaries.
- Protect the squad's right to say "no" to requests that fall outside its mission brief, even when those requests come from senior leadership. If a squad cannot refuse out-of-scope work, the mission brief is decoration. When leadership overrides a mission brief, acknowledge it explicitly, update the brief, and communicate the change to the tribe. Silent scope expansion is the most common way alignment frameworks erode.
- Calibrate the tightness of alignment to the maturity of the squad. New squads with unclear missions or inexperienced product owners benefit from more structured OKRs with explicit check-ins. Mature squads with strong track records can operate with broader mission briefs and lighter-touch OKRs. One size does not fit all squads, even within the same tribe.

## Common Mistakes

- **Treating OKRs as a task list by writing key results like "Launch feature X" or "Complete migration to service Y"** — Output-based key results remove the squad's autonomy to choose the best path to an outcome. This happens because teams default to what is easy to measure (did we ship it?) rather than what matters (did it move the metric?). The signal to watch for: if every key result is fully within the squad's control and requires no user behavior to validate, it is probably an output, not an outcome. Rewrite key results to describe a measurable change in user behavior or business performance, then let the squad figure out what to build.
- **Writing mission briefs once and never revisiting them, so they drift out of sync with actual squad work** — This happens because mission briefs feel like a setup exercise, something you do at the beginning and then move on from. Over six to twelve months, squads naturally evolve their scope as they learn more about their domain. If the brief does not evolve too, there is a growing gap between what the brief says and what the squad actually does. The signal: new hires read the mission brief and are confused because the squad's backlog does not match.

Schedule a brief review every six months, tied to the company strategy refresh.
- **Defining too many guardrails upfront, creating a compliance burden that feels like the bureaucracy the model was supposed to eliminate** — Over-specification happens when engineering leadership tries to prevent every possible future problem instead of addressing current ones. Squads spend more time checking compliance than building features, and they start viewing the guardrails as obstacles rather than enabling constraints. The signal: squads begin asking for guardrail exceptions more than once per sprint. Start with the ten guardrails that address your biggest coordination pains.

Add new guardrails only in response to real incidents, and retire guardrails when the underlying problem has been architecturally resolved.
- **Creating alignment at the OKR level while ignoring technical coupling, so squads have clear goals but cannot ship independently** — Strategic alignment without technical decoupling produces squads that know where they want to go but are stuck in a traffic jam. This happens when the alignment effort is led exclusively by product leadership without involving engineering leadership. The signal: squads consistently miss key results not because of effort or direction but because they are waiting for another squad to finish something. Address this by mapping technical dependencies explicitly and investing in platform capabilities (APIs, event buses, shared infrastructure) that let squads deploy independently.
- **Cascading OKRs mechanically so that every squad OKR is a direct subset of a tribe OKR, leaving no room for squad-initiated improvement** — Mechanical cascading turns OKRs into a top-down planning tool and strips squads of the autonomy to address problems they see on the ground, like tech debt, developer experience, or emergent user needs. This happens when leadership interprets alignment as perfect traceability. The signal: squads stop proposing their own objectives and wait for tribe OKRs to be handed down. Allow one squad OKR per quarter that is locally motivated, and evaluate it on the same outcome-based criteria as cascaded OKRs.
- **Measuring alignment by checking whether squads followed the plan, rather than whether outcomes improved** — Plan-adherence measurement is a holdover from waterfall thinking. ", squads are incentivized to stick to the original plan even when new information suggests a better path. The signal: squads resist mid-quarter pivots because changing course makes them look like they failed the original plan. Shift review conversations to outcome progress.

If a squad abandoned its original approach but hit its key results through a better method, that is a success story, not a deviation.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/spotify-squad-model/METHOD.md) — Spotify Squad Model

## Related Skills

- [Organizing Squads into Tribes for Strategic Alignment](../organizing-tribes-for-alignment/SKILL.md)
- [Scaling Agile Practices Using Spotify Structures](../scaling-agile-with-spotify-structures/SKILL.md)
- [Evaluating Spotify Model Tradeoffs and Common Pitfalls](../evaluating-spotify-model-tradeoffs/SKILL.md)
- [Building Guilds for Cross-Tribe Knowledge Sharing](../building-cross-cutting-guilds/SKILL.md)
- [Forming Autonomous Squads with Clear Missions](../forming-autonomous-squads/SKILL.md)
- [Adapting the Spotify Model to Your Organization](../adapting-spotify-model-to-your-organization/SKILL.md)
- [Running Chapters to Build Discipline-Specific Excellence](../running-chapters-for-craft-excellence/SKILL.md)
