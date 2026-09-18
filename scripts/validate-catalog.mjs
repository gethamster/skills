#!/usr/bin/env node
// Validates the catalog: every methods/<method>/METHOD.md opens with a
// frontmatter block declaring one of the six categories and carries its
// `> Created by` attribution line, every skills/<skill>/SKILL.md carries the
// shared frontmatter contract, names the method it belongs to and repeats that
// method's category, and every method has at least one skill. Parsed with
// js-yaml rather than a line regex so quoted strings, block scalars, and
// comments survive.

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { basename, dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { load as loadYaml } from "js-yaml";

// Anchored to this file so the walks below find the catalog from any cwd.
const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_NAME_LENGTH = 64;
const MAX_DESCRIPTION_LENGTH = 1024;

// Optional. Almost every skill here is our own prose about a publicly
// documented method, which is safe to publish and needs no declaration, so
// omitting this field means publishable and adding a skill costs nothing.
//
// The field exists for the exception: material we may not distribute. Marking
// it `restricted` makes this validator refuse it, so a skill that belongs in
// the private catalog fails loudly instead of going public by being moved to
// the wrong directory.
//
//   licensed    third-party material we hold a grant for. Requires
//               metadata.license naming that grant.
//   restricted  no grant. Refused here.
const RIGHTS_VALUES = new Set(["original", "public-framework", "licensed", "restricted"]);
const PUBLISHABLE_RIGHTS = new Set(["original", "public-framework", "licensed"]);

// Experimental skills are exempt from the backlink and from method membership.
// Relative links are resolved because a directory rename is otherwise legal
// and would leave the tree cross-linked to paths that no longer exist.
const ATTRIBUTION_RE = /^> Created by /m;
const RELATIVE_LINK_RE = /\]\(((?:\.\.?\/)[^)#\s]+)(?:#[^)]*)?\)/g;

// The six groups Studio organises skills by. The skills.sh page shows one
// section per category rather than one per method, because that manifest takes
// at most 50 sections and the catalog sits at exactly 50 methods — method 51
// is the first one the page could not have taken. Studio reads `category` as a
// top-level frontmatter field, so a value that is not here cannot round-trip
// through a workspace.
const CATEGORIES = new Set([
  "Product",
  "Development",
  "Experience",
  "Marketing",
  "Ops",
  "Workflows",
]);

const methodsRoot = join(repoRoot, "methods");
const skillsRoot = join(repoRoot, "skills");
const EXPERIMENTAL = ".experimental";
const experimentalRoot = join(skillsRoot, EXPERIMENTAL);

const SKIP_DIRS = new Set(["node_modules", ".git"]);

const failures = [];
// skill name -> [paths]. Curated and experimental skills share one namespace:
// installers flatten both into a single skill directory.
const skillNames = new Map();
// method name -> { skills, category }. One record per method: the count is
// filled in as skills name it, the category as each METHOD.md is read.
const methods = new Map();
let skillCount = 0;

// Symlinks are rejected outright rather than followed: readFileSync resolves
// them, so a link is a way to pull content from outside the repository into a
// published skill, and Dirent never reports the link's target type.
function readEntries(dir) {
  if (!existsSync(dir)) return [];
  const entries = readdirSync(dir, { withFileTypes: true })
    .filter((entry) => !SKIP_DIRS.has(entry.name))
    .sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    if (entry.isSymbolicLink()) {
      failures.push(`${relative(repoRoot, join(dir, entry.name))}: symlinks are not allowed`);
    }
  }
  return entries.filter((entry) => !entry.isSymbolicLink());
}

function listSubdirectories(dir) {
  return readEntries(dir)
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function findSkillFiles(dir) {
  const results = [];
  for (const entry of readEntries(dir)) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findSkillFiles(fullPath));
    } else if (entry.isFile() && entry.name === "SKILL.md") {
      results.push(fullPath);
    }
  }
  return results;
}

function nonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function extractFrontmatterBlock(content) {
  if (!content.startsWith("---")) return null;
  const firstLineEnd = content.indexOf("\n");
  if (firstLineEnd === -1) return null;
  const closingIndex = content.indexOf("\n---", firstLineEnd);
  if (closingIndex === -1) return null;
  return content.slice(firstLineEnd + 1, closingIndex);
}

