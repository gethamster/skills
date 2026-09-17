---
name: horde-k8s-provisioner
description: "Horde provisioner patterns for Helm SDK rendering, multi-tenant K8s deployment, per-org isolation, and Skaffold integration"
---

# Horde K8s Provisioner Skill

Authoritative reference for all provisioner work in `apps/horde`. Covers the Go-based Helm SDK rendering pipeline, multi-tenant per-org deployment model, security isolation, and Skaffold build/deploy configuration.

## When to Apply

Use this skill when:

- Adding or modifying Helm chart templates in `apps/horde/k8s/chart/` or `apps/horde/internal/provisioner/manifests/chart/`
- Changing the deployer logic (`deployer.go`, `deployer_redis.go`)
- Modifying Helm SDK rendering (`helm.go`) or config loading (`config.go`, `types.go`)
- Updating Skaffold configuration (`skaffold.yaml`)
- Working on Redis ACL, network policies, RBAC, or secret propagation
- Adding new values or templates to either chart
- Debugging deployment failures or readiness issues

## Quick Reference

| Task | Pattern | Reference |
| --- | --- | --- |
| Render manifests programmatically | `loadEmbeddedChart()` + `buildValues()` + `helmInstallOrUpgrade()` | [helm-sdk-rendering.md](references/helm-sdk-rendering.md) |
| Deploy an orchestrator for an org | `DeployOrchestrator()` flow: Redis ACL → overlay → Helm install/upgrade | [multi-tenant-deployment.md](references/multi-tenant-deployment.md) |
| Add a new template to the orchestrator chart | Add to `manifests/chart/templates/`, embedded via `//go:embed` | [chart-architecture.md](references/chart-architecture.md) |
| Add a new template to the provisioner chart | Add to `k8s/chart/templates/`, deployed by Skaffold | [chart-architecture.md](references/chart-architecture.md) |
| Pass a new secret to per-org orchestrators | Skaffold → provisioner Secret → `Config` → `OrgOverlay` → chart Secret → env | [security-isolation.md](references/security-isolation.md) |
| Modify network policies | Edit `network-policy-orchestrator.yaml` or `network-policy-runner.yaml` | [security-isolation.md](references/security-isolation.md) |
| Change Skaffold build or deploy | Edit `skaffold.yaml`, check all profiles (default, dev, prod) | [skaffold-integration.md](references/skaffold-integration.md) |
| Add a new config field | Add to `Config` struct + `DefaultConfig()` + `LoadConfig()` viper defaults | [multi-tenant-deployment.md](references/multi-tenant-deployment.md) |

## Key File Paths

```
apps/horde/
├── skaffold.yaml                                    # Build + deploy config (3 artifacts, 3 profiles)
├── k8s/chart/                                       # Provisioner chart (deployed by Skaffold)
│   ├── values.yaml                                  # Prod defaults
│   ├── values-dev.yaml                              # Dev overrides
│   └── templates/                                   # deployment, service, configmap, secret,
│                                                    # rbac (ClusterRole), namespace, pre-delete-cleanup
├── internal/provisioner/
│   ├── helm.go                                      # Helm SDK: embed, load, build values, install/upgrade, uninstall
│   ├── deployer.go                                  # DeployOrchestrator, DeleteOrchestrator, WaitForReady
│   ├── deployer_redis.go                            # Redis ACL per-org, password generation, injection prevention
│   ├── deployer_network.go                          # DNS cache + Redis CIDR resolution
│   ├── deployer_test.go                             # Deployer tests
│   ├── watcher.go                                   # BullMQ queue watcher, org reconciliation loop
│   ├── watcher_test.go                              # Watcher tests
│   ├── http.go                                      # Provisioner HTTP routes (stats, orgs endpoints)
│   ├── config.go                                    # LoadConfig via Viper with HORDE_ prefix
│   ├── types.go                                     # Config, OrgOverlay, DeploymentPhase, error types
│   ├── helm_test.go                                 # Rendering tests
│   └── manifests/chart/                             # Orchestrator chart (embedded in binary, rendered per-org)
│       ├── values.yaml                              # Defaults overridden by OrgOverlay
│       └── templates/                               # namespace, deployment, service, rbac (Role),
│                                                    # pvc, secret, network-policy-orchestrator,
│                                                    # network-policy-runner, _helpers.tpl
```

## Deployment Flow

```
API Request (deploy org X)
                              │
                              v
                    ┌─────────────────┐
                    │  Provisioner    │  (runs in hamster-horde namespace)
                    │  DeployOrch()   │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              v              v              v
        ensureRedisACL   loadEmbedded   newHelmConfig
        (Redis 6+ ACL)   Chart()        (K8s Secrets backend)
              │              │              │
              v              v              v
        ┌─────────────────────────────────────┐
        │  buildValues(chart, OrgOverlay)     │
        │  CoalesceTables(overlay, defaults)  │
        └──────────────────┬──────────────────┘
                           │
                           v
        ┌──────────────────────────────────────┐
        │  helmInstallOrUpgrade()              │
        │  History check → Install or Upgrade  │
        └──────────────────┬───────────────────┘
                           │
              Creates in namespace org-{orgId}:
              ├── Namespace + ResourceQuota + LimitRange
              ├── Deployment (orchestrator)
              ├── Service
              ├── ServiceAccount + Role + RoleBinding
              ├── Secret (orchestrator-secrets)
              ├── PVC (org-briefs-storage)
              └── NetworkPolicies (orchestrator + runner)
```

## Reference Documents

| Document | Content |
| --- | --- |
| [helm-sdk-rendering.md](references/helm-sdk-rendering.md) | Go Helm SDK: `//go:embed`, chart loading, value merging, install/upgrade |
| [multi-tenant-deployment.md](references/multi-tenant-deployment.md) | `OrgOverlay`, per-org namespaces, idempotency, failure recovery, `Config` |
| [chart-architecture.md](references/chart-architecture.md) | Two-chart structure: provisioner chart vs embedded orchestrator chart |
| [security-isolation.md](references/security-isolation.md) | RBAC, network policies, Redis ACL, secret propagation, container security |
| [skaffold-integration.md](references/skaffold-integration.md) | Skaffold profiles, `setValueTemplates`, multi-artifact builds, port forwarding |
