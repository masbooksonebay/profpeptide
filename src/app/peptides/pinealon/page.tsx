import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import PageTOC from "@/components/PageTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  path: "/peptides/pinealon",
  title: "Pinealon — EDR Peptide, Khavinson Bioregulator, Neuroprotection Research | Prof. Peptide",
  description:
    "Pinealon (EDR tripeptide, Glu-Asp-Arg) research profile: proposed DNA-binding mechanism, neuroprotection under oxidative and hypoxic stress, Khavinson preclinical research, and candid limitations. Research use only.",
});

const faqs = [
  {
    q: "Is Pinealon FDA-approved?",
    a: "No. Pinealon is not approved by the FDA or EMA for any indication, and it is not a dietary supplement or a drug. It is sold as a research-use-only (RUO) compound. The available evidence is preclinical — cell culture and rodent studies — and comes predominantly from Khavinson-affiliated Russian laboratories. There are no human randomized controlled trials.",
  },
  {
    q: "What is Pinealon (the EDR peptide)?",
    a: (
      <>
        Pinealon is a synthetic tripeptide with the sequence Glu-Asp-Arg (EDR). It belongs to the family of Khavinson short-peptide bioregulators and was originally derived from the brain-cortex polypeptide complex Cortexin. Research interest centers on the central nervous system &mdash; neuroprotection under oxidative and hypoxic stress, neuronal viability, and age-related cognitive decline. It is studied in the same short-peptide tradition as{" "}
        <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>.
      </>
    ),
  },
  {
    q: "How is Pinealon different from Epitalon and Cortexin?",
    a: (
      <>
        Cortexin is the brain-cortex polypeptide complex that Pinealon&apos;s tripeptide was derived from.{" "}
        <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>{" "}
        (AEDG) is a sibling Khavinson tetrapeptide associated with the pineal gland and telomerase/circadian research. Pinealon (EDR) is a tripeptide whose research focus is CNS neuroprotection. All three sit within the Khavinson short-peptide bioregulator program, but their sequences and reported targets differ.
      </>
    ),
  },
  {
    q: "What does the research actually show?",
    a: "The published work is preclinical. In oxidatively stressed neuronal cultures, EDR reduced apoptosis markers (caspase-3) and reactive oxygen species and upregulated antioxidant genes. In rodents subjected to acute hypoxic hypoxia, treatment improved spatial learning in the Morris water maze and reduced brain caspase-3. Additional cell-culture and Alzheimer's-model work reported neuroprotection and effects on neuronal proliferation. None of this is human clinical evidence, and there has been no independent Western replication.",
  },
  {
    q: "Is there a standard Pinealon dose?",
    a: "No. There is no validated research-dose consensus. Pinealon is supplied for research use only as a lyophilized powder. The original Khavinson oral preparation is approximately 10 mg per capsule; injectable research use has no standardized, validated protocol. Prof. Peptide does not publish an injectable dosing schedule because none has been established in controlled human research.",
  },
  {
    q: "Where can I buy Pinealon?",
    a: (
      <>
        Pinealon is sold by specialty research peptide vendors for laboratory use only. Quality varies &mdash; verify a Certificate of Analysis before purchase. Among the vetted vendors, Peptides.gg carries the Khavinson bioregulator line &mdash; see the{" "}
        <Link href="/coupons/peptides-gg" className="text-[#0891b2] hover:underline">
          Peptides.gg discount code (PROF15) &rarr;
        </Link>
        .
      </>
    ),
  },
];

