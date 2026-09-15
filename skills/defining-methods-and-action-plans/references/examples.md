# Examples: Defining Methods and Actionable Steps in V2MOM

## Example: Early-stage SaaS startup defining Q1 methods

**Scenario:**

A 12-person B2B SaaS company has a vision to become the default analytics tool for e-commerce brands under $10M revenue. Their top-ranked value is "Product simplicity" and their second value is "Speed to market." They have a working product with 40 paying customers and need to 3x their customer base within two quarters. The CEO is writing the company-level V2MOM.

**Walkthrough:**

The team brainstormed 11 candidate methods, then filtered against the values hierarchy. "Build an enterprise reporting module" scored poorly because it served neither simplicity nor speed, so it was cut. The final three methods, in rank order: (1) "Launch a self-serve onboarding flow that gets users to first insight in under 10 minutes," (2) "Create a Shopify app store listing with one-click install," (3) "Publish 15 comparison pages targeting competitor brand keywords." Method 1 earned the top rank because it directly served Product Simplicity (the top value) and enabled Method 2 and 3 by reducing the human onboarding burden. Method 1 was decomposed into three action steps: "Design onboarding wireframes (Owner: Sarah, Deadline: Jan 20, Done: clickable prototype approved by CEO, Dependencies: none)," "Implement onboarding flow in production (Owner: Marcus, Deadline: Feb 10, Done: flow live with analytics tracking, Dependencies: wireframes)," "Run 10 user tests and iterate (Owner: Sarah, Deadline: Feb 28, Done: median time-to-first-insight under 10 minutes across test cohort, Dependencies: implementation)." This structure gave every team member a clear answer to what they should be working on and when.

## Example: Enterprise product team defining methods for a platform migration

**Scenario:**

A 200-person company is migrating its core platform from a monolith to microservices. The product team responsible for the migration has 18 engineers and a 6-month timeline. Their vision is "Complete the migration with zero customer-visible downtime." Their top value is "Reliability" and their second value is "Velocity." The team lead is writing a team-level V2MOM that cascades from the engineering VP's company V2MOM.

**Walkthrough:**

The team generated 14 candidate methods. Filtering against values eliminated several velocity-focused approaches that would compromise reliability, including "Ship all services simultaneously in a big-bang cutover." The final four methods, in rank order: (1) "Implement a traffic-splitting proxy that allows incremental cutover by service," (2) "Migrate the authentication service as the first microservice," (3) "Build automated rollback triggers for each service cutover," (4) "Create a real-time migration dashboard visible to all stakeholders." Method 1 ranked first because it was purely enabling: without the proxy, no incremental migration was possible. Method 2 was selected as the first service because authentication had the fewest downstream dependencies and would validate the migration pattern. Method 3 was decomposed into action steps including "Define rollback criteria per service (Owner: Priya, Deadline: March 5, Done: criteria document reviewed by SRE lead, Dependencies: proxy implementation)," and "Implement automated rollback for auth service (Owner: James, Deadline: March 20, Done: rollback triggers tested in staging with simulated failure, Dependencies: rollback criteria + auth migration)." The dependency map revealed that Methods 2 and 3 could partially run in parallel once Method 1 delivered the proxy, saving three weeks on the critical path.

## Example: Marketing team at a mid-size B2C company

**Scenario:**

A consumer subscription company with 500K users wants to reduce churn from 8% monthly to 5%. The marketing team's V2MOM vision is "Make cancellation feel like losing something valuable, not escaping something annoying." Their values are ranked: (1) "User empathy," (2) "Data-driven decisions," (3) "Creative boldness." The team has 6 people and a quarterly budget of $120K.

**Walkthrough:**

After brainstorming, the team filtered down to four methods: (1) "Redesign the cancellation flow with a personalized save offer based on usage patterns," (2) "Launch a monthly value-recap email showing each user what they used and saved," (3) "Run cohort experiments on win-back timing (day 3 vs. day 7 vs. " Method 4 was cut after the values filter revealed it scored low on Data-driven Decisions and would consume disproportionate budget on moderation. The final three methods were decomposed.

" The team validated that Kevin's action steps across Methods 2 and 3 did not overlap in timing, avoiding the most common capacity conflict.

## Example: Individual contributor cascading methods from a team V2MOM

**Scenario:**

A senior product designer at a fintech company is writing her individual V2MOM. Her team's V2MOM includes a method: "Redesign the account dashboard to surface actionable financial insights." Her vision is "Deliver a dashboard experience that users open daily instead of monthly." Her values are (1) "User comprehension" and (2) "Visual clarity." She has one quarter and no direct reports.

**Walkthrough:**

As an individual contributor, she defined only two methods since her scope is narrower than a team's: (1) "Conduct discovery research to identify the 3 insights users value most," (2) "Design and validate a new dashboard layout through iterative prototyping." Method 1 action steps included "Recruit 8 participants matching our power-user persona (Owner: self, Deadline: Jan 15, Done: 8 confirmed interviews scheduled with screening criteria met, Dependencies: none)" and "Synthesize findings into a prioritized insight list (Owner: self, Deadline: Jan 30, Done: findings deck presented to PM and eng lead with agreement on top 3 insights, Dependencies: interviews)." Method 2 depended entirely on Method 1's output, making the sequencing unambiguous. Her Definition of Done for the final action step was specific and observable: "High-fidelity prototype tested with 5 users, with 4 of 5 correctly identifying the primary insight within 10 seconds." This IC-level V2MOM traced directly to the team method, demonstrating how individual work connected to strategic goals without duplicating the team's scope.
