# Working Backwards: How Every Product Manager Can Start from the Customer

> Created by **Amazon (pioneered by Jeff Bezos and early Amazon teams)** — [https://www.aboutamazon.com/news/workplace/an-insider-look-at-amazons-culture-and-processes](https://www.aboutamazon.com/news/workplace/an-insider-look-at-amazons-culture-and-processes)

## Overview

Working Backwards is a product development philosophy that inverts the typical build sequence. Instead of starting with a technology capability or business objective and searching for a customer problem it might solve, a product manager begins by describing the ideal end-state customer experience, then reasons backwards through what must be true for that experience to exist. The method's signature artifact is the PR/FAQ: a one-page mock press release announcing the product as if it were already launched, paired with a detailed FAQ addressing both customer questions and internal stakeholder concerns. Jeff Bezos and early Amazon leadership teams developed this approach in the early 2000s as a direct response to a failure mode they kept observing: teams would invest months engineering a solution, only to discover it solved a problem customers didn't actually have, or solved it in a way customers didn't value. The press release format was chosen deliberately because it forces concreteness. You cannot write a convincing announcement for a product that has no clear customer benefit, and you cannot hide behind vague strategy language when you're writing for an imaginary newspaper reader. Colin Bryar and Bill Carr, both long-tenured Amazon executives, documented the method extensively in their 2021 book "Working Backwards: Insights, Stories, and Secrets from Inside Amazon," giving outsiders the first detailed look at how the process actually runs internally.

The underlying mental model is deceptively simple: if you can't write a compelling press release about a product, you don't understand the product well enough to build it. This claim goes deeper than it first appears. It asserts that written narrative is a superior medium for testing ideas compared to slide decks, wireframes, or verbal pitches. A slide deck lets you gloss over logical gaps with bullet points. A narrative forces you to connect ideas into a coherent story, and gaps become immediately visible. Amazon famously banned PowerPoint in product meetings, replacing it with six-page narrative memos, and the PR/FAQ is the most structured expression of that writing-first culture.

Working Backwards sits in contrast to several other product frameworks. Lean Startup's build-measure-learn loop encourages rapid experimentation with MVPs, assuming you'll learn what customers want through iteration. Working Backwards argues that many costly pivots can be avoided by doing the hard thinking upfront, before any building begins. Design Thinking shares Working Backwards' empathy for the customer but focuses more on divergent exploration and prototyping. Working Backwards is more convergent: it asks you to commit to a specific customer narrative and then stress-test it through critique. Jobs-to-be-Done theory provides a complementary lens for understanding customer motivation, but it doesn't prescribe a specific artifact or decision-making process the way Working Backwards does with the PR/FAQ.

Since its origins at Amazon, the method has been adopted and adapted well beyond Seattle. Stripe, Twilio, and other developer-focused companies have adopted variations of the press release exercise. Product teams at startups use lightweight versions with a one-paragraph press release and a handful of FAQ questions to test ideas in a single afternoon. The core insight, that forcing yourself to articulate the customer's experience before you design the solution, has proven durable across industries, team sizes, and product types. The method works best when a product manager is facing genuine ambiguity about what to build, not when the solution is already well-understood and the challenge is execution. It rewards intellectual honesty, comfort with rewriting, and a willingness to kill ideas that sound exciting internally but produce unconvincing press releases.

For product managers specifically, Working Backwards provides something rare: a structured process for the fuzziest phase of product work, the moment before you commit to building. Most frameworks focus on prioritization (RICE, ICE), delivery (Scrum, Kanban), or validation (Lean Startup). Working Backwards focuses on the decision to pursue an idea at all, and it gives the product manager a concrete artifact to rally alignment around. Teams using Hamster can run the full PR/FAQ workflow with AI agents that help draft, critique, and iterate these documents before a single line of code is written.

## Core Principles

### Start from the customer, not the technology

Every initiative begins with a specific customer need, expressed in the customer's own language. The press release is written from the customer's perspective, not the company's. When teams skip this and start from a technology capability ('we have a new ML model, what can we do with it?'), they risk building impressive solutions to problems nobody has. The tradeoff is real: this discipline can feel slow when engineering teams are eager to build, and it requires product managers to resist internal enthusiasm until the customer story is airtight.

### Write it down in narrative form

Ideas must be expressed as written narratives, not slide decks or verbal pitches. Writing forces precision. A bullet point can say 'improve onboarding experience,' and everyone nods while imagining something different. A narrative paragraph must specify who the customer is, what they struggle with today, what changes, and why it matters to them.

Teams that skip narrative writing tend to discover misalignment much later, during development or at launch, when the cost of correction is highest. The tradeoff is that strong writing takes time and not every team member is a natural writer, which means the process can bottleneck on a few individuals.

### Iterate the document, not the product

The PR/FAQ should go through multiple rounds of feedback and revision before any building begins. It's dramatically cheaper to rewrite a paragraph than to refactor a codebase. Amazon teams routinely revise PR/FAQs five or more times. Teams that treat the first draft as 'good enough' lose most of the method's value, because the real insight emerges from critique sessions that expose flawed assumptions.

The tradeoff is that extensive iteration on documents can feel frustrating to action-oriented teams who want to start shipping.

### Make the benefits concrete and measurable

The press release must state specific, quantifiable benefits to the customer, not vague improvements. 'Saves time' is not a benefit. 'Reduces monthly expense reporting from 4 hours to 15 minutes' is a benefit. This specificity forces the product manager to commit to outcomes that can later be validated.

When teams use abstract language, they give themselves room to declare victory regardless of actual impact, which undermines the entire purpose of the exercise.

### Address hard questions early through the FAQ

The FAQ section is not an afterthought. It's where the most important thinking happens. External FAQs surface whether the product actually solves the customer's problem. Internal FAQs force the team to confront cost, feasibility, legal risk, cannibalization, and competitive response before committing resources.

Teams that write only the press release and skip the FAQ tend to build products that look compelling on paper but collapse under scrutiny from engineering, legal, or finance. The FAQ is the mechanism that converts optimism into planning.

### Separate the decision to pursue from the decision to build

Working Backwards creates a clean gate between 'should we do this?' and 'how should we build this?' The PR/FAQ answers the first question. Detailed technical design, sprint planning, and resourcing answer the second. When these decisions are conflated, sunk cost bias takes over: teams build things because they've already started, not because the customer case is strong. The tradeoff is that this separation can add calendar time before development starts, which creates tension in organizations that measure velocity by output.

### Kill ideas that produce weak press releases

If you cannot write a compelling, specific, honest press release for an idea after several attempts, that is a strong signal the idea is not worth pursuing. This is the most uncomfortable principle because it means telling a senior leader or excited team that their idea doesn't survive the narrative test. Organizations that lack the cultural safety to kill ideas in the document phase end up building products nobody uses, which is a far more expensive failure. The discipline to say 'this doesn't work on paper' is what gives the method its power.

## Steps

1. **Step 1: Identify the specific customer problem**
   Before writing anything, clearly articulate who the customer is and what problem they face today. Be specific: 'marketing managers at mid-size e-commerce companies who spend 6+ hours per week manually compiling performance reports from five different analytics tools' is useful. 'Businesses that want better analytics' is not. Talk to actual customers or review support tickets, forum posts, and sales call recordings to ground this in reality rather than assumption.

You've done this step well when you can describe the customer's current pain in their own words, with enough specificity that a stranger could identify whether a given person matches the description. A common mistake is defining the customer too broadly ('everyone who uses the internet') because it makes the subsequent press release impossibly vague.

2. **Step 2: Draft the mock press release**
   Write a one-page press release announcing the finished product as if it has already launched. The structure follows a standard press release format: a headline that names the customer benefit, a subheadline summarizing the product, a dateline, a problem paragraph, a solution paragraph, a quote from a company leader, a description of how the product works, a quote from a customer, and a call to action. Write it in plain, jargon-free language that a customer could understand. ').

Resist the temptation to list features. Focus on the experience and the outcome. This draft will feel rough, and that's expected. The value emerges through revision, not through getting it right the first time.

3. **Step 3: Write the external FAQ**
   List five to ten questions a customer would ask after reading the press release. These should include pricing, availability, compatibility, migration from existing solutions, data privacy, and support. Answer each one directly and honestly. If you don't know the answer, write 'TBD' and flag it as a risk, because each TBD represents an unresolved decision that will eventually need resolution.

The external FAQ tests whether you've thought through the customer's full decision journey, not just the moment of first excitement. You know this section is done when a skeptical customer reading it would have no major unanswered concerns. A common variation is to segment FAQs by customer persona if the product serves multiple audiences with different concerns.

4. **Step 4: Write the internal FAQ**
   This section addresses the questions your internal stakeholders will raise: engineering feasibility, cost projections, timeline, legal and compliance risks, competitive response, cannibalization of existing products, and organizational capability gaps. The internal FAQ is often longer and more detailed than the external FAQ because it's doing the heaviest analytical work. Each answer should include evidence or reasoning, not just assertions. 'We believe this is technically feasible' is weak.

'The core technology exists in our recommendation engine; the primary new work is the API layer, estimated at 6-8 engineer-weeks based on a spike completed in Q3' is strong. This step is where many weak ideas die, and that's by design. Watch for the temptation to downplay risks in order to keep the idea alive.

5. **Step 5: Circulate for written critique**
   Share the complete PR/FAQ document with a cross-functional group: engineering leads, designers, finance, marketing, legal, and senior leadership as appropriate. Ask reviewers to read the document in full before the review meeting and to prepare written feedback. At Amazon, review meetings begin with silent reading, even if the document was pre-circulated, to ensure everyone has the full context before discussion. Written critique is superior to verbal critique because it forces reviewers to commit to specific observations and prevents the loudest voice from dominating.

You know this step is working when reviewers surface assumptions you hadn't considered and ask questions your FAQ doesn't yet answer.

6. **Step 6: Revise based on feedback**
   Rewrite the PR/FAQ incorporating the strongest critiques. This is not a cosmetic editing pass. Substantive feedback should change the scope, the customer definition, the stated benefits, or even the fundamental premise of the product. Expect to go through three to five revision cycles for significant initiatives.

Each cycle should result in a tighter, more honest, more specific document. The most common failure here is treating critique as adversarial rather than collaborative. If a reviewer exposes a fatal flaw in the customer narrative, that's a success for the process, even though it feels like a setback. Stop revising when new review sessions produce minor refinements rather than structural changes.

7. **Step 7: Make the go/no-go decision**
   Present the final PR/FAQ to the decision-makers who can approve resourcing. The document itself is the primary input to the decision, not a supplementary deck or a verbal summary. Decision-makers should be able to approve, reject, or request further iteration based on the document alone. If the decision is 'go,' the PR/FAQ becomes the north star for the project: design decisions, scope negotiations, and launch criteria all reference back to the customer experience described in the press release.

If the decision is 'no-go,' archive the document. Many good ideas are simply not the right idea at the right time, and a well-written PR/FAQ that was rejected can be revisited when circumstances change.

## When to Use

- When your team has multiple potential product directions and no shared clarity about which one will create the most customer value. The PR/FAQ forces each option into a concrete narrative that stakeholders can compare side-by-side, which is far more effective than debating abstract strategies in meetings.
- When you're building a net-new product or entering a new market where you don't have existing usage data to guide decisions. Without behavioral signals to analyze, the Working Backwards process substitutes rigorous upfront thinking about the customer experience for the metrics you don't yet have.
- When your organization suffers from 'solution-first' culture, where engineering or leadership regularly shows up with technology ideas and expects the product manager to find a customer problem for them. The PR/FAQ gives the product manager a structured, respected mechanism to redirect the conversation toward customer outcomes.
- When a product initiative requires significant cross-functional investment (engineering, design, marketing, legal, partnerships) and alignment failures during development would be extremely costly. The PR/FAQ serves as a single artifact that every function can react to before resources are committed.
- When you're a product manager preparing to pitch an initiative to senior leadership and need a document format that communicates customer value, addresses risks, and demonstrates thorough thinking in a compact package. The PR/FAQ is purpose-built for this kind of high-stakes internal communication.

## When Not to Use

- When the problem and solution are both well-understood and the primary challenge is execution speed. For incremental improvements, bug fixes, or known feature gaps where customers are explicitly requesting a specific capability, the overhead of a full PR/FAQ process adds friction without adding insight. The method's value comes from resolving ambiguity, and when ambiguity is low, it becomes bureaucracy.
- When you need rapid experimentation to discover what customers want through observed behavior rather than imagined scenarios. If you're in an early-stage startup running daily experiments with a handful of users, the build-measure-learn loop will teach you things that no amount of narrative writing can anticipate. Working Backwards assumes you have enough customer understanding to write a credible press release, and sometimes you simply don't yet.
- When your organization lacks the cultural willingness to kill ideas based on weak documents. If leadership will override the PR/FAQ process and greenlight pet projects regardless of the narrative quality, the method becomes theater. Teams go through the motions of writing press releases for ideas that were never at risk of being rejected, which wastes time and erodes trust in the process.
- When the product is a platform or infrastructure component whose value is indirect and difficult to express in customer-facing language. A press release announcing a new internal data pipeline or a refactored API gateway will read awkwardly because the 'customer' is another engineering team, and the 'benefit' is reduced latency or improved reliability. These are real and important, but the PR/FAQ format distorts more than it clarifies in this context.
- When your team is smaller than three people and communication overhead is near zero. The PR/FAQ's primary function is to create alignment across people with different mental models. If your entire team is two engineers and a designer sitting next to each other, a whiteboard conversation may achieve the same clarity in twenty minutes that a PR/FAQ achieves in two days.

## Skills

This method includes the following skills:

- [Iterating PR/FAQ Documents Through Multiple Feedback Cycles](../../skills/iterating-pr-faq-documents-through-feedback/SKILL.md) — How to revise and strengthen a PR/FAQ document through successive rounds of leadership and cross-functional feedback, knowing when the document is ready to greenlight development.
- [Drafting the FAQ Section of a PR/FAQ Document](../../skills/drafting-frequently-asked-questions-documents/SKILL.md) — How to write both external (customer-facing) and internal (stakeholder-facing) FAQs that stress-test assumptions, address risks, and surface hard questions early in the product process.
- [Running PR/FAQ Review and Critique Sessions](../../skills/running-pr-faq-review-meetings/SKILL.md) — How to facilitate Amazon-style narrative review meetings where stakeholders silently read the PR/FAQ document and then provide rigorous, structured feedback to sharpen the product concept.
- [Identifying Minimum Requirements by Working Backwards from Launch](../../skills/identifying-minimum-lovable-requirements/SKILL.md) — How to use the Working Backwards process to ruthlessly scope down to the minimum set of technology, infrastructure, and features needed for a viable customer experience.
- [Using Working Backwards Thinking in Product Manager Interviews](../../skills/using-working-backwards-in-product-interviews/SKILL.md) — How to apply customer-obsessed, Working Backwards reasoning to answer product sense, strategy, and prioritization questions in product manager interviews.
- [Writing Internal Press Releases for Product Concepts](../../skills/writing-internal-press-releases/SKILL.md) — How to craft a compelling, customer-centric internal press release that articulates the product vision, target customer, problem, and solution before any development begins.
- [Defining the Desired Customer Experience Before Building](../../skills/defining-the-customer-experience-backwards/SKILL.md) — How to start from the ideal end-state customer experience and systematically work backwards to identify the features, services, and technology required to deliver it.

## FAQ

**What is Working Backwards in simple terms?**

Working Backwards means writing a fake press release announcing your product as if it's already launched, then using that document to figure out what you actually need to build. Instead of starting with technology and looking for a use case, you start with the customer experience and reason backwards to the technical requirements. The process forces you to answer 'why would a customer care?' before you answer 'how do we build it?'

**Working Backwards vs Lean Startup: which should a product manager use?**

They solve different problems and work well together. Working Backwards is strongest before you commit to building, when you need to decide whether an idea is worth pursuing at all. Lean Startup is strongest after you commit, when you need to validate specific hypotheses through experiments with real users. A common approach is to use Working Backwards to define the vision and scope, then use build-measure-learn loops to iterate on the execution.

If you're in a domain where you deeply understand the customer, Working Backwards gives you more leverage upfront. If the customer problem itself is uncertain, Lean experimentation may be faster.

**Does Working Backwards work for small teams and startups?**

Yes, with adaptation. A two-person startup doesn't need a five-round review process, but spending two hours writing a one-paragraph press release and five tough FAQ questions can save weeks of building something nobody wants. The core insight (articulate the customer experience before designing the solution) scales down easily. The formal review process and lengthy FAQ sections are what you scale up as the team and the stakes grow.

Many successful startups use a lightweight version they call a 'mini PR/FAQ' that fits on a single page.

**Why does Working Backwards fail in practice?**

The three most common failure modes are: teams treat the PR/FAQ as a formality rather than a genuine decision-making tool, so leadership approves ideas regardless of document quality. Second, teams write the press release after they've already decided what to build, which turns it into a post-hoc justification exercise instead of an exploration tool. Third, the organization penalizes people for killing ideas in the document phase, so nobody writes honest FAQs. All three failures share a root cause: the culture doesn't actually support the discipline the method requires.

**How does Working Backwards work alongside product roadmaps and OKRs?**

Working Backwards feeds into roadmaps and OKRs rather than replacing them. The PR/FAQ defines what you're building and why. The roadmap defines when. OKRs define how you'll measure success.

A strong workflow is: use Working Backwards to vet new initiatives before they earn a spot on the roadmap, then derive OKR key results from the measurable benefits stated in the press release. This prevents roadmaps from becoming wish lists and ensures OKRs are grounded in real customer outcomes rather than output metrics.

**Can Working Backwards be used for features, not just new products?**

Yes, though the document length should match the scope. A major new feature with cross-team dependencies warrants a full PR/FAQ. A smaller feature might need only a one-paragraph press release and three FAQ questions. The key test is: does this feature involve enough ambiguity about customer value that writing the press release would surface useful insights?

If yes, do it. If the customer value is obvious and the main challenge is technical execution, skip the ceremony and build.

**What makes a good PR/FAQ document versus a bad one?**

Good PR/FAQs are specific, honest, and written from the customer's point of view. They state concrete benefits with numbers, acknowledge real risks in the internal FAQ, and could be understood by someone outside the company. Bad PR/FAQs read like internal strategy memos full of jargon, make vague claims ('revolutionary experience'), dodge hard questions in the FAQ, and describe the technology before the customer problem. The fastest diagnostic: if you cover the product name and company name, can you still tell who the customer is and why they'd care?

If not, the document needs more work.

**How long does the Working Backwards process take?**

For a significant initiative, expect two to four weeks from first draft to go/no-go decision. The first draft typically takes one to three days. Each review-and-revise cycle takes two to four days including scheduling the review meeting. Most teams go through three to five cycles.

For smaller features using a lightweight version, the entire process can happen in a single afternoon. The investment pays for itself by preventing weeks or months of building the wrong thing. Teams that rush the document phase to 'save time' often spend that time many times over during development when misalignment surfaces.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
