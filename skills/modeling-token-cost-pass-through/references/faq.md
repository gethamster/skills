# FAQ: Modeling Token Cost Pass-Through and Markup

## How do I model pass-through when I use several model providers?

Give each provider and model its own rate row in the input sheet and tag each feature with the model it uses. Where a feature can route to more than one model, model the routing share as an input. That lets the scenario engine show what happens if routing shifts or one vendor changes prices.

## Should I price per token or per value unit?

Per value unit, unless your buyers are developers who already budget in tokens. Most buyers cannot predict token use, so a token price feels risky. Tokens stay in the internal model, where they belong.

## What markup should I target?

There is no universal number. Choose a margin target from your business model: how much you spend on sales, support and development, and what investors or finance expect. Write down the target and the floor, and check each feature against both.

## How do self-hosted models change the model?

Cost per request depends on utilization rather than token rates. Model cost per request at current and planned utilization, and treat utilization as a scenario input. Include the engineering cost of running the serving stack.

## How do I account for prompt improvements that reduce tokens?

Treat them like a vendor price cut: cost per unit falls and margin rises. Decide in advance whether you keep the margin, raise included usage or lower price. Re-measure tokens after each prompt change rather than estimating the saving.
