# Examples: Parallelizing Independent Work Across Sessions

## Parallel review of a legacy service

**Scenario:**

Illustrative scenario: a team needs a security and quality review of a service with four top-level modules before a migration, and no code changes are planned yet.

**Walkthrough:**

The lead maps each review task's read set and finds no writes at all, so every task is parallel-safe. It assigns four readers, one per module, so each loads a different part of the code instead of the whole repository. Each reader returns a structured findings report with file paths and severity. Because nothing is written, there is no conflict risk, and the only design question is whether four readers are worth the tokens compared with one session.

The lead decides yes because the modules are large and unrelated. The reports then feed a single sequential remediation plan.

## Feature spanning backend and frontend with a stub contract

**Scenario:**

Illustrative scenario: a new export feature needs an API endpoint, a frontend panel and tests, and the frontend depends on the endpoint's response shape.

**Walkthrough:**

The lead flags the frontend task as risky because it waits on an undecided response schema. Instead of sequencing everything, the lead writes and commits a typed response stub and an endpoint signature in its own session. The backend teammate owns the API directory, the frontend teammate owns the panel directory and builds against a mock of the stub, and the test teammate owns the test directory. All three stub files are marked read-only in every task description.

With the contract fixed, all three tasks run in parallel, and integration waits for the final phase.

## Deciding not to parallelize a tangled refactor

**Scenario:**

Illustrative scenario: a developer wants three teammates to rename a core data type used across roughly every module in a small repository.

**Walkthrough:**

Mapping write sets shows that every candidate task touches the same central type file and many of the same call sites. Every pair of tasks overlaps, so every task is rated risky. The lead considers splitting by directory but finds the call sites are interleaved, leaving no clean boundary. Given linear token scaling and no independent streams, the lead runs the rename in a single session.

The team is reserved for the follow-up review of each module, which is read-heavy and parallel-safe.
