# Examples: Prototyping Solution Workflows with Users

## Claims triage queue at an insurer

**Scenario:**

Illustrative scenario: an FDE is asked to use AI to speed up claims handling across an entire claims department with several queues and dozens of adjusters.

**Walkthrough:**

Instead of the whole department, the FDE scopes one queue: incoming water-damage claims handled by a team of six adjusters. The smallest usable deployment reads new claims from the existing system, suggests a priority and a missing-document list, and lets adjusters accept or override. The first gravel road version has a plain table view and a manual export step. In the first live demo, the claims manager expected priority to reflect payout size while adjusters ranked by customer vulnerability, a conflict nobody had raised in discovery.

The FDE settles the ranking rule with both in the room, adjusts the model, and ships the change within the week. A request for a custom branded dashboard is logged and parked because it does not move time-to-first-contact, the agreed metric.

## Maintenance scheduling at a plant

**Scenario:**

Illustrative scenario: a manufacturer wants predictive maintenance across three production lines, and the plant director asks for a full scheduling system.

**Walkthrough:**

The FDE picks one line and one process step: deciding which machines get inspected during the weekly maintenance window. The gravel road is a daily list generated from sensor readings and work-order history, printed and handed to the maintenance lead. At the first demo, technicians point out that two sensors report in different units, which the data labels never showed. The fix goes into the next cycle along with a simple way to mark a recommendation as wrong.

After a few cycles the maintenance lead relies on the list, and the unit-normalization logic is flagged as a candidate reusable component for other lines and customers.

## Pushing back on a customization spiral

**Scenario:**

Illustrative scenario: a logistics customer's operations team sends a long list of requests after the second demo of a shipment-exception prototype, including custom colors per depot and a bespoke report for one regional manager.

**Walkthrough:**

The FDE sorts the list into defects, understanding gaps and new requests. Two items are real defects and one reveals that exceptions are handled differently at night, which changes the workflow model. Those go into the next cycle. For the new requests, the FDE asks whether other depots or customers would need them: per-depot colors do not move the exception-resolution metric and are declined with a reason, while a filter by carrier turns out to be needed everywhere and is marked as a reusable feature.

The regional report is parked until the core slice is stable. The request log records each decision so the sponsor sees why the scope stayed narrow.
