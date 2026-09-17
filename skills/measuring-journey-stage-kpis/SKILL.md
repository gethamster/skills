---
name: measuring-journey-stage-kpis
description: "This skill teaches you to select, define, and track the right performance metrics for each of the five customer journey stages so you can pinpoint where growth is happening and where customers are dropping off."
metadata:
  homepage: https://tryhamster.com
  method: five-stage-customer-journey-framework
---

# Measuring Customer Journey Metrics and KPIs for Each Stage

> This skill teaches you to select, define, and track the right performance metrics for each of the five customer journey stages so you can pinpoint where growth is happening and where customers are dropping off.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours for initial setup, then 30-60 minutes per review cycle |
| Outcome | You produce a documented metrics framework that assigns 2-4 KPIs to each journey stage, with defined baselines, targets, data sources, and review cadences, giving your team a shared scoreboard for the entire customer lifecycle. |
| Prerequisites | Familiarity with the Five-Stage Customer Journey Framework (Awareness, Consideration, Purchase, Retention, Advocacy), Access to analytics tools (web analytics, CRM, or product analytics), A completed or in-progress customer journey map with defined touchpoints, Basic understanding of marketing and product metrics (what a conversion rate or churn rate represents) |
| Part of | [Five-Stage Customer Journey Framework](../../methods/five-stage-customer-journey-framework/METHOD.md) |

## Overview

