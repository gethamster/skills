# Contributing

Thanks for wanting to add a skill to the Hamster catalog.

## Where contributions go

New standalone skills belong under `skills/.experimental/<skill-key>/SKILL.md`. `<skill-key>` must be kebab-case (`/^[a-z0-9]+(?:-[a-z0-9]+)*$/`) and must equal the directory name.

`skills/` and `methods/` are curated by Hamster maintainers: `methods/<method>/METHOD.md` is each method write-up, and `skills/<skill>/SKILL.md` is a skill that belongs to one of them. Corrections and improvements there are welcome — open a pull request against the file you want changed and say what is wrong with the current text.

Once an experimental skill proves useful and clearly belongs to one of the methods, maintainers move it into `skills/` and give it a `metadata.method`.

## SKILL.md frontmatter contract

Every `SKILL.md` starts with a `---`-delimited YAML frontmatter block:

```yaml
---
name: your-skill-key
description: One or two sentences describing what the skill does and when it applies.
metadata:
  method: lean-startup
  author: your-name
---
```

- `name` is required and must equal the directory name. It must also be unique across `skills/` and `skills/.experimental/` — installers flatten both into a single skill namespace, so a collision with an existing skill name will fail validation.
- `name` is capped at 64 characters.
- `description` is required, must be non-empty, and is capped at 1024 characters, per the [Agent Skills specification](https://agentskills.io/specification).
- `metadata.method` is required for curated skills and names the directory under `methods/` the skill belongs to. Experimental skills may omit it.
- `license` is optional; include it only if the skill is licensed differently from this repository's default MIT license.
- Other `metadata` fields are optional and may carry arbitrary attribution.

The body follows after a blank line as ordinary Markdown instructions for the agent. Curated skills end with a link back to Hamster; experimental skills need not.

## Generated files

`skills.sh.json` and the catalog table in `README.md` are generated from the tree by `node scripts/generate-catalog-manifest.mjs`. Edit the source files, run the generator, and commit the result; CI fails if they drift.

## License

By submitting a pull request you attest that your contribution is licensed under MIT, matching the rest of this repository.
