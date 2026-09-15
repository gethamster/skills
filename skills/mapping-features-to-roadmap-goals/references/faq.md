# FAQ: Mapping Features and Capabilities to Strategic Goals

## How do I map a feature that genuinely contributes to three or more goals?

Assign it to the goal where you expect the largest measurable impact, and tag one secondary goal at most. If a feature truly advances three or more goals, it is often too broadly defined. Try decomposing it into smaller capabilities, each of which maps more cleanly. For example, "redesign the dashboard" might break into "add usage trend charts" (maps to retention), "add upgrade prompts" (maps to revenue expansion), and "add team activity feed" (maps to activation).

Decomposition usually reveals that the feature is actually three features bundled together.

## Should I map bug fixes and tech debt to goals, or keep them separate?

Map them when the connection is real and specific. A tech debt item like "refactor authentication service" maps to a reliability or security goal if you can state the mechanism: "Eliminates the token refresh race condition causing 3% of login failures, directly supporting activation rate improvement." Generic maintenance work ("update dependencies") usually does not map to a strategic goal and should be budgeted as operational overhead, not placed on the goal-oriented roadmap. Trying to force infrastructure work into strategic goals dilutes the meaning of the mapping.

## How long should the mapping exercise take for a team doing it the first time?

For a team with 3-5 goals and 20-40 backlog items, expect 2-4 hours for the first time, including individual mapping, comparison, rationale writing, and balance review. The stakeholder validation session adds another 60-90 minutes. Subsequent quarterly mapping cycles take about half as long because the team has muscle memory and many items carry over with minor adjustments. If the exercise takes a full day, you either have too many items (consolidate into epics) or too many goals (tighten the scope).

## Should I map features to goals before or after defining success metrics for those goals?

Always define metrics first. The rationale writing step depends on being able to say "this feature advances this goal by moving this metric in this direction." Without metrics, your rationales become vague assertions that cannot be challenged or later verified. If you are learning how to create a product roadmap for the first time, establish goals and metrics using [setting metrics and success criteria](https://tryhamster.com/skills/setting-go-roadmap-metrics) before beginning the mapping exercise.

## Why does my mapping keep drifting within a quarter?

Mapping drift happens for three common reasons. First, new requests arrive and get added to the roadmap without going through the mapping exercise, eventually outnumbering the mapped items. ") before accepting them. Second, goals themselves shift without the mapping being updated.

When a goal changes, trigger a re-mapping of the items under it. Third, team members forget the rationale behind mappings and start treating items as standalone tasks. Counter this by referencing the mapping and rationale during sprint planning, not just during quarterly reviews.

## How do I handle stakeholders who insist on a feature that maps to no current goal?

Acknowledge the feature's potential value, then present the trade-off explicitly. Show which goal would lose investment if you add the unmapped feature. Ask the stakeholder whether they want to propose a new goal that the feature would serve, and what existing goal they would deprioritize to make room. " Most unmapped feature requests quietly withdraw when the trade-off is made visible.

The few that survive usually do represent a legitimate strategic gap.

## Can I use this mapping skill with roadmap tools like Productboard, Aha!, or Jira?

Yes. Most roadmap tools support custom fields or labels. Create a "Primary Goal" field with your goals as dropdown options, and a "Rationale" text field for the one-sentence justification. Some tools like Productboard have native objective-linking features that align well with this mapping.

The key is ensuring the mapping is visible at the roadmap level, not buried in individual ticket descriptions where it gets ignored. Configure your default roadmap view to group or color-code items by goal so the mapping is always front and center.
