import Link from "next/link";

export const metadata = {
  title: "Maca Root — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "Maca root supplement profile covering non-hormonal libido enhancement, male fertility support, adaptogenic mechanism, and color variety guide.",
};

export default function MacaRootPage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">Maca Root</h1>
        <span className="tag">Sexual Health</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Lepidium meyenii, Peruvian ginseng, maca powder, gelatinized maca</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The Andean adaptogen used for centuries to boost libido and fertility</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Maca (Lepidium meyenii) is a cruciferous root vegetable native to the high-altitude plateaus of the Peruvian Andes, where it has been cultivated and consumed for over 2,000 years — both as a food staple and as a traditional remedy for enhancing fertility, libido, and energy. It is classified as an adaptogen and is unique among sexual health supplements in that it does not directly influence sex hormone levels — testosterone, estrogen, and LH remain unchanged in most clinical studies. Instead, maca appears to work through other mechanisms including neurotransmitter modulation, hypothalamic regulation, and direct effects on reproductive tissue. It is one of the few natural supplements with multiple human RCTs supporting improvements in sexual desire and function in both men and women, including postmenopausal women — a population with limited options for non-hormonal libido support. Different colored maca varieties (yellow, red, black) have subtly different bioactive profiles — black maca has the strongest evidence for male fertility and sperm parameters, while red maca has been studied for prostate health.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">❤️ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Improves sexual desire and libido in men and women","Supports sperm production and male fertility","Reduces sexual dysfunction in postmenopausal women","May reduce antidepressant-induced sexual dysfunction","Improves energy and reduces fatigue","Adaptogenic effects supporting stress resilience","Non-hormonal mechanism — suitable where hormone therapy is contraindicated"].map((b) => (<p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Non-Hormonal Libido Enhancement — Unlike most sexual health supplements, maca does not raise testosterone or estrogen. Its libido-enhancing effects appear to operate through other pathways including modulation of dopaminergic and noradrenergic neurotransmitter systems that regulate sexual motivation and arousal in the brain.","Hypothalamic Regulation — Maca's bioactive compounds — macamides and macaenes — are thought to act on the hypothalamus to regulate the balance of hormones and neurotransmitters involved in sexual function, energy, and mood without directly altering peripheral hormone levels.","Sperm and Fertility Support — Black maca specifically improves sperm count, motility, and morphology in clinical studies through mechanisms that appear to involve direct effects on spermatogenesis rather than testosterone elevation.","Adaptogenic Stress Reduction — As an adaptogen, maca modulates the HPA axis stress response — reducing cortisol's inhibitory effects on libido and reproductive function. Chronic stress is a major contributor to reduced sexual desire, and maca's adaptogenic properties may address this underlying driver."].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">A 2010 systematic review by Shin et al. identified four RCTs showing maca improved sexual desire vs. placebo. A landmark RCT by Gonzales et al. found maca (1.5g or 3g daily for 12 weeks) significantly improved self-reported sexual desire in healthy men vs. placebo — without altering testosterone levels. A 2008 RCT found maca reduced sexual dysfunction in women experiencing SSRI-induced sexual dysfunction. A 2015 RCT in postmenopausal women found maca improved sexual function and reduced psychological symptoms. Male fertility research shows black maca specifically improves sperm count and motility. Energy and fatigue research in endurance cyclists showed improved performance with maca supplementation.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {["Typical dose: 1.5–3g daily of maca powder or extract","Gelatinized maca: Better tolerated than raw maca — the gelatinization process removes starch and improves digestibility and bioavailability","Timing: Can be taken any time — often added to smoothies, coffee, or food","Color selection: Black maca for male fertility and sperm; red maca for prostate health; yellow maca for general use","Duration: Sexual desire benefits typically seen within 4–8 weeks of consistent use"].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Generally very safe — maca has been consumed as a food for thousands of years. Most common side effects are mild GI discomfort, particularly with raw maca — gelatinized form is better tolerated. May cause insomnia or increased energy if taken in the evening. Thyroid considerations — maca contains glucosinolates that may affect thyroid function at very high doses in iodine-deficient individuals. Not recommended during pregnancy or breastfeeding. People with hormone-sensitive conditions should consult a healthcare provider given maca&apos;s effects on reproductive function even without direct hormone elevation.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/tongkat-ali" className="text-[#0D7377] hover:underline">Tongkat Ali</Link> | <Link href="/supplements/fenugreek" className="text-[#0D7377] hover:underline">Fenugreek</Link> | <Link href="/supplements/l-citrulline" className="text-[#0D7377] hover:underline">L-Citrulline</Link> | <Link href="/supplements/ashwagandha" className="text-[#0D7377] hover:underline">Ashwagandha</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Shin BC, et al. Maca (L. meyenii) for improving sexual function: a systematic review. BMC Complement Altern Med. 2010.","Gonzales GF, et al. Effect of Lepidium meyenii (Maca) on sexual desire and its absent relationship with serum testosterone levels in adult healthy men. Andrologia. 2002."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Libido", "Non-Hormonal", "Fertility", "Adaptogen"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=maca+root&tag=profpeptide-20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm inline-block"
        >
          Search on Amazon &rarr;
        </a>
        <p className="text-xs text-gray-400 mt-3">As an Amazon Associate, Prof. Peptide earns from qualifying purchases.</p>
      </div>
    </div>
  );
}
