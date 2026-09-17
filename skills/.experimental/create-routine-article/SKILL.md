---
name: create-routine-article
description: "Write a longform X article announcing a routine, a skill running on autopilot in Hamster, whether it automates one of our skills or upgrades a popular third-party skill with automation. Use this skill whenever Eyal wants an article about a routine, about automating a skill, about \\\"running [skill] on a schedule\\\", or wants the follow-up piece after a skill article that introduces the automated version. Requires a source pack from find-source-material and a routine spec from create-routine-from-skill; if either is missing, run those first."
---

# Create Routine Article

You are writing a longform X article about a routine, as Eyal. Same skeleton as the skill article, different spine: the pain is not "this task is hard," it's "I do this by hand, on repeat, and forget half the time." The payoff is not "here's a capability," it's "I stopped doing this. It just happens now."

Ensure you follow Hamster's copy tone of voice.
Make use of appropriate skills, including the mermaid-diagrams skill as appropriate.

## Before writing

1. **Read `references/article-anatomy.md`** — the routine variant of the template.
2. **Confirm inputs exist**: a source pack (`find-source-material`) and a routine spec (`create-routine-from-skill`). The article's "what's inside" section IS the spec, made visual. No spec, no article.
3. **Confirm mechanics.** Everything about the routine (trigger, cadence, output) comes from the spec, which was verified against live docs. Never re-invent it here. If the spec has open items, they are article gaps.
4. **Get-it path**: there is no CLI install command. Use the real tryhamster.com link or "set it up in Hamster." Ask for the canonical link; placeholder as `[GET-IT LINK NEEDED]` if unknown. Never invent a command.
5. Read the `hamster-content` voice reference if available; the compact ruleset in the anatomy covers the floor otherwise.
6. **Check if a diagram is warranted.** A routine's flow (trigger → execution → output → human gate) is often simple enough that a diagram is optional. Create a Mermaid diagram only if the routine has branching, conditional paths, or 4+ steps whose relationships matter. If the routine is a straight line (trigger fires → prompt runs → output lands), a numbered list is better — do NOT force a diagram. Read the `mermaid-diagrams` skill for best practices if a diagram is warranted.

## The routine spine (what changes vs a skill article)

- **The pain is repetition, not capability.** The pain-proof posts show people describing manual rhythm: "every morning I...", "I keep forgetting to...", "third time this week I've...". Point `find-source-material` at that flavor of complaint.
- **The prior-art beat is the manual version.** Often that's our own skill article ("we shipped [skill]; people loved it; then we noticed everyone was invoking it by hand every Monday"). For a third-party skill, it's the skill itself plus its creator, credited and embedded. Either way, the routine is presented as the natural next floor, never as a fix for something broken.
- **The tour is a run, not a feature list.** "what's inside" walks the trigger, the prompt, and a real run: what fired, what it did, where the output landed. The reader should be able to predict run #2 from the article.
- **Before/after replaces the demo pair.** The strongest visual contrast is the manual invocation next to the run history showing it happening on its own.

## Process

1. Map source pack + routine spec onto the anatomy.
2. Draft per the anatomy, image slots inline as `[IMG-nn — orientation: description]`.
3. If a diagram is warranted (step 6 above), write the Mermaid code block and place it inline where the anatomy says a visual belongs. Add a one-line caption above it. Follow mermaid-diagrams best practices: set `TD` or `LR` explicitly, keep labels to 1-3 words, use solid links for main flow, dashed for alternatives, max 2 link styles.
4. Extract the shot list (run history, trigger config, output destination, and the before/after pair are mandatory captures). If a Mermaid diagram was written, note it in the shot list as "Mermaid code block — no capture needed, renders inline."
5. List gaps, including any spec open items that survived.
6. Run the checklist at the bottom of the anatomy reference.

## Output

1. **The draft** — X-longform-ready with image slots inline and Mermaid code blocks where diagrams were warranted
2. **The shot list** — numbered, with description and orientation; Mermaid diagrams flagged as "no capture needed"
3. **Gaps** — unsourced claims, unconfirmed links, spec open items

One strong candidate, no walkthrough of reasoning.
