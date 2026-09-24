# Examples: Managing Dependencies Across Squads and Tribes

## Triaging a first inventory in a checkout tribe

**Scenario:**

Illustrative scenario: a tribe of five squads runs its first dependency inventory and collects 23 dependencies, most of them logged by the checkout squad against the payments platform squad.

**Walkthrough:**

The agile lead asks each squad to classify its items, and the list resolves into 6 blocking and 17 slowing dependencies. Four of the blocking items concern the same payment method configuration, which only the platform squad can change. Instead of scheduling coordination, the two squads agree to expose that configuration as a self-service setting owned by checkout. The remaining two blocking items go onto the tribe board with owners and next actions.

The slowing items are logged and revisited at the next planning cycle, where several turn out to have disappeared on their own.

## Removing a recurring cross-tribe block

**Scenario:**

Illustrative scenario: a search squad in a discovery tribe keeps appearing on the board waiting for a data pipeline squad in another tribe, three review cycles in a row.

**Walkthrough:**

The recurrence flags the item as a boundary problem rather than a coordination problem. Representatives from both squads meet to ask why search needs pipeline changes so often. They find that search ranking signals live inside the pipeline squad's jobs, so every ranking experiment needs a pipeline change. The tribes agree to move ownership of ranking signal jobs to the search squad, with the pipeline squad providing the underlying platform.

After the handover, the item leaves the board and does not come back in the following review.

## Running and retiring an on-demand sync

**Scenario:**

Illustrative scenario: a mobile squad and an accounts squad must ship a new login flow together, and both depend on an authentication API change that neither can release alone.

**Walkthrough:**

The dependency is blocking and cannot be designed away before launch, so the tribe lead convenes an on-demand Scrum of Scrums with one representative from each squad. The representatives meet daily for a short check that ends with either a decision or a named follow-up. They record the exit condition on the board card: both squads have released against the new API. A fall-back is noted too, keeping the old login path live if the API change slips.

When both releases go out, the card is closed and the daily sync ends the same day.
