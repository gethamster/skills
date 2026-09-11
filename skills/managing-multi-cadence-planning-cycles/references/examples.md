# Examples: Managing Different Planning Cadences Across GIST Layers

## Example: Early-Stage SaaS Startup (8-Person Team)

**Scenario:**

A B2B SaaS startup with one product team of 8 people (PM, designer, 4 engineers, 1 QA, 1 data analyst) is three months post-launch. The product has 200 paying customers and is still searching for strong product-market fit. Strategy shifts frequently as the team learns from early customers. The team previously used a loose Kanban board with no formal planning layers.

**Walkthrough:**

The senior product manager sets goals on a quarterly basis but adds a lightweight monthly goal check-in given the early stage uncertainty. Two goals are set for Q2: improve activation rate from 30% to 50%, and reduce churn from 8% to 5% monthly. Ideas are reviewed weekly in a 30-minute Thursday session because customer feedback volume is high and the team is learning rapidly. The idea bank contains 24 ideas after two weeks of customer interviews.

Step-projects run in 1-week sprints because the team can build and test small changes quickly. The first step-project is a 5-day experiment adding an onboarding checklist to test whether guided activation improves the rate. Tasks are managed via a daily 10-minute async standup in Slack. The cadence calendar fits on a single Notion page.

After two sprints, the team discovers that weekly idea reviews are overkill because the bank does not grow that fast, so they shift to biweekly. The onboarding checklist step-project produces a 12% activation improvement in one week, validating the idea and triggering a follow-up step-project to expand the checklist. The quarterly goal review confirms both goals are on track, and no goal changes are needed.

## Example: Mid-Size B2B Platform (Three Product Teams)

**Scenario:**

A B2B platform company has three product teams, each with a PM, designer, and 4-6 engineers. The company has 2,000 customers and a clear product-market fit. Each team owns a different product area (core platform, integrations, analytics). The VP of Product wants to adopt GIST across all three teams but is concerned about cross-team alignment.

Previously, each team ran independent two-week sprints with a quarterly OKR cycle.

**Walkthrough:**

The VP of Product runs a company-level goal-setting session annually, producing 4 annual goals. Each team then derives team-level quarterly goals that ladder up to the annual goals. Quarterly goal reviews happen in the first week of each quarter with all three PMs and the VP, lasting 2 hours. Idea reviews are team-specific and run biweekly, staggered so the VP can attend one per week without conflicts.

Team A reviews on Week 1 Monday, Team B on Week 2 Monday, Team C on alternating Wednesdays. Step-projects run in 2-week sprints aligned across all three teams to simplify cross-team dependencies. Sprint boundaries fall on the same Friday for all teams. Tasks are managed daily within each team using Linear.

The cadence calendar is shared in Confluence. The cascade rule that matters most here is cross-team: if Team A's goal changes affect Team B's integration work, the update propagates at the next biweekly idea review, not immediately. After one quarter, the teams find that 2-week sprints work for the core platform team but are too long for the integrations team, which deals with many small partner requests. The integrations team shifts to 1-week sprints while the other two teams stay at two weeks.

The system accommodates this because each team's sprint cadence is independent.

## Example: B2C Mobile App (Growth-Stage, 20-Person Product Org)

**Scenario:**

A consumer mobile app with 500,000 monthly active users and a 20-person product organization split into four squads: growth, engagement, monetization, and platform. The company runs rapid A/B tests and ships multiple experiments per week. The challenge is maintaining strategic alignment while preserving the speed that got them to this point. The current system is ad-hoc: each squad picks experiments based on intuition and available data.

**Walkthrough:**

The Head of Product sets two annual goals (grow MAU to 1M, increase ARPU by 40%) and each squad derives quarterly goals. The growth squad's Q3 goal is to increase new user Day-7 retention from 25% to 35%. Goals are reviewed quarterly in a half-day session. Idea reviews run weekly for each squad because the high experiment velocity generates new ideas constantly.

The growth squad's idea bank holds 40+ ideas at any time, scored using ICE. Step-projects here are very short: 3-5 day experiments, each testing one variable. The growth squad runs two step-projects per week concurrently because they have the engineering capacity and the statistical framework to evaluate results quickly. Tasks are managed in real-time through Linear and daily 10-minute standups.

The cadence calendar shows a dense weekly pattern: Monday idea review, Tuesday-Thursday execution, Friday step-project review and next week planning. The cascade rule that matters most is the kill criterion: any step-project that does not show a statistically significant result within one week is stopped, and the idea is either archived or reformulated. After one quarter, the monetization squad realizes their experiments take longer to produce statistically significant revenue data and extends their step-project cadence to 2 weeks. The quarterly cadence review captures this adjustment and documents the reasoning for future reference.

## Example: Enterprise Software Division (Large Organization, Regulated Industry)

**Scenario:**

A financial services company's internal product division builds tools for 5,000 internal users across compliance, trading, and operations. The division has 50 people across 6 product teams. Regulatory constraints mean that some changes require compliance review cycles of 2-4 weeks. The previous planning process was a waterfall-inspired quarterly roadmap that was typically outdated by week 3.

**Walkthrough:**

The senior product manager leading the transformation sets goals semi-annually because the regulatory environment and internal stakeholders require longer strategic stability. Each team derives quarterly goals. Goal reviews happen every 6 months with a mid-quarter lightweight check-in to flag risks. Idea reviews run biweekly, but include a compliance liaison who flags ideas requiring regulatory review early, before they enter step-project phase.

This prevents the common failure of discovering compliance requirements mid-experiment. Step-projects run in 2-week sprints, but the team adds a 'compliance buffer' sprint type: when a step-project requires compliance review, the team queues the review during the current sprint and works on a different step-project in parallel until approval arrives. Tasks are managed daily. The cadence calendar includes a compliance review track as a fifth layer, running on its own 2-4 week cadence that the team cannot control but must plan around.

The key cascade rule is that no step-project requiring compliance approval enters the sprint without a pre-filed compliance request. After two quarters, the team finds that the compliance buffer approach reduced blocked time by 60% compared to the old waterfall system, because they always have a secondary step-project ready to execute during review periods.
