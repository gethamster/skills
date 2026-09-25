# FAQ: Calibrating Confidence Thresholds and Escalation Paths

## Is the confidence score a probability I can use directly?

Only after you check it. One report found [expected calibration error of 0.0313 on a 1,200-item MMLU sample](https://archerhume.com/posts/jevs-architecture-unmasked?v=3), while another found [0.107 on support tickets missing their deciding policy](https://orcarouter.ai/blog/jev-typesafe-system-one-what-we-know). Measure accuracy by band on your own data and use the observed figures to set thresholds.

## How many labeled examples do I need before setting a threshold?

Enough that each band you rely on has a stable accuracy figure. A practical starting point is, for example, 30-50 labeled cases per band you plan to automate, with more for expensive branches. Sparse bands produce accuracy numbers that swing on a few cases, so widen the bands or collect more data rather than trusting them.

## Should uncertain cases go to a human or to a stronger model?

The rollout guidance allows either: [uncertain cases remain with a human or a stronger model](https://x.com/akshay_pachaar/status/2101037514945597645). A stronger model suits high-volume, lower-stakes decisions where a reviewer would be a bottleneck. A human suits decisions with financial, legal or customer-facing consequences, and some teams chain the two, sending the stronger model's low-confidence cases on to a person.

## What is the difference between a fallback and an escalation?

A fallback handles cases where the decision call did not produce a usable answer: [request failure, malformed output or insufficient savings](https://jev-tutorial.org/guides/agent-decision-layer). It reverts to existing behavior. An escalation handles a valid answer whose confidence falls below the threshold, and sends it to a reviewer or stronger model for judgment.

## How often should thresholds be recalibrated?

Recalibrate whenever the model version, question wording or input distribution changes, and on a regular schedule otherwise. Keep a fixed evaluation set so reruns are comparable. A rise in human overrides or fallback rate between scheduled checks is a signal to recalibrate early.
