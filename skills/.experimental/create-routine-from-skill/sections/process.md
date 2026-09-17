## Process

### 1. Read the skill

Read the actual SKILL.md or docs of the skill being automated. Identify:

- What it does per invocation
- What inputs change between invocations (the variable) and what stays fixed (the configuration)
- What a good output looks like, concretely

Never design a routine for a skill you have not read. Invented mechanics in a routine spec produce a routine that fails silently at 3am.

### 2. Find the repeatable invocation

Not every skill deserves a routine. The test: is there an invocation of this skill that (a) recurs on a rhythm or in response to an event, (b) needs no judgment call mid-run, and (c) produces an output someone will actually consume? If the honest answer is no, say so and stop. A skill that only makes sense with a human steering it should stay a skill.

When yes, state the invocation in one sentence: "every weekday morning, run [skill] against [target] and deliver [output] to [destination]."

### 3. Pick the trigger

Three shapes, per Hamster's routine model:

- **Schedule** — recurring cadence. For rhythms: daily digests, weekly audits, drift checks. Specify cadence and rough time of day, and why that cadence (tied to when the output gets consumed, not arbitrary).
- **Trigger** — fires on an event. For reactions: a brief approved, a PR opened, something synced. Specify the event and any filter.
- **Loop / goal** — runs repeatedly toward a defined end state. For convergence work: keep X true, work down a backlog until empty. Specify the goal condition and what "done for now" means per iteration.

Pick one primary. Note a secondary only if it genuinely earns its place.

### 4. Write the autonomous prompt

This is the whole ballgame. The routine runs with nobody approving steps, so the prompt carries everything:

- **The task**, referencing the skill by name and its invocation pattern
- **The definition of done** — the concrete artifact: a posted summary, an updated doc, a flagged list. Never "check for issues"; always "do X, produce Y, deliver to Z."
- **Scope fences** — what the routine must NOT do (no destructive actions, no publishing without review, no touching X)
- **The exception path** — what to do when something unexpected happens: stop and report, skip and log, never improvise past the fence
- **Output destination** — where results land and in what format

Write the prompt in second person, as instructions to the agent, tight enough that a stranger could predict every run's behavior from reading it.

### 5. Guardrails and success criteria

- **Guardrails**: rate/volume limits, review gates (does a human approve before anything external happens?), data boundaries
- **Success criteria**: how Eyal knows after two weeks whether this routine earns its keep. One or two observable measures, not vibes.
- **First-three-runs checklist**: what to manually inspect on runs 1-3 before trusting it (output quality, scope respect, destination formatting)