# Examples: Selecting and Comparing AI Agent Architectures

## Support assistant on an existing chat-completion deployment

**Scenario:**

Illustrative scenario: a team runs its model through Semantic Kernel AI services and wants an agent that answers order questions using an order lookup function and a refund policy function.

**Walkthrough:**

The profile lists the provider constraint, two tools, per-conversation state and no files. Shortlisting points to ChatCompletionAgent because it is built on the Semantic Kernel AI-service abstraction. The team wires both functions into one plugin and adds it to the kernel. The first smoke test shows the agent answering from general knowledge without calling the lookup, and the trace reveals function calling was never enabled.

After enabling it, every status question triggers the lookup. The decision record names ChatCompletionAgent, notes that function calling must stay explicitly enabled, and records that OpenAIAssistantAgent was rejected because the team does not use the Assistants API.

## Weighing both built-in types for a research agent

**Scenario:**

Illustrative scenario: an architect can reach both a chat-completion deployment and the OpenAI Assistants API and must pick one for an agent that searches internal notes and summarizes findings.

**Walkthrough:**

The architect builds a single plugin set with a search function and a citation formatter and attaches it to both candidates. Function calling is enabled on the ChatCompletionAgent so both call tools automatically. Ten made-up research tasks run against each agent with identical instructions. Scores come from the profile's checks: did the agent search before summarizing, and did every claim carry a citation from the formatter.

Both pass most checks, and the tie is broken by the state model the team already operates. The record lists the winner, the service it depends on, and the operational reason the other was rejected.

## Justifying a custom agent

**Scenario:**

Illustrative scenario: a platform team needs an agent to route work through an internal model gateway that neither built-in agent type can address directly.

**Walkthrough:**

The profile states the gateway requirement as a pass or fail check. Both built-in types are tested with the shared plugin set and both fail that single check while passing the rest. The team records the gap and scopes a custom agent on the common Agent abstraction that only adds gateway routing. The same task set reruns against the custom agent, which passes the gateway check and matches the built-ins elsewhere.

The decision record links all three traces, so a later reviewer can see the custom code exists for one documented reason.
