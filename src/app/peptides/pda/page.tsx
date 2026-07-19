import Link from "next/link";
import { activeVendorCount } from "@/data/vendors";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import VendorHighlightBlock from "@/components/VendorHighlightBlock";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/pda",
  title: "PDA (Pentadeca Arginate) — Arginate Salt of BPC-157, Evidence & Status | Prof. Peptide",
  description:
    "Pentadeca Arginate (PDA) is the arginate-salt form of BPC-157 — same 15-amino-acid sequence. What's actually known vs. unverified vendor claims, mechanism, dosing, safety, and FDA status.",
});

const faqs = [
  {
    q: "Is PDA the same thing as BPC-157?",
    a: "Essentially, yes. Pentadeca Arginate (PDA) is the arginate-salt form of BPC-157 — the identical 15-amino-acid peptide (sequence GEPPPGKPADDAGLV), paired with an arginine counterion instead of the acetate counterion used in conventional BPC-157. The active peptide is the same molecule; only the salt differs. That means PDA has no separate published evidence base of its own — its research rationale is inherited entirely from BPC-157.",
  },
  {
    q: "Is PDA really 1,000× more stable than BPC-157?",
    a: "That claim is unpublished vendor marketing, not a peer-reviewed finding. As of 2026 no controlled, peer-reviewed study has measured the comparative stability of the arginate salt versus the acetate salt, and no head-to-head data has been published. Arginate salts can in principle affect solubility and shelf stability, but the specific '1,000×' figure is a marketing number with no citable source. Treat it as an unverified claim.",
  },
  {
    q: "Is there any research specifically on PDA?",
    a: "As of 2026, no peer-reviewed study has investigated Pentadeca Arginate as a distinct molecule. Every mechanistic and tissue-repair claim made for PDA is extrapolated from the BPC-157 literature, which is itself almost entirely preclinical (rodent) work. A 2025 systematic review of BPC-157 in orthopaedic sports medicine identified only one small human study, underscoring how thin the human evidence is even for the parent compound.",
  },
  {
    q: "How is PDA dosed?",
    a: "There is no PDA-specific pharmacokinetic data, so dosing is extrapolated directly from BPC-157 research protocols: typically 250–500 mcg subcutaneously once or twice daily in 4–8 week cycles. Because PDA is the same peptide, the same reconstitution and injection mechanics apply. These figures come from BPC-157 use, not from any study of the arginate salt.",
  },
  {
    q: "What is the FDA status of PDA?",
    a: "In November 2023, the FDA classified BPC-157 as a Category 2 bulk drug substance under its 503A/503B compounding review, meaning it cannot be used in compounded medications pending further safety review. Because PDA is a salt-form variant of the same peptide, it falls under the same regulatory umbrella. It is sold only as a research-use-only (RUO) laboratory chemical, not as an approved drug.",
  },
  {
    q: "Where can I buy PDA?",
    a: (
      <>
        PDA is sold by specialty research-peptide vendors as a research-use-only material. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Stable Gastric Pentadecapeptide BPC 157 and Wound Healing",
    authors: "Sikiric P, Seiwerth S, Rucman R, et al.",
    journal: "Frontiers in Pharmacology",
    year: "2021",
    access: "Open Access",
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.627533/full",
    summary: "A comprehensive review of BPC-157’s wound-healing properties across more than 25 years of animal research — documenting accelerated healing of skin wounds, burns, ulcers, and fistulas through angiogenesis, collagen deposition, and nitric-oxide-system modulation. This is the parent-compound evidence base that PDA (as the arginate salt of the same peptide) draws on; note that the review concerns BPC-157 itself, not the arginate variant.",
  },
  {
    title: "Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review",
    authors: "Vasireddi N, Hahamyan H, Salata MJ, et al.",
    journal: "HSS Journal / PMC",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/",
    summary: "The most current systematic review of BPC-157 for musculoskeletal injuries — 36 studies from 1993 to 2024, overwhelmingly animal models. It identified only one small human study (7 of 12 chronic-knee-pain patients reporting relief after a single injection) and concluded that, while preclinical results are promising, risks remain from unregulated manufacturing and the absence of formal human safety data. This is the key honesty anchor for PDA: even the parent compound has essentially no human trial base.",
  },
  {
    title: "Regeneration or Risk? A Narrative Review of BPC-157 for Musculoskeletal Health",
    authors: "McGuire FP, Martinez R, Lenz A, et al.",
    journal: "Curr Rev Musculoskelet Med / PMC",
    year: "2025",
    access: "Open Access",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/",
    summary: "A 2025 narrative review weighing BPC-157’s regenerative promise against its risks — emphasizing that the evidence is preclinical, that manufacturing is unregulated, and that the FDA’s Category 2 classification reflects unresolved safety questions. Applies directly to PDA, which inherits both the mechanistic rationale and the regulatory status of BPC-157.",
  },
];

const sections = [
  {
    id: "difference",
    title: "PDA vs BPC-157: what's actually different?",
    intro:
      "The honest answer: only the salt. PDA is the arginate salt of the same 15-amino-acid peptide as BPC-157 (sequence GEPPPGKPADDAGLV) — an arginine counterion in place of the acetate counterion. The active peptide is chemically identical; a salt swap changes how the powder is packaged, not the peptide that reaches tissue.",
    body: [
      "Same peptide, different counterion. BPC-157 is typically supplied as an acetate salt; PDA (Pentadeca Arginate) is supplied as an arginate salt. Once reconstituted and dosed, the same pentadecapeptide is delivered.",
      "The \"1,000× more stable\" claim is unpublished vendor marketing. No peer-reviewed study has measured the arginate salt's stability against the acetate salt, and no head-to-head comparison has been published. The specific figure has no citable primary source — treat it as an unverified marketing claim, not a fact.",
      "No PDA-specific research exists. As of 2026, no peer-reviewed study has investigated Pentadeca Arginate as a distinct molecule. Everything below is inherited from the BPC-157 literature, which is itself almost entirely preclinical.",
      "Why the salt form appeared. Arginate salts are used across pharmaceutical chemistry to adjust solubility and handling. Whether that yields any meaningful real-world advantage for this peptide is untested — plausible in principle, unproven in practice.",
    ],
  },
  {
    id: "mechanism",
    title: "How does PDA work?",
    intro:
      "Because PDA delivers the same peptide as BPC-157, its proposed mechanisms are BPC-157's mechanisms — none are specific to the arginate salt. In animal models the parent peptide acts through angiogenesis, growth-factor modulation, the FAK-paxillin pathway, nitric-oxide modulation, and gut-brain-axis effects. These are the most-studied pathways for the peptide; they have not been separately re-demonstrated for the arginate form.",
    body: [
      "Angiogenesis promotion [1]. The peptide upregulates VEGF and endothelial nitric oxide synthase (eNOS), stimulating new blood-vessel formation and improving delivery of oxygen and nutrients to injured tissue in animal models.",
      "Growth-factor modulation [2]. Increased EGR-1 expression drives fibroblast proliferation and collagen synthesis — the cells and matrix that rebuild connective tissue after injury.",
      "FAK-paxillin pathway [3]. In tendon and ligament tissue the peptide activates FAK-paxillin signaling, associated with improved tendon-to-bone insertion strength and collagen organization in rodent studies.",
      "Nitric-oxide modulation. The peptide modulates nitric-oxide synthesis bidirectionally, an effect linked to its anti-inflammatory and vascular actions in animal models.",
      "Gut-brain axis [4]. In animals the peptide interacts with dopaminergic and serotonergic systems, the basis for its reported neuroprotective and gut-healing effects. All of this is BPC-157 data applied to PDA by chemical identity, not by direct study of PDA.",
    ],
  },
  {
    id: "research",
    title: "What is PDA researched for?",
    intro:
      "There is no PDA-specific research program. The applications below are the BPC-157 evidence base — overwhelmingly rodent studies — that PDA inherits by being the same peptide. No completed Phase 2 or 3 human trial exists for either form, and a 2025 systematic review of BPC-157 found only one small human study.",
    body: [
      "Tendon and ligament repair [3][5]. Multiple rat studies report faster Achilles-tendon and rotator-cuff healing; a 2025 systematic review analyzed 36 BPC-157 studies and found consistent benefit across musculoskeletal animal models.",
      "Muscle injury recovery [6]. Crush- and transection-injury models show accelerated functional recovery and reduced fibrotic scarring.",
      "Gastrointestinal protection [4]. The most established research area for the parent peptide — protection against NSAID-induced gastric lesions and support of ulcer and anastomosis healing in animal models.",
      "Human evidence is minimal. The single small human study cited in the 2025 review (7 of 12 chronic-knee-pain patients reporting relief after one injection) is the extent of controlled human data — for BPC-157, and by extension the only human-adjacent signal PDA can claim.",
    ],
  },
  {
    id: "dosing",
    title: "How is PDA dosed?",
    intro:
      "No PDA-specific pharmacokinetic data exists, so every dosing figure here is extrapolated directly from BPC-157 research protocols. Because PDA delivers the same peptide, the same reconstitution mechanics apply. These numbers describe how researchers have dosed BPC-157 — they are not derived from any study of the arginate salt.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Standard injectable.</span> 250 mcg subcutaneously once daily, or 250 mcg twice daily for stronger effect (extrapolated from BPC-157 protocols).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Higher injectable.</span> 500 mcg once or twice daily for severe injuries or post-surgical research protocols.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Localized injection.</span> Injecting subcutaneously near the injury site tends to produce stronger localized effects than abdominal injection in animal models.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 4–8 weeks for routine recovery; up to 12 weeks for chronic or post-surgical research protocols.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reconstitution.</span> PDA research vials are typically 5 mg or 10 mg. Because doses are small (250–500 mcg), a 2 mL reconstitution is the common convention — it gives clean whole-number units across the typical range. All units below are measured on a U-100 insulin syringe (100 units = 1 mL); the table assumes a 5 mg vial.
        </p>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#1e2d3d]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">250 mcg dose</th>
                <th className="px-4 py-3 font-semibold text-[#1e2d3d] dark:text-slate-100">500 mcg dose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2.5 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate a dose? Convert mg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>. For insulin-syringe mechanics and subcutaneous technique, see the{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link> guide.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of PDA?",
    intro:
      "No PDA-specific safety study exists. The expected profile is BPC-157's: in animal studies the parent peptide has an unusually clean profile, with no toxic dose identified across decades of rodent work, but there are no completed long-term human safety trials for either form. Because the arginine counterion is the only difference, no distinct safety signal is anticipated — but this is inference, not tested fact.",
    body: [
      "Injection-site reactions. Mild redness or irritation, typically transient — the most commonly reported effect in user protocols.",
      "Occasional mild dizziness or headache. Reported inconsistently on initial doses; usually self-limiting.",
      "No characterized long-term human safety data. No completed Phase 2 or 3 trials exist for BPC-157 or PDA; human safety beyond anecdotal use is not formally validated.",
      "Theoretical tumor-stimulation concern. The peptide's angiogenic activity raises a theoretical concern for anyone with active malignancy, though no such signal has appeared in the available animal or limited human data.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of PDA research?",
    intro:
      "This is the most important section on the page. PDA is marketed as an upgraded BPC-157, but the evidence supporting that framing is thin to nonexistent.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          No peer-reviewed study has investigated Pentadeca Arginate as a distinct molecule as of 2026. Its entire research rationale is borrowed from BPC-157, whose own evidence is almost exclusively preclinical (rodent) — a 2025 systematic review found only one small human study.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The headline marketing claim — that the arginate salt is roughly 1,000× more stable than BPC-157 acetate — is unpublished vendor material with no citable primary source. It has not been demonstrated in any peer-reviewed, head-to-head study.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Regulatory status is inherited, not improved. The FDA classified BPC-157 as a Category 2 bulk drug substance in November 2023 under its 503A/503B compounding review; as a salt-form variant of the same peptide, PDA falls under the same restriction. Research-grade material is sold for laboratory use only (RUO) and is not approved for human use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Bottom line: PDA is best understood as a salt-form variant of BPC-157, not a separately validated compound. Anyone evaluating it should weigh the (preclinical) BPC-157 evidence base and disregard PDA-specific superiority claims until controlled data exists.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source PDA",
    intro:
      "PDA is not FDA-approved and, as a BPC-157 variant, cannot be used in compounded medications (Category 2 bulk drug substance, 2023). Research-grade material is sold by specialty peptide vendors for laboratory use only. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "glacier-aminos", note: "Batch-traceable COAs · cold-chain shipping" },
            { slug: "peptide-partners", note: "Editor's Pick — 4-test purity program" },
            { slug: "ameano-peptides", note: "Published per-product COAs · third-party verified" },
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
    title: "PDA FAQ",
    node: (
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-1">
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
          Seiwerth S, Rucman R, Turkovic B, et al. BPC 157 and standard angiogenic growth factors. Curr Pharm Des. 2018;24(18):1972-1989.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/29998800/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/29998800/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Tkalcevic VI, Cuzic S, Brajsa K, et al. Enhancement by PL 14736 of granulation and collagen organization in healing wounds and the potential role of egr-1 expression. Eur J Pharmacol. 2007;570(1-3):212-21.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17628536/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17628536/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Chang CH, Tsai WC, Lin MS, et al. The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration. J Appl Physiol. 2011;110(3):774-80.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21030672/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21030672/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Sikiric P, Seiwerth S, Rucman R, et al. Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications. Curr Neuropharmacol. 2016;14(8):857-865.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC5333585/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Vasireddi N, Hahamyan H, Salata MJ, et al. Emerging Use of BPC-157 in Orthopaedic Sports Medicine: A Systematic Review. HSS J. 2025.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC12313605/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Staresinic M, Petrovic I, Novinscak T, et al. Effective therapy of transected quadriceps muscle in rat: Gastric pentadecapeptide BPC 157. J Orthop Res. 2006;24(5):1109-17.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16609979/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16609979/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          McGuire FP, Martinez R, Lenz A, et al. Regeneration or Risk? A Narrative Review of BPC-157 for Musculoskeletal Health. Curr Rev Musculoskelet Med. 2025.{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pmc.ncbi.nlm.nih.gov/articles/PMC12446177/
          </a>
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
          There are no published studies on Pentadeca Arginate itself. The summaries below are the BPC-157 papers that define the evidence base PDA inherits — read them as parent-compound research, not as PDA data.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#3A759F] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#3A759F] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function PDAPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"PDA (Pentadeca Arginate)","description":"Pentadeca Arginate (PDA) research profile: the arginate-salt form of BPC-157, its inherited mechanism and evidence base, dosing, safety, unverified stability claims, and FDA Category 2 status.","url":"https://profpeptide.com/peptides/pda","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"PDA (Pentadeca Arginate)"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">PDA (Pentadeca Arginate)</h1>
        <span className="tag">Recovery &amp; Tissue Repair</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: July 13, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Pentadeca Arginate, PDA,{" "}
          <Link href="/peptides/bpc-157" className="text-[#3A759F] hover:underline">BPC-157</Link>{" "}
          Arginate, Arginate-salt BPC-157
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Arginate salt of BPC-157 &mdash; same 15-amino-acid pentadecapeptide (GEPPPGKPADDAGLV), arginine counterion
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; inherits BPC-157&apos;s FDA Category 2 bulk drug substance classification (Nov 2023) &mdash; research-use-only.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is PDA (Pentadeca Arginate)?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Pentadeca Arginate (PDA) is the arginate-salt form of BPC-157 &mdash; the same 15-amino-acid synthetic peptide (sequence GEPPPGKPADDAGLV), supplied with an arginine counterion instead of the acetate counterion used in conventional BPC-157. In plain terms, PDA is essentially a salt-form variant of BPC-157: the peptide that reaches tissue is the same molecule, so PDA has no independent research base of its own. It is marketed as a more stable, upgraded version, but as of 2026 no peer-reviewed study has investigated PDA as a distinct compound.
          </p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 p-4">
            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <span className="font-semibold">Evidence honesty:</span> The widely-repeated claim that PDA is &ldquo;1,000× more stable than BPC-157 acetate&rdquo; is unpublished vendor marketing, not a peer-reviewed finding &mdash; there is no head-to-head study behind it. Every mechanistic and tissue-repair claim for PDA is extrapolated from the BPC-157 literature, which is itself almost entirely preclinical. Treat PDA as a salt-form variant of BPC-157, and evaluate it on the (preclinical) BPC-157 evidence base.
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              What is genuinely known:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">PDA is the arginate salt of the same peptide as BPC-157 &mdash; identical amino-acid sequence</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Its proposed mechanisms (angiogenesis, growth-factor and collagen support, tendon-to-bone signaling) are BPC-157&apos;s, demonstrated in animal models</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">No peer-reviewed study has investigated PDA specifically; a 2025 systematic review of BPC-157 found only one small human study</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">The &ldquo;1,000× stability&rdquo; and &ldquo;upgraded BPC-157&rdquo; claims are unverified vendor marketing</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">It inherits BPC-157&apos;s FDA Category 2 status (Nov 2023) and is sold research-use-only</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> Extrapolated from BPC-157 protocols &mdash; typically 250–500 mcg subcutaneously once or twice daily in 4–8 week cycles. No PDA-specific pharmacokinetic data exists.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#3A759F] hover:underline">
              Verified Discount Codes &rarr;
            </Link>{" "}
            for current options.
          </p>
        </div>
      </div>

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              {s.title}
            </h2>
            {s.intro && (
              <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed mb-4">
                {s.intro}
              </p>
            )}
            {s.node && s.node}
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
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Tissue Repair", "BPC-157 Variant", "Salt Form", "Research-Grade"].map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Related Peptides</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/tb-500" className="text-sm font-medium text-[#3A759F] hover:underline">TB-500</Link>
        <Link href="/peptides/ghk-cu" className="text-sm font-medium text-[#3A759F] hover:underline">GHK-Cu</Link>
        <Link href="/peptides/kpv" className="text-sm font-medium text-[#3A759F] hover:underline">KPV</Link>
        <Link href="/peptides/wolverine-stack" className="text-sm font-medium text-[#3A759F] hover:underline">Wolverine Stack</Link>
        </div>
      </div>

      <div className="mt-6 p-5 border border-[#3A759F]/20 bg-[#3A759F]/10 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">Compare</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/bpc-157" className="text-sm font-medium text-[#3A759F] hover:underline">See the full BPC-157 profile &rarr;</Link>
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
    <ContactLink pageName="PDA (Pentadeca Arginate)" pagePath="/peptides/pda" />
    </div>
    </>
  );
}
