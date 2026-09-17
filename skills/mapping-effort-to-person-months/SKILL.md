---
name: mapping-effort-to-person-months
description: "Convert engineering, design, and QA estimates into consistent person-months so the RICE denominator stays comparable across initiatives."
metadata:
  homepage: https://tryhamster.com
  method: rice-framework
---

# Mapping Effort to Person-Months

Convert engineering, design, and QA estimates into consistent person-months so the RICE denominator stays comparable across initiatives.

## Prerequisites

- Rough scope per initiative
- A team definition of what one person-month includes

## Steps

1. **Agree what counts** — design, engineering, QA, rollout. Apply the same definition to every initiative in the same scoring round.
2. **Estimate from the people doing the work** — not from PMs guessing on their behalf.
3. **Convert calendar time into focused person-months** — half-time work and parallelism are explicit, not buried in a single number.
4. **Round to sensible steps** — typically 0.5 person-month increments. Avoid fake precision like 1.7.
5. **Hold the rules across cycles** — if the definition drifts, rankings between quarters stop being comparable.

## Example

A search redesign needs:

- 1 designer half-time for 1 month
- 2 engineers full-time for 2 months
- 1 QA engineer half-time for 1 month

Effort = (0.5 × 1) + (2 × 2) + (0.5 × 1) = **5 person-months**.

## Common Mistakes

- Inflating Effort to express uncertainty—use Confidence instead
- Excluding design or QA when "they don't usually count"
- Estimating in story points without converting through team velocity
- Letting Effort definitions drift between quarters
