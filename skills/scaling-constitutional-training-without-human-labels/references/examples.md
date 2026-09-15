# Examples: Scaling Constitutional Training Without Human Labels

## Example: SaaS Content Safety at Scale

**Scenario:**

A SaaS company uses Claude to generate SEO content across 50,000 product pages. They need to ensure every page meets brand safety and accuracy standards, but hiring human reviewers for all 50,000 pages is prohibitively expensive. They adopt constitutional training to scale their quality assurance.

**Walkthrough:**

The team drafts a constitution with 12 principles covering factual accuracy, brand voice, regulatory compliance (no unsubstantiated health claims), and competitor mention policies. They generate 5,000 content pages with the base model, then run each through a self-critique pipeline where Claude evaluates each page against the 12 principles using chain-of-thought reasoning. The critique identifies 1,200 pages with issues—800 with tone drift, 300 with weak claims, 100 with regulatory concerns. The model revises each, creating 1,200 preference pairs. They generate an additional 8,000 comparison pairs by varying generation parameters. A preference model is trained on these AI labels and validated against 200 human-reviewed pages (91% agreement). After one round of RLAIF, the model produces content that passes human review 94% of the time, up from 78% with the base model. Total human review required: 200 pages instead of 50,000—a 99.6% reduction in annotation cost. This saas seo claude workflow now runs autonomously with monthly human calibration checks.

## Example: Multilingual Alignment Without Multilingual Annotators

**Scenario:**

A developer building a Claude-powered customer support chatbot needs to ensure alignment across 8 languages. Finding qualified annotators for each language is expensive and slow, especially for low-resource languages.

**Walkthrough:**

Instead of hiring annotators for each language, the team writes constitutional principles in English and uses Claude's multilingual capabilities to apply them across all languages. The self-critique pipeline works in each target language: the model generates a response in French, critiques it in French using the English-derived principles (translated and adapted), and produces a revision. They generate 3,000 preference pairs per language (24,000 total) in one day—a process that would take months with human annotators. They validate with 100 human-labeled samples per language from native speakers. Agreement rates range from 83% (Japanese) to 92% (Spanish). For Japanese, they refine the constitutional principles to better capture honorific and formality norms, bringing agreement up to 88% after re-generation. The final RLAIF-trained model shows consistent alignment across all 8 languages with only 800 total human labels instead of the estimated 24,000 that traditional RLHF would require.
