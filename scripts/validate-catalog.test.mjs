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

const SKILL_BODY = "\nGuidance.\n\n*[Add it](https://tryhamster.com) to your workspace.*\n";

function skill(
  name,
  { description = "What it does and when to use it.", body = SKILL_BODY, method = "lean-startup" } = {},
) {
  const membership = method === null ? "" : `metadata:\n  method: ${method}\n`;
  return `---\nname: ${name}\ndescription: ${JSON.stringify(description)}\n${membership}---\n${body}`;
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

  file(root, "methods/lean-startup/METHOD.md", "# Lean Startup\n\n> Created by **Eric Ries** — [link](https://theleanstartup.com)\n");
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
    file(r, "skills/.experimental/naming-things/SKILL.md", skill("naming-things", { body: "\nNo backlink here.\n", method: null })),
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
    fixture((r) => file(r, "methods/kanban/METHOD.md", "# Kanban\n\n> Created by **Taiichi Ohno**\n")),
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
      file(r, "methods/lean-startup/METHOD.md", "# Lean Startup\n\n> Created by **Eric Ries**\n\n[x](../../skills/missing/SKILL.md)\n"),
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

test("every method must carry its attribution line", () => {
  rejects(
    fixture((r) => file(r, "methods/lean-startup/METHOD.md", "# Lean Startup\n\nNo attribution.\n")),
    /missing a "> Created by" attribution line/,
  );
  // The line has to be the blockquote, not the words appearing in prose.
  rejects(
    fixture((r) => file(r, "methods/lean-startup/METHOD.md", "# Lean Startup\n\nThis was Created by a practitioner.\n")),
    /missing a "> Created by" attribution line/,
  );
  // README promises it sits directly under the title, so a late one is not it.
  rejects(
    fixture((r) =>
      file(r, "methods/lean-startup/METHOD.md", `# Lean Startup\n${"\nprose\n".repeat(6)}\n> Created by **Eric Ries**\n`),
    ),
    /missing a "> Created by" attribution line/,
  );
  rejects(
    fixture((r) => mkdirSync(join(r, "methods/orphan"), { recursive: true })),
    /methods\/orphan: missing METHOD\.md/,
  );
});

test("every curated skill must close with a link back to Hamster", () => {
  rejects(
    fixture((r) => file(r, "skills/running-experiments/SKILL.md", skill("running-experiments", { body: "\nNo footer.\n" }))),
    /missing the closing link back to Hamster/,
  );
});

test("a body link to the site does not satisfy the closing backlink", () => {
  rejects(
    fixture((r) =>
      file(
        r,
        "skills/running-experiments/SKILL.md",
        skill("running-experiments", { body: "\nSee [the catalog](https://tryhamster.com/methods).\n" + "filler\n".repeat(10) }),
      ),
    ),
    /missing the closing link back to Hamster/,
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
      file(r, "methods/lean-startup/METHOD.md", "# Lean Startup\n");
      file(r, "skills/running-experiments/SKILL.md", skill("Wrong_Name", { body: "\nno footer\n" }));
    }),
  );
  assert.equal(code, 1);
  assert.match(output, /failed with 4 issue\(s\)/);
});

// The drift check is a CI gate with no failing example in the shipped
// repository, so it gets the same negative control as the validator rules.
test("the manifest drift check fails on stale generated files and passes once regenerated", () => {
  const root = fixture();
  const generator = join(root, "scripts/generate-catalog-manifest.mjs");
  const run = (...args) => {
    try {
      return { code: 0, output: execFileSync(process.execPath, [generator, ...args], { encoding: "utf8" }) };
    } catch (err) {
      return { code: err.status, output: `${err.stdout ?? ""}${err.stderr ?? ""}` };
    }
  };

  assert.equal(run("--check").code, 1, "nothing generated yet must read as stale");
  assert.equal(run().code, 0);
  assert.equal(run("--check").code, 0, "freshly generated files are up to date");

  const manifest = JSON.parse(readFileSync(join(root, "skills.sh.json"), "utf8"));
  assert.deepEqual(manifest.groupings, [
    { title: "Lean Startup", description: "", skills: ["running-experiments"] },
  ]);
  assert.match(readFileSync(join(root, "README.md"), "utf8"), /\| \[Lean Startup\]\(methods\/lean-startup\/METHOD\.md\) \| \*\*Eric Ries\*\*/);

  // Group descriptions are published copy: the subtitle wins, and the body
  // fallback must not stop at an initial.
  file(root, "methods/lean-startup/METHOD.md", "# Lean Startup: Build, Measure, Learn\n\n> Created by **Eric Ries**\n\nIn 2011, Eric E. Ries wrote it. More.\n");
  file(root, "methods/kanban/METHOD.md", "# Kanban\n\n> Created by **Taiichi Ohno**\n\nIn 1953, Taiichi E. Ohno started **Kanban** at Toyota. More.\n");
  file(root, "skills/limiting-wip/SKILL.md", skill("limiting-wip", { method: "kanban" }));
  assert.equal(run().code, 0);
  const regenerated = JSON.parse(readFileSync(join(root, "skills.sh.json"), "utf8"));
  assert.deepEqual(regenerated.groupings.map(({ title, description }) => ({ title, description })), [
    { title: "Kanban", description: "In 1953, Taiichi E. Ohno started Kanban at Toyota." },
    { title: "Lean Startup", description: "Build, Measure, Learn" },
  ]);

  file(root, "skills/naming-things/SKILL.md", skill("naming-things"));
  const stale = run("--check");
  assert.equal(stale.code, 1);
  assert.match(stale.output, /stale: skills\.sh\.json, README\.md/);
});
