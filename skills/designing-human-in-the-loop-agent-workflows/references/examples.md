# Examples: Designing Human-in-the-Loop Agent Workflows

## Refund agent with argument-scoped approval

**Scenario:**

Illustrative scenario: a support team deploys an agent that can look up orders, issue refunds and email customers.

**Walkthrough:**

The inventory shows three functions: order lookup, refund issue and customer email. Lookup is tiered read-only and runs automatically. Refund issue is irreversible, so the team writes an argument-scoped rule: refunds up to an amount they choose, say 50 made-up currency units, run automatically, and anything above waits for a team lead. Customer email is external, so every outgoing message is shown to the agent's human owner before sending.

The audit log records each call, and after two weeks the team sees the email gate fires on almost every conversation, so they move templated confirmations to automatic sending and keep review for free-text replies.

## Content agent with a separated publish path

**Scenario:**

Illustrative scenario: a marketing team wants an agent that drafts blog updates and publishes them to the site.

**Walkthrough:**

The team registers only research and drafting functions with the drafting agent, leaving the publish function off its kernel entirely. Finished drafts land in a review queue showing the change, the target page and the agent's summary of why. An editor approves, edits or rejects with a reason. Only approved drafts reach a separate service that holds the publish function.

When a test prompt asks the drafting agent to publish directly, it cannot, because the function does not exist in its tool set, and the attempt is visible in the log as an escalation.

## Operations agent with escalation rules

**Scenario:**

Illustrative scenario: an IT team uses an agent to reset user access and restart services from chat requests.

**Walkthrough:**

Access resets are reversible writes and run automatically after an identity check. Service restarts are gated before invocation and require an on-call engineer's approval. The team adds escalation rules: if the same restart fails twice, or if a request mentions production data deletion, the agent stops and routes the task to the on-call queue with the full tool history. During testing, a request phrased to avoid the word restart still reached the restart function, and the pre-invocation gate caught it.

The team adds that phrasing to the regression suite.
