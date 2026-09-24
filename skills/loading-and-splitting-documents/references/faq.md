# FAQ: Loading and Splitting Documents for LLM Processing

## What chunk size should I use in LangChain?

There is no universal answer, because the right size depends on how dense your content is and how specific your questions are. A reasonable starting point is, for example, 800-1,000 characters with 10-15% overlap. From there, run a fixed retrieval test at two or three sizes and keep the one with the best precision. Also confirm several chunks fit comfortably in your prompt.

## Is the recursive text splitter good enough?

It is a sensible default because it respects paragraph and sentence boundaries. In one practitioner's test it reached [71% top-five precision on default settings](https://dev.to/synsun/langchain-vs-llamaindex-vs-haystack-what-two-weeks-in-production-actually-taught-me-1kl6), below setups that added sentence-window parsing or hybrid retrieval with reranking. Treat it as your baseline and test alternatives if precision on your own questions is too low.

## Why does overlap matter?

Overlap repeats a small amount of text across neighbouring chunks so a sentence that falls on a boundary still appears whole in at least one chunk. Without it, key facts can be split in two and match no question well. Too much overlap, though, fills results with near-duplicate text. Keep it modest and check results for repetition.

## Should I use LangChain or LlamaIndex for document ingestion?

It depends on whether you want defaults or control. One comparison says [LlamaIndex auto-handles loading, chunking and embedding with proven defaults while LangChain wins for control](https://learnwithparam.com/blog/choosing-rag-framework-langchain-llamaindex-haystack). If your application is already built on LangChain, you can reach similar chunking strategies there by configuring them explicitly. The broader framework comparison lives on the [LangChain method page](https://tryhamster.com/methods/langchain).

## How do I know if my splitting is causing bad answers?

Check retrieval separately from generation. For a bad answer, look at which chunks were retrieved: if the right passage is missing or cut in half, the problem is loading or splitting. If the right chunk was retrieved and the answer is still wrong, look at the prompt or model instead. A fixed test set makes this diagnosis repeatable.
