#!/usr/bin/env node
// Each case builds a throwaway catalog, runs the real validator against it, and
// asserts the exit code and the message. The shipped catalog only exercises
// the pass path, so without these a rule can stop firing and every signal in
// the repository still says pass.

import { strict as assert } from "node:assert";
import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { after, test } from "node:test";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(scriptDir, "..");
const workspace = mkdtempSync(join(tmpdir(), "catalog-validator-"));

after(() => rmSync(workspace, { recursive: true, force: true }));

const SKILL_BODY = "\nGuidance.\n";

function skill(
  name,
  {
    description = "What it does and when to use it.",
    body = SKILL_BODY,
    method = "lean-startup",
    category = "Product",
    homepage = "https://tryhamster.com",
    rights = null,
    license = null,
  } = {},
) {
  const lines = [];
  if (method !== null) lines.push(`  method: ${method}`);
  if (homepage !== null) lines.push(`  homepage: ${JSON.stringify(homepage)}`);
  if (rights !== null) lines.push(`  rights: ${rights}`);
  if (license !== null) lines.push(`  license: ${license}`);
  const metadata = lines.length ? `metadata:\n${lines.join("\n")}\n` : "";
  const categoryLine = category === null ? "" : `category: ${JSON.stringify(category)}\n`;
  return `---\nname: ${name}\ndescription: ${JSON.stringify(description)}\n${categoryLine}${metadata}---\n${body}`;
}

function file(root, relativePath, contents) {
  const target = join(root, relativePath);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, contents);
}

// A fixture is a whole repository: the validator anchors itself to its own
// location, so the script has to live inside the tree it is judging.
let fixtureCount = 0;
function fixture(build) {
  const root = join(workspace, `fixture-${(fixtureCount += 1)}`);
  mkdirSync(join(root, "scripts"), { recursive: true });
  cpSync(join(scriptDir, "validate-catalog.mjs"), join(root, "scripts/validate-catalog.mjs"));
  cpSync(join(scriptDir, "generate-catalog-manifest.mjs"), join(root, "scripts/generate-catalog-manifest.mjs"));
  file(root, "README.md", "# Fixture\n\n<!-- catalog:start -->\n<!-- catalog:end -->\n");
  symlinkSync(join(repoRoot, "node_modules"), join(root, "node_modules"), "dir");

  // 42 of the 50 shipped METHOD.md files carry a "Title: Subtitle" H1 and the
  // table takes the part before the colon, so the base fixture has one: every
  // README assertion below then holds the split in place.
  file(root, "methods/lean-startup/METHOD.md", "---\ncategory: Product\n---\n\n# Lean Startup: Build, Measure, Learn\n\n> Created by **Eric Ries** — [link](https://theleanstartup.com)\n");
  file(root, "skills/running-experiments/SKILL.md", skill("running-experiments"));
  build?.(root);
  return root;
}

function validate(root) {
  try {
    const stdout = execFileSync(process.execPath, [join(root, "scripts/validate-catalog.mjs")], {
      encoding: "utf8",
    });
    return { code: 0, output: stdout };
  } catch (err) {
    return { code: err.status, output: `${err.stdout ?? ""}${err.stderr ?? ""}` };
  }
}

function generate(root, ...args) {
  try {
    return {
      code: 0,
      output: execFileSync(process.execPath, [join(root, "scripts/generate-catalog-manifest.mjs"), ...args], {
        encoding: "utf8",
      }),
    };
  } catch (err) {
    return { code: err.status, output: `${err.stdout ?? ""}${err.stderr ?? ""}` };
  }
}

// Published copy with no upstream: CATEGORY_DESCRIPTIONS in the generator is
// its only source, so it is asserted verbatim. A dropped one ships a section
// with no description.
const PRODUCT_DESCRIPTION =
  "Discovery, prioritization, roadmapping and the metrics a product is steered by.";
const WORKFLOWS_DESCRIPTION =
  "How the work itself runs: iterations, boards, ceremonies and retrospectives.";

function rejects(root, expected) {
  const { code, output } = validate(root);
  assert.equal(code, 1, `expected a rejection, got:\n${output}`);
  // A crash also exits 1; only the validator's own banner counts as a rejection.
  assert.match(output, /Catalog validation failed with \d+ issue\(s\)/);
  assert.match(output, expected);
}

