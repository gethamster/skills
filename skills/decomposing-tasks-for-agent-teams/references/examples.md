# Examples: Decomposing Tasks for Agent Teams

## Decomposing a notifications feature

**Scenario:**

Illustrative scenario: a team wants email and in-app notifications added to an existing web app, with a backend, a frontend and a shared database.

**Walkthrough:**

The lead runs a planning pass and finds that both the API and the UI depend on a notification schema nobody has defined. It creates a first task to write the schema and type stubs, with the output being a migration file and a types module. Three tasks depend on it: backend endpoints in the notifications service directory, frontend components in the notifications UI folder, and tests covering both. Each description lists owned paths, the ticket excerpt and a done check such as a named test suite passing.

The lead checks each against the SPEC test and rewrites the frontend task, which originally said build the UI, to name the three components and their acceptance tests. The final list holds a handful of tasks per teammate across three teammates.

## Splitting a read-heavy security review

**Scenario:**

Illustrative scenario: a lead needs a security review of a mid-sized service before a release and wants several teammates to work through it at once.

**Walkthrough:**

The lead splits the review by module rather than by vulnerability class, so no two teammates read and annotate the same files. Each task names its directories, lists the threat categories to check, and requires a report with one row per finding giving file, line, severity and suggested fix. Because the output is constrained, the lead can merge reports mechanically and sort by severity. No task depends on another, so all start immediately.

A final task, blocked on all the others, deduplicates findings that span module boundaries.

## Repairing a decomposition that stalled

**Scenario:**

Illustrative scenario: an hour into a refactor, two teammates keep messaging the lead with questions and a third task has been blocked the whole time.

**Walkthrough:**

The lead rereads the tasks and finds the questions come from descriptions that assumed context from the planning pass, such as which config format was chosen. It rewrites those tasks to state the decision and the affected files explicitly. The blocked task turns out to wait on a decision that was never written down as a task, so the lead adds one and assigns it. It also notices two tasks both touch a shared utilities file and merges them.

After the rewrite, clarifying messages stop and the blocked work moves.
