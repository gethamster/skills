# Examples: Navigating gstack Slash Commands

## Picking reviews for a public API change

**Scenario:**

Illustrative scenario: a developer is adding pagination to a public REST API that outside developers call. The change has no user interface.

**Walkthrough:**

The developer places the work in the Plan stage and opens the README's review table. The audience is developers, so the plan-stage review is `/plan-devex-review`, and the architecture change also calls for `/plan-eng-review`. No design review is needed, because nothing visual changes.

The developer runs the developer experience review first, which traces how a new API user would discover and use pagination, then the engineering review, which produces a test plan for cursor edge cases. After the change ships, the developer runs `/devex-review` to test the documented flow for real and compares the result with the plan-stage review.

## Recovering from a skipped design doc

**Scenario:**

Illustrative scenario: an engineer starts with `/plan-ceo-review` on a new feature without running `/office-hours` first, and the review spends most of its time asking what the feature is for.

**Walkthrough:**

The engineer recognizes that the CEO review is missing its expected input, the design doc. Instead of answering the questions one by one, they stop, run `/office-hours` in startup mode, and work through its premises and implementation alternatives.

With the design doc written, they rerun `/plan-ceo-review` in hold scope mode. This time the review focuses on the plan itself and finishes with fewer questions. The engineer adds a note to the team's CLAUDE.md: new features start with `/office-hours`.

## Choosing between /qa and /qa-only

**Scenario:**

Illustrative scenario: a contractor is asked to audit a client's staging site and report problems, but has no permission to change the client's code.

**Walkthrough:**

The contractor reads the `/qa` deep dive and sees that it fixes bugs with commits and adds regression tests. That would change code the contractor must not touch, so they choose `/qa-only`, which uses the same method and writes a report without code changes.

They run it in full mode against the staging URL and attach the report to their findings. When the client later grants write access on a branch, the contractor switches to `/qa` so fixes and regression tests land together.
