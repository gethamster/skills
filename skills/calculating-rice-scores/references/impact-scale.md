# RICE Impact Scale Reference

Impact estimates how much a project changes things for one person who encounters it, judged against the goal the team is pursuing. Sean McBride's team at Intercom framed it as "how much will this project increase conversion rate when a customer encounters it?" and noted that other teams might use goals such as adoption or delight ([Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)).

## The Scale

McBride chooses from a multiple-choice scale because impact is hard to measure precisely. The values and labels below are the ones his post gives.

| Value | Label in the Intercom post |
|-------|----------------------------|
| 3 | Massive impact |
| 2 | High |
| 1 | Medium |
| 0.5 | Low |
| 0.25 | Minimal |

The value is multiplied into the score, so it scales the result up or down. Nielsen Norman Group describes the same range, with impact "often on a scale from .25 (low) to 3 (high)" ([NN/g](https://www.nngroup.com/articles/prioritization-methods/)).

## Anchoring the Scale

The labels are words, and people read words differently. Before a round, pick two or three ideas the whole team understands and agree on their ratings. Those become anchors: every new rating is compared with them ("is this more or less than the onboarding change we called high?").

A few habits keep ratings consistent:

- Judge the effect on each person who meets the change. How many people meet it is Reach, and counting it twice inflates the score.
- Tie every rating to the round's goal. A change that delights users but does nothing for the goal in scope is low impact for this round.
- When the group splits between two adjacent values, pick one and lower Confidence, since the split is itself evidence of uncertainty.

## Worked Scoring Round

Illustrative scenario: a team's goal for the quarter is trial-to-paid conversion. It anchors the scale with two known ideas, then rates three new ones.

| Idea | Impact | Reasoning |
|------|--------|-----------|
| Anchor: pricing page rewrite | 2 | Changes the main decision point for every trial user who reaches it |
| Anchor: new icon set | 0.25 | Visible, but no plausible path to more conversions |
| In-app upgrade prompt at usage limit | 2 | Meets users at the moment they need a paid feature, similar to the pricing anchor |
| Dark mode | 0.5 | Requested often, weak link to conversion |
| Guided setup for integrations | 1 | Helps activation, which feeds conversion indirectly |

The dark mode rating shows why the goal matters. In a round about satisfaction it might rate higher. In a conversion round it rates low, even though it is popular.

## Common Questions

**Can a team use its own scale?**

Yes, as long as the scale is fixed for the round and everyone uses the same anchors. The Intercom values are a starting point that many teams keep because they are easy to explain.

**Should impact ever be negative?**

The Intercom scale has no negative values. If an idea might hurt the goal, that risk belongs in Confidence and in the discussion of the idea, and it is a reason to test before building.

**What if nobody can estimate impact at all?**

Then the idea is not ready to score. Research it, or run a small test, and score it once there is something to base the rating on.
