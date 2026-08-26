import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd } from "@/lib/faq-schema";
import { faqQuestions, faqQuestionBySlug, faqAnswerText } from "@/data/faqQuestions";
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

        {q.related && q.related.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">Related questions</h2>
            <ul className="space-y-2">
              {q.related.map((slug) => {
                const r = faqQuestionBySlug(slug);
                return r ? (
                  <li key={slug}>
                    <Link href={`/faq/${slug}`} className="text-[#3A759F] hover:underline font-medium">
                      {r.question}
                    </Link>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        )}

        <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          For educational and research purposes only. Not medical advice. Not for human use.
        </div>

        {/* Affiliate disclosure only where the page actually carries vendor links. */}
        {q.whereToBuy && <PageDisclaimer />}
      </div>
    </>
  );
}
