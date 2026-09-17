# Full-content seed (canonical demo doc)

One **provider-neutral** ProseMirror document that exercises every node and mark
type the Hamster editor supports. Use it to seed the demo brief on Linear, Jira,
and Confluence so cross-provider round-trip testing compares identical content.

- **Canonical data:** [`full-content-seed.json`](full-content-seed.json) — the
  single source of truth. Edit that file, not copies pasted elsewhere.
- **What it covers:** h1–h4 headings; all 10 marks (bold, italic, underline,
  strike, code, link, subscript, superscript, highlight `#ffec99`, textStyle
  `#e8590c`); left/center/right paragraph alignment; mention (`@creator`, a
  symbolic non-resolving id — structural only), emoji (`:rocket:`), inline +
  block math; bullet list with a **nested** bullet list; ordered list with
  `start: 3`; task list (checked + unchecked); blockquote; code block
  (`typescript`); a table with a header row (cell `nodeTextAlign`), a
  background-colored cell (`#d3f9d8`), and a `colspan: 2` cell; an image
  (`placehold.co` URL); a hard break; a horizontal rule; and a **Special**
  **characters & Unicode** section (below).
- **Special characters covered:** the HTML-escape trio (`<` `>` `&`) plus bare
  apostrophes/quotes (which must stay literal, not become `'`/`"`);
  typographic punctuation (curly quotes, en/em dashes, ellipsis, primes) and
  symbols (© ® ™ § ¶ † ‡ • …); math (± × ÷ ≈ ≠ ≤ ≥ ∑ ∫ π ∞ …) and world
  currencies ($ £ € ¥ ₹ ₽ ₩ ₪ ₦ ฿ …); Latin diacritics and Greek/Cyrillic/CJK/
  Arabic/Hebrew/Indic/Thai scripts; basic and **composite** emoji (skin-tone,
  ZWJ family, flags, keycaps — though the editor strips the composite forms on
  entry, see the caveat under "Verify the round-trip"); and astral-plane
  non-emoji (𝐇𝐚𝐦, 𝔸𝔹ℂ, 𝄞, CJK Ext-B). The same characters also appear **inside inline code, inside a link**
  **`href` (with `&` query separators), and inside a code block** — the contexts
  where escaping behaves differently and round-trip bugs hide.

> **Canonical machine-checked list:** the exhaustive per-category set is
> `SPECIAL_CHARACTER_SAMPLES` in
> `packages/shared/src/documents/conversion/special-characters.ts`, exercised by
> automated round-trip tests (`special-characters.test.ts` in `@kit/shared` and
> `asana-special-characters.spec.ts` in `apps/sync`). This seed doc mirrors that
> set for **live** cross-provider testing; keep the two in sync when adding a
> character family.

> The mention uses a **synthetic Hamster UUID** (`00000000-0000-4000-8000-…`)
> with label `creator` deliberately — it is **not** a real, mapped user. Because
> the id is UUID-shaped (i.e. unresolved to a provider account-id), the outbound
> converters degrade it to readable `@creator` **text** on every provider while
> the **local** mention atom survives (the inbound rich-body merge re-anchors it).
> That is the correct round-trip for an unmapped mention. Do **not** use a
> non-UUID placeholder id like `"creator"` — the degrade gate is UUID-shape based,
> so a bare word slips through as a bogus provider chip (Jira renders it
> "@Unlicensed user"; Confluence emits a dangling `ri:user`). To test real
> mention **resolution** (a first-class pill), swap in a Hamster user UUID that
> has a mapped `sync_user_mappings` row for the connection (see
> [content-validation.md](content-validation.md) → "Fixing unmapped mentions").

## How to seed a brief

The brief editor is a Yjs-collaborative Tiptap instance. The `.ProseMirror` DOM
node carries no React fiber and the editor only mounts on interaction, so the
reliable path is: open the brief, then run a console snippet that walks the React
fiber tree to the editor instance and calls `setContent`. Writing through the
editor (not the DB) is what enqueues the outbound sync.

1. Open the brief in a **fresh tab** at
  `http://localhost:8080/home/hamster/briefs/<briefId>` (a fresh tab avoids a
  stale/overlaid editor mount).
2. Paste the contents of `full-content-seed.json` as `SEED` into the snippet
  below, then run it in the DevTools console:

```js
const SEED = /* paste full-content-seed.json here */;

(() => {
  const pm = document.querySelector('.ProseMirror');
  if (!pm) throw new Error('Editor not mounted — click into the doc first');
  // 1. find the nearest DOM ancestor that carries a React fiber
  let el = pm, fk = null, host = null;
  for (let i = 0; i < 8 && el; i++) {
    const k = Object.keys(el).find((k) => k.startsWith('__reactFiber$'));
    if (k) { fk = k; host = el; break; }
    el = el.parentElement;
  }
  if (!host) throw new Error('No React fiber host found');
  // 2. DFS the fiber tree for the Tiptap editor instance
  const seen = new Set();
  let ed = null;
  const isEd = (o) =>
    o && typeof o === 'object' && o.commands &&
    typeof o.commands.setContent === 'function' &&
    typeof o.getJSON === 'function' && o.schema && o.state;
  const scan = (v) => {
    if (ed || !v || typeof v !== 'object' || seen.has(v)) return;
    seen.add(v);
    if (isEd(v)) ed = v;
  };
  const walk = (f, d) => {
    if (ed || !f || d > 40) return;
    const mp = f.memoizedProps;
    if (mp && typeof mp === 'object') for (const k of Object.keys(mp)) { scan(mp[k]); if (ed) return; }
    let h = f.memoizedState, c = 0;
    while (h && typeof h === 'object' && c < 60) {
      scan(h.memoizedState);
      if (h.memoizedState && typeof h.memoizedState === 'object') scan(h.memoizedState.current);
      if (ed) return;
      h = h.next; c++;
    }
    walk(f.child, d + 1); walk(f.sibling, d + 1);
  };
  let fiber = host[fk], root = fiber, up = 0;
  while (root.return && up < 60) { root = root.return; up++; }
  walk(root, 0);
  if (!ed) throw new Error('Editor instance not found in fiber tree');
  // 3. replace the whole doc (wipe + reseed) and emit the update so Yjs syncs
  ed.commands.focus();
  ed.commands.setContent(SEED, { emitUpdate: true });
  return ed.getJSON().content.map((n) => n.type === 'heading' ? `h${n.attrs.level}` : n.type);
})();
```

