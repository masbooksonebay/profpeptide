"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return <p className="text-sm text-[#0891b2] font-medium py-2">You&apos;re on the list! We&apos;ll email you at launch.</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 border border-gray-200 dark:border-slate-600 rounded-md px-4 py-2.5 text-sm bg-white dark:bg-[#0f172a] text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:border-transparent"
        />
        <button type="submit" className="btn-primary whitespace-nowrap" disabled={status === "loading"}>
          {status === "loading" ? "Joining..." : "Notify Me"}
        </button>
      </form>
      {status === "error" && <p className="text-xs text-red-500 mt-2">Something went wrong. Please try again.</p>}
    </>
  );
}
