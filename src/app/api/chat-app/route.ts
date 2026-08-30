// App-framed AI chat route — the Prof. Peptide MOBILE APP's retrieval assistant. Sibling to
// /api/chat (the website widget); the two are deliberately different only where they must be, and
// SHARE the parts that must never diverge.
//
// SINGLE-SOURCED with /api/chat (imported, not copied):
//   - retrieveForChatDetailed — the corpus, entity EXACT/SUBSET scoring, and the regulatory
//     news-recency slot (the Category-1 correction). If these ever diverged between the two routes,
//     that is the exact bug this design prevents, so they live once in @/lib/chat-retrieval.
//   - SEARCH_TOOL + formatPageForModel — the model-facing tool schema and page-injection format.
//   - checkFirstPersonDosing (the deterministic dosing pre-filter), MAX_* limits, getClientIp.
//   - logChatTurn / hashIp (analytics posture), with a SEPARATE keyspace ("chatapp").
//
// DIFFERENT from /api/chat, on purpose (Mark's three decisions):
//   1. NO vendor coupons / prices / affiliate content. The APP_SYSTEM_PROMPT never mentions them and
//      this route never imports vendors.ts or the CODE/DISCOUNT placeholder substitution — that machinery
//      is ABSENT here, not merely unused. The only output filter is stripResidualCodesAndPrices, a
//      one-way backstop that deletes anything code/price-shaped the model might hallucinate.
//   2. Key = ANTHROPIC_API_KEY (the mobile coach key), preserving the blast-radius separation from
//      the site chat's ANTHROPIC_API_KEY_CHAT.
//   3. Rate limiting is per-INSTALL (checkAppRateLimit), not per-IP — carrier-grade NAT would lock
//      out real users otherwise. Separate `chatapp:*` KV keyspace from /api/chat's `chat:*`.
//
// FORK NOTE: the tool-use loop + SSE scaffolding below mirrors /api/chat's rather than being
// extracted into a shared engine. Reason: extracting it would refactor the live, recently-shipped,
// highest-RUO-risk site route and its App-Review-critical redaction chain — a worse blast radius than
// mirroring ~90 lines of orchestration. Everything that governs WHAT THE MODEL SEES or HOW PAGES ARE
// RANKED is shared (above), so this fork cannot cause a retrieval divergence — only the loop plumbing
// is duplicated, and that is the one thing to keep in sync by hand if it ever changes.
//
// Runtime: Node.js (the corpus module is ~7.9MB, past edge code-size limits) — same as /api/chat.
//
// POST /api/chat-app
//   body: { messages: { role: "user"|"assistant", content: string }[] }
//   header (optional): x-pp-install-id — a stable per-install id for rate limiting
//   200 -> text/event-stream, SAME custom shape as /api/chat: {"type":"delta"|"phase"|"done"|"error"}
//   errors -> JSON { error: { code, message } }
export const runtime = "nodejs";

import { retrieveForChatDetailed, SEARCH_TOOL, formatPageForModel } from "@/lib/chat-retrieval";
import { hashIp, logChatTurn, looksLikeNotFound, type ChatGuardrail, type RetrievedRef } from "@/lib/chat-log";
import { APP_SYSTEM_PROMPT } from "@/lib/chat-app-system-prompt";
import { stripResidualCodesAndPrices } from "@/lib/chat-format";
import {
  checkFirstPersonDosing,
  getClientIp,
  checkAppRateLimit,
  isValidInstallId,
  APP_INSTALL_HEADER,
  MAX_BODY_BYTES,
  MAX_MESSAGES_PER_SESSION,
  MAX_OUTPUT_TOKENS,
} from "@/lib/chat-guardrails";

const ANTHROPIC_URL = "https://api.anthropic.com/v1/messages";
const ANTHROPIC_VERSION = "2023-06-01";
// Same model as /api/chat so the two surfaces give consistent answers over the same corpus — the
// intended differences are prompt, key, and limits, not the model.
const MODEL = "claude-sonnet-5";
const MAX_TOOL_ROUNDS = 3;

type IncomingMessage = { role: "user" | "assistant"; content: string };

