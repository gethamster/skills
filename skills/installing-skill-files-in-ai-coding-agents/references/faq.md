# FAQ: Installing SKILL.md Files in AI Coding Agents

## How do I install taste skill claude files if my agent is not on the supported list?

Most AI coding agents follow one of two patterns: file-based instructions (a specific markdown file in a specific directory) or pasted system instructions (a text field in the UI). md content there. If it supports only per-prompt context, paste the rules at the start of each session. md files is agent-agnostic.

Only the installation location changes.

## How long should installing SKILL.md files take for a new project?

For a single agent with no existing instruction files and no design system customization, installation takes about 10-15 minutes: create the directory, copy the files, verify the agent reads them, run one smoke test. If you have existing instruction files that might conflict, add 10-15 minutes for conflict resolution. If you need to customize the SKILL.md rules to match an existing design system's tokens, add 15-30 minutes depending on how many token values you need to map. Total range: 10 minutes for the simplest case, 60 minutes for a complex setup with multiple agents and a custom design system.

## Should I install SKILL.md files before or after setting up my design system tokens?

Install after your design tokens exist, even if they are preliminary. md files reference spacing values, type scales, and color constraints. md files to reference your tokens instead of the framework defaults. Installing taste rules that say "use 4px base unit" when your design system uses an 8px base unit creates conflicting output.

If you do not have a design system yet, the Taste Skill defaults are a reasonable starting point and can be updated later.

## Can I use the same SKILL.md files across multiple projects?

Yes, if the projects share the same design system or if you are using the framework's default values without customization. md files are plain markdown with no project-specific references by default. Copy them into each project's instruction directory. md file and maintain project-specific forks with customized token references.

md files and use symlinks or a script to distribute them to project directories.

## Why does my agent's output still look generic after installing taste skill files?

There are four common causes. First, the files are in the wrong directory and the agent is not reading them. Verify by asking the agent to summarize its rules. Second, existing instructions are overriding the taste rules.

Search all instruction files for conflicting spacing or typography directives. Third, the rules are too vague. If you wrote "use good spacing" instead of "use 12px component padding," the agent has nothing specific to follow. Fourth, your prompt is overriding the rules.

If your prompt says "make it spacious and airy," that contradicts tight-spacing taste rules. md files control design decisions.

## How do I update SKILL.md files when the Taste Skill framework releases new versions?

Download the updated files from the framework repository and compare them against your installed versions. If you customized the files with project-specific tokens, do not overwrite your versions directly. Instead, diff the new version against your current version to identify new rules, changed thresholds, or removed rules. Apply the changes you want while preserving your customizations.

If you did not customize the files, you can replace them directly. After updating, always re-run the verification and smoke test steps to confirm the agent reads the new rules correctly and the output matches your expectations.

## Do SKILL.md files slow down my AI coding agent's response time?

Not in any way you would notice. md files are typically 500-2000 words each. Even installing all five files adds roughly 5000-8000 tokens to the agent's context, which is a small fraction of the 100K-200K token context windows that modern agents support. The agent processes these tokens in milliseconds.

The output quality improvement far outweighs any theoretical latency increase. md files are not the cause. Look at conversation history length instead.
