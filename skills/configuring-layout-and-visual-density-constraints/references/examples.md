# Examples: Layout and Visual Density Constraints for AI Agents

## Breaking up a repetitive landing page

**Scenario:**

Illustrative scenario: an agent generates a six-section landing page for a design tool. The hero is centered, three sections use the same image-left, text-right split in alternation, and the features section is a row of three equal cards.

**Walkthrough:**

The team adds composition rules: each layout family appears once per page, no more than two image-and-text splits in a row, and no three-equal-card rows. They ask the agent to name the layout family of each section before building. The regenerated page uses a split hero, a bento grid for features with one cell per feature, a full-width quote, a horizontal scroll of templates, a pricing grid and a simple closing call to action. Every section now has a shape that fits its content.

## Separating marketing and product rules

**Scenario:**

Illustrative scenario: a team installs the Taste Skill default and asks the agent to build both a pricing page and an internal usage dashboard. The dashboard comes back with asymmetric panels, large gaps and a different layout for each widget, which makes it hard to compare numbers.

**Walkthrough:**

The team reads the default skill's out-of-scope list, which excludes dashboards and data tables, and adds a separate product-screen section to their own skill. It points the agent at their design system's table and card components, sets the highest density level, requires right-aligned numeric columns with tabular figures, and allows repeated panel layouts. The pricing page keeps the Taste Skill rules. The regenerated dashboard uses one consistent panel shape, and numbers line up across rows.

## Fixing a hero that jumps on mobile

**Scenario:**

Illustrative scenario: a generated hero uses a full-viewport height. On a phone, the headline jumps as the browser toolbar collapses, and the call to action is sometimes hidden behind the toolbar.

**Walkthrough:**

The team adds two rules: hero sections use a minimum height in dynamic viewport units instead of a fixed viewport height, and every multi-column section declares its single-column fallback. They also require the call to action to be visible without scrolling at the smallest supported width. After regeneration they test on a phone and in a narrow desktop window, and the hero holds its layout as the toolbar moves.
