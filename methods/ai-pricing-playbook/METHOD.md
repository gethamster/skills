---
name: "ai-pricing-playbook"
category: "Marketing"
description: "AI product pricing models built on unit economics: pick a value metric, a charge metric, tiers and guardrails that keep AI margins safe as usage grows."
metadata:
  datePublished: "2026-05-19"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# AI Product Pricing Models: The AI Pricing Playbook

> Created by **Stripe** - [https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies)

## Overview

AI product pricing models have to answer a question that seat-based SaaS pricing could mostly ignore: what does it cost to serve this customer, and does the price move when that cost moves? Every prompt, generation or agent run consumes paid inference, and heavy users consume far more than light ones. The AI Pricing Playbook is a sequence for setting prices under that constraint. It starts from the cost to serve one unit of value, picks a unit the buyer understands, chooses a pricing shape, and wraps it in guardrails so neither side gets surprised.

The sequence follows Stripe's guide [Pricing AI products: lessons from leading AI companies](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies), which lays out five steps: determine your value metric, set your charge metric, pick your pricing model, set your guardrails, and iterate. Stripe drew the guide from interviews with AI companies and from its own survey, in which [56% of AI company leaders reported hybrid pricing and 38% purely usage-based pricing](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies). This page adds the cost side that the pricing steps depend on, drawn mainly from Andreessen Horowitz's analysis of AI business economics.

