# Examples: Refining and Evolving Story Maps Across Sprints

## Example: B2B SaaS Onboarding Flow, Small Team (5 engineers)

**Scenario:**

A 5-person engineering team at an early-stage B2B SaaS company built a story map during a half-day workshop covering the new user onboarding journey. The map has 6 activities (Sign Up, Configure Workspace, Invite Team, Import Data, Complete First Workflow, Review Results) with 45 stories distributed across 3 release slices. They are in Sprint 4 of a 12-sprint roadmap.

**Walkthrough:**

During Sprint 3 refinement, the steward marks 8 stories as completed across the first 3 activities. Walking the backbone, the team discovers that 'Import Data' is more complex than expected: users need CSV import, API sync, and manual entry, but the map only has one story covering all three. The team splits this into 3 stories and places them vertically by priority, with CSV import in Release 1 and the others in Release 2. They also discover through user interviews that 'Review Results' needs a dashboard summary story that was not on the original map.

' The steward then checks velocity: the team has completed 22 points in 3 sprints (about 7 per sprint) and Release 1 has 30 points remaining with 4 sprints left. The math works (28 capacity vs 30 remaining), so no slice adjustment is needed, but the steward flags it as tight. ' Total refinement time: 35 minutes.

## Example: E-commerce Mobile App, Cross-Functional Team (12 people)

**Scenario:**

A cross-functional team of 12 (engineers, designers, QA, PM) is building a mobile shopping app. Their story map covers the full purchase journey with 10 activities and 120+ stories across 4 release slices. They use Miro as their digital mapping tool. They are in Sprint 8 and approaching the end of Release 2.

**Walkthrough:**

The PM (acting as steward) prepares for refinement by marking 14 stories as done and color-coding them green. During the backbone walk, the team discovers that the 'Checkout' activity has ballooned: Release 2 originally had 5 checkout stories, but during development, 3 were split into 8 smaller stories, and 2 new stories were added for edge cases (guest checkout, failed payment retry). The checkout column now has 15 active stories, which is a signal to consolidate. The team groups the edge case stories and identifies that 3 of them can be deferred to Release 3 without harming the core checkout experience.

The steward moves these 3 stories below the Release 2 boundary, adds a version marker ('R2 scope adjusted Sprint 8, deferred 3 edge-case checkout stories to R3'), and updates the Miro board in real time. The designer flags that the 'Browse Products' activity needs a new filtering story based on usability testing results. The team adds it to Release 2 because it directly impacts conversion rates. Net result: Release 2 loses 3 edge-case stories and gains 1 high-impact story, keeping the scope manageable.

The steward syncs 6 Jira changes after the session. Total refinement time for the full map walk: 50 minutes, with the checkout column taking 12 minutes of focused discussion.

## Example: Internal Tool Migration, Enterprise Team (3 squads)

**Scenario:**

Three squads (24 engineers total) are migrating an internal CRM tool from a legacy system to a modern stack. The story map was created collaboratively with all three squads and has 14 activities covering the admin workflow, sales rep workflow, and reporting workflow. Each squad owns a section of the backbone. They are in Sprint 6 and have completed Release 1 (basic admin functions).

They need to transition the map from Release 1 retrospective mode into active Release 2 planning.

**Walkthrough:**

The three squad stewards meet for a 90-minute quarterly health review at the end of Release 1. First, they archive Release 1 by taking a screenshot of the current Miro board, moving all completed stories to an archived frame, and writing a one-paragraph summary of what shipped. Then they review the backbone for Release 2 relevance. They discover that one activity, 'Generate Custom Reports,' was scoped based on the legacy system's capabilities, but user interviews during Release 1 revealed that sales reps actually want real-time dashboards, not static reports.

The squad responsible for reporting proposes renaming the activity to 'View Sales Dashboards' and restructuring the 8 stories underneath it. The team agrees, marks this as a structural change with a version note, and the reporting squad rewrites the stories over the next week. They also discover that the 'Manage Contacts' activity, originally assigned to Release 3, has been requested so frequently by stakeholders that it needs to move to Release 2. They assess the size (18 story points across 6 stories) and conclude it fits within Release 2 if they defer 2 lower-priority stories from the 'Admin Settings' activity.

The trade-off is made visible on the map, documented in the changelog, and communicated to stakeholders via a 3-sentence Slack message referencing the updated map. Each squad steward syncs their section to Jira within 48 hours.

## Example: Consumer Mobile App, Startup with Rapid Pivots (4 engineers)

**Scenario:**

A 4-person startup team is building a fitness app. They created a story map 6 weeks ago with 5 activities (Create Account, Set Goals, Log Workout, Track Progress, Share Achievements). After launching an MVP (Release 1), user analytics show that 'Share Achievements' has near-zero engagement while 'Track Progress' is used 3x more than expected. The team needs to restructure the map based on real usage data.

**Walkthrough:**

During their Sprint 5 refinement, the team reviews usage data overlaid against the map. The PM proposes demoting the entire 'Share Achievements' activity from Release 2 to Release 4 (effectively the icebox) and promoting new stories under 'Track Progress' that users are requesting: weekly summary emails, progress photos, and personal record tracking. The team walks through the change: they move 7 stories from 'Share Achievements' out of Release 2 and below the Release 3 boundary. They add 4 new stories under 'Track Progress' and prioritize them into Release 2.

One new story, 'weekly summary email,' requires a new backend service, so the team adds a technical note to the card but does not create a separate technical card on the map. They version-mark the change: 'Sprint 5, restructured R2 based on usage data. Share Achievements deferred. ' The changelog entry includes the key metric (Share at 2% engagement vs Track at 45% daily active use) so future reviewers understand the data behind the decision.

The entire map update takes 25 minutes.
