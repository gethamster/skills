# Examples: Implementing Schema Markup for Answer Engine Optimization

## Example: SaaS Company Implementing Schema for Their Knowledge Base

**Scenario:**

A project management SaaS company has a knowledge base with 200+ articles covering features, workflows, and troubleshooting. They want their help content to appear in AI-generated answers when users ask questions like "How do I set up Gantt charts in [product]?"

**Walkthrough:**

First, they audit their knowledge base and categorize articles: 85 are how-to tutorials (→ HowTo schema), 45 contain FAQ sections (→ FAQPage schema), and 30 are feature overview pages (→ SoftwareApplication + Article schema with `about` linking to relevant Wikidata entities like Q180711 for project management).

For a tutorial like "Setting Up Gantt Charts," they implement HowTo schema with each step named and described, plus `tool` properties referencing their app and `estimatedTime` of 10 minutes. They also add Speakable schema targeting the opening summary paragraph that answers "How do I set up a Gantt chart in [product]?" in two sentences.

For FAQ pages, they restructure the content so each question is an H3 heading with a concise answer paragraph directly below, then implement FAQPage schema mirroring those exact pairs. They validate every page using Google's Rich Results Test, fix three pages where the plugin was generating empty answer fields, and deploy.

Within 6 weeks, they see their knowledge base articles appearing in Perplexity answers for product-specific queries and a 23% increase in organic traffic from Google's AI Overviews citing their how-to content.

## Example: Local Service Business Optimizing for Voice AI

**Scenario:**

A plumbing company wants to appear in AI assistant responses when users ask questions like "How do I fix a running toilet?" or "What does a plumber charge for a water heater install?"

**Walkthrough:**

They identify their top 15 blog posts that answer common plumbing questions. For each, they implement a combination of schemas:

- **HowTo schema** on DIY guides, with each step including a name, description, and image. For "How to Fix a Running Toilet," they list 6 steps with tools (adjustable wrench, replacement flapper valve) and estimated time (20 minutes).
- **FAQPage schema** on their pricing and services pages, with questions like "How much does a water heater installation cost?" and concise answers like "A standard water heater installation typically costs $800-$2,500 depending on the type and local labor rates."
- **Speakable schema** on the opening paragraph of each guide, written in natural conversational language suitable for voice assistants.
- **LocalBusiness schema** enhanced with `areaServed`, `priceRange`, and `hasOfferCatalog` to help AI systems connect their content to local intent queries.

They validate all markup, ensure every schema element has a visible on-page counterpart, and set up a quarterly review process. The combination of structured local data with answer-optimized content schema gives AI systems confidence in both the content quality and the local relevance.
