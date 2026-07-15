"use client";

// DESIGN SANDBOX — a committable, noindexed preview of the peptide-profile
// design with live option toggles. NOT a real content page: it mirrors the
// current live BPC-157 layout (two-column, Quick Facts, sticky rail TOC) with
// illustrative body text so design options can be evaluated at realistic
// density. State is React-only (no persistence). Not linked from anywhere.

import { useState } from "react";
import Link from "next/link";

type Dividers = "none" | "light" | "accent" | "spaced";
type Spacing = "current" | "roomy" | "double";
type Bg = "slate" | "offwhite" | "white" | "bands";
type Panel = "card";

type Section = { id: string; title: string; body: string };

// Real section headings/ids from the live BPC-157 profile; illustrative bodies.
const SECTIONS: Section[] = [
  { id: "overview", title: "What is BPC-157?", body: "A lab-made 15-amino-acid peptide derived from a protein found in gastric juice, studied for over 30 years in animal models for wound healing, tendon and tissue repair, and gut protection. No completed Phase 2/3 human trials exist." },
  { id: "mechanism", title: "How does BPC-157 work?", body: "Thought to promote angiogenesis, growth-factor signaling, and nitric-oxide modulation, alongside effects on the brain-gut axis. Its mechanism is distinct from actin-based repair peptides, which is why it is often stacked rather than substituted." },
  { id: "research", title: "What is BPC-157 used for?", body: "Preclinical research spans tendon and ligament healing, gastroprotection against NSAIDs and stress ulcers, and reduced systemic inflammation. Human evidence remains anecdotal." },
  { id: "timeline", title: "How long does BPC-157 take to work?", body: "User reports describe pain reduction and improved mobility within 5–10 days, with structural changes over 2–8 weeks. Timelines vary by injury and protocol." },
  { id: "dosing", title: "How is BPC-157 dosed?", body: "Most research protocols use 250–500 mcg subcutaneously, once or twice daily, in 4–8 week cycles. Chronic conditions sometimes extend to 12 weeks." },
  { id: "how-to-take", title: "How is BPC-157 administered?", body: "Subcutaneous injection near the injury site for localized effects, or abdominal injection for systemic effects. Oral formulations exist for gut-related use." },
  { id: "stacks", title: "What does BPC-157 stack well with?", body: "Commonly paired with TB-500 for musculoskeletal recovery and with GHK-Cu for connective-tissue repair, owing to complementary mechanisms." },
  { id: "side-effects", title: "What are the side effects of BPC-157?", body: "Animal studies have not identified a toxic dose; reported user effects are mild and localized. No completed long-term human safety trials exist." },
  { id: "interactions", title: "Does BPC-157 interact with other drugs?", body: "No well-characterized human drug interactions are documented. Research-use-only context applies; this is not medical guidance." },
  { id: "storage", title: "How should BPC-157 be stored?", body: "Lyophilized vials are typically stored frozen or refrigerated; reconstituted solution is refrigerated and used within a few weeks." },
  { id: "limitations", title: "What are the limitations of BPC-157 research?", body: "The evidence base is overwhelmingly preclinical. Human efficacy and long-term safety are not formally established." },
  { id: "where-to-buy", title: "Where to source BPC-157", body: "Sold by specialty research-peptide vendors. Prof. Peptide maintains a vetted list with verified discount codes." },
  { id: "faq", title: "BPC-157 FAQ", body: "Common questions on healing, oral use, injection site, cycling, and the 2023 FDA Category 2 status." },
  { id: "references", title: "References", body: "Peer-reviewed citations and PubMed links supporting the claims above." },
  { id: "studies", title: "Published Studies", body: "Plain-English summaries of the key studies behind the profile." },
];

/* ---------- toggle-driven class helpers ---------- */

