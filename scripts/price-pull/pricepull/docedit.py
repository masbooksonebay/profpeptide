"""Safe, structure-preserving editor for docs/PP_PRICE_DATA_MASTER_v1.md.

WHY THIS EXISTS: two hand-rolled string-surgery edits corrupted the master doc —
a `'\\n'.join()` that GLUED a section boundary ("---## VENDOR:") and an earlier one
that silently ATE 12 blank lines. The doc is the single source of truth for the whole
price grid; every downstream artifact inherits it. All doc edits must go through here.

CONTRACT: edit_master_doc reads with splitlines(keepends=True), touches ONLY whole
table-DATA-rows (via a per-row transform), and RE-CHECKS structural invariants before
writing. If anything beyond the intended rows changed — a glued header, an eaten blank,
a moved separator, a wrong removal count — it RAISES DocEditError and writes NOTHING.

The killer invariant: the sequence of NON-data-row lines (headers, "### " subheads,
"---" separators, blank lines, table header/separator rows) must be byte-identical
before and after. That single check catches both corruption modes we actually hit.
"""
import re
from pathlib import Path


class DocEditError(Exception):
    """Raised when an edit would change doc structure beyond the intended rows. No write happens."""


def _is_data_row(line: str) -> bool:
    """A price table DATA row: '| val | val | ... |'. NOT the header row ('| Compound ...'),
    NOT the separator ('| --- | ...'), NOT a horizontal rule or prose."""
    s = line.rstrip("\n")
    return s.startswith("| ") and not s.startswith("| ---") and "| Compound " not in s


def _cells(line: str):
    return [c.strip() for c in line.rstrip("\n").strip("|").split("|")]


def _nonrow_skeleton(lines):
    """Every line that is NOT a data row — headers, subheads, separators, blanks, table
    header/separator rows. This skeleton must be invariant across a row-only edit."""
    return [ln for ln in lines if not _is_data_row(ln)]


def assert_structure_unchanged(before, after):
    """Raise DocEditError if the non-data-row skeleton changed at all (glued boundary,
    eaten blank line, moved/added/removed header or separator). Exposed for testing."""
    b, a = _nonrow_skeleton(before), _nonrow_skeleton(after)
    if b != a:
        # locate the first divergence for a useful message
        for i in range(min(len(b), len(a))):
            if b[i] != a[i]:
                raise DocEditError(
                    f"structural change beyond row edits at skeleton line {i}: "
                    f"{b[i]!r} -> {a[i]!r} (glued boundary / eaten blank / header change)")
        raise DocEditError(
            f"structural change: non-row line count {len(b)} -> {len(a)} "
            f"(a blank line or separator was added/removed)")
    # belt-and-suspenders: explicit boundary checks the skeleton diff would already catch
    joined = "".join(after)
    if "---##" in joined:
        raise DocEditError("glued boundary: '---##' present after edit")
    for ln in after:
        s = ln.rstrip("\n")
        if "## VENDOR:" in s and not s.startswith("## VENDOR:"):
            raise DocEditError(f"header not at line start: {s!r}")


def edit_master_doc(path, transform, expected_changes):
    """Apply a per-row transform to the master doc, structurally safe.

    transform(cells) -> one of:
        None            keep the row unchanged
        "REMOVE"        delete the row (phantom / leak)
        [new cells...]  replace the row's cells (same column count) — a repair

    Only data rows are ever passed to transform; header/separator/blank/prose lines are
    untouched. `expected_changes` = exact number of removes+edits expected; a mismatch
    raises (no write). On any structural drift, raises (no write)."""
    path = Path(path)
    before = path.read_text().splitlines(keepends=True)
    after, changes = [], []
    for ln in before:
        if _is_data_row(ln):
            cells = _cells(ln)
            r = transform(cells)
            if r == "REMOVE":
                changes.append(("remove", cells)); continue
            if r is not None:
                if len(r) != len(cells):
                    raise DocEditError(f"repair changed column count {len(cells)} -> {len(r)}: {cells!r}")
                nl = "| " + " | ".join(str(c) for c in r) + " |" + ("\n" if ln.endswith("\n") else "")
                after.append(nl); changes.append(("edit", cells, r)); continue
        after.append(ln)
    assert_structure_unchanged(before, after)
    if len(changes) != expected_changes:
        raise DocEditError(f"expected {expected_changes} changes, made {len(changes)} — refusing to write")
    path.write_text("".join(after))
    return changes
