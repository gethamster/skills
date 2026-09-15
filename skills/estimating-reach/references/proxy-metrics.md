# Proxy Metrics for Reach Estimation

When direct product analytics are unavailable, use proxy metrics to approximate Reach.

## Support Ticket Multiplier

| Product Type | Suggested Multiplier | Rationale |
|-------------|---------------------|-----------|
| B2B SaaS (technical users) | 10-20x | Technical users are more likely to report issues |
| B2B SaaS (non-technical users) | 20-50x | Non-technical users under-report significantly |
| B2C (consumer app) | 50-100x | Consumers rarely contact support |

## Other Proxy Sources

- **Forum posts / community threads**: Count unique authors, apply 5-10x multiplier for lurkers
- **Sales call mentions**: Count unique prospects who raised the topic, apply 3-5x for pipeline representation
- **NPS verbatim comments**: Count responses mentioning the topic, extrapolate to total respondent base

## Confidence Guidance

- Proxy-based Reach estimates should always use 50% Confidence or lower
- If two proxies agree on the same order of magnitude, consider 60-70% Confidence
- Validate one proxy estimate per quarter by instrumenting the actual event
