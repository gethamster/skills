# Environment and secrets setup

## The pattern: colocated env files

Backfill scripts each get their own pair of files in `apps/web/supabase/scripts/`:

| File | Status | Purpose |
| --- | --- | --- |
| `.env.1p.<script-name>` | Committed | 1Password injection template. References secrets via `op://${VAULT_NAME}/...` syntax. Never contains literal secrets. |
| `.env.<script-name>` | **Gitignored** | The hydrated env file the script actually reads. Generated locally from the 1Password template. Never commit. |

This is intentionally separate from `apps/web/.env.1p` (the app's main template) for three reasons:

1. **Least privilege** — backfills need a service-role key. The app uses anon-role + RLS. Mixing them in one file means every developer running the app pulls a service-role key into their environment.
2. **Vault flexibility** — backfills are run against different vaults (Tux for staging, Local for dev, Prod for production). The colocated file makes this an explicit decision per-run.
3. **Blast radius** — accidentally `git add`ing a `.env.local` is the most common secrets leak vector. The nested file is covered by the `**/.env*` rule in `.gitignore` independently of the root `.env*` rule.

## The 1Password template

Scripts use a minimal template — just the URL and the service role key:

```sh
# Dedicated 1Password template for the <script-name> script.

SUPABASE_URL=op://${VAULT_NAME}/supabase/url
SUPABASE_SERVICE_ROLE_KEY=op://${VAULT_NAME}/supabase/service-role-key
```

`${VAULT_NAME}` is interpolated by the `op inject` command. The vault is chosen at injection time, not bake time, so the same template works for every environment.

If your script needs additional secrets (e.g., a Linear API key for cross-system reconciliation), add them to the template using the same `op://` syntax — never commit a literal value.

## Generating the local env file

From the `apps/web` directory:

```bash
VAULT_NAME=Tux op inject \
  --in-file=supabase/scripts/.env.1p.<script-name> \
  --out-file=supabase/scripts/.env.<script-name> \
  --force
```

Vault choices:

- `Local` — local Supabase running on your machine
- `Tux` — staging
- `Prod` — production (requires extra approval)

The `--force` flag overwrites any existing file. If the script depends on multiple vaults, run `op inject` once per vault and use a different output filename to avoid clobbering.

## How the script loads the env file

The template's `loadBackfillEnv` reads the colocated file path explicitly, not via dotenv's auto-discovery:

```ts
const scriptDir = dirname(fileURLToPath(import.meta.url));
const envFilePath = resolve(scriptDir, `.env.${SCRIPT_NAME}`);

function loadBackfillEnv(path: string) {
  if (!existsSync(path)) {
    throw new Error(`Missing required env file: ${path}. Generate it with op inject ...`);
  }
  const result = dotenvConfig({ path, override: true });
  if (result.error) throw result.error;
}
```

Two things to notice:

1. **`override: true`** — the script-local env wins over any ambient env vars. This prevents a stray `SUPABASE_URL` in your shell from silently changing what database the script targets.
2. **Explicit existence check** — fails fast with a helpful error pointing at the `op inject` command, instead of dotenv silently doing nothing.

## Validating the env

After loading, the script validates the required vars exist:

```ts
const supabaseUrl = process.env.SUPABASE_URL;
const hasSupabaseKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

if (!supabaseUrl || !hasSupabaseKey) {
  throw new Error(
    `Missing required env vars. SUPABASE_URL: ${supabaseUrl ? '✓' : '✗'}, ` +
    `SUPABASE_SERVICE_ROLE_KEY: ${hasSupabaseKey ? '✓' : '✗'}.`,
  );
}

const supabaseKey = getRequiredEnv('SUPABASE_SERVICE_ROLE_KEY');
```

`getRequiredEnv` from `@kit/shared/utils` is the canonical fail-fast helper for required vars across the monorepo. Always use it instead of `process.env.X || 'fallback'` patterns — the project's security guidelines explicitly forbid secret fallbacks (see root `CLAUDE.md`).

## Why the service role key

Backfills mutate data across account boundaries (e.g., dedup runs that touch every account). RLS enforces per-account isolation — there's no user identity to attach to a backfill, and creating a synthetic super-user would be a much bigger security footgun than running with the service role.

The trade-off is that the service role key bypasses all RLS. Two consequences:

1. **No safety net** — a `.delete()` without a `.eq('account_id', ...)` clause will delete from every account. The audit helpers help by recording what changed, but they don't prevent the mistake. Be very explicit about scoping in every mutation.
2. **Production deploys are sensitive** — the script is essentially "trust me" code. Run dry-run, have a second engineer review the dry-run output, then execute. Never run against production without this review.

## Common env mistakes

- **Committing the hydrated `.env.<script-name>` file.** Repo `.gitignore` covers `**/.env*`, but check `git status` before pushing. If the file ever leaks, rotate the service role key immediately.
- **Forgetting `--force` and ending up with stale credentials.** `op inject` errors out by default if the output file exists. The error is unfriendly; the fix is `--force`.
- **Using the app's `apps/web/.env.local` instead of the colocated file.** The app file uses the anon key. The script will load it successfully, then fail on the first mutation with a permission error. Always run `op inject` to populate the script-specific env.
- **Hardcoding `VAULT_NAME` inside the template.** Don't. Pass it as an env var to `op inject`. The same template should work for every environment.
- **Targeting the wrong database.** `Local` vs `Tux` vs `Prod` is a one-character difference and easy to mistype. Always verify by reading the `Supabase URL: ...` line the script prints at startup BEFORE typing `execute`.

## When to share an env file across scripts

Don't. Even if two backfills target the same database, give them separate `.env.1p.*` and `.env.*` files. The colocated naming makes "what is this script connecting to" obvious from the file listing, and prevents one script's vault choice from leaking into another.

If you find yourself wanting to share env, that's usually a signal that the helpers should be extracted into a shared module (`apps/web/supabase/scripts/_lib/`) — but the env files themselves stay per-script.