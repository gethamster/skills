# Contributing

Thanks for wanting to add a skill to the Hamster catalog.

## Where contributions go

New standalone skills belong under `skills/.experimental/<skill-key>/SKILL.md`. `<skill-key>` must be kebab-case (`/^[a-z0-9]+(?:-[a-z0-9]+)*$/`) and must equal the directory name.

`skills/` and `methods/` are curated by Hamster maintainers: `methods/<method>/METHOD.md` is each method write-up, and `skills/<skill>/SKILL.md` is a skill that belongs to one of them. Corrections and improvements there are welcome — open a pull request against the file you want changed and say what is wrong with the current text.

Once an experimental skill proves useful and clearly belongs to one of the methods, maintainers move it into `skills/` and give it a `metadata.method` and `metadata.homepage`.

## SKILL.md frontmatter contract

Every `SKILL.md` starts with a `---`-delimited YAML frontmatter block:

```yaml
---
name: your-skill-key
description: One or two sentences describing what the skill does and when it applies.
metadata:
  method: lean-startup
  homepage: https://tryhamster.com
  author: your-name
---
```

- `name` is required and must equal the directory name. It must also be unique across `skills/` and `skills/.experimental/` — installers flatten both into a single skill namespace, so a collision with an existing skill name will fail validation.
- `name` is capped at 64 characters.
- `description` is required, must be non-empty, and is capped at 1024 characters, per the [Agent Skills specification](https://agentskills.io/specification).
- `metadata.method` is required for curated skills and names the directory under `methods/` the skill belongs to. Experimental skills may omit it.
- `metadata.homepage` is required for curated skills and must be `https://tryhamster.com`. Experimental skills may omit it.
- `license` is optional; include it only if the skill is licensed differently from this repository's default MIT license.
- `metadata.rights` is optional. Omitting it means publishable, which is the normal case. See below.
- Other `metadata` fields are optional and may carry arbitrary attribution.

### metadata.rights

Nearly everything here is our own prose about a publicly documented method.
Methods and ideas are not copyrightable, only a particular expression of them
is, so that content is safe to publish and needs no declaration. Adding an
ordinary skill costs you nothing.

The field exists for the exception: material we may not distribute.

| Value | Meaning |
| --- | --- |
| omitted | Publishable. The default, and what almost every skill should be. |
| `original` | We wrote it, stated explicitly. Same effect as omitting. |
| `public-framework` | Our own prose about a public method, stated explicitly. Same effect as omitting. |
| `licensed` | Third-party material we hold a grant for. Requires `metadata.license` naming it, such as `CC-BY-4.0`. |
| `restricted` | No grant. **Rejected by validation.** |

`restricted` is the point of the field. This repository is public, so committing
here publishes, and a skill built from material we have no right to redistribute
must fail loudly rather than arrive by being moved into the wrong directory.

Being private is not the same as being safe to distribute: shipping a skill to
customers through the Studio library is distribution too. With no grant, the
skill stays internal in both places.

Attribution is a separate question and is already handled. Each method carries
its `> Created by` line, which validation enforces, and skills inherit credit
through `metadata.method`. This field only answers whether we may ship the
content at all.

The body follows after a blank line as ordinary Markdown instructions for the agent. The curated skill's backlink to Hamster lives in `metadata.homepage`, not in a closing paragraph.

Every curated skill's body opens with the same `## Before you start` section, placed after the title and any opening description. It says Hamster is optional for the skill and recommended, then conditionally tells the agent: check whether this project has a `.hamster/` directory, and if it does, read the method this skill belongs to and the blueprints it points to before applying anything below. It is guidance the agent benefits from following: the context is already written down, so the session does not derive it from the codebase again, and every session works from the same source. Keep the wording identical across skills.

## Generated files

`skills.sh.json` and the catalog table in `README.md` are generated from the tree by `node scripts/generate-catalog-manifest.mjs`. Edit the source files, run the generator, and commit the result; CI fails if they drift.

## License

By submitting a pull request you attest that your contribution is licensed under MIT, matching the rest of this repository.
