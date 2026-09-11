# Examples: Running A/B Tests in the PostHog Experiments Tab

## Example: Onboarding welcome screen A/B test for a B2B SaaS tool

**Scenario:**

A project management SaaS with 800 new signups per week wants to test whether a personalized welcome screen (asking the user's role and team size) improves completion of the three-step onboarding flow compared to the current generic welcome screen. The team has a Bayesian analysis mode active in PostHog. The baseline onboarding completion rate is 34%.

**Walkthrough:**

' She links a feature flag 'onboarding-welcome-variant' with two variants: 'control' (generic) and 'test' (personalized). The goal metric is a funnel: 'page_view /welcome' followed by 'onboarding_completed,' with a 7-day funnel window. She enters a 34% baseline and a 5 percentage point minimum detectable effect into the sample size calculator, which returns approximately 1,500 users per variant, meaning roughly 3,000 total users, or about 4 weeks at 800 signups per week. She launches the experiment, verifies within the first hour that both variants show non-zero participant counts, and sets a weekly check-in calendar event.

2 percentage point lift. She documents the result, shares the experiment URL in the team Slack channel, and moves to the shipping and cleanup process.

## Example: Pricing page CTA test for a small B2C subscription app

**Scenario:**

A fitness app with 5,000 daily active users on the free tier wants to test two different CTA button texts on the pricing page: 'Start Free Trial' (control) versus 'Try Premium Free for 7 Days' (test). The team is a two-person squad with limited experimentation experience. The current click-through rate on the CTA is approximately 8%.

**Walkthrough:**

The developer creates a feature flag 'pricing-cta-variant' in PostHog, sets up two variants, and implements the flag check in the React component that renders the pricing page CTA. He creates a new experiment called 'Pricing CTA Text - Trial Messaging - Jul 2024,' links the flag, and sets the goal metric as a trend: unique users firing the 'pricing_cta_clicked' event. With an 8% baseline and a 2 percentage point MDE, the calculator suggests about 3,800 users per variant. At roughly 300 pricing page visitors per day, the test needs about 26 days.

He launches, confirms events are arriving, and checks back weekly. 1% for control, with 91% Bayesian probability of being best. Since this is below the 95% threshold, the team decides to extend for one more week. At week 5, the probability reaches 96%, and they ship the test variant.

## Example: Multi-variant onboarding tooltip test for a developer tools platform

**Scenario:**

A developer tools company wants to test three different tooltip sequences during the first-run experience of their CLI tool's web dashboard. Variant A is the current no-tooltip control. Variant B adds three tooltips on key features. Variant C adds the same three tooltips plus a guided walkthrough modal.

The team has 2,000 new dashboard users per week and uses frequentist analysis. Baseline activation rate (completing the first integration) is 22%.

**Walkthrough:**

The PM creates an experiment called 'Dashboard First Run - Tooltips A/B/C - Aug 2024' with a three-variant feature flag 'dashboard-firstrun-variant' set to 33/33/34 traffic split. She defines the goal as a funnel: 'dashboard_loaded' followed by 'first_integration_completed' within 14 days. 5 weeks of traffic. Because the team is using frequentist analysis, they commit to not checking results until week 4.

02). 31). The team ships Variant C and documents that tooltips alone were insufficient but the guided walkthrough drove a meaningful activation improvement.

## Example: Marketing landing page headline test integrated with Webflow

**Scenario:**

A SaaS startup using Webflow for its marketing site wants to test two headline options on its homepage. Traffic is 1,200 unique visitors per day. The current signup conversion rate from homepage to completed signup is 3.5%. The PostHog snippet is installed on the Webflow site via a custom code embed.

**Walkthrough:**

The growth marketer creates a feature flag 'homepage-headline-variant' and implements a client-side script in Webflow's custom code section that checks the flag on page load and swaps the headline text using JavaScript DOM manipulation. 5 percentage point MDE, the calculator recommends about 4,100 users per variant. At 1,200 daily visitors split 50/50, each variant gets roughly 600 per day, requiring about 7 days. She launches, spots a brief flicker issue where the original headline shows for 200ms before the variant loads, and adds a CSS rule to hide the headline element until the flag evaluates.

4% for the value-prop headline (Bayesian probability 98%). She ships the winner by updating the Webflow headline permanently and removes the flag code. For deeper integration patterns, the team references the sibling skill Integrating PostHog A/B Tests with Webflow and Marketing Pages.
