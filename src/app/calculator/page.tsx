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
  const [results, setResults] = useState<Results | null>(null);
  const [error, setError] = useState('');

  const calculate = () => {
    setError('');
    setResults(null);

    const vial = parseFloat(vialSize);
    const water = parseFloat(waterVolume);
    const d = parseFloat(dose);

    if (!vial || !water || !d || vial <= 0 || water <= 0 || d <= 0) {
      setError('Please enter valid positive numbers for all fields.');
      return;
    }

    const vialMcg = vial * 1000;
    const concentration = vialMcg / water;
    const drawVolume = d / concentration;
    const syringeUnits = drawVolume * 100;

    setResults({ concentration, drawVolume, syringeUnits });
  };

  const reset = () => {
    setVialSize('');
    setWaterVolume('');
    setDose('');
    setResults(null);
    setError('');
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

        <div className="mb-10">
          <span
            className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-4"
            style={{ backgroundColor: '#d0eeef', color: '#0D7377' }}
          >
            Dosing Tool
          </span>
          <h1
            className="text-3xl sm:text-4xl font-semibold mb-3"
            style={{ color: '#1e2d3d', letterSpacing: '-0.02em' }}
          >
            Peptide Reconstitution Calculator
          </h1>
          <p className="text-gray-500 text-base max-w-xl">
            Enter your vial size, bacteriostatic water volume, and desired dose
            to instantly calculate concentration, draw volume, and syringe units.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div
            className="bg-white border rounded-xl p-6 shadow-sm"
            style={{ borderColor: '#e5e7eb' }}
          >
            <h2
              className="text-lg font-semibold mb-6"
              style={{ color: '#1e2d3d' }}
            >
              Inputs
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#1e2d3d' }}>
                  Vial Size (mg)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  placeholder="e.g. 5"
                  value={vialSize}
                  onChange={(e) => setVialSize(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-md border text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D7377] transition"
                  style={{ borderColor: '#d1d5db', backgroundColor: '#f9fafb' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#1e2d3d' }}>
                  Bacteriostatic Water (mL)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  placeholder="e.g. 2"
                  value={waterVolume}
                  onChange={(e) => setWaterVolume(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-md border text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D7377] transition"
                  style={{ borderColor: '#d1d5db', backgroundColor: '#f9fafb' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#1e2d3d' }}>
                  Desired Dose (mcg)
                </label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  placeholder="e.g. 250"
                  value={dose}
                  onChange={(e) => setDose(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-md border text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D7377] transition"
                  style={{ borderColor: '#d1d5db', backgroundColor: '#f9fafb' }}
                />
              </div>
            </div>

            {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

            <div className="mt-6 flex gap-3">
              <button
                onClick={calculate}
                className="inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-md text-sm transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: '#0D7377' }}
              >
                Calculate
              </button>
              <button
                onClick={reset}
                className="inline-flex items-center justify-center px-6 py-3 border font-medium rounded-md text-sm transition-colors duration-200 hover:bg-[#f0fafa]"
                style={{ borderColor: '#0D7377', color: '#0D7377', backgroundColor: 'white' }}
              >
                Reset
              </button>
            </div>
          </div>

          <div
            className="bg-white border rounded-xl p-6 shadow-sm flex flex-col"
            style={{ borderColor: '#e5e7eb' }}
          >
            <h2
              className="text-lg font-semibold mb-6"
              style={{ color: '#1e2d3d' }}
            >
              Results
            </h2>

            {!results ? (
              <div className="flex-1 flex items-center justify-center min-h-[200px]">
                <p className="text-gray-400 text-sm text-center">
                  Enter your values and click <strong>Calculate</strong> to see results.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg p-4" style={{ backgroundColor: '#f0fafa', border: '1px solid #d0eeef' }}>
                  <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: '#0D7377' }}>
                    Concentration
                  </p>
                  <p className="text-2xl font-semibold" style={{ color: '#1e2d3d' }}>
                    {results.concentration.toFixed(2)}{' '}
                    <span className="text-base font-normal text-gray-500">mcg / mL</span>
                  </p>
                </div>

                <div className="rounded-lg p-4" style={{ backgroundColor: '#f0fafa', border: '1px solid #d0eeef' }}>
                  <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: '#0D7377' }}>
                    Draw Volume
                  </p>
                  <p className="text-2xl font-semibold" style={{ color: '#1e2d3d' }}>
                    {results.drawVolume.toFixed(3)}{' '}
                    <span className="text-base font-normal text-gray-500">mL</span>
                  </p>
                </div>

                <div className="rounded-lg p-4" style={{ backgroundColor: '#f0fafa', border: '1px solid #d0eeef' }}>
                  <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: '#0D7377' }}>
                    Insulin Syringe Units (U-100)
                  </p>
                  <p className="text-2xl font-semibold" style={{ color: '#1e2d3d' }}>
                    {results.syringeUnits.toFixed(1)}{' '}
                    <span className="text-base font-normal text-gray-500">units</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="mt-10 rounded-xl p-6 border"
          style={{ backgroundColor: '#f9fafb', borderColor: '#e5e7eb' }}
        >
          <h3 className="text-base font-semibold mb-4" style={{ color: '#1e2d3d' }}>
            Formulas Used
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-medium mb-1" style={{ color: '#0D7377' }}>Concentration</p>
              <code className="text-xs bg-white border border-gray-200 rounded px-2 py-1 block">
                (Vial mg × 1000) ÷ Water mL
              </code>
              <p className="mt-1 text-xs text-gray-400">Result in mcg/mL</p>
            </div>
            <div>
              <p className="font-medium mb-1" style={{ color: '#0D7377' }}>Draw Volume</p>
              <code className="text-xs bg-white border border-gray-200 rounded px-2 py-1 block">
                Dose mcg ÷ Concentration
              </code>
              <p className="mt-1 text-xs text-gray-400">Result in mL</p>
            </div>
            <div>
              <p className="font-medium mb-1" style={{ color: '#0D7377' }}>Syringe Units (U-100)</p>
              <code className="text-xs bg-white border border-gray-200 rounded px-2 py-1 block">
                Draw Volume mL × 100
              </code>
              <p className="mt-1 text-xs text-gray-400">Units on U-100 syringe</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-gray-400 text-center">
          For research purposes only. Always verify calculations independently before use.
        </p>
      </div>
    </main>
  );
}
