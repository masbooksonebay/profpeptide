import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd } from "@/lib/faq-schema";
import { faqQuestions, faqQuestionBySlug, faqAnswerText } from "@/data/faqQuestions";
import { faqRelatedLinks } from "@/lib/faq-related";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";

// Standing rule (Mark, 2026-08-25): compound FAQ pages end with a curated "Where to Buy" trio,
// same order on every page. Pinned per-render so the profile pages (which derive their own set)
// are untouched. Codes/rates/gating flow from vendors.ts through the shared component.
const WHERE_TO_BUY_TRIO = ["amino-club", "capstone-peptides", "peptide-partners"];

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

  // FAQPage schema derives from the SAME text the page renders (faqAnswerText),
  // never a hand-written second copy.
  const faqSchema = faqPageJsonLd([{ q: q.question, a: faqAnswerText(q) }]);

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
            {q.handoff.text}{" "}
            <Link href={q.handoff.href} className="text-[#3A759F] hover:underline font-medium">
              {q.handoff.label}
            </Link>
            .
          </p>
        </div>

        {q.whereToBuy && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">Where to Buy</h2>
            <VendorHighlightBlock
              compoundSlug={q.whereToBuy.compoundSlug}
              pinSlugs={WHERE_TO_BUY_TRIO}
              from="faq-dosing"
            />
          </div>
        )}

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
            one-line version renders beside every profile dosing section via DosingContext.tsx. */}
        <p className="mt-8 text-sm text-gray-500 dark:text-slate-400">
          Research use only. Not medical advice.
        </p>

        {/* Affiliate disclosure only where the page actually carries vendor links. */}
        {q.whereToBuy && <PageDisclaimer />}
      </div>
    </>
  );
}
