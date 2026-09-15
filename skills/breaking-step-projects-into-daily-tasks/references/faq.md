# FAQ: Breaking Step-Projects into Actionable Daily Tasks

## How do I handle tasks that depend on another team's deliverable?

Create an explicit task for securing the external dependency, owned by whoever on your team is responsible for that relationship. Give it a due date that is at least two days before the downstream task needs it, to absorb delays. If the external deliverable is uncertain, create a fallback task that describes a simplified alternative you can build without the dependency. Surface the dependency in every standup until it is resolved, and escalate by day 3 if there is no progress.

## How long should the decomposition session take for a typical step-project?

Plan for 45-90 minutes for a step-project with 2-4 deliverables and a team of 1-3 engineers. If you consistently exceed 90 minutes, the step-project is likely too large and should be split into two smaller step-projects. The decomposition session should include the technical product manager and the engineers who will do the work. Do not decompose without engineers present, because you will miss implementation-specific tasks and produce estimates that are optimistic by 30-50%.

## Should I break step-projects into tasks before or after ICE scoring?

After. ICE scoring, covered in the [prioritizing ideas with ICE scoring](https://tryhamster.com/skills/prioritizing-ideas-with-ice-scoring) skill, operates at the idea level to determine which ideas are worth testing. Step-project design, covered in [designing step-projects](https://tryhamster.com/skills/designing-step-projects-as-experiments), validates the experiment structure. Task decomposition happens last, only for step-projects that have been selected for the current cycle.

Decomposing tasks for step-projects you may never run is wasted effort.

## Why does my task list keep growing mid-sprint?

Task list growth mid-sprint usually means one of three things: the step-project was under-decomposed (hidden work surfaces during implementation), the scope is creeping (engineers are adding polish tasks beyond what the experiment requires), or external dependencies generated unexpected work. To diagnose, look at the new tasks. If they are implementation details you missed, improve your decomposition sessions by including the executing engineer more actively. If they are scope additions, check them against the validation goal and defer anything not required.

If they are dependency-driven, improve your external dependency identification in Step 6.

## How do I decompose tasks for a step-project where the technical approach is uncertain?

' The spike's acceptance criteria should be a written recommendation, not working code. After the spike, you can decompose the remaining work with confidence. Limit spikes to one per step-project and one day maximum. If the spike reveals that the approach is not feasible, that is a valid result.

Update the step-project plan and re-decompose with the alternative approach.

## How granular should acceptance criteria be for each task?

Acceptance criteria should be specific enough that the person doing code review can verify completion in under five minutes without asking the task owner any clarifying questions. A useful heuristic: write 2-5 concrete, binary statements per task. 'The endpoint returns a 200 status with a JSON body containing the tooltip text' is good. 'The endpoint works correctly' is not.

Overly detailed acceptance criteria (10+ items) suggest the task should be split. If you cannot write clear acceptance criteria, the task is probably not well enough understood, and you need a conversation with the engineer first.

## Can I reuse task templates across similar step-projects?

Yes, and you should. , A/B tests on UI variants), create a task template with the common tasks pre-filled: feature flag setup, analytics instrumentation, QA on staging, experiment monitoring dashboard, results review meeting. Customize the template for each step-project by adding the experiment-specific build tasks. Templates reduce decomposition time from 90 minutes to 30 minutes for recurring experiment types.

Store them alongside your GIST planning artifacts so any technical product manager on the team can use them.
