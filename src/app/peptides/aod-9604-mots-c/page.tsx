import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageDisclaimer from "@/components/PageDisclaimer";
import ProfileTOC from "@/components/ProfileTOC";
import ContactLink from "@/components/ContactLink";
import { buildPageMetadata } from "@/lib/seo";
import { faqPageJsonLd, isWhereToBuy } from "@/lib/faq-schema";

export const metadata = buildPageMetadata({
  path: "/peptides/aod-9604-mots-c",
  title: "AOD-9604 + MOTS-c — Fat-Loss Peptide Stack (Lipolysis + AMPK) | Prof. Peptide",
  description:
    "AOD-9604 + MOTS-c is a 2-component metabolic stack pairing an hGH-fragment lipolytic peptide with a mitochondrial AMPK activator for fat-loss research. Mechanism, dosing, stacks, side effects, and what the evidence actually shows.",
});

const faqs = [
  {
    q: "What is the AOD-9604 + MOTS-c stack?",
    a: (
      <>
        It&apos;s a 2-component research-peptide pairing for fat-metabolism study: AOD-9604, an hGH C-terminal fragment that mobilizes stored fat, plus MOTS-c, a mitochondrial-derived peptide that activates AMPK to improve fat oxidation and insulin sensitivity. They target different points in fat metabolism, which is the rationale for combining them.
      </>
    ),
  },
  {
    q: "Why combine these two specifically?",
    a: "Because their mechanisms are complementary rather than overlapping. AOD-9604 releases fat from adipocytes (lipolysis, β3-AR upregulation, reduced lipogenesis); MOTS-c improves the cellular capacity to oxidize fat and use glucose (AMPK). Mobilizing fat is only useful if it's also oxidized — that's the combination logic.",
  },
  {
    q: "Does the AOD-9604 + MOTS-c stack actually work for fat loss?",
    a: "There is no human trial of the combination, and AOD-9604's own pivotal human weight-loss trial failed to beat placebo. MOTS-c's fat-loss data is preclinical (mice) plus human association studies. So the stack is mechanistically plausible but clinically unproven — treat any “fat-loss” framing with appropriate skepticism.",
  },
  {
    q: "How is it different from a GLP-1 stack?",
    a: (
      <>
        GLP-1 agonists (Semaglutide, Tirzepatide) work through appetite/incretin signaling and have strong human outcome evidence. AOD-9604 + MOTS-c works through lipolysis and AMPK — a fat-metabolism mechanism with far weaker human data. Some protocols combine the two approaches; the GLP-1 is the evidence-backed component.
      </>
    ),
  },
  {
    q: "Does it raise IGF-1 or affect blood sugar?",
    a: "AOD-9604 does not bind the GH receptor and does not raise IGF-1, and is studied as glucose-neutral. MOTS-c improves insulin sensitivity. This is part of why the pairing is positioned as a non-GH-axis fat-metabolism approach — but glucose-lowering interactions should still be considered alongside antidiabetic drugs.",
  },
  {
    q: "Is AOD-9604 + MOTS-c FDA-approved?",
    a: "No. Neither component is FDA-approved as an injectable. AOD-9604's obesity development was terminated in 2007; MOTS-c is a research compound. Both are sold by specialty vendors for research use only, and quality varies dramatically by source.",
  },
];

