---
name: managing-scrum-boards-in-jira
description: "This skill teaches you how to set up and manage Jira scrum boards, configure custom workflows, track team velocity, and generate burndown charts to maintain full sprint visibility."
metadata:
  method: scrum
---

# Managing Scrum Boards in Jira: The Complete Guide

> This skill teaches you how to set up and manage Jira scrum boards, configure custom workflows, track team velocity, and generate burndown charts to maintain full sprint visibility.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 45-90 minutes |
| Outcome | You'll have a fully configured Jira scrum board that gives your team clear sprint visibility, accurate velocity tracking, and actionable burndown data for continuous improvement. |
| Prerequisites | Basic understanding of Scrum framework (sprints, backlog, ceremonies), Jira Cloud or Data Center account with project admin permissions, Familiarity with user stories and story point estimation |
| Part of | [Scrum](../../methods/scrum/METHOD.md) |

## Overview

A Jira scrum board is the operational nerve center for any team practicing [Scrum](https://tryhamster.com/methods/scrum). It translates the abstract framework of sprints, backlogs, and ceremonies into a concrete, interactive workspace where every team member can see what's in progress, what's blocked, and what's done. Without a well-configured board, teams lose visibility, sprint planning becomes guesswork, and retrospectives lack the data they need to drive real improvement.

Managing a Jira scrum board goes far beyond simply creating a project and dragging cards around. It means designing workflows that mirror how your team actually works, configuring columns and swimlanes so information is instantly scannable, and leveraging Jira's built-in reporting — velocity charts, burndown charts, sprint reports — to make data-driven decisions about capacity and scope. This skill bridges the gap between knowing Scrum theory and executing it with precision in your team's primary tool.

Whether you're a Scrum Master setting up a board for a new team, a product owner wanting better backlog visibility, or a developer who wants to understand the mechanics behind the board you use every day, mastering Jira scrum board management will make your sprints more transparent, predictable, and ultimately more productive.

## How It Works

Jira scrum boards operate on a pull-based system built around sprints. The backlog serves as a prioritized queue of work items (user stories, bugs, tasks), and during [sprint planning](https://tryhamster.com/skills/planning-and-executing-sprints), the team pulls a subset of those items into a time-boxed sprint. The board then visualizes each item's journey through workflow states — typically columns like To Do, In Progress, In Review, and Done.

Under the hood, every column on the board maps to one or more workflow statuses. When a team member drags a card from one column to another, Jira transitions the underlying issue through its workflow. This is why workflow configuration matters so much: if your workflow doesn't reflect reality, the board becomes a lie. Teams that skip workflow customization end up with cards stuck in ambiguous states or, worse, moving cards without updating the actual status.

Jira's reporting engine reads these transitions to generate metrics. The burndown chart plots remaining work (in story points or issue count) against the sprint timeline, showing whether the team is on track. The velocity chart aggregates completed story points across sprints, giving the team and product owner a reliable baseline for future [sprint planning](https://tryhamster.com/skills/planning-and-executing-sprints) and [estimation](https://tryhamster.com/skills/estimating-work-with-story-points). These reports are only as accurate as the board's configuration and the team's discipline in keeping cards updated.

## Step-by-Step Guide

### Step 1: Step 1: Create a Scrum Board Project

In Jira, go to **Projects > Create Project** and select the **Scrum** template. Name your project using a clear convention (e.g., "Mobile App — Sprint Team") and choose a meaningful project key (e.g., MOB). Select the team-managed or company-managed type depending on your organization's governance model.

Company-managed projects give Jira admins centralized control over workflows and permissions, which is ideal for larger organizations. Team-managed projects let individual teams customize their own boards without admin intervention, which works well for smaller, autonomous teams.

Once created, Jira automatically generates a scrum board with a backlog view and an active sprint board. You'll customize both in the following steps.

> **Pro tip:** If your organization already has a Jira project but it's using a Kanban board, you can create a new Scrum board from the same project by going to Board > Create Board > Scrum Board and selecting the existing project as the source.

### Step 2: Step 2: Configure Your Workflow to Match Team Reality

Navigate to **Board Settings > Columns** to see the default column mapping. The default Scrum board typically has three columns: To Do, In Progress, and Done. Most teams need more granularity.

Add columns that reflect your actual process. A common configuration for a development team is: **To Do → In Progress → Code Review → QA → Done**. For each column, map the corresponding Jira workflow statuses. If needed, go to **Project Settings > Workflows** to add custom statuses first.

Set column constraints (WIP limits) to prevent bottlenecks. For example, if your team has 5 developers, setting an In Progress limit of 5-7 helps surface overcommitment. While Jira won't enforce hard WIP limits on Scrum boards the way it does for Kanban, the visual indicator flags violations during standups.

> **Pro tip:** Keep your workflow under 6-7 columns. Every additional column increases cognitive overhead during daily standups and makes the board harder to scan at a glance.

### Step 3: Step 3: Set Up Swimlanes and Quick Filters

Swimlanes add horizontal groupings to your board. Go to **Board Settings > Swimlanes** and choose a grouping strategy. The most common options are:

- **Stories** (default): Groups sub-tasks under their parent story, which is great for seeing progress on individual features.
- **Epics**: Groups all issues by their parent epic, useful during larger initiatives.
- **Assignees**: Shows each team member's work in their own lane — helpful for spotting overloaded individuals during standups.

Next, set up Quick Filters under **Board Settings > Quick Filters**. Create JQL-based filters for common views: `type = Bug` for a bugs-only view, `priority = Highest` for critical items, or `labels = blocked` for blocked items. These filters appear as toggle buttons above the board and let team members switch context instantly.

> **Pro tip:** Create a 'Flagged' quick filter using the JQL `flagged = impediment`. This surfaces flagged/blocked items immediately, which is invaluable during daily standups.

### Step 4: Step 4: Populate and Prioritize the Backlog

Switch to the **Backlog** view. This is where you and the product owner maintain the prioritized list of work. Create user stories, bugs, and tasks directly in the backlog. Each item should have:

- A clear summary ("As a [user], I want [goal] so that [reason]")
- Acceptance criteria in the description
- Story point estimates (added during [estimation sessions](https://tryhamster.com/skills/estimating-work-with-story-points))
- An epic assignment for higher-level tracking
- Appropriate labels and components for filtering

Drag items to reorder by priority — the top of the backlog represents the highest-priority work. During [backlog grooming](https://tryhamster.com/skills/grooming-the-product-backlog), the team refines items near the top to ensure they're sprint-ready. Items without estimates or clear acceptance criteria should be flagged and refined before they enter a sprint.

> **Pro tip:** Use Jira's bulk edit feature to add story points, labels, or epic links to multiple issues at once. Select issues with checkboxes, then use the context menu to batch-edit.

### Step 5: Step 5: Plan and Start a Sprint

In the Backlog view, you'll see a section at the top labeled with your next sprint. Drag items from the backlog into this sprint container. Jira will display the total story points being committed, which you should compare against your team's [velocity](https://tryhamster.com/skills/estimating-work-with-story-points) from previous sprints.

Set a sprint name that's meaningful (e.g., "Sprint 14 — Checkout Flow"), a start date, an end date (typically 1-2 weeks), and a sprint goal that summarizes the sprint's primary objective. The sprint goal is critical — it gives the team a shared focus and provides context during [daily standups](https://tryhamster.com/skills/running-daily-standups) and [sprint reviews](https://tryhamster.com/skills/conducting-sprint-reviews).

Click **Start Sprint** to activate it. The board view will now show only the items committed to the active sprint, and the burndown chart begins tracking from this moment.

> **Pro tip:** Never start a sprint without a sprint goal. If you can't articulate what the sprint is trying to achieve in one sentence, the scope likely needs tightening.

### Step 6: Step 6: Monitor Progress with Burndown and Velocity Charts

During the sprint, navigate to **Reports** from the left sidebar. The two most critical reports for Jira scrum board management are:

**Burndown Chart**: Shows remaining work (story points or issue count) plotted against the sprint timeline. The ideal trend line slopes downward from total committed points to zero by sprint end. If your actual line is above the ideal line, the team is behind. If scope was added mid-sprint, you'll see upward spikes — these are valuable data points for retrospectives.

**Velocity Chart**: Displays committed vs. completed story points across the last several sprints. This is your team's most reliable planning input. If you've consistently completed 30-35 points per sprint, committing to 50 next sprint is unrealistic. Share velocity data with the product owner to set expectations during [sprint planning](https://tryhamster.com/skills/planning-and-executing-sprints).

Review the burndown chart daily (ideally during standup) and the velocity chart at the end of each sprint during [retrospectives](https://tryhamster.com/skills/facilitating-sprint-retrospectives).

> **Pro tip:** If your burndown chart is flat for the first few days of every sprint and then drops sharply near the end, your team may be working on large stories that don't get marked done until late. Break stories into smaller slices to get smoother burndown curves.

### Step 7: Step 7: Complete the Sprint and Handle Unfinished Work

When the sprint end date arrives, go to the active sprint board and click **Complete Sprint**. Jira will present a summary showing completed issues and any incomplete items. For each incomplete item, you have three options:

- **Move to the next sprint**: The item carries over and counts against the next sprint's capacity. This is appropriate for items that are partially done.
- **Move to the backlog**: The item goes back to the backlog for re-prioritization. Use this for items that were de-scoped or are no longer urgent.
- **Leave in the current sprint**: Rarely used, but keeps the item associated with the closed sprint for reporting purposes.

After completing the sprint, review the Sprint Report under **Reports > Sprint Report**. This report shows the full picture: what was committed, what was completed, what was added mid-sprint, and what was removed. This data is essential input for your [sprint retrospective](https://tryhamster.com/skills/facilitating-sprint-retrospectives).

> **Pro tip:** Track your sprint completion rate (completed points / committed points) over time. A healthy team consistently completes 80-100% of committed work. If you're regularly below 70%, you're overcommitting — use velocity data to right-size your sprints.

## Best Practices

- Update card statuses in real time, not in batches at end-of-day. The board is only useful if it reflects current reality — stale boards erode trust and make standups performative.
- Keep your Jira scrum board columns to 5-7 maximum. Each column should represent a genuinely distinct workflow state where work can accumulate or get blocked. If two columns always have the same cards, merge them.
- Use epics and labels consistently across the backlog so Quick Filters and swimlanes actually work. Establish naming conventions early and enforce them during backlog grooming sessions.
- Review velocity trends over at least 3-4 sprints before using them for capacity planning. A single sprint's velocity is noise; the rolling average is the signal.
- Set Definition of Done criteria at the board level (documented in the sprint description or a pinned Confluence page) so every team member knows what 'Done' means when moving a card to the final column.
- Archive completed sprints regularly and clean up unused components, labels, and fix versions to prevent Jira from becoming a cluttered graveyard that slows down searches and reporting.

## Common Mistakes

- **Creating a Jira scrum board with default columns and never customizing the workflow** — Spend 30 minutes with your team mapping your actual process to board columns before the first sprint. A To Do → In Progress → Done board hides critical workflow stages like code review and QA where work frequently stalls.
- **Adding scope mid-sprint without tracking it, then blaming the team for not finishing everything** — When scope is added mid-sprint, Jira's burndown chart captures it as an upward spike. Use these spikes in retrospectives to quantify scope creep. If mid-sprint additions are frequent, address the root cause with the product owner rather than absorbing the chaos.
- **Using issue count instead of story points for burndown charts, leading to misleading progress signals** — Switch your burndown chart to story points (Board Settings > Estimation > Story Points). A sprint with 10 issues might have one 13-point epic and nine 1-point tasks — completing the small tasks first shows 90% progress by count but only 30% by effort.
- **Treating the Jira board as a project management surveillance tool rather than a team collaboration tool** — The board exists to help the team self-organize and make impediments visible. If team members are anxious about card movements being monitored, the board becomes a source of stress rather than transparency. Focus board reviews on flow and blockers, not individual performance.
- **Never closing or completing sprints, letting them run indefinitely with accumulating work items** — Complete every sprint on its scheduled end date, even if work is unfinished. Incomplete items move to the next sprint or back to the backlog. Velocity and burndown charts are meaningless without clean sprint boundaries.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/scrum/METHOD.md) — Scrum

## Related Skills

- [Defining Scrum Roles and Accountabilities](../defining-scrum-roles-and-accountabilities/SKILL.md)
- [Facilitating Sprint Retrospectives](../facilitating-sprint-retrospectives/SKILL.md)
- [Grooming and Refining the Product Backlog](../grooming-the-product-backlog/SKILL.md)
- [Planning and Executing Sprints](../planning-and-executing-sprints/SKILL.md)
- [Estimating Work with Story Points and Planning Poker](../estimating-work-with-story-points/SKILL.md)
- [Running Effective Daily Stand-Up Meetings](../running-daily-standups/SKILL.md)
- [Conducting Sprint Reviews and Demos](../conducting-sprint-reviews/SKILL.md)

---

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
