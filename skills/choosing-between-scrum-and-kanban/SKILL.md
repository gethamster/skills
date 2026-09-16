---
name: choosing-between-scrum-and-kanban
description: "This skill teaches you how to evaluate your team's workflow characteristics, work arrival patterns, and organizational constraints to select the right kanban agile framework, whether that is Scrum, Kanban, Scrumban, or a custom hybrid."
metadata:
  homepage: https://tryhamster.com
  method: agile
---

# Choosing Between Scrum, Kanban, and Hybrid Kanban Agile Approaches

> This skill teaches you how to evaluate your team's workflow characteristics, work arrival patterns, and organizational constraints to select the right kanban agile framework, whether that is Scrum, Kanban, Scrumban, or a custom hybrid.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-3 hours for initial assessment, plus 1-2 weeks for a trial run |
| Outcome | You produce a scored framework-fit assessment that gives your team a defensible, context-specific recommendation for which agile framework to adopt, along with a concrete 2-week trial plan to validate the choice. |
| Prerequisites | Basic understanding of Scrum ceremonies (sprint planning, daily standup, retrospective), Familiarity with Kanban board concepts (columns, WIP limits, pull-based flow), Access to 4-6 weeks of historical work data (ticket counts, cycle times, or at minimum a rough sense of how work arrives) |
| Part of | [Agile](../../methods/agile/METHOD.md) |

## Overview

