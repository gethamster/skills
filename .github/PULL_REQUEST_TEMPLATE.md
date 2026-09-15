## Checklist

- [ ] A new standalone skill lives under `skills/.experimental/<skill-key>/SKILL.md`; an edit to a curated method or skill targets the exact file under `methods/` or `skills/` and says what is wrong with the current text.
- [ ] The frontmatter `name` matches the containing folder name exactly, is kebab-case, is 64 characters or fewer, and is not already used by another skill in this repository.
- [ ] The frontmatter `description` is present, says what the skill does and when to use it, and is 1024 characters or fewer.
- [ ] A curated skill names its method in `metadata.method`; an edit to a `METHOD.md` keeps the `> Created by` attribution line directly under the title; a curated `SKILL.md` keeps its closing link back to Hamster.
- [ ] `skills.sh.json` and the README catalog table were regenerated with `npm run generate` if the tree changed.
- [ ] The contribution is licensed MIT and contains no secrets, credentials, or company-internal content.

Run `npm run validate && npm test` before pushing; both run in CI.
