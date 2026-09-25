# Proxy Metrics for Reach Estimation

The Intercom post that introduced RICE asks teams to use real measurements from product metrics for Reach "instead of pulling numbers from a hat" ([Intercom](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)). Sometimes that data does not exist yet, for example when the idea targets a problem the product does not instrument. This reference covers how to estimate Reach from proxies without pretending the result is a measurement.

## Direct Sources First

Check these before reaching for a proxy:

- **Funnel reports**: people entering the step where the change lives.
- **Feature usage**: people who use the screen or feature being changed in the window.
- **Event counts**: occurrences of the action being changed, when Reach is measured in events.
- **Customer records**: the size of the segment the change targets, from billing or CRM data.

Nielsen Norman Group notes that reach is ideally pulled from digital analytics or frequency metrics ([NN/g](https://www.nngroup.com/articles/prioritization-methods/)).

## Common Proxies

| Proxy | What it actually counts | How to use it |
|-------|------------------------|---------------|
| Support tickets | People who hit the problem and chose to write in | Count unique requesters, then state an assumption about how many silent users each represents |
| Sales and success calls | Prospects or customers who raised the topic | Count unique accounts, and note that this reflects the pipeline and not the user base |
| Survey answers | Respondents who selected or mentioned the topic | Scale by the ratio of respondents to the population surveyed, and note response bias |
| Community or forum threads | Authors and participants in threads on the topic | Count unique participants, treat as a lower bound |
| Search logs | Searches for the feature or problem inside the product | Count unique searchers in the window |

This reference gives no fixed multiplier for converting a proxy into reach, because the right ratio depends on the product and on how willing its users are to speak up. The conversion is the team's own assumption, and it should be written down next to the estimate.

## Rules for Proxy Estimates

- State the conversion assumption in the basis note, for example "each ticket assumed to represent several affected users".
- Round the result to an order of magnitude. A proxy cannot justify three significant figures.
- Flag the estimate as proxy-based so Confidence is lowered.
- Where two independent proxies are available, estimate from both and record whether they agree.
- Instrument the relevant event as soon as the idea is taken seriously, so the next round can use real data.

## Worked Estimates

Illustrative scenario: a team scoring three ideas in a quarter, with Reach measured as unique users.

| Idea | Source | Arithmetic | Reach |
|------|--------|------------|-------|
| Export timeout fix | Support tickets, 20 unique requesters | Team assumes about ten silent users per requester | About 200, proxy |
| Onboarding checklist | Funnel report, 1,000 new signups per month | Every new signup sees it, three months | 3,000, direct |
| Bulk edit | Feature usage, 600 users of the list view per quarter, a quarter of them edit more than one item | 600 x a quarter | 150, direct |

Only the first estimate depends on an assumption the team made up, and its basis note says so. It goes to the Confidence step flagged as proxy-based.

## Validating Proxies Over Time

After an idea ships, compare actual reach with the proxy estimate. If ticket-based estimates keep coming in low or high by a similar factor, adjust the team's assumption. Over a few rounds this turns a guess into a team-specific rule grounded in its own data.
