# Examples: Comparing Agile and Waterfall for Project Selection

## A new customer-facing feature with unclear demand

**Scenario:**

Illustrative scenario: a product group wants to add self-service onboarding to a business app. Nobody has evidence of which steps new customers struggle with, the sponsor can join a review every two weeks, and there are no special compliance rules.

**Walkthrough:**

The group scores requirements uncertainty 5, technical risk 3, stakeholder availability 4, team structure 4 and compliance 5. The average is a little above 4. The one debate is technical risk: an engineer rates it higher because the identity provider is new to the team, and the group agrees to build a thin end-to-end version in the first cycle to test it.

The record chooses agile, accepts that the final scope is unknown, and sets a review trigger if the sponsor stops attending reviews. The team moves on to choosing between Scrum and Kanban.

## A payroll rule change with a fixed legal deadline

**Scenario:**

Illustrative scenario: a finance systems team must update payroll calculations to match a new published rule by a fixed date. The rule text is final, the calculations are well understood, and auditors require signed test evidence.

**Walkthrough:**

The group scores requirements uncertainty 1, technical risk 2, stakeholder availability 2, team structure 3 and compliance 1. The average is 1.8. Nobody disputes the scores. The choice is a plan-driven approach with a requirements baseline, a design review and formal test sign-off.

Following Royce's advice, the team still builds an early version of the hardest calculation and runs it against sample payslips before the main build. The record notes that any late change to the rule would reopen the decision.

## A platform migration that splits the group

**Scenario:**

Illustrative scenario: an operations team plans to move a set of internal services to a new hosting platform. The target is clear, but nobody knows how many services depend on undocumented behavior, and a security review is required before go-live.

**Walkthrough:**

Private scores differ sharply on requirements uncertainty: the sponsor gives 1 because the goal is fixed, while engineers give 4 because the dependencies are unknown. Discussion settles on 3. Compliance scores 2 because of the security review.

The group records a named hybrid: fixed milestones and a formal security gate, with the migration itself done service by service in short cycles so each move surfaces dependencies early. The review trigger is any service that fails migration twice.
