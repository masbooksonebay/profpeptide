import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import JsonLd from "@/components/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import { METHODOLOGY_REVIEWED_DATE, METHODOLOGY_REVIEWED_DATE_ISO } from "@/data/reviewed-dates";
import { activeVendorCount, certVerifiedVendorCount } from "@/data/vendors";
import { profileCount } from "@/data/peptideCategories";
import { supplementCount } from "@/data/supplements";
import { indexablePriceCount, priceVendorCount } from "@/data/prices";

export const metadata = buildPageMetadata({
  path: "/methodology",
  title: "Editorial Standards & Methodology | Prof. Peptide",
  description:
    "How Prof. Peptide assesses vendors and verifies content: what disqualifies a vendor, what a certificate pass involves, how coded product names are decoded, and what we do when we can't verify a claim.",
  ogTitle: "Editorial Standards & Methodology",
  ogDescription: "What disqualifies a vendor, what a certificate pass involves, and how we handle what we can't verify.",
  useDefaultOgImage: false,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">{title}</h2>
      <div className="space-y-3 text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{children}</div>
    </section>
  );
}

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Editorial Standards & Methodology",
          description:
            "How Prof. Peptide researches, reviews, and verifies its peptide profiles, guides, and vendor evaluations — including the vendor rejection standard and how unverifiable claims are handled.",
          url: "https://profpeptide.com/methodology",
          dateModified: METHODOLOGY_REVIEWED_DATE_ISO,
          publisher: { "@type": "Organization", "@id": "https://profpeptide.com/#organization", name: "Prof. Peptide", url: "https://profpeptide.com", logo: "https://profpeptide.com/icon.png" },
        }}
      />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Methodology" }])} />

      <div className="section max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Editorial Standards &amp; Methodology</h1>
        </div>
        <p className="text-sm text-gray-500 dark:text-slate-400 mb-4">Last reviewed: {METHODOLOGY_REVIEWED_DATE}</p>

        <p className="text-xl font-medium text-[#16181B] dark:text-slate-100 leading-relaxed mb-10">
          How we assess vendors and verify what we publish &mdash; described by what actually happens, not aspirationally. The most useful thing we can tell you is not how many suppliers we have looked at, but what gets one turned away.
        </p>

        <div className="space-y-10">
          <Section title="Where we start: what disqualifies a vendor">
            <p>
              We do not publish a &ldquo;number of vendors reviewed.&rdquo; Suppliers have been assessed across affiliate networks, search, and traffic tools over many months with no single ledger, so any total would be a figure we could not stand behind &mdash; and an unverifiable number is exactly the kind of claim this site strips off vendor pages. What we <em>can</em> state is the standard, because it is concrete. Over the course of that work we have turned suppliers away for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-medium text-[#16181B] dark:text-slate-100">Login-walled catalogs</span> &mdash; no public prices, so nothing a researcher can compare before committing.</li>
              <li><span className="font-medium text-[#16181B] dark:text-slate-100">Testimonials that don&rsquo;t add up</span> &mdash; reviews claiming years of use on a domain registered months ago.</li>
              <li><span className="font-medium text-[#16181B] dark:text-slate-100">Unedited template artifacts</span> &mdash; Lorem ipsum body text, demo search terms left in the header, AI-generated &ldquo;lab&rdquo; imagery, placeholder map coordinates that resolve to nowhere.</li>
              <li><span className="font-medium text-[#16181B] dark:text-slate-100">Borrowed credibility</span> &mdash; an &ldquo;As Seen In&rdquo; badge whose link goes to press coverage of an entirely different company.</li>
              <li><span className="font-medium text-[#16181B] dark:text-slate-100">A phone number in the 555 range</span> &mdash; the exchange reserved for fiction, presented as a real contact line.</li>
              <li><span className="font-medium text-[#16181B] dark:text-slate-100">Phantom labs</span> &mdash; a testing laboratory named prominently, with no certificate from it anywhere on the site.</li>
            </ul>
            <p>These are patterns we have encountered, described to explain the bar; we do not name the suppliers, because the point is the standard, not a callout.</p>
          </Section>

          <Section title="How a vendor gets assessed">
            <p>
              A supplier that clears that bar is then checked on verifiable ground: whether it publishes third-party Certificates of Analysis (and whether they are batch-matched or generic), whether it states a purity standard and a testing method, whether it ships and prices transparently, how it handles payment and buyer protection, and how it presents itself &mdash; a vendor that borrows another supplier&rsquo;s credentials or contradicts its own copy does not pass. We describe each listed vendor by its own verified differentiator rather than a generic superlative.
            </p>
            <p>
              Of the {activeVendorCount} vendors with a live page today, {certVerifiedVendorCount} carry a completed certificate pass &mdash; a case where we opened an actual lab report, not merely a claim that testing happens.
            </p>
          </Section>

          <Section title="What a certificate pass involves">
            <p>
              A pass means a person read the certificate and recorded only what it prints: the issuing laboratory and its location; its accreditation <em>only if an accreditation is actually printed on the report</em> (an ISO/IEC 17025 or A2LA number, for instance) &mdash; if none is printed, we state none; the panels run and the method behind each (HPLC-UV purity is not mass-spec identity, and we don&rsquo;t upgrade one to the other); the lot number; the named signatory; and the mechanism to verify the report independently, such as a QR code or a per-record search code on the lab&rsquo;s own site.
            </p>
            <p>
              Those reads span roughly nineteen named third-party laboratories &mdash; Freedom Diagnostics, Vanguard Laboratory, and Janoshik cover the most vendors, alongside ILS Laboratories, Bioviridian, BioRegen, MZ BioLabs, Kovera Labs, and others. Where a certificate limits its own scope &mdash; for example a lab stating it did not observe sample selection and cannot confirm the sample represents the batch a buyer receives &mdash; we carry that caveat onto the page rather than quietly dropping it.
            </p>
          </Section>

          <Section title="Stated, attributed, or removed">
            <p>
              Every testing claim on a vendor page falls into one of three buckets. If we verified it against a certificate, we <span className="font-medium text-[#16181B] dark:text-slate-100">state</span> it and name the lab. If the vendor asserts it but we have not seen the document, we <span className="font-medium text-[#16181B] dark:text-slate-100">attribute</span> it &mdash; &ldquo;the vendor states&hellip;,&rdquo; framed as their figure, not ours. If it turns out to be false or contradicted by the evidence, we <span className="font-medium text-[#16181B] dark:text-slate-100">remove</span> it. A vendor that publishes its COAs is never described as hiding them, and a vendor&rsquo;s self-reported rating is never presented as an independent one.
            </p>
          </Section>

          <Section title="When we can&rsquo;t verify something">
            <p>
              This is the part that matters most, so we are explicit about it. When a store is behind a research-account login, or a certificate is available only on request, we do not pretend to a confidence we don&rsquo;t have. Those vendors&rsquo; testing claims are <span className="font-medium text-[#16181B] dark:text-slate-100">attributed to the vendor, not stated as fact</span>, and the page says plainly that we have not reviewed an actual lot certificate. A laboratory named without a certificate stays a claim about a lab, not a verified result. We would rather a page read &ldquo;reported by the vendor, not independently verified&rdquo; than imply a check we didn&rsquo;t run.
            </p>
          </Section>

          <Section title="How we decode coded product names">
            <p>
              Some suppliers relabel GLP-class compounds with codes rather than compound names. We decode a code only from evidence, in a strict order: a certificate stating the molecular weight, formula, CAS number, or the compound name in an identity field; then the compound named in the vendor&rsquo;s own product title or spec table; then a unique mechanistic description or a physical vial label. A naming <em>convention</em> alone &mdash; even a consistent one &mdash; is corroboration, never proof. When identity can&rsquo;t be confirmed, the price row and the page keep the coded name and say so, rather than asserting a compound the evidence doesn&rsquo;t support. Where a decode is made, we disclose it in plain sight &mdash; &ldquo;Tirzepatide (listed as GLYCON-X),&rdquo; for instance &mdash; so a reader searching the store for the coded name still finds it.
            </p>
          </Section>

          <Section title="Why we don&rsquo;t publish our own rankings">
            <p>
              We do not assign vendors a score or a numeric rank of our own. A rank implies a precision we can&rsquo;t honestly claim across suppliers we assess on different evidence, and it invites exactly the affiliate-driven ordering this site exists to avoid. Instead we describe each vendor by what is verifiable about it, and let a reader weigh those facts. The one place we curate a list &mdash; our{" "}
              <Link href="/best-peptide-vendors" className="text-[#3A759F] hover:underline">Featured Vendors</Link>{" "}
              &mdash; is an editorial selection, dated and re-vetted, not a computed ranking. The same judgment informs our{" "}
              <Link href="/coupons" className="text-[#3A759F] hover:underline">Professor&rsquo;s Picks</Link>: an editorial call shaped by everything above, not a standard a vendor is measured against.
            </p>
          </Section>

          <Section title="How we research the science">
            <p>
              Our {profileCount} peptide profiles and {supplementCount} supplement profiles are built from primary sources &mdash; peer-reviewed literature indexed on PubMed and PMC, published clinical-trial data, and FDA drug labels &mdash; not secondhand summaries. Specific claims such as mechanism, half-life, and pharmacokinetics are attributed to named studies, and every profile ends with a linked References section pointing back to the originals. Where the evidence is preclinical, limited, or contested, we say so plainly rather than padding the gap with personal protocols dressed up as fact.
            </p>
            <p>
              The price data behind our comparisons is normalized the same way: {indexablePriceCount()} compounds are comparison-shoppable across {priceVendorCount()} vendors with published pricing, every figure reduced to a per-milligram basis so vial sizes and pack counts line up, and coupon-gated discounts excluded so a listed price is what a buyer actually pays.
            </p>
          </Section>

          <Section title="Human review before publishing">
            <p>
              Every page is read by the Prof. Peptide editorial team before it goes live &mdash; a human check for accuracy against the cited sources, not an automated pass. On top of that, a suite of thirteen build guards refuses to ship the site when its own data is inconsistent: they fail the build if an internal link is dead, if a displayed price is implausible or out of sync with its source, if a vendor page claims a testing panel its certificate doesn&rsquo;t show, or if a page would share incorrectly. The &ldquo;Last reviewed&rdquo; dates on the site are literal &mdash; they mark when a person last checked a page against the current evidence, and they derive from a single dated source so the visible stamp and the structured data can&rsquo;t drift apart.
            </p>
          </Section>

          <Section title="The affiliate relationship, and what it doesn&rsquo;t change">
            <p>
              Prof. Peptide may earn a commission when you use one of our discount codes or buy through our links, at no additional cost to you &mdash; that is how the research and editorial work is funded. It does not determine which vendors are included, how they are described, or whether a claim is verified. A vendor cannot buy a testing pass, a better description, or removal of a caveat. See the full{" "}
              <Link href="/disclaimer" className="text-[#3A759F] hover:underline">disclaimer</Link>{" "}
              for the details.
            </p>
          </Section>

          <Section title="Research-use-only stance">
            <p>
              All content on Prof. Peptide is for educational and research purposes only. The compounds we profile are described as research-use-only materials; nothing on this site is medical advice, diagnosis, or a treatment recommendation. We frame compounds in the context of the published research, not as products for human use.
            </p>
          </Section>
        </div>

        <div className="mt-10 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
          For educational and research purposes only. Not medical advice. Not for human use.
        </div>
      </div>
    </>
  );
}
