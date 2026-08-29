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
import { ArrowUp } from "lucide-react";
import { linkifyPpUrls } from "@/lib/chat-linkify";

// Two states only. There was a third, "preconversation" — a splash card with the logo, a
// "Prof. Peptide AI" title and a "Start chat" button — sitting between the launcher and the
// conversation. It was removed: it cost a tap to reach the thing the user already asked for by
// clicking the launcher, and the seed prompts do its job better from inside the empty message
// area, where they are one tap from an actual answer instead of two.
type WidgetState = "collapsed" | "active";

/** What the panel tells the user it's doing while they wait. "thinking" is the client-side default
 *  from the moment they hit send; "searching"/"generating" come from the route's phase events. */
type ChatPhase = "thinking" | "searching" | "generating";

/** No byte from the server for this long and we give up. Without it a silently stalled connection
 *  (server hung, network black-holed mid-stream) leaves `reader.read()` pending forever, so the
 *  `finally` that clears `streaming` never runs and the indicator animates until the tab closes.
 *  Generous, because two Anthropic round-trips plus a corpus search legitimately take 5-10s. */
const STALL_TIMEOUT_MS = 45_000;

/** Minimum time the "Searching Prof. Peptide…" label stays up.
 *
 *  MEASURED, not guessed: the route emits `searching` and `generating` in the SAME millisecond
 *  (t+1.18s/t+1.18s and t+3.73s/t+3.73s across sampled runs), because retrieval is an in-memory
 *  scan of an already-loaded corpus — it costs ~0ms. The real wait is the two Anthropic round-trips
 *  either side of it. Without a floor the search phase would flash for a single frame and no user
 *  would ever see it, even though a search genuinely ran (one sampled question ran THREE of them).
 *  This is a floor on a true event's visibility, not a fake stage: the label never appears unless
 *  the route actually reported a search. */
