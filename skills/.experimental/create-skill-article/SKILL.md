---
name: create-skill-article
description: "Write a longform X article launching or covering a skill (a Hamster library skill, one of our own, or a popular third-party skill like show-me or /teach), in the proven format that opens with real posts proving the pain, announces the skill, tours what's inside with a visual per component, and closes with exact invocations to try. Use this skill whenever Eyal wants an article, longform post, or launch piece about a skill, says \\\"write the article for [skill]\\\", wants to cover someone else's skill and position Hamster as where you run it, or asks to turn a skill into content. Requires a source pack from find-source-material; if none exists, run that skill first."
version: "1.0.0"
---

# Create Skill Article

You are writing a longform X article about a skill, as Eyal. The format is modeled on dexhorthy's show-me launch piece. It sells by showing: other people's complaints prove the pain, visuals prove the skill works, and the reader leaves with exact commands to run. The article never pitches.

Ensure you follow Hamster's copy tone of voice.
Make use of appropriate skills, including the mermaid-diagrams skill as appropriate.

## Before writing

1. **Read `references/article-anatomy.md`** — the section-by-section template with image roles and conventions. Non-negotiable.
2. **Confirm you have a source pack** from `find-source-material`. No source pack, no article. The pain-proof section runs on real posts.
3. **Confirm the skill's mechanics.** Read the skill's actual SKILL.md or docs page. Every claim about what it does must be grounded in what it actually does. Never invent a component, an output, or a command.
4. **Confirm the "get it" path.** There is currently no CLI install command for Hamster library skills. The get-it block uses the skill's real tryhamster.com page URL or "add it from your library in Hamster." Ask Eyal for the canonical link. If a CLI command ships later, it replaces this. NEVER invent a command like `npx hamster add` — if you are unsure of the path, write `[GET-IT LINK NEEDED]` and flag it.
5. If the voice reference from the `hamster-content` skill is available, read it. Its rules apply here in full. The compact ruleset is also in the anatomy reference in case this skill travels alone.
6. **Check if a diagram is warranted.** If the skill involves a workflow, pipeline, decision tree, or 4+ components whose relationships matter, plan a Mermaid diagram. Read the `mermaid-diagrams` skill for best practices. The diagram is a deliverable artifact, not a placeholder — output renderable Mermaid code in a fenced block. Do NOT create a diagram for a simple sequential list or a feature list; a numbered list is better there.

## Two modes

**Our skill.** Standard launch: pain → our skill → tour → try it. Hamster is the author.

**Third-party skill** (show-me, /teach, gstack, a community skill). The move is additive, never editorial. The article covers the skill on its own merits, credits the creator prominently (embed their launch post), and positions Hamster as where you run it with team context and where a routine can automate it. The closing section points to both: try the skill, and here's what it looks like running in Hamster. If a companion routine exists (from `create-routine-from-skill`), tease it as the follow-up. Do not review, rank, or critique the skill. We amplify and extend.

## Process

1. Map the source pack onto the anatomy: which posts prove the pain, which prior art gets credited, what grounds the proposal.
2. Draft section by section per the anatomy. Prose between visuals: 3 sentences max. Where an image goes, insert a bracketed image slot: `[IMG-03 — wide: /command invoked in Hamster chat, response streaming below]`.
3. If a diagram is warranted (step 6 above), write the Mermaid code block and place it inline where the anatomy says a visual belongs. Add a one-line caption above it. Follow mermaid-diagrams best practices: set `TD` or `LR` explicitly, keep labels to 1-3 words, use solid links for main flow, dashed for alternatives, max 2 link styles.
4. Extract the shot list: every `[IMG-nn]` slot, numbered, with what the capture must show and orientation. This is Eyal's capture checklist. If a Mermaid diagram was written, note it in the shot list as "Mermaid code block — no capture needed, renders inline."
5. List source gaps: any claim still standing on nothing (no post, no screenshot possible). The article does not publish with open gaps.
6. Run the checklist at the bottom of `references/article-anatomy.md`. Fix failures before presenting.

## Output

Three artifacts, in one delivery:

1. **The draft** — full article, X-longform-ready, with image slots inline and Mermaid code blocks where diagrams were warranted
2. **The shot list** — numbered captures with descriptions and orientation; Mermaid diagrams flagged as "no capture needed"
3. **Gaps** — anything needing a real source or a decision from Eyal (including the get-it link if unconfirmed)

Deliver finished artifacts. No walkthrough of your reasoning, no three alternative drafts unless asked. One strong candidate.
