# FAQ: Deploying AI Agents for SEO and Keyword Research Automation

## Does Semantic Kernel include keyword data or SEO scoring?

No. The framework supplies agents, kernels, plugins and orchestration. Keyword volumes, SERP data, crawling, parsing and scoring must come from providers and code your application connects. Treat any SEO metric the agent states without a tool call as unverified.

## What keyword volume or density thresholds should my agent use?

The framework does not define any, so they are project decisions. Put them in your function parameters with documented defaults, for example a minimum monthly volume suited to your niche. Review them per market, since a sensible cutoff for a large English market may exclude everything in a small one.

## Should I use a planner to sequence the SEO steps?

Use automatic function calling. Current guidance says the Stepwise and Handlebars planners were deprecated and removed. Instead, describe the intended order in the persona and in tool descriptions, and let the model select functions, then check the call log to confirm it follows that order.

## How many SEO tools should one agent have?

Start small, with keyword research, content optimization and an audit function. Each added tool gives the model more options and more chances to pick the wrong one. Add metadata or internal-link tools once the core sequence behaves reliably on your saved briefs.

## How do I stop the agent from inventing search volumes?

Return volumes only from a tool, require the persona to attribute every metric to its source tool, and log tool outputs. During review, compare stated figures with raw tool responses. If a number appears with no matching tool output, tighten the persona and check that the keyword tool actually ran.
