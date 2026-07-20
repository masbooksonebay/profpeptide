import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/collagen-peptides-skin",
  title: "Collagen Peptides for Skin: Dose, Evidence, Vitamin C Synergy",
  description:
    "Collagen peptides for skin — fibroblast stimulation, the 2.5–10 g dose range, vitamin C synergy, and how it pairs with GHK-Cu and KPV peptides for skin remodeling.",
});

const faqs = [
  {
    q: "How much collagen should I take for skin benefits?",
    a: "2.5–10 g/day of hydrolyzed collagen peptides — the lower end (2.5–5 g) shows efficacy in most skin-focused trials. Higher doses (10 g+) don't add proportional skin benefit; the dose-response curve plateaus. Daily consistency matters far more than dose magnitude — sporadic 10 g is worse than consistent 5 g. Always pair with 500–1,000 mg vitamin C (obligate cofactor for collagen hydroxylation). Visible skin improvements emerge at the 8–12 week mark; don't evaluate before then.",
  },
  {
    q: "Marine vs bovine collagen for skin — which is better?",
    a: "Both work for skin endpoints. Marine collagen is predominantly Type I (the dominant skin collagen type) and has slightly smaller peptide fragments that may absorb marginally faster. Bovine collagen contains Type I + Type III (joints, gut, blood vessels — useful if you want broader connective-tissue support beyond skin). For skin-only goals: either works; marine is the Type-I purist choice. Practical considerations: marine is typically more expensive, has a mild fish taste in some products, and is contraindicated for fish/shellfish allergies. Bovine is cheaper, neutral-tasting, and the more common trial-validated form.",
  },
  {
    q: "Why does collagen need to be paired with vitamin C?",
    a: (
      <>
        Because collagen synthesis requires hydroxylation of proline and lysine residues to form stable triple-helix structures —{" "}
        <Link href="/supplements/vitamin-c-skin" className="text-[#3A759F] hover:underline">vitamin C</Link>{" "}
        is the obligate cofactor for the hydroxylase enzymes (prolyl hydroxylase, lysyl hydroxylase) that do this. Without adequate vitamin C, your fibroblasts can&apos;t turn the collagen peptide amino-acid substrate into structurally durable collagen. You get the signal but not the building infrastructure. Pair collagen peptides with 500–1,000 mg vitamin C for synergistic effect.
      </>
    ),
  },
  {
    q: "How long until I see skin results from collagen peptides?",
    a: "8–12 weeks of consistent daily use, per the trial base (Proksch 2014 and others used 8–12 week protocols). Skin collagen turnover is slow; visible changes lag the underlying fibroblast stimulation. Some users report skin hydration changes earlier (4–6 weeks), but elasticity and wrinkle-depth improvements take longer. If you stop, the benefits fade over weeks — collagen peptides are a maintenance tool, not a one-shot intervention.",
  },
  {
    q: "Can I stack collagen peptides with GHK-Cu or KPV peptides for skin?",
    a: (
      <>
        Yes — and the stack is mechanistically natural for users wanting comprehensive skin remodeling.{" "}
        <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>{" "}
        is a copper-peptide that modulates MMP (matrix metalloproteinase) activity, stimulates fibroblast collagen and elastin synthesis, and supports tissue remodeling at the signaling layer.{" "}
        <Link href="/peptides/kpv" className="text-[#3A759F] hover:underline">KPV</Link>{" "}
        is an anti-inflammatory tripeptide (the C-terminal of α-MSH) that reduces tissue inflammation — useful when inflammation is interfering with skin healing or appearance. Collagen peptides provide the amino-acid substrate (proline, hydroxyproline, glycine) that fibroblasts use to build new collagen in response to the peptide signaling. The peptides do the signaling and inflammation modulation; collagen peptides + vitamin C provide the substrate and cofactor for actual collagen production. Mechanistically complementary, no known negative interactions.
      </>
    ),
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Collagen Peptides for Skin: Dose, Evidence, Vitamin C Synergy",
  "description": "Collagen peptides for skin — fibroblast stimulation, the 2.5–10 g dose range, vitamin C synergy, and how it pairs with GHK-Cu and KPV peptides for skin remodeling.",
  "url": "https://profpeptide.com/supplements/collagen-peptides-skin",
  "datePublished": "2026-04-07T00:00:00Z",
  "dateModified": "2026-05-26T00:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "reviewedBy": {
    "@type": "Organization",
    "name": "Prof. Peptide Editorial Team",
    "url": "https://profpeptide.com/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Prof. Peptide",
    "url": "https://profpeptide.com"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://profpeptide.com" },
    { "@type": "ListItem", "position": 2, "name": "Supplements", "item": "https://profpeptide.com/supplements" },
    { "@type": "ListItem", "position": 3, "name": "Collagen Peptides for Skin" }
  ]
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much collagen should I take for skin benefits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2.5–10 g/day of hydrolyzed collagen peptides — the lower end (2.5–5 g) shows efficacy in most skin-focused trials. Higher doses (10 g+) don't add proportional skin benefit; the dose-response curve plateaus. Daily consistency matters far more than dose magnitude — sporadic 10 g is worse than consistent 5 g. Always pair with 500–1,000 mg vitamin C (obligate cofactor for collagen hydroxylation). Visible skin improvements emerge at the 8–12 week mark; don't evaluate before then."
      }
    },
    {
      "@type": "Question",
      "name": "Marine vs bovine collagen for skin — which is better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both work for skin endpoints. Marine collagen is predominantly Type I (the dominant skin collagen type) and has slightly smaller peptide fragments that may absorb marginally faster. Bovine collagen contains Type I + Type III (joints, gut, blood vessels — useful if you want broader connective-tissue support beyond skin). For skin-only goals: either works; marine is the Type-I purist choice. Practical considerations: marine is typically more expensive, has a mild fish taste in some products, and is contraindicated for fish/shellfish allergies."
      }
    },
    {
      "@type": "Question",
      "name": "Why does collagen need to be paired with vitamin C?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because collagen synthesis requires hydroxylation of proline and lysine residues to form stable triple-helix structures — vitamin C is the obligate cofactor for the hydroxylase enzymes (prolyl hydroxylase, lysyl hydroxylase) that do this. Without adequate vitamin C, your fibroblasts can't turn the collagen peptide amino-acid substrate into structurally durable collagen. You get the signal but not the building infrastructure. Pair collagen peptides with 500–1,000 mg vitamin C for synergistic effect."
      }
    },
    {
      "@type": "Question",
      "name": "How long until I see skin results from collagen peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "8–12 weeks of consistent daily use, per the trial base (Proksch 2014 and others used 8–12 week protocols). Skin collagen turnover is slow; visible changes lag the underlying fibroblast stimulation. Some users report skin hydration changes earlier (4–6 weeks), but elasticity and wrinkle-depth improvements take longer. If you stop, the benefits fade over weeks — collagen peptides are a maintenance tool, not a one-shot intervention."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack collagen peptides with GHK-Cu or KPV peptides for skin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the stack is mechanistically natural for users wanting comprehensive skin remodeling. GHK-Cu is a copper-peptide that modulates MMP (matrix metalloproteinase) activity, stimulates fibroblast collagen and elastin synthesis, and supports tissue remodeling at the signaling layer. KPV is an anti-inflammatory tripeptide that reduces tissue inflammation — useful when inflammation is interfering with skin healing or appearance. Collagen peptides provide the amino-acid substrate (proline, hydroxyproline, glycine) that fibroblasts use to build new collagen in response to the peptide signaling."
      }
    }
  ]
};

export default function CollagenPeptidesSkinPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Collagen Peptides for Skin</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Hydrolyzed collagen, collagen hydrolysate, marine collagen (Type I), bovine collagen (Type I + III), Pro-Hyp dipeptide
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Supplement Class:</span> Hydrolyzed collagen peptide (Type I/III) / dermal fibroblast stimulator / amino-acid substrate for skin collagen synthesis
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Evidence Tier:</span> Strong (skin use case) — de Miranda 2021 systematic review + meta-analysis of 19 RCTs (n=1,125) documenting significant improvements in skin elasticity, hydration, and wrinkle scores; Proksch 2014 double-blind RCT in women aged 35–55; consistent signal across the women-over-40 population
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What do collagen peptides do for skin?</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Collagen is the primary structural protein of skin — comprising approximately 75–80% of the dry weight of the dermis. It forms a dense network that provides firmness, elasticity, and resistance to wrinkling. From around age 25, endogenous collagen production declines at roughly 1% per year, accelerated by UV exposure, smoking, poor nutrition, and stress. The result is progressively thinner skin, reduced elasticity, deeper wrinkles, and loss of the youthful plumpness that comes from dense dermal collagen. Collagen peptides are hydrolyzed collagen — pre-digested into small bioactive peptide fragments (notably Pro-Hyp, the proline-hydroxyproline dipeptide) that are efficiently absorbed through the gut, travel through the bloodstream, and accumulate in skin tissue where they stimulate dermal fibroblasts to increase synthesis of collagen, elastin, and hyaluronic acid. The mechanism is not just substrate delivery — Pro-Hyp acts as a signaling molecule that directly activates fibroblast collagen production. For broader connective-tissue applications (joints, gut healing, bone density), see the{" "}
            <Link href="/supplements/collagen-peptides" className="text-[#3A759F] hover:underline">parent collagen peptides page</Link>.
          </p>
          <div className="mt-4">
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported skin benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Improved skin elasticity (Proksch 2014 RCT; de Miranda 2021 meta-analysis of 19 RCTs)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Increased skin hydration and reduced transepidermal water loss</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced wrinkle depth and visible fine lines after 8–12 weeks</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Direct fibroblast stimulation via Pro-Hyp dipeptide signaling</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Induces fibroblast hyaluronic acid synthase expression (endogenous HA production)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Supports dermal collagen density (radio-labeled studies confirm accumulation in skin)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Synergistic with vitamin C (obligate cofactor for collagen hydroxylation)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mt-4">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common dose:</span> 2.5–10 g/day hydrolyzed collagen peptides — the lower end (2.5–5 g) shows efficacy in most skin-focused trials. Always pair with{" "}
            <Link href="/supplements/vitamin-c-skin" className="text-[#3A759F] hover:underline">500–1,000 mg vitamin C</Link>{" "}
            (obligate cofactor). Minimum 8–12 weeks for visible results.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">How do collagen peptides reach skin?</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Absorption.</span> Hydrolyzed collagen is broken into small di- and tri-peptide fragments that absorb intact through gut epithelium — bypassing the breakdown to free amino acids that whole-protein digestion produces. The Pro-Hyp dipeptide (proline-hydroxyproline) and Hyp-Gly (hydroxyproline-glycine) are the dominant bioactive fragments documented in plasma after oral collagen peptide dosing.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Dermal accumulation.</span> Radioactive labeling studies have tracked absorbed collagen peptides specifically to skin tissue, confirming they accumulate in the dermis. This is not generic amino-acid recycling — the intact peptide fragments target skin preferentially.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Fibroblast signaling.</span> Pro-Hyp directly stimulates dermal fibroblasts to upregulate collagen, elastin, and hyaluronic acid synthesis. This is a signaling effect, not merely providing raw material — the dipeptide acts as a molecular trigger for collagen-production gene expression.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Substrate + signaling = output.</span> The collagen peptides provide both the upstream signal (Pro-Hyp activates fibroblasts) and the downstream substrate (proline, hydroxyproline, glycine — the three dominant amino acids in collagen). Vitamin C provides the obligate cofactor for the hydroxylation step. The triad is what produces measurable dermal collagen increase.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What the research shows for skin</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Meta-analysis (Strong).</span> de Miranda 2021 (Int J Dermatol) systematic review and meta-analysis of 19 RCTs involving 1,125 participants found oral collagen supplementation significantly improved skin elasticity, hydration, and reduced wrinkle scores versus placebo — with effects sustained beyond the supplementation period in several trials.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Proksch 2014 reference RCT.</span> A double-blind placebo-controlled trial of 2.5 g specific collagen peptides daily for 8 weeks in women aged 35–55. Significant improvements in skin elasticity vs placebo, with effects observable on 4-week interim measurements. The Proksch trial established that the lower-dose (2.5 g) protocol is effective for skin endpoints — meaningful for users seeking minimum-effective-dose protocols.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Women over 40 — consistent signal.</span> The cleanest skin evidence comes from women aged 40+ with established age-related collagen decline. Trials in this population consistently show improvements in skin moisture content, roughness, and elasticity after 8–12 weeks.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Cellulite and nail strength (secondary).</span> Smaller trials suggest reduced cellulite appearance with 6+ months of supplementation, and improved nail strength and growth. These are secondary use cases with thinner evidence than the elasticity/hydration/wrinkle endpoints.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">How to use collagen peptides for skin</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Daily dose:</span> 2.5–10 g hydrolyzed collagen peptides per day. The lower end (2.5–5 g) is the Proksch 2014 trial range and shows efficacy.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Always pair with vitamin C</span> (500–1,000 mg) — obligate cofactor for collagen hydroxylation. The combination is significantly more effective than collagen alone.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Duration:</span> minimum 8–12 weeks for visible skin improvements. Ongoing use maintains benefits; stopping reverses them over weeks.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Form choice:</span> marine collagen for pure Type I (skin-dominant); bovine for Type I + III (skin + broader connective tissue). Marine is more expensive; bovine is the more common trial form.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Timing:</span> any time of day, with or without food. Mix into coffee, smoothies, or water — collagen peptide powder is largely flavorless.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Consistency matters more than dose</span> — daily 5 g is far better than sporadic 10 g. Set a daily habit anchor (morning coffee is the common one).</li>
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Quick safety notes for skin protocols</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Collagen peptides have an excellent safety profile — extensive culinary history (bone broth) and clean trial safety record. Mild GI discomfort occasionally reported. The supplement is always animal-derived (bovine, marine, or porcine) — not suitable for vegans. Marine collagen is contraindicated for fish/shellfish allergies. Hypercalcemia is a theoretical risk with very high doses of marine collagen — stay within recommended ranges. For comprehensive safety, interactions, and clinical considerations, see the{" "}
            <Link href="/supplements/collagen-peptides" className="text-[#3A759F] hover:underline">parent collagen peptides page</Link>.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What we don't know yet about collagen for skin</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Specific peptide formulations.</span> Several patented collagen peptide formulations claim superior skin-specific bioavailability (Verisol, Peptan, etc.). Whether these meaningfully outperform generic hydrolyzed collagen at equivalent grams is mechanistically plausible but not rigorously head-to-head tested at scale.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Younger-adult skin transfer.</span> Most positive evidence is in women aged 35+. Whether oral collagen peptides produce meaningful skin benefit in healthy adults under 30 with intact endogenous collagen synthesis is less directly supported by trial data.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Dose-response above 10 g/day.</span> Most efficacy plateaus at the 2.5–10 g/day range; whether higher doses (15–20 g/day) add value or are wasted is poorly characterized.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Long-term skin maintenance.</span> Trial durations extend to 12 months. Multi-year continuous use is reasonable based on safety profile and mechanism but not directly RCT-characterized.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">Collagen Peptides for Skin FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1">{f.q}</h3>
                <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers for skin-focused collagen peptides</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hydrolyzed collagen (not gelatin or whole collagen)</span> — hydrolysis produces the small bioactive peptide fragments that absorb and signal at the fibroblast layer.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Type I (marine) or Type I + III (bovine)</span> explicitly listed — Type I is the dominant skin collagen; Type III adds broader connective-tissue support.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Verisol, Peptan, or trial-grade brand certification</span> — patented formulations with direct skin-trial evidence. Generic hydrolyzed collagen at equivalent grams typically works but has thinner direct evidence.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Third-party tested</span> — USP, NSF, or ConsumerLab certifications signal independent verification. Heavy-metal testing for marine collagen is particularly relevant.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Grass-fed bovine source</span> — preferred for sustainability and lower contamination risk; wild-caught marine for marine collagen.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing facility</span> — minimum bar for any supplement.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No proprietary blends</span> — read for actual grams of collagen peptides per serving, not &ldquo;skin-beauty complex&rdquo; mass.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Watch added sugar in flavored powders</span> — many &ldquo;collagen beauty drinks&rdquo; contain meaningful sugar; unflavored powder is the cleaner default.</li>
          </ul>
        </div>

        <AmazonCTAButton href="https://www.amazon.com/s?k=collagen+peptides+skin&tag=profpeptide-20" label="Collagen Peptides for Skin" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Skin", "Elasticity", "Wrinkles", "Hydration", "Type I Collagen", "Pro-Hyp"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/collagen-peptides" className="text-sm font-medium text-[#3A759F] hover:underline">Collagen Peptides (full profile)</Link>
          <Link href="/supplements/vitamin-c-skin" className="text-sm font-medium text-[#3A759F] hover:underline">Vitamin C for Skin</Link>
          <Link href="/supplements/hyaluronic-acid" className="text-sm font-medium text-[#3A759F] hover:underline">Hyaluronic Acid</Link>
          <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#3A759F] hover:underline">GHK-Cu peptide</Link>
          <Link href="/peptides/kpv" className="text-sm font-medium text-[#3A759F] hover:underline">KPV peptide</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Collagen Peptides for Skin" pagePath="/supplements/collagen-peptides-skin" />
    </div>
    </>
  );
}
