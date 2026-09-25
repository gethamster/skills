# Examples: Taste Skill Design Review for AI-Generated Frontends

## Reviewing a generated SaaS landing page

**Scenario:**

Illustrative scenario: an agent with the Taste Skill default builds a landing page for a scheduling app. It reports a design read and dial values and says the pre-flight checklist passed. The team reviews it before merging.

**Walkthrough:**

Lighthouse flags low contrast on a ghost button over the hero image. The checklist walk finds two small uppercase labels on adjacent sections, which the eyebrow rule forbids, and a feature grid with an empty final cell. At a tablet width, the pricing cards overflow sideways. Reading as a visitor, the reviewer finds a subhead that sounds clever but says nothing. The team classifies the findings: the contrast and overflow are code fixes, the labels and empty cell are rules the agent ignored despite claiming a pass, and the subhead exposes a missing rule about plain copy. They fix the code, move the eyebrow and bento checks into the agent's required report, and add a rule to replace vague copy with a plain functional sentence.

## Auditing an existing site before a redesign

**Scenario:**

Illustrative scenario: a team plans to use an agent to modernize an older marketing site and wants to know what to change first without breaking what works.

**Walkthrough:**

They follow the scan, diagnose and fix sequence from the Taste Skill redesign companion. The scan records the framework, styling approach, fonts, colors and page structure. The diagnosis lists generic patterns, missing hover and focus states, a full-viewport hero that jumps on mobile, and a pure black background. The team marks URL structure, navigation labels and form field names as untouchable, since analytics depend on them. The agent then works through fixes in the order the default skill suggests, starting with typography and spacing, and each change is reviewed against the same list.

## Catching a rule the agent could not follow

**Scenario:**

Illustrative scenario: across three reviews, generated pages keep failing the same checklist item: every multi-column section must declare its mobile fallback. The agent reports the item as passed each time.

**Walkthrough:**

The reviewer reads the rule in the skill and finds it buried in a paragraph about breakpoints. They classify the finding as an ambiguous rule rather than an agent failure. The rule moves to its own line with a literal example of a fallback, and the checklist item asks the agent to list each section's fallback in its response. The next review shows the list, and the reviewer can verify it in a minute.
