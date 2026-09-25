# Examples: PostHog Experiments on Webflow and Marketing Pages

## A headline test with custom code

**Scenario:**

Illustrative scenario: a startup's Webflow homepage leads with a feature-focused headline. The marketing lead wants to test an outcome-focused headline and measure clicks on the signup button.

**Walkthrough:**

The PostHog snippet is already in the site's Head code. The team creates an experiment in PostHog with `control` and `test`, and adds a primary metric on a custom event fired when the signup button is clicked. In the Webflow designer they give the headline an ID.

In the page's custom code before the closing body tag, a short script waits for flags to load, reads the experiment flag and replaces the headline text only for the test variant. Because the headline is the first thing visitors see, the team hides it until flags load, accepting a short delay. They check both variants with a console override on desktop and mobile, publish, and launch.

## A no-code button copy test

**Scenario:**

Illustrative scenario: a designer wants to test "Start free" against the current "Get started" on the pricing page's main button, without asking engineering for help.

**Walkthrough:**

An engineer adds `disable_web_experiments: false` to the snippet once, and the designer enables the no-code web experiments preview. With the toolbar launched on the live site, she creates an experiment, selects the button for the test variant and changes its text.

After saving, the experiment appears in PostHog, where she adds the button click event as the primary metric and launches. Because the change is simple text on a page that does not re-render, it fits the use cases PostHog lists for no-code experiments.

## Linking a landing page test to onboarding

**Scenario:**

Illustrative scenario: a team tests two landing page versions, one promising a quick setup and one promising depth of features. Signup rates are similar, and they want to know which brings users who finish onboarding.

**Walkthrough:**

The app calls `identify()` at signup, so each new user's pre-signup activity, including the landing page variant, is linked to their person. The team adds a secondary metric for onboarding completion to the landing page experiment.

At the end, signups are about the same, but the analysis of the secondary metric suggests a difference in onboarding completion. The team treats it as a lead for further testing and plans a follow-up experiment with onboarding completion as the primary metric.