function pageBgClass(bg: Bg): string {
  // Dark background is held constant so the toggle only probes light-mode page bg.
  switch (bg) {
    case "slate": return "bg-[#F1F5F9] dark:bg-[#0f172a]";
    case "offwhite": return "bg-[#FAFAFA] dark:bg-[#0f172a]";
    case "white": return "bg-white dark:bg-[#0f172a]";
    case "bands": return "bg-white dark:bg-[#0f172a]";
  }
}

function sectionWrapClass(i: number, dividers: Dividers, spacing: Spacing, bg: Bg): string {
  const parts: string[] = ["scroll-mt-24"];
  if (i > 0) {
    parts.push(spacing === "current" ? "mt-12" : spacing === "roomy" ? "mt-[4.5rem]" : "mt-24");
    if (dividers === "light") parts.push("border-t border-gray-200 dark:border-slate-700 pt-12");
    else if (dividers === "accent") parts.push("border-t-2 border-brand/30 pt-12");
    else if (dividers === "spaced") parts.push("border-t border-gray-200 dark:border-slate-700 pt-16");
  }
  // Off-white bands behind alternating sections (approximated within the column).
  if (bg === "bands" && i % 2 === 1) parts.push("bg-[#F3F4F6] dark:bg-[#1e293b]/40 rounded-xl px-5 py-5");
  return parts.join(" ");
}

// Panel treatment for Quick Facts + TOC. Only one option remains ("Bordered
// card" = the shared .panel-card, matching homepage grid cards). Accent-bar
// option removed.

/* ---------- dev toggle panel ---------- */

