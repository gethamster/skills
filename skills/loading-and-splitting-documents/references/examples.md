# Examples: Loading and Splitting Documents for LLM Processing

## Internal policy handbook

**Scenario:**

Illustrative scenario: An HR team wants a chatbot over a 60-page PDF handbook, and answers must cite the page they came from.

**Walkthrough:**

The developer loads the PDF one page per document so each carries a page number. Cleaning strips the repeated company header and page footer. A recursive splitter with a baseline chunk size and modest overlap cuts each page into two or three chunks, and each chunk inherits its page number. The developer writes 25 test questions from real HR tickets and finds the correct chunk in the top five for 18 of them.

Reading the misses shows several policies split mid-list, so she switches to splitting on section headings first, and the next run finds 22 of 25.

## Product documentation site

**Scenario:**

Illustrative scenario: A developer tools company indexes around 400 HTML documentation pages, where users often ask about exact function names and error codes.

**Walkthrough:**

The HTML loader keeps the page URL and title as metadata, and cleaning removes the sidebar navigation and footer present on every page. Chunks are split on headings, with the heading text prepended to each chunk. The retrieval test shows vector search misses questions quoting exact error codes such as a made-up ERR_4471. The team adds keyword scoring alongside vector search, a hybrid approach, and exact-code questions start returning the right page.

They keep the same test set to confirm general questions did not get worse.

## Meeting transcripts

**Scenario:**

Illustrative scenario: A team loads 120 plain-text meeting transcripts and wants to ask what was decided on specific topics.

**Walkthrough:**

Transcripts have no headings, so a recursive splitter falls back to paragraph and line breaks, producing chunks that often cut a discussion in half. The developer tries a sentence-level index that returns the surrounding sentences as context, so a matched decision sentence arrives with the discussion around it. Metadata records meeting date and title for each chunk. On a 20-question test built from known decisions, the sentence-window setup finds more correct passages than the fixed chunks.

The team adopts it and adds the date to answers so readers can check the source meeting.
