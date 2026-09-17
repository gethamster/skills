# Helm SDK Rendering

How the horde provisioner uses the Go Helm SDK to programmatically render and deploy charts, without shelling out to the `helm` CLI.

**Source**: `apps/horde/internal/provisioner/helm.go`

## Chart Embedding

The orchestrator chart is compiled into the provisioner binary using Go's `//go:embed` directive:

```go
//go:embed manifests/chart manifests/chart/templates/_helpers.tpl
var chartFS embed.FS
```

The explicit `_helpers.tpl` path is required because `//go:embed` skips files starting with `_` by default.

**Implication**: Any new file added to `manifests/chart/templates/` is automatically included in the embedded filesystem at compile time. No registration step is needed, but you must rebuild the binary to pick up template changes.

## Chart Loading: `loadEmbeddedChart()`

Builds a `*chart.Chart` from the embedded filesystem:

1. Reads `Chart.yaml` and parses metadata
2. Reads `values.yaml` and parses into `map[string]interface{}`
3. Iterates `templates/` directory, loading each file as a `*chart.File`
4. Returns the assembled chart object

```go
func loadEmbeddedChart() (*chart.Chart, error) {
    // Read Chart.yaml → parse Metadata
    // Read values.yaml → parse Values
    // Read templates/* → append to chart.Templates
    return ch, nil
}
```

**Key detail**: Template files must be added with the path prefix `templates/` (e.g., `templates/deployment.yaml`) for Helm's engine to recognize them.

## Value Merging: `buildValues()`

Merges an `OrgOverlay` struct onto chart defaults using `chartutil.CoalesceTables`:

```go
func buildValues(ch *chart.Chart, overlay OrgOverlay) (map[string]interface{}, error) {
    // Validate required fields (Namespace, OrgID)
    // Convert OrgOverlay fields to overlayValues map
    // Merge: chartutil.CoalesceTables(overlayValues, defaultValues)
    return mergedValues, nil
}
```

**Merge semantics**: `CoalesceTables(dst, src)` copies keys from `src` into `dst` only if they don't already exist in `dst`. So overlay values (first arg) take precedence over chart defaults (second arg).

Nested values use sub-maps:

```go
// Redis settings grouped under "redis" key
redis := map[string]interface{}{}
redis["host"] = overlay.RedisHost
overlayValues["redis"] = redis

// Secrets grouped under "secrets" key
secrets := map[string]interface{}{}
secrets["redisUsername"] = overlay.RedisUsername
overlayValues["secrets"] = secrets
```

Only non-empty overlay fields are set, so chart defaults apply for anything not overridden.

## Helm Configuration: `newHelmConfig()`

Creates an `action.Configuration` with Kubernetes Secrets as the release storage backend:

```go
func newHelmConfig(clientset *kubernetes.Clientset, kubeconfig string, inCluster bool, namespace string, logger *zap.Logger) (*action.Configuration, error) {
    store := storage.Init(driver.NewSecrets(
        clientset.CoreV1().Secrets(namespace),
    ))
    // Build REST flags for Helm's kube client
    // cfg.Init(flags, namespace, "secrets", logFunc)
    // Override cfg.Releases = store (avoids double client creation)
    return cfg, nil
}
```

**Why Secrets backend**: Helm release metadata is stored as K8s Secrets in the target namespace. When the namespace is deleted, release metadata is automatically cleaned up (cascade delete).

## Install or Upgrade: `helmInstallOrUpgrade()`

Idempotent deploy using Helm's history check with native wait functionality:

```go
func helmInstallOrUpgrade(ctx context.Context, cfg *action.Configuration, ch *chart.Chart, namespace string, values map[string]interface{}, timeout time.Duration) error {
    histClient := action.NewHistory(cfg)
    histClient.Max = 1
    _, err := histClient.Run(helmReleaseName)

    if errors.Is(err, driver.ErrReleaseNotFound) {
        // First deploy: action.NewInstall with CreateNamespace=true
        install := action.NewInstall(cfg)
        install.ReleaseName = helmReleaseName
        install.Namespace = namespace
        install.CreateNamespace = true
        install.Wait = true
        install.Timeout = timeout
        _, err = install.RunWithContext(ctx, ch, values)
        return err
    }
    if err != nil {
        return fmt.Errorf("failed to check release history: %w", err)
    }

    // Subsequent deploys: action.NewUpgrade
    upgrade := action.NewUpgrade(cfg)
    upgrade.Namespace = namespace
    upgrade.Wait = true
    upgrade.Timeout = timeout
    _, err = upgrade.RunWithContext(ctx, helmReleaseName, ch, values)
    return err
}
```

The release name is a constant (`"orchestrator"`) shared across all orgs — each runs in its own namespace, so there's no collision.

**Wait behavior**: Setting `Wait = true` makes Helm poll the deployment until `ReadyReplicas > 0` or timeout is reached. This blocks the install/upgrade operation until the deployment is ready, eliminating the need for external polling in most cases.

## Standalone Rendering: `RenderManifests()`

For testing and preview only. Uses `engine.Render()` to produce multi-document YAML without touching a cluster:

```go
func RenderManifests(overlay OrgOverlay) ([]byte, error) {
    ch, _ := loadEmbeddedChart()
    values, _ := buildValues(ch, overlay)
    renderValues, _ := chartutil.ToRenderValues(ch, values, options, nil)
    rendered, _ := engine.Render(ch, renderValues)
    // Combine into multi-document YAML, skip _helpers.tpl and empty outputs
    return result.Bytes(), nil
}
```

Used in `helm_test.go` to validate rendered templates against expected structure.

## Uninstall: `helmUninstall()`

Removes the Helm release and runs pre-delete hooks:

```go
func helmUninstall(ctx context.Context, cfg *action.Configuration) error {
    uninstall := action.NewUninstall(cfg)
    _, err := uninstall.Run(helmReleaseName)

    if errors.Is(err, driver.ErrReleaseNotFound) {
        return nil  // Idempotent: no error if release doesn't exist
    }

    return err
}
```

**Pre-delete hooks**: If the chart includes resources with `"helm.sh/hook": pre-delete` annotations, Helm runs them before deleting the release. This is used to run cleanup jobs before namespace deletion.

**When used**: Called in `DeleteOrchestrator()` as a best-effort step before namespace deletion. If it fails, the deletion continues — namespace deletion cascades to all resources including Helm release Secrets.

## Anti-Patterns

| Don't | Do Instead | Why |
| --- | --- | --- |
| Shell out to `helm` CLI (`exec.Command("helm", ...)`) | Use `action.Install` / `action.Upgrade` | Binary has no helm CLI; embedded chart is in-memory |
| Use `kubectl apply` for new resources | Add a Helm template to the embedded chart | Helm manages resource lifecycle, ordering, and rollback |
| Modify `chartFS` at runtime | Rebuild the binary | `embed.FS` is immutable after compilation |
| Use `CoalesceTables(defaults, overlay)` | Use `CoalesceTables(overlay, defaults)` | First arg values take precedence |
| Create separate Helm releases per org | Use one release name (`"orchestrator"`) per namespace | Namespace isolation handles multi-tenancy |
| Poll for readiness externally | Use Helm's `Wait = true` with timeout | Helm handles deployment readiness natively |