Every customer journey map tells a story, but without metrics attached to each stage, it remains a qualitative narrative rather than a diagnostic tool. This skill fills that gap. It teaches you to assign specific, measurable KPIs to each of the five stages in the [Five-Stage Customer Journey Framework](https://tryhamster.com/methods/five-stage-customer-journey-framework), so you can see not just where customers go but how well each stage is performing. The concrete artifact you produce is a journey metrics framework: a document or dashboard that pairs each stage with 2-4 KPIs, their current baselines, target values, data sources, and a review cadence.

The problem this skill solves is strategic blindness. Teams that track only top-of-funnel metrics (impressions, clicks) or only bottom-of-funnel metrics (revenue, churn) miss the connective tissue in between. A healthy awareness stage paired with a broken consideration stage looks like a "traffic problem" if you only measure conversions. By instrumenting every stage, you can diagnose exactly which transition is underperforming and direct resources accordingly. This is especially important as organizations scale, because the gap between marketing, sales, product, and support teams often maps precisely to the gaps between journey stages.

The skill sits downstream of [mapping customer touchpoints](https://tryhamster.com/skills/mapping-customer-touchpoints-across-stages) and [building journey maps](https://tryhamster.com/skills/building-customer-journey-maps), and upstream of [identifying pain points and drop-off moments](https://tryhamster.com/skills/identifying-pain-points-and-drop-off-moments). Once you have a journey map with touchpoints, you instrument it with metrics. Once you have metrics with baselines and trends, you can spot the drops and investigate root causes. Success looks like a team that can answer, within a few minutes, questions like "What percentage of people who visit our pricing page actually start a trial?" or "What is our 90-day retention rate for customers acquired through organic search versus paid ads?" without scrambling through multiple dashboards or guessing.

This skill applies equally in B2C and B2B contexts, though the specific metrics and review cadences differ. A B2C ecommerce company might measure add-to-cart rate as a consideration metric with daily review, while a B2B enterprise SaaS company might measure SQL-to-opportunity conversion rate with monthly review. The structure remains the same: each stage gets its own small set of metrics, each metric has a defined source and target, and the full set tells a coherent story from first touch to advocacy.

## How It Works

The mental model behind stage-specific customer journey metrics is the funnel-as-diagnostic-system. Each journey stage represents a distinct customer intent, and the metrics for that stage should measure whether customers are successfully fulfilling that intent and transitioning to the next stage. Awareness metrics measure whether the right people are encountering your brand. Consideration metrics measure whether those people are engaging deeply enough to evaluate your offering. Purchase metrics measure whether evaluation converts to commitment. Retention metrics measure whether the promise made during purchase is being delivered. Advocacy metrics measure whether satisfied customers are amplifying your brand to others.

The reason you need stage-specific metrics rather than a single set of company-wide KPIs is that different stages have different failure modes, different owners, and different intervention levers. A decline in awareness reach is a media buying or content distribution problem. A decline in consideration engagement is a messaging, targeting, or product-market fit problem. A decline in purchase conversion is a pricing, UX, or sales process problem. Lumping these together into one "growth" number makes the problem invisible. Separating them makes it diagnosable.

The framework works because it enforces two constraints that prevent common measurement dysfunction. First, it limits each stage to 2-4 KPIs. This prevents the "dashboard of 50 metrics" problem where nothing is prioritized and everything is noise. Second, it requires each KPI to have a baseline, a target, and a data source. This prevents the "we should track NPS" problem where a metric is named but never actually measured, or measured but never compared against a standard.

There are important assumptions to understand. The framework assumes that your journey stages are roughly sequential, which holds for most businesses but breaks in highly non-linear journeys (impulse purchases, for example, collapse awareness-consideration-purchase into seconds). It assumes that the metrics you pick are actually measurable with your current tooling, which means you need to audit data availability before committing to a KPI. It also assumes that stage transitions are the most important thing to measure, which is usually true for growth diagnostics but may underweight within-stage depth (how deeply someone engages during consideration, not just whether they move to purchase).

The connection to the broader [Five-Stage Customer Journey Framework](https://tryhamster.com/methods/five-stage-customer-journey-framework) is that metrics transform the framework from a planning tool into an operating system. Without metrics, the framework helps you think about your customer. With metrics, it helps you manage your business. The journey map becomes a scoreboard, and each cross-functional team can see how their work connects to adjacent stages. Marketing owns awareness and consideration. Sales or product owns purchase. Product and support own retention. Customer success and marketing own advocacy. The metrics framework creates shared vocabulary and shared accountability across these groups.

## Step-by-Step Guide

### Step 1: Step 1: List Your Five Stages and Their Core Intents

Open your existing customer journey map or create a simple five-row table with columns for Stage, Customer Intent, and Key Transition. For each of the five stages (Awareness, Consideration, Purchase/Decision, Retention/Loyalty, Advocacy), write a one-sentence description of what the customer is trying to accomplish. For Awareness, the intent might be "Recognize that a problem exists and discover potential solutions." For Retention, it might be "Get consistent value from the product and justify continued investment." Then define the key transition for each stage: what does it look like when a customer moves from this stage to the next? Awareness to Consideration might be "visits website and engages with product content." Purchase to Retention might be "completes onboarding and reaches first value milestone." These transitions become the primary things your metrics need to detect.

> **Pro tip:** If you cannot clearly articulate the transition between two stages, that is a signal your journey map needs refinement before you instrument it with metrics. Vague transitions produce vague KPIs.

### Step 2: Step 2: Brainstorm Candidate Metrics for Each Stage

For each stage, brainstorm 5-10 candidate metrics that could indicate whether customers are fulfilling the stage intent and completing the transition. Do not filter yet. For Awareness, candidates might include impressions, reach, share of voice, branded search volume, direct traffic, social mentions, PR placements, and CPM. For Consideration, candidates might include website engagement rate, time on site, pages per session, content downloads, email signups, demo requests, marketing qualified leads (MQLs), and return visit rate.

For Purchase, candidates include conversion rate, cart abandonment rate, customer acquisition cost (CAC), average order value (AOV), trial-to-paid conversion, and sales cycle length. For Retention, candidates include churn rate, monthly active users, feature adoption rate, customer lifetime value (CLV), support ticket volume, and Net Promoter Score (NPS). For Advocacy, candidates include NPS, referral rate, review generation rate, social shares, user-generated content volume, and customer case study participation rate. Pull from your analytics platforms, CRM, and support tools to see what is actually being collected today versus what would require new instrumentation.

> **Pro tip:** Separate "available now" metrics from "need to build" metrics. Starting with available data lets you establish baselines immediately, while the metrics that require new instrumentation go on a separate implementation roadmap.

### Step 3: Step 3: Filter Down to 2-4 KPIs per Stage

Apply three filters to narrow each stage's candidate list. First, does this metric directly reflect the stage intent and transition you defined in Step 1? A metric like "pageviews" is loosely related to awareness but does not tell you whether the right people are discovering your brand. "Branded search volume" is a much stronger signal of actual awareness.

Second, is this metric actionable? If the number drops, can a specific team take a specific action to address it? If no one knows what to do when the metric moves, it is a vanity metric. Third, is this metric reliably measurable with your current or planned tooling?

If you cannot get the data within the next 30 days, defer it. After filtering, you should have 2-4 KPIs per stage. Write each one in a row with the stage name, the KPI name, a plain-language definition of what it measures, and why it matters for that stage.

> **Pro tip:** If you end up with more than four KPIs for a stage, force-rank them and cut the bottom. The discipline of choosing forces clarity about what actually matters. You can always promote a secondary metric later if a primary one proves unreliable.

### Step 4: Step 4: Define Baselines for Each KPI

For every selected KPI, pull the current value from your data sources. If the KPI is conversion rate, export the last 90 days of data and calculate the average, noting any seasonal trends or anomalies. If the KPI is NPS, pull your most recent survey results and note the sample size. If the KPI is CAC, calculate it for the last full quarter by dividing total acquisition spend by total new customers.

Document each baseline in your metrics framework alongside the date range used, the data source ("Google Analytics > Conversions > Trial Signups" or "Salesforce > Closed Won Opportunities"), and any caveats about data quality. If a KPI has no historical data because you are measuring it for the first time, mark the baseline as "TBD" and commit to a date by which you will have enough data to establish one. Typically, 30 days of data is sufficient for high-volume metrics and 90 days for low-volume metrics.

> **Pro tip:** Resist the urge to set baselines based on industry benchmarks instead of your own data. Your baseline must reflect your actual performance, not an aspirational number borrowed from a competitor or a blog post. Industry benchmarks are useful later for target-setting, not for baselining.

### Step 5: Step 5: Set Targets for Each KPI

For each KPI with an established baseline, set a target for the next quarter or review period. Targets should be specific numbers, not directions ("improve NPS" is not a target; "increase NPS from 32 to 40" is). ). The third input is the most important.

Work backward from your annual revenue target to determine what conversion rate, retention rate, and acquisition cost you need. Document targets alongside baselines so the gap is visible. If a KPI is being measured for the first time, set the target as "establish baseline" for the first period and defer numeric targets to the second period.

> **Pro tip:** Set targets that are achievable but uncomfortable. A target that requires no effort is a waste of a KPI. A target that requires a miracle destroys credibility. A good heuristic for mature metrics is a 10-20% improvement per quarter, unless your baseline is already near best-in-class.

### Step 6: Step 6: Assign Ownership and Data Sources

For each KPI, assign a single owner: the person or team responsible for monitoring the metric and initiating action when it deviates from target. Awareness metrics typically belong to the marketing or brand team. Consideration metrics might belong to demand generation or content marketing. Purchase metrics belong to sales (B2B) or product/growth (B2C/product-led).

Retention metrics belong to product, customer success, or support. Advocacy metrics belong to customer marketing or community. Next, document the exact data source for each KPI. Be specific enough that someone unfamiliar with your tools could find the number.

"Google Analytics 4 > Reports > Engagement > Conversions > trial_start event, filtered by new users, last 30 days" is good. "GA4" is not. If the metric requires combining data from multiple sources (for example, CAC requires marketing spend from your ad platforms plus new customer count from your CRM), document the calculation formula and where each input comes from.

> **Pro tip:** Single ownership does not mean single influence. The marketing team might own the consideration engagement metric, but product changes can heavily affect it. Ownership means "this person raises the flag and coordinates the response," not "this person is solely responsible for the number."

### Step 7: Step 7: Build the Metrics Framework Document or Dashboard

Consolidate everything into a single artifact. This can be a spreadsheet, a Notion database, a dashboard in your analytics tool, or a simple markdown document. The structure should have one section per journey stage, and within each section, a row per KPI containing: the KPI name, its definition, the data source, the current baseline, the target, the owner, and the review cadence. Add a visual layer if possible: a simple bar chart showing baseline versus target for each metric, or a traffic-light indicator (green/yellow/red) based on current performance relative to target.

The framework should fit on a single page or screen when summarized. If it does not, you have too many metrics. Share the framework with all stakeholders, including the owners of adjacent stages, so everyone understands how their metrics connect to the full journey.

> **Pro tip:** Start with a spreadsheet before investing in a dashboard tool. Dashboards are valuable once your data pipelines are stable and your metrics are validated, but premature dashboard investment leads to expensive maintenance of metrics that turn out to be wrong or irrelevant.

### Step 8: Step 8: Establish a Review Cadence and Escalation Protocol

Define how often each metric is reviewed and what happens when a metric misses its target. High-volume, fast-moving metrics like website conversion rate or daily active users might be reviewed weekly. Lower-volume metrics like NPS or referral rate might be reviewed monthly or quarterly. Document the review cadence for each KPI in your framework.

Then define an escalation protocol: if a metric drops below its baseline (not just below target, but below where it started), what happens? A good protocol has three tiers. Tier 1: the metric owner investigates and reports findings at the next review. Tier 2: the metric has been below baseline for two consecutive review periods, and a cross-functional working group convenes.

Tier 3: the metric has been declining for three or more periods, and leadership is involved in reprioritizing resources. Write down these thresholds so that escalation is automatic, not political.

> **Pro tip:** The most common failure mode is building the framework and never reviewing it. Block time on the calendar for the first three reviews before you launch. If the first review does not happen, the framework is dead.

### Step 9: Step 9: Run Your First Review and Calibrate

After one full review period (typically 2-4 weeks for weekly metrics, one month for monthly metrics), run your first formal review. For each KPI, report the current value, the baseline, the target, and the trend direction. Identify one to two stages where performance is weakest relative to target, and discuss what might be causing the gap. Connect this analysis to the [identifying pain points and drop-off moments](https://tryhamster.com/skills/identifying-pain-points-and-drop-off-moments) skill to investigate root causes at underperforming stages.

During this first review, also calibrate the framework itself. Ask: Are any metrics consistently unreliable or noisy? Are any metrics redundant (two metrics that always move together)? Are any stages missing a metric that would help explain the trend?

Adjust the framework based on what you learn. It is normal to swap out 1-2 metrics after the first review. Document the change and the reason for it so you maintain a clean audit trail.

> **Pro tip:** Bring raw data to the first review, not just summaries. People need to see the actual numbers and the source to build trust in the framework. Once trust is established in subsequent reviews, summaries and dashboards are sufficient.

## Best Practices

- Limit each stage to 2-4 KPIs, no more. Every additional metric dilutes focus and increases the chance that no single metric gets the attention it deserves. If your team cannot recite the metrics for a stage from memory, you have too many. The observable consequence of metric overload is that review meetings become data tours where everyone looks at numbers but nobody takes action.
- Always pair a volume metric with a quality metric at each stage. Awareness might pair reach (volume) with branded search volume (quality). Purchase might pair total conversions (volume) with CAC (quality). Without this pairing, you can celebrate growing reach while the quality of attention declines, or celebrate low CAC while acquisition volume flatlines.
- Measure stage transitions explicitly, not just within-stage activity. The most diagnostic metric at any stage is the conversion rate from that stage to the next. What percentage of aware prospects become considerers? What percentage of considerers become purchasers? These transition rates reveal friction between stages that within-stage metrics alone cannot detect.
- Update baselines quarterly. Customer behavior, market conditions, and your own product change constantly. A baseline set six months ago may no longer be relevant, which means your targets are calibrated against an outdated reality. Quarterly baseline resets keep the framework honest without creating excessive churn.
- Define each metric in writing with enough specificity that two people pulling the number independently would get the same result. "Conversion rate" means different things to different teams. Is it visitors-to-trial? Trial-to-paid?

MQL-to-SQL? Specify the numerator, denominator, time window, and any filters. Ambiguous definitions produce arguments about data accuracy rather than conversations about customer behavior.
- Track leading indicators alongside lagging indicators. Retention rate is a lagging indicator because by the time it drops, customers have already left. Feature adoption rate or login frequency are leading indicators that signal retention risk before churn actually happens. Each stage should have at least one leading indicator that gives you time to intervene.
- Keep a changelog for your metrics framework. When you add, remove, or redefine a metric, record the date, the change, and the reason. This prevents institutional amnesia and makes it possible to understand historical data even after the framework evolves. Teams that do not do this inevitably end up with broken dashboards and metrics that nobody can explain.

## Common Mistakes

- **Tracking the same metric across multiple stages and calling it different names** — This happens when teams assign "engagement" to both Awareness and Consideration, or "satisfaction" to both Retention and Advocacy. The result is that the metrics blur together and you cannot tell which stage is underperforming. Each stage should have distinct metrics that reflect its unique intent. If two stages share a metric, one of them likely needs a more specific indicator.

Watch for this by asking: if this metric drops, which stage is broken? If the answer is ambiguous, you have a metric that spans stages and needs to be split.
- **Setting targets based on industry benchmarks without adjusting for your specific context** — A SaaS company with a $500/month product should not use the same conversion rate targets as a SaaS company with a $50,000/year enterprise contract. Industry benchmarks provide useful reference points, but your targets must account for your price point, sales motion, market maturity, and customer segment. The signal to watch for is targets that feel either laughably easy or completely impossible. Both suggest that benchmarks were adopted without calibration.

Start from your own baseline and layer in benchmark context rather than starting from the benchmark.
- **Measuring only what is easy to measure, not what matters** — Teams gravitate toward metrics that their analytics tools report by default: pageviews, sessions, bounce rate. These are available but often not diagnostic. The consideration stage might be better measured by demo request rate or pricing page engagement depth, but if those require custom event tracking, teams default to easier metrics. The sign of this mistake is a metrics framework where every data source is the same tool (usually Google Analytics) and no stage requires cross-system data.

Fix it by starting from the stage intent and working backward to the best metric, then figuring out how to measure it, rather than starting from available data and hoping it maps to a stage.
- **Building the framework once and never reviewing or updating it** — The initial framework is a hypothesis about what matters. Without regular review, you cannot validate whether your chosen metrics actually correlate with business outcomes. Teams that build a framework in a workshop and never revisit it end up with a stale document that sits in a shared drive while actual decisions get made based on gut feel. The warning sign is that nobody references the journey metrics in weekly or monthly business discussions.

Fix it by scheduling recurring reviews on the calendar during framework creation, and by tying at least one team OKR or goal to a journey-stage metric so there is institutional incentive to keep the framework alive.
- **Assigning ownership to a committee instead of a single person** — When a metric is owned by "the growth team" or "marketing and product jointly," nobody is accountable. The metric drifts without investigation because each party assumes the other is watching it. Assign one named individual as the owner for each KPI. That person does not have to fix problems alone, but they are responsible for noticing the problem, flagging it, and coordinating the response.

If you notice that a metric has been declining for two review periods and nobody mentioned it, ownership is unclear or absent.
- **Overweighting acquisition metrics and underweighting retention and advocacy metrics** — ), and often tied to marketing spend that executives scrutinize. Retention and advocacy metrics are quieter and slower-moving. But in most business models, a 5% improvement in retention has a larger impact on revenue than a 5% improvement in acquisition. The diagnostic sign is that your Awareness and Purchase stages have three or four well-tracked metrics while your Retention and Advocacy stages have one metric each or none.

Rebalance by ensuring equal rigor across all five stages.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/five-stage-customer-journey-framework/METHOD.md) — Five-Stage Customer Journey Framework

## Related Skills

- [Identifying Pain Points and Drop-Off Moments in the Journey](../identifying-pain-points-and-drop-off-moments/SKILL.md)
- [Building Visual Customer Journey Maps](../building-customer-journey-maps/SKILL.md)
- [Mapping Customer Touchpoints Across Journey Stages](../mapping-customer-touchpoints-across-stages/SKILL.md)
- [Aligning Content and Channels to Each Journey Stage](../aligning-content-and-channels-to-journey-stages/SKILL.md)
- [Activating Customer Advocacy and Referral Programs](../activating-customer-advocacy-and-referrals/SKILL.md)
- [Adapting the Five-Stage Journey Framework for B2B Contexts](../adapting-journey-frameworks-for-b2b-contexts/SKILL.md)
- [Designing Retention and Loyalty Strategies Post-Purchase](../designing-retention-and-loyalty-strategies/SKILL.md)
