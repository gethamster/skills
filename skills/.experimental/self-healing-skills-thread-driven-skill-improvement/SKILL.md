---
name: self-healing-skills-thread-driven-skill-improvement
description: "Analyze any conversation thread for skill gaps and improvement opportunities. When a thread involves friction, trial-and-error, or discovery that could have been avoided with better skill documentation, this skill provides the protocol to identify whether to UPDATE an existing skill, CREATE a new one, or take NO ACTION. Makes the self-improving organizational harness systematic: every conversation with friction becomes a captured knowledge opportunity."
version: "1.0.0"
metadata:
  category: "Workflows"
---

# Self-Healing Skills: Thread-Driven Skill Improvement

## Purpose

This skill teaches Hamster how to analyze any conversation thread (including the current one) to identify when existing skills need to be updated, corrected, or improved — and when new skills should be created. It is the generic, reusable version of a pattern demonstrated in practice: a thread full of trial-and-error with PostHog led to creating a skill that would prevent that trial-and-error next time. This skill makes that pattern systematic and automatic.

The absolute goal is a self-healing, self-improving organizational harness of skills across all activity that runs on Hamster. Every conversation that involves friction, discovery, or problem-solving is an opportunity to capture knowledge into a skill or improve an existing one.

## When to Use (Trigger Conditions)

Activate this skill when:

- A conversation involved significant trial-and-error, debugging, or discovery that could have been avoided with better skill documentation
- A thread reveals that an existing skill's guidance was incomplete, incorrect, or missing a critical detail (e.g., wrong field name, missing step, outdated API)
- A thread covers a workflow or integration pattern that no existing skill addresses but will likely recur (e.g., setting up Mixpanel measurements, configuring a new CI tool, integrating a new third-party API)
- A user explicitly asks to "standardize what we know" or "create a skill from this"
- A routine fires that triggers skill review (see the companion routine)
- After any conversation where the AI had to make more than 2-3 attempts to get something working that should have been a single-shot operation

## Core Guidance

### 1. Thread Analysis Protocol

When analyzing a thread for skill improvement opportunities, run this protocol:

**Step 1: Friction Audit**

Scan the conversation for:

