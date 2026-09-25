# FAQ: Customizing and Extending gstack

## Do I need to fork gstack to customize it?

Usually not. Settings such as `gstack-config` options, `/plan-tune`, careful patterns and "stop suggesting" change several of gstack's behaviors without touching any skill. Your own conventions can live in separate skills in your repository. Fork only when you need to change how a gstack skill itself works.

## Why did my edit to a gstack SKILL.md disappear?

gstack generates its `SKILL.md` files from `.tmpl` templates, and the next build overwrites direct edits. Make the change in the template, then run `bun run gen:skill-docs` and `bun run skill:check`. Dev mode, entered with `bin/dev-setup`, lets you test the result in Claude Code right away.

## How do I stop my own skills from clashing with gstack's commands?

Give team skills names that cannot collide, for example with a shared team prefix, or switch gstack to prefixed command names with `./setup --prefix`. gstack's setup will not overwrite a skill it cannot prove it created and reports the collision instead. Keeping names distinct avoids the problem entirely.

## Can I add a completely new skill to gstack?

Yes, in a fork. Create a new skill directory with a `SKILL.md.tmpl`, run the generator for all hosts, and refresh the context-budget fixture, since a ratchet test fails skills without a budget ceiling. Template discovery is dynamic, so no central list needs updating. If the skill is only useful to your team, a separate skill in your repository is simpler.

## How do I keep a fork up to date?

Merge from upstream on a regular schedule and read the changelog before each merge, since gstack releases often and commands are sometimes renamed. Keep private changes small and well documented so merges stay easy. Upstream anything generally useful, which removes it from what you have to maintain.
