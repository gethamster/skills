# Examples: Building HEART Metric Dashboards for Product Teams

## Example: SaaS Project Management Tool HEART Dashboard

**Scenario:**

A product team at a mid-stage SaaS company (project management tool, 50K MAU) needs to build a HEART dashboard to drive their quarterly product manager roadmap planning. They use Amplitude for event tracking, Delighted for NPS surveys, and Looker Studio for dashboards.

**Walkthrough:**

**GSM Audit Results:**
- Happiness: NPS score (Delighted, monthly survey) → Available ✅
- Engagement: Weekly active projects per user (Amplitude) → Available ✅
- Adoption: Percentage of new signups who create their first project within 7 days (Amplitude) → Available ✅
- Retention: 30-day retention rate by cohort (Amplitude → BigQuery) → Available ✅
- Task Success: Percentage of task-creation flows completed without error (Amplitude) → Available ✅

**Dashboard Build:**
The team creates a Looker Studio dashboard connected to BigQuery (where Amplitude data is exported) and a Google Sheets connector for Delighted NPS data.

The summary row shows five KPI cards: NPS at 42 (green, threshold >30), Weekly Active Projects at 3.2 (yellow, threshold >4), 7-Day Activation at 61% (green, threshold >55%), 30-Day Retention at 68% (yellow, threshold >70%), Task Completion at 94% (green, threshold >90%).

The Engagement detail panel reveals that the 'yellow' status is driven entirely by the mobile segment—desktop users average 4.8 active projects while mobile users average 1.1. This insight directly influences the product manager roadmap: the team prioritizes mobile project creation UX for the next quarter.

**Review Cadence:** Weekly Slack snapshot to #product-metrics, monthly deep-dive in stakeholder review, quarterly threshold recalibration.

## Example: Consumer App HEART Dashboard for Stakeholder Review

**Scenario:**

A consumer fitness app (200K MAU) is preparing for a board review and needs to present UX health alongside business metrics. The PM builds a HEART dashboard in Tableau to complement the revenue dashboard the finance team already maintains.

**Walkthrough:**

The PM maps HEART dimensions to the fitness app context:
- Happiness: In-app satisfaction rating (1-5 stars after workout completion) → avg 4.1
- Engagement: Workouts completed per active user per week → avg 2.8
- Adoption: % of new users who complete their first workout within 48 hours → 38%
- Retention: Week-4 retention rate → 22%
- Task Success: % of workout-start flows completed without abandonment → 87%

The dashboard summary row immediately highlights two red zones: Adoption at 38% (threshold: >50%) and Retention at 22% (threshold: >30%). The detail panels show that Adoption drops significantly for users who skip the onboarding quiz, and Retention is weakest among users who don't set a recurring workout schedule.

During the board review, the PM presents the HEART dashboard alongside the revenue dashboard and draws a direct line: improving Adoption and Retention (the two red metrics) is the highest-leverage product manager roadmap priority because the revenue model depends on sustained engagement. The board approves investment in onboarding redesign and a habit-building notification system.

This example shows how HEART dashboards translate UX data into strategic roadmap arguments that non-product stakeholders can understand.
