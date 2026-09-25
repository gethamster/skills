# Examples: Engineering Tool Output Context Flows for Claude Agents

## Taming a noisy test suite

**Scenario:**

Illustrative scenario: an agent fixing a bug runs a test suite that prints several thousand lines per run, and after a few iterations it starts losing track of the original bug report.

**Walkthrough:**

The team inventories the tool output and finds the test runner accounts for most of the context used. They change the verification command to report only failing tests with their assertion messages and stack traces, and write the full log to a file. They add a hook so the trimmed format applies every time, not only when the model remembers. In the next run each verification step appends a handful of lines instead of thousands.

The agent keeps the bug report in view and finishes without compaction firing mid-task.

## Delegating a codebase survey

**Scenario:**

Illustrative scenario: a developer asks an agent to replace a deprecated logging call across a large repository, and the agent begins reading files one by one to find usages.

**Walkthrough:**

The developer stops the run and restructures it. A subagent gets a single question: list every file and line that calls the deprecated function, grouped by module, and note any call sites that pass unusual arguments. The subagent searches and reads widely in its own context and returns a compact list with paths and line numbers. The main agent works through the list module by module, reading only the regions it edits.

After each module it runs the type check and appends only the result.

## Trimming an MCP payload

**Scenario:**

Illustrative scenario: an internal MCP server for a ticketing system returns full ticket records, including comment history and attachments metadata, and the agent only needs titles, statuses and assignees.

**Walkthrough:**

The team inspects the raw responses and sees that most of each payload is never referenced in later turns. They add a lightweight query mode to the server that returns only the requested fields, with an option to fetch a single ticket's full record by ID. The agent's instructions describe when to use each mode. Listing open tickets now appends a short table instead of pages of nested data.

When a specific ticket matters, the agent pulls its full record once, deliberately.
