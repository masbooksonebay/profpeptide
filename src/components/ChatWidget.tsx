"use client";

// Floating AI chat assistant — Phase 3. Three states (collapsed launcher / pre-conversation panel /
// active conversation), matching docs/PP_AI_CHAT_PROPOSAL.md and the locked UI spec.
//
// No localStorage/sessionStorage anywhere in this file — conversation state is plain React state,
// intentionally lost on reload (the spec's explicit requirement). Streaming is read manually from
// the fetch body (src/app/api/chat/route.ts emits a custom `data: {"type":...}` SSE-shaped stream,
// not raw Anthropic passthrough — see that file's header for why).
//
// Positioning: fixed bottom-right, sized as a standard small FAB (56px) with iOS Safari safe-area
// clearance via env(safe-area-inset-bottom). No other element on the site uses fixed bottom-right
// positioning (verified: `grep -rn "fixed.*bottom\|bottom.*fixed" src/components src/app` finds
// nothing else), so this claims previously-unclaimed screen real estate — it cannot collide with an
// existing control. Inline page content (Shop buttons, price-grid controls) is never fixed, so it
// scrolls freely under/past the corner the launcher occupies rather than being permanently obscured.
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { linkifyPpUrls } from "@/lib/chat-linkify";

type WidgetState = "collapsed" | "preconversation" | "active";
type ChatMessage = { role: "user" | "assistant"; content: string };

const SEED_PROMPTS = [
  "What doses were used in retatrutide trials?",
  "What is BPC-157 used for in research?",
  "What's the difference between CJC-1295 and ipamorelin?",
];

// RUO framing, matching the language the rest of the site already uses. The previous wording
// ("Research information from Prof. Peptide's own pages...") parsed ambiguously — "Research" reads
// as an imperative verb as readily as an adjective, which turns a disclaimer into what looks like
// an instruction. This is unambiguous.
const DISCLOSURE_TEXT = "Research use only. Not medical advice.";

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

