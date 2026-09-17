---
title: Preventing Flaky E2E Tests
tags: testing, e2e, playwright, flaky, reliability
---

# Preventing Flaky E2E Tests

Every rule below maps to a **real failure signature** seen recurring across unrelated
PRs in CI. The format is **symptom → why it flakes → the fix** so you recognize the
trap *before* you write it. If you are touching `apps/e2e/tests`, read this first.

> The single biggest source of E2E flakiness here is not the tests — it's **backend
> DB/connection contention under CI parallelism** (8 workers + the AI backend saturate
> the Postgres/PostgREST pool, Kong returns 502/503, UI states never arrive). The
> test-side rules here make tests *resilient* to that and stop *adding* new flake on
> top of it. The infra fix lives in [apps/e2e/CLAUDE.md](../../../../apps/e2e/CLAUDE.md)
> and the CI workflow, not in test code.

---

## 1. Never use `networkidle` — the app holds realtime websockets

**Symptom:** `TimeoutError: page.waitForLoadState: Timeout exceeded` or a test that
hangs ~30s then fails; intermittent, worse under CI load.

**Why it flakes:** `waitForLoadState('networkidle')` waits for 500ms of zero network
activity. Hamster pages hold open **Supabase Realtime websockets** and poll/stream — the
network **never goes idle**, so the wait either times out or resolves at an arbitrary,
non-deterministic moment. It is a coin-flip dressed up as a wait.

```typescript
// ❌ WRONG — never idles on a realtime page; this was at the TOP of the shared
//            createBrief() helper (briefs.po.ts:50), flaking the whole brief suite
await this.page.waitForLoadState('networkidle');

// ✅ RIGHT — wait on concrete, deterministic signals (these already existed in
//            createBrief right below the bad line, making networkidle pure dead weight)
await expect(this.page).toHaveURL(/\/briefs\/[a-f0-9-]+/);
await this.waitForChatUiReady(15_000); // waits on a specific element being ready
```

**Rule:** Wait on a **concrete signal** — a URL, a specific element's state, a response.
If you think you need `networkidle`, you need a `data-test` element to assert on instead.
There is a CI guard that fails the build on any *new* `networkidle` under `apps/e2e/tests`.

> ⚠️ Removing `networkidle` often **exposes a hydration race** it was accidentally masking —
> the next click/fill lands before React attaches handlers. That's **rule 7**, not a reason
> to keep the wait.

---

## 2. Never use `waitForTimeout()` — fixed sleeps race the app

**Symptom:** Passes locally, flakes in CI (CI is slower); or passes for the author and
flakes for everyone else. Error is usually a downstream `toBeVisible`/assertion failure,
not the sleep itself.

**Why it flakes:** `waitForTimeout(3000)` assumes the app finishes its work in exactly
3s. Under CI DB contention it takes longer → you sample too early → flake. (It also
wastes time when the app is faster.)

```typescript
// ❌ WRONG — guessing how long the backend takes
await page.waitForTimeout(3000);
expect(await voice.audioSentCount()).toBeGreaterThanOrEqual(3);

// ✅ RIGHT — poll the actual condition with a ceiling
await expect
  .poll(() => voice.audioSentCount(), { timeout: 10_000 })
  .toBeGreaterThanOrEqual(3);
```

**Rule:** Replace every fixed sleep with `expect.poll(...)`, a web-first retrying
assertion, or a `waitFor` on a concrete state. The only defensible `waitForTimeout` is
a deliberate debounce-window test, and even then prefer asserting the debounced result.
There is a CI guard against *new* `waitForTimeout` under `apps/e2e/tests`.

---

## 3. Scope selectors that responsive/stacked layouts can duplicate

**Symptom:** `Error: strict mode violation: getByTestId('brief-tab-plan') resolved to 2
elements` (or `getByRole('option')`, `getByText('Shipping')`, etc.). Flakes because the
**second element only mounts sometimes** (a stacked overlay, a mobile+desktop pair).

**Why it flakes:** The same `data-test` / role / text renders **more than once** in the
DOM. e.g. `document-view.tsx:335-336` renders `data-test={`brief-tab-${tab.id}`}`, which
is non-unique the moment a second `DocumentView` mounts (thread/branch overlay). Mobile
and desktop variants of the same control are another common duplicate source. Playwright
strict mode (correctly) refuses an ambiguous match.

```typescript
// ❌ WRONG — ambiguous when a stacked view or responsive twin is present
await expect(page.getByTestId('brief-tab-plan')).toBeVisible();

// ✅ RIGHT — scope to the visible/owning container, or pin to .first()
await expect(page.locator('[data-test="brief-tab-plan"]:visible')).toBeVisible();
// or, when scoping to a container:
await expect(timeline.getByTestId('brief-tab-plan').first()).toBeVisible();
```

