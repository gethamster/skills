# Examples: Managing Shared Task State

## Unsticking an API chain

**Scenario:**

Illustrative scenario: a lead runs a team of three teammates building a small service. Task A defines the API schema, tasks B and C implement endpoints that depend on it, and task D writes integration tests that depend on B and C.

**Walkthrough:**

The lead seeds the list with A unblocked and B, C and D blocked, each naming the schema file or endpoints it waits on. A teammate claims A, writes the schema and posts a message saying it is done, but the task still shows as claimed. The lead notices B and C have not moved and compares the message with the list. It opens the schema file, confirms it matches the agreed format, and tells the teammate to mark A complete.

B and C unblock and are claimed by the two other teammates. The lead adds a line to its instructions requiring completion to be marked in the same action as the report.

## Recovering after a resume

**Scenario:**

Illustrative scenario: a developer pauses a documentation audit run by a lead and four teammates, then resumes the session the next morning. Before the pause, two teammates held claims on audit tasks for different folders.

**Walkthrough:**

After resuming, the lead tries to message the two teammates and gets no useful response, because in-process teammates were not restored. The developer asks the lead to list every claimed task and its last reported progress. One folder audit has a partial report file, and the other has nothing. The lead resets the empty task to available and rewrites the partial one to cover only the remaining pages.

It spawns two new teammates, who claim the adjusted tasks. The list now reflects only live owners.

## Removing a false dependency

**Scenario:**

Illustrative scenario: a lead planning a refactor marks every test-writing task as blocked on the full implementation, and the team of four spends most of the run with two teammates idle.

**Walkthrough:**

The lead reviews why the test tasks are blocked and finds that most of them only need the module interfaces, not the finished code. It changes those tasks to depend on the interface stubs task instead. Once the stubs task is verified and marked complete, the test tasks unblock and run in parallel with implementation. Only the end-to-end test task keeps its dependency on the full implementation.

The lead notes that each blocked task should name the specific artifact it needs, which would have exposed the overly broad dependency at planning time.