test("a well-formed catalog passes", () => {
  const { code, output } = validate(fixture());
  assert.equal(code, 0, output);
  assert.match(output, /passed: 1 skill\(s\) across 1 method\(s\)/);
});

test("an experimental skill passes without a backlink or a method", () => {
  const root = fixture((r) =>
    file(r, "skills/.experimental/naming-things/SKILL.md", skill("naming-things", { method: null, homepage: null })),
  );
  const { code, output } = validate(root);
  assert.equal(code, 0, output);
  assert.match(output, /passed: 2 skill\(s\)/);
});

test("name must equal its directory", () => {
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("something-else"))),
    /does not match directory name "running-experiments"/,
  );
  // Case is part of the identity: installers resolve the directory literally.
  // A distinct stem, so the fixture does not collide with the baseline skill
  // on a case-insensitive filesystem.
  rejects(
    fixture((r) => file(r, "skills/Naming-Things/SKILL.md", skill("naming-things"))),
    /does not match directory name "Naming-Things"/,
  );
});

test("name must be kebab-case, rejecting leading, trailing and doubled hyphens", () => {
  for (const bad of ["-leading", "trailing-", "double--hyphen", "Upper"]) {
    rejects(fixture((r) => file(r, `skills/${bad}/SKILL.md`, skill(bad))), /kebab-case/);
  }
});

test("name is capped at 64 characters, and 64 itself is allowed", () => {
  const at64 = "a".repeat(64);
  const over = "a".repeat(65);
  const { code } = validate(fixture((r) => file(r, `skills/${at64}/SKILL.md`, skill(at64))));
  assert.equal(code, 0, "64 characters is the documented limit and must pass");
  rejects(fixture((r) => file(r, `skills/${over}/SKILL.md`, skill(over))), /exceeds 64 characters/);
});

test("description is required, non-empty, and capped at 1024 characters", () => {
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", "---\nname: running-experiments\nmetadata:\n  method: lean-startup\n---\nbody\n")),
    /missing required "description" field/,
  );
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { description: "   " }))),
    /"description" must be a non-empty string/,
  );
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { description: "x".repeat(1025) }))),
    /description exceeds 1024 characters/,
  );
});

test("a curated skill must name an existing method, and every method must own a skill", () => {
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { method: null }))),
    /missing metadata\.method/,
  );
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { method: "no-such-method" }))),
    /metadata\.method "no-such-method" does not name a directory under methods\//,
  );
  rejects(
    fixture((r) => file(r, "methods/kanban/METHOD.md", "---\ncategory: Product\n---\n\n# Kanban\n\n> Created by **Taiichi Ohno**\n")),
    /methods\/kanban: no skill names it in metadata\.method/,
  );
  // An experimental skill may point at a method, but only a real one.
  rejects(
    fixture((r) => file(r, "skills/.experimental/naming-things/SKILL.md", skill("naming-things", { method: "no-such-method" }))),
    /metadata\.method "no-such-method"/,
  );
});

test("a skill name may not repeat across lanes, because installers flatten them", () => {
  rejects(
    fixture((r) =>
      file(r, "skills/.experimental/running-experiments/SKILL.md", skill("running-experiments", { method: null })),
    ),
    /duplicate skill name "running-experiments"/,
  );
});

test("malformed frontmatter fails by name rather than being skipped", () => {
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", "---\nname: [unclosed\n---\nbody\n")),
    /running-experiments\/SKILL\.md: failed to parse frontmatter YAML/,
  );
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", "no frontmatter at all\n")),
    /missing or malformed --- frontmatter block/,
  );
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", "---\n- just\n- a list\n---\nbody\n")),
    /frontmatter block did not parse to a YAML mapping/,
  );
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", "---\ndescription: x\nmetadata:\n  method: lean-startup\n---\nbody\n")),
    /missing required "name" field/,
  );
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", "---\nname: \"\"\ndescription: x\nmetadata:\n  method: lean-startup\n---\nbody\n")),
    /"name" must be a non-empty string/,
  );
});

