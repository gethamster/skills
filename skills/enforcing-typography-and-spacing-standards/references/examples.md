# Examples: Enforcing Typography and Spacing Standards in AI-Generated UI

## Example: SaaS Marketing Site for a Small Team

**Scenario:**

A three-person startup uses Cursor with Claude to generate their marketing site. The site has a hero section, features grid, pricing table, testimonials, and footer. The team uses Tailwind CSS and has no existing design system. They want the site to look polished enough that visitors do not immediately recognize it as AI-generated. Timeline is one afternoon.

**Walkthrough:**

The team starts by prompting Cursor to generate a landing page without any typography rules. The output uses Tailwind defaults: text-4xl for the hero heading, text-lg for body, and uniform py-12 on every section. Everything looks technically fine but visually indistinct. 25 ratio scale based on 16px body text, producing sizes at 13px, 16px, 20px, 25px, 31px, 39px, and 49px.

1 for 39-49px display. 02em for display headings. Vertical spacing rules specify 96px between major sections, 12px between headings and body, 48px above section headings. Density constraint: body text max-width of 660px.

md in Cursor and regenerate the same page. The hero heading is now 49px with tight leading and negative tracking. 25 line height. Body text is contained in a readable measure.

The pricing table has consistent 8px-based padding. The result passes their validation checklist on the second attempt after tightening one ambiguous rule about card internal padding.

## Example: Enterprise Dashboard with Dense Data

**Scenario:**

A B2B SaaS team building an analytics dashboard in React uses Claude Code. The dashboard has data tables, chart legends, filter panels, metric cards, and a sidebar navigation. Content density is high and the audience expects information-dense screens. The team uses a custom design system with Radix UI primitives.

**Walkthrough:**

5 line height regardless of function, table headers and body text are the same size, metric card numbers use the same weight as labels, and spacing between dashboard sections is uniformly 16px. 125 ratio scale based on 14px: 11px (captions), 12px (small labels), 14px (body/table cells), 16px (subheadings/metric labels), 18px (section headings), 20px (page titles). 2 for 20px+. 4 line height, and row padding is 10px vertical.

05em tracking. Vertical spacing between dashboard sections is 32px, between filter bar and content is 24px, and sidebar nav items have 6px vertical padding. The density constraint specifies minimum 12px gap between cards and maximum 4 metric cards per row on desktop. After loading these rules, Claude Code generates a dashboard where the information hierarchy is immediately legible: large metric numbers draw the eye first, section headings orient navigation, table headers are clearly distinguished from data, and the overall density feels professional rather than cluttered.

## Example: Content-Heavy Blog for a B2C Brand

**Scenario:**

A direct-to-consumer brand uses v0 to generate blog post templates. Posts are 1500-3000 words with embedded images, pull quotes, bulleted lists, and related article cards at the bottom. The brand uses a serif font for body text and a sans-serif for headings. The audience reads on mobile 65% of the time.

**Walkthrough:**

5 line height globally, and 24px margins between all elements. Blog posts look like documentation rather than editorial content. 25 ratio for sans-serif headings: 20px (H4), 25px (H3), 31px (H2), 39px (H1/title). 45 at 22px lead.

2 for all sizes. 04em on uppercase sans-serif labels. 4 line height and 48px left margin. Vertical spacing: 96px between article sections, 16px between heading and first paragraph, 56px above H2 headings, 32px above H3 headings.

The responsive section specifies: mobile body stays at 18px (readability on small screens), H1 drops to 28px, section spacing reduces to 64px, pull quote left margin reduces to 24px. The density constraint limits body text width to 640px (approximately 65 characters in their serif font). After applying these rules, v0 generates blog post layouts that feel like a well-designed editorial publication: clear hierarchy, comfortable reading rhythm, proper serif typesetting, and content that breathes without feeling sparse.

## Example: Design System Migration for a Large Team

**Scenario:**

A 20-person engineering team is migrating from a legacy design system to a new one. They use Codex to help generate component variants. The new design system has defined tokens for typography, but the AI agent keeps falling back to the old system's values or Tailwind defaults when generating new components. The team needs SKILL.md rules that enforce the new system's decisions across all agent-generated code.

**Walkthrough:**

2 ratio type scale with named tokens: text-xs (12px), text-sm (14px), text-base (16px), text-md (19px), text-lg (23px), text-xl (28px), text-2xl (33px), text-3xl (40px). Each token has a paired line-height token. md file they write does not specify raw pixel values. Instead, it maps semantic roles to token names: 'Body text always uses $text-base with $leading-base.

Section headings use $text-xl with $leading-tight. ' They add a critical rule: 'NEVER use raw pixel values, rem values, or Tailwind utility classes for font-size, line-height, or letter-spacing. ALWAYS use the design system tokens listed above. ' They map spacing tokens similarly: $space-xs (4px), $space-sm (8px), $space-md (16px), $space-lg (24px), $space-xl (32px), $space-2xl (48px), $space-3xl (64px).

Vertical rhythm rules use token names: 'Space between heading and body: $space-sm. ' The density constraints reference component-specific tokens. md across the team's Codex configurations, generated components consistently use the new design system tokens. The team reduces manual token-replacement fixes from an average of 12 per component to 1-2 per component, cutting component review time by roughly 60%.