const SEARCH_LABEL_MIN_MS = 600;
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
  const [phase, setPhase] = useState<ChatPhase>("thinking");
  // Mobile = below the panel's own sm: boundary. Everything modal-related below is gated on this;
  // desktop keeps a floating panel over a live, scrollable page and must not regress.
  const [isMobile, setIsMobile] = useState(false);
  // Visual-viewport geometry, mobile+open only. null = don't override layout.
  const [vv, setVv] = useState<{ height: number; top: number } | null>(null);
  const searchLabelAtRef = useRef<number>(0);
  const phaseTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, streaming]);

  useEffect(
    () => () => {
      abortRef.current?.abort();
      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
    },
    []
  );

  /** Writes text into the waiting placeholder bubble (or appends, if it has already been cleaned
   *  up) so an informational reply lands where the user is already looking. */
  function fillPlaceholder(content: string) {
    setMessages((m) => {
      if (m.length > 0 && m[m.length - 1].role === "assistant" && m[m.length - 1].content === "") {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content };
        return copy;
      }
      return [...m, { role: "assistant", content }];
    });
  }

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;
    setError(null);
    const next: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setStreaming(true);
    setPhase("thinking");
    // The placeholder assistant bubble goes in IMMEDIATELY, not after the response headers: the
    // indicator renders inside it, so when real text arrives it fills this same bubble and nothing
    // moves. That's what makes the swap jump-free — it isn't two elements, it's one bubble whose
    // contents change. Every exit path below removes it again if it never got content.
    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    const controller = new AbortController();
    abortRef.current = controller;

    // Reset on every chunk, so this fires on SILENCE rather than on total duration — a long but
    // healthy answer is never cut off, while a dead connection is.
    let stalled = false;
    let watchdog: ReturnType<typeof setTimeout> | undefined;
    const armWatchdog = () => {
      if (watchdog) clearTimeout(watchdog);
      watchdog = setTimeout(() => {
        stalled = true;
        controller.abort();
      }, STALL_TIMEOUT_MS);
    };
    armWatchdog();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
        signal: controller.signal,
      });

      if (res.status === 503) {
        fillPlaceholder("Chat isn't set up on this deployment yet.");
        return;
      }
      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => null);
        setError(body?.error?.message ?? "Something went wrong. Try again.");
        return;
      }

      let assistantText = "";
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        armWatchdog();
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
          } else if (payload.type === "phase") {
            // Advisory only — an unrecognised phase is ignored rather than trusted into state.
            if (payload.phase === "searching") {
              if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
              searchLabelAtRef.current = Date.now();
              setPhase("searching");
            } else if (payload.phase === "generating") {
              const shown = Date.now() - searchLabelAtRef.current;
              const wait = Math.max(0, SEARCH_LABEL_MIN_MS - shown);
              if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
              if (wait === 0) setPhase("generating");
              else phaseTimerRef.current = setTimeout(() => setPhase("generating"), wait);
            }
          } else if (payload.type === "error") {
            setError(payload.message);
          }
        }
      }
    } catch (err) {
      // A stall aborts deliberately, so it surfaces as AbortError too — the flag tells the two
      // apart. An abort we did NOT cause (panel unmount) stays silent, as before.
      if (stalled) setError("That took too long. Try again.");
      else if ((err as Error).name !== "AbortError") setError("Connection lost. Try again.");
    } finally {
      if (watchdog) clearTimeout(watchdog);
      if (phaseTimerRef.current) clearTimeout(phaseTimerRef.current);
      setStreaming(false);
      setPhase("thinking");
      // The single place the placeholder is cleaned up. Whatever happened — 429, network drop,
      // stall, malformed event, an empty answer — an assistant bubble that never received content
      // is removed here, so the indicator can't outlive the request on ANY path.
      setMessages((m) =>
        m.length > 0 && m[m.length - 1].role === "assistant" && m[m.length - 1].content === ""
          ? m.slice(0, -1)
          : m
      );
    }
  }

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639.98px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // ---- background scroll lock (mobile, while open) ----------------------------------------
  // TECHNIQUE: position:fixed on <body> with a negative top offset, NOT `overflow: hidden`.
  // overflow:hidden alone does not stop iOS Safari — the page still rubber-bands and momentum
  // scrolling carries through, which is one of the reported symptoms. position:fixed genuinely
  // freezes it.
  //
  // The known cost of position:fixed is that it collapses the scroll offset to 0, so the page
  // jumps to the top on open and stays there on close. That is avoided here by capturing scrollY
  // BEFORE locking, holding the page in place visually with `top: -scrollY`, and restoring the
  // exact offset in the cleanup. Net visible movement: none, in either direction.
  //
  // Cleanup restores the previous inline values rather than clearing them, so this cannot stomp a
  // style some other component set on <body>.
  useEffect(() => {
    if (state !== "active" || !isMobile) return;
    const body = document.body;
    const scrollY = window.scrollY;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      // `behavior: "instant"` is REQUIRED, not a stylistic choice: globals.css sets
      // `html { scroll-behavior: smooth }` site-wide, so a plain scrollTo(0, y) ANIMATES the
      // restore. The user would watch the page glide back to where they were — the visible jump
      // this whole approach exists to avoid — and the position is still wrong on the next frame.
      // Measured: with the default behavior the restore landed on 0 instead of 900; with "instant"
      // it lands exactly. Verified outside React too, so it is the CSS, not an effect-timing bug.
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [state, isMobile]);

  // ---- keyboard: anchor the panel to the VISUAL viewport (mobile, while open) --------------
  // iOS Safari does not shrink the layout viewport when the software keyboard appears. A panel
  // sized with layout units (bottom-0, 100vh, 100svh) therefore keeps its full pre-keyboard height,
  // and its input row ends up underneath the keyboard — invisible and untappable. window.
  // visualViewport is the only thing that reports the real visible rectangle.
  //
  // Driving BOTH height and top matters: when iOS scrolls the layout viewport to reveal a focused
  // input it sets visualViewport.offsetTop, and a position:fixed element that ignores that appears
  // to jump. Tracking `scroll` as well as `resize` is what keeps the panel still while the keyboard
  // animates in. Listeners are torn down by this effect's cleanup, which runs on close (the panel
  // is conditionally rendered) and on unmount.
  useEffect(() => {
    if (state !== "active" || !isMobile) {
      setVv(null);
      return;
    }
    const v = window.visualViewport;
    if (!v) return; // no support: fall back to the CSS layout, which is the pre-existing behaviour
    const update = () => setVv({ height: v.height, top: v.offsetTop });
    update();
    v.addEventListener("resize", update);
    v.addEventListener("scroll", update);
    // window.resize as well as the visualViewport events, deliberately. Not every engine fires a
    // visualViewport `resize` for every geometry change — caught in testing, where shrinking the
    // viewport left the panel pinned at its stale opening height (844px against a 508px visible
    // area) and put the input row back under the fold, i.e. the exact bug this effect exists to
    // prevent. Both sources call the same idempotent update, so a doubled event costs nothing.
    window.addEventListener("resize", update);
    return () => {
      v.removeEventListener("resize", update);
      v.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [state, isMobile]);

  // Single close path for every route (Esc, the mobile X, the launcher). Focus returns to the
  // launcher so a keyboard user lands on the control that reopens the panel, rather than being
  // dropped at the top of the document with no idea where they are.
  const closePanel = useCallback(() => {
    setState("collapsed");
    launcherRef.current?.focus();
  }, []);

  // The launcher is a true toggle: it stays mounted whether the panel is open or closed, and
  // clicking it while open collapses the panel (on mobile, the header's X does the same — the
  // full-screen panel covers the launcher there). Opening always lands on the conversation —
  // an existing one if there is one, an empty one with the seed prompts if there isn't.
  function toggleChat() {
    if (state === "collapsed") setState("active");
    else closePanel();
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
      {state === "active" && (
        /* MOBILE = TRUE MODAL. `inset-0` (was top-16) so the panel owns the entire viewport: the
           64px header strip it used to leave exposed was fully interactive — the site logo LINK,
           the hamburger and search all hit-tested outside the panel, so a stray tap could navigate
           away and take the conversation with it. Covering the viewport with an opaque surface is
           what makes "nothing behind is reachable" true, rather than a separate backdrop element.

           z-[60] on mobile is load-bearing, not a bump for luck: Header.tsx is `sticky top-0 z-50`,
           so at z-40 the header painted ON TOP of a panel that geometrically covered it and stayed
           hit-testable — inset-0 alone left the exact bug it was meant to fix. sm:z-40 restores the
           original stacking on desktop, where the panel sits below the header and never overlaps it.

           The inline style (mobile only) anchors the panel to the VISUAL viewport so the keyboard
           can't push the input row out of sight — see the visualViewport effect above. It sets top
           and height and neutralises the CSS `bottom`, because bottom would otherwise re-anchor the
           element to the un-shrunk layout viewport and fight the height.

           DESKTOP (sm+) is untouched: still a bounded floating card at the launcher's corner, over a
           page that stays scrollable and interactive. Every modal behaviour is gated on isMobile. */
        <div
          style={isMobile && vv ? { top: vv.top, height: vv.height, bottom: "auto" } : undefined}
          className="fixed z-[60] sm:z-40 inset-0 sm:inset-x-auto sm:inset-y-auto sm:top-[80px] md:top-[88px] sm:bottom-24 sm:right-6 sm:w-[380px] sm:max-h-[600px] flex flex-col bg-white dark:bg-[#1e293b] sm:border sm:border-[#D9DEE4] dark:sm:border-slate-700 sm:rounded-xl shadow-[0_8px_32px_-4px_rgba(16,24,40,0.25)]"
        >
          <PanelChrome
            onClose={closePanel}
            messages={messages}
            input={input}
            setInput={setInput}
            streaming={streaming}
            phase={phase}
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
  onClose,
  messages,
  input,
  setInput,
  streaming,
  phase,
  error,
  scrollRef,
  onSend,
}: {
  onClose: () => void;
  messages: ChatMessage[];
  input: string;
  setInput: (v: string) => void;
  streaming: boolean;
  phase: ChatPhase;
  error: string | null;
  scrollRef: React.RefObject<HTMLDivElement>;
  onSend: (text: string) => void;
}) {
  // Empty input or an in-flight answer means there is nothing to send. Drives BOTH the disabled
  // attribute and the fill colour, so the two can never disagree about the state.
  const canSend = !streaming && input.trim().length > 0;
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus the input on open — DESKTOP ONLY. This component is mounted by a conditional render
  // in the parent, so it mounts fresh every time the panel opens and a mount effect is precisely
  // "on open"; there is no state to watch.
  //
  // The breakpoint test is deliberate and matches the panel's own sm: boundary (640px). Focusing an
  // input on a touch device raises the software keyboard immediately, which would cover the seed
  // prompts — the one thing a first-time user should see, and the reason they were moved into the
  // empty message area at all. So mobile opens unfocused and the prompts stay visible; tapping the
  // input still raises the keyboard, on the user's initiative, exactly as expected.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 640px)").matches) return;
    inputRef.current?.focus();
  }, []);
  return (
    <div className="flex flex-col h-full">
      {/* Mobile safe-area padding on TOP: now that the panel is inset-0 it reaches the status bar /
          notch, which the old top-16 offset used to keep it clear of. sm: resets to the plain py-3
          because the desktop card floats below the header and never meets a system inset. */}
      <div className="flex items-center justify-between px-4 py-3 pt-[calc(0.75rem+env(safe-area-inset-top))] sm:pt-3 border-b border-[#D9DEE4] dark:border-slate-700">
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

      {/* overscroll-contain stops a flick at the top/bottom of the message list from chaining into
          the page behind it — the other half of "the background does not move". */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-4">
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
                <PendingIndicator phase={phase} />
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
        {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
      </div>

      {/* The send control lives INSIDE the input, not beside it.
          It used to be `flex gap-2` with a text "Send" button as a second item, which overflowed
          the panel on a ~380px screen and pushed the button off-screen where it could not be
          tapped. The cause was structural, not a width to tune: a flex item's default
          `min-width: auto` means an <input> refuses to shrink below its intrinsic size, so
          `flex-1` could not save the row no matter what widths were set. One element in the row
          instead of two removes the failure mode entirely rather than tuning around it.

          Same implementation on desktop — there is no reason for them to diverge, and a single
          code path can't drift between breakpoints. */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSend(input);
        }}
        className="p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:pb-3 border-t border-[#D9DEE4] dark:border-slate-700"
      >
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question…"
            disabled={streaming}
            /* pr-11 reserves exactly the 44px the button occupies, so typed text can never run
               underneath the arrow. */
            className="w-full text-sm pl-3 pr-11 py-2 rounded-md border border-[#D9DEE4] dark:border-slate-700 bg-white dark:bg-[#1e293b] text-gray-800 dark:text-slate-200 focus:outline-none focus:border-brand disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!canSend}
            aria-label="Send message"
            /* The BUTTON is 44x44 (the platform minimum tap target); the visible circle inside
               it is 32px, matching the iOS app's sendBtn (32x32, borderRadius 16). The hit area
               deliberately extends past the visible circle — that padding is the point. */
            className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center disabled:cursor-default"
          >
            <span
              /* Muted grey when there is nothing to send, brand accent once there is, with a
                 quiet colour fade between. motion-reduce drops the fade to an instant swap —
                 the colour still conveys the state, so nothing is lost without the animation. */
              className={
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 motion-reduce:transition-none " +
                (canSend ? "bg-brand" : "bg-gray-300 dark:bg-slate-600")
              }
            >
              <ArrowUp className="w-[18px] h-[18px] text-white" strokeWidth={2.5} aria-hidden="true" />
            </span>
          </button>
        </div>
      </form>

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

// The waiting indicator, rendered INSIDE the placeholder assistant bubble (see sendMessage) so it
// occupies the exact position and styling the real answer will, and the swap moves nothing.
//
// PHASES: the route reports what it's actually doing (src/app/api/chat/route.ts emits
// {"type":"phase"}), so the label is honest rather than a generic stand-in — during the corpus
// search it says so, and it only claims to be writing once the model is writing. If a phase event
// never arrives, this stays on the "thinking" default and still works.
//
// MOTION: opacity-only pulse on a stagger — no bounce, no spinner, no translation. Under
// prefers-reduced-motion the animation is dropped entirely (motion-reduce:animate-none, matching
// the homepage scroll cue) and the dots render as three static marks, which still reads as a
// placeholder rather than as an empty bubble.
//
// ACCESSIBILITY: role="status" + aria-live="polite" announces the wait without interrupting, and
// the announcement is the LABEL only — the dots carry aria-hidden, so a screen reader never reads
// them as message content, and nothing here is announced as part of the conversation. The label is
// visible too: once the route can say "Searching Prof. Peptide…", hiding that from sighted users
// would throw away the whole point of the phase events.
const PHASE_LABEL: Record<ChatPhase, string> = {
  thinking: "Thinking…",
  searching: "Searching Prof. Peptide…",
  generating: "Writing the answer…",
};

function PendingIndicator({ phase }: { phase: ChatPhase }) {
  const label = PHASE_LABEL[phase];
  return (
    <span role="status" aria-live="polite" className="inline-flex items-center gap-2">
      <span aria-hidden="true" className="inline-flex items-center gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-slate-500 animate-chat-dot motion-reduce:animate-none"
            style={{ animationDelay: `${i * 0.16}s` }}
          />
        ))}
      </span>
      <span className="text-xs text-gray-500 dark:text-slate-400">{label}</span>
    </span>
  );
}
