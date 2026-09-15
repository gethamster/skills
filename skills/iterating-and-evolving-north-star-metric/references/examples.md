# Examples: Iterating and Evolving Your North Star Metric Over Time

## Example: B2B SaaS Platform Pivoting from User Growth to Engagement

**Scenario:**

A project management SaaS company has used 'Weekly Active Users' as its North Star Metric for two years. They've grown from 10K to 200K WAU, but their churn rate has climbed from 4% to 8% monthly, and customer satisfaction has declined. The senior product manager notices that teams are optimizing for signup flows and trial extensions rather than deep product adoption. Leadership is discussing a strategic pivot toward enterprise accounts with higher retention.

**Walkthrough:**

The senior product manager runs the quarterly health check and identifies two decay signals: WAU is growing but churn is accelerating, and teams are gaming the metric through re-engagement emails rather than improving the core experience. Diagnosis reveals the root cause: the metric rewarded breadth (more users) when the strategy now demands depth (retained, engaged users). She generates three candidates: 'Weekly Active Teams with 3+ Collaborators,' 'Projects with Activity in Last 7 Days,' and 'Weekly Core Actions per Active User.' After a 5-week parallel validation, 'Weekly Active Teams with 3+ Collaborators' shows the strongest correlation with 90-day retention (r=0.78) and responds to the product improvements the team is already shipping. She presents the parallel data to the leadership team, gets VP of Product sponsorship, and executes a 6-week phased transition. Three months later, churn has stabilized at 5.5% and the team is building features that drive collaborative usage rather than individual signups.

## Example: Consumer App Evolving After Adding a Monetization Layer

**Scenario:**

A fitness tracking app with 2M users has used 'Weekly Workouts Logged' as its NSM since launch. The company recently launched a premium subscription tier with personalized coaching and nutrition planning. The senior product manager realizes the free-tier metric no longer captures the value exchange for the growing premium segment, which generates 80% of revenue but represents only 15% of users.

**Walkthrough:**

During a quarterly review, the senior product manager flags that 'Weekly Workouts Logged' treats a free user logging a jog the same as a premium user completing a coached strength program with meal tracking—even though the latter represents dramatically more value delivered and received. He diagnoses this as a product maturity issue: the app has evolved from a logging tool to a coaching platform, but the metric still reflects the logging era. He proposes two candidates: 'Weekly Premium Feature Engagements' and 'Weekly Users Completing Personalized Plans.' Running both in parallel for 6 weeks reveals that 'Weekly Users Completing Personalized Plans' correlates with both premium retention (r=0.82) and free-to-paid conversion (r=0.61), making it a unified metric that serves both segments. He presents the case with specific data showing how the old metric would have led to prioritizing basic logging improvements over coaching features—directly contradicting the company's premium strategy. The transition takes 8 weeks, and the team aligns roadmap priorities around plan completion, leading to a 22% increase in premium conversions the following quarter.

## Example: Marketplace Discovering Metric Gaming After Two Years

**Scenario:**

An online freelance marketplace has tracked 'Monthly Transactions Completed' as its NSM. After two years, the metric is at an all-time high, but average transaction value has dropped 40%, customer complaints about quality have tripled, and top freelancers are leaving the platform. The senior product manager suspects the metric is being gamed by optimizing for transaction volume at the expense of transaction quality.

**Walkthrough:**

The senior product manager creates an NSM Signal Log entry documenting the divergence: transactions up 35% year-over-year, but revenue per transaction down 40%, support tickets up 200%, and top-tier freelancer churn up from 5% to 18% annually. Diagnosis confirms metric gaming: the growth team has been incentivizing low-value micro-tasks and splitting larger projects into multiple smaller transactions to inflate the count. The metric is technically going up, but the marketplace is hollowing out. She proposes 'Monthly Gross Marketplace Value from Repeat Buyers' as the replacement—it captures both transaction quality (value) and customer satisfaction (repeat behavior). During the 5-week validation, this metric correlates strongly with freelancer retention (r=0.73) and buyer NPS (r=0.69). The transition requires significant organizational work because the growth team's OKRs are deeply tied to transaction count. She runs a workshop with growth, marketplace quality, and freelancer success teams to collaboratively redesign their goals around the new metric. Six months post-transition, average transaction value recovers by 25% and top-tier freelancer churn drops to 9%.
