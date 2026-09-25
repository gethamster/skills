# FAQ: Eppo vs PostHog Experiments: Choosing a Platform

## What is the main difference between Eppo and PostHog Experiments?

Where the analysis runs and where the data comes from. PostHog Experiments runs on PostHog's own flags and events inside its analytics product. Eppo describes a warehouse-native analysis engine that works on the data in your warehouse, with an SDK that does no tracking of its own. Check both vendors' current docs, since features change.

## Do they use different statistics?

Less than you might expect. PostHog defaults to Bayesian and offers frequentist analysis with sequential testing. Eppo's documentation lists frequentist, sequential and Bayesian options plus CUPED++. Compare defaults and the methods your team will actually use.

## When does a warehouse-native tool make sense?

When your trusted metrics, such as revenue or renewals, live in a data warehouse and a data team maintains them. Computing experiment metrics there avoids reconciling two sources. PostHog can also use synced warehouse tables as metrics, so compare that option too.

## How should we compare pricing?

Each vendor bills on a different unit, so estimate your volume in each unit and get quotes where prices are not published. PostHog bills experiments through feature flag requests. Add the engineering time for integration and maintenance, which often outweighs license differences.

## Should we run a pilot before deciding?

Yes. Run the same small experiment or an A/A test on each finalist and compare exposures and metrics with your own counts. Include the people who will read results, since clarity for them matters as much as statistical features.
