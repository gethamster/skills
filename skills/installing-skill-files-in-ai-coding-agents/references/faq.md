# FAQ: Installing Taste Skill SKILL.md Files in AI Coding Agents

## Do I need the skills CLI?

No. The CLI is the easiest route and the one the Taste Skill README recommends, but a skill is only a folder with a SKILL.md file. You can copy the folder into the directory your agent reads, or paste the file into a chat as instructions. Keep the folder name equal to the skill's name field when copying by hand.

## Where should the files live for a team?

In the repository, in project scope, so everyone and every agent session gets the same rules. Pick one directory as the source of truth and point other agents at it. Personal global installs are fine for trying a skill before proposing it to the team.

## How do I know the agent is using the skill?

Check that the agent lists it, then give a task that should trigger it and ask the agent which skills it applied. With the Taste Skill default, a stated design read and dial values are a clear sign it loaded. If not, check the location, the frontmatter and whether the task matches the skill's description.

## Is it safe to install third-party skills?

Treat them like third-party code. Anthropic's documentation advises using skills from trusted sources and auditing every bundled file before use, because a skill can direct an agent to run tools. Taste Skill's design skills are Markdown instructions, but you should still read them before your agent follows them.

## Which version of the default skill should I install?

The current default, design-taste-frontend, is v2 and marked experimental. Install it unless you depend on the original behavior, in which case install design-taste-frontend-v1. Whichever you choose, record it so updates are deliberate.
