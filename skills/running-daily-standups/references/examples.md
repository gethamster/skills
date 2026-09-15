# Examples: Running Effective Daily Stand-Up Meetings

## Example: Board-Walking Standup for a 6-Person Sprint Team

**Scenario:**

A product team of 6 developers is midway through a two-week sprint building a new checkout flow. The sprint goal is "Customers can complete a purchase using saved payment methods." They use Jira with a board showing columns: To Do, In Progress, In Review, Done. The Scrum Master facilitates the daily standup.

**Walkthrough:**

The Scrum Master shares the Jira board on the conference room screen and reads the sprint goal aloud. Starting from the rightmost column, she asks about each card:

**In Review:** "CHECKOUT-45: Saved card selection UI" — Maria says the PR is approved and she'll merge after standup. Card moves to Done.

**In Progress:** "CHECKOUT-47: Payment token API integration" — James reports he's blocked waiting for the sandbox credentials from the payment provider. Scrum Master notes this as Blocker #1 and commits to calling the vendor contact within the hour.

**In Progress:** "CHECKOUT-48: Order confirmation email" — Priya says she'll finish the template today and move to code review by end of day. No blockers.

**In Progress:** "CHECKOUT-50: Error handling for expired cards" — David mentions he discovered an edge case in the payment gateway's retry logic that isn't documented. He needs 20 minutes with James to align on the approach. Scrum Master parks this for a breakout.

Two To Do cards remain. The Scrum Master asks for a confidence vote: the team shows mostly 3s and 4s (out of 5), with James noting his confidence depends on getting sandbox access today.

Total time: 11 minutes. After standup, David and James stay for a 10-minute breakout on the retry logic. The Scrum Master calls the payment vendor.

## Example: Async-First Standup for a Distributed Team

**Scenario:**

A fully remote team spans UTC-5 to UTC+5 with no overlapping working hours. Traditional synchronous standups would force someone to attend outside working hours every day.

**Walkthrough:**

The team adopts an async-first standup using a Slack bot that prompts each member at their local 9:00 AM: "What did you complete? What's your plan today? Any blockers?" Responses post to a #daily-standup channel.

The Scrum Master reviews all responses by 10:00 AM their local time and flags any blockers in a #blockers channel with owners and deadlines. If more than one blocker surfaces or sprint goal confidence seems low, the Scrum Master schedules a 15-minute sync call at the best overlapping time (typically the edges of the widest time zones).

The team agreed to this format during a [retrospective](https://tryhamster.com/skills/facilitating-sprint-retrospectives) and re-evaluates it every two sprints. They found that on average, they only need a synchronous standup 2-3 times per sprint, freeing significant time while maintaining sprint goal alignment.
