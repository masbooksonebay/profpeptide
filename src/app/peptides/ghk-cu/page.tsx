import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/ghk-cu",
  title: "GHK-Cu — Copper Peptide, Skin, Hair, Wound Healing | Prof. Peptide",
  description:
    "GHK-Cu (copper tripeptide) research profile: collagen synthesis, gene expression modulation, hair growth, dosing, side effects, FAQ, and FDA status.",
});

const faqs = [
  {
    q: "Is GHK-Cu FDA-approved?",
    a: "Topical GHK-Cu is widely available in cosmetic formulations without prescription. Injectable GHK-Cu is NOT FDA-approved — and the FDA prohibited compounded injectable GHK-Cu commercial preparation as of 2023. Most clinical evidence supports topical use; systemic effects from injection are derived from animal studies and limited human research.",
  },
  {
    q: "How is GHK-Cu different from BPC-157?",
    a: (
      <>
        Different mechanisms. GHK-Cu is a copper-binding tripeptide that modulates 4,000+ human genes related to collagen synthesis, tissue remodeling, and anti-inflammatory signaling &mdash; primarily through copper-shuttling and Wnt activation.{" "}
        <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
        is a 15-amino-acid peptide that drives angiogenesis (VEGF/eNOS) and tissue repair through nitric oxide and FAK-paxillin pathways. They are commonly stacked together (often in the GLOW blend) because their mechanisms are complementary, not redundant. See the{" "}
        <Link href="/compare/bpc-157-vs-ghk-cu" className="text-[#3A759F] hover:underline">BPC-157 vs GHK-Cu comparison</Link>{" "}
        for a side-by-side breakdown.
      </>
    ),
  },
  {
    q: "Topical vs injectable — which is better?",
    a: "Topical has the strongest evidence base, the longest history of safe use, and is FDA-permitted in cosmetic formulations. Injectable produces systemic effects (gene expression modulation across tissues) but is not FDA-approved and has stricter regulatory restrictions. For skin-focused applications, topical is the more defensible choice. For broader regenerative effects (hair + skin + tissue), injectable is what's used in functional medicine settings — at the user's risk regarding regulatory and quality issues.",
  },
  {
    q: "Does GHK-Cu work for hair loss?",
    a: "Some studies suggest performance comparable to Minoxidil 5% via different mechanisms — GHK-Cu activates Wnt signaling in dermal papilla cells (anagen growth phase) and stimulates angiogenesis around follicles, while Minoxidil works via vasodilation. Hair changes typically take 60–90 days to become visible (often the second injectable cycle). Topical GHK-Cu products marketed for hair are widely available.",
  },
  {
    q: "What are \"copper uglies\"?",
    a: "Slang for transient skin purging — increased breakouts or skin reactivity in the first 1–2 weeks of GHK-Cu use as the peptide accelerates skin cell turnover. Uncommon and self-resolving. If skin irritation persists beyond 2 weeks, discontinue and assess for copper sensitivity.",
  },
  {
    q: "Can I combine GHK-Cu with retinoids or vitamin C?",
    a: "Retinoids — yes, generally well-tolerated. The combination of GHK-Cu (collagen synthesis) + retinoid (cell turnover) is a common synergistic skincare protocol. Vitamin C — apply at separate times (AM vitamin C, PM GHK-Cu). High-concentration topical vitamin C destabilizes the copper complex; both ingredients lose efficacy when applied simultaneously.",
  },
  {
    q: "How long until I see results?",
    a: "Topical: visible skin texture changes typically 4–8 weeks. Injectable: skin improvements within first 30-day cycle. Hair changes typically 60–90 days (second cycle). Systemic gene expression effects are measurable within hours of dosing but cumulative over cycles.",
  },
  {
    q: "Where can I buy GHK-Cu?",
    a: (
      <>
        Topical GHK-Cu is widely available in cosmetic skincare products at 1–3% concentrations. Injectable research-grade GHK-Cu is sold by specialty peptide vendors (note FDA restriction on compounded injectable as of 2023). PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#3A759F] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const studies = [
  {
    title: "GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration",
    authors: "Pickart L, Vasquez-Soltero JM, Margolina A",
    journal: "BioMed Research International / PMC",
    year: "2015",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/",
    summary: "The comprehensive review that established GHK-Cu as a multi-pathway skin regeneration agent. The paper documents that GHK-Cu — first isolated by Pickart in 1973 when he discovered it made aged liver tissue behave like younger tissue — accelerates wound healing, improves transplanted skin take, stimulates collagen and glycosaminoglycan synthesis, attracts immune and endothelial cells to injury sites, and restores replicative vitality to fibroblasts after radiation therapy. Crucially, plasma GHK levels decline from 200 ng/mL at age 20 to 80 ng/mL by age 60.",
  },
  {
    title: "Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data",
    authors: "Pickart L, Margolina A",
    journal: "International Journal of Molecular Sciences / PMC",
    year: "2018",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
    summary: "A landmark review synthesizing GHK-Cu's known biological actions with groundbreaking gene expression data from the Broad Institute's Connectivity Map. Using this publicly available genomic database, researchers found that GHK-Cu modulates expression of genes across an extraordinary range of categories — wound healing, collagen synthesis, anti-inflammatory signaling, nerve growth, antioxidant defense, and DNA repair.",
  },
  {
    title: "Skin Regenerative and Anti-Cancer Actions of Copper Peptides",
    authors: "Pickart L, Margolina A",
    journal: "Cosmetics (MDPI)",
    year: "2018",
    access: "Open Access",
    url: "https://www.mdpi.com/2079-9284/5/2/29",
    summary: "A focused review of GHK-Cu's applications in skin protection and cancer prevention — two applications that emerge from the same underlying mechanism of DNA repair and gene expression modulation. The paper documents how GHK-Cu's ability to modulate 84 genes associated with DNA repair and cancer suppression could make it relevant for skin cancer prevention alongside its established role in skin regeneration and anti-aging.",
  },
  {
    title: "Exploring the Role of Tripeptides in Wound Healing and Skin Regeneration — A Comprehensive Review",
    authors: "Adnan SB, Maarof M, Fauzi MB, et al.",
    journal: "International Journal of Medical Sciences",
    year: "2025",
    access: "Open Access",
    url: "https://www.medsci.org/v22p4175.htm",
    summary: "The most current systematic review of GHK-Cu in wound healing, covering studies published between 2016 and 2025. The paper documents GHK-Cu's role across all phases of wound repair — stimulating fibroblast migration, enhancing collagen deposition, supporting angiogenesis, and facilitating extracellular matrix remodeling. It also covers advanced formulations including nanoparticle conjugates and hydrogels.",
  },
  {
    title: "Effects of Topical Copper Tripeptide Complex on CO2 Laser-Resurfaced Skin",
    authors: "Leyden JJ, et al.",
    journal: "Archives of Facial Plastic Surgery / Liebertpub",
    year: "2006",
    access: "Paywalled",
    url: "https://www.liebertpub.com/abs/doi/10.1001/archfaci.8.4.252",
    summary: "One of the few controlled human clinical trials of GHK-Cu — examining its use after CO2 laser skin resurfacing in 13 patients. Patient satisfaction was significantly higher in the GHK-Cu group (p=.04), and data suggested superior improvement in wrinkle scores in Fitzpatrick classes II and III.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does GHK-Cu work?",
    intro:
      "GHK-Cu shuttles copper into cells where it powers enzymes including lysyl oxidase (collagen crosslinking), superoxide dismutase (antioxidant defense), and cytochrome c oxidase (cellular energy). It modulates expression of 4,000+ human genes related to collagen synthesis, tissue remodeling, and anti-inflammatory signaling — the breadth of this gene effect is unusual for any peptide. The combined copper-shuttle + gene-expression mechanism is what gives GHK-Cu its broad regenerative profile.",
    body: [
      "Copper Shuttle [1]. GHK-Cu carries copper into cells where it powers enzymes including lysyl oxidase (collagen crosslinking), superoxide dismutase (antioxidant defense), and cytochrome c oxidase (cellular energy). The copper-binding capability is what gives GHK-Cu its name and broad mechanistic reach.",
      "Gene Expression Modulation [2]. Modulates expression of 4,000+ human genes. Upregulates Type I and III collagen, decorin (302% increase), and glycosaminoglycans. Downregulates inflammatory and senescence pathways. This breadth of gene effect is unusual for any peptide.",
      "Collagen Synthesis [3]. Stimulates collagen synthesis at picomolar to nanomolar concentrations in skin fibroblasts. Notably stimulates BOTH collagen production AND breakdown of damaged collagen via matrix metalloproteinases — true tissue remodeling, not just deposition.",
      "Hair Follicle Stimulation [4]. Activates Wnt signaling in dermal papilla cells (anagen growth phase). Stimulates fibroblasts and angiogenesis around follicles. Inhibits TGF-beta-induced follicle miniaturization. This mechanism is distinct from Minoxidil's vasodilation pathway.",
      "Anti-Inflammatory & Antioxidant [5]. Reduces TNF-alpha and IL-6 in dermal fibroblasts. Stimulates antioxidant enzymes including superoxide dismutase. Reduces oxidative stress markers in cellular and animal studies.",
    ],
  },
  {
    id: "research",
    title: "What is GHK-Cu used for?",
    intro:
      "GHK-Cu's research evidence base is one of the broadest of any peptide — decades of cell, animal, and human studies across wound healing, skin rejuvenation, hair growth, anti-aging gene expression, and systemic healing applications. The Pickart-Margolina gene expression work demonstrating 'resetting DNA to a healthier state' via 4,000+ gene modulation is what distinguishes GHK-Cu from single-pathway compounds.",
    body: [
      "Wound Healing [6]. Animal studies show 40–50% faster wound closure. In rat ischemic skin flap models, GHK-Cu reduced wound size 64.5% vs 28.2% control over 13 days. Effects observed in dermal, corneal, and surgical wound models.",
      "Skin Rejuvenation [7]. Pilot studies on aged skin show increased thickness, elasticity, hydration, and collagen density. Comparable to tretinoin in some endpoints, with cleaner tolerability profile.",
      "Hair Growth. Studies suggest performance comparable to Minoxidil 5% via different mechanism (Wnt activation vs vasodilation). Topical formulations widely marketed for hair regrowth applications.",
      "Anti-Aging Gene Expression [2]. Pickart and Margolina's gene expression work demonstrates \"resetting DNA to a healthier state\" via 4,000+ gene modulation. The breadth of effect is what distinguishes GHK-Cu from single-pathway compounds.",
      "Systemic Healing. Animal studies show systemic effect: GHK-Cu injected in one tissue area improves healing at distant sites (rats, mice, pigs). This systemic activity is part of the rationale for injectable use over topical-only application.",
    ],
  },
  {
    id: "timeline",
    title: "How long does GHK-Cu take to work?",
    intro:
      "GHK-Cu effects develop on multiple timescales depending on route. Topical: visible skin texture changes typically 4–8 weeks of consistent use. Injectable: skin improvements within the first 30-day cycle; hair changes typically 60–90 days (second cycle). Systemic effects (gene expression modulation) are measurable within hours of dosing but cumulative over cycles. Most users complete 3 injectable cycles before assessing full results.",
    content:
      "Topical: visible skin texture changes typically 4–8 weeks of consistent use. Injectable: skin improvements within the first 30-day cycle; hair changes typically 60–90 days (second cycle). Systemic effects (gene expression modulation) are measurable within hours of dosing but cumulative over cycles. Most users complete 3 injectable cycles before assessing full results — consistent with the gene-expression-driven mechanism where effects accumulate via tissue remodeling rather than acute pharmacology.",
  },
  {
    id: "dosing",
    title: "How is GHK-Cu dosed?",
    intro:
      "GHK-Cu is used both topically (cosmetic skincare — strongest evidence base, FDA-permitted) and as an injectable research peptide (FDA-restricted as of 2023). Topical dose is 1–3% in serums/creams applied 1–2× daily. Injectable research protocol is typically a 30-day phased cycle: 1 mg/day for days 1–15, then 2 mg/day for days 16–30, followed by a 30-day break.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical (cosmetic).</span> 1–3% concentration in serums or creams. Apply 1–2× daily after cleansing.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injectable Phase 1 (Days 1–15).</span> 1 mg/day subcutaneously before bed.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injectable Phase 2 (Days 16–30).</span> 2 mg/day subcutaneously.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle structure.</span> 30 days on, 30 days off. Most users complete 3 cycles before assessing results.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> 50 mg vial + 10 mL bacteriostatic water = 5 mg/mL (20 units = 1 mg). See How is GHK-Cu administered? for the full reconstitution table.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          For most users, topical is the safer and more defensible starting point. Injectable adds systemic effects but carries the FDA restriction (compounded injectable preparation prohibited as of 2023) and quality-control concerns for research-grade material.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate your dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is GHK-Cu administered?",
    intro: (
      <>
        GHK-Cu is administered topically (cosmetic skincare &mdash; FDA-permitted) or by subcutaneous injection (FDA-restricted as of 2023). Topical use is the more defensible starting point and has the strongest evidence base. Injectable produces systemic effects across tissues but requires research-grade material and carries regulatory restrictions. For the practical mechanics of insulin syringes for the injectable route, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide.
      </>
    ),
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical.</span> Apply to clean dry skin, twice daily. Avoid combining with raw vitamin C in the same product (copper-vitamin C interactions destabilize both ingredients).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injectable route.</span> Subcutaneous injection at bedtime, at least 2 hours after last meal. Common sites: abdomen, thigh, upper arm.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Time of day.</span> Bedtime preferred (aligns with natural overnight tissue-repair pulses).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">With or without food.</span> Empty stomach preferred for injectable (2+ hours after eating).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Site rotation.</span> Alternate abdomen, thigh, upper arm for injectable.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution handling.</span> Bacteriostatic water, swirl gently, never shake. Light-sensitive &mdash; store in opaque container.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid direct sunlight.</span> Avoid direct sunlight on injection sites for 24–48 hours post-injection.</li>
        </ol>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Timing context.</span> GHK-Cu&apos;s effects accumulate via gene expression and tissue remodeling rather than acute pharmacology &mdash; the per-dose plasma profile matters less than cycle consistency. Topical and injectable produce different effect profiles: topical drives localized skin effects through direct dermal exposure; injectable produces systemic gene-expression modulation across tissues. Many users combine both routes (topical for skin, injectable for systemic) during research cycles.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Frequency</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Topical: 1–2× daily. Injectable: once daily during 30-day cycle (3 cycles typical).</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Topical: AM or PM. Injectable: bedtime preferred.</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Injectable: empty stomach preferred (2+ hours after eating)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route choice</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Topical for skin-focused (safer, FDA-permitted); injectable for systemic effects (FDA-restricted)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Short plasma half-life; biological effects persist via gene-expression changes</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Tissue effects accumulate over cycles &mdash; 3-cycle pattern is standard before full assessment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution math.</span> Choose your bacteriostatic water volume based on dose precision. Lower water volume = higher concentration = smaller syringe draw. GHK-Cu research vials are typically 50 mg &mdash; significantly larger than other research peptides. Because the per-dose amount is small (1–3 mg), higher reconstitution volumes (5–10 mL) are used to keep syringe draws practical. All units below are measured on a U-100 insulin syringe (100 units = 1 mL). The table assumes a 50 mg vial.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">1 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">2 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">3 mg dose</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">5 mg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">25 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">4 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">8 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">12 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">5 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">50 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">10 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">100 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Units vs mcg.</span> At a 50 mg vial, each unit drawn delivers 250 mcg of GHK-Cu at 2 mL reconstitution, 100 mcg at 5 mL, and 50 mcg at 10 mL &mdash; the reconstitution volume determines the mcg-per-unit conversion. For a primer on reading insulin syringes and choosing the right barrel size, see our guide on{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does GHK-Cu stack well with?",
    intro:
      "GHK-Cu's canonical pairing is with BPC-157 + TB-500 in the GLOW blend for skin/recovery synergy, or in the KLOW blend (adds KPV). Topical retinoids combine well (collagen synthesis + cell turnover), and topical niacinamide is compatible. The most important non-stacking is vitamin C: topical high-concentration vitamin C destabilizes the copper complex, so apply at different times of day.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">BPC-157 + TB-500 (GLOW Stack).</span>{" "}
          <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
          +{" "}
          <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>{" "}
          combined with GHK-Cu in the{" "}
          <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>{" "}
          blend for skin/recovery synergy. KPV adds anti-inflammatory effect for the broader{" "}
          <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>{" "}
          blend.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical retinoids.</span> Combination of GHK-Cu (collagen synthesis) + retinoid (cell turnover) is well-tolerated and synergistic.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Vitamin C serum.</span> Apply at separate times (AM vitamin C, PM GHK-Cu) to avoid copper-vitamin C neutralization.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Topical niacinamide.</span> Compatible &mdash; both support barrier function.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid: high-dose oral copper supplements.</span> During injectable GHK-Cu cycles &mdash; theoretical risk of total copper overload.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of GHK-Cu?",
    intro:
      "GHK-Cu is NOT FDA-approved for injectable use (FDA prohibits compounded injectable commercial preparation as of 2023). Topical GHK-Cu is widely available in cosmetic formulations with decades of safe-use history. The most common practical issue is topical irritation — typically resolves with reduced concentration or frequency. Mild injection-site reactions are reported for injectable use. Copper allergy is a real but uncommon contraindication.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild injection site reactions.</span> Injectable route only.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Possible scalp or skin irritation.</span> Topical route.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">&ldquo;Copper uglies&rdquo;.</span> Transient skin purging in first 1–2 weeks (rare); self-resolving.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild headache.</span> Uncommon.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild fatigue.</span> Uncommon.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Allergic reactions.</span> In copper-sensitive individuals.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Copper allergy reactions.</span> Hives, swelling, breathing issues &mdash; discontinue immediately.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Theoretical copper toxicity.</span> Negligible at standard doses but possible with chronic high-dose use.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Long-term injectable safety.</span> Not formally established.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          GHK-Cu is NOT FDA-approved for injectable use. The FDA prohibits injectable GHK-Cu in commercial compounding as of 2023. Topical GHK-Cu is widely available in cosmetic formulations and has decades of safe-use history. The most common practical issue is topical irritation &mdash; typically resolves with reduced concentration or frequency.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does GHK-Cu interact with other drugs?",
    intro:
      "GHK-Cu's most relevant interactions are with vitamin C (high-concentration topical destabilizes the copper complex — apply at different times), topical hydroquinone (limited data on combination), and copper-binding drugs like D-penicillamine or chelation therapy (theoretical interaction with injectable use). No significant systemic drug interactions documented at standard cosmetic doses.",
    body: [
      "Vitamin C (high concentration topical). Destabilizes copper complex; apply at different times.",
      "Topical hydroquinone. Limited data on combination.",
      "No significant systemic drug interactions documented at standard cosmetic doses.",
      "Injectable: theoretical interaction with chelation therapy or D-penicillamine (copper-binding drugs).",
    ],
  },
  {
    id: "storage",
    title: "How should GHK-Cu be stored?",
    body: [
      "Lyophilized: -20°C long-term, 2–8°C short-term.",
      "Topical formulations: room temperature in opaque packaging (light-sensitive).",
      "Reconstituted injectable: 2–8°C, 30 days max.",
      "Avoid contact with pure vitamin C in formulations.",
      "Reconstitute with bacteriostatic water for injection. Swirl gently — do not shake.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of GHK-Cu research?",
    intro:
      "GHK-Cu has one of the strongest evidence bases of any peptide on Prof. Peptide — decades of cell, animal, and human studies with consistent results across research groups. Topical use is established in cosmetic formulations and widely available without prescription. Injectable use is NOT FDA-approved and the FDA prohibits compounded injectable commercial preparation as of 2023. Long-term injectable safety data is not established. NOT currently on the WADA prohibited list.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          GHK-Cu has one of the strongest evidence bases of any peptide on Prof. Peptide &mdash; decades of cell, animal, and human studies, with consistent results across research groups.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Topical GHK-Cu is established in cosmetic formulations and widely available without prescription. Injectable GHK-Cu is NOT FDA-approved. The FDA prohibits compounded injectable GHK-Cu commercial preparation as of 2023.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Most clinical evidence is for topical applications; systemic effects from injection are derived from animal studies and limited human research. Long-term injectable safety data is not established.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Anti-doping: GHK-Cu is NOT currently on the WADA prohibited list. Research-grade material is sold for laboratory use only.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source GHK-Cu",
    intro:
      "Topical GHK-Cu is widely available in cosmetic skincare products at 1–3% concentrations. Injectable research-grade GHK-Cu is sold by specialty peptide vendors (note FDA restriction on compounded injectable as of 2023). The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes — including a UK/EU shipping option for international research.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "ascension-peptides" },
          ]}
        />
        <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
          <Link href="/coupons" className="text-[#3A759F] hover:underline">
            See all {activeVendorCount} verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "GHK-Cu FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-1">
              {f.q}
            </h3>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              {f.a}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "references",
    title: "References",
    node: (
      <ol className="list-decimal list-inside space-y-2">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Pickart L, Margolina A. Regenerative and Protective Actions of the GHK-Cu Peptide in the Light of the New Gene Data. Int J Mol Sci. 2018;19(7):1987.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Pickart L, Vasquez-Soltero JM, Margolina A. GHK and DNA: Resetting the Human Genome to Health. Biomed Res Int. 2014;2014:151479.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Pickart L, Margolina A. GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration. Biomed Res Int. 2015;2015:648108.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC4508379/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Maquart FX, Pickart L, et al. Stimulation of collagen synthesis in fibroblast cultures by the tripeptide-copper complex glycyl-L-histidyl-L-lysine-Cu2+. FEBS Letters. 1988.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Wikipedia. Copper peptide GHK-Cu.{" "}
          <a href="https://en.wikipedia.org/wiki/Copper_peptide_GHK-Cu" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://en.wikipedia.org/wiki/Copper_peptide_GHK-Cu
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Innerbody Research. GHK-Cu Peptide.{" "}
          <a href="https://www.innerbody.com/ghk-cu-peptide" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://www.innerbody.com/ghk-cu-peptide
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Pickart L. The Human Tripeptide GHK-Cu in Prevention of Oxidative Stress and Degenerative Conditions of Aging. Oxid Med Cell Longev. 2012.
        </li>
      </ol>
    ),
  },
  {
    id: "studies",
    title: "Published Studies",
    node: (
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Plain-English summaries of the peer-reviewed studies behind the claims above. Click any title to read the source paper.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#16181B] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = [
  { id: "overview", title: "What is GHK-Cu?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function GHKCuPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"GHK-Cu","description":"GHK-Cu (copper tripeptide) research profile: collagen synthesis, gene expression modulation, hair growth, dosing, side effects, FAQ, and FDA status.","url":"https://profpeptide.com/peptides/ghk-cu","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"GHK-Cu"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">GHK-Cu</h1>
        <span className="tag">Skin Health &amp; Anti-Aging</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: May 24, 2026
      </p>

      {/* Quick Facts — key facts already present on this page, in a scannable grid */}
      <section aria-label="Quick Facts" className="panel-card mb-10 overflow-hidden">
        <div className="px-5 py-4">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[#16181B] dark:text-slate-100 mb-3">
            Quick Facts
          </h2>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">What it is</dt>
              <dd className="text-base text-[#16181B] dark:text-slate-100">A naturally occurring copper-binding peptide studied for skin, hair, and connective-tissue repair &mdash; it modulates thousands of genes tied to collagen synthesis and tissue remodeling.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Topical (creams/serums) or subcutaneous injection</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Short plasma half-life; effects persist via gene-expression changes</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Topical 1&ndash;3%; injectable 1&ndash;2 mg/day in 30-day cycles</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Topical permitted in cosmetics; injectable not FDA-approved &mdash; research use only.</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mobile "Jump to section" (collapses cleanly; rail TOC is hidden on mobile) */}
      <ProfileTOC sections={tocSections} variant="mobile" />

      {/* Two-column: primary content + right rail */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 lg:items-start">
        <main className="min-w-0">

      <div id="overview" className="scroll-mt-24">
        <h2 className="section-heading mb-3">What is GHK-Cu?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            GHK-Cu &mdash; also known as copper tripeptide-1, GHK copper peptide, or simply GHK &mdash; is a naturally occurring copper-binding tripeptide (glycyl-L-histidyl-L-lysine) first isolated by Loren Pickart in 1973 from human plasma albumin. It exists naturally in plasma, saliva, and urine &mdash; at age 20 plasma levels average ~200 ng/mL, declining to ~80 ng/mL by age 60. This decline coincides with reduced regenerative capacity. GHK-Cu has one of the broadest mechanistic profiles of any peptide on Prof. Peptide &mdash; gene expression studies show it modulates over 4,000 human genes related to collagen synthesis, wound healing, anti-inflammatory signaling, and tissue remodeling. Often paired with{" "}
            <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
            +{" "}
            <Link href="/peptides/tb-500" className="text-[#3A759F] hover:underline">TB-500</Link>{" "}
            in the{" "}
            <Link href="/peptides/glow" className="text-[#3A759F] hover:underline">GLOW</Link>{" "}
            blend for skin and recovery, or in the broader{" "}
            <Link href="/peptides/klow" className="text-[#3A759F] hover:underline">KLOW</Link>{" "}
            blend. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Stimulates collagen and glycosaminoglycan synthesis in skin fibroblasts</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Modulates expression of 4,000+ human genes related to tissue repair</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Accelerates wound healing (40–50% faster wound closure in animal models)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Supports hair follicle stimulation comparable to Minoxidil 5% in some studies</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Anti-inflammatory and antioxidant activity</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Available topically (cosmetic skincare) and as injectable research peptide</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> Topical: 1–3% concentration in serums/creams, applied 1–2× daily. Injectable research protocol: 1–2 mg subcutaneously, 30-day cycle (typically 1 mg days 1–15, escalating to 2 mg days 16–30), then 30-day break.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
          </p>
        </div>
      </div>

      {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-24 mt-12 border-t-2 border-brand/30 pt-12">
            <h2 className="section-heading mb-3">
              {s.title}
            </h2>
            {s.intro && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                {s.intro}
              </p>
            )}
            {s.node && s.node}
            {s.content && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.content}</p>
            )}
            {s.body && (
              <ol className="list-decimal list-inside space-y-1">
                {s.body.map((item, i) => (
                  <li key={i} className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}

      <div className="flex flex-wrap gap-2 mt-8">
        {["Skin Health & Anti-Aging", "Copper Peptide", "Wound Healing", "Research-Grade"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>


      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">BPC-157</Link>
        <Link href="/peptides/tb-500" className="text-sm font-medium text-[#3A759F] hover:underline">TB-500</Link>
        <Link href="/peptides/kpv" className="text-sm font-medium text-[#3A759F] hover:underline">KPV</Link>
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/glow" className="text-sm font-medium text-[#3A759F] hover:underline">GLOW</Link>
        <Link href="/peptides/klow" className="text-sm font-medium text-[#3A759F] hover:underline">KLOW</Link>
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#3A759F] hover:underline">Wolverine Stack</Link>
        </div>
      </div>

      <div className="mt-6 p-5 border border-[#3A759F]/20 bg-[#3A759F]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Comparisons</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/compare/bpc-157-vs-ghk-cu" className="text-sm font-medium text-[#3A759F] hover:underline">BPC-157 vs GHK-Cu &rarr;</Link>
        </div>
      </div>

<div className="mt-12 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
          Need to calculate a dose?
        </p>
        <p className="text-xs text-gray-500 dark:text-slate-400 mb-3">
          Use the Prof. Peptide dosage calculator for accurate reconstitution
          and dosing math.
        </p>
        <Link href="/calculator" className="btn-primary text-sm">
          Open Calculator
        </Link>
      </div>

      <PageDisclaimer />
    <ContactLink pageName="GHK-Cu" pagePath="/peptides/ghk-cu" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
