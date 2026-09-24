# FAQ: Designing Agent Roles and Scopes

## How many teammates should an Agent Team have?

Practitioner guidance from DataCamp suggests starting with three to five teammates for most workflows. The reasoning is that coordination overhead grows faster than parallel speedup as the team grows. Let the number of genuinely separate work areas set the ceiling. If you cannot give a teammate its own owned files, you probably do not need that teammate.

## Can I reuse the same role definition across projects?

Yes. Anthropic's documentation describes defining teammate roles as subagent definitions and referencing them when spawning team members, and the same definition can also run as an ordinary subagent. Keep the reusable part generic: focus, tool restrictions, model and behaviour. Pass project-specific paths and ownership in the prompt when you spawn the teammate.

## Why does file ownership matter so much for Agent Teams?

Teammates do not receive isolated worktrees, so they all edit the same files on disk. Without explicit ownership, two teammates can change one file at the same time and create conflicts. Ownership lists turn that risk into a clear rule about who may touch what. They also tell the lead exactly whom to ask when something in a file breaks.

## Should the reviewer be allowed to fix what it finds?

No. Keeping review and modification in separate roles preserves an independent quality check, which is the reason for having a reviewer at all. Restrict the reviewer to read-only tools and have it report findings to the lead. The lead then routes each fix to the teammate who owns the affected files.

## What should a role do when it needs a change outside its scope?

It should stop and message the lead or the owning teammate rather than editing the file itself. Write this behaviour into the role's exclusions and system prompt so it is the default. The lead can then create a task for the owning role or adjust the shared contract. Handling out-of-scope needs this way keeps ownership intact and makes cross-role dependencies visible.
