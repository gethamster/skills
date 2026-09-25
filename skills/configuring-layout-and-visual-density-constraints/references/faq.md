# FAQ: Layout and Visual Density Constraints for AI Agents

## Can I use Taste Skill's layout rules for a dashboard?

Not directly. The default skill lists dashboards, admin panels and data tables as out of scope and suggests established design systems for them. Its variety rules help marketing pages and hurt data views, where consistent structure makes scanning easier. Write a separate product-screen section with high density and your design system's components.

## What is visual density in practice?

It is how much information sits in one viewport, controlled mostly by spacing, padding and how content is grouped. Low density means large gaps and few elements per screen. High density means tight padding, thin dividers instead of card boxes and more data per row. Naming two or three levels and assigning one per page type keeps pages consistent.

## Why prefer CSS Grid over flexbox for page layout?

Grid expresses rows and columns directly, so multi-column layouts do not depend on percentage-width calculations that break with gaps and padding. The Taste Skill default bans complex flexbox percentage math for this reason. Flexbox remains the right tool for one-dimensional alignment inside components.

## How do I make sure layouts work on phones?

Require every multi-column section to declare its small-screen layout in the same component and test at a phone width. Ban fixed full-viewport heights on heroes and use dynamic viewport units instead, since mobile toolbars change the viewport size. Ask the agent to list each section's fallback in its response so gaps are visible before review.

## How many different section layouts does a page need?

Enough that sections are not interchangeable. Taste Skill caps each layout family at one use per page and asks for several different families on a longer page. The exact number matters less than the rule that each section's shape follows from its content.
