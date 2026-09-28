# Examples: Configuring LLM Providers and Models in LangChain

## Cutting cost on a support summarizer

**Scenario:**

Illustrative scenario: a team runs a support assistant where one step summarizes long ticket threads, and the summarization step uses the same expensive model as the main agent.

**Walkthrough:**

They add a summarizer role to their model config, separate from the default role. The factory returns an identifier string for it, pointing at a smaller model. Only the summarization call site changes, from the default role to the summarizer role. They run their frozen set of forty sample tickets and compare summaries side by side.

Quality holds on all but a handful of threads, so they keep the smaller model and add those threads to the test set.

## Per-tenant model selection

**Scenario:**

Illustrative scenario: an internal tool serves two departments, and legal wants every request handled by a provider the company has an approved contract with, while engineering is free to use a different default.

**Walkthrough:**

The team keeps a single agent built with create_agent. They add middleware that reads the caller's department at the start of each run and asks the factory for the matching role. The factory maps the legal role to the approved provider and the engineering role to the default. Each run logs the department and the resolved model.

A weekly check of those logs confirms no legal request was served by the wrong provider.

## Moving from strings to an instance

**Scenario:**

Illustrative scenario: a prototype passes an identifier string everywhere, and in production the team needs a custom request timeout and a proxy for one provider.

**Walkthrough:**

The identifier string cannot express the proxy setting, so the factory branch for that provider now constructs a BaseChatModel instance with the timeout and proxy configured. Other providers keep returning strings. No call site changes, because they already receive whatever the factory returns. The team runs the full test suite and confirms latency now stays within their chosen timeout.

The config file gains two fields and nothing else in the repo moves.
