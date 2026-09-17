# Multi-Tenant Deployment

How the provisioner manages per-org orchestrator deployments, including the full deploy/delete lifecycle, idempotency patterns, failure recovery, and configuration.

**Sources**: `deployer.go`, `deployer_redis.go`, `types.go`, `config.go`

## OrgOverlay Struct

Type-safe value injection for per-org chart rendering. Each field maps to a chart value:

```go
type OrgOverlay struct {
    Namespace       string  // K8s namespace (e.g., "org-abc123")
    OrgID           string  // Organization identifier
    Image           string  // Orchestrator container image
    ImagePullPolicy string  // "Always", "IfNotPresent", "Never"
    RunnerImage     string  // Runner container image spawned per-brief
    StorageClass    string  // PVC storage class
    StorageSize     string  // PVC size (e.g., "10Gi")
    RedisHost       string  // Redis host as seen from K8s pods
    RedisPort       string  // Redis port
    RedisCIDR       string  // Resolved Redis CIDR for network policy (empty = pod-selector fallback)

    // Secrets (populated at deploy time)
    RedisUsername      string
    RedisPassword      string
    AnthropicAPIKey    string
    GithubToken        string
    SegmentWriteKey    string
    QueueEncryptionKey string
}
```

## DeployOrchestrator Flow

`deployer.go:DeployOrchestrator()` executes these phases sequentially:

```
1. ensureRedisACL(orgID)       → Phase: redis_acl
   ├── validateOrgID()         (injection prevention)
   ├── readRedisPassword()     (reuse from existing K8s Secret)
   ├── generateSecurePassword(32) (if no existing password)
   └── ACL SETUSER             (create/update Redis user)

2. Build OrgOverlay            → Phase: deployment
   ├── Config fields → overlay fields
   ├── resolveRedisCIDR()
   └── redisPassword from step 1

3. loadEmbeddedChart()         → Phase: deployment
4. buildValues(chart, overlay) → Phase: deployment
5. newHelmConfig()             → Phase: deployment
6. Extract timeout from context deadline (or use default)
7. helmInstallOrUpgrade(ctx, helmCfg, ch, namespace, values, timeout)
   └── Creates all K8s resources in org-{orgId} namespace
   └── Waits for deployment ready (Helm native --wait)
```

Each phase wraps errors in `OrgDeploymentError` with structured context:

```go
type OrgDeploymentError struct {
    OrgID     string
    Namespace string
    Phase     DeploymentPhase  // "redis_acl", "deployment", "wait_for_ready"
    Cause     error
}
```

### Timeout Extraction

The deployer extracts timeout from the context deadline if available, otherwise uses a default:

```go
timeout := constants.DeploymentReadinessTimeout
if deadline, ok := ctx.Deadline(); ok {
    timeout = time.Until(deadline)
    if timeout <= 0 {
        timeout = constants.DeploymentReadinessTimeout
    }
}
```

This timeout is passed to `helmInstallOrUpgrade()`, which sets it on both `Install.Timeout` and `Upgrade.Timeout`. Helm's `--wait` polls the deployment until ready or timeout is reached.

## DeleteOrchestrator Flow

`deployer.go:DeleteOrchestrator()`:

1. **Delete Redis ACL** with exponential backoff retry (5s initial, 30s max, 2min total)
2. **Uninstall Helm release** (best-effort, runs pre-delete hooks)

- If `newHelmConfig()` fails, logs warning and continues to namespace deletion
- If `helmUninstall()` fails, logs warning and continues to namespace deletion

1. **Delete namespace** (cascade deletes all resources including Helm release Secrets)
2. If Redis cleanup fails but namespace delete succeeds, returns error with manual cleanup command logged

```go
// Logged on Redis ACL failure:
zap.String("manual_cleanup", "ACL DELUSER "+redisUsername(orgID))
```

**Why Helm uninstall is best-effort**: Namespace deletion cascades to all resources including Helm release Secrets, so Helm uninstall is not strictly required. However, running it first ensures any pre-delete hooks execute cleanly (e.g., cleanup jobs) before resource deletion begins.

## WaitForReady

Single-shot verification that the orchestrator deployment is ready:

```go
func (d *Deployer) WaitForReady(ctx context.Context, orgID string, timeout time.Duration) error {
    deployment, err := d.clientset.AppsV1().Deployments(namespace).Get(ctx, "orchestrator", metav1.GetOptions{})
    if err != nil {
        if errors.IsNotFound(err) {
            return NewDeploymentError(orgID, namespace, PhaseWaitForReady,
                fmt.Errorf("deployment not found"))
        }
        return NewDeploymentError(orgID, namespace, PhaseWaitForReady, err)
    }

    if deployment.Status.ReadyReplicas == 0 {
        return NewDeploymentError(orgID, namespace, PhaseWaitForReady,
            fmt.Errorf("deployment has 0 ready replicas (available: %d, unavailable: %d)",
                deployment.Status.AvailableReplicas, deployment.Status.UnavailableReplicas))
    }

    return nil
}
```

**NOTE**: `DeployOrchestrator()` now uses Helm's native `--wait`, so this method is primarily for explicit verification or legacy callers. Most callers should rely on `DeployOrchestrator()` completing successfully, which guarantees the deployment is ready.

