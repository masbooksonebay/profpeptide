import Link from "next/link";
import { Icon } from "@/components/CategoryIcon";
import FaqAccordion from "@/components/FaqAccordion";
import { hubFaqSections } from "@/data/faq";
import { faqQuestions, FAQ_CATEGORY_ORDER } from "@/data/faqQuestions";
import { faqPageJsonLd } from "@/lib/faq-schema";
import NavLink from "@/components/NavLink";

// FAQPage JSON-LD DERIVED from the same hubFaqSections the page renders (never a second copy).
// It lives here, not in layout.tsx, so it scopes to /faq alone and not the /faq/[slug] children.
// The supplement questions moved to /supplements, so both the visible accordions and this schema
// drop to the peptide/site sections — they stay in lockstep because both read hubFaqSections.
const faqSchema = faqPageJsonLd(hubFaqSections.flatMap((s) => s.faqs));

// A category collapses its per-compound spokes once there are this many. Dosing crosses it today;
// uses and side-effects will as their spokes land.
const PICKER_THRESHOLD = 5;

// Per-category picker labels. Deliberately NOT one generic string — "Dosing for specific peptides"
// carries the category's own vocabulary, where a single "Choose your peptide" everywhere would say
// nothing about what the reader is choosing between. Generic fallback for anything unlisted.
const PICKER_LABEL: Record<string, string> = {
  dosing: "Dosing for specific peptides",
  "side-effects": "Side effects of specific peptides",
  uses: "What specific peptides are used for",
  injection: "Reconstituting specific peptides",
};

