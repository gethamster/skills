# Examples: Deploying and Operating Production Systems On-Site

## Hardening a claims triage service before go-live

**Scenario:**

Illustrative scenario: a forward deployed team has a working prototype that routes insurance claims to adjusters, running with a shared admin credential and logs written to local disk.

**Walkthrough:**

The team starts with the environment profile and learns the insurer requires all secrets in its central vault and all logs in its existing log platform. They replace the shared credential with two scoped service accounts, one read-only for the claims database and one write-only for the routing queue. Logs and a small set of health metrics move into the insurer's monitoring stack, with an alert when the queue backs up beyond an agreed threshold, for example 15 minutes of unprocessed claims. They add a precondition check that blocks releases if the claims schema has changed.

Finally they kill the routing worker on purpose during a quiet period and confirm the alert reaches the insurer's on-call engineer.

## Live validation that uncovered a data problem

**Scenario:**

Illustrative scenario: a maintenance scheduling tool passed every staging test, but planners at one plant keep overriding its recommendations during live validation.

**Walkthrough:**

The team sits with the planners and logs each override with the reason given. Most overrides trace to the same cause: the plant records equipment downtime in a spreadsheet that never reached the source system the tool reads. The team classifies this as a data issue, not a code bug, and works with the plant to route downtime entries into the source system. They add a precondition check that flags when downtime data is older than an agreed window, for example 24 hours.

Overrides drop, and the planners stop running their parallel manual schedule, which the team treats as the signal validation is complete.

## Handing over a forecasting pipeline at the exit milestone

**Scenario:**

Illustrative scenario: after several months embedded with a logistics customer, a forward deployed team reaches the agreed milestone of a forecasting pipeline running in production.

**Walkthrough:**

For the final weeks the customer's two data engineers take primary on-call, with the forward deployed team as backup. Each incident they handle becomes a runbook entry they write, covering a late upstream feed, a failed model refresh and a disk filling up. Both customer engineers perform a release and a rollback without help. The handover package lists the one proprietary component, the vendor's orchestration layer, with notes on what replacing it would involve.

The team routes all alerts to customer on-call, removes its standing access, and books a check-in a few weeks out to confirm nothing still pages them.
