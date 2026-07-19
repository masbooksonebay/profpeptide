import Link from "next/link";
import { Icon } from "@/components/CategoryIcon";
import JsonLd from "@/components/JsonLd";
import { articles } from "@/data/news";
import { activeVendorCount } from "@/data/vendors";
import HeroSearch from "@/components/HeroSearch";

export const metadata = {
  alternates: { canonical: "/" },
};

const features = [
  {
    icon: "flask-outline",
    title: "Peptide Library",
    desc: "Comprehensive profiles on 54 research peptides — mechanisms, half-lives, stacking protocols, and more.",
    href: "/peptides",
    cta: "Browse library",
  },
  {
    icon: "book-outline",
    title: "Bioregulator Guide",
    desc: "A research guide to the Khavinson short-peptide bioregulators — the gene-regulation hypothesis, synthetic analogs vs. organ extracts, and the individual compounds.",
    href: "/bioregulators",
    cta: "Read the guide",
  },
  {
    icon: "capsule-outline",
    title: "Supplement Library",
    desc: "Evidence-based profiles for the most popular supplements — organized by category with research and buying guides.",
    href: "/supplements",
    cta: "Browse supplements",
  },
  {
    icon: "compare-outline",
    title: "Comparisons",
    desc: "Side-by-side breakdowns of popular peptides and supplements — mechanisms, evidence, dosing, and how to choose between them.",
    href: "/compare",
    cta: "Compare compounds",
  },
  {
    icon: "clipboard-outline",
    title: "News",
    desc: "The latest peptide research news, regulatory updates, and developments.",
    href: "/news",
    cta: "View news",
  },
  {
    icon: "calculator-outline",
    title: "Dosage Calculator",
    desc: "Accurately reconstitute and dose any peptide with our step-by-step research calculator.",
    href: "/calculator",
    cta: "Open calculator",
  },
  {
    icon: "pricetag-outline",
    title: "Coupon Codes",
    desc: "Verified discount codes for research-grade suppliers. Updated regularly.",
    href: "/coupons",
    cta: "See codes",
  },
  {
    icon: "shield-block-outline",
    title: "Best Peptide Vendors",
    desc: "Our vetted alphabetical list of research peptide suppliers — with third-party testing, published COAs, and the quality criteria we use to include them.",
    href: "/best-peptide-vendors",
    cta: "See vetted vendors",
  },
  {
    icon: "phone-portrait-outline",
    title: "Get the App",
    desc: "The all-in-one peptide tracker for iPhone — log doses, see estimated levels, run protocols, and search 60+ peptides by name or brand.",
    href: "/app",
    cta: "Download",
  },
  {
    icon: "help-circle-outline",
    title: "FAQ",
    desc: "Straight answers to the most common questions about peptide research.",
    href: "/faq",
    cta: "View FAQ",
  },
];

const trust = [
  { value: "54", label: "Peptide profiles" }, // /peptides route count
  { value: "17", label: "Comparisons" }, // /compare/* page count
  // One verified code per active (non-retired) vendor -> activeVendorCount.
  { value: `${activeVendorCount}`, label: "Verified discount codes" },
  { value: "100%", label: "Independent research" },
];

export default function Home() {
  const latest = articles[0];
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Prof. Peptide",
        "url": "https://profpeptide.com",
        "description": "Independent peptide and supplement research education platform.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://profpeptide.com/peptides?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Prof. Peptide",
        "url": "https://profpeptide.com",
        "description": "Independent peptide and supplement research education platform.",
        "logo": "https://profpeptide.com/icon.png",
      }} />
      <section className="bg-white dark:bg-[#0f172a] border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e2d3d] dark:text-slate-100 leading-tight mb-5">
            Everything you need for<br className="hidden sm:block" /> peptide research, in one place
          </h1>
          <p className="text-lg text-gray-500 dark:text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            A research library, precision dosage calculator, protocol tracking, and discount codes for peptide vendors.
          </p>
          <HeroSearch />
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/peptides" className="btn-outline text-base px-8 py-3.5">Explore Peptides</Link>
            <Link href="/calculator" className="btn-outline text-base px-8 py-3.5">Dosage Calculator</Link>
            <Link href="/coupons" className="btn-outline text-base px-8 py-3.5">Discount Codes</Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-[#0b1120] border-b border-gray-100 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {trust.map((t) => (
              <div key={t.label}>
                <p className="text-2xl font-bold text-[#0891b2]">{t.value}</p>
                <p className="text-sm text-gray-500 dark:text-slate-400 mt-0.5">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#0891b2]/10 border-b border-[#0891b2]/20 py-3 px-4 text-center">
        <p className="text-xs text-[#0891b2] max-w-2xl mx-auto">
          Prof. Peptide provides peptide research for educational purposes only. Nothing on this site constitutes medical advice or endorses human use of research peptides.
        </p>
      </div>

      <section className="section">
        <div className="mb-12">
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-xl font-bold text-[#1e2d3d] dark:text-slate-100">Latest News</h2>
            <Link href="/news" className="text-xs font-medium text-[#0891b2] hover:underline">View all news &rarr;</Link>
          </div>
          <Link
            href={`/news/${latest.slug}`}
            className="card group block"
          >
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-1">{latest.date}</p>
            <h3 className="text-base font-semibold text-[#1e2d3d] dark:text-slate-100 group-hover:text-[#0891b2] transition-colors mb-2">
              {latest.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
              {latest.excerpt}
            </p>
            <span className="text-xs font-medium text-[#0891b2] mt-3 inline-block">Read more &rarr;</span>
          </Link>
        </div>
        <h2 className="text-2xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-2 text-center">Everything a researcher needs</h2>
        <p className="text-gray-500 dark:text-slate-400 text-center mb-10 text-sm max-w-lg mx-auto">
          From peptide mechanisms to reconstitution math — Prof. Peptide covers it all, clearly and credibly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <Link href={f.href} key={f.href} className="card group">
              <span className="text-[#0891b2] mb-3 block"><Icon name={f.icon} /></span>
              <h3 className="text-base font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1.5 group-hover:text-[#0891b2] transition-colors">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-4">{f.desc}</p>
              <span className="text-xs font-medium text-[#0891b2] group-hover:underline">{f.cta} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-[#0b1120] border-t border-gray-100 dark:border-slate-800">
        <div className="section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="tag mb-4 inline-block">Why Prof. Peptide</span>
              <h2 className="text-2xl font-bold text-[#1e2d3d] dark:text-slate-100 mb-4">Built for researchers</h2>
              <p className="text-gray-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                Most peptide sites exist to sell products. Prof. Peptide exists to educate. We&apos;re independent, ad-light, and committed to presenting research accurately — including limitations and unknowns.
              </p>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-slate-300">
                {[
                  "Content is editorially independent and research-driven",
                  "Every peptide profile cites primary research literature",
                  "Calculator math is transparent and peer-reviewable",
                  "Discount codes are manually verified before publishing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#0891b2] mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel-card p-6">
              <p className="text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-4">Now on iOS</p>
              <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">The all-in-one peptide tracker</h3>
              <p className="text-sm text-gray-500 dark:text-slate-400 mb-5 leading-relaxed">
                Log doses, see estimated levels, calculate reconstitution, and search 60+ peptides by name or brand — all in one private iOS app.
              </p>
              <Link href="/app" className="btn-primary text-sm w-full text-center block">Get the App</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