test("a relative link to a path that does not exist is rejected, so renames cannot silently break the tree", () => {
  rejects(
    fixture((r) =>
      file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { body: "\nSee [it](../gone/SKILL.md).\n" + SKILL_BODY })),
    ),
    /running-experiments\/SKILL\.md: link target "\.\.\/gone\/SKILL\.md" does not exist/,
  );
  rejects(
    fixture((r) =>
      file(r, "methods/lean-startup/METHOD.md", "---\ncategory: Product\n---\n\n# Lean Startup\n\n> Created by **Eric Ries**\n\n[x](../../skills/missing/SKILL.md)\n"),
    ),
    /METHOD\.md: link target "\.\.\/\.\.\/skills\/missing\/SKILL\.md" does not exist/,
  );
  // Sibling links that resolve, and anchors, are fine.
  const { code, output } = validate(
    fixture((r) => {
      file(r, "skills/naming-things/SKILL.md", skill("naming-things", { body: "\n[a](../running-experiments/SKILL.md#step-1)\n" + SKILL_BODY }));
    }),
  );
  assert.equal(code, 0, output);
});

test("a skill without a rights declaration passes, because publishable is the norm here", () => {
  const { code, output } = validate(
    fixture((root) => {
      file(root, "skills/undeclared/SKILL.md", skill("undeclared"));
    }),
  );
  assert.equal(code, 0, output);
});

test("restricted material cannot be committed here, because committing here publishes it", () => {
  rejects(
    fixture((root) => {
      file(root, "skills/no-grant/SKILL.md", skill("no-grant", { rights: "restricted" }));
    }),
    /cannot live in this repository/,
  );
});

test("an unrecognised rights value is refused, so a typo cannot read as publishable", () => {
  rejects(
    fixture((root) => {
      file(root, "skills/odd/SKILL.md", skill("odd", { rights: "restrcited" }));
    }),
    /metadata\.rights "restrcited" must be one of/,
  );
});

test("licensed material must name the grant it relies on", () => {
  rejects(
    fixture((root) => {
      file(root, "skills/granted/SKILL.md", skill("granted", { rights: "licensed" }));
    }),
    /requires metadata\.license naming the grant/,
  );

  const { code, output } = validate(
    fixture((root) => {
      file(
        root,
        "skills/granted/SKILL.md",
        skill("granted", { rights: "licensed", license: "CC-BY-4.0" }),
      );
    }),
  );
  assert.equal(code, 0, output);
});

test("a blank license does not satisfy the grant requirement", () => {
  rejects(
    fixture((root) => {
      file(
        root,
        "skills/granted/SKILL.md",
        skill("granted", { rights: "licensed", license: '"   "' }),
      );
    }),
    /requires metadata\.license naming the grant/,
  );
});

test("an experimental skill is held to the same rule, since it ships in the same public tree", () => {
  rejects(
    fixture((root) => {
      file(
        root,
        "skills/.experimental/probe/SKILL.md",
        skill("probe", { method: null, rights: "restricted", body: "\nDraft.\n" }),
      );
    }),
    /cannot live in this repository/,
  );
});

test("every method must carry its attribution line", () => {
  rejects(
    fixture((r) => file(r, "methods/lean-startup/METHOD.md", "---\ncategory: Product\n---\n\n# Lean Startup\n\nNo attribution.\n")),
    /missing a "> Created by" attribution line/,
  );
  // The line has to be the blockquote, not the words appearing in prose.
  rejects(
    fixture((r) => file(r, "methods/lean-startup/METHOD.md", "---\ncategory: Product\n---\n\n# Lean Startup\n\nThis was Created by a practitioner.\n")),
    /missing a "> Created by" attribution line/,
  );
  // README promises it sits directly under the title, so a late one is not it.
  rejects(
    fixture((r) =>
      file(r, "methods/lean-startup/METHOD.md", `# Lean Startup\n${"\nprose\n".repeat(6)}\n> Created by **Eric Ries**\n`),
    ),
    /missing a "> Created by" attribution line/,
  );
  // A credit with nothing after the prefix leaves the table with nothing to
  // print, so it fails on the value both scripts read, not on the line.
  const empty = fixture((r) =>
    file(r, "methods/lean-startup/METHOD.md", "---\ncategory: Product\n---\n\n# Lean Startup\n\n> Created by \n"),
  );
  rejects(empty, /missing a "> Created by" attribution line/);
  const generatedEmpty = generate(empty);
  assert.equal(generatedEmpty.code, 1, generatedEmpty.output);
  rejects(
    fixture((r) => mkdirSync(join(r, "methods/orphan"), { recursive: true })),
    /methods\/orphan: missing METHOD\.md/,
  );
});

