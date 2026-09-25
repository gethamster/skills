# FAQ: Building RAG Pipelines with LangChain

## Is LangChain a good choice for semantic search and RAG?

It fits well when you want control over each stage and a wide choice of integrations, since it supports most major vector stores. The trade-off is that you configure more yourself; more opinionated frameworks ship stronger defaults for loading, chunking and embedding. If your RAG pipeline will grow into a multi-step or tool-using agent, LangChain's breadth pays off. If you only need document Q&A with minimal tuning, compare alternatives on the method page.

## How many chunks should the retriever return?

There is no universal number, so treat it as a tuned setting. A common pattern is to fetch a wider candidate set, for example 20, and pass only the top few after reranking, for example 5. Measure top-k precision on your evaluation set as you adjust both. If the right chunk appears in candidates but not in the final set, improve reranking; if it never appears, fix chunking or retrieval.

## Do I need a reranker?

Not for a first prototype, but most production pipelines benefit from one. Vector similarity finds roughly relevant chunks quickly but orders them imperfectly, and the model mostly relies on what sits at the top of the context. A reranker rescoring a small candidate set is usually a cheap way to lift precision. Confirm the gain with your own evaluation rather than assuming it.

## How do I know if my RAG pipeline is hallucinating?

Check every answer against the chunks that were actually retrieved for it. A faithfulness check asks whether each claim in the answer is supported by that context, and a hallucination check flags claims that appear nowhere in it. Include questions whose answers are not in the corpus, since a healthy pipeline declines them. Run these checks automatically after each change to the index, prompt or model.

## Can I switch vector stores later?

Yes, because the retriever interface stays the same across the stores LangChain supports, so the rest of the chain does not need to change. You will need to reindex the corpus into the new store and confirm that your metadata filters translate. Rerun the evaluation set afterwards, since search behavior and filtering can differ between stores.
