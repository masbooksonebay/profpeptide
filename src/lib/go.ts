import { vendors } from "@/data/vendors";

/**
 * The 302 destination for /go/{slug}: the vendor's affiliate URL, RETURNED VERBATIM.
 * 🔴 Never route this through `new URL()` — that normalizes `domain?query` → `domain/?query`
 * (it would mutate amino-club and midwest-peptide today) and could re-encode a ref param. The
 * affiliate token (path `/ref/688/` or query `?ref=…&code=…`) must survive byte-for-byte, so the
 * route sets `Location` to this exact string. check:go-redirects.mjs enforces the no-normalization
 * rule and flags every URL that `new URL()` would alter.
 */
export function goTarget(slug: string): string | null {
  return vendors[slug]?.url ?? null;
}