const studies = [
  {
    title: "The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism",
    authors: "Heffernan M, Summers RJ, Thorburn A, et al.",
    journal: "Endocrinology",
    year: "2001",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/11713213/",
    summary:
      "The foundational AOD-9604 mechanism study. Showed that both human GH and AOD-9604 reduced body weight and fat in obese mice after chronic administration, with effects correlating with restored β3-adrenergic receptor expression — and that the chronic weight effect was abolished in β3-AR knockout mice, establishing β3-AR upregulation as central to AOD-9604's fat-loss mechanism.",
  },
  {
    title: "Metabolic studies of a synthetic lipolytic domain (AOD9604) of human growth hormone",
    authors: "Ng FM, Sun J, Sharma L, et al.",
    journal: "Hormone Research",
    year: "2000",
    access: "Paywalled",
    url: "https://pubmed.ncbi.nlm.nih.gov/11146367/",
    summary:
      "Early characterization of AOD-9604's lipolytic and anti-lipogenic activity, establishing that the isolated hGH C-terminal fragment reproduces growth hormone's fat-metabolism effects without the growth-promoting or IGF-1 effects of the full hormone.",
  },
  {
    title: "The Mitochondrial-Derived Peptide MOTS-c Promotes Metabolic Homeostasis and Reduces Obesity and Insulin Resistance",
    authors: "Lee C, Zeng J, Drew BG, et al.",
    journal: "Cell Metabolism",
    year: "2015",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/25738459/",
    summary:
      "The discovery and characterization of MOTS-c. Identified a 16-amino-acid peptide encoded in the mitochondrial 12S rRNA that activates AMPK via the folate-cycle/AICAR pathway, with skeletal muscle as its primary target. MOTS-c treatment prevented diet-induced obesity and insulin resistance and reversed age-dependent muscle insulin resistance in mice — the empirical basis for the MOTS-c arm of this stack.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does AOD-9604 + MOTS-c work?",
    intro:
      "The two peptides target fat metabolism at different points: AOD-9604 works at the fat cell to release and reduce stored fat, while MOTS-c works at the level of cellular energy sensing to improve how fat and glucose are used. The rationale for combining them is that mobilizing fat (AOD-9604) is only useful if the body can oxidize it efficiently (MOTS-c) — complementary rather than redundant signaling.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">AOD-9604 — Adipocyte lipolysis and reduced fat storage.</span> AOD-9604 is a modified fragment of the C-terminal region of human growth hormone (residues 176–191) with an added N-terminal tyrosine for stability. In preclinical models it stimulates lipolysis (fat breakdown) and inhibits lipogenesis (new fat storage), in part by raising β3-adrenergic receptor expression in adipose tissue back toward lean-equivalent levels and by activating hormone-sensitive lipase. Critically, it does not bind the growth-hormone receptor, does not raise IGF-1, and does not impair glucose metabolism — distinguishing it from full-length hGH. [1][2]</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">MOTS-c — AMPK activation and fat oxidation.</span> MOTS-c is a 16-amino-acid peptide encoded within the mitochondrial 12S rRNA. Its primary target is skeletal muscle, where it inhibits the folate cycle and de novo purine biosynthesis, causing AICAR to accumulate, which in turn activates AMPK — the cell&apos;s master energy sensor. AMPK activation shifts cells toward catabolism: increased glucose uptake, increased fatty-acid oxidation, and suppressed lipogenesis. In mice, MOTS-c prevented diet-induced obesity and insulin resistance. [3]</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Complementary, non-overlapping pathways.</span> AOD-9604 acts on adipocyte signaling (β3-AR / hormone-sensitive lipase); MOTS-c acts on the AMPK energy-sensing axis. The combination theory is that AOD-9604 increases the supply of free fatty acids while MOTS-c improves the mitochondrial capacity to burn them and improves insulin sensitivity in parallel — additive rather than redundant in principle.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">A non-GH, non-GLP-1 profile.</span> Neither peptide acts through the GH receptor or the GLP-1 receptor. Because neither raises IGF-1 or, for AOD-9604, affects blood glucose, the pairing is studied as a fat-metabolism approach that sidesteps the GH/IGF-1 axis pressure of secretagogue stacks and the appetite-axis mechanism of GLP-1 drugs.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The important caveat: every point above is grounded in <em>single-compound</em> research. There is no published study of the combination, and the strongest human signal for either peptide is limited (see{" "}
          <a href="#limitations" className="text-[#3A759F] hover:underline">Limitations</a>).
        </p>
      </div>
    ),
  },
  {
    id: "research",
    title: "What is AOD-9604 + MOTS-c used for?",
    intro:
      "This stack is researched where the goal is fat-metabolism modulation without engaging the GH/IGF-1 axis or the GLP-1 appetite pathway. The applications below reflect the components' individual research literature, not validated outcomes of the combination.",
    node: (
      <div className="space-y-4">
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Fat-loss / body-composition research.</span> The headline use case: AOD-9604&apos;s lipolytic signaling combined with MOTS-c&apos;s fat-oxidation and metabolic-flexibility effects. Preclinical AOD-9604 work shows reduced body weight and fat in obese models; MOTS-c reduces visceral fat and hepatic steatosis in mice.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Insulin-sensitivity and metabolic-health research.</span> Driven primarily by the MOTS-c arm, which improves insulin sensitivity and glucose handling via AMPK and reversed age-dependent muscle insulin resistance in mice.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Visceral / stubborn-fat research.</span> Both peptides are studied in the context of abdominal and visceral adipose depots in animal models.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Exercise-metabolism and metabolic-aging research.</span> MOTS-c is an exercise-induced &ldquo;mitochondrial hormone,&rdquo; and circulating levels are lower in obesity and type 2 diabetes — making the stack relevant to exercise-mimetic and metabolic-aging study designs.</li>
        </ol>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          For appetite-driven weight research, GLP-1 compounds such as{" "}
          <Link href="/peptides/semaglutide" className="text-[#3A759F] hover:underline">Semaglutide</Link>,{" "}
          <Link href="/peptides/tirzepatide" className="text-[#3A759F] hover:underline">Tirzepatide</Link>, and{" "}
          <Link href="/peptides/retatrutide" className="text-[#3A759F] hover:underline">Retatrutide</Link>{" "}
          act through a different (incretin) mechanism and have far stronger human outcome data; some protocols pair them with this metabolic stack (see{" "}
          <a href="#stacks" className="text-[#3A759F] hover:underline">Stacks</a>).
        </p>
      </div>
    ),
  },
  {
    id: "timeline",
    title: "How long does AOD-9604 + MOTS-c take to work?",
    content:
      "In the preclinical literature, AOD-9604's acute lipolytic and fat-oxidation effects are measurable quickly (within days of dosing in animal models), while body-composition changes accumulate over weeks of chronic administration as β3-adrenergic receptor expression is upregulated. MOTS-c's AMPK-driven metabolic effects similarly develop over a multi-week course. Research protocols are typically run on 8–12 week cycles, reflecting the gradual nature of metabolic adaptation rather than any rapid effect. There is no human combination data to define an onset timeline in people.",
  },
  {
    id: "dosing",
    title: "How is AOD-9604 + MOTS-c dosed?",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Both peptides are administered by subcutaneous injection. Because there is no standardized blend, the two are usually dosed separately even when bought together. The figures below are <span className="font-semibold">commonly reported research protocols</span>, not validated clinical doses — and no controlled combination protocol exists.
        </p>
        <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 pt-2">
          Commonly reported research protocol:
        </p>
        <ol className="list-decimal list-inside space-y-1">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">AOD-9604.</span> ~300 mcg subcutaneously per day, often dosed in the morning or fasted. Supplied as a lyophilized vial (commonly 2–5 mg total), reconstituted with bacteriostatic water.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">MOTS-c.</span> ~5–10 mg per week, frequently split across 2–3 subcutaneous doses. Supplied as a lyophilized vial (commonly 10 mg total).</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Cycle length.</span> 8–12 weeks active, with a break before re-cycling.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Reconstitution.</span> Bacteriostatic water; use the{" "}
            <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator</Link>{" "}
            to convert mg/mcg to syringe units and plan reconstitution.</li>
        </ol>
        <div className="pt-4">
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Pre-blended formulations (research-grade vials)
          </h3>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            Some vendors sell a combined &ldquo;fat-loss&rdquo; or &ldquo;metabolic&rdquo; blend vial that includes AOD-9604 and MOTS-c (sometimes alongside a third compound). Because there is no agreed ratio, the per-component milligrams vary by vendor — always confirm the per-component breakdown on the Certificate of Analysis before use, and treat the combined milligrams as the vial size when calculating reconstitution. Researchers wanting independent control over each compound&apos;s dose should buy the two components separately.
          </p>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Need to calculate a dose? Convert mg/mcg to syringe units and plan reconstitution with the{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is AOD-9604 + MOTS-c administered?",
    intro:
      "Both peptides are given by subcutaneous injection using a small insulin syringe.",
    body: [
      "Reconstitute each vial with bacteriostatic water (volume depends on vial size — use the calculator).",
      "Subcutaneous injection; AOD-9604 is commonly dosed in the morning/fasted, MOTS-c on its weekly schedule.",
      "Rotate injection sites (abdomen, thigh, upper arm) to spread injection-site reactions.",
      "Refrigerate reconstituted peptide; use within ~30 days.",
      "Swirl gently to mix — do not shake.",
      "Discard if cloudy, discolored, or particulate.",
    ],
  },
  {
    id: "stacks",
    title: "What does AOD-9604 + MOTS-c stack well with?",
    intro:
      "This pairing is itself a stack, so the most useful additions are non-peptide or address a different mechanism rather than doubling the same pathway.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GLP-1 receptor agonists</span> (Semaglutide, Tirzepatide, Retatrutide). Adds appetite-axis suppression — a different mechanism from this stack&apos;s lipolysis + oxidation. This is the combination several vendors market as a &ldquo;complete&rdquo; fat-loss protocol. Note: the GLP-1 arm carries the strong human evidence; the peptide arm is the speculative add-on.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Resistance training + adequate protein.</span> The most evidence-based &ldquo;stack&rdquo; for body composition — preserves lean mass while fat is mobilized.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">
            <Link href="/peptides/5-amino-1mq" className="text-[#3A759F] hover:underline">5-Amino-1MQ</Link>.
          </span>{" "}
          A separate metabolic mechanism (NNMT inhibition) sometimes layered into fat-loss research protocols.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Avoid: doubling GH-axis fat mechanisms.</span> Stacking with GH secretagogues adds IGF-1-axis pressure and overlapping &ldquo;fat-loss via GH&rdquo; theory without clear additive benefit — the opposite of the non-overlapping logic this pairing is built on.</li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of AOD-9604 + MOTS-c?",
    intro:
      "There is no controlled trial of the combination; the profile below is extrapolated from each component's individual literature and user reports. Notably, AOD-9604's human trials (≈900 participants across ~6 studies) reported a strong safety and tolerability record even though efficacy was not established.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (most users)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild injection-site reactions.</span> Redness, irritation, or transient pinkness — the most commonly reported effect.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient fatigue or lightheadedness.</span> Usually mild and self-limited.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Less common (moderate)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Headache.</span> Typically mild, more common early in a cycle.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Mild GI changes.</span> Occasional nausea or appetite shifts.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Transient changes in energy.</span> Reflecting AMPK-driven metabolic shifts (MOTS-c arm).</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious (rare)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Hypersensitivity / injection-site infection.</span> As with any injectable; discontinue and seek care for systemic allergic signs.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Anti-doping considerations.</span> Tested athletes should verify the current WADA status of each compound before use; growth-hormone-related and metabolic-modulating agents are an area of active anti-doping scrutiny.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold">Component-level concerns apply.</span> Each peptide carries its own (largely preclinical) safety considerations — see the individual AOD-9604 and MOTS-c pages.
            </li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Neither component is FDA-approved as an injectable; compounded preparations vary widely in quality, and third-party HPLC testing is essential.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does AOD-9604 + MOTS-c interact with other drugs?",
    intro: "No combination interaction data exists; each component's individual profile applies.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Antidiabetic agents (insulin, metformin, GLP-1s, sulfonylureas).</span> MOTS-c improves insulin sensitivity via AMPK and AOD-9604 is studied as glucose-neutral; theoretical additive effects on glucose handling warrant attention in any glucose-lowering context.</li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Component-level profiles.</span> Cross-reference the AOD-9604 and MOTS-c pages for full per-component interaction notes.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Systemic drug interactions.</span> None well-documented at standard research doses for either compound.</li>
      </ol>
    ),
  },
  {
    id: "storage",
    title: "How should AOD-9604 + MOTS-c be stored?",
    body: [
      "Lyophilized peptide: -20°C long-term; 2–8°C short-term.",
      "Reconstituted: 2–8°C, use within ~30 days.",
      "Reconstitute with bacteriostatic water.",
      "Protect from light; do not freeze the reconstituted solution.",
      "Discard if cloudy, discolored, or particulate.",
      "Store in the original or an amber vial.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of AOD-9604 + MOTS-c research?",
    intro:
      "This stack carries a heavier evidence caveat than most, and it's worth stating plainly:",
    node: (
      <div className="space-y-3">
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No combination studies exist.</span> Every claim rests on each peptide&apos;s separate literature plus mechanistic reasoning about complementarity.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">AOD-9604&apos;s pivotal human trial failed.</span> Despite strong preclinical fat-loss signals and an excellent safety record across roughly six clinical trials (~900 participants), the pivotal Phase IIb study did not show clinically meaningful weight loss versus placebo, and commercial development was terminated in 2007. AOD-9604 is not FDA-approved for obesity. (Australia&apos;s TGA has separately approved an AOD-9604 preparation for a non-obesity, intra-articular indication.)</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">MOTS-c human efficacy data is observational, not interventional.</span> The strong findings (prevented diet-induced obesity, improved insulin resistance) are from mouse studies. In humans, lower circulating MOTS-c is <em>associated</em> with obesity and type 2 diabetes, but there are no controlled human trials showing that administering MOTS-c produces fat loss.</li>
          <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Regulatory and quality status.</span> Neither peptide is FDA-approved as an injectable; both are sold as &ldquo;research peptides,&rdquo; and compounded quality varies dramatically. Third-party HPLC testing is strongly recommended to verify identity and purity.</li>
        </ul>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          The honest summary: mechanistically coherent, well-tolerated in the case of AOD-9604, but clinically unproven as a combination — and the lipolytic arm has a notable human-efficacy failure on record.
        </p>
      </div>
    ),
  },
  {
    id: "faq",
    title: "AOD-9604 + MOTS-c FAQ",
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
          Ng FM, Sun J, Sharma L, et al. Metabolic studies of a synthetic lipolytic domain (AOD9604) of human growth hormone. Horm Res. 2000;53(6):274-278.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11146367/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11146367/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Heffernan M, Summers RJ, Thorburn A, et al. The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta3-AR knock-out mice. Endocrinology. 2001;142(12):5182-5189.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/11713213/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/11713213/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Lee C, Zeng J, Drew BG, et al. The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance. Cell Metab. 2015;21(3):443-454.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/25738459/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/25738459/
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
  { id: "overview", title: "What is AOD-9604 + MOTS-c?" },
  ...sections.map((s) => ({ id: s.id, title: s.title })),
];

export default function AOD9604MOTScPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"AOD-9604 + MOTS-c","description":"AOD-9604 + MOTS-c is a 2-component metabolic stack pairing an hGH-fragment lipolytic peptide with a mitochondrial AMPK activator for fat-loss research. Mechanism, dosing, stacks, side effects, and what the evidence actually shows.","url":"https://profpeptide.com/peptides/aod-9604-mots-c","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"AOD-9604 + MOTS-c"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#16181B] dark:text-slate-100 tracking-tight">AOD-9604 + MOTS-c</h1>
        <span className="tag">Metabolic &amp; Weight Loss</span>
        <span className="tag">Stack</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-500 mb-8">
        Last reviewed: June 14, 2026
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
              <dd className="text-base text-[#16181B] dark:text-slate-100">A two-component metabolic stack pairing AOD-9604 (a growth-hormone fragment studied for fat mobilization) and MOTS-c (a mitochondrial-derived peptide that activates AMPK), studied for fat loss and metabolic health.</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">How it&apos;s taken</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Subcutaneous injection &mdash; AOD-9604 daily, MOTS-c 2&ndash;3&times; weekly</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Half-life</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not well characterized for either component</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Typical research dose</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">AOD-9604 ~300 mcg daily; MOTS-c ~5&ndash;10 mg weekly; 8&ndash;12 week cycles</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-0.5">Research status</dt>
              <dd className="text-sm text-[#16181B] dark:text-slate-200">Not FDA-approved &mdash; research use only.</dd>
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
        <h2 className="section-heading mb-3">What is AOD-9604 + MOTS-c?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <Link href="/peptides/aod-9604" className="text-[#3A759F] hover:underline">AOD-9604</Link> + <Link href="/peptides/mots-c" className="text-[#3A759F] hover:underline">MOTS-c</Link> is a research-grade 2-component metabolic stack that pairs AOD-9604 — a modified C-terminal fragment of human growth hormone — with MOTS-c, a mitochondrial-derived peptide. The pairing is built around two non-overlapping mechanisms: AOD-9604 acts at the adipocyte to mobilize stored fat (lipolysis and reduced fat storage), while MOTS-c acts upstream on cellular energy metabolism, activating AMPK to improve the body&apos;s capacity to oxidize that mobilized fat and to use glucose more efficiently. In short, one peptide is studied for releasing fat from storage; the other for improving the metabolic machinery that burns it.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            This is a community-derived combination rather than a clinically validated drug product. It appears in the research literature only as two separate, individually studied compounds — there are no controlled human trials of the combination, and (as detailed below) AOD-9604&apos;s own pivotal human weight-loss trial did not meet its endpoint. The stack&apos;s rationale is mechanistic and complementary, not outcome-proven.
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Reported research interest:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Fat mobilization (lipolysis) paired with improved fat oxidation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Targeting of stubborn/visceral adipose depots in preclinical models</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Metabolic flexibility and insulin-sensitivity research (MOTS-c arm)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">A non-GLP-1, non-GH-receptor approach to fat-metabolism research</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">&ldquo;Exercise-mimetic&rdquo; metabolic signaling (MOTS-c arm)</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> Commonly reported protocols run the two compounds separately rather than as a fixed blend — AOD-9604 ~300 mcg/day subcutaneously and MOTS-c ~5–10 mg/week — on an 8–12 week cycle. No standardized or clinically validated blend ratio exists. See{" "}
            <a href="#dosing" className="text-[#3A759F] hover:underline">
              Dosing &amp; Protocols
            </a>{" "}
            below.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> Sold by specialty research-peptide vendors as two separate compounds, and occasionally as a pre-combined &ldquo;fat-loss&rdquo; or &ldquo;metabolic&rdquo; blend. None of the components are FDA-approved as injectables. See{" "}
            <Link href="/best-peptide-vendors" className="text-[#3A759F] hover:underline">
              Verified Peptide Vendors &rarr;
            </Link>{" "}
            for current options.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Related supplements:</span>{" "}
            <a href="https://www.amazon.com/s?k=metabolism+support+supplements&tag=profpeptide-20" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline">
              Find related metabolism-support supplements on Amazon.
            </a>
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
        {["Metabolic & Weight Loss", "Stack", "Fat Loss", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/aod-9604" className="text-sm font-medium text-[#3A759F] hover:underline">AOD-9604</Link>
        <Link href="/peptides/mots-c" className="text-sm font-medium text-[#3A759F] hover:underline">MOTS-c</Link>
        <Link href="/peptides/5-amino-1mq" className="text-sm font-medium text-[#3A759F] hover:underline">5-Amino-1MQ</Link>
        </div>
      </div>

      <div className="mt-6 p-5 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <h2 className="text-sm font-semibold text-[#16181B] dark:text-slate-100 mb-2">Related Blends</h2>
        <div className="flex flex-wrap gap-4">
        <Link href="/peptides/nad-mots-c-5-amino-1mq" className="text-sm font-medium text-[#3A759F] hover:underline">Metabolic Blend (NAD+ / MOTS-c / 5-Amino-1MQ)</Link>
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
    <ContactLink pageName="AOD-9604 + MOTS-c" pagePath="/peptides/aod-9604-mots-c" />
        </main>

        <aside className="hidden lg:block lg:mt-0 lg:sticky lg:top-24 lg:self-start">
          <ProfileTOC sections={tocSections} variant="rail" />
        </aside>
      </div>
    </div>
    </>
  );
}
