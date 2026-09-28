# FAQ: Engineering Tool Output Context Flows for Claude Agents

## Why not just rely on automatic compaction to clean up tool output?

Compaction is a fallback, not a filter. It summarizes history after the context is already crowded, and you do not choose what survives the summary. Output shaped at the tool boundary never takes up the space in the first place. Use compaction for long sessions, and use filtering so it has less to rescue.

## When is a subagent worth the overhead?

Delegate when the work requires reading much more than it produces, such as searching an unfamiliar codebase or comparing several options. The subagent absorbs the reading and returns a summary, which keeps the parent's context focused. For a known file or a single quick lookup, a direct tool call is usually simpler. If you cannot say where the answer lives, that is a good sign to delegate.

## Should I use a CLI tool or an MCP server for the same job?

Pick the one whose output you can shape most easily. CLI tools often already have flags for filtering and limiting output, and models tend to know them well. MCP servers make sense for structured integrations where you control the response format. Avoid offering both for the same job, because overlapping tools invite inconsistent choices.

## How much should I truncate?

Truncate the repetitive and the passing, keep the failing and the specific. A reasonable starting point is keeping, for example, the last 100 lines of command output while saving the full log to a file. Always preserve complete error messages and stack traces. Adjust after reading transcripts to see what the model actually used.

## How do I know the flow is engineered well?

Read transcripts. Good signs are targeted reads, short verification results, subagent summaries with file references, and compaction rarely firing mid-task. Warning signs are the same file read repeatedly, long results the model never mentions again, and the agent citing stale output as current. Each warning sign points to a specific tool or rule to tighten.
