"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

const CATEGORIES = [
  { value: "peptide-supplement", label: "Question about a peptide or supplement" },
  { value: "vendor-coupon", label: "Question about a vendor or coupon code" },
  { value: "correction-feedback", label: "Content correction or feedback" },
  { value: "vendor-partnership", label: "Vendor partnership inquiry" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "";
  const fromPath = searchParams.get("from") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (name.trim().length < 2) errs.name = "Name is required (min 2 characters).";
    if (!email.includes("@") || email.trim().length < 5) errs.email = "Please enter a valid email.";
    if (!category) errs.category = "Please choose a topic.";
    if (!subject.trim()) errs.subject = "Subject is required.";
    else if (subject.length > 120) errs.subject = "Subject must be under 120 characters.";
    if (message.trim().length < 20) errs.message = "Message must be at least 20 characters.";
    else if (message.length > 2000) errs.message = "Message must be under 2000 characters.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, category, subject, message, website, from: fromPath }),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }
      if (res.status === 429) {
        setErrorMsg("Too many submissions. Please try again later.");
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
      setStatus("error");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[#0891b2]/30 bg-[#0891b2]/5 p-6">
        <p className="text-lg font-medium text-[#1e2d3d] dark:text-slate-100 mb-2">Got it.</p>
        <p className="text-base text-gray-600 dark:text-slate-300 leading-relaxed">
          We&apos;ll respond within 3-5 business days. Check your inbox for a confirmation email.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full border border-gray-200 dark:border-slate-600 rounded-md px-4 py-2.5 text-base bg-white dark:bg-[#0f172a] text-gray-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0891b2] focus:border-transparent";
  const labelCls = "block text-base font-medium text-gray-700 dark:text-slate-200 mb-1.5";
  const errCls = "text-sm text-red-500 mt-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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

      <div>
        <label className={labelCls} htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength={2}
          required
          className={inputCls}
        />
        {errors.name && <p className={errCls}>{errors.name}</p>}
      </div>

      <div>
        <label className={labelCls} htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputCls}
        />
        {errors.email && <p className={errCls}>{errors.email}</p>}
      </div>

      <div>
        <label className={labelCls} htmlFor="contact-category">Topic</label>
        <select
          id="contact-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className={inputCls}
        >
          <option value="">— Choose a topic —</option>
          {CATEGORIES.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
        {errors.category && <p className={errCls}>{errors.category}</p>}
      </div>

      <div>
        <label className={labelCls} htmlFor="contact-subject">Subject</label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          maxLength={120}
          required
          className={inputCls}
        />
        {errors.subject && <p className={errCls}>{errors.subject}</p>}
      </div>

      <div>
        <label className={labelCls} htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          minLength={20}
          maxLength={2000}
          rows={6}
          required
          className={inputCls}
        />
        <p className="text-sm text-gray-400 dark:text-slate-500 mt-1">{message.length}/2000 characters</p>
        {errors.message && <p className={errCls}>{errors.message}</p>}
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>
        {status === "error" && (
          <div className="mt-3 flex items-center gap-3">
            <p className="text-sm text-red-500">{errorMsg}</p>
            <button
              type="button"
              onClick={(e) => handleSubmit(e as unknown as React.FormEvent)}
              className="text-sm text-[#0891b2] hover:underline"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
