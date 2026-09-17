// Force the stash COLD-RESOLVE worst case (the post-deploy cache bust): delete
// every per-entity blob from IndexedDB while KEEPING the collection id-lists, so
// on reload the id-list restores but its rows must be re-resolved from scratch.
//
// SAFETY: this DELETES local browser data. It is a LOCAL-DEV repro tool only and
// self-guards against running on any non-localhost origin (see `LOCAL_HOSTS`).
// Never point it at a production/staging origin — it mutates real users' cache.
//
// Usage: paste the body into `agent-browser --session-name <name> eval "<this>"`.
// Then wait ~35s (realtime tier staleTime is 30s) before reloading, so the stale
// id-list actually triggers a refetch.
//
// Tune `KEEP` to the collection list namespaces you want to preserve, and `DROP`
// to the entity namespaces you want to evict (queryKey[1] of the stash key).
(async function bustStashEntities() {
  const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '[::1]']);
  if (!LOCAL_HOSTS.has(location.hostname)) {
    return JSON.stringify({
      aborted: 'refusing to delete IndexedDB on a non-localhost origin',
      hostname: location.hostname,
    });
  }

  const KEEP = ['brief-list', 'account-members', 'account-tags']; // id-lists to keep
  const DROP = ['brief']; // entity namespaces to evict

  const openDB = (name) =>
    new Promise((res, rej) => {
      const r = indexedDB.open(name);
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });

  const db = await openDB('keyval-store');
  const store = db.transaction('keyval', 'readwrite').objectStore('keyval');
  const keys = await new Promise((res) => {
    const r = store.getAllKeys();
    r.onsuccess = () => res(r.result);
  });
  const vals = await new Promise((res) => {
    const r = store.getAll();
    r.onsuccess = () => res(r.result);
  });

  let dropped = 0;
  let kept = 0;
  for (let i = 0; i < keys.length; i++) {
    let ns = null;
    try {
      const parsed =
        typeof vals[i] === 'string' ? JSON.parse(vals[i]) : vals[i];
      const qk = parsed?.queryKey ?? parsed?.state?.queryKey;
      ns = Array.isArray(qk) ? String(qk[1]) : null;
    } catch {
      // fall through to key-string sniffing
    }
    const keyStr = String(keys[i]);
    const isDrop = DROP.some((d) => ns === d || keyStr.includes(`"${d}"`));
    const isKeep = KEEP.some((k) => ns === k || keyStr.includes(`"${k}"`));
    if (isDrop && !isKeep) {
      store.delete(keys[i]);
      dropped += 1;
    } else {
      kept += 1;
    }
  }
  return JSON.stringify({ dropped, kept, total: keys.length });
})();