3. The Yjs state persists after a short debounce (~1–2 s), then `DocumentPolling`
  detects the change and enqueues an outbound. Confirm via SQL (replace the doc id):

```sql
select octet_length(yjs_state), yjs_updated_at
from document where id = '<documentId>';
```

## Verify the round-trip

After seeding, watch one round-trip in `sync_logs` (see
[sql-queries.md](sql-queries.md)). The healthy signal is **outbound: success**
followed by **inbound: skipped** — the provider's flattened echo merged to no net
change (the round-trip converges). Then re-read the editor and confirm the local
doc kept everything markdown/the provider can't carry:

```js
// re-run the fiber-walk above to get `ed`, then:
const j = ed.getJSON();
const para = j.content.find((n) => n.type === 'paragraph' && (n.content||[]).some((t) => t.marks?.length));
({
  link: (para.content||[]).filter((t)=>(t.marks||[]).some((m)=>m.type==='link')).map((t)=>t.text), // ['a link']
  marks: [...new Set((para.content||[]).flatMap((t)=>(t.marks||[]).map((m)=>m.type)))].sort(),       // all 10
  gridWidths: (j.content.find((n)=>n.type==='table').content||[]).map((r)=>(r.content||[]).reduce((s,c)=>s+(c.attrs.colspan||1),0)), // [2,2,2]
});
```

Then confirm the **special characters** survived the round-trip verbatim — this
is where over-escaping (`'`), mojibake, or split surrogate pairs surface:

```js
// re-run the fiber-walk above to get `ed`, then:
const text = ed.getJSON().content
  .flatMap((b) => (b.content || []).filter((t) => t.type === 'text').map((t) => t.text))
  .join(' ');
({
  // Apostrophes/quotes must be the real glyphs, NOT numeric entity refs.
  noEntityLeak: !/'|"|&#/.test(text),   // true
  htmlTrio: /a < b && c > 0/.test(text),             // true — <, >, & survived
  simpleEmoji: text.includes('🚀'),                  // true — single-codepoint emoji
  skinToneEmoji: text.includes('👍🏽'),               // true — modifier survives
  astral: text.includes('𝐇𝐚𝐦') && text.includes('𠀀'),        // true — surrogate pairs intact
  scripts: ['日本語','مرحبا','שלום','नमस्ते'].every((s) => text.includes(s)), // true
});
```

Any `false` here is a real bug: the provider (or a converter on our side)
corrupted a character. Cross-check against the provider's native payload — a
mismatch there localizes the loss to the wire vs. our merge.

> **Editor caveat — composite emoji are stripped on entry.** The tiptap editor
> sanitizes zero-width joiners (U+200D), regional-indicator flags, and keycap
> sequences when content is typed or `setContent`'d, so a ZWJ family
> (`👨‍👩‍👧‍👦`), a flag (`🇺🇸`), the rainbow flag, and a keycap (`1️⃣`) **never**
> **land in a doc via the editor** — they vanish at seed time, before any sync.
> Don't assert those survive a live round-trip; they'll read as a false failure.
> Single-codepoint emoji and skin-tone modifiers (`👍🏽`) are fine. The composite
> forms are still pinned by the automated **converter** tests
> (`SPECIAL_CHARACTER_SAMPLES`), which guard the inbound path where a provider
> body carries them straight into Yjs without the editor's sanitizer.

## Expected per-provider rendering (the wire ceiling)

The local Hamster doc must stay **fully intact** on every provider (the merge
engine re-overlays anything the wire can't carry). What the *provider* renders
differs because each wire format has a different ceiling:

| Element | Linear (project = markdown only) | Jira issue (`descriptionData` ADF) | Confluence (storage XHTML) |
| --- | --- | --- | --- |
| bold / italic / strike / code / link | ✅ | ✅ | ✅ |
| underline | ❌ flat text | ✅ | ✅ |
| subscript / superscript | ❌ flat | ✅ (subsup) | ✅ (`<sub>`/`<sup>`) |
| highlight / text color | ❌ flat | textColor ✅ / highlight ❌ | ✅ (`<span style>`) |
| paragraph alignment | ❌ | ❌ (Jira editor has no align mark) | ✅ |
| headings / lists / tasks / blockquote / code | ✅ | ✅ | ✅ |
| table colspan | ❌ (markdown — padded so other cells keep their column) | ✅ | ✅ |
| table cell background | ❌ | ✅ | ✅ |
| emoji | `:rocket:` shortcode | ✅ | ✅ |
| math | literal `$…$` | literal | literal |
| image | `![alt](url)` reference | media reference | image macro |
| mention `@creator` | unresolved (symbolic id) | unresolved | unresolved |

See [content-validation.md](content-validation.md) for the full validation
workflow, native-wire flags, and mention-resolution setup.