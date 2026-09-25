# FAQ: Taste Skill Design Review for AI-Generated Frontends

## If the agent runs a pre-flight checklist, why review at all?

Agents can mark items as passed without checking them properly, and some qualities, such as whether a layout suits the content, need human judgment. The checklist removes common problems before review. The human review catches what it missed and improves the checklist.

## Which tools do I need?

A browser with developer tools, Lighthouse, a contrast checker and a way to toggle reduced motion and color scheme. Search in your editor handles the mechanical checks for banned patterns. No specialized design review software is required.

## How long should a review take?

Long enough to run the three layers on one page: automated checks, the checklist and a visitor read. The first few reviews take longer because you are also improving the skill. As the skill improves, reviews get shorter because fewer findings recur.

## What do I do with a finding the skill does not cover?

Write a new rule with the pattern, a replacement and an override, and add it to the checklist. If the finding is a matter of taste rather than a defect, discuss it with the team before encoding it. Rules that only one person agrees with tend to be removed later.

## Can the review be done by another agent?

Partly. You can load the same skill into a review agent and ask it to check a page against the checklist, which works well for mechanical items. Keep a human in the loop for the visitor read and for deciding which findings should change the skill.
