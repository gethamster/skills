---
name: estimating-reach
description: "Quantify how many users or events an initiative will affect within a given time period."
metadata:
  method: rice-framework
---

# Estimating Reach

Quantify how many users or events an initiative will affect within a given time period.

## Prerequisites

- Familiarity with the RICE formula
- Access to product analytics or user data
- A defined scoring time period

## Data Sources (by reliability)

1. **Product analytics** (direct) — pageviews, event counts, funnel entries
2. **Funnel data** (direct) — users entering a conversion stage
3. **Customer segments** (indirect) — CRM/billing counts for target segments
4. **Support tickets** (proxy) — ticket count x 10-50x silent majority multiplier

## Key Rules

- Always count **unique users**, not events (unless the initiative targets event frequency)
- Use the **same time period** across all initiatives (typically quarterly)
- Round to the nearest meaningful order of magnitude
- Lower Confidence when using proxy metrics

## Example

CSV export timeout fix: 47 support tickets x 20x multiplier = ~1,000 affected users/quarter. Confidence: 50%.

*[Add this skill to your Hamster workspace](https://tryhamster.com) to version it, share it with your team, and let AI agents use it automatically.*
