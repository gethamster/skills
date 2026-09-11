# Examples: Planning and Executing Sprints

## Example: E-Commerce Team Planning a 2-Week Sprint

**Scenario:**

A 6-person Scrum team working on an e-commerce platform is planning their next 2-week sprint. Their average velocity over the last 4 sprints is 42 story points. One developer will be out for 3 days, and the team has 2 points of carryover from the previous sprint. The Product Owner wants to ship a guest checkout feature.

**Walkthrough:**

**Capacity calculation:** With one developer out for 3 of 10 working days, the team adjusts capacity to approximately 36 story points (42 × 5/6, roughly adjusted, minus a 10% buffer). Subtract 2 points of carryover, leaving ~34 points for new work.

**Sprint goal:** "Enable shoppers to complete purchases without creating an account." The Product Owner explains that cart abandonment data shows 28% of users drop off at the registration screen.

**Backlog selection:** The team selects 5 user stories directly supporting guest checkout (totaling 26 points), plus 2 smaller items for a search bug fix and an analytics event (8 points combined). Total: 34 points + 2 points carryover = 36 points against a 36-point capacity.

**Task decomposition:** The largest story ("Guest can enter shipping info without logging in" — 8 points) is broken into 6 tasks: modify auth middleware, create guest session handler, update shipping form component, write API tests, write E2E tests, update documentation. Each task is estimated at 2-6 hours.

**Commitment check:** The team confirms confidence. The Scrum Master notes the sprint review is scheduled for the final Friday and updates the [Scrum board in Jira](https://tryhamster.com/skills/managing-scrum-boards-in-jira).

**Execution:** By day 5, the team notices the auth middleware changes are more complex than expected. At the daily stand-up, they decide to drop the analytics event story (2 points) from the sprint to protect the sprint goal. The guest checkout feature ships on time.

## Example: New Team Establishing Sprint Cadence

**Scenario:**

A newly formed team of 4 developers, 1 designer, and 1 QA engineer is running their third sprint ever. They don't have reliable velocity data yet and previously overcommitted in both prior sprints, completing only 60-70% of planned work.

**Walkthrough:**

**Addressing the pattern:** The Scrum Master opens planning by reviewing the last two sprints. Sprint 1: planned 35 points, delivered 22. Sprint 2: planned 30 points, delivered 21. The team acknowledges they've been optimistic.

**Conservative capacity:** Rather than averaging past velocity (21.5 points), the team agrees to plan for 20 points — deliberately leaving room to succeed and build confidence.

**Sprint goal:** "Complete the user profile editing flow end-to-end." This is focused and achievable.

**Backlog selection:** The team selects 4 stories totaling 18 points, leaving a 2-point buffer. Each story is decomposed into tasks, and the team explicitly discusses who has the skills for each task to avoid bottlenecks.

**Execution result:** The team completes all 4 stories (18 points) by day 8 of the 10-day sprint. They pull 1 additional story (3 points) from the top of the backlog and complete it. Total delivery: 21 points. The team celebrates their first fully completed sprint.

**Key lesson:** Under-planning for the first few sprints builds trust, establishes a reliable velocity baseline, and creates positive momentum. It's always easier to add work mid-sprint than to remove it.
