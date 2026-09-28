# FAQ: Adding Memory and Context Management to AI Agents

## What is the difference between chat history and long-term memory in an agent?

Chat history is the ordered record of messages in the current conversation, sent back to the model so it can follow the thread. Long-term memory is content stored as embeddings in a vector database and retrieved by similarity when relevant. History answers what was just said, while long-term memory answers what the agent knows from elsewhere. Most production agents need both, managed separately.

## Do I need a vector database to give an agent memory?

Not always. If the agent only needs to stay coherent within a session, persistent chat history is enough. You need vector memory when the agent must recall documents, facts or past sessions that do not fit in or belong to the current conversation. Start with history and add retrieval once you can name the specific knowledge the agent is missing.

## Why does my agent lose context after a restart?

Almost always because conversation state is held in process memory. Sample code often uses in-memory storage for convenience, and it is lost when the process stops or when a request reaches a different instance. Move history to a durable store and load it at the start of every turn. Then test by restarting mid-conversation.

## How much retrieved content should I inject into the prompt?

As little as answers the question well. More context raises cost and can dilute the model's attention with marginally relevant material. Begin with a small number of top matches and a similarity cutoff, review real transcripts, and increase only when answers show gaps. Labelling injected content as background also helps the model use it correctly.

## What happens if I change my embedding model?

Existing vectors become incompatible with new query vectors, so retrieval quality drops or breaks without obvious errors. The store's dimension setting may also no longer match. Plan a re-embedding job that rebuilds the collection with the new model, and keep the model name and version in configuration so the change is deliberate.