Selecting the right agile framework is one of the most consequential decisions a product team makes, yet most teams skip the evaluation entirely. They default to Scrum because it is popular, or drift into Kanban because someone read a blog post. The result is a framework mismatch that creates friction for months: Scrum ceremonies that feel pointless for a support team handling unpredictable tickets, or a Kanban board with no cadence that leaves a product team unable to plan releases. This skill, rooted in [Agile](https://tryhamster.com/methods/agile) principles, gives you a structured way to make the choice deliberately.

The core artifact you produce is a framework-fit scorecard. You evaluate your team across five dimensions: work predictability, batch size consistency, scope stability, cadence need, and organizational coupling. Each dimension gets a 1-5 score based on concrete evidence from your workflow history. The total points you toward Scrum (high predictability, clear batches), Kanban (continuous flow, variable work types), or a hybrid approach (mixed signals). The scorecard is not a personality quiz. It is a diagnostic tool that forces you to gather real data about how work actually arrives and moves through your team, rather than how you wish it did.

The output goes beyond a label. After scoring, you design a 2-week trial configuration: the specific ceremonies to keep or drop, the board structure to use, the WIP limits to set, and the metrics to track. At the end of the trial, you run a lightweight retrospective against those metrics and decide whether to commit, adjust, or pivot. This approach eliminates the common failure mode of adopting a framework wholesale from a textbook and then abandoning it three months later because it never fit. The goal is not framework purity. The goal is a sustainable workflow that helps your team deliver value predictably and with low friction.

## How It Works

The mental model behind this skill is dimensional analysis of workflow characteristics. Every team's work has a shape, and different kanban agile frameworks are optimized for different shapes. Scrum assumes work can be grouped into time-boxed batches of roughly equal size, that scope can be frozen for 1-4 weeks, and that the team benefits from structured reflection points. Kanban assumes work arrives continuously, items vary widely in size and urgency, and the team benefits from limiting concurrent work rather than time-boxing it. Hybrids like Scrumban keep the cadence of Scrum but relax the scope-freeze constraint and add Kanban-style WIP limits.

The five dimensions you score capture the key differences:

**Work predictability** measures how well you can forecast what work will arrive next week. A product team building a roadmap feature scores high. An incident-response team scores low. **Batch size consistency** asks whether work items are roughly the same effort. If most items are 2-5 story points, Scrum sprints plan cleanly. If items range from 30-minute fixes to 3-week projects, Kanban handles the variance better. **Scope stability** captures how often priorities shift mid-cycle. Teams that can commit to a 2-week sprint without major scope changes score high. Teams that get pulled into urgent requests daily score low. **Cadence need** measures whether your stakeholders and dependent teams need regular delivery checkpoints or whether continuous deployment is acceptable. **Organizational coupling** captures how many external dependencies (other teams, vendors, compliance reviews) gate your work. High coupling favors Scrum-style planning; low coupling favors Kanban-style pull.

Each dimension scores 1-5. A total of 20-25 points strongly favors Scrum. A total of 5-12 strongly favors Kanban. Scores of 13-19 land in hybrid territory, and the specific dimension breakdown tells you which hybrid elements to borrow from each side. The reason scoring works is that it decomposes a single subjective question ("which framework?") into five observable, arguable sub-questions. This prevents the loudest voice in the room from winning and surfaces disagreements productively. Two teammates who disagree on the framework often agree on four of five dimensions and disagree on one, which is a much easier conversation.

The second half of the model is the trial configuration. Rather than committing permanently, you design a 2-week experiment with explicit success metrics: cycle time variance, throughput, number of unplanned items, and team satisfaction (a simple 1-5 survey). This aligns with the [Agile](https://tryhamster.com/methods/agile) principle of inspecting and adapting. If the trial metrics improve over your baseline, you commit. If they do not, you adjust the configuration or try a different framework. The trial approach de-risks the decision and gives the team ownership of the outcome.

## Step-by-Step Guide

### Step 1: Step 1: Gather 4-6 Weeks of Workflow History

Pull data from your project tracker (Jira, Linear, Asana, Trello, or even a shared spreadsheet) covering the last 4-6 weeks of completed work. For each item, note: the date it entered the backlog, the date work started, the date it was done, a rough size estimate (story points, t-shirt size, or hours), and whether it was planned or unplanned. If you do not have formal tracking, reconstruct from memory with 2-3 teammates, focusing on the last 20-30 work items. The goal is a simple table with columns for item name, arrival date, start date, done date, size, and planned/unplanned.

This raw data feeds every scoring dimension.

> **Pro tip:** Do not clean the data too aggressively. Items that were abandoned, deprioritized, or split mid-stream are signal, not noise. They reveal scope instability and batch size inconsistency.

### Step 2: Step 2: Score Work Predictability (1-5)

Look at the ratio of planned to unplanned items in your dataset. If 80% or more items were planned before the week they were started, score 5. If 60-79% were planned, score 4. If 40-59%, score 3.

Below 40% planned, score 2. If nearly everything is reactive or interrupt-driven, score 1. Write down the actual percentage and the score. If teammates disagree on the score, each person scores independently first, then compare.

Use the median score and record the spread. , one person says 2, another says 4) itself is useful information: it usually means different people experience different workloads.

> **Pro tip:** Count items, not effort. One large planned feature and ten small unplanned bugs is a low-predictability pattern even though the planned item consumed more hours.

### Step 3: Step 3: Score Batch Size Consistency (1-5)

Calculate the coefficient of variation (standard deviation divided by mean) of your item sizes. If you do not have numeric sizes, bucket items into small, medium, and large. If 70%+ items are the same bucket, score 5. If items span all three buckets roughly equally, score 2 or 3.

If you have extreme outliers (some items 10x larger than others), score 1. The point is to assess whether sprint-sized batches would contain a predictable amount of work. High consistency favors Scrum because sprint planning is reliable. Low consistency favors Kanban because variable-sized items flow better through a pull system with WIP limits.

> **Pro tip:** If you discover that batch sizes are inconsistent because large items are not being broken down, that is a backlog refinement problem, not a framework problem. See [managing product backlogs](https://tryhamster.com/skills/managing-product-backlogs) before scoring this dimension too low.

### Step 4: Step 4: Score Scope Stability, Cadence Need, and Organizational Coupling (1-5 Each)

For scope stability, count how many times priorities shifted significantly during your 4-6 week window. Zero or one shift scores 5. Two or three shifts score 3. Weekly or more frequent shifts score 1.

For cadence need, ask stakeholders and dependent teams how they consume your output. , biweekly demos to sales), score 5. , API updates, content publishing), score 1. For organizational coupling, count external dependencies that blocked or delayed work items.

If fewer than 10% of items had external blockers, score 1 (low coupling). If more than 40% did, score 5 (high coupling). Write all three scores with supporting evidence.

> **Pro tip:** Organizational coupling is the most commonly misjudged dimension. Teams in large companies almost always undercount their dependencies because they have normalized the waiting. Look for items whose cycle time was more than double the median and ask why.

### Step 5: Step 5: Total the Scores and Identify the Framework Zone

Add the five dimension scores. A total of 20-25 strongly favors Scrum: your work is predictable, batches are consistent, scope holds, stakeholders want cadence, and external dependencies require coordination. A total of 5-12 strongly favors Kanban: work is unpredictable, sizes vary widely, priorities shift often, and downstream consumers prefer continuous delivery. A total of 13-19 places you in hybrid territory.