// Published Studies cards are limited to citations with a verifiable PubMed URL.
// The open-access reviews (Khavinson 2020, Molecules; Khavinson 2021, Pharmaceuticals)
// are listed in References — no fabricated URLs are added for them.
const studies = [
  {
    title: "Penetration of Short Fluorescence-Labeled Peptides into the Nucleus in HeLa Cells and In Vitro Specific Interaction with DNA",
    authors: "Fedoreyeva LI, Kireev II, Khavinson VKh, Vanyushin BF",
    journal: "Biochemistry (Moscow) / PubMed",
    year: "2011",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/22117547/",
    summary: "The mechanistic basis for the Khavinson short-peptide model. Short peptides were shown to penetrate into the cell nucleus and to interact specifically with DNA in vitro — supporting the proposal that tripeptides such as EDR act not through cell-surface receptors but by entering the nucleus and binding DNA directly to influence gene expression.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does Pinealon work?",
    intro:
      "Pinealon's proposed mechanism is the defining feature of the Khavinson short-peptide model: rather than acting on a cell-surface receptor, the EDR tripeptide is reported to penetrate the cell and nuclear membranes and interact directly with DNA (and deoxyribooligonucleotides) to modulate gene expression. Downstream, cell-culture work describes antioxidant, anti-apoptotic, and proliferation effects in neurons. All of the mechanistic evidence below is preclinical.",
    body: [
      "Direct DNA / Gene-Expression Interaction [1]. EDR is proposed to bypass cell-surface receptors, penetrate the cell and nuclear membranes, and interact directly with DNA to modulate gene expression (Fedoreyeva et al. 2011, in HeLa cells and in vitro).",
      "Oxidative-Stress Defense in Neurons [3]. In oxidatively stressed cortical neuron cultures, EDR reduced caspase-3 activation and reactive oxygen species, helped preserve mitochondrial membrane potential, and upregulated the antioxidant genes Sod2 and Cat.",
      "Neural Cell-Cycle / Proliferation [4]. In neural progenitor cells, EDR modulated proliferation through changes in PCNA and p21 expression (Linkova et al. 2016).",
      "Cell Viability via Free-Radical Suppression [2]. Cultured-cell work reported increased cell viability through suppression of free-radical levels and activation of proliferative processes (Khavinson et al. 2011).",
    ],
  },
  {
    id: "research",
    title: "What is Pinealon researched for?",
    intro:
      "Pinealon's research base is preclinical — in vitro neuronal cultures and rodent models of hypoxia and age-related cognitive decline — and comes predominantly from Khavinson-affiliated Russian laboratories. There are no human randomized controlled trials. The findings below should be read as early-stage, largely single-group preclinical signals, not clinical evidence.",
    body: [
      "Cognitive Aging Under Hypoxia [5]. In young and aged rats subjected to acute hypoxic hypoxia, treatment improved Morris-water-maze spatial learning and reduced brain caspase-3 activity (Mendzheritskiĭ et al. 2014).",
      "Alzheimer's-Model Neuroprotection [7][8]. EDR restored neuronal spine density in Alzheimer's-model preparations (Kraskovskaya/Linkova 2017) and showed neuroprotection in an Alzheimer's-disease mouse model (Khavinson et al. 2021).",
      "Proposed Epigenetic Mechanism in Alzheimer's [6]. A 2020 review synthesized a possible mechanism by which EDR regulates gene expression and protein synthesis in the pathogenesis of Alzheimer's disease (Khavinson et al. 2020).",
      "Neuronal Viability and Proliferation [2]. Cell-culture work reported increased neuronal viability through free-radical suppression and activation of proliferative processes (Khavinson et al. 2011).",
    ],
  },
  {
    id: "dosing",
    title: "How is Pinealon dosed?",
    intro:
      "There is no validated research-dose consensus for Pinealon. It is supplied for research use only as a lyophilized powder. The original commercial Khavinson oral preparation is approximately 10 mg per capsule; injectable research use has no standardized, validated protocol.",
    content:
      "Because no controlled human dosing studies exist, any injectable figure circulated for Pinealon is extrapolated rather than validated. The only manufacturer-defined dose is the ~10 mg oral capsule from the original Khavinson preparation. Researchers handling the lyophilized powder reconstitute it with bacteriostatic or sterile water (see storage below). Prof. Peptide deliberately does not provide an injectable mg schedule — publishing one would imply a validated protocol that does not exist.",
  },
  {
    id: "side-effects",
    title: "What are the side effects of Pinealon?",
    intro:
      "Pinealon's human safety profile is not characterized. The available evidence is preclinical (cell culture and rodent), so there is no controlled human adverse-event data to summarize. This is a Research Use Only compound and is not intended for human consumption; nothing here should be read as human-use guidance. The honest summary is that human tolerability, interactions, and long-term safety are simply unknown.",
  },
  {
    id: "storage",
    title: "How should Pinealon be stored?",
    body: [
      "Lyophilized (powder) form: store cold and desiccated, protected from light. Freeze at -20°C for long-term storage; 2–8°C is acceptable short-term.",
      "Reconstitute with bacteriostatic or sterile water for injection. Add the water slowly down the inside wall of the vial and swirl gently — do not shake.",
      "Reconstituted solution: refrigerate at 2–8°C and keep protected from light.",
      "Protect from light at all times; store in original packaging.",
      "Discard if the solution is cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of Pinealon research?",
    intro:
      "This is the most important section to read carefully. The entire Pinealon evidence base is preclinical — in vitro and rodent — and comes predominantly from Khavinson-affiliated Russian laboratories. There is no independent Western replication and no human randomized controlled trials.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The studies use small samples and methodology that differs from Western RCT standards, and most originate from a single research network. None of the reported effects have been confirmed in independent Western laboratories, and none have been tested in human randomized controlled trials.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The experimental designs also limit how far the findings generalize. Much of the neuroprotection evidence relies on extreme hypoxic or ischemic challenge conditions, and the protective effects are frequently demonstrated under pretreatment (rather than post-injury) paradigms. Effect sizes and any translation to humans are unknown.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Pinealon is Research Use Only. It is not approved by the FDA or EMA for human use and is not a dietary supplement or a drug. Research-grade material is sold by specialty peptide vendors; quality varies, so verify a Certificate of Analysis before purchase.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source Pinealon",
    intro:
      "Pinealon is not approved for human use and is sold by specialty research peptide vendors for laboratory use only. Quality varies across vendors — verify a Certificate of Analysis before purchase.",
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The bioregulator line is more specialized than the mainstream peptide catalog, so not every vendor carries it. Among the vetted vendors, Peptides.gg carries the Khavinson bioregulator line. See the{" "}
          <Link href="/coupons/peptides-gg" className="text-[#0891b2] hover:underline">
            Peptides.gg discount code (PROF15) &rarr;
          </Link>{" "}
          for current options.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Pinealon FAQ",
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
          Fedoreyeva LI, Kireev II, Khavinson VKh, Vanyushin BF. Penetration of short fluorescence-labeled peptides into the nucleus in HeLa cells and in vitro specific interaction with DNA. Biochemistry (Moscow). 2011;76(11):1210-9. PMID 22117547.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/22117547/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/22117547/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Khavinson V, Ribakova Y, Kulebiakin K, et al. Pinealon increases cell viability by suppression of free radical levels and activating proliferative processes. Rejuvenation Research. 2011. (Paywalled)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Khavinson VKh, et al. EDR peptide in cortical neuron cultures under oxidative stress (caspase-3, ROS, Sod2/Cat). 2012.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Linkova NS, et al. EDR peptide effects on PCNA/p21 in neural progenitor cells. 2016.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mendzheritskiĭ AM, Karantysh GV, Ryzhak GA, Dem&apos;ianenko SV. Cytokines and caspase-3 activity in old-rat brain under acute hypoxic hypoxia with Cortexin and Pinealon. Advances in Gerontology. 2014;27:94-97. (Paywalled)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Khavinson V, Linkova N, Kozhevnikova E, Trofimova S. EDR Peptide: Possible Mechanism of Gene Expression and Protein Synthesis Regulation in the Pathogenesis of Alzheimer&apos;s Disease. Molecules. 2020. (Open Access)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Khavinson V, et al. Neuroprotective Effects of Tripeptides — Epigenetic Regulators in a Mouse Model of Alzheimer&apos;s Disease. Pharmaceuticals. 2021;14(6):515. (Open Access)
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kraskovskaya N, Kukanova E, Linkova N, et al. EDR peptide restores neuronal spine density in Alzheimer&apos;s-model preparations. Bulletin of Experimental Biology and Medicine. 2017. (Paywalled)
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
          Plain-English summaries of select peer-reviewed studies behind the claims above. Click any title to read the source paper. The open-access Alzheimer&apos;s-context papers (Khavinson 2020, Molecules; Khavinson 2021, Pharmaceuticals) are listed in the References section above.
        </p>
        {studies.map((s, i) => (
          <div key={i} className="border border-gray-100 dark:border-slate-700 rounded-xl p-5 hover:border-[#0891b2] transition-colors">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs text-gray-400 dark:text-slate-500">{s.journal} &middot; {s.year}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${s.access === "Open Access" ? "bg-green-50 text-green-700 border border-green-200" : "bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-slate-400"}`}>{s.access}</span>
            </div>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 hover:text-[#0891b2] transition-colors leading-snug block mb-1">{s.title} &rarr;</a>
            <p className="text-xs text-gray-400 dark:text-slate-500 mb-3">{s.authors}</p>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">{s.summary}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function PinealonPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Pinealon","description":"Pinealon (EDR tripeptide, Glu-Asp-Arg) research profile: proposed DNA-binding mechanism, neuroprotection under oxidative and hypoxic stress, Khavinson preclinical research, and candid limitations. Research use only.","url":"https://profpeptide.com/peptides/pinealon","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Pinealon"}]}} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Pinealon</h1>
        <span className="tag">Bioregulators</span>
        <span className="tag">Research Use Only</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: June 4, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> EDR peptide; Glu-Asp-Arg; EDR tripeptide
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Khavinson short-peptide bioregulator (synthetic tripeptide)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Molecular Profile:</span> Sequence Glu-Asp-Arg (EDR) &middot; molecular weight 418.4 Da &middot; CAS 175175-23-2
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Form &amp; Origin:</span> Lyophilized powder; originally derived from the brain-cortex polypeptide complex Cortexin
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> Research use only (RUO); not approved by the FDA/EMA for human use; not a dietary supplement or drug
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is Pinealon?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Pinealon is a synthetic tripeptide (Glu-Asp-Arg, EDR) developed within the Khavinson short-peptide bioregulator program and originally derived from the brain-cortex polypeptide complex Cortexin. Research interest centers on the central nervous system &mdash; neuroprotection under oxidative and hypoxic stress, support of neuronal viability, and age-related cognitive decline. Its proposed mechanism is unusual: rather than acting on a cell-surface receptor, EDR is reported to enter the cell and nucleus and interact directly with DNA to modulate gene expression. The evidence base is preclinical (cell culture and rodent) and comes predominantly from Khavinson-affiliated Russian laboratories; there are no human randomized controlled trials. It sits in the same short-peptide family as{" "}
            <Link href="/peptides/epitalon" className="text-[#0891b2] hover:underline">Epitalon</Link>. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#0891b2] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              Reported benefits:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Neuroprotection under oxidative and hypoxic stress (preclinical)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reduced neuronal apoptosis markers (caspase-3) and reactive oxygen species in cultured neurons</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Support of neuronal viability and proliferation in cell models</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Studied in rodent models of age-related cognitive decline (e.g., maze learning under hypoxia)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Common research dose:</span> No validated research-dose consensus exists. Pinealon is supplied for research use only as a lyophilized powder. The original commercial Khavinson oral preparation is approximately 10 mg per capsule; injectable research use has no standardized protocol. Prof. Peptide does not publish an injectable dosing schedule because none has been validated in controlled human research.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> Pinealon is sold by specialty peptide vendors for laboratory use only. Among the vetted vendors, Peptides.gg carries the Khavinson bioregulator line. See the{" "}
            <Link href="/coupons/peptides-gg" className="text-[#0891b2] hover:underline">
              Peptides.gg discount code (PROF15) &rarr;
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
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Bioregulators", "Neuroprotection", "Khavinson Peptide", "Research Use Only"].map((tag) => (
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
        {/* TODO: add sibling Khavinson bioregulator links (Cardiogen, Cortagen, Thymogen) as those profiles go live. */}
        <Link href="/peptides/epitalon" className="text-sm font-medium text-[#0891b2] hover:underline">Epitalon</Link>
        <Link href="/peptides/semax" className="text-sm font-medium text-[#0891b2] hover:underline">Semax</Link>
        <Link href="/peptides/selank" className="text-sm font-medium text-[#0891b2] hover:underline">Selank</Link>
        <Link href="/peptides/dsip" className="text-sm font-medium text-[#0891b2] hover:underline">DSIP</Link>
        </div>
        <Link href="/bioregulators" className="text-sm font-medium text-[#0891b2] hover:underline mt-3 inline-block">Read the bioregulator guide &rarr;</Link>
      </div>

      {/* TODO: add a Comparisons block (e.g. Pinealon vs Epitalon) once sibling-bioregulator comparison pages are built. */}

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
    <ContactLink pageName="Pinealon" pagePath="/peptides/pinealon" />
    </div>
    </>
  );
}
