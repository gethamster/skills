# Examples: Integrating Plugins and Tools into Semantic Kernel Agents

## Exposing an internal order lookup

**Scenario:**

Illustrative scenario: a support team wants its agent to answer order status questions from an existing C# service class instead of guessing.

**Walkthrough:**

The developer adds a GetOrderStatus method that takes an order ID and returns a structured record with status and estimated delivery. They decorate it with KernelFunction and write a description stating it should be used only when the customer supplies an order ID. Because the method lives in a legacy class, they wrap it with KernelPluginFactory into an Orders plugin and add it to the shared kernel at startup. Testing shows the agent calls the function for questions containing an order ID and asks for the ID when it is missing.

The startup log lists Orders.GetOrderStatus, confirming registration.

## Connecting a ticketing API through OpenAPI

**Scenario:**

Illustrative scenario: an operations team wants an agent that can create and search tickets in a third-party tracker that publishes an OpenAPI specification.

**Walkthrough:**

The developer imports the specification as a Tickets plugin and places the base URL and API key in application configuration, not in code. The first run fails at startup because the key setting is empty, which is exactly what the startup check was built to catch. After fixing the configuration, they notice the spec exposes delete operations the agent should never use. They filter the imported operations down to create and search before registering the plugin.

The agent now files tickets only through the two permitted functions.

## Sharing tools across two agents

**Scenario:**

Illustrative scenario: a team runs a research agent and a drafting agent, and both need a document search tool, but only the drafting agent should publish.

**Walkthrough:**

The developer registers a DocumentSearch plugin on the single kernel that the application builder provides to both agents. The Publish plugin is passed only to the drafting agent's constructor, so the research agent never sees it. Before this change each request built its own kernel, and response times suffered under load. Moving to one registered kernel removed that rebuild cost.

A regression prompt asking the research agent to publish now correctly produces no tool call.
