# FAQ: Managing Different Planning Cadences Across GIST Layers

## How do I handle urgent requests that arrive between scheduled cadence reviews?

Create an explicit 'emergency override' process that is separate from your regular cadences. Define what qualifies as urgent (production outage, regulatory mandate, competitive threat with a deadline) and what does not (executive request, feature idea, customer complaint). True emergencies bypass the cadence system, but the team reviews each override at the next regular ceremony to determine whether the cadence itself needs adjustment. If overrides happen more than once per quarter, either the cadence is too slow for your environment or the team is misclassifying non-urgent items as emergencies.

## Should I manage cadences before or after setting up the idea bank?

Set up the idea bank first, then design cadences. Without a populated idea bank, the idea review cadence has nothing to review, and the ceremony will feel pointless from the start. Begin with the [idea bank](https://tryhamster.com/skills/generating-and-banking-product-ideas), populate it with at least 15-20 ideas through discovery work, then establish the review cadence. Similarly, define [measurable goals](https://tryhamster.com/skills/defining-measurable-product-goals) before setting the goal review cadence, so the first quarterly review has substance.

## How long should each planning ceremony take?

Quarterly goal reviews: 90 minutes to 2 hours, depending on the number of goals and teams. Biweekly idea reviews: 30-45 minutes. Step-project sprint planning: 30 minutes for 1-week sprints, 60 minutes for 2-week sprints. Step-project sprint reviews: 30 minutes.

Daily task standups: 10-15 minutes. If any ceremony consistently takes longer, the scope is too broad. Split the ceremony rather than extending it. Total weekly planning overhead should not exceed 2-3 hours per team member.

## How do I adapt cadences for a team practicing continuous deployment?

Continuous deployment teams often feel that sprint boundaries are artificial. The adaptation is to keep the step-project cadence as a review cadence rather than a deployment cadence. The team deploys whenever code is ready, but the step-project review still happens on a fixed schedule to assess whether the experiment's validation criteria have been met. This preserves the discipline of time-boxed experimentation while allowing the team to ship at their natural speed. The daily task cadence shifts from 'what will I do today' to 'what did I learn from yesterday's deploy.'

## Why does my cadence system keep breaking down after 2-3 months?

The most common cause is ceremony fatigue compounded by a lack of visible value. Teams stop attending ceremonies that do not produce decisions. Review your ceremonies against a simple test: did we make at least one meaningful decision in this session? If the answer is consistently no for a given ceremony, the cadence is either too fast (not enough has changed since the last review) or the ceremony format is wrong (attendees are reporting status rather than making decisions).

Adjust the frequency or restructure the agenda to be decision-focused rather than status-focused. The second most common cause is the absence of a cadence owner who ensures ceremonies happen and stay on track.

## How do I coordinate cadences when my team works across multiple time zones?

Async ceremonies work well for daily task management and can work for step-project reviews if you use a structured async format (recorded demo plus written results, with a 24-hour comment window). Goal reviews and idea reviews benefit from synchronous discussion because they involve judgment calls and debate. If you cannot find a shared time slot, rotate the meeting time so no single time zone always bears the inconvenience. The critical principle is that async ceremonies require more structure, not less.

Provide a written template that participants fill out before a deadline, then publish a summary of decisions made. Without the template, async ceremonies produce no decisions and quietly die.

## Can I use different cadences for different product areas within the same team?

Yes, and many mature teams do. A team that owns both a stable core product and an experimental new feature might run the core product's step-projects in 2-week sprints while running the experimental feature's step-projects in 1-week sprints. The key constraint is that all product areas must share the same goal review cadence, because goals are organizational alignment tools. Below the goal layer, each product area can run at its own speed.

Document these differences in the cadence calendar and ensure the team understands why the cadences differ, so the variation feels intentional rather than chaotic.
