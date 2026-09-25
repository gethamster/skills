# Examples: Managing Scrum Boards in Jira

## Setting up a board for a new Scrum Team

**Scenario:**

Illustrative scenario: a new Scrum Team of six moves from a spreadsheet to Jira. Its workflow has five statuses: To Do, In Progress, In Review, Ready for Release and Released. The Definition of Done includes release to production.

**Walkthrough:**

The Scrum Master creates a Scrum board from the team's existing company-managed space and checks that the filter covers only that space. In the column settings, To Do, In Progress and In Review get their own columns. Because the Definition of Done requires release, only Released goes in the right-most column; Ready for Release stays in its own column so it does not count as Done.

The team adds one quick filter for blocked items and chooses swimlanes by story, so subtasks sit under their parent during the Daily Scrum. The Product Owner ranks the refined items in the backlog, and the Developers add story point estimates to the parent items, since subtask estimates are not counted in the reports.

## A burndown that flatlines and then drops

**Scenario:**

Illustrative scenario: halfway through a two-week sprint, the burndown line has barely moved, and then it drops sharply on the last two days. This happens for several sprints in a row.

**Walkthrough:**

At the retrospective the team looks at the chart together. The pattern matches one Atlassian's tutorial describes: steep drops suggest work was not broken down into small pieces. The items are large, and each one only reaches the right-most column at the very end.

The team agrees to split stories so each can be finished within a few days, and to add a column constraint on In Review so reviews do not pile up. Over the next sprints the line moves more evenly, and the Daily Scrum can see problems earlier.

## Completing a sprint with unfinished work

**Scenario:**

Illustrative scenario: at the end of a sprint, two stories are in progress and one has an open subtask. The Scrum Master tries to complete the sprint and cannot.

**Walkthrough:**

The Scrum Master checks Atlassian's guidance and finds that all subtasks must be Done before a sprint can be completed. The open subtask was a leftover checklist item that was already covered, so a Developer closes it with a note.

When completing the sprint, Jira asks where the unfinished stories should go. The team moves them to the backlog, not into the next sprint, so the Product Owner can reorder them against everything else. In the next Sprint Planning, one of them is selected again and the other drops lower, because a customer need changed.
