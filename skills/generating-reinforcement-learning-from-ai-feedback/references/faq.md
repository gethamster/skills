# FAQ: Generating Reinforcement Learning from AI Feedback (RLAIF)

## What is RLAIF?

RLAIF, reinforcement learning from AI feedback, is RLHF with the preference labels produced by a model instead of people. The Constitutional AI paper introduced it for harmlessness, with a feedback model choosing between two responses according to a written principle. After the labels exist, reward model training and reinforcement learning run the same way as in RLHF.

## Does RLAIF work as well as RLHF?

In the Constitutional AI paper, RLAIF-trained models were less harmful than RLHF models at a given level of helpfulness. Google's later comparison found RLAIF comparable to RLHF on summarization, helpful dialogue and harmless dialogue. Results depend on the labeler, the principles and the task, so validate against human judgments for your own use.

## Which model should produce the labels?

Use the most capable model you can afford that follows the multiple-choice format and exposes token probabilities. The Constitutional AI paper found models got better at identifying harm as they grew, and Google's study found smaller labelers had much stronger position bias. The Constitutional AI paper used a pretrained model for plain labels and a helpful RLHF model when chain of thought was used.

## Why use soft labels instead of picking a winner?

The normalized probabilities carry the labeler's uncertainty, and multiple-choice probabilities from language models are fairly well calibrated. The Constitutional AI paper found soft labels gave much better results than hard labels. When chain of thought makes labels overconfident, clamping them to a moderate range recovers some of that benefit.

## Can I skip the reward model entirely?

Some variants do. Google's study introduced direct RLAIF, which gets rewards from an off-the-shelf model during reinforcement learning without training a separate reward model, and reported it performed better than the standard setup in their experiments. Others build preference pairs and use a direct preference optimization method instead of reinforcement learning, as in the Hugging Face open recipe.

## How do I know the labels are good enough?

Compare them with human labels on a sample, overall and per principle, and read the disagreements. Also test for position bias by swapping orders, and check whether labels simply favor longer responses. If agreement is low for one principle, rewrite it; if it is low everywhere, change the labeler or the prompt format.
