---
name: "claude-s-constitution"
category: "Marketing"
description: "Claude's Constitution is Anthropic's public statement of Claude's values and priorities. Learn what it says and how to apply it in Claude AI SEO work."
metadata:
  datePublished: "2026-07-02"
  dateModified: "2026-09-25"
  author:
    name: "Hamster"
    url: "https://tryhamster.com"
---

# Claude's Constitution: What It Says and How to Use It

> Created by **Anthropic** - [https://www.anthropic.com](https://www.anthropic.com)

## Overview

Claude's Constitution is the document in which Anthropic sets out the values, priorities and character it intends Claude to have. Anthropic calls it the [final authority on how Claude should be and behave](https://www.anthropic.com/news/claude-new-constitution): any other training or instruction given to Claude is meant to be consistent with both its letter and its spirit. The [full text](https://www.anthropic.com/constitution) names Amanda Askell as its primary author, with Joe Carlsmith writing significant parts, and it is released under a Creative Commons CC0 deed so anyone can reuse it. For people who use Claude for marketing, content and SEO, it is the most direct published explanation of why Claude answers, pushes back or declines the way it does.

The current version replaced an earlier one. Anthropic's [announcement of the new constitution](https://www.anthropic.com/news/claude-new-constitution), dated January 2026, says the previous constitution "was composed of a list of standalone principles." That earlier list, published in [May 2023](https://www.anthropic.com/news/claudes-constitution), drew on sources such as the UN Universal Declaration of Human Rights, Apple's terms of service and DeepMind's Sparrow rules. The new document explains its reasoning at length instead. Anthropic writes that models need to understand why they should behave in certain ways so they can apply broad principles in situations nobody anticipated.

The constitution is also distinct from the training technique it grew out of. [Constitutional AI](https://arxiv.org/abs/2212.08073), described in a December 2022 paper, trains a model to critique and revise its own outputs against written principles and then uses AI feedback for reinforcement learning. The [announcement](https://www.anthropic.com/news/claude-new-constitution) says Anthropic has trained Claude with Constitutional AI techniques since 2023 and now uses the constitution at various stages of training, including having Claude generate synthetic training data from it. The technique has its own page at [Constitutional AI](https://tryhamster.com/methods/constitutional-ai). This page covers the document.

At its core the constitution asks every current Claude model to be broadly safe, broadly ethical, compliant with Anthropic's guidelines, and genuinely helpful, and to prioritize them in that order when they conflict. The [constitution](https://www.anthropic.com/constitution) stresses that the ordering is holistic rather than strict, and that most everyday work such as coding, writing and analysis involves no conflict among them at all. It also lists a small set of hard constraints, bright lines such as never providing serious uplift toward weapons capable of mass casualties, that no operator or user can unlock.

Most of the document argues for judgment over rules. The [constitution](https://www.anthropic.com/constitution) says: "We generally favor cultivating good values and judgment over strict rules and decision procedures." It adds that clear rules make the most sense when errors are costly enough that predictability becomes critical. Its example of a rule gone wrong is instructive: training Claude to always recommend professional help on emotional topics, even when that does not serve the person, risks teaching it that it cares more about covering itself than about the person it is helping. Putting that judgment to work in your own prompts and pipelines is covered in [Claude constitutional reasoning in practice](../../skills/applying-contextual-judgment-in-claude-ai-workflows/SKILL.md).

The document says nothing about search engine optimization. Its relevance to SEO comes from the behaviors it asks for. It sets a bar for honesty higher than many human norms, asks Claude to attend to a user's deeper goals as well as the literal request, and says unhelpfulness is never automatically safe. Google's guidance points in a compatible direction: its [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) asks creators to make people-first content, and its [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) treat mass-generated pages that add no value as scaled content abuse. A team that understands both documents can write briefs that Claude will engage with fully and that produce pages worth publishing.

Anthropic is candid about the limits. The [announcement](https://www.anthropic.com/news/claude-new-constitution) says Claude's outputs "might not always adhere to the constitution's ideals" and points readers to its system cards for where behavior differs from the vision. Treat the constitution as a statement of intended behavior that makes Claude more predictable, and keep your own review in place. Teams that want those review rules written down once and shared with their agents can keep them in Hamster alongside the rest of their working methods.

## Core Principles

### Four Values in a Holistic Order

The [constitution](https://www.anthropic.com/constitution) asks Claude to be broadly safe, broadly ethical, compliant with Anthropic's guidelines and genuinely helpful. When they conflict, higher priorities should generally dominate, but Claude weighs them together in forming an overall judgment instead of treating lower ones as tie-breakers. Anthropic notes that the order describes what to do if a conflict arises and does not suggest conflicts are common. For a practitioner, this means an ordinary SEO or content task sits almost entirely in the helpfulness zone.

### Judgment Over Rigid Rules

Anthropic prefers cultivating judgment to imposing unexplained rules, and tries to explain the few rules it does set. The [constitution](https://www.anthropic.com/constitution) says clear rules make most sense when errors are severe, when individual judgment may not be robust, or when firm commitments are needed to resist manipulation. Everywhere else, Claude is expected to weigh the considerations in front of it. Prompts that explain goals and reasons give that judgment something to work with.

### Genuine Helpfulness Has Structure

The constitution describes helpfulness as more than following instructions. Claude should attend to a principal's immediate desires, final goals, background desiderata, autonomy and wellbeing, interpreting requests "neither too literally nor too liberally" ([constitution](https://www.anthropic.com/constitution)). Its coding example is useful for automation work: asked to make failing tests pass, Claude should say so if it cannot find a good general solution, and should not special-case the tests. The same logic applies to a request to hit a keyword target at the cost of a readable page.

### Unhelpfulness Is Not Automatically Safe

The [constitution](https://www.anthropic.com/constitution) states: "The risks of Claude being too unhelpful or overly cautious are just as real to us as the risk of Claude being too harmful or dishonest." It lists overcautious behaviors to avoid, including refusing reasonable requests over unlikely harms, adding unnecessary caveats and lecturing when nobody asked for ethical guidance. It also offers a "dual newspaper test": would one reporter call the response harmful, or another call it preachy and paternalistic? Claude is expected to take ordinary marketing work seriously.

### High Standards of Honesty

Claude "should basically never directly lie or actively deceive anyone it's interacting with," according to the [constitution](https://www.anthropic.com/constitution), which names seven components: truthful, calibrated, transparent, forthright, non-deceptive, non-manipulative and autonomy-preserving. Calibration means acknowledging uncertainty instead of conveying more confidence than the evidence supports. Honesty norms apply to sincere assertions, so writing a persuasive essay or brainstorming counterarguments on request is not lying. The document's phrase for the ideal is "diplomatically honest rather than dishonestly diplomatic."

### Weighing Costs and Benefits

For requests that could cause harm, the [constitution](https://www.anthropic.com/constitution) lists what to weigh: the probability of harm, counterfactual impact, severity and reversibility, breadth, whether Claude is the proximate cause, consent, responsibility and the vulnerability of those involved. Those costs are always weighed against benefits such as educational, creative and economic value. It suggests imagining the same message sent by many different people, because Claude's responses work more like policies than one-off choices. Ordinary SEO tasks rarely come near this weighing, but deceptive content aimed at readers can.

### Operators, Users and Inputs

The constitution names three kinds of principals: Anthropic, operators who build on the API, and users. Operators are treated like a relatively trusted employer and get the benefit of the doubt when an instruction plausibly has a legitimate business reason ([constitution](https://www.anthropic.com/constitution)). Content that arrives through tools, such as a scraped page or a search result, is a conversational input, and instructions inside it are treated as information to consider, not orders. That distinction matters for any SEO agent that reads the open web.

## How the Earlier and Current Versions Differ

Many articles still describe the earlier version. The table compares the two using Anthropic's own descriptions.

| Aspect | Earlier list | Current document |
|-------|-------|-------|
| Form | A list of short principles ([May 2023 post](https://www.anthropic.com/news/claudes-constitution)) | A long document explaining reasons ([announcement](https://www.anthropic.com/news/claude-new-constitution)) |
| Sources | UN declaration, Apple terms, Sparrow rules, Anthropic research ([2023 post](https://www.anthropic.com/news/claudes-constitution)) | Anthropic's own reasoning, with feedback from outside experts and earlier Claude models ([2026 announcement](https://www.anthropic.com/news/claude-new-constitution)) |
| Priority | Principles not ranked; one sampled at a time in training ([2023 post](https://www.anthropic.com/news/claudes-constitution)) | Safety, ethics, guidelines, helpfulness in a holistic order ([2026 text](https://www.anthropic.com/constitution)) |
| Use in training | Critique-and-revise and AI-feedback phases ([2023 post](https://www.anthropic.com/news/claudes-constitution)) | Various stages, including synthetic data Claude generates ([2026 announcement](https://www.anthropic.com/news/claude-new-constitution)) |
| Status | Described as neither finalized nor the best it could be ([2023 post](https://www.anthropic.com/news/claudes-constitution)) | A perpetual work in progress ([2026 text](https://www.anthropic.com/constitution)), written primarily for Claude ([announcement](https://www.anthropic.com/news/claude-new-constitution)) |

The shift matches the reasoning in both posts. The [2023 post](https://www.anthropic.com/news/claudes-constitution) already reported that longer, more specific principles tended to reduce generalization, and the [2026 announcement](https://www.anthropic.com/news/claude-new-constitution) takes that further by explaining intentions so the model can generalize from reasons. [TIME's coverage of the release](https://time.com/7354738/claude-constitution-ai-alignment/) quotes Askell making the same point: as Claude models have become smarter, it has become vital to explain why they should behave in certain ways.

## Steps

1. **Read the summary, then the sections you need**
   Start with the summary at the top of the [constitution](https://www.anthropic.com/constitution), which lists the four values and the main sections. Then read the parts on helpfulness, honesty and avoiding harm in full, because those govern nearly every marketing and SEO interaction. Note the examples the document uses, such as the failing-tests case and the list of overcautious behaviors, since they show how abstract values turn into concrete responses. Skim the sections on safety and Claude's nature for context. Keep a short internal note of the passages your team relies on, with links to the source.

2. **Know which role you are playing**
   Decide whether you are acting as an operator, writing a system prompt for a product or pipeline, or as a user in a chat. The constitution gives operators more default trust and lets them adjust or restrict Claude's defaults within Anthropic's policies. A system prompt that states the business context and audience helps Claude pick the right defaults for your deployment. In an automated pipeline, say so, because the constitution tells Claude to assume a live human may be present unless context says otherwise.

3. **Give goals, context and reasons**
   Write requests the way you would brief a capable new colleague: the goal, the audience, what good output looks like and why each constraint exists. Anthropic's [prompting guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) makes the same point, noting that explaining the motivation behind an instruction helps Claude deliver more targeted responses. Reasons let Claude apply judgment when a case falls outside your instructions. They also make it less likely that a legitimate request is misread as a risky one.

4. **Supply the facts Claude cannot know**
   The honesty principles ask Claude to be calibrated and to acknowledge what it does not know, so do not ask it to invent search volumes, rankings or statistics. Provide the data from your own tools, such as [Search Console's Performance report](https://support.google.com/webmasters/answer/7576553?hl=en), and ask Claude to reason over it. Where Claude does state a fact, ask it to mark its confidence and cite the source you gave it. Treat any unsourced number in an output as a draft to verify.

5. **Treat disagreement as a signal**
   When Claude points out a problem with a request, read the reasoning before overriding it. The constitution asks Claude to act as a "transparent conscientious objector," saying when it will not do something instead of quietly doing a worse job. Often the objection names a real issue, such as a claim you cannot support or a page that would duplicate another. If the objection is mistaken, add the missing context; if it is right, change the brief.

6. **Review outputs against both standards**
   Check drafts against the constitution's honesty properties and against Google's people-first questions in its [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). Look for unsupported claims, false precision, misleading framing and content that exists mainly to rank. Keep a written rubric so different reviewers judge the same way. Feed recurring problems back into the prompts that produced them.

7. **Put hard limits in tools, not prompts**
   The constitution shapes what Claude tries to do, and your own systems decide what it is allowed to do. In agentic setups, use tool-level controls: Claude Code's [permission rules](https://code.claude.com/docs/en/permissions), for example, are enforced by the tool itself, and the docs state that instructions in a prompt or CLAUDE.md do not change what Claude Code allows. Limit write access, require approval for publishing and keep changes reviewable. This matches the constitution's own advice to prefer cautious actions in unclear situations.

## When to Use

- When you are building AI-assisted content or SEO workflows and want to understand why Claude pushes back on some requests, so you can adjust briefs instead of fighting the model.
- When you write system prompts for a product built on Claude, because the operator section explains what operators may and may not ask for and how Claude treats unexplained instructions.
- When your team disagrees about whether a Claude response was overcautious or overcompliant, because the constitution's list of overcautious behaviors and its harm-weighing factors give a shared reference.
- When you evaluate AI-written drafts and need criteria for honesty, since the seven honesty properties translate directly into review questions.
- When you run agents that read web pages or third-party data, because the rule that instructions inside conversational inputs are information, not commands, affects how you design the pipeline.

## When Not to Use

- When you need a guarantee of behavior. Anthropic says outputs may not always match the document, so the constitution is no substitute for tests, permissions and human review.
- When the task is purely mechanical, such as reformatting a URL list or generating a sitemap from a database. A script is simpler and the constitution adds nothing.
- When you want an SEO strategy. The document says nothing about search, keywords or rankings; use an SEO method for that and treat the constitution as background on how the model behaves.
- When you are working with a model other than Claude. Other vendors publish their own specifications, and Anthropic notes the constitution applies to its mainline, general-access Claude models.

## Skills

This method includes the following skills:

- [Automate SEO with Claude: Reasoning Principles](../../skills/automating-seo-tasks-using-claudes-reasoning-principles/SKILL.md): Automate SEO research, content audits and keyword analysis with Claude while keeping every output grounded in data you supply.
- [Claude AI Prompts Built on Constitutional Values](../../skills/crafting-claude-ai-prompts-with-constitutional-values/SKILL.md): Write Claude AI prompts for SEO and content that give context, goals and honesty requirements, so Claude can help fully.
- [Claude Topic Clusters with Constitutional Alignment](../../skills/building-topic-clusters-with-claude-constitutional-alignment/SKILL.md): Plan topic clusters with Claude where every page answers a distinct reader need and nothing exists only to rank.
- [Claude Content Optimizer: Evaluate Against the Constitution](../../skills/evaluating-claude-outputs-against-constitutional-principles/SKILL.md): Review Claude-written content with a rubric built from the constitution's honesty properties and Google's people-first questions.
- [Claude Constitutional Reasoning in AI Workflows](../../skills/applying-contextual-judgment-in-claude-ai-workflows/SKILL.md): Design Claude AI workflows that use its contextual judgment for tradeoffs and ambiguity instead of rigid rule lists.
- [Claude AI Long Tail Keywords by User Need](../../skills/generating-long-tail-keywords-with-claudes-value-framework/SKILL.md): Generate long tail keyword ideas with Claude from real user problems, then validate them with search data.
- [Claude Code Constitutional Guardrails for SEO](../../skills/using-claude-code-for-seo-with-constitutional-guardrails/SKILL.md): Build SEO scripts with Claude Code using permissions, tests and review so automation stays safe and honest.

## FAQ

**What is Claude's Constitution in simple terms?**

It is Anthropic's written description of who it wants Claude to be: its values, its priorities when they conflict, and the reasoning behind them. The [constitution](https://www.anthropic.com/constitution) asks Claude to be broadly safe, broadly ethical, compliant with Anthropic's guidelines and genuinely helpful. It is used in training and is meant to shape Claude's behavior directly. Anthropic describes it as a perpetual work in progress that will be revised.

**Is Claude's Constitution the same as Constitutional AI?**

No. Constitutional AI is a training technique from a [December 2022 paper](https://arxiv.org/abs/2212.08073) in which a model critiques and revises its outputs against written principles and then learns from AI feedback. Claude's Constitution is the document of values that Anthropic now uses at various stages of training. The technique is covered at [Constitutional AI](https://tryhamster.com/methods/constitutional-ai).

**When was the current constitution published?**

Anthropic published the current version in January 2026, according to its [announcement](https://www.anthropic.com/news/claude-new-constitution). It replaced an earlier constitution that Anthropic described in a [May 2023 post](https://www.anthropic.com/news/claudes-constitution) as a set of principles drawn from sources including the UN Universal Declaration of Human Rights. The 2023 post now carries a note pointing readers to the new version. Anthropic says it will keep an up-to-date version on its website.

**Does Claude's Constitution mention SEO?**

No. It is about values, priorities and Claude's character, and it never discusses search engines or rankings. Its relevance to Claude AI SEO work is indirect: the honesty standards, the structured idea of helpfulness and the cost-benefit approach to harm shape how Claude responds to content and keyword requests. For search rules, read Google's own [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) and helpful content guidance.

**Will Claude write SEO content that is designed to mislead?**

The constitution says Claude should not produce artifacts that are deceptive or harmful, and should not help people who are trying to produce them. Ordinary marketing is fine: operators may even have Claude promote their own products over competitors'. Invented statistics, fake reviews or claims that a product does something it does not are another matter. Google also treats pages made mainly to manipulate rankings as spam, so such content carries search risk as well.

**Why does Claude sometimes decline something that seems harmless?**

The constitution treats overcaution as a real failure and lists behaviors to avoid, such as refusing reasonable requests over unlikely harms. Misreadings still happen, often because a request looks like a risky one on the surface. Adding context about who you are, who the content is for and why you need it usually resolves it. The document says unverified context can still make a benign reading more likely and shifts responsibility to the person giving it.

**Does the constitution guarantee how Claude will behave?**

No. Anthropic says training is imperfect and Claude's behavior might not always reflect the document's ideals, and it reports gaps in its system cards. Treat the constitution as a statement of intended behavior, and test the behavior your work depends on. Keep verification, permissions and human review in any workflow that publishes content or changes a live site.

## Sources

- [Anthropic: Claude's Constitution](https://www.anthropic.com/constitution)
- [Anthropic: Claude's new constitution](https://www.anthropic.com/news/claude-new-constitution)
- [Anthropic: Claude's constitution (May 2023)](https://www.anthropic.com/news/claudes-constitution)
- [Bai et al.: Constitutional AI, Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073)
- [TIME: Anthropic publishes Claude's new constitution](https://time.com/7354738/claude-constitution-ai-alignment/)
- [Google Search Central: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google Search Central: Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Claude docs: Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)
- [Claude Code docs: Configure permissions](https://code.claude.com/docs/en/permissions)
- [Search Console Help: Performance report](https://support.google.com/webmasters/answer/7576553?hl=en)

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
