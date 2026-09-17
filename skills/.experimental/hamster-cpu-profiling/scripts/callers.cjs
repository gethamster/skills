#!/usr/bin/env node
// Show top CALLERS (parent frames) of a given native function in a CDP trace.
const fs = require('fs');
const path = process.argv[2];
const targetFn = process.argv[3] || 'setTimeout';
const raw = JSON.parse(fs.readFileSync(path, 'utf8'));

const nodeMap = new Map();
const parentOf = new Map();
const samples = [];
const timeDeltas = [];

function ingest(cp, tds) {
  for (const n of cp.nodes || []) {
    nodeMap.set(n.id, n);
    if (n.children) for (const c of n.children) parentOf.set(c, n.id);
    if (n.parent != null) parentOf.set(n.id, n.parent);
  }
  if (cp.samples) samples.push(...cp.samples);
  if (tds) timeDeltas.push(...tds);
}

if (raw.nodes) {
  ingest(raw, raw.timeDeltas);
} else if (raw.traceEvents) {
  for (const e of raw.traceEvents) {
    if ((e.name === 'Profile' || e.name === 'ProfileChunk') && e.args?.data) {
      const cp = e.args.data.cpuProfile || e.args.data;
      ingest(cp, e.args.data.timeDeltas);
    }
  }
}

function label(id) {
  const n = nodeMap.get(id);
  if (!n) return '???';
  const cf = n.callFrame || {};
  const url = (cf.url || '')
    .replace(/^https?:\/\/[^/]+/, '')
    .replace(/\?.*$/, '');
  const file = (url.match(/[^/]+$/) || [''])[0];
  const line = cf.lineNumber != null ? `:${cf.lineNumber + 1}` : '';
  return `${cf.functionName || '(anon)'} [${file}${line}]`;
}

// self-time per node
const selfById = new Map();
for (let i = 0; i < samples.length; i++) {
  const id = samples[i];
  selfById.set(id, (selfById.get(id) || 0) + (timeDeltas[i] || 0));
}

// find nodes whose fn == targetFn, attribute their self-time to immediate parent
const byCaller = new Map();
let totalUs = 0;
for (const [id, us] of selfById) {
  const n = nodeMap.get(id);
  if (!n) continue;
  if ((n.callFrame?.functionName || '') !== targetFn) continue;
  totalUs += us;
  const pid = parentOf.get(id);
  const key = pid != null ? label(pid) : '(no parent)';
  byCaller.set(key, (byCaller.get(key) || 0) + us);
}

const sorted = [...byCaller.entries()].sort((a, b) => b[1] - a[1]);
console.log(
  `Callers of '${targetFn}'  (total self ${(totalUs / 1000).toFixed(1)} ms)`,
);
console.log('—'.repeat(70));
for (const [k, us] of sorted.slice(0, 15)) {
  console.log(`${(us / 1000).toFixed(1).padStart(8)} ms   ${k}`);
}
