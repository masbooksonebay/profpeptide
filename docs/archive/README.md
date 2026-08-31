# docs/archive

## What this is

A **point-in-time export of the Claude project-knowledge docs as of 31 August 2026**
(`project-knowledge-2026-08-31/`, 343 files).

It was preserved because superseded versions were being **deleted from project knowledge** to stop
stale documents poisoning search there. Deleting them solved the search problem but would have
destroyed the history, so the export was taken first and parked here.

## 🔴 REFERENCE ONLY — NOT A SOURCE OF CURRENT STATE

Nothing in this directory describes how the site works **now**. Every file in it is either
superseded or a snapshot of a moment. Do not:

- treat a doc here as the governing version of anything;
- act on a decision, rate, roster, or count found here without re-checking it;
- cite it as evidence of current state in a report or a commit message.

**The current governing versions live in project knowledge, indexed by `SCS_REF_INDEX`.**
If a question is about what is true today, that index is the source — not this folder.

The value of this archive is historical: recovering *why* a decision was taken, or what a document
said before it was replaced.

## It is deliberately outside every generated surface

This archive is **not** in the chat corpus, and cannot enter it by accident:

- `scripts/gen-chat-corpus.mjs` enumerates directories from exactly five hardcoded roots — 
  `src/app/{peptides,supplements,guides,compare,coupons}` — and admits a directory only if it
  contains a `page.tsx`. `docs/` is not one of those roots, and this is a flat folder of markdown
  with no `page.tsx` anywhere in it. Structural exclusion, not a filter that could be forgotten.
- `scripts/check-links.mjs` scans `.md`, but its `SCAN_DIR` is `root/src` — it never walks `docs/`.
- The guards that *do* read `docs/` (`check-doc-integrity`, `check-blend-skips`, `check-prices-sync`)
  each open **one named file**, `docs/PP_PRICE_DATA_MASTER_v1.md`. None enumerates the directory.
- `docs/` sits outside `src/app`, so nothing here is a route, is imported, or reaches the JS bundle.

Verified empirically when the archive landed: regenerating the corpus with all 343 files in place
produced a **byte-identical** `chat-corpus.generated.ts` (md5 `58ed3e94…`), with zero references to
the archive path.

⚠️ If a future change ever points a generator or guard at `docs/` recursively, this folder must be
excluded explicitly at that point. 313+ superseded markdown documents entering a searchable surface
would undo the reason the archive exists.
