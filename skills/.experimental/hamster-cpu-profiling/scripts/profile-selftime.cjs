#!/usr/bin/env node
// Aggregate CPU-sample self-time by function from a CDP profile.
// Handles both .cpuprofile (Profiler.Profile) and DevTools trace (Profile/ProfileChunk).
const fs = require('fs');
const path = process.argv[2];
const raw = JSON.parse(fs.readFileSync(path, 'utf8'));

const SKIP = new Set(['(idle)', '(program)', '(garbage collector)', '(root)']);

function frameLabel(cf) {
  let name = cf.functionName || '(anonymous)';
  let url = cf.url || '';
  // shorten url
  let short = url.replace(/^https?:\/\/[^/]+/, '').replace(/\?.*$/, '');
  const m = short.match(/[^/]+$/);
  const file = m ? m[0] : short;
  const line = cf.lineNumber != null ? `:${cf.lineNumber + 1}` : '';
  return `${name}  [${file}${line}]`;
}

// Collect nodes + samples + timeDeltas from either format
let nodes = [];
let samples = [];
let timeDeltas = [];

if (raw.nodes && raw.samples) {
  // .cpuprofile
  nodes = raw.nodes;
  samples = raw.samples;
  timeDeltas = raw.timeDeltas || [];
} else if (raw.traceEvents) {
  // DevTools trace: stitch ProfileChunk events
  const nodeMap = new Map();
  for (const e of raw.traceEvents) {
    if (
      e.name === 'Profile' &&
      e.args &&
      e.args.data &&
      e.args.data.cpuProfile
    ) {
      const cp = e.args.data.cpuProfile;
      (cp.nodes || []).forEach((n) => nodeMap.set(n.id, n));
      samples.push(...(cp.samples || []));
      timeDeltas.push(...(e.args.data.timeDeltas || cp.timeDeltas || []));
    }
    if (e.name === 'ProfileChunk' && e.args && e.args.data) {
      const cp = e.args.data.cpuProfile || {};
      (cp.nodes || []).forEach((n) => nodeMap.set(n.id, n));
      samples.push(...(cp.samples || []));
      timeDeltas.push(...(e.args.data.timeDeltas || []));
    }
  }
  nodes = [...nodeMap.values()];
}

const byId = new Map();
for (const n of nodes) byId.set(n.id, n);

// self-time per node id (sum timeDeltas of samples landing on it)
const selfById = new Map();
const hitById = new Map();
for (let i = 0; i < samples.length; i++) {
  const id = samples[i];
  const dt = timeDeltas[i] || 0;
  selfById.set(id, (selfById.get(id) || 0) + dt);
  hitById.set(id, (hitById.get(id) || 0) + 1);
}

// aggregate by function label
const agg = new Map();
let total = 0;
for (const [id, us] of selfById) {
  const n = byId.get(id);
  if (!n) continue;
  const cf = n.callFrame || {};
  const fn = cf.functionName || '';
  if (SKIP.has(fn)) continue;
  const url = cf.url || '';
  if (url.includes('agentation') || fn.includes('agentation')) continue;
  const label = frameLabel(cf);
  const cur = agg.get(label) || { us: 0, hits: 0 };
  cur.us += us;
  cur.hits += hitById.get(id) || 0;
  agg.set(label, cur);
  total += us;
}

const sorted = [...agg.entries()].sort((a, b) => b[1].us - a[1].us);
console.log(
  `Total attributed self-time: ${(total / 1000).toFixed(1)} ms  (samples: ${samples.length})`,
);
console.log('—'.repeat(80));
console.log('  self(ms)   %    hits   function');
for (const [label, v] of sorted.slice(0, 35)) {
  const ms = v.us / 1000;
  const pct = total ? (v.us / total) * 100 : 0;
  console.log(
    `${ms.toFixed(1).padStart(9)}  ${pct.toFixed(1).padStart(4)}  ${String(v.hits).padStart(6)}   ${label}`,
  );
}
