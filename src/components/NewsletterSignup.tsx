"use client";

import { useState } from "react";

// Newsletter signup — a client island that POSTs to /api/subscribe (single opt-in, both topics).
// ONE component, ONE submit path, rendered in two places via `variant` (do NOT fork it):
//   - "footer" (default): compact, left-aligned utility row in the site footer (all pages).
//   - "card": elevated, centered treatment for the homepage signup band — same visual weight as
//     the Get-the-App card. ONLY presentation branches on the variant; the form logic is shared.
// Both variants can render on the SAME page (the homepage has the card AND the footer), so the
// input id is variant-scoped to stay unique and keep each label bound to its own input.
export default function NewsletterSignup({ variant = "footer" }: { variant?: "footer" | "card" }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@") || email.trim().length < 5) {
      setErrorMsg("Please enter a valid email.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }
      if (res.status === 429) {
        setErrorMsg("Too many attempts. Please try again later.");
      } else if (res.status === 400) {
        setErrorMsg("Please enter a valid email.");
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
      setStatus("error");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const isCard = variant === "card";
  const inputId = `newsletter-email-${variant}`;

  return (
    <div className={isCard ? "w-full text-center" : "max-w-md"}>
      <p
        className={
          isCard
            ? "text-xl sm:text-2xl font-bold text-[#16181B] dark:text-slate-100 mb-1.5"
            : "font-bold text-[#16181B] dark:text-slate-100 text-base mb-1"
        }
      >
        Get peptide research news and special promotions from verified vendors.
      </p>
      <p
        className={
          isCard
            ? "text-sm text-gray-500 dark:text-slate-400 mb-5"
            : "text-xs text-gray-500 dark:text-slate-400 mb-4"
        }
      >
        About one email a week.
      </p>

      {status === "success" ? (
        <p className={`text-sm font-medium text-[#3A759F]${isCard ? " py-2" : ""}`}>
          Thanks — you&apos;re subscribed.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={isCard ? "flex flex-col sm:flex-row gap-2 max-w-md mx-auto" : "flex flex-col sm:flex-row gap-2"}
          noValidate
        >
          {/* Honeypot — hidden from users, catches bots. */}
          <div style={{ position: "absolute", left: "-9999px", top: 0 }} aria-hidden="true">
            <label>
              Website
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>
          </div>

          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <input
            id={inputId}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            aria-invalid={status === "error"}
            className={
              isCard
                ? "flex-1 min-w-0 border border-[#D9DEE4] dark:border-slate-600 rounded-md px-4 py-2.5 text-base bg-white dark:bg-[#0f172a] text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#3A759F] focus:border-transparent"
                : "flex-1 min-w-0 border border-[#D9DEE4] dark:border-slate-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-[#0f172a] text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#3A759F] focus:border-transparent"
            }
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={
              isCard
                ? "btn-primary px-6 py-2.5 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                : "btn-primary text-sm px-4 py-2 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
            }
          >
            {status === "loading" ? "…" : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && <p className="text-sm text-red-500 mt-2">{errorMsg}</p>}
    </div>
  );
}
