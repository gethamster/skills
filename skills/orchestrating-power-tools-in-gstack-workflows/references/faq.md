# FAQ: Orchestrating gstack's 8 Power Tools in Complex Workflows

## How do I decide which power tools to skip for smaller tasks?

Match the power tools to the risk and complexity of the task. For a bug fix with a known root cause, you likely need only /code, /review, and /ship. For a new feature touching multiple services, use the full sequence. The heuristic is: if skipping a tool means you are making implicit assumptions that could be wrong, do not skip it.

If the tool's output would be trivially obvious (a /decide on a critical production bug), skip it but still write the artifact it would have produced (the problem statement) so downstream tools have context.

## How long should a full power tool workflow take compared to working without gstack?

For a first attempt, expect the orchestration overhead to add 20-30% to your total time. After 3-4 complete workflows, the overhead drops to near zero because you internalize the sequence and the artifacts flow naturally. The time savings come from avoided rework: catching architectural mismatches at /design instead of at /review, and catching scope creep at /decide instead of at /ship. Teams that track this consistently report net time savings of 15-25% on medium-to-large tasks after the learning period.

## Should I orchestrate power tools before or after structuring my AI coding session phases?

Structure your session phases first, then map power tools to those phases. The [session structuring skill](https://tryhamster.com/skills/structuring-ai-coding-sessions-with-gstack-phases) defines the decision-to-execution flow at a high level. Power tools are the concrete commands you invoke within each phase. Think of session phases as your agenda and power tools as the specific work items on that agenda.

If you try to orchestrate power tools without a session structure, you tend to invoke them reactively rather than strategically.

## Can I run multiple power tools in parallel for independent components?

Yes, if the components are genuinely independent at the architecture level. After /design produces an architecture artifact that identifies independent components, you can run /code and /review in parallel for each component. The key requirement is that parallel branches must share the same architecture artifact and decision record so they do not diverge. Merge the branches back together before /ship so that integration issues surface during the final /review pass, not in production.

## How do I handle a power tool producing output that contradicts a previous tool's artifact?

Treat contradictions as information, not errors. If /code produces an implementation that contradicts the /design architecture, it usually means the design missed a constraint that only became visible during implementation. Do not force the code to match the design. Instead, loop back to /design with the new information, produce a revised architecture artifact, and then re-invoke /code with the updated design.

The workflow trace should show this loop explicitly so future readers understand why the design changed.

## Why does my workflow keep requiring loop-backs between /design and /code?

Frequent loop-backs usually indicate that the /design input was missing critical technical context. The problem statement passed to /decide and /design may have been too high-level, or the architecture artifact may have been based on assumptions about the existing codebase that turned out to be wrong. Fix this by investing more time in the /design phase: have the AI agent explore the existing codebase before producing the architecture artifact. If loop-backs persist, it may signal that the work is exploratory rather than planned, in which case you should switch to using specialist skills directly for prototyping and reserve power tools for the implementation phase once the exploration is complete.

## How do I use power tools effectively when working on a team where not everyone uses gstack?

Focus on the artifacts, not the tools. Power tools produce structured artifacts (decision records, architecture documents, review findings) that are useful regardless of whether the recipient uses gstack. Share the artifacts through your normal channels (PRs, docs, Slack). Team members who do not use gstack can read and contribute to the artifacts manually.

Over time, the consistency and quality of the artifacts often convinces non-users to adopt the framework for their own workflows.
