# Examples: Building Topic Clusters with Claude's Constitutional Alignment

## Example: B2B SaaS Company Building a Cluster Around Project Management

**Scenario:**

A 50-person project management SaaS company with a DA of 45 wants to build topical authority around project management methodology. Their team has one content marketer and a budget for 2 articles per week. They compete with Asana, Monday.com, and Notion in search results.

**Walkthrough:**

" They prompt Claude to generate 25 candidate subtopics, anchored in this problem statement and targeting awareness through implementation stages. " During intent deduplication, they discover that "agile vs waterfall" and "when to use agile vs waterfall" serve identical intent (same SERPs), merging them into one spoke. Constitutional scoring eliminates "project management certifications" (semantic coherence score of 2, since certification seekers have fundamentally different intent than the pillar audience) and merges "project status reports" and "project status updates" (uniqueness score of 2 for each as standalone pages). The final cluster has 11 spokes.

Search validation confirms volume for 9 of the 11, and the remaining 2 target genuine content gaps where competitors have thin coverage. The linking map connects methodology spokes (agile, kanban, waterfall) laterally and links implementation spokes (sprint planning, retrospectives, standups) to each other. Production briefs specify that the "agile vs waterfall" spoke must include a comparison table, FAQ schema, and a decision framework, not just descriptive paragraphs. The cluster publishes over 6 weeks, with the pillar going live first.

## Example: Solo Consultant Building a Cluster Around Data Analytics

**Scenario:**

A freelance data analytics consultant with a new blog (DA 12) wants to generate inbound leads. They can write one deeply researched post per week. Their audience is marketing directors at mid-market companies who need to build analytics capabilities without hiring a full team.

**Walkthrough:**

" Claude generates 22 candidates. Constitutional scoring reveals an important pattern: several high-volume candidates like "best analytics tools" and "Google Analytics tutorial" score low on helpfulness (score of 2) because a DA-12 site cannot compete with tool vendors and Google's own documentation for those queries. " These score 4-5 on all three constitutional dimensions because they draw on firsthand expertise competitors cannot replicate. The final cluster has 9 spokes.

Search volumes are modest (50-300 monthly searches each), but the intent is highly commercial, and competition is manageable at this domain authority. Each production brief includes a specific client story (anonymized) that the consultant will use as the primary example, giving every spoke genuine first-party perspective that AI-generated competitor content cannot match.

## Example: E-commerce Brand Building a Cluster Around Sustainable Fashion

**Scenario:**

A sustainable clothing brand with a DA of 35 and a small marketing team wants to build organic traffic around sustainable fashion education. They sell directly to consumers aged 25-40 who care about environmental impact but also care about style and price.

**Walkthrough:**

" Claude generates 28 candidates. Intent deduplication merges "sustainable fashion brands" with "ethical fashion brands" (identical SERPs) and merges "capsule wardrobe guide" with "minimalist wardrobe" (90% SERP overlap). Constitutional scoring eliminates "history of fast fashion" (helpfulness score of 2, because while interesting, it does not help the audience solve their wardrobe problem and would be thin without original research), and flags "sustainable fabric guide" as borderline (coherence score of 3, since it serves a more technical audience). The team decides to keep the fabric guide as a spoke but narrows its scope to "sustainable fabrics: what to look for on clothing labels," which directly serves their consumer audience.

The final cluster has 12 spokes organized into three sub-clusters: building a sustainable wardrobe (5 spokes), shopping and evaluating brands (4 spokes), and care and longevity (3 spokes). Lateral links connect sub-clusters: the "how to read clothing labels" spoke in the shopping sub-cluster links to the "fabric care guide" in the longevity sub-cluster. Each production brief includes a product integration note specifying where the brand's own products can be naturally referenced without turning the educational content into a sales page.

## Example: Developer Tools Company Building a Cluster Around API Security

**Scenario:**

A developer tools startup (DA 28) that sells API security scanning tools wants to rank for API security topics. Their audience is backend engineers and DevOps leads at companies with 50-500 employees. They have two technical writers and access to their engineering team for expert input.

**Walkthrough:**

" Claude generates 24 candidates spanning authentication, authorization, rate limiting, input validation, OWASP API top 10, and API gateway configuration. Constitutional scoring produces decisive results: "what is an API" scores 1 on semantic coherence (too basic for the target audience of working engineers) and is removed. "API security vs web security" scores 2 on helpfulness (the distinction is nuanced enough for a section but too thin for a full page) and is merged into the pillar. 0 implementation guide" scores 5 on all dimensions because it is specific, genuinely helpful, and the existing top-ranking content is outdated.

The final cluster has 10 spokes. Search validation reveals that 3 spokes trigger AI Overviews, so those briefs include structured content blocks optimized for extraction: definition paragraphs under 60 words, numbered implementation steps, and FAQ schema. The team decides to publish the OWASP-aligned spokes first because they provide the strongest topical authority signal, then layer in implementation guides that naturally reference their scanning tool. Each brief specifies which engineer will review for technical accuracy, applying the constitutional principle that accuracy is non-negotiable for content that developers will use in production decisions.
