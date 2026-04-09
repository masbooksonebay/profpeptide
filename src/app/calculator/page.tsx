'use client';

import { useState } from 'react';

interface Results {
  concentration: number;
  drawVolume: number;
  syringeUnits: number;
}

export default function CalculatorPage() {
  const [vialSize, setVialSize] = useState('');
  const [waterVolume, setWaterVolume] = useState('');
  const [dose, setDose] = useState('');
  const [doseUnit, setDoseUnit] = useState<'mcg' | 'mg'>('mcg');
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    setResults(null);

    const vial = parseFloat(vialSize);
    const water = parseFloat(waterVolume);
    const rawDose = parseFloat(dose);

    if (!vial || !water || !rawDose || vial <= 0 || water <= 0 || rawDose <= 0) {
      setError('Please enter valid positive numbers for all fields.');
      return;
    }

    const doseInMcg = doseUnit === 'mg' ? rawDose * 1000 : rawDose;
    const vialMcg = vial * 1000;
    const concentration = vialMcg / water;
    const drawVolume = doseInMcg / concentration;
    const syringeUnits = drawVolume * 100;

    setResults({ concentration, drawVolume, syringeUnits });
  };

  const reset = () => {
    setVialSize('');
    setWaterVolume('');
    setDose('');
    setDoseUnit('mcg');
    setResults(null);
    setError('');
  };

  return (
    <main className="bg-white dark:bg-[#0f172a] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

        <div className="mb-10">
          <span className="tag mb-4 inline-block">Dosing Tool</span>
          <h1 className="text-3xl sm:text-4xl font-semibold mb-3 text-[#1e2d3d] dark:text-slate-100" style={{ letterSpacing: '-0.02em' }}>
            Peptide Reconstitution Calculator
          </h1>
          <p className="text-gray-500 dark:text-slate-400 text-base max-w-xl">
            Enter your vial size, bacteriostatic water volume, and desired dose
            to instantly calculate concentration, draw volume, and syringe units.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-6 text-[#1e2d3d] dark:text-slate-100">
              Inputs
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5 text-[#1e2d3d] dark:text-slate-200">
                  Vial Size (mg)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  placeholder="e.g. 5"
                  value={vialSize}
                  onChange={(e) => setVialSize(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-slate-600 text-sm text-gray-800 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500 bg-gray-50 dark:bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0891b2] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-[#1e2d3d] dark:text-slate-200">
                  Bacteriostatic Water (mL)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  placeholder="e.g. 2"
                  value={waterVolume}
                  onChange={(e) => setWaterVolume(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-md border border-gray-300 dark:border-slate-600 text-sm text-gray-800 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500 bg-gray-50 dark:bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0891b2] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5 text-[#1e2d3d] dark:text-slate-200">
                  Desired Dose
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="number"
                    min="0"
                    step="any"
                    placeholder={doseUnit === 'mcg' ? 'e.g. 250' : 'e.g. 0.25'}
                    value={dose}
                    onChange={(e) => setDose(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-md border border-gray-300 dark:border-slate-600 text-sm text-gray-800 dark:text-slate-200 placeholder-gray-400 dark:placeholder-slate-500 bg-gray-50 dark:bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#0891b2] transition"
                  />
                  <div className="flex rounded-md overflow-hidden border border-gray-300 dark:border-slate-600">
                    <button
                      type="button"
                      onClick={() => setDoseUnit('mcg')}
                      className={`px-3.5 py-2.5 text-sm font-medium transition-colors ${
                        doseUnit === 'mcg'
                          ? 'bg-[#0891b2] text-white'
                          : 'bg-gray-50 dark:bg-[#0f172a] text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      mcg
                    </button>
                    <button
                      type="button"
                      onClick={() => setDoseUnit('mg')}
                      className={`px-3.5 py-2.5 text-sm font-medium transition-colors ${
                        doseUnit === 'mg'
                          ? 'bg-[#0891b2] text-white'
                          : 'bg-gray-50 dark:bg-[#0f172a] text-gray-500 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      mg
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

            <div className="mt-6 flex gap-3">
              <button onClick={calculate} className="btn-primary">
                Calculate
              </button>
              <button onClick={reset} className="btn-outline">
                Reset
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-slate-700 rounded-xl p-6 shadow-sm flex flex-col">
            <h2 className="text-lg font-semibold mb-6 text-[#1e2d3d] dark:text-slate-100">
              Results
            </h2>

            {!results ? (
              <div className="flex-1 flex items-center justify-center min-h-[200px]">
                <p className="text-gray-400 dark:text-slate-500 text-sm text-center">
                  Enter your values and click <strong>Calculate</strong> to see results.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg p-4 bg-[#0891b2]/10 border border-[#0891b2]/20">
                  <p className="text-xs font-medium uppercase tracking-wide mb-1 text-[#0891b2]">
                    Concentration
                  </p>
                  <p className="text-2xl font-semibold text-[#1e2d3d] dark:text-slate-100">
                    {results.concentration.toFixed(2)}{' '}
                    <span className="text-base font-normal text-gray-500 dark:text-slate-400">mcg / mL</span>
                  </p>
                </div>

                <div className="rounded-lg p-4 bg-[#0891b2]/10 border border-[#0891b2]/20">
                  <p className="text-xs font-medium uppercase tracking-wide mb-1 text-[#0891b2]">
                    Draw Volume
                  </p>
                  <p className="text-2xl font-semibold text-[#1e2d3d] dark:text-slate-100">
                    {results.drawVolume.toFixed(3)}{' '}
                    <span className="text-base font-normal text-gray-500 dark:text-slate-400">mL</span>
                  </p>
                </div>

                <div className="rounded-lg p-4 bg-[#0891b2]/10 border border-[#0891b2]/20">
                  <p className="text-xs font-medium uppercase tracking-wide mb-1 text-[#0891b2]">
                    Insulin Syringe Units (U-100)
                  </p>
                  <p className="text-2xl font-semibold text-[#1e2d3d] dark:text-slate-100">
                    {results.syringeUnits.toFixed(1)}{' '}
                    <span className="text-base font-normal text-gray-500 dark:text-slate-400">units</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 rounded-xl p-6 border bg-gray-50 dark:bg-[#1e293b] border-gray-200 dark:border-slate-700">
          <h3 className="text-base font-semibold mb-4 text-[#1e2d3d] dark:text-slate-100">
            Formulas Used
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-slate-300">
            <div>
              <p className="font-medium mb-1 text-[#0891b2]">Concentration</p>
              <code className="text-xs bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-600 rounded px-2 py-1 block text-gray-700 dark:text-slate-300">
                (Vial mg &times; 1000) &divide; Water mL
              </code>
              <p className="mt-1 text-xs text-gray-400 dark:text-slate-500">Result in mcg/mL</p>
            </div>
            <div>
              <p className="font-medium mb-1 text-[#0891b2]">Draw Volume</p>
              <code className="text-xs bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-600 rounded px-2 py-1 block text-gray-700 dark:text-slate-300">
                Dose mcg &divide; Concentration
              </code>
              <p className="mt-1 text-xs text-gray-400 dark:text-slate-500">Result in mL</p>
            </div>
            <div>
              <p className="font-medium mb-1 text-[#0891b2]">Syringe Units (U-100)</p>
              <code className="text-xs bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-slate-600 rounded px-2 py-1 block text-gray-700 dark:text-slate-300">
                Draw Volume mL &times; 100
              </code>
              <p className="mt-1 text-xs text-gray-400 dark:text-slate-500">Units on U-100 syringe</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-400 dark:text-slate-500 text-center">
          For research purposes only. Always verify calculations independently before use.
        </p>
      </div>
    </main>
  );
}
