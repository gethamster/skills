# FAQ: Refining and Evolving Story Maps Across Sprints

## How often should I update the story map during a sprint?

Twice per sprint is the sweet spot for most teams: once during backlog refinement and once during sprint planning. Updating more frequently, such as daily, adds overhead without proportional benefit because most changes are too small to warrant a full map update. Updating less frequently, such as only at sprint boundaries, means mid-sprint discoveries get lost. If your sprints are one week long, a single mid-sprint update during refinement may be sufficient.

## Should I update the story map or the backlog tool first?

Update the story map first during team ceremonies, then sync changes to the backlog tool within 24 hours. This 'map first' approach ensures that refinement conversations happen with the spatial context of the user journey visible, which produces better prioritization decisions. If you update the backlog tool first, the map becomes a secondary artifact that people stop referencing, and it will fall out of date within a few sprints.

## How do I handle story maps when working with multiple teams or squads?

Assign each squad ownership of specific activity columns on a shared map. Each squad has its own steward who updates their section. Hold a cross-squad sync every 2-4 weeks (or quarterly for larger organizations) to review the full map, check for dependencies between activity columns, and ensure backbone consistency. The shared map is the coordination artifact.

Individual squad backlogs are the execution artifacts. Dependencies between squads should be visible as annotations or connecting lines on the map.

## What do I do when the story map gets too big to be useful?

Archive completed release slices into a separate view or frame, keeping only the current and next release slice visible on the active map. If the active map still has more than 80-100 visible stories, consider whether your backbone is too granular and some activities should be consolidated, or whether some stories are actually sub-tasks that belong in the backlog tool rather than on the map. The map should stay at the user story level to remain readable. A good rule of thumb is that you should be able to read the entire active map in under 5 minutes.

## Should I refine the story map before or after prioritizing and slicing releases?

Initial release slicing happens when you first build the map, as described in [prioritizing and slicing releases](https://tryhamster.com/skills/prioritizing-and-slicing-releases). Ongoing refinement across sprints then adjusts those slices based on new information. Think of it as a cycle: you slice initially, refine continuously, and periodically re-evaluate whether the slices themselves need restructuring during quarterly health reviews. The two skills are complementary, not sequential.

## What tools work best for maintaining a story map across sprints?

Digital tools like Miro, Mural, or dedicated story mapping tools (StoriesOnBoard, Avion) are easier to maintain across sprints because they support color-coding, status changes, archiving, and remote access. Physical walls work well for co-located teams but require discipline around photographing the map after each session for version history. The tool matters less than the habit: whatever tool your team will actually open during refinement is the right tool. Avoid tools that require a separate login or context switch from your daily workflow.

## Why does my story map keep drifting out of date even though we agreed to maintain it?

The most common cause is diffused ownership. If 'the team' is responsible for updates, nobody is responsible. Assign a named steward with an explicit checklist: mark completed stories before refinement, capture changes during refinement, sync to backlog tool within 24 hours. The second most common cause is that the map is not the first artifact opened during ceremonies.

If refinement starts in Jira and the map is only referenced 'if we have time,' it will never be updated. Make the map the opening screen of every refinement session and drift will stop.