test("every method must carry the H1 the catalog table names it from", () => {
  // Each of these leaves the generator with no title. Unguarded it publishes a
  // link with no text, and --check compares that against the same empty
  // output, so nothing downstream can notice.
  // The last is a heading that is nothing but a subtitle: the table takes the
  // part before the colon, which is empty.
  for (const heading of ["Lean Startup\n=============", "## Lean Startup", "#Lean Startup", "", "# : Build, Measure, Learn"]) {
    const body = `---\ncategory: Product\n---\n\n${heading}\n\n> Created by **Eric Ries**\n`;
    const root = fixture((r) => file(r, "methods/lean-startup/METHOD.md", body));
    rejects(root, /methods\/lean-startup\/METHOD\.md: missing the "# " H1 the catalog table names the method from/);
    const generated = generate(root);
    assert.equal(generated.code, 1, generated.output);
    assert.match(generated.output, /missing the "# " H1/);
  }
});

test("every curated skill must carry the Hamster homepage in metadata", () => {
  for (const homepage of [null, "https://example.com", "https://tryhamster.com/skills", true]) {
    rejects(
      fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { homepage }))),
      /metadata\.homepage must be "https:\/\/tryhamster\.com"/,
    );
  }
});

test("a closing body link does not replace metadata.homepage", () => {
  rejects(
    fixture((r) =>
      file(
        r,
        "skills/running-experiments/SKILL.md",
        skill("running-experiments", { homepage: null, body: "\n*[Add it](https://tryhamster.com) to your workspace.*\n" }),
      ),
    ),
    /metadata\.homepage must be "https:\/\/tryhamster\.com"/,
  );
});

test("a SKILL.md off the canonical path is rejected wherever it sits", () => {
  rejects(
    fixture((r) => file(r, "methods/lean-startup/SKILL.md", skill("lean-startup"))),
    /SKILL\.md outside the catalog/,
  );
  rejects(
    fixture((r) => file(r, "skills/group/nested/SKILL.md", skill("nested"))),
    /SKILL\.md outside skills\/<skill>\/ or skills\/\.experimental\/<skill>\//,
  );
  rejects(
    fixture((r) => file(r, "skills/.experimental/group/nested/SKILL.md", skill("nested", { method: null }))),
    /SKILL\.md outside skills\/<skill>\/ or skills\/\.experimental\/<skill>\//,
  );
  rejects(
    fixture((r) => file(r, "docs/example/SKILL.md", skill("example"))),
    /SKILL\.md outside the catalog/,
  );
  rejects(fixture((r) => file(r, "SKILL.md", skill("root"))), /SKILL\.md outside the catalog/);
});

test("a skill directory that ships no SKILL.md is rejected in either lane, not ignored", () => {
  // Deliberately not a case variant of SKILL.md: that collides on a
  // case-insensitive filesystem and the fixture would test nothing there.
  rejects(fixture((r) => file(r, "skills/my-skill/README.md", "# my skill\n")), /skills\/my-skill: missing SKILL\.md/);
  rejects(
    fixture((r) => file(r, "skills/.experimental/my-skill/README.md", "# my skill\n")),
    /skills\/\.experimental\/my-skill: missing SKILL\.md/,
  );
});

test("symlinks are rejected rather than followed", () => {
  const outside = join(workspace, "outside");
  mkdirSync(outside, { recursive: true });
  writeFileSync(join(outside, "SKILL.md"), skill("smuggled"));

  rejects(
    fixture((r) => symlinkSync(join(outside, "SKILL.md"), join(r, "methods/lean-startup/SKILL.md"))),
    /methods\/lean-startup\/SKILL\.md: symlinks are not allowed/,
  );
  rejects(
    fixture((r) => symlinkSync(outside, join(r, "skills/linked"), "dir")),
    /symlinks are not allowed/,
  );
});