function Group<T extends string>({
  label, value, options, onChange,
}: { label: string; value: T; options: { v: T; label: string }[]; onChange: (v: T) => void }) {
  return (
    <div className="mb-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-1">{label}</p>
      <div className="flex flex-wrap gap-1">
        {options.map((o) => (
          <button
            key={o.v}
            onClick={() => onChange(o.v)}
            className={`text-[11px] px-2 py-1 rounded border transition-colors ${
              value === o.v
                ? "bg-brand text-white border-brand"
                : "bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 border-gray-200 dark:border-slate-600 hover:border-brand"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProfileDesignSandbox() {
  // Defaults match the combination shipped to the live profile: global #F1F5F9
  // background (no page-scoped bg / bands), accent-rule dividers, current
  // spacing, bordered-card panels — so the sandbox opens in sync.
  const [dividers, setDividers] = useState<Dividers>("accent");
  const [spacing, setSpacing] = useState<Spacing>("current");
  const [bg, setBg] = useState<Bg>("slate");
  const [panel, setPanel] = useState<Panel>("card");
  const [open, setOpen] = useState(true);

  const toc = SECTIONS.map((s) => ({ id: s.id, title: s.title }));

  return (
    <div className={`min-h-screen ${pageBgClass(bg)}`}>
      {/* ===== Dev toggle panel (fixed corner) ===== */}
      <div className="fixed bottom-4 right-4 z-[100] w-[248px] rounded-xl border-2 border-dashed border-brand bg-white dark:bg-[#1e293b] shadow-2xl">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 dark:border-slate-700">
          <span className="text-[11px] font-mono font-semibold text-brand">🎛 DESIGN SANDBOX · dev</span>
          <button onClick={() => setOpen((o) => !o)} className="text-xs text-gray-400 hover:text-brand" aria-label="Toggle panel">
            {open ? "▾" : "▸"}
          </button>
        </div>
        {open && (
          <div className="p-3">
            <Group label="1 · Section dividers" value={dividers} onChange={setDividers}
              options={[{ v: "none", label: "None" }, { v: "light", label: "Light rule" }, { v: "accent", label: "Accent rule" }, { v: "spaced", label: "Rule + space" }]} />
            <Group label="2 · Section spacing" value={spacing} onChange={setSpacing}
              options={[{ v: "current", label: "Current" }, { v: "roomy", label: "+50%" }, { v: "double", label: "Double" }]} />
            <Group label="3 · Page background" value={bg} onChange={setBg}
              options={[{ v: "slate", label: "#F1F5F9" }, { v: "offwhite", label: "#FAFAFA" }, { v: "white", label: "White" }, { v: "bands", label: "White+bands" }]} />
            <Group label="4 · Quick Facts + TOC" value={panel} onChange={setPanel}
              options={[{ v: "card", label: "Bordered card" }]} />
            <p className="text-[10px] text-gray-400 dark:text-slate-500 mt-1 leading-snug">React state only · not saved · toggles are independent</p>
          </div>
        )}
      </div>

      {/* ===== Ported profile design ===== */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/peptides" className="text-sm text-brand hover:underline mb-6 inline-block">
          Back to Peptide Library
        </Link>

        <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-amber-300 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 px-2.5 py-1">
          <span className="text-xs font-medium text-amber-800 dark:text-amber-200">Design sandbox — illustrative content, not a live page</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1e2d3d] dark:text-slate-100 tracking-tight">BPC-157</h1>
          <span className="tag">Recovery &amp; Tissue Repair</span>
          <span className="tag">Research-Grade</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">Last reviewed: May 23, 2026</p>

        {/* Quick Facts — single column, no internal rules */}
        <section aria-label="Quick Facts" className="panel-card mb-10 overflow-hidden">
          <div className="px-5 py-4">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-[#1e2d3d] dark:text-slate-100 mb-3">Quick Facts</h2>
            <dl className="space-y-3">
              {[
                ["What it is", "A lab-made 15-amino-acid peptide studied for healing, tendon/tissue repair, and gut protection."],
                ["How it's taken", "Subcutaneous injection, or oral for gut-related use"],
                ["Half-life", "Under 30 minutes (plasma)"],
                ["Typical research dose", "250–500 mcg, once or twice daily, in 4–8 week cycles"],
                ["Research status", "Not FDA-approved — research use only."],
              ].map(([k, v], i) => (
                <div key={k}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">{k}</dt>
                  <dd className={`${i === 0 ? "text-base text-[#1e2d3d] dark:text-slate-100" : "text-sm text-[#1e2d3d] dark:text-slate-200"}`}>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Mobile TOC */}
        <details className="panel-card lg:hidden mb-8 overflow-hidden">
          <summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[#1e2d3d] dark:text-slate-100">
            <span>On this page</span>
            <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </summary>
          <div className="px-4 pb-4 pt-1 border-t border-gray-200 dark:border-slate-700">
            <TocList toc={toc} />
          </div>
        </details>

        {/* Two-column */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:items-start">
          <main className="min-w-0">
            {SECTIONS.map((s, i) => (
              <section key={s.id} id={s.id} className={sectionWrapClass(i, dividers, spacing, bg)}>
                <h2 className="section-heading mb-3">{s.title}</h2>
                <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.body}</p>
              </section>
            ))}
          </main>

          <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
            <nav aria-label="On this page">
              {/* Parent <aside> is the sticky grid item; this card caps its
                  height to the viewport and overflows internally on a short one. */}
              <div className="panel-card p-5 max-h-[calc(100vh-7rem)] overflow-y-auto toc-scroll">
                <h2 className="text-xs font-semibold uppercase tracking-wide text-[#1e2d3d] dark:text-slate-100 mb-3">On this page</h2>
                <TocList toc={toc} />
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}

function TocList({ toc }: { toc: { id: string; title: string }[] }) {
  return (
    <ol className="space-y-1.5">
      {toc.map((s, i) => (
        <li key={s.id} className="flex gap-2 text-sm leading-relaxed">
          <span className="text-brand font-semibold tabular-nums select-none">{i + 1}.</span>
          <a href={`#${s.id}`} className="text-gray-600 dark:text-slate-300 hover:text-brand transition-colors">{s.title}</a>
        </li>
      ))}
    </ol>
  );
}
