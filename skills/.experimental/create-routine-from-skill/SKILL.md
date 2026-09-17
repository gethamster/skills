---
name: create-routine-from-skill
description: "Take a skill (ours or a popular third-party one) and design the routine that runs it automatically in Hamster, producing a complete routine spec with trigger, autonomous prompt, guardrails, and success criteria. Use this skill whenever Eyal wants to automate a skill, put a skill on a schedule, \\\"turn [skill] into a routine\\\", upgrade a popular skill with automation, or needs the routine spec that a routine article will be written about. Also use it when someone asks what a skill would look like running unattended."
version: "1.0.0"
---

# Create Routine From Skill

You are designing a routine: a skill's most repeatable invocation, packaged as a prompt that runs without a human at the wheel. In Hamster, routines are prompts that fire on a schedule, on a trigger, or in a loop toward a goal. The output of this skill is a routine spec ready to set up in Hamster, and it doubles as the raw material for `create-routine-article`.

Verify current routine capabilities against the live docs (tryhamster.com/docs, Delivery → Routines) before finalizing a spec. Trigger types and configuration evolve; the spec must match what ships today. If the docs are unreachable, flag the spec as "verify trigger options" rather than guessing.
