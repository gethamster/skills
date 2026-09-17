# Authoring Methods, Skills & Connections (Reference)

Blueprints describe what is true. These three describe how work gets done and how the system acts. This reference covers how to author each, and how they relate.

## Methods

Methods are how-to documents, not state documents. They are procedural and action-oriented.

**Create a method when:**

- A workflow repeats often enough that standardizing it saves time ("How to ship a brief to GitHub").
- A process has enough steps that people get lost without a guide ("How to set up a new connection").
- A procedure has quality or compliance requirements that must be followed consistently ("How to run an A/B test").

**Structure:**

1. **Purpose**: what this accomplishes and when to use it.
2. **Prerequisites**: what must be in place first (connections, access, prior steps).
3. **Steps**: sequential and numbered, each with its expected outcome.
4. **Validation**: how to confirm it was executed correctly.
5. **Troubleshooting**: common failure modes and fixes.

**Scope:** one method per discrete workflow. Past ~15 steps, split into sub-methods.

**Anti-pattern:** writing a method as narrative. Methods are procedural and scannable. Narrative belongs in blueprints.

## Skills

Skills are behavioral guidance for the harness. They shape how it approaches a type of work by loading domain-specific instructions into context.

**Create a skill when:**

- A domain has conventions the harness should follow ("NestJS best practices," "accessibility compliance").
- A type of work has patterns that differ from generic best practice ("Hamster-specific React patterns" vs generic React).
- The harness repeatedly makes the same mistake that targeted guidance would prevent.

**Content:**

- **When to use it**: trigger conditions, the task or code patterns that activate the skill.
- **Core guidance**: the rules, patterns, and conventions to follow.
- **Concrete examples**: real code or config showing the pattern in action.
- **Anti-patterns**: what not to do, and why.

**Granularity:** one skill per coherent domain. Do not write "all of backend development." Write "NestJS patterns," "BullMQ job queues," "API route handlers" separately.

**Anti-pattern:** duplicating blueprint content. A skill guides behavior ("follow this pattern when writing API routes"). A blueprint records state ("our API routes use this pattern because we decided X in Q2 2024"). If a skill starts explaining why the product is shaped a certain way, that belongs in a blueprint.

## Connections

Connections are the action layer. They let the harness read from and write to external systems, and they feed those systems back into the graph.

**Document per connection:**

- **Purpose**: why it exists and what workflow it enables.
- **Actions**: what the harness can do through it (read, write, search) and the constraints.
- **Data flow**: how its actions contribute to the graph (Linear issues become nodes, Slack threads become searchable context).
- **Maintenance**: when to review it (new team members, changed permissions, stale integrations, errors).

**Anti-pattern:** treating connections as pure plumbing. Each connection contributes context to the graph. Documenting what it provides tells maintainers what the graph actually covers.

## How the three relate

A **method is a container for skills.** A "Design Sprint" method bundles skills like "Wireframing," "User Testing," and "Design Review" beneath it. The method is the durable process; the skills are the discrete capabilities inside it.

**Connections feed the raw material.** PRs, tickets, and threads are what both blueprints and methods reference. When a connection surfaces a consistent pattern (a recurring testing approach across PRs), that is a signal to capture a new skill.

The loop: connections pull in decisions, code, and conversations; the Context Graph indexes and relates them; blueprints record current state; methods and skills guide how work gets done; the harness retrieves across all four. See reference: Context Graph.