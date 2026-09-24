# Examples: Managing Memory and Conversation State in LangChain

## Support agent that forgets between requests

**Scenario:**

Illustrative scenario: a customer support agent answers the first question correctly but on the follow-up asks the customer to repeat their order number.

**Walkthrough:**

The team checks the invocation code and finds a checkpointer configured but a new thread_id generated on every HTTP request. They change the thread_id to come from the support ticket ID, so every message on a ticket lands in the same thread. The follow-up now resolves correctly. They also move the order number into structured state so a later summarization cannot drop it.

A regression test sends two turns on one ticket and asserts the second reply references the order without asking again.

## Long planning session drifting off its goal

**Scenario:**

Illustrative scenario: a project planning assistant handles sessions that run for dozens of turns, and by the end it proposes tasks that contradict constraints the user set at the start.

**Walkthrough:**

Logs show a trimming window of the most recent 20 messages, so the opening constraints have fallen out of context. The team replaces pure trimming with summarization triggered once history passes a set token budget, keeping the latest exchanges intact. The summarization prompt has fixed headings for goal, constraints, decisions and open items. After review of ten real summaries, they find constraints preserved in all of them.

Late-session proposals now respect the original limits, and tokens per turn stay within a narrow band.

## Remembering preferences across conversations

**Scenario:**

Illustrative scenario: a writing assistant keeps asking returning users which tone and spelling convention they prefer, even though they answered in last week's session.

**Walkthrough:**

The preference was only ever held in thread state, which a new conversation does not see. The team adds a long-term store and writes confirmed preferences to it when the user states them, keeping the rest of the conversation ephemeral. At the start of each new thread, middleware retrieves the stored preferences and adds them to context. They deliberately avoid saving full transcripts, only the confirmed settings.

A test opens a fresh thread for an existing user and asserts the first draft already uses the saved tone.
