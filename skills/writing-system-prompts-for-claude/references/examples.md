# Examples: Writing Effective System Prompts for Claude AI

## Turning a vague bug report into a scoped prompt

**Scenario:**

Illustrative scenario: a developer's first prompt reads "login is broken, please fix," and Claude spends several turns opening unrelated files before proposing a change to the wrong module.

**Walkthrough:**

The developer reproduces the failure and pastes the full stack trace along with the request that triggered it. They reference the session handler file directly and add a scope line: only change this file, no new dependencies. They ask for a diff plus a short explanation of the cause. They add validation: run the existing auth tests and the typechecker.

The completion condition is that the tests pass and a logged-out user hitting a protected page is redirected to sign in. Claude's first attempt now targets the right file and reports test results with the diff.

## Pruning an overgrown CLAUDE.md

**Scenario:**

Illustrative scenario: a team's CLAUDE.md has grown to several screens of general style advice, old task notes and duplicated rules, and Claude still ignores the one warning that matters about a fragile billing module.

**Walkthrough:**

The team lead reviews each line against one question: would Claude get this wrong without being told, on most tasks? Generic advice like writing readable code is removed because it describes default behavior. Notes from finished tasks are deleted. The billing warning moves near the top and is rewritten as a specific gotcha naming the module and what not to change.

The test command and a typecheck rule stay because they apply to every change. Over the following week the team watches for regressions and restores nothing, and the billing rule stops being missed.

## Writing an output contract for a non-code task

**Scenario:**

Illustrative scenario: a product engineer asks Claude to compare three approaches to rate limiting and gets a long essay that is hard to bring to a design review.

**Walkthrough:**

The engineer rewrites the prompt with explicit inputs: the current middleware file, the traffic constraints the team agreed on and a link-free summary of the existing architecture pasted inline. The format section asks for a table with one row per approach and columns for complexity, failure behavior and required infrastructure, followed by a one-paragraph recommendation. Validation asks Claude to flag any claim that depends on an assumption not stated in the inputs. The completion condition is a table and recommendation that fit on one screen.

The result drops straight into the review document.
