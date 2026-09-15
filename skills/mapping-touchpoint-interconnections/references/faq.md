# FAQ: Mapping Touchpoint Interconnections Across Journeys

## How do I handle touchpoints that serve completely different purposes in different journeys?

Document the touchpoint once in your inventory but annotate its role per journey in the relationship matrix. For example, a pricing page serves an evaluation role in the acquisition journey but a comparison role in the renewal journey. Use the cell in your matrix to capture the role or purpose, not just the presence. When scoring for optimization priority, consider whether the touchpoint needs journey-specific variants or whether a single design can serve all roles.

If the purposes are fundamentally incompatible, you may need to split the touchpoint into journey-specific versions.

## How long should the initial customer journey touchpoint mapping exercise take?

For a small organization with 3-5 journeys and under 30 touchpoints, expect 3-5 hours of focused work including inventory extraction, normalization, matrix building, and initial visualization. For a large organization with 15 or more journeys and over 100 touchpoints, expect a 2-day workshop with representatives from each journey-owning team, followed by 1-2 weeks of refinement and validation. The time investment scales with the number of journey owners you need to coordinate, not just the number of touchpoints.

## Should I map touchpoint interconnections before or after structuring journey hierarchy levels?

Structure your journey hierarchy levels first. The [Ecosystem Journey Framework](https://tryhamster.com/methods/ecosystem-journey-framework) uses L0 through L3 levels to organize journeys from lifecycle stages down to micro-interactions. Knowing the hierarchy helps you decide the right granularity for touchpoint mapping. If you map interconnections without a hierarchy, you will likely mix granularity levels, mapping some touchpoints at the L1 journey level and others at the L3 micro-interaction level.

See [Structuring Journey Hierarchy Levels](https://tryhamster.com/skills/structuring-journey-hierarchy-levels) for the prerequisite exercise.

## What tools work best for building and maintaining an interconnection map?

Use whatever tool your team already collaborates in. A Google Sheet or Excel matrix works for any size ecosystem and is the most maintainable option because it requires no special skills. Miro or FigJam boards work well for visual representations when the audience prefers spatial layouts. For large enterprises, dedicated journey management platforms like TheyDo or Smaply can handle scale and versioning.

The tool matters far less than the discipline of updating it. A well-maintained spreadsheet beats a beautiful but abandoned Miro board.

## How do I map touchpoints that exist in partner or third-party systems I don't control?

Include them in your inventory with a clear "external" or "partner" ownership tag. The customer does not distinguish between touchpoints you control and touchpoints your partners control. If your product integrates with a partner's checkout system, that checkout experience is a touchpoint in your customer's journey regardless of who owns the code. Document what data you send to the partner touchpoint, what data you receive back, and what your fallback is if the partner system changes.

Flag these as higher-risk dependencies in your channel analysis because you cannot guarantee their stability.

## Why does my interconnection map keep getting outdated within weeks of creation?

The three most common causes are: no assigned owner for map maintenance, no trigger for updates when touchpoints change, and building the map in a tool that is separate from where teams do their actual work. Fix ownership by naming a specific person, not a team, as the map maintainer. Fix the trigger problem by requiring any touchpoint change request to include an impact assessment referencing the map. Fix the tool problem by embedding the map (or a link to it) in the systems teams already use daily, whether that is a project management tool, a CRM, or a shared wiki.

## How many touchpoints is too many to map effectively?

There is no hard limit, but visualization becomes impractical above approximately 60 touchpoints in a single diagram. For ecosystems with more than 60 touchpoints, use a filterable matrix as your source of truth and create focused visual maps for specific subsets, such as all touchpoints in the onboarding stage across journeys, or all touchpoints in the email channel. The key constraint is not the total number but the number visible at one time. If a stakeholder cannot understand the map in under 5 minutes, it needs to be filtered or layered.
