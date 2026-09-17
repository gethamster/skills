---
name: defining-the-customer-experience-backwards
description: "This skill teaches you to articulate the ideal end-state customer experience as a concrete narrative, then systematically decompose it into the features, services, and technology required to deliver that experience, so you build only what matters."
metadata:
  homepage: https://tryhamster.com
  method: working-backwards
---

# Defining the Desired Customer Experience Before Building: What Is a Product Manager's First Move

> This skill teaches you to articulate the ideal end-state customer experience as a concrete narrative, then systematically decompose it into the features, services, and technology required to deliver that experience, so you build only what matters.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 2-4 hours for a first draft; 1-2 additional sessions for decomposition and validation |
| Outcome | You produce a customer experience narrative and a decomposed requirements map that directly links every proposed feature or service to a specific moment in the customer journey, eliminating speculative work and aligning your team on what to build first. |
| Prerequisites | Basic understanding of the Working Backwards framework and the PR/FAQ document format, A clearly identified target customer segment with at least preliminary research (interviews, surveys, or support data), Familiarity with writing internal press releases or equivalent vision documents, Enough product domain knowledge to distinguish feasible from speculative technology choices |
| Part of | [Working Backwards](../../methods/working-backwards/METHOD.md) |

## Overview

If you have ever asked what is a product manager truly responsible for, the answer often comes down to one thing: ensuring the team builds something customers actually want. Defining the desired customer experience before building is the foundational skill that makes that possible. Instead of starting with a feature list, a technology stack, or a competitive reaction, you begin by describing the world as the customer will experience it after your product ships. This narrative becomes the gravity well that pulls every subsequent decision into alignment. The skill sits at the heart of the [Working Backwards](https://tryhamster.com/methods/working-backwards) framework, which treats customer experience as the non-negotiable starting point for product development.

The concrete artifact you produce is twofold. First, a customer experience narrative: a present-tense story of roughly 500 to 1,000 words that walks through a specific customer's journey from the moment they encounter your product through the moment they realize its full value. Second, a decomposition map that breaks that narrative into discrete experience moments, then traces each moment back to a required capability (feature, service, integration, operational process, or technology). The map is typically structured as a table or spreadsheet with columns for the experience moment, the customer emotion or outcome at that moment, the capability required, the owner, and the current feasibility assessment.

This skill matters because it prevents the two most expensive failure modes in product development: building features nobody asked for, and building the right features in the wrong order. When you define the experience first, you create an objective standard against which every scope decision, technical tradeoff, and launch criterion can be evaluated. Teams that skip this step tend to accumulate features that individually make sense but collectively deliver a disjointed experience. The narrative forces coherence. It also gives you a communication tool that works across engineering, design, marketing, and leadership, because everyone can read a story about a customer, but not everyone can read an architecture diagram. What is a product manager without this skill? Someone managing a backlog instead of shaping a product.

## How It Works

The mental model behind this skill is straightforward but counterintuitive for teams trained to think in solutions. You are inverting the typical product development sequence. Most teams move from technology to features to experience: "We have this API, so we can build this feature, so the customer gets this benefit." Working backwards reverses the chain: "The customer needs this experience, which requires this capability, which demands this technology." The inversion matters because it changes what gets cut when resources are scarce. In a technology-forward approach, the experience is the first casualty. In an experience-backward approach, non-essential technology is the first casualty.

The narrative you write is not a user story, a job story, or a requirements document. It is closer to a short piece of fiction in which the protagonist is your target customer. You describe specific details: the customer's name, their context, the moment they encounter your product, how the product behaves, what they feel, what they do next, and the measurable outcome they achieve. The specificity is the mechanism. Vague narratives produce vague requirements. A sentence like "Sarah opens the app and sees her dashboard" is weaker than "Sarah opens the app at 7:14 AM while standing in line at the coffee shop, and within two seconds she sees that her overnight batch job succeeded, with the three metrics she cares about displayed without scrolling." The second version generates testable requirements: load time under two seconds, above-the-fold metric display, batch job status surfaced immediately.

The decomposition step is where the skill connects to the rest of the [Working Backwards](https://tryhamster.com/methods/working-backwards) framework. Each sentence or clause in your narrative implies at least one capability. You go through the narrative line by line and ask, "What must be true for this sentence to be accurate?" The answer is a requirement. Some requirements are features. Some are operational processes (like a human review step). Some are partnerships or integrations. Some are performance thresholds. By extracting them systematically, you build a requirements set that is traceable, meaning every requirement points back to a specific customer experience moment, and every experience moment is covered by at least one requirement.

The reason this works better than brainstorming features is that narratives are self-constraining. When you write a story about a real person doing a real task, you naturally exclude edge cases, power-user fantasies, and competitive-parity features that do not serve the story. The narrative acts as a filter. If a proposed feature does not appear in the story, it needs a strong justification to survive. This is also why iteration matters so much. Your first narrative will contain assumptions that are wrong. Sharing it with customers, stakeholders, and engineers exposes those assumptions quickly, because people react to stories with intuition and specificity that they rarely bring to abstract feature discussions.

## Step-by-Step Guide

### Step 1: Step 1: Select and Profile Your Target Customer

Choose one specific customer segment to write about. Do not try to cover multiple segments in a single narrative. Pull together existing research: interview transcripts, support tickets, survey verbatims, analytics showing current behavior patterns, and any persona documents your team already has. Write a short profile (3 to 5 sentences) that captures this customer's context: their role, their environment, the task they are trying to accomplish, and the current pain they experience.

Use a real name, even if fictional, to make the narrative concrete. This profile becomes the opening context for your experience narrative.

> **Pro tip:** If you have no customer research, conduct three quick 20-minute interviews before writing the narrative. Even a small amount of direct customer input dramatically improves the accuracy of your story and prevents the entire exercise from becoming internal projection.

### Step 2: Step 2: Define the Measurable Outcome the Customer Achieves

Before writing the journey, write the ending. State, in one to two sentences, the specific outcome the customer achieves by the end of the experience. This should be measurable or observable, not aspirational. "Sarah reduced her weekly reporting time from four hours to twenty minutes" is good.

"Sarah feels empowered" is not. The outcome is the anchor for everything else you write. Every scene in your narrative should move the customer closer to this outcome. If you find yourself writing scenes that do not connect to the outcome, those scenes are candidates for removal.

> **Pro tip:** Test your outcome statement by asking: could a customer confirm in a survey whether this happened? If the answer is no, the outcome is too vague.

### Step 3: Step 3: Write the End-to-End Customer Experience Narrative

Write a present-tense story of 500 to 1,000 words that walks through the customer's journey from discovery to value realization. Cover these beats: how the customer first encounters the product, their first interaction, the moment of initial value (the "aha" moment), the ongoing usage pattern, and the moment they achieve the outcome you defined in Step 2. Include sensory and contextual details: time of day, device, location, emotional state, specific data they see, specific actions they take. Write as though you are narrating a documentary about this person's day.

Avoid mentioning internal feature names, technical architecture, or implementation details. Describe behavior and outcomes, not systems.

> **Pro tip:** Read your narrative aloud. If any sentence sounds like a product requirement document ("the system shall..."), rewrite it as something a customer would actually experience. The narrative should be readable by someone with no technical background.

### Step 4: Step 4: Identify Experience Moments in the Narrative

Go through your narrative sentence by sentence and highlight each distinct experience moment. An experience moment is a point where the customer does something, sees something, or feels something that matters to the journey. Mark each one with a sequential number. Most narratives yield between 12 and 30 experience moments.

Create a table or spreadsheet with columns: Moment Number, Quote from Narrative, Customer Action or Observation, Desired Customer Emotion or Outcome. Fill in the first three columns by extracting directly from the text. Fill in the emotion or outcome column by inferring what the customer needs to feel or achieve at that point for the story to continue as written.

> **Pro tip:** If two consecutive moments feel like the same thing, they probably are. Merge them. If one moment feels like it contains two distinct things ("she uploads the file and immediately sees the results"), split it. Granularity matters because each moment becomes a separate requirement to validate.

### Step 5: Step 5: Decompose Each Moment into Required Capabilities

" Write down every capability required. Capabilities fall into several categories: product features (what the software does), performance requirements (how fast, how reliable), content or data requirements (what information must be available), operational requirements (human actions like onboarding calls or content moderation), integration requirements (connections to other systems), and design requirements (visual or interaction qualities). Add a column to your table for each capability. One moment may require multiple capabilities.

Be specific. "Fast loading" is not a capability. "Dashboard renders with live data in under two seconds on a 4G mobile connection" is a capability.

> **Pro tip:** Invite an engineer to co-author this step. Product managers tend to underestimate technical requirements, and engineers tend to surface constraints and dependencies that change the feasibility picture early, before anyone has written code.

### Step 6: Step 6: Assess Feasibility and Identify Gaps

For each capability, add a feasibility column with three values: Exists (we already have this), Buildable (we can create this within our current resources and timeline), and Unknown (we need research or a spike to determine feasibility). Capabilities marked Unknown are your biggest risks. Flag them immediately and assign someone to investigate. Capabilities marked Exists should be verified, not assumed.

Check with the relevant team that the existing capability actually meets the specific requirements of the experience moment. Many "we already have that" claims fall apart when tested against the narrative's specificity.

> **Pro tip:** Color-code your table: green for Exists, yellow for Buildable, red for Unknown. The visual pattern immediately shows you where your risk is concentrated. If one section of the narrative is mostly red, that section may need to be simplified or phased.

### Step 7: Step 7: Prioritize by Customer Impact and Dependency

Not all experience moments are equally important. Rank them by asking two questions for each: How much does this moment contribute to the customer reaching the defined outcome? And how many other moments depend on this one? Moments that are both high-impact and high-dependency are your non-negotiables.

They form the critical path of your product. Moments that are low-impact and low-dependency are candidates for deferral to a later version. Create a simple 2x2 matrix with Impact on one axis and Dependency on the other. Place each moment in the appropriate quadrant.

The top-right quadrant (high impact, high dependency) defines your minimum viable experience.

> **Pro tip:** Resist the temptation to put everything in the high-impact quadrant. If more than 40% of moments end up there, you have not prioritized. Force-rank within the quadrant to create a true ordered list.

### Step 8: Step 8: Validate with Stakeholders and Customers

Share the narrative with three audiences. First, show it to two or three target customers and ask them to mark any moment that feels unrealistic, unnecessary, or missing. Second, share it with engineering leads and ask them to review the feasibility assessments and flag any capabilities that are harder or easier than estimated. Third, present it to business stakeholders and confirm that the defined outcome aligns with business goals.

Collect feedback in a structured format: for each moment, record whether each reviewer thinks it is essential, nice-to-have, or unnecessary. Use this feedback to revise both the narrative and the decomposition map.

> **Pro tip:** When sharing with customers, do not explain the narrative. Hand it to them and let them read it silently. Their unprompted reactions reveal more than their answers to your questions. Watch for confusion, excitement, or skepticism, and note exactly which sentences triggered each reaction.

### Step 9: Step 9: Produce the Final Experience Requirements Document

Combine your revised narrative and decomposition map into a single document. The document should have three sections: the customer experience narrative (revised based on feedback), the experience moment decomposition table (with capabilities, feasibility, and priority), and a summary of the minimum viable experience (the set of moments and capabilities required for the first version). This document becomes the input to your team's roadmap, sprint planning, and technical design discussions. Every feature request, bug priority, and scope negotiation should be evaluated against this document.

If a proposed change does not improve a specific experience moment, it needs strong justification to proceed.

> **Pro tip:** Store this document in a shared location where everyone on the team can access it. Reference it by name in sprint planning and design reviews. The document loses its power the moment it becomes a file nobody opens. Print the narrative and pin it to the wall if your team is co-located.

## Best Practices

- Write the narrative in present tense, as though the product already exists and the customer is using it right now. Present tense forces specificity about what the customer sees and does, while future tense ("the customer will be able to...") invites vagueness. If you catch yourself drifting into future tense, it usually means you are not yet clear on how the experience works.
- Limit your narrative to one customer segment per document. Attempting to write a single narrative that serves multiple segments produces a generic story that generates generic requirements. If you serve three distinct segments, write three separate narratives and decompose each independently. You can merge the requirements later, but the narratives must stay segment-specific to maintain their constraining power.
- Include moments of friction and recovery, not just the happy path. Real customer experiences include confusion, errors, and delays. Your narrative should describe what happens when the customer does something unexpected or when the system encounters an edge case. These friction moments often reveal the most important capabilities, because a product that handles errors gracefully earns more trust than one that only works when everything goes right.
- Revisit and update the narrative quarterly, or whenever a significant shift in customer understanding occurs. Customer needs evolve. A narrative written six months ago may describe an experience that is no longer relevant. Treat the document as a living artifact, not a one-time exercise.

Teams that update their narratives regularly catch drift between what they are building and what customers actually need.
- Keep capability descriptions at the interface level, not the implementation level. "Dashboard loads in under two seconds" is an interface-level capability. "Use Redis caching with a 30-second TTL" is an implementation detail. The decomposition should constrain what the product must do, not how engineering builds it.

This preserves engineering's autonomy to choose the best implementation while ensuring the customer experience is non-negotiable.
- Use the decomposition table as your scope negotiation tool in every planning meeting. When someone proposes adding a feature, check whether it maps to an experience moment. When someone proposes cutting a feature, check which experience moment it supports. This creates an objective, shared standard for scope decisions that reduces political negotiation and anchors decisions in customer value.
- Assign an explicit owner to each Unknown feasibility item within 48 hours of completing the decomposition. Unknown items that sit unassigned become invisible risks that surface during development at the worst possible time. The owner's job is not to solve the problem but to return a Buildable or Not Buildable assessment within a defined timeframe, usually one to two weeks.

## Common Mistakes

- **Writing the narrative from the product's perspective instead of the customer's perspective** — This mistake looks like a narrative full of sentences that describe what the product does ("The system processes the upload and generates a report") instead of what the customer experiences ("Marco sees his report appear with the three charts he requested, each labeled with this morning's data"). It happens because product managers are deeply familiar with the system and default to describing its behavior. Catch it by reading the narrative and highlighting every sentence where the subject is "the system," "the product," or "the feature." Replace each with a sentence where the subject is the customer. The narrative should read like a story about a person, not a story about software.
- **Making the narrative too abstract or aspirational to decompose** — A narrative that says "the customer easily completes their task and is delighted" cannot be decomposed because it does not specify what the task is, what "easily" means, or what triggers the delight. This happens when the writer tries to avoid committing to specifics too early, mistaking vagueness for flexibility. The signal is a decomposition step that produces fewer than ten experience moments from a full-page narrative. Fix it by going back and adding concrete details: times, numbers, specific screens, specific data, specific decisions the customer makes.

If you cannot add specifics, you probably need more customer research before writing the narrative.
- **Decomposing into features instead of capabilities** — This mistake manifests as a decomposition table full of entries like "notification system" or "dashboard widget" instead of "customer receives a timely alert within 30 seconds of the triggering event" or "customer sees their top three metrics without scrolling on a mobile screen." It happens because the team jumps to solution mode during decomposition. The consequence is that the requirements lose their traceability to the customer experience, and alternative implementations get excluded prematurely. Catch it by checking whether each capability in your table could be satisfied by more than one technical approach. If it can only be satisfied by one specific feature, you have probably written a solution, not a capability.
- **Skipping the feasibility assessment and treating all capabilities as equally buildable** — Teams that skip feasibility assessment discover during sprint three that a core capability requires a technology they have never used, a partnership that takes months to negotiate, or a data set that does not exist. This happens because the narrative exercise feels creative and exciting, while feasibility assessment feels like a buzzkill. The signal is a decomposition table with no Unknown entries, which almost always means nobody asked hard questions. Fix it by requiring each capability to be reviewed by someone who would actually build or deliver it.

If the builder has not signed off on the feasibility, mark it Unknown.
- **Writing one narrative and never revising it based on feedback** — The first draft of your narrative contains assumptions that are wrong. Every first draft does. Teams that treat the initial narrative as final end up building toward an experience that does not match reality. This mistake is especially common when the narrative was written by a senior leader whose vision is treated as unchallengeable.

The signal is a narrative that has not changed after being shared with customers or engineers. Fix it by building explicit revision checkpoints into your process: one revision after customer feedback, one after engineering feasibility review, and one after the first sprint of building. Track changes so the team can see how the narrative evolved.
- **Conflating the experience narrative with the internal press release** — The experience narrative and the internal press release (from the PR/FAQ process) serve different purposes. The press release announces the product to the world and focuses on the value proposition. The experience narrative describes one customer's detailed journey and focuses on the interaction sequence. Teams that merge them end up with a document that is too high-level for decomposition and too detailed for stakeholder communication.

Keep them as separate artifacts. " Both feed into the Working Backwards process, but at different stages.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/working-backwards/METHOD.md) — Working Backwards

## Related Skills

- [Iterating PR/FAQ Documents Through Multiple Feedback Cycles](../iterating-pr-faq-documents-through-feedback/SKILL.md)
- [Drafting the FAQ Section of a PR/FAQ Document](../drafting-frequently-asked-questions-documents/SKILL.md)
- [Running PR/FAQ Review and Critique Sessions](../running-pr-faq-review-meetings/SKILL.md)
- [Identifying Minimum Requirements by Working Backwards from Launch](../identifying-minimum-lovable-requirements/SKILL.md)
- [Using Working Backwards Thinking in Product Manager Interviews](../using-working-backwards-in-product-interviews/SKILL.md)
- [Writing Internal Press Releases for Product Concepts](../writing-internal-press-releases/SKILL.md)
