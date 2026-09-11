# Examples: Crafting Claude AI Prompts Aligned with Constitutional Values

## Example: B2B SaaS blog post targeting an informational keyword

**Scenario:**

A project management SaaS company wants to create a blog post targeting "what is resource leveling" (1,900 monthly searches, informational intent). The content team has one writer and uses Claude to produce first drafts. Previous AI drafts were generic and required heavy editing for accuracy.

**Walkthrough:**

The writer identifies the audience as mid-level project managers who understand basic scheduling but have not encountered resource leveling formally. The primary constitutional principle is honesty because the reader needs accurate, trustworthy information. The prompt opens with: "You are an experienced project management consultant who has implemented resource leveling on projects ranging from 10 to 500 people. " The task section specifies a 1,000-1,400 word article with the honesty constraint: "Distinguish between situations where resource leveling is essential versus situations where it adds unnecessary complexity.

" The output produces a balanced, expert-toned article that required only 15 minutes of editing for company voice, compared to the previous 90-minute rewrites. The writer saves the prompt as the "Informational Explainer" template.

## Example: Comparison page for a small marketing agency

**Scenario:**

A three-person marketing agency needs to create a comparison page targeting "mailchimp vs convertkit" (4,400 monthly searches, commercial investigation intent). They use one of these tools themselves but want the page to rank and build trust, not just promote their preference.

**Walkthrough:**

The agency owner identifies the audience as solopreneurs and small business owners choosing their first or second email marketing platform, with basic understanding of email marketing but limited technical knowledge. The primary constitutional principle is harmlessness because the reader needs a fair comparison. " The task specifies a structured comparison with the harmlessness constraint: "Present genuine strengths and weaknesses for both platforms. " The honesty constraint adds: "Use current pricing tiers and feature sets.

If a feature has changed recently, note the approximate date of change. " The output produces a comparison table with nuanced commentary that acknowledges tradeoffs rather than declaring a winner. The page earns featured snippet placement for the query within three months because Google's systems reward the balanced, well-structured treatment. The template is saved as "Product Comparison" with a note that harmlessness constraints should always be the strongest layer for vs-style content.

## Example: Enterprise content team scaling how-to guides

**Scenario:**

A 12-person content team at a cybersecurity company needs to produce 20 how-to guides per month targeting implementation keywords like "how to configure SIEM alerts" and "how to set up endpoint detection." Their current AI output is technically shallow and sometimes includes outdated best practices.

**Walkthrough:**

The content lead maps all 20 topics and identifies that helpfulness is the primary principle because readers need to accomplish specific technical tasks. The prompt template assigns Claude the role of a senior security engineer with 10+ years of enterprise experience. The helpfulness layer specifies: "The reader is a mid-level security analyst implementing this for the first time in a production environment. They need precise steps, not conceptual overview.

" The honesty layer adds: "If a best practice has changed in the last 12 months due to new threat vectors or vendor updates, note the evolution rather than presenting only the current recommendation. " The harmlessness layer specifies: "Do not recommend disabling security features for convenience. " The team tests this template against three different topics and finds that the output is consistently strong on helpfulness and honesty but occasionally too conservative on harmlessness, recommending overly restrictive configurations for non-critical systems. They add: "Calibrate security recommendations to the sensitivity of the system being configured.

" This refinement produces output that the security reviewers approve with minor edits, reducing the per-article review cycle from four days to one.

## Example: Solo consultant creating cornerstone content

**Scenario:**

An independent SEO consultant wants to create a 3,000-word cornerstone guide targeting "programmatic SEO strategy" (720 monthly searches). They have deep expertise but limited time, so they need Claude to produce a draft that captures their nuanced perspective rather than a generic overview.

**Walkthrough:**

The consultant identifies the audience as heads of marketing at mid-stage startups (Series A to C) who have heard of programmatic SEO but have not implemented it. The audience is skeptical because they have seen low-quality examples. All three constitutional principles are weighted equally because the content needs to be deeply useful (helpfulness), transparent about risks and failure modes (honesty), and fair about when programmatic SEO is not the right strategy (harmlessness). The prompt includes specific examples of the consultant's perspective: "I believe most programmatic SEO fails because teams prioritize page count over page value.

" The honesty constraint specifies: "Include at least three specific failure modes with the observable symptoms that indicate each one. " The output produces a draft that sounds like the consultant's voice, includes their distinctive perspective, and handles the topic with the kind of nuanced, experience-backed authority that both readers and search engines reward. The consultant spends 45 minutes adding personal anecdotes and client examples to the draft, then publishes. The piece becomes their top-performing page for lead generation because it demonstrates genuine expertise rather than regurgitated best practices.
