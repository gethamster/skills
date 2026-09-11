# FAQ: Managing Scrum Boards in Jira

## What is the difference between a Jira scrum board and a Kanban board?

A Jira scrum board organizes work into time-boxed sprints with a defined start and end date, a backlog, and sprint-specific reports like burndown charts. A Kanban board uses continuous flow without sprints, focusing on WIP limits and cycle time. Choose Scrum when your team needs structured iteration cadences; choose Kanban for ongoing support or maintenance work.

## How do I add a burndown chart to my Jira scrum board?

Burndown charts are built into every Jira scrum board automatically. Navigate to your board, click 'Reports' in the left sidebar, and select 'Burndown Chart.' It will display data for your active or most recently completed sprint. Ensure your estimation statistic is set to Story Points under Board Settings > Estimation for the most accurate chart.

## Can multiple teams share the same Jira scrum board?

Technically yes, but it's not recommended. Each team should have its own scrum board with its own backlog and velocity tracking. If multiple teams work in the same Jira project, create separate boards using board-level JQL filters (e.g., filtering by team label or component). Shared boards make velocity meaningless and sprint planning chaotic.

## How many story points should I commit to in a Jira scrum sprint?

Use your team's velocity chart as the guide. Look at the average completed story points over the last 3-5 sprints and commit to that average or slightly below. Never use committed points as the baseline — use completed points. If you're a new team without history, start conservatively and let 3-4 sprints establish your baseline.

## How do I handle bugs found during a sprint on the Jira scrum board?

If the bug is related to work in the current sprint, add it to the active sprint and link it to the parent story. If it's unrelated, add it to the backlog for prioritization in the next sprint. Track mid-sprint additions in your burndown chart to quantify disruption, and discuss recurring patterns during sprint retrospectives.

## What Jira scrum board reports should I review during a sprint retrospective?

Review three reports: the Sprint Report (shows committed vs. completed work, plus scope changes), the Burndown Chart (reveals daily progress patterns and scope creep spikes), and the Velocity Chart (shows multi-sprint trends). Together, these give your retrospective concrete data instead of just opinions about what went well or poorly.
