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
  path: "/peptides/oxytocin",
  title: "Oxytocin — Bonding, Trust & Libido Research vs. the Hype | Prof. Peptide",
  description:
    "Oxytocin research profile: the 9-amino-acid neuropeptide behind labor/lactation (FDA-approved as Pitocin) and the oversold 'trust hormone' narrative — mechanism, behavioral evidence, replication caveats, and status.",
});

const faqs = [
  {
    q: "Is oxytocin really the \"love hormone\" or \"trust hormone\"?",
    a: "That framing is pop-science shorthand that has been badly oversimplified. It comes largely from a famous 2005 study reporting that intranasal oxytocin increased trust in an economic game — but a 2015 critical review found the trust effect did not replicate reliably, and later work showed oxytocin's behavioral effects are highly context-dependent, dose-dependent, and variable between individuals (sometimes increasing in-group bonding while increasing out-group wariness). Oxytocin genuinely influences social and emotional processing, but 'love hormone' overstates a messy, still-contested body of evidence.",
  },
  {
    q: "Is oxytocin FDA-approved?",
    a: "Yes — but only for obstetric use. As Pitocin and Syntocinon, oxytocin is an FDA-approved medicine for inducing or augmenting labor and controlling postpartum bleeding, used under medical supervision. Those are the approved indications. The research-grade oxytocin sold for behavioral, social-bonding, or libido purposes is NOT the approved drug and those uses are NOT approved indications — they are investigational and research-use-only.",
  },
  {
    q: "Does oxytocin work for libido or intimacy?",
    a: "The evidence is mixed and modest, not established. A 2014 study found intranasal oxytocin altered sexual experience and partner interaction in couples, but effects differed by sex and were not dramatic. Oxytocin is sometimes combined anecdotally with PT-141 for the emotional-bonding aspect of intimacy, but there is no approved oxytocin product for sexual dysfunction and the data does not support it as a reliable libido treatment.",
  },
  {
    q: "Why does reconstituted oxytocin go bad quickly?",
    a: "Oxytocin is less stable in solution than many research peptides. Once reconstituted it degrades relatively quickly with heat and time, so it should be kept refrigerated and used within a shorter window than a typical peptide. This is a real handling caveat: potency can drop noticeably if it is stored warm or kept too long after reconstitution.",
  },
  {
    q: "How is oxytocin dosed?",
    a: "It depends entirely on context. Obstetric dosing is intravenous, carefully titrated, and done in a hospital under monitoring — not a self-administered protocol. Behavioral research studies typically use intranasal oxytocin (commonly around 24 IU), but those are experimental paradigms, not validated treatments. There is no established, approved dosing regimen for social, bonding, or libido use.",
  },
  {
    q: "Where can I buy oxytocin?",
    a: (
      <>
        Research-grade oxytocin is sold by specialty research-peptide vendors as a research-use-only material (distinct from the prescription obstetric drug). PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
        <Link href="/coupons" className="text-[#0891b2] hover:underline">
          Verified Discount Codes &rarr;
        </Link>
        .
      </>
    ),
  },
];

