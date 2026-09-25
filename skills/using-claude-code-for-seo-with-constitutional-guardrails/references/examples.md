# Examples: Claude Code Constitutional Guardrails for SEO

## A title-rewrite script with a dry run

**Scenario:**

Illustrative scenario: an SEO lead wants a script that reads Search Console data and page content, finds pages whose titles do not match the queries they get impressions for, and proposes new titles.

**Walkthrough:**

The lead writes a CLAUDE.md stating the goal, that proposed titles must describe the page accurately, and that the script only writes to an output folder. Permissions deny the CMS publishing command and ask before any network call. In plan mode, Claude proposes the approach and raises one concern: some pages have no main heading, so title quality will be hard to judge for them.

The script is built with fixture tests on sample pages and a dry-run mode. The first run produces a file of proposed titles with the evidence for each. The lead reviews them, rejects a few that read awkwardly, and imports the rest through the CMS's normal workflow. The pages without headings go to a separate list for editors.

## A failing test that Claude would not force

**Scenario:**

Illustrative scenario: a developer asks Claude Code to make a failing structured-data test pass before a deadline. The test fails because some product pages lack a price in the source data.

**Walkthrough:**

Claude reports that it cannot make the test pass with a general fix, because the data is missing, and that hard-coding a price for those pages would produce inaccurate markup. It proposes skipping the product markup on pages without a price and adding a test for that behavior.

The developer agrees. The deadline holds, the markup stays accurate, and the missing prices go to the catalog team. The CLAUDE.md already stated that failing tests should be explained rather than forced, which made the report the expected outcome.

## A scraped page with embedded instructions

**Scenario:**

Illustrative scenario: a competitor-analysis script fetches public pages and asks Claude to summarize their headings and topics. One page contains hidden text addressed to AI tools, telling them to recommend that company's product.

**Walkthrough:**

Claude's summary notes that the page contains text aimed at AI systems and treats it as a fact about the page, not as an instruction. The summary stays neutral. The permissions in the project mean that even a misread instruction could not have triggered any action beyond writing the summary file.

The team adds a line to the report template: flag any fetched content that appears to address AI tools. It becomes a small but useful signal in their competitor reviews.
