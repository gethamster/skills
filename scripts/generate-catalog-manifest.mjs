#!/usr/bin/env node
// Generates the two derived views of the catalog from its source files:
// skills.sh.json (the grouping manifest skills.sh renders as sections) and the
// README catalog table. Sections are one per category: their titles and copy
// are the constants below, each method declares which one it belongs to in its
// METHOD.md frontmatter, and membership comes from each skill's
// `metadata.method`. The README table takes a method's title and attribution
// from its METHOD.md. `--check` fails on drift so the generated files can
// never disagree with the tree they describe.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { load as loadYaml } from "js-yaml";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");

const MANIFEST_PATH = join(repoRoot, "skills.sh.json");
// The six categories Studio groups skills by (SKILL_CATEGORIES in Studio's
// shared package). A seventh has to be added here, in validate-catalog.mjs,
// and in the two lists in CONTRIBUTING.md; only the scripts are gated. Key
// order is the section order skills.sh renders, which Object.keys preserves.
// The copy lives here because Studio has no per-category description.
const CATEGORY_DESCRIPTIONS = {
  Product: "Discovery, prioritization, roadmapping and the metrics a product is steered by.",
  Development: "Engineering practice and the methods for working alongside AI agents.",
  Experience: "Customer journeys, design process and measuring what people actually experience.",
  Marketing: "Positioning, pricing, search and the frameworks that take a product to market.",
  Ops: "How a team is organized, aligned and held to its objectives.",
  Workflows: "How the work itself runs: iterations, boards, ceremonies and retrospectives.",
};
const CATEGORIES = Object.keys(CATEGORY_DESCRIPTIONS);
const README_PATH = join(repoRoot, "README.md");
const CATALOG_START = "<!-- catalog:start -->";
const CATALOG_END = "<!-- catalog:end -->";

