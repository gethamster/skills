# FAQ: Writing Anti-Slop Design Review Rules

## How many anti-slop rules should a single SKILL.md checklist contain?

Aim for 10-25 rules total, with no more than 3-5 marked as blockers. Fewer than 10 rules will miss important patterns, while more than 25 will overflow the context window of some AI agents and cause human reviewers to skim rather than read. If you have more rules than 25, split them into separate SKILL.md files organized by concern (spacing, color, typography).

## Should I write anti-slop rules before or after installing SKILL.md files in my AI coding agent?

Write rules after you have generated at least 3-5 sample outputs from your agent without any constraints. You need to see what the agent's defaults actually produce before you can write targeted rules against those defaults. Once you have your initial catalog of anti-patterns, write the rules, then install them following the steps in the [installing SKILL.md files](https://tryhamster.com/skills/installing-skill-files-in-ai-coding-agents) guide. The two skills are sequential, not interchangeable.

## How do I write anti-slop rules for a project that uses a component library like Shadcn or Chakra UI?

Target the component library's default prop values rather than raw CSS. For example, instead of "border-radius must not exceed 12px," write "Button component must not use the default 'md' radius variant on all instances. Primary buttons should use 'lg' or 'full', secondary buttons should use 'sm' or 'none'." Reference the library's variant names in your thresholds. This makes rules more readable for agents that understand the library's API and prevents conflicts with the library's internal styles.

## How often should I update my anti-slop checklist?

Review the checklist at least quarterly and after any major model update from your AI agent provider. LLM defaults shift as model weights change, so patterns that were common in GPT-4 output may not appear in GPT-4.1 output, and new patterns may emerge. Also update whenever your design system or Tailwind config changes, because token-referenced thresholds may need to be adjusted to match new scale values.

## Why does my anti-slop checklist produce different results in different AI agents?

md instructions slightly differently based on its underlying model, system prompt, and context window handling. A rule that Cursor follows precisely may be partially ignored by Claude Code if the wording is ambiguous. Fix this by writing rules with zero ambiguity: use exact property names, exact threshold values, and explicit scope. Test each rule across at least two agents before finalizing.

Rules that one agent ignores consistently likely need rephrasing, not removal.

## Can I auto-enforce anti-slop rules with a linter instead of a SKILL.md checklist?

Partially. Some rules (maximum padding values, minimum font-size count, border-radius variety) can be implemented as Stylelint or ESLint rules that run in CI. This is ideal for blocker-level rules. , "hero sections may use larger padding than cards") and require layout awareness that current linters do not have.

md for agent and human review.

## How do I handle team disagreements about what counts as slop?

Ground the debate in observable evidence rather than personal preference. Generate 5 sample pages without constraints, have each team member independently annotate the anti-patterns they see, then compare annotations. Patterns that 80%+ of the team flags are consensus blockers. Patterns that only one person flags are either personal preferences (drop them) or genuine issues that need educating (add them as warnings with a rationale comment explaining the reasoning).

The annotation exercise usually resolves 90% of disagreements because most slop is objectively repetitive rather than subjectively ugly.
