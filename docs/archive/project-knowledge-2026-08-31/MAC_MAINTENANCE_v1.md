# MAC_MAINTENANCE v1
**Status:** ACTIVE. Periodic storage + memory maintenance for Mark's MacBook Air.
**Date:** 2026-08-26. Born from the Aug 26 cleanup (4.6 GB free → 42 GB free in one day).

---

## 0. THE MACHINE, PLAINLY

**Apple M3 MacBook Air · 8 GB RAM (soldered, not expandable) · 228 GB disk.**

Two standing truths from the Aug 26 diagnosis:
1. **Disk fills with regenerable machine junk, not data.** Mark's actual documents/media are negligible. The disk eaters are caches, build artifacts, simulator images, installers, and app VM bundles — all regenerable. Cloud offload solves nothing here; deletion does.
2. **RAM is the real constraint, not disk.** 8 GB runs this workload on swap + compression. It copes, but overlap is the enemy (§4).

---

## 1. 🔒 THE RULES (apply to every cleanup)

- **CC executes; Mark approves.** Diagnosis is read-only; deletions run only from an explicitly approved list, explicit paths, no broad wildcards, `df -h` between steps.
- **Process gates are hard STOPs.** Chrome dirs only with Chrome quit (⌘Q, not closed windows). Claude VM bundle only with the desktop app quit — ⚠️ and never from a CC session launched *by* the desktop app (it saws off its own branch; use a plain terminal or accept the session ending).
- **Never delete:** Chrome profile data (bookmarks/cookies/logins/IndexedDB) · data-bearing or booted simulators · anything in `~/dev` beyond node_modules/.next · the Downloads archive pile (exports NN, HR Instagram zips, mp4s) without Mark's explicit call · app data that isn't a named cache.
- **After clearing a repo's node_modules/.next, reinstall + build the ACTIVE repo** (usually profpeptide) so parked work isn't surprised.
- **Trash counts.** Deleting to Trash frees nothing — empty it.

---

## 2. THE ROUTINES

### MONTHLY QUICK PASS (~10 min, CC, ~10–15 GB typical)
One prompt, the standing safe list:
| Target | Typical size | Notes |
|---|---|---|
| `npm cache clean --force` | 3–6 GB | regrows with use |
| `~/Library/Developer/Xcode/DerivedData` | 1–3 GB | regrows on next build |
| `~/.expo` + `brew cleanup` | ~1 GB | |
| Downloads: `.dmg`/installer files ONLY | 1–3 GB | enumerate first; installers accumulate fast (7 Claude dmgs found once) |
| `~/Library/Caches`: Google, ClaudeShipIt, Homebrew, Atlas, pip, node-gyp, CocoaPods, GeoServices | 2–6 GB | named entries only |
| `~/.claude` older than 14 days | ~1 GB | session transcripts; keep recent |
| node_modules across `~/dev` + `.next` | 2–3 GB | then reinstall+build profpeptide |

### QUARTERLY DEEP PASS (add to the monthly)
| Target | Size | Gate |
|---|---|---|
| Claude VM bundle (`~/Library/Application Support/Claude/vm_bundles`) | 10–20 GB | desktop app QUIT; re-provisions on next use |
| Chrome Service Worker CacheStorage + OptGuideOnDeviceModel + screen_ai | 5–10 GB | Chrome QUIT (⌘Q) |
| Simulator stub duplicates (`xcrun simctl` — empty ~17 MB stubs only) | small | keep one per model, all data-bearing, never the booted one. Note: the subcommand is `delete unavailable`, not `delete unused` |
| Empty Trash + check for OS local snapshots | varies | snapshots are system-managed; leave unless desperate |

### EVENT-DRIVEN
- **After the PP app captures ship:** the deferred **~40 GB** — unused simulator runtime images in `/Library/Developer` (`xcrun simctl runtime delete` the unused ones, keep the current iOS). The single biggest reclaim on the machine; deliberately held until captures are done.
- **When Downloads' archive pile matters** (exports NN, HR zips, mp4s ~1 GB): consolidate into one folder, Mark drags to iCloud/external, then delete local. Mark's call only.
- **Disk alert appears:** run the full diagnosis (§3) before deleting anything — the mix shifts.

---

## 3. THE DIAGNOSIS PROMPT (run before any non-routine cleanup)
Read-only: `df -h` · top-level `du` map (~/Library, /Applications, ~/Downloads, ~/dev, media dirs) · the dev-detritus list (DerivedData, CoreSimulator, node_modules, caches) · `~/Library/Application Support` top 10 · classify SAFE-DELETE / ARCHIVE / KEEP with sizes. ⚠️ `du` over-counts APFS-cloned data (simulator devices clone runtime images) — treat sim numbers as upper bounds. ⚠️ Full `~/Library` walks take 8+ min; run them in background, probe suspects directly.

---

## 4. MEMORY — THE HABITS (nothing to delete; 8 GB is 8 GB)

**The overlap rule:** any TWO of {Chrome heavy, `next build`, booted Simulator} coexist; all THREE = swap thrash and beachballs. Sequence them — especially on **app-capture days**: trim Chrome first, let builds finish, then boot the sim.

- **Chrome is the #1 lever** (~2.7 GB across a dozen renderers). Enable Chrome's built-in Memory Saver; prune tabs when the machine drags.
- **Simulator stays closed except when capturing** (booted = 1–2 GB).
- **Chrome profiles fix the ⌘Q tax:** separate "Capstone" and "SCS" profiles each reopen their own windows/tabs on relaunch — quitting Chrome stops being destructive, which unblocks every Chrome-gated cleanup. (Alternative: Settings → On startup → "Continue where you left off.")
- Swap at ~2 GB with green pressure is macOS coping, not crisis. Sustained pressure yellow/red or constant beachballs = too much overlap, not a broken machine.

---

## 5. STATE LEDGER (update on each pass)

| Date | Pass | Freed | Free after | Notes |
|---|---|---|---|---|
| 2026-08-26 | Full (diagnosis + auto + manual + round 2) | ~33+ GB | ~42 GB (78%) | VM bundle, Chrome caches, npm, DerivedData, installers, 11 sim stubs. DEFERRED: 40 GB sim runtimes (await PP captures). OptGuide skipped (Chrome open — window-workflow reason; profiles fix pending) |
