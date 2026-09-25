# Examples: Scaling Constitutional AI Training Without Human Labels

## Replacing a labeling contract for harmlessness

**Scenario:**

Illustrative scenario: a mid-sized lab pays an outside vendor for harmlessness preference labels on every training cycle. Each cycle waits weeks for labels, and the labelers regularly flag distress from reading harmful outputs. The lab wants to cut the wait and the exposure without losing quality.

**Walkthrough:**

They write a constitution from the vendor's labeling guidelines and run AI labeling on the pairs from the last cycle, which already have human labels. Agreement is high on most principles and low on two about self-harm and medical topics.

They switch harmlessness labeling to AI feedback for every principle except those two, which stay with a smaller, specialist human team. A weekly audit sample goes to the same team. The cycle time drops to the time needed to run the labeling jobs, and human reviewers now see a small sample instead of every harmful output.

## Growing a red-team prompt set from seeds

**Scenario:**

Illustrative scenario: a team has a few hundred human-written red-team prompts, not enough to train on, and wants many more without hiring a large red team.

**Walkthrough:**

They few-shot prompt a pretrained model with batches of seed prompts grouped by harm category and ask for new prompts in the same style. After deduplication and filtering, they have many times the original number.

Checking coverage, they find the generated prompts cluster tightly around the seeds and almost never use multi-turn setups. They write a second round of seeds that are multi-turn and more varied, regenerate, and keep a rule that a fixed share of each training set comes from human-written prompts.

## Keeping a human gate after automating training

**Scenario:**

Illustrative scenario: a team has automated prompt generation, revisions and labels, and can now retrain in a day. Pressure grows to ship each new model as soon as automated metrics look good.

**Walkthrough:**

They write down a release rule: no model ships without a human comparison against the current model on held-out prompts and a short round of fresh red teaming by people who did not build the training data.

On the next release the automated scores improve, but the human comparison shows the new model has started adding the same reassuring sentence to many answers. They trace it to a newly added principle, soften it, retrain, and ship the corrected model after it passes the human check.
