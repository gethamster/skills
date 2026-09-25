# FAQ: Structuring Retrieval-Augmented Context for Claude

## What chunk size should I use for Claude retrieval?

There is no single right size, because small chunks improve precision but can lose surrounding context while large chunks keep context but spend more tokens. Start by chunking at headings so each chunk covers one topic. Then review outliers, merging fragments that cannot be understood alone and splitting sections that mostly contain irrelevant text. Adjust based on which chunks actually get retrieved for real queries.

## Is contextual retrieval worth the extra preprocessing cost?

It adds a Claude call per chunk, but it runs once per document version rather than per query. Caching the full document across those calls reduces repeated cost. The payoff is that chunks become findable by terms that only appear elsewhere in the document. If your documents have many near-duplicate sections, the gain is usually easiest to see.

## Why use BM25 if I already have embeddings?

Embeddings capture meaning but can blur exact strings like error codes, SKUs or function names. BM25 matches those tokens directly. Indexing the same contextualized text in both lets each method cover the other's gaps. Merge and deduplicate the two result lists before sending chunks to Claude.

## How should retrieved chunks be formatted in the prompt?

Give each chunk a consistent structure with its heading, a short summary and the full text, plus a source label. Place the chunks alongside the user's original question. Ask Claude to answer from the supplied material and to flag when it is insufficient. Consistent formatting also makes it easier to audit why a wrong answer happened.

## Can I do retrieval inside Claude Code without building a RAG system?

Partly. Claude Code has no native retrieval, so large external corpora need an MCP server or command-line search tool. For project conventions and repeated workflows, well-organized CLAUDE.md content and Skills that load on demand can serve as a lightweight retrieval layer. Keep each piece topic-scoped so loading it does not crowd out the task.
