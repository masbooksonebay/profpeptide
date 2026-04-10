import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Prof. Peptide <onboarding@resend.dev>",
      reply_to: "profpeptide@gmail.com",
      to: "profpeptide@gmail.com",
      subject: "New App Waitlist Signup",
      text: `New waitlist signup: ${email} — signed up at ${new Date().toISOString()}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send notification." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
