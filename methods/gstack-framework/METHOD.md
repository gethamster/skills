---
category: Development
---

# The gstack Framework: Structured AI Coding with Specialist Skills and Multi-Agent Perspectives

> Created by **Garry Tan** — [https://www.augmentcode.com/learn/garry-tan-gstack-claude-code](https://www.augmentcode.com/learn/garry-tan-gstack-claude-code)

## Overview

Most developers working with AI coding agents hit the same wall. The first few sessions feel magical, producing working code from natural language prompts. But as projects grow beyond a single file or a weekend prototype, the lack of structure becomes obvious. Prompts get longer, context windows overflow, the agent forgets earlier decisions, and quality degrades in ways that are hard to diagnose. The gstack framework was created to solve exactly this problem: how do you impose a repeatable, opinionated workflow on top of AI coding agents so that the magic scales?

Garry Tan, best known as president and CEO of Y Combinator, released gstack as an open-source project in mid-2025. It was born from his own experience building software with Claude Code and other AI assistants. The core insight was that AI coding agents need the same kind of role clarity and phase discipline that human engineering teams rely on. Just as a well-run team has someone thinking about strategy, someone writing code, and someone testing it, an AI-assisted workflow benefits from explicitly switching between those perspectives. gstack encodes this idea into a concrete skill pack: 23 specialist skills organized around distinct development phases, plus 8 power tools for cross-cutting concerns like debugging, refactoring, and documentation.

What makes gstack distinctive in the growing landscape of AI coding frameworks is its emphasis on multi-agent perspectives rather than multi-agent orchestration. Many frameworks try to run multiple AI agents simultaneously, coordinating them through message passing or shared memory. gstack takes a different approach. It keeps a single agent but shifts its persona and instruction set depending on the phase of work. When you invoke the CEO perspective, the agent thinks about scope, priorities, and tradeoffs. When you switch to the engineer perspective, it focuses on implementation details, code quality, and architecture. The QA perspective triggers adversarial thinking, edge case exploration, and test coverage analysis. This is closer to Edward de Bono's Six Thinking Hats than it is to a microservices architecture for AI.

The framework ships as a set of markdown files following the Anthropic Agent Skills specification, which means it slots into Claude Code's native skill system. Skills are accessed through slash commands, making them discoverable and composable. You can invoke `/decide` to get the CEO perspective on a technical decision, then `/implement` to switch into engineering mode, then `/review` to run a QA pass. This gives developers a vocabulary for structuring their AI coding sessions instead of relying on ad-hoc prompting.

gstack sits at the intersection of several trends: the rise of AI coding agents, the Anthropic skills ecosystem, and the broader movement toward "prompt engineering as software engineering." It is not a replacement for tools like Cursor, Copilot, or Windsurf. Instead, it layers on top of Claude Code to provide the workflow scaffolding those tools lack. Teams that have adopted it report that the biggest benefit is not the individual skills but the discipline of moving through phases, treating AI-assisted development as a structured process rather than a stream-of-consciousness conversation.

Because it is MIT-licensed and built entirely in markdown, gstack is also designed to be forked and extended. Teams can add their own specialist skills, modify the perspective prompts to match their engineering culture, or integrate it with their existing development workflows. Hamster is one workspace where teams can run methods like gstack with AI agents, composing skills into repeatable workflows without building custom infrastructure. The framework's open nature means it evolves with the community, and the skill pack has already spawned variants tailored to specific languages, frameworks, and team sizes.

## Core Principles

### Phase Discipline Over Continuous Prompting

gstack's core claim is that AI coding sessions should move through distinct phases: decision-making, planning, implementation, and review. Each phase activates different skills and perspectives optimized for that kind of thinking. When teams skip phases, they tend to jump straight from a vague idea to code generation, which produces technically functional code that solves the wrong problem or ignores critical edge cases. The tradeoff is speed: enforcing phase transitions adds friction to the workflow, which feels unnecessary on small tasks but pays dividends on anything that takes more than an hour.

### Perspective Shifting Instead of Multi-Agent Orchestration

Rather than running multiple AI agents in parallel, gstack shifts a single agent's persona and instruction set. This avoids the coordination overhead, context synchronization bugs, and cost multiplication that come with true multi-agent systems. The CEO perspective evaluates scope and priorities. The engineer perspective focuses on architecture and implementation.

The QA perspective stress-tests assumptions and coverage. When teams rely on a single undifferentiated prompt for all of these concerns, the agent tends to optimize for the most recent instruction, losing sight of the broader context. Perspective shifting makes the tradeoffs explicit.

### Skills as Composable Units

Each of the 23 specialist skills is a self-contained markdown file that can be invoked independently or chained together. This composability means teams are not locked into a rigid workflow. A senior engineer might skip the planning skills and jump straight to implementation and review. A less experienced developer might use the full sequence.

When skills are bundled into monolithic prompts instead of composable units, the agent receives too much instruction at once, diluting the quality of each response. The modular design also makes it possible to add, remove, or customize skills without breaking the rest of the pack.

### Slash Commands as Developer Interface

gstack uses slash commands as its primary interface, making skills discoverable and memorable. Instead of writing multi-paragraph prompts, developers type `/decide`, `/plan`, `/implement`, or `/review`. This lowers the barrier to using the framework consistently. When AI workflows rely on copy-pasted prompt templates or external documentation, adoption drops because the friction of finding and applying the right prompt exceeds the perceived benefit.

Slash commands turn the framework into something that feels like a CLI tool rather than a prompt library. The tradeoff is that slash commands require a compatible agent environment, which currently means Claude Code or similar systems that support the Anthropic skills spec.

### Opinionated Defaults, Open Customization

gstack ships with strong opinions about how development should flow: decisions before code, QA perspective on every change, explicit tradeoff analysis before architectural choices. These defaults encode lessons from real projects and prevent the most common failure modes of AI-assisted development. But the MIT license and plain-markdown format mean every opinion can be overridden. Teams that disagree with gstack's review process can modify the QA skill.

Teams with domain-specific requirements can add new specialist skills. When frameworks are either too opinionated to customize or too flexible to provide guidance, they fail. gstack tries to thread the needle by being prescriptive out of the box and permissive under the hood.

### Context Window Management as a First-Class Concern

AI coding agents have finite context windows, and gstack treats this limitation as a design constraint rather than an afterthought. Each skill is scoped to fit within a reasonable context budget, and the phase structure naturally segments work into chunks that don't overflow the window. When developers ignore context limits, they end up in sessions where the agent has forgotten earlier decisions, produces contradictory code, or hallucinates function signatures. gstack's power tools include explicit mechanisms for summarizing context, checkpointing progress, and resuming work across sessions.

Skipping this discipline is the single most common reason AI coding sessions degrade on longer tasks.

### Quality Gates Between Phases

Each phase transition in gstack includes an implicit quality gate. Before moving from planning to implementation, the plan should be reviewed. Before moving from implementation to deployment, the code should pass the QA perspective. These gates catch errors at the cheapest point in the lifecycle: a flawed plan is cheaper to fix than flawed code, and flawed code is cheaper to fix than a flawed deployment.

Teams that skip quality gates in favor of speed often find they spend more total time debugging and reworking than they would have spent on the review step. The tradeoff is real, though. Strict gates slow down trivial changes that genuinely don't need review.

## Steps

1. **Step 1: Install the gstack Skill Pack**
   Download or clone the gstack repository and install it into your Claude Code environment. The skill pack consists of markdown files organized by category, following the Anthropic Agent Skills specification. After installation, verify that slash commands are recognized by invoking a simple one like `/help` or `/skills`. A successful installation means all 23 specialist skills and 8 power tools are loaded and accessible.

The most common installation issue is directory structure: the skills must be in the path that Claude Code expects, which varies depending on whether you are using a project-level or global configuration. Check the README for your specific setup. For detailed installation instructions, see [Installing and Configuring the gstack Skill Pack](https://tryhamster.com/skills/installing-and-configuring-gstack-skill-pack).

2. **Step 2: Understand the Skill Map and Phases**
   Before using gstack, spend time reading the skill map to understand which skills belong to which phase. The 23 skills are not random. They are organized into decision-making, planning, implementation, review, and maintenance phases. Each phase has 3-6 skills that activate different perspectives and address different concerns.

Knowing the map prevents the common mistake of reaching for implementation skills before the decision and planning phases are complete. It also helps you identify which skills you can skip for simpler tasks and which are essential for complex ones. For a walkthrough of all 23 skills, see [Navigating gstack's 23 Specialist Skills via Slash Commands](https://tryhamster.com/skills/navigating-gstack-slash-commands-and-specialist-skills).

3. **Step 3: Frame the Problem with the CEO Perspective**
   Start every non-trivial coding session by invoking the CEO perspective. This shifts the agent into strategic thinking mode, where it evaluates what problem you are solving, who it is for, what the constraints are, and what success looks like. The output is a problem framing document, not code. This step catches the most expensive class of errors: building the wrong thing.

You will know you have done this step well when the agent produces a clear problem statement, explicit constraints, and a prioritized list of requirements. Watch out for the temptation to skip this step because you already know what you want to build. The CEO perspective often surfaces assumptions you have not examined. See [Using Multi-Agent Perspectives (CEO, Engineer, QA) in Development](https://tryhamster.com/skills/using-multi-agent-perspectives-for-development) for deeper guidance on each perspective.

4. **Step 4: Plan the Implementation**
   With the problem framed, invoke the planning skills to produce an implementation plan. This includes breaking the work into discrete tasks, identifying dependencies, choosing architectural patterns, and specifying interfaces between components. The plan should be concrete enough that each task can be implemented in a single focused session without requiring the agent to re-derive context. A good plan includes file names, function signatures, and data flow descriptions.

' The most common failure mode at this step is over-planning: producing a 20-page document for a feature that needs 50 lines of code. Scale the planning effort to the complexity of the task. See [Structuring AI Coding Sessions from Decision-Making to Execution](https://tryhamster.com/skills/structuring-ai-coding-sessions-with-gstack-phases) for phase-specific guidance.

5. **Step 5: Implement with the Engineer Perspective**
   Switch to the engineer perspective and work through the plan task by task. Each task should be a focused interaction with the agent, scoped to fit within the context window. The engineer perspective emphasizes code quality, naming conventions, error handling, and adherence to the architectural decisions made in the planning phase. After each task, checkpoint the progress, either by committing the code or by summarizing the state for the next session.

Watch for context drift: if the agent starts producing code that contradicts earlier decisions, it has likely lost context and you need to re-establish it. The power tools for context management and checkpointing are designed for exactly this situation. See [Orchestrating gstack's 8 Power Tools in Complex Workflows](https://tryhamster.com/skills/orchestrating-power-tools-in-gstack-workflows) for tool-specific guidance.

6. **Step 6: Review with the QA Perspective**
   Before considering any unit of work complete, invoke the QA perspective. This shifts the agent into adversarial mode, where it looks for edge cases, missing error handling, security vulnerabilities, performance bottlenecks, and test coverage gaps. The QA perspective often catches issues that the engineer perspective misses because the engineer is optimizing for the happy path. A good QA review produces a specific list of issues ranked by severity, not a generic 'looks good' response.

If the QA perspective finds no issues, that is more likely a sign that the review was too shallow than that the code is perfect. Push back and ask for deeper analysis. One common gotcha is running QA only at the end of a large implementation rather than after each meaningful chunk, which concentrates risk and makes fixes more expensive.

7. **Step 7: Iterate and Customize**
   After your first few sessions with gstack, review which skills you used most, which you skipped, and where the workflow felt forced. This is the right time to customize the framework for your team's context. , a security review skill for fintech, a compliance check skill for healthcare). Modify existing skills that don't match your coding standards.

Remove skills that add friction without value for your specific projects. The framework is designed to be forked, and teams that treat it as immutable tend to abandon it when it doesn't fit their workflow perfectly. See [Customizing and Extending gstack with Your Own Skills](https://tryhamster.com/skills/customizing-and-extending-gstack-skills) for extension patterns.

## When to Use

- When you are building a codebase that has grown beyond a single file or module and your AI coding sessions are starting to produce inconsistent results because the agent loses track of earlier architectural decisions, naming conventions, or design constraints established in previous sessions.
- When your team has multiple developers using Claude Code or similar AI agents, and you need a shared vocabulary and process so that AI-generated code follows consistent patterns regardless of which developer prompted it, reducing the integration friction that comes from everyone prompting in their own style.
- When you are making consequential technical decisions, such as choosing a database, selecting an API architecture, or deciding between build-vs-buy, and you want to systematically evaluate those decisions from multiple perspectives (business value, technical feasibility, testing complexity) before committing to implementation.
- When you are onboarding a new developer or a less experienced team member who needs guardrails for AI-assisted development, giving them a structured workflow that prevents the common failure mode of generating code without thinking through requirements, edge cases, or testability first.
- When your AI coding workflow has become a stream-of-consciousness conversation where you prompt, get code, prompt again to fix bugs, prompt again to add features, and the session drifts further from any coherent plan, resulting in spaghetti code that works but cannot be maintained or extended.
- When you need to produce auditable development artifacts, such as decision logs, implementation plans, and review checklists, for compliance, team communication, or your own future reference, and you want those artifacts generated as a natural byproduct of the workflow rather than as an afterthought.

## When Not to Use

- When you are writing a quick script, a one-off automation, or a prototype that will be thrown away within a week. gstack's phase discipline adds overhead that is not justified for disposable code. The framework assumes you care about maintainability, and if you genuinely don't, the structure becomes bureaucratic friction without a payoff.
- When you are not using Claude Code or an agent that supports the Anthropic Agent Skills specification. gstack's slash commands and skill loading depend on a compatible runtime. Trying to replicate it by manually copy-pasting skill prompts into ChatGPT or Copilot loses the composability and discoverability that make the framework useful. You could adapt the ideas, but the tooling won't transfer.
- When your team has deeply established development workflows with existing code review processes, CI/CD pipelines, and architectural decision records. Layering gstack on top of a mature engineering process can create redundant checkpoints. In this case, you may benefit from cherry-picking specific skills (like the QA perspective) rather than adopting the full framework.
- When you are working in a domain where AI code generation itself is not viable, such as safety-critical embedded systems, regulated medical device software, or classified environments where AI-generated code is not permitted by policy. gstack structures the AI workflow but does not change the fundamental limitations of AI-generated code in high-stakes contexts.
- When your primary bottleneck is not workflow structure but domain knowledge. If the AI agent cannot produce correct code because the problem domain is highly specialized (custom hardware drivers, niche scientific computing, proprietary protocols), adding a workflow framework on top of an agent that lacks the underlying knowledge will not fix the core issue.

## Skills

This method includes the following skills:

- [Customizing and Extending gstack with Your Own Skills](../../skills/customizing-and-extending-gstack-skills/SKILL.md) — How to fork, modify, or author new specialist skills and power tools within the gstack open-source framework to fit your team's specific conventions and tech stack.
- [Orchestrating gstack's 8 Power Tools in Complex Workflows](../../skills/orchestrating-power-tools-in-gstack-workflows/SKILL.md) — How to use gstack's 8 power tools — higher-order commands that combine specialist skills — to manage end-to-end development workflows like feature buildout or codebase migration.
- [Comparing gstack to Other AI Coding Agent Frameworks](../../skills/comparing-gstack-to-other-ai-coding-frameworks/SKILL.md) — How to evaluate gstack's opinionated multi-agent approach against alternatives like Cursor rules, Aider conventions, or custom system prompts to choose the right AI coding workflow.
- [Using Multi-Agent Perspectives (CEO, Engineer, QA) in Development](../../skills/using-multi-agent-perspectives-for-development/SKILL.md) — How to leverage gstack's multi-role system — CEO, engineer, and QA perspectives — to structure decision-making, implementation, and quality assurance across a development workflow.
- [Installing and Configuring the gstack Skill Pack](../../skills/installing-and-configuring-gstack-skill-pack/SKILL.md) — How to install gstack from GitHub, set up slash commands, and configure it for use with Claude Code or other AI coding agents.
- [Structuring AI Coding Sessions from Decision-Making to Execution](../../skills/structuring-ai-coding-sessions-with-gstack-phases/SKILL.md) — How to follow gstack's opinionated phased workflow — moving from problem framing and architecture decisions through implementation and verification — for disciplined AI-assisted development.
- [Navigating gstack's 23 Specialist Skills via Slash Commands](../../skills/navigating-gstack-slash-commands-and-specialist-skills/SKILL.md) — How to discover, invoke, and chain gstack's 23 specialist slash commands to handle discrete tasks like planning, scaffolding, refactoring, and debugging.

## FAQ

**What is the gstack framework in simple terms?**

The gstack framework is a set of 23 specialist skills and 8 power tools that structure how you work with AI coding agents like Claude Code. Instead of writing ad-hoc prompts, you invoke slash commands that shift the agent into different modes: strategic thinking (CEO), code generation (engineer), or adversarial review (QA). It turns AI-assisted coding from a freestyle conversation into a repeatable process with distinct phases for decisions, planning, implementation, and quality checks.

**How does gstack compare to other AI coding frameworks like Cursor rules or Copilot instructions?**

Cursor rules and Copilot instructions customize code generation behavior but don't impose workflow structure. They tell the AI how to write code. gstack tells the AI when to think strategically, when to write code, and when to review it. They address different layers of the problem.

You could use Cursor for inline code completion while using gstack for the higher-level workflow around decisions, planning, and review. See [Comparing gstack to Other AI Coding Agent Frameworks](https://tryhamster.com/skills/comparing-gstack-to-other-ai-coding-frameworks) for a detailed breakdown.

**Does gstack work for solo developers or is it only for teams?**

gstack works well for solo developers, and in some ways it is even more valuable for them. On a team, you naturally get different perspectives from different people: someone asks about testing, someone questions the architecture, someone pushes back on scope. Working solo with an AI agent, all of those perspectives collapse into a single conversation. gstack's multi-agent perspectives restore that cognitive diversity by forcing the agent (and you) to consider the problem from the CEO, engineer, and QA viewpoints.

**Why does gstack fail in practice, and what are the common mistakes?**

The most common failure is over-application: using the full phase sequence for tasks that don't warrant it, like fixing a typo or adding a CSS class. This turns a two-minute task into a ten-minute ceremony and erodes trust in the framework. The second failure mode is treating gstack as a rigid process rather than a toolkit. Teams that refuse to skip steps or customize skills end up fighting the framework.

The third is context window overflow, where developers try to feed the entire project context into a single session instead of using gstack's checkpointing and context management tools.

**Can I use gstack with AI agents other than Claude Code?**

gstack is built on the Anthropic Agent Skills specification, so it works natively with Claude Code. Adapting it to other agents is possible but requires effort. The slash command interface and skill-loading mechanism are specific to the Anthropic ecosystem. For other agents, you could manually load the skill markdown files as system prompts or context, but you would lose the composability and discoverability that make gstack feel like a native tool.

The underlying ideas, phase discipline, perspective shifting, composable skills, transfer to any agent, even if the packaging doesn't.

**How does gstack work alongside existing development processes like sprints, code reviews, and CI/CD?**

gstack operates at the individual session level, not the team process level. It structures what happens inside a developer's interaction with an AI agent, not how the team plans sprints or reviews pull requests. The two layers complement each other: gstack produces better code and decision artifacts during development, and your existing sprint planning, code review, and CI/CD processes govern how that work flows into production. The decision logs and QA artifacts that gstack generates can feed directly into pull request descriptions and architectural decision records.

**Is gstack suitable for large enterprise codebases?**

gstack scales well to large codebases because its phase discipline prevents the context overflow problems that plague unstructured AI sessions on complex projects. The planning phase forces decomposition of large tasks into agent-sized chunks. The checkpointing tools maintain continuity across sessions. However, enterprise teams should plan to customize the skill pack extensively, adding domain-specific skills, adjusting the review criteria, and integrating with their existing toolchains.

The default skills are generic by design and will need tailoring for enterprise-specific concerns like compliance, security review depth, and multi-service architectures.

**What are gstack's 8 power tools and how do they differ from the 23 specialist skills?**

The 23 specialist skills are phase-specific: they belong to a particular stage of the development workflow like decision-making, planning, or review. The 8 power tools are cross-cutting utilities that support any phase: context management, debugging, refactoring, documentation generation, checkpoint/resume, dependency analysis, performance profiling, and code search. Think of skills as the what (what kind of thinking to do) and power tools as the how (how to manage the mechanics of working with an AI agent across complex sessions). See [Orchestrating gstack's 8 Power Tools in Complex Workflows](https://tryhamster.com/skills/orchestrating-power-tools-in-gstack-workflows) for detailed guidance.

---

*[Import this method into Hamster](https://tryhamster.com) to share it with your team, customize it for your workflow, and let AI agents use it automatically.*
