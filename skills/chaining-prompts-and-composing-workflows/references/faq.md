# FAQ: Chaining Prompts and Composing LLM Workflows

## What is LCEL and do I need it to chain prompts?

LCEL is LangChain's way of composing components by wiring them explicitly into a sequence. You do not strictly need it, since you could call each component by hand, but LCEL makes the composed chain a single invokable component. That lets you test, trace and reuse the whole sequence as one unit. It is also the mechanism behind the control that comparisons credit LangChain with.

## Should I use prebuilt chain classes or compose from primitives?

Prefer composing from templates, models and parsers. Prebuilt classes are convenient, but framework releases have moved older features into a classic package, so imports and behaviour can shift. Primitives keep the control flow visible in your own code. Use a prebuilt class only when it saves real effort and you understand what it does internally.

## How many steps should a chain have?

As many as the workflow has distinct transformations, and no more. A useful test is whether each link produces an output you can describe in one sentence and assert in a test. If a link does two things, split it. If two links always change together and never get reused apart, consider merging them.

## When should I switch from a chain to LangGraph?

Switch when the workflow needs to loop, branch based on intermediate model output, retry until a quality check passes, or pause and resume with saved state. Chains run in one direction and hold no state between runs. You can keep linear stages as chains and call them from graph nodes, so moving to a graph does not mean rewriting everything.

## Why does my chain give different results on the same input?

Model output is non-deterministic, so wording will vary between runs even when the chain is correct. Test the shape and required fields of each intermediate result rather than exact strings. If the shape itself changes, tighten the formatting instructions in the template and use a structured parser. Tracing each boundary shows which stage introduced the variation.
