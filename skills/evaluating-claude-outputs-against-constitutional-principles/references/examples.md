# Examples: Claude Content Optimizer: Evaluate Against the Constitution

## A product page that was true and still misleading

**Scenario:**

Illustrative scenario: a draft product page says the software "integrates with your existing tools" and lists three well-known integrations. Every statement is accurate, but two of the integrations only work on the most expensive plan, and the page does not say so.

**Walkthrough:**

The Claude critique pass, run with the pricing page as a source, flags the section under non-deception: the selective emphasis leaves readers believing all integrations come with every plan. It proposes adding the plan requirement next to each integration.

The reviewer agrees and applies the fix. Because the same pattern appears on two other pages in the batch, the team adds the pricing page to the standard sources block in the prompt template and an honesty instruction to state plan limits wherever a feature is mentioned.

## Overconfident claims in a guide

**Scenario:**

Illustrative scenario: a how-to guide draft states that a technique "will improve your conversion rate." The only source provided is one customer case study.

**Walkthrough:**

The critique marks the sentence as failing the calibration item: a single case is presented as a general result. It proposes rewording to describe what happened for that customer and noting that results vary. The reviewer accepts the change.

The team checks the batch and finds the same wording in several guides. The cause is a line in the prompt asking for "confident, benefit-led" language. They keep the confident tone but add a reason-based instruction: describe outcomes only as strongly as the supplied evidence supports, because readers make buying decisions from these guides.

## Calibrating two reviewers

**Scenario:**

Illustrative scenario: two editors review the same small batch of drafts with a new rubric and disagree on many items under "adds value beyond summarizing others."

**Walkthrough:**

They compare notes and find they read the item differently: one counts any original example as added value, the other requires original data or first-hand experience. They rewrite the definition with a passing and a failing example taken from the batch.

On the next batch they agree on almost every item, and Claude's critique pass, updated with the same definition, matches their judgments more closely. The rubric is then frozen for the quarter so results can be compared.
