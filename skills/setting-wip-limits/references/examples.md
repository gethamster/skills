# Examples: Setting and Enforcing Work-in-Progress Limits

## Example: Five-person product engineering team building a SaaS product

**Scenario:**

A team of five, consisting of one product designer, three software developers, and one QA engineer, uses a kanban board with columns: Backlog, Design, Development, Code Review, QA, and Done. Items are taking 14 days average cycle time. The team feels overloaded, with developers juggling 3-4 items each. The team lead wants to introduce WIP limits to get cycle time under 7 days.

**Walkthrough:**

The team lead maps workers to columns: Design has 1 person, Development has 3, Code Review is done by the same 3 developers, and QA has 1 person. Using the n+1 formula, starting limits are: Design = 2, Development = 4, Code Review = 2 (lower because it competes with Development for the same people's time), QA = 2. The buffer columns "Ready for Dev" and "Ready for QA" each get a limit of 2. After one week, the team observes that Code Review hits its limit almost daily, while Development rarely reaches 4.

The developers are spending so much time writing new code that reviews pile up. In the tuning session, the team decides to lower Development to 3 and keep Code Review at 2, forcing developers to review before pulling new work. After three weeks, cycle time drops from 14 days to 9 days. The Code Review bottleneck is clearing faster, and the team decides to try Development at 2 for one more iteration to see if further tightening improves flow.

## Example: Marketing content team with variable work types

**Scenario:**

A marketing team of six people, including two writers, one editor, one designer, and two marketing managers, runs content production on a kanban board with columns: Ideas, Drafting, Editing, Design, Review, and Published. Some items are blog posts (small), some are whitepapers (large), and some are social campaigns (tiny). The team has 30 items in various stages with no limits, and nothing feels like it is finishing on time.

**Walkthrough:**

The team lead counts workers per column: Drafting has 2 writers, Editing has 1 editor, Design has 1 designer, and Review involves 2 managers. Starting WIP limits: Drafting = 3, Editing = 2, Design = 2, Review = 3. The "Ideas" column is not limited because it functions as a backlog, but the team agrees that only the top 10 ideas remain visible to prevent overwhelm. In the first week, Editing immediately hits its limit because the single editor is the bottleneck.

5 capacity to that stage. After two weeks, the team notices that whitepapers (large items) dominate the WIP for days, crowding out smaller items. They create a separate swim lane for large items with a dedicated WIP limit of 1 across the board, meaning only one whitepaper can be in progress at any time. Blog posts and social campaigns share the remaining WIP capacity.

Cycle time for blog posts drops from 12 days to 5, and whitepapers, though still taking 15 days each, are no longer blocking the rest of the pipeline.

## Example: Enterprise team with 15 people across time zones

**Scenario:**

A distributed team of 15 engineers across three time zones maintains a large kanban board for a platform product. The board has columns: Refinement, Development, Code Review, Integration Testing, Staging, and Release. With no WIP limits, the board shows 40+ items in progress. Lead times are averaging 28 days, and stakeholders are frustrated.

The engineering manager needs to introduce WIP limits without creating gridlock across time zones.

**Walkthrough:**

The manager maps the team: Refinement involves 2 senior engineers, Development has 10 engineers (split across 3 pods of 3-4), Code Review is handled by the same 10 engineers, Integration Testing has 2 QA engineers, and Staging/Release is managed by 1 DevOps engineer. Rather than one board-wide WIP limit, the manager sets limits per column: Refinement = 3, Development = 12 (slightly above 10+1 because time zone handoffs mean some items sit idle during off-hours), Code Review = 4 (intentionally tight to force priority), Integration Testing = 3, Staging = 2. The manager also sets a global WIP limit of 20 as a safety net. The first week is chaotic because 40 items need to drop to 20.

The team triages: 12 items are deprioritized back to the backlog, 8 are already near done and get fast-tracked. Within two weeks, the active WIP stabilizes at 18-20 items. The biggest win is that Code Review, previously a graveyard where items waited 5+ days, now clears within 48 hours because engineers across time zones pick up reviews during their morning overlap. After one month, lead time drops to 16 days.

The manager tightens Development to 11 and sets a target of getting lead time under 12 days by the end of the quarter.

## Example: Solo founder using personal kanban for a B2C app launch

**Scenario:**

A solo founder building a mobile app uses a personal kanban board with columns: Backlog, This Week, In Progress, Waiting (for external dependencies like app store review or API approvals), and Done. They have 8 tasks marked "In Progress" but realistically can only make meaningful progress on 2-3 per day. Items linger for weeks in the "In Progress" column.

**Walkthrough:**

Since there is only one person, per-column limits would be overly rigid. The founder sets a global WIP limit of 3 for all active columns combined (In Progress + Waiting). The "This Week" column gets a limit of 5, functioning as a weekly sprint-like commitment. The Waiting column gets a separate limit of 2 because the founder cannot control external timelines but can control how many items they send out for external action simultaneously.

In the first week, the founder struggles to keep WIP at 3 because they are used to switching between tasks whenever they feel stuck. By mid-week, they notice that forcing themselves to finish one item before starting another means they are completing 4 items per week instead of their previous average of 2. The Waiting limit of 2 proves especially useful because it prevents the founder from submitting three app store builds simultaneously and then having to context-switch between fixing issues on all three when feedback arrives. After a month, the founder tightens global WIP to 2, finding that the focus boost outweighs any idle time.
