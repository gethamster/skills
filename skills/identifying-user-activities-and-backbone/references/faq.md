# FAQ: Identifying User Activities and Building the Story Backbone

## How many activities should the backbone of a story map have?

Aim for 4-8 activities. Fewer than 4 means your activities are too abstract and will not provide meaningful structure when you decompose them into tasks. More than 8 usually means you are mixing task-level items in with activities. The sweet spot for most products is 5-7 activities.

If you consistently exceed 8, check whether you are mapping a journey that should be split into two separate story maps, each with its own backbone and user goal.

## How do I tell the difference between an activity and a task?

An activity is a high-level chunk of user behavior that contains multiple distinct steps. A task is a single, discrete action within an activity. The test: if you can imagine the user spending an entire session or a significant block of time on it, it is an activity. If the user would complete it in under a minute, it is a task.

"Search for flights" is an activity. "Enter departure city" is a task within that activity. " If yes, it belongs on the backbone as an activity.

## Should I build the backbone before or after creating user personas?

Build personas first, or at minimum, define your target user and their goal before touching the backbone. The backbone represents one user's journey toward one goal. Without clarity on who that user is, you will accidentally blend multiple personas' journeys into a single backbone, creating confusion during decomposition. If you have multiple personas with fundamentally different journeys, build a separate backbone for each.

The [mapping user personas to journey narratives](https://tryhamster.com/skills/mapping-user-personas-to-journeys) skill covers this in detail.

## What if our user journey is not linear and activities happen in different orders?

Most user journeys are not strictly linear, and that is fine. Map the most common sequence, the happy path that the majority of users follow. Then annotate activities that frequently occur out of order or loop back. For example, a user might return to "Search" after "Compare options" if nothing meets their criteria.

Place "Search" where it first occurs and add a visual annotation showing the loop. The backbone does not need to capture every possible path. It needs to capture the primary narrative clearly enough that the team can locate any story or task within it.

## How long should a backbone creation session take?

For a small team (3-5 people) mapping a straightforward journey, 30-45 minutes is usually sufficient. For a larger cross-functional group (6-12 people) mapping a complex journey, budget 60-90 minutes. The silent brainstorming takes 5-7 minutes, clustering and merging takes 15-20 minutes, ordering and trimming takes 10-15 minutes, and validation takes 10-20 minutes. Do not rush the validation step.

It is tempting to skip it when time runs short, but an unvalidated backbone will cost you more time later when you discover ordering errors or missing activities during decomposition.

## Can I reuse the same backbone across multiple releases or sprints?

Yes, and you should. The backbone is designed to be stable across releases. What changes between releases is which tasks and stories beneath the backbone are included, not the backbone itself. This is the core insight of how to do story mapping iteratively: the backbone stays fixed while you [slice different release increments](https://tryhamster.com/skills/prioritizing-and-slicing-releases) horizontally beneath it.

Only change the backbone when you discover a genuinely missing activity, when the product scope fundamentally shifts, or when user research reveals that the journey is structured differently than you assumed.

## Why does my backbone keep changing every sprint?

A backbone that changes frequently is a symptom of one of three problems. First, the activities may be at the wrong altitude, too granular, so they feel unstable because they are really tasks that should sit one level below. Second, the team may not have validated the backbone against real user behavior, so each sprint surfaces new information that reshapes it. Third, the product scope may be genuinely unclear, in which case the instability is a strategic problem, not a mapping problem.

Address the root cause: raise the altitude of your activities, validate against user data, or align on product scope before mapping.