function jsonError(status: number, code: string, message: string) {
  return new Response(JSON.stringify({ error: { code, message } }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function validateBody(body: unknown): { ok: true; messages: IncomingMessage[] } | { ok: false; message: string } {
  if (!body || typeof body !== "object") return { ok: false, message: "Body must be a JSON object." };
  const b = body as Record<string, unknown>;
  if (!Array.isArray(b.messages)) return { ok: false, message: "`messages` must be an array." };
  if (b.messages.length === 0) return { ok: false, message: "`messages` cannot be empty." };
  if (b.messages.length > MAX_MESSAGES_PER_SESSION) {
    return { ok: false, message: `Conversation exceeds the ${MAX_MESSAGES_PER_SESSION}-message session cap.` };
  }
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
  return { ok: true, messages: b.messages as IncomingMessage[] };
}

/** The user's most recent message — what the turn is actually asking. */
function lastQuestionOf(messages: { role: string; content: string }[]): string {
  return [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
}

/** Per-request analytics accumulator. Plain data, no behaviour — nothing here may influence the answer. */
interface Telemetry {
  retrieved: RetrievedRef[];
  newsSlotFired: boolean;
  zeroRetrieval: boolean;
}

function runSearchTool(query: string, telemetry: Telemetry): string {
  // retrieveForChatDetailed (shared): ranked hits plus, for regulatory questions, the freshest
  // in-band news page even when ranking missed it — the mechanism that keeps a stale profile snapshot
  // from answering a moved regulatory question. Identical to /api/chat by construction.
  const { hits, newsSlotFired } = retrieveForChatDetailed(query, 2);
  telemetry.retrieved.push(...hits.map((h) => ({ url: h.page.url, score: h.score })));
  if (newsSlotFired) telemetry.newsSlotFired = true;
  if (hits.length === 0) {
    telemetry.zeroRetrieval = true;
    return "No matching content found on Prof. Peptide for that query. Tell the user this topic " +
      "isn't covered rather than answering from general knowledge.";
  }
  return hits.map((h) => formatPageForModel(h.page)).join("\n\n");
}

type AnthropicContentBlock =
  | { type: "text"; text: string }
  | { type: "tool_use"; id: string; name: string; input: { query?: string } };

interface AnthropicMessage {
  role: "user" | "assistant";
  content: string | AnthropicContentBlock[];
}

async function callAnthropic(apiKey: string, messages: AnthropicMessage[]): Promise<{
  stop_reason: string;
  content: AnthropicContentBlock[];
  usage?: { input_tokens?: number; output_tokens?: number };
}> {
  const res = await fetch(ANTHROPIC_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": ANTHROPIC_VERSION,
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: MAX_OUTPUT_TOKENS,
      system: APP_SYSTEM_PROMPT,
      tools: [SEARCH_TOOL],
      messages,
    }),
  });
  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    const message = errBody?.error?.message ?? `Anthropic API error (${res.status}).`;
    throw new Error(message);
  }
  return res.json();
}

function sseChunk(obj: unknown): string {
  return `data: ${JSON.stringify(obj)}\n\n`;
}

