import Link from "next/link";

const features = [
  {
    icon: "🧬",
    title: "Peptide Library",
    desc: "Comprehensive profiles on 30+ research peptides — mechanisms, half-lives, stacking protocols, and more.",
    href: "/peptides",
    cta: "Browse library",
  },
  {
    icon: "💊",
    title: "Supplement Library",
    desc: "Evidence-based profiles for the most popular supplements — organized by category with research and buying guides.",
    href: "/supplements",
    cta: "Browse supplements",
  },
  {
    icon: "📐",
    title: "Dosage Calculator",
    desc: "Accurately reconstitute and dose any peptide with our step-by-step research calculator.",
    href: "/calculator",
    cta: "Open calculator",
  },
  {
    icon: "🏷️",
    title: "Coupon Codes",
    desc: "Verified discount codes for trusted research-grade suppliers. Updated regularly.",
    href: "/coupons",
    cta: "See codes",
  },
  {
    icon: "📖",
    title: "Research Hub",
    desc: "Curated studies, guides, and educational articles for serious researchers.",
    href: "/research",
    cta: "Read research",
  },
  {
    icon: "❓",
    title: "FAQ",
    desc: "Straight answers to the most common questions about peptide research.",
    href: "/faq",
    cta: "View FAQ",
  },
  {
    icon: "📱",
    title: "Get the App",
    desc: "The Prof. Peptide iOS app is coming soon — track protocols, log doses, and access the library on the go.",
    href: "/app",
    cta: "Join waitlist",
  },
];

const trust = [
  { value: "20+", label: "Peptide profiles" },
  { value: "40+", label: "Supplement profiles" },
  { value: "10+", label: "Verified discount codes" },
  { value: "100%", label: "Independent research" },
];

export default function Home() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1e2d3d] leading-tight mb-5">
            Your research guide for<br className="hidden sm:block" /> peptides and natural supplements
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
            Evidence-based research, precision dosage tools, and trusted supplier discount codes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/peptides" className="btn-primary text-base px-8 py-3.5">Explore Peptides</Link>
            <Link href="/calculator" className="btn-outline text-base px-8 py-3.5">Dosage Calculator</Link>
            <Link href="/coupons" className="btn-outline text-base px-8 py-3.5">Discount Codes</Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {trust.map((t) => (
              <div key={t.label}>
                <p className="text-2xl font-bold text-[#0D7377]">{t.value}</p>
                <p className="text-sm text-gray-500 mt-0.5">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#f0fafa] border-b border-[#d0eeef] py-3 px-4 text-center">
        <p className="text-xs text-[#0D7377] max-w-2xl mx-auto">
          Prof. Peptide provides peptide research for educational purposes only. Nothing on this site constitutes medical advice or endorses human use of research peptides.
        </p>
      </div>

      <section className="section">
        <h2 className="text-2xl font-bold text-[#1e2d3d] mb-2 text-center">Everything a researcher needs</h2>
        <p className="text-gray-500 text-center mb-10 text-sm max-w-lg mx-auto">
          From peptide mechanisms to reconstitution math — Prof. Peptide covers it all, clearly and credibly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <Link href={f.href} key={f.href} className="card group">
              <span className="text-2xl mb-3 block">{f.icon}</span>
              <h3 className="text-base font-semibold text-[#1e2d3d] mb-1.5 group-hover:text-[#0D7377] transition-colors">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{f.desc}</p>
              <span className="text-xs font-medium text-[#0D7377] group-hover:underline">{f.cta} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-100">
        <div className="section">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="tag mb-4 inline-block">Why Prof. Peptide</span>
              <h2 className="text-2xl font-bold text-[#1e2d3d] mb-4">Built for researchers, not marketers</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Most peptide sites exist to sell products. Prof. Peptide exists to educate. We&apos;re independent, ad-light, and committed to presenting research accurately — including limitations and unknowns.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Content is editorially independent and research-driven",
                  "Every peptide profile cites primary research literature",
                  "Calculator math is transparent and peer-reviewable",
                  "Discount codes are manually verified before publishing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#0D7377] mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Coming Soon — iOS App</p>
              <h3 className="text-lg font-semibold text-[#1e2d3d] mb-2">Prof. Peptide for iPhone</h3>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                Log research protocols, set dosage reminders, access the full peptide library offline, and track notes — all in a clean, private app.
              </p>
              <Link href="/app" className="btn-primary text-sm w-full text-center block">Join the Waitlist</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
