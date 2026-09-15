# Examples: Tracking Engagement and Retention Metrics at Scale

## Example: B2B Project Management Tool Engagement and Retention System

**Scenario:**

You're the PM for a B2B project management SaaS with 50,000 monthly active users. Leadership wants to understand whether the new 'timeline view' feature is driving deeper engagement and improving retention. You need to build a measurement system from scratch as part of your product manager roadmap.

**Walkthrough:**

**Step 1 — GSM Definition:**
- Engagement Goal: Users actively manage projects using multiple views weekly.
- Engagement Signal: Users switch between board view, list view, and timeline view.
- Engagement Metric: Average number of distinct views used per user per week; percentage of active users who use timeline view.
- Retention Goal: Users continue managing projects month over month.
- Retention Signal: Users create, edit, or comment on a task.
- Retention Metric: Monthly cohort retention at Week 4 and Week 12.

**Step 2 — Instrumentation:**
You implement events: `viewed_board`, `viewed_list`, `viewed_timeline`, `created_task`, `edited_task`, `commented_on_task`, `session_started`, `session_ended`. Each event includes `user_id`, `workspace_id`, `plan_tier`, and `timestamp`.

**Step 3 — Cohort Setup:**
You define weekly cohorts based on `first_task_created_date` (activation date, not signup date, since many users sign up but never activate). The retention-qualifying action is 'created, edited, or commented on at least one task.'

**Step 4 — Engagement Index:**
You compute: `engagement_score = (sessions_per_week × 1) + (tasks_modified × 2) + (views_used × 3)`. You find that users with scores above 15 have 3× better W12 retention than those below 5.

**Step 5 — Findings:**
After 6 weeks of data, you discover that users who try timeline view in their first week retain at 41% at W12, compared to 22% for users who only use board view. You also find that the DAU/MAU stickiness for timeline-view adopters is 0.31 vs. 0.18 for non-adopters.

**Step 6 — Action:**
You propose adding a guided 'Try Timeline View' prompt during onboarding, targeting users who have created 3+ tasks but haven't explored timeline view. You set a target of increasing W4 retention for new cohorts from 35% to 42% within two quarters.

## Example: Consumer Fitness App Retention Curve Diagnosis

**Scenario:**

You're a PM at a fitness app with strong downloads (200K/month) but concerning D30 retention of 8%. The CEO asks you to diagnose where users are dropping off and propose interventions grounded in HEART Framework metrics.

**Walkthrough:**

**Analysis Setup:**
You pull daily cohort retention data for the last 12 weeks. The retention curve shows: D1 = 42%, D3 = 28%, D7 = 16%, D14 = 11%, D30 = 8%. The steepest drop is between D1 and D3 (42% → 28%), suggesting users try the app once but don't form a habit in the critical first 72 hours.

**Segmentation:**
You segment by activation behavior:
- Users who completed a workout on D0: D7 retention = 31%
- Users who only browsed workouts on D0: D7 retention = 9%

This 3.4× difference identifies 'completing first workout' as the activation moment.

**Engagement Analysis:**
Among retained users at D30, you compute feature breadth: 78% use workout tracking + progress photos + social feed. Users who only track workouts (no social features) have D30 retention of 5% vs. 14% for multi-feature users.

**Recommendations:**
You propose two initiatives for the product manager roadmap: (1) Redesign onboarding to guide users through their first workout within 5 minutes of signup, targeting a D3 retention improvement from 28% to 36%. (2) Surface social features earlier in the user journey to increase feature breadth, targeting a D30 improvement from 8% to 12%. Both proposals include specific HEART metrics and review dates.
