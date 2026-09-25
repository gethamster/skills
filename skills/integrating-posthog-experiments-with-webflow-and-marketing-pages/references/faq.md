# FAQ: PostHog Experiments on Webflow and Marketing Pages

## Where does the PostHog snippet go in Webflow?

In site settings, on the Custom code tab, in the Head code section. PostHog's Webflow guide says this needs at least the Basic site plan, which enables custom code. Publish the site after saving so the snippet goes live.

## Do I need to write code to run a PostHog experiment on Webflow?

Not always. PostHog's no-code web experiments let you change text, CSS or HTML of page elements from the toolbar. They are in beta, require a feature preview and `disable_web_experiments: false` in the snippet, and suit simple changes. Anything more complex is better done in custom code that reads the flag.

## How do I avoid the page flashing the original version?

Make sure the flag value is known before the element is shown. Wrap your change in `posthog.onFeatureFlags()`, and for prominent elements hide them until flags load, which PostHog says slows the page down slightly. Evaluating the flag on an earlier page is another option PostHog suggests.

## What metric should a landing page test use?

A named conversion event, such as a signup button click or form submission. Pageviews undercount in experiments because they are often captured before flag data loads. If signup continues in your product, identify users there so you can also measure onboarding outcomes.

## How is this different from Webflow Optimize?

Webflow Optimize is Webflow's own product for A/B testing and personalization of sites. PostHog experiments on Webflow run on PostHog's flags and events, so landing page tests share data with product analytics and in-app experiments. Teams comparing the two should weigh where the rest of their measurement lives.
