---
name: create-method-article
description: "Write a longform X article announcing a method, a group of skills and routines packaged as a single approach in Hamster, such as a workflow methodology, a framework with its skills, or a bundle upgrading popular third-party skills with routines. Use this skill whenever Eyal wants an article about a method, a methodology piece, a \\\"here's our whole approach to X\\\" article, or the umbrella piece that ties existing skill and routine articles together. Requires a source pack from find-source-material; component skill/routine articles are the ideal supporting material when they exist."
---

# Create Method Article

You are writing a longform X article about a method, as Eyal. Same skeleton as the skill article, widest spine: the pain is not a task or a repetition, it's a whole workflow that leaks. The method is the answer as a system: these skills, those routines, in this order, and the reader can adopt it piecewise.

A method article is also the compounding piece. When component articles exist (skill articles, routine articles), it links them all, and each of them links back. Write it so every component section works as a teaser for its own deep-dive.

Ensure you follow Hamster's copy tone of voice.
Make use of appropriate skills, including the mermaid-diagrams skill as appropriate.

## Before writing

1. **Read `references/article-anatomy.md`** — the method variant of the template.
2. **Confirm a source pack exists** from `find-source-material`, aimed at the workflow-level pain (people describing the whole broken loop, not one task).
3. **Inventory the components.** List every skill and routine in the method, each with: name, one-sentence job, link (library page or its own article), and creator if third-party. Read each component's actual SKILL.md or spec. Never include a component you have not verified, never invent one to round out the set.
4. **Confirm the sequence.** A method is an order, not a pile. Confirm with Eyal how the components chain: what feeds what, where the human sits, what the loop looks like end to end. If the sequence is unclear, that is a blocking question, not a guess.
5. **Get-it path**: real tryhamster.com method page or "add the method in Hamster." No invented commands; `[GET-IT LINK NEEDED]` if unconfirmed.
6. Read the `hamster-content` voice reference if available.
7. **Plan the flow diagram as Mermaid.** The method's flow diagram is the hero asset (IMG-01). It MUST be delivered as renderable Mermaid code, not a "design-needed" placeholder. Read the `mermaid-diagrams` skill for best practices. The diagram shows: components as nodes, the sequence as arrows, the human's position marked. Use `flowchart TD` for 5+ nodes; `flowchart LR` only if the flow is naturally wide and shallow (2-3 rows). Keep labels to 1-3 words. Use subgraphs to group parallel tracks or cross-cutting routines. Solid links for the main sequence; dashed for optional/alternative paths. Max 2 link styles.

## The method spine (what changes vs a skill article)

- **The pain is the workflow.** Pain-proof posts show people describing the leaky loop across steps: context lost between stages, handoffs, the same alignment redone. Bigger complaints, fewer of them, more credible authors.
- **The proposal is a sequence.** Before touring components, show the whole shape in one visual: the method as a flow. This diagram is the article's hero asset — delivered as Mermaid code that renders inline.
- **The tour is components in running order.** Each component gets the teaser treatment: 1-2 sentences on its job in the sequence, one visual, a link to its deep-dive article when one exists, creator credit when third-party. The article must be readable without opening any deep-dive, and each section must make you want to.
- **Adoption is piecewise.** The closer tells the reader where to start: the one component that pays off standalone, then the natural second. Nobody adopts nine things at once; the article respects that.

## Process

1. Map source pack + component inventory onto the anatomy.
2. Draft per the anatomy, image slots inline as `[IMG-nn — orientation: description]`.
3. Write the flow diagram as a Mermaid code block. Place it at IMG-01 (hero) and again mid-article if the piece runs long enough that the reader loses the shape. Add a one-line caption above each diagram. Follow mermaid-diagrams best practices strictly.
4. Extract the shot list. The flow diagram is listed first and flagged as "Mermaid code block — no capture needed, renders inline." All other captures numbered with description and orientation.
5. List gaps: unverified components, missing deep-dive links, unconfirmed sequence points.
6. Run the anatomy checklist.

## Output

1. **The draft** — X-longform-ready with image slots inline and the flow diagram as a Mermaid code block (not a placeholder)
2. **The shot list** — numbered; the flow diagram flagged as Mermaid code, no capture needed; all other captures described
3. **Gaps** — plus a note of which component articles do not exist yet, as candidates for the pipeline

One strong candidate, delivered finished.
