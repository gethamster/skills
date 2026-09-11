# FAQ: Installing and Configuring the gstack Skill Pack

## How do I install gstack framework if my AI coding agent is not Claude Code?

The core mechanism is the same for any agent: place markdown instruction files where the agent expects to find custom commands. cursor/rules/`. For Windsurf, check its documentation for the custom instructions directory. The gstack files themselves are agent-agnostic markdown.

You may need to adjust file naming conventions or flatten subdirectories depending on what the specific agent supports. Test with one skill file first before copying the entire pack.

## How long should the initial gstack installation and configuration take?

For a solo developer with a straightforward project, expect 15 to 30 minutes. The cloning and file placement takes 5 minutes. Writing a thorough project context file takes 10 to 15 minutes. Verification takes another 5 minutes.

For a team setup with multiple agents, budget 30 to 60 minutes for the lead and 10 minutes per additional team member. The most time-consuming part is always the context file, and it is also the part that pays the highest return.

## Should I install gstack framework before or after setting up my project's basic structure?

Install gstack after you have at least a basic project structure, a chosen tech stack, and an initialized repository. The context file needs real information about your project to be useful. If you install gstack into an empty directory with a blank context file, the skills will work but produce generic output. That said, you do not need a complete project.

json provides enough context to get meaningful agent behavior.

## Can I use gstack with multiple AI coding agents on the same project simultaneously?

Yes. ) and populate each one with gstack's files. Symlinks pointing to a single gstack source directory are the cleanest approach because updates propagate to all agents at once. The project context file is shared across agents since it lives at the project root.

Test each agent independently because they parse markdown instructions differently, and some may require adjusted formatting.

## Why does my gstack slash command return generic responses instead of the structured skill workflow?

This almost always means the agent cannot find the command file. First, verify the file exists in the exact directory your agent looks in. Second, check that the filename matches what the agent expects, some agents require specific naming patterns. Third, restart your agent session to clear any command cache.

Fourth, ask the agent to list the files in its command directory to confirm it can see them. If the file is found but the behavior is still generic, the skill file may have a syntax issue or the context path reference may be broken.

## How do I update gstack without losing my customizations to the project context file?

The project context file is yours and should never be overwritten by gstack updates, because it lives outside the gstack source directory. If you cloned gstack into a staging directory or submodule, running `git pull` there only updates gstack's own files. Your context file, any custom perspectives, and any override files remain untouched. If you edited gstack's skill files directly (not recommended), you will need to merge those changes manually.

This is why the best practice is to keep customizations in separate files or clearly marked blocks.

## Do I need all 23 specialist skills installed, or can I pick a subset?

You can absolutely install a subset. Only copy or symlink the skill files relevant to your work. A frontend developer might skip infrastructure and database skills. A solo developer might skip the team coordination skills.

The skills are independent, each one is a self-contained markdown file with no runtime dependency on the others. The only exception is power tools that reference specific skills. If you install a power tool, check which skills it invokes and ensure those are present. You can always add more skills later by copying additional files.
