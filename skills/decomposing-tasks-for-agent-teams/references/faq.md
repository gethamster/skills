# FAQ: Decomposing Tasks for Agent Teams

## How many tasks should each teammate get?

The [claudefa.st best practices guide](https://claudefa.st/blog/guide/agents/agent-teams-best-practices) suggests aiming for 5-6 tasks per teammate. That keeps progress visible on the shared list without drowning teammates in coordination. Treat it as a starting point and adjust once you see how long tasks actually take.

## What should I do if Claude creates too few tasks?

Ask it directly to split the work into smaller pieces, which is what the [agent teams documentation](https://code.claude.com/docs/en/agent-teams) recommends. Point to specific tasks that are too broad and name the seams you expect, such as separate directories or separate test suites. Then review the revised plan before any teammate starts.

## What does the SPEC test check?

The [SPEC test](https://github.com/FlorianBruniaux/claude-code-ultimate-guide/blob/main/guide/workflows/agent-teams.md) asks whether a subtask is Programmatically evaluable, has Explicit scope, and is Constrained by a defined output format, length or schema. A task that passes can be verified without rereading everything the teammate did. A task that fails usually produces clarifying questions or unverifiable results.

## Do non-code tasks need the same rigor?

Yes. Design decisions, research and reviews are valid task outputs, but they need a defined shape, such as a decision record or a report schema, so the lead can combine them. An open-ended write-up from each teammate is slow to synthesize and easy to misread.

## What if the codebase does not split cleanly into directories?

Create the separation in the task list instead of relying on folder structure, as the [claudefa.st guide](https://claudefa.st/blog/guide/agents/agent-teams-best-practices) advises. Assign specific files to specific tasks, merge tasks that would share a file, or sequence them with a dependency. What you should avoid is two teammates editing the same area at the same time.
