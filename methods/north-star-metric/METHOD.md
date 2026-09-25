---
name: "north-star-metric"
category: "Product"
description: "A North Star Metric is the one number that captures the value customers get. Learn to choose it, split it into inputs, and run the business on it."
metadata:
  datePublished: "2026-04-19"
  dateModified: "2026-09-24"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# North Star Metric: How to Choose, Decompose, and Run It

> Created by **Sean Ellis (coined the term)** - [https://www.seanellis.me/](https://www.seanellis.me/)

## Overview

A North Star Metric is the single measure a company uses to track whether customers are getting the value its product promises. The definition most often quoted is Sean Ellis's: "the single metric that best captures the core value that your product delivers to customers," as reproduced in [Stream's explainer](https://getstream.io/blog/north-star-metric/), which credits Ellis, founder of GrowthHackers, with coining the term. In a [2018 Intercom interview](https://www.intercom.com/blog/podcasts/sean-ellis-growth/), Ellis put it more simply: the North Star Metric "is really trying to quantify that value over time." This page is about the metric itself: how to choose it, how to break it into inputs teams can move, and how to operate it week to week.

Ellis is a growth practitioner. His [own site](https://www.seanellis.me/) describes him as the first marketer at Dropbox and says he coined "growth hacking" while leading early growth at LogMeIn. He later co-wrote [Hacking Growth](https://www.penguinrandomhouse.com/books/545936/hacking-growth-by-sean-ellis-founder-of-growthhackerscom-and-morgan-brown/) with Morgan Brown, a book about cross-functional growth teams running rapid tests. In the Intercom interview he illustrates the idea with LogMeIn, where the North Star was growing remote control sessions and the team found that [95% of new signups](https://www.intercom.com/blog/podcasts/sean-ellis-growth/) never had a single one. Signups alone hid that gap. Ellis says the business took off only after engineering, product and marketing pulled together on the signup-to-usage rate.

The best-known examples are short. Ellis cites Airbnb's nights booked and Facebook's daily active users in the [same interview](https://www.intercom.com/blog/podcasts/sean-ellis-growth/). The two sources differ on that second example: Amplitude's checklist treats a bare daily-active-user count as a weak choice for most products, because it says nothing about what customers value ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). A DAU-style metric holds up only where being active is itself the value, so test it against the checklist before adopting it. Nights booked works because it rises only when a guest and a host both get something out of the product. Signups or app installs can rise while nobody books a stay, so they make a weaker North Star. Ellis also separates the North Star from the "one metric that matters" right now: he calls the North Star "a persistent overall success metric," while the one metric that matters is whatever most needs improving right now in order to drive it.

Amplitude's [North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf), co-authored by John Cutler, turns the metric into an operating model. It defines the metric by three qualities: it represents the value users get, it sits within product and marketing's sphere of influence, and it is a leading indicator of revenue. The playbook pairs the metric with a small set of inputs, the factors teams can move with their daily work, and it states the rule that sets the structure: "If you can move your North Star directly, it's probably not a good North Star." Teams work on inputs, and the North Star shows whether that work added up.

Practitioners have since measured how companies apply it. Lenny Rachitsky surveyed people at [over 40 growth-stage companies](https://future.com/north-star-metrics/) for a16z and sorted their North Stars into six categories, from revenue to user experience. He found that revenue was common but warned that it is spiky and hard to make operational, and that about a quarter of the companies had recently changed their North Star or were about to. His summary on [Lenny's Newsletter](https://www.lennysnewsletter.com/p/choosing-your-north-star-metric) is that the North Star Metric is your strategy and your strategy is your North Star Metric.

The method on this page covers the full life of the metric. You identify the moment customers get value, pick the metric that counts it, decompose it into input metrics with owners, put it on a dashboard with a review cadence, tie roadmap decisions to it, check it against what customers actually say, and change it when the strategy changes. The metric is only useful if it keeps being used, so the operating steps carry as much weight as the choice.

A separate page covers the [North Star Framework](https://tryhamster.com/methods/north-star-framework) as a whole, including the workshop format and the product-led organizational model around it. Read that page for how to run the framework as an organizational program. This page stays with the metric: the choice, the decomposition, and the weekly operation.

## Core Principles

### Measure Delivered Value

The metric should rise only when customers get what they came for. Amplitude's checklist opens with "Does it express customer value?" and names daily active users and registered users as weak choices because they say nothing about what customers value ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). A count of completed value moments, such as nights booked or remote control sessions, is harder to inflate. If the metric can go up while customers are unhappy, it measures activity rather than value.

### Lead Revenue Instead of Reporting It

A North Star should move before the business result does. The playbook calls monthly recurring revenue and average revenue per user lagging indicators and recommends finding the customer behavior that correlates with renewal instead ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). Rachitsky adds that revenue is spiky: at Airbnb it moved with exchange rates, length of stay, and host pricing, so teams tracked nights booked, one level removed ([Choosing Your North Star Metric](https://future.com/north-star-metrics/)). Revenue still matters, and the North Star is the earlier signal of it.

### Work on Inputs

The North Star is an outcome, and inputs are the variables teams control. The playbook describes the metric as a dependent variable whose value depends on the inputs and advises never trying to move the North Star directly ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). Amazon draws the same line between controllable input metrics and output metrics in its weekly business review ([Commoncog](https://commoncog.com/the-amazon-weekly-business-review/)). A team that argues about the North Star in a sprint review has skipped a level.

### One Metric per Product and Customer Base

Keep one North Star unless you really run separate businesses. The playbook recommends a single metric per product when the team shares one profit and loss statement and one customer base, and lists "insisting you need more than one" among the common traps ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). Rachitsky found that companies with more than one usually add a quality metric or run distinct products with different goals ([Choosing Your North Star Metric](https://future.com/north-star-metrics/)). Two competing North Stars bring back the argument the metric was meant to settle.

### Define It Precisely

A name gets the metric remembered, and a definition gets it measured the same way every week. The playbook's template is "Our North Star Metric is called X, which we define as Y," and its example counts subscribers who share an average of two or more articles a week over the previous twelve weeks ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). The definition fixes the unit, the threshold, and the time window. Without them, two dashboards will show two different numbers under the same name.

### Treat It as a Hypothesis

The first version of the metric is a guess about what drives growth. Cutler says in the playbook that a first pass at the North Star "is literally a hypothesis about the levers of growth," and that "powerful ideas imperfectly measured are better than perfect measures for less powerful ideas" ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). Check the hypothesis against history, against customer research, and against what happens when inputs move. Keep it, refine it, or replace it based on that evidence.

### Change It When the Strategy Changes

Ellis says the metric should remain consistent over the long term ([StartUs interview](https://magazine.startus.cc/sean-ellis-on-the-backbone-of-successful-growth-teams-the-north-star-metric/)), and companies still change it when their strategy shifts. Amplitude says it changes its own North Star whenever the company makes a significant shift in strategy, and moved to a collaboration metric when it focused on usage within teams ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). Change it rarely and deliberately, and treat each change as a strategy decision.

## Steps

1. **Find the value moment**
   Write down the moments where a customer's time, attention or money is rewarded, which the playbook calls key value exchanges and says most products can narrow to a handful ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). Include moments that happen outside the product, such as a package arriving intact. Decide which game the product plays: attention, transaction or productivity. The output is a short list of value moments and one sentence on the game, which the candidate metrics must reflect.

2. **Generate and screen candidates**
   List candidate metrics that count those value moments, then ask Rachitsky's question: which metric, if it increased today, would most accelerate the business's flywheel ([Choosing Your North Star Metric](https://future.com/north-star-metrics/))? Screen each candidate against the playbook's seven-item checklist, including "understandable to non-technical partners" and "not a vanity metric." Drop candidates that fail on value or on leading revenue. Keep two or three finalists for testing.

3. **Test finalists and define the winner**
   Pull historical data for each finalist and check whether movements preceded changes in retention or revenue. Ask the playbook's converging questions: what the metric will not tell you, how seasonality affects it, and what signal would tell you to revisit it. Pick the finalist with the strongest link to value and write its name and precise definition. Publish the definition with the query or event logic behind it.

4. **Decompose it into input metrics**
   Write the North Star as a function of a few inputs, using the playbook's template: "I believe that [North Star] is a function of [X, Y, and Z]" ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). Airbnb's inputs for nights booked included guest conversion, the number of homes, and visitors to the site ([Choosing Your North Star Metric](https://future.com/north-star-metrics/)). Test each input with the playbook's Greenfield test and roadmap check. The output is an input map with a name, a definition and an owner for every input; the skill on [north star input metrics mapping](../../skills/identifying-input-metrics/SKILL.md) walks through it.

5. **Put it on a dashboard with a cadence**
   Build one view that shows the North Star beside its inputs and a short trend history. Review each input weekly with the team that owns it, and review the North Star with leadership. Amplitude reports its North Star weekly within product and leadership teams and shares progress quarterly at company All Hands ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). Make metric owners explain unusual movements, the way Amazon's weekly review is run ([Commoncog](https://commoncog.com/the-amazon-weekly-business-review/)).

6. **Tie the roadmap to the inputs**
   For each roadmap item, name the input it should move and the expected size of the effect. The playbook recommends weighing both the input's influence on the North Star and the chance that the work moves the input, and following up on completed items to see if they had the expected effect ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). Items that link to no input need a reason to stay. The output is a roadmap where every item points at an input, built the way the [North Star metric roadmap](../../skills/connecting-north-star-to-product-roadmap/SKILL.md) skill describes.

7. **Check the metric against customers**
   Numbers show what customers do, and research shows whether that behavior is the value they care about. Interview customers and ask what they would miss, then compare their words with the metric's definition. The playbook's delivery example shows the payoff: research showed customers valued deliveries with no issues, and "Happy Deliveries" became the North Star ([North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)). Record where the metric and customer language disagree.

8. **Revisit it when the business changes**
   Set explicit triggers for a review: a new business model, a move upmarket, a new product line, or a North Star that stops predicting revenue. Ted Clark of Amplitude puts the last trigger plainly in the playbook: if the North Star is not directionally indicating where revenue is going, it is time to revise it. When you change it, rebuild the inputs and the dashboard and announce the change with the reasons. Keep the old metric on the dashboard long enough to compare.

## North Star Metric Types

Rachitsky's survey for a16z grouped the North Stars of growth-stage companies into six types. The shares add up to more than 100%, because some companies use more than one. Each row cites [Choosing Your North Star Metric](https://future.com/north-star-metrics/).

| Type | What it counts | Share of companies surveyed |
|---|---|---|
| Revenue | Money generated, such as ARR or GMV | ~50% ([Rachitsky](https://future.com/north-star-metrics/)) |
| Customer growth | Users who are paying | ~35% ([Rachitsky](https://future.com/north-star-metrics/)) |
| Consumption growth | Intensity of use, such as nights booked | ~30% ([Rachitsky](https://future.com/north-star-metrics/)) |
| Engagement growth | Users who are active, such as MAU or DAU | ~30% ([Rachitsky](https://future.com/north-star-metrics/)) |
| Growth efficiency | Spend versus return, such as LTV/CAC | ~10% ([Rachitsky](https://future.com/north-star-metrics/)) |
| User experience | How enjoyable the product is, such as NPS | ~10% ([Rachitsky](https://future.com/north-star-metrics/)) |

The categories line up with business models in the same article. Marketplaces tend to use consumption, performance-marketing businesses use growth efficiency, and freemium team products use engagement or paid customers, such as Slack's Number of Paid Teams.

## When to Use

- Several teams ship into one product and argue about priorities because each reports a different success metric. A shared North Star with inputs gives them one outcome and separate levers.
- The company has early product-market fit and needs to move from "does anyone want this" to "how do we grow the value people get." Before product-market fit, Rachitsky recommends focusing on cohort retention instead.
- Leadership reviews revenue and pipeline but has no early signal of whether customers are getting value. A leading metric can show a problem before it reaches revenue.
- The roadmap is full of features that nobody can connect to an outcome. Mapping each item to an input shows which work has a theory of impact.
- The strategy has just changed, such as a move from individual users to teams or from self-serve to sales. The existing metric probably measures the old strategy and needs a deliberate review.

## When Not to Use

- The product is still searching for product-market fit and its value proposition changes monthly. Measure retention by cohort and talk to users instead of fixing a metric that will be outdated soon.
- The company runs unrelated products with separate customers and separate profit and loss statements. Give each product its own North Star rather than forcing one number across all of them.
- Basic instrumentation is missing and nobody can count the value moment even roughly. Instrument the core event first, or the metric will be a slide with no data behind it.
- The team wants a single number to judge individual performance or set bonuses. Hard targets on one number invite gaming, as Amazon found when a detail-page target led teams to add low-demand items that raised inventory costs without raising sales ([Commoncog case](https://commoncog.com/c/cases/amazon-incentives-category-expansion/)).

## Skills

This method includes the following skills:

- [Selecting Your North Star Metric](../../skills/selecting-your-north-star-metric/SKILL.md): Choose the one metric that counts the value customers get and define it precisely.
- [Identifying and Mapping North Star Input Metrics](../../skills/identifying-input-metrics/SKILL.md): Break the North Star into input metrics that teams can own and move.
- [Building a North Star Metric Dashboard](../../skills/building-north-star-dashboards/SKILL.md): Show the North Star and its inputs in one view and review them on a set cadence.
- [Connecting Your North Star Metric to the Product Roadmap](../../skills/connecting-north-star-to-product-roadmap/SKILL.md): Tie every roadmap item to an input and prioritize by expected impact.
- [Aligning Cross-Functional Teams Around a North Star](../../skills/aligning-cross-functional-teams-around-north-star/SKILL.md): Give every function an input to own and a place in the review rhythm.
- [Validating Your North Star Metric with User Research](../../skills/validating-north-star-with-user-research/SKILL.md): Check that the metric matches the value customers describe.
- [Evolving Your North Star Metric Across Growth Stages](../../skills/evolving-north-star-across-growth-stages/SKILL.md): Decide when to change the metric and how to move the organization to a new one.

## FAQ

**What is a North Star Metric?**

It is the one metric a company uses to track the value customers get from its product, chosen so that it also predicts long-term revenue. Sean Ellis's definition calls it the metric that best captures the core value a product delivers to customers ([Stream](https://getstream.io/blog/north-star-metric/)). Examples Ellis gives include Airbnb's nights booked and Facebook's daily active users, though a bare DAU count is a weak choice for most products. A good one is paired with a few input metrics that teams can move directly.

**How is a North Star Metric different from a KPI?**

A KPI is any metric a team tracks to judge performance, and most companies track many. The North Star is the single metric the whole company agrees best reflects delivered value, and the other KPIs either feed it as inputs or monitor health around it. Ellis also separates it from the "one metric that matters," which is a short-term focus used to move the North Star ([Intercom](https://www.intercom.com/blog/podcasts/sean-ellis-growth/)).

**What is the difference between the North Star Metric and the North Star Framework?**

The metric is the number and its inputs. The framework, as Amplitude's playbook describes it, is the wider product management model around the metric, including the workshops, the checklist, and how the metric connects to the organization's work. This page covers choosing, decomposing and operating the metric, and the [North Star Framework](https://tryhamster.com/methods/north-star-framework) page covers the framework as a program.

**Can revenue be a North Star Metric?**

Some companies use it: revenue was the most common type in Rachitsky's survey of [over 40 companies](https://future.com/north-star-metrics/). He still recommends a metric one step removed because revenue is spiky, hard to make operational, and uninspiring as a team goal. Amplitude's playbook calls revenue metrics lagging indicators for the same reason. If you do use revenue, make sure the inputs underneath it are customer behaviors.

**How many input metrics should a North Star have?**

Few enough that each has a clear owner. Amplitude's guidance on its blog is [three to five](https://amplitude.com/blog/product-north-star-metric) influential, complementary factors, and its playbook's examples use three or four. Test the set by asking whether improving all of them would move the North Star, and whether each one can move somewhat independently of the others.

**How often should the North Star Metric change?**

Rarely, and for a reason tied to strategy. About a quarter of the companies in Rachitsky's survey had recently changed their North Star or were about to, and Dropbox moved from monthly active users to paid customers as it shifted from consumer to business ([Choosing Your North Star Metric](https://future.com/north-star-metrics/)). Review the metric on a regular schedule, and change it when the business model, the customer, or the strategy changes.

**What are the most common mistakes?**

Choosing a vanity metric that rises without delivered value, trying to move the North Star directly instead of its inputs, and keeping two competing North Stars. Others are skipping the precise definition, so teams measure it differently, and letting the metric fade because nobody reviews it. The playbook also warns against rejecting a strong idea too early because nobody knows yet how to measure it.

## Sources

- [Sean Ellis: personal site](https://www.seanellis.me/)
- [Intercom: Sean Ellis on charting a path toward sustainable growth](https://www.intercom.com/blog/podcasts/sean-ellis-growth/)
- [Stream: What Is Your North Star Metric](https://getstream.io/blog/north-star-metric/)
- [StartUs Magazine: Sean Ellis on growth teams and the North Star Metric](https://magazine.startus.cc/sean-ellis-on-the-backbone-of-successful-growth-teams-the-north-star-metric/)
- [Penguin Random House: Hacking Growth](https://www.penguinrandomhouse.com/books/545936/hacking-growth-by-sean-ellis-founder-of-growthhackerscom-and-morgan-brown/)
- [Amplitude: The North Star Playbook](https://info.amplitude.com/rs/138-CDN-550/images/Amplitude-The-North-Star-Playbook.pdf)
- [Amplitude: Every Product Needs a North Star Metric](https://amplitude.com/blog/product-north-star-metric)
- [Lenny Rachitsky: Choosing Your North Star Metric (a16z Future)](https://future.com/north-star-metrics/)
- [Lenny's Newsletter: Choosing Your North Star Metric](https://www.lennysnewsletter.com/p/choosing-your-north-star-metric)
- [Commoncog: The Amazon Weekly Business Review](https://commoncog.com/the-amazon-weekly-business-review/)
- [Commoncog: Amazon's category expansion and the right incentives](https://commoncog.com/c/cases/amazon-incentives-category-expansion/)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
