# Examples: Defining the Customer Experience Before Building

## A small-business invoicing product

**Scenario:**

Illustrative scenario: a team has an approved PR/FAQ for an invoicing tool aimed at freelance designers. The press release promises that a designer can send a professional invoice from their phone in under a minute.

**Walkthrough:**

The product manager writes the first-use story: the designer finishes a job, opens the app, picks the client, adds the work, and sends. Writing it step by step shows that a new user has no clients saved, so the first invoice needs client details typed on a phone. The story also asks what the client sees when the invoice arrives, which nobody had considered.

The team adds a second story for the client paying the invoice and sketches both screens. The capability list now includes importing contacts and a hosted payment page, and it drops a reporting dashboard that no story needed.

## A developer API with code-first stories

**Scenario:**

Illustrative scenario: a platform team plans an API that lets developers add address validation to checkout forms. The customer is a developer at an online store.

**Walkthrough:**

Following the practice of writing use cases with code snippets for web services, the team writes three short examples: validating one address, validating as the customer types, and handling an address the service cannot verify. Writing the third example shows the team has no answer for what the developer should show the shopper.

The draft user manual's concepts section lists two concepts, a validation result and a confidence level. Reviewers push back on the second, and the team replaces it with a simple valid, invalid or needs-review status. The capability list shrinks accordingly.

## A service experience with human handoffs

**Scenario:**

Illustrative scenario: a company selling equipment to small clinics wants to offer installation and training. The press release promises clinics are up and running the day the equipment arrives.

**Walkthrough:**

The stories follow the clinic manager from ordering to first use. Writing them reveals three handoffs: sales to scheduling, scheduling to the installer, installer to the trainer. Each handoff is a point where the clinic might wait or repeat information.

The capability list includes a shared booking record that all three teams can see and a single contact for the clinic. The team also realizes that the same-day promise depends on installer availability, and updates the FAQ with the regions where it can be kept at launch.
