# Examples: Integrating PostHog A/B Tests with Webflow and Marketing Pages

## Example: Headline test on a SaaS landing page in Webflow

**Scenario:**

A B2B SaaS startup with 3,000 weekly landing page visitors wants to test whether a benefit-led headline ('Cut your reporting time by 75%') outperforms their current feature-led headline ('Automated Financial Reporting Platform'). The page is built in Webflow with a custom domain. The team has one marketer and no front-end engineer available.

**Walkthrough:**

The marketer installs the PostHog snippet in Webflow's project-level head code and verifies it loads on the landing page by checking the browser console. In PostHog, they create an experiment named `landing-hero-headline-q1` with two variants: `control` (current headline) and `benefit-led`. They add the anti-flicker style to the landing page's head code section, targeting the hero section wrapper with `opacity: 0`. innerText = 'Cut your reporting time by 75%'` to swap the text.

The script then sets the wrapper opacity to 1. capture('hero_cta_clicked')`. After testing both variants using feature flag overrides in the console and verifying events appear in PostHog's live stream, they publish the site and launch the experiment. After two weeks and 6,000 visitors, the benefit-led headline shows a 23% higher click-through rate with 95% significance, and the marketer ships the winner by updating the Webflow heading directly and removing the experiment code.

## Example: Pricing page layout test for a mid-market product

**Scenario:**

A mid-market project management tool with 8,000 monthly pricing page visitors wants to test whether showing annual pricing as the default (with a toggle to monthly) converts better than showing monthly pricing as the default. The pricing page is in Webflow with three plan cards, each showing both monthly and annual prices. The team has a growth PM and a junior developer.

**Walkthrough:**

The developer duplicates the pricing section in the Webflow designer, creating two complete sections: `pricing-monthly-default` (control) and `pricing-annual-default` (test). In the test section, they rearrange the cards to show annual prices prominently with monthly prices in smaller text, and pre-select the annual toggle. They set `pricing-annual-default` to `display: none` in Webflow's style panel. In PostHog, the PM creates an experiment with a flag key `pricing-default-display`.

getFeatureFlag('pricing-default-display')`. If the value is `annual-default`, the script sets `pricing-monthly-default` to `display: none` and `pricing-annual-default` to `display: block`. The conversion event is tracked as a pageview on the `/checkout` page, configured as the experiment goal directly in PostHog. Both variants are tested across desktop and mobile breakpoints.

After publishing and launching, the team monitors the experiment for three weeks. The annual-default variant shows 18% more clicks to checkout and a 12% increase in average revenue per visitor because more users select annual plans. They ship the annual-default layout, delete the control section from Webflow, and remove the experiment code.

## Example: Onboarding welcome page test for a B2C app with Webflow marketing site

**Scenario:**

A consumer fitness app uses Webflow for its marketing site and a separate React app for the product. New users land on a Webflow welcome page after email verification before being redirected into the app. The team wants to test whether a personalized welcome message ('Welcome, [first name]! ').

They have 2,000 new sign-ups per week.

**Walkthrough:**

The team configures PostHog to receive the user's first name as a person property during sign-up (already captured by the React app). On the Webflow welcome page, the PostHog snippet initializes with the user's distinct ID passed via a URL parameter from the app redirect. first_name` and injects it into the heading. If the name is unavailable (edge case), the code falls back to the control text.

The conversion event is tracked when the user clicks the "Start My Plan" CTA, which redirects into the React app. After four weeks, the personalized variant shows a 31% increase in CTA clicks and a 15% increase in users who complete their first workout (tracked as a downstream event in the React app). The team ships personalization as the default and extends the pattern to other Webflow landing pages.

## Example: Multi-page funnel test across Webflow and a static checkout page

**Scenario:**

An e-commerce brand uses Webflow for product pages and a separate static HTML checkout page hosted on Netlify. They want to test whether adding urgency messaging ('Only 3 left in stock') to the product page increases checkout completion. The team has a marketing manager and a freelance developer. Weekly product page traffic is 15,000 visitors.

**Walkthrough:**

The freelance developer installs the PostHog snippet on both the Webflow product pages and the Netlify checkout page, using the same PostHog project API key so that user identity persists across domains via the PostHog cookie. In PostHog, they create an experiment with the flag `urgency-messaging-pdp`. On the Webflow product page, the experiment code checks the flag and, for the `urgency` variant, unhides a pre-built Webflow element that reads 'Only 3 left in stock' (styled with a red badge). The element is set to `display: none` by default in the Webflow designer.

The primary conversion event is checkout completion, tracked on the Netlify checkout page when the order confirmation fires. Because the PostHog distinct ID persists across domains, the experiment can attribute checkout conversions back to the variant the user was assigned on the product page. The developer tests cross-domain identity by adding an item to cart in one variant, navigating to checkout, and confirming the PostHog event includes the correct feature flag property. After three weeks, the urgency variant shows a 9% increase in checkout starts but no statistically significant change in checkout completion, suggesting the urgency copy drives more browsing-to-cart behavior but does not affect final purchase intent.

The team decides not to ship and designs a new test targeting checkout abandonment instead.
