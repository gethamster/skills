# Examples: Organizing Squads into Tribes for Alignment

## Forming the first two tribes

**Scenario:**

Illustrative scenario: a company has eight squads and about seventy people in product and engineering. Everyone attends one weekly demo, and it now takes two hours.

**Walkthrough:**

The dependency survey shows two clusters. Four squads working on the buyer experience depend on each other often, and four squads working on seller tools depend on each other and on one shared billing service. The billing squad sits with the seller cluster, because most of its requests come from there.

Two tribes are formed, Buyer and Seller, each with its own mission and gathering. The single long demo becomes two shorter tribe gatherings, plus a short company demo once a month. The remaining cross-tribe dependency, the checkout flow that touches billing, gets a named owner on each side and a shared roadmap page.

## Splitting a tribe that grew too large

**Scenario:**

Illustrative scenario: a platform tribe has grown to twelve squads. Its gathering is crowded, and the tribe lead spends most weeks in escalations between squads that rarely work together.

**Walkthrough:**

The tribe reruns its dependency survey. It finds two groups with few links between them: squads running developer tooling and CI, and squads running data infrastructure. The weakest line between them is a single shared monitoring service.

The tribe splits in two, and the monitoring squad joins developer tooling with a published interface for the data squads. Each new tribe writes its own mission and chooses a lead. After a quarter, the survey shows fewer blocking dependencies and the escalations have mostly stopped.

## A squad that fits two tribes

**Scenario:**

Illustrative scenario: a search squad serves both a consumer tribe and a business tribe. Both tribe leads want it.

**Walkthrough:**

The team compares the squad's dependencies. Most of its day-to-day changes come from the consumer app, while business search is a stable feature with occasional requests. The squad joins the consumer tribe.

The business tribe gets a clear interface: a named product owner contact, a request channel and a quarterly slot in the search squad's planning. At the next review, both tribes check whether the arrangement is working before anyone proposes moving the squad again.
