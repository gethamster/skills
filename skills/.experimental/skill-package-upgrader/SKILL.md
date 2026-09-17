---
name: skill-package-upgrader
description: "Meta-skill that orchestrates upgrading a cluster of related skills into a complete method package: inventories skills, creates/identifies a method, synthesizes the method body, ideates and creates routines, and links skills to the method. Trigger when the user says \\\"upgrade these skills into a method package\\\", \\\"create a method from these skills\\\", \\\"package these skills into a method\\\", \\\"upgrade the skills package\\\", \\\"create routines for this method\\\", or any request involving taking a group of existing skills and creating/populating a method + routines from them."
version: "1.0.0"
metadata:
  category: "Workflows"
---

# Skill Package Upgrader

## Purpose

This skill guides the AI through the full workflow of upgrading a cluster of related skills into a complete method package. It is a meta-skill: it orchestrates the sequence of actions needed to turn a set of skills into a fully populated, routine-equipped, properly linked method.

## When to use

Trigger when the user says any of:

- "upgrade these skills into a method package"
- "create a method from these skills"
- "package these skills into a method"
- "upgrade the skills package" (when referring to a group of skills that should have a method)
- "create routines for this method" (when referring to a method linked to skills)
- Any request that involves taking a group of existing skills and creating/populating a method + routines from them

## Core guidance

### The Upgrade Workflow (execute in order)

**Step 1: Inventory the skills**

- Load each named skill using loadSkill (pass exact skill ID and name)
- Load all attached files using loadSkillAsset for each skill
- Read and synthesize the full content of every skill in the cluster
- Confirm the complete list with the user before proceeding

**Step 2: Create or identify the method**

- Check if a method already exists for this skill cluster (ask the user, or search by name)
- If it exists: use the existing method
- If it doesn't: create it via manage_methods (spawn a method creation card with a clear title, description, and category)
- Wait for the user to confirm the method exists before proceeding

**Step 3: Synthesize the method body**

- Read all skill content and attached files from Step 1
- Synthesize a comprehensive method document that consolidates the skills' guidance into a workspace convention
- Structure the method using the Authoring Methods from Scratch skill's guidance: purpose, prerequisites, steps, validation, troubleshooting
- The method body should be a workspace-level convention document, not a copy of the skills — it should reframe the skills' behavioral guidance as team standards
- Include: core philosophy, decision frameworks, practical code examples, review checklists, validation criteria
- Hand off to make_method_edit to populate the method body (this applies inline edits to the method document)
- Note: if make_method_edit is not available for local edit, generate the full content and instruct the user to paste it into the method editor

**Step 4: Ideate routines**

- Scan the skills for recurring, automatable patterns that would benefit from a routine
- For each skill, ask: "What recurring task does this skill govern, and could a routine automate the check or action?"
- Look for patterns like:
- Validation gates (e.g., "when a brief moves to delivery, check the diff against the skill's standards")
- Opportunity scouts (e.g., "when a brief enters refining, propose opportunities related to the skill's domain")
- Compliance checks (e.g., "when code is written, verify it follows the skill's conventions")
- Filter aggressively: only propose routines that are genuinely automatable and add value. Most skills will yield 0-2 routines, not 5.
- Present the ideated routines to the user with: trigger, purpose, and what it does
- Get user confirmation before creating

**Step 5: Create the routines**

- For each confirmed routine, spawn a routine suggestion card using spawn_thread (kind: routine_suggestion)
- Include in the payload:
- name: short, clear label
- instructions: full markdown body derived from the skill's content, structured as actionable steps
- triggers: the appropriate trigger(s) from the routine trigger enum
- schedules: only if the user named a cadence; otherwise empty array
- Tell the user each routine card has been spawned and they should review and save each one

**Step 6: Link skills to the method**

- Use manage_methods to link each skill to the method (if not already linked)
- Confirm all skills are linked

**Step 7: Summary**

- Provide a summary table of everything created: method (with link), routines (with trigger), skills linked
- Note any manual actions the user still needs to take (e.g., pasting method body if inline edit wasn't available)

### Key rules

1. **Always load the full skill content first.** Never synthesize a method body or ideate routines from skill titles alone — load the skill and all attached files.
2. **Filter routines aggressively.** Most skills don't need routines. A skill that is purely informational (no recurring check or action) gets zero routines. Say so explicitly.
3. **One routine per trigger per purpose.** Don't create three routines that fire on the same trigger for the same reason — merge them into one.
4. **The method body is a convention, not a skill copy.** Reframe behavioral guidance as team standards. Skills say "always do X." Methods say "our team does X because Y."
5. **Confirm with the user at each gate.** After inventory, after method creation/identification, after routine ideation. Don't batch all steps without checkpoints.
6. **Never skip the skill loading step.** The entire workflow depends on reading the actual skill content. Loading skills is not optional.

### Anti-patterns

- **Creating a routine for every skill.** Most skills don't need routines. If you can't name the specific trigger and the specific automated action, don't create a routine.
- **Copying skill content verbatim into the method.** The method is a workspace convention, not a skill mirror. Reframe, restructure, and consolidate.
- **Creating multiple routines on the same trigger.** If two routines fire on the same trigger, merge them into one routine with combined checks.
- **Skipping the user confirmation gates.** The user must confirm the skill inventory, the routine list, and each routine before creation. Don't auto-create everything.
- **Generating routine instructions without reading the skill.** Routine instructions must be derived from the actual skill content, not guessed from the skill name.

### Concrete example: The Emil Kowalski Design upgrade

This skill was created based on a real upgrade session:

1. **Skills inventoried:** `emil-design-eng`, `review-animations`, `improve-animations`, `find-animation-opportunities`, `animate`, `apple-design`, `animation-vocabulary`
2. **Method created:** "Emil Kowalski Design" — workspace convention for UI polish, animation decisions, and component craft
3. **Method body synthesized:** 15-section document covering core philosophy, animation decision framework, component building principles, CSS transform mastery, clip-path animation, spring animations, stagger animations, gesture/drag interactions, performance rules, accessibility, debugging, Sonner principles, review checklist, review format, and validation criteria
4. **Routines ideated:** Two routines identified from the skill cluster:

- **Animation Craft Check** — trigger: `brief.status_changed.delivering` — validates animation code in the diff against the full checklist
- **Animation Opportunities Scout** — trigger: `brief.status_changed.refining` — proposes tasteful animation opportunities where they advance the brief's goal

5. **Routines created:** Both spawned as routine suggestion cards, user reviewed and saved
6. **Skills linked:** `emil-design-eng` linked to the method

This is the template for any future skill package upgrade.
