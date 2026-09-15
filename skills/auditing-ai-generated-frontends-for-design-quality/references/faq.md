# FAQ: Auditing AI-Generated Frontends for Design Quality

## How long should a taste skill design review take for a single page?

A single-page audit typically takes 30-45 minutes for the first pass, including screenshots, dimension-by-dimension evaluation, and writing the report. Subsequent revision passes take 10-15 minutes each because you are only checking previously flagged elements. A full page audit with two revision passes usually completes in 45-75 minutes. Complex pages with dense data tables or many interactive states can take 60-90 minutes for the initial pass.

## Should I run the design review before or after installing SKILL.md files?

md files and generating or regenerating the UI. md rules. If you audit before installing the rules, you will find many issues, but you will not have a standard to reference in your revision instructions. md files](https://tryhamster.com/skills/installing-skill-files-in-ai-coding-agents)), generate the UI, then audit.

md output to measure the improvement after rules are installed.

## How do I run a taste skill design review when the interface has many interactive states?

Prioritize the default state first, then audit the highest-traffic alternative states: loading, empty, error, and success. Capture screenshots of each state and run the hierarchy and contrast checks on all of them. Interactive states are where AI agents cut the most corners, often rendering a loading spinner without matching the page's type scale or showing error messages in a red that fails contrast. You do not need to audit every possible state, but any state a user sees more than 10% of the time should be covered.

## Can I automate parts of the taste skill design review?

Some dimensions lend themselves to automation. Contrast ratio checking can be fully automated with tools like axe-core or Lighthouse accessibility audits. Typography scale validation can be partially automated by extracting all computed font-size values from the DOM and checking them against your defined scale. Spacing consistency can be semi-automated by extracting padding and margin values.

However, hierarchy evaluation, alignment judgment, and component consistency assessment still require human visual inspection. A practical approach is to automate the measurable checks and focus your manual review time on hierarchy and component quality.

## Why does my audit keep finding the same hierarchy issues after multiple revision passes?

Persistent hierarchy failures usually mean your SKILL.md rules do not explicitly define the minimum scale ratio between heading levels. If the rule says 'use a typographic scale' but does not specify 'the h2 must be at least 1.5x the body size,' the agent has room to interpret and will often choose the smallest increment that technically satisfies the instruction. Write more specific rules with exact ratios and pixel values. Also check if the agent is pulling in a CSS reset or framework default that overrides your intended heading sizes.

## How do I handle disagreements between the audit findings and the designer's vision?

The audit checklist is a quality floor, not a design directive. If the designer intentionally chose a flat hierarchy for a minimalist aesthetic, the auditor should annotate those findings as 'intentional departure, designer approved' rather than forcing the agent to change them. The key is documentation: every exception should be recorded with the rationale so future auditors do not re-flag the same decisions. If disagreements are frequent, the SKILL.md rules may be too rigid for the project's design direction and should be adjusted by the design lead.

## What is the minimum viable audit for a quick PR review when I do not have 45 minutes?

The 10-minute minimum viable audit covers three checks: squint test for hierarchy (2 minutes), contrast ratio check on interactive elements (3 minutes), and component consistency spot-check on buttons and cards (5 minutes). These three catches roughly 60% of the issues a full audit would find. Skip this shortcut for launch-critical pages or pages with complex data layouts, where spacing and alignment issues are more likely to be severe.
