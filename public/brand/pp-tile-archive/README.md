# Pp-tile archive

The **"Pp" tile** — a white lowercase/uppercase "Pp" on a near-black square with a
`#3A759F` blue border. This was the **website header logo and the `/app` hero mark**
until **2026-08-11**, when both were switched to the glasses mark that the favicon set
already uses (`/icon-512.png`), so the site carries one mark.

This is an **explicit archive**, kept because these are keep-forever brand assets and
the repo has already purged orphaned brand blobs once (commit `25f73b1`,
"assets: delete orphaned brand marks"). Do not delete this folder in a future cleanup.

## Files
| File | Size | Notes |
|---|---|---|
| `pp-mark.png` | 1254² | The exact asset the header/`/app` hero used. **Still live in `public/pp-mark.png`** because the OG card generator (`src/lib/coupon-og.tsx`) embeds it — this is a durable copy, not the only one. |
| `pp-mark-1024.png` | 1024² | Higher-res render of the same Pp tile (was orphaned in `/public`). |
| `pp-mark-2048.png` | 2048² | Higher-res render of the same Pp tile (was orphaned in `/public`). |
| `pp-mark-thick.png` | 1024² | Thick-border Pp-tile variant (was orphaned in `/public`). |
| `pp-mark-thick-2048.png` | 2048² | Thick-border variant at 2048² (was orphaned in `/public`). |

## Scope notes
- The **favicon set was NOT changed** — it remains the glasses mark (`icon.svg`,
  `icon-512/192.png`, `favicon.ico`, `favicon-48/96.png`, `apple-icon.png`, PWA manifest).
- The **iOS app still uses the Pp tile** for its app icon. That asset lives in the
  separate app repo (`profpeptide-app`) and is untouched by this web-repo change.
- To restore the Pp tile as the header mark: point `src/components/Header.tsx` and
  `src/app/app/page.tsx` back at `/pp-mark.png`.
