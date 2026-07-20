import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ContactLink from "@/components/ContactLink";
import AmazonCTAButton from "@/components/AmazonCTAButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/supplements/vitamin-c-skin",
  title: "Vitamin C for Skin: Collagen Cofactor, UV Protection, Dose Guide",
  description:
    "Vitamin C for skin — collagen hydroxylation, melanin inhibition, UV protection mechanism, and dose for skin support. Pairs with collagen peptides and GHK-Cu.",
});

const faqs = [
  {
    q: "How much vitamin C should I take for skin benefits?",
    a: "500–1,000 mg/day oral is the skin-relevant range. Higher doses don't add skin benefit and can cause GI discomfort. Skin vitamin C content is highest in the first 1–2 hours after dosing, so split dosing (AM + PM) maintains higher tissue saturation than a single morning dose. Pair with collagen peptides — the combination is synergistic for skin collagen synthesis. Topical vitamin C (10–20% L-ascorbic acid) targets the upper dermis directly and is complementary to oral, not redundant.",
  },
  {
    q: "Oral vs topical vitamin C for skin — which is better?",
    a: "Both work, and they target different layers of skin physiology. Oral vitamin C supports the entire dermis and the systemic collagen-synthesis machinery — every fibroblast in your body needs adequate vitamin C to make stable collagen. Topical vitamin C (typically 10–20% L-ascorbic acid serum applied AM under sunscreen) delivers higher local concentrations to the upper dermis and is well-supported for hyperpigmentation, UV photodamage, and fine-line improvement. The strongest skin protocols use both. Oral alone won't deliver maximum topical concentration; topical alone won't fix systemic vitamin C inadequacy.",
  },
  {
    q: "Why does vitamin C need to be paired with collagen peptides?",
    a: "Because collagen is built from proline and lysine residues that must be hydroxylated to form stable triple-helix structures — and vitamin C is the essential cofactor for the hydroxylase enzymes (prolyl hydroxylase, lysyl hydroxylase) that do this. Without adequate vitamin C, fibroblasts produce collagen molecules that can't fold properly or cross-link, resulting in structurally weak collagen that breaks down quickly. Pairing collagen peptides with 500–1,000 mg vitamin C ensures the fibroblasts have both the amino-acid substrate (from peptides) and the cofactor (from vitamin C) to actually build durable collagen.",
  },
  {
    q: "Does topical vitamin C actually penetrate the skin?",
    a: "L-ascorbic acid does, at the right pH and concentration. The active form requires a pH below 3.5 to penetrate the stratum corneum effectively, and 10–20% concentration in a stable formulation (typically with ferulic acid + vitamin E to prevent oxidation). Vitamin C derivatives (sodium ascorbyl phosphate, magnesium ascorbyl phosphate, ascorbyl glucoside) are more stable but less effective — they need enzymatic conversion to L-ascorbic acid after penetration, with mixed evidence on whether that conversion is efficient. For maximum skin effect: L-ascorbic acid in a properly formulated low-pH serum, stored properly, used within 3 months of opening.",
  },
  {
    q: "Can I stack vitamin C with GHK-Cu peptide for skin?",
    a: (
      <>
        Yes — and the mechanism layering is mechanistically natural for skin-focused protocols.{" "}
        <Link href="/peptides/ghk-cu" className="text-[#3A759F] hover:underline">GHK-Cu</Link>{" "}
        is a copper-peptide that modulates MMP (matrix metalloproteinase) activity, stimulates fibroblast collagen and elastin synthesis, and supports tissue remodeling. Vitamin C provides the obligate cofactor for collagen hydroxylation — without it, GHK-Cu&apos;s collagen-stimulation signal still fires but the collagen produced is structurally weak. The two operate on different layers: GHK-Cu is the signaling/remodeling arm; vitamin C is the substrate-cofactor arm. Most evidence-based skin protocols pair them (oral vitamin C 500–1,000 mg/day + topical GHK-Cu or systemic GHK-Cu). No known negative interactions.
      </>
    ),
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Vitamin C for Skin: Collagen Cofactor, UV Protection, Dose Guide",
  "description": "Vitamin C for skin — collagen hydroxylation, melanin inhibition, UV protection mechanism, and dose for skin support. Pairs with collagen peptides and GHK-Cu.",
  "url": "https://profpeptide.com/supplements/vitamin-c-skin",
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
    { "@type": "ListItem", "position": 3, "name": "Vitamin C for Skin" }
  ]
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much vitamin C should I take for skin benefits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "500–1,000 mg/day oral is the skin-relevant range. Higher doses don't add skin benefit and can cause GI discomfort. Skin vitamin C content is highest in the first 1–2 hours after dosing, so split dosing (AM + PM) maintains higher tissue saturation than a single morning dose. Pair with collagen peptides — the combination is synergistic for skin collagen synthesis. Topical vitamin C (10–20% L-ascorbic acid) targets the upper dermis directly and is complementary to oral, not redundant."
      }
    },
    {
      "@type": "Question",
      "name": "Oral vs topical vitamin C for skin — which is better?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both work, and they target different layers of skin physiology. Oral vitamin C supports the entire dermis and the systemic collagen-synthesis machinery — every fibroblast in your body needs adequate vitamin C to make stable collagen. Topical vitamin C (typically 10–20% L-ascorbic acid serum applied AM under sunscreen) delivers higher local concentrations to the upper dermis and is well-supported for hyperpigmentation, UV photodamage, and fine-line improvement. The strongest skin protocols use both."
      }
    },
    {
      "@type": "Question",
      "name": "Why does vitamin C need to be paired with collagen peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because collagen is built from proline and lysine residues that must be hydroxylated to form stable triple-helix structures — and vitamin C is the essential cofactor for the hydroxylase enzymes (prolyl hydroxylase, lysyl hydroxylase) that do this. Without adequate vitamin C, fibroblasts produce collagen molecules that can't fold properly or cross-link, resulting in structurally weak collagen that breaks down quickly. Pairing collagen peptides with 500–1,000 mg vitamin C ensures the fibroblasts have both the amino-acid substrate and the cofactor to actually build durable collagen."
      }
    },
    {
      "@type": "Question",
      "name": "Does topical vitamin C actually penetrate the skin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L-ascorbic acid does, at the right pH and concentration. The active form requires a pH below 3.5 to penetrate the stratum corneum effectively, and 10–20% concentration in a stable formulation (typically with ferulic acid + vitamin E to prevent oxidation). Vitamin C derivatives (sodium ascorbyl phosphate, magnesium ascorbyl phosphate, ascorbyl glucoside) are more stable but less effective — they need enzymatic conversion to L-ascorbic acid after penetration, with mixed evidence on whether that conversion is efficient."
      }
    },
    {
      "@type": "Question",
      "name": "Can I stack vitamin C with GHK-Cu peptide for skin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — and the mechanism layering is mechanistically natural for skin-focused protocols. GHK-Cu is a copper-peptide that modulates MMP activity, stimulates fibroblast collagen and elastin synthesis, and supports tissue remodeling. Vitamin C provides the obligate cofactor for collagen hydroxylation — without it, GHK-Cu's collagen-stimulation signal still fires but the collagen produced is structurally weak. The two operate on different layers: GHK-Cu is the signaling/remodeling arm; vitamin C is the substrate-cofactor arm. Most evidence-based skin protocols pair them."
      }
    }
  ]
};

