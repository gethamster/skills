# Examples: Eppo vs PostHog Experiments: Choosing a Platform

## A product-led startup already on PostHog

**Scenario:**

Illustrative scenario: a small product team sends all product events to PostHog and uses its session replays daily. They plan mostly onboarding and activation experiments in their web app, with a handful running at a time.

**Walkthrough:**

Their scorecard weights data architecture and workflow highest. Every primary metric they listed is a product event already in PostHog, and the people running experiments are product managers who already work in PostHog. A warehouse-native tool would mean building a warehouse pipeline they do not have.

They pilot PostHog Experiments on one onboarding test and check that exposures match their own signup counts. The decision document records that they stay on PostHog, lists the alternatives they read about, and sets a review for when revenue metrics move into a warehouse.

## A company whose revenue lives in a warehouse

**Scenario:**

Illustrative scenario: a subscription company keeps billing and retention data in a data warehouse, owned by a data team. Most planned experiments target revenue per user and renewal.

**Walkthrough:**

The key metrics live outside any product analytics tool, so the team shortlists warehouse-native options, including Eppo and Statsig Warehouse Native, alongside PostHog with synced warehouse tables. They map the data flow for each: where assignment is logged, where metrics are computed, and who maintains the pipeline.

The pilot runs an A/A test on each finalist. The data team compares each tool's metric values with its own warehouse queries. The written decision weighs agreement with the warehouse and the effort to maintain each setup, and records which features were beta or plan-limited at the time.

## A marketing team choosing for landing pages

**Scenario:**

Illustrative scenario: a marketing team on Webflow wants to test headlines and pricing layouts without engineering help, while the product team already runs experiments in PostHog.

**Walkthrough:**

The scorecard includes visual editing and the ability to connect landing page variants to signups and onboarding. The team compares PostHog's no-code web experiments, noting that they are in beta, with Webflow Optimize, and with custom code tests in PostHog.

They choose based on whether landing page results need to join with product outcomes. Because they want to know which landing page brings users who finish onboarding, keeping tests in the same PostHog project as the product scores highest, and they write that reasoning into the decision.
