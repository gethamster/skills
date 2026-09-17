---
name: simplicity-first
description: "Anti over-engineering design framework. Use PROACTIVELY when designing new features, adding services, creating abstractions, planning architecture, or reviewing code. Also use when the user mentions 'over-engineering,' 'too complex,' 'simplify,' 'do I need this layer,' or when you notice unnecessary HTTP intermediaries, premature module splits, or abstractions without multiple callers. Complements karpathy-guidelines (per-line simplicity) with per-system architectural simplicity."
version: "1.0.0"
---

# Simplicity First

**Core inversion:** Don't design infrastructure then use it. Write the code you wish existed, then build only what's missing.

## The Framework

### 1. Write the call site first

Before designing anything, write the one line you *want* to call:

```typescript
await queueDelivery({ jobId, briefId, accountId });
```

### 2. Reuse before you build

Search the codebase first. If the function, pattern, or utility already exists — use it directly.

```bash
rg "queueEmail|queueOrchestration" --type ts -l
```

### 3. Build only what's missing

Nothing exists? Build it. The team has a similar pattern? Follow it. But don't rebuild what's already there.

### 4. Stop if you're only supporting yourself

If you're creating files that only exist to support other files you're creating, stop.

## 5 Checkpoints

Apply before adding any file, module, or layer.

### Count the hops

Draw the data flow. For each arrow: "Does this intermediary transform, validate, or decide anything the caller can't?" If just forwarding, remove it.

```
BAD:  server action → HTTP → controller → service → queue
GOOD: server action → queue
```

### The delete test

"If I deleted this file, would I need to replace it, or would things just work?" If a module only exists to support another module born from an architectural choice — neither earns its keep.

### Copy the existing pattern

Before designing something new, grep how the team already solved the same class of problem.

### Explain it to a teammate

"The server action calls service X over HTTP, which puts it on a queue." If they'd ask "why not just put it on the queue?" — don't add the layer.

### Earn your abstractions

Every layer must answer: "What does this do that the layer above can't?"

| Layer | Earns its keep | Doesn't earn it |
| --- | --- | --- |
| HTTP controller | External clients need REST API | Only caller is own server action |
| Service class | Complex logic, multiple callers | Wraps a single DB call |
| DTO/validation | External untrusted input | Internal call already typed |
| Auth module | Untrusted callers | Caller already authenticated user |
| Feature flag | Gradual rollout needed | Data-driven condition works |
| Separate module | Real deployment/trust boundary | Just organizational preference |

## Fix at the Source, Not the Consumer

When something is wrong, fix where the data is produced — not where it's consumed.

```
BAD:  data is stale → add listener/workaround at every consumer
GOOD: data is stale → invalidate cache where data is saved

BAD:  need data in component → build HTTP endpoint to fetch it
GOOD: need data in component → query the DB directly (it's already available)
```

The workaround might work, but every *other* consumer still has the problem. The source fix is both simpler and more correct.

**Corollary: finish the refactor.** When you change something, clean up the orphans — dead comments, unused imports, stale UI states. Don't leave behind artifacts of the old approach.

## Red Flags to Catch

Flag when about to:

- Add HTTP endpoints for internal-only communication
- Create controller/service/DTO layers where a function call works
- Add feature flags where `hasData` conditions would work
- Split modules without a real architectural seam
- Build auth/validation between trusted same-monorepo services
- Add Swagger/OpenAPI for endpoints with exactly one internal caller
- Add a workaround at the consumer instead of fixing the producer
- Inline a utility that already exists in `@kit/shared` (or should be extracted there)

## When Complexity IS Warranted

- External APIs with third-party consumers
- Separate deployment boundaries (different trust zones)
- Regulatory/compliance requirements
- Performance isolation (separate service for resource management)
- Multiple callers with genuinely different needs

The question: "Does this complexity serve a real constraint, or a hypothetical future?"
