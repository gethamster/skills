# Examples: Running Kanban Cadences and Feedback Loops

## Example: Five-person SaaS startup launching its first cadences

**Scenario:**

A small product team of five (two developers, one designer, one product manager, one QA) has been using a Kanban board for two months but has no structured meetings beyond ad-hoc Slack conversations. Cycle time is erratic, ranging from 2 to 14 days for similar-sized items, and the product manager keeps adding items to the board without checking capacity.

**Walkthrough:**

The team audits their current meetings and finds zero recurring cadences related to flow. They start with two: a daily 10-minute standup at 9:15 AM and a weekly 30-minute replenishment meeting on Mondays. For the standup, they project the board on a screen and the product manager walks it right to left. In the first week, this surfaces two items stuck in code review for five days that nobody had flagged.

For the replenishment meeting, the product manager brings a prioritized list of eight candidate items each Monday. The team checks WIP against their limit of six items in progress and pulls only enough to fill available slots. After six weeks, cycle time variability drops from a 2-14 day range to a 3-7 day range. The team then adds a monthly 60-minute service delivery review using a simple spreadsheet-generated cycle time chart.

Their first review reveals that items touching the legacy API consistently take 3x longer, leading to a targeted improvement action to create API wrapper documentation.

## Example: Mid-size B2B company with three delivery teams

**Scenario:**

An enterprise software company has three teams of 6-8 people each, all using Kanban boards. Each team runs daily standups, but there is no coordination between teams on shared dependencies, no replenishment discipline, and customer delivery dates are frequently missed. Management wants better predictability.

**Walkthrough:**

The Kanban coach starts by getting each team to add a replenishment meeting and standardize their standup format around board walks. Next, they introduce a monthly service delivery review per team, using cycle time scatterplots and throughput run charts generated from Jira. The first round of reviews reveals that Team A's throughput is stable at 12 items per week, Team B's is declining from 10 to 7, and Team C's cycle time has a bimodal distribution suggesting two different types of work with very different flow characteristics. For Team B, the review traces the throughput decline to a 40% increase in expedite items disrupting planned work.

This triggers a policy change: expedites are capped at 2 per week, with a formal escalation path for exceptions. After three months of team-level cadences, they add a biweekly operations review where one representative from each team reviews cross-team dependencies and blocked handoffs. Within two quarters, on-time delivery improves from 55% to 78% because systemic problems are surfaced in reviews rather than discovered at deadline time.

## Example: Marketing team running campaign delivery with Kanban

**Scenario:**

A marketing team of four manages campaigns, content pieces, and design requests on a Kanban board. Work ranges from 1-day social posts to 3-week campaign launches. The team lead spends most of their time answering 'when will this be done?' questions from stakeholders and feels overwhelmed by constant reprioritization requests.

**Walkthrough:**

The team implements three cadences. The daily standup at 9:30 AM takes 10 minutes and walks the board right to left. They discover that design reviews are consistently the bottleneck, with items averaging 4 days in that column. The weekly replenishment meeting on Monday mornings invites the VP of Marketing as the single prioritization authority.

New requests must be submitted by Friday EOD to be considered Monday. This eliminates mid-week reprioritization chaos. ' After two months, they add a monthly service delivery review. The first review shows that campaign work has a median cycle time of 11 days, but stakeholders expect 7.

Rather than pressuring the team to go faster, the review data enables an honest conversation about either reducing scope per campaign or adjusting stakeholder expectations. They agree to split large campaigns into two deliverable phases, which brings each phase's cycle time to 6 days and gives stakeholders earlier visibility into progress.

## Example: Large-scale e-commerce platform team adding service-level cadences

**Scenario:**

A platform engineering team of 15 has been running daily standups and weekly replenishment for over a year. Flow metrics are mature and automated. The team is stable but has plateaued: cycle time has not improved in six months, and leadership is asking whether the team's service mix (features vs. reliability work vs. tech debt) is correct.

**Walkthrough:**

The team adds two new cadences: a monthly service delivery review and a quarterly strategy review. For the service delivery review, the engineering manager prepares a dashboard showing cycle time by work type, throughput by category, and failure demand ratio (rework and bugs as a percentage of total throughput). The first review reveals that 30% of throughput is consumed by failure demand, far higher than the 15% the team assumed. This becomes the primary improvement focus.

For the quarterly strategy review, the VP of Engineering, product director, and team leads examine the work type mix against business goals. Data from the service delivery reviews shows that reliability work has been crowded out by feature requests, correlating with an increase in production incidents. They establish a class-of-service policy allocating a minimum of 20% capacity to reliability. After two quarters, failure demand drops to 18% and production incidents decrease by 35%, validating the policy.

The cadence system at this level produces strategic decisions that no amount of daily standups could surface.
