# FAQ: Building Planned Journey Funnel Visualizations

## How do I build a customer journey funnel when I don't have clean data for every stage?

Start with the data you do have and use proxies for the gaps. If you have purchase data and web analytics but no evaluation-stage tracking, define proxy signals such as 'visited 3+ product pages in a session' or 'spent more than 5 minutes on comparison content.' Label these proxies clearly in your funnel annotations so stakeholders know which numbers are measured directly and which are estimated. A funnel with honest caveats is far more useful than no funnel at all. You can refine the proxies as you instrument better tracking.

## How long should building a customer journey funnel visualization take from scratch?

Plan for 2-4 hours for the initial build if your stage definitions are already agreed upon and your data is accessible. The bulk of the time goes into data collection and validation, not the visual design. If you need to define stage boundaries from scratch and align stakeholders on the definitions, add a half-day workshop upfront. Subsequent quarterly refreshes should take about an hour since the template and data pipeline are already established.

## Should I build the customer journey funnel visualization before or after mapping touchpoints?

Build the macro funnel first with just the three stage-level tiers and transition rates. This gives you the "where" (which stage transition has the biggest drop-off) before you invest time in detailed touchpoint mapping. Then do touchpoint mapping specifically for the stage with the largest opportunity, and add that detail as a drill-down layer. This sequencing prevents you from spending weeks mapping every touchpoint across all stages when the actionable insight might concentrate in just one transition.

See the sibling skill [Optimizing Touchpoints at Each Journey Stage](https://tryhamster.com/skills/optimizing-touchpoints-per-stage) for the touchpoint-level work.

## What tool should I use to build the funnel visualization?

The tool matters far less than the data quality and visual clarity. For static presentations, Google Slides or PowerPoint with manually sized shapes works fine and requires no special software. For interactive dashboards, Looker Studio, Tableau, or Power BI can connect directly to your analytics data and auto-refresh. For Sankey-style flow diagrams, tools like Flourish or the Google Charts Sankey library produce clean outputs.

Choose based on your audience's consumption habits. If stakeholders review in meetings, static slides win. If teams self-serve data weekly, build a dashboard.

## How do I handle customer journey funnels when the journey is not linear?

Acknowledge the non-linearity explicitly in the visualization rather than hiding it. Add re-entry arrows on the sides of the funnel showing customers who loop back from evaluation to latent or from buying to evaluation. Label each re-entry flow with a volume and a brief reason. If your data shows that 25% of evaluation-stage entrants are returning from a previous visit more than 30 days ago, segment them separately because their conversion rates will differ from first-time entrants.

The Planned Journey Framework specifically models these loops, so your visualization should reflect that reality.

## Why does my customer journey funnel conversion rate keep changing quarter over quarter even though we haven't changed anything?

Funnel metrics are sensitive to external factors beyond your control: competitive launches, seasonality, macroeconomic shifts, and changes in media mix all affect stage entry volumes and conversion rates. Seasonal patterns are especially pronounced in high-involvement categories like home improvement (spring spike) or financial services (year-end). Before attributing quarter-over-quarter changes to internal factors, compare against the same quarter in the prior year to strip out seasonality. Also check whether your tracking implementation changed, since analytics updates, cookie consent changes, or tag manager modifications can silently alter how users are counted at each stage.

## How do I present the customer journey funnel to executives who only have five minutes?

Use a single slide with three elements: the proportional-width funnel showing the three stages and their conversion rates, one highlighted callout box on the biggest drop-off point with a one-sentence explanation of the cause, and a single what-if statement quantifying the revenue impact of fixing that drop-off. Speak for 90 seconds maximum on the slide. Lead with the punchline: 'We are losing X customers and $Y revenue at [specific point] because [specific cause]. Fixing it requires [specific action] and would recover [specific amount].' Put all supporting detail in backup slides.
