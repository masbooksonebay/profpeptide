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
import { useEffect, useRef, useState } from "react";

type WidgetState = "collapsed" | "preconversation" | "active";
type ChatMessage = { role: "user" | "assistant"; content: string };

const SEED_PROMPTS = [
  "What does Finnrick testing measure?",
  "Which vendors publish batch COAs?",
  "What doses were used in retatrutide trials?",
];

const DISCLOSURE_TEXT =
  "Research information from Prof. Peptide's own pages, not medical advice.";

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

  function openChat() {
    setState(messages.length > 0 ? "active" : "preconversation");
  }

  function startConversation() {
    setState("active");
  }

  return (
    <>
      {/* Collapsed: launcher only. 56px, corner-positioned, iOS safe-area aware. */}
      {state === "collapsed" && (
        <button
          type="button"
          onClick={openChat}
          aria-label="Open Prof. Peptide research assistant"
          className="fixed z-40 right-4 sm:right-6 bg-brand hover:bg-brand-hover text-white rounded-full w-14 h-14 flex items-center justify-center shadow-[0_4px_16px_-2px_rgba(16,24,40,0.35)] transition-colors duration-200"
          style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
        >
          <ChatIcon className="w-6 h-6" />
        </button>
      )}

      {/* Mobile (default): fixed inset-0, full-screen with its own close control (the header X).
          Desktop (sm+): a bounded floating card above the launcher's corner — bottom-24 clears the
          56px launcher plus margin without needing safe-area math (desktop has no notch/home-
          indicator concern). The mobile INPUT bar gets its own safe-area padding below. */}
      {(state === "preconversation" || state === "active") && (
        <div className="fixed z-40 inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[380px] sm:h-[min(600px,calc(100vh-8rem))] flex flex-col bg-white dark:bg-[#1e293b] sm:border sm:border-[#D9DEE4] dark:sm:border-slate-700 sm:rounded-xl shadow-[0_8px_32px_-4px_rgba(16,24,40,0.25)]">
          <PanelChrome
            state={state}
            onClose={() => setState("collapsed")}
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
          <div className="text-xs text-gray-500 dark:text-slate-400">Ask about peptides, vendors, and testing</div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat"
          className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-slate-200 rounded-md"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      {state === "preconversation" ? (
        <div className="flex-1 flex flex-col justify-center p-5">
          <div className="border border-[#D9DEE4] dark:border-slate-700 rounded-xl p-5 bg-[#F4F6F8] dark:bg-[#0f172a]">
            <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
              AI assistant — answers from Prof. Peptide&apos;s research library.
            </p>
            <button type="button" onClick={onStart} className="btn-primary w-full">
              Start Conversation &rarr;
            </button>
          </div>
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
                  {m.content || (streaming && i === messages.length - 1 ? "…" : "")}
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

      <div className="px-4 py-2 border-t border-[#D9DEE4] dark:border-slate-700 text-[11px] text-gray-400 dark:text-slate-500 text-center">
        {DISCLOSURE_TEXT}
      </div>
    </div>
  );
}
