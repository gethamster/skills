# FAQ: Authoring Portable SKILL.md Files for Design Systems

## How long should a SKILL.md file be?

Target 300 to 800 lines of markdown. Below 300 lines, you likely lack the constraint specificity needed for consistent output. Above 800 lines, you risk context-window competition where later rules get dropped by the agent. If your design system genuinely requires more content, split into focused modular files (one for tokens, one for components, one for motion) and load only the relevant module per task.

Track which rules agents ignore. If rules in the bottom third of the file are consistently violated, that is a signal the file is too long.

## Should I author SKILL.md files before or after installing them in an agent?

Author first, install second. Authoring is the upstream skill in the [Taste Skill Frontend Design Framework](https://tryhamster.com/methods/taste-skill-frontend-design-framework). You need a well-structured file before you can meaningfully test installation. However, the authoring process is iterative: write a first draft, [install it in an agent](https://tryhamster.com/skills/installing-skill-files-in-ai-coding-agents), test the output, identify gaps, and revise the file.

Expect 2-3 revision cycles before the file stabilizes.

## How do I handle design tokens that differ between light and dark modes?

md with clear labels: `### Light Mode Colors` and `### Dark Mode Colors`. Include a rule in the priority section stating which mode is the default and when to apply the alternate mode. md. The agent needs to see the literal values for both modes.

, high-contrast), list each mode but consider whether the added length pushes the file past the 800-line threshold.

## Can I use the same SKILL.md for different frontend frameworks like React, Vue, and Svelte?

Yes, and that is the entire point of portability. Write rules in terms of visual outcomes and token values, not framework-specific implementation. Say 'button padding: 10px 20px' rather than 'use className="px-5 py-2.5"' or 'use :class="px-5 py-2.5".' The agent translates your visual rules into whatever framework-specific syntax the project uses. If you need framework-specific guidance (like 'use Radix UI primitives for accessible components in React'), add a short `## Framework Notes` section at the bottom, after all visual rules.

## How do I write SKILL.md rules for responsive behavior?

Define your breakpoints as explicit pixel values in the tokens section (e.g., `sm: 640px, md: 768px, lg: 1024px, xl: 1280px`). Then, for any rule that changes across breakpoints, state the variation directly: 'Section padding: 48px vertical on lg+, 24px vertical below lg.' Keep responsive rules to the essentials: container max-widths, grid column counts, and major spacing changes. Documenting every responsive variation for every component will bloat the file. Focus on the 5-10 responsive rules that matter most and let the agent handle minor adjustments.

## Why does my agent keep ignoring rules in the second half of my SKILL.md?

This is almost always a context-window prioritization issue. AI agents give more weight to content that appears earlier in the context. md plus the codebase plus the prompt) approaches the agent's context limit, later content gets compressed or dropped. Fix it by reordering your file so the most-violated rules move to the top, shortening the file by removing low-priority rules, or splitting into modular files and loading only the module relevant to the current task.

Adding a priority-ranking section near the top also helps because it gives the agent an explicit signal about which rules to preserve under pressure.

## How often should I update a SKILL.md file?

Update it whenever your design tokens change (same PR, same commit). Review the anti-pattern catalog quarterly by collecting recent agent-output failures and checking whether new patterns have emerged. Add new anti-patterns as they appear. If your design system is stable and your first-pass design-review approval rate stays above 80%, a quarterly review is sufficient.

If approval rates drop below 70%, review immediately because either the file has drifted from the system or the agent's model update has introduced new failure modes.
