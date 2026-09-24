# Examples: Forming Autonomous Cross-Functional Squads

## Splitting an overloaded checkout team

**Scenario:**

Illustrative scenario: a retailer wants one squad to own the entire checkout flow, and the competency map calls for about fifteen people to cover payments, promotions, address validation and fraud checks.

**Walkthrough:**

The group first walks a typical checkout change from idea to production and finds that promotions work and payment work rarely touch the same code. Rather than accept a team too large for one short daily conversation, they split the scope into two squads: one owning the payment step and one owning cart and promotions. Each gets its own product owner and the developers, designer and tester its slice needs. Shared fraud rules stay with the payment squad, and the cart squad treats them as an accepted dependency.

Both squads pick their own process, one choosing Kanban for its steady flow of small changes. After a month, each squad reruns the idea-to-production walk to check for handoffs that crept back in.

## Pulling release into a mobile squad

**Scenario:**

Illustrative scenario: a newly formed onboarding squad builds features quickly but waits several days each time for a central release team to publish app updates.

**Walkthrough:**

The squad's handoff inventory shows release as the only stage where outsiders must act. The leads decide the dependency is avoidable, so they pair one squad engineer with the release team for two sprints to learn the pipeline and store submission process. The squad gains permission to run releases for its own features within agreed checks. The central team shifts to maintaining the pipeline as a shared tool rather than operating every release.

The squad now measures its own time from merged change to published update. The product owner reports that feedback from users arrives in the same iteration as the change, closing the learning loop.

## Replacing a mandated process

**Scenario:**

Illustrative scenario: an organization forming its first six squads requires all of them to run two-week Scrum sprints so leadership can compare velocity across teams.

**Walkthrough:**

Within a quarter, an infrastructure-heavy squad complains that interrupt-driven work makes sprint commitments meaningless. The leadership group revisits the decision and moves process choice to the squads, keeping only shared constraints such as security review and a common release-readiness checklist. The infrastructure squad switches to Kanban with work-in-progress limits, while the product-facing squads keep Scrum. Leadership stops comparing velocity and instead asks each squad to report progress against its mission outcomes.

The coaches help each squad review its choice in a retrospective. Reporting becomes less uniform but more honest about how each squad actually delivers.