const studies = [
  {
    title: "The oxytocin receptor system: structure, function, and regulation",
    authors: "Gimpl G, Fahrenholz F.",
    journal: "Physiological Reviews",
    year: "2001",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/11274341/",
    summary: "The definitive physiological reference on oxytocin and its receptor (OXTR, a G-protein-coupled receptor). It details oxytocin's synthesis in the hypothalamus, release from the posterior pituitary, and its classic peripheral actions — uterine contraction and milk ejection — as well as receptor distribution in the brain. This is the well-established, non-controversial biology that anchors the profile: oxytocin's core physiology is solid, whatever the debates about behavior.",
  },
  {
    title: "Intravenous oxytocin alone for cervical ripening and induction of labour",
    authors: "Alfirevic Z, Kelly AJ, Dowswell T.",
    journal: "Cochrane Database of Systematic Reviews",
    year: "2009",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/19821304/",
    summary: "A Cochrane systematic review of oxytocin for inducing labour — the evidence base behind its genuine, FDA-approved obstetric use (Pitocin/Syntocinon). It grounds the profile's key distinction: oxytocin as labor-induction medicine is real, regulated, evidence-based clinical practice, entirely separate from the unproven behavioral and libido uses of research-grade oxytocin.",
  },
  {
    title: "Oxytocin increases trust in humans",
    authors: "Kosfeld M, Heinrichs M, Zak PJ, Fischbacher U, Fehr E.",
    journal: "Nature",
    year: "2005",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/15931222/",
    summary: "The landmark study that launched the 'trust hormone' narrative — reporting that intranasal oxytocin increased participants' trust in an investment game. It was enormously influential and drove a decade of intranasal-oxytocin social-behavior research. It should be read alongside the later critical reviews: it is the origin of the popular framing, not a settled result.",
  },
  {
    title: "Does Oxytocin Increase Trust in Humans? A Critical Review of Research",
    authors: "Nave G, Camerer C, McCullough M.",
    journal: "Perspectives on Psychological Science",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/26581735/",
    summary: "The essential counterweight to the trust-hormone story. This critical review re-examined the evidence that oxytocin increases trust and concluded it is far weaker than popularly believed — citing failures to replicate, small samples, and methodological problems with intranasal administration. It is the single most important reference for the honest framing of this profile: the celebrated behavioral claims are contested and, for trust specifically, largely unsupported on close inspection.",
  },
  {
    title: "Oxytocin and vasopressin in the human brain: social neuropeptides for translational medicine",
    authors: "Meyer-Lindenberg A, Domes G, Kirsch P, Heinrichs M.",
    journal: "Nature Reviews Neuroscience",
    year: "2011",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/21852800/",
    summary: "A balanced review of oxytocin (and vasopressin) as social neuropeptides and their translational potential in conditions such as autism and anxiety. It surveys genuine effects on amygdala activity and social cognition while being candid about the gap between mechanism and proven therapy — a fair map of what is promising versus what is established in oxytocin's central-nervous-system research.",
  },
  {
    title: "Differential effects of intranasal oxytocin on sexual experiences and partner interactions in couples",
    authors: "Behnia B, Heinrichs M, Bergmann W, et al.",
    journal: "Hormones and Behavior",
    year: "2014",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/24503174/",
    summary: "A placebo-controlled study of intranasal oxytocin during couple intimacy. It found measurable but modest and sex-differentiated effects on sexual experience and partner interaction — not a dramatic aphrodisiac result. It is representative of the libido literature: real, careful research showing subtle, context-dependent effects rather than a proven treatment for sexual dysfunction.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does oxytocin work?",
    intro:
      "Oxytocin is a nine-amino-acid (nonapeptide) neuropeptide synthesized in the hypothalamus (paraventricular and supraoptic nuclei) and released from the posterior pituitary. It acts through a single receptor, the oxytocin receptor (OXTR, a G-protein-coupled receptor), which is expressed both peripherally (uterus, mammary gland) and in the brain (amygdala, hypothalamus, and other regions). Its peripheral physiology is well established; its central behavioral effects are real but far less clean.",
    body: [
      "Peripheral physiology [1]. OXTR activation drives smooth-muscle contraction — uterine contraction during labor and milk ejection (letdown) during breastfeeding. These are the classic, well-documented, non-controversial actions of oxytocin.",
      "Central neuromodulation [1][5]. Oxytocin released within the brain modulates activity in the amygdala and social-cognition circuitry, influencing emotional and social processing. This is the basis for the behavioral research — but the effects are subtle and context-sensitive rather than simple.",
      "Receptor system [1]. A single GPCR (OXTR) mediates both roles; oxytocin also has mild cross-reactivity with vasopressin receptors, which complicates interpretation of its effects.",
      "Administration matters [4]. Behavioral studies use intranasal oxytocin on the assumption it reaches the brain, but how much actually crosses into the central nervous system is itself debated — a methodological caveat that shadows much of the social-behavior literature.",
    ],
  },
  {
    id: "obstetric",
    title: "Oxytocin's approved medical use",
    intro:
      "This is the part of oxytocin that is genuine, regulated medicine — and it should not be confused with the behavioral claims. As the drugs Pitocin and Syntocinon, oxytocin is FDA-approved for obstetric use, administered intravenously under medical supervision.",
    body: [
      "Labor induction and augmentation [2]. Intravenous oxytocin is a standard, evidence-based tool to induce or strengthen labor contractions, supported by systematic reviews.",
      "Postpartum hemorrhage control. Oxytocin causes uterine contraction after delivery, reducing bleeding — a core part of its approved obstetric role.",
      "Clinically administered, not self-dosed. Obstetric oxytocin is carefully titrated in a monitored setting because over-stimulation of the uterus carries real risks. This approved use is entirely separate from research-grade oxytocin sold for behavioral purposes.",
    ],
  },
  {
    id: "behavioral",
    title: "Oxytocin and social behavior: what the evidence really shows",
    intro:
      "This is where honesty matters most. The \"love hormone / trust hormone\" reputation rests largely on early-2000s intranasal studies that have not held up as cleanly as the headlines suggested.",
    body: [
      "The origin of the hype [3]. A 2005 Nature study reported that intranasal oxytocin increased trust in an economic game. It was hugely influential and launched a decade of social-behavior research and popular 'love hormone' coverage.",
      "The replication problem [4]. A 2015 critical review re-examined the trust claim and found it far weaker than believed — failures to replicate, small samples, and methodological issues with intranasal delivery. For trust specifically, the celebrated effect is largely unsupported on close inspection.",
      "Context- and person-dependence [5]. Oxytocin's behavioral effects vary with dose, context, and individual — it can enhance in-group bonding while increasing wariness toward out-groups, and effects differ across people. It is a neuromodulator, not a simple 'bonding switch.'",
      "Genuine but unproven translational interest [5]. There is real, careful research into oxytocin for autism-related social difficulties and anxiety, but these remain investigational — promising mechanism, not established therapy.",
    ],
  },
  {
    id: "libido",
    title: "Oxytocin, intimacy, and libido",
    intro:
      "Oxytocin is often marketed for intimacy and libido, but the evidence is modest and mixed rather than conclusive — and its mechanism differs fundamentally from the dedicated sexual-health peptides.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          A placebo-controlled study found that intranasal oxytocin produced measurable but modest, sex-differentiated changes in sexual experience and partner interaction in couples &mdash; a subtle effect on the emotional and relational side of intimacy, not a dramatic aphrodisiac result. It is sometimes combined anecdotally with{" "}
          <Link href="/peptides/pt-141" className="text-[#0891b2] hover:underline">PT-141</Link>{" "}
          for the bonding dimension of intimacy (the basis of the{" "}
          <Link href="/peptides/pt-141-oxytocin" className="text-[#0891b2] hover:underline">PT-141 + Oxytocin</Link>{" "}
          combination), though that pairing is not a proven or approved protocol.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mechanistically, oxytocin sits apart from the other Sexual Health compounds. PT-141 acts centrally on the melanocortin (MC4R) pathway to drive desire directly;{" "}
          <Link href="/peptides/kisspeptin" className="text-[#0891b2] hover:underline">Kisspeptin</Link>{" "}
          acts upstream on the reproductive hormone axis. Oxytocin instead modulates the emotional and social-bonding circuitry around intimacy &mdash; a different target again, and the one with the softest efficacy evidence of the three for libido specifically.
        </p>
      </div>
    ),
  },
  {
    id: "dosing",
    title: "How is oxytocin dosed and handled?",
    intro:
      "Dosing depends entirely on the (very different) context, and oxytocin carries a real stability caveat that sets it apart from sturdier peptides.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Obstetric (approved, clinical).</span> Intravenous, carefully titrated, hospital-administered under monitoring &mdash; not a self-dosed protocol.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Behavioral research.</span> Intranasal, commonly around 24 IU in study paradigms &mdash; experimental, not a validated treatment regimen.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No approved non-obstetric regimen.</span> There is no established, validated dose for social, bonding, or libido use.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Stability caveat.</span> Reconstituted oxytocin is less stable than many research peptides &mdash; it degrades relatively quickly with heat and time. Keep it refrigerated and use it within a shorter window than a typical peptide; warm storage or prolonged holding can noticeably reduce potency. For general reconstitution mechanics see the{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#0891b2] hover:underline">syringes and injection technique</Link> guide and the{" "}
          <Link href="/calculator" className="text-[#0891b2] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of oxytocin?",
    intro:
      "Oxytocin's risk profile is best understood by context. In the approved obstetric setting the risks are well characterized; in the behavioral/research setting intranasal oxytocin has generally looked mild in short studies, but it is not an approved use and long-term data is lacking.",
    body: [
      "Obstetric setting. Excessive uterine stimulation is the main clinical risk, and high-dose intravenous administration can cause water retention and low sodium (hyponatremia) due to oxytocin's mild antidiuretic effect — which is why it is medically monitored.",
      "Intranasal research setting. Short studies report generally mild effects, but behavioral use is investigational and not approved; safety of repeated or long-term self-administration is not established.",
      "Context-dependent behavioral effects. Because oxytocin can increase wariness toward out-groups or amplify negative social emotions in some settings, 'more bonding' is not a guaranteed or uniformly positive outcome.",
      "Not a validated consumer product. Outside obstetrics, oxytocin is research-use-only, without the safety characterization that supports an approved therapy.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of oxytocin research?",
    intro:
      "The core limitation is the gap between reputation and evidence — and the need to keep the approved obstetric use separate from the unproven behavioral claims.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The &ldquo;love hormone / trust hormone&rdquo; narrative is oversold. The behavioral literature is genuinely mixed: the foundational trust finding has not replicated reliably, effects are context- and dose-dependent and vary between individuals, and intranasal delivery to the brain is itself debated. Oxytocin clearly influences social and emotional processing, but that is a long way from the tidy pop-science story.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Keep the two worlds separate. Oxytocin is FDA-approved for obstetric use (Pitocin/Syntocinon), which is real, regulated medicine. The research-grade oxytocin sold for social, bonding, or libido purposes is not that approved product, and those uses are not approved indications — they are research-use-only and investigational.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Practical caveats compound this: no validated non-obstetric dosing regimen exists, and reconstituted oxytocin is comparatively unstable, so real-world potency depends heavily on handling. Treat behavioral/libido oxytocin as an interesting but unproven research compound, not an established treatment.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source oxytocin",
    intro:
      "Research-grade oxytocin (distinct from the prescription obstetric drug) is sold as a research-use-only material by specialty peptide vendors. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
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
          <Link href="/coupons" className="text-[#0891b2] hover:underline">
            See all {activeVendorCount} verified vendors &rarr;
          </Link>
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "Oxytocin FAQ",
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
          Gimpl G, Fahrenholz F. The oxytocin receptor system: structure, function, and regulation. Physiol Rev. 2001;81(2):629-683.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11274341/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11274341/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Alfirevic Z, Kelly AJ, Dowswell T. Intravenous oxytocin alone for cervical ripening and induction of labour. Cochrane Database Syst Rev. 2009;(4):CD003246.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/19821304/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/19821304/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kosfeld M, Heinrichs M, Zak PJ, Fischbacher U, Fehr E. Oxytocin increases trust in humans. Nature. 2005;435(7042):673-676.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/15931222/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/15931222/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Nave G, Camerer C, McCullough M. Does Oxytocin Increase Trust in Humans? A Critical Review of Research. Perspect Psychol Sci. 2015;10(6):772-789.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/26581735/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/26581735/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Meyer-Lindenberg A, Domes G, Kirsch P, Heinrichs M. Oxytocin and vasopressin in the human brain: social neuropeptides for translational medicine. Nat Rev Neurosci. 2011;12(9):524-538.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/21852800/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/21852800/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Behnia B, Heinrichs M, Bergmann W, et al. Differential effects of intranasal oxytocin on sexual experiences and partner interactions in couples. Horm Behav. 2014;65(3):308-318.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24503174/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24503174/
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
          Plain-English summaries of the peer-reviewed studies behind the claims above &mdash; deliberately spanning oxytocin&apos;s solid physiology, its approved obstetric use, the origin of the &ldquo;trust hormone&rdquo; claim, and the critical review that reins it in. Click any title to read the source paper.
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

export default function OxytocinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Oxytocin","description":"Oxytocin research profile: nonapeptide neuropeptide/hormone — FDA-approved obstetric use (Pitocin/Syntocinon), the oversold 'trust hormone' behavioral narrative, libido research, mechanism, dosing, stability, safety, and regulatory status.","url":"https://profpeptide.com/peptides/oxytocin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Oxytocin"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#0891b2] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#1e2d3d] dark:text-slate-100">Oxytocin</h1>
        <span className="tag">Sexual Health</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: July 13, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Also Known As:</span> Oxytocin (OT), &ldquo;love hormone&rdquo; / &ldquo;cuddle hormone&rdquo; (pop-science), Pitocin, Syntocinon (obstetric brand names)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Peptide Class:</span> Nonapeptide (9-amino-acid) neuropeptide/hormone &mdash; posterior-pituitary hormone; oxytocin-receptor (OXTR) agonist
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Regulatory Status:</span> FDA-approved for obstetric use (labor induction, postpartum) as Pitocin/Syntocinon. Behavioral, social, and libido uses are NOT approved &mdash; research-grade oxytocin for those purposes is research-use-only.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">What is oxytocin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Oxytocin is a nine-amino-acid neuropeptide and hormone made in the hypothalamus and released from the posterior pituitary. It has two very different lives. In one, it is a well-understood hormone of labor and lactation and a genuine, FDA-approved obstetric medicine. In the other, it is the famous &ldquo;love hormone&rdquo; or &ldquo;trust hormone&rdquo; of popular science &mdash; a reputation built on behavioral studies that turned out to be far messier and less reliable than the headlines implied. A serious profile has to hold both of these at once.
          </p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 dark:border-amber-900/40 dark:bg-amber-950/20 p-4">
            <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <span className="font-semibold">Evidence honesty:</span> The &ldquo;love/trust hormone&rdquo; framing is pop-science shorthand that has been oversimplified. It traces to early-2000s intranasal-trust studies, but the headline trust effect has not replicated reliably, and oxytocin&apos;s behavioral effects are context-dependent, dose-dependent, and vary between individuals. Keep the two worlds separate: the <span className="font-semibold">obstetric use is real, approved medicine (Pitocin/Syntocinon)</span>, while the <span className="font-semibold">behavioral, bonding, and libido uses of research-grade oxytocin are investigational and not FDA-approved</span>.
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#1e2d3d] dark:text-slate-100 mb-2">
              What it&apos;s known for:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Labor induction/augmentation and postpartum bleeding control (FDA-approved obstetric medicine)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Milk letdown (lactation) &mdash; a classic, well-documented physiological role</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Social bonding, trust, and emotional processing &mdash; real but oversold and inconsistently replicated</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Intimacy and libido research &mdash; modest, mixed, sex-differentiated effects; not a proven treatment</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Investigational interest in autism-related social difficulties and anxiety (unproven)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Handling note:</span> Reconstituted oxytocin is comparatively unstable &mdash; refrigerate it and use it within a shorter window than a typical peptide, since it degrades with heat and time.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#1e2d3d] dark:text-slate-100">Where to buy:</span> PP maintains a vetted list of peptide vendors with verified discount codes. See{" "}
            <Link href="/coupons" className="text-[#0891b2] hover:underline">
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
        {["Neuropeptide", "Social Bonding", "Intimacy", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/pt-141" className="text-sm font-medium text-[#0891b2] hover:underline">PT-141</Link>
        <Link href="/peptides/kisspeptin" className="text-sm font-medium text-[#0891b2] hover:underline">Kisspeptin</Link>
        <Link href="/peptides/pt-141-oxytocin" className="text-sm font-medium text-[#0891b2] hover:underline">PT-141 + Oxytocin</Link>
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
    <ContactLink pageName="Oxytocin" pagePath="/peptides/oxytocin" />
    </div>
    </>
  );
}
