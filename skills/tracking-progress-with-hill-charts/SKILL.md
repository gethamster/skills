---
name: tracking-progress-with-hill-charts
description: "Hill charts teach you to visualize whether each scope in a build cycle is still being figured out (uphill) or being executed on known ground (downhill), replacing misleading percentage-complete metrics with honest progress signals."
metadata:
  method: shape-up
---

# Tracking Progress with Hill Charts

> Hill charts teach you to visualize whether each scope in a build cycle is still being figured out (uphill) or being executed on known ground (downhill), replacing misleading percentage-complete metrics with honest progress signals.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Beginner |
| Time to Learn | 20-40 minutes per update, plus 15 minutes initial setup |
| Outcome | You can communicate the real state of a build cycle at a glance, identify stuck scopes before they threaten the deadline, and eliminate status meetings by making progress self-reporting. |
| Prerequisites | Familiarity with the Shape Up framework's cycle structure (fixed time, variable scope), Understanding of scopes as defined in the mapping-scopes-for-building skill, A project currently in a build cycle with defined scopes |
| Part of | [Shape Up](../../methods/shape-up/METHOD.md) |

## Overview

A hill chart is a visual metaphor shaped like a hill, with an uphill side on the left and a downhill side on the right. Each scope in your build cycle is represented as a dot on the hill. The position of the dot tells you something fundamental about the nature of the remaining work: is the team still figuring out what to do and how to do it (uphill), or have they resolved the unknowns and are now executing on a clear plan (downhill)? This distinction matters because traditional progress tracking, like counting completed tasks or estimating percentage done, is structurally misleading. A team can be 80% through their task list and still face a critical unknown that could blow up the remaining timeline. The hill chart makes this visible.

