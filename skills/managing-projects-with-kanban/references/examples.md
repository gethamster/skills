# Examples: Managing Projects with Kanban

## Example: SaaS Feature Launch for a Small Team (4 people)

**Scenario:**

A product team of 4 (1 designer, 2 developers, 1 QA) needs to ship a new billing dashboard within 6 weeks. The project has 8 major features, and the team has never used Kanban for project management before. They have been using ad-hoc task lists and weekly status meetings.

**Walkthrough:**

The team decomposes the 8 features into 38 work items, each sized to 1-3 days. They set up a board with 5 columns: Backlog, Ready, In Development (WIP limit: 3), In Review (WIP limit: 2), Done. Pull policies require that items in "Ready" have acceptance criteria and linked design mockups. The designer works ahead, feeding the Ready column so developers never starve.

In week 1, the team completes 6 items, establishing a baseline throughput. By week 2, throughput stabilizes at 7 items per week. 5 weeks, giving them a comfortable buffer. In week 3, they notice the Review column is consistently full, blocking developers from pulling new work.

The retrospective identifies that the QA engineer is also handling support tickets. They adjust by having developers do peer code review first, then QA does acceptance testing, splitting Review into two sub-columns. Throughput increases to 9 items per week. They deliver the billing dashboard in week 5, one week ahead of the 85th percentile forecast.

## Example: Marketing Campaign Project for a Cross-Functional Team (8 people)

**Scenario:**

A marketing team of 8 (2 copywriters, 2 designers, 1 video producer, 1 social media manager, 1 email marketer, 1 project lead) is running a product launch campaign with 60+ deliverables across email, social, blog, video, and paid channels. The campaign spans 4 weeks from kickoff to launch day. Different team members work at very different speeds and have competing priorities from other projects.

**Walkthrough:**

The project lead decomposes the campaign into 64 cards grouped by channel using swim lanes (Email, Social, Blog, Video, Paid). The board has 6 columns: Backlog, Briefed, In Production (WIP limit: 10 across all lanes), In Approval (WIP limit: 4), Scheduled, Published. Pull policies for "In Production" require a completed creative brief with messaging, target audience, dimensions, and deadline. The team runs a 20-minute replenishment meeting every Monday and Thursday.

In week 1, throughput is 12 items, but 5 are stuck in Approval because the VP of Marketing is the bottleneck. The team changes the pull policy to allow the project lead to approve standard assets, escalating only brand-new messaging to the VP. Approval throughput doubles. By week 3, 50 of 64 items are in Scheduled or Published.

The remaining 14 items are all video content, which has a longer production cycle. The team identifies this bottleneck early because the Video swim lane's cycle time (6 days average) is triple the other lanes (2 days average). They bring in a freelance editor to increase video throughput. All 64 deliverables are published by launch day.

## Example: B2B Enterprise Software Delivery (12-person engineering team)

**Scenario:**

A 12-person engineering team building enterprise compliance software needs to deliver a major release with 15 epics worth of work over a quarter. They previously used 2-week sprints but found that sprint boundaries caused thrashing: work items rarely fit neatly into sprints, and carryover averaged 30%. Stakeholders want monthly progress reports and a reliable ship date.

**Walkthrough:**

The team decomposes the 15 epics into 112 work items, each targeted at 1-2 days of work. They design a board with columns: Backlog, Refined, In Development (WIP limit: 8), Code Review (WIP limit: 4), In QA (WIP limit: 4), Staging, Released. Pull policies between Refined and In Development require that the item has a technical design decision documented, test scenarios listed, and no external dependencies unresolved. The team runs daily standup focused on blocked items and WIP limit violations, plus a weekly replenishment meeting on Mondays.

After 3 weeks, the team has throughput data: 22 items per week average. With 90 items remaining, the 50th percentile forecast is 4 weeks and the 85th percentile is 5 weeks. They share this with stakeholders in a one-line Slack update. In week 5, a new regulatory requirement adds 18 unplanned items.

Instead of panic, the team adds the items to the backlog, re-prioritizes with the product owner at the next replenishment meeting, and updates the forecast: 85th percentile pushes from week 9 to week 11. Stakeholders accept this because the forecast is grounded in data, not opinion. The team delivers in week 10, within the forecast range.

## Example: Startup MVP Build (2-person founding team)

**Scenario:**

Two co-founders are building an MVP for a scheduling app. One handles front-end development and design, the other handles back-end and infrastructure. They have 8 weeks to build a demo for investor meetings. Neither has formal project management experience, and they are working remotely.

**Walkthrough:**

They list every feature needed for the demo and decompose them into 45 cards. The board is minimal: Backlog, Up Next (WIP limit: 2 per person), Doing (WIP limit: 1 per person), Needs Testing, Done. The strict WIP limit of 1 per person in Doing forces each founder to finish their current work before starting something new, preventing the common startup trap of having 10 things half-done. They use a shared Trello board and a 10-minute daily sync over video.

By week 2, throughput is 5-6 items per week (about 3 per person). With 35 items remaining, the forecast is 6-7 weeks, fitting their 8-week window. In week 4, the back-end founder gets stuck on payment integration, which blocks 4 downstream cards. The card has been in Doing for 3 days, violating their informal norm of 1-2 days per card.

They decide to descope payment to a simulated flow for the demo and add real payment integration as a post-funding item. This decision surfaces naturally because the blocked card is visually obvious on a board with WIP limits of 1. They deliver the MVP demo in week 7.
