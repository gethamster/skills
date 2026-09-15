# Examples: Automating SEO Tasks Using Claude's Reasoning Principles

## Example: Keyword clustering for a B2B project management SaaS

**Scenario:**

A 5-person marketing team at a project management startup has exported 800 keywords from Ahrefs. They need to group these into content clusters, classify intent, and identify the top 10 clusters to target this quarter. Manual clustering takes their SEO lead about 6 hours.

**Walkthrough:**

The SEO lead exports keywords with columns for keyword, volume, difficulty, current position, and top-ranking URL. She pastes the data into Claude along with a prompt that includes three sentences of business context (B2B project management for remote teams, targeting team leads and project managers, competing with Asana and Monday). She asks Claude to group keywords into clusters of 5-15 related terms, classify each cluster's dominant intent, score each cluster on a simple framework of total volume, average difficulty, and product relevance. Claude returns 47 clusters in a table.

The top cluster is 'project management templates' with 23 keywords, 14,000 combined monthly searches, moderate difficulty, and high product relevance. Claude flags 8 keywords it could not confidently classify and explains why. She spot-checks 5 clusters against actual SERPs, finds 4 out of 5 have correct intent classifications, and adjusts the one misclassified cluster. The entire process takes 45 minutes instead of 6 hours, and she has a prioritized content roadmap for the quarter.

## Example: Content quality audit for an e-commerce blog

**Scenario:**

A mid-size e-commerce company selling outdoor gear has 340 blog posts accumulated over 4 years. Traffic has declined 25% year-over-year, and they suspect thin or outdated content is dragging down the site. They need to identify which posts to update, consolidate, or remove.

**Walkthrough:**

The content manager exports a Screaming Frog crawl of the blog subdirectory with URL, title, word count, H1, internal links count, and organic sessions from the last 90 days via Google Analytics integration. He splits the data into batches of 100 posts and feeds each batch to Claude with the instruction to categorize each post as 'update' (decent traffic potential but needs refreshing), 'consolidate' (thin content that overlaps with another post), 'remove' (no traffic, no backlinks, outdated topic), or 'keep' (performing well). He asks Claude to explain each categorization in one sentence. Claude processes the first batch and flags 12 posts for removal (all under 300 words with zero sessions), 8 for consolidation (three pairs of posts covering the same hiking boot topics), 15 for updating (moderate traffic but outdated product references), and 65 as keep.

Claude notes that it cannot assess backlink value from the data provided and recommends checking Ahrefs before removing any posts. The content manager verifies the removal candidates in Ahrefs, finds 2 actually have strong backlinks, and reclassifies those as update targets. Total time across all batches is about 2 hours versus the estimated 2-3 days for manual review.

## Example: Technical SEO triage for a large media publisher

**Scenario:**

A digital media company with 12,000 pages has run a full Screaming Frog crawl and exported 847 issues across 23 issue types. The development team has limited sprint capacity and needs to know which 5-10 fixes will have the highest SEO impact.

**Walkthrough:**

The SEO analyst exports the issue summary and detailed issue reports, including affected URLs and their organic traffic from Search Console. She feeds Claude the issue summary first and asks it to rank issue types by likely SEO impact given the site's size and content type (news and evergreen articles). Claude ranks broken canonical tags and noindex on indexed pages as tier one, flagging that these directly prevent indexation. Redirect chains and missing hreflang tags are tier two.

Missing alt text and non-descriptive anchor text are tier three. She then feeds Claude the detailed tier one data (43 affected URLs) and asks it to cross-reference with the traffic data to prioritize fixes by traffic at risk. Claude identifies that 7 URLs with broken canonicals account for 60% of the traffic at risk in tier one and recommends starting there. It also notes that 3 noindexed pages appear to be intentional (login and account pages based on URL patterns) and asks her to confirm before treating them as issues.

She confirms those are intentional, removes them from the fix list, and presents the development team with a prioritized ticket containing 7 canonical fixes and 4 noindex removals, complete with specific URLs and expected impact. The entire triage takes 90 minutes instead of a full day.

## Example: Internal linking analysis for a solo content creator

**Scenario:**

A solo blogger running a personal finance site with 85 posts wants to improve internal linking but does not know which posts should link to which. They have no paid SEO tools, only Google Search Console data and a Screaming Frog crawl from the free version.

**Walkthrough:**

The blogger exports a list of all 85 URLs with their title tags and H1 headings, plus a list of internal links from the Screaming Frog crawl showing source and destination URLs. She also exports her top 50 queries from Search Console with their landing pages. She asks Claude to identify orphan posts (pages with fewer than 2 internal links pointing to them), suggest specific linking opportunities based on topical relevance between posts (using title and heading data to infer topic relationships), and flag any cases where multiple posts target the same query (potential cannibalization). ' It also flags 3 pairs of posts that appear to target overlapping queries and recommends consolidating one pair where both posts are under 600 words.

The blogger implements the linking suggestions over two afternoons and sees a measurable improvement in crawl depth and impressions for the orphan posts within 6 weeks.
