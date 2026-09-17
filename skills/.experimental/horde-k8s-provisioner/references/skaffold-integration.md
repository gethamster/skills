# Skaffold Integration

How Skaffold builds, deploys, and manages the horde provisioner and its dependencies across dev and prod environments.

**Source**: `apps/horde/skaffold.yaml`

## Multi-Artifact Builds

Skaffold builds 3 container images from 2 build contexts:

| Artifact | Dockerfile Target | Context | Purpose |
| --- | --- | --- | --- |
| `hamster-horde-provisioner` | `provisioner` | `.` (horde root) | Main provisioner deployment |
| `hamster-horde-orchestrator` | `orchestrator` | `.` (horde root) | Per-org orchestrator (deployed by provisioner) |
| `hamster-horde-runner` | _(default)_ | `runner-container/` | Per-brief runner (spawned by orchestrator) |

Each artifact has a post-build hook that tags the image with `:latest`:

```yaml
hooks:
  after:
    - command: ['sh', '-c', 'docker tag $SKAFFOLD_IMAGE hamster-horde-provisioner:latest']
```

This ensures the provisioner can reference orchestrator/runner images by their `:latest` tag in local dev (where `imagePullPolicy: Never`).

## Helm Release Configuration

### Default (No Profile)

```yaml
manifests:
  helm:
    releases:
      - name: hamster-horde
        chartPath: k8s/chart
        valuesFiles:
          - k8s/chart/values.yaml        # Prod defaults
        namespace: hamster-horde
        createNamespace: true
        setValueTemplates:
          kubernetes.orchestratorImage: "{{.IMAGE_FULLY_QUALIFIED_hamster_horde_orchestrator}}"
          kubernetes.runnerImage: "{{.IMAGE_FULLY_QUALIFIED_hamster_horde_runner}}"
          secrets.queueEncryptionKey: "{{.HORDE_SECURITY_QUEUE_ENCRYPTION_KEY}}"
          secrets.anthropicApiKey: "{{.HORDE_AI_DEFAULT_ANTHROPIC_API_KEY}}"
          secrets.githubToken: "{{.HORDE_AI_DEFAULT_GITHUB_TOKEN}}"
```

### setValueTemplates

Skaffold injects values at deploy time using two types of template variables:

| Variable Pattern | Source | Example |
| --- | --- | --- |
| `IMAGE_FULLY_QUALIFIED_*` | Skaffold build output (image + tag + digest) | `hamster-horde-orchestrator:abc123@sha256:...` |
| `HORDE_*` | Environment variables | From `.env`, 1Password, or CI/CD |

**Naming convention**: Skaffold converts image names to variable names by replacing hyphens with underscores: `hamster-horde-orchestrator` → `IMAGE_FULLY_QUALIFIED_hamster_horde_orchestrator`.

## Profiles

### Dev Profile

Activated automatically when the kubeContext matches `kind-hamster-horde` or `docker-desktop`:

```yaml
profiles:
  - name: dev
    activation:
      - kubeContext: kind-hamster-horde
      - kubeContext: docker-desktop
```

Dev profile differences from default:

- **NFS provisioner**: Deploys `nfs-server-provisioner` chart for local PV storage
- **Values files**: Adds `values-dev.yaml` as override on top of `values.yaml`
- **Local push**: `push: false` (images stay in local Docker daemon)

#### NFS Server Provisioner

```yaml
- name: nfs-server
  remoteChart: nfs-server-provisioner
  repo: https://kubernetes-sigs.github.io/nfs-ganesha-server-and-external-provisioner/
  namespace: nfs-system
  createNamespace: true
  upgradeOnChange: false    # Don't redeploy on every skaffold run
  setValues:
    storageClass.name: hamster-filestore-nfs
    persistence.enabled: true
    persistence.size: 10Gi
```

Mimics production Google Filestore NFS. First install can be slow; manual install is documented in skaffold.yaml comments if timeouts occur.

### Prod Profile

Uses Google Cloud Build instead of local Docker:

```yaml
- name: prod
  build:
    googleCloudBuild:
      projectId: hamster-production
      diskSizeGb: 100
      machineType: E2_HIGHCPU_8
      timeout: 1200s
```

No NFS provisioner (uses real Filestore in production). No `values-dev.yaml` override.

## Port Forwarding

```yaml
portForward:
  - resourceType: service
    resourceName: provisioner
    namespace: hamster-horde
    port: 80
    localPort: 8090
```

The provisioner API is accessible at `localhost:8090` during `skaffold dev`.

## Adding a New Secret via Skaffold

1. Set the environment variable (e.g., `HORDE_MY_NEW_SECRET`)
2. Add `setValueTemplates` entry in **all three** release configurations:

- Default release
- Dev profile release
- Prod profile release

```yaml
setValueTemplates:
  secrets.myNewSecret: "{{.HORDE_MY_NEW_SECRET}}"
```

1. Add corresponding entry in provisioner chart `values.yaml` and `secret.yaml`
2. Continue the propagation chain per [security-isolation.md](security-isolation.md)

## Adding a New Image Artifact

1. Add `artifacts` entry with image name, context, dockerfile, and target
2. Add post-build hook for `:latest` tagging
3. Add `setValueTemplates` entry using the Skaffold image variable
4. Add corresponding value in chart `values.yaml`

## Common Operations

```bash
# Local dev (auto-detects kubeContext for profile)
skaffold dev

# Explicit dev profile
skaffold dev -p dev

# Build only (no deploy)
skaffold build

# Deploy only (assumes images already built)
skaffold deploy

# Delete all resources
skaffold delete

# Run with specific kubeconfig
skaffold dev --kube-context kind-hamster-horde
```