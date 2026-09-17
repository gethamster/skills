---
name: hamster-e2b-live-validation
description: "Prove a claim about sandbox-side behavior by running it in a real E2B sandbox instead of reading comments. Use when a delivery or environment boot fails inside the sandbox, when a probe/health-check times out or hangs, when you need to know what is actually installed in a snapshot and at what version, when a comment asserts how a third-party CLI behaves, or when someone proposes raising a timeout. Covers the throw-shapes E2B uses for exit-vs-timeout, cold snapshot-resume timing, deliberate break-state testing, hang bisection via stdin, and offline npm lineage checks."
---

# Live E2B Validation

## When to Apply

Reach for this the moment a question is about **what actually happens inside the sandbox**:

- A boot/delivery step fails with `deadline_exceeded`, `CommandExitError`, or a hang.
- A comment claims a third-party CLI behaves some way (`--version` exits, `--help` hangs, the binary lives at path X).
- Someone proposes raising a timeout. Measure first — the timeout is usually not the bug.
- You need the installed version / package identity / file layout of a baked toolchain.
- You changed a sandbox-side command string and want the shipped string proven, not the one you retyped.

The governing rule: **sandbox-side installs are unpinned** (`sandbox-agent install-agent <agent>` takes npm-latest at bake time), and environment snapshots are baked from user sandboxes months earlier. So comments about third-party behavior rot silently and invisibly. Anything load-bearing gets measured.

Related: `hamster-e2b-studio` for the template/snapshot architecture itself, [`sandbox-agent`](../sandbox-agent/SKILL.md) for the agent runtime.

## Credentials and Entry Point

`apps/horde-v2/.env` already carries a working key and the template deliveries launch from:

```
E2B_API_KEY=...
E2B_TEMPLATE_ID=hamster-pre-production/hamster-base-snapshot
```