export default function VitaminCSkinPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#3A759F] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Vitamin C for Skin</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: May 26, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Ascorbic acid, L-ascorbic acid (skin-active form), ascorbate
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Supplement Class:</span> Skin antioxidant cofactor / obligate collagen-synthesis enzyme cofactor / tyrosinase inhibitor (skin-brightening)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Evidence Tier:</span> Strong (skin use case) — biochemically essential for collagen hydroxylation; Pullar 2017 Nutrients review covers skin-physiology evidence; Shaw 2017 demonstrated vitamin C-enriched gelatin amplifies collagen synthesis; topical L-ascorbic acid serum has extensive dermatology evidence for photoaging, hyperpigmentation, fine lines
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What does vitamin C do for skin?</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Vitamin C plays a uniquely irreplaceable role in skin physiology — it is the obligate cofactor for the hydroxylase enzymes that build and stabilize collagen, the primary structural protein of the dermis. Without adequate vitamin C, fibroblasts produce collagen that can&apos;t fold properly into stable triple-helix structures, resulting in structurally weak skin tissue prone to wrinkling and breakdown. Beyond collagen, vitamin C is the dominant water-soluble antioxidant in skin, protecting against UV-induced oxidative damage, inhibiting melanin synthesis (the basis for its skin-brightening effect), and regenerating oxidized vitamin E back to its active form. Skin vitamin C concentrations are significantly higher than blood plasma — reflecting how critical it is to cutaneous function — and skin vitamin C declines measurably with age and UV exposure. For a full vitamin C profile (immune function, antioxidant network, dietary requirements), see the{" "}
            <Link href="/supplements/vitamin-c" className="text-[#3A759F] hover:underline">parent vitamin C page</Link>.
          </p>
          <div className="mt-4">
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported skin benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Essential cofactor for stable collagen production (hydroxyproline + hydroxylysine formation)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduces hyperpigmentation via tyrosinase inhibition (skin-brightening)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">UV-induced oxidative stress protection (water-soluble dermal antioxidant)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Regenerates oxidized vitamin E to its active antioxidant form</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Synergistic with oral collagen peptides for measurable dermal collagen increase</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Supports wound healing and scar formation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Topical L-ascorbic acid evidence for photoaging, fine lines, dyschromia</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mt-4">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common dose:</span> 500–1,000 mg/day oral for skin support; split AM/PM to maintain steady-state tissue saturation. For topical: 10–20% L-ascorbic acid serum in a stable low-pH (&lt;3.5) formulation, applied AM under sunscreen.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">How does vitamin C build skin collagen?</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Vitamin C is the essential cofactor for prolyl hydroxylase and lysyl hydroxylase — the enzymes that add hydroxyl groups to proline and lysine residues in newly synthesized collagen chains. These hydroxylations are required for the formation of stable collagen triple-helix structures and the cross-links that make collagen mechanically durable. The hydroxylated residues create hydrogen-bonding sites that hold the three collagen chains together; without them, the molecule falls apart before it can be exported from the fibroblast and woven into the extracellular matrix.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            The dramatic clinical manifestation of vitamin C deficiency in skin is scurvy — collagen production continues but produces structurally defective collagen, leading to skin fragility, easy bruising, poor wound healing, and the characteristic perifollicular hemorrhages and corkscrew hairs. Modern Western diets rarely produce overt scurvy, but suboptimal vitamin C status (particularly in smokers, who deplete vitamin C ~40% faster than non-smokers) is common and meaningfully affects skin collagen quality.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Beyond the collagen pathway, vitamin C inhibits tyrosinase (the rate-limiting enzyme in melanin synthesis) — which is why topical L-ascorbic acid reduces hyperpigmentation from sun damage, melasma, and post-inflammatory hyperpigmentation. It also regenerates oxidized vitamin E in skin tissue, creating a mutually reinforcing antioxidant network that&apos;s significantly stronger than either vitamin alone.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What the research shows for skin</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Collagen synthesis amplification.</span> Shaw 2017 (Am J Clin Nutr) demonstrated that vitamin C-enriched gelatin taken before intermittent exercise significantly increased serum collagen synthesis markers (PINP) — establishing that vitamin C status meaningfully gates active collagen production in vivo.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Photoaging and wrinkles.</span> Topical L-ascorbic acid is one of the most extensively studied dermatology actives. Multiple RCTs document significant improvements in wrinkle depth, skin tone, and dyschromia after 12+ weeks of consistent topical use. The Pinnell 2003 stability formulation (15% L-ascorbic acid + 1% α-tocopherol + 0.5% ferulic acid) is the reference protocol that most modern serums emulate.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Oral vitamin C and skin elasticity.</span> Pullar 2017 (Nutrients) reviewed the population evidence — skin vitamin C levels correlate inversely with wrinkle depth in cross-sectional studies, and oral vitamin C supplementation has been documented to improve skin elasticity and reduce transepidermal water loss in controlled trials.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Synergy with collagen peptides.</span> Trials combining oral collagen peptides with vitamin C consistently outperform collagen alone for skin endpoints — consistent with the obligate-cofactor mechanism. The combination is the dominant evidence-based oral skin-supplement pairing.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">How to use vitamin C for skin</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral dose:</span> 500–1,000 mg/day, ideally split AM + PM for steady-state tissue saturation.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Always pair with collagen peptides</span> (2.5–10 g/day) — the combination is synergistic for skin endpoints.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical:</span> 10–20% L-ascorbic acid serum, low-pH (&lt;3.5) stable formulation (look for ferulic acid + vitamin E co-formulation). Apply AM under sunscreen.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Use both routes</span> — oral supports systemic collagen synthesis; topical delivers higher local dermal concentrations. Not redundant.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Smokers:</span> increase oral intake to 1,000–1,500 mg/day — smoking depletes vitamin C ~40% faster than non-smokers.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Doses above 2,000 mg/day</span> rarely add skin benefit; primary effect is GI discomfort and modest kidney stone risk in predisposed users.</li>
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">Quick safety notes for skin protocols</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            Oral vitamin C is exceptionally safe — water-soluble, excess excreted, no concerning signals at the skin-relevant 500–1,000 mg/day dose. The 2,000 mg/day Tolerable Upper Intake Level is set by GI tolerance (loose stools), not toxicity. Very high doses may modestly increase kidney stone risk in predisposed users.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Topical L-ascorbic acid can cause irritation at high concentrations or in sensitive skin — start with 10% formulations before stepping up to 15–20%. Discontinue if persistent redness or burning. For comprehensive safety, interactions, and clinical considerations, see the{" "}
            <Link href="/supplements/vitamin-c" className="text-[#3A759F] hover:underline">parent vitamin C page</Link>.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What we don't know yet about vitamin C for skin</h2>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Optimal oral dose-response.</span> The 500–1,000 mg/day range is biochemically rational (saturates plasma vitamin C, exceeds dietary recommendations, falls below the UL) but not precisely RCT-titrated for skin endpoints. Whether 250 mg/day produces meaningful skin benefit or whether 1,500 mg/day adds value over 1,000 mg isn&apos;t resolved.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-3">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Topical derivative bioequivalence.</span> Vitamin C derivatives (sodium ascorbyl phosphate, magnesium ascorbyl phosphate, ascorbyl glucoside, tetrahexyldecyl ascorbate) are more stable but less directly active than L-ascorbic acid. Whether they deliver equivalent skin outcomes is mechanistically uncertain — they require enzymatic conversion after penetration, with mixed evidence on conversion efficiency.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Healthy young-adult skin transfer.</span> Most strong evidence is in photoaged or older skin. Whether oral vitamin C supplementation produces measurable skin benefit in already-healthy young adults eating adequate citrus/vegetable diets is less directly supported by trial data.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-3">Vitamin C for Skin FAQ</h2>
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
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400 mb-3">Quality markers for skin-focused vitamin C</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Oral: L-ascorbic acid or ester-C formulations</span> at 500–1,000 mg per serving; third-party tested (USP, NSF, ConsumerLab).</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical: L-ascorbic acid (not derivatives)</span> at 10–20%, low-pH (&lt;3.5) formulation, with ferulic acid + vitamin E co-formulation for stability.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Opaque/airless packaging for topical</span> — L-ascorbic acid oxidizes rapidly when exposed to air and light. If your serum has turned yellow/orange/brown, it&apos;s degraded.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Use within 3 months of opening for topical</span> — oxidized vitamin C is inactive at best and may be pro-oxidant in degraded formulations.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">cGMP-certified manufacturing</span> for oral supplements — minimum bar for any vitamin supplement.</li>
          </ul>
        </div>

        <AmazonCTAButton href="https://www.amazon.com/s?k=vitamin+c+serum+skin&tag=profpeptide-20" label="Vitamin C for Skin" />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          Amazon affiliate link — Prof. Peptide earns a small commission on qualifying purchases at no extra cost to you. We use commissions to fund research and editorial work.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Skin", "Collagen Cofactor", "L-Ascorbic Acid", "UV Protection", "Hyperpigmentation"].map((tag) => (
          <span key={tag} className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/supplements/vitamin-c" className="text-sm font-medium text-[#3A759F] hover:underline">Vitamin C (full profile)</Link>
          <Link href="/supplements/collagen-peptides-skin" className="text-sm font-medium text-[#3A759F] hover:underline">Collagen Peptides for Skin</Link>
          <Link href="/supplements/hyaluronic-acid" className="text-sm font-medium text-[#3A759F] hover:underline">Hyaluronic Acid</Link>
          <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#3A759F] hover:underline">GHK-Cu peptide</Link>
        </div>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="Vitamin C for Skin" pagePath="/supplements/vitamin-c-skin" />
    </div>
    </>
  );
}
