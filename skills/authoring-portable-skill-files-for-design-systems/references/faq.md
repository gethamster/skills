# FAQ: Authoring Portable SKILL.md Files for Design Systems

## What makes a skill file portable?

Following the open Agent Skills format: a folder named after the skill, a SKILL.md with name and description frontmatter, a Markdown body, and optional reference files linked one level deep. Avoid features specific to one agent unless you need them. Claude Code, Cursor, Codex and Gemini CLI all read this format.

## How long should the file be?

Short enough that loading it does not crowd out the task. The Agent Skills specification recommends keeping SKILL.md under a few hundred lines and moving detail into referenced files. Put decisions in the main file and long lists, such as full token tables, in references.

## Should I fork Taste Skill or write my own?

Fork it if your surfaces are landing pages, portfolios or redesigns and you agree with most of its rules; replace the parts that conflict with your brand. Write your own if your work is product UI such as dashboards, which the default skill lists as out of scope. In both cases rename the skill so it does not collide with the upstream install.

## How do I test whether the skill works?

Keep a small set of standard prompts and record what the agent produces without the skill. Run the same prompts with the skill and compare against the failures you recorded. Rerun them whenever the skill, the design system or the agent changes.

## Who should own the skill?

Whoever owns the design system, with changes reviewed like code. The skill should change in the same pull request as the tokens or components it describes. Otherwise agents follow outdated rules until someone notices.
