# Examples: Shipping the Winning Variant and Cleaning Up Feature Flags

## Example: Small startup shipping a winning onboarding tooltip sequence

**Scenario:**

A 5-person B2B SaaS startup ran a PostHog experiment testing two onboarding tooltip sequences for new users. The experiment ran for 3 weeks with 800 users per variant. Variant B (interactive tooltips with progress indicators) showed a 15% lift in onboarding completion with 97% Bayesian probability. The team has a single Next.js repository and deploys via Vercel.

**Walkthrough:**

The product engineer stops the experiment in PostHog's Experiments tab and records the results: variant B, +15% onboarding completion, 97% probability. She navigates to Feature Flags, finds `experiment-onboarding-tooltips`, and sets the rollout to 100% variant B. Over the next 24 hours she checks the PostHog onboarding completion dashboard and confirms the rate matches the experiment's treatment group performance. She then opens the codebase and searches for `experiment-onboarding-tooltips`.

She finds three references: the tooltip component that checks the flag, a server-side page prop that evaluates the flag, and an analytics wrapper that tags events with the variant name. She creates a PR that removes all three conditional paths, hardcodes the interactive tooltip component, removes the old static tooltip component file entirely, and updates the analytics wrapper to stop tagging the variant. After the PR passes tests and deploys to Vercel, she waits 4 hours and checks PostHog's flag evaluation activity, which shows zero evaluations. She archives the flag with the note "Winner: interactive tooltips (variant B).

+15% onboarding completion, 97% probability. " She updates the team's Notion experiment log and posts in Slack that the experiment is fully closed.

## Example: Growth team at a mid-size B2C app rolling out a new signup flow

**Scenario:**

A consumer app with 50,000 daily active users ran a multivariate experiment (A/B/C) on their signup flow. Variant C (social proof + simplified form) won with a 22% lift in signup-to-activation rate. The app has a React Native mobile client, a React web client, and a Node.js backend, all of which evaluate the feature flag. The mobile app has a 48-hour cache cycle for updated bundles.

**Walkthrough:**

The growth PM stops the experiment and documents the results across all three variants. In PostHog Feature Flags, she sets `experiment-signup-flow` to 100% variant C, zeroing out both variant A (control) and variant B. The team monitors production metrics for 48 hours, paying special attention to signup error rates and backend validation failures. Metrics look clean.

js backend. Each PR removes the flag evaluation, deletes the control and variant B code paths, and hardcodes variant C. The web and backend PRs deploy the same day. The mobile PR goes through the app store review process.

The team waits 72 hours (longer than usual to account for the mobile cache cycle) and checks PostHog's flag evaluation panel. Web and backend evaluations dropped to zero within hours, but mobile evaluations tapered off over 48 hours as cached bundles expired. Once all evaluations hit zero, the engineer archives the flag with a detailed note linking to all three PRs and the experiment results. The PM updates the experiment tracker in Notion with a "Shipped and Cleaned Up" status.

## Example: Enterprise B2B team shipping a winning pricing page variant

**Scenario:**

A B2B SaaS company with a Webflow marketing site and a React app ran an experiment on their pricing page layout. The experiment used PostHog's JavaScript snippet on the Webflow site to evaluate the flag and swap content blocks. Variant B (comparison table with competitor pricing) showed a 9% lift in pricing-page-to-signup conversion with 96% frequentist confidence. The marketing team manages Webflow while the engineering team manages the React app.

**Walkthrough:**

The growth engineer stops the experiment and shares the results with both the marketing and engineering teams. In PostHog, he sets the flag `experiment-pricing-layout` to 100% variant B. The marketing team monitors pricing page analytics for 48 hours and confirms the conversion rate matches expectations. Since the flag is evaluated by a PostHog JavaScript snippet embedded in Webflow's custom code section, the cleanup requires changes in two places.

The marketing team updates the Webflow pricing page to permanently display the comparison table layout (variant B's design), removing the conditional custom code that swapped layouts based on the flag. The engineering team searches the React app codebase and finds one analytics event that tagged the pricing variant, which they remove. After deployment, the growth engineer checks PostHog and sees zero flag evaluations within 6 hours. He archives the flag with the note "Winner: comparison table layout (variant B).

04. " He updates the cross-team experiment log in Confluence and closes the experiment's Jira ticket.

## Example: Shipping a control variant win (null result that favors the original)

**Scenario:**

A product team ran an experiment on their dashboard layout, hypothesizing that a card-based layout would increase feature discovery. After 4 weeks and 3,000 users per variant, the card-based layout showed no statistically significant improvement on any metric and actually showed a small (non-significant) decrease in task completion rate. The team decides to keep the original layout.

**Walkthrough:**

The PM stops the experiment and documents the null result. Even though the control won, the cleanup process is identical. The engineer navigates to PostHog Feature Flags and sets `experiment-dashboard-cards` to 100% control variant. She monitors for 24 hours to confirm nothing changed (expected, since this is the same experience users were already having).

She then creates a PR that removes all flag evaluation calls, deletes the card-based layout component and its associated CSS, and removes the conditional rendering logic. After deployment, she verifies zero flag evaluations in PostHog and archives the flag with the note "Null result. Card layout showed no significant improvement. Control (original list layout) retained.

" She records the null result in the experiment log with the same rigor as a winning result, because null results inform future experiment design and prevent the team from re-testing the same idea without new evidence.
