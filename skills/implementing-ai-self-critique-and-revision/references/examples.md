# Examples: Implementing AI Self-Critique and Revision

## Building a first supervised set for an open model

**Scenario:**

Illustrative scenario: a two-person team wants to reduce harmful answers from an open instruction-tuned model before deploying it in an internal tool. They have a few hundred red-team prompts and a constitution of eight critique and revision pairs.

**Walkthrough:**

They write a template and three few-shot examples, then run the loop on twenty prompts and read everything. Two revisions begin with "Sure, here's a revised version," so they add an example that starts directly with the answer and a cleaning rule that strips such openers.

They run the full set with one revision round and a second round on half the prompts. Reading a sample, the second round mostly adds caveats without removing more harm, so they keep first-round revisions for most prompts. They mix the revisions with answers to ordinary helpfulness prompts and fine-tune, holding back a slice of red-team prompts for evaluation.

## Finding a principle that causes over-refusal

**Scenario:**

Illustrative scenario: a team's discard log shows that one principle, about avoiding medical advice, produces far more refusals than any other.

**Walkthrough:**

They read the critiques for that principle. The critiques flag any mention of symptoms or medicines as medical advice, and the revisions then refuse to discuss health at all, even for general questions.

They rewrite the pair so the critique asks whether the response gives specific diagnosis or dosage instructions for the person, and the revision asks the model to keep general health information while suggesting a professional for personal decisions. The refusal rate for that principle drops on the rerun, and the revisions still remove the specific advice the principle targets.

## Turning revisions into preference pairs

**Scenario:**

Illustrative scenario: a team has a supervised set from the loop and wants to try a preference-optimization step afterward without training a separate reward model.

**Walkthrough:**

For each red-team prompt they take the first draft as the rejected answer and the final kept revision as the chosen answer, following the Hugging Face recipe. They drop pairs where the first draft was already harmless, because in those pairs the revision is often just longer, and they do not want to teach the model that longer is better.

They read a sample of the remaining pairs and remove a few where the revision is worse than the draft. The dataset records the constitution version, the principle used for each pair and the revision round, so they can trace any odd behavior back to its source.
