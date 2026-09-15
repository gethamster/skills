# FAQ: Decomposing Activities into User Tasks and Stories

## How many stories should I generate per step on the backbone?

A healthy range is 3-10 stories per step. Fewer than 3 suggests you are still thinking at too high a level and your stories are likely too large to estimate or implement in a single sprint. More than 10 suggests you may be breaking stories into acceptance criteria or sub-tasks rather than independent user-value slices. The exact number depends on the complexity of the step and how many personas it serves.

A step that only one persona touches with one scenario might have 3 stories. A step that 4 personas touch in different ways with error handling variations might have 10.

## Should I decompose all activities to the same depth before slicing releases?

No. Decompose deeply only the activities you plan to build in the next 1-2 release increments. For activities further out on the roadmap, keep only the walking skeleton stories and perhaps one row of high-priority additions. Over-decomposing future work wastes effort because requirements change as you learn from shipped releases and user feedback.

Revisit and deepen decomposition as each activity approaches development. This also keeps your map visually manageable rather than overwhelming.

## How do I handle stories that span multiple steps or activities?

This is common for cross-cutting concerns like authentication, error handling, or analytics. Place the story under the step where the user first encounters the behavior, and add a visual indicator (a colored dot, a tag, or a connector line) showing that it also affects other steps. Do not duplicate the story in multiple columns because that creates confusion during estimation and sprint planning. If the story is truly large enough that it needs to be split, create step-specific slices: 'User sees authentication prompt when searching' and 'User sees authentication prompt when checking out' are separate stories with independent value.

## How long should a decomposition session take for a full story map?

Plan 60-90 minutes per major activity. A map with 5-6 activities will take a full day if you decompose everything in one session, but that is usually not necessary or advisable. Most teams decompose 2-3 high-priority activities in a half-day workshop, ship the first release based on that, and decompose the remaining activities in subsequent sessions. If your decomposition sessions consistently run over 90 minutes per activity, you are likely debating design decisions that should be resolved separately or decomposing to a granularity that belongs in sprint planning.

## Should I decompose activities before or after estimating stories?

Decompose first, estimate second. Estimation is unreliable when stories are large and ambiguous. The entire point of decomposition is to produce stories small and specific enough that estimation becomes meaningful. After decomposition, you can estimate the walking skeleton stories quickly (they are small and well-defined) and defer estimation on lower-row stories until they approach sprint selection.

This avoids the waste of estimating 100 stories when you will only build 20 in the next quarter.

## What do I do when the team disagrees about whether something is one story or two?

Apply the independent demonstration test: can you show each proposed story to a user independently and have them recognize value? If yes, they are separate stories. If one story only makes sense after the other is built, they might be one story or they might be two stories with a dependency. A second heuristic is the assignment test: could you give these to two different developers working in parallel without them stepping on each other's code?

If the answer is no, they are likely one story. When in doubt, keep them as one story and split later during sprint planning when you have more technical context.

## Why do my decomposed stories keep getting rewritten during sprint planning?

This usually means decomposition happened without enough engineering input. Product managers and designers tend to write stories that describe the ideal user experience but miss technical constraints, dependencies, and implementation realities. Engineers then rewrite stories during sprint planning to reflect what is actually buildable. The fix is to include at least one engineer in the decomposition session, specifically asking them to flag stories that hide technical complexity, require infrastructure changes, or have dependencies on other stories.

You do not need the full engineering team. One senior engineer who understands the system architecture is sufficient.
