# Examples: Balancing Helpfulness and Harmlessness in AI Responses

## A safety update that raised refusals on cooking questions

**Scenario:**

Illustrative scenario: a team adds principles about weapons and dangerous chemicals and retrains. Harmful compliance on their red-team set falls, and they are ready to ship.

**Walkthrough:**

Their two-sided evaluation shows refusals on safe prompts have also risen, concentrated in cooking and cleaning questions that mention knives, bleach or "killing" bacteria. Reading the critiques, they see the new principles fire on those words regardless of intent.

They narrow the principles to instructions that give meaningful help toward causing injury, and add a comparison principle that prefers direct answers to everyday household questions. After retraining, harmful compliance stays low and the refusal rate on safe prompts returns close to where it was before the update.

## Replacing lectures with short, explained declines

**Scenario:**

Illustrative scenario: users of an assistant complain that when it declines something, it writes several paragraphs of moral commentary.

**Walkthrough:**

The team samples declines and confirms most include the right refusal plus a long lecture. They add principles preferring responses that decline briefly, name the specific concern once, and offer a legitimate alternative when one exists, modeled on the paper's principles against preachy answers.

They also rewrite rater instructions to prefer the shorter, specific decline when two responses are equally harmless. The next evaluation shows declines shrink to a sentence or two with an alternative, and harmful compliance is unchanged.

## Choosing a snapshot on the frontier

**Scenario:**

Illustrative scenario: an RL run produces a series of snapshots. The latest one has the lowest harm rate, and the reward model scores it highest.

**Walkthrough:**

The team evaluates every snapshot on both halves of its evaluation set and plots them. Harm keeps falling across the run, but after the midpoint the refusal rate on safe prompts rises and samples begin to include the same reassuring closing line.

They choose a snapshot from just before the refusal rate starts rising, where harm is nearly as low as the latest one. They note the boilerplate as a sign of over-training and add pairs that penalize it to the next preference data round.
