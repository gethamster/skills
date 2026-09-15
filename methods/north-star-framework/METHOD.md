# North Star Framework: How Every Product Manager Aligns Teams Around One Metric

> Created by **Sean Ellis** — [https://www.seanellis.me/](https://www.seanellis.me/)

## Overview

The North Star Framework was developed by Sean Ellis, the growth marketer who coined the term "growth hacking" and led early growth at Dropbox and LogMeIn. Ellis observed that the highest-performing product teams shared a common trait: they rallied around a single metric that captured the moment customers received genuine value. He formalized this observation into the North Star Framework, first popularizing it through GrowthHackers.com and later co-authoring the definitive guide with the Amplitude product analytics team. The framework emerged from a practical frustration—teams were drowning in dashboards full of metrics that pulled people in conflicting directions, and leadership needed a shared language for what "winning" actually meant.

The problem the North Star Framework solves is deceptively simple but devastatingly common: misalignment. Engineering optimizes for shipping velocity. Marketing optimizes for signups. Sales optimizes for closed deals. Finance optimizes for revenue. Without a unifying metric, each function can hit its targets while the product stagnates or even declines. The North Star Metric acts as a single source of truth—a leading indicator that, when it grows, reliably predicts long-term business success because it measures real customer value delivered. For Airbnb, that metric is nights booked. For Spotify, it's time spent listening. For Slack, it's messages sent within organizations. Each metric captures the atomic unit of value the product delivers.

The framework is more than just picking a metric, though. A product manager using the North Star Framework also identifies 3–5 input metrics—the levers the team can directly influence to move the North Star. These inputs create a causal model of the business. If your North Star is weekly active subscribers, your inputs might be new signups, activation rate, content engagement depth, and churn rate. The product manager's job becomes orchestrating work across these inputs, making trade-off decisions visible, and ensuring every team understands how their work connects to the metric that matters most.

The North Star Framework has become a staple in product management because it scales across company sizes—from a five-person startup trying to find product-market fit to a thousand-person enterprise trying to prevent organizational drift. It's especially powerful for any product manager navigating the tension between short-term revenue pressure and long-term product health, because a well-chosen North Star Metric inherently balances customer value with business outcomes.

## Core Principles

### One Metric That Captures Customer Value

The North Star Metric must reflect the core value customers derive from your product, not an internal business outcome like revenue. Revenue is a lagging indicator that tells you what already happened; a value-based metric like 'weekly meals delivered' or 'projects completed' tells you whether customers are actually getting what they came for. When this metric grows, revenue follows—but the reverse is not always true, which is why leading with customer value prevents the trap of extracting short-term revenue at the expense of product health.

### Input Metrics Create a Causal Model

The North Star Metric alone is too high-level for daily decision-making, so the framework requires identifying 3–5 input metrics that act as controllable levers. These inputs should have a demonstrable causal relationship to the North Star—if you improve activation rate, you should be able to predict the impact on your NSM. This causal structure is what transforms the framework from a motivational slogan into an operational system, giving each team a specific input they own and can move.

### Alignment Over Optimization

The primary benefit of the framework is not the metric itself but the alignment it creates across functions. When a product manager can point to a shared North Star and say 'this is what we're collectively trying to grow,' it changes how trade-off conversations happen. Engineering, design, marketing, and data science begin evaluating their work against the same outcome, reducing the political friction that arises when each team optimizes for its own KPIs in isolation.

### The Metric Must Be Measurable and Actionable

A North Star Metric that your team cannot reliably measure or influence is worse than having no framework at all—it breeds cynicism. The metric needs to be something you can track at least weekly (ideally daily), and your team must believe their work can move it. Abstract metrics like 'customer happiness' fail this test because they're hard to measure consistently and even harder to connect to specific product decisions.

### Leading Indicators Over Lagging Indicators

The North Star Metric should be a leading indicator of business success, not a lagging one. Revenue, profit margin, and NPS scores are lagging—they tell you about decisions made weeks or months ago. A good NSM like 'weekly active teams creating documents' tells you right now whether you're delivering value, giving you time to course-correct before the business impact shows up in financial reports. This forward-looking quality is what makes the framework a strategic tool rather than just a reporting mechanism.

### The Metric Evolves With the Business

A North Star Metric is not permanent. As your product matures, your market shifts, or your strategy pivots, the metric should evolve too. Early-stage products might focus on activation-oriented NSMs while mature products shift to engagement or expansion metrics. The danger is changing the metric too frequently (which destroys alignment) or never changing it (which leads to optimizing for an outdated view of value). Most teams revisit their NSM annually or at major strategic inflection points.

## Steps

1. **Step 1: Articulate Your Product's Core Value Proposition**
   Before choosing any metric, the product manager must clearly articulate what value customers receive from the product. This is not your tagline or marketing positioning—it's the fundamental reason customers keep coming back. Interview 10–15 of your most engaged users and ask them what they would miss most if your product disappeared. Look for patterns in their answers. The most common mistake at this step is confusing what your product does (features) with what value it delivers (outcomes). A project management tool's features include task creation and Gantt charts, but the value it delivers is 'projects completed on time.' Get to the outcome, not the mechanism.

2. **Step 2: Identify Your North Star Metric Candidates**
   Generate 3–5 candidate metrics that could serve as your North Star by asking: which metric, when it increases, most reliably indicates that more customers are getting more value from our product? Common archetypes include attention metrics (time spent), transaction metrics (actions completed), and productivity metrics (tasks accomplished). Test each candidate against four criteria: Does it measure customer value delivered? Can we measure it reliably? Can our team influence it? Does growth in this metric lead to growth in revenue over time? A strong candidate passes all four. Be wary of vanity metrics like total registered users or page views—they can grow while the product deteriorates.

3. **Step 3: Select and Validate Your North Star Metric**
   Narrow your candidates to one metric through a combination of data analysis and stakeholder alignment. Run a historical correlation analysis: does past growth in this metric correlate with subsequent revenue growth, retention improvement, and customer satisfaction? Present the top 2–3 candidates to your leadership team with the data, and drive consensus on one. The validation step is critical—if you skip it, you risk choosing a metric that leadership doesn't believe in, which will undermine the entire framework. Document the rationale for your choice so new team members understand why this metric was selected over alternatives.

4. **Step 4: Map the Input Metrics That Drive Your North Star**
   Decompose your North Star Metric into 3–5 input metrics that represent the controllable levers your team can pull. Think of this as building a simple equation: NSM = f(Input 1, Input 2, Input 3, ...). For example, if your NSM is 'weekly active subscribers watching content,' your inputs might be new subscriber activations, content catalog freshness, recommendation accuracy, and stream completion rate. Each input should be ownable by a specific team or squad. The most common failure here is choosing too many inputs (which dilutes focus) or choosing inputs that are correlated with each other rather than independently contributing to the NSM.

5. **Step 5: Assign Input Ownership and Set Targets**
   Assign each input metric to a specific team or individual who has the authority and capability to move it. The product manager coordinates this assignment, ensuring there are no gaps and no overlaps. For each input, set a current baseline, a 90-day target, and a stretch goal. Be explicit about the expected relationship: 'If we improve activation rate from 32% to 40%, we expect our NSM to increase by approximately X based on our model.' This makes the framework testable—if you improve the input and the NSM doesn't move, either your input mapping is wrong or there's an external factor you haven't accounted for.

6. **Step 6: Build Dashboards and Reporting Cadences**
   Create a shared dashboard that displays the North Star Metric and all input metrics with trend lines, targets, and current values. This dashboard should be visible to the entire company, not just the product team. Establish a weekly review cadence where the product manager walks through each input's progress, highlights anomalies, and surfaces trade-off decisions. The dashboard is not a vanity display—it's the operating system for your prioritization conversations. If a team proposes a new initiative, the first question should be 'which input does this move, and by how much?'

7. **Step 7: Use the Framework for Prioritization and Trade-offs**
   With your NSM and inputs established, every product decision should be evaluated through this lens. When comparing two feature proposals, estimate their expected impact on the relevant input metrics and, by extension, the North Star. This doesn't mean you only work on things that directly move an input—some work is infrastructure, some is debt reduction, some is compliance. But the framework makes the cost of non-NSM work visible: 'We're choosing to invest in this compliance project, which means we're accepting slower growth in Input 2 this quarter.' Transparency about trade-offs is the framework's greatest practical benefit.

8. **Step 8: Review, Learn, and Iterate**
   Conduct a quarterly North Star review where the product manager presents: Did the NSM move as expected? Did the inputs move? Where did our causal model break down? Are there new inputs we should add or existing ones we should retire? This review is also the appropriate time to ask whether the North Star Metric itself still captures your product's core value, especially if you've launched new product lines, entered new markets, or observed shifts in customer behavior. Treat the framework as a living system, not a set-it-and-forget-it exercise.

## When to Use

- When your product team has grown past 10 people and different functions are optimizing for conflicting metrics—engineering ships features, marketing drives signups, and no one agrees on whether the product is actually getting better for customers.
- When your company has achieved initial product-market fit and you need to shift from chaotic experimentation to disciplined, scalable growth. The North Star Framework provides the operational structure to focus experimentation on what matters without killing the growth mindset.
- When your product manager is struggling to prioritize a backlog of 30+ feature requests because there's no shared language for evaluating impact. The NSM and its input metrics give you a quantitative basis for saying 'this initiative moves our North Star more than that one.'
- When leadership keeps asking 'are we winning?' and every team gives a different answer based on their own dashboards. A single North Star Metric with transparent input metrics creates one shared answer and one shared reality.
- When you're preparing for a board meeting or annual planning cycle and need a concise way to communicate product strategy and progress. The North Star and its inputs compress your product narrative into a model that non-product stakeholders can understand and hold you accountable to.

## When Not to Use

- When you're a pre-product-market-fit startup still searching for what value you actually deliver. Choosing a North Star Metric before you understand your core value proposition will lock you into optimizing for the wrong thing. Focus on discovery and qualitative learning first, and adopt the framework once you have confidence in your value hypothesis.
- When your product serves fundamentally different user segments with incompatible definitions of value—for example, a marketplace where buyer value and seller value are measured in completely different units. In these cases, a single NSM can obscure important segment-level dynamics. Consider separate North Stars per segment or a composite metric approach.
- When your organization's leadership is not willing to commit to a single metric and will continue demanding that every team hit their own siloed KPIs regardless. Without executive buy-in, the North Star becomes another metric on the dashboard rather than the unifying force it's designed to be—and the product manager ends up fighting political battles instead of building products.
- When your product is in sunset or maintenance mode with no active investment in growth. The framework is designed to focus growth efforts; if there's no growth investment, it adds process overhead without corresponding benefit.
- When your team lacks the analytics infrastructure to reliably measure the North Star and its inputs at least weekly. Adopting the framework without trustworthy data leads to debates about measurement accuracy rather than strategic decisions, and can erode team trust in data-driven approaches entirely.

## Skills

This method includes the following skills:

- [Identifying Your Product's North Star Metric](../../skills/identifying-your-north-star-metric/SKILL.md) — How to discover and define the single metric that best captures the core value your product delivers to customers.
- [Mapping Input Metrics That Drive Your North Star](../../skills/mapping-input-metrics-to-north-star/SKILL.md) — How to identify, define, and connect the 3-5 key input metrics that directly influence your North Star Metric.
- [Building Dashboards to Track Your North Star and Inputs](../../skills/building-north-star-metric-dashboards/SKILL.md) — How to set up real-time dashboards and reporting structures that visualize your North Star Metric and its supporting input metrics.
- [Running a North Star Framework Workshop with Stakeholders](../../skills/running-north-star-workshops/SKILL.md) — A step-by-step guide to facilitating a collaborative workshop where teams define or refine their North Star Metric and input metrics.
- [Using the North Star Metric to Prioritize Your Product Roadmap](../../skills/using-north-star-for-roadmap-prioritization/SKILL.md) — How to evaluate and rank roadmap initiatives based on their expected impact on the North Star Metric and its input metrics.
- [Iterating and Evolving Your North Star Metric Over Time](../../skills/iterating-and-evolving-north-star-metric/SKILL.md) — When and how to revisit, validate, or change your North Star Metric as your product matures and strategy shifts.
- [Aligning Cross-Functional Teams Around a North Star Metric](../../skills/aligning-teams-around-north-star-metric/SKILL.md) — Techniques for communicating, cascading, and embedding the North Star Metric across product, engineering, marketing, and leadership teams.

## FAQ

**What's the difference between a North Star Metric and a KPI for a product manager?**

A KPI (Key Performance Indicator) is any metric a team tracks to measure performance—you might have dozens of them. The North Star Metric is a specific type of KPI that serves as the single most important indicator of customer value delivered. All other KPIs should either be input metrics that drive the NSM or supporting metrics that provide context. The distinction matters because without a hierarchy, teams treat all KPIs as equally important, which leads to exactly the misalignment the framework is designed to solve.

**How does a product manager choose between revenue and a usage metric as the North Star?**

Almost always choose the usage or value metric over revenue. Revenue is a lagging indicator—it tells you what happened, not what's happening. A product manager who optimizes directly for revenue risks making decisions that extract short-term value (aggressive upsells, dark patterns) at the expense of long-term product health. The North Star Framework's core insight is that a metric capturing customer value delivered is a leading indicator of revenue. When customers get more value, they retain longer, expand more, and refer others. Revenue follows value, but value doesn't always follow revenue.

**Is the North Star Framework effective for small teams of 3-5 people?**

Yes, but the implementation is lighter. A small team doesn't need formal input metric ownership assignments or elaborate dashboard tooling—a whiteboard with the NSM and three inputs is sufficient. The real value for small teams is the forcing function of choosing one metric that captures customer value. Even a 3-person startup can waste cycles arguing about whether to optimize signups, engagement, or monetization. A shared North Star resolves that argument and keeps everyone rowing in the same direction during the chaotic early stages.

**How often should a product manager change the North Star Metric?**

The general guidance is to review the NSM quarterly and change it no more than once per year unless there's a major strategic pivot. Changing too frequently destroys the alignment and institutional knowledge the framework builds—teams need time to understand the metric, build intuition about what moves it, and see the results of their experiments. However, clinging to a metric that no longer reflects your strategy is equally harmful. Common triggers for a change include a major pivot in business model, entering a fundamentally new market, or reaching a maturity stage where the old metric has plateaued and a new growth vector needs attention.

**What are examples of good North Star Metrics for different product types?**

The best NSMs map to your product's value archetype. For attention-based products (media, social), time-based metrics work well—Spotify uses 'time spent listening,' Facebook used 'daily active users.' For transaction-based products (marketplaces, e-commerce), completed transaction metrics work—Airbnb uses 'nights booked,' eBay uses 'gross merchandise volume.' For productivity products (SaaS tools), output metrics are strongest—Slack uses 'messages sent within organizations,' a project management tool might use 'tasks completed.' The pattern is always the same: find the atomic unit of value your product delivers and measure how much of it is being delivered.

**How does a product manager handle it when improving one input metric hurts another?**

This tension is expected and is actually one of the framework's strengths—it makes trade-offs visible rather than hiding them. When improving activation rate (by simplifying onboarding) reduces engagement depth (by skipping educational steps), the product manager should quantify the net impact on the North Star. If the NSM goes up despite the engagement dip, the trade-off is worth it. If it goes down, you need a different approach. Document these trade-off decisions explicitly so the team builds institutional knowledge about how the inputs interact, and revisit your input model if you find persistent conflicts.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
