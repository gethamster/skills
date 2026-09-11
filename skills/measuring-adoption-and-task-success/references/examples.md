# Examples: Measuring Adoption Rates and Task Success for New Features

## Example: Measuring Adoption of a New Collaboration Feature in a SaaS Tool

**Scenario:**

Your team launched a real-time collaborative editing feature in a project management SaaS product. The feature is available to all users on paid plans. After two weeks, leadership wants to know if the launch is successful.

**Walkthrough:**

**Step 1: Define GSM.** Goal: Paid users discover and adopt collaborative editing within 14 days of feature launch. Signal: A user opens a document and at least one other user joins the same session. Metric: 14-day activation rate = (users with at least one collaborative session) ÷ (all active paid users).

**Step 2: Activation event.** The activation event is `collab.session.joined` — fired when a second user enters a document that a first user has open. Simply opening a shared document doesn't count.

**Step 3: Instrument and build.** Events are tracked in Amplitude. You build a cohort chart showing the cumulative percentage of paid users who triggered `collab.session.joined` each day since launch.

**Step 4: Analyze.** After 14 days, 18% of active paid users have had at least one collaborative session. Segmenting by team size reveals that teams of 5+ have a 34% adoption rate, while solo users are at 4% (expected — they have no one to collaborate with). You exclude solo users from the denominator, which adjusts the adoption rate to 28%.

**Step 5: Iterate.** The adoption curve shows a plateau at day 8. You hypothesize that users who haven't tried it by day 8 don't know about it. You work with the growth team to add an in-app prompt at day 5 for users who haven't tried the feature. In the next cohort, 14-day adoption rises to 37%.

**Communicating results:** You present to leadership: 'Among team accounts, 37% of paid users adopted collaborative editing within two weeks of launch — up from 28% in the first cohort after we introduced targeted in-app prompts.'

## Example: Task Success Analysis for a New Checkout Flow

**Scenario:**

An e-commerce PM redesigned the checkout flow to reduce cart abandonment. The new flow has four steps: Review Cart → Enter Shipping → Enter Payment → Confirm Order. The team needs to measure whether the new flow actually improves task success.

**Walkthrough:**

**Define Task Success GSM.** Goal: Users who initiate checkout complete their purchase with minimal friction. Signals: Funnel progression through each step, error occurrences, time spent. Metrics: Completion rate, step-level drop-off rates, error rate, median time-on-task.

**Instrument the funnel.** Events: `checkout.started`, `checkout.shipping.completed`, `checkout.payment.completed`, `checkout.confirmed`, plus error events like `checkout.payment.error.card_declined`.

**Baseline:** The old flow had a 52% completion rate (start to confirm) with a median time-on-task of 4 minutes 20 seconds.

**New flow results after 2 weeks:** Completion rate is 61% (+9 points). Median time-on-task is 3 minutes 10 seconds (-70 seconds). The biggest drop-off in the new flow is at Enter Payment (22% of users who reach this step abandon). Error analysis shows 8% of payment attempts hit a card-declined error — this is external and not a UX issue. Among non-error sessions, the payment step drop-off is only 14%.

**Action:** The PM identifies that the remaining 14% payment drop-off correlates with mobile users on iOS. Investigation reveals a keyboard overlay obscures the 'Continue' button on smaller screens. A CSS fix is deployed, and mobile payment-step completion improves by 6 percentage points in the following week.

**Outcome:** The redesigned checkout flow demonstrably improved task success across all three metrics, and the PM used the HEART Framework language to communicate this in the quarterly product review.