function validateSkill(filePath, { curated }) {
  const unitDir = dirname(filePath);
  const unitName = basename(unitDir);
  const relativePath = relative(repoRoot, unitDir);
  skillCount += 1;

  const content = readFileSync(filePath, "utf8");
  const block = extractFrontmatterBlock(content);
  if (block === null) {
    failures.push(`${relativePath}/SKILL.md: missing or malformed --- frontmatter block`);
    return;
  }

  let frontmatter;
  try {
    frontmatter = loadYaml(block);
  } catch (err) {
    failures.push(`${relativePath}/SKILL.md: failed to parse frontmatter YAML: ${err.message}`);
    return;
  }

  if (typeof frontmatter !== "object" || frontmatter === null || Array.isArray(frontmatter)) {
    failures.push(`${relativePath}/SKILL.md: frontmatter block did not parse to a YAML mapping`);
    return;
  }

  const { name, description, metadata } = frontmatter;
  if (name === undefined) {
    failures.push(`${relativePath}/SKILL.md: missing required "name" field`);
  } else if (typeof name !== "string" || name.length === 0) {
    failures.push(`${relativePath}/SKILL.md: "name" must be a non-empty string`);
  } else {
    if (name !== unitName) {
      failures.push(
        `${relativePath}/SKILL.md: name "${name}" does not match directory name "${unitName}"`,
      );
    }
    if (!NAME_RE.test(name)) {
      failures.push(
        `${relativePath}/SKILL.md: name "${name}" must match ${NAME_RE} (kebab-case)`,
      );
    }
    if (name.length > MAX_NAME_LENGTH) {
      failures.push(
        `${relativePath}/SKILL.md: name "${name}" exceeds ${MAX_NAME_LENGTH} characters`,
      );
    }

    if (!skillNames.has(name)) skillNames.set(name, []);
    skillNames.get(name).push(relativePath);
  }

  if (description === undefined) {
    failures.push(`${relativePath}/SKILL.md: missing required "description" field`);
  } else if (typeof description !== "string" || description.trim().length === 0) {
    failures.push(`${relativePath}/SKILL.md: "description" must be a non-empty string`);
  } else if (description.length > MAX_DESCRIPTION_LENGTH) {
    failures.push(
      `${relativePath}/SKILL.md: description exceeds ${MAX_DESCRIPTION_LENGTH} characters`,
    );
  }

  // Studio stores this on the skill and the library page groups by it, so a
  // curated skill carries the category of the method it belongs to. Presence
  // and membership of the enum are checked here; agreement with the method is
  // checked below, once metadata.method is known.
  const category = frontmatter.category;
  if (curated) {
    if (category === undefined) {
      failures.push(`${relativePath}/SKILL.md: missing "category" (curated skills carry their method's category)`);
    } else if (typeof category !== "string" || !CATEGORIES.has(category)) {
      failures.push(
        `${relativePath}/SKILL.md: category "${category}" must be one of ${[...CATEGORIES].join(", ")}`,
      );
    }
  } else if (category !== undefined && (typeof category !== "string" || !CATEGORIES.has(category))) {
    failures.push(
      `${relativePath}/SKILL.md: category "${category}" must be one of ${[...CATEGORIES].join(", ")}`,
    );
  }

  // Absent means publishable. Only a declared value is checked, and only
  // `restricted` blocks: this repository is public, so committing here
  // publishes, and material with no grant must not arrive by a move.
  const rights = metadata?.rights;
  if (rights !== undefined) {
    if (typeof rights !== "string" || !RIGHTS_VALUES.has(rights)) {
      failures.push(
        `${relativePath}/SKILL.md: metadata.rights "${rights}" must be one of ${[...RIGHTS_VALUES].join(", ")}`,
      );
    } else if (!PUBLISHABLE_RIGHTS.has(rights)) {
      failures.push(
        `${relativePath}/SKILL.md: metadata.rights "${rights}" cannot live in this repository. ` +
          `It is public, so committing here publishes it. Keep restricted material in the private catalog.`,
      );
    } else if (rights === "licensed" && !nonEmptyString(metadata?.license)) {
      failures.push(
        `${relativePath}/SKILL.md: metadata.rights "licensed" requires metadata.license naming the grant ` +
          `(an SPDX identifier such as CC-BY-4.0, or a short description of the permission held)`,
      );
    }
  }

  // Membership lives on the skill (metadata.method), so the grouping manifest
  // and README table can be generated from the tree instead of maintained.
  const method = metadata?.method;
  if (method !== undefined) {
    if (typeof method !== "string" || !methods.has(method)) {
      failures.push(
        `${relativePath}/SKILL.md: metadata.method "${method}" does not name a directory under methods/`,
      );
    } else {
      const record = methods.get(method);
      record.skills += 1;
      // The generator builds the skills.sh sections from the method's own
      // category, so a skill declaring a different one would land in a Studio
      // group the page never shows it in. Experimental skills may omit the
      // field, but not contradict their method.
      if (category !== undefined && record.category !== undefined && category !== record.category) {
        failures.push(
          `${relativePath}/SKILL.md: category "${category}" does not match method "${method}" (${record.category})`,
        );
      }
    }
  } else if (curated) {
    failures.push(`${relativePath}/SKILL.md: missing metadata.method (curated skills belong to a method)`);
  }

  if (curated && metadata?.homepage !== "https://tryhamster.com") {
    failures.push(`${relativePath}/SKILL.md: metadata.homepage must be "https://tryhamster.com"`);
  }

  checkRelativeLinks(filePath, content);
}

