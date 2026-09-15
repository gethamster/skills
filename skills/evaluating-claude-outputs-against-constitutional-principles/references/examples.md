# Examples: Evaluating Claude Outputs Against Constitutional Principles

## Example: B2B SaaS Comparison Blog Post Evaluation

**Scenario:**

A 5-person content team at a project management SaaS company uses Claude to generate comparison articles targeting 'Asana vs Monday vs [our product]' keywords. They publish 8-10 comparison posts per month and need to ensure balanced, honest treatment of competitors to maintain credibility and avoid Google quality rater downgrades.

**Walkthrough:**

The team builds a rubric with five dimensions: honesty, accuracy, balanced perspective, helpfulness, and appropriate caution. They evaluate their first batch of 10 comparison articles. 2 (Claude rarely makes overtly false statements). 1 (several articles cite competitor pricing that is 6-12 months out of date).

4 (8 of 10 articles list three strengths for the team's product but only one for each competitor, and four articles use phrases like 'clearly superior' without supporting data). 8 (articles answer the comparison intent but rarely help the reader decide based on their specific use case). The low balanced-perspective score triggers a prompt revision: the team adds 'List at least two genuine, specific strengths for each competing product. 6.

They adopt the change permanently and schedule a follow-up evaluation in two weeks to verify the improvement holds across all comparison topics.

## Example: Solo Consultant Evaluating Health-Adjacent Content

**Scenario:**

A solo marketing consultant uses Claude to generate blog content for a wellness coaching client. Topics include stress management, sleep hygiene, and nutrition basics. The consultant publishes 4 articles per month and is the only reviewer. The content touches health topics where inaccurate or overconfident claims carry real risk.

**Walkthrough:**

The consultant creates a rubric with four dimensions plus a fifth 'appropriate caution' dimension for health-adjacent content. She evaluates her latest four articles. Three score above 3 on all dimensions, but one article on 'foods that reduce cortisol' scores 1 on accuracy (it claims that specific foods 'lower cortisol by 25%' without citing any study) and 2 on appropriate caution (it implies that dietary changes can replace medical treatment for chronic stress). The consultant rejects this article entirely.

She revises her prompt to include: 'For any health-related claim, cite the specific study or note that evidence is preliminary. ' She regenerates the article and re-evaluates it. Accuracy rises to 3 (claims now reference specific studies, though one study is from 2014 and may be outdated). Appropriate caution rises to 4 (disclaimer is present and the language consistently uses 'may help' rather than 'will reduce').

She passes it with a note to verify the 2014 study is still considered current.

## Example: E-commerce Brand Evaluating Programmatic Product Descriptions

**Scenario:**

An e-commerce company selling outdoor gear uses Claude to generate 500 product category descriptions for a programmatic SEO rollout. Each description targets a long-tail keyword like 'best hiking boots for wide feet' or 'ultralight backpacking tent under 2 pounds.' The team of two content managers cannot evaluate all 500 pieces, so they need a sampling strategy.

**Walkthrough:**

The team stratifies their 500 descriptions into 8 product categories and randomly samples 5 from each, creating a batch of 40 to evaluate. They use a simplified rubric with three dimensions: accuracy (product specifications and claims match manufacturer data), honesty (no exaggerated performance claims), and helpfulness (description actually helps the searcher choose a product). Evaluation takes about 6 hours across two days. 8 (many descriptions are generic and could describe any product in the category).

The low helpfulness score reveals that the prompt template does not include differentiating product features. The team modifies the prompt to require: 'Explain what makes this specific product different from others in the category. 9. 7 across the new sample.

## Example: Agency Evaluating Client Thought Leadership Content

**Scenario:**

A digital marketing agency uses Claude to draft thought leadership articles for three B2B clients. Each client has distinct brand voice, industry expertise, and competitive positioning. The agency produces 6-8 pieces per client per month and has a junior content editor responsible for quality review across all clients.

**Walkthrough:**

The agency builds a shared base rubric with four constitutional dimensions, then adds one client-specific dimension for each account: 'consistent brand voice' scored against each client's style guide. The junior editor evaluates a batch of 20 articles (6-7 per client). 6 across all clients, but balanced perspective shows a stark split. 3 on balance because its prompt template encourages aggressive competitive positioning.

4 on balanced perspective. 5 for Client B because the style guide was not included in the prompt. 0 in the following month. The agency now onboards every new client by immediately building the client-specific evaluation dimension before generating any content.
