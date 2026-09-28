# Examples: Benchmarking and Observing Agent Loops

## Shadow-testing an escalation decision in a support agent

**Scenario:**

Illustrative scenario: a support agent currently escalates every refund request above a fixed rule to a human, and the team wants a decision layer to choose between resolve and escalate.

**Walkthrough:**

The team freezes an evaluation set of, say, 300 past refund tickets with known outcomes, including 40 deliberately ambiguous ones. They run the new escalate question in shadow mode for two weeks, logging its answer next to the rule's choice along with model version, question version and threshold. At the end they find the two disagreed on roughly one run in six. In the high-probability band, the decision layer's resolve calls matched the eventual outcome almost every time, while the lower bands were mixed.

They promote only the high band, keep the rest on the rule, and set an alert on fallback rate.

## Attributing a cost increase after a question rewrite

**Scenario:**

Illustrative scenario: after a routine update, a research agent's average cost per run rose noticeably, and two changes had shipped the same week: a reworded routing question and a new threshold.

**Walkthrough:**

Because every decision row carried the question version and threshold, the team could replay the frozen evaluation set four ways: old question and old threshold, each change alone, and both together. The reworded question alone reproduced nearly all of the cost increase. Inspecting the runs that flipped showed the new wording pushed borderline cases toward an expensive specialist worker. They reverted the wording, kept the threshold, and added the flipped runs to the next version of the evaluation set.

The changelog now links both configurations to their replay results.

## Catching a silent fallback problem

**Scenario:**

Illustrative scenario: a coding agent's goal rate looked stable after launching a new tool-selection decision, but latency crept up over a month.

**Walkthrough:**

The dashboard split fallback rate by trigger type, and malformed-output fallbacks had climbed from rare to about one request in ten. The fallback path was sending those cases to the original, slower selection method, which kept goal rate intact while hiding the regression. Logs showed the rise began when a new tool name was added to the answer space without bumping the question version. The team versioned the question properly, replayed the evaluation set, and confirmed malformed outputs dropped back.

They added a forced malformed-output case to the benchmark so the path is exercised on every replay.