function checkRelativeLinks(filePath, content) {
  for (const [, target] of content.matchAll(RELATIVE_LINK_RE)) {
    if (!existsSync(join(dirname(filePath), target))) {
      failures.push(`${relative(repoRoot, filePath)}: link target "${target}" does not exist`);
    }
  }
}

// A missing catalog root is refused, not skipped.
if (!existsSync(methodsRoot)) {
  failures.push("methods/ is missing — refusing to validate a tree with no catalog");
}
if (!existsSync(skillsRoot)) {
  failures.push("skills/ is missing — refusing to validate a tree with no catalog");
}

for (const methodName of listSubdirectories(methodsRoot)) {
  const relativeMethod = join("methods", methodName);
  methods.set(methodName, { skills: 0, category: undefined });

  const methodFile = join(methodsRoot, methodName, "METHOD.md");
  if (!existsSync(methodFile)) {
    failures.push(`${relativeMethod}: missing METHOD.md`);
    continue;
  }
  const content = readFileSync(methodFile, "utf8");
  const methodBlock = extractFrontmatterBlock(content);
  let methodFrontmatter = null;
  let frontmatterParsed = true;
  if (methodBlock === null) {
    failures.push(`${relativeMethod}/METHOD.md: missing or malformed --- frontmatter block`);
  } else {
    try {
      methodFrontmatter = loadYaml(methodBlock);
    } catch (err) {
      frontmatterParsed = false;
      failures.push(`${relativeMethod}/METHOD.md: failed to parse frontmatter YAML: ${err.message}`);
    }
  }
  // Reported even when the block is missing, so a contributor learns the whole
  // contract in one run instead of a second round of knowable failures. A YAML
  // error is its own cause and says nothing about the category.
  const methodCategory = methodFrontmatter?.category;
  if (typeof methodCategory === "string" && CATEGORIES.has(methodCategory)) {
    methods.get(methodName).category = methodCategory;
  } else if (frontmatterParsed) {
    failures.push(
      methodCategory === undefined
        ? `${relativeMethod}/METHOD.md: missing "category" (one of ${[...CATEGORIES].join(", ")})`
        : `${relativeMethod}/METHOD.md: category "${methodCategory}" must be one of ${[...CATEGORIES].join(", ")}`,
    );
  }

  // Attribution must sit in the head, directly under the title. The leading
  // newlines after the fence are stripped, as the generator does, so both read
  // the same five lines of the body.
  const body = (methodBlock === null ? content : content.slice(content.indexOf("\n---", 3) + 4)).replace(/^\n+/, "");
  if (!ATTRIBUTION_RE.test(body.split("\n").slice(0, 5).join("\n"))) {
    failures.push(`${relativeMethod}/METHOD.md: missing a "> Created by" attribution line`);
  }
  checkRelativeLinks(methodFile, content);
}

// Lanes are enumerated by directory so a misnamed skill file fails instead of
// shipping nothing.
for (const skillName of listSubdirectories(skillsRoot)) {
  if (skillName === EXPERIMENTAL) continue;
  const filePath = join(skillsRoot, skillName, "SKILL.md");
  if (!existsSync(filePath)) {
    failures.push(`${join("skills", skillName)}: missing SKILL.md`);
    continue;
  }
  validateSkill(filePath, { curated: true });
}

for (const skillName of listSubdirectories(experimentalRoot)) {
  const filePath = join(experimentalRoot, skillName, "SKILL.md");
  if (!existsSync(filePath)) {
    failures.push(`${join("skills", EXPERIMENTAL, skillName)}: missing SKILL.md`);
    continue;
  }
  validateSkill(filePath, { curated: false });
}

for (const [methodName, { skills }] of methods) {
  if (skills === 0) {
    failures.push(`methods/${methodName}: no skill names it in metadata.method`);
  }
}

// Installers pick up a SKILL.md anywhere in the tree, so any off the two lanes
// is rejected.
for (const filePath of findSkillFiles(repoRoot)) {
  const parts = relative(repoRoot, filePath).split(sep);
  const canonicalCurated = parts.length === 3 && parts[0] === "skills" && parts[1] !== EXPERIMENTAL;
  const canonicalExperimental =
    parts.length === 4 && parts[0] === "skills" && parts[1] === EXPERIMENTAL;
  if (canonicalCurated || canonicalExperimental) continue;

  failures.push(
    parts[0] === "skills"
      ? `${relative(repoRoot, filePath)}: SKILL.md outside skills/<skill>/ or skills/${EXPERIMENTAL}/<skill>/`
      : `${relative(repoRoot, filePath)}: SKILL.md outside the catalog — installers would pick it up unvalidated`,
  );
}

if (skillCount === 0) {
  failures.push("catalog tree is empty: no skills found — refusing to pass an empty catalog");
}

for (const [name, paths] of skillNames) {
  if (paths.length > 1) {
    failures.push(`duplicate skill name "${name}" across: ${paths.join(", ")}`);
  }
}

if (failures.length > 0) {
  console.error(`Catalog validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(
  `Catalog validation passed: ${skillCount} skill(s) across ${methods.size} method(s).`,
);
