# Examples: Choosing Agent Teams Versus Subagents

## Small bug fix stays in a single session

**Scenario:**

Illustrative scenario: a developer sees a crash in a date-formatting helper that appears to touch about three files, and the fix needs one clear chain of reasoning from stack trace to patch.

**Walkthrough:**

The developer writes the finish line as a passing regression test and a patched helper. At the first gate, the whole task fits comfortably in one context and needs one continuous line of reasoning. There are no side questions big enough to justify a subagent, and no parallel streams exist. The decision note reads: single session, because the work is short and sequential; switch to a subagent only if tracing the call path requires a broad codebase search.

The fix lands without any delegation or coordination cost.

## Service audit handled with subagents

**Scenario:**

Illustrative scenario: a team lead wants a dependency and configuration audit across four made-up internal services, with one summary report at the end.

**Walkthrough:**

The lead lists the four services and notes the work is read-only. Each audit is independent, and no auditor needs another's findings while working, so the peer-dependency gate fails. The lead delegates one subagent per service, each asked to return a fixed-format list of issues with file paths. The parent session merges the four lists into one report and resolves duplicates.

The decision note records subagents, because results only flow back to the parent, and flags a switch to a team if auditors later need to cross-check shared libraries together.

## API and UI feature run as an agent team

**Scenario:**

Illustrative scenario: a developer is building a new settings feature with a backend endpoint, a frontend form and tests, in directories that do not overlap, and expects to finish in one afternoon.

**Walkthrough:**

The developer maps files and confirms backend, frontend and test code live in separate directories, so no two writers share files. The frontend work depends on the backend response shape, and the test writer needs both, so real peer messages exist. The developer checks limits: the work fits one sitting, so the lack of resume is acceptable, and a fixed lead is fine. The decision note records an agent team of three teammates and the expected extra token cost, with a fallback to sequential subagents if file overlap appears.

Mid-run, the frontend teammate messages the backend teammate directly to confirm a field name instead of routing through the lead.
