## Invocation Variants

| Invocation | Behavior |
| --- | --- |
| bare | Full workflow: recon → audit all categories → vet → confirm → plans |
| `quick` / `deep` | Adjust audit effort (see table); composes with a focus |
| a category focus (`performance`, `accessibility`, `easing`…) | Recon + audit that category only |
| `plan <description>` | Skip the audit; recon just enough to specify, then write a single plan for the described improvement |
| `execute <plan>` | Dispatch an executor subagent to implement the plan in an isolated worktree, then review its diff with the `review-animations` bar and render a verdict |
| `reconcile` | Re-check `plans/` against the current code: mark done plans DONE, refresh stale file:line references, retire fixed findings |