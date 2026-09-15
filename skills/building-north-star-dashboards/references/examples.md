# Examples: Building Dashboards to Track Your North Star and Input Metrics

## Example: SaaS Collaboration Tool — Weekly Active Collaborators Dashboard

**Scenario:**

A B2B SaaS company building a collaborative document editor has chosen 'Weekly Active Collaborators' (users who edit or comment on a shared document at least once per week) as their North Star Metric. Their input metrics are: (1) New Team Signups, (2) Activation Rate (% of new teams creating their first shared doc within 7 days), (3) Collaboration Frequency (average shared doc interactions per active user per week), and (4) Team Retention (% of teams with ≥1 active collaborator month over month).

**Walkthrough:**

The team builds a Looker dashboard structured as follows:

**Top section:** A large KPI tile showing 'Weekly Active Collaborators: 42,300' with a green arrow indicating +3.2% WoW. Next to it, an 8-week trend line with a dotted target line at 50,000 (their quarterly goal).

**Middle section:** Four equal-width panels, one per input metric. Each shows current value, WoW change, and a sparkline trend. New Team Signups shows 1,840 (+5.1%), Activation Rate shows 38% (-2pp), Collaboration Frequency shows 4.2 interactions/week (+0.1), and Team Retention shows 82% (flat).

**Bottom section:** A breakdown of Weekly Active Collaborators by company size segment (SMB, Mid-Market, Enterprise) and by geographic region. An annotation marks the date they launched a new real-time commenting feature.

The dashboard reveals that despite growing signups, the dip in Activation Rate is partially offsetting the North Star growth. The product team investigates and finds that the new onboarding flow for teams with 10+ members is confusing. They flag this for the next sprint. The weekly Slack summary reads: 'WAC up 3.2% WoW to 42.3K. Signups strong but Activation Rate down 2pp—investigating onboarding for larger teams. Collaboration Frequency stable. On track for Q3 target if activation recovers.'

This is a data analytics product approach in action: the dashboard didn't just display data—it surfaced a specific, actionable insight that connected to the product roadmap.

## Example: Consumer Fitness App — Daily Active Exercisers Dashboard

**Scenario:**

A consumer fitness app has defined 'Daily Active Exercisers' (users who log at least one workout per day) as their North Star Metric. Input metrics include: (1) Daily New Downloads, (2) Day-1 Workout Completion Rate, (3) Weekly Workout Frequency among retained users, and (4) 30-Day Retention Rate.

**Walkthrough:**

The team uses Amplitude to build their dashboard. Since this is a consumer product with high daily variance, they display the North Star as a 7-day rolling average to smooth out weekend vs. weekday fluctuations. A secondary small chart shows raw daily values for pattern recognition.

The input metrics are arranged in funnel order (Downloads → Day-1 Completion → Frequency → Retention) to visually represent the user journey. Each panel uses a consistent color scheme: green if WoW trend is positive, yellow if flat, red if declining.

They set up two alerts: one if the 7-day rolling average of Daily Active Exercisers drops below 85% of the prior week's average, and one if Day-1 Workout Completion Rate drops below 25% (their critical activation threshold). They configure these to post to a #metrics-alerts Slack channel monitored by product and growth leads.

During the first month, the Day-1 alert fires after a new app update introduces a bug in the workout player on Android. The team catches it within hours instead of days because the alert was triggered, rolls back the update, and avoids what would have been a week of suppressed activation. The monthly deep-dive reveals that 30-Day Retention is strongest among users who complete 3+ workouts in their first week, leading to a new product hypothesis that becomes a roadmap item—demonstrating the link to connecting the North Star to product roadmap decisions.
