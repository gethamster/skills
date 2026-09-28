# Examples: Coordinating Multiple ARTs with Solution Trains

## Aligning two trains with different calendars

**Scenario:**

Illustrative scenario: A payments platform has a customer-facing ART and a core-ledger ART whose PIs start three weeks apart, and every cross-train request waits for the other train's next planning event.

**Walkthrough:**

The solution facilitator proposes a single calendar and picks the next PI boundary for the switch. The core-ledger train runs one PI that is three weeks shorter so both trains start the following PI on the same day. Iteration boundaries are aligned at the same time, creating shared integration points every two weeks in this made-up setup. In the first aligned PI, both trains plan in the same week against one ranked list of solution capabilities.

Cross-train requests are now matched during reconciliation instead of waiting weeks for a counterpart planning event.

## Resolving an unmatched dependency after planning

**Scenario:**

Illustrative scenario: During post-planning reconciliation for a connected-vehicle solution, the telematics train needs a new data interface from the firmware train by its third iteration, but the firmware train has not planned it.

**Walkthrough:**

The facilitator flags the request as unmatched and brings in the solution content owner and architect. The content owner confirms the telematics capability ranks higher than one of the firmware train's planned items. The architect finds that a narrower version of the interface would unblock telematics and costs the firmware train less capacity. The firmware train swaps out a lower-ranked item and commits to the narrow interface in its second iteration.

The dependency board records the new commitment, and both train leads brief their teams the same day.

## Catching an interface mismatch at an iteration integration point

**Scenario:**

Illustrative scenario: Three trains building a hospital scheduling solution integrate at the end of each iteration, and the second integration fails because two trains interpreted an appointment status field differently.

**Walkthrough:**

Because integration happens every iteration, the failure is found two weeks into the PI rather than at the end. The architect traces the problem to an ambiguous interface definition and publishes a corrected version. Each affected train adds a small fix story to its next iteration. The cross-train sync adds interface reviews to the preparation checklist for the next PI.

At the PI-end review, the team records the ambiguous interface as a root cause and feeds it into each train's Inspect and Adapt workshop.
