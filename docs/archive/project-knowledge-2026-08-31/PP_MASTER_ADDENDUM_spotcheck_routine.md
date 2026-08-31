# PP_MASTER addendum — Local spot-check routine (LOCKED)

**Effective:** May 27, 2026
**Status:** Locked, applies henceforth
**Insert into:** PP_MASTER under Workflow Operations section (or new section if none exists)

---

## Local spot-check routine for unpushed CC changes

### When this applies

CC reports a batch complete with commits ahead of origin/main and Mark needs to review the rendered output before approving push. Default state: changes exist only in Mark's local repo until pushed.

### Mandatory auto-delivery by Claude

When CC reports any batch complete on the PP workstream, Claude provides without being re-asked, in a single response:

1. **Terminal command** in a code block, ready to copy-paste into a new terminal tab:
   ```
   cd ~/Desktop/profpeptide && npm run dev
   ```
2. **"Wait for the Ready in [Xs] message before clicking"** instruction (typically 3-15 seconds for first start, faster on warm starts).
3. **Clickable localhost links for flagged/judgment-call pages first** (the ones with editorial choices needing eyeball validation), followed by the full slug list for any-page review.

Standard format:

```
**Run in new terminal tab:**
`cd ~/Desktop/profpeptide && npm run dev`

Wait for "Ready" message, then click:

Flagged pages (judgment calls requiring validation):
- http://localhost:3000/supplements/[flagged-slug-1]
- http://localhost:3000/supplements/[flagged-slug-2]

Other batch pages:
- http://localhost:3000/supplements/[slug-3]
- ...
```

### Never do

- Ask "want me to give you the spot-check link?" — auto-provide.
- Mention live profpeptide.com URLs as primary spot-check (those still show pre-push v4.3 version).
- Bury the terminal command in prose — always code block.
- Make Mark request the routine — it's automatic on every batch completion report.

### Vercel preview branch alternative (mobile-friendly)

When Mark is away from his Mac or wants to spot-check from mobile, alternative path:

1. CC pushes Batch to `batch[N]-preview` branch (not main)
2. Vercel auto-generates preview URL (e.g., `https://profpeptide-git-batch3-preview-strengthcyclestudios.vercel.app`)
3. Mark clicks from anywhere

Claude offers this alternative when Mark is mobile or asks for "preview" / "remote review" / similar. Not the default.

### Pattern extends to other repos

Same routine substitutes the repo path for HR / SC / WN when their workflows reach local-spotcheck phase:

- HR: `cd ~/Desktop/hybridrockstar && npm run start` (Expo, not Next.js — different start command)
- SC: `cd ~/Desktop/strengthcycle && npm run start` (Expo)
- WN: `cd ~/Desktop/weightliftingnation && npm run start` (Expo, when build phase starts)

Path conventions verified per repo when applicable. For Expo apps, the QR code in the terminal opens the iOS simulator or physical device — no localhost browser link applies.

---

**End of addendum.**