test("an empty or missing catalog is refused rather than reported as a pass", () => {
  rejects(
    fixture((r) => rmSync(join(r, "methods"), { recursive: true, force: true })),
    /methods\/ is missing/,
  );
  rejects(
    fixture((r) => rmSync(join(r, "skills"), { recursive: true, force: true })),
    /skills\/ is missing/,
  );
  rejects(
    fixture((r) => {
      rmSync(join(r, "skills"), { recursive: true, force: true });
      mkdirSync(join(r, "skills"), { recursive: true });
    }),
    /refusing to pass an empty catalog/,
  );
});

test("failures accumulate instead of stopping at the first", () => {
  const { code, output } = validate(
    fixture((r) => {
      file(r, "methods/lean-startup/METHOD.md", "---\ncategory: Product\n---\n\n# Lean Startup\n");
      file(r, "skills/running-experiments/SKILL.md", skill("Wrong_Name", { homepage: null }));
    }),
  );
  assert.equal(code, 1);
  assert.match(output, /failed with 4 issue\(s\)/);
});

test("a curated skill must carry the category of its method", () => {
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { category: null }))),
    /running-experiments\/SKILL\.md: missing "category" \(curated skills carry their method's category\)/,
  );
  // One cause, one failure: the method comparison stays quiet on a field that
  // is absent, and on one already rejected for not being in the set, so a bulk
  // mistake across the catalog does not double the list.
  const absent = validate(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { category: null }))),
  );
  assert.doesNotMatch(absent.output, /does not match method/);
  // The set is case-sensitive: Studio groups on the literal value.
  const lowercased = validate(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { category: "product" }))),
  );
  assert.equal(lowercased.code, 1, lowercased.output);
  assert.match(
    lowercased.output,
    /category "product" must be one of Product, Development, Experience, Marketing, Ops, Workflows/,
  );
  assert.doesNotMatch(lowercased.output, /does not match method/);
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { category: "Strategy" }))),
    /category "Strategy" must be one of/,
  );
  // A list reads as a string once interpolated, so the value is quoted: an
  // unquoted message would name the category it is rejecting as acceptable.
  rejects(
    fixture((r) =>
      file(
        r,
        "skills/running-experiments/SKILL.md",
        `---\nname: running-experiments\ndescription: "What it does."\ncategory:\n  - Product\nmetadata:\n  method: lean-startup\n  homepage: https://tryhamster.com\n---\nBody\n`,
      ),
    ),
    /category \["Product"\] must be one of/,
  );
});

test("an experimental skill may omit its category but not contradict its method", () => {
  const omitted = validate(
    fixture((r) =>
      file(
        r,
        "skills/.experimental/naming-things/SKILL.md",
        skill("naming-things", { category: null, homepage: null }),
      ),
    ),
  );
  assert.equal(omitted.code, 0, omitted.output);
  rejects(
    fixture((r) =>
      file(
        r,
        "skills/.experimental/naming-things/SKILL.md",
        skill("naming-things", { category: "Marketing", homepage: null }),
      ),
    ),
    /naming-things\/SKILL\.md: category "Marketing" does not match method "lean-startup" \(Product\)/,
  );
  // No method to cross-check against, so the enum is the only thing standing
  // between a typo and the public tree.
  rejects(
    fixture((r) =>
      file(
        r,
        "skills/.experimental/naming-things/SKILL.md",
        skill("naming-things", { category: "Strategy", method: null, homepage: null }),
      ),
    ),
    /naming-things\/SKILL\.md: category "Strategy" must be one of/,
  );
});

