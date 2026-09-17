# Security & Isolation

Security model for the horde provisioner: RBAC, network policies, Redis ACL, secret propagation, container hardening, and resource isolation.

**Sources**: `deployer_redis.go`, `rbac.yaml` (both charts), `network-policy-*.yaml`, `deployment.yaml` (both charts), `secret.yaml` (both charts)

## Two-Level RBAC

### Provisioner: ClusterRole

The provisioner runs with a **ClusterRole** granting broad cross-namespace permissions. Required because it creates resources in dynamically-named `org-{orgId}` namespaces.

**Source**: `k8s/chart/templates/rbac.yaml`

```yaml
# Key permissions:
- namespaces: get, list, watch, create, update, patch, delete
- deployments: get, list, watch, create, update, patch, delete
- secrets: get, list, watch, create, update, patch, delete
- networkpolicies: get, list, watch, create, update, patch, delete
- roles, rolebindings: get, list, watch, create, update, patch, delete
- pods: get, list, watch, create, delete
# ...plus services, serviceaccounts, configmaps, pvc, resourcequotas, limitranges, events, pods/log
```

**Scope limitation**: Bound only to the `provisioner` ServiceAccount in the `hamster-horde` namespace.

### Orchestrator: Namespace-Scoped Role

Each per-org orchestrator gets a **Role** (not ClusterRole) scoped to its own namespace only.

**Source**: `manifests/chart/templates/rbac.yaml`

```yaml
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list", "watch", "create", "delete"]
  - apiGroups: [""]
    resources: ["pods/log"]
    verbs: ["get"]
  - apiGroups: [""]
    resources: ["configmaps"]
    verbs: ["get", "list", "watch", "create", "update", "delete"]
  - apiGroups: [""]
    resources: ["secrets"]
    verbs: ["get", "create", "update"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["get", "list", "watch"]
```

The orchestrator can create runner pods and manage configmaps/secrets within its namespace, but cannot access other namespaces or cluster-wide resources.

## Redis ACL Per-Org

Each organization gets a dedicated Redis user restricted to its own key prefix.

**Source**: `deployer_redis.go`

### OrgID Validation (Injection Prevention)

```go
var orgIDRegex = regexp.MustCompile(`^[a-zA-Z0-9-]+$`)
const maxOrgIDLength = 128

func validateOrgID(orgID string) error {
    // Rejects: empty, > 128 chars, non-alphanumeric-hyphen characters
}
```

Called before every Redis ACL operation to prevent ACL injection attacks.

### Username Convention

```go
func redisUsername(orgID string) string {
    return "org_" + strings.ReplaceAll(orgID, "-", "_")
}
```

### ACL Implementation

```go
aclCmd := d.redis.Do(ctx, "ACL", "SETUSER", username,
    "on",
    "resetpass",        // Clear accumulated passwords
    ">"+password,       // Set new password
    "resetkeys",        // Clear accumulated key patterns
    "~"+keyPattern,     // horde:org:{orgId}:*
    "+@all",            // Allow all commands
    "resetchannels",    // Clear channel permissions
    "&"+keyPattern,     // Channel pattern restriction
)
```

The `resetpass` + `resetkeys` + `resetchannels` flags make the command idempotent — repeated calls don't accumulate stale passwords or patterns.

**Why `+@all` instead of explicit command whitelist**: BullMQ (gobullmq) uses Lua scripts, streams, hashes, and pub/sub internally. Maintaining a command allowlist is brittle and breaks on BullMQ upgrades. The key pattern restriction (`~horde:org:{orgId}:*`) is the real security boundary — users can only access keys with their org prefix, regardless of which commands they execute.

### Password Generation

```go
func generateSecurePassword(byteLength int) (string, error) {
    bytes := make([]byte, byteLength)
    _, err := rand.Read(bytes)  // crypto/rand
    return hex.EncodeToString(bytes), nil  // 64-char hex string from 32 bytes
}
```

### Password Reuse on Re-Deploy

Before generating a new password, the deployer checks for an existing password in the K8s Secret:

```go
password, _ := d.readRedisPassword(ctx, namespace)
if password == "" {
    password, err = generateSecurePassword(32)
}
```

This prevents password rotation on every re-deploy, which would break running orchestrators.

### ACL Not Supported Detection

Handles Redis versions without ACL support:

```go
func isACLNotSupportedError(err error) bool {
    errLower := strings.ToLower(err.Error())
    return strings.Contains(errLower, "unknown command") ||
        strings.Contains(errLower, "noperm") ||
        strings.Contains(errLower, "acl not supported") ||
        strings.Contains(errLower, "err unknown subcommand")
}
```

## Secret Propagation Chain

Secrets flow from environment through multiple layers:

