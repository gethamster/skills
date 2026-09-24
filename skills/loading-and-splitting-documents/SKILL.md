---
name: "loading-and-splitting-documents"
description: "Turn raw files into well-sized, metadata-rich chunks that an LLM pipeline can embed, retrieve and cite accurately."
category: "Development"
metadata:
  homepage: https://tryhamster.com
  method: "langchain"
  datePublished: "2026-04-20"
  dateModified: "2026-09-24"
---

# LangChain tutorial: Loading and Splitting Documents

> Turn raw files into well-sized, metadata-rich chunks that an LLM pipeline can embed, retrieve and cite accurately.

## At a Glance

| Field | Value |
|-------|-------|
| Difficulty | Beginner |
| Time to Learn | 2-4 hours for a first working chunk set and retrieval test |
| Outcome | A chunked, metadata-tagged document set plus a small retrieval test that shows whether the right chunks come back for real questions. |
| Prerequisites | Basic Python or JavaScript, A folder of real source documents (PDF, HTML, Markdown or text), Access to an embedding model and a vector store for testing |
| Part of | [LangChain](../../methods/langchain/METHOD.md) |

## Overview

Loading and splitting is the first stage of a document-grounded LLM application. Before a model can answer questions about a policy manual, a support knowledge base or a codebase, the text has to be read out of its source format and cut into pieces small enough to embed, retrieve and fit into a prompt. This skill covers that stage only. For background on the framework itself, see the [LangChain method page](https://tryhamster.com/methods/langchain).

The work has two halves. A document loader reads a source (a PDF, a web page, a Markdown folder, a database export) and returns documents: plain text plus metadata such as the file path, page number or URL. A text splitter then cuts each document into chunks, controlled mainly by two settings: chunk size, which caps how much text lands in one chunk, and overlap, which repeats a little text across neighbouring chunks so a sentence split at a boundary still appears whole somewhere.

These choices look mechanical, but they decide what your retriever can ever find. A chunk that cuts a definition in half, or mixes two unrelated sections, produces an embedding that matches neither question well. In one practitioner's production comparison, LangChain's [recursive text splitter on default settings reached 71% top-five retrieval precision](https://dev.to/synsun/langchain-vs-llamaindex-vs-haystack-what-two-weeks-in-production-actually-taught-me-1kl6), while setups using sentence-window parsing or hybrid keyword search with reranking scored higher. Defaults are a starting point, not a finished design.

That gap reflects how LangChain is built. One comparison puts it plainly: [LlamaIndex auto-handles loading, chunking and embedding with proven defaults, while LangChain wins for control](https://learnwithparam.com/blog/choosing-rag-framework-langchain-llamaindex-haystack) because you wire each component explicitly. Another review notes that LangChain's [RAG support is adequate rather than exceptional and lacks LlamaIndex's indexing sophistication](https://lifetideshub.com/langchain-vs-llamaindex-2026). In practice that means the chunking quality in a LangChain pipeline is your responsibility: you get the levers, and you have to pull them deliberately.

The output of this skill is concrete: a set of chunks, each carrying enough metadata to trace it back to its source, plus a short list of test questions with the chunks that should answer them. That test set is what lets you tell whether a change to chunk size, overlap or strategy made retrieval better or worse, instead of guessing from a handful of chat responses.

## How It Works

A loading and splitting pipeline runs in four passes: load, clean, split, and check.

**Load.** Each loader targets one source type and emits documents with text and metadata. The decision here is granularity. A PDF loader that emits one document per page keeps page numbers for citation; one that emits the whole file loses them. Pick the granularity that matches how you will want to cite answers later, because metadata you drop at load time cannot be recovered after splitting.

**Clean.** Loaded text often carries noise: repeated headers and footers, navigation menus from HTML, hyphenation across line breaks, table fragments. Noise inflates chunks and pulls embeddings toward boilerplate, so strip it before splitting, not after.

**Split.** The splitter decides where chunk boundaries fall. Three strategies show up most often:

- A recursive splitter works down a list of separators, trying to break on paragraph boundaries first, then lines, then sentences, then words, until each piece fits under the chunk size. It is the usual LangChain starting point because it respects document structure without extra configuration.
- A sentence-window approach indexes individual sentences for precise matching, then returns the surrounding sentences as context at query time. Matching stays sharp while the model still sees enough text to answer.
- A hybrid approach keeps the chunking but retrieves with both keyword scoring (such as BM25) and vector similarity, which helps when questions contain exact terms, codes or names that embeddings blur.

The one practitioner comparison in our sources reported these top-five precision figures:

| Setup | Splitting and retrieval | Top-5 precision |
|---|---|---|
| LangChain | Recursive splitter, defaults ([source](https://dev.to/synsun/langchain-vs-llamaindex-vs-haystack-what-two-weeks-in-production-actually-taught-me-1kl6)) | 71% |
| LlamaIndex | Sentence window plus Cohere rerank ([source](https://dev.to/synsun/langchain-vs-llamaindex-vs-haystack-what-two-weeks-in-production-actually-taught-me-1kl6)) | 84% |
| Haystack | BM25 hybrid plus Cohere rerank ([source](https://dev.to/synsun/langchain-vs-llamaindex-vs-haystack-what-two-weeks-in-production-actually-taught-me-1kl6)) | 82% |

Read this table carefully. The two higher-scoring rows also added a reranker, and the LangChain row used untuned defaults, so the gap mixes splitting strategy, reranking and tuning effort. It is a single practitioner test on one corpus, not a controlled benchmark. What it does show is that default recursive splitting leaves room to improve, and that sentence-level indexing and hybrid retrieval are the levers worth testing next. None of these strategies is exclusive to one framework; because [LangChain has you wire each component explicitly](https://learnwithparam.com/blog/choosing-rag-framework-langchain-llamaindex-haystack), you can build a sentence-window or hybrid setup inside it.

**Check.** Retrieval quality cannot be judged by eye. Write a small set of real questions, note which chunk should answer each, and measure how often that chunk appears in the top results. Rerun the same test after every change to chunk size, overlap or strategy. If precision drops, the change hurt, regardless of how reasonable it seemed.

## Step-by-Step Guide

### Step 1: Inventory sources and pick loaders

List every source type you need to ingest: PDFs, HTML pages, Markdown, spreadsheets, database exports. Choose one loader per type and decide the granularity each should emit, such as one document per page or per file. Run each loader on a few real files and print the output text and metadata. Confirm the text is readable and the metadata identifies where it came from.

> **Pro tip:** Test loaders on your ugliest files first, such as scanned PDFs or pages with heavy navigation, because clean samples hide extraction problems.

### Step 2: Clean the loaded text

Remove boilerplate that repeats across documents: page headers, footers, cookie banners, menus and legal footers. Rejoin words hyphenated across line breaks and collapse runs of whitespace. Decide how to handle tables, either converting them to readable rows or keeping them as separate documents. Cleaning before splitting keeps noise out of every chunk that would otherwise inherit it.

> **Pro tip:** Search your loaded corpus for the most frequent lines; anything appearing on nearly every page is almost always boilerplate.

### Step 3: Choose a splitting strategy

Start with a recursive splitter, which breaks on paragraphs, then lines, then sentences, preserving structure where it can. If your content has strong headings, such as documentation or contracts, consider splitting on headings first and recursively splitting only oversized sections. Note sentence-window indexing and hybrid keyword retrieval as candidates to test later rather than adopting them up front. Record which strategy you chose so later comparisons are fair.

### Step 4: Set chunk size and overlap

Pick a baseline, for example around 800-1,000 characters per chunk with 10-15% overlap, then adjust to your content. Short, dense content such as FAQs suits smaller chunks; long explanatory prose tolerates larger ones. Check that your chunk size fits comfortably within your embedding model's input limit and that several retrieved chunks fit in your prompt. Too much overlap duplicates content in results, while none risks splitting key sentences.

> **Pro tip:** Print ten random chunks and read them. If a chunk does not make sense on its own, it will not retrieve or answer well either.

### Step 5: Attach and preserve metadata

Make sure every chunk carries its source path or URL, page or section, and ideally the nearest heading. Add fields you will want to filter on later, such as document type, product or date. Verify the splitter copies metadata from the parent document onto each chunk. This metadata is what lets the final answer cite its source and lets you trace bad answers back to bad chunks.

> **Pro tip:** Prepend the section heading to each chunk's text as well as storing it in metadata; it gives the embedding useful context.

### Step 6: Build a retrieval test and measure

Write a set of real user questions, for example 20-30 to start, and record the chunk or passage that should answer each. Embed and index your chunks, run each question, and count how often the correct chunk lands in the top five results. Save this number as your baseline. Change one setting at a time, such as chunk size, overlap or strategy, and rerun the test to see whether precision improves.

> **Pro tip:** Keep the test questions fixed across runs; changing questions and settings together makes results impossible to compare.

## Best Practices

- Choose loader granularity based on how you will cite answers. If users need page references, load per page, because page numbers cannot be reconstructed once text is merged and split.
- Clean before you split. Boilerplate removed at the document level disappears from every chunk, while boilerplate left in gets duplicated across hundreds of chunks and drags embeddings toward irrelevant text.
- Treat defaults as a baseline, not a decision. A practitioner test reported [71% top-five precision for LangChain's recursive splitter on default settings](https://dev.to/synsun/langchain-vs-llamaindex-vs-haystack-what-two-weeks-in-production-actually-taught-me-1kl6), which is a reasonable start but rarely the ceiling for your corpus.
- Measure retrieval with a fixed question set rather than judging by chat output. Retrieval pipelines [fail silently without a test harness for retrieval accuracy](https://genai.qa/blog/haystack-vs-langchain), so a number you can rerun is the only reliable signal that a change helped.
- Change one variable at a time. If you adjust chunk size, overlap and strategy together and precision moves, you will not know which change caused it.
- Split structured content along its structure. Documentation, contracts and manuals already have headings that mark topic boundaries, and splitting there keeps each chunk about one thing.
- Keep simple jobs simple. One review warns that with LangChain's abstractions, [for simple tasks you fight the framework](https://lifetideshub.com/langchain-vs-llamaindex-2026), so for a small, uniform corpus a basic loader and one splitter configuration is often enough.

## Common Mistakes

- **Loading whole files as single documents and discarding page or section information.** — Load at the granularity you need for citation and keep page, section and source fields. Once text is merged, that location data is gone for every downstream chunk.
- **Picking a chunk size once and never testing it against real questions.** — Build a small retrieval test and compare at least two or three chunk sizes. The right size depends on your content density and question style, not on a universal number.
- **Setting overlap so high that retrieved results are near-duplicates.** — Keep overlap to a modest fraction of chunk size. If the top results repeat the same sentences, reduce overlap so the retriever returns more distinct context.
- **Splitting noisy text full of headers, footers and navigation.** — Clean at the document level before splitting. Otherwise boilerplate dominates short chunks and pulls unrelated questions toward them.
- **Crediting or blaming the splitter for results that came from another component.** — Isolate variables when comparing setups. In the [practitioner comparison](https://dev.to/synsun/langchain-vs-llamaindex-vs-haystack-what-two-weeks-in-production-actually-taught-me-1kl6), the higher-scoring setups also used reranking, so test splitting and reranking separately before drawing conclusions.

## References

- [Examples](references/examples.md) — Worked examples and scenarios
- [FAQ](references/faq.md) — Frequently asked questions
- [Parent Method](../../methods/langchain/METHOD.md) — LangChain

## Related Skills

- [Designing Autonomous Agents with LangChain](../designing-autonomous-agents/SKILL.md)
- [Building RAG Pipelines with LangChain](../building-rag-pipelines-with-langchain/SKILL.md)
- [Managing Memory and Conversation State in LangChain](../managing-memory-and-conversation-state/SKILL.md)
- [Chaining Prompts and Composing LLM Workflows](../chaining-prompts-and-composing-workflows/SKILL.md)
- [Configuring LLM Providers and Models in LangChain](../configuring-llm-providers-and-models/SKILL.md)
- [Integrating External Tools and APIs into LangChain](../integrating-external-tools-and-apis/SKILL.md)
- [Crafting Reusable Prompt Templates in LangChain](../crafting-prompt-templates/SKILL.md)

## Sources

- [Choosing your RAG framework: LangChain vs. LlamaIndex vs](https://learnwithparam.com/blog/choosing-rag-framework-langchain-llamaindex-haystack)
- [LangChain vs LlamaIndex 2026: Which Framework Wins for RAG?](https://lifetideshub.com/langchain-vs-llamaindex-2026)
- [Haystack vs LangChain \(2026\): Pick the Right LLM Framework](https://genai.qa/blog/haystack-vs-langchain)
- [LangChain vs LlamaIndex vs Haystack: What Two Weeks in](https://dev.to/synsun/langchain-vs-llamaindex-vs-haystack-what-two-weeks-in-production-actually-taught-me-1kl6)
