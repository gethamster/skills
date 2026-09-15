# Examples: Identifying and Mapping Input Metrics to Your North Star

## Example: Input Metric Map for a B2B Data Analytics Product

**Scenario:**

A B2B data analytics product has selected 'Weekly Active Analysts' as its North Star Metric. The company has teams responsible for growth, activation, core product experience, and enterprise expansion. They need to decompose the North Star into input metrics that align with their team structure.

**Walkthrough:**

The product team starts by writing the formula: `Weekly Active Analysts = New Activated Analysts (this week) + Returning Analysts (from previous weeks)`. They further decompose:

- **New Activated Analysts** = Signups × Onboarding Completion Rate × First-Value-Moment Rate (defined as creating their first saved query within 48 hours)
- **Returning Analysts** = Previous Active Analysts × Week-over-Week Retention Rate
- **Engagement Depth** = Queries Run per Analyst per Week (a quality signal — more queries means more value extracted)

After filtering for influenceability, predictiveness, and measurability, they select four input metrics:

1. **Onboarding Completion Rate** (Growth team owns) — % of signups who connect a data source and run their first query
2. **First-Value-Moment Rate** (Activation team owns) — % of onboarded users who save their first query or dashboard within 48 hours
3. **Week-1 Retention Rate** (Core Product team owns) — % of activated users who return in the second week
4. **Queries per Analyst per Week** (Core Product team co-owns with Enterprise team) — average depth of engagement

They validate with 9 months of data and find these four metrics explain ~78% of weekly variance in the North Star. The missing ~22% is attributed to seasonality and enterprise contract cycles. They set quarterly targets: improve onboarding completion from 45% to 55%, first-value-moment from 30% to 40%, week-1 retention from 60% to 65%, and maintain queries per analyst above 12.

## Example: Discovering a Missing Input Metric Through Backtesting

**Scenario:**

A self-service analytics platform initially identified three input metrics for its North Star ('Monthly Insights Shared'): new user activation, dashboard creation rate, and sharing feature adoption. During quarterly review, they noticed a 3-week period where all three input metrics were stable but the North Star dropped 18%.

**Walkthrough:**

The team investigated the anomaly and discovered that a cohort of power users — the top 10% who generated 40% of shared insights — had churned simultaneously. Their three input metrics didn't capture power-user health because they averaged across all users equally.

They added a fourth input metric: **Power User Retention Rate** (% of users sharing 5+ insights/month who remain active). This metric was assigned to a newly formed 'customer success' squad focused on high-value accounts. Backtesting with this fourth metric included, the model's explanatory power jumped from 65% to 82%. The lesson: input metric maps need to account for user segments, not just aggregate behaviors. For any data analytics product with a heavy-user concentration, segment-specific retention metrics are often the most predictive input.
