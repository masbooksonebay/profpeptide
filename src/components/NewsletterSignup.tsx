"use client";

import { useState } from "react";

// Footer newsletter signup — the ONLY client island in the otherwise-server Footer. It renders
// as a child of the server Footer component, so only this small unit ships as client JS; the
// footer's link grid stays server-rendered. Posts to /api/subscribe, which adds the address to
// the Newsletter + Promotions audiences (single opt-in, no welcome email).
export default function NewsletterSignup() {
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

  return (
    <div className="max-w-md">
      <p className="font-bold text-[#16181B] dark:text-slate-100 text-base mb-1">
        Get peptide research news and special promotions from verified vendors.
      </p>
      <p className="text-xs text-gray-500 dark:text-slate-400 mb-4">About one email a week.</p>

      {status === "success" ? (
        <p className="text-sm font-medium text-[#3A759F]">
          Thanks — you&apos;re subscribed.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2" noValidate>
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

          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            aria-invalid={status === "error"}
            className="flex-1 min-w-0 border border-[#D9DEE4] dark:border-slate-600 rounded-md px-3 py-2 text-sm bg-white dark:bg-[#0f172a] text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#3A759F] focus:border-transparent"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary text-sm px-4 py-2 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "…" : "Subscribe"}
          </button>
        </form>
      )}

      {status === "error" && <p className="text-sm text-red-500 mt-2">{errorMsg}</p>}
    </div>
  );
}
