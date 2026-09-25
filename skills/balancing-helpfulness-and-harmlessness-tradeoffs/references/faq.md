# FAQ: Balancing Helpfulness and Harmlessness in AI Responses

## Why is there a trade-off at all?

Helpfulness training makes a model more willing to follow requests, including harmful ones, and harmlessness training tends to make it more evasive. The Constitutional AI paper described this tension in Anthropic's earlier RLHF models and designed the method to reduce it by training for non-evasive, explained declines.

## What is over-refusal?

Over-refusal, sometimes called exaggerated safety, is when a model refuses safe requests because they look like unsafe ones or touch a sensitive topic. The XSTest suite was built to measure it, with safe prompts that a well-calibrated model should answer and unsafe prompts as contrasts.

## Can I fix over-refusal with a system prompt?

A system prompt can shift tone, but it is a weak control over behavior learned in training. In Hugging Face's Constitutional AI experiments, a safety system prompt alone did not stop undesirable content, and the reverse problem, a model trained to refuse too much, also needs changes to training data and principles.

## How does Constitutional AI reduce evasiveness?

Through principles that ask for thoughtful, non-accusatory answers, training data that includes helpful responses, rater instructions that prefer non-evasive answers when both are harmless, and choosing snapshots before over-training. The paper reports that its RL-CAI models were virtually never evasive on red-team prompts.

## What should I report to show the balance?

Report harmful compliance on unsafe prompts and refusal or evasion on safe prompts, on fixed held-out sets, every time. Add a small sample of transcripts for each, because hedged non-answers and boilerplate are easy to miss in numbers alone.