## OrchestratorDeploymentExists

Idempotency check — queries for the `orchestrator` Deployment in the org namespace:

```go
func (d *Deployer) OrchestratorDeploymentExists(ctx context.Context, orgID string) (bool, error) {
    _, err := d.clientset.AppsV1().Deployments(namespace).Get(ctx, "orchestrator", metav1.GetOptions{})
    // NotFound → false, nil; error → false, err; found → true, nil
}
```

## Idempotency Patterns

| Scenario | Mechanism |
| --- | --- |
| Re-deploy same org | `helmInstallOrUpgrade()` checks release history; upgrades if exists |
| Redis password on re-deploy | `readRedisPassword()` reads from existing K8s Secret before generating new |
| Redis ACL re-apply | `ACL SETUSER` with `resetpass` + `resetkeys` is idempotent |
| Namespace already exists | `helm install --create-namespace` is a no-op if namespace exists |

## Config Struct

Loaded via Viper with `HORDE_` env prefix:

```go
type Config struct {
    Port                int           `mapstructure:"port"`                           // HORDE_PORT (default: 8082)
    RedisHost           string        `mapstructure:"redis_host"`                     // HORDE_REDIS_HOST
    RedisPort           int           `mapstructure:"redis_port"`                     // HORDE_REDIS_PORT
    RedisPassword       string        `mapstructure:"redis_password"`                 // HORDE_REDIS_PASSWORD
    RedisDB             int           `mapstructure:"redis_db"`                       // HORDE_REDIS_DB
    RedisHostK8s        string        `mapstructure:"redis_host_k8s"`                 // HORDE_REDIS_HOST_K8S
    InCluster           bool          `mapstructure:"in_cluster"`                     // HORDE_IN_CLUSTER
    KubeConfig          string        `mapstructure:"kubeconfig"`                     // HORDE_KUBECONFIG
    NamespacePrefix     string        `mapstructure:"namespace_prefix"`               // HORDE_NAMESPACE_PREFIX (default: "org-")
    OrchestratorImage   string        `mapstructure:"orchestrator_image"`             // HORDE_ORCHESTRATOR_IMAGE
    RunnerImage         string        `mapstructure:"kubernetes_runner_image"`         // HORDE_KUBERNETES_RUNNER_IMAGE
    StorageClass        string        `mapstructure:"storage_class"`                  // HORDE_STORAGE_CLASS
    StorageSize         string        `mapstructure:"storage_size"`                   // HORDE_STORAGE_SIZE
    AnthropicAPIKey     string        `mapstructure:"ai_default_anthropic_api_key"`   // HORDE_AI_DEFAULT_ANTHROPIC_API_KEY
    GithubToken         string        `mapstructure:"ai_default_github_token"`        // HORDE_AI_DEFAULT_GITHUB_TOKEN
    SegmentWriteKey     string        `mapstructure:"segment_write_key"`              // HORDE_SEGMENT_WRITE_KEY
    QueueEncryptionKey  string        `mapstructure:"security_queue_encryption_key"`  // HORDE_SECURITY_QUEUE_ENCRYPTION_KEY
    WatcherEnabled      bool          `mapstructure:"watcher_enabled"`                // HORDE_WATCHER_ENABLED
    WatcherScanInterval time.Duration `mapstructure:"watcher_scan_interval"`          // HORDE_WATCHER_SCAN_INTERVAL
    LogLevel            string        `mapstructure:"log_level"`                      // HORDE_LOG_LEVEL
    LogFormat           string        `mapstructure:"log_format"`                     // HORDE_LOG_FORMAT
}
```

### LoadConfig Pattern

```go
func LoadConfig() (*Config, error) {
    v := viper.New()
    v.SetEnvPrefix("HORDE")
    v.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
    v.AutomaticEnv()
    // Set defaults from DefaultConfig()
    // Unmarshal into Config
    // Validate
    return cfg, nil
}
```

### Adding a New Config Field

1. Add field to `Config` struct in `types.go` with `mapstructure` tag
2. Set default in `DefaultConfig()` if applicable
3. Add `v.SetDefault()` in `LoadConfig()` in `config.go`
4. Add validation in `Config.Validate()` if needed
5. Wire into `OrgOverlay` in `DeployOrchestrator()` if per-org
6. Add to chart `values.yaml` and templates if rendered

### Namespace Naming

```go
func (c *Config) NamespaceForOrg(orgID string) string {
    return c.NamespacePrefix + orgID  // e.g., "org-" + "abc123" = "org-abc123"
}
```

The prefix is validated at startup to be a valid K8s namespace prefix (lowercase alphanumeric + hyphens, starts with letter).

## HealthCheck

Concurrent K8s + Redis connectivity check:

```go
func (d *Deployer) HealthCheck(ctx context.Context) error {
    // K8s: d.clientset.Discovery().ServerVersion() (goroutine with ctx timeout)
    // Redis: d.redis.Ping(ctx)
}
```

## Config String Redaction

`Config.String()` redacts all secret fields using `redactSecret()` to prevent accidental logging of credentials.