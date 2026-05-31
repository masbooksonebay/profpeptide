import { NextRequest, NextResponse } from "next/server";

const DESTINATION_EMAIL = "profpeptide@gmail.com";
const FROM_ADDRESS = "Prof. Peptide <onboarding@resend.dev>";

const CATEGORY_LABELS: Record<string, string> = {
  "peptide-supplement": "Question about a peptide or supplement",
  "vendor-coupon": "Question about a vendor or coupon code",
  "correction-feedback": "Content correction or feedback",
  "vendor-partnership": "Vendor partnership inquiry",
  "other": "Other",
};

const RATE_LIMIT_MAX = 3;
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

async function sendResendEmail(payload: {
  to: string;
  reply_to: string;
  subject: string;
  text: string;
}): Promise<{ ok: boolean; status: number; error?: string }> {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) return { ok: false, status: 500, error: "missing-key" };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({ from: FROM_ADDRESS, ...payload }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return { ok: false, status: res.status, error: text };
  }
  return { ok: true, status: res.status };
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name : "";
  const email = typeof body.email === "string" ? body.email : "";
  const category = typeof body.category === "string" ? body.category : "";
  const subject = typeof body.subject === "string" ? body.subject : "";
  const message = typeof body.message === "string" ? body.message : "";
  const website = typeof body.website === "string" ? body.website : "";
  const from = typeof body.from === "string" ? body.from : "";

  if (website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (name.trim().length < 2) {
    return NextResponse.json({ error: "Name is required.", field: "name" }, { status: 400 });
  }
  if (!email.includes("@") || email.trim().length < 5) {
    return NextResponse.json({ error: "Valid email required.", field: "email" }, { status: 400 });
  }
  if (!CATEGORY_LABELS[category]) {
    return NextResponse.json({ error: "Valid topic required.", field: "category" }, { status: 400 });
  }
  if (subject.trim().length === 0 || subject.length > 120) {
    return NextResponse.json({ error: "Subject required (max 120 characters).", field: "subject" }, { status: 400 });
  }
  if (message.trim().length === 0 || message.length > 2000) {
    return NextResponse.json({ error: "Message must be 1-2000 characters.", field: "message" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many submissions, please try again later." },
      { status: 429 },
    );
  }

  const categoryLabel = CATEGORY_LABELS[category];
  const timestamp = new Date().toISOString();
  const fromPath = from || "(direct)";

  const notificationBody = [
    `Category: ${categoryLabel}`,
    `Subject:  ${subject}`,
    ``,
    `Name:     ${name}`,
    `Email:    ${email}`,
    `From:     ${fromPath}`,
    `When:     ${timestamp}`,
    `IP:       ${ip}`,
    ``,
    `Message`,
    `-------`,
    message,
  ].join("\n");

  const notif = await sendResendEmail({
    to: DESTINATION_EMAIL,
    reply_to: email,
    subject: `[PP Contact] [${categoryLabel}] ${subject}`,
    text: notificationBody,
  });

  if (!notif.ok) {
    console.error("Contact notification failed:", notif.status, notif.error);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }

  const autoReplyBody = `Thanks for reaching out to Prof. Peptide.

We've received your question and will respond within 1-2 business days.

A reminder: Prof. Peptide publishes evidence-based peptide and supplement research. We are not licensed medical professionals and cannot provide medical advice. Our responses are for research and educational purposes only. Always consult a qualified healthcare provider before starting any peptide or supplement regimen.

— The Prof. Peptide Team
https://profpeptide.com`;

  const reply = await sendResendEmail({
    to: email,
    reply_to: DESTINATION_EMAIL,
    subject: "We received your question — Prof. Peptide",
    text: autoReplyBody,
  });

  if (!reply.ok) {
    console.error("Contact auto-reply failed:", reply.status, reply.error);
  }

  return NextResponse.json({ ok: true });
}