export default function FAQPage() {
  return (
    <div className="section max-w-3xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <span className="tag mb-3 inline-block">Common Questions</span>
      <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100 mb-3">Frequently Asked Questions</h1>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
        Answers to the most common questions about peptide research, reconstitution, sourcing, and this platform.
      </p>

      {/* CATEGORIES FIRST. The hub is a directory of topics, not an accordion with links
          beneath it: each category has a real page answering the general question in depth,
          and the individual questions sit under it. The accordion that used to lead this page
          is now the short "About this site" block at the foot — site meta with no search
          intent, whose URLs (/about, /disclaimer, /methodology) already exist. */}

      {/* In-depth answers — one page per googled question, linked so each is reachable
          (a question page nothing links to is not shipped). Derived from faqQuestions. */}
      {faqQuestions.length > 0 && (
        <div className="mt-14">
          {/* Grouped by category, derived from FAQ_CATEGORY_ORDER + each question's `category`,
              so a new question lands in its section automatically. Card markup unchanged. */}
          <div className="space-y-10">
            {FAQ_CATEGORY_ORDER.map(({ key, title }) => {
              const all = faqQuestions.filter((q) => q.category === key);
              if (all.length === 0) return null;
              // The category page leads its group and is visually distinct from its spokes.
              const categoryPage = all.find((q) => q.categoryFor === key);
              const spokes = all.filter((q) => q !== categoryPage);
              // PER-COMPOUND vs GENERAL is read from `whereToBuy.compoundSlug`, which already marks
              // a compound page (the injection-prep pages deliberately omit it). No new field, and
              // no hand-kept list to fall out of sync.
              const perCompound = spokes
                .filter((q) => q.whereToBuy)
                .sort((a, b) => a.whereToBuy!.compoundSlug.localeCompare(b.whereToBuy!.compoundSlug));
              const general = spokes.filter((q) => !q.whereToBuy);
              // Collapse only where a flat list stops being usable. Dosing will eventually carry one
              // spoke per compound (up to 64); a category with three does not need a picker.
              // Threshold-driven so uses/side-effects pick it up on their own as spokes land.
              const usePicker = perCompound.length >= PICKER_THRESHOLD;
              const questions = usePicker ? general : spokes;
              return (
                <div key={key}>
                  <h2 className="text-lg font-bold text-[#16181B] dark:text-slate-100 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800">
                    {title}
                  </h2>
                  {categoryPage && (
                    <Link
                      href={`/faq/${categoryPage.slug}`}
                      className="block border border-[#D9DEE4] dark:border-slate-600 bg-[#F4F6F8] dark:bg-slate-800/40 rounded-xl px-5 py-4 mb-3 hover:border-brand transition-colors"
                    >
                      <span className="text-base font-semibold text-[#16181B] dark:text-slate-100">{categoryPage.question}</span>
                      <p className="text-xs text-gray-600 dark:text-slate-400 mt-1 leading-relaxed">{categoryPage.hubBlurb}</p>
                    </Link>
                  )}
                  <div className="space-y-3">
                    {questions.map((q) => (
                      <div key={q.slug} className="border border-[#D9DEE4] dark:border-slate-700 rounded-xl px-5 py-4">
                        <Link href={`/faq/${q.slug}`} className="text-sm font-medium text-[#16181B] dark:text-slate-200 hover:text-[#3A759F]">
                          {q.question}
                        </Link>
                        <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 leading-relaxed">{q.hubBlurb}</p>
                        <NavLink href={`/faq/${q.slug}`} className="text-xs font-medium text-[#3A759F] hover:underline mt-2 inline-block">Full answer</NavLink>
                      </div>
                    ))}
                  </div>
                  {usePicker && (
                    /* 🔴 SERVER-RENDERED, NOT JS-INJECTED. <details> ships its contents in the HTML
                       whether open or closed, so every spoke URL is crawlable with the picker shut.
                       A JS-built list would make the whole spoke cluster invisible to a crawler —
                       and this hub is the ONLY internal link source those pages have, so it would
                       strand every one of them. Same reasoning that moved FAQItem to <details>. */
                    <details className="group mt-3 border border-[#D9DEE4] dark:border-slate-700 rounded-xl overflow-hidden">
                      <summary className="cursor-pointer list-none flex items-center justify-between px-5 py-4 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors [&::-webkit-details-marker]:hidden">
                        <span className="text-sm font-medium text-[#16181B] dark:text-slate-100">
                          {PICKER_LABEL[key] ?? "Choose a peptide"}
                          <span className="text-gray-400 dark:text-slate-500 font-normal"> ({perCompound.length})</span>
                        </span>
                        <span className="text-[#3A759F] flex-shrink-0" aria-hidden="true">
                          <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </summary>
                      <ul className="px-5 pb-4 pt-2 grid sm:grid-cols-2 gap-x-6 gap-y-2 border-t border-gray-100 dark:border-slate-800">
                        {perCompound.map((q) => (
                          <li key={q.slug}>
                            <Link href={`/faq/${q.slug}`} className="text-sm text-[#3A759F] hover:underline">
                              {q.question}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Site meta, kept as a short accordion rather than promoted. These five have no search
          intent — /about, /disclaimer and /methodology already own those URLs — so giving them
          their own pages would create competitors for the site's own canonical pages. */}
      {hubFaqSections
        .filter((section) => /about this site/i.test(section.title))
        .map((section) => (
          <div key={section.title} className="mt-14">
            <h2 className="text-lg font-bold text-[#16181B] dark:text-slate-100 mb-4 pb-2 border-b border-gray-100 dark:border-slate-800 flex items-center gap-2">
              <span className="text-[#3A759F]"><Icon name={section.icon} /></span>
              {section.title}
            </h2>
            <FaqAccordion faqs={section.faqs} />
          </div>
        ))}

      <div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">Still have questions?</p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">Browse the <Link href="/peptides" className="text-[#3A759F] hover:underline">Peptide Library</Link> for detailed compound-specific information, check the <Link href="/supplements" className="text-[#3A759F] hover:underline">Supplement Library</Link> for evidence-based supplement profiles and supplement FAQs, or explore the <Link href="/peptides" className="text-[#3A759F] hover:underline">Research Hub</Link> for in-depth guides.</p>
        <p className="text-xs text-gray-500 dark:text-slate-400">Need help with technical terms? Browse the <Link href="/glossary" className="text-[#3A759F] hover:underline">Research Glossary</Link> for plain-English definitions. Ready to calculate a dose? Try the <Link href="/calculator" className="text-[#3A759F] hover:underline">Dosage Calculator</Link>.</p>
      </div>
    </div>
  );
}
