# Examples: Setting Rate Limits and Overage Pricing for AI APIs

## Example: B2B SaaS with an AI document-analysis API (5-person startup)

**Scenario:**

A small startup offers an API that extracts structured data from contracts using an LLM. They have three tiers: Free ($0, 100 docs/month), Starter ($49, target SMB), and Pro ($199, target mid-market). Their per-document inference cost is $0.08 (GPT-4 class, ~2K tokens per doc). They have 200 beta customers and 45 days of usage data showing a median of 120 docs/month on paid plans, p75 at 340, p90 at 800, and one outlier at 12,000.

**Walkthrough:**

The team maps per-unit cost at $0.08/doc and targets 70% gross margin, meaning each doc needs to generate at least $0.27 in revenue. They set the Starter cap at 500 docs/month (covers p75 comfortably) and Pro at 2,500 docs/month (covers p90 with headroom). The Starter effective rate is $0.098/doc and Pro is $0.0796/doc — both well above the $0.08 cost floor. They price overages at $0.15/doc for Starter and $0.12/doc for Pro, both above Pro's effective rate so upgrading makes sense for chronic over-users. Velocity limits are set at 5 docs/minute for Free, 20 for Starter, and 60 for Pro. Notifications fire at 50%, 75%, and 90% of the monthly cap. For Starter, they add a $25 overage cap to prevent bill shock. The 12,000-doc outlier would have paid $0 in overages under the old system but will now either upgrade to Pro or pay ~$25/month in capped overages — either way, the company captures $150+/month in value that was previously leaking.

## Example: AI image generation platform (growth-stage, B2C + prosumer)

**Scenario:**

A 30-person company offers an AI image generation platform with a consumer freemium tier and paid prosumer tiers. Plans: Free (25 images/month), Creator ($15/month), and Studio ($49/month). Per-image cost is $0.04 on their standard model and $0.12 on their premium model. They have 50,000 free users and 3,000 paid users. Usage data shows the median Creator generates 80 images/month but the p95 generates 900, and several automated accounts generate 5,000+.

**Walkthrough:**

The team sets Creator at 200 images/month (covers p75 at 150 comfortably) and Studio at 1,000 images/month (covers p90 at 750). Overages are $0.12/image on Creator and $0.08/image on Studio — both above cost and structured so Studio is cheaper per-image for heavy users. They add a critical decision: automated accounts generating 5,000+ images clearly need an Enterprise API plan, so they add a hard velocity limit of 10 images/minute on Creator and 30 on Studio. Any account hitting velocity limits repeatedly is flagged for an enterprise sales conversation. The Free tier gets a hard block at 25 images with no overages — the only upgrade path is to paid. They simulate the policy and find that 78% of Creator users stay within cap, 15% would hit the 75% warning and see the upgrade CTA, and 7% would pay overages averaging $4.20/month. Revenue impact: $12,600/month in new overage revenue plus an estimated 8-12% conversion lift on the Creator-to-Studio upgrade from the notification-driven CTA.

## Example: Enterprise AI analytics platform (large team, B2B)

**Scenario:**

A 200-person enterprise software company adds AI-powered natural language querying to their analytics platform. They sell annual contracts from $50K-$500K. AI queries cost $0.15 each (complex multi-step reasoning chains). They are adding AI query allowances to existing contracts and need to handle overages without disrupting relationships managed by account executives.

**Walkthrough:**

The team takes a different approach than self-serve: instead of hard caps, they implement soft monitoring with account-executive-mediated expansion. Each contract includes a negotiated AI query allowance (e.g., 100K queries/year for a $200K contract, effective rate $0.20/query at ~25% margin above the $0.15 cost). The system sends the customer a usage dashboard updated daily and alerts the assigned AE at 60%, 80%, and 95% consumption. At 60%, the AE reaches out proactively to discuss usage patterns and expansion. At 95%, the system sends a joint alert to the customer and AE with a pre-configured expansion quote. No hard block is ever applied — instead, queries beyond the allowance are served normally but flagged as overage in the next invoice at $0.25/query (1.67x the base rate). The team adds velocity limits purely for infrastructure protection: 100 queries/minute per account, with automatic queuing (not rejection) above that threshold. This approach preserves the white-glove enterprise experience while capturing $2.4M in projected annual overage revenue across their 180 enterprise accounts.

## Example: Developer-tools company adding AI code review (mid-market B2B)

**Scenario:**

A developer-tools company with 800 customers adds an AI-powered code review feature to their existing platform. The feature analyzes pull requests using a fine-tuned model at $0.05 per PR review. They have three plans: Team ($29/seat/month, ~5 seats avg), Business ($59/seat/month, ~20 seats avg), and Enterprise (custom). They want to monetize the AI feature without forcing a pricing model change.

**Walkthrough:**

Rather than restructuring their per-seat pricing, the team adds AI review credits to each plan: Team includes 200 reviews/month, Business includes 1,000, Enterprise includes a negotiated allowance. They chose credits-per-account rather than credits-per-seat because code reviews are a team activity — one reviewer may run the tool on all PRs. Overages are $0.08/review on Team and $0.06/review on Business, both above cost and structured so Business is cheaper for heavy usage. Velocity limits are set at 10 concurrent reviews (not per-minute, but parallel, since reviews take 30-90 seconds each). The notification system integrates with the team's existing Slack notifications: a bot posts to the team's channel at 75% and 90% with a link to the billing page. After simulating against 60 days of beta data, they find that 82% of Team accounts and 88% of Business accounts stay within their cap. The 12% of Business accounts that exceed their cap would generate an average of $47/month in overages — significant enough to matter but low enough relative to their $1,180/month Business spend that it will not cause friction. They ship with a one-quarter grace period where overages are tracked but not charged, allowing customers to adjust their workflows before billing begins.
