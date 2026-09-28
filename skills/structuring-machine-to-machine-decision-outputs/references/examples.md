# Examples: Structuring Machine-to-Machine Decision Outputs

## Routing support tickets by category

**Scenario:**

Illustrative scenario: a support team wants a decision model to assign incoming tickets to one of five queues, with uncertain tickets going to a triage lead.

**Walkthrough:**

The team writes a contract with a ticket_category enum of five values, a required confidence, an optional distribution and a contract version. The adapter maps the vendor payload into that contract and rejects any category outside the enum. Routing sends tickets with confidence of 0.85 or higher straight to the queue and everything else to triage, a made-up starting point. Every decision is logged with its request identifier, and the eventual queue a ticket resolved in is joined back as the outcome.

After a few weeks the team reviews the log and raises the threshold for one category that was often reassigned. The triage lead's workload is now a function of a configurable number rather than guesswork.

## Catching a silent vendor format change

**Scenario:**

Illustrative scenario: after a provider update, a field carrying the confidence value is renamed in the raw response, and nobody announces it.

**Walkthrough:**

The adapter encounters an unrecognized field and a missing confidence, so it raises a typed error instead of guessing. The validator's rejection rate for the affected decision type jumps from near zero to nearly every request within an hour. The alert fires on the rate change, and all affected cases fall back to human review, so no automated action runs on unvalidated data. An engineer updates the adapter mapping, adds the new raw payload to the fixture set, and the contract tests pass in CI.

Downstream code never changes, because it only reads the internal contract.

## Adding automation to refund approvals

**Scenario:**

Illustrative scenario: a finance team wants software to approve small refunds automatically but is wary of errors on an irreversible action.

**Walkthrough:**

The contract defines a boolean approve decision, a required confidence and a distribution over approve and deny. The team runs in shadow mode first: the router logs what it would have done while staff still decide every case. Comparing the log with staff decisions shows the model's high-confidence approvals almost always matched, while mid-confidence ones often did not. The team switches on automation only for approvals at 0.95 or higher, an invented cutoff for this scenario, and routes all denials to a person regardless of confidence.

The route and later chargeback outcome are logged for every refund, so the threshold can be revisited with evidence.