Within the hybrid zone, look at which dimensions pulled the score in each direction. If cadence need is 5 but scope stability is 1, Scrumban (sprint cadence with flexible scope and WIP limits) is a natural fit. Document your total, the breakdown, and your initial recommendation.

> **Pro tip:** If two teammates arrive at different totals that land in different zones, do not average. Instead, discuss the specific dimensions where you diverged. The conversation is more valuable than the number.

### Step 6: Step 6: Design the 2-Week Trial Configuration

Based on your framework zone, define the concrete setup for a 2-week trial. For Scrum: set sprint length (start with 2 weeks), define ceremonies (planning, daily standup, review, retrospective), create a board with To Do, In Progress, Done. For Kanban: define columns matching your workflow stages, set initial WIP limits (start with number of team members minus one per column), skip sprint planning, keep daily standups. , new urgent items can enter mid-sprint if they replace an equal-sized item).

Write the configuration as a one-page document the whole team can reference.

> **Pro tip:** Set WIP limits slightly tighter than feels comfortable. If you have 5 developers, try a WIP limit of 4 on In Progress. Tight limits surface bottlenecks quickly during the trial, which is exactly what you want.

### Step 7: Step 7: Define Baseline Metrics and Trial Success Criteria

Before starting the trial, calculate baseline metrics from your historical data: average cycle time (start to done), throughput (items completed per week), percentage of unplanned items, and average team satisfaction (run a quick 1-5 anonymous survey asking "How well does our current workflow support your ability to do good work?"). Then set success criteria for the trial. A reasonable bar is: cycle time does not increase by more than 20%, throughput stays within 10% of baseline, unplanned work percentage decreases or stays flat, and satisfaction improves by at least 0.5 points. Write these numbers down before the trial starts so you are not cherry-picking success metrics after the fact.

> **Pro tip:** If your team has never measured cycle time, the act of starting to measure it will itself change behavior. Expect cycle times to appear worse in the first week simply because you are now counting items that previously sat untracked.

### Step 8: Step 8: Run the Trial and Collect Data

Execute the 2-week trial using the configuration from Step 6. Track the same metrics daily or at minimum at the end of each week. The team lead or scrum master should note qualitative observations: ceremonies that felt productive, moments of friction, items that violated WIP limits or sprint scope, and any external events that disrupted the trial. At the end of two weeks, compile the metrics and run the satisfaction survey again.

This is a data collection phase, not a judgment phase. , a WIP limit of 2 is causing developers to sit idle daily).

> **Pro tip:** If a major incident or company event disrupts the trial (holiday week, major outage, leadership change), extend the trial by one week rather than drawing conclusions from an unusual period.

### Step 9: Step 9: Evaluate Results and Decide

Compare trial metrics to your baseline success criteria. If all criteria are met, commit to the framework for the next quarter with a scheduled review at the end. If some criteria are met but others are not, identify the specific dimensions causing friction and adjust the configuration. For example, if cycle time increased because WIP limits were too tight, relax them by one and run another week.

If no criteria are met, go back to Step 5 and consider the adjacent framework zone. " The retrospective output feeds directly into your configuration adjustments. See [running retrospectives](https://tryhamster.com/skills/running-retrospectives) for how to facilitate this effectively.

> **Pro tip:** Teams often want to abandon a framework after one uncomfortable trial. Push for at least one adjustment cycle before pivoting. The discomfort of a new workflow is not the same as framework mismatch.

## Best Practices