Within the [Shape Up](https://tryhamster.com/methods/shape-up) framework, the hill chart is the primary communication mechanism during a build cycle. Instead of holding daily standups or weekly status meetings where people narrate what they did, teams update their hill chart positions asynchronously. Managers and stakeholders check the chart when they want to understand progress. This saves significant time and, more importantly, creates a forcing function for honesty. Moving a dot from the uphill to the downhill side is a meaningful claim: it says "we know what to build and how to build it for this scope." A dot that stays stuck on the uphill side for multiple updates is an immediate, visible signal that something needs attention.

The concrete artifact you produce is a hill chart with one dot per scope, updated at a regular cadence (typically every few days or twice per week). Over time, the sequence of chart snapshots creates a history that reveals patterns: scopes that moved smoothly versus scopes that stalled, teams that consistently underestimate the uphill phase, and projects where late-breaking unknowns nearly derailed the cycle. This history is invaluable for improving your shaping and scoping practices across future cycles. The hill chart is not a project management dashboard. It is a thinking tool that forces the team to confront the honest state of their work and makes that state legible to everyone involved.

## How It Works

The hill chart works because it captures a distinction that traditional progress metrics ignore: the difference between uncertainty and effort. In software development and product work, the hardest part of most work is not typing the code or building the interface. The hardest part is figuring out what to build, resolving ambiguities in the design, discovering unexpected technical constraints, and making decisions about tradeoffs. This is the uphill phase. Once those decisions are made and the unknowns are resolved, the remaining work is execution, which is the downhill phase. Execution can still take time and effort, but it is fundamentally less risky because you know what you are doing.

The hill metaphor makes this concrete. Imagine a literal hill. Walking uphill is hard, uncertain, and slow. You cannot see the other side. You do not know exactly how far the summit is. Walking downhill, you can see the destination. The effort is mostly mechanical. You know how far you have to go. The summit, the peak of the hill, is the moment of resolution: the point where the team shifts from "we're still figuring this out" to "we know what to do, now we just need to do it." This moment is the most important inflection point in any scope's lifecycle, and the hill chart makes it visible.

The reason this works better than task lists or burn-down charts is structural. A task list treats all work as equivalent: each task is a box to check. But a scope with ten remaining tasks where one of them is "figure out how the API handles edge case X" is in a fundamentally different state than a scope with ten remaining tasks that are all "implement known pattern Y for screen Z." The first scope is still uphill. The second is downhill. A task list shows them both as 0% complete. A hill chart shows one as risky and the other as safe. This is the information that matters for cycle management.

In the context of [Shape Up](https://tryhamster.com/methods/shape-up), where cycles have a hard deadline and scope is variable, the hill chart serves a specific decision-making function. If a scope is stuck on the uphill side past the midpoint of the cycle, the team has three options: invest more effort to resolve the unknowns, cut scope from that area to make the problem smaller, or abandon that scope entirely to protect the rest of the cycle. Without the hill chart, these decisions happen too late, usually in the last few days when panic sets in. With the hill chart, they happen early enough to actually help.

One important nuance: the hill chart is not linear. The left side (uphill) is not 0-50% and the right side (downhill) is not 50-100%. Movement on the chart represents a qualitative shift in the team's understanding, not a quantitative measure of work completed. A dot can jump from low on the uphill to the summit in a single update if the team has a breakthrough that resolves all the unknowns. Conversely, a dot can sit near the summit for days while the team grinds through one stubborn unknown. The chart measures clarity, not calendar time.

## Step-by-Step Guide

### Step 1: Step 1: Define your scopes and verify they are well-formed

Before you can place dots on a hill chart, you need clearly defined scopes. A scope is a meaningful slice of the project that represents a distinct piece of functionality or user-facing behavior, not a layer of the tech stack or a department's contribution. Review your scopes and check that each one has a clear "done" state that you could demonstrate. If a scope is too large (would take the entire cycle on its own) or too vague ("backend work"), break it down further or redefine it.

You should have somewhere between 3 and 8 scopes for a typical six-week cycle. Each scope name should be specific enough that anyone on the team can explain what it means without additional context.

> **Pro tip:** If you are struggling to name your scopes, that is itself a signal that you are still in the uphill phase for the project as a whole. Go back to the mapping-scopes-for-building skill and work through that exercise before setting up the hill chart.

### Step 2: Step 2: Set up the hill chart with one dot per scope

Create a hill chart, either in Basecamp (which has a built-in hill chart feature), a dedicated tool, a whiteboard, or a simple shared document with a hill-shaped diagram. Place one dot per scope on the chart. At the very start of the cycle, all dots should be positioned at the far left of the uphill side, unless the shaping phase already resolved significant unknowns for certain scopes. Label each dot with the scope name.

If you are using a physical chart, use sticky notes. If you are using a digital tool, make sure each dot is clearly labeled and that historical positions will be preserved or can be captured as snapshots.

> **Pro tip:** Resist the urge to place dots further right than they deserve at the start. Teams often want to show that shaping gave them a head start, but the build cycle will inevitably surface unknowns that shaping did not anticipate. Start conservatively and let the dots earn their position.

### Step 3: Step 3: Establish the update cadence

Decide how often the team will update the hill chart. For a six-week cycle, updating every two to three days works well. For a three-week cycle, daily or every other day is better. The cadence should be frequent enough to catch stuck scopes early but not so frequent that updates become a chore.

Communicate the cadence to the team clearly. Each update should be quick: the person responsible for a scope moves their dot and, if needed, writes one or two sentences explaining why. Do not turn this into a status report. The dot position is the primary communication.

> **Pro tip:** Set a recurring reminder or calendar event for update days. Without a consistent trigger, updates tend to slip, and the chart becomes stale and useless.

### Step 4: Step 4: Move dots based on the nature of remaining work, not task completion

When updating the chart, the person responsible for each scope should ask themselves one question: "Do I know what to do next and how to do it, or am I still figuring something out?" If they are still figuring things out, resolving unknowns, experimenting with approaches, waiting for critical information, the dot stays on the uphill side. If they have resolved the unknowns and the remaining work is execution of a known plan, the dot moves to the downhill side. The summit represents the moment of maximum clarity: all major decisions are made, all approaches are validated, and the path to done is clear. Moving a dot downhill is a significant claim, so do it deliberately.

> **Pro tip:** A useful heuristic: if the person working on a scope could write a detailed plan for every remaining step without needing to investigate anything further, they are on the downhill side. If they would need to say "and then I'll figure out how to handle X," they are still uphill.

### Step 5: Step 5: Watch for stuck dots and treat them as early warnings

After two or three updates, look for dots that have not moved. A dot that stays in the same uphill position across multiple updates is the most important signal the hill chart produces. It means the team is stuck on something: a technical unknown they cannot resolve, a design problem they cannot crack, a dependency they cannot unblock, or a scope that was poorly defined. Do not ignore stuck dots.

Identify the specific blocker by talking to the person responsible for that scope. " The answer will determine whether the scope needs help, needs to be cut, or needs to be redefined.

> **Pro tip:** Two consecutive updates without movement is a yellow flag. Three is a red flag. Act on yellow flags. By the time you see a red flag in a six-week cycle, you have already lost significant time.

### Step 6: Step 6: Use stuck scopes to trigger scope-cutting conversations

When a dot is stuck on the uphill side and the midpoint of the cycle is approaching, hold a focused conversation about that scope's future. There are three options: invest concentrated effort to resolve the unknown (pair programming, a design spike, bringing in expertise), reduce the scope so the unknown is eliminated or bypassed, or cut the scope entirely from this cycle. This decision should be made by the team in consultation with whoever bet on the project. The hill chart provides the evidence that makes this conversation productive rather than political.

You are not arguing about feelings. You are pointing at a dot that has not moved.

> **Pro tip:** Cutting scope is not failure. In Shape Up, scope is the variable that flexes to meet the fixed deadline. A team that cuts scope wisely and ships a smaller but complete version is performing exactly as the framework intends.

### Step 7: Step 7: Track the downhill progression toward done

" The downhill phase is about execution, so progress should be relatively predictable. If a downhill dot stalls, it usually means the scope was not actually resolved, and an unknown has resurfaced. This is less common than uphill stalls, but it does happen. When it does, be honest: move the dot back uphill to reflect the reality that the team is figuring something out again.

The chart is only useful if it is honest. A downhill dot that reaches the far right edge means that scope is shipped or shippable.

> **Pro tip:** Avoid the temptation to only move dots when scopes are fully complete. The downhill side has a range. A scope where all the code is written but not yet tested is further right than one where coding just started, but neither is at the far right edge.

### Step 8: Step 8: Capture snapshots for cycle retrospectives

At each update, save a snapshot of the hill chart, whether as a screenshot, a dated entry in a log, or an automatic history feature in your tool. At the end of the cycle, review the full history. Look for patterns: Which scopes moved smoothly from uphill to downhill to done? Which scopes stalled, and why?

Were the stalls caused by poor shaping, unexpected technical complexity, or vague scope definitions? This retrospective data is the raw material for improving your shaping and scoping practices in future cycles. Share the findings with whoever runs the betting table so they can factor these patterns into future bets.

> **Pro tip:** If you are using a tool without automatic history, take a quick screenshot at every update. It takes seconds and becomes invaluable when you are trying to remember why a particular scope was painful six months later.

## Best Practices

- Move dots based on uncertainty resolution, not task completion. The hill chart measures clarity, not effort. A team that spent three days figuring out the right database schema and now knows exactly how to build the feature should move their dot significantly to the right, even if they have not written a single line of production code. A team that built ten screens but has not resolved a critical API integration question should keep their dot on the uphill side.

If you conflate movement with task completion, the chart degrades into a burn-down chart and loses its diagnostic value.
- Keep the number of scopes between 3 and 8 per cycle. Fewer than 3 scopes means each dot represents too much work, and the chart cannot show nuanced progress. More than 8 scopes creates visual clutter and makes the chart hard to read at a glance. If you find yourself with 12 or 15 scopes, some of them are probably tasks disguised as scopes. Consolidate them into meaningful functional areas.
- Update the chart asynchronously and resist the urge to discuss every dot in a meeting. The entire point of the hill chart is to eliminate status meetings by making progress visible. If you update the chart and then also hold a meeting to discuss each scope, you have added overhead rather than reducing it. Reserve live conversation for stuck dots that need intervention, not for routine updates.
- Be brutally honest about dot positions. The hill chart only works as a communication tool if it reflects reality. Teams under pressure will nudge dots to the right to signal progress they have not actually made. Managers who see suspiciously smooth rightward movement should ask probing questions: "What was the specific unknown you resolved that moved this scope past the summit?" If the answer is vague, the dot probably moved prematurely.
- Treat the summit as the most important moment. The transition from uphill to downhill is the critical event in any scope's lifecycle. Before moving a dot past the summit, the person responsible should be able to articulate exactly what they resolved and why they are confident the remaining work is pure execution. This moment deserves a brief written note: "Resolved the approach for X by doing Y.

" These notes become invaluable during retrospectives.
- Do not use the hill chart for scopes that are pure execution from the start. If a scope has zero unknowns, such as "update the footer links" or "apply the new color palette," it does not belong on the hill chart. It is already downhill by definition. Putting it on the chart just to watch it slide right adds noise.

The hill chart is for scopes where the uphill-to-downhill transition is meaningful and uncertain.
- Use the hill chart in combination with scope mapping, not as a replacement for it. The hill chart shows where scopes are. The scope map shows what the scopes are and how they relate to each other. Both are needed. A hill chart with poorly defined scopes will produce misleading signals because the dots represent ambiguous work. Always ensure your scopes are well-defined before tracking them.

## Common Mistakes

- **Treating the hill chart like a linear progress bar and moving dots rightward at a steady pace over time** — This happens because teams are accustomed to linear progress tracking (burn-down charts, percentage complete) and unconsciously map that mental model onto the hill. In practice, uphill progress is often jerky and unpredictable, with long plateaus followed by sudden jumps when an unknown is resolved. If your dots are moving rightward at a consistent pace every update, you are probably updating based on time elapsed or tasks done rather than uncertainty resolved. Watch for scopes where the description of remaining work sounds the same update after update.

That is a dot that should not have moved.
- **Putting too many dots on the hill chart by tracking individual tasks instead of scopes** — This usually happens when teams skip the scope-mapping step and go straight to the hill chart, breaking work into tasks and plotting each one. A hill chart with 20 dots is unreadable and defeats the purpose of at-a-glance communication. You will see this when dot labels read like task descriptions ("set up database table," "create login endpoint") rather than scope descriptions ("user authentication flow," "invoice generation"). Go back to the mapping-scopes-for-building skill, define proper scopes, and re-plot with one dot per scope.
- **Never moving a dot backward from the downhill side when new unknowns emerge** — Teams resist moving dots backward because it feels like admitting failure or losing progress. But a scope that was believed to be in the execution phase and then hits an unexpected technical constraint or a design ambiguity is genuinely back on the uphill side. Pretending otherwise means the chart lies, and a lying chart is worse than no chart because it creates false confidence. The signal to watch for is a downhill dot that stops moving for two or more updates.

" If the answer is yes, move the dot back and treat the scope accordingly.
- **Using the hill chart to evaluate individual team member performance** — This mistake poisons the entire system because it destroys the incentive for honest reporting. If people believe their dot position will be used in performance reviews, every dot will be pushed as far right as possible regardless of reality. The hill chart is a project management tool, not a performance management tool. The moment you use it to praise or criticize individuals based on dot movement, you have broken its value as a diagnostic instrument.

Use it to understand project risk, not to judge people. Make this explicit when you introduce the practice.
- **Updating the hill chart in group meetings by asking each person to narrate their scope status** — This turns the hill chart into a status meeting with a visual aid, which is exactly what it is designed to replace. The symptom is a recurring meeting where the team goes around the room and each person explains where their dot is and why. This adds time, introduces social dynamics that bias dot positions (nobody wants to report being stuck in front of the group), and creates meeting fatigue. Instead, have each person update their dot asynchronously with a brief written note.

Reserve synchronous time exclusively for scopes that are stuck and need collaborative problem-solving.
- **Abandoning the hill chart after a few cycles because it 'feels redundant' with other tracking tools** — This happens when teams layer the hill chart on top of their existing project management tools without removing anything. If you are running standups, maintaining a Kanban board, updating a burn-down chart, and filling out status reports in addition to the hill chart, it will feel redundant because you have not let it replace anything. The hill chart is most valuable when it replaces status meetings and percentage-complete metrics, not when it supplements them. Commit to using it as the primary progress signal for at least two full cycles before evaluating its effectiveness.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/shape-up/METHOD.md) — Shape Up

## Related Skills

- [Managing Six-Week Build Cycles](../managing-six-week-cycles/SKILL.md)
- [Planning Cool-Down Periods](../planning-cooldown-periods/SKILL.md)
- [Setting Appetites and Cutting Scope](../setting-appetites-and-managing-scope/SKILL.md)
- [Shaping Product Pitches](../shaping-product-pitches/SKILL.md)
- [Running Betting Table Sessions](../running-betting-tables/SKILL.md)
- [Mapping Scopes Instead of Tasks](../mapping-scopes-for-building/SKILL.md)
- [Using Breadboards and Fat-Marker Sketches](../using-breadboards-and-fat-marker-sketches/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
