# Examples: Organizing Squads into Tribes

## Splitting an overgrown checkout tribe

**Scenario:**

Illustrative scenario: an e-commerce company has a single commerce tribe of about 130 people across 14 squads covering cart, checkout, payments and fraud.

**Walkthrough:**

The product manager lists each squad's area and finds two natural clusters: shopper-facing flow (cart, checkout, promotions) and money movement (payments, fraud, refunds). Headcount lands at roughly 70 and 60, both under the cap the company chose. Overlaying dependencies shows most blocking ones sit inside each new cluster, with only a payments API crossing the line. The team names the tribes Checkout Experience and Payments Platform.

Each gets a small coordination group of product owners, chapter leads and a coach, with a written rule that it does not approve squad releases. A review is set for the next quarter to recheck the API crossing.

## Merging two thin tribes around one journey

**Scenario:**

Illustrative scenario: a SaaS company has an Onboarding tribe of 3 squads and a Growth tribe of 4 squads, and most of their work crosses between them.

**Walkthrough:**

The dependency overlay shows the majority of blocking dependencies run between the two tribes, all around the trial-to-paid journey. Combined headcount is about 55 people, comfortably under the cap. Leadership merges them into an Activation tribe organized around that journey. The design and frontend chapters now span all seven squads, which gives each chapter enough members to run useful sessions.

Within a month, the squads report that coordination has moved from escalations to hallway conversations.

## Separating a platform tribe from product tribes

**Scenario:**

Illustrative scenario: a media app has 9 squads in one tribe, 3 of which build shared infrastructure used by every other team in the company.

**Walkthrough:**

The product manager notices the infrastructure squads serve internal customers across all tribes, while the other 6 squads serve end users of the app. Keeping them together makes the tribe's priorities unclear and pushes it toward the cap. The infrastructure squads move into a new Platform tribe, mirroring the backend-infrastructure style of tribe. The product tribe drops to about 50 people with a single user-facing focus.

The Platform tribe sets up an on-demand forum where product squads can raise shared infrastructure needs.