export default function ChatWidget() {
  const [state, setState] = useState<WidgetState>("collapsed");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, streaming]);

  useEffect(() => () => abortRef.current?.abort(), []);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;
    setError(null);
    const next: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
        signal: controller.signal,
      });

      if (res.status === 503) {
        setMessages((m) => [...m, { role: "assistant", content: "Chat isn't set up on this deployment yet." }]);
        setStreaming(false);
        return;
      }
      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => null);
        setError(body?.error?.message ?? "Something went wrong. Try again.");
        setStreaming(false);
        return;
      }

      let assistantText = "";
      setMessages((m) => [...m, { role: "assistant", content: "" }]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split("\n\n");
        buffer = events.pop() ?? "";
        for (const evt of events) {
          const line = evt.trim();
          if (!line.startsWith("data:")) continue;
          const payload = JSON.parse(line.slice(5).trim());
          if (payload.type === "delta") {
            assistantText += payload.text;
            const snapshot = assistantText;
            setMessages((m) => {
              const copy = [...m];
              copy[copy.length - 1] = { role: "assistant", content: snapshot };
              return copy;
            });
          } else if (payload.type === "error") {
            setError(payload.message);
          }
        }
      }
    } catch (err) {
      if ((err as Error).name !== "AbortError") setError("Connection lost. Try again.");
    } finally {
      setStreaming(false);
    }
  }

  // Single close path for every route (Esc, the mobile X, the launcher). Focus returns to the
  // launcher so a keyboard user lands on the control that reopens the panel, rather than being
  // dropped at the top of the document with no idea where they are.
  const closePanel = useCallback(() => {
    setState("collapsed");
    launcherRef.current?.focus();
  }, []);

  // The launcher is a true toggle: it stays mounted whether the panel is open or closed, and
  // clicking it while open collapses the panel (on mobile, the header's X does the same — the
  // full-screen panel covers the launcher there). Reopening returns to the conversation if one is
  // already underway, rather than back to the splash.
  function toggleChat() {
    if (state === "collapsed") {
      setState(messages.length > 0 ? "active" : "preconversation");
    } else {
      closePanel();
    }
  }

  // Esc dismisses the panel — the conventional keyboard route, and on desktop (where the header X
  // is sm:hidden) the only one besides the launcher. Wired at ALL breakpoints: a mobile keyboard
  // user benefits equally. The listener is mounted only while the panel is open and torn down on
  // close/unmount, so no global handler lingers while the widget is collapsed.
  useEffect(() => {
    if (state === "collapsed") return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      // An active IME composition owns Escape (it cancels candidate selection). `isComposing`, with
      // the legacy keyCode 229 as a fallback for older engines, means the browser is mid-composition
      // — let it have the key rather than yanking the panel closed under the user.
      if (e.isComposing || e.keyCode === 229) return;
      closePanel();
    }
    // Bound on document, so it fires regardless of what's focused — including the message input,
    // which has no Escape handler of its own for this to fight with.
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [state, closePanel]);

  function startConversation() {
    setState("active");
  }

  return (
    <>
      {/* Launcher: ALWAYS mounted, in every state — 56px, corner-positioned, iOS safe-area aware.
          It toggles both directions, so on desktop (where the panel floats above it at sm:bottom-24,
          leaving a ~24px gap — no overlap) it stays visible and clickable as a second close control.
          On mobile the full-screen panel deliberately covers it: both are z-40 and the panel is later
          in the DOM, so the panel paints on top. That's intended — a floating button hovering over a
          full-screen panel would be a second, competing close affordance. The panel header's X is the
          close control there. */}
      <button
        ref={launcherRef}
        type="button"
        onClick={toggleChat}
        aria-expanded={state !== "collapsed"}
        aria-label={state === "collapsed" ? "Open Prof. Peptide research assistant" : "Close Prof. Peptide research assistant"}
        className="fixed z-40 right-4 sm:right-6 bg-brand hover:bg-brand-hover text-white rounded-full w-14 h-14 flex items-center justify-center shadow-[0_4px_16px_-2px_rgba(16,24,40,0.35)] transition-colors duration-200"
        style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      >
        <ChatIcon className="w-8 h-8" />
      </button>

      {/* Header clearance is TOP+BOTTOM double-anchored (not a fixed height) so the implied height
          adapts to viewport height and can never overlap the header — verified against Header.tsx's
          real heights (h-16=64px below md, md:h-[72px]=72px at 768px+), not guessed. Mobile (default,
          <640px, always below the header's md: breakpoint so only one value applies): top-16 clears
          the 64px header, full width/height below it, with its own close control. Desktop (sm+): a
          bounded floating card above the launcher's corner — top-[80px]/md:top-[88px] = header height
          + 16px gap at each breakpoint, bottom-24 clears the 56px launcher plus margin. max-h caps it
          on tall viewports; a shorter viewport just shrinks the implied height, never overlaps either
          edge. The mobile INPUT bar gets its own safe-area padding below. */}
      {(state === "preconversation" || state === "active") && (
        <div className="fixed z-40 top-16 inset-x-0 bottom-0 sm:inset-x-auto sm:top-[80px] md:top-[88px] sm:bottom-24 sm:right-6 sm:w-[380px] sm:max-h-[600px] flex flex-col bg-white dark:bg-[#1e293b] sm:border sm:border-[#D9DEE4] dark:sm:border-slate-700 sm:rounded-xl shadow-[0_8px_32px_-4px_rgba(16,24,40,0.25)]">
          <PanelChrome
            state={state}
            onClose={closePanel}
            onStart={startConversation}
            messages={messages}
            input={input}
            setInput={setInput}
            streaming={streaming}
            error={error}
            scrollRef={scrollRef}
            onSend={sendMessage}
          />
        </div>
      )}
    </>
  );
}

