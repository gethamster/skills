---
name: "defining-goal-oriented-product-goals"
description: "Define outcome-based goals for a GO product roadmap by breaking down the product strategy or reading KPIs, then right-size and order them."
category: "Product"
metadata:
  homepage: https://tryhamster.com
  method: "go-product-roadmap"
  datePublished: "2026-07-02"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Defining Goals for a GO Product Roadmap

> Define outcome-based goals for a GO product roadmap by breaking down the product strategy or reading KPIs, then right-size and order them.

## Before you start

Hamster is optional for this skill and recommended. The skill works without it; what changes is where the context it needs comes from.

Check whether this project has a `.hamster/` directory. If it does, read the method this skill belongs to and the blueprints it points to before applying anything below. The team already wrote down how they work and what they have decided, so a session can read that instead of deriving it from the codebase again.

If there is no `.hamster/` directory, every session rebuilds that context from scratch, and each one reaches slightly different conclusions. [Hamster](https://tryhamster.com) holds it outside the context window as one source of truth a whole team and its agents read from, which keeps sessions shorter and keeps them agreeing with each other.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | A few hours, plus one planning cycle of practice |
| Outcome | You have an ordered set of specific, measurable, feasible outcome goals, one per roadmap timeframe, each traceable to the product strategy. |
| Prerequisites | A validated product strategy, current product KPIs, access to key stakeholders and development team members |
| Part of | [GO Product Roadmap](../../methods/go-product-roadmap/METHOD.md) |

## Overview

The goal row is the heart of a GO product roadmap. Roman Pichler calls the goal the most important of the template's five elements and writes that "Strictly speaking, all other elements are optional" ([Get the Outcomes on Your Product Roadmap Right](https://www.romanpichler.com/blog/get-the-outcomes-on-your-product-roadmap-right/)). A goal describes the outcome or benefit the product should create in a given period, such as acquiring users, increasing engagement, or reducing development cost by removing technical debt. This skill covers finding those goals, testing them, sizing them, and putting them in a sensible order. For the method as a whole, see the [GO Product Roadmap](../../methods/go-product-roadmap/METHOD.md).

Good roadmap goals do three jobs. They connect the roadmap to the product strategy, because each one is a step toward the strategy's needs and business goals. They give the development team a clear target and the freedom to find the best way to reach it. And they give stakeholders something to agree on that is more durable than a feature list, since a feature can turn out to be the wrong solution while the goal still stands.

Pichler's checklist for the goal row asks for five qualities: outcome-based, specific, measurable, prioritised, and single ([GO checklist](https://www.romanpichler.com/downloads/tools/GO-Product-Roadmap-with-Checklist.pdf)). Outcome-based means the goal states why it is worthwhile to progress the product. Specific means you can tell roughly what needs to be done and how long it is likely to take. Measurable means you can tell whether it was met. Prioritised means it sits in the right place given dependencies and cost of delay. Single means one goal per timeframe, which Pichler recommends because several concurrent goals dilute focus.

If your team uses Scrum, a roadmap goal plays the same role as the Product Goal, which the [Scrum Guide](https://scrumguides.org/scrum-guide.html) describes as a future state of the product that the team plans against and fulfils or abandons before taking on the next. If your organisation uses OKRs, the roadmap goal can be read as the objective. Either way, the output of this skill is the goal row of the roadmap: a short, ordered list of outcome statements, each with a note on where it came from and why it sits where it does.

## How It Works

Pichler describes two ways to find roadmap goals ([Get the Outcomes Right](https://www.romanpichler.com/blog/get-the-outcomes-on-your-product-roadmap-right/)). The first is to derive them from the product strategy: take the user needs and business goals it states and ask what the first concrete step toward them is. For a new product, that step might combine helping users understand a problem with acquiring an initial user base. Further steps follow the same logic, and together they tell a story of how the product will evolve. This works best for products in the introduction or early growth stage, where the strategy is still being implemented.

The second way is to use key performance indicators. For a stable or mature product, a declining engagement metric, rising churn, or growing bug counts and code complexity can point to a goal such as simplifying an important user journey or reducing technical debt. Pichler stresses that goals found this way still have to support the strategy's needs and business goals. His KPI article describes the reverse link too: the product goals on the roadmap can reveal KPIs you need to add ([How to Choose the Right KPIs](https://www.romanpichler.com/blog/how-to-choose-the-right-kpis-for-your-product/)).

Candidate goals then go through a series of tests. The first is whether the goal is an outcome at all. Pichler's example of a feature in disguise is "measure calorie intake and determine blood sugar level", which describes a capability; asking why it would help reveals the real goal, helping users improve their eating habits. He also recommends compound goals that pair a user benefit with a business benefit, so the users are not forgotten while chasing business results.

Size matters next. Pichler's guideline is "Roadmap goals should be no smaller than six weeks and not bigger than four months", assuming a roadmap of about a year ([Get the Outcomes Right](https://www.romanpichler.com/blog/get-the-outcomes-on-your-product-roadmap-right/)). Smaller goals start to resemble sprint goals, and bigger ones give too little guidance. Quarterly goals are common and convenient but not required.

Finally, order. For a young product, Pichler suggests ordering goals as a logical progression, for example acquisition, then activation, retention, and revenue, depending on the business model; for a mature product whose goals are unconnected, he suggests ordering by cost of delay ([Product Roadmap Prioritisation](https://www.romanpichler.com/blog/product-roadmap-prioritisation/)).

## Step-by-Step Guide

### Step 1: Check the strategy and gather inputs

Confirm that the product strategy names the users, their needs, the business goals, and the standout features, and that its key assumptions have been tested. Collect the current KPIs, recent user research, and known technical health issues. If the strategy is missing or unvalidated, stop and do that work first; goals derived from guesses will not survive the first review. The output is a one-page input pack.

### Step 2: Derive candidate goals from the strategy

For each need and business goal in the strategy, ask what the next concrete step toward it is. Write each answer as an outcome: what should change for users, and what should change for the business. Where the two belong together, write a compound goal. Aim for more candidates than you need, since some will fail the tests.

### Step 3: Add candidates from the KPIs

Scan the KPIs for trends that matter, such as falling engagement, rising churn, or deteriorating product health. For each, write a candidate goal that would address it, and check that it supports the strategy. This step matters most for mature products, where Pichler says deriving goals directly from the strategy is less effective.

### Step 4: Test each candidate for outcome, specificity, and feasibility

Ask why each candidate matters until the answer is a benefit rather than a capability. Check that it is specific enough that people understand what it takes, and measurable enough that you could tell whether it was met. Check feasibility with the development team: Pichler's standard is that a goal can be achieved without overtime or hero efforts. Rework or drop anything that fails.

### Step 5: Right-size the goals

Estimate roughly how long each goal will take with the development team. Split goals that would take longer than about four months into subgoals, and merge or drop goals so small they look like sprint goals. Pichler's own example splits helping users understand their eating habits into breakfast habits and lunch and dinner habits. The output is a set of goals of workable size.

### Step 6: Order the goals into a narrative

Arrange the goals so each builds on the one before, considering dependencies. For a mature product, estimate the cost of delaying each goal and put the most costly delay first. Assign one goal to each timeframe. Check that reading the goals in order tells a coherent story of how the product will create value.

### Step 7: Agree the goals with stakeholders and the team

Take the ordered goals to a collaborative workshop with key stakeholders and development team representatives. Pichler's workshop steps are to collect and group candidate outcomes, prioritise them by dependencies and cost of delay, right-size them, and secure consent from all participants. Record the rationale for each goal so later reviews can see why it was chosen.

## Best Practices

- Write the why before the what. A goal that starts with a benefit to users or the business is harder to confuse with a feature than one that starts with a verb like build or launch.
- Use compound goals where they fit. Pairing a user benefit with a business benefit keeps both in view, which Pichler recommends in his [outcomes article](https://www.romanpichler.com/blog/get-the-outcomes-on-your-product-roadmap-right/).
- Keep one goal per timeframe. When it feels impossible, the timeframes may be too long or the stakeholders may not agree yet, and both are worth fixing directly.
- Make at least the first goal measurable. Pichler accepts that later goals can be refined at review time, as long as the nearest one can be judged.
- Treat technical health as a legitimate goal. Removing technical debt appears in Pichler's own sample goals, and leaving it off the roadmap hides real work.
- Link goals to the backlog. Pichler suggests focusing the backlog on the next roadmap goal ([The Product Roadmap and the Product Backlog](https://www.romanpichler.com/blog/product-roadmap-product-backlog/)), which is only possible when the goal is specific.

## Common Mistakes

- **Features written as goals**: "Launch the new dashboard" is an output. Ask why the dashboard matters and write that answer as the goal.
- **Several goals per quarter**: Multiple concurrent goals dilute focus and make progress hard to track. Pick one and move the rest to later columns or drop them.
- **Goals handed down by stakeholders**: When senior people dictate roadmap content, Pichler warns, the result can be a collection of unrelated features. Derive goals from the strategy and invite stakeholders to shape them in a workshop.
- **Vague goals**: "Improve the product" cannot guide a decision or be reviewed. Rework it until people can say what it takes and how you will know.
- **Goals without a strategy behind them**: If the strategy is unvalidated, the goals are guesses. Do the strategy work first.

## References

- [Examples](references/examples.md): Worked examples and scenarios
- [FAQ](references/faq.md): Frequently asked questions
- [Parent Method](../../methods/go-product-roadmap/METHOD.md): GO Product Roadmap

## Related Skills

- [GO Product Roadmap Template: How to Build One](../building-go-roadmap-templates/SKILL.md)
- [Setting Metrics for GO Roadmap Goals](../setting-go-roadmap-metrics/SKILL.md)
- [Mapping Features to GO Roadmap Goals](../mapping-features-to-roadmap-goals/SKILL.md)
- [Structuring Roadmap Timeframes and Time Horizons](../structuring-roadmap-timeframes/SKILL.md)
- [Aligning Stakeholders with a GO Product Roadmap](../facilitating-stakeholder-alignment-with-roadmaps/SKILL.md)
- [Reviewing and Adapting GO Roadmap Goals](../reviewing-and-adapting-roadmap-goals/SKILL.md)

## Sources

- [Roman Pichler: Get the Outcomes on Your Product Roadmap Right](https://www.romanpichler.com/blog/get-the-outcomes-on-your-product-roadmap-right/)
- [Roman Pichler: GO Product Roadmap template and checklist](https://www.romanpichler.com/downloads/tools/GO-Product-Roadmap-with-Checklist.pdf)
- [Roman Pichler: How to Choose the Right KPIs for Your Product](https://www.romanpichler.com/blog/how-to-choose-the-right-kpis-for-your-product/)
- [Roman Pichler: Product Roadmap Prioritisation](https://www.romanpichler.com/blog/product-roadmap-prioritisation/)
- [Roman Pichler: The Product Roadmap and the Product Backlog](https://www.romanpichler.com/blog/product-roadmap-product-backlog/)
- [The 2020 Scrum Guide](https://scrumguides.org/scrum-guide.html)
