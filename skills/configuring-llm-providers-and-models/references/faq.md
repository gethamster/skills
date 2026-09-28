# FAQ: Configuring LLM Providers and Models in LangChain

## Should I pass a BaseChatModel instance or an identifier string?

Start with an identifier string where the component supports it, because it keeps configuration simple and readable. Switch to a BaseChatModel instance when you need construction details the string cannot express, such as a custom client or specific parameters. The [LangChain built-in middleware docs](https://docs.langchain.com/oss/python/langchain/middleware/built-in) document both forms, so you can mix them across components.

## Do all LangChain components accept identifier strings?

No. The documentation says some components accept an identifier string in addition to a BaseChatModel instance, so not every component will. Check the component's reference before relying on the string form. A factory that can return either form protects you from this difference.

## How do I change the model for one user without redeploying?

Use middleware that runs at the start of the agent lifecycle and selects the model based on the caller. The [LangChain context engineering guide](https://docs.langchain.com/oss/python/langchain/context-engineering) shows middleware loading user preferences and overriding the model at runtime. Store the preference in a database or config service so changing it needs no deploy.

## Where should API keys live?

Keep credentials in environment variables or a secret manager, not in the file that selects models. Model choice is something you want to review and version openly, and secrets are not. Your factory can read both sources when it builds the model.

## How do I know a model swap actually worked?

Log the resolved provider and model on every call, then check those logs after changing config. Run a fixed set of test prompts against the old and new model so differences come from the model, not the inputs. If you had to edit code beyond the config value, some call site is still bypassing your factory.
