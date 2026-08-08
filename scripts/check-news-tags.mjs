// Warn-only: flags any hand-set `peptides` tag on a news article whose article
// body does not also link that profile inline (/peptides/<slug>). It NEVER blocks
// the build. A tag legitimately leads a link in rare cases, but the common failure
// — a typo'd slug or an over-eager tag on a compound the piece only mentions — is
// exactly what this surfaces. Tags are hand-set; this check never auto-derives them.
import { readFileSync, existsSync } from "node:fs";

const ts = readFileSync("src/data/news.ts", "utf8");
// Each article object lists `slug:` immediately before `peptides:` (see news.ts).
const re = /slug:\s*"([^"]+)",\s*\n\s*peptides:\s*\[([^\]]*)\]/g;

let m;
let checked = 0;
let warnings = 0;
let tagged = 0;
while ((m = re.exec(ts)) !== null) {
  tagged++;
  const slug = m[1];
  const tags = [...m[2].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
  const page = `src/app/news/${slug}/page.tsx`;
  if (!existsSync(page)) {
    console.warn(`  ⚠ ${slug}: tagged article has no page.tsx`);
    warnings++;
    continue;
  }
  const body = readFileSync(page, "utf8");
  for (const t of tags) {
    checked++;
    if (!body.includes(`/peptides/${t}`)) {
      console.warn(`  ⚠ ${slug}: tagged "${t}" but never links /peptides/${t} inline — is the article really ABOUT it?`);
      warnings++;
    }
  }
}

console.log(
  `check:news-tags — ${checked} tag(s) across ${tagged} tagged article(s); ${warnings} warning(s). (warn-only; never blocks the build)`,
);
process.exit(0);