**Rules:**
- Assertions on **tabs, options, badges, or any control a stacked/overlay/responsive view
  can duplicate** MUST scope to the visible container or use `.first()`.
- Better still, when a component can mount twice, give the duplicate-able surface a
  **distinct `data-test` namespace** in the React component (prefix by surface) so the
  selector stays unique. Fix the duplication at the source when you can.

---

## 4. Wrap realtime / backend-job-driven assertions in a retrying helper

**Symptom:** `expect(locator).toBeVisible() failed — element(s) not found`, failing all
retries on backend-driven UI: brief status badges (`Refining`/`Delivering`), chat URL
previews, seeded realtime messages, anything fed by a BullMQ job or `postgres_changes`.

**Why it flakes:** A bare `toBeVisible()` uses the default **10s** expect timeout. UI
driven by a DB round-trip + realtime delivery (or an AI/BullMQ job) regularly exceeds 10s
under CI load. One slow delivery = red build. The same `threads.spec.ts` file shows both
the wrong pattern (`:50` bare `toBeVisible`) and the right one (`:81` wrapped in `toPass`).

```typescript
// ❌ WRONG — single shot, default 10s, no backoff, on realtime-seeded data
await expect(page.locator('text="First seeded message"')).toBeVisible();

// ✅ RIGHT — retrying assertion with a realtime-appropriate ceiling
await expect(async () => {
  await expect(page.locator('text="First seeded message"')).toBeVisible();
}).toPass({ timeout: 15_000 });
```

**Rules:**
- Any assertion on data that must **round-trip the DB or arrive via realtime / a queue**
  goes through `toPass()` / `expect.poll()` with a timeout sized for the operation
  (15s+ for realtime, more for AI generation), or a named PO constant.
- For deterministic realtime seeding (pre-subscribe → write → assert), use the
  [`hamster-e2e-realtime`](../../hamster-e2e-realtime/SKILL.md) skill — it removes the
  race entirely instead of just widening the timeout.
- Do **not** "fix" this by globally raising `expect.timeout` or `retries` — that masks
  real regressions and hides the flake-rate signal (see rule 6).

---

## 5. Isolate shared state — don't fight other workers over one seeded record

**Symptom:** A spec passes alone but flakes in the full parallel run; messages/rows from
one test "bleed" into another's assertions; intermittent count mismatches.

**Why it flakes:** Multiple specs read/write the **same seeded record** (e.g. a shared
`TEST_BRIEF_ID` / the `hamster` demo account) while running across 8 parallel workers.
Worker A's writes land in worker B's view. The `methods-library`, `routines-library`, and
`voice` projects are already pinned to `workers: 1` in `playwright.config.ts` for exactly
this reason — that's a signal the suite has shared-state hazards, not a pattern to copy
blindly.

```typescript
// ❌ WRONG — every test in the suite mutates the same shared brief, in parallel
await navigateToBrief(TEST_ACCOUNT_SLUG, TEST_BRIEF_ID);
await sendMessage('hello'); // bleeds into sibling tests' assertions

// ✅ RIGHT — seed a fresh brief per test, tear it down after (admin client)
let briefId: string;
test.beforeEach(async () => {
  briefId = await seedBriefViaAdmin();      // unique per test
});
test.afterAll(async () => {
  await deleteBriefViaAdmin(briefId);
});
```

**Rules:**
- Prefer **per-test seeded data** (create via admin client in `beforeEach`, tear down in
  `afterAll`) over mutating a shared seeded record. Mirror the `activity-timeline` /
  `thread-plan-nav` seed-and-teardown pattern.
- If a refactor is too large right now, add `test.describe.configure({ mode: 'serial' })`
  to the affected describe as an **interim** guard, and leave a TODO to seed per-test.
- Reach for project-level `workers: 1` only when a suite is *fundamentally* shared-state
  and per-test seeding isn't feasible — it serializes the whole suite and slows CI.

---

## 6. "N did not run" / whole-shard red is usually infra, not your test

**Symptom:** Playwright reports `2 did not run`, or a shard fails before any test starts.
AI/web container logs show `TransientDispatchError: Database unavailable` or
`An invalid response was received from the upstream server`.

**Why it happens:** This is the **backend DB/connection contention** root cause — the
Postgres/PostgREST pool is saturated, so the backend drops requests and Playwright
cascade-aborts. It is *not* fixed by editing the failing test.

