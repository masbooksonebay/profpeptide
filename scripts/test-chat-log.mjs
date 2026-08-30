// scripts/test-chat-log.mjs — unit tests for src/lib/chat-log.ts.
//
// Vercel KV is unavailable locally (its credentials are type=sensitive and `vercel env pull`
// returns them empty), so the KV client is STUBBED here and the calls are asserted directly. That
// is the only way to prove the parts that matter without a live store: the retention TTL is set on
// write, the IP is salted rather than bare-hashed, and a store failure is swallowed instead of
// propagating into a conversation.
//
// Run: node scripts/test-chat-log.mjs

import assert from "node:assert/strict";
import ts from "typescript";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function loadChatLog(kvStub) {
  const src = readFileSync(join(root, "src/lib/chat-log.ts"), "utf8");
  const { outputText } = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const mod = { exports: {} };
  const require_ = (name) => {
    if (name === "@vercel/kv") return { kv: kvStub };
    if (name === "node:crypto") return { createHash };
    return {};
  };
  new Function("module", "exports", "require", outputText)(mod, mod.exports, require_);
  return mod.exports;
}

function recordingKv() {
  const calls = [];
  const store = new Map();
  return {
    calls,
    store,
    async set(k, v, opts) { calls.push(["set", k, opts]); store.set(k, v); },
    async lpush(k, v) { calls.push(["lpush", k, v]); const a = store.get(k) ?? []; a.unshift(v); store.set(k, a); },
    async ltrim(k, a, b) { calls.push(["ltrim", k, a, b]); },
    async expire(k, s) { calls.push(["expire", k, s]); },
    async lrange(k, a, b) { return (store.get(k) ?? []).slice(a, b + 1); },
    async get(k) { return store.get(k) ?? null; },
  };
}

const sample = (over = {}) => ({
  ts: "2026-08-29T12:00:00.000Z",
  ipHash: "abc123",
  question: "What is BPC-157?",
  retrieved: [{ url: "/peptides/bpc-157", score: 78 }],
  newsSlotFired: false,
  guardrail: null,
  zeroRetrieval: false,
  notFound: false,
  inputTokens: 100,
  outputTokens: 50,
  latencyMs: 1234,
  ...over,
});

const cases = [];
const test = (name, fn) => cases.push([name, fn]);

test("record is written with the 30-day retention TTL, set ON WRITE", async () => {
  const kv = recordingKv();
  const { logChatTurn, LOG_RETENTION_DAYS } = loadChatLog(kv);
  assert.equal(await logChatTurn(sample()), true);
  const setCall = kv.calls.find((c) => c[0] === "set");
  assert.ok(setCall, "no set call");
  assert.equal(setCall[2].ex, LOG_RETENTION_DAYS * 24 * 60 * 60);
  assert.equal(LOG_RETENTION_DAYS, 30);
});

test("the index is pushed, capped, and given the same TTL", async () => {
  const kv = recordingKv();
  const { logChatTurn } = loadChatLog(kv);
  await logChatTurn(sample());
  assert.ok(kv.calls.some((c) => c[0] === "lpush" && c[1] === "chat:log:index"));
  assert.ok(kv.calls.some((c) => c[0] === "ltrim"), "index is not capped");
  assert.ok(kv.calls.some((c) => c[0] === "expire"), "index has no TTL");
});

test("🔒 a KV failure is SWALLOWED — never propagates into a conversation", async () => {
  const exploding = { async set() { throw new Error("KV down"); }, async lpush() {}, async ltrim() {}, async expire() {}, async lrange() { throw new Error("KV down"); }, async get() { throw new Error("KV down"); } };
  const { logChatTurn, readRecentLog } = loadChatLog(exploding);
  assert.equal(await logChatTurn(sample()), false, "should report failure, not throw");
  assert.deepEqual(await readRecentLog(10), [], "reads degrade to empty, not throw");
});

