# Context Graph (Reference)

The Context Graph is the retrieval engine that connects Blueprints, Methods, Skills, and Connections into one actionable knowledge base, provided as context to the harness.

## Why it matters

Most context in a product team does not live in one place. It is scattered: a PR from three months ago, a Linear ticket linked to a Slack thread, a Figma file shared by URL, a call transcript, a decision made in chat three weeks back. The graph is how Hamster sees all of it at once, without anyone moving it.

To perform well the graph needs three things:

- **Rich connectivity.** Every brief, decision, and document is linked to the work around it.
- **Contribution standards.** The team feeds the graph consistently (naming, links, structure).
- **Self-improvement.** The graph learns from what the team does (decision lineage, document versions, team movement) and gets smarter over time.

## Three layers

- **Hamster artifacts:** briefs, blueprints, methods, skills, goals, initiatives. The team's durable understanding.
- **External systems:** GitHub, Linear, Slack, Figma, Notion, Google Drive. Where work actually happens.
- **Relationships:** who owns what, which brief belongs to which initiative, which decision shaped which feature, which document informs which task.

## Three retrieval modes

When the harness answers a question, it retrieves in three complementary ways:

- **Direct entity read.** If you name a brief or initiative, it reads that directly.
- **Relationship-first lookup.** For multi-step questions, it walks the graph relationships first ("what briefs are in this initiative?").
- **Semantic search.** For open-ended questions, it searches across passages in briefs, documents, and threads, ranked by relevance.

Richly linked context performs better because the harness can walk relationships instead of relying on keyword matching alone.

## Self-improvement through contribution

The graph improves automatically as the team contributes:

- **Decision lineage:** every approved brief, status change, and alignment vote is recorded with timing and reasoning.
- **Document versions:** blueprints and methods evolve, and the graph tracks the changes, so the harness understands how thinking shifted.
- **Team movement:** who worked on what, in what order, helps predict which decisions matter and which context surfaces first.
- **Conversation threads:** chats attached to briefs, documents, and initiatives add reasoning to decisions.

## Contribution standards by layer

**Layer 1, Hamster artifacts.** Every artifact stays linked and current. Refresh triggers fire when related work moves (briefs approved, initiatives ship, decisions made). See method: Hamster Knowledge for the trigger table.

**Layer 2, external systems.** Consistent tagging, naming, and threading so decisions stay traceable. PR titles that reference brief numbers; Linear tickets linked to briefs; Slack threads pinned to the brief that kicked them off.

**Layer 3, relationships.** Explicit links where the graph cannot infer them. Link briefs to initiatives, attach documents, tag related briefs. This layer is where intentional curation pays off.

Per-artifact contribution detail:

- **Briefs:** link to the relevant initiative; attach the decision documents and research that informed it; name sections consistently; group related briefs by tag or naming.
- **Blueprints:** update when decisions shift; link to the lineage that shaped them; capture why, not just what. See reference: Authoring Blueprints.
- **Methods and skills:** write skills for patterns that emerge from delivery; capture the reasoning behind a convention, not just the convention; refresh when team practice shifts.
- **Connections:** keep Slack and Linear discussion linked to the briefs they inform; tag PRs with context; attach transcripts to decision-critical conversations; use consistent PR naming so lineage is traceable.

## What leverage looks like

A new engineer asks, "why did we choose this architecture?"

Without the graph: ask the architect (single point of failure), or search PRs and tickets by hand (slow, incomplete).

With the graph: the harness walks from the engineering blueprint to the decision-critical briefs to the linked conversations to the reasoning, and returns the choice, why it was made, what alternatives were rejected, and when. The engineer starts from what the team already knows instead of reconstructing it.

## Compounding

The difference between a graph with 10 briefs and one with 200 is not just scale, it is the density of relationships. More connections mean better retrieval, fewer missed contexts, and more leverage for new work. The graph does not require perfection; it improves through use. Start with the connective tissue (linking briefs to initiatives) and expand from there.