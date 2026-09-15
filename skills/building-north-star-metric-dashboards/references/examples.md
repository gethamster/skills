# Examples: Building Dashboards to Track Your North Star and Inputs

## Example: B2B SaaS Collaboration Tool Dashboard

**Scenario:**

A technical product manager at a 50-person SaaS company has defined their North Star Metric as 'Weekly Teams with 3+ Active Collaborators'—measuring the number of teams where at least three members performed a meaningful collaboration action (commenting, sharing, or co-editing) in the past seven days. They've identified four input metrics: new team activation rate, weekly collaboration frequency per team, feature adoption breadth, and churn-risk score. They use Looker connected to a BigQuery data warehouse.

**Walkthrough:**

The PM builds a Looker dashboard with the North Star as a single-number tile at top-center, showing 1,247 teams this week with a +4.2% week-over-week trend in green. Below that, four input metric tiles show: new team activation at 34% (yellow, target is 40%), weekly collaboration frequency at 8.3 actions/team (green), feature adoption breadth at 3.1 features/team (green), and churn-risk score at 12% (red, up from 9%). A time-series chart below shows all five metrics over 12 weeks with a target line for the North Star at 1,400 by quarter end. Clicking the churn-risk tile opens a drill-down showing churn risk by company size and signup cohort, revealing that teams from the Q4 marketing push have 2x higher churn risk—immediately surfacing a retention problem for the team to investigate.

## Example: Consumer Health App Dashboard

**Scenario:**

A technical product manager at a health and fitness startup has set 'Weekly Users Who Log 3+ Healthy Meals' as their North Star Metric. Input metrics include daily app opens, meal log completion rate, recipe save rate, and grocery list usage. The team uses Amplitude for product analytics and exports aggregated data to a Metabase dashboard for broader company visibility.

**Walkthrough:**

The PM configures Amplitude charts for real-time input metric monitoring and builds a Metabase dashboard for the weekly company review. The Metabase dashboard opens with a large card: '23,400 users logged 3+ meals this week' with a sparkline showing the 8-week trend. Four smaller cards beneath show each input metric with trend arrows. The PM adds a cohort breakdown chart showing the North Star metric segmented by user tenure (0-30 days, 31-90 days, 90+ days), revealing that 90+ day users have a 62% meal-logging rate while 0-30 day users are at only 18%. This insight drives the team to prioritize new-user onboarding improvements. A weekly Slack digest auto-posts every Monday morning with the dashboard screenshot and a one-line summary generated from a simple template: 'North Star: 23.4K (+6% WoW). New user logging remains below target—onboarding experiment launching Thursday.'

## Example: Marketplace Platform Executive Dashboard

**Scenario:**

A technical product manager at a two-sided marketplace (connecting freelance designers with businesses) needs a dashboard for both the product team and the executive team. The North Star Metric is 'Weekly Completed Projects with 4+ Star Rating.' Input metrics are new buyer activation, designer response time, project match rate, and repeat buyer rate. The data lives in Snowflake and the team uses Tableau.

**Walkthrough:**

The PM builds two connected dashboards. The executive dashboard shows just four elements: the North Star headline number (892 projects, +2.1% WoW), a 12-week trend chart with the quarterly target line at 1,100, a supply/demand balance indicator (designer availability vs. buyer requests), and a single table showing each input metric with its current value, target, and status color. The product team dashboard links from each input metric on the executive view and adds breakdowns by project category, geographic market, and designer tier. The PM configures Tableau alerts: if the North Star drops more than 5% week-over-week or designer response time exceeds 4 hours, a Slack notification fires to the #product-metrics channel. After the first month, the PM notices the executive team only looks at the dashboard during Monday leadership meetings, so they add a scheduled PDF email that arrives at 8 AM Monday with a snapshot—meeting the audience where they are rather than expecting them to visit Tableau.
