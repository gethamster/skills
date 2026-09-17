#!/usr/bin/env node
// Generates the two derived views of the catalog from its source files:
// skills.sh.json (the grouping manifest skills.sh renders as sections) and the
// README catalog table. Membership comes from each skill's `metadata.method`,
// titles from each METHOD.md. `--check` fails on drift so the
// generated files can never disagree with the tree they describe.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { load as loadYaml } from "js-yaml";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const check = process.argv.includes("--check");

const MANIFEST_PATH = join(repoRoot, "skills.sh.json");
// The same six Studio groups skills carry as `category`, in the order the page
// shows them.
const CATEGORIES = ["Product", "Development", "Experience", "Marketing", "Ops", "Workflows"];
const CATEGORY_DESCRIPTIONS = {
  Product: "Discovery, prioritisation, roadmapping and the metrics a product is steered by.",
  Development: "Engineering practice and the methods for working alongside AI agents.",
  Experience: "Customer journeys, design process and measuring what people actually experience.",
  Marketing: "Positioning, pricing, search and the frameworks that take a product to market.",
  Ops: "How a team is organised, aligned and held to its objectives.",
  Workflows: "How the work itself runs: iterations, boards, ceremonies and retrospectives.",
};
const README_PATH = join(repoRoot, "README.md");
const CATALOG_START = "<!-- catalog:start -->";
const CATALOG_END = "<!-- catalog:end -->";

function subdirectories(dir) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function frontmatter(path) {
  const content = readFileSync(path, "utf8");
  const end = content.startsWith("---") ? content.indexOf("\n---", 3) : -1;
  const parsed = end === -1 ? null : loadYaml(content.slice(content.indexOf("\n") + 1, end));
  if (!parsed || typeof parsed !== "object") {
    console.error(`${relative(repoRoot, path)}: missing or malformed frontmatter — run npm run validate`);
    process.exit(1);
  }
  return parsed;
}

// A METHOD.md opens with frontmatter carrying its category, then the H1 the
// title is read from.
function splitFrontmatter(content) {
  if (!content.startsWith("---")) return { frontmatter: null, body: content };
  const end = content.indexOf("\n---", 3);
  if (end === -1) return { frontmatter: null, body: content };
  const parsed = loadYaml(content.slice(content.indexOf("\n") + 1, end));
  const body = content.slice(end + 4).replace(/^\n+/, "");
  return { frontmatter: parsed && typeof parsed === "object" ? parsed : null, body };
}

// The README table names each method by the part of its H1 before the first
// colon, and credits it from the "> Created by" line under that heading. The
// H1's subtitle used to double as a skills.sh group description; sections are
// per category now, and those carry their own copy.
function describeMethod(content) {
  const lines = content.split("\n");
  const heading = lines[0].replace(/^#\s+/, "").trim();
  const colon = heading.search(/:\s/);
  const title = colon === -1 ? heading : heading.slice(0, colon);
  const attribution = lines.slice(0, 5).find((line) => line.startsWith("> Created by ")) ?? "";
  const createdBy = attribution.replace(/^> Created by /, "").trim();
  return { title, createdBy };
}

const methods = new Map();
for (const slug of subdirectories(join(repoRoot, "methods"))) {
  const path = join(repoRoot, "methods", slug, "METHOD.md");
  const { frontmatter: methodFrontmatter, body } = splitFrontmatter(readFileSync(path, "utf8"));
  const category = methodFrontmatter?.category;
  if (!CATEGORIES.includes(category)) {
    console.error(`methods/${slug}/METHOD.md: category "${category}" must be one of ${CATEGORIES.join(", ")} — run npm run validate`);
    process.exit(1);
  }
  methods.set(slug, { slug, category, ...describeMethod(body), skills: [] });
}

for (const slug of subdirectories(join(repoRoot, "skills"))) {
  const fm = frontmatter(join(repoRoot, "skills", slug, "SKILL.md"));
  const method = methods.get(fm.metadata?.method);
  if (!method) {
    console.error(`skills/${slug}: metadata.method "${fm.metadata?.method}" is not a method`);
    process.exit(1);
  }
  method.skills.push(slug);
}

// The page shows one section per category, not per method. skills.sh uses at
// most 50 groupings and 500 skills in each, and a section per method hit the
// first limit at method 51. Categories are a fixed set of six, so the catalog
// can grow without the page silently dropping whatever came last.
const MAX_GROUP_SKILLS = 500;
for (const category of CATEGORIES) {
  const count = [...methods.values()]
    .filter((method) => method.category === category)
    .reduce((total, method) => total + method.skills.length, 0);
  if (count > MAX_GROUP_SKILLS) {
    console.error(`skills.sh.json allows at most ${MAX_GROUP_SKILLS} skills per grouping; ${category} has ${count}`);
    process.exit(1);
  }
}

const manifest = {
  $schema: "https://skills.sh/schemas/skills.sh.schema.json",
  notGrouped: "bottom",
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
