// Serverless proxy that relays the PP mobile app's AI chat to Anthropic, so the
// API key never ships in the app binary. Thin relay: the app builds the system
// prompt and sends { system, messages }; this route adds the key + model and
// streams Anthropic's SSE straight back.
//
// Mirrors the proven pattern in ~/dev/hybrid-rockstar-api (api/coach-rob.ts),
// adapted to this repo's Next.js App Router route-handler convention.
//
// POST /api/coach
//   body: { system: string, messages: { role: "user"|"assistant", content: string }[] }
//   200 -> text/event-stream (Anthropic SSE, passed through untransformed)
//   errors -> JSON { error: { code, message } }
export const runtime = "edge";

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
// Pinned to the same model the proven hybrid-rockstar-api relay uses. Swap this
// single const to change models (a newer Sonnet can drop in here).
const MODEL = "claude-sonnet-4-20250514";
const MAX_TOKENS = 1000;
const MAX_BODY_BYTES = 50 * 1024;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 60;

type RateEntry = { count: number; resetAt: number };
const rateStore = new Map<string, RateEntry>();

const corsHeaders: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400",
};

function jsonError(status: number, code: string, message: string) {
  return new Response(JSON.stringify({ error: { code, message } }), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders },
  });
}

function getClientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

function checkRateLimit(ip: string): { ok: true } | { ok: false; retryAfter: number } {
  const now = Date.now();
  const entry = rateStore.get(ip);
  if (!entry || entry.resetAt <= now) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true };
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  entry.count += 1;
  return { ok: true };
}

type IncomingMessage = { role: "user" | "assistant"; content: string };

function validateBody(body: unknown):
  | { ok: true; messages: IncomingMessage[]; system: string }
  | { ok: false; message: string } {
  if (!body || typeof body !== "object") return { ok: false, message: "Body must be a JSON object." };
  const b = body as Record<string, unknown>;
  if (!Array.isArray(b.messages)) return { ok: false, message: "`messages` must be an array." };
  if (b.messages.length === 0) return { ok: false, message: "`messages` cannot be empty." };
  if (b.messages.length > 100) return { ok: false, message: "`messages` exceeds 100 entries." };
  for (const m of b.messages) {
    if (!m || typeof m !== "object") return { ok: false, message: "Each message must be an object." };
    const mm = m as Record<string, unknown>;
    if (mm.role !== "user" && mm.role !== "assistant") {
      return { ok: false, message: "Each message role must be 'user' or 'assistant'." };
    }
    if (typeof mm.content !== "string" || mm.content.length === 0) {
      return { ok: false, message: "Each message content must be a non-empty string." };
    }
  }
  if (typeof b.system !== "string") return { ok: false, message: "`system` must be a string." };
  return { ok: true, messages: b.messages as IncomingMessage[], system: b.system };
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function POST(req: Request): Promise<Response> {
  const contentLength = req.headers.get("content-length");
  if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
    return jsonError(413, "payload_too_large", "Request body exceeds 50KB.");
  }

  const ip = getClientIp(req);
  const rate = checkRateLimit(ip);
  if (!rate.ok) {
    return new Response(
      JSON.stringify({ error: { code: "rate_limited", message: "Too many requests. Please wait and try again." } }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(rate.retryAfter),
          ...corsHeaders,
        },
      },
    );
  }

  const rawText = await req.text();
  if (rawText.length > MAX_BODY_BYTES) {
    return jsonError(413, "payload_too_large", "Request body exceeds 50KB.");
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawText);
  } catch {
    return jsonError(400, "invalid_json", "Request body is not valid JSON.");
  }

  const validated = validateBody(parsed);
  if (!validated.ok) {
    return jsonError(400, "invalid_body", validated.message);
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return jsonError(500, "server_misconfigured", "Server is not configured for chat.");
  }

  let anthropicRes: Response;
  try {
    anthropicRes = await fetch(ANTHROPIC_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": ANTHROPIC_VERSION,
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        stream: true,
        system: validated.system,
        messages: validated.messages,
      }),
    });
  } catch {
    return jsonError(502, "upstream_unreachable", "Could not reach the AI service. Try again shortly.");
  }

  if (!anthropicRes.ok) {
    let upstreamMessage = "Upstream error.";
    try {
      const errBody = await anthropicRes.json();
      upstreamMessage = errBody?.error?.message ?? upstreamMessage;
    } catch {}
    if (anthropicRes.status === 401) {
      return jsonError(502, "upstream_auth", "Server auth with the AI service failed.");
    }
    if (anthropicRes.status === 429) {
      return jsonError(503, "upstream_rate_limited", "The AI service is briefly busy. Try again in a moment.");
    }
    if (anthropicRes.status >= 500) {
      return jsonError(502, "upstream_error", "The AI service is having trouble. Try again shortly.");
    }
    return jsonError(502, "upstream_error", upstreamMessage);
  }

  if (!anthropicRes.body) {
    return jsonError(502, "upstream_empty", "The AI service returned no body.");
  }

  return new Response(anthropicRes.body, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      ...corsHeaders,
    },
  });
}
