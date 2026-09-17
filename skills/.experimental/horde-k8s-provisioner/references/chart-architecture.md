# Chart Architecture

The horde uses a two-chart design: one for the provisioner itself, one for per-org orchestrators.

## Two-Chart Overview

```
apps/horde/
├── k8s/chart/                          ← Provisioner Chart (deployed by Skaffold)
│   ├── Chart.yaml
│   ├── values.yaml
│   ├── values-dev.yaml
│   └── templates/
│       ├── _helpers.tpl
│       ├── namespace.yaml
│       ├── deployment.yaml
│       ├── service.yaml
│       ├── configmap.yaml
│       ├── secret.yaml
│       ├── rbac.yaml                   ← ClusterRole (broad permissions)
│       └── pre-delete-cleanup.yaml     ← Helm pre-delete hook
│
└── internal/provisioner/manifests/chart/  ← Orchestrator Chart (embedded in binary, rendered per-org)
    ├── Chart.yaml
    ├── values.yaml
    └── templates/
        ├── _helpers.tpl
        ├── namespace.yaml              ← Includes ResourceQuota + LimitRange
        ├── deployment.yaml
        ├── service.yaml
        ├── secret.yaml
        ├── rbac.yaml                   ← Namespace-scoped Role (restricted)
        ├── pvc.yaml
        ├── network-policy-orchestrator.yaml
        └── network-policy-runner.yaml
```

## Provisioner Chart (`k8s/chart/`)

Deployed by Skaffold (or directly by `helm install`). Runs as a single deployment in the `hamster-horde` namespace.

### Templates

| Template | Creates | Notes |
| --- | --- | --- |
| `namespace.yaml` | Namespace + optional ResourceQuota + LimitRange | For the provisioner's own namespace |
| `deployment.yaml` | Deployment | Config checksum annotation triggers rollout on configmap change |
| `service.yaml` | ClusterIP Service | Port 80 → container port |
| `configmap.yaml` | ConfigMap (`provisioner-config`) | Redis, K8s, image, storage config as env vars |
| `secret.yaml` | Secret (`provisioner-secrets`) | API keys, tokens; conditional (only if values set) |
| `rbac.yaml` | ServiceAccount + ClusterRole + ClusterRoleBinding | Broad permissions for cross-namespace operations |
| `pre-delete-cleanup.yaml` | Job (Helm pre-delete hook) | Cleans up all `org-*` namespaces on uninstall |

### Values Structure

```yaml
replicaCount: 1
image: { repository, tag, pullPolicy }
namespace: hamster-horde
serviceAccount: { create, name }
service: { type: ClusterIP, port: 80 }
resources: { requests: {cpu, memory}, limits: {cpu, memory} }
server: { port, host }
log: { level, format }
redis: { host, port, db, hostK8s }
kubernetes: { inCluster, namespacePrefix, orchestratorImage, runnerImage }
secrets: { queueEncryptionKey, anthropicApiKey, githubToken, redisPassword }
watcher: { enabled, scanInterval }
resourceQuota: { enabled, requests, limits, pods }
limitRange: { enabled }
```

### Dev vs Prod

- **`values.yaml`**: Production defaults (`inCluster: true`, `imagePullPolicy: IfNotPresent`)
- **`values-dev.yaml`**: Local dev overrides (used only in Skaffold dev profile)

## Orchestrator Chart (`internal/provisioner/manifests/chart/`)

Embedded in the provisioner binary via `//go:embed`. Rendered per-org by the Go Helm SDK.

### Templates

| Template | Creates | Notes |
| --- | --- | --- |
| `namespace.yaml` | Namespace + ResourceQuota + LimitRange | Per-org namespace with resource bounds |
| `deployment.yaml` | Deployment | Orchestrator pod with security context, probes, volumes |
| `service.yaml` | ClusterIP Service | Exposes orchestrator within namespace |
| `secret.yaml` | Secret (`orchestrator-secrets`) | Redis creds, API keys, encryption key |
| `rbac.yaml` | ServiceAccount + Role + RoleBinding | Namespace-scoped; pods, configmaps, secrets, events |
| `pvc.yaml` | PersistentVolumeClaim (`org-briefs-storage`) | NFS storage for brief files |
| `network-policy-orchestrator.yaml` | NetworkPolicy | Runner ingress, Redis/HTTPS/DNS egress |
| `network-policy-runner.yaml` | NetworkPolicy | Strict: egress only to orchestrator + DNS |

### Values Structure

```yaml
namespace: ""            # Set by OrgOverlay.Namespace
orgId: ""                # Set by OrgOverlay.OrgID
image: "..."             # Set by OrgOverlay.Image
imagePullPolicy: IfNotPresent
runnerImage: "..."       # Set by OrgOverlay.RunnerImage
storageClass: ""         # Set by OrgOverlay.StorageClass
storageSize: "100Gi"     # Set by OrgOverlay.StorageSize
redis: { host, port, cidr }
secrets: { redisUsername, redisPassword, anthropicApiKey, githubToken, segmentWriteKey, queueEncryptionKey }
labels: { managedBy: hamster-provisioner, partOf: hamster-horde }
resourceQuota: { enabled: true, ... }
limitRange: { enabled: true, container: { default, defaultRequest, max, min }, pod: { max } }
```

### Helper Templates (`_helpers.tpl`)

```
orchestrator.labels       → managed-by, part-of, org-id labels
orchestrator.selectorLabels → app.kubernetes.io/name: orchestrator
orchestrator.fullLabels   → selectorLabels + labels combined
runner.selectorLabels     → app.kubernetes.io/name: runner
```

## Relationship Between Charts

```
Skaffold deploys → Provisioner Chart → creates Provisioner Deployment
                                            │
                                            │ (on API request)
                                            v
                                    Provisioner binary
                                    (contains embedded Orchestrator Chart)
                                            │
                                            │ helmInstallOrUpgrade()
                                            v
                                    Per-org namespace with
                                    all Orchestrator Chart resources
```

## When to Modify Which Chart

| Change | Chart | Why |
| --- | --- | --- |
| New env var for provisioner process | Provisioner (`k8s/chart/`) | Provisioner reads from configmap/secret |
| New env var for per-org orchestrator | Orchestrator (`manifests/chart/`) | Orchestrator reads from per-org secret |
| New secret to propagate to orgs | Both | Add to provisioner secret → `Config` → `OrgOverlay` → orchestrator secret |
| RBAC change for provisioner | Provisioner (`k8s/chart/templates/rbac.yaml`) | ClusterRole permissions |
| RBAC change for orchestrator | Orchestrator (`manifests/chart/templates/rbac.yaml`) | Namespace-scoped Role |
| Network isolation change | Orchestrator (`manifests/chart/templates/network-policy-*.yaml`) | Per-org network policies |
| Storage configuration change | Orchestrator (`manifests/chart/templates/pvc.yaml`) | Per-org PVC |
| Build/deploy configuration | `skaffold.yaml` | Not a chart change; see [skaffold-integration.md](skaffold-integration.md) |