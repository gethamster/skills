# Examples: Setting Up PostHog Feature Flags for Experiment Variants

## Example: Two-Variant Onboarding Wizard Test for a B2B SaaS Product

**Scenario:**

A B2B SaaS tool with 2,000 new sign-ups per month wants to test whether a shorter 3-step onboarding wizard improves activation (defined as completing the first integration) compared to the existing 6-step wizard. The team has 4 weeks to run the experiment. Only free-tier users who signed up after the experiment start date should be included.

**Walkthrough:**

The team creates a flag with key `experiment-onboarding-short-wizard-2024-07` and two variant keys: `control` (6-step wizard) and `test` (3-step wizard). Rollout is set to 50/50. Release conditions filter on `plan equals free` AND `created_at greater than 2024-07-01`. They attach payloads: control gets `{"steps": 6}` and test gets `{"steps": 3}`, which their React wizard component reads to render the correct number of steps.

Before enabling, they test with 5 distinct IDs, confirming 3 land in control and 2 in test. They verify that a user with `plan: pro` is excluded. After enabling, they check `$feature_flag_called` events and see a 48/52 split after the first 200 events, which is within normal variance. They connect the flag to a PostHog experiment with `integration_completed` as the goal metric.

Over 4 weeks, roughly 1,000 users enter each variant. The experiment reaches significance showing the 3-step wizard increases activation by 12%. They proceed to the shipping and cleanup phase.

## Example: Three-Variant Pricing Page Test for an E-Commerce Platform

**Scenario:**

An e-commerce platform with high traffic (50,000 visitors per day to the pricing page) wants to test three pricing presentations: the current table layout (control), a card layout with feature highlights, and a comparison slider. The team wants results within one week. All visitors to the pricing page are eligible.

**Walkthrough:**

The team creates a flag with key `experiment-pricing-layout-2024-08` and three variants: `control`, `cards`, and `slider`, set to 33/33/34 rollout. No release conditions are needed because all pricing page visitors are eligible, but they add a condition `page_visited equals pricing` as a safety measure to prevent the flag from being accidentally evaluated on other pages. They do not use payloads because each variant renders a completely different React component. In their pricing page component, they evaluate the flag and render `<PricingTable />`, `<PricingCards />`, or `<PricingSlider />` based on the returned variant key.

They handle the `undefined` case by defaulting to the table layout (control). 1% across roughly 2,000 flag evaluations. They connect the flag to an experiment with `plan_selected` as the primary metric and `annual_plan_selected` as a secondary metric. Within 5 days, they have over 200,000 users across variants and reach significance.

## Example: Mobile App Onboarding Test with Server-Side Flag Evaluation

**Scenario:**

A mobile fitness app with 500 daily new installs wants to test a gamified onboarding flow versus the standard tutorial walkthrough. The app uses PostHog's Python SDK on the backend to evaluate flags, because client-side evaluation in mobile introduces latency on first launch. Only users on iOS 16+ should be included.

**Walkthrough:**

The team creates a flag with key `experiment-gamified-onboarding-2024-09` with variants `control` (tutorial) and `test` (gamified). Rollout is 50/50. They add a release condition filtering on `os_version >= 16` AND `platform equals ios`. platform})`.

The returned variant key is sent to the mobile app in the registration response payload, so the app knows which onboarding to render without making a separate flag evaluation request. The team verifies the setup by registering test accounts with different OS versions, confirming that iOS 15 users get no variant (default experience, which is the standard tutorial) while iOS 16+ users are split between control and test. They create the experiment in PostHog with `first_workout_completed` as the goal metric. After 3 weeks and 10,500 eligible users, the experiment shows the gamified flow increases first-workout completion by 18%.

## Example: Small Startup Testing a CTA Change with Limited Traffic

**Scenario:**

A 3-person startup with 300 weekly sign-ups wants to test whether changing the CTA button text on their landing page from 'Start Free Trial' to 'See It In Action' improves trial starts. They expect the test to take 6-8 weeks to reach significance given their low traffic volume.

**Walkthrough:**

The team creates a flag with key `experiment-cta-text-2024-10` with variants `control` and `test` at a strict 50/50 split. Because they need every user to count, they set no release conditions, allowing all landing page visitors to be assigned. They use payloads to store the CTA text: control gets `{"cta": "Start Free Trial"}` and test gets `{"cta": "See It In Action"}`. Their landing page fetches the payload and renders the button text dynamically.

This approach means they can test additional CTA text variations in the future by adding new variants and payloads without code changes. onFeatureFlags()` to wait for the flag to load before rendering the button, showing a skeleton placeholder during the brief loading period. After enabling, they check the split weekly rather than daily because their low traffic makes daily variance noisy. At the end of week 2, they see a 49/51 split across 600 users, which is fine.

They connect the flag to an experiment with `trial_started` as the goal metric. The experiment runs for 7 weeks before reaching significance, showing the 'See It In Action' copy improves trial starts by 8%.
