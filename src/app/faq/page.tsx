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
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500 mb-6">
            In-depth answers
          </p>
          {/* Grouped by category, derived from FAQ_CATEGORY_ORDER + each question's `category`,
              so a new question lands in its section automatically. Card markup unchanged. */}
          <div className="space-y-10">
            {FAQ_CATEGORY_ORDER.map(({ key, title }) => {
              const all = faqQuestions.filter((q) => q.category === key);
              if (all.length === 0) return null;
              // The category page leads its group and is visually distinct from its spokes.
              const categoryPage = all.find((q) => q.categoryFor === key);
              const questions = all.filter((q) => q !== categoryPage);
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
                      <div key={q.slug} className="border border-gray-100 dark:border-slate-700 rounded-xl px-5 py-4">
                        <Link href={`/faq/${q.slug}`} className="text-sm font-medium text-[#16181B] dark:text-slate-200 hover:text-[#3A759F]">
                          {q.question}
                        </Link>
                        <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 leading-relaxed">{q.hubBlurb}</p>
                        <NavLink href={`/faq/${q.slug}`} className="text-xs font-medium text-[#3A759F] hover:underline mt-2 inline-block">Full answer</NavLink>
                      </div>
                    ))}
                  </div>
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
