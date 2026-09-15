# Examples: Managing Scrum Boards in Jira

## Example: Setting Up a Jira Scrum Board for a New Mobile Development Team

**Scenario:**

A newly formed mobile development team of 6 (4 developers, 1 QA engineer, 1 designer) is starting their first sprint. They need a Jira scrum board configured for their specific workflow, which includes design handoff, development, code review, QA testing, and release staging.

**Walkthrough:**

The Scrum Master creates a new Scrum project called 'Mobile App v2' (key: MAV2). In Board Settings > Columns, they replace the default three columns with six: **Backlog → Design Review → In Development → Code Review → QA → Ready for Release → Done**. They map the corresponding workflow statuses to each column.

For swimlanes, they choose 'Epics' since the team is working across three major epics: Onboarding, Payments, and Notifications. They create Quick Filters for `type = Bug`, `assignee = currentUser()`, and `flagged = impediment`.

The product owner populates the backlog with 45 user stories across the three epics, each with acceptance criteria and story point estimates from a planning poker session. For Sprint 1, the team commits to 28 story points based on comparable team velocities in the organization.

During the sprint, the team reviews the burndown chart at each standup. By day 3, the burndown shows they're slightly behind the ideal line. The board reveals three items stuck in Code Review — a bottleneck caused by only one senior developer doing reviews. They adjust by pairing junior developers for reviews, clearing the bottleneck by day 5.

At sprint end, they complete 24 of 28 points (86% completion rate). The remaining 4-point story moves to Sprint 2. The Sprint Report shows no mid-sprint scope additions, confirming good discipline. They use this data in their retrospective to discuss the code review bottleneck and decide to implement a review rotation policy.

## Example: Using Velocity Data to Improve Sprint Planning Accuracy

**Scenario:**

A team has been running sprints for 8 weeks (4 two-week sprints) but consistently overcommits, completing only 60-70% of planned work. The product owner is frustrated because delivery forecasts keep slipping.

**Walkthrough:**

The Scrum Master pulls up the Velocity Chart from the Jira scrum board reports. The data shows:

- Sprint 1: Committed 40 pts, Completed 28 pts
- Sprint 2: Committed 42 pts, Completed 30 pts
- Sprint 3: Committed 38 pts, Completed 25 pts
- Sprint 4: Committed 35 pts, Completed 26 pts

The average velocity is 27.25 points, but the team has been committing 35-42 points. The Scrum Master presents this chart at the Sprint 5 planning session and proposes committing to no more than 28 points — the rolling average rounded slightly up for aspirational stretch.

For Sprint 5, the team commits to 27 points. They also examine why completed velocity is low: the Sprint Reports reveal that 3-5 points of unplanned bug fixes get added each sprint. They create a 5-point buffer in future sprint plans for incoming bugs.

Sprint 5 results: Committed 27 pts, Completed 29 pts (including 4 points of mid-sprint bugs). The team completes everything committed for the first time, and the product owner can confidently forecast delivery timelines based on the ~28-point sustainable velocity.
