# Examples: Identifying Minimum Lovable Requirements from a PR/FAQ

## An expense tool with a long wish list

**Scenario:**

Illustrative scenario: a team of four engineers has an approved PR/FAQ for an expense tool for small agencies. The press release promises that staff can submit a receipt by taking a photo and that the owner approves everything in one weekly review. The first requirements list has many items, including multi-currency support, a mobile app and an accounting integration.

**Walkthrough:**

The product manager lists the promises: photo submission, one weekly review, reimbursement tracking. Tracing each requirement to a promise shows that multi-currency serves none of them, since the FAQ says launch customers are domestic. The native mobile app is replaced by a mobile web page that opens the camera, which keeps the photo promise true.

The accounting integration does serve a promise, since the FAQ says approved expenses flow to the books. The team keeps it but supports one accounting product at launch, and the FAQ is updated to say so. The cut list records multi-currency and the native app with what would bring them back.

## A marketplace that nearly cut its hard problem

**Scenario:**

Illustrative scenario: a startup is building a marketplace that matches small manufacturers with spare capacity to buyers who need short production runs. The press release promises a quote within a day.

**Walkthrough:**

Under schedule pressure, the team proposes cutting the automated quoting engine and having staff quote by hand. The simplest-version test says this could work, but the hard-problem check says otherwise: fast, reliable quotes are the reason the product is better than calling manufacturers directly.

The team keeps manual quoting for launch but limits the launch to two product categories where staff can meet the one-day promise, and says so in the FAQ. The quoting engine stays on the plan as the first post-launch priority, and the decision makers approve the narrower launch.

## An internal migration with hidden infrastructure

**Scenario:**

Illustrative scenario: a company is replacing an old internal ordering tool. The PR/FAQ promises that store managers can place their weekly order in a few minutes on a tablet.

**Walkthrough:**

The visible requirements are small: an order screen, a product list, a submit button. Walking the customer experience and asking operations for dependencies adds much more: migrating order history, single sign-on, an approval rule for large orders, and a report the warehouse relies on.

The team keeps migration of recent history only and defers the rest to a read-only archive. The warehouse report stays, because without it orders would not ship and the promise would fail. The final list is longer than the first draft and much more honest.
