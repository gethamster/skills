# Examples: Navigating gstack's 23 Specialist Skills via Slash Commands

## Example: Solo developer adding a REST endpoint to a side project

**Scenario:**

A solo developer is building a personal finance tracker in Node.js. They need to add a new endpoint for recurring transactions. The project is small, about 2,000 lines of code, with a simple Express setup. They have gstack installed but have only used two or three commands before.

**Walkthrough:**

The developer starts by running /gs-list to see all available commands. They scan the planning category and find a command for feature scoping. " The planning command outputs a task breakdown with four items: define the data model, create the route handlers, add input validation, and write integration tests. The developer reviews the plan and agrees with the scope.

They then invoke a scaffolding command, pasting the task breakdown as context. The scaffolding command produces four file stubs: a model file, a routes file, a validation middleware file, and a test file. The developer fills in the implementation manually for the model and routes, then invokes an implementation command to generate the validation logic because they are less confident in that area. Finally, they invoke a quality command on the finished files.

The quality command flags a missing edge case in the validation (negative amounts) and suggests a fix. Total time from plan to reviewed code: 22 minutes. Without gstack, the developer estimates they would have spent 10 minutes planning in their head (missing the validation edge case), 30 minutes writing everything from scratch, and another 15 minutes debugging the edge case in production.

## Example: Small team onboarding a new member using gstack

**Scenario:**

A three-person startup is onboarding a fourth engineer. The codebase is a Python Django application with about 15,000 lines. The team lead wants the new member to be productive within a day using gstack rather than spending a week reading code.

**Walkthrough:**

The team lead shares their personal reference sheet with the new engineer and highlights six commands they use daily: one for planning, one for scaffolding, two for implementation (one for business logic, one for database work), one for testing, and one for code review. The new engineer spends 20 minutes reading the skill files for those six commands to understand the personas and expected inputs. For their first task, adding a notification preferences model, they follow the three-command chain: plan, scaffold, review. The planning command asks clarifying questions about the notification channels (email, SMS, push), which forces the new engineer to check with the team lead before proceeding.

This built-in question prevents them from making an assumption that would have required a rewrite later. The scaffolding command produces Django model and serializer stubs that follow the project's existing patterns because the skill file instructs the agent to analyze the codebase's conventions. The review command catches that the new engineer forgot to add a database migration. By the end of day one, the new engineer has shipped a reviewed, tested feature and internalized the team's workflow patterns through the structure of the commands rather than through tribal knowledge.

## Example: B2B SaaS team using gstack for a complex refactoring sprint

**Scenario:**

A 12-person engineering team at a B2B SaaS company needs to refactor their authentication module from a monolithic middleware to a modular, strategy-based architecture. The existing module is 3,000 lines across 8 files. The refactoring must not break any of the 47 existing integration tests.

**Walkthrough:**

The tech lead starts by invoking a planning command to define the refactoring scope, providing the current file structure and the target architecture description. The planning command produces a phased migration plan: extract interfaces, implement strategy classes, update consumers one by one, run tests after each consumer update. The tech lead reviews the plan with the team. Next, they invoke a scaffolding command to generate the interface definitions and strategy class stubs based on the plan.

The scaffolding command produces 6 new files. Before any implementation, they invoke a quality command on the existing authentication module to identify code smells and coupling points that the refactoring should address. The quality command finds three hidden dependencies that were not in the original plan. The tech lead updates the plan to account for these.

Implementation proceeds over three days, with each developer invoking implementation commands for their assigned strategy class and quality commands after each class is complete. At the end of the sprint, all 47 tests pass plus 12 new tests for the strategy classes. The team estimates the refactoring took 40% less time than their previous refactoring effort, which was done without gstack, primarily because the planning command's phased approach prevented the "big bang" rewrite pattern that caused regressions last time.

## Example: Open-source contributor using gstack to understand and extend an unfamiliar codebase

**Scenario:**

A developer wants to contribute a plugin to an open-source project they have never worked on before. The project is a Rust CLI tool with about 8,000 lines of code. They installed gstack and want to use it to navigate the codebase before writing their plugin.

**Walkthrough:**

The contributor starts by scanning the full command list and identifies a documentation-category command that generates architecture overviews from existing code. They invoke it, pointing at the project's src directory. The command produces a module dependency diagram and a summary of each module's responsibility. This gives the contributor a map of the codebase in under three minutes, compared to the hour or more they would have spent reading files manually.

They then invoke a planning command to design their plugin, providing the architecture overview as context and describing the plugin's purpose. The planning command identifies which existing modules the plugin needs to interface with and suggests an integration approach that follows the project's conventions. The contributor scaffolds the plugin structure, implements the core logic, and runs a quality command that checks for idiomatic Rust patterns and consistency with the project's existing style. The quality command flags two instances where the contributor used String where the project consistently uses &str, plus a missing error handling pattern.

After fixing those issues, the contributor submits a pull request that the maintainer accepts with minimal revisions, noting that the contribution follows the project's conventions unusually well for a first-time contributor.
