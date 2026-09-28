# Examples: Preventing Context Poisoning, Distraction, and Clashes

## A hallucinated function that keeps coming back

**Scenario:**

Illustrative scenario: a developer asks Claude to refactor a payments module, and early in the session Claude invents a helper function that does not exist. Every later suggestion calls the missing helper.

**Walkthrough:**

The developer labels this as poisoning because a single error is being repeatedly referenced. Correcting it in the same thread fails, since the original claim remains in context. They run the reset test by starting a fresh session with a short prompt naming the real files. The invented helper does not reappear, which confirms the problem lived only in history.

They save the minimal prompt for future refactors and keep exploratory questions in a separate session.

## Two testing conventions fighting

**Scenario:**

Illustrative scenario: a team switched test frameworks, but Claude alternates between writing tests for the old framework and the new one across sessions, even after clearing.

**Walkthrough:**

The symptom survives a reset, so it is being reloaded from a persistent source. A search of instruction files finds the new convention in CLAUDE.md and the old one in a testing skill written before the switch. The team rewrites the skill to defer to CLAUDE.md, deletes the stale instruction and records the change in the commit message. A fresh session now produces tests for the new framework consistently.

They add a checklist item to review skills whenever a convention changes.

## An outdated fact arriving through a tool

**Scenario:**

Illustrative scenario: an agent keeps citing a deprecated API endpoint, although CLAUDE.md and every skill reference only the current one.

**Walkthrough:**

The persistent layer is clean, so the developer turns to external feeds. They disconnect connected MCP servers one at a time and rerun the same prompt. The deprecated endpoint disappears when an internal documentation server is disabled, which reveals it is serving an old page. The developer flags the stale page to its owners and marks that server as unverified for API details until it is fixed.

The agent's inventory of feeds now records which sources are trusted for what.
