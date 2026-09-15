# FAQ: Prioritizing Stories and Slicing Release Increments

## How many stories should be in the first release slice?

There is no universal number, but a practical guideline is to aim for 2-3 sprints of work for the first slice. For a team of four developers doing two-week sprints, that is roughly 10-20 stories depending on size. The more important test is coherence: does the slice deliver a complete, walkable user journey? If you can demo the slice to a user and they can accomplish the primary task without you explaining what is missing, the size is right.

Err on the side of fewer stories.

## Should I prioritize and slice releases before or after decomposing activities into user tasks?

Always decompose first. Slicing requires the full map to be populated so you can see all the stories in each column and make informed trade-offs. If you try to slice at the activity or task level without decomposed stories, your slices will be too coarse. You will commit to entire activities without understanding the effort involved in the stories underneath.

Complete the [decomposition step](https://tryhamster.com/skills/decomposing-activities-into-user-tasks) before starting a slicing session.

## How do I handle stories that multiple slices depend on?

Shared dependencies, such as authentication, API infrastructure, or design system setup, should be pulled into the earliest slice that needs them, even if their direct user value is low. Mark them explicitly as 'enabler' stories on the map using a distinct color or tag. During slicing, ask the engineering lead to call out any story that is a prerequisite for stories in later slices. Place these enablers in the first slice and account for them in your effort estimate.

Do not hide them or assume they will 'just get done' as part of another story.

## What if stakeholders disagree about which stories belong in the first slice?

Anchor the disagreement in the user journey narrative. Ask each stakeholder to walk through the first slice from the user's perspective and identify where the experience breaks without their preferred story. If the journey genuinely breaks, the story should be in the first slice. If the journey is functional but less polished, the story belongs in a later slice.

When two stories compete for the same slice and both are valid, use effort as the tiebreaker: the story that is smaller and faster to ship wins because it reduces risk and accelerates learning.

## How often should I re-slice the story map?

Re-slice after every major release, or at minimum quarterly. The purpose of re-slicing is to incorporate what you learned from shipping the previous slice. User feedback, usage data, and changed business conditions all invalidate earlier slicing decisions. A 30-minute re-slicing session after each release retrospective is usually sufficient.

Bring the updated map, review which stories in the next slice are still relevant, and adjust the line. See [refining and evolving story maps across sprints](https://tryhamster.com/skills/refining-story-maps-across-sprints) for the full iterative process.

## Can I use story mapping agile slicing for non-software products?

Yes. The technique works for any initiative that has a sequential user journey and can be delivered in increments. Service design teams use it to phase the rollout of new customer service processes. Marketing teams use it to sequence campaign launches.

The key requirement is that you can define a 'walking skeleton,' a minimal end-to-end version of the experience that is testable and deliverable. If your initiative does not have a sequential user journey, a different prioritization framework may be more appropriate.

## Why does my first release slice keep growing during sprint planning?

Scope growth after slicing usually happens because the slicing session did not surface all dependencies, or because stories were not decomposed finely enough. When developers start working on a story and discover it requires additional stories that were not on the map, the slice grows. Prevent this by doing a dependency check during the slicing session (Step 7) and by ensuring stories are small enough that hidden work is unlikely. If growth persists, your stories are too large.

Break them down further before the next slicing session.