**Rules:**
- Don't "fix" a cascade-abort by adding retries/timeouts to the named test — check the
  **container logs** for upstream/DB errors first. If you see them, it's the infra fix
  (pool size, `WORKER_SCALE`, worker count), not a test change.
- Don't add a fixed sleep to "let the backend catch up" — that's rule 2.

---

## 7. Removing a wait exposes hydration races — retry the interaction, not the wait

**Symptom:** After you replace a `networkidle`/sleep with a concrete-element wait, a click
or fill on an element that **is visible** silently does nothing: a dropdown never opens, a
modal never appears, a search filter never applies — and the follow-up assertion times
out. Only on the **first** interaction after a navigation; worse under CI load.

**Why it flakes:** The element renders (visible) before React finishes **hydrating** — its
event handlers aren't attached yet. A `.click()` that lands in that window is a no-op; a
`.fill()` on a controlled input is dropped (the value reverts on the next render because
`onChange` never fired, so downstream filters never apply). `networkidle` used to *mask*
this by accidentally delaying the interaction — so this is the **most common regression
when removing it** (rule 1). The fix is to make the interaction resilient, not to re-add a
settle delay.

```typescript
// ❌ WRONG — one click; if it lands pre-hydration the menu never opens
await this.addBriefButton.click();
await this.linkExistingBriefItem.click(); // times out — menu was never opened

// ✅ RIGHT — retry the trigger click until what it opens is actually visible
private async clickToOpen(trigger: Locator, opensTo: Locator, timeoutMs = 15_000) {
  await expect(async () => {
    await trigger.click();
    await expect(opensTo.first()).toBeVisible({ timeout: 2_000 });
  }).toPass({ timeout: timeoutMs });
}

// ✅ RIGHT — controlled input: retry the fill until the value sticks (proves onChange
//            fired and React state updated, so the downstream filter actually applies)
await expect(this.search).toBeVisible({ timeout: 15_000 });
await expect(async () => {
  await this.search.fill(value);
  await expect(this.search).toHaveValue(value, { timeout: 1_000 });
}).toPass({ timeout: 10_000 });
```

**Rules:**
- An interaction that **opens** something (dropdown/modal/popover) goes through a retrying
  `clickToOpen(trigger, opensTo)` helper — assert the opened target, don't fire-and-pray.
- A **controlled input** whose value drives downstream UI retries `fill` until
  `toHaveValue` confirms it stuck.
- `navigateTo*` helpers wait for a concrete header/toolbar element before returning, so the
  page is **interactive** (hydrated), not merely routed, when the test acts.
- This is the partner to rule 1: replace `networkidle` with a concrete wait, then make the
  *interaction* resilient — don't reach back for a settle delay.

---

## Quick audit before you open a PR

```bash
# These should not increase. Run from repo root.
rg -c "networkidle" apps/e2e/tests -g '*.ts'        # banned on realtime pages
rg -c "waitForTimeout" apps/e2e/tests -g '*.ts'      # banned — use expect.poll
rg -n "getByTestId\(|getByText\(|getByRole\(" apps/e2e/tests -g '*.ts' \
  | rg -v "\.first\(|:visible|\.nth\(|\.filter\("   # check for duplicate-able selectors
```

## Decision table

| You are about to… | Don't | Do |
| --- | --- | --- |
| Wait for a page to "settle" | `waitForLoadState('networkidle')` | assert a concrete element / URL |
| Wait a fixed time for backend work | `waitForTimeout(n)` | `expect.poll()` / `toPass()` on the condition |
| Assert a tab/option/badge | bare `getByTestId(...)` | scope to `:visible` container or `.first()` |
| Assert realtime/queue-driven UI | bare `toBeVisible()` (10s) | wrap in `toPass({ timeout: 15_000 })` |
| Open a menu/modal then click inside | one `trigger.click()` then act | `clickToOpen(trigger, opensTo)` — retry until it opens |
| Fill an input that drives downstream UI | bare `fill()` | retry `fill` until `toHaveValue` (survives pre-hydration drop) |
| Use the shared demo brief | mutate `TEST_BRIEF_ID` in parallel | seed a per-test brief, or `mode: 'serial'` |
| See `N did not run` | edit the named test | check container logs for DB/upstream errors |

## Related

- [e2e-testing.md](e2e-testing.md) — base Playwright + Page Object patterns
- [e2e-external-services.md](e2e-external-services.md) — making AI / crawl / OpenGraph deterministic (seed, env-gated mock, local fixtures)
- [hamster-e2e-realtime](../../hamster-e2e-realtime/SKILL.md) — deterministic realtime seeding
- [apps/e2e/CLAUDE.md](../../../../apps/e2e/CLAUDE.md) — suite conventions + CI/infra notes
