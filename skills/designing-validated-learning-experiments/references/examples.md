# Examples: Designing Validated Learning Experiments

## A landing page test before any build

**Scenario:**

Illustrative scenario: a team wants to offer a paid course that teaches small restaurant owners to manage their online reviews. The riskiest assumption is that owners will pay for training rather than look for free advice.

**Walkthrough:**

The Test Card reads: we believe restaurant owners will pay for a short course on managing reviews. To verify that, we will run a landing page describing the course with a price and a "reserve your place" button that takes a small deposit. We will measure deposits as a share of visitors from targeted ads. We are right if at least one visitor in fifty pays a deposit within two weeks, and wrong if fewer than one in two hundred do.

After two weeks, the rate falls between the lines. The team reads the ad comments and finds owners asking whether the course covers delivery apps. They run a second landing page that names delivery apps in the headline, with the same criteria, before deciding anything.

## Concierge first, then Wizard of Oz

**Scenario:**

Illustrative scenario: a startup believes busy parents want weekly meal plans matched to what is on sale at their local supermarket.

**Walkthrough:**

The first experiment is a concierge MVP. A team member meets five parents, learns their preferences and emails each one a plan by hand every week. The pass line is that at least three of the five still use the plan after a month and agree to pay a small fee. Four do.

The next question is whether parents will use the product without a personal relationship. The team designs a Wizard of Oz test: a simple sign-up form and a plan that appears to be generated automatically, still assembled by hand behind the scenes. The criteria are set before launch, and this time the audience is recruited from ads rather than personal contact.

## Fixing a serial comparison

**Scenario:**

Illustrative scenario: a subscription app changed its pricing page on the first of the month and compared sign-ups with the previous month. Sign-ups fell, and the team is ready to revert.

**Walkthrough:**

A reviewer points out that the previous month included a holiday promotion by a partner. The comparison mixes the page change with that promotion. The team redesigns the experiment as a split test, randomly assigning visitors to the old and new pages at the same time for the same period.

They write the criteria first: the new page passes if paid conversion is no worse than the old page and average plan value is higher. With both versions running in parallel, the difference between them can be attributed to the page.
