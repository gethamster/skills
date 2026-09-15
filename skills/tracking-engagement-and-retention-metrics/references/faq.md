# FAQ: Tracking Engagement and Retention Metrics at Scale

## What is the difference between engagement and retention in the HEART Framework?

Engagement measures the depth and frequency of user interaction within a given time period (e.g., sessions per week, features used per session). Retention measures whether users come back over time, typically expressed as the percentage of a cohort that returns after D1, D7, D30, etc. Engagement is about intensity of use; retention is about longevity of use.

## How do engagement and retention metrics fit into a product manager roadmap?

Engagement and retention metrics provide the quantitative foundation for roadmap prioritization. They help PMs identify which features drive lasting value, diagnose where users drop off, and set measurable targets for product initiatives. A data-informed product manager roadmap ties every major initiative to an expected improvement in these metrics.

## What tools do product managers use to track engagement and retention at scale?

Common tools include Amplitude, Mixpanel, and Heap for behavioral analytics; Segment or Rudderstack for event collection; BigQuery, Snowflake, or Redshift for data warehousing; and dbt for transformation pipelines. Many teams also use Looker or Tableau for dashboarding. The choice depends on team size, budget, and technical maturity.

## How often should I review engagement and retention metrics?

Review engagement metrics weekly to catch short-term trends and anomalies. Review retention cohort curves bi-weekly or monthly, since retention data needs time to mature—you can't evaluate D30 retention until 30 days have passed. Run deeper segmented analyses quarterly to inform roadmap planning.

## What is a good DAU/MAU ratio for a SaaS product?

For a daily-use SaaS product like Slack or a CRM, a DAU/MAU of 0.30-0.50 is strong. For tools used weekly (e.g., project management), WAU/MAU of 0.50-0.70 is a better benchmark. The 'right' ratio depends entirely on the natural usage frequency of your product category.

## How do I track retention if my product has a long usage cycle?

Use longer cohort windows that match your product's natural cadence. For a quarterly tax tool, measure retention at 90-day and 365-day intervals. For a monthly budgeting app, use monthly cohorts. The key is choosing a retention window that reflects when a user *should* return based on your product's value proposition.
