// scripts/check-content-dates.mjs — staleness guard for src/data/content-dates.generated.json.
//
// Same contract as check-chat-corpus / check-search-index: re-derive and compare, fail the build on
// drift. Here the drift that matters is a coupon page whose CONTENT changed without the date map
// being regenerated — which is exactly the original defect wearing a different hat. Without this
// guard the new mechanism would rot the same way the old one did, just more quietly.
//
// It compares HASHES, not dates: the date is allowed to be older than today (most pages have not
// changed today), but a hash that no longer matches its page means the recorded date is a lie.
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildContentDates, contentHash } from "./gen-content-dates.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(root, "src/data/content-dates.generated.json");

function fail(lines) {
  console.error("check-content-dates FAILED:\n");
  for (const l of lines) console.error(`  ${l}`);
  console.error("\n  Fix: `node scripts/gen-content-dates.mjs` and commit the result.");
  process.exit(1);
}

if (!existsSync(OUT)) {
  fail(["src/data/content-dates.generated.json is missing."]);
}

const committed = JSON.parse(readFileSync(OUT, "utf8")).coupons ?? {};
// today is irrelevant to the comparison — only pages whose hash already matches are kept, and any
// mismatch is reported rather than silently re-dated.
const { coupons: derived } = buildContentDates("1970-01-01");

const problems = [];
for (const slug of Object.keys(derived)) {
  if (!committed[slug]) {
    problems.push(`${slug} — new coupon page with no recorded content date.`);
    continue;
  }
  const expected = derived[slug].hash;
  if (committed[slug].hash !== expected) {
    problems.push(
      `${slug} — content changed but the date map was not regenerated ` +
        `(recorded ${committed[slug].hash} @ ${committed[slug].date}, actual ${expected}).`
    );
  }
}
for (const slug of Object.keys(committed)) {
  if (!derived[slug]) problems.push(`${slug} — recorded in the date map but the coupon page no longer exists.`);
}

if (problems.length) fail(problems);

const dates = Object.values(committed).map((c) => c.date);
const distinct = new Set(dates).size;
console.log(
  `check-content-dates OK — ${Object.keys(committed).length} coupon page(s), ${distinct} distinct content date(s), all hashes match.`
);
// contentHash is imported so a future refactor that changes hashing breaks this guard loudly rather
// than silently invalidating every recorded date.
void contentHash;
