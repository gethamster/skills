# Examples: Facilitating Effective Daily Stand-Up Meetings

## Example: 5-Person Startup Engineering Team (Co-located)

**Scenario:**

A small startup has 5 engineers, a product manager, and a designer working in the same office. They are in the second week of a two-week sprint building a payment integration. The sprint goal is to have end-to-end payment processing working in staging by sprint end. They have never run formal standups before.

**Walkthrough:**

The team starts standups on Monday at 9:15 AM, 15 minutes after the office opens. They gather around a physical Kanban board with three columns: To Do, In Progress, and Done. " They use the three-question format. Engineer A says she completed the Stripe webhook handler and will start the refund endpoint today, no blockers.

Engineer B says he is still on the database migration from yesterday, it is taking longer than the 4-hour estimate, and he is not blocked but flagging it as a risk. The facilitator (the PM this week) notes the migration risk on a sticky note in the "Watch" section of the board. Engineer C says she is blocked because she needs test API keys from Stripe and has been waiting since last Thursday. The facilitator records this blocker, assigns the PM as the owner (since the PM has the Stripe account access), and commits to resolving it by noon.

The standup finishes in 9 minutes. After dismissal, the PM and Engineer C stay for 3 minutes to sort out the API keys. By noon, Engineer C is unblocked. Without the standup, she would have continued waiting silently, likely losing another full day.

## Example: 8-Person Distributed Product Team Across Three Time Zones

**Scenario:**

A B2B SaaS company has a product team spread across US Pacific, US Eastern, and Central European time zones. The team includes 5 developers, 1 QA engineer, 1 designer, and 1 product manager. They are building a reporting dashboard feature. The only overlapping window for all three time zones is 9:00 AM Pacific / 12:00 PM Eastern / 6:00 PM CET.

**Walkthrough:**

The team runs a hybrid standup. Each morning, every team member posts a written update in a dedicated Slack channel by their local 9:00 AM using a template: Completed, Working On, Blocked. The CET team members post first because their morning comes earliest. At 9:00 AM Pacific, the full team joins a 10-minute video call.

The facilitator (rotating weekly) does not ask people to repeat their written updates. Instead, the call focuses exclusively on blockers and dependencies. The facilitator reads the blocker list from the channel: "Maria is blocked on the chart component because the API returns data in a different format than the spec. " Maria and the backend developer agree to a 20-minute pairing session after the call.

The PM commits to filing an IT ticket for Raj's environment and following up within the hour. The call ends at 9:08 AM. The CET team members, for whom it is 6:08 PM, appreciate the brevity. 8 days because the synchronous call creates urgency around written blockers that text alone does not.

## Example: 7-Person Cross-Functional Team at a Large Enterprise

**Scenario:**

A financial services company has a cross-functional team with 3 backend developers, 1 frontend developer, 1 business analyst, 1 QA lead, and a Scrum Master. They are in a four-week sprint migrating a legacy system. The team has been doing standups for a year but they have devolved into 25-minute status meetings where the Scrum Master asks each person questions.

**Walkthrough:**

The Scrum Master recognizes the dysfunction and resets the format. " For the first three days, the team finishes the standup in 11 minutes and people comment that it feels rushed. By the second week, team members start proactively mentioning dependencies ("This card is waiting on the database migration that Anil is working on, so if that slips, I will be blocked by Wednesday"). The Scrum Master captures these conditional blockers on the board with a yellow dot.

In week three, two yellow-dot items convert to actual blockers, but because they were flagged early, the team has already started mitigation. The sprint finishes with all committed items done, the first time in four sprints. In the retrospective, the team attributes the improvement to "the standup actually being useful now" and votes to keep the walk-the-board format.

## Example: Fully Async Standup for a 6-Person Open-Source Team

**Scenario:**

A small company with a 6-person engineering team builds an open-source developer tool. All team members work remotely across 6 different time zones (from UTC-8 to UTC+5). There is no overlapping work hour. They run two-week sprints with the goal of shipping a new CLI feature.

**Walkthrough:**

The team uses a fully async standup posted in a dedicated channel. Each person posts their update within the first hour of their workday using a strict format: one line for "Done," one line for "Doing," one line for "Blocked," and an optional "FYI" line for context that might affect others. The Scrum Master (based in UTC+1) reviews all updates at the start of her day and compiles a daily digest: a three-line summary highlighting any blockers, any cards stuck for more than two days, and the sprint burndown delta. She posts this digest by 10:00 AM UTC.

If a blocker requires synchronous discussion, she creates a 30-minute calendar hold with only the relevant people and proposes two time slots. This happens roughly twice per sprint. The team ships the CLI feature on schedule. 5-1 day for synchronous teams, a cost the team accepts given the time zone constraints.
