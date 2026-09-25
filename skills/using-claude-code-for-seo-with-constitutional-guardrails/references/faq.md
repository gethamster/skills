# FAQ: Claude Code Constitutional Guardrails for SEO

## What are constitutional guardrails in Claude Code?

In this skill the term covers three layers. The first is the behavior Anthropic's constitution describes for Claude, such as preferring cautious actions and reporting problems honestly. The second is Claude Code's permission system, which the tool enforces regardless of prompts. The third is your process: tests, dry runs and human review.

## Does CLAUDE.md enforce rules?

No. Claude Code's documentation says instructions in prompts and CLAUDE.md shape what Claude tries to do but do not change what Claude Code allows. Use CLAUDE.md for context and reasons, and use permission rules for anything that must never happen.

## Is Claude Code SEO automation risky for rankings?

The scripts themselves are neutral; what they produce matters. Automation that improves accuracy and maintains existing pages fits Google's guidance. Scripts that mass-produce pages or stuff keywords risk falling under Google's spam policies, however carefully the code is written.

## Should Claude Code publish changes to my site directly?

Keep publishing behind human approval. Have scripts write proposed changes to a file, review the diff, and apply through your normal deployment process. Deny the publish command in permissions so a mistake cannot bypass review.

## How should scripts handle content fetched from other sites?

Treat it as untrusted data. The constitution says instructions inside tool results and documents are information, not commands, and permissions limit what any misread instruction could do. Flag fetched pages that appear to address AI systems so a person can look.
