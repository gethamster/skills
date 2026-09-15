# Examples: Estimating Work with Story Points and Planning Poker

## Example: E-commerce team's first planning poker session

**Scenario:**

A newly formed Scrum team at an e-commerce company is preparing for their third sprint. They've never formally estimated before and have been pulling stories into sprints based on gut feel, often over-committing. The product owner has 12 refined stories ready for estimation.

**Walkthrough:**

The team picks a previously completed story—'Add product to wishlist'—as their reference, rating it a 3. It involved a new API endpoint, a simple database write, frontend button integration, and standard test coverage.

The first story up for estimation is 'Implement guest checkout flow.' After the product owner explains the acceptance criteria, the team votes: 5, 8, 8, 13, 8. The developer who voted 13 explains they're concerned about payment gateway edge cases with guest users. The one who voted 5 hadn't considered the email verification step. After a 2-minute discussion, the re-vote comes in at 8, 8, 8, 8, 13—they record it as an 8.

They power through 12 stories in 45 minutes, totaling 64 points. Since they don't have velocity data yet, they commit to 40 points for the sprint (a conservative approach). They complete 38 points. Over the next two sprints they complete 42 and 44. Their rolling average velocity settles around 41 points, and sprint planning becomes dramatically more predictable.

## Example: Using velocity to forecast a product launch

**Scenario:**

A mobile app team has been running Scrum for 6 months with a stable velocity of 26 points per 2-week sprint (range: 22-30). The VP of Product asks: 'When can we launch the v2.0 feature set?' The remaining backlog for v2.0 totals 145 story points.

**Walkthrough:**

The Scrum Master calculates three scenarios: optimistic (30 points/sprint = 5 sprints = 10 weeks), average (26 points/sprint = ~6 sprints = 12 weeks), and pessimistic (22 points/sprint = ~7 sprints = 14 weeks). They present this as a range: 'We expect to complete v2.0 in 10-14 weeks, with 12 weeks being our most likely scenario.'

The VP appreciates the transparency and uses the pessimistic scenario for the external launch date while planning internal readiness around the average. This data-driven approach—rooted entirely in the team's scrum estimation practice—replaces the old method of asking each developer for hour estimates and adding a 20% buffer.
