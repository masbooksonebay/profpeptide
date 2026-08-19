import { NextRequest, NextResponse } from "next/server";

// Newsletter signup — adds a contact to the single Resend audience with BOTH topics opted in,
// in ONE request. Single opt-in, no welcome email (CAN-SPAM: adding a contact sends nothing).
//
// ── CONFIRMED REST SHAPE (Resend docs: /docs/api-reference/contacts/create-contact) ──
// The Topics model uses `POST https://api.resend.com/contacts` — NOT /audiences/{id}/contacts.
// The endpoint takes NO audience_id (path or body); the account's single audience is joined
// implicitly. Topics are inline: `topics: [{ id, subscription: 'opt_in' | 'opt_out' }]`.
// Body fields sent: email, unsubscribed, topics. (No name field — we don't collect one.)
//
// ── KEY SCOPE (read this before assuming it's safe) ──
// RESEND_CONTACTS_KEY is a Resend FULL-ACCESS key. Resend offers only Full or Sending access —
// there is NO contacts-only scope — so this key CAN send email. It is NOT restricted. Mitigations:
// this route only ever calls the contacts endpoint (never /emails), is per-IP rate-limited, drops
// bots via a honeypot, and the key is server-only (never reaches the client). Keep it that way.
const CONTACTS_KEY = process.env.RESEND_CONTACTS_KEY;
const TOPIC_NEWSLETTER = process.env.RESEND_TOPIC_NEWSLETTER;
const TOPIC_PROMOTIONS = process.env.RESEND_TOPIC_PROMOTIONS;
// NOTE: there is deliberately no RESEND_AUDIENCE_ID here. The audience is IMPLICIT in Resend's
// Topics model — POST /contacts takes no audience_id, so this route neither reads nor requires it.
// (RESEND_AUDIENCE_ID stays set in Vercel purely to document which audience the topics belong to;
// do NOT re-add it to the fail-loud set below — a missing value would block signups for nothing.)

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (rateLimitMap.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, recent);
    return false;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

export async function POST(request: NextRequest) {
  // Fail LOUDLY on misconfiguration — never accept a signup that would go nowhere. A missing var
  // logs its specific name and returns 503 so the visitor sees an error, not a false "subscribed".
  const missing = [
    !CONTACTS_KEY && "RESEND_CONTACTS_KEY",
    !TOPIC_NEWSLETTER && "RESEND_TOPIC_NEWSLETTER",
    !TOPIC_PROMOTIONS && "RESEND_TOPIC_PROMOTIONS",
  ].filter(Boolean);
  if (missing.length > 0) {
    console.error(`Newsletter signup misconfigured — missing env: ${missing.join(", ")}`);
    return NextResponse.json(
      { error: "Signup is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const website = typeof body.website === "string" ? body.website : "";

  // Honeypot: a filled hidden field means a bot. Pretend success, add nothing.
  if (website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!email.includes("@") || email.length < 5 || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email.", field: "email" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again later." },
      { status: 429 },
    );
  }

  // ONE call: create the contact opted into both topics. Resend's create-contact is idempotent on
  // email — re-adding an existing address returns 2xx rather than erroring, so a repeat signup is a
  // silent success (no "already subscribed" leak).
  let res: Response;
  try {
    res = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CONTACTS_KEY}`,
      },
      body: JSON.stringify({
        email,
        unsubscribed: false,
        topics: [
          { id: TOPIC_NEWSLETTER, subscription: "opt_in" },
          { id: TOPIC_PROMOTIONS, subscription: "opt_in" },
        ],
      }),
    });
  } catch (err) {
    console.error("Newsletter signup — network error reaching Resend:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error(`Newsletter signup failed: Resend ${res.status}${detail ? ` (${detail})` : ""}`);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
