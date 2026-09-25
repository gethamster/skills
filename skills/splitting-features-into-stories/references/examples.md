# Examples: Splitting Features into User Stories and Enablers

## Resizing an oversized checkout feature

**Scenario:**

Illustrative scenario: a retail ART has a feature called new checkout that the teams estimate would take roughly two increments, covering guest checkout, saved cards, gift cards and multiple shipping addresses.

**Walkthrough:**

The product manager applies the one-ART-one-PI test and the feature fails. She splits it into two features by capability: guest checkout with a single card, and advanced payment and shipping options. The first feature fits one increment and is split into stories using the workflow pattern: enter address, choose shipping, pay by card, confirm order. A spike enabler investigates the payment provider's tokenization before the saved cards work begins.

The second feature is ranked for the following increment.

## Catching an epic disguised as a feature

**Scenario:**

Illustrative scenario: a team receives a feature titled launch in a new country, which involves legal review, localization, a new payment provider and a marketing budget.

**Walkthrough:**

During refinement the product owner notices the item needs a spending decision and an MVP definition, which marks it as an epic rather than a feature. Instead of writing stories, she routes it to portfolio review with a short description of the need. After approval, the MVP scope becomes three features: localized storefront, local payment method and regulatory reporting. Each passes the sizing test.

Only then does the team start splitting stories, beginning with the storefront's happy path.

## Separating enablers from a reporting feature

**Scenario:**

Illustrative scenario: a data team's feature for a customer usage dashboard has stories estimated far larger than an iteration because each includes pipeline and warehouse work.

**Walkthrough:**

The team lists the hidden technical work and finds a new data pipeline, a warehouse schema change and a performance investigation. Each becomes an enabler with acceptance criteria such as data available in staging with a documented refresh schedule. The user stories shrink to display daily usage, filter by account and export to CSV. The enablers are ordered first and linked to the stories they unblock.

Every item now fits an iteration and the dependency on the platform team is flagged for planning.
