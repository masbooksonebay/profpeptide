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
  path: "/peptides/ll-37",
  title: "LL-37 — Human Cathelicidin Antimicrobial Peptide, Evidence & Safety | Prof. Peptide",
  description:
    "LL-37 research profile: the sole human cathelicidin — a broad-spectrum antimicrobial and immunomodulatory peptide. Strong basic science, limited clinical data, and its double-edged inflammatory biology.",
});

const faqs = [
  {
    q: "Is LL-37 a proven antimicrobial treatment?",
    a: "No. LL-37 has broad-spectrum antimicrobial activity in the lab — it kills bacteria, fungi, and some viruses in vitro — but in-vitro activity is not the same as proven clinical efficacy. Its concentration, salt sensitivity, and behavior in living tissue differ substantially from a test tube. Human therapeutic evidence is limited (some wound-healing and biomarker work), and LL-37 is not an approved treatment for any infection.",
  },
  {
    q: "Is LL-37 good or bad for inflammation?",
    a: "Both — and that is the most important thing to understand about it. LL-37 is protective in host defense and wound repair, but it is also upregulated in and mechanistically implicated in several inflammatory and autoimmune conditions, including psoriasis, rosacea, and lupus. In psoriasis it binds self-DNA and activates plasmacytoid dendritic cells, driving a type-I interferon response. So LL-37 is not uniformly 'good' — its biology is genuinely double-edged, and more is not automatically better.",
  },
  {
    q: "What is LL-37 made from?",
    a: "LL-37 is the only human cathelicidin. It is a 37-amino-acid peptide (its name comes from the two leucine residues at the start, 'LL', plus its 37-residue length) cleaved by proteases from the C-terminal end of a precursor protein called hCAP18, encoded by the CAMP gene. It is produced by neutrophils and epithelial cells at barrier surfaces — skin, gut, and airway — as part of innate immune defense.",
  },
  {
    q: "How is LL-37 dosed?",
    a: "There is no established, validated human therapeutic dose for LL-37. It is sold as a research-use-only material, and the published human work is limited and heterogeneous rather than built around a standardized protocol. Anyone citing a specific 'LL-37 protocol' is extrapolating beyond the clinical evidence, which does not support a defined dosing regimen.",
  },
  {
    q: "Is LL-37 FDA-approved?",
    a: "No. LL-37 is not FDA-approved for any indication and is sold only as a research-use-only laboratory material. It is a heavily studied peptide in basic science, but it has not completed the clinical development that would make it an approved therapy.",
  },
  {
    q: "Where can I buy LL-37?",
    a: (
      <>
        LL-37 is sold by specialty research-peptide vendors as a research-use-only material. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "LL-37, the only human member of the cathelicidin family of antimicrobial peptides",
    authors: "Dürr UH, Sudheendra US, Ramamoorthy A.",
    journal: "Biochim Biophys Acta",
    year: "2006",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/16716248/",
    summary: "A foundational structural and mechanistic review of LL-37. It describes the peptide as an amphipathic, cationic α-helix that disrupts microbial membranes, and details how its activity depends on concentration, lipid environment, and salt conditions — an early, clear statement of why LL-37's potent test-tube activity does not translate directly to living tissue. This is the mechanistic basis for treating LL-37 as biochemically well-characterized but clinically unproven.",
  },
  {
    title: "A comprehensive summary of LL-37, the factotum human cathelicidin peptide",
    authors: "Vandamme D, Landuyt B, Luyten W, Schoofs L.",
    journal: "Cellular Immunology",
    year: "2012",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/23246832/",
    summary: "A wide-ranging review cataloguing LL-37's many roles — direct antimicrobial action, chemotaxis, angiogenesis, wound healing, and immunomodulation — hence 'factotum' (a jack-of-all-trades). Crucially, it also documents the peptide's involvement in disease, making clear that LL-37 is a pleiotropic molecule whose effects depend heavily on context, concentration, and tissue. The breadth is real; the review does not claim proven clinical therapies.",
  },
  {
    title: "The cathelicidin anti-microbial peptide LL-37 is involved in re-epithelialization of human skin wounds",
    authors: "Heilborn JD, Nilsson MF, Kratz G, et al.",
    journal: "J Invest Dermatol",
    year: "2003",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/12603850/",
    summary: "A human-tissue study showing LL-37 is expressed during skin wound healing and that blocking it impairs re-epithelialization (the resurfacing of a wound with new skin). This is among the more direct pieces of human-relevant evidence for a beneficial LL-37 role — in wound repair specifically — though it demonstrates involvement in a biological process rather than establishing LL-37 as a wound-healing drug.",
  },
  {
    title: "Plasmacytoid dendritic cells sense self-DNA coupled with antimicrobial peptide (LL37)",
    authors: "Lande R, Gregorio J, Facchinetti V, et al.",
    journal: "Nature",
    year: "2007",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/17873860/",
    summary: "The landmark paper showing LL-37's dark side: by binding fragments of the body's own DNA, LL-37 lets plasmacytoid dendritic cells react to self-DNA and produce type-I interferon — a mechanism central to psoriasis. It is a vivid demonstration that the same peptide praised for host defense can drive autoimmune inflammation, and a core reason a serious LL-37 profile cannot present it as uniformly protective.",
  },
  {
    title: "Increased serine protease activity and cathelicidin promotes skin inflammation in rosacea",
    authors: "Yamasaki K, Di Nardo A, Bardan A, et al.",
    journal: "Nature Medicine",
    year: "2007",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/17676051/",
    summary: "Shows that abnormal processing of cathelicidin into inflammatory LL-37 fragments contributes to rosacea, linking the peptide directly to a common inflammatory skin disease. Together with the psoriasis and autoimmune literature, it establishes that dysregulated LL-37 activity is pathogenic in real human conditions — the strongest practical caution against assuming 'more LL-37 is better.'",
  },
  {
    title: "Little peptide, big effects: the role of LL-37 in inflammation and autoimmune disease",
    authors: "Kahlenberg JM, Kaplan MJ.",
    journal: "J Immunol",
    year: "2013",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/24185823/",
    summary: "A focused review of LL-37's role across inflammatory and autoimmune disease — psoriasis, lupus, rheumatoid arthritis, and atherosclerosis — including its presence in neutrophil extracellular traps and as an autoantigen. It is the clearest single reference for the honest framing of this profile: LL-37 is a powerful, double-edged immune peptide whose dysregulation contributes to disease, not a simple 'immune booster.'",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does LL-37 work?",
    intro:
      "LL-37 is a cationic (positively charged), amphipathic α-helical peptide — a shape that lets it interact with the negatively charged membranes of microbes. Its actions fall into two broad categories: direct antimicrobial membrane disruption, and a wide set of immunomodulatory signaling effects. The membrane and immunomodulatory mechanisms are well characterized biochemically; how they play out therapeutically in humans is far less settled.",
    body: [
      "Direct antimicrobial membrane disruption [1]. LL-37's amphipathic helix inserts into and permeabilizes microbial membranes, giving broad-spectrum activity against bacteria, fungi, and some enveloped viruses in vitro. This activity is sensitive to salt concentration and the lipid environment, which is one reason lab potency does not map cleanly onto living tissue.",
      "Immunomodulation and chemotaxis [2][6]. Beyond killing microbes, LL-37 recruits immune cells (acting as a chemoattractant, partly via the FPR2 receptor), modulates Toll-like-receptor responses, and can neutralize bacterial LPS (endotoxin) — dampening or amplifying inflammation depending on context.",
      "Wound healing and angiogenesis [2][3]. LL-37 promotes re-epithelialization and new blood-vessel formation, contributing to tissue repair at barrier surfaces such as skin and gut.",
      "Self-nucleic-acid sensing (the double-edged mechanism) [4]. LL-37 binds host DNA and RNA and delivers them into immune cells, enabling plasmacytoid dendritic cells to react to 'self' and produce type-I interferon — the mechanism that links LL-37 to psoriasis and other autoimmune inflammation.",
    ],
  },
  {
    id: "research",
    title: "What is LL-37 researched for?",
    intro:
      "LL-37 has a large basic-science literature — mechanism and in-vitro antimicrobial activity are genuinely well studied and citable. The essential honesty line for this profile: in-vitro antimicrobial activity does not equal proven clinical efficacy. Human therapeutic evidence is limited, and LL-37 is not an approved treatment for any of the applications below.",
    body: [
      "Antimicrobial defense [1][2]. Broad-spectrum killing of bacteria, fungi, and some viruses — robustly demonstrated in vitro, including against antibiotic-resistant organisms. Translating that into a safe, effective human anti-infective remains unproven.",
      "Wound healing and epithelial repair [3]. LL-37 participates in re-epithelialization of human skin wounds and is expressed at barrier surfaces; this is among the more human-relevant beneficial signals, but it shows biological involvement rather than an established therapy.",
      "Mucosal and gut immunity [2]. As a barrier-surface defense peptide produced by epithelial cells, LL-37 is studied in gut and airway immunity and inflammatory bowel contexts — mostly mechanistic and preclinical work.",
      "Immunomodulation [2][6]. Investigated as an immune modulator (LPS neutralization, chemotaxis), but its context-dependent, sometimes pro-inflammatory behavior complicates any simple therapeutic framing.",
    ],
  },
  {
    id: "double-edge",
    title: "The double-edged biology of LL-37",
    intro:
      "A serious profile has to say this plainly: LL-37 is not uniformly protective. The same properties that make it useful in host defense also implicate it in driving inflammation and autoimmunity when it is dysregulated or overexpressed.",
    body: [
      "Psoriasis [4]. LL-37 binds self-DNA and activates plasmacytoid dendritic cells to produce type-I interferon, a central driver of psoriatic skin inflammation — one of the best-characterized examples of an antimicrobial peptide fueling autoimmunity.",
      "Rosacea [5]. Abnormal processing of cathelicidin into inflammatory LL-37 fragments contributes to the redness and inflammation of rosacea, linking the peptide directly to a common skin disease.",
      "Lupus and systemic autoimmunity [6]. LL-37 appears in neutrophil extracellular traps and can act as an autoantigen (with anti-LL-37 antibodies described in lupus), tying it to systemic autoimmune inflammation.",
      "Practical implication. Because dysregulated LL-37 activity is pathogenic in real human conditions, 'more LL-37' is not self-evidently beneficial — the therapeutic window, context, and tissue matter enormously, and this is a genuine safety consideration rather than a hypothetical one.",
    ],
  },
  {
    id: "dosing",
    title: "How is LL-37 dosed?",
    intro:
      "There is no established, validated human therapeutic dosing regimen for LL-37, and it is sold research-use-only. The published human work is limited and does not converge on a standardized protocol, so any specific 'LL-37 dose' circulating online is extrapolation beyond the clinical evidence rather than a research-backed recommendation.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          What the literature does establish is that LL-37&apos;s activity is highly context-dependent: its antimicrobial potency varies with salt concentration and lipid environment, and at higher concentrations it can be cytotoxic to host cells in vitro. That sensitivity is a key reason a simple dose-response protocol has not been established for human use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Given the absence of validated human dosing and the peptide&apos;s double-edged inflammatory biology, LL-37 is best regarded as a research compound rather than a self-administered protocol. For general reconstitution mechanics of research peptides, see the{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link> guide and the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of LL-37?",
    intro:
      "LL-37 does not have a characterized human safety profile, because it has not undergone the clinical development that would produce one. The most important safety consideration is intrinsic to its biology rather than a list of reported adverse events.",
    body: [
      "Pro-inflammatory and autoimmune potential. LL-37's mechanistic role in psoriasis, rosacea, and lupus means that increasing its activity carries a theoretical risk of promoting inflammation — a real biological concern, not a hypothetical one.",
      "Cytotoxicity at higher concentrations. In vitro, LL-37 can damage host cells above certain concentrations, reflecting the narrow line between antimicrobial benefit and host harm.",
      "No established long-term human safety data. There are no completed trials characterizing repeated or chronic administration in people.",
      "Not an approved therapy. LL-37 is research-use-only; its use outside the laboratory is not supported by clinical safety data.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of LL-37 research?",
    intro:
      "The gap here is specific and worth stating clearly: LL-37 has extensive basic-science credibility but thin clinical translation.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The mechanism and in-vitro antimicrobial activity of LL-37 are well established and heavily cited. But in-vitro activity does not equal clinical efficacy — LL-37&apos;s potency is sensitive to salt and lipid conditions that differ in living tissue, and human therapeutic evidence remains limited (some wound-healing and biomarker work) rather than definitive.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Its biology is double-edged. LL-37 is protective in host defense yet mechanistically implicated in psoriasis, rosacea, and lupus, so it cannot be framed as a straightforwardly beneficial 'immune peptide.' This dual role is itself a limitation on any therapeutic use.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          LL-37 is not FDA-approved for any indication and is sold research-use-only, with no validated human dosing regimen. It should be read as a scientifically important, well-characterized molecule that has not been established as a clinical treatment.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source LL-37",
    intro:
      "LL-37 is not FDA-approved and is sold as a research-use-only material by specialty peptide vendors. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "amino-club", note: "ISO 17025 tested · batch COAs" },
            { slug: "ameano-peptides", note: "Published per-product COAs · third-party verified" },
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
    title: "LL-37 FAQ",
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
          Dürr UH, Sudheendra US, Ramamoorthy A. LL-37, the only human member of the cathelicidin family of antimicrobial peptides. Biochim Biophys Acta. 2006;1758(9):1408-1425.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16716248/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16716248/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Vandamme D, Landuyt B, Luyten W, Schoofs L. A comprehensive summary of LL-37, the factotum human cathelicidin peptide. Cell Immunol. 2012;280(1):22-35.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/23246832/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/23246832/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Heilborn JD, Nilsson MF, Kratz G, et al. The cathelicidin anti-microbial peptide LL-37 is involved in re-epithelialization of human skin wounds and is lacking in chronic ulcer epithelium. J Invest Dermatol. 2003;120(3):379-389.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12603850/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12603850/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Lande R, Gregorio J, Facchinetti V, et al. Plasmacytoid dendritic cells sense self-DNA coupled with antimicrobial peptide. Nature. 2007;449(7162):564-569.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17873860/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17873860/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Yamasaki K, Di Nardo A, Bardan A, et al. Increased serine protease activity and cathelicidin promotes skin inflammation in rosacea. Nat Med. 2007;13(8):975-980.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/17676051/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/17676051/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kahlenberg JM, Kaplan MJ. Little peptide, big effects: the role of LL-37 in inflammation and autoimmune disease. J Immunol. 2013;191(10):4895-4901.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24185823/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24185823/
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
          Plain-English summaries of the peer-reviewed studies behind the claims above — spanning LL-37&apos;s protective roles and its documented involvement in inflammatory disease. Click any title to read the source paper.
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

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function LL37Page() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"LL-37","description":"LL-37 research profile: the sole human cathelicidin antimicrobial peptide — mechanism, in-vitro antimicrobial and immunomodulatory activity, wound-healing evidence, double-edged inflammatory biology, safety, and regulatory status.","url":"https://profpeptide.com/peptides/ll-37","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"LL-37"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">LL-37</h1>
        <span className="tag">Gut Health &amp; Immunity</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: July 13, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Cathelicidin antimicrobial peptide, CAMP, hCAP18/LL-37, LL37
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Peptide Class:</span> Human cathelicidin-derived antimicrobial peptide &mdash; 37 residues cleaved from the hCAP18 precursor (CAMP gene); antimicrobial + immunomodulatory
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use-only. No validated human therapeutic dosing regimen.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is LL-37?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            LL-37 is the sole human cathelicidin antimicrobial peptide &mdash; a 37-amino-acid, positively charged, amphipathic peptide cleaved by proteases from the C-terminus of a precursor protein, hCAP18 (encoded by the CAMP gene). Produced by neutrophils and epithelial cells at barrier surfaces such as skin, gut, and airway, it is a core component of innate immune defense, with broad-spectrum antimicrobial activity and a wide range of immunomodulatory effects including roles in wound healing, inflammation, and epithelial protection.
          </p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 p-4">
            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <span className="font-semibold">Evidence honesty:</span> LL-37 has a large, genuine basic-science literature &mdash; its mechanism and in-vitro antimicrobial activity are real and well cited. But two caveats define this profile: (1) in-vitro antimicrobial activity does not equal proven clinical efficacy &mdash; human therapeutic evidence is limited and LL-37 is not an approved treatment; and (2) its biology is double-edged &mdash; LL-37 is protective in host defense yet is also implicated in inflammatory conditions including psoriasis, rosacea, and lupus. It is not uniformly &ldquo;good.&rdquo;
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Research areas:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Broad-spectrum antimicrobial activity against bacteria, fungi, and some viruses (largely in vitro)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Wound healing and re-epithelialization at skin and mucosal surfaces</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Immunomodulation — chemotaxis, LPS neutralization, Toll-like-receptor modulation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Epithelial and mucosal barrier defense (skin, gut, airway)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Double-edged role: mechanistically implicated in psoriasis, rosacea, and lupus</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Dosing:</span> There is no established, validated human therapeutic dose for LL-37. It is research-use-only, and the limited human literature does not support a standardized protocol.
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

      <PageTOC sections={tocSections} />

      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-20">
            <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
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
        {["Antimicrobial", "Cathelicidin", "Immunomodulatory", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/kpv" className="text-sm font-medium text-[#3A759F] hover:underline">KPV</Link>
        <Link href="/peptides/thymosin-alpha-1" className="text-sm font-medium text-[#3A759F] hover:underline">Thymosin Alpha-1</Link>
        <Link href="/peptides/vip" className="text-sm font-medium text-[#3A759F] hover:underline">VIP</Link>
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
    <ContactLink pageName="LL-37" pagePath="/peptides/ll-37" />
    </div>
    </>
  );
}