```
Environment / 1Password
        │
        v
  Skaffold setValueTemplates
  (e.g., secrets.anthropicApiKey: "{{.HORDE_AI_DEFAULT_ANTHROPIC_API_KEY}}")
        │
        v
  Provisioner Chart Secret (k8s/chart/templates/secret.yaml)
  (name: provisioner-secrets, keys: HORDE_AI_DEFAULT_ANTHROPIC_API_KEY, etc.)
        │
        v
  Provisioner Config (types.go Config struct)
  (loaded via Viper from env vars with HORDE_ prefix)
        │
        v
  OrgOverlay (helm.go)
  (e.g., AnthropicAPIKey: d.config.AnthropicAPIKey)
        │
        v
  Orchestrator Chart Secret (manifests/chart/templates/secret.yaml)
  (name: orchestrator-secrets, keys: anthropic_api_key, redis_password, etc.)
        │
        v
  Orchestrator Pod env vars
  (e.g., HORDE_AI_DEFAULT_ANTHROPIC_API_KEY from secretKeyRef)
```

### Adding a New Secret

1. Add env var to Skaffold `setValueTemplates` in all profiles (default, dev, prod)
2. Add to provisioner chart `values.yaml` under `secrets:` and to `secret.yaml` template
3. Add field to `Config` struct with `mapstructure` tag
4. Add `v.SetDefault()` in `LoadConfig()`
5. Add field to `OrgOverlay` struct
6. Wire in `DeployOrchestrator()` overlay construction
7. Add to `buildValues()` secrets map
8. Add to orchestrator chart `values.yaml` under `secrets:` and to `secret.yaml` template
9. Add `secretKeyRef` env var in orchestrator `deployment.yaml`

## Network Policies

### Orchestrator Network Policy

**Source**: `manifests/chart/templates/network-policy-orchestrator.yaml`

```
Ingress:
  - Runner pods → orchestrator (TCP 8080 HTTP callbacks, TCP 8081 AI Proxy)

Egress:
  - DNS (UDP/TCP 53) → kube-dns in kube-system only
  - HTTPS (TCP 443) → any destination (external APIs: GitHub, Anthropic, OpenAI)
  - Redis (TCP 6379):
    - If redis.cidr set: ipBlock CIDR-based (external/managed Redis)
    - If redis.cidr empty: podSelector-based (in-cluster Redis)
```

The HTTPS egress is intentionally broad — external API IP ranges change frequently. Security relies on the orchestrator only making authenticated requests to known APIs.

### Runner Network Policy (Strict Isolation)

**Source**: `manifests/chart/templates/network-policy-runner.yaml`

```
Ingress: NONE (empty array — no inbound traffic)

Egress:
  - DNS (UDP/TCP 53) → kube-dns only
  - Orchestrator only (TCP 8080 callbacks, TCP 8081 AI Proxy)
```

Runners cannot reach Redis, external APIs, or any other pod. All external communication is proxied through the orchestrator's AI Proxy (port 8081).

## Container Security

Both provisioner and orchestrator deployments use identical security contexts:

```yaml
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 1000
  containers:
    - securityContext:
        readOnlyRootFilesystem: true
        allowPrivilegeEscalation: false
        capabilities:
          drop:
            - ALL
```

| Control | Setting |
| --- | --- |
| Non-root | UID 1000 |
| Read-only filesystem | `readOnlyRootFilesystem: true` |
| No privilege escalation | `allowPrivilegeEscalation: false` |
| Dropped capabilities | ALL |

## Resource Isolation

### Per-Namespace ResourceQuota

Prevents noisy-neighbor problems between orgs:

```yaml
# Orchestrator chart defaults
resourceQuota:
  enabled: true
  requests: { cpu: "4", memory: 8Gi }
  limits: { cpu: "8", memory: 16Gi }
  pods: "10"
```

### Per-Container LimitRange

Default resource bounds for all containers in the namespace:

```yaml
limitRange:
  enabled: true
  container:
    default: { cpu: 500m, memory: 512Mi }
    defaultRequest: { cpu: 100m, memory: 128Mi }
    max: { cpu: "2", memory: 4Gi }
    min: { cpu: 25m, memory: 64Mi }
  pod:
    max: { cpu: "4", memory: 8Gi }
```

## Pre-Delete Cleanup

**Source**: `k8s/chart/templates/pre-delete-cleanup.yaml`

Helm pre-delete hook that runs before the provisioner chart is uninstalled:

1. Lists all namespaces with label `app.kubernetes.io/managed-by=hamster-provisioner`
2. Force-deletes all resources in each namespace
3. Deletes the namespaces
4. Force-finalizes any stuck Terminating namespaces

This ensures clean teardown when running `skaffold delete` or `helm uninstall`.

## Config String Redaction

The `Config.String()` method redacts all secret fields to prevent accidental logging:

```go
func redactSecret(value string) string {
    if value == "" { return "<empty>" }
    return "<redacted>"
}
```