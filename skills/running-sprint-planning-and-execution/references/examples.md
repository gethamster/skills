# Examples: Running Sprint Planning and Execution

## Example: B2B SaaS team running a two-week sprint with a feature-focused goal

**Scenario:**

A 6-person product team at a B2B project management SaaS is planning their next two-week sprint. Their trailing velocity over the last 4 sprints is 32, 36, 30, and 34 story points (average: 33). One developer is on vacation for the first 3 days. The Product Owner's top priority is enabling project templates so users can clone existing project structures.

**Walkthrough:**

" The team discusses and agrees this is achievable. They calculate capacity: with one developer out for 3 of 10 days on a 6-person team, they adjust velocity to approximately 28 points (33 minus roughly 15% for the absence). The team pulls in 4 stories directly supporting the template feature: "Create template from existing project" (8 pts), "Browse and preview template library" (5 pts), "Apply template to new project" (8 pts), and "Edit template metadata" (3 pts). That totals 24 points.

With 4 points of remaining capacity, they add a small bug fix (2 pts) and a tech debt task to improve API error handling (2 pts), both labeled as secondary items. Each story is decomposed into tasks. The "Create template" story breaks into 5 tasks: backend data model, duplication logic, UI form, integration tests, and documentation. During execution, on day 4 the team discovers the duplication logic is more complex than expected due to nested dependencies.

In the stand-up, the developer flags this. The team and Product Owner agree to simplify the scope: templates will copy top-level structure but not nested sub-tasks in this sprint. The nested sub-task copying moves to a new story for the next sprint. The sprint finishes with all 4 template stories done (with the agreed simplification), the bug fix done, and the tech debt task done, totaling 28 points.

The sprint review demonstrates the working template feature to stakeholders.

## Example: Small startup team with a one-week sprint and a performance goal

**Scenario:**

A 3-person engineering team at an early-stage B2C mobile app startup runs one-week sprints. Their velocity is volatile (12, 18, 8, 14 points over the last 4 sprints, average: 13). The CEO is frustrated about app load time, and the team has identified 3 performance bottlenecks. All team members are available for the full week.

**Walkthrough:**

Given the volatile velocity, the Scrum Master suggests planning conservatively at 10 points. " The team selects three stories: "Lazy-load non-critical modules" (3 pts), "Optimize main database query with indexing" (5 pts), and "Compress and cache static assets" (3 pts), totaling 11 points, slightly above the conservative target but the team feels confident since all three items are well-understood. Task decomposition is quick since the team is small and everyone is familiar with the codebase. 5), freeing up capacity.

The team pulls in one additional small story from the backlog: "Add performance monitoring dashboard" (2 pts), which the Product Owner agrees supports observability for the sprint goal. The sprint finishes with all 4 stories done at 13 points. 8 seconds, beating the goal. The volatile velocity starts to stabilize as the team improves their estimation through consistent measurement.

## Example: Large cross-functional team handling a sprint with heavy carry-over

**Scenario:**

An 8-person team at an enterprise healthcare company runs two-week sprints. Their average velocity is 55 points. However, the previous sprint ended with 18 points of incomplete work: two stories that were blocked by a third-party API integration delay. The Product Owner's priority is completing a compliance reporting module.

**Walkthrough:**

Before sprint planning, the Scrum Master facilitates a discussion about the 18 points of carry-over. The team re-examines both stories. One (10 pts) is still blocked because the third-party API sandbox is not available, expected in 5 days. The other (8 pts) was unblocked yesterday and can resume immediately.

The team decides to pull the 8-point story into the sprint but leave the 10-point story in the backlog until the dependency is confirmed resolved, to avoid blocking the sprint again. Effective capacity is 55 minus 8 (carry-over) equals 47 points for new work. " The team selects stories totaling 44 new points plus the 8-point carry-over, reaching 52 total against 55-point velocity, a deliberate 5% buffer given the carry-over risk. On day 5, the third-party API sandbox comes online.

The Product Owner asks to add the 10-point blocked story. The team agrees to swap out a lower-priority 8-point story (a UI polish item) and absorb the 2-point difference within their buffer. This is documented in the interruption log. The sprint finishes with 50 points completed, the compliance module is demo-ready, and the Product Owner presents the audit log to the security team in the sprint review.

## Example: Newly formed team running their first real sprint

**Scenario:**

A 4-person team at a mid-size e-commerce company has just completed agile training and is running their first sprint. They have no velocity history. The backlog has been refined but estimates are rough. The team is nervous about committing to a plan they might not deliver.

**Walkthrough:**

Since there is no velocity data, the Scrum Master uses a capacity-based approach. The team has 4 developers for 10 days, giving 40 person-days. 6 focus factor (conservative for a new team learning agile scrum processes), they target 24 person-days of actual development work. " The team selects 3 stories: "Add price range filter component" (roughly 3 person-days), "Add availability filter backend logic" (roughly 4 person-days), and "Integrate filters with existing catalog search" (roughly 5 person-days), totaling approximately 12 person-days.

This feels low against 24 available, so they add two more stories: "Write E2E tests for filter combinations" (3 person-days) and "Update filter design to match new brand guidelines" (3 person-days), reaching 18 person-days. The Scrum Master advises stopping here, well below capacity, because first-sprint estimates are unreliable and it is better to finish everything and build confidence than to overcommit and start the agile journey with a failure. The sprint finishes with all 5 stories complete. The team retrospects and notes they had about 4 person-days of spare capacity.

For the next sprint, they plan slightly higher. By sprint 3, they have enough data to switch to velocity-based planning.
