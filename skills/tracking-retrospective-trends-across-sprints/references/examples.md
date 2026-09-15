# Examples: Tracking 4Ls Trends Across Multiple Sprints

## Example: Identifying a Chronic Deployment Bottleneck

**Scenario:**

A six-person Scrum team has been running 4Ls retrospectives for 8 sprints. The Scrum Master notices that 'deployment' keeps coming up but wants to understand whether it's truly systemic or just a few vocal team members.

**Walkthrough:**

After logging all 8 sprints of retrospective data, the Scrum Master creates a frequency heatmap. The 'deployment' tag appears in the Lacked column in 7 of 8 sprints, with an average of 3.2 items per sprint referencing deployment friction. Two action items were created in sprints 2 and 5 — 'investigate CI pipeline speed' (completed, sprint 3) and 'document deployment runbook' (still open). Despite the first action item being completed, the Lacked frequency for deployment actually increased in sprints 4-8, from an average of 2.5 to 4.0 items.

The Scrum Master presents this to the team with a simple line chart. The visual makes it immediately clear: the CI pipeline fix was necessary but insufficient. The team discusses further and realizes the core issue is a manual approval gate requiring a specific DevOps engineer who is shared across three teams. This is a structural problem that no sprint-level action item can solve. The Scrum Master escalates to the engineering manager with the trend data, proposing either dedicated DevOps support or self-service deployment capabilities. The data — 7 of 8 sprints, 26 total items, 2 failed interventions — makes the case far more compelling than a single retrospective complaint.

## Example: Proving That a Process Change Worked

**Scenario:**

A product team introduced pair programming after trend analysis showed 'knowledge sharing' and 'code review delays' as persistent Lacked/Longed For themes across 5 sprints. Three sprints after the change, leadership asks whether the investment in pair programming time was justified.

**Walkthrough:**

The team pulls their trend data covering sprints 1-5 (before pair programming) and sprints 6-8 (after). Before the change, 'knowledge sharing' appeared as a Lacked item in 4 of 5 sprints, and 'code review' appeared in all 5. After introducing pair programming, 'knowledge sharing' shifted categories — it now appears in the Liked column in 2 of 3 sprints and disappeared from Lacked entirely. 'Code review' items in Lacked dropped from an average of 2.8 per sprint to 0.7.

Simultaneously, 'Learned' items related to technical skills increased by 40%, suggesting active knowledge transfer. The team creates a before/after comparison chart and shares it in the next sprint review with stakeholders. The concrete data demonstrates ROI on pair programming time and builds organizational support for continuing the practice.
