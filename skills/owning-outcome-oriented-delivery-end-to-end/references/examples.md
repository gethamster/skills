# Examples: Owning Outcome-Oriented Delivery End to End

## Claims triage with an adoption gap

**Scenario:**

Illustrative scenario: an embedded team deploys a triage assistant for an insurer's claims queue, contracted to cut average time to first decision from a made-up baseline of 6 days to 4 days.

**Walkthrough:**

The team captures the baseline from the claims system before release and sets milestones: one adjuster team live, adoption stable across all three teams, metric moved, insurer staff operating unaided. After the first milestone the dashboard shows one team using the tool on most claims while the other two barely touch it. Rather than adding features, the team sits with the low-usage adjusters and finds the assistant's output lands in a screen they never open. Moving the output into their existing queue view lifts adoption, and the time-to-decision metric starts falling toward the target.

The milestone review records the fix and the sponsor approves moving on.

## Saying no through the scope log

**Scenario:**

Illustrative scenario: midway through a maintenance-scheduling deployment at a plant, a regional director asks the embedded engineer to also build a supplier invoice report.

**Walkthrough:**

The engineer runs the request through the scope gate. The report is useful but does not affect the contracted metric of unplanned downtime hours. It goes into the scope log with the director's name and date, and the engineer tells the director it will be decided at the next milestone review. At that review the sponsor defers it to a separate engagement.

Downtime work stays on schedule and the director sees a clear decision rather than a silent refusal.

## Ending on the operate-unaided milestone

**Scenario:**

Illustrative scenario: a logistics customer's route-planning system has hit its target of a made-up 10% fewer late deliveries, and the calendar end date is two weeks away.

**Walkthrough:**

The metric is met, but the final rung is the customer team operating the system unaided. The team runs a rehearsal week where customer engineers handle all changes and incidents while forward deployed engineers only observe. Two gaps surface: nobody on the customer side can retrain the demand model, and alert routing still points to the vendor. The team treats both as handover blockers, pairs a customer data engineer on a retraining run and moves alerts to the customer's on-call rotation.

Only after a clean second rehearsal does the sponsor sign off on exit.
