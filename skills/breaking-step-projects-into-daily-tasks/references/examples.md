# Examples: Breaking Step-Projects into Actionable Daily Tasks

## Example: SaaS Onboarding Tooltip Experiment (Small Team, 2 Engineers)

**Scenario:**

A B2B SaaS company has a step-project to test whether adding five contextual tooltips to the dashboard reduces 'how do I' support tickets by 15% over two weeks. The team is two full-stack engineers and one technical product manager. Time box: 8 engineering days (4 days per engineer). The team uses a Kanban board in Linear.

**Walkthrough:**

' Three deliverables are identified: tooltip UI component, analytics instrumentation, and rollout configuration. The tooltip UI deliverable breaks into six tasks: write copy for five hotspots (half day), build reusable tooltip component (one day), wire tooltip triggers to five dashboard elements (one day), add feature flag wrapper (half day), deploy to staging (half day), cross-browser QA (half day). Analytics instrumentation breaks into three tasks: add tooltip-view and tooltip-dismiss events to the analytics layer (half day), create a dashboard in the analytics tool filtering support tickets tagged 'how-do-I' (half day), document the measurement methodology (quarter day). Rollout configuration breaks into two tasks: configure feature flag for 50% rollout (quarter day), schedule data review meeting for day 15 (quarter day).

5 days of buffer within the 8-day time box. The critical path runs through the tooltip component build, trigger wiring, staging deploy, and QA. Analytics work runs in parallel. Engineer A owns the component and trigger work.

Engineer B owns analytics and rollout. The task board is populated in Linear with dependencies linked, and the team starts pulling tasks the next morning.

## Example: E-Commerce Checkout Flow Test (Cross-Functional Team, Sprint-Based)

**Scenario:**

A B2C e-commerce company is running a step-project to test a single-page checkout against their current multi-step flow. The hypothesis is that single-page checkout increases completion rate by 10%. The team includes three engineers, a designer, and a technical product manager. They work in two-week sprints. The step-project must fit within one sprint.

**Walkthrough:**

' Four deliverables emerge: single-page checkout UI, A/B test infrastructure, payment integration on the new page, and results analysis. 5 day). 5 day). 5 day).

25 day). Total: 15 tasks across four deliverables. The critical path is the design mockup dependency followed by the UI implementation chain. The technical product manager contacts the designer before sprint planning to confirm the mockup will be ready by sprint day 1.

Tasks are loaded into the sprint backlog with dependencies annotated. Each engineer pulls from the Ready column daily.

## Example: Internal Tool Automation Step-Project (Single Engineer, Kanban)

**Scenario:**

A technical product manager at a mid-stage startup has a step-project to test whether automating the weekly metrics report saves the ops team 3+ hours per week. One backend engineer is available for this work alongside other responsibilities. The team uses a continuous-flow Kanban board with no fixed sprints. Time box: 10 working days.

**Walkthrough:**

' Two deliverables are identified: the automated report pipeline and the measurement apparatus. 5 day). 25 day). Total: 10 tasks, roughly 5 engineering days of effort spread across 10 calendar days to account for the engineer's other commitments.

The critical path is the SQL query, formatting script, and scheduling chain. The technical product manager owns the ops team interview and measurement tasks. The engineer owns all pipeline tasks. Because the Kanban board is shared with other work, the step-project tasks are tagged with a project label so daily standups can filter by project.

## Example: Mobile App Feature Flag Experiment (Large Team, Multiple Step-Projects in Flight)

**Scenario:**

A consumer mobile app company has four step-projects running simultaneously across a team of eight engineers. The technical product manager needs to decompose a new step-project to test whether a simplified home screen increases daily active usage by 5%. The challenge is fitting this decomposition into an already busy sprint alongside three other active step-projects.

**Walkthrough:**

The technical product manager starts by reviewing the team's current capacity. Three engineers are fully committed to other step-projects. Two engineers have partial availability (roughly 3 days each in the upcoming two-week sprint). ' Because capacity is constrained, the deliverables must be minimal.

Two deliverables are defined: simplified home screen variant (using existing components, no new UI), and experiment tracking. 5 day). 1 day). Total: 8 tasks, approximately 4 engineering days.

This fits within the 6 available days from the two partially available engineers, leaving buffer for cross-step-project context switching. The technical product manager assigns Engineer A (iOS-focused) to the layout and flag tasks, and Engineer B (data-focused) to the analytics and dashboard tasks. Platform testing is split. The task board uses a dedicated swimlane for this step-project so it does not visually compete with the three other active step-projects.
