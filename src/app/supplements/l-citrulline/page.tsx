import Link from "next/link";

export const metadata = {
  title: "L-Citrulline — Benefits, Research & Dosage Guide | Prof. Peptide",
  description:
    "L-Citrulline supplement profile covering nitric oxide production, erectile function support, vascular health, and comparison to L-arginine.",
};

export default function LCitrullinePage() {
  return (
    <div className="section max-w-3xl">
      <Link href="/supplements" className="text-sm text-[#0D7377] hover:underline mb-6 inline-block">&larr; Back to Supplement Library</Link>

      <div className="flex flex-wrap items-center gap-3 mb-1">
        <h1 className="text-3xl font-bold text-[#1e2d3d]">L-Citrulline</h1>
        <span className="tag">Sexual Health</span>
      </div>
      <p className="text-sm text-gray-500 mb-2">Also Known As: Citrulline, L-citrulline powder, watermelon extract</p>
      <p className="text-sm text-[#0D7377] font-medium mb-8">The natural nitric oxide booster that supports blood flow and erectile function</p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📋 Overview</h2>
          <p className="text-sm text-gray-600 leading-relaxed">L-citrulline is a non-essential amino acid found naturally in high concentrations in watermelon — from which it takes its name (Citrullus lanatus) — and is produced endogenously as part of the urea cycle. In the context of sexual health, L-citrulline&apos;s significance lies in its role as a precursor to L-arginine, which is the direct substrate for nitric oxide synthase — the enzyme that produces nitric oxide (NO). Nitric oxide is the primary signaling molecule responsible for smooth muscle relaxation in blood vessel walls, causing vasodilation and increased blood flow. In the penis, nitric oxide-mediated vasodilation of the cavernous arteries is the fundamental physiological mechanism of erection — the same pathway targeted by PDE5 inhibitors like sildenafil (Viagra) and tadalafil (Cialis), though through a different point of intervention. L-citrulline raises blood arginine and nitric oxide levels more effectively than L-arginine supplementation because it bypasses first-pass liver metabolism that degrades a large proportion of oral arginine before it reaches circulation. While its effects are more modest than prescription PDE5 inhibitors, L-citrulline offers a natural, well-tolerated option for supporting vascular sexual function.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">❤️ Key Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {["Raises nitric oxide levels more effectively than L-arginine","Supports erectile function through vasodilation","Improves blood flow to peripheral tissues","Cardiovascular protection through NO-mediated effects","Well tolerated with minimal side effects","Synergistic with PDE5 inhibitors in research","Supports overall vascular health"].map((b) => (<p key={b} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">{b}</p>))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚙️ How It Works</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Arginine and Nitric Oxide — L-citrulline is converted to L-arginine in the kidneys, bypassing the liver first-pass metabolism that limits oral arginine's effectiveness. L-arginine then serves as substrate for nitric oxide synthase (eNOS) in vascular endothelial cells, producing nitric oxide that relaxes smooth muscle in blood vessel walls — dilating vessels and increasing blood flow.","Penile Erection Mechanism — Nitric oxide produced in penile tissue activates guanylyl cyclase, increasing cGMP levels in smooth muscle cells of the corpus cavernosum. Elevated cGMP causes smooth muscle relaxation, arterial dilation, and blood engorgement — the physiological mechanism of erection. PDE5 inhibitors work by blocking the breakdown of cGMP — citrulline works upstream by supporting NO production that drives cGMP in the first place.","Endothelial Health — Chronic citrulline supplementation improves endothelial function — the health of the inner lining of blood vessels — which is a fundamental determinant of vascular sexual function and cardiovascular health broadly."].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ol>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">🔬 What the Research Shows</h2>
          <p className="text-sm text-gray-600 leading-relaxed">A 2011 single-blind RCT by Cormio et al. found L-citrulline supplementation (1.5g daily for one month) significantly improved erection hardness scores in men with mild erectile dysfunction — with 50% of men in the citrulline group vs. 8.3% in the placebo group reporting improved erectile function. A 2019 study found citrulline supplementation improved flow-mediated dilation — a marker of endothelial function and vascular health. Blood pressure research confirms significant reductions in systolic blood pressure with citrulline supplementation. Exercise research shows L-citrulline malate improves endurance and reduces muscle soreness. The cardiovascular and vascular mechanisms underlying citrulline&apos;s sexual health benefits are well established.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">💊 How to Use</h2>
          <ul className="space-y-1">
            {["Sexual health dose: 1.5–3g L-citrulline daily","Performance dose: 6–8g L-citrulline malate (2:1 form) before exercise","Timing: Daily supplementation for chronic vascular benefit — not necessarily acute before activity","Combine with: PDE5 inhibitors under medical supervision may show additive effects; pine bark extract (Pycnogenol) has been studied in combination with arginine/citrulline for erectile function","Note: L-citrulline malate (the Performance & Energy category supplement) and pure L-citrulline are the same compound — the malate form adds malic acid for exercise performance while pure L-citrulline is sufficient for vascular/sexual health applications"].map((item, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{item}</li>))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">⚠️ Side Effects &amp; Safety</h2>
          <p className="text-sm text-gray-600 leading-relaxed">Excellent safety profile — one of the best-tolerated amino acid supplements. Mild GI discomfort at high doses is the most common side effect. May produce modest blood pressure reductions — relevant for those on antihypertensive medications. No serious adverse effects documented in research. Safe for long-term daily use at typical doses.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-3">🔗 Related Supplements</h2>
          <p className="text-sm text-gray-600"><Link href="/supplements/maca-root" className="text-[#0D7377] hover:underline">Maca Root</Link> | <Link href="/supplements/tongkat-ali" className="text-[#0D7377] hover:underline">Tongkat Ali</Link> | <Link href="/supplements/fenugreek" className="text-[#0D7377] hover:underline">Fenugreek</Link> | <Link href="/supplements/l-arginine" className="text-[#0D7377] hover:underline">L-Arginine</Link></p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#1e2d3d] mb-2">📚 References</h2>
          <ol className="list-decimal list-inside space-y-1">
            {["Cormio L, et al. Oral L-citrulline supplementation improves erection hardness in men with mild erectile dysfunction. Urology. 2011.","Figueroa A, et al. Influence of L-citrulline and watermelon supplementation on vascular function and exercise performance. Curr Opin Clin Nutr Metab Care. 2017."].map((ref, i) => (<li key={i} className="text-sm text-gray-600 leading-relaxed">{ref}</li>))}
          </ol>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {["Nitric Oxide", "Erectile Function", "Vascular", "Well Tolerated"].map((tag) => (<span key={tag} className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{tag}</span>))}
      </div>
      <div className="mt-10 p-5 bg-gray-50 border border-gray-100 rounded-xl">
        <h2 className="text-sm font-semibold text-[#1e2d3d] mb-3">Where to Buy</h2>
        <a
          href="https://www.amazon.com/s?k=l-citrulline+supplement&tag=profpeptide-20"
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