- Repeated failed attempts (API calls that errored, queries that returned wrong results, configurations that didn't work)
- Trial-and-error cycles (trying field A, then field B, then field C before finding the right one)
- Manual discovery of information that should have been documented (e.g., "there's no `unique` math type, the right one is `hogql` with `math_hogql`")
- Workarounds for missing or incorrect skill guidance
- Moments where the user had to correct the AI's approach

**Step 2: Knowledge Extraction**

For each friction point, extract:

- What was the correct approach (the thing that finally worked)?
- What was the wrong approach (the things that failed)?
- Why did the wrong approach seem reasonable but fail? (e.g., "math_property seemed like the right field name but it's silently ignored; math_hogql is the correct field")
- What specific, reusable knowledge would have prevented this friction?

**Step 3: Skill Gap Assessment**

Cross-reference extracted knowledge against existing skills:

- Does an existing skill already cover this? If so, is its guidance complete or does it need updating?
- Is this a new domain/pattern that no existing skill addresses?
- Is this knowledge too narrow for a skill (a one-off) or general enough to recur?
- Does this overlap with an existing skill's scope? If so, should it be merged or kept separate?

**Step 4: Action Determination**

For each gap found, determine the action:

- **UPDATE**: An existing skill's guidance was incomplete or incorrect. Propose a specific edit to that skill.
- **CREATE**: No existing skill covers this domain. Propose a new skill.
- **ARCHIVE**: An existing skill covers a domain that's been deprecated or merged. Flag for archival.
- **NO ACTION**: The knowledge is too specific to recur, or the existing skill already covers it adequately.

### 2. DRY Skills Principle

- Skills must be DRY. If two skills cover overlapping domains, merge them or clearly scope them to non-overlapping triggers.
- Before creating a new skill, search existing skills for overlap. If the new knowledge fits inside an existing skill's scope, propose an update to that skill instead.
- Skills typically belong to Methods. When a skill covers a recurring workflow that should fire automatically, also propose a Method/Routine that uses the skill.
- One skill per domain. Don't create "PostHog Measurements v2" — update the original.

### 3. Proactive Initiative

Hamster should take the initiative to improve skills without being asked. When a thread reveals friction:

- Proactively suggest skill improvements at the end of a conversation, even if the user didn't ask
- Frame suggestions as: "This thread revealed [X friction]. I recommend [updating/creating] a skill to capture [Y knowledge] so this doesn't recur."
- Don't wait for the user to notice the pattern — if the AI struggled, the skill should be updated
- Post the suggestion in the relevant brief or initiative chat if one exists, or surface it directly in the conversation

### 4. Skill Quality Standards

When proposing a new skill or update:

- Include concrete examples from the actual thread (real field names, real API calls, real error messages)
- Document anti-patterns explicitly — the wrong approaches that failed are as valuable as the right one
- Keep skills under ~2000 words; split if they exceed that
- Include trigger conditions that would activate the skill
- Cross-reference related skills to avoid duplication

### 5. Feedback Loop

- After proposing a skill update or creation, note what trigger event or conversation pattern led to the discovery
- Track which skills have been updated through this process to identify patterns (e.g., "PostHog skills needed 3 updates this quarter — maybe we need a broader analytics skill review")
- If the same friction recurs after a skill was supposedly updated, the skill's trigger conditions or guidance may be too weak — flag for deeper review

## Concrete Example (from real conversation)

**Thread pattern**: Setting up a PostHog measurement binding for a Hamster goal measure required 15+ API calls, discovering that:

1. HogQLQuery insights return `[[value]]` but measure bindings need `aggregated_value` from TrendsQuery
2. `math: "unique"` doesn't exist — the correct approach is `math: "hogql"` with `math_hogql` field
3. `math_property` is silently ignored for HogQL expressions; `math_hogql` is the correct field

**Skill action**: CREATE a new skill "PostHog Measurements for Goal Bindings" capturing all three discoveries with the exact field names, the wrong approaches that failed, and the correct approach that worked.

**Routine action**: CREATE a routine that fires on `brief.approved` and `initiative.state_changed.shipped` to analyze the thread for skill improvement opportunities using this skill's protocol.

## Anti-Patterns

- **Creating a skill for every conversation**: Not every thread reveals reusable knowledge. If the friction was specific to a one-off task (e.g., "this particular user's account had a weird config"), don't create a skill. Only create when the knowledge will recur.
- **Updating a skill without checking the current version**: Always read the existing skill before proposing edits. The skill may already cover what you discovered.
- **Proposing vague updates**: "Improve the PostHog section" is not actionable. "Add a section on math_hogql field for HogQL expressions in TrendsQuery" is actionable.
- **Duplicating existing skills**: Before creating, search for existing skills that cover the same domain. Merge or update instead of creating a parallel skill.
- **Waiting for the user to ask**: If the AI struggled, the skill should be updated. Don't wait for the user to notice the pattern.
- **Creating skills that should be methods**: If the knowledge is about a recurring workflow that should fire automatically, it's a Method, not just a Skill. Propose both.
- **Ignoring the DRY principle**: Two skills covering the same domain with slightly different guidance is worse than one well-maintained skill. Merge aggressively.

## Cross-References

- "Detecting and Flagging Skills for Refresh" — existing skill for periodic skill staleness detection (trigger-based, not thread-based)
- "Detecting and Flagging Methods for Refresh" — existing skill for method staleness detection
- "Authoring Skills from Scratch" — how to write a strong skill
- "Authoring Routines from Scratch" — how to write a strong routine
- "Authoring Methods from Scratch" — how to write a strong method
- The companion routine "Self-Healing Skills: Thread-Driven Skill Review" uses this skill's protocol to analyze threads automatically
