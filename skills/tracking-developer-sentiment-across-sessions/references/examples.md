# Examples: Tracking Developer Sentiment and Problem Evolution Across Sessions

## Example: Tracking Authentication Pain Across a 6-Month Advisory Cycle

**Scenario:**

You're building a developer platform and running a TAB with 25 developers. Over six months, you conduct three sessions with each member. Early calls surface authentication as a frustration, but you're not sure how serious it is or whether it's getting worse.

**Walkthrough:**

In your tracker, you tag 'auth-complexity' on 14 of 25 developer profiles after cycle 1, with an average sentiment score of 2.8. You check google search console devtools and find 340 monthly impressions for queries like 'oauth token refresh [your platform]' and 'authentication error [your platform]' with a CTR of only 4%, suggesting developers search but don't find answers.

After cycle 2, 'auth-complexity' appears on 18 profiles with average sentiment now at 3.6. Three developers mention they've started evaluating Auth0 as a workaround. Google search console devtools now shows 510 impressions for auth-related queries — a 50% increase — and new queries appearing like 'simplify auth [your platform]'.

After cycle 3, sentiment hits 4.1 and two developers have actually implemented Auth0 wrappers. Your delta dashboard shows 'auth-complexity' as the #1 intensifying pain point with strong search correlation. You present this at the quarterly review with the trend line, search data, and three direct quotes. The product team prioritizes an authentication SDK overhaul for the next quarter. Six months later, you track sentiment dropping back to 2.0 and google search console devtools auth queries declining — confirming the investment worked.

## Example: Detecting a Tool Migration Wave via Sentiment and Search Signals

**Scenario:**

Your TAB includes backend developers, and you notice sentiment scores on 'deployment-complexity' are changing inconsistently — some developers are getting happier while others aren't.

**Walkthrough:**

You drill into your tool preference tags and discover a pattern: developers who migrated to containerized deployments (Docker/Kubernetes) show declining deployment frustration (from 3.5 to 2.0), while those still on traditional VM deployments remain at 3.8.

You check google search console devtools and find that queries containing 'docker deploy [your platform]' are rising sharply while 'vm deploy [your platform]' queries are flat. The search data confirms a real migration wave, not just advisory board bias.

This insight reshapes your documentation priorities: you invest heavily in container deployment guides and reduce investment in VM deployment docs. You also update your [interview guide](https://tryhamster.com/skills/designing-developer-pain-interview-guides) to explicitly ask about deployment infrastructure changes so you can track this migration more precisely in future sessions.
