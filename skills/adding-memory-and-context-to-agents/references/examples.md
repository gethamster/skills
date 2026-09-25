# Examples: Adding Memory and Context Management to AI Agents

## Support agent that forgot customers after deploys

**Scenario:**

Illustrative scenario: a support agent runs on two instances behind a load balancer, and users complain it asks for their order number again partway through a chat.

**Walkthrough:**

The team inspects the history length logged per turn and sees it drop to zero whenever a request lands on the other instance. The history was held in process memory, so each instance had its own copy. They move conversation state to a persistent document store keyed by conversation ID and keep the load-or-create pattern at the start of each turn. After a restart test and a cross-instance test both pass, the repeated questions stop.

They also add a trim rule keeping the last 20 messages plus a summary, which keeps prompt size flat on long chats.

## Policy assistant that ignored its documents

**Scenario:**

Illustrative scenario: an internal HR assistant has a vector store loaded with 400 policy pages, yet it answers leave questions from general knowledge.

**Walkthrough:**

Inspecting the outgoing prompt shows no policy text at all. The store was registered and populated, but no code queried it before the model call. The developer adds a retrieval step that embeds the question, takes the top four matches above a similarity cutoff, and inserts them as a labelled policy context block. Answers now quote the right policy sections, and the team adds source metadata so each answer can cite the page it came from.

## Sales coach with cross-session recall

**Scenario:**

Illustrative scenario: a sales coaching agent should remember each rep's stated goals from previous weeks without replaying every past conversation.

**Walkthrough:**

The team defines a memorable-content rule: confirmed goals and completed action items only. At the end of each session, the agent's summary of those items is embedded and stored with the rep's ID and date as metadata. At the start of a new session, retrieval filters by rep ID and pulls the most recent relevant goals into the prompt. Current-session history is kept separately and trimmed.

Reps report the coach picks up where they left off, while prompt size stays roughly constant week to week.
