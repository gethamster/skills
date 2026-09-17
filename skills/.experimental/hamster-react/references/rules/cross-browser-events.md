---
title: Stretched-Link Overlay vs Safari Hit-Testing
tags: events, safari, click, stretched-link, listtable, table
---

# Stretched-Link Overlay vs Safari Hit-Testing

Safari/WebKit resolves the synthetic-click target on `mouseup`, not `mousedown`. When a Radix Popover/Dropdown opens at the same time (focus shift + Portal mount), Safari can route the click to the nearest absolutely-positioned `<a>` — the last row in a table using a stretched-`<Link>` overlay — instead of the button the user pressed.

Repro: `/home/[account]/briefs` in Safari, table view, click any toolbar Popover (Status, Tag, Display). Result: navigates to the oldest brief.

## Rule

**MUST NOT** use the `absolute inset-0` stretched-`<Link>` pattern in table rows. `<tr>` does not reliably establish a containing block under Safari's hit-test when sibling Popovers open.

**MUST** make rows clickable via `<tr onClick>`. Branch on modifier keys / middle-click to `window.open(href, '_blank', 'noopener,noreferrer')` for new tab. Render the primary cell as a real `<Link>` so right-click "Open in new tab", keyboard focus, and copy-link work.

**MAY** keep stretched-`<Link>` inside a positioned `<div>` (card grids, tree rows) — `<div>` reliably establishes a containing block in WebKit.

`e.stopPropagation()` on the popover trigger is **not** a fix — the bug lives in hit-test resolution before the React event chain runs, so the trigger's `onClick` never fires.

## Canonical pattern

```tsx
// brief-table.tsx
const handleRowClick = (
  brief: Brief,
  event: React.MouseEvent<HTMLTableRowElement>,
) => {
  const href = getBriefHref(brief);
  const newTab =
    event.button === 1 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey;
  if (newTab) {
    event.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
    return;
  }
  router.push(href);
};

// Title cell: real <Link> for right-click / keyboard / copy-link.
// stopPropagation on both onClick and onAuxClick prevents double-fire
// (native link open + row handler).
{
  key: 'title',
  render: (brief) => (
    <Link
      href={getBriefHref(brief)}
      onClick={(e) => e.stopPropagation()}
      onAuxClick={(e) => e.stopPropagation()}
      className="truncate hover:underline"
    >
      {getBriefTitleString(brief)}
    </Link>
  ),
}

<ListTable items={briefs} columns={columns} onRowClick={handleRowClick} />
```

Interactive cells (dropdowns, inline edits, tag pills) **MUST** `e.stopPropagation()` on their click handlers so the row's `onClick` does not fire.

## ListTable

`packages/ui/src/shadcn/list-table.tsx` exposes only `onRowClick(item, event)` (no `getRowHref`). `onAuxClick` is wired internally so middle-click triggers the same handler.

## Browser test matrix

Reproduces in Safari only — Chromium and Playwright WebKit miss it. Smoke-test Safari 17+ on any navigable table: open the list, click a toolbar Popover, confirm no navigation.

## Related

- `packages/ui/src/shadcn/list-table.tsx` — `onRowClick(item, event)`.
- `apps/web/app/home/[account]/briefs/_components/brief-table.tsx` — canonical pattern.
- `apps/web/app/home/[account]/initiatives/_components/initiative-tree.tsx`, `goals-tree-row.tsx` — stretched-`<Link>` inside `<div position:relative>` (safe; same caveat applies if a Popover toolbar is added).