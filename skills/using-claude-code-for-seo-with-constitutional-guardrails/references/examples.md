# Examples: Using Claude Code for SEO with Constitutional Guardrails

## Example: Generating meta descriptions for a 200-page e-commerce catalog

**Scenario:**

A small e-commerce team with 200 product pages has duplicate manufacturer-supplied meta descriptions. Google Search Console shows 180 pages with "Duplicate, submitted URL not selected as canonical" issues. The team has product data in a CSV export from Shopify with columns for product name, category, price, key features (comma-separated), and a short description. They need unique, SEO-optimized meta descriptions generated within two hours.

**Walkthrough:**

md specifying "All meta descriptions must be derived from the product's actual features and description. No fabricated claims. Target length 130-150 characters. csv.

For each product, generate a unique meta description using the product name, category, and top 2 features. " Claude Code generates a Python script with a validation function that checks for uniqueness across all descriptions (flagging any pair with >70% similarity), character limits, and keyword presence. The first run processes all 200 rows in 45 seconds. The validation report shows 12 descriptions flagged for similarity (products in the same subcategory got similar phrasing).

" The second run produces 200 unique descriptions with a 100% validation pass rate. Total time: 40 minutes including review.

## Example: Building an internal link audit script for a B2B SaaS blog

**Scenario:**

A B2B SaaS company has 350 blog posts accumulated over four years. Their SEO audit revealed poor internal linking, with 40% of posts having zero internal links and another 30% linking only to the homepage. The content team needs a script that crawls their blog, maps the internal link structure, identifies orphan pages, and suggests contextually relevant internal links based on content similarity. The company runs a Next.js site with content stored in a headless CMS accessible via API.

**Walkthrough:**

md with the CMS API endpoint, authentication pattern, and a note: "This script analyzes existing content only. " This preemptive constraint aligns with Claude Code's harmlessness principle and prevents it from generating code that could accidentally update live content. They prompt Claude Code to build a three-phase script. Phase 1: fetch all blog posts via CMS API, extract body text, headings, and existing internal links.

Phase 2: build a content similarity matrix using TF-IDF vectors on the extracted text. Phase 3: for each post, identify the top 5 most semantically similar posts that are not already linked, and output a recommendations CSV with columns for source URL, target URL, similarity score, and suggested anchor text derived from the target post's H1. Claude Code generates the script with an automatic rate limiter for the CMS API calls (constitutional helpfulness, protecting the CMS from request flooding) and adds a check that filters out draft or unpublished posts from recommendations. The output reveals 142 orphan posts and generates 1,750 link recommendations ranked by similarity score.

The content team processes the top 200 recommendations in a single sprint, adding contextually relevant links that improve the site's crawl depth by 35% within one month.

## Example: Generating FAQ schema markup for a healthcare information site

**Scenario:**

A healthcare information publisher has 80 condition-specific pages (e.g., "What is Type 2 Diabetes"), each with an FAQ section written by medical professionals. The FAQs are in unstructured HTML. The team needs to extract the Q&A pairs and generate valid FAQPage schema markup for each page. The stakes are high because medical misinformation in schema markup could trigger a manual action and because constitutional guardrails around health content are especially active.

**Walkthrough:**

md with explicit notes: "All FAQ content is written and reviewed by licensed medical professionals. The script should extract and structure existing content only, never generate or modify medical claims. " This framing is critical because Claude Code's constitutional principles around health information are stringent. Without this context, Claude Code might add excessive disclaimers or refuse to process medical content.

They prompt: "Parse the HTML files in data/pages/, extract all question-answer pairs from elements with class 'faq-item', and generate a JSON-LD FAQPage schema block for each page. Validate the schema against Google's required properties. " Claude Code generates the script with a validation layer that checks for required schema properties (mainEntity, acceptedAnswer), verifies that answers are non-empty and contain substantive text (not just "consult your doctor"), and flags any Q&A pairs where the answer contains external links (which Google's FAQ schema guidelines discourage). The script processes all 80 pages and extracts 640 Q&A pairs.

The validation report flags 8 pairs with missing answers and 3 with external links. After the team fixes these source-content issues, the schema is deployed and FAQ rich results appear for 52 of the 80 pages within three weeks.

## Example: Automating programmatic SEO page generation for a real estate directory

**Scenario:**

A real estate analytics startup wants to create 2,000 neighborhood-level pages following the locations playbook pattern (e.g., "Real Estate Market in [Neighborhood], [City]"). They have a database of property transaction data, demographic statistics, and school ratings for each neighborhood. The team of two developers needs to generate the page templates, populate them with real data, and ensure no pages qualify as thin content. This is exactly the scenario where constitutional guardrails around mass content generation activate most aggressively.

**Walkthrough:**

md: "Each neighborhood page will be populated with unique, proprietary data including median home prices, price trends, demographic composition, school ratings, and recent transaction counts. No two pages will share identical content beyond the template structure. " They break the project into three Claude Code sessions. Session 1: generate the page template (HTML/JSX component with data placeholders).

Session 2: build the data pipeline that transforms raw database exports into the structured JSON each page template consumes. Session 3: build the validation script that checks every generated page for minimum content thresholds (at least 300 words of unique data-driven content, at least 3 unique data points, no identical paragraphs across pages). Claude Code generates the template with conditional sections. Neighborhoods with school data get a schools section.

Neighborhoods with recent transactions get a market activity section. This conditional rendering is a constitutional alignment win because it ensures pages only display information that actually exists for that neighborhood, preventing fabricated content. The validation script flags 127 neighborhoods with insufficient data to generate a quality page. The team sets those to noindex until more data accumulates, launching with 1,873 fully validated pages.

The pages begin ranking for long-tail neighborhood queries within six weeks.