That cost side is the reason AI pricing is its own problem. Martin Casado and Matt Bornstein at Andreessen Horowitz found that AI companies often run [gross margins in the 50-60% range, against 60-80% or more for comparable SaaS businesses](https://a16z.com/the-new-business-of-ai-and-how-its-different-from-traditional-software/), largely because inference and cloud costs scale with use. Their advice was blunt: track down your real variable costs and do not let them hide in R&D. Newer data points the same way. Kyle Poyar's survey of 230 software and AI companies found a [median target AI margin of about 50%, with only 12% aiming for SaaS-like margins of 80% or more](https://www.growthunhinged.com/p/the-state-of-b2b-monetization-in-2026).

The cost base also moves quickly, which makes pricing a moving target. Guido Appenzeller at a16z estimated that the cost of an LLM of equivalent performance is [falling about 10x per year](https://a16z.com/llmflation-llm-inference-cost/). Epoch AI found declines that [range from 9x to 900x per year depending on the task](https://epoch.ai/data-insights/llm-inference-price-trends), and warned that the fastest drops are recent and may not last. A price tied tightly to today's token cost will be wrong within a year in one direction or the other. The playbook handles this by charging for a unit of customer value and tracking tokens internally, so falling costs show up as margin and rising usage per task shows up in the meter.

The market has converged on a few shapes. Stripe lists pay as you go, subscription with a usage allowance, subscription plus overage, credit burndown, and subscription with replenishing credits as the [common AI pricing models](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies). Outcome pricing sits at the far end: Intercom charges [$0.99 per Fin outcome](https://fin.ai/pricing), where a resolution means the customer asked for no further help after Fin's last answer. Public repricings show what happens when the shape is wrong. GitHub moved Copilot to usage-based credits because, in its words, [a quick chat question and a multi-hour autonomous coding session can cost the user the same amount](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/).

The playbook is for product, finance and go-to-market leads who own an AI feature's price. Its output is a written pricing specification: the fully loaded cost per value unit, the value metric and charge metric, the tier table with included usage and overage rates, the guardrails (rate limits, spend caps, alerts), the metering rules, and the margin floor every plan must clear at maximum use. Teams that keep this specification in Hamster can have agents check new features and tier changes against it. The eight skills below each produce one part of that specification.

## Core Principles

### Price From the Cost to Serve One Unit of Value

Every pricing decision depends on one number: the fully loaded cost to deliver one unit of value to one customer. That includes model input and output tokens, retrieval, retries, tool calls, logging and any human review, not only the headline model call. Andreessen Horowitz's advice to [measure real variable costs instead of letting them hide in R&D](https://a16z.com/the-new-business-of-ai-and-how-its-different-from-traditional-software/) applies directly. Without this number, a tier limit or overage rate is a guess about your own margin.

### Charge for a Value Metric, Track the Cost Metric Internally

Customers buy documents reviewed, tickets resolved or reports produced; they do not buy tokens. Stripe's guide separates the value metric (what the customer gets) from the charge metric (what the invoice counts), and notes that consumption charges such as per token track infrastructure cost closely while [workflow and outcome charges tie more closely to value](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies). Stripe also warns that [AI pricing models fail when the value metric stops tracking how customers experience value](https://stripe.com/resources/more/ai-pricing-models). Keep tokens and GPU time in your own dashboards and translate them into the customer's unit.

### Set a Margin Floor at Maximum Use, Not Average Use

Average margin hides the customers who lose you money. Test every plan against the heaviest use it allows and set a floor that no plan may cross. Bessemer's benchmarks show how wide the range is: its fastest-growing AI companies ran [about 25% gross margins, often negative, while steadier growers held about 60%](https://www.bvp.com/atlas/the-state-of-ai-2025). Pick your floor deliberately and write it down, because every later decision is checked against it.

### Treat Rate Limits and Caps as Part of the Price

Limits decide what a plan actually delivers, so they belong in the pricing specification, not only in infrastructure config. Stripe tells companies facing cost pressure to [add guardrails like rate limits or caps, or even consider repricing](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies). Anthropic added weekly limits to its consumer plans after some users ran Claude Code continuously, and estimated the change would affect [about 5% of subscribers](https://venturebeat.com/ai/anthropic-throttles-claude-rate-limits-devs-call-foul). A limit announced as a pricing decision is easier to defend than one discovered as an outage.

### Make the Bill Predictable for the Buyer

Usage pricing loses deals when a buyer cannot forecast the invoice. Stripe recommends [spending caps, alerts and credit-based systems that make consumption visible before it becomes a bill](https://stripe.com/resources/more/ai-saas-pricing-models). A base fee with included usage, a published overage rate and an opt-in cap turns a variable bill into one procurement can approve. Credits are spreading for the same reason: Poyar found [29% of companies already use AI credits and 33% plan to add them within a year](https://www.growthunhinged.com/p/the-state-of-b2b-monetization-in-2026).

### Plan for Falling Unit Costs

Model prices fall fast but unevenly, so anchor price to customer value and let lower costs flow to margin first. The a16z estimate of a [10x yearly decline for equivalent performance](https://a16z.com/llmflation-llm-inference-cost/) is an average across models; Epoch AI's task-by-task data shows the rate [varies widely and recent drops may not persist](https://epoch.ai/data-insights/llm-inference-price-trends). When you pass savings to customers, do it as a deliberate move, such as higher included usage or a cheaper tier, rather than a reactive cut. Usage per task can also rise as products become more agentic, which can offset cheaper tokens.

### Meter Before You Price

You cannot bill, cap or check margins on usage you do not record per customer. Stripe's billing model is built on [meters that aggregate customer usage events, each carrying a customer, a value and an optional idempotency key](https://docs.stripe.com/billing/subscriptions/usage-based/how-it-works). Decide before launch how failed requests, retries and cached responses count. Metering built after the price is announced tends to produce billing disputes.

## Steps

1. **Map the cost to serve**
   List every AI request type the product makes and measure input tokens, output tokens, model, retries and tool calls for each. Price them with the vendor's current per-million-token rates, keeping input and output separate, since [output tokens cost more than input on published rate cards](https://platform.claude.com/docs/en/about-claude/pricing). Add retrieval, orchestration, logging and human review, then roll it up to a cost per unit of customer value. Check the model against real invoices before you trust it. The output is a cost table per value unit, with its assumptions written next to it. The [inference unit economics skill](../../skills/calculating-ai-inference-unit-economics/SKILL.md) covers this in detail.

2. **Choose the value metric**
   Find the unit that grows as the customer gets more value. Stripe's definition is a useful test: [your metric is whatever unambiguously gives your customer more value as it increases](https://stripe.com/resources/more/ai-saas-pricing-models). Check that a buyer can estimate next month's volume, that more units mean more value, and that you can count it reliably. Avoid metrics that punish exploration, such as charging for every prompt in a drafting tool. Write down two or three candidates and the reason each passes or fails.

3. **Set the charge metric**
   Decide what the invoice actually counts. Stripe describes three families: [consumption, such as per token or API call; workflow, such as per completed task; and outcome, such as per successful result](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies). Consumption is easiest to meter and closest to cost; outcome is closest to value but needs a definition both sides accept, as Intercom's [published resolution definition for Fin](https://fin.ai/pricing) shows. Pick the most value-aligned charge you can measure and defend in a dispute.

4. **Model the usage distribution**
   Pull per-customer usage by month and look at the median, upper percentiles and the maximum, not the average. Usage in AI products is usually skewed, so a few accounts drive most of the cost. This is where you see whether a flat price is viable: Stripe warns specifically against [flat pricing with extreme usage variance](https://stripe.com/resources/more/ai-pricing-models). Mark natural breaks in the distribution, since those become tier boundaries. If you only have beta data, treat it as provisional, because beta users are rarely typical.

5. **Pick the pricing model and design the tiers**
   Choose among pay as you go, subscription with allowance, subscription plus overage, credit burndown and replenishing credits, the [shapes Stripe observed across AI companies](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies). For each tier, set the target customer, the included usage, the price, the overage rate and the limits. Check each tier against the margin floor at its maximum allowed use. Keep the number of billing dimensions small, because each added dimension makes the bill harder to predict.

6. **Set guardrails**
   Define rate limits, monthly caps, alerts and what happens at the cap: throttle, block, or bill overage with consent. Provider APIs show the mechanics, with limits measured across requests and tokens and [enforced by whichever limit is reached first](https://developers.openai.com/api/docs/guides/rate-limits). Give customers alerts before they hit a threshold; Stripe can [fire a webhook when a customer crosses a usage threshold](https://docs.stripe.com/billing/subscriptions/usage-based/alerts). Publish the rules on the pricing page so the limit reads as part of the plan.

7. **Build metering and billing**
   Instrument usage per customer and per feature, send it to your billing system, and reconcile it against provider invoices. Decide whether failed requests count, whether retries bill once, and whether customers benefit from cache hits. Check what your billing tool shows mid-cycle: Stripe's basic meters [reconcile usage at invoice time, while its Metronome engine tracks usage and credit burndown in real time](https://docs.stripe.com/billing/subscriptions/usage-based/how-it-works). Ship a usage dashboard that customers can see.

8. **Launch, measure and iterate**
   Launch to new customers first, then review conversion by tier, overage frequency, pricing-related support tickets and actual margin per tier. Stripe found the highest-growth AI companies were [nearly three times as likely to report frequent pricing adjustments](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies), usually as small, local changes. Move existing customers with notice and a transition period. Cursor's [apology and refunds after an unclear pricing change](https://cursor.com/blog/june-2025-pricing) show the cost of skipping that step.

## Pricing Shapes Compared

| Shape | Buyer predictability | Margin protection | Example |
|-------|---------------------|-------------------|---------|
| Per seat, AI included | High | Low when usage varies | [Stripe notes seat pricing fails once agentic workflows arrive](https://stripe.com/resources/more/pricing-models-for-ai-coding-companies) |
| Subscription plus overage | Medium | High | [Stripe's guide covers allowance and overage models](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies) |
| Credits | Medium to high | High | [GitHub Copilot's move to AI credits](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/) |
| Per outcome | Low to medium | Depends on cost per attempt | [Intercom Fin charges per outcome](https://fin.ai/pricing) |

## When to Use

- You are adding AI features to a seat-priced product and the heaviest AI users cost far more than they pay. The playbook gives you a way to price the AI part explicitly instead of letting light users subsidize heavy ones.
- You are launching an AI-native product and must choose between seat, usage, credit, outcome or hybrid pricing. The step sequence forces the cost and value questions before the price question.
- Your gross margin is falling as usage grows and you suspect the pricing, not only the model choice. The margin floor and usage distribution steps show which plans are underwater.
- Enterprise buyers object that they cannot forecast a usage bill. The guardrail step gives you caps, alerts, commits and credits that procurement can approve.
- Model prices have moved since you last priced and you need a rule for whether to keep the savings, pass them on, or raise included usage.

## When Not to Use

- AI is a minor feature whose cost is small next to your other cost of goods. Absorbing it into the existing price is simpler, and a usage meter would add friction without protecting much margin.
- Every deal is a bespoke enterprise contract negotiated by hand. The playbook's tier design assumes many customers on shared plans; with a handful of large contracts, use the cost model for deal desk review and skip the tiers.
- The product is a thin resale of a third-party model with no added value. Price is set by the vendor's rate card and competitor markups, and the playbook's value-metric work has little room to act.
- Your board has knowingly chosen to subsidize usage to win a market. The playbook still helps you measure the subsidy, but its margin floor will conflict with that decision until the strategy changes.

## Skills

This method includes the following skills:

- [Calculating AI Inference Unit Economics](../../skills/calculating-ai-inference-unit-economics/SKILL.md): Measure the fully loaded cost per request and per unit of customer value.
- [Choosing Between AI Pricing Models](../../skills/choosing-ai-pricing-models/SKILL.md): Score seat, usage, credit, outcome and hybrid models against your cost and buyer profile.
- [Designing Usage-Based Pricing Tiers](../../skills/designing-usage-based-pricing-tiers/SKILL.md): Set tier boundaries, included usage and overage from the usage distribution.
- [Modeling Token Cost Pass-Through](../../skills/modeling-token-cost-pass-through/SKILL.md): Turn token costs into prices with a markup and test them against price changes.
- [Managing Gross Margins on AI Features](../../skills/managing-gross-margins-on-ai-features/SKILL.md): Monitor margin per feature and customer and act before it breaches the floor.
- [Setting Rate Limits and Overage Pricing](../../skills/setting-rate-limits-and-overage-pricing/SKILL.md): Define caps, throttling and overage rules that protect margin and stay predictable.
- [Benchmarking AI Product Pricing](../../skills/benchmarking-ai-product-pricing/SKILL.md): Normalize competitor prices to your value unit and choose a position.
- [Migrating From Flat to Usage-Based Pricing](../../skills/migrating-from-flat-to-usage-based-pricing/SKILL.md): Move existing customers to hybrid or usage pricing with notice and low churn.

## FAQ

**What are the main AI product pricing models?**

The common shapes are per seat with AI included, pure usage, subscription with included usage and overage, credits, and per outcome. Stripe's survey found [56% of AI company leaders on hybrid pricing and 38% on purely usage-based pricing](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies). Hybrids are popular because they give the buyer a predictable base and the seller protection on heavy use. The right choice depends on how variable your cost per customer is and how your buyers purchase.

**How do I calculate unit economics for an AI feature?**

Measure input and output tokens per request type and price them with the vendor's current rate card, keeping input and output separate. Add retrieval, retries, tool calls, logging and review, then divide by the number of customer-facing value units those requests produce. Check the result against your actual provider invoices, because estimates usually miss retries and long prompts. Compare the cost per unit with the price per unit to get unit margin.

**Should AI features be priced separately or bundled?**

Bundle when the AI cost per customer is small and fairly even, because a separate meter adds friction for little protection. Price separately, as an add-on, a usage component or a higher tier, when cost varies widely between customers. Stripe warns against [flat pricing with extreme usage variance](https://stripe.com/resources/more/ai-pricing-models), which is the case where bundling breaks. A common middle path bundles basic AI and meters premium models or agent runs.

**How is AI pricing different from traditional SaaS pricing?**

SaaS pricing assumed the next user cost almost nothing to serve, so price followed value and competition. AI features carry a real variable cost per use, which is why a16z found AI gross margins [often in the 50-60% range against 60-80% or more for SaaS](https://a16z.com/the-new-business-of-ai-and-how-its-different-from-traditional-software/). Pricing now has to respect cost as well as value. Unlimited use at a flat fee, the default in SaaS, becomes the riskiest option.

**How should pricing handle falling model costs?**

Price against customer value, and let lower costs raise margin until you choose to share them. The rate of decline is fast but uneven: a16z estimates [about 10x per year for equivalent performance](https://a16z.com/llmflation-llm-inference-cost/), while Epoch AI's task-level data shows much wider variation. When you pass savings on, do it as a planned move such as more included usage. Re-run the cost model whenever you change models, because token counts can shift too.

**How often should AI pricing change?**

More often than SaaS pricing did, in small steps. Poyar found [three in four software companies changed pricing or packaging within the last year](https://www.growthunhinged.com/p/the-state-of-b2b-monetization-in-2026). Review margin per tier and usage distribution on a fixed schedule, and treat big model or feature changes as triggers for an extra review. Give existing customers notice before any change reaches their bill.

**Does this work for an early-stage startup?**

Yes, with less machinery. A startup can build the cost table in a spreadsheet, pick one value metric, launch two or three bounded tiers and use its billing provider's meters and alerts. The main thing to avoid is unlimited AI on a cheap plan, which is hard to take back later. Starting with generous but bounded limits keeps the later conversation about raising limits rather than removing them.

## Sources

- [Stripe: Pricing AI products, lessons from leading AI companies](https://stripe.com/guides/pricing-ai-products-lessons-from-leading-ai-companies)
- [Stripe: AI pricing models](https://stripe.com/resources/more/ai-pricing-models)
- [Stripe: A guide to AI SaaS pricing frameworks](https://stripe.com/resources/more/ai-saas-pricing-models)
- [Stripe: Pricing models for AI coding tools](https://stripe.com/resources/more/pricing-models-for-ai-coding-companies)
- [a16z: The New Business of AI](https://a16z.com/the-new-business-of-ai-and-how-its-different-from-traditional-software/)
- [a16z: Welcome to LLMflation](https://a16z.com/llmflation-llm-inference-cost/)
- [Epoch AI: LLM inference price trends](https://epoch.ai/data-insights/llm-inference-price-trends)
- [Kyle Poyar: 2026 State of B2B SaaS and AI Monetization](https://www.growthunhinged.com/p/the-state-of-b2b-monetization-in-2026)
- [Bessemer: The State of AI 2025](https://www.bvp.com/atlas/the-state-of-ai-2025)
- [Intercom Fin pricing](https://fin.ai/pricing)
- [GitHub: Copilot is moving to usage-based billing](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
- [Cursor: Clarifying our pricing](https://cursor.com/blog/june-2025-pricing)
- [VentureBeat: Anthropic throttles Claude rate limits](https://venturebeat.com/ai/anthropic-throttles-claude-rate-limits-devs-call-foul)
- [OpenAI API docs: Rate limits](https://developers.openai.com/api/docs/guides/rate-limits)
- [Claude API docs: Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- [Stripe docs: How usage-based billing works](https://docs.stripe.com/billing/subscriptions/usage-based/how-it-works)
- [Stripe docs: Usage-based alerts](https://docs.stripe.com/billing/subscriptions/usage-based/alerts)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