Deployed envs share one E2B team, so this snapshot name is what most deliveries actually boot. Run probes with an **absolute** env-file path (the shell's cwd moves between calls):

```bash
npx tsx --env-file=/abs/path/to/apps/horde-v2/.env /abs/path/to/scratchpad/probe.ts
```

Write probe scripts into the **scratchpad, never the repo**. They are throwaway evidence, not deliverables.

## The Harness

Copy this. The `run()` wrapper is not boilerplate — it is required, for the reason in the next section.

```ts
import { Sandbox } from 'e2b';

async function main() {
  const sbx = await Sandbox.create(process.env.E2B_TEMPLATE_ID!, {
    apiKey: process.env.E2B_API_KEY!,
    timeoutMs: 300_000,
  });
  console.log('Sandbox:', sbx.sandboxId);

  const run = async (label: string, cmd: string, timeoutMs = 45_000) => {
    const t = Date.now();
    try {
      const r = await sbx.commands.run(cmd, { timeoutMs });
      console.log(
        `### ${label}: exit=${r.exitCode} ms=${Date.now() - t} ` +
          `stdout=${JSON.stringify(r.stdout.slice(0, 300))} ` +
          `stderr=${JSON.stringify(r.stderr.slice(0, 300))}`,
      );
    } catch (e: any) {
      // Both a nonzero exit AND a timeout arrive here, as different shapes.
      console.log(
        `### ${label}: THREW ms=${Date.now() - t} ${e?.name} ` +
          `exitCode=${e?.exitCode} ` +
          `stdout=${JSON.stringify(String(e?.stdout ?? ''))} ` +
          `stderr=${JSON.stringify(String(e?.stderr ?? '').slice(0, 300))}`,
      );
    }
  };

  try {
    await run('presence', 'test -x /path/to/thing');
    // ...
  } finally {
    await sbx.kill(); // bills by wall clock — always kill
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
```

Always time every command. `ms=` is the whole point: it separates "slow" from "hung" and gives you the headroom number to argue about a timeout with.

## Gotcha: `commands.run` throws on both failure modes, differently

You cannot read `result.exitCode` — there is often no result. Two distinct throws:

| Failure | `e.name` | `e.exitCode` | Where the diagnostic lives |
|---|---|---|---|
| Nonzero exit | `CommandExitError` | the exit code | `e.stdout` / `e.stderr` |
| Timeout (`timeoutMs` expired) | `TimeoutError` | **`undefined`** | `e.message`, containing `[deadline_exceeded]` |

Consequences that bite:

- A probe that lands in an "exit unknown" branch was a **timeout**, not an exit — the process never returned.
- A `TimeoutError` carries no stdout/stderr at all. If you need output from a hung command, you cannot get it this way; restructure the probe.
- Production code wrapping these needs `toCommandErrorContext()` (`e2b/command-error.ts`); `toErrorContext()` only reads `.message`/`.code` and silently drops the command output.

## Import the real constants — do not retype the command

A probe that validates a string you typed by hand proves nothing about what ships. Import from the source module:

```ts
import {
  CODEX_ACP_PRESENCE_PROBE,
  CODEX_ACP_VERSION_PROBE,
} from '/abs/path/to/apps/horde-v2/src/delivery/sandbox/e2b/agent-versions';
```

`tsx` resolves the workspace deps fine from an absolute path. If the module pulls Nest/webpack asset imports it may not load — that constraint is why `agent-versions.ts` documents that it must stay free of `*.sh` asset imports.

## Cold Snapshot-Resume Timing

The claim "the timeout is too short on a cold boot" is testable, and usually false. Memory snapshots resume warm.

```ts
const sbx = await Sandbox.create(template, { apiKey, timeoutMs: 300_000 });
// ... warm baseline ...
await sbx.betaPause();

// Resume, and make the command under test the FIRST command after resume.
const resumed = await Sandbox.connect(sbx.sandboxId, {
  apiKey,
  timeoutMs: 300_000,
  autoResume: true,
} as any);
await run('COLD first exec', commandUnderTest);
await resumed.betaPause();
```

Rules:

- **One candidate per resume.** The first command pays the page-in cost; everything after it is warm and tells you nothing.
- `Sandbox.resume` **does not exist** in e2b 2.38.3. The statics are `list / create / connect / fork`. Resuming is `connect(id, { autoResume: true })`.
- Reference numbers measured on `hamster-base-snapshot`: cold first exec of a Node one-liner ≈ **515 ms**, of a bundled Node CLI ≈ **795 ms**. If your probe's budget is 45 s, cold-start is not your problem.

## Break-State Testing

The happy path is the easy half. A health check earns trust by proving its failure paths, so corrupt the install on purpose and re-probe:

```ts
// Dangling symlink: bin survives, target package removed.
await run('break', `rm -rf $(dirname $(dirname $(readlink -f ${BIN})))`);
await run('presence after break', PRESENCE_PROBE);
await run('version after break', VERSION_PROBE);

// Fully absent.
await run('break', `rm -f ${BIN}`);
await run('presence when absent', PRESENCE_PROBE);
```

Record the exit code and stderr of each state and put the table in the PR. That is what distinguishes "fails loud" from "we hope it fails loud".

## Bisecting a Hang

When a command hangs, find out **why** before changing anything:

1. **Bound it tightly** (`timeoutMs: 15_000`) so iteration is fast.
2. **Re-run with stdin closed**: `cmd < /dev/null`. This is the sharp discriminator —
   a process that **exits instantly with `/dev/null` but hangs without it** is a stdio
   server waiting on input, not a slow process. That is a fall-through into a JSON-RPC /
   ACP bridge, and no timeout will ever fix it.
3. **Compare sibling flags.** `--version` vs `--help` vs no args. If one exits and another
   hangs, the tool has an unbounded default branch and *every* unrecognised flag reaches it.
4. Conclude: a probe whose safety depends on a third party's argv table is a hang waiting
   for a release. Prefer reading static metadata (a `package.json` on disk) over launching
   the binary at all.

## Offline Checks (no sandbox needed)

Cheaper than a sandbox, and the right tool for "did upstream change behavior":

```bash
npm view <pkg> version bin                 # entry point + current version
npm view <pkg> versions --json             # full release list
npm view <pkg> time --json                 # release dates — map a snapshot to its era
npm pack <pkg>@<version>                   # then untar and read dist/ or bin/
```

For a bundled JS CLI, grep the shipped bundle for its arg handling rather than trusting the README:

```bash
grep -o 'process.argv[^;]\{0,200\}' package/dist/index.js
```

For platform-specific native binaries, pack the variant matching your machine (e.g. `-darwin-arm64`) and run it locally. **macOS has no `timeout(1)`** — bound it with:

```bash
perl -e 'alarm 15; exec @ARGV' ./binary --version < /dev/null; echo "exit=$?"
```

Run the same flags across several versions in a loop to find exactly where behavior changed. This is how you catch a package **lineage switch** (upstream moving a tool to a different scope with different arg parsing), which is invisible from the install command alone.

## Turn the Finding Into a Test

Live validation proves it once. A unit test keeps it proven.

Parameterise the shipped command by its variable input so a spec can execute the **real** string:

```ts
export function codexAcpVersionProbe(binPath: string): string { /* ... */ }
export const CODEX_ACP_VERSION_PROBE = codexAcpVersionProbe(CODEX_ACP_BIN);
```

```ts
// Build a fixture install in a tmpdir, then run it through a shell, as E2B does —
// this covers the quoting too.
const result = spawnSync(codexAcpVersionProbe(fixtureBin), {
  shell: true,
  encoding: 'utf8',
});
```

Then confirm the new tests **fail against the old implementation** before accepting them. String-matching a command (`expect(cmd).not.toContain('--version')`) checks syntax; executing it checks behavior. Keep a structural assertion only where the *shape* is the invariant (e.g. "must never exec the binary").

## Hygiene

- `sbx.kill()` in a `finally`. Sandboxes bill by wall clock.
- Do not rely on the wall-clock timeout to clean up. The production helper `createE2BSandbox` deliberately sets `lifecycle.onTimeout: 'pause'` so a timed-out delivery stays recoverable — an abandoned sandbox there **pauses rather than dies** and lingers.
- A sandbox you paused yourself (for cold-resume timing) is still alive, and a script that throws between `betaPause()` and its cleanup leaves it that way. Kill it explicitly:
  `await (await Sandbox.connect(id, { apiKey, autoResume: true } as any)).kill()`.
- Sweep for strays afterwards. `Sandbox.list()` returns a **paginator, not an array** — it has no `.data` and is not iterable:

  ```ts
  const p: any = await Sandbox.list({ apiKey } as any);
  const all: any[] = [];
  while (p.hasNext) all.push(...(await p.nextItems()));
  ```

  The account holds hundreds of legitimately paused sandboxes (user environments), so filter to the ids **your** run printed rather than judging by age, and never kill one you did not create.
- Probe scripts live in the scratchpad. Never commit them.
- Put the measured numbers in the commit/PR body. "Refuted by measurement: cold resume was 795 ms against a 45 s bound" is reviewable; "should be fine" is not.
