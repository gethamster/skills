# FAQ: Segmenting New User Cohorts for Onboarding Experiments

## How do I define 'new user' if my product does not have a clear registration event?

Use PostHog's `$initial_referrer`, `$initial_current_url`, or the automatically captured `$created_at` person property as proxies. If users can access your product without registering (for example, a freemium tool with anonymous usage), set a custom `first_meaningful_action_at` property when the user performs their first significant action, such as creating a project or saving a file. Use this timestamp as your cohort filter instead of a registration date. The key is choosing a moment that reliably distinguishes first-time engagement from return usage.

## Should I create the cohort before or after setting up the feature flag?

Create the cohort first. The feature flag configuration screen lets you select an existing cohort as a release condition, but you cannot create a new cohort inline during flag setup. Building the cohort first also lets you verify its membership count and spot-check profiles before anything is connected to the experiment. If the cohort looks wrong, you can fix it without risk of accidentally exposing a broken experiment to users.

## How long should I wait after instrumenting new person properties before launching the experiment?

Wait at least 48 to 72 hours after deploying the tracking code that sets new person properties. This buffer lets you verify that properties are being set consistently, catch any instrumentation bugs in production, and accumulate enough profiles to validate your cohort filters against real data. Check that the property appears on 95%+ of new sign-ups during this window. If the hit rate is lower, investigate missing code paths (such as social login flows or mobile app sign-ups that bypass your main registration handler).

## Can I use PostHog's built-in 'first seen' or 'initial properties' instead of custom person properties?

PostHog automatically sets `$initial_referrer`, `$initial_current_url`, `$initial_browser`, and similar properties on first identification. However, PostHog does not automatically set a `$created_at` property in all configurations. If your setup does capture `$created_at` automatically, you can use it for temporal filtering. Check a few recent profiles to confirm.

The advantage of custom properties like `created_at` or `has_completed_onboarding` is that you control exactly when they are set and what they mean. Built-in properties may be set at unexpected times, such as when a user is first seen as anonymous rather than when they register.

## What happens if a user qualifies for the cohort, gets assigned a variant, and then later stops qualifying?

PostHog's feature flag assignment is sticky by default. Once a user receives a variant, they keep that variant for the duration of the experiment even if their person properties change. For example, if a user completes onboarding and `has_completed_onboarding` flips to true, they remain in the experiment with their original variant. This is correct behavior.

You want to track their full journey from first exposure through conversion, not drop them mid-experiment. However, they will not be included in the cohort's current member count, which can cause confusion during monitoring. Track experiment participation through PostHog's experiment results page rather than the cohort member count.

## How do I handle PostHog experiments targeting new users across both web and mobile platforms?

Use a server-side person property set during registration that is platform-agnostic. If you set `created_at` from your backend API when the account is created, the property exists regardless of whether the user signed up on web, iOS, or Android. Your cohort filters on this property will work across all platforms. The feature flag evaluation then happens per-platform using the same underlying person profile.

Avoid setting the cohort-defining property from the client SDK because different platforms may have different initialization timing, leading to inconsistent property availability.

## Why does my PostHog experiments cohort for new users include users I did not expect?

The most common causes are: person property values with unexpected formats (for example, a `created_at` stored as a Unix timestamp integer rather than an ISO 8601 string, which breaks date comparison operators), OR logic on the cohort filters instead of AND logic, or anonymous user profiles that received properties during pre-identification tracking. Open the cohort, click on a few unexpected members, and examine their person properties. Compare the actual property values to your filter conditions character by character. Also check whether PostHog has merged multiple anonymous profiles into one identified profile, which can carry over properties from unexpected sessions.
