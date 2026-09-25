# FAQ: Managing Scrum Boards in Jira

## How do I create a Jira scrum board?

Atlassian's documentation describes going to all boards, selecting Create board, choosing Create a Scrum board, and basing it on a new software space or one or more existing spaces. You need the Browse spaces permission. Team-managed spaces do not support creating additional boards directly, so Atlassian suggests creating a board from a saved filter in that case.

## Why does my Jira burndown chart look wrong?

One likely cause is column mapping. Atlassian says the burndown and velocity charts count a work item as Done only when its status is mapped to the right-most column, and both charts only include items that match the board's filter. Story points on subtasks are not included. If the guideline line is missing, the sprint may have been started before any items were added to it.

## How does Jira calculate velocity?

The velocity chart shows, for each recent sprint, the total estimate committed when the sprint started and the total completed when it ended. Atlassian describes velocity as the average of the completed estimates over recent sprints, based on the board's estimation statistic. Work added after the sprint starts is not included in the commitment total.

## What happens to unfinished work when I complete a sprint?

Jira asks where to move incomplete work items: the backlog, a future sprint that already exists, or a new sprint. All subtasks must be Done first. In Scrum, unfinished items return to the Product Backlog, so moving them to the backlog lets the Product Owner decide their new position.

## Does Scrum require a burndown chart?

No. The Scrum Guide says burn-downs, burn-ups and cumulative flow can be useful for forecasting but "do not replace the importance of empiricism." Some teams use Jira's burndown in the Daily Scrum as a quick visual check. The requirement is that the Developers can inspect their progress toward the Sprint Goal.
