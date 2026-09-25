# Examples: Building RAG Pipelines with LangChain

## Internal policy assistant

**Scenario:**

Illustrative scenario: an HR team wants employees to ask questions about leave, expenses and travel policy and get answers that cite the exact policy document.

**Walkthrough:**

The team writes 40 real employee questions, each mapped to the policy section that answers it, plus 8 questions the policies do not cover. They index policy chunks in pgvector because the HR portal already runs on Postgres, tagging each chunk with policy name and effective date. The retriever filters out superseded policies by date and returns 15 candidates, which a reranker trims to 4. The prompt tells the model to answer only from those chunks, cite the policy name, and say when no policy applies.

The first evaluation shows the right section in the top four for 31 of 40 questions, and inspecting the misses reveals that tables were split mid-row, which the team fixes in chunking before rerunning.

## Support knowledge base search

**Scenario:**

Illustrative scenario: a software company wants its support bot to answer product questions from roughly 2,000 help articles without inventing features.

**Walkthrough:**

The team prototypes on a local store, then moves to a managed store once the pipeline works, keeping the same retriever code. They find that questions using product jargon miss articles written in plain language, so they add keyword matching alongside vector similarity. Hallucination checks flag answers that describe features from an older product version, which traces back to archived articles still in the index. They add a version field to chunk metadata and filter on it.

Faithfulness scores rise, and the bot now declines questions about features that do not exist instead of describing them.

## Contract clause lookup for a legal team

**Scenario:**

Illustrative scenario: a legal team needs to find indemnity and termination clauses across several hundred vendor contracts and summarize them per vendor.

**Walkthrough:**

Each chunk carries vendor name, contract ID and clause heading as metadata so the retriever can filter to a single vendor before searching. The team retrieves 25 candidates per question and reranks down to 5, because similar boilerplate across contracts crowds out the specific clause. The prompt requires the model to quote the clause text and cite the contract ID, and to state when a contract has no such clause. The evaluation set includes contracts known to lack a termination clause, and early runs show the model inventing one.

Tightening the decline instruction and dropping low-scoring candidates fixes it, and the team adds those cases to the permanent test set.
