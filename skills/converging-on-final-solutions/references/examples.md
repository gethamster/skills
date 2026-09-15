# Examples: Converging on Solutions in the Deliver Phase

## Example: E-Commerce Checkout Redesign

**Scenario:**

A mid-size e-commerce company has completed the Discover, Define, and Develop phases of the double diamond model for their checkout experience. The problem statement is: 'Mobile users abandon checkout at a 68% rate because the multi-step process feels uncertain and lengthy.' The Develop phase generated seven concept directions ranging from a single-page checkout to a conversational chatbot-style flow.

**Walkthrough:**

The team first establishes evaluation criteria: must-haves include PCI compliance, support for three payment methods, and sub-60-second completion time. Differentiators include perceived simplicity (weighted 5), trust signals (weighted 4), and development effort (weighted 3).

Screening eliminates three concepts immediately: the chatbot flow fails PCI requirements, and two concepts require third-party integrations outside the technical budget. Four concepts survive.

The team builds low-fidelity clickable prototypes of each in Figma (2 days of work) and tests with 6 mobile users per concept. Results show the single-page checkout has the fastest completion time but the lowest trust scores — users feel nervous entering payment info on a page with so many fields visible. A progressive-disclosure approach (showing one section at a time with a clear progress indicator) scores highest on both speed and trust.

They select the progressive-disclosure concept and run three refinement cycles: Cycle 1 addresses the payment section layout (adding trust badges increased perceived security by 40% in A/B testing). Cycle 2 refines error handling and form validation. Cycle 3 tests the final high-fidelity prototype with 8 users, achieving a 91% task completion rate versus the 32% baseline. The solution is handed off to engineering with annotated specs and a success metric: reduce mobile checkout abandonment from 68% to below 45% within 90 days of launch.

## Example: Internal Tool Feature Prioritization

**Scenario:**

A B2B SaaS team is in the Deliver phase of redesigning their reporting dashboard. The Develop phase produced five concept directions for how users create custom reports. The team has limited engineering resources and can only ship one approach in the next quarter.

**Walkthrough:**

The product manager and design lead define must-have criteria: the solution must work with the existing data API (no backend changes), support the top 10 report types identified in discovery research, and be learnable without training documentation. Differentiators include flexibility for power users (weighted 4), time-to-first-report for new users (weighted 5), and engineering effort (weighted 3).

Screening eliminates two concepts: one requires a new query engine, another only supports 6 of the 10 required report types. Three concepts remain.

Instead of building full prototypes, the team runs a 'concept test' — they create one-page descriptions with annotated wireframes for each concept and walk 5 existing customers through them in 30-minute interviews. The drag-and-drop report builder concept generates the most enthusiasm, but customers raise concerns about handling complex filters. A template-based approach with customization options scores highest on time-to-first-report.

The team selects the template approach and builds a medium-fidelity prototype. Two iteration cycles focus on the template selection screen (users couldn't distinguish between similar templates) and the customization flow (users expected inline editing but the prototype used a modal). After fixes, the final prototype achieves a 4.2/5 average usability score from 8 customer testers. The team documents three features deferred to a future release and hands off specs with a clear post-launch measurement plan.
