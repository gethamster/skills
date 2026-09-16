---
name: building-now-next-later-roadmap-templates
description: "This skill teaches you how to design and set up a reusable visual roadmap template that represents the Now, Next, and Later horizons with the right level of detail, making it easy to populate, share, and maintain across tools like Miro, Notion, ProductBoard, or spreadsheets."
metadata:
  homepage: https://tryhamster.com
  method: now-next-later-framework
---

# Building a Now Next Later Roadmap Template

> This skill teaches you how to design and set up a reusable visual roadmap template that represents the Now, Next, and Later horizons with the right level of detail, making it easy to populate, share, and maintain across tools like Miro, Notion, ProductBoard, or spreadsheets.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Beginner |
| Time to Learn | 45-90 minutes |
| Outcome | You produce a ready-to-use, shareable roadmap template that visually distinguishes the three horizons, enforces appropriate detail levels per horizon, and can be populated and updated by your team in under five minutes per review cycle. |
| Prerequisites | Basic understanding of the Now-Next-Later Framework and what each horizon represents, Access to at least one collaborative tool (Miro, Notion, Google Sheets, ProductBoard, or similar), A preliminary list of initiatives or features to populate the template with real data |
| Part of | [Now-Next-Later Framework](../../methods/now-next-later-framework/METHOD.md) |

## Overview

