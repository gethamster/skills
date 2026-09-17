---
name: authoring-skills-from-scratch
description: "Guides users through writing a strong skill: trigger conditions, core guidance, examples, anti-patterns."
metadata:
  category: "Ops"
---

# Authoring Skills from Scratch

A skill is behavioral guidance for the AI harness — domain-specific instructions loaded into context to shape how the harness approaches specific types of work.

## What makes a strong skill?

**When to use** — Trigger conditions: what types of tasks or code patterns activate this skill. Good: "When creating or reviewing feature flags in PostHog or code." Bad: "When working on the backend."

**Core guidance** — Behavioral rules the harness should follow. Prescriptive, not suggestive. Good: "Flag names follow the pattern `feature_<name>_<variant>`." Bad: "Consider using a consistent naming pattern."

**Concrete examples** — Real code or configuration showing the pattern in action. 2–3 examples minimum. Good: `feature_passwordless_auth_alpha`. Bad: No examples, only prose.

**Anti-patterns** — What NOT to do, with explanations of why. Often more valuable than positive guidance. Good: "`ff_auth_v2` — too cryptic, doesn't follow naming pattern." Bad: Omitted.

## How to write one

1. **Define trigger conditions first:** What types of tasks or code patterns should activate this skill? Be specific — name the tools, file paths, or task types.
2. **Write core guidance as prescriptive rules:** "Always do X" is better than "consider doing X." Each rule should be a single, testable instruction.
3. **Add 2–3 concrete examples:** Show the pattern in real code or configuration. Examples should be copy-pasteable and recognizable.
4. **Document anti-patterns:** What should the harness NOT do? Why? For each anti-pattern, explain the failure mode it prevents.
5. **Test the skill:** Load it and give the harness a task that should trigger it. Does it follow the guidance? If not, tighten the trigger conditions or rules.

Keep the skill under ~2000 words. If it exceeds that, it's probably covering multiple domains — split it.

## Common mistakes

- Too long, covering multiple domains. A skill for "all of backend development" is too broad; create separate skills for "NestJS patterns," "BullMQ job queues," etc.
- Vague guidance. "Consider" and "think about" are not instructions. Use "always," "never," "must."
- No examples. Without concrete examples, the harness applies the rules inconsistently.
- Duplicating blueprint content. Skills guide behavior; blueprints describe state. A skill says "follow this pattern when writing API routes." A blueprint says "our API routes use this pattern because we decided X."
- No trigger conditions. Without triggers, the harness doesn't know when to load the skill.

## Prompts to get unstuck

- "What tasks should activate this skill?"
- "What's the one rule the harness must follow?"
- "Show me a real example of this pattern."
- "What mistake does the harness make without this skill?"
