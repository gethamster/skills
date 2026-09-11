# FAQ: Setting Up PostHog Feature Flags for Experiment Variants

## How do I set up PostHog experiment feature flags if my application uses server-side rendering?

) before rendering the page. Pass the user's distinct ID and any relevant person properties to the `get_feature_flag` method. Inject the variant key into the rendered HTML or pass it as a prop to your client-side framework. This approach eliminates the flicker that occurs when client-side flag evaluation loads after the initial render.

The tradeoff is that you must have the user's distinct ID available at render time, which typically means the user must be authenticated or you must use a persistent cookie-based ID.

## Can I use the same feature flag for multiple experiments at different times?

Technically you can reuse a flag key, but it is strongly discouraged. PostHog's deterministic hashing means the same flag key and distinct ID always produce the same variant. If a user was in the 'control' variant of your first experiment, they will be in 'control' again if you reuse the flag key for a second experiment. This creates a population bias because you are testing the same user split, not a fresh random assignment.

Create a new flag with a new key for each experiment, even if the variants are similar.

## How long should I wait after enabling a flag before connecting it to an experiment?

You should connect the flag to an experiment within the first few hours of enabling it, ideally before or immediately after. Any traffic that flows through the flag before the experiment is created will not be tracked in the experiment's results, because PostHog starts counting from the experiment's start timestamp. If you want to verify the flag works before starting the official experiment, enable the flag with a very small rollout (e.g., 5%) for a brief verification period, then increase to your target rollout and create the experiment simultaneously.

## Should I set up PostHog experiment feature flags before or after designing my success metrics?

Design your success metrics first. The flag configuration depends on knowing your target segment (which determines release conditions), your required sample size (which influences rollout percentages and timeline), and your goal events (which must be firing correctly before the flag sends traffic). The sibling skill on [designing experiment hypotheses and metrics](https://tryhamster.com/skills/designing-onboarding-experiment-hypotheses-and-metrics) should be completed before this one. Configuring a flag without defined metrics often leads to missing release conditions or incorrect targeting that must be fixed mid-experiment.

## Why does my PostHog feature flag return undefined for some users even though it is enabled?

The most common causes are: the user does not match your release conditions (check their person properties in PostHog against your conditions), the PostHog SDK has not finished loading when you call `getFeatureFlag()` (use the `onFeatureFlags` callback), the user has not been identified yet (anonymous users may not have the person properties your conditions require), or the distinct ID being used in code does not match the distinct ID in PostHog (common when switching between anonymous and identified users). Check each cause systematically using PostHog's feature flag debugger on the person detail page.

## How do I handle PostHog experiment feature flags in a monorepo or microservices architecture?

Centralize flag key definitions in a shared constants file or configuration service that all services can import. Each service that needs to evaluate the flag should have its own PostHog SDK instance initialized with the same project API key. Server-side services should use the server-side SDK and pass the user's distinct ID explicitly. Avoid evaluating the same flag in multiple services for the same user request, because this can cause race conditions if one service caches a different result.

Instead, evaluate once at the entry point (API gateway or main application server) and pass the variant downstream via request headers or context objects.

## What happens if a user clears their cookies or switches devices during the experiment?

If the user's distinct ID changes (because cookies are cleared and they get a new anonymous ID), PostHog treats them as a new user and may assign them a different variant. This is a known limitation of client-side identity. To mitigate this, encourage or require authentication early in the flow you are testing, so the distinct ID is tied to a stable account rather than a cookie. PostHog's `identify` call merges anonymous and authenticated IDs, but the merge only works if both IDs have been seen in the same session.

Cross-device consistency requires authenticated distinct IDs.
