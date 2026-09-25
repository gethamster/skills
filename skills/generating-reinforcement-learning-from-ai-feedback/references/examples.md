# Examples: Generating Reinforcement Learning from AI Feedback (RLAIF)

## Catching position bias in a small labeler

**Scenario:**

Illustrative scenario: a team uses a small open model as its feedback model to keep costs down. Early reward model results look fine, but the trained policy behaves oddly.

**Walkthrough:**

They rerun labeling on a sample with the two responses swapped. On many pairs the labeler picks the second slot both times, whatever the content. Averaging over both orders removes most of the effect, and the relabeled data changes which responses win on a noticeable share of pairs.

They also test a larger feedback model on the same sample and compare both against a small human-labeled set. The larger model agrees with people more often and flips less when the order changes, so they switch labelers for harmlessness and keep the small one only for a quick pre-filter.

## Choosing between plain and chain-of-thought labels

**Scenario:**

Illustrative scenario: a team wants to know whether asking the labeler to reason first is worth the extra cost for their harmlessness labels.

**Walkthrough:**

They label the same validation pairs both ways. Plain labels give soft probabilities with a wide spread. Chain-of-thought labels agree with the human set more often, but nearly all their probabilities sit close to 0 or 1.

They adopt chain of thought and clamp its probabilities to a moderate band before training, following the Constitutional AI paper. They keep plain soft labels for a second, cheaper principle set on tone, where the reasoning did not improve agreement.

## Fixing a principle the labeler reads differently from people

**Scenario:**

Illustrative scenario: a team's per-principle agreement report shows one comparison principle, about "respectful" responses, far below the others.

**Walkthrough:**

Reading the disagreements, they see the labeler treats any disagreement with the user as disrespectful, while human raters prefer the response that corrects a false claim politely. The principle is ambiguous about what respect means when the user is wrong.

They rewrite it to prefer the response that is courteous in tone while still correcting factual errors, relabel the affected pairs, and recheck agreement. The principle now agrees with people about as well as the rest, and they add the rewrite to the constitution's change log.
