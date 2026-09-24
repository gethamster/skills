---
name: "choosing-actionable-over-vanity-metrics"
description: "Replace feel-good totals with cohort-based, behavior-driven metrics that each map to a decision your team is about to make."
category: "Product"
metadata:
  homepage: https://tryhamster.com
  method: "lean-startup-framework"
  datePublished: "2026-05-18"
  dateModified: "2026-09-24"
---

# How to judge vanity metrics vs actionable metrics

> Replace feel-good totals with cohort-based, behavior-driven metrics that each map to a decision your team is about to make.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | Half a day for a first metrics audit, then minutes per experiment |
| Outcome | A short list of actionable metrics, each tied to a named decision and a pre-set threshold, with vanity totals demoted or retired. |
| Prerequisites | A product or MVP with at least basic event tracking, A current hypothesis or experiment you want to evaluate, Access to raw usage data, not only dashboard summaries |
| Part of | [Lean Startup Framework](../../methods/lean-startup-framework/METHOD.md) |

## Overview

A metric earns its place on a dashboard only if it can change what the team does next. That is the working test behind the vanity metrics vs actionable metrics distinction in the [Lean Startup Framework](https://tryhamster.com/methods/lean-startup-framework). Vanity metrics make activity look like progress. Actionable metrics show cause and effect: when you change the product, the number moves, and you can say why.

[Summaries of Ries's book](https://mooncamp.com/blog/the-lean-startup-book-summary) frame the standard as metrics that are actionable, accessible and auditable, set against vanity metrics that make activity look successful without demonstrating customer learning. Practitioner guides list the usual suspects: [cumulative signups and page views](https://realgrowthmatters.com/learn/frameworks/lean-startup-build-measure-learn) count as vanity when they are not connected to engagement, retention, conversion or another decision. The problem is not the raw data. A signup event is useful. The problem is the cumulative total, which can only go up and so can never tell you that something broke.

This skill also covers the second half of the distinction: behavior over stated intent. The [lean-startup skill reference on Tessl](https://tessl.io/registry/skills/github/wondelai/skills/lean-startup) argues for learning what customers want through experiments on real behavior rather than feature requests, surveys or focus groups, because people mispredict their own actions. A survey saying people would pay is a hypothesis. A preorder is evidence.

The advice is widely followed, at least on paper. In an [exploratory study of how practitioners use Lean Startup](https://pesquisa-eaesp.fgv.br/sites/gvpesquisa.fgv.br/files/arquivos/lean_startup.pdf), about 65% of respondents reported using the metrics the author recommends. Using the recommended categories is not the same as using them well, which is why this page focuses on the decisions each metric has to support.

Use the table below as a starting point when auditing an existing dashboard. Each row pairs a common vanity total with a replacement that moves only when customer behavior changes.

| Vanity metric | Why it misleads | Actionable replacement |
|---|---|---|
| Cumulative signups | Only rises, hides churn | Retention by weekly signup cohort |
| Total page views | Counts traffic, not intent | Visitor-to-trial conversion by channel |
| App downloads | An install is not use | Share of new users completing the core action |
| Survey "would buy" answers | Stated intent, not behavior | Preorders or paid conversions |
| Total registered users | Mixes old and new cohorts | Active users per cohort over time |

The output of this skill is small: a handful of metrics, each attached to a hypothesis, a threshold and a decision owner. If a metric has none of those, it goes to a secondary report or is deleted.

## How It Works

Actionable metrics work because they support cause-and-effect reasoning. As the [Build-Measure-Learn guide from Real Growth Matters](https://realgrowthmatters.com/learn/frameworks/lean-startup-build-measure-learn) puts it, the measure step means defining the actionable metrics that will tell you whether the hypothesis was right. [Yu-kai Chou's breakdown of the loop](https://yukaichou.com/gamification-analysis/lean-startup-ries-build-measure-learn-mvp) makes the same contrast: actionable metrics link a change to an outcome, while vanity metrics create the appearance of progress without showing whether the product is improving.

The three criteria give you a concrete filter. [The actionable, accessible, auditable standard](https://mooncamp.com/blog/the-lean-startup-book-summary) is short enough to apply to every metric in a review. In practice, interpret each criterion as a question:

- Actionable: if this number moved sharply tomorrow, would you know which change caused it and what to do next? If the answer is "celebrate" or "worry" rather than a specific action, it fails.
- Accessible: can everyone who acts on it, including engineers and designers, read it without a data analyst translating? Simple rates on a named cohort usually pass; composite scores often fail.
- Auditable: can you trace the number back to raw events or real customers and check it? If nobody trusts it, nobody will act on it when it delivers bad news.

Cohorts are the main mechanical tool. [Measuring by cohort](https://tessl.io/registry/skills/github/wondelai/skills/lean-startup) lets you compare the behavior of different groups over time instead of relying on aggregate totals. A total blends customers who joined before and after a change, so an improvement for new users can be masked by a large base of old ones. Grouping users by the week they joined, or by the version they first saw, isolates the effect of each change.

Behavior beats stated intent for the same reason. What customers say in interviews and surveys is useful for forming hypotheses, but the [Tessl lean-startup reference](https://tessl.io/registry/skills/github/wondelai/skills/lean-startup) treats observed behavior as the stronger evidence of demand. So the metric you commit to should count actions: paid, returned, completed, referred.

Finally, a metric must connect to a decision. Real Growth Matters stresses that [each cycle should produce knowledge that changes the next decision](https://realgrowthmatters.com/learn/frameworks/lean-startup-build-measure-learn); collecting data without interpreting it is not learning. That is why the workflow below starts with the decision and works back to the metric, rather than starting from whatever the analytics tool shows by default. You know the skill is working when every weekly review ends with a change in plan, even a small one, justified by a number everyone agrees on.

## Step-by-Step Guide

### Step 1: Name the decision first

Write down the next product decision the team actually faces, such as whether to keep investing in onboarding or switch acquisition channel. Phrase it as a choice between at least two actions. Then ask what customer behavior would push you toward each option. The metric you need is the one that distinguishes those behaviors. If you cannot name a decision, you are not ready to pick a metric.

> **Pro tip:** Keep a one-line decision statement at the top of every metrics doc so reviewers can check each number against it.

### Step 2: Inventory and tag current metrics

List every number currently reported in dashboards, investor updates and team reviews. Tag each as a total, a rate or a cohort measure, and note which decision, if any, it informs. Totals with no linked decision are your vanity candidates. Do not delete anything yet; the goal is visibility. Most teams find that their most prominent numbers are the least tied to decisions.

> **Pro tip:** Sort the inventory by how often each metric is mentioned in meetings. The top of that list is where vanity metrics do the most damage.

### Step 3: Run the three A test

Put each candidate metric through the actionable, accessible and auditable questions. For actionable, imagine the number doubled or halved and ask what you would change. For accessible, show it to someone outside the data team and ask them to explain it back. For auditable, trace one data point back to the underlying events or customer records.

Anything that fails two of the three should not drive decisions.

### Step 4: Convert totals into cohort rates

For each surviving metric, replace aggregate totals with a rate measured on a defined cohort. Group users by signup week, acquisition channel or product version, depending on what your decision is about. Track the same behavior across cohorts, for example the share who complete the core action or return the following week. This makes the effect of each change visible instead of diluted by older users.

It also exposes decline that a rising total would hide.

> **Pro tip:** Choose the cohort dimension that matches the change you are testing: version cohorts for product changes, channel cohorts for marketing changes.

### Step 5: Swap stated intent for observed behavior

Look for metrics built on what customers say, such as survey interest, waitlist enthusiasm or interview feedback. Keep them as hypothesis sources, but find a behavioral proxy to commit to, such as preorders, paid conversions or repeat usage. The behavioral version costs more to collect, which is exactly why it is more credible. If no behavioral proxy exists yet, that tells you what your next experiment must build.

### Step 6: Set thresholds before you look

For each chosen metric, write the value that would make you persevere and the value that would make you change course, before the experiment runs. For example, a team might decide that a week-two retention rate above an agreed level justifies continued investment. Record who owns the call. Pre-set thresholds stop the team from reinterpreting weak numbers after the fact.

Without them, even a well-chosen metric becomes a vanity metric in practice.

> **Pro tip:** Store thresholds alongside the hypothesis, not in a separate analytics tool, so the decision rule and the evidence are reviewed together.

### Step 7: Review, act and retire

At each review, read the actionable metrics against their thresholds and state the decision out loud. Move vanity totals to a secondary appendix or delete them if nobody used them during the cycle. Replace metrics whose decisions have been made with metrics for the next open question. A metric that has not influenced a decision in several reviews is a candidate for retirement.

The dashboard should shrink or stay small as the product matures.

> **Pro tip:** End every review with a written line: metric, result, decision. If you cannot fill in the third column, the metric failed.

## Best Practices

- Start every metric from a decision, not from the analytics tool's defaults. Default dashboards favor totals because they are easy to compute, and totals rarely map to a choice.
- Keep the committed set small, for example three to five metrics per active hypothesis. Each extra metric adds a new way to find good news in bad results.
- Report rates on cohorts rather than cumulative counts. Cohorts let you attribute changes to specific releases and reveal decline that aggregate growth conceals.
- Weight behavioral evidence above stated intent when the two disagree. People mispredict their own future actions, so a purchase outranks a survey response.
- Make every metric traceable to raw data that anyone on the team can inspect. Trust is what makes a team act on an uncomfortable number instead of arguing with it.
- Keep vanity totals out of team decision reviews even if investors or executives ask for them elsewhere. Mixing the two in one meeting lets the flattering number win the discussion.
- Pair each metric with its threshold and decision owner in the same document. Separating them invites post-hoc reinterpretation.

## Common Mistakes

- **Treating downloads, signups or page views as proof that an experiment worked.** — Connect each count to engagement, retention, conversion or a specific decision before drawing conclusions. A rising total says only that activity happened, not that customers found value.
- **Taking survey answers or interview enthusiasm as validated demand.** — Use what customers say to form the hypothesis, then test it with a behavioral metric such as preorders or repeat use. Stated intent is a prediction; behavior is the result.
- **Reading metrics without a hypothesis or success threshold set in advance.** — Write the persevere and change-course values before the experiment starts. Otherwise any result can be framed as encouraging and the metric stops informing decisions.
- **Collecting data but never completing the learning step.** — Close each review with an explicit decision tied to the numbers. If the data produced no change in plan, either the metric is wrong or the review skipped the interpretation.
- **Reporting only aggregate numbers that blend old and new users.** — Split users into cohorts by signup period, channel or version. Aggregates can hide both improvements for new cohorts and deterioration among recent ones.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/lean-startup-framework/METHOD.md) — Lean Startup Framework

## Related Skills

- [Making Pivot-or-Persevere Decisions](../identifying-pivot-or-persevere-decisions/SKILL.md)
- [Running Build-Measure-Learn Cycles](../running-build-measure-learn-cycles/SKILL.md)
- [Building Minimum Viable Products \(MVPs\)](../building-minimum-viable-products/SKILL.md)
- [Setting Up Innovation Accounting](../setting-up-innovation-accounting/SKILL.md)
- [Conducting Customer Discovery Interviews](../conducting-customer-discovery-interviews/SKILL.md)
- [Designing Validated Learning Experiments](../designing-validated-learning-experiments/SKILL.md)

## Sources

- [The Lean Startup Book Summary: 7 Key Takeaways](https://mooncamp.com/blog/the-lean-startup-book-summary)
- [Lean Startup: What Build-Measure-Learn Really Means](https://yukaichou.com/gamification-analysis/lean-startup-ries-build-measure-learn-mvp)
- [LEAN STARTUP: ANÁLISE EXPLORATÓRIA SOBRE SUA UTILIZAÇÃO POR](https://pesquisa-eaesp.fgv.br/sites/gvpesquisa.fgv.br/files/arquivos/lean_startup.pdf)
- [lean-startup - wondelai • Skills • Registry](https://tessl.io/registry/skills/github/wondelai/skills/lean-startup)
- [Lean Startup \& Build-Measure-Learn · Eric Ries' Validated](https://realgrowthmatters.com/learn/frameworks/lean-startup-build-measure-learn)
