# Examples: Designing Autonomous Agents with LangChain

## Support triage agent with a single guardrail

**Scenario:**

Illustrative scenario: a small team wants an agent that reads incoming support tickets, looks up the customer's account and drafts a reply, but must never issue refunds on its own.

**Walkthrough:**

The team starts with create_agent, a mid-sized model, a prompt describing the triage role, and three tools: look up account, search help articles and draft reply. They run it on a dozen past tickets and read each trace. The agent picks tools correctly but occasionally tries to call the billing API through the help search tool with odd arguments, so they tighten that tool's description and schema. They then add one guardrail middleware that blocks any action touching refunds and routes those tickets to a human queue.

No memory is added, because each ticket is handled in a single run.

## Research assistant using a subagent

**Scenario:**

Illustrative scenario: an analyst asks an agent to compare several vendors, which requires reading many long web pages before writing a short recommendation.

**Walkthrough:**

In the first version, the main agent calls a fetch tool repeatedly and its context fills with raw page text, so the final recommendation ignores the analyst's original criteria. The designer moves page reading into a subagent with its own fetch and extract tools and a prompt that returns a fixed summary per vendor: pricing notes, key features and open questions. The supervisor now sees only those short summaries alongside the analyst's criteria. Answers stay on topic, and the supervisor's traces become short enough to review in a minute.

The subagent's traces are checked separately when a summary looks wrong.

## Internal ops agent that must remember a session

**Scenario:**

Illustrative scenario: an operations agent helps engineers work through an incident over several hours, and engineers reconnect from different terminals during that time.

**Walkthrough:**

The first build forgets everything whenever an engineer reconnects, because no checkpointer is configured. The designer adds a durable checkpointer and derives the thread_id from the incident ID, so every terminal attaches to the same conversation. A flaky metrics API causes tool errors, so they add retry middleware with a clear error message returned to the model after the final attempt. They also add a context hook that injects the incident's current severity before each model call.

Each addition is tied to a failure observed in testing, and the log of reasons is kept with the agent's configuration.
