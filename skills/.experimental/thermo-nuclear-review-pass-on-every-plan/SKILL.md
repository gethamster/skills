---
name: thermo-nuclear-review-pass-on-every-plan
description: "Enforces a mandatory thermonuclear code quality review task as the last parent task in every plan. Activate during plan generation — the Plan agent must load this skill before creating any tasks. Ensures every plan ends with an agent-executed review task referencing the thermo-nuclear-code-quality-review skill, ordered after all implementation tasks with full dependency coverage."
version: "1.0.0"
category: "Development"
---

# Thermo-Nuclear Review Pass on Every Plan

## When to Use

Activate this skill during **plan generation** — whenever the Plan agent is creating or regenerating a task plan from a brief. This skill must be loaded by the Plan agent before it creates any tasks.

## Core Rule

**Every plan must end with a thermonuclear code quality review task.** This is non-negotiable. No plan is complete without it. The project ships thermonuclear as a skill within the repository - use it.

After all implementation tasks are defined, the Plan agent must create a final parent task that runs a thermonuclear code quality review pass against the completed work. This task:

- Must be the **last parent task** in the plan, ordered after all implementation tasks.
- Must have `executionType: "agent"` (it requires an AI agent to perform the review).
- Must reference the `thermo-nuclear-code-quality-review` skill in its `skillReferences` field.
- Must have a title like "Thermo-Nuclear Code Quality Review" or "Thermo-Nuclear Review Pass".
- Must include a description that instructs the reviewer to:

1. Review all changes made by the implementation tasks in this plan.
2. Apply the full thermo-nuclear code quality review skill — structural simplification, code judo moves, file-size limits, spaghetti detection, boundary cleanliness, and abstraction quality.
3. Address any critical findings before the plan is considered delivered.
4. Block delivery if structural regressions or missed simplification opportunities are found.

## Task Description Template

Use this as the task description:

> Perform a thermonuclear code quality review of all changes introduced by this plan. Load the `thermo-nuclear-code-quality-review` skill and apply its full review checklist. Focus on: structural simplification (code judo), file-size discipline (no file crossing 1k lines without justification), spaghetti/branching complexity, boundary and type cleanliness, abstraction quality, and canonical-layer placement. Address any critical findings directly — fix structural regressions, collapse unnecessary indirection, and resolve missed simplification opportunities. Do not approve the plan as delivered if structural issues remain unresolved.

## Dependencies

This review task must depend on all implementation tasks in the plan. It cannot run until all implementation work is complete. The Plan agent should set up the dependency chain so the review task is ordered last.

## Anti-Patterns

- **Do not skip the review task** even for small or "trivial" plans. Small changes can introduce structural regressions too.
- **Do not make the review task a subtask** of an implementation task. It must be a top-level parent task so it's visible in the plan outline.
- **Do not use a generic "review" task.** The task must explicitly reference the `thermo-nuclear-code-quality-review` skill so the review agent loads the full checklist.
- **Do not place the review task before implementation tasks.** It must be last — it reviews completed work, not planned work.

## Validation

A plan is valid under this skill if and only if:

1. The last parent task in the plan is a thermonuclear code quality review task.
2. That task references the `thermo-nuclear-code-quality-review` skill in `skillReferences`.
3. That task has `executionType: "agent"`.
4. That task depends on all implementation tasks (ordered last).