function subdirectories(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

// Exits on the first problem rather than collecting them: the validator runs
// first in npm run validate and reports its own rules all at once, so what
// lands here is either a check stricter than the validator's (an empty title
// or credit) or one it has no rule for (the per-grouping cap).
function fail(message) {
  console.error(`${message} — run npm run validate`);
  process.exit(1);
}

// Quoted for the message: a list interpolates to a bare name the enum appears
// to contain. A self-referential anchor cannot be serialized, so it falls back
// rather than throwing where a named failure is the whole point.
function quoted(value) {
  try {
    return JSON.stringify(value) ?? String(value);
  } catch {
    return String(value);
  }
}

// Splits the frontmatter of a METHOD.md or a SKILL.md from its body. Only
// whitespace-only lines after the closing fence are stripped: a CRLF file or a
// fence written `--- ` leaves one, and it would otherwise spend a slot of the
// attribution window. The indentation of the first content line stays, so a
// body opening with an indented `# ` cannot be read as the title.
function splitFrontmatter(path) {
  const content = readFileSync(path, "utf8");
  const end = content.startsWith("---") ? content.indexOf("\n---", 3) : -1;
  if (end === -1) return { frontmatter: null, body: content };
  let parsed;
  try {
    parsed = loadYaml(content.slice(content.indexOf("\n") + 1, end));
  } catch (err) {
    fail(`${relative(repoRoot, path)}: failed to parse frontmatter YAML: ${err.message}`);
  }
  const body = content.slice(end + 4).replace(/^(?:[ \t\r]*\n)+/, "");
  return {
    frontmatter: parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null,
    body,
  };
}

function frontmatter(path) {
  const { frontmatter: parsed } = splitFrontmatter(path);
  if (!parsed) fail(`${relative(repoRoot, path)}: missing or malformed frontmatter`);
  return parsed;
}

// The README table names each method by the part of its H1 before the first
// colon, and credits it from the "> Created by" line under that heading.
function describeMethod(path, content) {
  const lines = content.split("\n");
  // The H1 is searched for rather than indexed so a stray line ahead of it
  // cannot become the title. Neither value may fall back to empty: that
  // publishes a README row with no method name or no credit, and --check
  // compares the committed file against the same empty output, so the drift
  // gate cannot notice. The validator rejects a missing H1 and a missing
  // attribution line; an empty pre-colon title or an empty credit fails here.
  const heading = lines.find((line) => line.startsWith("# ")) ?? "";
  const title = heading.replace(/^#\s+/, "").trim().split(/:\s/)[0];
  if (!title) fail(`${relative(repoRoot, path)}: missing the "# " H1 the catalog table names the method from`);
  const attribution = lines.slice(0, 5).find((line) => line.startsWith("> Created by ")) ?? "";
  const createdBy = attribution.replace(/^> Created by /, "").trim();
  if (!createdBy) fail(`${relative(repoRoot, path)}: missing a "> Created by" attribution line under the title`);
  return { title, createdBy };
}

const methods = new Map();
for (const slug of subdirectories(join(repoRoot, "methods"))) {
  const path = join(repoRoot, "methods", slug, "METHOD.md");
  const { frontmatter: methodFrontmatter, body } = splitFrontmatter(path);
  if (!methodFrontmatter) fail(`methods/${slug}/METHOD.md: missing or malformed --- frontmatter block`);
  const category = methodFrontmatter.category;
  if (!CATEGORIES.includes(category)) {
    fail(`methods/${slug}/METHOD.md: category ${quoted(category)} must be one of ${CATEGORIES.join(", ")}`);
  }
  methods.set(slug, { slug, category, ...describeMethod(path, body), skills: [] });
}

for (const slug of subdirectories(join(repoRoot, "skills"))) {
  const path = join(repoRoot, "skills", slug, "SKILL.md");
  const fm = frontmatter(path);
  const method = methods.get(fm.metadata?.method);
  if (!method) {
    fail(`skills/${slug}/SKILL.md: metadata.method ${quoted(fm.metadata?.method)} is not a method`);
  }
  // Sections are built from the method's category, so a skill claiming another
  // one would sit in a skills.sh section Studio does not file it under.
  if (fm.category !== method.category) {
    fail(
      `skills/${slug}/SKILL.md: category ${quoted(fm.category)} does not match method "${method.slug}" (${method.category})`,
    );
  }
  method.skills.push(slug);
}

// The page shows one section per category, not per method. The skills.sh
// schema caps groupings at 50 and skills per grouping at 500, and one section
// per method would exceed the grouping cap the moment a 51st method lands.
// Nothing here validates the manifest against its own $schema, so --check
// would still pass. Six fixed categories keep the catalog clear of that cap,
// so only the per-grouping count still needs a check.
const MAX_GROUP_SKILLS = 500;
for (const category of CATEGORIES) {
  const count = [...methods.values()]
    .filter((method) => method.category === category)
    .reduce((total, method) => total + method.skills.length, 0);
  if (count > MAX_GROUP_SKILLS) {
    fail(`skills.sh.json allows at most ${MAX_GROUP_SKILLS} skills per grouping; ${category} has ${count}`);
  }
}

const manifest = {
  $schema: "https://skills.sh/schemas/skills.sh.schema.json",
  notGrouped: "bottom",
  // An empty grouping fails the schema (skills has minItems 1), so a category
  // no method belongs to yet is left out rather than published bare.
  groupings: CATEGORIES.map((category) => {
    const inCategory = [...methods.values()].filter((method) => method.category === category);
    return {
      title: category,
      description: CATEGORY_DESCRIPTIONS[category],
      skills: inCategory.flatMap((method) => method.skills).sort((a, b) => a.localeCompare(b)),
    };
  }).filter((grouping) => grouping.skills.length > 0),
};
const manifestText = `${JSON.stringify(manifest, null, 2)}\n`;

const rows = [...methods.values()].map(
  ({ slug, title, category, createdBy, skills }) =>
    `| [${title}](methods/${slug}/METHOD.md) | ${category} | ${createdBy} | ${skills
      .map((skill) => `[\`${skill}\`](skills/${skill})`)
      .join(", ")} |`,
);
const table = [
  CATALOG_START,
  `${methods.size} methods, ${[...methods.values()].reduce((n, m) => n + m.skills.length, 0)} skills. Generated by \`scripts/generate-catalog-manifest.mjs\`; edit the source files, not this table.`,
  "",
  "| Method | Category | Created by | Skills |",
  "|---|---|---|---|",
  ...rows,
  CATALOG_END,
].join("\n");

const readme = readFileSync(README_PATH, "utf8");
const start = readme.indexOf(CATALOG_START);
const end = readme.indexOf(CATALOG_END);
if (start === -1 || end === -1) {
  console.error(`README.md is missing the ${CATALOG_START} / ${CATALOG_END} markers`);
  process.exit(1);
}
const readmeText = readme.slice(0, start) + table + readme.slice(end + CATALOG_END.length);

const outputs = [
  [MANIFEST_PATH, manifestText, "skills.sh.json"],
  [README_PATH, readmeText, "README.md"],
];

if (check) {
  const stale = outputs.filter(([path, text]) => {
    try {
      return readFileSync(path, "utf8") !== text;
    } catch {
      return true;
    }
  });
  if (stale.length > 0) {
    console.error(
      `Generated files are stale: ${stale.map(([, , name]) => name).join(", ")}. Run node scripts/generate-catalog-manifest.mjs and commit the result.`,
    );
    process.exit(1);
  }
  console.log("Generated files are up to date.");
} else {
  for (const [path, text] of outputs) writeFileSync(path, text);
  console.log(
    `Wrote skills.sh.json (${manifest.groupings.length} groupings over ${methods.size} methods) and the README catalog table.`,
  );
}
