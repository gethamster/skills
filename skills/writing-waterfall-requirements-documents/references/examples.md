# Examples: Writing Waterfall Requirements Specification Documents

## Rewriting vague requirements for a booking system

**Scenario:**

Illustrative scenario: a clinic's first draft of requirements for an appointment booking system includes statements such as "the system should be easy to use" and "booking must be quick."

**Walkthrough:**

The analyst works through each statement with the clinic's operations lead. "Easy to use" becomes a set of specific requirements: a patient can book an appointment without creating an account, and the booking form meets the accessibility standard the clinic has committed to. "Quick" becomes an event-driven statement: when a patient confirms a booking, the system shall send a confirmation message within an agreed time.

Each rewritten requirement gets an identifier, a source and a note on how it will be tested. The testers review the draft and flag two statements they still cannot test, which are rewritten before the review meeting.

## Resolving a conflict between departments

**Scenario:**

Illustrative scenario: during elicitation for a procurement system, the finance team wants every purchase above a threshold approved by a finance manager, while the operations team wants urgent repairs to be ordered without delay.

**Walkthrough:**

The analyst records both needs with their sources and takes the conflict to the sponsor. The decision is an unwanted-behavior requirement: if a purchase is flagged as an urgent repair, then the system shall allow the order and route it for approval after the fact. The decision and its reason are recorded in the specification's decision log.

The traceability matrix links the new requirement to both source needs, so if either department later questions it, the history is clear.

## Baselining a specification for a contract

**Scenario:**

Illustrative scenario: a software vendor must deliver a specification as the first contract milestone for a public-sector case management system.

**Walkthrough:**

The vendor structures the document with a purpose and scope section, an overall description of users and interfaces, and specific requirements grouped by case type, followed by non-functional requirements for availability, security and data retention. A glossary settles the difference between a case, a file and a matter, which the customer's teams had used interchangeably.

A formal review with the customer's case workers, security officer and records manager produces a list of findings, each resolved in writing. Once the exit criteria are met, both sides approve the document, it is baselined, and the change control process from the contract takes effect.
