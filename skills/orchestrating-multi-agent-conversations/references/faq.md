# FAQ: Orchestrating Multi-Agent Conversations and Collaboration

## When should I use multiple agents instead of one?

Split into multiple agents when a single agent's instructions conflict, when its tool set is too broad to reason about safely, or when parts of the work can run in parallel. If one agent with focused instructions handles your test cases, keep it. Multi-agent designs add turns, tokens and debugging paths, so the split has to buy you something measurable.

## Which orchestration pattern should I start with?

Start with a fixed sequential pipeline if the order of work is known, because it is the easiest to test and reason about. Move to handoffs when requests need routing to specialists, and to a concurrent fan-out when agents can work independently. Reserve manager or group-chat patterns for problems where the next step truly depends on intermediate results.

## Why do multi-agent conversations cost so much?

Each turn usually carries accumulated context forward, and every agent that reads the shared history pays for it again. One study reported the [Semantic Kernel Chat framework using approximately 6 million tokens on its TS10 case and around 28 million on its TS50 case](https://doria.fi/bitstream/handle/10024/193122/serafim_de_oliveira_mariana_celi.pdf?sequence=2&isAllowed=y). Structured handoff payloads, turn caps and per-run budgets are the main levers for keeping that under control.

## What does the A2A protocol add to an orchestration?

A2A lets your orchestration call agents that run elsewhere, on another team's service or another framework, as peers rather than rebuilding them locally. Guidance on [combining Semantic Kernel orchestration with A2A](https://devblogs.microsoft.com/agent-framework/guest-blog-building-multi-agent-solutions-with-semantic-kernel-and-a2a-protocol) frames it as the foundation for interoperable multi-agent systems. Treat each remote agent like a tool with a contract, a timeout and a fallback.

## How do I debug an orchestration that gives inconsistent results?

Log every turn with the acting agent, the functions it called and their arguments, the handoff payload and the token count. Replay a failing run and find the first turn where an agent received incomplete or irrelevant context, or called a function it should not have. Inconsistency usually traces back to a vague handoff contract, an overly broad tool set or a model-driven routing decision.
