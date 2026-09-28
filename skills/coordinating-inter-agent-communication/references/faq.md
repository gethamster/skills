# FAQ: Coordinating Inter-Agent Communication

## Can teammates in Claude Code Agent Teams message each other without going through the lead?

Yes. Teammates are independent sessions that can communicate directly through inter-agent messaging, while the lead coordinates the overall work. Use this for questions on the boundary between two teammates. Decisions that affect the wider plan should still go through the lead.

## Can I talk to a teammate directly instead of the lead?

Yes, you can interact with any teammate, not only the lead. Direct messages are best for corrections and unblocking, because they avoid a relay that might paraphrase your intent. Tell the lead afterwards what you changed so its picture of the team stays current.

## Why did my messages stop reaching teammates after /resume?

In-process teammates are not restored by /resume or /rewind, so the teammates the lead remembers may no longer exist. Confirm which teammates are running before sending anything. Spawn replacements for open work and brief them from the task list and any written decision records, since earlier messages lived in contexts that are gone.

## Should progress updates go in messages or in the task list?

Put status in the shared task list and reasoning in messages. Dependent tasks unblock from task status, so a completion announced only in a message can leave other teammates waiting. Reserve messages for decisions, interface changes, blockers and questions.

## Do inter-agent messages add to token costs?

They do. Each teammate consumes tokens independently in its own context window, so every message is processed by the receiver. Targeted, self-contained messages keep that overhead low, while broadcasts and clarifying back-and-forth multiply it.
