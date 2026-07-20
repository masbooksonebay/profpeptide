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
  path: "/peptides/kisspeptin",
  title: "Kisspeptin (KP-54 / KP-10) — Reproductive Axis, Fertility & Libido | Prof. Peptide",
  description:
    "Kisspeptin research profile: the KISS1 peptide that drives GnRH → LH/FSH. Real human trials (Imperial College) in fertility, IVF egg-maturation, and low libido — mechanism, dosing, safety, and status.",
});

const faqs = [
  {
    q: "Does kisspeptin actually have real clinical evidence?",
    a: "Yes — and this sets it apart from most research peptides. Kisspeptin has been tested in more than 500 human subjects, largely through Imperial College London's reproductive-endocrinology program, with published trials covering fertility restoration in hypothalamic amenorrhea, triggering egg maturation in IVF, and enhancing sexual and emotional brain responses. Its core mechanism (activating the reproductive hormone axis) is well established. The honest caveat: most of this work is Phase 1/2 — genuinely promising and well-studied, but not yet an approved therapy awaiting the larger multi-center trials that would establish it as standard treatment.",
  },
  {
    q: "How is kisspeptin different from PT-141?",
    a: "They treat sexual health from opposite ends of the pathway. Kisspeptin acts upstream on the reproductive hormone axis — activating GnRH neurons to drive LH, FSH, and downstream sex-hormone production — so its effects run through natural endocrine signaling. PT-141 acts centrally through the melanocortin (MC4R) pathway in the brain to influence desire and arousal directly, independent of reproductive hormones. Different mechanisms, different use cases: kisspeptin is studied more in fertility and hormone-axis contexts, PT-141 is FDA-approved for on-demand HSDD.",
  },
  {
    q: "Is kisspeptin FDA-approved?",
    a: "No. Kisspeptin is not FDA-approved for any indication and is sold only as a research-use-only material. Despite its relatively strong trial record, it remains investigational — the fertility and libido findings are from academic Phase 1/2 studies, not registrational trials. It should be regarded as a well-studied research compound, not a clinical treatment.",
  },
  {
    q: "How is kisspeptin dosed in research?",
    a: "Dosing comes from clinical trials, not a standardized consumer protocol. Kisspeptin-54 (KP-54) has been given by subcutaneous bolus or intravenous infusion; representative research doses include roughly 6.4 nmol/kg subcutaneously (twice-weekly, hypothalamic-amenorrhea studies), single boluses in the ~1.6–12.8 nmol/kg range to trigger oocyte maturation in IVF, and ~1 nmol/kg/hour IV infusions in the sexual-response studies. KP-54 has a longer plasma half-life (~28 minutes) than the shorter KP-10 fragment. These are trial parameters administered under medical supervision — there is no validated at-home dosing.",
  },
  {
    q: "Can kisspeptin be used as a safer IVF trigger than hCG?",
    a: "That is one of its most promising research applications. In IVF, a single dose of kisspeptin-54 has been shown to trigger egg (oocyte) maturation while carrying a lower risk of ovarian hyperstimulation syndrome (OHSS) than the standard hCG trigger — because kisspeptin induces a more physiological, self-limiting LH surge. This was demonstrated specifically in women at high risk of OHSS. It is a genuinely encouraging Phase 2-level finding, but not yet standard-of-care IVF practice.",
  },
  {
    q: "Where can I buy kisspeptin?",
    a: (
      <>
        Kisspeptin is sold by specialty research-peptide vendors as a research-use-only material. PP maintains a list of vetted vendors with verified discount codes &mdash; see{" "}
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
    title: "Kisspeptin-54 stimulates the hypothalamic-pituitary gonadal axis in human males",
    authors: "Dhillo WS, Chaudhri OB, Patterson M, et al.",
    journal: "J Clin Endocrinol Metab",
    year: "2005",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/16174713/",
    summary: "The first administration of kisspeptin to humans. Intravenous kisspeptin-54 raised circulating LH, FSH, and testosterone in healthy men, directly confirming in humans what animal work had predicted: kisspeptin is a potent upstream activator of the reproductive hormone axis. This study is the mechanistic foundation for everything that followed — it established that giving kisspeptin drives GnRH-dependent gonadotropin release in people.",
  },
  {
    title: "Efficacy of Kisspeptin-54 to Trigger Oocyte Maturation in Women at High Risk of Ovarian Hyperstimulation Syndrome (OHSS)",
    authors: "Abbara A, Jayasena CN, Christopoulos G, et al.",
    journal: "J Clin Endocrinol Metab",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/26192876/",
    summary: "A clinical study testing kisspeptin-54 as an IVF egg-maturation trigger specifically in women at high risk of OHSS — the dangerous over-response that a conventional hCG trigger can worsen. A single kisspeptin dose successfully induced oocyte maturation and led to live births, with a favorable OHSS-risk profile because it produces a shorter, more physiological LH surge. This is one of the strongest clinical arguments for kisspeptin: a plausibly safer alternative to hCG in a real fertility procedure, though still short of routine practice.",
  },
  {
    title: "Kisspeptin modulates sexual and emotional brain processing in humans",
    authors: "Comninos AN, Wall MB, Demetriou L, et al.",
    journal: "J Clin Invest",
    year: "2017",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/28112678/",
    summary: "A functional-MRI study showing that kisspeptin administration enhanced activity in brain regions governing sexual and emotional processing when subjects viewed sexual or bonding stimuli, and correlated with reduced negative mood. It demonstrated that kisspeptin's reach extends beyond reproductive hormones into the limbic circuitry of desire and attraction — the mechanistic basis for investigating it in low libido and psychosexual conditions.",
  },
  {
    title: "Effects of Kisspeptin Administration in Women With Hypoactive Sexual Desire Disorder: A Randomized Clinical Trial",
    authors: "Mills EG, Ertl N, Wall MB, Comninos AN, Dhillo WS, et al.",
    journal: "JAMA Network Open",
    year: "2022",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/36287566/",
    summary: "A randomized, placebo-controlled crossover trial of kisspeptin in pre-menopausal women with hypoactive sexual desire disorder (HSDD). Kisspeptin boosted sexual-processing brain activity and improved attraction/arousal measures versus placebo, with no adverse events reported. A parallel program studied men with HSDD. This is among the highest-quality human evidence for a research peptide in the libido space — a genuine randomized trial — while still being an early-phase, single-center result rather than a licensed treatment.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does kisspeptin work?",
    intro:
      "Kisspeptin's mechanism is one of the best-established in reproductive neuroendocrinology, and it can be stated with confidence. Kisspeptin is the product of the KISS1 gene; it binds the KISS1R receptor (formerly GPR54) on hypothalamic GnRH neurons, triggering pulsatile release of gonadotropin-releasing hormone (GnRH). That GnRH signal drives the pituitary to secrete luteinizing hormone (LH) and follicle-stimulating hormone (FSH), which in turn govern ovarian and testicular function and sex-hormone production.",
    body: [
      "KISS1R (GPR54) activation [1][6]. Kisspeptin is the endogenous ligand for KISS1R on GnRH neurons. Loss-of-function mutations in KISS1R cause failure of puberty — the discovery that first revealed kisspeptin as a gatekeeper of the reproductive axis.",
      "GnRH pulse generation [1]. By stimulating GnRH neurons, kisspeptin sets the pulsatile rhythm that the entire hypothalamic-pituitary-gonadal (HPG) axis depends on. Continuous rather than pulsatile signaling desensitizes the axis, which is why timing and route matter.",
      "Downstream LH/FSH release [2][6]. The GnRH pulses drive pituitary LH and FSH secretion; in the first human study, intravenous kisspeptin-54 raised LH, FSH, and testosterone in men, confirming the pathway in people.",
      "Limbic / sexual-processing effects [3][5]. Beyond hormones, imaging studies show kisspeptin enhances activity in brain regions handling sexual and emotional stimuli — a distinct, centrally mediated action that underlies its libido research.",
    ],
  },
  {
    id: "research",
    title: "What is kisspeptin researched for?",
    intro:
      "Unusually for a research peptide, kisspeptin has a substantial and relatively high-quality human evidence base — more than 500 subjects, largely through Imperial College London's program. The applications below are backed by published clinical studies, not just animal work. The honest framing: these are genuinely promising, well-conducted Phase 1/2 findings, not yet approved therapies.",
    body: [
      "Fertility and hypothalamic amenorrhea [6]. Twice-weekly kisspeptin-54 restored reproductive hormone release in women with hypothalamic amenorrhea (loss of periods from stress, low body weight, or over-exercise), pointing to a way to reactivate a dormant reproductive axis.",
      "IVF egg-maturation trigger [2]. A single kisspeptin-54 dose triggers oocyte maturation in IVF and has produced live births — with a lower OHSS risk than the standard hCG trigger because it induces a shorter, self-limiting LH surge. One of kisspeptin's most compelling clinical use cases.",
      "Low libido / HSDD [4][5]. Randomized, placebo-controlled trials in women (and parallel work in men) with hypoactive sexual desire disorder showed kisspeptin enhanced sexual brain processing and arousal measures versus placebo — a rare randomized signal for a peptide in this space.",
      "Reproductive endocrinology tool. Kisspeptin is also used experimentally as a probe of HPG-axis function — for example, to assess the reproductive potential of the hypothalamus in disorders of puberty and fertility.",
    ],
  },
  {
    id: "vs-pt-141",
    title: "Kisspeptin vs PT-141: upstream hormone axis vs central melanocortin",
    intro:
      "Both are studied for sexual health, but through entirely different mechanisms — a useful contrast when evaluating the category.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Kisspeptin works upstream, through the reproductive hormone axis.</span> It drives GnRH &rarr; LH/FSH &rarr; sex hormones, so its effects are mediated by natural endocrine signaling and tie sexual function to reproductive-axis health. Its strongest data is in fertility and hormone-axis contexts, with additional randomized evidence in low libido.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">
            <Link href="/peptides/pt-141" className="text-[#3A759F] hover:underline">PT-141</Link>{" "}
            works centrally, through the melanocortin pathway.
          </span> It activates MC4R in the brain to influence desire and arousal directly, independent of reproductive hormones, and is FDA-approved for on-demand HSDD in premenopausal women. It does not act on the fertility axis.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Practical takeaway.</span> They are not interchangeable: kisspeptin is the reproductive-axis and fertility-adjacent option under investigation, while PT-141 is the approved, on-demand desire agent. They target different links in the chain of sexual response.</li>
      </ol>
    ),
  },
  {
    id: "dosing",
    title: "How is kisspeptin dosed?",
    intro:
      "There is no standardized consumer protocol for kisspeptin — dosing figures come from clinical trials, administered under medical supervision. Two isoforms appear in research: kisspeptin-54 (KP-54, also called metastin), with a plasma half-life of roughly 28 minutes, and the shorter kisspeptin-10 (KP-10) fragment, which is cleared faster.",
    node: (
      <div className="space-y-3">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypothalamic amenorrhea (research).</span> Kisspeptin-54 around 6.4 nmol/kg subcutaneously, twice weekly, was used to reactivate reproductive hormone release.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">IVF trigger (research).</span> A single subcutaneous kisspeptin-54 bolus in roughly the 1.6–12.8 nmol/kg range to trigger oocyte maturation.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sexual-response studies (research).</span> Intravenous infusion around 1 nmol/kg/hour during functional-imaging and libido studies.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Isoform note.</span> KP-54 (metastin) has a longer half-life (~28 min) than KP-10; continuous (non-pulsatile) exposure can desensitize the axis, so trial protocols use bolus or timed infusion rather than steady dosing.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          These are clinical-trial parameters, not an at-home regimen — kisspeptin is research-use-only and its administration in studies is medically supervised. Need to plan reconstitution math for research use? See the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>{" "}
          and the{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link> guide.
        </p>
      </div>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of kisspeptin?",
    intro:
      "Across the Imperial College trials, kisspeptin has been generally well tolerated, with several studies reporting no adverse events at the doses used. Because it works through the body's own reproductive-hormone signaling rather than a foreign pathway, its acute tolerability has been favorable — but long-term and repeated-use safety in the general population is not established.",
    body: [
      "Generally well tolerated in trials. Multiple studies, including the randomized HSDD trial, reported no adverse events at research doses.",
      "Injection-site or infusion-related effects. As with any injected peptide, mild local reactions are possible; trial administration is supervised.",
      "Hormone-axis effects are the mechanism, not a side effect — but they mean kisspeptin can transiently shift LH, FSH, and sex hormones, which is why dosing timing and medical oversight matter.",
      "No established long-term safety data. Trials are short-duration and single-center; repeated or chronic use has not been characterized, and there is no approved long-term regimen.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of kisspeptin research?",
    intro:
      "Kisspeptin is one of the better-evidenced research peptides — but \"better than most\" is not the same as \"proven treatment.\" Calibrating that gap honestly is the point of this section.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The mechanism (KISS1R activation driving the GnRH → LH/FSH axis) is well established and not in serious dispute. The clinical applications, however, are largely Phase 1/2: promising fertility, IVF-trigger, and libido results from mostly single-center academic studies that still await larger, multi-center confirmation before they could become standard care.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Kisspeptin is not FDA-approved for any indication. Research-grade material is sold research-use-only and is not a licensed medicine; the trial dosing described here is administered under medical supervision and does not translate to a validated at-home protocol.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Much of the strongest human data comes from a single research program (Imperial College London). That work is high quality, but broad independent replication across centers is still accumulating — a normal stage for a compound at this point in development, and a reason to read the results as encouraging rather than settled.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source kisspeptin",
    intro:
      "Kisspeptin is not FDA-approved and is sold as a research-use-only material by specialty peptide vendors. The vendors highlighted below have been vetted for transparent third-party testing, traceable batch documentation, and verified discount codes.",
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
    title: "Kisspeptin FAQ",
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
          Dhillo WS, Chaudhri OB, Patterson M, et al. Kisspeptin-54 stimulates the hypothalamic-pituitary gonadal axis in human males. J Clin Endocrinol Metab. 2005;90(12):6609-6615.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/16174713/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/16174713/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Abbara A, Jayasena CN, Christopoulos G, et al. Efficacy of Kisspeptin-54 to Trigger Oocyte Maturation in Women at High Risk of Ovarian Hyperstimulation Syndrome (OHSS). J Clin Endocrinol Metab. 2015;100(9):3322-3331.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/26192876/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/26192876/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Comninos AN, Wall MB, Demetriou L, et al. Kisspeptin modulates sexual and emotional brain processing in humans. J Clin Invest. 2017;127(2):709-719.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/28112678/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/28112678/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Mills EG, Ertl N, Wall MB, et al. Effects of Kisspeptin Administration in Women With Hypoactive Sexual Desire Disorder: A Randomized Clinical Trial. JAMA Netw Open. 2022;5(10):e2237614.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/36287566/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/36287566/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Skorupskaite K, George JT, Anderson RA. The kisspeptin-GnRH pathway in human reproductive health and disease. Hum Reprod Update. 2014;20(4):485-500.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24615662/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24615662/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Jayasena CN, Nijher GM, Chaudhri OB, et al. Twice-weekly administration of kisspeptin-54 for 8 weeks stimulates release of reproductive hormones in women with hypothalamic amenorrhea. Clin Pharmacol Ther. 2010;88(6):840-847.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/20980998/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/20980998/
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
          Plain-English summaries of the peer-reviewed human studies behind the claims above. Click any title to read the source paper.
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

export default function KisspeptinPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"Kisspeptin","description":"Kisspeptin (KP-54/KP-10) research profile: KISS1R/GnRH mechanism, human trials in fertility, IVF egg-maturation triggering and low libido, dosing, safety, and regulatory status.","url":"https://profpeptide.com/peptides/kisspeptin","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"Kisspeptin"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">Kisspeptin</h1>
        <span className="tag">Sexual Health</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: July 13, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Kisspeptin-54 (KP-54, metastin), Kisspeptin-10 (KP-10), KISS1-derived peptide
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Peptide Class:</span> KISS1-gene-derived peptide &mdash; endogenous KISS1R (GPR54) agonist; upstream regulator of the hypothalamic-pituitary-gonadal (reproductive) axis
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use-only. Investigated in Phase 1/2 human trials (notably Imperial College London).
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is kisspeptin?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Kisspeptin is a peptide encoded by the KISS1 gene and the master upstream regulator of the reproductive axis. It activates the KISS1R receptor (formerly GPR54) on hypothalamic GnRH neurons, triggering the pulsatile release of gonadotropin-releasing hormone that drives luteinizing hormone (LH) and follicle-stimulating hormone (FSH) from the pituitary — and, in turn, ovarian and testicular function. It circulates mainly as two isoforms studied in research: the longer kisspeptin-54 (KP-54, metastin) and the shorter kisspeptin-10 (KP-10).
          </p>
          <div className="rounded-xl border border-sky-200 bg-sky-50 dark:border-sky-900/40 dark:bg-sky-950/20 p-4">
            <p className="text-sm text-sky-900 dark:text-sky-200 leading-relaxed">
              <span className="font-semibold">Evidence context:</span> Unlike most research peptides, kisspeptin has a genuine and relatively strong human evidence base &mdash; more than 500 subjects, largely through Imperial College London&apos;s reproductive-endocrinology program, with published trials in fertility, IVF egg-maturation triggering, and low libido. Its mechanism is well established and can be stated with confidence. The honest calibration: most of the clinical work is still Phase 1/2 &mdash; genuinely promising and well-studied, but not an FDA-approved therapy.
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Research areas:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Fertility restoration in hypothalamic amenorrhea (reactivating a dormant reproductive axis)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">IVF egg-maturation trigger with lower OHSS risk than standard hCG</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Low libido / hypoactive sexual desire disorder (randomized, placebo-controlled data)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Reproductive endocrinology — probing hypothalamic-axis function in puberty and fertility disorders</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Well-established mechanism (KISS1R → GnRH → LH/FSH); investigational clinically</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Research dosing:</span> From clinical trials, not a consumer protocol &mdash; kisspeptin-54 has been given by subcutaneous bolus or IV infusion (e.g. ~6.4 nmol/kg twice weekly in amenorrhea studies; single boluses to trigger IVF oocyte maturation) under medical supervision.
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
        {["Reproductive Axis", "Fertility Research", "Libido", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/pt-141" className="text-sm font-medium text-[#3A759F] hover:underline">PT-141</Link>
        <Link href="/peptides/pt-141-oxytocin" className="text-sm font-medium text-[#3A759F] hover:underline">PT-141 + Oxytocin</Link>
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
    <ContactLink pageName="Kisspeptin" pagePath="/peptides/kisspeptin" />
    </div>
    </>
  );
}