export async function POST(req: Request): Promise<Response> {
  const contentLength = req.headers.get("content-length");
  if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
    return jsonError(413, "payload_too_large", `Request body exceeds ${MAX_BODY_BYTES} bytes.`);
  }

  // Coach key — shared with the mobile relay, isolated from the site chat's ANTHROPIC_API_KEY_CHAT.
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return jsonError(503, "chat_not_configured", "Chat is not yet configured on this deployment.");
  }

  const rawText = await req.text();
  if (rawText.length > MAX_BODY_BYTES) {
    return jsonError(413, "payload_too_large", `Request body exceeds ${MAX_BODY_BYTES} bytes.`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(rawText);
  } catch {
    return jsonError(400, "invalid_json", "Request body is not valid JSON.");
  }
  const validated = validateBody(parsed);
  if (!validated.ok) return jsonError(400, "invalid_body", validated.message);

  const startedAt = Date.now();
  const ip = getClientIp(req);
  // Per-install identifier from the client header; falls back to IP inside checkAppRateLimit. The
  // logged identifier is the install when present (salted-hashed), else the IP — same privacy posture
  // as /api/chat: an identifier to distinguish callers, never a raw value, and never the answer.
  const rawInstall = req.headers.get(APP_INSTALL_HEADER);
  const installId = isValidInstallId(rawInstall) ? rawInstall : null;
  const logIdentity = hashIp(installId ?? ip);

  const telemetry: Telemetry = { retrieved: [], newsSlotFired: false, zeroRetrieval: false };
  const writeLog = (
    question: string,
    guardrail: ChatGuardrail | null,
    extra: { notFound?: boolean; inputTokens?: number | null; outputTokens?: number | null } = {}
  ) => {
    void logChatTurn(
      {
        ts: new Date().toISOString(),
        ipHash: logIdentity,
        question,
        retrieved: telemetry.retrieved,
        newsSlotFired: telemetry.newsSlotFired,
        guardrail,
        zeroRetrieval: telemetry.zeroRetrieval,
        notFound: extra.notFound ?? false,
        inputTokens: extra.inputTokens ?? null,
        outputTokens: extra.outputTokens ?? null,
        latencyMs: Date.now() - startedAt,
      },
      "chatapp", // SEPARATE analytics keyspace from /api/chat
    );
  };

  let rate;
  try {
    rate = await checkAppRateLimit(installId, ip);
  } catch {
    // KV unreachable — fail OPEN on rate limiting rather than taking chat down (matches /api/chat).
    rate = { ok: true, remaining: -1, scope: "install" as const };
  }
  if (!rate.ok) {
    writeLog(lastQuestionOf(validated.messages), "rate_limited");
    return jsonError(429, "rate_limited", "Daily chat limit reached. Please try again tomorrow.");
  }

  const lastUserMessage = [...validated.messages].reverse().find((m) => m.role === "user");
  const dosingCheck = lastUserMessage ? checkFirstPersonDosing(lastUserMessage.content) : { blocked: false };

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const encoder = new TextEncoder();
      const send = (obj: unknown) => controller.enqueue(encoder.encode(sseChunk(obj)));

      if (dosingCheck.blocked) {
        writeLog(lastUserMessage?.content ?? "", "dosing_prefilter");
        send({ type: "delta", text: dosingCheck.reason });
        send({ type: "done" });
        controller.close();
        return;
      }

      // Declared outside the try so a mid-turn failure can still report tokens already spent.
      const usage = { input: 0, output: 0 };
      const tally = (r: { usage?: { input_tokens?: number; output_tokens?: number } }) => {
        usage.input += r.usage?.input_tokens ?? 0;
        usage.output += r.usage?.output_tokens ?? 0;
      };

      try {
        const messages: AnthropicMessage[] = validated.messages.map((m) => ({ role: m.role, content: m.content }));

        let finalText = "";
        for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
          const response = await callAnthropic(apiKey, messages);
          tally(response);
          const toolUses = response.content.filter(
            (b): b is Extract<AnthropicContentBlock, { type: "tool_use" }> => b.type === "tool_use",
          );

          if (toolUses.length === 0 || response.stop_reason !== "tool_use") {
            finalText = response.content
              .filter((b): b is Extract<AnthropicContentBlock, { type: "text" }> => b.type === "text")
              .map((b) => b.text)
              .join("\n");
            break;
          }

          send({ type: "phase", phase: "searching" });

          messages.push({ role: "assistant", content: response.content });
          const toolResults = toolUses.map((tu) => ({
            type: "tool_result" as const,
            tool_use_id: tu.id,
            content: runSearchTool(typeof tu.input.query === "string" ? tu.input.query : "", telemetry),
          }));
          messages.push({ role: "user", content: toolResults as unknown as AnthropicContentBlock[] });

          send({ type: "phase", phase: "generating" });

          if (round === MAX_TOOL_ROUNDS - 1) {
            const forced = await callAnthropic(apiKey, messages);
            tally(forced);
            finalText = forced.content
              .filter((b): b is Extract<AnthropicContentBlock, { type: "text" }> => b.type === "text")
              .map((b) => b.text)
              .join("\n");
          }
        }

        if (!finalText.trim()) {
          finalText = "I wasn't able to find anything on Prof. Peptide for that — try rephrasing your question.";
        }

        // App output filter: strip anything code/price-shaped the model may have hallucinated. There
        // is deliberately NO placeholder substitution here — the app assistant has no commerce path.
        const { text: safeText } = stripResidualCodesAndPrices(finalText);

        const words = safeText.split(/(\s+)/);
        for (const w of words) {
          send({ type: "delta", text: w });
          await new Promise((r) => setTimeout(r, 12));
        }
        send({ type: "done" });
        writeLog(lastUserMessage?.content ?? "", null, {
          notFound: looksLikeNotFound(safeText),
          inputTokens: usage.input,
          outputTokens: usage.output,
        });
      } catch (err) {
        send({ type: "error", message: err instanceof Error ? err.message : "Something went wrong." });
        writeLog(lastUserMessage?.content ?? "", "api_error", { inputTokens: usage.input, outputTokens: usage.output });
      } finally {
        controller.close();
      }
    },
  });

  // No CORS headers: the client is the native iOS app (expo/fetch), not a browser, so there is no
  // preflight and no Origin to allow — same-origin CORS rules simply don't apply to it. Omitting the
  // headers also keeps this endpoint from being callable by an arbitrary website's JS.
  return new Response(stream, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}
