# SCS Master Playbook — v6.21 ADDENDUM

**Date:** August 2, 2026
**Status:** ACTIVE drop-in. Append to SCS_MP v6.20.
**Covers:** the July 31 – August 2 session. Three locked rules changed or added.

---

## 🔴 RULE CHANGE — "PUSH IS THE DEPLOY" IS NO LONGER TRUE

**SCS_MP has said:** *"PP site auto-deploys on push to main — the push IS the deploy; never a separate vercel command."*

**That is now wrong.** The GitHub→Vercel webhook failed **four times** in three days:

| When | Repo | Symptom |
|---|---|---|
| Jul 28 | hybrid-rockstar-site | Connection existed but **hadn't fired in 15 days** across five pushes |
| Jul 30 | profpeptide | Stalled mid-session; commit never reached Vercel at all |
| Jul 30 | profpeptide | Empty re-trigger commit **also** produced no deployment |
| Jul 31 | profpeptide | Stalled again **after** the disconnect/reconnect fix |

### The corrected rule

**Push, then verify live. If no deployment appears within ~3 minutes, CLI-deploy and repair the integration.**

```
npx vercel ls                      # did a deployment fire?
vercel deploy --prod               # ship it regardless
npx vercel git disconnect
npx vercel git connect https://github.com/masbooksonebay/<repo>.git
git commit --allow-empty -m "chore: verify auto-deploy"
git push                           # prove it behaviourally
```

**Three things this session established:**

1. **A connection showing as "connected" proves nothing.** Both HR and PP showed healthy settings while silently not delivering. The only proof is a push that produces a deployment.
2. **The disconnect/reconnect fix is not durable.** It worked twice and failed once. Treat it as a remedy, not a cure.
3. **Polling the live site after every push is load-bearing, not diligence.** It caught all four. Without it, HR ran 15 days on stale code and PP would have believed 16 grids were live.

> A CLI deploy no longer risks leaving git behind, *provided main is ahead of production* — it syncs production up to git rather than stranding it. Verify direction before deploying.

---

## 🔒 TERMINAL EXCEPTION — a third case

The locked rule is **all terminal commands go to CC; Mark never pastes bare commands.** The documented exceptions were `vercel env add` and EAS signing — both no-TTY cases.

**Add a third: interactive OAuth scope grants.**

```
gh auth refresh -h github.com -s workflow
```

Prints a device code, waits for input, opens a browser for approval. No automation path, and the grant is on Mark's account — it *should* require him. Same underlying reason as the other two.

⚠️ **The device code prints in the terminal, not the browser.** It appears a moment before Chrome steals focus. Read it before pressing Enter.

**Also:** CC cannot push anything under `.github/workflows/` without the `workflow` scope. GitHub rejects it server-side on both git and API. That gate is deliberate — a token that can write workflows can make the repo execute arbitrary code.

---

## 🤖 AUTOMATION — the monthly verification job

`.github/workflows/monthly-vendor-verify.yml` — first GitHub Actions workflow in any SCS repo.

- **Cron `0 16 1 * *`** — 16:00 UTC / 9am Pacific on the 1st. Deliberately not overnight: a dead-vendor notification should land at the start of the day.
- **Stamp-first, fail-last.** Runs `check:vendors`, commits and pushes the refreshed stamp for the reachable set, *then* fails if the check exited non-zero. A dead vendor advances the month **and** notifies.
- **Direct to main.** A PR would sit unmerged and recreate the manual obligation.
- **No `[skip ci]`** — Vercel honours that token and would suppress the deploy.

**Proven end-to-end**, both paths: the no-op path (byte-identical stamp → nothing committed) and the commit-and-push path (stamp rolled back deliberately → bot committed as `github-actions[bot]` → Vercel deployed → site self-corrected).

⚠️ **The bot-walled vendor set is IP-dependent.** From GitHub's datacenter IP, `modern-aminos` is Cloudflare-walled while `peptides-gg` and `purerawz` pass — the mirror of Mark's residential IP. Every flip stayed within OK↔BLOCKED, so the verified set is identical either way. Harmless while BLOCKED counts as verified; relevant if that handling is ever tightened.

---

## ⚠️ THE RECURRING FAILURE MODE — hardcoded values in individual pages

**Six instances found in three days:**

| Instance | What it was |
|---|---|
| Three coupon titles stuck on "(May 2026)" | Hardcoded month |
| 21 expired `priceValidUntil` dates | Hardcoded year |
| Aero's "Free shipping over $150 · 15-day cookie" | Hardcoded card line — and **exposed affiliate mechanics publicly** |
| "Verified" pill on all 36 coupon pages | Hardcoded literal **wired to nothing** — looked like a system signal |
| Purity pills on 8 pages | Hand-typed; **2 asserted figures the vendors don't publish** |
| `/vendor-testing-index` | Hand-maintained array missing **17 of 37** active vendors while claiming "every vendor" |

**The pattern:** a value typed into one page has nothing watching it. No guard, no registry, no consistency check. It survives until someone happens to look.

**The remedy, now proven four times:** move the value into structured data, compose it centrally, and add a build guard. `check:links`, `check:grids`, `check:freshness`, and `check:surfaces` all exist because of this class.

> **Rule:** if a fact appears on more than one page, or could change without anyone editing that page, it belongs in data — not in JSX.

---

## 📅 Changelog

**August 2, 2026 (v6.21):**
- 🔴 **"Push is the deploy" rescinded** — four webhook failures in three days. Push-then-verify is now mandatory; disconnect/reconnect is a remedy, not a cure; live-polling after every push is load-bearing.
- 🔒 **Terminal exception extended** to interactive OAuth scope grants (`gh auth refresh`). Device code prints in the terminal, not the browser.
- 🤖 **First GitHub Actions workflow** — monthly vendor verification, stamp-first/fail-last, proven both paths. Bot-walled vendor set is IP-dependent.
- ⚠️ **Hardcoded-value failure mode named** with six documented instances and the structured-data + build-guard remedy.

---

*Push, then verify. A connection that reports healthy is not a connection that delivers.*
