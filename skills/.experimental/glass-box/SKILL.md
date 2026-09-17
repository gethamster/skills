---
name: glass-box
description: "Python evaluation framework for Hamster Studio. Use when working in packages/glass-box/ — running replay experiments, monitoring Sentry data, training classifiers, or writing tests for any glass-box module."
---

# Glass-Box

## Overview

`packages/glass-box/` is a standalone Python package (Python 3.12+, `uv`) for evaluating and observing Hamster's AI pipeline. It is not part of the TypeScript monorepo build.

## When to Apply

- Running or debugging replay experiments against a real environment
- Querying or syncing Sentry monitoring data locally
- Training, evaluating, or deploying the GLSB Router classifier
- Writing tests for any glass-box module
- Working on prompting dataset generation or quality assessment
- Touching the GLSB Router CI/CD pipeline

## Module Tiers

| Tier | Modules | Frequency |
| --- | --- | --- |
| **1 — Daily** | `replay`, `replay/experiment`, `monitoring` | Every dev cycle |
| **2 — Training** | `classifier`, `prompting` | Model training cycles |
| **3 — Background** | `routing`, `core` | Rarely touched directly |

## Quick Reference

| Task | Command |
| --- | --- |
| Run an experiment | `uv run python -m replay experiment run --metadata <path> --env dev` |
| Retrieve results | `uv run python -m replay experiment retrieve --metadata <path>` |
| Chat replay | `uv run python -m replay chat run --context brief --content "<msg>" --env dev` |
| Sync Sentry data | `uv run python -m monitoring --project hamster --env production sync --days 7` |
| Query monitoring | `uv run python -m monitoring query "SELECT ..."` |
| Serve classifier | `uv run python -m classifier serve --port 8008 --version <ver>` |
| Assess prompts | `uv run python -m prompting assess --limit 3` |
| Run unit tests | `uv run pytest tests/ -m unit` |
| Setup env files | `pnpm get-env-qa` |

## Key Patterns

### Environment loading

Always call before any service access:

```python
from core.config import ensure_env_loaded
ensure_env_loaded(env)   # env = "local" | "dev" | "tux" | "prod"
```

Pass `--env <name>` to any CLI command to select the environment.

### CLI command structure

All CLI commands follow this pattern:

```python
def cmd_<name>(args: argparse.Namespace) -> None:
    value = getattr(args, "field", None)   # use getattr for optional args
    if error:
        print(msg, file=sys.stderr)
        sys.exit(1)
    print(result)
```

### Test structure

```python
pytestmark = pytest.mark.unit  # or monitoring, integration, etc.

def test_something(monitoring_db):          # use fixtures from conftest.py
    result = monitoring_db.execute("SELECT 1")
    assert result is not None
```

Run with: `uv run pytest tests/ -m unit` (no external services needed for unit tests).

## Critical Gotchas

- **Mock patch targets**: Patch WHERE the name is used, not where it's defined. `run.py` does `from replay.trigger import run_one_prompt` → patch target is `"replay.experiment.run.run_one_prompt"`, not `"replay.trigger.run_one_prompt"`.
- **`monitoring_db` fixture uses `:memory:`**: Always pass `db_path=":memory:"` in tests — `None` maps to the real filesystem path at `monitoring/data/monitoring.db`.
- **Headless replay needs correct `account_id`**: Use the SQL in `docs/headless-replay-setup.md` to find the right user + account pair for a given environment.
- **Delay between prompts**: Default 5s (`--delay 5`) in `replay experiment run`. Pass `--delay 0` to disable during testing.

## Infrastructure

The classifier is deployed as a Docker image (`glsb-router-api`) on Cloud Run:

- **Build**: GitHub Actions `41-glassbox-build-release.yml` (manual `workflow_dispatch`)
- **Deploy**: `42-glassbox-deploy.yml` (called by build, or manually to promote to tux/prod)
- **Manifest**: `pnpm --filter hamster-ai generate:glassbox-manifest` — run from monorepo root before building

## References

- Full documentation: `packages/glass-box/CLAUDE.md`
- Headless replay setup + account SQL: `packages/glass-box/docs/headless-replay-setup.md`
- Legacy test patterns: `packages/glass-box/testsOld/conftest.py`
