# FAQ: Estimating Decision Confidence

## What does a confidence score on an AI decision actually mean?

When it is calibrated, it means decisions given that probability are correct at roughly that rate over many comparable cases. The [RLCD glossary](https://sanity.io/glossary/rlcd-reinforcement-learning-for-calibrated-decisions) frames this as stated probability matching how often the answer turns out to be correct. It does not say anything certain about one individual decision. Until you have compared scores with logged outcomes, you do not know whether a given model's scores mean this at all.

## Why not just ask a language model how confident it is?

Self-reports are the least reliable source of confidence. [TypeSafe's launch post](https://typesafe.ai/blog/introducing-system-one-models-and-jev) says models prompted for confidence estimates are often overconfident and inconsistent. If you must start with self-reports, log them as a baseline and replace them once score-based or outcome-trained probabilities prove better on your data.

## How many decisions do I need before I can trust the scores?

There is no universal number in the public material, so pick one based on how finely you split the data. Each probability range for each decision type needs enough records that its observed accuracy is not dominated by chance, for example a few hundred. Sparse high-confidence ranges are common, so collect longer before automating on them.

## Is a model calibrated just because it is usually right?

No. A model can be accurate overall and still attach numbers that do not match its hit rate, for example scoring everything very high when it is right somewhat less often. Calibration requires the stated probability and the observed success rate to agree within each confidence range. Check both accuracy and that agreement.

## Can I trust a vendor's claim that its model is calibrated?

Treat it as a starting hypothesis. For RLCD specifically, [Turing Post](https://turingpost.com/p/what-is-jev-rlcd) lists the technical details as unpublished, so you cannot inspect how confidence is produced. Your own outcome log on your own tasks is the evidence that matters, and it should be split by decision type.
