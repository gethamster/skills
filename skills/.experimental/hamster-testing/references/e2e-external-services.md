---
title: Deterministic External Services in E2E
tags: testing, e2e, playwright, determinism, mocking, opengraph, firecrawl, ai
---

# Deterministic External Services in E2E

An E2E test that depends on a **live external service** or a **probabilistic AI
generation** is flaky by construction — it fails when the third party is down, changes
its markup, rate-limits, or when the model phrases its answer differently. Every external
dependency in the e2e path must be made **deterministic** before the test is reliable.

The three levers, in order of preference:

| Dependency | Make it deterministic by… |
| --- | --- |
| AI / agent output | **Seed the result** — write `thread_items`/`tool_calls` via the admin client; never drive a live model for an assertion |
| Web crawl / extraction (Firecrawl) | **Env-gated provider mock** swapped into the DI chain |
| OpenGraph / link previews | **Local HTML fixtures** served by the app, scraped instead of the live site |

> The golden rule: **an e2e assertion must never depend on a value the test didn't
> control.** If the value comes from a model or a third-party page, either seed it or
> mock the source.

---

## 1. AI / agent output — seed, don't drive the model

Driving a live agent and asserting on its prose (or even *that* it produced a diff) is
non-deterministic and slow (30–120s). The value of these tests is the **plumbing**
(message → tool call → realtime → diff → editor), not the model's intelligence — and the
plumbing is fully testable with seeded data.

```typescript
// ✅ Seed the tool call the agent *would* have produced, then assert the UI reacts.
//    This is the established pattern (ai-diff, ask-questions) via ThreadSeedUtility.
const threadId = await seeder.getThreadForBrief(briefId);
await seedUtil.seedToolCall(threadId, {
  toolName: 'replace_document',
  status: 'pending',
  newContent: '# Deterministic content the test fully controls',
});
await threads.waitForDiffControls(30_000); // arrives via realtime — see hamster-e2e-realtime
await threads.acceptChanges(['Deterministic content the test fully controls']);
```

**Rules:**
- Never send a prompt to the getting-started/brief agent and assert on the reply. Seed the
  `thread_items`/`tool_calls` instead (see [`hamster-e2e-realtime`](../../hamster-e2e-realtime/SKILL.md)
  for deterministic realtime delivery).
- There is **no LLM mock** for e2e and you don't need one — seeding is simpler, faster, and
  exact. Don't add a model mock at the `aisdk` seam for tests.
- A capability that is *only* meaningful end-to-end through the model (e.g. "does PDF text
  survive into the brief") belongs in an `apps/ai` **integration/unit test** against the
  extractor, not in e2e.

---

## 2. Firecrawl (URL extraction) — env-gated provider mock

The onboarding website-crawl path calls the live Firecrawl API against the submitted URL.
Replace the provider with a deterministic stand-in, gated by an env flag, mirroring the
Composio mock (`apps/web/lib/composio/composio-client.mock.ts`).

```typescript
// apps/ai/.../url-extraction/mock-extraction.provider.ts
@Injectable()
export class MockExtractionProvider implements ExtractionProvider {
  supports() { return true; }
  async extract(url: string): Promise<URLExtractionResult> {
    // Fixed markdown derived from the URL host — metadata.url echoes the input so
    // source attribution (sourceUrl/domain) stays correct.
    return { success: true, content: { markdown: '…', metadata: { url, /* … */ }, cacheStatus: 'miss' } };
  }
}

// Gate: flag AND non-deployed. NODE_ENV is unreliable (deployed envs may run a
// non-production NODE_ENV) — key off the deploy markers Cloud Run / Vercel set.
export function isFirecrawlE2EMockEnabled(): boolean {
  const deployed = Boolean(process.env.K_SERVICE || process.env.VERCEL);
  return process.env.FIRECRAWL_E2E_MOCK === 'true' && !deployed;
}

// Swap it into the chain factory; the real provider is still constructed everywhere else.
new ChainExtractionProvider([oembed, figma, isFirecrawlE2EMockEnabled() ? mock : firecrawl]);
```

**Rules:**
- Gate every e2e mock on `<FLAG> === 'true' && !deployed`. The mock must be **inert in
  any deployed runtime** even if the flag leaks into config.
- Wire the flag through the app's `dev:test` script (e.g. `hamster-ai dev:test` sets
  `FIRECRAWL_E2E_MOCK=true`), not a committed `.env`. `pnpm dev` keeps the real provider.
- Don't "seed the document" to skip the crawl — that defeats the crawl→document path the
  test exists to cover. Mock the *provider*, exercise the real pipeline.

---

## 3. OpenGraph link previews — local HTML fixtures

URL-preview tests typed live URLs (`github.com`, `google.com`) and scraped their OG tags
server-side. Serve static fixtures from the app instead and point the test at those. Three
non-obvious traps (all of which keep this red if you miss them):

```typescript
// Fixtures live in apps/web/public/assets/e2e/url-preview/*.html
const LOCAL_PREVIEW_DOMAIN = '127.0.0.1:8080';            // NOT localhost — see below
const LOCAL_PREVIEW_BASE_URL = `http://${LOCAL_PREVIEW_DOMAIN}/assets/e2e/url-preview`;
const url = `${LOCAL_PREVIEW_BASE_URL}/github.html?e2e=${RUN_TOKEN}-${testName}`;
```

1. **Serve under an already-Next-routed prefix (`/assets`).** The dev proxy
   (`infrastructure/cloudflare/workers/core-proxy/src/dev-proxy.mjs`) routes only an
   allowlist of static prefixes (`/images`, `/assets`, `/fonts`, …) to Next; its **default
   route is the marketing website**, so a bare `/e2e/...` path 404s. Keep the dev proxy and
   the prod `worker.js` in sync (the `proxy-sync` skill enforces this) if you add a prefix.
2. **Use `127.0.0.1`, not `localhost`.** `open-graph-scraper` rejects `http://localhost/…`
   as an invalid URL (no TLD); `127.0.0.1` passes its validation and the dev proxy serves
   it on the same `:8080`. The displayed domain is derived client-side, so assert against
   the host you actually used.
3. **Cache-bust per run + per test** (`?e2e=<token>`) so a previously-extracted preview for
   the same fixture can't satisfy a later assertion on a shared thread.

> Bug fixed alongside this: `open-graph-scraper`'s `timeout` is in **seconds** (it ×1000
> internally), so a `5000` "ms" value was an effectively infinite abort window. Pass
> seconds.

---

## Operational note — reseed demo *before* booting `dev:test`

The e2e suite needs the demo seed (`pnpm supabase:web:reset:demo`). Run it **before**
starting `dev:test`: the reset restarts the Supabase containers, which makes a running web
app lose its DB connection and `concurrently --kill-others-on-fail` tears the whole stack
down. Order: reseed → `pnpm dev:test` → run tests.

## Related

- [flaky-tests.md](flaky-tests.md) — symptom→fix for the wait/selector/hydration flake classes
- [e2e-testing.md](e2e-testing.md) — base Playwright + Page Object patterns
- [hamster-e2e-realtime](../../hamster-e2e-realtime/SKILL.md) — deterministic realtime seeding (the delivery half of §1)
- [apps/e2e/CLAUDE.md](../../../../apps/e2e/CLAUDE.md) — suite conventions + CI/infra notes
