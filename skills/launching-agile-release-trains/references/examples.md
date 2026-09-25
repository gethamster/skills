# Examples: Launching and Running Agile Release Trains

## Payments platform train

**Scenario:**

Illustrative scenario: a fintech company has separate front-end, back-end, QA and operations departments, and every payment feature waits weeks for handoffs between them.

**Walkthrough:**

The launch lead traces six recent payment features and finds the same set of roughly sixty people in every trace, spread across four departments. The team draws a train boundary around the payments value stream and reorganizes those people into six cross-functional teams aligned to checkout, payouts, fraud checks and similar product areas. Operations engineers join teams directly so the train can deploy without a ticket to another group. A product lead receives authority to rank payment features, and an architect is named to guide the shared ledger service.

After the first increment, the dependency board shows only two external dependencies, both on the identity team, which is invited to the next planning event.

## Train that was too big

**Scenario:**

Illustrative scenario: a manufacturer launches one train covering both its customer portal and its factory scheduling software, about 180 people in total.

**Walkthrough:**

The first PI Planning event runs long, and teams from the two product areas barely interact except for a handful of shared reporting features. The post-increment review shows that dependencies cluster within each product area, not between them. The sponsor splits the group into two trains along that seam, each with its own content owner and facilitator. The few shared reporting features are coordinated through a light solution-level sync.

The next planning events finish on time and teams report clearer priorities.

## Missing decision authority

**Scenario:**

Illustrative scenario: a public-sector agency launches a benefits-processing train, but the named product owner must get every priority change approved by a steering committee.

**Walkthrough:**

During the first increment, three urgent policy changes arrive and each waits for the monthly committee meeting. Teams sit idle on blocked features while the committee deliberates. The readiness review had skipped the decision-rights test, so the gap only surfaced in delivery. The sponsor rewrites the decision-rights document so the product owner can reorder features within the approved budget, with the committee reviewing outcomes each increment instead of approving each change.

Blocked time drops sharply in the second increment.
