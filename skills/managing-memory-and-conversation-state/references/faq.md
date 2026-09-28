# FAQ: Managing Memory and Conversation State in LangChain

## Why does my LangChain agent forget the previous message?

Most often the agent has no checkpointer, or each call passes a different thread_id. Both are required for history to persist between invocations. Check that the thread_id comes from a stable identifier such as a session or conversation record. If memory works locally but not in production, an in-process checkpointer may be losing state across restarts or workers.

## Should I trim or summarize conversation history?

Trim when only recent exchanges matter and you want predictable, cheap behavior. Summarize when earlier turns still shape the task, such as goals or constraints set at the start. Many agents combine both: keep recent messages raw and fold older ones into a summary. Either way, keep exact-recall details in separate state because neither method preserves them reliably.

## Is InMemorySaver suitable for production?

It works well for local development and tests because it needs no setup. It stores checkpoints in process memory, so history disappears when the process restarts and is not shared across multiple workers. For production, use a checkpointer backed by durable storage. Keep the same thread_id scheme so switching backends does not change behavior.

## What belongs in long-term memory versus thread state?

Thread state holds the working conversation: messages, tool results, uploaded files and session details. Long-term memory holds information that should outlive the conversation, such as confirmed preferences, account facts and useful insights. A good test is whether the user would expect you to know it in a brand-new conversation. If not, leave it in the thread.

## How do I stop a summary from dropping important details?

Give the summarization prompt an explicit structure, for example headings for goal, constraints, decisions and open items. Review real summaries by hand before relying on them. Move anything that needs verbatim recall, like identifiers or quoted terms, into structured state or a store before it reaches the summarized region. Add tests that ask about pre-summary facts after a summarization has run.
