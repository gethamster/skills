---
name: pr-walkthrough
description: "Produce a reviewer's orientation guide for a large or foundational pull request — a structured walkthrough that explains the mental model, traces the data/code flow, recommends a reading order, and tells the reviewer how to see and test the change locally. NOT a code review and does NOT produce inline review comments. Use when the user says things like \\\"explain this PR to me\\\", \\\"walk me through this PR\\\", \\\"I was asked to review this huge PR\\\", \\\"help me understand this PR\\\", \\\"where do I start with this PR\\\", \\\"this PR is a 20k LOC boulder\\\", or otherwise asks for orientation rather than judgment on a large/architectural/foundational change. Do NOT use for small PRs (where the diff speaks for itself), for \\\"review this PR\\\" requests asking for issue-finding (use the pr-review skill instead), or for \\\"what does this code do\\\" queries scoped to a single file."
version: "1.0.0"
---

# PR Walkthrough

Produce a reviewer's orientation guide for a large or foundational PR. The output is a **walkthrough**, not a review — it teaches the reviewer the new system so they can review productively, but it does **not** generate review comments, judgments, or issue lists.

## When this skill is the right call

Use it when the reviewer is staring at a PR that's too big to read linearly:

- 5k+ LOC, or 50+ changed files, or
- Introduces a new subsystem / module / schema, or
- The user explicitly asks "explain", "walk me through", "where do I start", "help me understand"

Do NOT use it for:

- Small PRs — the diff speaks for itself
- "Review this PR" / "find bugs" — that's a different skill (`pr-review`)
- Single-file questions — use Read directly

If the user asks for a walkthrough AND wants review comments after, do the walkthrough first, then explicitly offer: "Want me to follow up with a code review pass?"

## The output structure

The walkthrough has 9 sections, in this order. Skip a section only if it genuinely has nothing to say — never pad.

1. **Headline framing** — one paragraph: what this PR adds, in the user's language. Borrow the author's framing from the PR description but compress it.
2. **The mental model in N sentences** — 2–4 numbered sentences that distill the *idea*, not the diff. This is the most important section. The reviewer should be able to explain the PR to a colleague after reading just this.
3. **Database / schema / type foundation** — start at the data layer. Tables, enums, types, migrations. Foundation drives everything; reviewers who understand the schema understand 60% of the PR.
4. **Backend / module architecture** — a file tree of the new module(s), then a paragraph per major component. Show *where things live* before *how they work*.
5. **Traced end-to-end flow** — pick *one* representative user/data action and trace it as a numbered list from the trigger through every layer to the final write or render. This is what makes the architecture click.
6. **Frontend / UI** — the new page(s), components, state, routing. Where it lives in navigation. Brief.
7. **How to see it locally** — concrete bash commands. What to start, what to seed, how to navigate to the new UI. The reviewer should be able to copy-paste and have it running.
8. **How to test** — test commands grouped by layer (db / unit / integration / e2e), plus a manual smoke test. Reference the actual test files added in the PR.
9. **What to focus on as a reviewer** — high-priority concerns (architecture, data integrity, security, performance) vs. low-priority (cosmetic, style). Be opinionated about what matters most. Then a short "what's deliberately out of scope" list — pulled from the PR description or design docs — so the reviewer doesn't ask for things that aren't there.

Optionally, end with a **TL;DR table** — a final cheat-sheet of "what / where / why" the reviewer can use as a checklist. Adds a lot when the PR is genuinely huge.

For a worked example of this exact structure on a real 20k-LOC PR, see [references/example-walkthrough.md](references/example-walkthrough.md).

## Methodology

Follow this order. It saves the most time.

### 1. Read the PR description and any design docs first

```bash
gh pr view <number> --json title,body,additions,deletions,changedFiles
```

The author's framing matters more than the diff. If the PR description references a design doc (look for `.agents/plans/`, `docs/rfcs/`, `docs/adrs/`, `*.md` in the diff that describes goals), **read it before any code**. Design docs tell you what's *deliberately not* in the PR — that's section 9 of the output.

```bash
git diff <base>...HEAD --stat | head -100
git log <base>..HEAD --oneline
```

The commit log is the second-best framing. Look for `feat:` / `fix:` / `refactor:` prefixes and the chronological story they tell.

### 2. Read the schema/types layer next, in full

Find new SQL files, type definitions, enums, contracts. Read them completely, not in fragments. The schema is the smallest layer with the highest information density.

