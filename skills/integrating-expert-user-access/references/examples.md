# Examples: Integrating Expert User Access into Development Workflow

## Clinic scheduling tool with a front-desk expert

**Scenario:**

Illustrative scenario: a small team is building appointment scheduling for outpatient clinics. Developers keep guessing how front-desk staff handle walk-ins and double bookings, and the only domain contact is the clinic's IT manager.

**Walkthrough:**

The product manager lists the stalled questions and sees they all concern front-desk work. Instead of the IT manager, they recruit an experienced receptionist and agree with the clinic manager on a standing weekly session plus a shared channel for quick questions. Developers ask the receptionist directly about walk-in handling and learn that staff hold unofficial buffer slots each morning. The receptionist then uses the integrated build to book a real day's appointments and gets stuck on rescheduling.

Both findings go into the log, the buffer assumption becomes a new backlog item, and the rescheduling flow is reprioritised for the next cycle.

## Replacing a tester proxy in an internal finance app

**Scenario:**

Illustrative scenario: a team building an expense-approval tool has relied on its QA lead as the expert user because finance staff seemed too busy. Features pass tests but finance keeps rejecting them at release.

**Walkthrough:**

In a reflection workshop the team recognises that the QA lead checks behaviour against the spec but cannot say whether the spec matches how approvals really work. The product manager negotiates a small, regular slice of time from an accounts-payable clerk. The clerk reviews the current build and rejects the team's assumption that approvers work one expense at a time; they batch by cost centre. The team rewrites the acceptance criteria for the approval screen.

The QA lead stays in the loop, now testing against criteria the clerk has validated.

## Reviving a decayed expert channel

**Scenario:**

Illustrative scenario: early in a logistics project, a warehouse supervisor answered developer questions daily. Several months in, questions sit unanswered for a week and developers have started guessing.

**Walkthrough:**

The product manager checks the feedback log and finds that recent expert suggestions produced no backlog changes, so the supervisor stopped seeing the point. They meet the supervisor, walk through the items that never moved, and commit to reporting what changes after each session. The team also shortens sessions and batches low-urgency questions to respect the supervisor's time. Two items the supervisor raised are pulled into the next cycle and credited to them.

Response times recover, and the team adds a standing check on expert-driven changes to its reflection agenda.
