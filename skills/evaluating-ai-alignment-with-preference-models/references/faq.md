# FAQ: Evaluating AI Alignment with Preference Models

## What is a preference model in Constitutional AI?

It is a model trained on pairs of responses and labels saying which is better, which then scores any single response. In Constitutional AI the harmlessness labels come from an AI feedback model guided by the constitution, and in the original paper the helpfulness labels came from people. The policy is trained with reinforcement learning to produce responses the preference model scores highly.

## How do I know the preference model is good?

Measure its accuracy on held-out comparisons that people have labeled, overall and by category, and check its calibration. Include hard cases such as evasive answers that should lose to helpful, harmless ones. Then confirm during RL that rising reward still matches human judgments of the policy.

## What is reward model overoptimization?

It is what happens when a policy is optimized so hard against an imperfect reward model that real quality falls while the reward keeps rising. Research on scaling laws for reward model overoptimization measured this effect, and the Constitutional AI paper saw it as over-harsh answers and repeated boilerplate in over-trained models.

## Should I use a public benchmark?

Public reward model benchmarks such as RewardBench are useful for comparing approaches and spotting general weaknesses, including a tendency to favor refusals. They do not test your constitution, so build your own held-out sets from your principles and use a public benchmark as a second view.

## How often should the preference model be retrained?

When the policy's outputs have moved enough that the preference model's judgments start to disagree with people. Anthropic's earlier RLHF work updated preference models weekly with fresh data, and the Constitutional AI paper proposed the same kind of iterated training with AI feedback. Tie retraining to evaluation signals rather than a fixed calendar alone.
