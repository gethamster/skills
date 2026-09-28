# FAQ: Defining Verifiable Success Criteria

## How many success criteria should one agent task have?

Enough to cover the intended outcome and no more. Each criterion should trace back to the task scope, and [TrueAbility](https://resources.trueability.com/how-to/how-to-design-performance-based-assessment-questions) recommends removing or revising items that do not map. For many single tasks, a handful of required assertions plus a few step checks is a workable starting point. If the list keeps growing, the task is probably too broad and should be split.

## Can an LLM judge serve as the verification method?

It can, but only against an explicit rubric with named levels and a stated threshold. The criterion still needs observable conditions, otherwise the judge is just repeating the agent's own opinion. Treat the judge's output as evidence to be stored, and spot-check it with a human sample so you know whether it agrees with people. Where a deterministic check exists, such as a test or a query, prefer it.

## What is the difference between a success criterion and a step check?

A success criterion describes the final state that makes the task done. A step check confirms that one intermediate step produced its expected effect, in the 'step, then verify' pattern from the [Karpathy guidelines](https://claudepluginhub.com/skills/vtroiswhite-andrej-karpathy-skills/karpathy-guidelines). Step checks help the loop find where things broke. Only the success criteria decide when the loop may stop with a pass.

## Should criteria ever change during a run?

Only as a deliberate, recorded decision by the person who owns the outcome. Criteria written in advance are what stop the loop from redefining success to fit its results. If new information shows a criterion was wrong, pause, update the specification with a note explaining why, and restart verification against the new version. Silent edits make runs impossible to compare.

## How do I handle outcomes that are hard to measure with a number?

Combine quantitative and qualitative measures, as [Six Sigma guidance](https://6sigma.us/project-management/project-success-criteria) suggests. Turn the qualitative part into a rubric with concrete, observable descriptions for each level. Name who applies the rubric and what level counts as a pass. That keeps the criterion checkable even when the underlying judgment is not numeric.
