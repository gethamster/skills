# Release Notes Writing Guidelines

## Structure

### Summary Section

- 2-3 sentences stating exactly what shipped
- No adjectives, no hype
- Lead with the most important change
- **SKIP the summary if there's only one category of changes** - it's redundant

### Change Categories

- Group related changes into 3-5 categories maximum
- Each category gets a heading (## level)
- One sentence stating the main change, then bullets only if there are multiple specifics

### Formatting Rules

- If a change only needs one sentence, don't add a bullet. Just the sentence.
- Combine small related changes: "Fixed several auth edge cases" is fine if individual fixes aren't notable
- Use bullets for lists of 2+ items only
- Never a single bullet under a heading

## Writing Style

### Do

- State facts: "MFA now supports hardware keys"
- Be specific: "Dashboard load reduced from 3s to under 1s"
- Write for technical audience - they want specifics
- Use active voice: "You can now..." or just state the change directly

### Don't

- Add preamble: "This release includes..." - just say what changed
- Use marketing language
- Describe implementation unless it affects users
- Include version numbers or dates unless specifically relevant

## Banned Words and Phrases

Never use these:

- "significant", "key", "enhanced", "improved experience", "resulting in"
- "we've made improvements", "key benefits include", "notable changes"
- "faster and more responsive", "better than ever", "exciting"
- "This release brings...", "We're pleased to announce..."
- Any phrase that could apply to any product update

## What to Include

- New features users can actually use
- Bug fixes that were affecting users
- Changes to how things work (behavior changes)
- Performance improvements with specific metrics if available

## What to Exclude

- Internal refactors that don't change user experience
- Dependency updates unless they fix a user-facing issue
- PR links or commit references
- Internal system names (Supabase, Redis, NestJS, etc.)
- Unmerged or reverted changes

## Terminology

| Internal | User-facing |
| --- | --- |
| i18n | translations |
| RLS | permissions |
| Supabase | (don't mention) |
| NestJS | backend/API |
| Server action | (just describe the action) |

## Examples of Good vs Bad

### Bad

> We've made significant improvements to the authentication system, resulting in a better user experience.

### Good

> Hardware security keys now work for two-factor authentication. Login completes in under 2 seconds.

### Bad

> This release includes several key bug fixes and enhancements across the platform.

### Good

> Fixed password reset for enterprise email domains. Team invites now work for domains with plus addressing.