# FAQ: Evaluating AI Alignment Using Preference Models

## How many comparison pairs do I need to train an effective preference model for Constitutional AI?

A minimum of 10,000 pairwise comparisons produces a functional preference model, but 50,000-100,000 pairs are recommended for production use. The key is not just quantity but diversity—at least 15-20% of pairs should come from adversarial or edge-case prompts where alignment distinctions are subtle.

## Can I use a smaller model as a preference model for a larger generative model?

Yes. Preference models only need to evaluate text, not generate it, so a 3B parameter preference model can effectively score outputs from a 70B generative model. Ensure the smaller model was pretrained on a sufficiently diverse corpus to understand the range of topics the larger model handles.

## How do I measure whether my preference model is well-calibrated for claude topical authority evaluation?

Run isotonic regression on a held-out calibration set to map raw scores to probabilities. Then measure expected calibration error (ECE) across score bins. A well-calibrated model has ECE below 0.05, meaning its scores reliably predict the probability of constitutional adherence.

## What is the difference between a preference model and a reward model in RLAIF?

In practice, they are the same model used at different stages. During training, it is called a preference model because it learns from pairwise comparisons. During RL fine-tuning, it is called a reward model because it provides scalar reward signals. The architecture and weights are identical.

## How often should I retrain my preference model during RLAIF training?

Retrain every 2-4 RL policy updates, or whenever you observe reward scores increasing without corresponding improvement in human evaluation. Generate fresh comparison data from the current policy model's outputs to keep the preference model calibrated to the evolving output distribution.

## How do preference models handle tradeoffs between helpfulness and harmlessness?

The preference model learns tradeoff priorities from its training data. If your comparison pairs consistently label safe-but-helpful responses above safe-but-unhelpful refusals, the model learns that helpfulness matters when harmlessness is satisfied. Encode tradeoff priorities in your scoring rubric and ensure training data reflects them. See our guide on [balancing helpfulness and harmlessness](https://tryhamster.com/skills/balancing-helpfulness-and-harmlessness-tradeoffs) for details.
