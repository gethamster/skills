---
name: hamster-cpu-profiling
description: "Investigate main-thread freezes / slow pages with a real CPU profile instead of guessing. Use when a page locks up, the sidebar/cards go unresponsive, requests hang pending, a 'freeze' or 'jank' is reported, or you need to prove a perf fix worked (before/after). Drives a real browser via agent-browser, captures a Chrome DevTools profile, and parses it for the dominant hot frame — separating real app cost from profiler/dev-mode artifacts."
version: "1.0.0"
---

# Hamster CPU profiling — find the freeze before theorizing

A page freeze is a **main-thread CPU block**: one JavaScript task runs so long that paint, input, and pending fetches all stall behind it. You cannot fix it by reading code and guessing — the cost is rarely where it looks. **Get a real CPU profile first**, find the dominant frame, fix that, then re-profile to prove it.

> First, classify the failure mode (see `feedback_verify_failure_mode_before_fixing`): a **CPU hang** (this skill) is different from a thrown error (error boundary) or a network stall (waterfall). The tell for a CPU hang: an in-page probe can't run during the block — you must measure from **outside** the page.

## Tooling: agent-browser, NOT Playwright

Use the `agent-browser` CLI. It drives a persistent, auth-preserving browser session and exposes `profiler start/stop`. Playwright's per-test isolation makes warm-cache / post-deploy repro awkward, and you can't easily time round-trips from outside.

```bash
agent-browser --session-name <name> open "<url>"     # navigate (auth persists per session)
agent-browser --session-name <name> profiler start    # begin CPU profile (DETACHES the page)
agent-browser --session-name <name> profiler stop out.json
agent-browser --session-name <name> eval "1+1"        # round-trip probe
```

## The method

### 1. Open the page and confirm it rendered

```bash
agent-browser --session-name perf open "http://localhost:8080/home/<account>/<page>"
agent-browser --session-name perf eval "document.querySelectorAll('<rows-selector>').length"
```

Session auth can expire — if you land on `/auth/sign-in`, fill `input[type=email]` / `input[type=password]` and click the submit button (snapshot `-i -c` to get its ref; refs are NOT stable across reloads, re-snapshot each time). Always go through the proxy port (8080), never raw Next (3000).

### 2. Detect the block from OUTSIDE (eval round-trip)

A CPU hang can't run an in-page timer, so measure the wall-clock of an `eval` round-trip from the shell:

```bash
for i in $(seq 1 20); do
  t0=$(node -e 'process.stdout.write(String(Date.now()))')
  agent-browser --session-name perf eval "1+1" >/dev/null 2>&1
  t1=$(node -e 'process.stdout.write(String(Date.now()))')
  echo "[$i] $((t1 - t0)) ms"
done
```

Baseline is ~160–200 ms. A block shows as seconds. (A reload-triggered first eval also includes navigation time — don't read that one as pure CPU; use the trace's task durations instead, step 5.)

### 3. Force the worst case (for local-first / stash pages)

Local-first pages (`@kit/stash`) resolve from IndexedDB + react-query. The expensive path is a **cold resolve**: the id-list is on disk but the entity rows are not (a post-deploy cache bust, or a large cold account). Reproduce it by deleting entity blobs while keeping the id-list, then reload. Stash realtime tiers have a 30s `staleTime`, so wait ~35s after load before reloading so the list actually refetches. See `scripts/bust-stash-entities.js` for the IndexedDB cursor.

> ⚠️ **Local dev only.** That helper *deletes* IndexedDB data — it's a repro tool for `localhost`, and self-aborts on any non-localhost origin. Never run it against a deployed environment.

### 4. Capture the profile (mind the detach + reload caveats)

`profiler start` **detaches** the page, so fire the reload AFTER starting, and **background it** — a foreground reload hangs ~2 min because analytics requests never let the page reach `networkidle`.

```bash
agent-browser --session-name perf profiler start
agent-browser --session-name perf reload >/dev/null 2>&1 &   # background
RPID=$!
sleep 9                                                        # capture window
agent-browser --session-name perf profiler stop trace.json
kill $RPID 2>/dev/null
```

### 5. Parse — and separate signal from artifact

The bundled scripts in `scripts/` aggregate the trace. **The cardinal rule: agent-browser's own instrumentation and React dev-mode logging are NOT your app's cost.** Strip them or you'll chase ghosts:

- `(idle)` / `(program)` / `agentation*` → agent-browser overhead. It also **hooks `setTimeout`/`clearTimeout`**, so native timer self-time is wildly inflated (~80µs/call vs ~1µs in prod). Use timer *call counts* as a signal, never their µs.
- `logComponentRender` / `logComponentEffect` / `measure` / `run` → React **dev-mode** instrumentation, absent in production.
- What's left — your app + library JS — is the real prod-relevant cost.

```bash
node scripts/longtasks.cjs trace.json        # GROUND TRUTH: longest main-thread tasks (a >50ms task janks; >200ms is a visible freeze)
node scripts/classify.cjs trace.json         # self-time split into app-JS vs artifacts; top prod-relevant frames
node scripts/callers.cjs trace.json setTimeout   # who calls a hot native fn (catches agentation inflation)
node scripts/profile-selftime.cjs trace.json     # raw self-time by function (no classification)
```

The **longest-task** number from `longtasks.cjs` is the user-facing truth and the metric to quote before/after. `classify.cjs` tells you *which frame* to attack.

### 6. Fix the dominant frame, then PROVE it

Re-run the exact same capture after the fix and compare longest-task + tasks>200ms + the top app-JS frames. Do not claim a fix without an after-profile showing the hot frame gone. A real example (briefs list, ~1000 items): longest task **620ms → 108ms**, tasks >200ms **2 → 0**, after replacing an N-observer `useQueries` with one cache subscription — the query-core observer frames vanished from the profile entirely.

## Common traps

- **Trusting raw self-time.** Native `clearTimeout` topped one profile at 196ms — but `callers.cjs` showed it was agent-browser's hook. Classify first.
- **Per-render `JSON.stringify`/`join` look guilty but profile at ~0ms** — V8 is fast; the real cost was observer machinery + re-render count. Measure, don't assume.
- **Reading the post-reload first eval as CPU.** It includes navigation; use trace task durations.
- **Dev vs prod skew.** `jsxDEV` and React dev logging inflate render cost in dev. The *structure* of the cost (which subsystem, how many re-renders) transfers to prod; the absolute µs does not. For a prod-accurate number, profile a production build.

## Scripts

All in `scripts/` (plain Node, no deps). Handle both `.cpuprofile` and DevTools-trace (`Profile`/`ProfileChunk`) formats.

| Script | Answers |
| --- | --- |
| `longtasks.cjs` | How bad is the block? (longest tasks, busy time, task count) |
| `classify.cjs` | Where is the *real* cost? (app-JS vs artifact buckets, top frames) |
| `callers.cjs <fn>` | Who calls this hot function? (de-attributes inflated native frames) |
| `profile-selftime.cjs` | Raw self-time leaderboard (unclassified) |
| `bust-stash-entities.js` | Force the cold-resolve worst case (eval body) |
