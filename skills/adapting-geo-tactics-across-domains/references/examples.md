# Examples: Adapting GEO Tactics Across Domains

## Same tactic, opposite results by domain

**Scenario:**

Illustrative scenario: a software company adds cited statistics to both its pricing comparison pages and its onboarding tutorials after hearing that statistics help AI visibility.

**Walkthrough:**

The team segments prompts into a pricing domain and a tutorial domain and baselines each on the same engine in English. On pricing pages, where readers expect figures, the statistics variant lifts the page's share of the answer noticeably above the baseline spread across repeated runs. On tutorials, the same edit adds numbers readers did not need, and visibility stays flat within normal variation. The team keeps statistics on pricing pages only and tests simplified step-by-step wording on tutorials instead.

The matrix records one win, one neutral result and a new hypothesis, rather than a single blended verdict.

## Separate baselines for two languages

**Scenario:**

Illustrative scenario: a travel insurer publishes the same guide in English and German and sees strong AI answer visibility in English but almost none in German.

**Walkthrough:**

The team first suspects the German translation, but builds a native German prompt set written by a German-speaking marketer instead of translating the English prompts. Baselining shows the German answers mostly cite third-party comparison sites rather than insurer pages. Instead of copying the English rewrite, the team checks topical relevance: the German guide uses terms German readers rarely search for. After aligning terminology and moving the core answer to the top, the German page starts appearing in a small share of runs.

The team logs the German cell as a relevance fix and plans off-site coverage work as its next hypothesis.

## Engine-specific rollback

**Scenario:**

Illustrative scenario: a B2B analytics vendor tests an authoritative-style rewrite of its benchmarking report across two AI engines.

**Walkthrough:**

The vendor treats each engine as its own cell and runs the same prompts several times on each. On the first engine, the authoritative rewrite raises the page's position in answers compared with the baseline spread. On the second engine, the page appears less often after the rewrite, and a retrieval check suggests the new version matches fewer of the segment's prompts. The team keeps the rewrite for the first engine's target page and restores the original wording on a variant tailored to the second.

The result is logged as engine-specific rather than as a general finding about authoritative style.
