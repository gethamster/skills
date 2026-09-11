# FAQ: Integrating PostHog A/B Tests with Webflow and Marketing Pages

## How do I prevent flicker when running PostHog Webflow AB tests on pages with heavy images or animations?

The anti-flicker technique hides the experiment wrapper with `opacity: 0` before any content renders, which covers text and layout flicker. For heavy image pages, the images themselves do not cause experiment flicker because they load asynchronously regardless. The risk is that Webflow load animations (set in the Interactions panel) override your opacity hide by animating elements to `opacity: 1` on page load. Audit the page's interactions and disable or retime any load-triggered opacity animations on elements inside your experiment wrapper.

If you cannot remove them, set your wrapper to a parent div above the animated elements.

## Can I run PostHog experiments on Webflow pages that use Webflow's CMS collections?

Yes, but with a limitation. CMS collection pages use a template, so your experiment code in the page-level custom code applies to every item in the collection. This is useful if you want to test a layout change across all blog posts or product entries. However, if you want to test changes on a specific collection item, you need to add a conditional in your script that checks the current URL path and only runs the experiment logic on the target page.

Collection-level experiments work well for broad template changes like CTA placement, sidebar layout, or related content widget positioning.

## How long should a PostHog Webflow AB test run on a marketing page?

The minimum duration depends on traffic volume and the minimum detectable effect you care about. For a page with 1,000 weekly visitors and a 5% baseline conversion rate, you need roughly 3-4 weeks to detect a 20% relative improvement with 95% confidence. For smaller effects (10% relative improvement), you need 8-12 weeks or more traffic. PostHog's experiment dashboard shows a recommended sample size when you configure the experiment.

Do not stop the experiment early just because one variant looks ahead, as early results are unreliable due to peeking bias. Let it run until PostHog indicates significance or until you reach your pre-committed sample size.

## Should I run PostHog Webflow AB tests before or after setting up my conversion events?

Set up and verify your conversion events before launching the experiment. Create the goal event in PostHog, add the tracking code to your page, and confirm events appear in the Live Events stream with correct properties. Then create the experiment and select that event as the goal metric. If you launch the experiment first and add event tracking later, you lose data from the gap period, and your sample sizes will not match across the experimental period.

This is covered in more detail in [designing experiment hypotheses and metrics](https://tryhamster.com/skills/designing-onboarding-experiment-hypotheses-and-metrics).

## How do I handle returning visitors who see a cached version of my Webflow page without the experiment code?

Webflow's CDN caches pages aggressively. After you publish experiment code, some returning visitors may load a cached version without the experiment script. This means they see the control variant by default but are not tracked in the experiment. To mitigate this, add cache-busting headers if your Webflow plan supports it, or accept that the first few hours after publishing may have a small population of untracked visitors.

For most experiments, this is a negligible effect because cached versions expire within Webflow's TTL (usually under 24 hours). If your experiment is particularly sensitive, wait 24 hours after publishing before launching the experiment in PostHog.

## Why does my PostHog experiment show uneven traffic split between control and test on my Webflow page?

Uneven splits usually have one of three causes. First, the feature flag targeting rules may include a condition that filters out some visitors before randomization, causing fewer total visitors to enter the experiment. Check the flag's targeting in PostHog. Second, your anti-flicker timeout may be too short, causing slow-loading visitors to see the control variant without triggering the `onFeatureFlags` callback, which means they are not counted in the experiment at all.

Increase the timeout to 1500ms and check if the split evens out. Third, if you recently changed the flag configuration, PostHog may have re-randomized assignments, causing a temporary skew. Give it 48 hours to stabilize.

## Can I use this same integration approach for Framer, Squarespace, or WordPress instead of Webflow?

Yes, the JavaScript pattern is identical across all no-code builders that support custom code injection. Framer has a custom code section in site settings and per-page settings. Squarespace has code injection under Settings > Advanced. php editing.

The only differences are where you paste the code and how elements are classed or identified. In WordPress, you may target elements by ID rather than class. In Framer, components have auto-generated class names that are less readable than Webflow's, so consider adding data attributes in Framer's component settings for easier targeting.
