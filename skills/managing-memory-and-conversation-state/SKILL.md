---
name: "managing-memory-and-conversation-state"
description: "Decide what a LangChain agent keeps, trims, summarizes and persists so long conversations stay coherent and inside the context window."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "langchain"
  datePublished: "2026-04-20"
  dateModified: "2026-09-24"
---

# Managing Memory and Conversation State in LangChain Python

> Decide what a LangChain agent keeps, trims, summarizes and persists so long conversations stay coherent and inside the context window.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours |
| Outcome | An agent that remembers the right things within a thread and across threads, with a deliberate policy for trimming, summarizing and persisting state. |
| Prerequisites | A working LangChain agent built with create_agent or an equivalent chain, Basic Python and familiarity with message-based chat models, Access to a storage option for checkpoints beyond local memory for production |
| Part of | [LangChain](../../methods/langchain/METHOD.md) |

## Overview

Memory in a LangChain agent is not automatic. Every call starts from whatever state you hand the model, so the real skill is deciding which messages, summaries and stored facts go into the next context. The LangChain documentation frames this as context engineering, where [middleware hooks into the agent lifecycle to update context](https://docs.langchain.com/oss/python/langchain/context-engineering) before the model sees it. For background on the framework itself, see the [LangChain method page](https://tryhamster.com/methods/langchain).

The work splits into two scopes. [LangChain's context-engineering guide](https://docs.langchain.com/oss/python/langchain/context-engineering) describes short-term memory as conversation-scoped state such as messages, uploaded files, authentication status and tool results, and long-term memory as information kept across conversations, such as user preferences, extracted insights and historical data. Short-term state lives in a thread. According to the [agent harness documentation](https://docs.langchain.com/oss/python/langchain/agents), persisting that thread requires a checkpointer and a thread_id, and without a checkpointer the agent retains nothing across runs.

Once a thread persists, it grows. A transcript that is replayed forever eventually costs too much and can overflow the model's context window, so you need a reduction strategy. There are three levers, and most production agents combine them.

| Strategy | What it keeps | What is lost | When to use it |
|---|---|---|---|
| Buffer window (trimming) | The most recent raw messages | Older messages, with no trace of their details | Short tasks where only recent turns matter |
| Summary memory | A compact summary plus recent messages intact | Details the summarizer omitted | Long sessions that need the gist of earlier turns |
| Long-term store | Chosen facts, preferences and insights across threads | Anything you did not decide to save | Information a user expects you to remember next week |

The trade-offs in this table come from how [LangChain describes trimming and summarization](https://docs.langchain.com/oss/python/langchain/context-engineering): trimming drops older raw messages outright, while summarization replaces them with a summary that is lossy by design. Cross-thread persistence is a separate mechanism, and the [prebuilt middleware docs](https://docs.langchain.com/oss/python/langchain/middleware/built-in) show a backend where files under /memories/ survive across threads while everything else stays ephemeral.

You will know the skill is working when a returning user gets the same answer about their saved preference in a new thread, a two-hour session still references its original goal, and token usage per turn stays roughly flat instead of climbing with every message.

## How It Works

A LangChain agent takes a sequence of messages as input and returns messages that include the model's reply plus any tool calls and results. Memory management is the set of decisions about what goes into that input sequence on each turn.

**Thread persistence.** When you compile an agent with a checkpointer, the harness saves conversation state after it runs. On the next invocation, you pass the same thread_id and the checkpointer reloads that thread's history before the model is called. The [agent documentation](https://docs.langchain.com/oss/python/langchain/agents) gives InMemorySaver() as a local checkpointer example. It keeps history in process memory, which is fine for development and tests but disappears when the process restarts, so production deployments need a durable backend. A different thread_id means a different conversation, which is how you isolate users and sessions from each other.

**Context shaping.** Between loading the thread and calling the model, middleware can intervene. [LangChain's context-engineering guide](https://docs.langchain.com/oss/python/langchain/context-engineering) describes middleware that can update context or jump to a different lifecycle step, and gives a pattern of loading user preferences, choosing or overriding a model, and passing the resulting context into the agent at runtime. This is where trimming and summarization happen.

**Trimming** cuts the message list down to a recent window. It is cheap and predictable, but anything outside the window is gone from the model's view. An older style of this appears in [OpenAI's LangChain cookbook example](https://developers.openai.com/cookbook/examples/how_to_build_a_tool-using_agent_with_langchain), which creates ConversationBufferWindowMemory(k=2) to keep the last two turns and passes it to an AgentExecutor with verbose tracing enabled.

**Summarization** takes the older messages plus any existing summary and produces an updated summary. Per the [LangChain documentation](https://docs.langchain.com/oss/python/langchain/context-engineering), a separate LLM call writes the summary, the summary message replaces the older messages in state, recent messages stay intact, and the updated summary is persisted so future turns see the summary rather than the originals. That replacement is permanent in working state: if the summarizer drops a detail, the agent cannot recover it unless you saved it somewhere else.

**Long-term storage** sits outside the thread entirely. You write selected facts to a store and retrieve them into context when they are relevant. The [prebuilt middleware docs](https://docs.langchain.com/oss/python/langchain/middleware/built-in) describe configuring a CompositeBackend with a StoreBackend for /memories/, so files with that prefix persist across threads while other files remain in ephemeral thread state. The design rule that follows is simple: the thread holds the working conversation, the store holds what should outlive it.

Put together, each turn runs the same sequence: load the thread by thread_id, retrieve any relevant long-term facts, trim or summarize if the context is over budget, call the model, then checkpoint the new state. Problems usually show up at one of these seams. An agent that forgets everything between requests is missing a checkpointer or is receiving a fresh thread_id. An agent that forgets a specific early instruction has had it trimmed or summarized away. An agent whose cost climbs every turn has no reduction step at all.

## Step-by-Step Guide

### Step 1: Inventory the state your agent touches

List every kind of information the agent reads or produces: messages, uploaded files, authentication status, tool results, user preferences and derived insights. Sort each item into thread-scoped or cross-thread, using the split [LangChain draws between short-term and long-term memory](https://docs.langchain.com/oss/python/langchain/context-engineering). Mark anything that must be recalled verbatim, such as order numbers, legal wording or exact figures a user gave you. The output is a short table that drives every later decision about trimming, summarizing and storage.

> **Pro tip:** If you cannot say why an item needs to be remembered, default it to thread-scoped and let it expire with the conversation.

### Step 2: Attach a checkpointer and a stable thread_id

Configure the agent with a checkpointer so thread state is saved between invocations, and pass a thread_id on every call. The [agent docs](https://docs.langchain.com/oss/python/langchain/agents) use InMemorySaver() as the local example, which is enough to prove the wiring works. Derive the thread_id from something stable in your application, such as a session or conversation record, so retries and reconnects land in the same thread. Confirm the behavior by sending two turns where the second refers back to the first.

> **Pro tip:** Write one test that runs two invocations with the same thread_id and one with a new thread_id; the first pair should share memory and the new one should not.

### Step 3: Set a context budget for the thread

Decide how much of the model's context window the conversation history may consume, leaving room for the system prompt, retrieved facts and tool outputs. Pick a trigger for reduction, for example when history passes a set share of the window or a set number of messages. The budget turns memory from an open-ended accumulation into a policy you can reason about. Without it, you only discover the problem when a long session fails or costs spike.

> **Pro tip:** Measure a realistic long conversation from your logs before choosing the number, rather than guessing from the model's advertised window.

### Step 4: Configure trimming for recent-message windows

For agents where only the latest exchanges matter, trim history to a recent window before each model call. Keep the system prompt and any pinned instructions outside the trimmed region so they never fall off. Remember that trimming [removes older raw messages rather than summarizing them](https://docs.langchain.com/oss/python/langchain/context-engineering), so anything outside the window is invisible to the model. Check that tool calls and their results are kept or dropped together, since a dangling tool result without its call confuses the model.

> **Pro tip:** Trim on whole exchanges, not individual messages, so a user turn is never separated from the reply or tool result that answered it.

### Step 5: Configure summarization for long sessions

When earlier turns still matter but no longer fit, summarize them. The [LangChain workflow](https://docs.langchain.com/oss/python/langchain/context-engineering) makes a separate LLM call over older messages and the existing summary, replaces those messages with the updated summary, and keeps recent messages intact. Write the summarization prompt to preserve goals, decisions, open questions and user-stated constraints. Review a few real summaries by hand before shipping, because what the summarizer omits is lost from working state.

> **Pro tip:** Give the summary fixed headings such as goal, decisions made and open items, which makes omissions easy to spot in review.

### Step 6: Decide what earns long-term persistence

From your inventory, pick the facts that should survive past the thread: stable preferences, confirmed account details, insights you want to reuse. Write those to a long-term store instead of copying whole transcripts. The [prebuilt middleware docs](https://docs.langchain.com/oss/python/langchain/middleware/built-in) show one layout where anything under /memories/ persists across threads through a StoreBackend and everything else stays ephemeral. Retrieve stored facts into context only when the current task needs them.

### Step 7: Test recall across turns, threads and restarts

Build a small suite of conversations that probe each layer: a fact from three turns ago, a fact from before a summarization, a preference saved in a previous thread, and state after a process restart. Assert on what the agent says, not just on what is stored. Track tokens per turn across a long scripted session to confirm the reduction step keeps usage flat. Failures here point directly to the layer that is misconfigured.

> **Pro tip:** Keep one deliberately long scripted session in the suite so regressions in trimming or summarization show up before users hit them.

## Best Practices

- Treat memory as a context decision, not a storage feature. The question on each turn is what the model needs now, which is how [LangChain frames memory under context engineering](https://docs.langchain.com/oss/python/langchain/context-engineering). Framing it this way stops you from defaulting to replaying everything.
- Keep exact-recall data out of the summarizable region. Summaries replace older messages permanently in working state, so identifiers, quotes and figures a user gave you belong in structured state or a long-term store where the summarizer cannot drop them.
- Use a durable checkpointer in production. InMemorySaver() is the [documented local example](https://docs.langchain.com/oss/python/langchain/agents), and process memory vanishes on restart or when requests hit a different worker, so users would silently lose their history.
- Separate thread state from cross-thread facts by design. A layout like the [/memories/ prefix backed by a StoreBackend](https://docs.langchain.com/oss/python/langchain/middleware/built-in) makes the boundary explicit, so nobody has to guess which data survives a new conversation.
- Write only curated facts to long-term memory. Preferences, confirmed details and extracted insights are useful across threads; raw transcripts are noise that crowds retrieval and raises privacy exposure.
- Retrieve long-term facts on demand rather than injecting them on every turn. Pulling in only what the current request needs keeps the active context focused and leaves room for tool results.
- Log what actually entered the context for each call. When an agent misremembers, the fastest diagnosis is seeing the exact messages, summary and retrieved facts the model received on that turn.

## Common Mistakes

- **Assuming that defining an agent gives it memory.** — Persistent history needs an explicit checkpointer and a consistent thread_id, as the [agent documentation](https://docs.langchain.com/oss/python/langchain/agents) states. If every request generates a fresh thread_id, the agent starts blank each time even with a checkpointer attached.
- **Sending the entire raw transcript on every turn indefinitely.** — Unbounded history raises cost and can eventually exceed the context window. Add trimming or [summarization for long-running sessions](https://docs.langchain.com/oss/python/langchain/context-engineering) with a clear trigger tied to your context budget.
- **Relying on summaries for details that must be recalled word for word.** — Summarization is lossy and replaces older messages in state, so an omitted detail is gone from working context. Persist exact values separately before they age into the summarized region.
- **Storing every message in long-term memory.** — Long-term memory is meant for preferences, extracted insights and historical data, not the active transcript. Decide which facts deserve persistence and write only those, so retrieval returns signal rather than clutter.
- **Trimming by message count without respecting tool-call pairs.** — Cutting between a tool call and its result leaves the model with an orphaned observation or an unanswered call. Trim on whole exchanges so each request stays paired with its result.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/langchain/METHOD.md) — LangChain

## Related Skills

- [Designing Autonomous Agents with LangChain](../designing-autonomous-agents/SKILL.md)
- [Building RAG Pipelines with LangChain](../building-rag-pipelines-with-langchain/SKILL.md)
- [Chaining Prompts and Composing LLM Workflows](../chaining-prompts-and-composing-workflows/SKILL.md)
- [Configuring LLM Providers and Models in LangChain](../configuring-llm-providers-and-models/SKILL.md)
- [Integrating External Tools and APIs into LangChain](../integrating-external-tools-and-apis/SKILL.md)
- [Loading and Splitting Documents for LLM Processing](../loading-and-splitting-documents/SKILL.md)
- [Crafting Reusable Prompt Templates in LangChain](../crafting-prompt-templates/SKILL.md)

## Sources

- [How to build a tool-using agent with LangChain - OpenAI](https://developers.openai.com/cookbook/examples/how_to_build_a_tool-using_agent_with_langchain)
- [Context engineering in agents - Docs by LangChain](https://docs.langchain.com/oss/python/langchain/context-engineering)
- [Configure the harness](https://docs.langchain.com/oss/python/langchain/agents)
- [Prebuilt middleware - Docs by LangChain](https://docs.langchain.com/oss/python/langchain/middleware/built-in)
