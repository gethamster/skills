# Examples: Selecting and Executing Bounded Actions

## Support intent routing

**Scenario:**

Illustrative scenario: a banking support assistant receives the message asking to see recent charges and dispute one of them.

**Walkthrough:**

The action catalog has four options: check balance, list transactions, open dispute, and no match. The Choice question returns open dispute with a confidence of 0.72, which clears the team's low gate. Because opening a dispute is a reversible write, the router still asks the customer to confirm the specific charge. Validation confirms the transaction ID belongs to the authenticated account.

The dispute is created, the executor re-reads the case record to confirm it exists with the right transaction, and the result is written to state.

## Deployment agent with a scope violation

**Scenario:**

Illustrative scenario: an internal agent that manages staging environments is asked to restart a service and picks the restart action with high confidence.

**Walkthrough:**

The chosen action is in the catalog and above the gate, so it moves to validation. The argument names a production service, but the scope rule only allows services tagged staging. Validation fails, the action does not run, and the reason is written into state. The case routes to an on-call engineer with the original request and the failed check attached.

The team later adds a separate production restart action in a high-stakes tier that always requires human approval.

## Document triage with no good fit

**Scenario:**

Illustrative scenario: an intake agent sorts incoming documents into invoice, contract, or receipt queues and receives a signed non-disclosure agreement scanned upside down.

**Walkthrough:**

The first version of the catalog had no no-match option, and similar files had been landing in the contract queue with confidence around 0.55. After adding a no-match option and a gate, the same document returns no match. The router sends it to a human review queue with the extracted text attached. Reviewers see which documents fall outside the catalog, and after enough of them they add a legal agreement option.

Misfiled documents in the contract queue drop because the model now has an honest way to decline.
