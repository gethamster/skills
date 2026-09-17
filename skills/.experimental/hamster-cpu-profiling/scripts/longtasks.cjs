#!/usr/bin/env node
// Extract longest main-thread tasks from a DevTools trace.
const fs = require('fs');
const raw = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const evs = raw.traceEvents || [];

// Find the renderer main thread: the thread with the most RunTask events.
const taskCountByTid = new Map();
for (const e of evs) {
  if (e.name === 'RunTask' && e.ph === 'X') {
    const k = `${e.pid}/${e.tid}`;
    taskCountByTid.set(k, (taskCountByTid.get(k) || 0) + 1);
  }
}
const mainTid = [...taskCountByTid.entries()].sort(
  (a, b) => b[1] - a[1],
)[0]?.[0];

const tasks = [];
let busy = 0;
for (const e of evs) {
  if (e.name === 'RunTask' && e.ph === 'X' && `${e.pid}/${e.tid}` === mainTid) {
    tasks.push({ dur: e.dur / 1000, ts: e.ts });
    busy += e.dur / 1000;
  }
}
tasks.sort((a, b) => b.dur - a.dur);
const total = tasks.length;
const over50 = tasks.filter((t) => t.dur > 50).length;
const over200 = tasks.filter((t) => t.dur > 200).length;
console.log(
  `Main thread ${mainTid}: ${total} tasks, busy ${busy.toFixed(0)} ms`,
);
console.log(`Long tasks >50ms: ${over50}   >200ms: ${over200}`);
console.log('Top 12 task durations (ms):');
for (const t of tasks.slice(0, 12)) console.log(`  ${t.dur.toFixed(1)}`);