- Score each dimension independently before discussing as a group. When you discuss scores aloud first, the first number stated anchors everyone else. Independent scoring followed by comparison reveals genuine disagreement and produces a more accurate assessment.
- Use real data, not aspirations. Score based on how work actually flows today, not how you hope it will flow once the new framework is in place. Teams that score based on aspirations pick Scrum (because they wish they could plan) and then fail at sprint commitments because their reality is Kanban-shaped.
- Start with the lightest viable configuration. For Scrum, you can add ceremonies later, but removing them creates resistance. For Kanban, you can tighten WIP limits incrementally. For hybrids, start with two Scrum ceremonies (planning and retrospective) plus WIP limits, then add or remove based on trial results.
- Re-evaluate the framework choice every quarter. Teams evolve, products mature, and organizational context shifts. A team that needed Kanban during a chaotic product-market fit phase may benefit from Scrum once priorities stabilize. Build a quarterly 30-minute review into your team calendar.
- Document your framework-fit scorecard and share it with stakeholders. When a manager asks "why aren't you doing Scrum like the other teams," a scored assessment with real data is far more persuasive than "it doesn't feel right." The scorecard also helps new team members understand why the current approach was chosen.
- Do not conflate framework choice with tool choice. You can run Kanban in Jira or Scrum in Trello. Pick the framework first based on workflow fit, then configure whatever tool you already have. Switching tools and frameworks simultaneously introduces too many variables to learn from the trial.
- Accept that different teams in the same company may need different frameworks. A platform engineering team and a product feature team have fundamentally different work arrival patterns. Forcing a single framework across all teams is one of the most common causes of agile adoption failure. See [scaling agile across teams](https://tryhamster.com/skills/scaling-agile-across-teams) for how to manage this.

## Common Mistakes

- **Choosing Scrum by default because it is the most popular agile framework** — Scrum's popularity does not mean it fits every context. Teams that handle continuous support requests, incident response, or highly variable work types will struggle with fixed-length sprints and scope commitments. The signal to watch for is consistently failing to complete sprint goals, which teams often blame on estimation skill when the real issue is a framework mismatch. Run the five-dimension scoring before committing to any framework.
- **Treating Kanban as 'Scrum without the meetings' or 'no process at all'** — Kanban has its own discipline: explicit WIP limits, pull-based flow, defined policies for each column, and regular metrics review. Teams that adopt Kanban as a way to avoid process end up with a chaotic task board and no improvement mechanism. The diagnostic sign is a Kanban board with no WIP limits and dozens of items in progress simultaneously. If your Kanban has no constraints, it is not Kanban.

It is a to-do list.
- **Scoring dimensions based on one person's perspective instead of gathering independent scores** — A team lead or product manager often has a different experience of work predictability than individual contributors. The lead may think scope is stable because they absorb the scope changes themselves. The ICs experience constant context switching. When one person fills out the scorecard alone, the resulting framework choice optimizes for one role's experience.

Have at least three team members score independently, then compare and discuss divergences.
- **Abandoning the trial after the first difficult week** — Any new workflow creates friction in the first few days because habits are disrupted. Teams mistake normal adjustment discomfort for framework mismatch. The signal that distinguishes real mismatch from adjustment discomfort is whether friction decreases over the two-week trial. If daily standups feel awkward on day 2 but smoother by day 8, that is adjustment.

If WIP limits cause developers to block each other every single day of the trial, that is a configuration problem worth addressing. Run the full trial and adjust before pivoting.
- **Building an elaborate hybrid without understanding why each element is included** — Some teams create a Frankenstein process that includes sprint planning, daily standups, WIP limits, kanban boards, retrospectives, release trains, and more, with no clear rationale for each element. Every ceremony and constraint should map to a specific problem your scorecard identified. If scope stability is low, WIP limits address that. If stakeholder communication is the issue, sprint reviews address that.

If you cannot explain why a ceremony exists in terms of your scored dimensions, remove it.
- **Ignoring the organizational coupling dimension and then being surprised by cross-team friction** — Teams often focus on internal workflow dimensions (predictability, batch size) and forget that external dependencies shape which framework succeeds. A team with heavy cross-team dependencies benefits from Scrum's planning ceremonies because they create natural coordination points. Without them, dependencies surface as surprises mid-flow. If your coupling score was 4 or 5, ensure your chosen framework includes explicit planning or sync points, even if other dimensions favor Kanban.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/agile/METHOD.md) — Agile

## Related Skills

- [Comparing Agile and Waterfall for Project Selection](../comparing-agile-and-waterfall/SKILL.md)
- [Running Sprint Planning and Execution](../running-sprint-planning-and-execution/SKILL.md)
- [Scaling Agile Across Multiple Teams and Departments](../scaling-agile-across-teams/SKILL.md)
- [Managing and Refining a Product Backlog](../managing-product-backlogs/SKILL.md)
- [Coaching Teams Through Agile Adoption and Transformation](../coaching-agile-team-adoption/SKILL.md)
- [Running Sprint Retrospectives for Continuous Improvement](../running-retrospectives/SKILL.md)
- [Facilitating Effective Daily Stand-Up Meetings](../facilitating-daily-standups/SKILL.md)
