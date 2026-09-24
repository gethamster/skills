# Examples: Translating Operational Problems into Technical Requirements

## Claims backlog at an insurer

**Scenario:**

Illustrative scenario: an operations director says the claims queue is 'out of control' and asks for an AI triage tool. Adjusters say they spend most of their time chasing missing documents.

**Walkthrough:**

The engineer captures both framings, then walks the workflow with adjusters and finds that many simple claims stall because required documents arrive in a separate email inbox. The cause is not triage but document matching. With the director, the engineer picks one outcome: simple claims reach an adjuster with all documents attached. The metric is the share of simple claims needing a document chase, measured for a made-up baseline week before any build.

Requirements name the adjuster, the trigger (a new claim or a new email), the matching behaviour and the check, and the email connector is tagged as potentially reusable. The triage tool goes into the backlog as a later outcome, and the director agrees because the chosen metric is one they already report.

## Maintenance scheduling at a utility

**Scenario:**

Illustrative scenario: planners at a utility say the maintenance schedule is 'never right' and want a better optimizer. The sponsor wants fewer emergency call-outs.

**Walkthrough:**

The engineer traces the symptom and finds planners rebuild the schedule by hand each week because crew availability lives in a spreadsheet the scheduling system cannot read. Two goals are on the table, so the engineer writes both down and asks the sponsor to choose; the sponsor picks schedule accuracy first, reasoning that call-outs follow from it. The outcome becomes 'planners publish the weekly schedule without manual rework', with a guardrail on missed inspections. Access checks reveal the crew spreadsheet contains personal data, so a governance constraint is added before any requirement touches it.

The optimizer request is recorded as a non-goal for the first phase.

## A dashboard request at a logistics firm

**Scenario:**

Illustrative scenario: a regional manager asks for a real-time dashboard of late shipments. The request arrives fully formed, with a mock-up.

**Walkthrough:**

Instead of building from the mock-up, the engineer asks what the manager would do after spotting a late shipment. The answer is to call the carrier and reroute, which usually happens too late to matter. The requirement is rewritten around that action: dispatchers are alerted when a shipment is at risk early enough to reroute, verified against a made-up target lead time the manager proposes. The metric becomes the share of at-risk shipments rerouted before the delivery window.

The dashboard survives as a secondary view, but the first build is the alert, and playback with dispatchers adds a constraint about which carriers can actually be rerouted.
