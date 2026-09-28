# Examples: Structuring Retrieval-Augmented Context for Claude

## Support knowledge base with ambiguous sections

**Scenario:**

Illustrative scenario: a support team has a help center with dozens of product articles, many containing a section titled 'Limits' that reads almost identically across products.

**Walkthrough:**

Heading-based chunking produces one chunk per 'Limits' section, but raw embeddings for them are nearly indistinguishable. The team runs contextualization, which prepends a line naming the product and plan each section belongs to. They load the combined text into both a vector index and a BM25 index. A query naming a specific product now matches that product's limits chunk through BM25 on the product name, and the vector side still catches paraphrased questions.

Claude receives the top few chunks, each labeled with product and heading, and answers without mixing products.

## Long policy manual too big to send whole

**Scenario:**

Illustrative scenario: a compliance group wants to index a single policy manual far larger than they want to send to Claude once per chunk.

**Walkthrough:**

They chunk the manual by subheading and keep the full heading path on each chunk. For contextualization, instead of the whole manual, they send the manual's opening chunks containing its summary plus the two chunks immediately before the target. Claude returns one or two sentences situating each chunk, which they prepend and store. Spot checks show the situating text correctly names the policy area in most chunks, and the team fixes the few that drifted by adjusting the prompt.

Retrieval results now carry enough context that answers cite the right policy section.

## Claude Code project knowledge without a vector store

**Scenario:**

Illustrative scenario: a small engineering team wants Claude Code to follow their deployment conventions and migration procedure without building an index.

**Walkthrough:**

They add a short section to CLAUDE.md listing recurring patterns, such as where configuration lives and how services are named, so Claude finds them when relevant. The multi-step migration procedure moves into a Skill that loads only when a migration task comes up. For searching a large internal wiki, they connect a command-line search tool rather than pasting pages into prompts. Each file stays scoped to one topic, so a routine bug fix does not load the migration steps.

The team checks sessions afterward to confirm Claude pulled the right file for each task.
