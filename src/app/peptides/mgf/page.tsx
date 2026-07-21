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
  path: "/peptides/mgf",
  title: "MGF & PEG-MGF (Mechano Growth Factor) — Mechanism, Evidence Status | Prof. Peptide",
  description:
    "MGF and PEG-MGF research profile: the IGF-1Ec E-domain splice variant, the contested pro-proliferation mechanism, the failed independent replication (Fornaro 2014), evidence status, and regulatory standing.",
});

const faqs = [
  {
    q: "What is the difference between MGF and PEG-MGF?",
    a: (
      <>
        Native MGF is the E-domain peptide of the IGF-1Ec splice variant and has a very short half-life &mdash; on the order of minutes &mdash; which limits any systemic action. PEG-MGF is a synthetic research peptide with a polyethylene glycol (PEG) chain attached to slow clearance so the peptide can circulate longer. Critically, the case for PEG-MGF is entirely pharmacokinetic and theoretical: there is no peer-reviewed controlled human trial of administered PEG-MGF, and essentially no controlled human data on injected native MGF either. A longer half-life does not establish a benefit &mdash; it only extends exposure to a peptide whose activity in humans is unproven.
      </>
    ),
  },
  {
    q: "Is the MGF mechanism actually established?",
    a: (
      <>
        No. The pro-proliferation, anti-differentiation story for the MGF E-peptide rests largely on cell-culture and rodent work from a single primary research group (Goldspink and colleagues). When an independent industry laboratory (Fornaro 2014 [5]) tested synthetic MGF E-peptide, it found no effect on myoblasts or primary muscle stem cells &mdash; directly contradicting the earlier claims. The mechanism should be read as proposed and contested, not settled.
      </>
    ),
  },
  {
    q: "Is there any human data on MGF?",
    a: (
      <>
        Only indirectly. The human evidence (e.g., Hameed 2003 [4]) measures the body&apos;s own endogenous MGF gene expression after exercise &mdash; MGF mRNA rose after heavy resistance exercise in young men but not elderly men. That is a study of gene expression in response to mechanical load, not a study of an injected peptide. No controlled human trial has tested administered MGF or PEG-MGF for efficacy or safety.
      </>
    ),
  },
  {
    q: "What is a typical MGF or PEG-MGF dose?",
    a: (
      <>
        There is no established, evidence-based dose for either MGF or PEG-MGF. Figures circulated in bodybuilding communities (for example, roughly 200&ndash;400 mcg of PEG-MGF post-workout, a few times weekly) come entirely from anecdotal sources, not from peer-reviewed pharmacology. We present those numbers only to describe what the community reports &mdash; they are not a recommendation and there is no validated human dose.
      </>
    ),
  },
  {
    q: "Is MGF allowed in sport?",
    a: "No. Mechano growth factors (MGFs) are prohibited by the World Anti-Doping Agency under Section S2 (peptide hormones, growth factors, related substances and mimetics). MGF and PEG-MGF are banned in and out of competition.",
  },
  {
    q: "Is MGF safe?",
    a: "Human safety is essentially uncharacterized. There are no controlled human safety studies of injected MGF or PEG-MGF. Beyond the general injection-site and sterility risks of any research peptide, growth-factor signaling carries a theoretical concern about unregulated proliferation, and the broader IGF axis is associated with theoretical neoplasia concerns. Most reported effects are anecdotal.",
  },
  {
    q: "Where can I buy MGF?",
    a: (
      <>
        MGF and PEG-MGF are sold only as research-grade peptides. In PP&apos;s vetted directory, they are currently listed by Swiss Chems &mdash; see{" "}
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
    title: "Cloning and characterization of an IGF-1 isoform expressed in skeletal muscle subjected to stretch",
    authors: "Yang S, Alnaqeeb M, Simpson H, Goldspink G.",
    journal: "J Muscle Res Cell Motil / PubMed",
    year: "1996",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/8884603/",
    summary: "Discovery paper — an alternatively spliced IGF-1 mRNA (later termed MGF/IGF-1Ec) appears in mechanically stretched muscle but is essentially absent at rest, establishing that IGF-1 splicing is mechanosensitive.",
  },
  {
    title: "Expression of insulin growth factor-1 splice variants and structural genes in rabbit skeletal muscle induced by stretch and stimulation",
    authors: "McKoy G, Ashley W, Mander J, Yang SY, Williams N, Russell B, Goldspink G.",
    journal: "J Physiol / PubMed",
    year: "1999",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/10087355/",
    summary: "Stretch combined with electrical stimulation was the strongest stimulus for the MGF splice variant in rabbit muscle; MGF and systemic IGF-1Ea are differentially regulated by mechanical load.",
  },
  {
    title: "Different roles of the IGF-I Ec peptide (MGF) and mature IGF-I in myoblast proliferation and differentiation",
    authors: "Yang SY, Goldspink G.",
    journal: "FEBS Lett / PubMed",
    year: "2002",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/12095637/",
    summary: "In C2C12 muscle cells, the distinct MGF E-domain peptide increased myoblast proliferation while delaying terminal differentiation (opposite to mature IGF-1); IGF-1R blockade did not abolish the effect, suggesting a separate receptor. This is a foundational claim of the MGF story — later contested (see Fornaro 2014).",
  },
  {
    title: "Expression of IGF-I splice variants in young and old human skeletal muscle after high resistance exercise",
    authors: "Hameed M, Orrell RW, Cobbold M, Goldspink G, Harridge SDR.",
    journal: "J Physiol / PubMed",
    year: "2003",
    access: "Open Access",
    url: "https://pubmed.ncbi.nlm.nih.gov/12562960/",
    summary: "One of the few human datasets — after heavy resistance exercise, MGF mRNA rose in young men but not elderly men; measures ENDOGENOUS gene expression, not administered peptide.",
  },
  {
    title: "Mechano-growth factor peptide, the COOH terminus of unprocessed IGF-1, has no apparent effect on myoblasts or primary muscle stem cells",
    authors: "Fornaro M, Hinken AC, Needle S, et al.",
    journal: "Am J Physiol Endocrinol Metab / PubMed",
    year: "2014",
    access: "Abstract open",
    url: "https://pubmed.ncbi.nlm.nih.gov/24253050/",
    summary: "Important counter-evidence — a well-powered independent (Novartis) lab found synthetic MGF E-peptide had NO effect on myoblast or primary muscle stem cell proliferation/differentiation, directly contradicting the earlier claims and showing the MGF story is not robustly replicated.",
  },
];

const sections = [
  {
    id: "mechanism",
    title: "How does MGF work?",
    intro:
      "MGF is the E-domain peptide of the IGF-1Ec splice variant. When muscle is mechanically loaded or damaged, the IGF-1 gene is spliced differently to produce this variant. The PROPOSED action — distinct from mature IGF-1 — is to activate satellite/muscle stem cells and promote myoblast proliferation while delaying terminal differentiation, expanding the myonuclear pool available for repair, with mature IGF-1Ea acting later to drive differentiation and fusion. This mechanism is contested: the core positive findings come largely from one research group and were NOT reproduced by an independent lab (Fornaro 2014 [5]), which found no effect of synthetic MGF E-peptide.",
    body: [
      "Mechanosensitive splicing [1][2]. In mechanically stretched or loaded muscle, the IGF-1 gene is alternatively spliced to produce the IGF-1Ec variant (MGF), which is essentially absent at rest. Stretch combined with electrical stimulation is the strongest stimulus for this splice variant, and MGF appears to be regulated differently from the systemic IGF-1Ea isoform.",
      "Proposed E-peptide action [3]. The distinct MGF E-domain peptide has been reported to increase myoblast proliferation while delaying terminal differentiation — the opposite of what mature IGF-1 does. The proposed physiological role is to expand the pool of activated satellite/muscle stem cells before mature IGF-1Ea drives their differentiation and fusion into existing fibers.",
      "A separate receptor is proposed [3]. In the original cell work, blocking the classical IGF-1 receptor (IGF-1R) did not abolish the E-peptide effect, which led the authors to suggest MGF may act through a receptor OTHER than IGF-1R. The identity of any such receptor remains unresolved.",
      "CONTESTED — failed independent replication [5]. This mechanism rests largely on cell-culture and rodent work from a single primary group (Goldspink and colleagues). When an independent industry laboratory (Fornaro 2014, Novartis) tested synthetic MGF E-peptide, it found NO effect on myoblasts or primary muscle stem cells — directly contradicting the proliferation/anti-differentiation claims. The mechanism should therefore be treated as proposed and unresolved, not established.",
      "MGF vs PEG-MGF. Native MGF E-peptide has a very short half-life (minutes), which limits systemic action. PEG-MGF is a synthetic research peptide with PEG attached to extend half-life so it circulates longer. The rationale for PEG-MGF is entirely pharmacokinetic and theoretical — there is no controlled human trial of administered PEG-MGF, and no controlled human data on injected native MGF. Extended exposure does not establish a benefit.",
    ],
  },
  {
    id: "research",
    title: "What is MGF used for?",
    intro:
      "MGF has no approved use. Its evidence base is overwhelmingly preclinical and concerns endogenous biology rather than an administered drug: discovery of the mechanosensitive splice variant, a single group's claim that the E-peptide drives proliferation and delays differentiation, and — importantly — an independent null result that failed to reproduce that claim. The only human data measure the body's own MGF gene expression after exercise, not injected peptide. There is no controlled human efficacy trial of MGF or PEG-MGF.",
    body: [
      "Discovery of the splice variant [1]. The founding observation was that an alternatively spliced IGF-1 mRNA (later called MGF/IGF-1Ec) appears in mechanically stretched muscle but is essentially absent at rest — establishing that IGF-1 splicing is mechanosensitive.",
      "Differential regulation by load [2]. In rabbit muscle, stretch plus electrical stimulation was the strongest stimulus for the MGF variant, and MGF was regulated differently from systemic IGF-1Ea — reinforcing the idea of a load-responsive local isoform.",
      "Proposed pro-proliferation effect [3]. In C2C12 muscle cells, the MGF E-peptide reportedly increased myoblast proliferation while delaying differentiation, with an effect that persisted despite IGF-1R blockade. This is the central positive claim for MGF's supposed muscle-repair role.",
      "Contradicting null result [5]. A well-powered independent laboratory found synthetic MGF E-peptide had no apparent effect on myoblasts or primary muscle stem cells, directly contradicting the proliferation claim and showing the finding is not robustly replicated across labs.",
      "Human data are about endogenous expression only [4]. The few human datasets measure the body's own MGF mRNA after heavy resistance exercise — which rose in young but not elderly men. This describes an endogenous adaptive response to exercise, NOT the effect of an administered MGF or PEG-MGF peptide. No controlled human trial of injected MGF/PEG-MGF exists.",
    ],
  },
  {
    id: "timeline",
    title: "How long does MGF take to work?",
    intro:
      "There is no evidence-based answer. No controlled human trial has measured a time course for administered MGF or PEG-MGF, so any timeline claim would be extrapolation from cell and rodent studies (some of which failed to replicate) or from anecdote. Native MGF's half-life is only minutes; PEG-MGF is designed to circulate longer, but its human pharmacokinetics have not been verified in peer-reviewed work.",
    content:
      "There is no established, evidence-based time course for MGF or PEG-MGF in humans. No controlled human trial has characterized onset, duration, or magnitude of any effect from an administered MGF/PEG-MGF peptide. Native MGF is cleared within minutes, which is the rationale offered for pegylation, but PEG-MGF's human pharmacokinetics have not been verified in peer-reviewed studies. Community timelines exist but are anecdotal and are not supported by controlled data. Treat any specific “weeks to results” claim as unverified.",
  },
  {
    id: "dosing",
    title: "How is MGF dosed?",
    intro:
      "There is NO established, evidence-based dose for MGF or PEG-MGF. No controlled human pharmacology exists to define a dose, route, or frequency. Any specific figures below are drawn ENTIRELY from bodybuilding/anecdotal community sources — not from peer-reviewed research — and are presented only to describe what the community reports. They are not a recommendation and are not evidence.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">No validated human dose exists.</span> Neither MGF nor PEG-MGF has an evidence-based dosing protocol. Nothing in the peer-reviewed literature establishes a safe or effective human dose, route, or schedule.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Community anecdote (not evidence).</span> In bodybuilding communities, PEG-MGF is sometimes described at roughly 200&ndash;400 mcg post-workout a few times weekly, injected subcutaneously or intramuscularly. These figures come entirely from anecdotal sources, are not supported by controlled pharmacology, and are reproduced here only to describe community practice &mdash; not to endorse it.
        </p>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Aspect</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Status / community practice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Route</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Subcutaneous or intramuscular per community use &mdash; no validated route</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Best time of day</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established (post-exercise per anecdote)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Food</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Half-life</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Native MGF ~ minutes; PEG-MGF extended by pegylation but no verified human PK</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Site rotation</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Standard rotation between sites (general injection hygiene)</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium">Steady-state</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300">Not established</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          Want to run the reconstitution arithmetic for a research vial? The{" "}
          <Link href="/calculator" className="text-[#3A759F] hover:underline">dosage calculator &rarr;</Link>{" "}
          converts mg to syringe units &mdash; but note that no validated human dose exists for this peptide.
        </p>
      </div>
    ),
  },
  {
    id: "how-to-take",
    title: "How is MGF administered?",
    intro: (
      <>
        There is no evidence-based administration protocol for MGF or PEG-MGF. In community use it is handled like other research peptides &mdash; reconstituted with bacteriostatic water and injected subcutaneously or intramuscularly with a small insulin syringe &mdash; but no route, timing, or dose has been validated in humans. For the general mechanics of insulin syringes, units vs mcg, and subcutaneous technique, see the{" "}
        <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
        guide. The reconstitution table below is illustrative arithmetic only &mdash; it is NOT a recommended dose.
      </>
    ),
    node: (
      <div className="space-y-4">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">No validated protocol.</span> Nothing in the peer-reviewed literature establishes how MGF or PEG-MGF should be administered in humans. Community practice reconstitutes the lyophilized peptide with bacteriostatic water and injects subcutaneously or intramuscularly, but this reflects convention for research peptides generally, not evidence for MGF specifically.
        </p>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Reconstitution math (illustrative only).</span> The table below shows generic mg&rarr;unit conversion for a hypothetical 2 mg research vial at different bacteriostatic-water volumes. All units are measured on a U-100 insulin syringe (100 units = 1 mL). These columns are illustrative reconstitution arithmetic ONLY &mdash; they are NOT recommended doses, and no validated human dose exists for MGF or PEG-MGF.
        </p>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <table className="w-full text-base text-left border-collapse border border-[#D9DEE4] dark:border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-[#16181B]">
              <tr>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">BAC water</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">Concentration</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">100 mcg draw</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">200 mcg draw</th>
                <th className="px-4 py-3 font-semibold text-[#16181B] dark:text-slate-100">400 mcg draw</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">1 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">2 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">5 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">2 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">1 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">10 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">20 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">40 units</td>
              </tr>
              <tr className="even:bg-gray-50 dark:even:bg-[#1e293b]/50">
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 font-medium whitespace-nowrap">3 mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">0.67 mg/mL</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">15 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">30 units</td>
                <td className="px-4 py-3 text-gray-700 dark:text-slate-300 whitespace-nowrap">60 units</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed pt-2">
          <span className="font-semibold">Reminder.</span> The mcg columns above are conversion math for a 2 mg vial, chosen to illustrate how reconstitution volume changes the units drawn &mdash; not clinical guidance. Because no human dose for MGF or PEG-MGF has been validated, these figures must not be read as a dosing recommendation. For a primer on reading insulin syringes, see the{" "}
          <Link href="/guides/syringes-and-injection" className="text-[#3A759F] hover:underline">syringes and injection technique</Link>{" "}
          guide.
        </p>
      </div>
    ),
  },
  {
    id: "stacks",
    title: "What does MGF stack well with?",
    intro:
      "There is no controlled human data on any MGF or PEG-MGF stack. In community contexts MGF is discussed alongside other IGF-1 variants and GH secretagogues on the theory that it acts locally on satellite cells while those compounds raise systemic IGF-1/GH — but this rationale is theoretical and, given the failed replication of MGF's core mechanism, may rest on an effect that does not occur. Treat all stacking claims as speculative.",
    node: (
      <ol className="list-decimal list-inside space-y-1">
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">IGF-1 variants (theoretical).</span>{" "}
          <Link href="/peptides/igf-1-des" className="text-[#3A759F] hover:underline">IGF-1 DES</Link>{" "}and{" "}
          <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>{" "}
          are discussed alongside MGF in community contexts on the idea that MGF acts locally while these raise IGF-1 signaling more broadly. No controlled human stack data exists.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">GH secretagogues (theoretical).</span>{" "}
          <Link href="/peptides/ipamorelin" className="text-[#3A759F] hover:underline">Ipamorelin</Link>{" "}and{" "}
          <Link href="/peptides/mk-677" className="text-[#3A759F] hover:underline">MK-677</Link>{" "}
          raise endogenous GH and, downstream, IGF-1. They are sometimes discussed with MGF on the theory of pairing systemic GH/IGF-1 with a proposed local repair signal &mdash; again, without controlled data.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Follistatin (theoretical).</span>{" "}
          <Link href="/peptides/follistatin" className="text-[#3A759F] hover:underline">Follistatin</Link>{" "}
          is discussed in the same muscle-hypertrophy community conversations, on a myostatin-inhibition rationale distinct from MGF&apos;s. There is no human evidence for combining the two.
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Important caveat.</span> Because MGF&apos;s core pro-proliferation mechanism failed independent replication (Fornaro 2014), any stack built around that mechanism may be predicated on an effect that does not occur in practice.
        </li>
      </ol>
    ),
  },
  {
    id: "side-effects",
    title: "What are the side effects of MGF?",
    intro:
      "Human safety for MGF and PEG-MGF is essentially uncharacterized — there are no controlled human safety studies of the injected peptide. The risks below are therefore a mix of general injection risks and theoretical growth-factor concerns rather than a documented adverse-event profile. Most 'reported effects' circulating in communities are anecdotal.",
    node: (
      <div className="space-y-5">
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Common (anecdotal)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Injection-site reactions.</span> Redness, soreness, or irritation at the injection site &mdash; the most consistently reported effect, and a general risk of any injected research peptide.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Localized pump or fullness.</span> Some users report a transient localized muscle fullness after injection. This is anecdotal and not established as a real pharmacological effect.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Theoretical (mechanism-based)
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Unregulated proliferative signaling.</span> As a growth-factor-derived peptide, MGF carries a theoretical concern about driving proliferation in tissues where it is not wanted.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">IGF-axis / neoplasia concern.</span> The broader IGF-1 axis is associated with theoretical neoplasia concerns; a peptide derived from an IGF-1 splice variant inherits that theoretical risk. No human data quantify it for MGF.</li>
          </ol>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
            Serious / unknown
          </h3>
          <ol className="list-decimal list-inside space-y-1">
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">No controlled human safety data.</span> The absence of any controlled human safety study is itself the central risk &mdash; long-term and systemic effects of injected MGF/PEG-MGF are simply unknown.</li>
            <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed"><span className="font-semibold">Sterility and purity risk.</span> Research-grade material is not manufactured to pharmaceutical standards; contamination and mislabeling are real hazards independent of the peptide itself.</li>
          </ol>
        </div>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Because there are no controlled human safety studies of injected MGF or PEG-MGF, this section describes theoretical and anecdotal risks rather than a documented adverse-event profile. Human safety is uncharacterized.
        </p>
      </div>
    ),
  },
  {
    id: "interactions",
    title: "Does MGF interact with other drugs?",
    intro:
      "There is no human interaction data for MGF or PEG-MGF. No drug-drug interaction studies have been conducted. The only interactions that can be discussed are theoretical, based on shared biology with the IGF-1 axis and insulin signaling.",
    body: [
      "No human interaction studies exist. There is no controlled data on how MGF or PEG-MGF interacts with any other drug or peptide.",
      "Theoretical IGF-axis overlap. Because MGF derives from an IGF-1 splice variant, it is theoretically part of the IGF-1 signaling landscape; combining it with other IGF-1 variants or with GH secretagogues that raise IGF-1 could, in principle, compound growth-factor signaling. This is speculative, not documented.",
      "Theoretical insulin overlap. IGF-1 and insulin signaling pathways overlap; any theoretical metabolic effect of an IGF-derived peptide would warrant caution alongside insulin or other glucose-lowering agents. No human data confirm a real interaction.",
    ],
  },
  {
    id: "storage",
    title: "How should MGF be stored?",
    body: [
      "Lyophilized (powder) form: Store at -20°C for long-term storage; refrigerate at 2–8°C for short-term.",
      "Reconstituted solution: Store at 2–8°C; use within 28–30 days.",
      "Reconstitute with bacteriostatic water for injection (BAC water). Swirl gently — do not shake.",
      "Never freeze reconstituted solution.",
      "Protect from light. Store in original carton.",
      "Discard if cloudy, discolored, or contains particles.",
    ],
  },
  {
    id: "limitations",
    title: "What are the limitations of MGF research?",
    intro:
      "This is the most important section on the page. The MGF evidence base is weak and internally contradicted: the core positive findings trace to a single research group and failed independent replication, all human data concern endogenous gene expression rather than injected peptide, and PEG-MGF's case is purely pharmacokinetic. There is no human safety data, research-grade purity is unverified, and MGF is WADA-prohibited.",
    node: (
      <div className="space-y-3">
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Core findings failed independent replication.</span> The pro-proliferation, anti-differentiation story for the MGF E-peptide rests largely on cell-culture and rodent work from one primary group (Goldspink and colleagues) [3]. When an independent, well-powered industry laboratory tested synthetic MGF E-peptide, it found NO effect on myoblasts or primary muscle stem cells (Fornaro 2014 [5]) &mdash; directly contradicting the foundational claim. A result that a separate lab cannot reproduce should not be treated as established.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">All human data are about endogenous expression, not injected peptide.</span> The human studies (e.g., Hameed 2003 [4]) measure the body&apos;s own MGF mRNA after exercise. They say nothing about whether an administered MGF or PEG-MGF peptide does anything in a person.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">PEG-MGF benefits are theoretical / pharmacokinetic only.</span> Pegylation extends half-life, but a longer half-life is not a benefit &mdash; there is no controlled human trial of PEG-MGF and no verified human pharmacokinetics. The rationale is extrapolation, not evidence.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">No human safety data.</span> There are no controlled human safety studies of injected MGF or PEG-MGF. Safety in humans is uncharacterized.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Research-grade purity is unverified.</span> Material is sold for laboratory use only; identity and purity depend entirely on the vendor&apos;s testing and are not guaranteed.
        </p>
        <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold">Prohibited in sport.</span> Mechano growth factors are WADA-prohibited under Section S2 (growth factors), banned in and out of competition. There is no approved human use of MGF or PEG-MGF.
        </p>
      </div>
    ),
  },
  {
    id: "where-to-buy",
    title: "Where to source MGF",
    intro:
      "MGF and PEG-MGF are not FDA-approved and are sold only as research-grade peptides. In PP's vetted directory, they are currently listed by the vendor highlighted below, which publishes batch documentation and carries both the native and pegylated forms.",
    node: (
      <div className="space-y-4">
        <VendorHighlightBlock
          highlights={[
            { slug: "swiss-chems", note: "Lists MGF & PEG-MGF · published batch COAs · code PROF10" },
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
    title: "MGF FAQ",
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
          Yang S, Alnaqeeb M, Simpson H, Goldspink G. Cloning and characterization of an IGF-1 isoform expressed in skeletal muscle subjected to stretch. J Muscle Res Cell Motil. 1996;17(4):487-495.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/8884603/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/8884603/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          McKoy G, Ashley W, Mander J, Yang SY, Williams N, Russell B, Goldspink G. Expression of insulin growth factor-1 splice variants and structural genes in rabbit skeletal muscle induced by stretch and stimulation. J Physiol. 1999;516(Pt 2):583-592.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/10087355/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/10087355/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Yang SY, Goldspink G. Different roles of the IGF-I Ec peptide (MGF) and mature IGF-I in myoblast proliferation and differentiation. FEBS Lett. 2002;522(1-3):156-160.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12095637/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12095637/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Hameed M, Orrell RW, Cobbold M, Goldspink G, Harridge SDR. Expression of IGF-I splice variants in young and old human skeletal muscle after high resistance exercise. J Physiol. 2003;547(Pt 1):247-254.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/12562960/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/12562960/
          </a>
        </li>
        <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
          Fornaro M, Hinken AC, Needle S, et al. Mechano-growth factor peptide, the COOH terminus of unprocessed insulin-like growth factor 1, has no apparent effect on myoblasts or primary muscle stem cells. Am J Physiol Endocrinol Metab. 2014;306(2):E150-E156.{" "}
          <a href="https://pubmed.ncbi.nlm.nih.gov/24253050/" target="_blank" rel="noopener noreferrer" className="text-[#3A759F] hover:underline break-words">
            https://pubmed.ncbi.nlm.nih.gov/24253050/
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

const tocSections = sections.map((s) => ({ id: s.id, title: s.title }));

export default function MGFPage() {
  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Article","headline":"MGF (Mechano Growth Factor) & PEG-MGF","description":"MGF and PEG-MGF research profile: the IGF-1Ec E-domain splice variant, the contested pro-proliferation mechanism, the failed independent replication (Fornaro 2014), evidence status, and regulatory standing.","url":"https://profpeptide.com/peptides/mgf","publisher":{"@type":"Organization","name":"Prof. Peptide","url":"https://profpeptide.com"}}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://profpeptide.com"},{"@type":"ListItem","position":2,"name":"Peptides","item":"https://profpeptide.com/peptides"},{"@type":"ListItem","position":3,"name":"MGF"}]}} />
      <JsonLd data={faqPageJsonLd(faqs, isWhereToBuy)} />
    <div className="section max-w-3xl">
      <Link
        href="/peptides"
        className="text-sm text-[#3A759F] hover:underline mb-6 inline-block"
      >
        Back to Peptide Library
      </Link>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h1 className="text-3xl font-bold text-[#16181B] dark:text-slate-100">MGF (Mechano Growth Factor)</h1>
        <span className="tag">Growth Factor</span>
        <span className="tag">Research-Grade</span>
      </div>
      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
        Last reviewed: July 21, 2026
      </p>
      <div className="mb-8 p-4 bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-slate-700 rounded-xl">
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Also Known As:</span> Mechano Growth Factor, IGF-1Ec, MGF E-domain peptide; PEG-MGF (pegylated form)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Peptide Class:</span> IGF-1 splice-variant E-domain peptide (growth-factor-derived research peptide)
        </p>
        <p className="text-sm text-gray-600 dark:text-slate-300 leading-relaxed pt-1">
          <span className="font-semibold text-[#16181B] dark:text-slate-100">Regulatory Status:</span> Not FDA-approved; research-use only. Mechano growth factors (MGFs) are WADA-prohibited (Section S2, growth factors). No approved human use.
        </p>
      </div>

      <div id="overview" className="scroll-mt-20">
        <h2 className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">What is MGF?</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            MGF (Mechano Growth Factor) is the E-domain peptide of the IGF-1Ec splice variant &mdash; the form the IGF-1 gene produces when muscle is mechanically loaded or damaged. Its PROPOSED role, distinct from mature IGF-1, is to activate satellite/muscle stem cells and promote myoblast proliferation while delaying their differentiation, expanding the pool of nuclei available for repair. That story is contested: the core positive findings come largely from one research group and were NOT reproduced by an independent laboratory (Fornaro 2014), which found no effect of synthetic MGF E-peptide. This single profile also covers <span className="font-semibold text-[#16181B] dark:text-slate-100">PEG-MGF</span>, a synthetic version with a PEG chain attached to extend half-life &mdash; but the case for PEG-MGF is purely pharmacokinetic: there is no peer-reviewed controlled human trial of administered PEG-MGF, and essentially no controlled human data on injected native MGF either, so benefit in humans is unproven. It is discussed in muscle-research circles alongside IGF-1 variants like{" "}
            <Link href="/peptides/igf-1-lr3" className="text-[#3A759F] hover:underline">IGF-1 LR3</Link>{" "}
            and{" "}
            <Link href="/peptides/igf-1-des" className="text-[#3A759F] hover:underline">IGF-1 DES</Link>. New to peptide research?{" "}
            <Link href="/guides/peptide-research-basics" className="text-[#3A759F] hover:underline">Start with the basics &rarr;</Link>
          </p>
          <div>
            <p className="text-lg font-semibold text-[#16181B] dark:text-slate-100 mb-2">
              Proposed (and contested) properties:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Derived from the mechanosensitive IGF-1Ec splice variant expressed in loaded/damaged muscle</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Proposed to activate satellite/muscle stem cells and increase myoblast proliferation</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">Proposed to delay terminal differentiation, expanding the myonuclear pool before IGF-1Ea drives fusion</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">May act via a receptor other than the classical IGF-1R (proposed, unresolved)</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">CONTESTED: an independent lab (Fornaro 2014) found no effect of synthetic MGF E-peptide on myoblasts or muscle stem cells</li>
              <li className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">PEG-MGF extends half-life on pharmacokinetic grounds only &mdash; no controlled human efficacy or safety data</li>
            </ul>
          </div>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Common research dose:</span> No validated human dose is established for MGF or PEG-MGF. Figures circulated in bodybuilding communities (e.g., ~200&ndash;400 mcg PEG-MGF post-workout, a few times weekly) are anecdotal only and are not supported by peer-reviewed pharmacology.
          </p>
          <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
            <span className="font-semibold text-[#16181B] dark:text-slate-100">Where to buy:</span> MGF and PEG-MGF are sold only as research-grade peptides. PP maintains a vetted vendor list with verified discount codes. See{" "}
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
        {["Growth Factor", "IGF-1 Splice Variant", "PEG-MGF", "Research-Grade"].map((tag) => (
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
        <Link href="/peptides/igf-1-des" className="text-sm font-medium text-[#3A759F] hover:underline">IGF-1 DES</Link>
        <Link href="/peptides/igf-1-lr3" className="text-sm font-medium text-[#3A759F] hover:underline">IGF-1 LR3</Link>
        <Link href="/peptides/follistatin" className="text-sm font-medium text-[#3A759F] hover:underline">Follistatin</Link>
        <Link href="/peptides/ipamorelin" className="text-sm font-medium text-[#3A759F] hover:underline">Ipamorelin</Link>
        <Link href="/peptides/mk-677" className="text-sm font-medium text-[#3A759F] hover:underline">MK-677</Link>
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
    <ContactLink pageName="MGF" pagePath="/peptides/mgf" />
    </div>
    </>
  );
}
