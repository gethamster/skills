# Examples: Auditing How LLMs Represent Your Brand and Content

## Example: SaaS Company Discovers LLMs Conflate It with a Competitor

**Scenario:**

A project management SaaS called 'Flowwork' (fictional) runs an LLM brand audit and discovers that ChatGPT and Gemini both attribute features from a competitor named 'FlowBoard' to their product, including a Gantt chart builder they've never offered. Claude correctly distinguishes the two brands but lists Flowwork's pricing from 2022.

**Walkthrough:**

The team creates a Brand Truth Document with current features, pricing (updated 6 months ago), and explicit differentiation from FlowBoard. They design a 20-prompt matrix including: 'What is Flowwork?', 'Flowwork vs FlowBoard comparison', 'Does Flowwork have Gantt charts?', and 'Best project management tools for remote teams.'

After running all prompts across four LLMs, they find: (1) ChatGPT and Gemini conflate the two brands in 60% of responses, (2) Claude gets features right but pricing wrong, (3) Perplexity cites an outdated TechCrunch article and a competitor's comparison page as sources for the wrong information, (4) None of the LLMs mention Flowwork when asked about 'best tools for remote team project management.'

Their correction strategy priorities: First, update their own website to include a prominent FAQ explicitly stating 'Flowwork does not offer Gantt charts — here's what we offer instead' and a comparison page titled 'Flowwork vs FlowBoard.' Second, contact TechCrunch to correct the outdated article and update their Crunchbase and G2 profiles. Third, create category-defining content around 'remote team project management' to address the missing-from-category error. They re-audit in 8 weeks and find ChatGPT has corrected the conflation in 4 of 6 relevant prompts, while the category inclusion issue remains — indicating that building topical authority requires longer-term content investment.

## Example: E-commerce Brand Finds Outdated Product Lines Dominating AI Responses

**Scenario:**

An outdoor gear brand discontinued their tent product line 18 months ago to focus exclusively on backpacks and hiking gear. However, LLM auditing reveals that three of four major models still describe them primarily as a 'tent and outdoor shelter company.'

**Walkthrough:**

The brand's audit matrix includes prompts like 'What products does [Brand] sell?', 'Best backpack brands for hiking', and 'Where can I buy camping tents?' They discover that their old tent product pages (now 404ing) were heavily linked by outdoor review sites, and cached versions of those pages dominate the training data. Meanwhile, their newer backpack content hasn't been widely cited yet.

Scoring reveals: 80% of product-related claims across all LLMs reference tents, with only 20% mentioning their current backpack line. Worse, when users ask 'Best hiking backpack brands,' the company doesn't appear at all. Using Perplexity's citations, they trace the tent references to five specific review sites and their own archived pages.

Their correction plan: implement proper 301 redirects from old tent URLs to a 'Our Story' page explaining the pivot, reach out to the five review sites to request article updates, create a comprehensive backpack buying guide and comparison content, update all third-party profiles, and add explicit 'About Us' language clarifying their current focus. They also implement schema markup on their product pages following the [schema markup for AEO](https://tryhamster.com/skills/implementing-schema-markup-for-aeo) skill to reinforce correct product information for AI crawlers.
