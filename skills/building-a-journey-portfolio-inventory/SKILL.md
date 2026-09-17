---
name: building-a-journey-portfolio-inventory
description: "This skill teaches you how to systematically catalog every customer journey in your organization into a single, structured portfolio that becomes the foundation for ecosystem-level analysis, prioritization, and cross-journey optimization."
metadata:
  homepage: https://tryhamster.com
  method: ecosystem-journey-framework
---

# Building a Customer Journey Inventory for Your Journey Portfolio

> This skill teaches you how to systematically catalog every customer journey in your organization into a single, structured portfolio that becomes the foundation for ecosystem-level analysis, prioritization, and cross-journey optimization.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Intermediate |
| Time to Learn | 4-8 hours for initial inventory, 2-3 weeks for full organizational validation |
| Outcome | You produce a comprehensive, structured registry of every customer journey in your organization, complete with ownership, hierarchy levels, and metadata, enabling you to identify gaps, overlaps, and prioritization opportunities at the ecosystem level. |
| Prerequisites | Basic understanding of customer journey mapping concepts, Familiarity with customer lifecycle stages (awareness, acquisition, onboarding, retention, advocacy), Access to existing journey maps, service blueprints, or process documentation across departments, Stakeholder relationships across at least 3 functional teams (marketing, product, support, sales) |
| Part of | [Ecosystem Journey Framework](../../methods/ecosystem-journey-framework/METHOD.md) |

## Overview

