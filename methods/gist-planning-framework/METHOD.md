---
name: "gist-planning-framework"
category: "Product"
description: "The GIST Planning Framework from Itamar Gilad replaces feature roadmaps with Goals, Ideas, Step-projects and Tasks, planned at different cadences."
metadata:
  datePublished: "2026-07-02"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# GIST Planning Framework: Goals, Ideas, Steps, Tasks

> Created by **Itamar Gilad** - [https://itamargilad.com/](https://itamargilad.com/)

## Overview

The GIST Planning Framework is Itamar Gilad's alternative to the feature roadmap. GIST stands for Goals, Ideas, Step-projects and Tasks: goals state the outcome a team wants, ideas are hypothetical ways to reach it, step-projects are small pieces of work that build and test an idea, and tasks are the daily work inside each step. Gilad introduced it in the article [Why you should stop using product roadmaps and try GIST Planning](https://itamargilad.com/gist-framework/), whose HackerNoon copy is [dated January 30th, 2018](https://hackernoon.com/why-i-stopped-using-product-roadmaps-and-switched-to-gist-planning-3b7f54e271d1). He later made it the organizing model of his book [Evidence-Guided](https://itamargilad.com/book-evidence-guided/), where the third layer is simply called Steps.

Gilad's case against roadmaps comes from his own experience. In the original article he writes that getting stakeholders to agree on a roadmap is a large undertaking with a low return, that his roadmaps and Gantt charts were already out of date the day he published them, and that changes at the top of the plan set off rounds of replanning and cancelled projects. Roadmaps also fund only a few big projects, so many potentially good ideas are killed before anyone tests them. His [book page](https://itamargilad.com/book-evidence-guided/) describes his background in senior roles at Google, where he worked on YouTube and Gmail, and at Microsoft.

The model rests on a hard fact about product ideas. Gilad writes that at most 1 in 3 ideas will deliver a positive result, and often far fewer, citing the Microsoft paper [Online Experimentation at Microsoft](http://ai.stanford.edu/~ronnyk/ExPThinkWeek2009Public.pdf), which reports that only about 1/3 of ideas improved the metrics they were designed to improve. He adds that experienced leaders, product managers and designers do not pick winners at a better rate than anyone else ([GIST Framework](https://itamargilad.com/gist-framework/)). If most ideas fail and nobody can reliably spot the good ones in advance, committing to a list of features months ahead is a bet made blind.

GIST answers that problem by separating what the team wants to achieve from how it might get there. Goals are defined through outcomes and, in Gilad's telling, draw on the Objectives and Key Results he used at Google. Ideas go into an idea bank, where none are killed upfront, and are ranked by evidence with Sean Ellis's ICE scoring; the skill on the [GIST planning ideas layer](../../skills/generating-and-banking-product-ideas/SKILL.md) covers running that bank. The top ideas are then broken into step-projects, each no more than 10 weeks long by Gilad's rule ([GIST Framework](https://itamargilad.com/gist-framework/)), and each step is treated as an experiment in the sense of Lean Startup's [Build-Measure-Learn](https://theleanstartup.com/principles) loop. Tasks sit at the bottom and run on whatever agile method the team already uses.

The four layers change at different speeds, and that is deliberate. Goals look a year or more ahead and are reviewed quarterly, ideas are collected all the time, step-projects are chosen each quarter and reprioritized every one to two weeks, and tasks are planned in sprints and adjusted daily ([HackerNoon copy of the original article](https://hackernoon.com/why-i-stopped-using-product-roadmaps-and-switched-to-gist-planning-3b7f54e271d1)). The skill on [GIST planning cadence](../../skills/managing-multi-cadence-planning-cycles/SKILL.md) covers how to run those rhythms together.

The planning artifact that replaces the roadmap is the GIST board. Gilad describes it as goals on the left, this quarter's ideas in the middle and two to five steps per idea on the right, reviewed in weekly or bi-weekly team meetings, and he calls it a substitute for roadmaps and project Gantts that managers and stakeholders should see regularly ([The GIST Board and Other GIST Tools](https://itamargilad.com/the-gist-board-and-other-gist-tools/)). Building a [GIST planning framework presentation](../../skills/presenting-gist-plans-to-stakeholders/SKILL.md) around that board is a skill of its own.

GIST has critics. ProductPlan's [glossary entry](https://www.productplan.com/glossary/gist-planning) notes that it handles long, multi-phase initiatives poorly, makes resource and capacity planning harder, and assumes that all roadmaps are rigid. Those are fair limits to weigh, and a staged [GIST framework implementation](../../skills/replacing-traditional-roadmaps-with-gist/SKILL.md) that keeps real commitments on a separate list answers some of them. The framework fits teams that own an outcome and face real uncertainty about which solutions will move it, and it adds little when the solution is already known.

## Core Principles

### Goals describe outcomes

A goal says where the team wants to be, by when, and how it will know it got there, and it answers the question "why are we doing this?" for any piece of work. Gilad borrows the military idea of telling people where to go without telling them how to get there ([GIST Framework](https://itamargilad.com/gist-framework/)). A goal written as a feature ("launch the new dashboard") skips that question and locks in one solution before any evidence exists. In the book he ties goals to a North Star metric for value delivered and a top business metric for value captured ([book resources](https://itamargilad.com/book-evidence-guided/bookresources/)).

### Ideas are hypotheses

Gilad stresses the word hypothetical: an idea is a guess about how to reach a goal. Because most ideas fail and seniority does not improve the odds, GIST does not kill ideas upfront, does not favor management ideas, and does not pick the most pitched or politicized ones ([GIST Framework](https://itamargilad.com/gist-framework/)). That keeps the decision about what to build tied to evidence instead of to who argued hardest in a meeting.

### Rank by evidence

Ideas are prioritized with ICE: Impact, Confidence and Ease. Gilad credits the method to Sean Ellis and treats Confidence as the check on the other two, because Impact and Ease are guesses whose reliability depends on the evidence behind them ([ICE Scores](https://itamargilad.com/ice-scores/)). His Confidence Meter gives low confidence to opinions and higher confidence to data and test results ([Product Discovery With ICE](https://itamargilad.com/the-tool-that-will-help-you-choose-better-product-ideas/)). He warns against teams that invent ideas, score them and then build whatever ICE tells them to; the score picks what to test next.

### Think big, start small

Gilad takes the phrase "Think Big but Start Small" from Google's pillars of innovation. Turning a promising idea into a project of many months is, in his words, a common and costly mistake, so the idea is split into small step-projects run one at a time, such as a mockup, then a prototype, an MVP, dogfood, a beta and finally a launch ([GIST Framework](https://itamargilad.com/gist-framework/)). Each step puts a more complete version in front of more users for longer ([Building Your Project for Learning and Execution](https://itamargilad.com/building-your-project-for-learning-and-execution/)).

### Every layer stays agile

Gilad's point about Agile is that it fixed the project waterfall but left the planning waterfall in place. In GIST, ideation, planning and execution happen at the same time, and every part of the plan is revisited on a regular schedule. The task layer needs no change from what agile teams already do. What changes is that the goals, ideas and steps above it can now move as well ([GIST Framework](https://itamargilad.com/gist-framework/)).

### The team owns the path

Goals set direction, and the team picks the ideas and steps that pursue them. In the original article the team chooses the goals and ideas it will pursue each quarter and defines step-projects to match ([HackerNoon copy](https://hackernoon.com/why-i-stopped-using-product-roadmaps-and-switched-to-gist-planning-3b7f54e271d1)). The goals are the constraint, and the choice of solution stays with the people closest to the evidence. Where leaders keep choosing the solutions themselves, GIST turns into a roadmap with new labels.

### The plan is visible to everyone

Gilad writes that the whole planning system should be visible to anyone in the company and to the board. He reports that coworkers and board members readily understand the language of goals, ideas and step-projects and appreciate its realism ([HackerNoon copy](https://hackernoon.com/why-i-stopped-using-product-roadmaps-and-switched-to-gist-planning-3b7f54e271d1)). Visibility is also what lets a team drop a failed idea without a political fight, because everyone saw the evidence.

## How the Model Has Evolved

GIST has changed between the original article and the book. The core four layers are the same, but the names and the validation guidance have grown.

| Element | Original article | Evidence-Guided book |
|---------|------------------|----------------------|
| Third layer | [Step-projects](https://itamargilad.com/gist-framework/), each a short experiment | [Steps](https://itamargilad.com/gist-scorecard/): any assessment, fact finding or experiment |
| Goals | [OKRs](https://itamargilad.com/gist-framework/) as used at Google | [North Star and top business metrics, metrics trees](https://itamargilad.com/book-evidence-guided/bookresources/) |
| Idea ranking | [ICE](https://itamargilad.com/gist-framework/) from Sean Ellis | [ICE plus the Confidence Meter](https://itamargilad.com/book-evidence-guided/) |
| Validation | [Build-Measure-Learn](https://itamargilad.com/gist-framework/) progression | [AFTER model](https://itamargilad.com/book-evidence-guided/bookresources/) |
| Tooling | [GIST board](https://itamargilad.com/the-gist-board-and-other-gist-tools/) and spreadsheets | [GIST board template](https://itamargilad.com/book-evidence-guided/bookresources/) |

AFTER stands for Assessment, Fact-Finding, Tests, Experiments and Release-results ([book resources](https://itamargilad.com/book-evidence-guided/bookresources/)). Gilad's earlier [validation article](https://itamargilad.com/idea-validation-much-more-than-just-a-b-experiments/) describes the first four as a ladder, from quick internal assessment and fact finding through user tests to controlled experiments, and argues that most ideas should be rejected or parked at the cheap end. The book, [published September 18, 2023](https://www.goodreads.com/book/show/199041292-evidence-guided), also covers scaling GIST across teams and adopting it in an existing company ([book page](https://itamargilad.com/book-evidence-guided/)).

## Steps

1. **Set outcome goals**
   Define a small number of goals that describe outcomes for users and the business, each with a metric, a current value and a target. Gilad's original article sets goals at the start of the year for a horizon of a year or more and adjusts them every quarter. OKRs are the usual format, and each key result should be measurable and verifiable. Check each goal by asking whether it would still make sense if the first idea for reaching it failed. If it would not, the goal is really a solution.

2. **Open the idea bank**
   Collect ideas for each goal in one place, usually a spreadsheet or a simple database, and welcome ideas from anyone: research, customers, managers, the team and analytics. Gilad's rule is that no idea is killed upfront, and a bank can hold hundreds of ideas indefinitely. Link each idea to the goal it serves. Keep a short description and the reasoning, so the idea can be judged later by someone who was not in the room.

3. **Triage and score ideas with ICE**
   Give each new idea a quick Impact, Confidence and Ease estimate, spending only a few minutes on each, and sort the bank by the result. Score Confidence from the evidence you actually hold, however much people like the idea. Move the most promising ideas to a short candidate list and park the rest. The score tells you what to test next. Step-projects decide what gets built.

4. **Pick this quarter's working set**
   At the start of the quarter, choose the handful of ideas per goal the team will pursue and put them on the GIST board. Gilad suggests picking a small working set for each key result and leaving everything else in the bank. The team makes this choice, with the goals as the constraint. Write down why each idea was chosen, because that reasoning will be tested.

5. **Break each idea into step-projects**
   Plan the first step for each chosen idea as a small experiment with a clear question, a success measure and an end date, and keep every step within Gilad's limit of ten weeks. Start with the cheapest validation that could change your mind, such as a data check or a fake-door test, and move to prototypes, betas and A/B tests only if the idea still looks good. Write down what result would make you continue and what would make you stop. Each later step puts a more complete version in front of more users.

6. **Run tasks in your existing sprints**
   Break the active step into tasks and run them on the team's usual Scrum or Kanban board. Nothing about sprint planning or daily standups has to change. Keep each task linked to its step, idea and goal, so anyone can see why the work exists. Gilad places the task board to the right of the GIST board so work flows left to right.

7. **Review the board and update it**
   Every week or two, walk the GIST board from left to right with the team. Update ICE scores with the new evidence, remove failed ideas along with their steps, bring in the next idea from the bank, and plan the next step for ideas that passed. Share the board with managers and stakeholders so they see progress in terms of evidence and outcomes. Record why each idea was dropped so it is not re-proposed without new evidence.

8. **Adjust goals each quarter**
   At the end of the quarter, check progress on each goal and adjust targets or retire goals that no longer fit the strategy. Re-score the bank against the updated goals and look through parked ideas for anything new evidence has revived. Look at the process too: whether steps were small, whether confidence scores matched results, and whether the team really chose its own ideas.

## When to Use

- A team owns a measurable outcome, such as activation or retention, and does not know which solutions will move it. GIST is designed for exactly this kind of uncertainty.
- The roadmap is out of date within weeks of each planning cycle, and replanning is eating time. GIST schedules change into the plan through regular reviews at every layer.
- Stakeholders keep pushing features and prioritization turns into lobbying. The idea bank and ICE scores move the argument onto evidence and goals.
- The team ships on time but key metrics do not move. Treating each feature as an idea with a step to test it shows which work actually helps.
- Leadership already uses OKRs and wants a way to connect them to daily work. GIST adds the idea, step and task layers under the goals.

## When Not to Use

- The solution is known and the work is execution, such as a compliance change, a migration or a contractual commitment. There is no hypothesis to test, so the idea and step layers add overhead.
- Leaders will not separate goals from solutions and keep dictating features. GIST then becomes extra process with no extra autonomy.
- The work is a long, tightly coupled program with fixed external dates and heavy capacity planning, such as hardware or regulated launches. ProductPlan's critique that GIST handles multi-phase initiatives and resource planning poorly applies most here.
- The team cannot measure outcomes yet. Without data on the goal metric, confidence scores and step results cannot be checked, so build the measurement first.

## Skills

This method includes the following skills:

- [Defining Measurable Product Goals in GIST](../../skills/defining-measurable-product-goals/SKILL.md): write outcome goals with a metric, baseline, target and timeframe that anchor the rest of the plan.
- [Building a Product Idea Bank for the GIST Ideas Layer](../../skills/generating-and-banking-product-ideas/SKILL.md): collect, triage and maintain goal-linked ideas in an always-open idea bank.
- [ICE Scoring: Prioritizing Product Ideas by Confidence](../../skills/prioritizing-ideas-with-ice-scoring/SKILL.md): rank ideas by Impact, Confidence and Ease, with confidence grounded in evidence.
- [Designing Step-Projects to Validate Product Ideas](../../skills/designing-step-projects-as-experiments/SKILL.md): turn an idea into a sequence of small, time-boxed experiments.
- [Breaking Step-Projects into Daily Tasks](../../skills/breaking-step-projects-into-daily-tasks/SKILL.md): decompose the active step into sprint-sized tasks that trace back to the goal.
- [GIST Planning Cadence: Managing Multi-Cadence Cycles](../../skills/managing-multi-cadence-planning-cycles/SKILL.md): run the yearly, quarterly, weekly and daily rhythms of the four layers together.
- [Replacing Your Product Roadmap with GIST](../../skills/replacing-traditional-roadmaps-with-gist/SKILL.md): move a team from a feature roadmap to GIST without losing stakeholder trust.
- [Presenting GIST Plans to Stakeholders](../../skills/presenting-gist-plans-to-stakeholders/SKILL.md): explain a GIST plan to executives, peers and interviewers.

## FAQ

**What does GIST stand for?**

GIST stands for Goals, Ideas, Step-projects and Tasks. Goals define what the team wants to achieve, ideas are hypothetical ways to achieve it, step-projects build and test an idea in small pieces, and tasks are the daily work. In his later writing and book Gilad calls the third layer Steps. The full model is described in his article on the [GIST Framework](https://itamargilad.com/gist-framework/).

**Who created the GIST Planning Framework?**

Itamar Gilad, a product coach and author who held senior product roles at Google and Microsoft. He published the framework in an article in early 2018 and later built his book Evidence-Guided around it ([book page](https://itamargilad.com/book-evidence-guided/)). The ICE scoring GIST uses for ideas is Sean Ellis's method, which Gilad credits openly.

**How is GIST different from OKRs?**

OKRs set objectives and measurable key results but do not say how to find, test or deliver the solutions. GIST uses OKR-style goals as its top layer and adds the idea bank, step-projects and tasks underneath. Gilad says he learned goal setting through OKRs at Google. A team that already runs OKRs can adopt GIST by keeping its goals and changing how it handles everything below them.

**How does GIST work with Scrum or Kanban?**

The task layer is where GIST meets the team's existing process, and Gilad says nothing needs to change there. Tasks are planned in sprints or pulled from a Kanban board as usual. The difference is that each task belongs to a step-project, which tests an idea tied to a goal. The step list itself is reprioritized every sprint or two, so the layers above the sprint can change too.

**How long should a step-project be?**

Gilad's rule in the original article is no more than 10 weeks, and his examples are much shorter: a mockup, a prototype, a dogfood release or a beta ([GIST Framework](https://itamargilad.com/gist-framework/)). Shorter is usually better, because each step exists to produce evidence. A step that takes most of a quarter is often a full build in disguise.

**Does GIST replace the roadmap completely?**

Gilad presents the GIST board as a substitute for roadmaps and Gantt charts, shown to managers and stakeholders regularly. Where stakeholders insist on a timeline, he offers an [outcome roadmap](https://itamargilad.com/outcome-roadmaps/) that shows goals, research, discovery, delivery and the delay before results appear.

**What are the main criticisms of GIST?**

ProductPlan's [glossary entry](https://www.productplan.com/glossary/gist-planning) lists three: GIST handles long, multi-phase initiatives poorly, it makes resource and capacity planning harder, and it assumes all roadmaps are rigid. ICE scoring, which GIST uses, is also criticized as subjective ([ProductPlan on ICE](https://www.productplan.com/glossary/ice-scoring-model/)). Gilad's Confidence Meter ties the Confidence score to the type of evidence behind an idea, which narrows the room for opinion, but scores still depend on honest judgement.

## Sources

- [Itamar Gilad: Why you should stop using product roadmaps and try the GIST Framework](https://itamargilad.com/gist-framework/)
- [HackerNoon: Why you should stop using product roadmaps and try GIST Planning](https://hackernoon.com/why-i-stopped-using-product-roadmaps-and-switched-to-gist-planning-3b7f54e271d1)
- [Itamar Gilad: The GIST Board and Other GIST Tools](https://itamargilad.com/the-gist-board-and-other-gist-tools/)
- [Itamar Gilad: ICE Scores, All You Need to Know](https://itamargilad.com/ice-scores/)
- [Itamar Gilad: Product Discovery With ICE and The Confidence Meter](https://itamargilad.com/the-tool-that-will-help-you-choose-better-product-ideas/)
- [Itamar Gilad: Building Your Project for Learning and Execution](https://itamargilad.com/building-your-project-for-learning-and-execution/)
- [Itamar Gilad: Planning With Outcome Roadmaps](https://itamargilad.com/outcome-roadmaps/)
- [Itamar Gilad: GIST Scorecard](https://itamargilad.com/gist-scorecard/)
- [Itamar Gilad: Evidence-Guided](https://itamargilad.com/book-evidence-guided/)
- [Itamar Gilad: Evidence-Guided book resources](https://itamargilad.com/book-evidence-guided/bookresources/)
- [Goodreads: Evidence-Guided](https://www.goodreads.com/book/show/199041292-evidence-guided)
- [Kohavi et al.: Online Experimentation at Microsoft](http://ai.stanford.edu/~ronnyk/ExPThinkWeek2009Public.pdf)
- [The Lean Startup: Principles](https://theleanstartup.com/principles)
- [ProductPlan: GIST Planning](https://www.productplan.com/glossary/gist-planning)
- [ProductPlan: ICE Scoring Model](https://www.productplan.com/glossary/ice-scoring-model/)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
