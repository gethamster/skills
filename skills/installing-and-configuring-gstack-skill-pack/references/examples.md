# Examples: Installing and Configuring the gstack Skill Pack

## Example: Solo Developer Setting Up gstack for a Next.js Side Project

**Scenario:**

A solo developer has a Next.js 14 app with TypeScript, Tailwind, and Supabase. They use Claude Code as their AI agent and want to install gstack to get structured help with architecture decisions, implementation, and QA. Time budget: 20 minutes.

**Walkthrough:**

claude/commands/` in their project root. claude/commands`. gitignore`. claude/commands/tools`.

" They update the context path references in three sample skill files, then verify by invoking `/dev` in Claude Code. js and Supabase stack, and asks clarifying questions about the specific feature to implement. claude/commands` symlinks and the context file to their repo.

## Example: Engineering Team of Six Adding gstack to a Monorepo

**Scenario:**

A team of six engineers works on a monorepo containing three services (API, web app, mobile BFF) using Turborepo. They use a mix of Claude Code and Cursor. They want consistent agent behavior across the team and both agent platforms. Time budget: 45 minutes for the lead, 10 minutes per team member.

**Walkthrough:**

gstack`. cursor/rules/` directories at the root. claude/commands/`. cursor/rules/` with flattened filenames (since Cursor at the time does not support subdirectories).

The context file is more detailed than the solo example. js with Fastify for API, React with Vite for web, Express BFF for mobile), shared packages, the Turborepo pipeline configuration, testing conventions (Vitest for API, Playwright for web), and the team's PR review process. They also customize the multi-agent perspectives: the CEO perspective is reframed as "Product Owner" focusing on user impact, and a "Platform" perspective is added to catch cross-service concerns. The lead commits the submodule reference, both command directories, the context file, and the Cursor sync script.

Each teammate pulls, runs the Cursor sync script if they use Cursor, and verifies with `/help`. The whole rollout takes one morning.

## Example: Freelancer Configuring gstack for Client Projects with Rotating Tech Stacks

**Scenario:**

A freelancer works on 3-4 client projects simultaneously, each with a different tech stack and set of conventions. They use Claude Code and need gstack to adapt per project without cross-contamination. Time budget: 15 minutes per project.

**Walkthrough:**

The freelancer clones gstack once into `~/tools/gstack-source/` as a personal reference copy. claude/commands/`, symlinks the gstack skills and tools from the central source, and copies a blank context template into the project root. For Client A (Rails 7, PostgreSQL, RSpec, Heroku), they fill in the context with Rails-specific conventions: "Use service objects, not fat models. RSpec with FactoryBot.

Rubocop enforced via pre-commit hook. " For Client B (Django, Docker, pytest, AWS ECS), the context is completely different. Because the gstack source is the same but the context differs, the same `/dev` command produces Rails-appropriate suggestions in Client A's directory and Django-appropriate suggestions in Client B's directory. The freelancer's setup script includes a verification step that invokes `/help` and checks the output for the project name from the context file, catching misconfigurations automatically.

## Example: Open Source Maintainer Adding gstack to a Public Repository

**Scenario:**

A maintainer of a popular open-source library wants contributors to get structured agent assistance when working on the codebase. The library is a TypeScript SDK published on npm, with 40+ contributors and strict contribution guidelines. They want gstack installed without requiring contributors to do manual setup.

**Walkthrough:**

The maintainer adds gstack as a git submodule pinned to a specific release tag for stability. claude/commands/` in the repository with symlinks to the submodule. The context file is thorough and doubles as contributor onboarding documentation: it describes the library's architecture (core module, adapters, utilities), the public API surface and semantic versioning policy, the test strategy (unit tests with Vitest, integration tests with a test harness, no mocking of internal modules), and the build pipeline (tsup for bundling, changesets for versioning). They customize the QA perspective to emphasize backward compatibility and public API stability, which are the most common sources of rejected PRs.

They also disable skills that are irrelevant for a library (deployment-related skills, infrastructure skills) by removing those symlinks. md file now includes a section: "This project uses gstack for AI-assisted development. If you use Claude Code, the slash commands are preconfigured. " New contributors who use Claude Code automatically get structured, project-aware assistance from their first interaction.
