# Examples: Enforcing Deterministic Execution Boundaries

## Gating a refund tool in a support agent

**Scenario:**

Illustrative scenario: a support agent can issue refunds, and a decision model picks refund as the next step for a ticket with high confidence.

**Walkthrough:**

The proposal arrives with a ticket ID, an order ID and an amount drafted by the generating model. The permission gate checks that the order belongs to the ticket's customer and that the amount is within the made-up policy limit of 50 units for automatic refunds; this one asks for 80, so it is denied with a structured reason and routed to a human approver. After approval, argument validation confirms the currency and that the order has not already been refunded. The tool runner issues the refund with an idempotency key, then verification reads the order back and confirms the refund line exists.

The log shows the original proposal, the denial, the approval override and the executed refund, and state is updated so the agent does not propose a second refund.

## Protecting files in a coding agent

**Scenario:**

Illustrative scenario: a coding agent proposes deleting a directory it believes contains generated build output.

**Walkthrough:**

The permission policy allows deletions only inside the workspace's build folder and never on paths listed as sensitive. The proposed path resolves, after normalisation, to a folder outside the build directory, so the gate rejects it before any tool runs. The rejection is logged with the resolved path and written to state as a failed action, and the next decision sees that the deletion did not happen. A test case built from this proposal is added to the boundary's failure suite.

Without normalisation in validation, a relative path trick would have passed a naive prefix check.

## Verifying a rollback during an incident

**Scenario:**

Illustrative scenario: an incident agent's decision layer chooses rollback for a failing service and a severity level, from one observed state snapshot.

**Walkthrough:**

Code checks that rollback is permitted for this service at the chosen severity and that a previous healthy version exists. The tool runner triggers the rollback and captures the deployment system's response. Verification does not trust that response; it queries the running version and the health check and compares them with the intended target. The first check shows the old version still serving, so the action is recorded as failed and state is updated, which leads the next decision to escalate rather than repeat the rollback blindly.

The record keeps proposal, executed call and verification evidence side by side for the post-incident review.
