# FAQ: Structuring Journey Hierarchy Levels (L0-L3)

## How do I decide whether something is an L2 scenario or an L3 micro-journey?

Apply the scope test. An L2 scenario represents a complete path through a lifecycle stage for a specific persona or context, covering multiple touchpoints and potentially spanning days or weeks. An L3 micro-journey represents a single interaction or tightly coupled set of interactions at one touchpoint, typically completed in minutes or hours. If the journey you are classifying involves multiple distinct touchpoints across different channels or time periods, it is likely an L2.

If it is focused on a single task at a single touchpoint, it is an L3. When in doubt, check whether the candidate could be further decomposed into meaningful sub-interactions. If it can, it is probably an L2.

## How long should it take to build the full hierarchy from scratch?

For a first pass covering L0 through L2, plan for 3-5 hours of collaborative workshop time with journey owners, plus 2-3 hours of documentation. L3 decomposition takes 1-2 hours per L2 journey and should be done progressively, not all at once. A mid-size organization with 5-6 L1 stages and 15-20 L2 scenarios can have a usable hierarchy within one week of calendar time. Trying to complete every L3 before publishing the hierarchy is a common cause of delay.

Publish at L2 and elaborate L3s as needed.

## Should I structure journey hierarchy levels before or after building a journey portfolio inventory?

Build the hierarchy first. The portfolio inventory from [building a journey portfolio inventory](https://tryhamster.com/skills/building-a-journey-portfolio-inventory) requires a consistent classification system to organize journeys by level, owner, and status. Without the hierarchy, your inventory becomes a flat, unsorted list that is difficult to navigate or prioritize. The hierarchy gives you the taxonomy.

The inventory populates it with metadata, status, and links to detailed maps.

## How do I handle journeys that span multiple L1 stages?

Some customer experiences genuinely cross stage boundaries, such as a 'switching from a competitor' journey that touches Evaluation, Purchase, and Onboarding. Rather than creating an L2 that spans three L1s, break it into stage-specific L2 segments: 'Competitive Evaluation' under Evaluation, 'Competitive Purchase' under Purchase, and 'Migration Onboarding' under Onboarding. Then annotate the cross-stage relationship in your hierarchy documentation so teams know these L2s form a connected sequence. This preserves the clean parent-child structure while acknowledging the cross-stage reality.

The [mapping touchpoint interconnections](https://tryhamster.com/skills/mapping-touchpoint-interconnections) skill covers how to formalize these cross-journey links.

## Why does my hierarchy keep changing every quarter?

If your L0 and L1 levels are changing frequently, your definitions are probably too narrow or too tied to current product features rather than fundamental customer lifecycle phases. L0 and L1 should be stable for years because the basic shape of the customer lifecycle rarely changes. L2 and L3 levels should evolve more often as you add new products, segments, channels, or optimize specific interactions. If L1 instability is the issue, redefine your L1 stages around customer states (evaluating, onboarding, deriving value) rather than product-specific actions (using feature X, configuring integration Y).

## Can I use customer journey hierarchy levels for internal employee journeys or just external customers?

The L0-L3 hierarchy works for any relationship where someone moves through stages with your organization, including employee experience, partner experience, and developer experience. The same principles apply: one L0 lifecycle, stages at L1, scenarios at L2, micro-interactions at L3. Some organizations maintain separate hierarchies for customer and employee journeys but use the same structural conventions so that teams familiar with one can immediately navigate the other. The key is not to mix user types within a single hierarchy unless they share genuine touchpoints that need coordination.

## What tools work best for documenting and maintaining the hierarchy tree?

Avoid static tools like PowerPoint or PDF. The hierarchy needs to be searchable, linkable, and editable by multiple people. Structured tools work best: Notion databases with a 'parent journey' relation field, Airtable bases with linked records, or purpose-built journey management platforms like TheyDo or Smaply. For the visual tree diagram, collaborative whiteboard tools like Miro or FigJam work well.

The ideal setup is a structured database for the authoritative data (names, levels, owners, boundaries) with a visual diagram generated from or linked to that data. This prevents the common problem of the visual diagram and the documentation drifting apart.
