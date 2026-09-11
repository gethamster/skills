# FAQ: Navigating gstack's 23 Specialist Skills via Slash Commands

## How do I find the right slash command when I am not sure which one applies to my task?

Start by identifying the development phase your task belongs to: planning, scaffolding, implementation, quality, or documentation. Then scan the two to five commands in that category on your reference sheet. If two commands seem equally applicable, choose the one with the narrower scope. Narrow commands produce more focused outputs, and you can always follow up with the broader command if you need additional coverage.

If no command matches, you may need a generic prompt for that specific task, or it may be a signal to create a custom skill.

## How long should it take to become fluent with all 23 commands?

Most developers reach comfortable fluency with their most-used 8 to 10 commands within a week of daily use. Full fluency across all 23 typically takes two to three weeks, because some commands only apply to specific situations like database migrations or deployment configurations that do not come up every day. Building and maintaining a reference sheet accelerates this timeline significantly. Do not try to memorize all 23 at once.

Focus on the five or six that match your current project's needs.

## Should I learn slash commands before or after understanding multi-agent perspectives?

Learn slash commands first. Multi-agent perspectives (CEO, engineer, QA) are a layer that sits on top of the command structure. Each slash command already has a built-in persona, so you are implicitly using single-agent perspectives from day one. The multi-agent perspective skill teaches you to invoke multiple personas on the same task, which requires you to already understand which commands exist and what each persona contributes.

Trying to learn both simultaneously creates confusion about whether an output's tone comes from the command's built-in persona or from a multi-agent overlay.

## Can I use gstack slash commands with AI coding agents other than Claude Code?

The slash command mechanism depends on the agent's ability to load external skill files and interpret them as system prompts. Claude Code supports this natively. Other agents like Cursor, Windsurf, or Aider may support similar mechanisms through their own configuration formats. The gstack skill files are plain text, so they can be adapted to any agent that accepts custom system prompts.

Check the gstack documentation for agent-specific setup instructions, and see the installing and configuring skill for details on compatibility.

## Why does my slash command output sometimes feel generic instead of specific to my codebase?

This usually happens because the command did not receive enough context about your project. Some commands are designed to analyze your codebase automatically, but they can only do so if they have access to the relevant files within the agent's context window. If your project is large, the agent may not have loaded the files it needs. The fix is to explicitly reference the relevant files or directories in your invocation.

py with reference to src/auth/strategies/" so the agent loads both files.

## How do I handle situations where two commands produce conflicting outputs?

Conflicting outputs usually mean you provided different context to each command, or the commands are operating at different levels of abstraction. For example, a planning command might suggest a simple approach, while an implementation command tries a more complex pattern because it analyzed the existing codebase and found complexity it needs to match. Resolve conflicts by re-running the later command with the earlier command's output explicitly included as context. If the conflict persists, it may indicate a genuine architectural tension that you need to resolve with a human decision before proceeding.

## Is there a way to see which slash commands my team uses most frequently?

gstack does not include built-in analytics for command usage, but you can track this manually or with shell history analysis. Search your terminal history for the slash command prefix to count invocations. Some teams add a lightweight logging wrapper that appends each invocation to a shared log file. Reviewing usage patterns monthly helps you identify which commands are underutilized, which might indicate training gaps, and which are overused, which might indicate missing commands that force workarounds through a catch-all.