A customer journey inventory is the foundational artifact of the [Ecosystem Journey Framework](https://tryhamster.com/methods/ecosystem-journey-framework). It is a comprehensive catalog of every journey a customer takes with your organization, structured with consistent metadata so you can analyze, compare, and manage journeys as a connected portfolio rather than isolated maps. Without this inventory, teams operate with fragmented visibility. Marketing knows about the acquisition journey, support knows about the escalation journey, and product knows about the onboarding journey, but nobody holds the full picture. The inventory closes that gap by collecting all journeys into one place with a shared vocabulary and structure.

The specific artifact you produce is a centralized registry, typically a structured spreadsheet, database, or journey management platform, where each row represents a distinct journey and each column captures a standardized attribute. These attributes include the journey name, a brief description, the owning team, the customer persona it serves, the lifecycle stage it belongs to, the channels involved, the current documentation maturity (undocumented, mapped, measured, managed), and the hierarchy level (L0 through L3) as defined in the Ecosystem Journey Framework. A well-built inventory for a mid-size SaaS company typically contains 40 to 120 distinct journeys. An enterprise with multiple product lines may catalog 200 or more.

The value of the inventory goes beyond documentation. It is the input for nearly every downstream activity in journey management: [prioritizing journeys for optimization](https://tryhamster.com/skills/prioritizing-journeys-for-optimization), [aligning teams around journey ownership](https://tryhamster.com/skills/aligning-teams-around-journey-ownership), and [identifying cross-journey insights](https://tryhamster.com/skills/identifying-cross-journey-insights). If the inventory is incomplete or inconsistently structured, every downstream decision inherits those gaps. Success looks like a registry that is comprehensive enough that no stakeholder can name a journey that is missing, structured enough that any entry can be compared to any other, and maintained enough that it stays current as journeys evolve. The inventory is never truly finished. It is a living document that grows and refines over time, but the initial build is the critical first step.

## How It Works

The core principle behind a customer journey inventory is that you cannot manage what you have not cataloged. Most organizations have journey knowledge scattered across Miro boards, Figma files, PowerPoint decks, Confluence pages, and the heads of individual employees. Some of this knowledge is documented. Much of it is tribal. The inventory process works by systematically extracting this distributed knowledge, normalizing it into a consistent structure, and surfacing the gaps nobody knew existed.

The inventory uses a flat registry structure rather than a hierarchical tree for the initial capture. This is deliberate. Hierarchy (L0 through L3 levels) is applied after capture, not during it. If you try to organize journeys into a hierarchy while you are still discovering them, you introduce premature structure that causes people to filter their contributions. They think, "This journey doesn't fit neatly into the hierarchy, so maybe it's not a real journey." By collecting everything flat first, you capture edge cases, unofficial workarounds, and shadow journeys that often represent the biggest experience gaps.

Each journey entry uses a standardized attribute schema. The schema serves two purposes. First, it forces specificity. A journey called "onboarding" is too vague. When you require the persona, lifecycle stage, and channels, that vague label becomes "new enterprise customer onboarding via CSM-led implementation," which is distinct from "self-serve trial user onboarding via in-app guides." Second, the schema enables comparison. When every journey has a documented owner, maturity level, and lifecycle stage, you can instantly see that your retention stage has 15 journeys with 3 owners while your advocacy stage has 2 journeys with zero owners.

The process works in three phases. Phase one is divergent collection, where you cast the widest possible net through document audits, stakeholder interviews, and workshop exercises. Phase two is convergence and deduplication, where you merge overlapping entries, split entries that are actually multiple journeys, and fill in missing attributes. Phase three is validation and hierarchy assignment, where cross-functional reviewers confirm completeness and you layer on the L0 through L3 structure from the [Ecosystem Journey Framework](https://tryhamster.com/methods/ecosystem-journey-framework). The reason validation must be cross-functional is that no single team sees more than 30 to 40 percent of all customer journeys. Marketing sees acquisition. Product sees usage. Support sees failure. Only the combined view reveals the full portfolio.

A common question is how granular to go. The answer depends on your hierarchy levels. L0 is the entire customer lifecycle. L1 represents major phases (acquisition, onboarding, usage, renewal). L2 captures distinct journeys within a phase (trial signup, demo request, organic content discovery). L3 breaks a journey into specific scenarios or variants (trial signup via mobile, trial signup via desktop with SSO). For the initial inventory, aim to capture L1 and L2 comprehensively. L3 detail can be added later as you prioritize specific journeys for deeper analysis.

## Step-by-Step Guide

### Step 1: Step 1: Audit existing journey documentation

Before talking to anyone, gather every existing journey map, service blueprint, process flow, and customer experience document you can find. Search shared drives, Confluence spaces, Miro boards, Figma files, and presentation archives. Check with CX, UX, product, marketing, sales, and support teams. Create a simple log of what you find: document name, format, date created, author, and which journey it describes.

Many organizations discover they have 5 to 15 existing journey artifacts scattered across teams, some current, many outdated. This audit gives you a starting inventory of documented journeys and, equally important, reveals which teams have journey mapping habits and which do not. The absence of documentation from a team is a signal that their journeys are undocumented, not that they do not exist.

> **Pro tip:** Search for common file names like 'customer journey,' 'user flow,' 'service blueprint,' 'experience map,' and 'process flow.' Also search for persona names and lifecycle stage terms. Documentation often lives under unexpected labels.

### Step 2: Step 2: Define your inventory attribute schema

Before you start collecting journey entries, define the exact attributes you will capture for each one. A strong starting schema includes: journey ID (a unique identifier), journey name, brief description (1-2 sentences), customer persona, lifecycle stage, primary channels involved, journey owner (person or team), documentation status (undocumented, sketched, fully mapped, measured, managed), business impact estimate (high, medium, low), and a notes field. Write a short definition for each attribute so contributors interpret them consistently. For example, define exactly what your lifecycle stages are and provide examples.

' This schema is your data contract. Every journey entry must conform to it. Resist the temptation to add too many attributes initially. Eight to twelve attributes is the sweet spot.

You can always add columns later, but asking for 25 fields up front will slow collection to a halt.

> **Pro tip:** Create a one-page 'schema cheat sheet' with each attribute, its definition, and two example entries. Distribute this to every contributor before they start adding journeys. Misaligned definitions are the number one cause of inconsistent inventories.

### Step 3: Step 3: Conduct stakeholder collection workshops

Run 60-minute workshops with each major functional team to extract their journey knowledge. ' Capture each journey on a sticky note or spreadsheet row with just the name and a brief description. Do not try to fill in all attributes during the workshop. Focus on breadth.

A marketing team might surface 8 to 12 journeys (organic discovery, paid acquisition, webinar registration, content download, referral). A support team might surface 6 to 10 (ticket submission, escalation, knowledge base self-service, proactive outreach). Keep the energy divergent. When someone says 'I think that's the same as what James mentioned,' note it but do not merge yet.

Deduplication happens in a later step. Run separate workshops rather than one giant session so that quieter teams are not overshadowed by more vocal ones.

> **Pro tip:** Ask each participant to write down their journeys silently for 5 minutes before any group discussion. This prevents anchoring, where the first person to speak defines the frame and others only add incremental variations.

### Step 4: Step 4: Mine quantitative sources for hidden journeys

Workshops capture journeys that people think about consciously. But many journeys exist in behavioral data that nobody has named. Pull analytics data from your website, app, CRM, and support systems. Look for distinct behavioral sequences: what are the top 10 paths users take through your product?

What are the top 5 reasons customers contact support? What are the most common sequences in your CRM pipeline stages? Each distinct pattern may represent a journey that was not surfaced in workshops. For example, analytics might reveal that 15 percent of trial users follow a path nobody mentioned: they sign up, import data, hit an error, search the knowledge base, find nothing, and abandon.

That is a real journey with real business impact, but no team 'owns' it because it spans product, documentation, and support. Add these data-derived journeys to your inventory with a flag indicating they were identified through behavioral data rather than stakeholder input.

> **Pro tip:** Pay special attention to failure paths and abandonment sequences. Teams naturally think about the happy path journeys they designed. The journeys customers actually take when things go wrong are often the most impactful to optimize.

### Step 5: Step 5: Deduplicate and normalize entries

You now have a raw list from document audits, workshops, and data mining. This list will contain duplicates, overlaps, and inconsistent granularity. Go through the full list and identify entries that describe the same journey using different names. Marketing's 'lead nurture flow' and sales' 'prospect warming sequence' may be the same journey seen from different angles.

Merge true duplicates into single entries, noting all original names as aliases. Next, check granularity. Some entries will be too broad ('the customer experience') and need to be split. Others will be too narrow ('clicking the pricing page CTA') and need to be rolled up into a parent journey.

Apply your lifecycle stages as a sorting mechanism. Group all entries by stage and look for gaps. If you have 20 entries under acquisition and 2 under advocacy, either your advocacy journeys are genuinely sparse or you have a collection gap to investigate. Normalize all entries to your attribute schema, filling in every field.

For attributes you cannot determine yet, mark them as 'TBD' rather than leaving them blank.

> **Pro tip:** Create an aliases column in your inventory. When you merge duplicates, record all the original names. This helps future contributors find existing entries instead of creating new duplicates, and it preserves the vocabulary each team uses naturally.

### Step 6: Step 6: Assign hierarchy levels (L0-L3)

With a clean, deduplicated list, you can now layer on the hierarchy structure from the Ecosystem Journey Framework. Start at L0, which is the entire customer lifecycle from first awareness to advocacy or churn. Your L1 journeys are the major phases: awareness, acquisition, onboarding, usage, retention, expansion, and advocacy. These should already align with your lifecycle stages.

L2 journeys are the distinct experiences within each phase. ' For the initial inventory, ensure every entry has an L1 and L2 classification. L3 detail can be added selectively for high-priority journeys. Add a 'hierarchy level' column to your schema and tag each entry.

Verify that every L1 phase has at least 3 L2 journeys. Fewer than that suggests incomplete collection.

> **Pro tip:** Do not force every journey into a single L1 phase. Some journeys genuinely span multiple phases. For example, a 'proactive health check' journey might span usage and retention. Tag it with its primary phase and note the secondary phase in your notes column.

### Step 7: Step 7: Validate through cross-functional review

Share the complete inventory with representatives from every team that contributed, plus at least two teams that did not participate in workshops (finance, legal, and partnerships are commonly overlooked). Ask each reviewer three specific questions. First, is any journey your team touches missing from this list? Second, are any entries inaccurately described or attributed?

Third, do the ownership assignments reflect reality? Give reviewers one week to respond. Track their additions and corrections in a changelog. This review typically surfaces 10 to 20 percent more journeys, mostly in areas like billing, compliance, partner channels, and internal handoff processes.

It also catches ownership disputes, where two teams both claim (or both deny) ownership of a journey. Document these disputes rather than resolving them in this step. Ownership alignment is a separate skill. After incorporating reviewer feedback, circulate the updated inventory one more time for final confirmation.

> **Pro tip:** Frame the review as 'help us find what is missing' rather than 'approve this list.' The first framing activates constructive thinking. The second framing leads to quick rubber-stamping with no real scrutiny.

### Step 8: Step 8: Establish a maintenance cadence

An inventory that is not maintained becomes stale within one quarter. Define who owns the inventory as a living document. This is typically a CX program manager, journey management lead, or the person coordinating the Ecosystem Journey Framework initiative. Set a quarterly review cycle where the owner checks for new journeys (launched products, new channels, organizational changes), retired journeys (deprecated features, sunset products), and attribute updates (ownership changes, maturity improvements).

Create a simple intake process so any team member can submit a new journey for inclusion. ' Tag each inventory entry with a 'last reviewed' date so you can identify stale entries. Any entry not reviewed in 6 months should be flagged for attention. The quarterly review should take 2 to 4 hours for a portfolio of 50 to 100 journeys once the initial build is complete.

> **Pro tip:** Tie the inventory review to an existing organizational rhythm, like quarterly business reviews or planning cycles. Standalone review meetings get deprioritized and skipped. Piggybacking on established meetings ensures consistency.

## Best Practices

- Use a consistent naming convention for journey names that includes the persona and the action, such as 'Enterprise Buyer: Evaluating Pricing Options' rather than just 'Pricing Journey.' Consistent naming prevents duplicates and makes the inventory scannable. Without a naming convention, you will end up with 'Onboarding,' 'New User Onboarding,' 'Customer Onboarding Flow,' and 'Getting Started Experience' as four separate entries for the same journey.
- Capture journey entries at L2 granularity during initial collection and resist the urge to go deeper until you have validated the full portfolio. Going to L3 detail too early creates an inventory so large that it becomes unmanageable, and you end up spending weeks documenting micro-variations of low-priority journeys while major gaps in high-impact areas remain undiscovered.
- Separate the collection phase from the evaluation phase. When gathering journeys from stakeholders, do not simultaneously ask them to rate importance, assign scores, or debate whether something qualifies as a 'real' journey. Evaluation during collection causes self-censorship, where contributors filter out journeys they assume are unimportant. Collect everything first.

Evaluate after the inventory is complete.
- Include internal handoff journeys, not just customer-facing ones. The journey from 'sales closes deal' to 'CSM begins onboarding' is invisible to the customer but profoundly affects their experience. These internal transitions are where most journey friction hides, and they are almost never captured unless you explicitly ask for them.
- Document the 'documentation status' attribute honestly. If a journey has never been mapped, mark it as undocumented. If it was mapped two years ago and never updated, mark it as stale. Inflating maturity levels creates false confidence and causes teams to skip journeys that desperately need attention. The inventory should reveal gaps, not hide them.
- Store the inventory in a tool that supports filtering, sorting, and shared access. A static PDF or slide deck cannot function as a working inventory. Use a shared spreadsheet at minimum, or a journey management platform if available. The inventory must be queryable. Stakeholders should be able to filter by lifecycle stage, by owner, or by maturity level and instantly see the relevant subset.
- Assign a provisional owner to every journey entry, even if ownership is disputed or unclear. Unowned journeys are invisible journeys. Assigning a provisional owner creates accountability for follow-up, even if the final ownership decision happens later through the team alignment process.

## Common Mistakes

- **Treating the inventory as a one-time project rather than a living document** — Organizations often invest significant effort in the initial build and then let the inventory rot. New products launch, channels are added, and teams reorganize, but nobody updates the registry. Within two quarters, the inventory no longer reflects reality and teams stop trusting it. The fix is to assign a single owner, set a quarterly review cadence, and create a lightweight intake process for new journey submissions.

Tie the review to an existing meeting rhythm so it does not get deprioritized.
- **Collecting journeys from only one or two departments** — This is the most common structural failure. If you only talk to marketing and product, you will miss support journeys, billing journeys, partner-mediated journeys, and compliance-related journeys. The result is an inventory that covers 40 percent of the actual portfolio and creates blind spots in every downstream analysis. The signal to watch for is a lifecycle stage with fewer than 3 L2 journeys.

That almost always means incomplete collection rather than a genuinely sparse stage. Fix it by running collection workshops with every customer-touching team, including teams you might not initially consider like finance, legal, and operations.
- **Making the attribute schema too complex for initial collection** — ' This level of detail is valuable eventually but devastating during initial collection. Contributors face a 30-minute task per journey entry and either give up or fill fields with guesses. Start with 8 to 12 core attributes. You can always add enrichment columns after the initial inventory is validated.

Watch for the signal of incomplete rows. If more than 30 percent of entries have blank fields, your schema is too demanding for this stage.
- **Merging journeys too aggressively during deduplication** — In the push to create a clean inventory, teams sometimes merge entries that share a name but serve different personas or channels. 'Onboarding' for a self-serve user and 'onboarding' for an enterprise customer with a dedicated CSM are fundamentally different journeys with different touchpoints, pain points, and owners. Merging them into a single 'onboarding' entry destroys the specificity that makes the inventory useful. Before merging, verify that the persona, lifecycle stage, and primary channels are identical.

If any of those differ, keep the entries separate and differentiate them with more specific names.
- **Skipping the data-mining step and relying only on stakeholder interviews** — Stakeholders describe journeys they designed and journeys they know about. They rarely describe failure paths, workaround journeys, or emergent behaviors that nobody planned. These unintended journeys often represent the biggest experience gaps and the highest-impact optimization opportunities. If your inventory contains only 'happy path' journeys with clean flows and clear owners, you have likely missed the messy reality of how customers actually behave.

Supplement stakeholder input with behavioral data from analytics, support tickets, and CRM sequences to surface these hidden journeys.
- **Assigning hierarchy levels before completing the full collection** — When you try to organize journeys into L0-L3 levels while still collecting them, contributors start self-filtering. They think a journey is 'too small' for L2 or 'too vague' for L3 and leave it out. Premature hierarchy also creates anchoring, where people only think of journeys that fit the categories already defined. Collect flat first.

Add hierarchy after you have a complete, deduplicated list. This ensures you capture everything before imposing structure.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/ecosystem-journey-framework/METHOD.md) — Ecosystem Journey Framework

## Related Skills

- [Prioritizing Journeys for Optimization](../prioritizing-journeys-for-optimization/SKILL.md)
- [Transitioning from Journey Mapping to Journey Management](../transitioning-from-journey-mapping-to-journey-management/SKILL.md)
- [Aligning Teams Around Journey Ownership](../aligning-teams-around-journey-ownership/SKILL.md)
- [Structuring Journey Hierarchy Levels (L0-L3)](../structuring-journey-hierarchy-levels/SKILL.md)
- [Identifying Cross-Journey Insights and Patterns](../identifying-cross-journey-insights/SKILL.md)
- [Mapping Touchpoint Interconnections Across Journeys](../mapping-touchpoint-interconnections/SKILL.md)
