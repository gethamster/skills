# FAQ: Measuring FDE Success by Business Outcomes

## How do I measure FDE success when the customer cannot clearly articulate their business objective?

Start by asking what number the executive sponsor reports to their board or their boss. If they still cannot name one, propose three candidate metrics based on the problem domain (e.g., cost reduction, revenue growth, time savings) and ask them to rank them. Most customers know what success looks like, they just have not framed it as a metric yet. If after two conversations they genuinely cannot identify a business outcome, this is a red flag that the engagement may lack a clear mission, and you should revisit [scoping mission-driven engagements](https://tryhamster.com/skills/scoping-mission-driven-engagements) before proceeding.

## How long should it take to set up the scorecard before starting engineering work?

Budget 3-5 business days for scorecard design, baseline collection, and stakeholder alignment. This includes one call to extract objectives, one working session to draft the scorecard, one call to validate with the executive sponsor, and 1-2 days to instrument metric collection. If you spend more than a week on the scorecard, you are overcomplicating it. If you spend less than a day, you are probably skipping baseline documentation or stakeholder buy-in, both of which will cost you later.

## Should I measure FDE success before or after transitioning learnings to product?

Measure continuously during the engagement, not after. The scorecard runs from day one of the engagement through the end. Transitioning learnings to product is a separate activity that happens in parallel, informed by what the scorecard reveals about which customer problems are common enough to justify core product investment. The scorecard data becomes the evidence base for the transition case.

See [transitioning field learnings into product features](https://tryhamster.com/skills/transitioning-field-learnings-into-product-features) for how to use scorecard data to build that case.

## Why does my FDE scorecard keep drifting toward technical metrics over time?

This drift happens because the people updating the scorecard are engineers, and engineers naturally gravitate toward metrics they can control and measure precisely. Technical metrics are comforting because they always show progress: code was written, tests passed, features deployed. Business metrics are uncomfortable because they sometimes show no movement despite real engineering effort. Combat this drift by reviewing the scorecard every 4 weeks and asking for each metric: "Would the customer's CFO care about this number?" If the answer is no, move it to your internal engineering retrospective and replace it with a metric the CFO would care about.

## How do I handle situations where the forward deployed engineer vs software engineer measurement conflict creates organizational tension?

Frame it as complementary, not competitive. Software engineers measure platform health and development velocity because those metrics ensure the product is reliable and improving. Forward deployed engineers measure business outcomes because those metrics ensure the product creates value in complex customer environments. Both are necessary.

Present the two measurement frameworks side by side in leadership reviews and explicitly name why each is appropriate for its context. " Let the numbers make the argument.

## What do I do when the business outcome metric does not move despite strong leading indicators?

First, verify the causal chain between your leading indicators and the lagging metric. If feature adoption (leading) is climbing but churn (lagging) is flat, something else is driving churn that your engagement does not address. Second, check the time lag. Some lagging metrics genuinely take a quarter to respond to leading indicator changes, especially retention and revenue metrics.

Third, look for confounding factors: did the customer change pricing, lose a key account manager, or face a market shift? Document these factors transparently on the scorecard. Honest analysis of why the number has not moved yet is far more credible than overpromising or quietly swapping the metric.

## How do I build the scorecard when the engagement is very short, like 4-6 weeks?

For short engagements, focus on one lagging metric and one leading indicator. Skip the monthly reporting cadence and instead do a single mid-point check and a final report. Choose a lagging metric with a short feedback loop, such as time-to-first-value or a specific operational efficiency gain, rather than a quarterly metric like churn. In very short engagements, the scorecard is less about tracking trends and more about documenting the before-and-after snapshot.

Capture the baseline on day one, measure the same metric on the last day, and calculate the delta. Simple, defensible, and fast.