test("🔒 hashIp is SALTED — no salt means no hash at all, never a bare one", () => {
  const { hashIp } = loadChatLog(recordingKv());
  delete process.env.CHAT_LOG_SALT;
  assert.equal(hashIp("203.0.113.7"), "unsalted");
  const bare = createHash("sha256").update("203.0.113.7").digest("hex").slice(0, 16);
  process.env.CHAT_LOG_SALT = "test-salt";
  const salted = hashIp("203.0.113.7");
  assert.notEqual(salted, bare, "a bare hash of an IP is reversible by enumeration");
  assert.notEqual(salted, "unsalted");
});

test("hashIp is stable per IP, distinct across IPs, and changes with the salt", () => {
  const { hashIp } = loadChatLog(recordingKv());
  process.env.CHAT_LOG_SALT = "salt-a";
  const a1 = hashIp("203.0.113.7");
  const a2 = hashIp("203.0.113.7");
  const other = hashIp("198.51.100.2");
  process.env.CHAT_LOG_SALT = "salt-b";
  const b1 = hashIp("203.0.113.7");
  assert.equal(a1, a2, "same IP + salt must be stable");
  assert.notEqual(a1, other, "different IPs must differ");
  assert.notEqual(a1, b1, "rotating the salt must change the hash");
});

test("hashIp never returns anything resembling an address", () => {
  const { hashIp } = loadChatLog(recordingKv());
  process.env.CHAT_LOG_SALT = "test-salt";
  const h = hashIp("203.0.113.7");
  assert.ok(!h.includes("203"), "raw octet leaked");
  assert.ok(/^[0-9a-f]{16}$/.test(h));
});

test("the stored record carries every expected field and NO answer text", async () => {
  const kv = recordingKv();
  const { logChatTurn } = loadChatLog(kv);
  await logChatTurn(sample({ zeroRetrieval: true, notFound: true, guardrail: "dosing_prefilter" }));
  const stored = [...kv.store.values()].find((v) => v && v.question);
  for (const f of ["ts","ipHash","question","retrieved","newsSlotFired","guardrail","zeroRetrieval","notFound","inputTokens","outputTokens","latencyMs"]) {
    assert.ok(f in stored, `missing field: ${f}`);
  }
  assert.ok(!("answer" in stored) && !("response" in stored), "answer text must never be stored");
  assert.equal(stored.zeroRetrieval, true);
  assert.equal(stored.notFound, true);
  assert.equal(stored.guardrail, "dosing_prefilter");
});

test("readRecentLog filters out records whose TTL already expired", async () => {
  const kv = recordingKv();
  const { logChatTurn, readRecentLog } = loadChatLog(kv);
  await logChatTurn(sample());
  // simulate expiry: the index still lists the key, the record is gone
  const key = [...kv.store.keys()].find((k) => k.startsWith("chat:log:") && k !== "chat:log:index");
  kv.store.delete(key);
  assert.deepEqual(await readRecentLog(10), []);
});

test("looksLikeNotFound detects gap admissions but not ordinary answers", () => {
  const { looksLikeNotFound } = loadChatLog(recordingKv());
  assert.equal(looksLikeNotFound("Prof. Peptide doesn't have information on that."), true);
  assert.equal(looksLikeNotFound("I couldn't find anything on that topic."), true);
  assert.equal(looksLikeNotFound("I wasn't able to find anything on Prof. Peptide for that"), true);
  assert.equal(looksLikeNotFound("BPC-157 is a synthetic peptide studied for tissue repair."), false);
  assert.equal(looksLikeNotFound("The trials found a 24% reduction."), false);
});

let failures = 0;
for (const [name, fn] of cases) {
  try { await fn(); console.log(`  ✓ ${name}`); }
  catch (e) { failures += 1; console.error(`  ✗ ${name}: ${e.message}`); }
}
if (failures > 0) {
  console.error(`\ntest:chat-log FAILED — ${failures}/${cases.length} case(s) failed.`);
  process.exit(1);
}
console.log(`\ntest:chat-log OK — ${cases.length}/${cases.length} cases passed.`);
