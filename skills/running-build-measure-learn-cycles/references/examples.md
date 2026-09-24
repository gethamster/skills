# Examples: Running Build-Measure-Learn Cycles

## Testing willingness to pay for a reporting add-on

**Scenario:**

Illustrative scenario: a B2B analytics product wants to sell a premium reporting add-on and assumes existing customers will pay for it. The team has not built anything yet.

**Walkthrough:**

The team names willingness to pay as the riskiest assumption, since usage means nothing if nobody buys. The hypothesis: of 200 account admins shown an upgrade button over two weeks, at least 8% will click through and request a trial with pricing visible. Planning backwards, the only metric needed is trial requests with price shown, so the build is a button, a pricing page and a request form, with reports produced manually for anyone who asks. After two weeks, 21 admins (about 10%) request a trial, which clears the threshold.

The team records a persevere decision and picks the next riskiest assumption: whether trial users keep using the reports after the first month.

## Inconclusive onboarding test leads to a retest

**Scenario:**

Illustrative scenario: a consumer habit app believes a guided first-week plan will lift the share of new users active in week two. The team ships the plan to half of new signups for ten days.

**Walkthrough:**

The hypothesis predicted week-two activity would rise from 30% to at least 38% for the guided cohort. The guided cohort lands at 33%, above the control but below the threshold, and the cohort is small enough that the gap could be noise. In the decision meeting the team classifies the result as inconclusive rather than calling it a win. They revise the test: a longer window, a larger cohort and a sharper version of the plan that removes two optional steps users skipped.

The record notes what changed and why, and the next cycle is scheduled with a fixed decision date.

## Contradicted channel assumption triggers a pivot

**Scenario:**

Illustrative scenario: a startup selling scheduling software to small clinics assumes clinic owners will sign up from targeted social ads. The team runs a landing page test with a small ad budget.

**Walkthrough:**

The hypothesis: at least 3% of ad visitors who are clinic owners will book a demo within the test week. The page gets 900 qualified visitors and 4 demo bookings, well under 1%, which contradicts the hypothesis clearly. Because the pivot criterion was written in advance, the team does not argue for tweaking ad copy indefinitely. They pivot the channel assumption to partnerships with practice-management consultants, keeping the learning that the value message itself drew interest in the few calls held.

The next cycle tests whether three consultant intros produce demo bookings faster than the ads did.
