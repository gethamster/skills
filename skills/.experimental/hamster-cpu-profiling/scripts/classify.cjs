#!/usr/bin/env node
// Classify CPU self-time into: app-JS (real prod), native-timer (agentation-inflated),
// dev-only (react logComponent*), other.
const fs = require('fs');
const raw = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));

const nodeMap = new Map();
const samples = [];
const timeDeltas = [];
for (const e of raw.traceEvents || []) {
  if ((e.name === 'Profile' || e.name === 'ProfileChunk') && e.args?.data) {
    const cp = e.args.data.cpuProfile || e.args.data;
    for (const n of cp.nodes || []) nodeMap.set(n.id, n);
    if (cp.samples) samples.push(...cp.samples);
    if (e.args.data.timeDeltas) timeDeltas.push(...e.args.data.timeDeltas);
  }
}

const DEV = new Set([
  'logComponentRender',
  'logComponentEffect',
  'logCommitPhase',
  'logComponentTrigger',
  'measure',
  'run',
]);
const TIMER = new Set([
  'setTimeout',
  'clearTimeout',
  'setInterval',
  'clearInterval',
  'requestAnimationFrame',
]);
const SKIP = new Set([
  '(idle)',
  '(program)',
  '(garbage collector)',
  '(root)',
  '(parser)',
]);

const buckets = { app: new Map(), timer: 0, dev: 0, agentation: 0, other: 0 };
let total = 0;
const selfById = new Map();
for (let i = 0; i < samples.length; i++)
  selfById.set(
    samples[i],
    (selfById.get(samples[i]) || 0) + (timeDeltas[i] || 0),
  );

for (const [id, us] of selfById) {
  const n = nodeMap.get(id);
  if (!n) continue;
  const cf = n.callFrame || {};
  const fn = cf.functionName || '';
  const url = cf.url || '';
  if (SKIP.has(fn)) continue;
  total += us;
  if (url.includes('agentation')) {
    buckets.agentation += us;
    continue;
  }
  if (DEV.has(fn)) {
    buckets.dev += us;
    continue;
  }
  if (TIMER.has(fn) && !url) {
    buckets.timer += us;
    continue;
  }
  if (!url) {
    buckets.other += us;
    continue;
  }
  // app/library JS
  const short = url.replace(/^https?:\/\/[^/]+/, '').replace(/\?.*$/, '');
  const file = (short.match(/[^/]+$/) || [''])[0];
  const line = cf.lineNumber != null ? `:${cf.lineNumber + 1}` : '';
  const label = `${fn || '(anon)'} [${file}${line}]`;
  buckets.app.set(label, (buckets.app.get(label) || 0) + us);
}

const ms = (u) => (u / 1000).toFixed(1);
console.log(`TOTAL self-time: ${ms(total)} ms`);
console.log(`  agentation (artifact): ${ms(buckets.agentation)} ms`);
console.log(`  native timers (inflated): ${ms(buckets.timer)} ms`);
console.log(`  react dev logging (not prod): ${ms(buckets.dev)} ms`);
console.log(`  other native: ${ms(buckets.other)} ms`);
const appTotal = [...buckets.app.values()].reduce((a, b) => a + b, 0);
console.log(`  APP/LIBRARY JS (real prod): ${ms(appTotal)} ms`);
console.log('—'.repeat(70));
console.log('Top APP/LIBRARY JS frames (prod-relevant):');
const sorted = [...buckets.app.entries()].sort((a, b) => b[1] - a[1]);
for (const [label, us] of sorted.slice(0, 30)) {
  console.log(`${ms(us).padStart(8)} ms   ${label}`);
}