A now next later roadmap template is the physical artifact that turns the [Now-Next-Later Framework](https://tryhamster.com/methods/now-next-later-framework) from an abstract prioritization concept into a living, working document. Without a well-structured template, teams default to flat backlogs or Gantt charts, and the entire point of the framework, sequencing by confidence rather than dates, gets lost. The template is what makes the framework stick.

The core challenge in building this template is not choosing the right tool. It is encoding the right information density gradient across the three horizons. Now items need enough detail that an engineer can pick one up and start work today: owner, status, scope boundary, effort estimate, and acceptance criteria or a link to them. Next items need enough shape that stakeholders understand what problem is being solved and how confident the team is, but they should not have sprint-level detail because that detail will change. Later items should be deliberately vague, capturing a strategic theme or hypothesis without locking in a solution. If every column looks the same, the template is failing. The visual contrast between horizons is the single most important design decision you will make.

The artifact you produce is a reusable template, either a board, a database, or a spreadsheet, with three clearly labeled sections, a defined card or row schema for each horizon, a confidence indicator on every item, a legend that explains the horizons to newcomers, and a last-updated timestamp. Once built, this template becomes the canonical view your team updates weekly and the view you share with stakeholders. It replaces the question "when will feature X ship?" with the more productive question "is feature X in Now, Next, or Later, and what would move it forward?" Related skills like [categorizing items into horizons](https://tryhamster.com/skills/categorizing-items-into-now-next-later-horizons) and [communicating roadmaps to stakeholders](https://tryhamster.com/skills/communicating-roadmaps-to-stakeholders) depend on having a solid template in place first.

## How It Works

The template works by exploiting a visual information density gradient that mirrors the confidence gradient at the heart of the [Now-Next-Later Framework](https://tryhamster.com/methods/now-next-later-framework). Humans process spatial layout and visual weight faster than they read text. When a stakeholder glances at the roadmap and sees a dense, detailed Now column, a moderately populated Next column, and a sparse Later column, they intuitively understand three things without reading a word: what is certain, what is probable, and what is speculative. This is the mechanism that prevents the most common roadmap dysfunction, treating every item as an equally firm commitment.

The gradient works at two levels. First, the number of metadata fields decreases as you move right. A Now card might carry seven fields (title, owner, status, effort, confidence, link to spec, target iteration). A Next card carries four (title, problem statement, confidence, open questions). A Later card carries two or three (title, strategic theme, hypothesis). Second, the visual styling reinforces the gradient. Now cards are fully opaque with solid borders. Next cards might use a lighter background or a dashed border. Later cards are the lightest, sometimes just text with a tag. This dual encoding, data density plus visual styling, is what makes the template self-documenting. A new team member or a VP who opens the board for the first time can orient themselves in seconds.

The confidence indicator deserves special attention because it is the single field that appears on every item across all three horizons, and it is the field that drives movement between horizons. Confidence is not a binary; it is a spectrum. A simple three-level system works well: high (we have evidence and alignment), medium (we have a hypothesis but open questions), low (this is a bet based on intuition or early signals). The indicator can be a color dot, an emoji, a dropdown, or a numerical score. What matters is that it is visible without clicking into the card, because the first thing a reviewer scans for is "has anything changed confidence since last time?" If confidence is buried inside a card detail, it will not get updated.

Finally, the template needs an anchor element: a legend and a timestamp. The legend is a small block, usually in the top-left corner, that defines what Now, Next, and Later mean in your team's specific context (e.g., Now = committed for this quarter, Next = targeted for next quarter, Later = 6+ months out). The timestamp ("Last reviewed: June 12, 2025") signals freshness. A roadmap without a date is a roadmap nobody trusts. Together, the legend and timestamp turn a board of sticky notes into a credible communication tool that can be shared outside the product team without a live walkthrough.

## Step-by-Step Guide

### Step 1: Step 1: Choose Your Tool Based on Team Habits

Select the tool your team already uses for daily work. If your engineers live in Notion, build the template in Notion. If your stakeholders are most comfortable with Google Sheets, use Google Sheets. If your design and product team already collaborates in Miro, use Miro.

The goal is zero adoption friction. Do not introduce a new tool just for the roadmap unless you have executive sponsorship to migrate workflows. Evaluate the tool against three requirements: can it represent three distinct visual sections (columns, swim lanes, or tabs), does it support card-level or row-level metadata fields, and can you share a read-only or comment-only view with stakeholders? If the tool fails any of these, pick a different one.

> **Pro tip:** If your team is split across tools (e.g., engineering in Jira, product in Notion), build the canonical template in the product team's tool and create a lightweight mirror or embed for engineering. Do not try to maintain two full templates.

### Step 2: Step 2: Create the Three-Column Layout

Set up three clearly labeled sections: Now, Next, and Later. In a whiteboard tool like Miro, these are three vertical swim lanes or framed sections arranged left to right. In Notion, they are three columns in a Board view or three filtered views of a single database. In a spreadsheet, they can be three column groups separated by a blank spacer column, or three tabs.

Label each section with a clear heading and a one-sentence definition. " Make the Now section visually wider or more prominent than Later. This spatial weighting reinforces the confidence gradient.

> **Pro tip:** Use a horizontal left-to-right layout rather than top-to-bottom. Left-to-right maps naturally to a timeline metaphor (present on the left, future on the right) and is the convention stakeholders expect.

### Step 3: Step 3: Define the Card Schema for Each Horizon

Design the fields each card or row will carry, and vary the schema by horizon. For Now, include: title, owner (the single person accountable), status (not started, in progress, blocked, done), effort estimate (t-shirt size or story points), confidence level (high/medium/low), and a link to the detailed spec or ticket. For Next, include: title, problem statement (one sentence describing the customer or business problem), confidence level, and open questions (the top 1-3 unknowns to resolve before this moves to Now). ").

Write out a sample card for each horizon so you have a reference. The decreasing field count is intentional; it signals that Later items are not yet defined enough to have owners or effort estimates.

> **Pro tip:** Resist the urge to add fields to Later cards. If someone asks for an effort estimate on a Later item, that is a signal the item might belong in Next, not that your template needs more fields.

### Step 4: Step 4: Add Confidence Indicators Visible at Glance

Implement a confidence indicator on every item in every horizon. The indicator must be visible without opening or expanding the card. In Miro, use colored dots (green = high, yellow = medium, red = low) on the card surface. In Notion, use a Select property with colored tags that render on the board view.

In a spreadsheet, use conditional formatting on a Confidence column so cells turn green, yellow, or red automatically. Choose a three-level scale rather than five. Five levels create false precision and slow down review meetings because people debate between a 3 and a 4. Three levels force a clear call: we are confident, we have open questions, or we are speculating.

Document the definitions for each level in the legend.

> **Pro tip:** If your tool supports emoji, a simple traffic light emoji (🟢🟡🔴) in the card title works as a quick-scan confidence indicator without relying on color alone, which helps with accessibility.

### Step 5: Step 5: Apply Visual Styling to Reinforce the Gradient

Add visual differentiation beyond just the column labels. In Miro, give Now cards a solid border and full-opacity background, Next cards a lighter background or dashed border, and Later cards the lightest background or a simple text-on-frame appearance. In Notion, use different card cover colors or icon conventions per horizon. In a spreadsheet, use bolder font and background shading for Now rows, medium for Next, and plain for Later.

The goal is that someone seeing the board for the first time can tell which horizon is which without reading the headers, purely from the visual weight. Test this by blurring your eyes or zooming out to 25%. Can you still tell the three sections apart? If not, increase the contrast.

> **Pro tip:** Avoid using only color to differentiate. Combine color with another visual dimension like border style, icon, or font weight. This ensures the template works for colorblind team members and in grayscale prints.

### Step 6: Step 6: Build the Legend and Metadata Block

Add a legend block to the top or top-left of the template. The legend should contain: the team or product name, the definition of each horizon (Now, Next, Later) in one sentence each, the confidence level definitions, and a "Last reviewed" date field. In Miro, this is a sticky note group or a framed text box. In Notion, it can be a callout block above the database view.

In a spreadsheet, dedicate the first three rows to this metadata. The legend serves two audiences: your own team (to keep definitions consistent over time) and stakeholders (to orient themselves without asking questions). Update the "Last reviewed" date every time the roadmap is reviewed in a team meeting. A stale date is a trust killer.

> **Pro tip:** Include a link to your graduation criteria in the legend. This connects the template to the process of moving items between horizons and prevents ad-hoc promotions. See [defining graduation criteria](https://tryhamster.com/skills/defining-graduation-criteria-between-horizons) for details.

### Step 7: Step 7: Populate with Real Data and Validate

Fill the template with your actual initiatives, not hypothetical examples. Start with Now, because those items are the most defined and will stress-test whether your card schema captures enough detail. Then populate Next and Later. As you fill cards, watch for friction: are you struggling to fit information into the schema?

Are you skipping fields because they feel irrelevant? Are Later items accidentally getting Now-level detail? Each friction point reveals a template design issue to fix now, before the team adopts it. Aim for 5-10 items in Now, 5-8 in Next, and 3-6 in Later for an initial population.

If your Now column has 20+ items, your team is overcommitted. If Later has 20+ items, you need a separate parking lot or strategic backlog.

> **Pro tip:** Populate the template yourself first, then have one other team member populate independently without guidance. Where they get confused or deviate from your intent, the template is ambiguous and needs clearer labeling or constraints.

### Step 8: Step 8: Set Up Access Permissions and Sharing

Configure two levels of access. The product team gets edit access and will update the roadmap weekly. Stakeholders, leadership, and cross-functional partners get view-only or comment-only access. This prevents well-intentioned edits from corrupting the single source of truth.

In Notion, create a shared link with "Can comment" permissions. In Miro, use viewer-only sharing with a "request edit" flow. In Google Sheets, use "Can comment" or publish a view-only link. Add the sharing link to your team's wiki, Slack channel topic, or wherever stakeholders go for product information.

The best template in the world is useless if people cannot find it.

> **Pro tip:** Pin the roadmap link in your main product Slack channel and reference it by name in every stakeholder update. The roadmap should have a nickname (e.g., "the product board" or "the horizon map") so people can refer to it verbally.

### Step 9: Step 9: Schedule the First Review and Iterate on the Template

Book a 30-minute review meeting within one week of launching the template. Use this meeting to walk through each horizon, update confidence levels, and move items that have changed. " Capture the answers and adjust the template schema accordingly. Common first-iteration changes include adding a "blocked by" field to Now items, adding a "target customer segment" field to Next items, or removing a field nobody fills in.

Plan to iterate on the template for three weekly cycles before considering it stable. After three cycles, the template structure should be locked and changes should be rare.

> **Pro tip:** Record the decisions made during the review meeting directly on the roadmap (e.g., as a "Review Notes" sticky or a changelog section). This creates an audit trail that is invaluable when someone asks "why did we move X to Later?"

## Best Practices

- Enforce the information density gradient ruthlessly. Every time someone adds a detailed effort estimate or owner to a Later item, redirect them. The gradient is not aesthetic preference; it is a communication mechanism that signals confidence. When Later items carry the same detail as Now items, stakeholders lose the ability to distinguish commitments from speculation, and the most common roadmap failure, treating everything as a promise, returns.
- Keep the total item count under 25 across all three horizons. A roadmap with 50 items is a backlog wearing a roadmap costume. Cognitive overload sets in around 20-25 items, and reviewers start skimming rather than engaging. If you have more initiatives than this, group related items under a single theme card and link to a separate detail view. The roadmap should be scannable in under 60 seconds.
- Update the template in a ritual, not ad hoc. Designate a weekly or biweekly review cadence and batch all updates to that moment. Ad hoc updates create notification fatigue and make it impossible for stakeholders to know which version they last saw. The review meeting is also when confidence levels get reassessed, which is the engine that drives items between horizons.
- Use one canonical template, not multiple copies. Every fork creates drift. If different teams need different views, use filtered views of the same underlying data (in Notion or ProductBoard) or separate frames pointing to the same source (in Miro). If you catch someone maintaining a "shadow roadmap" in a slide deck, that is a signal your template is not meeting their needs, not that they need a copy.
- Include a parking lot or icebox section below or beside the Later column. Not every idea belongs on the roadmap. Items that are interesting but have no strategic alignment, no customer signal, or no sponsor should go to the parking lot rather than inflating the Later column. Review the parking lot monthly and archive anything older than 90 days.
- Design for the stakeholder's 10-second scan, not the product manager's 10-minute deep dive. The primary consumer of this template is someone who opens it for 10 seconds to answer one question: "Is my thing on the roadmap, and where is it?" If they cannot answer that question at a glance, the template is too complex. Use clear titles, visible confidence indicators, and enough whitespace that the eye can find items quickly.
- Version the template schema, not the content. When you change the card fields (e.g., adding a new property), note the change and date it in the legend. This prevents confusion when someone remembers a field that no longer exists or does not recognize a new one. Schema changes should be rare after the first three review cycles.

## Common Mistakes

- **Making all three columns look identical with the same fields and visual styling** — This is the most common template failure and it happens because it feels tidier to have uniform cards. When every column carries the same fields, stakeholders cannot distinguish confidence levels at a glance, and the roadmap reads like a flat prioritized backlog. " because the visual uniformity implied equal certainty. Fix it by removing fields from Next and Later cards until the visual contrast is unmistakable at a glance.

If your Later cards look as detailed as your Now cards, delete fields until they do not.
- **Building the template in a tool nobody on the team uses regularly** — This happens when the product manager falls in love with a specialized roadmapping tool and mandates adoption. The template looks beautiful on day one and is abandoned by week three because nobody opens the tool as part of their daily workflow. Watch for the signal: if the PM is the only person updating the roadmap, the tool choice is wrong. Rebuild the template in whatever tool the team already has open eight hours a day, even if it is less visually polished.

A Google Sheet that gets updated beats a ProductBoard instance that collects dust.
- **Overloading the Now column with 15-20+ items** — " An overloaded Now column signals overcommitment, not ambition. Stakeholders see 20 Now items and either panic about capacity or dismiss the roadmap as unrealistic. The diagnostic is simple: count the items and divide by team capacity. If your team can realistically ship 5-7 items in a cycle, Now should contain 5-7 items.

Move the overflow to Next with a note about what would need to be true to pull them into Now. See [reprioritizing across horizons](https://tryhamster.com/skills/reprioritizing-across-horizons) for the process.
- **Omitting the confidence indicator or burying it inside card details** — Teams skip the confidence indicator because it feels like extra overhead, or they add it as an internal field that is only visible when you click into the card. Without a visible confidence signal, the roadmap cannot serve its primary function: communicating what is certain versus speculative. The symptom is review meetings where the team spends 10 minutes discussing whether a Next item is "really a Next" or "more of a Later." A visible confidence dot resolves this in seconds. Add the indicator to the card surface, make it the first thing visible after the title, and update it every review cycle.
- **Creating the template but never adding a legend or last-reviewed date** — Without a legend, every new viewer needs a live explanation of what Now, Next, and Later mean in your context. Without a date, nobody knows if the roadmap reflects this week's reality or last quarter's wishful thinking. " in Slack. This question is a trust erosion event.

Add the legend in the first session and update the date at every review. It takes 15 seconds and prevents hours of follow-up questions.
- **Treating the template as a finished product after the first build** — The first version of any template is a hypothesis. Teams that skip the iteration phase end up with fields nobody uses, missing fields that force workarounds, or a layout that does not match how the review meeting actually flows. The signal is team members maintaining side notes or Slack messages to supplement what the template does not capture. Plan three weekly iterations where you explicitly ask "what is the template missing?" and "what field did nobody fill in?" After three cycles, lock the schema.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/now-next-later-framework/METHOD.md) — Now-Next-Later Framework

## Related Skills

- [Comparing Now-Next-Later to Quarterly and Timeline Roadmaps](../comparing-now-next-later-to-timeline-roadmaps/SKILL.md)
- [Defining Graduation Criteria Between Horizons](../defining-graduation-criteria-between-horizons/SKILL.md)
- [Categorizing Items into Now, Next, and Later Horizons](../categorizing-items-into-now-next-later-horizons/SKILL.md)
- [Reprioritizing and Moving Items Across Horizons](../reprioritizing-across-horizons/SKILL.md)
- [Applying Now-Next-Later Roadmaps to SaaS Products](../applying-now-next-later-to-saas-products/SKILL.md)
- [Communicating Now-Next-Later Roadmaps to Stakeholders](../communicating-roadmaps-to-stakeholders/SKILL.md)
