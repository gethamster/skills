# Examples: Comparing Solutions with Compare-and-Contrast Decisions

## B2B Team Choosing a Way to Resurface Past Projects

**Scenario:**

Illustrative scenario: a six-person product team at a project management tool has chosen 'I can't find the project I worked on last month' as its target opportunity. The team has four weeks of engineering capacity.

**Walkthrough:**

The trio generates three solutions: (A) natural-language search across past projects, (B) a 'recent and relevant' dashboard widget driven by activity signals, and (C) manual tags and favorites. They agree on six criteria before scoring, including customer pull from interviews, time to a testable version, and maintenance burden. Independent scoring shows A has the strongest desirability but the weakest feasibility, because the search infrastructure doesn't exist yet. Solution C is fastest, but interviewees said they don't want to organize things manually.

The team chooses B, records that it would reconsider A if a third-party search service made integration quick, and lists two assumptions to test: users notice the widget in their existing workflow, and activity signals predict which projects matter.

## Consumer App Trio Selecting an Onboarding Approach

**Scenario:**

Illustrative scenario: a three-person trio building a personal finance app interviewed 12 target users, and 9 of them described hesitating at the bank connection step because of security worries. The team must ship a fix within two sprints with one engineer.

**Walkthrough:**

The trio generates four ideas and narrows to three: (A) a gamified step-by-step flow, (B) exploring the app with sample data before connecting, and (C) a single-screen connection flow with clear security messaging. Their criteria include likely conversion, build time with one engineer, and how directly each addresses the security worry. Independent scoring surfaces a sharp disagreement: the product manager scores B weak on conversion, while the designer scores it strong. Digging into the interviews, they find both readings are supported, since some users want to explore first and others want to finish fast.

They choose C as the main path and borrow a 'try with sample data' escape hatch from B, rejecting A because it would take far longer than two sprints. Their top assumption to test is that the sample-data option leads users to connect later rather than never.

## Enterprise Platform Team Evaluating Integration Strategies

**Scenario:**

Illustrative scenario: a product team at an HR platform has mapped 'I re-enter payroll data by hand every month' under its outcome, and sales reports that three pending deals hinge on payroll integration. The team has one integrations engineer.

**Walkthrough:**

The team compares (A) native integrations with the three most requested payroll providers, (B) a generic file import that works with any payroll system, and (C) a partnership with an integration platform offering pre-built connectors. Criteria include market coverage, time to first customer, maintenance burden, data accuracy, setup effort, and dependency risk. Solution A leads on reliability and differentiation, but the engineer estimates several months per provider. Solution B is fastest to ship but weak on setup effort and accuracy, while C is moderate across the board with a real dependency risk.

The team decides to ship B as a bridge to unblock the pending deals, evaluate C in parallel, and revisit A later. Their reversal condition: if the integration platform's sync proves unreliable in testing with the top providers, they will build native integrations for those providers.