```bash
git diff <base>...HEAD --stat -- '*.sql' '*types*.ts' '*schema*.ts' '*.proto'
```

Quote enum names, table names, key constraints, and indices in the walkthrough. Reviewers anchor on these.

### 3. Find the entry points before the implementation

Controllers, route handlers, the main service file, the queue consumer, the trigger function. Just list them — don't read them yet.

```bash
ls <new-module>/
```

The file tree alone is half the architectural story.

### 4. Trace exactly ONE end-to-end flow, deeply

Pick the most representative user action. For an event-driven system, pick the most-used trigger and trace it through every layer until it lands as a write or render. Read the actual files at the actual line numbers — don't paraphrase from imagination.

The trace should be a numbered list:

```
1. User edits a brief → DB row updates
2. Trigger fires → publishes to Realtime
3. Listener subscribes, debounces, queues a job
4. Consumer picks it up → calls the projection service
5. ...
```

This single trace teaches the architecture better than reading every file.

### 5. Read ONE example of each repeating pattern

If there are 7 projectors / 5 handlers / 12 components, read one fully and skim the rest. They follow the same shape; the first one teaches it.

### 6. Find the UI entry point and write actual bash commands

Don't say "run the app and click around." Say:

```bash
pnpm supabase:web:start
pnpm supabase:web:reset
pnpm dev
# In a browser: log in, switch to a team account, click the "Foo" sidebar item.
```

Find the sidebar/nav config file (`*navigation.config.tsx` or similar), find the route, and tell the reviewer exactly where to click.

### 7. Map tests by layer

Find every new test file:

```bash
git diff <base>...HEAD --stat | grep -E '\.(test|spec)\.'
```

Group them by layer (DB / unit / integration / e2e) and give the run command for each layer. Note coverage strength honestly — if it's strong, say so; if it's a gap, say so.

### 8. Cross-reference the design doc to enumerate what's NOT in the PR

This is the section reviewers most often miss. If the design doc lists 5 phases and the PR ships phases 0–1, list phases 2–5 as "out of scope" so the reviewer doesn't ask for them. Saves a review round-trip.

### 9. Be opinionated in section 9 (focus areas)

Don't list every concern. Pick the top 5–8 highest-leverage things:

- Subtle constraints (GIST exclusions, RLS policies, race conditions)
- Hot paths and cost concerns
- Security boundaries
- Anything where the reviewer would benefit from prior context they wouldn't get from the diff

For each, give a file + line reference. *"Look at `services/foo.ts:124-131` — fire-and-forget LLM call after every projection. Worth raising."*

## Tone and length

- **Conversational, not formal.** The reviewer is a colleague who needs to be brought up to speed, not a customer reading docs.
- **Opinionated and concrete.** Always file:line. Always specific. Never "this looks well-structured."
- **Honest about uncertainty.** "I'm not sure if X handles Y — worth checking" beats hedging or making it up.
- **Short paragraphs, lots of structure.** Bullets, tables, code blocks. Reviewers scan; design for scanning.
- **Length scales with PR size.** A 5k-LOC walkthrough might be 800 words. A 20k-LOC walkthrough might be 3000. Don't pad to fit a length.

## What the walkthrough is NOT

- **Not a code review.** No "consider doing X." No quality judgments. No inline comments. If issues come up while reading the diff, note them privately and offer at the end: *"Want me to run a code review pass next?"*
- **Not a summary of the PR description.** The reviewer already read that. Add value beyond it: trace the flow, surface the subtle constraints, give them the reading order.
- **Not exhaustive.** It's an orientation, not a manual. Cover what helps the reviewer get unstuck; link to files for the rest.
- **Not a graded report.** No "strengths and weaknesses" section. The reviewer makes those judgments.

## When to surface follow-up offers

At the end of the walkthrough, if the user originally asked for help reviewing (not just understanding), offer:

> Want me to follow up with a code review pass and drop inline comments via the pr-review skill?

If the user only asked to understand, don't offer — just deliver the walkthrough cleanly.

## Reference

[references/example-walkthrough.md](references/example-walkthrough.md) — a complete worked example of a walkthrough produced for a real 20k-LOC, 117-file PR introducing a new database-backed subsystem. Use it as a *structural* template, not a content template — the section ordering, tone, opinionated focus areas, file:line citations, and TL;DR table are the parts to mimic.
