# Examples: Deciding What to Do: Prioritizing Retrospective Action Items

## Example: A Backend Team Prioritizes After a Painful Deploy

**Scenario:**

A backend team of 6 has just completed the 'Generate Insights' phase and has 8 improvement ideas on the board, ranging from 'automate database migration scripts' to 'pair program more often' to 'get the PM to write clearer acceptance criteria.' The facilitator has 15 minutes to guide the team through deciding what to do.

**Walkthrough:**

The facilitator first clusters the 8 items, finding that 'automate DB migrations' and 'add rollback scripts' are related — she groups them under 'Deploy Safety.' This leaves 7 distinct clusters.

She gives each person 3 dot votes. Results: 'Deploy Safety' (9 dots), 'Clearer acceptance criteria' (5 dots), 'Pair programming' (4 dots), everything else (0–2 dots).

She takes the top 3 through the feasibility filter:
- **Deploy Safety**: Within control? Yes. One sprint? The full automation isn't, but 'write rollback scripts for the 3 most critical migrations' is. Definable done? Yes — scripts exist and have been tested.
- **Clearer acceptance criteria**: Within control? Partially — it requires PM behavior change. The team reframes it as 'Create an AC template and propose it to the PM by Wednesday.'
- **Pair programming**: Within control? Yes. But the team realizes they can only realistically commit to 2 items this sprint.

Final commitments:
1. 'Marcus will write rollback scripts for the auth, billing, and user migrations by end of Sprint 12. Done = scripts in repo and dry-run tested in staging.'
2. 'Priya will draft an acceptance criteria template by Wednesday and schedule a 15-minute review with the PM. Done = template shared and PM feedback received.'

Pair programming goes to the parking lot. Both owners verbally confirm. The facilitator screenshots the board and posts it to the team Slack channel.

## Example: A Cross-Functional Team Uses the Sprint Retrospective Format with Effort/Impact Matrix

**Scenario:**

A cross-functional product team is struggling with retrospective follow-through. They've been averaging 5–6 action items per retro and completing only 1. The Scrum Master decides to change the sprint retrospective format for the 'Decide What to Do' phase.

**Walkthrough:**

Instead of simple dot voting, the Scrum Master introduces a 2x2 effort/impact matrix. After the team generates 6 improvement ideas, she draws a grid on the whiteboard: high impact / low effort (top-left), high impact / high effort (top-right), low impact / low effort (bottom-left), low impact / high effort (bottom-right).

The team collaboratively places each item on the grid. Two items land in the 'high impact, low effort' quadrant: 'Add a PR description template to GitHub' and 'Move standup from 9am to 9:30am.' One item — 'Refactor the notification service' — lands in high impact but also high effort.

The Scrum Master proposes committing only to the two quick wins this sprint. The team agrees. For the refactor, they create a spike story: 'Anika will spend 2 hours documenting the current notification service architecture and identifying the smallest valuable refactor. Done = document in Confluence by Friday.'

This sprint retrospective format shift results in 3/3 action items completed — the team's first 100% completion rate in months. The visible success builds momentum for the next retro.