function PanelChrome({
  state,
  onClose,
  onStart,
  messages,
  input,
  setInput,
  streaming,
  error,
  scrollRef,
  onSend,
}: {
  state: WidgetState;
  onClose: () => void;
  onStart: () => void;
  messages: ChatMessage[];
  input: string;
  setInput: (v: string) => void;
  streaming: boolean;
  error: string | null;
  scrollRef: React.RefObject<HTMLDivElement>;
  onSend: (text: string) => void;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#D9DEE4] dark:border-slate-700">
        <div>
          <div className="font-semibold text-[#16181B] dark:text-slate-100 text-sm">Prof. Peptide</div>
          <div className="text-xs text-gray-500 dark:text-slate-400">Ask about peptides, vendors, and more...</div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          /* MOBILE ONLY (sm:hidden). On desktop the persistent launcher toggles the panel closed,
             so an X here would be a redundant second control. On mobile the full-screen panel covers
             the launcher, making this the ONLY way to close — so it stays, at a 44x44px tap target
             (p-3: 12px padding + 20px icon + 12px), the platform minimum. gray-500 over gray-400 for
             contrast on a control that has to be findable. */
          className="sm:hidden p-3 -mr-1.5 text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200 rounded-md"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      {state === "preconversation" ? (
        /* Pre-conversation splash. No panel fill or border: the grey box competed with the content,
           and the site's own aesthetic is restrained — whitespace and type carry this instead.
           items-center + justify-center centers the whole block (mark → title → button) as one unit
           in whatever vertical space the panel has, rather than parking it at an arbitrary height.
           The button sizes to its content (btn-primary's own px-6 py-3), not edge-to-edge, which
           reads more deliberate in a centered layout. */
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 text-center">
          {/* The site's own logo mark, same asset the Header uses. alt="" — decorative here, since
              the title immediately below already names the product; announcing it twice to a screen
              reader would be noise. */}
          <Image
            src="/logo-glasses.png"
            alt=""
            width={56}
            height={56}
            className="w-14 h-14 object-contain mb-4"
          />
          <p className="text-2xl font-semibold tracking-tight text-brand mb-6">
            Prof. Peptide AI
          </p>
          {/* text-base overrides btn-primary's text-sm (utilities layer wins over the
              components layer) — a one-step bump so the label doesn't read small next to
              the text-2xl title above it. Local to this button; the shared .btn-primary
              stays text-sm everywhere else. Padding is unchanged: px-6 py-3 still clears
              a 16px label comfortably. */}
          <button type="button" onClick={onStart} className="btn-primary text-base">
            Start chat
          </button>
        </div>
      ) : (
        <>
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.length === 0 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-400 dark:text-slate-500 mb-2">Try asking:</p>
                {SEED_PROMPTS.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => onSend(p)}
                    className="block w-full text-left text-sm px-3 py-2 rounded-md border border-[#D9DEE4] dark:border-slate-700 text-gray-600 dark:text-slate-300 hover:border-brand hover:text-brand transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-xl px-3 py-2 bg-brand text-white text-sm whitespace-pre-wrap"
                      : "max-w-[85%] rounded-xl px-3 py-2 bg-[#F4F6F8] dark:bg-[#0f172a] text-gray-800 dark:text-slate-200 text-sm whitespace-pre-wrap"
                  }
                >
                  {m.content ? (
                    <LinkifiedText text={m.content} onLight={m.role !== "user"} />
                  ) : streaming && i === messages.length - 1 ? (
                    "…"
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
            {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSend(input);
            }}
            className="p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:pb-3 border-t border-[#D9DEE4] dark:border-slate-700 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              disabled={streaming}
              className="flex-1 text-sm px-3 py-2 rounded-md border border-[#D9DEE4] dark:border-slate-700 bg-white dark:bg-[#1e293b] text-gray-800 dark:text-slate-200 focus:outline-none focus:border-brand disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={streaming || !input.trim()}
              className="btn-primary px-4 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </>
      )}

      {/* Footer: the standing disclosure, plus a quiet attribution line. "Powered by Claude" is
          PLAIN TEXT by design — no Anthropic/Claude logo or mark, no link, and no wording implying
          partnership, endorsement, or affiliation (per Anthropic's published attribution guidance).
          It inherits the same muted footer weight as the disclosure so it reads as attribution
          rather than a badge. */}
      <div className="px-4 py-2 border-t border-[#D9DEE4] dark:border-slate-700 text-[11px] text-gray-400 dark:text-slate-500 text-center">
        <p>{DISCLOSURE_TEXT}</p>
        <p className="mt-0.5">Powered by Claude</p>
      </div>
    </div>
  );
}

// Renders answer text with Prof. Peptide URLs as links and EVERYTHING else as plain text.
//
// 🔒 No dangerouslySetInnerHTML, no markdown renderer, no HTML parsing — the text is model output
// with retrieved page content flowing through it, so it is treated as data end to end. Segmenting
// happens in src/lib/chat-linkify.ts (strict PP-only allowlist; hrefs rebuilt onto a fixed origin
// rather than taken from the matched text), and React escapes every text segment on the way out.
//
// STREAMING: this runs on each render, so links appear as the text arrives rather than only at
// completion. A URL still mid-stream links to the partial path it has so far and corrects itself on
// the next chunk — self-healing, because nothing is memoized across chunks.
//
// TARGET=_BLANK, deliberately: the conversation is plain React state with no storage backing (see
// this file's header), so a same-tab navigation destroys it. Verified rather than assumed. A link
// that silently wipes the chat would be worse than the plain-text URL it replaced. rel="noopener
// noreferrer" comes with it as the standard safeguard for _blank.
function LinkifiedText({ text, onLight }: { text: string; onLight: boolean }) {
  const segments = linkifyPpUrls(text);
  return (
    <>
      {segments.map((seg, i) =>
        seg.type === "link" ? (
          <a
            key={i}
            href={seg.href}
            target="_blank"
            rel="noopener noreferrer"
            // The site's standard inline-link treatment (text-brand === #3A759F, the accent token
            // 2,939 inline links already use), plus break-words because a full URL must wrap inside
            // a 380px panel. On the user's brand-filled bubble the accent would vanish into the
            // background, so links there use the bubble's own foreground with an underline.
            className={
              onLight
                ? "text-brand hover:underline break-words"
                : "text-white underline break-words"
            }
          >
            {seg.value}
          </a>
        ) : (
          <span key={i}>{seg.value}</span>
        )
      )}
    </>
  );
}
