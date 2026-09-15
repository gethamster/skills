# Shape Up: The Product Manager's Guide to Fixed-Time, Variable-Scope Development

> Created by **Basecamp (formerly 37Signals)** — [https://basecamp.com](https://basecamp.com)

## Overview

Shape Up is a product development framework that emerged from nearly two decades of practice at Basecamp (formerly 37Signals). Ryan Singer, Basecamp's Head of Strategy, codified the approach in his 2019 book *Shape Up: Stop Running in Circles and Ship Work that Matters*, published freely online. The framework was born from a specific frustration: traditional project management methods either gave teams too little direction ("build something related to notifications") or too much (a pixel-perfect spec with 47 Jira tickets). Shape Up carves out a middle path. Work gets shaped to the right level of abstraction before anyone writes code, then a small team owns the entire execution without a product manager hovering over daily standups.

The core claim of Shape Up is deceptively simple: fix the time, flex the scope. Most product teams do the opposite. They define exactly what they want built, then ask "how long will this take?" and watch the timeline stretch. Shape Up flips that relationship. A product manager sets an appetite, say six weeks, and the team figures out what version of the solution fits inside that boundary. This forces real tradeoffs upfront instead of letting scope creep happen quietly over months. It also means every cycle has a hard deadline. Work ships or it doesn't. There is no "just two more sprints."

The framework divides work into four distinct phases that repeat on a cadence. First, **shaping** happens before any cycle begins. Senior people (often a product manager working with a technical partner) define the problem, sketch a solution at the right altitude, and identify rabbit holes that could blow up the timeline. Second, the **betting table** is where leadership decides which shaped pitches deserve a full cycle of team time. This replaces the traditional backlog. There is no groomed list of hundreds of tickets. If a pitch doesn't get bet on, it's not kept around as organizational debt. Third, **building** is the execution phase where a small, integrated team (usually one or two designers and one or two programmers) takes the shaped pitch and figures out the implementation details themselves. Fourth, **cool-down** is a one-to-two week breather between cycles for bug fixes, technical exploration, and recharging.

Shape Up sits in an interesting position relative to other product development methods. It shares Scrum's love of timeboxing but rejects the sprint-by-sprint micromanagement, the daily standups, the velocity tracking, and the product backlog. It shares Kanban's respect for flow and autonomy but imposes hard boundaries that Kanban deliberately avoids. It's philosophically closer to Basecamp's own company values: small teams, high autonomy, minimal meetings, and a bias toward shipping. Critics point out that Shape Up was designed for a bootstrapped company of roughly 50 people building one product, and that its assumptions about team trust, skill level, and organizational flatness don't always transfer to larger or more regulated environments. Those critics have a point. But the underlying mental model, that appetite should drive scope rather than the other way around, has proven useful far beyond Basecamp's walls. Teams at Intercom, Notion community builders, and dozens of mid-stage startups have adapted elements of Shape Up even when they don't adopt the full framework.

For a product manager, Shape Up represents a significant shift in role. You spend less time writing detailed requirements and managing a backlog. You spend more time thinking deeply about problems before committing resources, writing compelling pitches that frame the opportunity and boundary conditions, and then stepping back during execution. The product manager's leverage moves upstream, to the shaping and betting phases, where decisions have the highest impact. Hamster provides a workspace where teams can run Shape Up cycles with AI agents handling the coordination, from shaping pitches to tracking hill chart progress.

## Core Principles

### Fixed Time, Variable Scope

The single most important principle in Shape Up is that time is the constraint and scope is the lever. A product manager sets an appetite (how much time a problem is worth), and the team sculpts the solution to fit inside that window. This inverts the typical dynamic where scope is fixed and timelines slip. When teams skip this principle, they end up in the familiar trap of three-month projects that become six-month projects.

The tradeoff is real: you will ship a smaller version of the feature than you might have imagined. But you will actually ship it.

### Shape Before You Build

Shaping is the act of defining work at the right level of abstraction, concrete enough that the team knows what problem they're solving and what the rough solution looks like, but abstract enough that they have room to make implementation decisions. A good pitch includes a problem statement, a sketched solution (often as breadboards or fat-marker sketches), identified rabbit holes, and explicit boundaries of what's out of scope. When teams skip shaping and throw half-formed ideas into a cycle, the building team burns days just figuring out what they're supposed to do. The tradeoff is that shaping requires dedicated senior time before a cycle begins, time that doesn't feel "productive" in the traditional sense.

### Betting, Not Backlogs

Shape Up replaces the traditional product backlog with a betting table. At the start of each cycle, decision-makers review a small number of shaped pitches and decide which ones to bet on. Pitches that don't get selected are not carried forward automatically. They can be re-pitched later if they still matter.

This eliminates the psychological weight of a 200-item backlog that never shrinks and forces prioritization to happen through real commitment rather than ranking exercises. Teams that maintain shadow backlogs alongside Shape Up undermine the framework's core feedback loop: if an idea keeps coming back to the betting table, it's genuinely important.

### Small Autonomous Teams

During a build cycle, a small integrated team (typically one designer and one or two programmers) owns the entire project. They decide how to break down the work, what to build first, and how to handle the inevitable surprises. The product manager is not assigning tasks or running daily check-ins. This only works if the shaping was done well enough to provide clear boundaries.

When teams skip the autonomy principle, either by micromanaging the build or by staffing too many people onto one project, they lose the speed and ownership that makes Shape Up effective. The tradeoff is that you need to trust your team deeply, which means hiring and shaping standards both have to be high.

### Appetite Over Estimates

Instead of asking "how long will this take?" Shape Up asks "how much time is this worth?" That question, what Basecamp calls setting the appetite, reframes the entire conversation. A product manager might decide that improving the onboarding flow is worth six weeks but not more, or that a small quality-of-life fix is worth a two-week small batch but not a full cycle. This prevents the common failure mode where teams spend three months perfecting something that wasn't strategically important enough to justify that investment. The tradeoff is that you must be comfortable with "good enough" when the appetite runs out.

### Uphill and Downhill Work (Hill Charts)

Shape Up tracks progress using hill charts rather than burndown charts or percentage-complete metrics. A hill chart shows each scope of work as a dot on a hill. The left side (uphill) represents the figuring-out phase, where unknowns dominate. The right side (downhill) represents execution, where the path is clear and work just needs to be done.

This distinction matters because traditional progress tracking can show 80% of tasks complete while the remaining 20% contains all the risk. Hill charts make the ambiguity visible. When teams skip this and rely on task completion rates, they consistently underestimate the risk remaining in a project.

### Cool-Down Is Non-Negotiable

Between every cycle, Shape Up inserts a one-to-two week cool-down period. This is not a sprint retrospective squeezed into an afternoon. It is dedicated time for fixing bugs that surfaced during the cycle, exploring new technical possibilities, writing pitches for the next betting table, or simply recovering. Teams that skip cool-down to "move faster" end up with compounding technical debt, burned-out people, and pitches that are poorly shaped because nobody had time to think.

The tradeoff is that you lose one or two productive weeks per cycle, but you gain sustainability and quality over quarters and years.

## Steps

1. **Step 1: Set the Appetite**
   Before any shaping begins, a product manager decides how much time a particular problem is worth. This is the appetite: a time budget that constrains the solution rather than an estimate that predicts the timeline. Common appetites are "small batch" (one to two weeks) and "big batch" (six weeks). The appetite is not arbitrary.

It reflects the strategic importance of the problem, the opportunity cost of committing a team, and the risk tolerance for the solution. " If the answer is no, either the problem isn't important enough or it needs to be broken into smaller bets. Watch out for setting appetites based on what someone thinks the solution should look like rather than what the problem is worth. The appetite should come before the solution, not after.

2. **Step 2: Shape the Work**
   Shaping is the most intellectually demanding phase. A product manager (often working with a senior designer or technical lead) takes a raw idea and develops it into a pitch with the right level of abstraction. Start by clearly defining the problem, ideally grounded in real user behavior or business data. Then sketch a solution using [breadboards and fat-marker sketches](https://tryhamster.com/skills/using-breadboards-and-fat-marker-sketches) that show the flow and key elements without prescribing visual design or implementation details.

Identify rabbit holes: technical uncertainties, edge cases, or scope traps that could blow up the timeline. Call them out explicitly and either solve them during shaping or declare them out of scope. A well-shaped pitch answers three questions: what are we solving, what does the rough solution look like, and what are we deliberately not doing? " for any major scenario.

3. **Step 3: Write the Pitch**
   The pitch is the artifact that carries the shaped work into the betting table. It is a structured document, not a Jira epic or a Slack message. A strong pitch includes five elements: the problem (why this matters now), the appetite (how much time it's worth), the solution (breadboards or fat-marker sketches), rabbit holes (risks identified and addressed), and no-gos (what is explicitly excluded). Write pitches with enough context that someone who wasn't in the shaping conversation can evaluate the bet.

Avoid two common failure modes: writing too abstractly ("improve onboarding") so the team has no direction, or writing too concretely (detailed wireframes and task lists) so the team has no room to maneuver. The pitch should be shareable asynchronously. Teams that only pitch verbally lose the ability to evaluate bets thoughtfully. See [shaping product pitches](https://tryhamster.com/skills/shaping-product-pitches) for detailed templates and examples.

4. **Step 4: Run the Betting Table**
   The betting table is a short meeting (typically one to two hours) where a small group of decision-makers reviews the available pitches and decides which ones get a team for the next cycle. This is not backlog grooming. There is no ranked list of 50 items. Only fully shaped pitches are eligible.

" Pitches that aren't selected are dropped, not deferred into a backlog. If a pitch is genuinely important, someone will re-pitch it in a future cycle. This is intentional. It prevents organizational debt and forces the product manager to fight for what matters most right now.

A common mistake is treating the betting table as a formality where the highest-paid person's favorite pitch always wins. For the process to work, there must be genuine deliberation and the possibility of saying no. See [running betting table sessions](https://tryhamster.com/skills/running-betting-tables) for facilitation approaches.

5. **Step 5: Kick Off the Build Cycle**
   Once bets are placed, a small integrated team (one designer and one or two programmers) receives the pitch and begins the cycle. The first few days are critical. The team reads the pitch, asks clarifying questions, and then starts mapping scopes, which are meaningful slices of the project that can be completed independently. Scopes are not tasks.

A scope like "invitation flow" contains design, front-end, and back-end work bundled together. The team decides the order of scopes based on risk: tackle the scariest, most uncertain scope first to reduce the chance of a late-cycle surprise. The product manager's role during the build is to be available for scope questions and boundary decisions but not to run standups or review daily progress. Progress is tracked via [hill charts](https://tryhamster.com/skills/tracking-progress-with-hill-charts) where each scope is a dot on a hill, showing whether it's in the figuring-out phase (uphill) or the execution phase (downhill).

If a scope gets stuck uphill for too long, that's a signal for the team to cut scope or escalate.

6. **Step 6: Manage Scope During the Cycle**
   As the cycle progresses, the team will inevitably encounter things that don't fit, edge cases, nice-to-haves, and unexpected complexity. Shape Up handles this through deliberate scope management. " The team actively trims scope to protect the deadline rather than extending the timeline to include everything. This requires a product manager who has clearly communicated the boundaries in the pitch and who supports the team's decisions to cut.

A common anti-pattern is a product manager who shaped the pitch with explicit no-gos but then adds them back as "quick additions" mid-cycle. If scope management feels painful, it usually means the shaping was too abstract or the appetite was too tight for the problem. See [setting appetites and cutting scope](https://tryhamster.com/skills/setting-appetites-and-managing-scope) for tactics.

7. **Step 7: Ship at the End of the Cycle**
   At the end of the cycle, the work either ships or it doesn't. There is no "carry-over" into the next cycle. This is the hard boundary that makes Shape Up work. If the team didn't finish, the work is evaluated fresh: was the shaping insufficient?

Was the appetite wrong? Should it be re-pitched with a different approach? Sometimes the answer is to pitch a smaller follow-up. Sometimes the answer is to let it go.

This binary outcome eliminates the zombie projects that haunt traditional product teams, features that are perpetually "almost done" for months. Shipping doesn't necessarily mean releasing to all users. It can mean deploying behind a feature flag or to a beta group. The point is that the team has built something complete and coherent within the boundary.

8. **Step 8: Run the Cool-Down Period**
   After every cycle, a one-to-two week cool-down period begins. During cool-down, there are no shaped projects and no deadlines. Team members use this time for activities that don't fit neatly into a cycle: fixing bugs that surfaced during the build, addressing small quality-of-life improvements, exploring new technologies, writing pitches for the next betting table, or simply resting. Cool-down is where a product manager often does their best shaping work, because they have uninterrupted time to think deeply about the next set of problems.

Resist the temptation to fill cool-down with "quick projects" or to shorten it when there's pressure to ship faster. The cool-down is what makes the cadence sustainable over years, not just quarters. See [planning cool-down periods](https://tryhamster.com/skills/planning-cooldown-periods) for structuring this time effectively.

## When to Use

- When your team is drowning in a backlog of hundreds of tickets and every sprint planning session feels like rearranging deck chairs. Shape Up replaces that accumulated decision debt with a clean betting table where only fully shaped pitches compete for real commitment, giving a product manager a way to reset the prioritization conversation entirely.
- When you have a small-to-medium product team (roughly 3-15 builders) that is skilled enough to own execution decisions, and you want to give them meaningful autonomy rather than prescribing daily tasks. Shape Up's model of shaping the boundaries upfront and then stepping back during the build requires trust but rewards it with speed and ownership.
- When your product has entered a phase of sustained development, past the initial launch where everything is urgent, and the product manager needs a repeatable cadence for evaluating, committing to, and shipping improvements. The six-week cycle creates a rhythm that makes stakeholder communication predictable and reduces the constant re-negotiation of priorities.
- When scope creep is your team's chronic failure mode. If past projects consistently ballooned from "two weeks" to "three months" because nobody enforced boundaries, the fixed-time constraint in Shape Up acts as a structural intervention. The appetite forces hard scoping decisions before engineering time is spent.
- When your organization values shipping tangible outcomes over generating output metrics like velocity or story points. Shape Up measures progress by whether scopes move over the hill, not by how many tickets get closed. This is a good fit for teams that have tried Scrum and found the ceremony-to-value ratio too high.

## When Not to Use

- When your team is in the first weeks of building a brand-new product and doesn't yet know what the product should be. Shape Up assumes you have a clear enough problem space to shape specific solutions. In a zero-to-one phase, you need rapid experimentation, user interviews, and throwaway prototypes more than six-week build cycles. The shaping process can actually slow you down when the entire product direction is still open.
- When you operate in a heavily regulated industry (healthcare, finance, defense) where detailed upfront specifications, traceability matrices, and sign-off processes are legally required. Shape Up's deliberately abstract pitches and variable scope conflict with environments where you need to document exactly what will be built before a single line of code is written. The "cut scope to fit the appetite" principle may violate compliance requirements.
- When your team is very large (50+ engineers) and works on a monolithic product with deep cross-team dependencies. Shape Up was designed for small, autonomous teams working on relatively independent scopes. If shipping a feature requires coordinated changes across six teams, the six-week cycle becomes a synchronization nightmare. You may need something more like SAFe or a custom coordination layer, even if those approaches feel heavier.
- When your product primarily requires ongoing maintenance, infrastructure work, or support-driven bug fixes rather than new feature development. Shape Up's shaping and betting process is designed for discretionary product work, problems worth investing weeks into. If 80% of your team's time goes to keeping the lights on, the overhead of shaping pitches for the remaining 20% may not be justified.
- When your team lacks the seniority or trust to work autonomously during a build cycle. Shape Up gives the building team significant freedom, and if your team includes mostly junior developers who need daily guidance, or if your organization's culture requires managers to approve granular decisions, the autonomy model will either be performative or chaotic. Build the team's capability first.

## Skills

This method includes the following skills:

- [Managing Six-Week Build Cycles](../../skills/managing-six-week-cycles/SKILL.md) — How to structure and execute fixed-time build cycles including setting appetites, forming small teams, and enforcing the circuit breaker when time runs out.
- [Planning Cool-Down Periods](../../skills/planning-cooldown-periods/SKILL.md) — How to structure the cool-down period between cycles for bug fixes, technical debt, exploration, and preparing the next round of shaped work.
- [Setting Appetites and Cutting Scope](../../skills/setting-appetites-and-managing-scope/SKILL.md) — How to set a time appetite for a project and then deliberately cut scope and identify must-haves versus nice-to-haves to fit within the fixed timebox.
- [Shaping Product Pitches](../../skills/shaping-product-pitches/SKILL.md) — How to define problems, set appetites, and craft shaped pitches with fat-marker sketches and breadboarding before committing engineering resources.
- [Tracking Progress with Hill Charts](../../skills/tracking-progress-with-hill-charts/SKILL.md) — How to use hill charts to visualize whether scopes are in the uphill (figuring it out) or downhill (executing) phase and communicate progress without status meetings.
- [Running Betting Table Sessions](../../skills/running-betting-tables/SKILL.md) — How to facilitate the betting table meeting where stakeholders review shaped pitches and decide which projects to commit to in the next cycle.
- [Mapping Scopes Instead of Tasks](../../skills/mapping-scopes-for-building/SKILL.md) — How to organize work into meaningful scopes — integrated slices of front-end and back-end work — instead of traditional task lists during the building phase.
- [Using Breadboards and Fat-Marker Sketches](../../skills/using-breadboards-and-fat-marker-sketches/SKILL.md) — How to use breadboarding for flow design and fat-marker sketching for visual concepts to define solutions at the right level of abstraction during shaping.

## FAQ

**What is Shape Up in simple terms?**

Shape Up is a way of building products where you decide how much time to spend before deciding what to build, then give a small team full ownership to figure out the details. Work happens in six-week cycles. Before each cycle, senior people shape problems into pitches, a betting table decides which pitches get a team, and then the team builds with autonomy. Between cycles, everyone gets a cool-down period for bugs, exploration, and rest.

The key idea is that time is fixed and scope adjusts to fit.

**Shape Up vs Scrum: which should a product manager choose?**

Scrum works well when you need tight feedback loops (two-week sprints), your team benefits from structured ceremonies (standups, retros, reviews), and you're comfortable with the overhead of backlog grooming and velocity tracking. Shape Up is better when your team is senior enough to work autonomously, you want longer uninterrupted build time, and you find that sprint-by-sprint planning creates more churn than progress. Many product managers find Scrum useful early in a product's life when direction changes frequently, and Shape Up more effective once the product matures and the team needs deeper focus. They are not mutually exclusive.

Some teams use Shape Up's shaping and betting process with shorter build cycles.

**Does Shape Up work for small teams of three to five people?**

Small teams are actually the sweet spot for Shape Up. The framework was designed at Basecamp, which kept teams deliberately small. With three to five people, the product manager or founder can shape pitches, one or two people can form the building team, and the betting table might be a 30-minute conversation between two decision-makers. The main challenge is that with only one building team, you can only bet on one project per cycle, which means the shaping and betting discipline becomes even more important because the opportunity cost of a bad bet is a full six weeks.

**Does Shape Up work at enterprise scale with 50+ engineers?**

Shape Up's principles scale, but its practices need adaptation. The main challenge at scale is cross-team dependencies. If five teams are building features that touch the same codebase or platform, the autonomous-team model can create integration problems. Larger organizations that use Shape Up successfully tend to run multiple betting tables (one per product area), invest heavily in API boundaries between teams so they can work independently, and sometimes shorten cycles to four weeks to increase the cadence of coordination points.

The shaping and appetite-setting practices are valuable at any scale. The "no backlog" principle is hardest to maintain when you have regulatory or contractual commitments.

**Why does Shape Up fail in practice?**

The most common failure mode is weak shaping. If pitches go to the betting table half-baked, the building team spends the first two weeks of a six-week cycle just figuring out what they're building. The second failure is treating the betting table as a formality where the CEO's pet project always wins, which erodes team trust. Third, teams struggle when they can't bring themselves to cut scope.

If every feature is "must-have," the fixed-time constraint becomes meaningless and you're back to deadline-driven crunch. Fourth, skipping cool-down to squeeze in more features creates the burnout and tech debt that Shape Up was designed to prevent.

**How does Shape Up work alongside OKRs and roadmaps?**

Shape Up and OKRs can complement each other well. OKRs set the strategic direction ("reduce time-to-first-value by 30% this quarter"), and shaped pitches become the specific bets the product manager makes toward those objectives. The betting table evaluates pitches partly on how well they serve the current OKRs. For roadmaps, Shape Up requires a philosophical shift.

Instead of committing to specific features on specific dates, you communicate the problems you plan to address in upcoming cycles. This is sometimes called a "now, next, later" roadmap. Stakeholders see what's being built this cycle, what's being shaped for the next betting table, and what's in the research phase for later.

**Can you use Shape Up with a two-week cycle instead of six weeks?**

Yes, and many teams do. Basecamp uses six weeks because they found it long enough to build something meaningful but short enough to maintain urgency. But the framework's principles work at different cycle lengths. Two-week cycles are closer to sprints but still benefit from shaping, betting, and the no-backlog approach.

The tradeoff is that shorter cycles mean you can only tackle smaller scopes, so you either need to break problems into smaller bets or accept that some projects span multiple cycles (which Shape Up explicitly discourages). Four weeks is a popular middle ground that many teams settle on.

**What does a product manager actually do during a Shape Up build cycle?**

During the build, a product manager's day-to-day involvement drops significantly compared to Scrum. You are not running standups, assigning tasks, or reviewing pull requests. " You also monitor hill charts to spot scopes that are stuck uphill, which might signal that the shaping missed something. Most of your proactive work during a build cycle is shaping the next round of pitches for the upcoming betting table.

This shift in rhythm is one of the biggest adjustments for product managers coming from Scrum.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
