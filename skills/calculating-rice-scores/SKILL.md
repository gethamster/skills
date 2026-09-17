---
name: calculating-rice-scores
description: "Apply the RICE formula to a product backlog and produce a numerically ranked priority list."
metadata:
  homepage: https://tryhamster.com
  method: rice-framework
---

# Calculating RICE Scores

Apply the RICE formula to a product backlog and produce a numerically ranked priority list.

## Prerequisites

- A product backlog with at least 5 candidate initiatives
- Access to basic product analytics or user counts
- Agreement on the scoring time period (typically quarterly)

## Steps

1. **Set up a scoring spreadsheet** with columns: Initiative, Reach, Impact, Confidence, Effort, RICE Score.
2. **Define the Reach time period** — agree on one quarter as the standard window.
3. **Estimate Reach** using analytics, funnel data, or customer segment counts.
4. **Score Impact** on the 0.25-3x scale: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal.
5. **Assign Confidence** as a percentage: 100% (data-backed), 80% (strong intuition), 50% (gut feeling).
6. **Estimate Effort** in person-months, including design, dev, QA, and rollout.
7. **Calculate**: RICE = (Reach x Impact x Confidence) / Effort. Sort descending.

## Example

A checkout redesign: Reach 30,000 (quarterly), Impact 2, Confidence 0.8, Effort 3 person-months.

RICE = (30,000 x 2 x 0.8) / 3 = **16,000**

## Common Mistakes

- Using revenue instead of user counts for Reach
- Inflating Confidence to 100% without supporting data
- Comparing scores across different time periods
