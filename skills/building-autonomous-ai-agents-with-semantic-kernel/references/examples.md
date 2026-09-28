# Examples: Building Autonomous AI Agents with Semantic Kernel

## Order status agent for a support team

**Scenario:**

Illustrative scenario: a developer builds a first agent that answers order status questions for an internal support desk, backed by a single lookup function returning made-up records such as order ZX-001.

**Walkthrough:**

The developer pins package versions, configures one chat-completion service and confirms it with a plain prompt. They build the kernel at startup and register a native function named get_order_status with a description stating it returns status and ship date for an order ID. The persona says to call that function before quoting any status and to refuse questions about refunds. With automatic function choice enabled, the test prompt 'Where is order ZX-001?' returns the invented ship date from the function, and the log shows one call with the right argument.

A refund question produces a polite refusal and no function call, which matches the persona.

## Debugging an agent that talks instead of acting

**Scenario:**

Illustrative scenario: an expense policy agent keeps replying 'I would check the policy limit for you' but never returns the made-up limit of 75 units stored in its lookup function.

**Walkthrough:**

The developer first checks the call log and finds zero function invocations. They list the kernel's registered functions and confirm the policy function is present, which rules out a registration problem. Reviewing the invocation code, they find the execution settings were created but never passed to the agent call. After passing settings with automatic function choice, the same prompt triggers the function and the reply includes the invented limit.

They add a test prompt that fails if the limit is missing, so the regression cannot return unnoticed.

## Upgrading a first agent built from an old sample

**Scenario:**

Illustrative scenario: a team inherits a prototype agent built months earlier from an experimental-era sample, and it stops compiling after a routine dependency update.

**Walkthrough:**

The developer records the old and new package versions and reads the release notes for the new one. They find that the agent class and setup calls in the sample no longer match the current API. Rather than patching line by line, they rebuild in order: service, kernel, starter plugin, persona, execution settings, chat loop. They also note that the repository now points to Microsoft Agent Framework and log a decision on whether to migrate later.

The rebuilt agent passes the original test prompts, and the pinned versions go into the dependency file.
