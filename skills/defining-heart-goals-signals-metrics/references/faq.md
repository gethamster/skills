# FAQ: Defining Goals, Signals, and Metrics for HEART

## What is the difference between a signal and a metric?

A signal is the behavior or attitude that would show success or failure, such as "users finish the upload flow." A metric is the exact calculation built on that signal, with a numerator, a denominator, a population and a time window. Keeping them apart lets a team agree on what evidence matters before arguing about how to compute it. One signal can support several metrics.

## How many goals should one feature have?

Few. The HEART paper asks teams to decide explicitly which categories to include, and Kerry Rodden's later guidance is to prioritize the top goals because a few well-chosen metrics are better than an overwhelming dashboard. Starting with one to three goals keeps the table small enough to act on. Add more only when the first ones are instrumented and reviewed.

## What if the signal we need is not logged?

Record it anyway, with a note that it needs new instrumentation. The paper tells teams not to worry about measurability while writing goals, and to check at the signal stage whether the relevant actions are logged or could be. If logging is not possible soon, choose a proxy signal and write down its weakness. Revisit the choice when the event exists.

## Can a goal belong to more than one HEART category?

Yes, and that is common. A goal about new users becoming regular users touches both Adoption and Retention. Put it under the category that best matches the decision the team is making, and note the overlap. The goal still needs to be clear and to have at least one signal.

## When should we set targets?

After you have a baseline. A target written before anyone has seen the metric on real data is a guess. Compute the metric on recent data, look at how much it varies from week to week, and then choose a target that would be a meaningful change for this product.
