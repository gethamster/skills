# Examples: Selecting the Right North Star Metric for Your Product

## Example: Selecting a North Star Metric for a B2B Project Management Tool

**Scenario:**

A product manager at a mid-stage B2B project management SaaS (think Asana or Monday.com competitor) needs to select a North Star Metric. The product serves teams of 5-50 people managing cross-functional projects. Current kpis product manager teams at this company track include DAU, number of tasks created, paid seats, and NPS.

**Walkthrough:**

**Step 1 — Value Statement**: 'Our product helps cross-functional teams deliver projects on time and on scope by centralizing task management, communication, and status visibility.'

**Step 2 — Candidates**: The team brainstorms 12 metrics including: weekly active users, tasks created per week, tasks completed per week, projects with status updates in last 7 days, teams with 3+ active members weekly, average project completion rate, weekly comments per project, paid seats, NPS, time-to-first-project, projects completed on deadline, and weekly active projects with at least one completed task.

**Step 3 — Scoring**: 'Weekly active projects with at least one completed task' scores highest. It measures value alignment (projects moving forward = value delivered), is a leading indicator (project activity predicts retention 4 weeks out), is actionable (product can improve task workflows, notifications, templates), is understandable ('active projects' is intuitive), is measurable (task_completed events exist), and correlates with revenue (teams with more active projects convert and expand seats).

**Step 4 — Stress Testing**: The perverse incentive test reveals a minor risk — teams could game it by completing trivial tasks. The team mitigates this by noting that the metric is 'projects with completed tasks,' not 'total tasks completed,' so the incentive is to keep projects moving, not inflate task counts. The decomposition test shows clear input metrics: new project creation rate, task creation rate per project, task completion rate, and team member activation rate.

**Step 5 — Validation**: Historical data shows that teams with 3+ active projects in week 1 retain at 72% after 90 days vs. 31% for teams with 0-1. Revenue correlation holds: quarters where this metric grew 10%+ saw ARR grow 8-12% the following quarter.

**Step 6 — Definition**: 'Count of unique projects where at least one task was marked complete by any team member (excluding account admins) in a rolling 7-day window. Excludes template projects and internal QA accounts. Source: task_completed event joined with projects table.'

**Result**: The team selects 'Weekly Active Projects' as their North Star Metric, defined precisely and validated with data.

## Example: A Consumer Fitness App Choosing Between Engagement and Outcome Metrics

**Scenario:**

A consumer fitness app (similar to Strava or Peloton) is debating between 'weekly workouts completed' and 'weekly active minutes' as its North Star Metric. The product manager has narrowed it down to these two finalists after the initial brainstorm and scoring.

**Walkthrough:**

**Stress-testing 'Weekly Workouts Completed'**: This metric is clean and understandable. But the perverse incentive test raises a flag: it incentivizes short, low-effort workouts. A user who logs five 2-minute stretches looks identical to one who completed five intense 45-minute sessions. The ceiling test is fine — the metric scales with user base growth.

**Stress-testing 'Weekly Active Minutes'**: This metric better captures intensity and depth of engagement. However, it has its own perverse incentive: it rewards long, slow activities over efficient high-intensity workouts. A 60-minute casual walk scores higher than a brutal 20-minute HIIT session, even though the HIIT user may be getting more value.

**Resolution**: The team realizes both metrics are flawed in isolation. They reframe the value statement: 'We help people build a consistent exercise habit.' Consistency, not duration or count, is the core value. They create a hybrid: 'Weekly users who completed 3+ workouts of any type' — measuring *habit formation* rather than volume. This passes all stress tests: it can't be gamed easily (you need three separate days), it correlates with 6-month retention (validated at 4.2x retention lift), and every team can influence it (content team creates varied short workouts, product team builds streak reminders, growth team optimizes re-engagement).

**Takeaway**: When your top candidates both fail stress tests, it often means you haven't precisely articulated the value. Revisit Step 1.
