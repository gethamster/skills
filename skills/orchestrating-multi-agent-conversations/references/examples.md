# Examples: Orchestrating Multi-Agent Conversations and Collaboration

## Content pipeline with a reviewer gate

**Scenario:**

Illustrative scenario: a marketing team wants product announcements drafted, fact-checked against a spec sheet and formatted for three channels, and one agent keeps mixing tone rules with fact rules.

**Walkthrough:**

The team splits the work into a drafter, a fact-checker with read-only access to the spec sheet, and a formatter. They choose a sequential pipeline because the order never changes. The drafter hands off a structured draft with claims listed separately, so the fact-checker checks claims without reading the whole conversation. The fact-checker returns either an approved verdict or a list of corrections, and the drafter gets at most two revision rounds before the run escalates to a human editor.

On a test set of 15 made-up announcements, runs end on approval in most cases and the team sets a per-run token budget from the measured average.

## Support triage with specialist handoffs

**Scenario:**

Illustrative scenario: a software company's support agent must handle billing, bug reports and account access, and its instructions have grown so long that it confuses refund policy with security policy.

**Walkthrough:**

The team keeps one front agent that classifies the request and hands off to a billing agent, a bug-intake agent or an access agent. Each specialist holds only its own tools; only the billing agent can issue refunds, and refunds above a set amount require human approval. The handoff payload carries the customer ID, the classified intent and a short summary, not the full chat. When a specialist sees a request outside its scope, it hands back to the front agent instead of guessing.

The team tests misrouted requests deliberately and tracks how often a specialist asks for information the front agent already collected.

## Cross-team research with a remote agent

**Scenario:**

Illustrative scenario: an analytics team's orchestration needs pricing data owned by another team that runs its own agent on a different platform.

**Walkthrough:**

Instead of reimplementing the pricing logic, the team calls the other team's agent over the A2A protocol as one participant in a concurrent fan-out. Their local market agent and the remote pricing agent work on the same brief in parallel, and a synthesizer agent merges the results. The remote call gets a timeout of, for example, 30 seconds and a fallback that marks pricing as unavailable rather than failing the run. The synthesizer validates that the remote response contains the agreed fields before using it.

A chaos test with the remote agent switched off confirms the run still completes with a clearly flagged gap.