test("every METHOD.md must declare one of the six categories", () => {
  rejects(
    fixture((r) =>
      file(r, "methods/lean-startup/METHOD.md", "---\ncategory: Strategy\n---\n\n# Lean Startup\n\n> Created by **Eric Ries**\n"),
    ),
    /methods\/lean-startup\/METHOD\.md: category "Strategy" must be one of/,
  );
  rejects(
    fixture((r) =>
      file(r, "methods/lean-startup/METHOD.md", "---\ncategory: product\n---\n\n# Lean Startup\n\n> Created by **Eric Ries**\n"),
    ),
    /methods\/lean-startup\/METHOD\.md: category "product" must be one of/,
  );
  // A file with no frontmatter reports the block and the category contract in
  // one run, rather than sending a contributor back for the second half.
  const bare = validate(
    fixture((r) => file(r, "methods/lean-startup/METHOD.md", "# Lean Startup\n\n> Created by **Eric Ries**\n")),
  );
  assert.equal(bare.code, 1, bare.output);
  assert.match(bare.output, /methods\/lean-startup\/METHOD\.md: missing or malformed --- frontmatter block/);
  assert.match(bare.output, /methods\/lean-startup\/METHOD\.md: missing "category" \(one of Product/);
  // A YAML error is its own cause and says nothing about the category.
  const unparseable = validate(
    fixture((r) =>
      file(r, "methods/lean-startup/METHOD.md", '---\ncategory: "Product\n---\n\n# Lean Startup\n\n> Created by **Eric Ries**\n'),
    ),
  );
  assert.equal(unparseable.code, 1, unparseable.output);
  assert.match(unparseable.output, /methods\/lean-startup\/METHOD\.md: failed to parse frontmatter YAML/);
  assert.doesNotMatch(unparseable.output, /missing "category"/);
});

// The drift check is a CI gate with no failing example in the shipped
// repository, so it gets the same negative control as the validator rules.
test("the manifest drift check fails on stale generated files and passes once regenerated", () => {
  const root = fixture();
  const run = (...args) => generate(root, ...args);

  assert.equal(run("--check").code, 1, "nothing generated yet must read as stale");
  assert.equal(run().code, 0);
  assert.equal(run("--check").code, 0, "freshly generated files are up to date");

  // Groupings are compared whole, so the published description, the skill
  // membership and the absence of stray keys are all covered at once.
  const manifest = JSON.parse(readFileSync(join(root, "skills.sh.json"), "utf8"));
  assert.deepEqual(manifest.groupings, [
    { title: "Product", description: PRODUCT_DESCRIPTION, skills: ["running-experiments"] },
  ]);
  assert.match(
    readFileSync(join(root, "README.md"), "utf8"),
    /\| \[Lean Startup\]\(methods\/lean-startup\/METHOD\.md\) \| Product \| \*\*Eric Ries\*\*/,
  );

  // Two methods in different categories become two sections, each holding only
  // the skills of its own method.
  file(root, "methods/kanban/METHOD.md", "---\ncategory: Workflows\n---\n\n# Kanban\n\n> Created by **Taiichi Ohno**\n");
  file(
    root,
    "skills/limiting-wip/SKILL.md",
    skill("limiting-wip", { method: "kanban", category: "Workflows" }),
  );
  assert.equal(run().code, 0);
  const regenerated = JSON.parse(readFileSync(join(root, "skills.sh.json"), "utf8"));
  assert.deepEqual(regenerated.groupings, [
    { title: "Product", description: PRODUCT_DESCRIPTION, skills: ["running-experiments"] },
    { title: "Workflows", description: WORKFLOWS_DESCRIPTION, skills: ["limiting-wip"] },
  ]);

  // Two methods in the same category merge into one section, sorted by skill
  // name: scrum is read after kanban, so a missing sort shows here.
  file(root, "methods/scrum/METHOD.md", "---\ncategory: Workflows\n---\n\n# Scrum\n\n> Created by **Ken Schwaber**\n");
  file(
    root,
    "skills/a-sprint-review/SKILL.md",
    skill("a-sprint-review", { method: "scrum", category: "Workflows" }),
  );
  assert.equal(run().code, 0);
  const merged = JSON.parse(readFileSync(join(root, "skills.sh.json"), "utf8"));
  assert.deepEqual(merged.groupings, [
    { title: "Product", description: PRODUCT_DESCRIPTION, skills: ["running-experiments"] },
    {
      title: "Workflows",
      description: WORKFLOWS_DESCRIPTION,
      skills: ["a-sprint-review", "limiting-wip"],
    },
  ]);

  // Sections follow CATEGORY_DESCRIPTIONS order, which is the order skills.sh
  // renders them in — not alphabetical, where Development would come first.
  file(root, "methods/xp/METHOD.md", "---\ncategory: Development\n---\n\n# Extreme Programming\n\n> Created by **Kent Beck**\n");
  file(root, "skills/pairing/SKILL.md", skill("pairing", { method: "xp", category: "Development" }));
  assert.equal(run().code, 0);
  assert.deepEqual(
    JSON.parse(readFileSync(join(root, "skills.sh.json"), "utf8")).groupings.map(({ title }) => title),
    ["Product", "Development", "Workflows"],
  );
  // A skill whose category contradicts its method is refused, so the two can
  // never drift.
  file(
    root,
    "skills/limiting-wip/SKILL.md",
    skill("limiting-wip", { method: "kanban", category: "Product" }),
  );
  const mismatch = validate(root);
  assert.equal(mismatch.code, 1);
  assert.match(mismatch.output, /does not match method "kanban" \(Workflows\)/);
  file(
    root,
    "skills/limiting-wip/SKILL.md",
    skill("limiting-wip", { method: "kanban", category: "Workflows" }),
  );
  assert.equal(run().code, 0);

  file(root, "skills/naming-things/SKILL.md", skill("naming-things"));
  const stale = run("--check");
  assert.equal(stale.code, 1);
  assert.match(stale.output, /stale: skills\.sh\.json, README\.md/);
});

test("the title and the attribution survive CRLF endings, a padded fence and an intro line", () => {
  // Each fence style crossed with prose between the H1 and the attribution. A
  // strip that only removes "\n" leaves a stray line ahead of the body, which
  // spends two of the five attribution slots: with an intro line that is
  // enough for the attribution to read as missing, and both scripts then
  // reject a file that carries it.
  for (const eol of ["\n", "\r\n"]) {
    for (const closingFence of ["---", "--- "]) {
      for (const intro of [[], ["What it is.", ""]]) {
        const content = [
          "---",
          "category: Product",
          closingFence,
          "",
          "# Lean Startup: Build, Measure, Learn",
          "",
          ...intro,
          "> Created by **Eric Ries**",
          "",
        ].join(eol);
        const root = fixture((r) => file(r, "methods/lean-startup/METHOD.md", content));
        const validated = validate(root);
        assert.equal(validated.code, 0, validated.output);
        const generated = generate(root);
        assert.equal(generated.code, 0, generated.output);
        // The row, not just the exit code: a stray CR that survives into the
        // title or the credit publishes a malformed row with the generator
        // still exiting 0.
        assert.match(
          readFileSync(join(root, "README.md"), "utf8"),
          /\| \[Lean Startup\]\(methods\/lean-startup\/METHOD\.md\) \| Product \| \*\*Eric Ries\*\* \|/,
        );
      }
    }
  }
});

test("an indented line that looks like a heading does not become the method name", () => {
  // Stripping every leading whitespace character, rather than whole blank
  // lines, would pull this line's indentation off and publish it as the title.
  const root = fixture((r) =>
    file(
      r,
      "methods/lean-startup/METHOD.md",
      "---\ncategory: Product\n---\n\n    # Not the title\n\n# Lean Startup: Build, Measure, Learn\n\n> Created by **Eric Ries**\n",
    ),
  );
  const validated = validate(root);
  assert.equal(validated.code, 0, validated.output);
  assert.equal(generate(root).code, 0);
  assert.match(
    readFileSync(join(root, "README.md"), "utf8"),
    /\| \[Lean Startup\]\(methods\/lean-startup\/METHOD\.md\) \| Product \|/,
  );
});

test("the generator names the METHOD.md it cannot parse instead of dumping a stack trace", () => {
  const root = fixture((r) =>
    file(
      r,
      "methods/lean-startup/METHOD.md",
      '---\ncategory: "Product\n---\n\n# Lean Startup\n\n> Created by **Eric Ries**\n',
    ),
  );
  const { code, output } = generate(root);
  assert.equal(code, 1);
  assert.match(output, /methods\/lean-startup\/METHOD\.md: failed to parse frontmatter YAML/);
  assert.doesNotMatch(output, /node_modules/);
});

test("the generator names the SKILL.md it cannot parse instead of dumping a stack trace", () => {
  // Same standard as the METHOD.md above: both files reach the generator
  // through one parser, so neither can fail as an anonymous js-yaml throw.
  const root = fixture((r) =>
    file(
      r,
      "skills/running-experiments/SKILL.md",
      '---\nname: running-experiments\ndescription: "What it does\ncategory: "Product\nmetadata:\n  method: lean-startup\n---\nBody\n',
    ),
  );
  const { code, output } = generate(root);
  assert.equal(code, 1);
  assert.match(output, /skills\/running-experiments\/SKILL\.md: failed to parse frontmatter YAML/);
  assert.doesNotMatch(output, /node_modules/);
});
