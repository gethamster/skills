# Examples: Automate SEO with Claude: Reasoning Principles

## A title and description audit for a documentation site

**Scenario:**

Illustrative scenario: a software company's documentation site has a few hundred pages, many with titles copied from a template. The team exports titles, descriptions, headings and Search Console clicks and impressions for each page.

**Walkthrough:**

The prompt asks Claude to check each page's title against its main heading and body, flag titles that do not describe the page, and propose a replacement with a one-line reason. It tells Claude to use only the export, to leave a page unchanged when the data is unclear, and to report patterns it notices beyond the checklist.

Claude flags a cluster of pages whose titles all start with the product name and differ only at the end, where search results cut them off. It notes this as a pattern at the top of the output. A writer reviews the first batch row by row, accepts most proposals, edits a few, and rejects two where Claude misread a page about an older product version. The template change fixes the pattern at the source.

## Grouping queries to find cannibalization

**Scenario:**

Illustrative scenario: a marketing team suspects two blog posts about the same topic are competing with each other. They export a quarter of Search Console query and page data for the whole blog.

**Walkthrough:**

Claude groups the queries by the problem the searcher is trying to solve and lists, for each group, which pages receive impressions. It marks three groups where two pages split impressions and neither ranks well, and one group where it says the data is too thin to judge.

The team checks the three groups against live search results and confirms two of them. They merge each pair into one updated post and redirect the weaker URL. The thin group goes on a watch list. The prompt is saved with the export format so the same analysis can run next quarter.

## Crawl triage before a site migration

**Scenario:**

Illustrative scenario: before moving to a new CMS, a team crawls its site and gets a long list of redirects, broken links and missing canonical tags. There is not enough developer time to fix everything before launch.

**Walkthrough:**

The team gives Claude the crawl export joined with clicks per URL and asks it to rank issues by likely impact, explaining each ranking from the data supplied. Claude puts broken links on pages that receive search traffic at the top and notes that several redirect chains end on pages the crawl could not reach, which it cannot evaluate.

A developer confirms the top items and investigates the unreachable pages, which turn out to be behind a login. The fixes are scheduled before launch and the rest go to a post-launch backlog. Claude sorted and explained the list; the developer made the calls the crawl could not.
