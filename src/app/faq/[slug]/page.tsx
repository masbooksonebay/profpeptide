import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import { TRT_MEDICAL_DISCLAIMER } from "@/data/trt-disclaimers";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd } from "@/lib/faq-schema";
import { faqQuestions, faqQuestionBySlug, faqAnswerText } from "@/data/faqQuestions";
import { faqRelatedLinks, faqHandoff } from "@/lib/faq-related";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import TrtReferralCard from "@/components/TrtReferralCard";

// The "Where to Buy" set is DERIVED, not curated (Mark, 2026-08-30). It was a hardcoded trio
// — amino-club / capstone-peptides / peptide-partners on every compound FAQ page regardless of
// whether they stocked the compound. Two problems with that: a card for a vendor that does not
// sell the peptide is a broken click, and an identical block on every page is exactly the shape
// Google discounts. Now it uses the same priority-first, stock-gated selection the profiles use,
// so the set varies by compound for a real reason. Codes/rates/gating still flow from vendors.ts.

export function generateStaticParams() {
  return faqQuestions.map((q) => ({ slug: q.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const q = faqQuestionBySlug(params.slug);
  if (!q) return {};
  return buildPageMetadata({
    path: `/faq/${q.slug}`,
    title: q.title,
    description: q.metaDescription,
    ogTitle: q.question,
    ogDescription: q.metaDescription,
    // Defer OG to this segment's opengraph-image.tsx (generic content card).
    useDefaultOgImage: false,
  });
}

export default function FaqQuestionPage({ params }: { params: { slug: string } }) {
  const q = faqQuestionBySlug(params.slug);
  if (!q) notFound();

  const related = faqRelatedLinks(q);
  // Derived unless the entry overrides it — see the rule on faqHandoff().
  const handoff = faqHandoff(q);

  // FAQPage schema derives from the SAME text the page renders (faqAnswerText),
  // never a hand-written second copy.
  const faqSchema = faqPageJsonLd([{ q: q.question, a: faqAnswerText(q, handoff) }]);

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
          { name: q.question },
        ])}
      />
      <div className="section max-w-3xl">
        <Link href="/faq" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">
          Back to FAQ
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">{q.question}</h1>
          <span className="tag">FAQ</span>
        </div>

        {/* The answer, first — figures up top, no preamble. */}
        <p className="text-lg text-gray-700 dark:text-slate-200 leading-relaxed font-medium mb-8">
          {q.lede}
        </p>

        <div className="space-y-5">
          {q.body.map((b, i) => {
            if (b.kind === "heading") {
              return (
                <h2 key={i} className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-1">
                  {b.text}
                </h2>
              );
            }
            if (b.kind === "list") {
              return (
                <ul key={i} className="list-disc list-inside space-y-1">
                  {b.items.map((it, j) => (
                    <li key={j} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                      {it}
                    </li>
                  ))}
                </ul>
              );
            }
            if (b.kind === "sources") {
              const group = (label: string, items: typeof b.primary) => (
                <>
                  <h3 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mt-4 mb-2">{label}</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {items.map((sx) => (
                      <li key={sx.href} className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
                        {/* External citation: keeps the arrow, per the site's glyph rule — chevron is
                            internal navigation, arrow means this link leaves for a source. */}
                        <a href={sx.href} target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
                          {sx.cite} &rarr;
                        </a>{" "}
                        &mdash; {sx.note}
                      </li>
                    ))}
                  </ul>
                </>
              );
              return (
                <div key={i} className="pt-4 border-t border-gray-100 dark:border-slate-800">
                  <h2 className="text-xl font-semibold text-[#16181B] dark:text-slate-100">Sources</h2>
                  {group("Primary", b.primary)}
                  {b.secondary && b.secondary.length > 0 && group("Secondary", b.secondary)}
                </div>
              );
            }
            if (b.kind === "table") {
              return (
                <figure key={i} className="pt-2">
                  <figcaption className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
                    {b.caption}
                  </figcaption>
                  {/* overflow-x-auto: a 6-column reference grid cannot fit a 380px screen, and this
                      is the artifact people come for — it scrolls inside its own box rather than
                      forcing the page to scroll sideways. */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr>
                          {b.headers.map((h) => (
                            <th
                              key={h}
                              scope="col"
                              className="text-left font-semibold text-[#16181B] dark:text-slate-100 border-b border-[#D9DEE4] dark:border-slate-700 py-2 pr-4 whitespace-nowrap"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {b.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={
                                  "border-b border-gray-100 dark:border-slate-800 py-2 pr-4 whitespace-nowrap " +
                                  (ci === 0
                                    ? "font-medium text-[#16181B] dark:text-slate-100"
                                    : "text-gray-600 dark:text-slate-300")
                                }
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {b.note && (
                    <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mt-3">{b.note}</p>
                  )}
                </figure>
              );
            }
            if (b.kind === "cta") {
              return (
                <p key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  {b.text}{" "}
                  <Link href={b.href} className="text-[#3A759F] hover:underline font-medium">
                    {b.label}
                  </Link>
                  .
                </p>
              );
            }
            return (
              <p key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                {b.text}
              </p>
            );
          })}
        </div>

        <div className="mt-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
          <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
            {handoff.text}{" "}
            <Link href={handoff.href} className="text-[#3A759F] hover:underline font-medium">
              {handoff.label}
            </Link>
            .
          </p>
        </div>

        {q.whereToBuy && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">Where to Buy</h2>
            <VendorHighlightBlock
              compoundSlug={q.whereToBuy.compoundSlug}
              from="faq-dosing"
            />
          </div>
        )}

        {/* The TRT-page equivalent of "Where to Buy" — a referral card, not a vendor block. Gated
            on the SAME category field the disclaimer branch uses (no new flag). Renders nothing of
            its own accord if TRT_NATION_TRACKING_URL is unconfigured — see TrtReferralCard.tsx. */}
        {q.category === "trt" && <TrtReferralCard />}

        {/* DERIVED, not hand-picked — see lib/faq-related.ts for the rule. A category page relates
            to the other category pages; a compound spoke relates to the same compound's other
            spokes, its category page and its profile. It is never a subset of a list the page has
            already rendered somewhere else. */}
        {related.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">Related questions</h2>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-[#3A759F] hover:underline font-medium">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* One short line, not a panel. The FAQ pages previously carried an amber block here AND
            (on the dosing category page) a full "What this site will not do" section — a fourth
            and fifth disclaimer variant on a site that already has Disclaimer.tsx, PageDisclaimer,
            16 hand-written amber blocks and a /disclaimer page. The wording is the chat panel's
            (ChatWidget DISCLOSURE_TEXT) so the site says the same thing on every surface.
            🔒 The EPISTEMICS were not deleted, only de-duplicated: the full statement of the
            report-versus-instruct standard lives on /methodology ("How we report doses"), and its
            one-line version renders beside every profile dosing section via DosingContext.tsx.
            🔴 GATED ON category !== "trt" (fixed 2026-09-04). "Research use only" is correct for a
            research-peptide compound and WRONG for TRT: testosterone is a prescription medicine
            taken by humans under medical supervision, not a research chemical sold RUO. This was
            rendering unconditionally on all 7 category:"trt" pages before this fix. Do NOT weaken
            or remove this line for non-TRT pages — RUO framing is correct and required there. */}
        <p className="mt-8 text-sm text-gray-500 dark:text-slate-400">
          {q.category === "trt" ? TRT_MEDICAL_DISCLAIMER : "Research use only. Not medical advice."}
        </p>

        {/* Affiliate disclosure for vendor links. The referral-variant disclosure for TRT pages
            renders INSIDE TrtReferralCard itself (2026-09-04), not here — see that file for why
            it has to live coupled to the card rather than as a second independent gate. */}
        {q.whereToBuy && <PageDisclaimer />}
      </div>
    </>
  );
}
