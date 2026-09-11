# Examples: Customizing and Extending gstack with Your Own Skills

## Example: Small startup encoding API response conventions

**Scenario:**

A 4-person backend team uses NestJS with PostgreSQL. Every API response must follow a specific envelope format, include request tracing IDs, and use a custom error code taxonomy. New developers (and the AI agent) keep forgetting the error code mapping.

**Walkthrough:**

The team lead forks the gstack framework GitHub repository under their org account. They audit last month's PR comments and find 14 corrections related to API response formatting, with 9 of them about incorrect error codes. md` with YAML frontmatter declaring the slash command `/api-response`, the role `engineer`, and no dependencies. , `AUTH_001` through `AUTH_005` for authentication errors, `VAL_001` through `VAL_012` for validation errors), and an instruction to always include the `traceId` from the request context.

They register it in the manifest, test it with three different endpoint scenarios (a successful list response, a validation error, and an auth failure), and verify the output matches their standard on all three. After the PR is merged and the team pulls the update, API response convention violations in code review drop from 9 per sprint to 1 within two sprints.

## Example: Mid-size B2B SaaS team modifying the default code review skill

**Scenario:**

A 12-person engineering team has an existing gstack setup. Their codebase has strict rules about database query patterns: no N+1 queries in API handlers, all queries must use the query builder rather than raw SQL, and any new table access must include a comment referencing the data model documentation page.

**Walkthrough:**

Rather than creating a separate skill, the senior engineer modifies the existing code review skill file. They open the skill's markdown file, scroll to the end of the default instructions, and add a section titled `## TeamDB Query Standards`. ' They preserve the entire original skill content above their additions. Testing confirms that the modified skill catches a real N+1 pattern in a recent PR diff and correctly suggests the QueryBuilder syntax.

Because they modified rather than created, the existing `/review` slash command picks up the changes with no manifest update needed. The team pulls the fork update and immediately benefits.

## Example: Large enterprise team creating a compliance-focused skill

**Scenario:**

A 40-person engineering organization at a fintech company needs every code change that touches payment processing to include specific audit log entries, use approved cryptographic libraries only, and include a compliance tag in the commit message. These requirements come from their SOC2 and PCI-DSS obligations.

**Walkthrough:**

md`. The YAML frontmatter declares the slash command `/compliance`, roles `engineer` and `qa` (to get both implementation and verification perspectives from gstack's multi-agent system), and a dependency on the default security review skill. record()` with the transaction ID, actor ID, and action type), Cryptography (only `@finco/crypto` library permitted for hashing and encryption, with a list of approved algorithms), and Commit Standards (commit messages for payment-related changes must include `[PCI]` or `[SOC2]` tags). They also add an Output Format section specifying that the skill should produce a compliance checklist with pass/fail for each item and a summary suitable for the PR description.

After thorough testing with five different payment-related code changes, they distribute the skill across all engineering teams. Compliance review time per PR drops from 25 minutes of manual checking to 5 minutes of verifying the AI's checklist output.

## Example: Solo developer creating a personal deployment skill

**Scenario:**

A solo developer runs three side projects, each deployed differently: one on Vercel, one on Railway, and one on a VPS with Docker. They keep mixing up deployment steps and environment variable names between projects.

**Walkthrough:**

md`. Each skill's system prompt encodes the exact deployment sequence for that platform, including the specific environment variables needed (with placeholder values, never real secrets), the pre-deployment checks (run tests, verify build, check for uncommitted changes), and the post-deployment verification steps (hit the health endpoint, check error monitoring, verify the latest migration ran). The YAML frontmatter for each declares no role dependencies since this is a solo workflow. deploy-target` file that specifies the platform, so invoking `/deploy` in any project context routes to the correct skill.

After setup, the developer never again accidentally pushes Railway environment variables to the Vercel project. Total authoring time for all three skills is about 90 minutes.
