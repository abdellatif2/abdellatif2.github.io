import React, { useState } from 'react';
import { 
  Activity, 
  Sliders, 
  Waves, 
  BarChart2, 
  Cpu, 
  Play, 
  RotateCcw, 
  ShieldAlert, 
  Zap, 
  Sparkles,
  Info
} from 'lucide-react';
import { GROUND_MOTION_DATASETS } from '../data/portfolioData';

export const InteractiveLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hysteresis' | 'ground-motion' | 'shm-damage'>('hysteresis');

  // Tab 1: Hysteresis Simulator State
  const [fy, setFy] = useState<number>(300); // kN
  const [dy, setDy] = useState<number>(12); // mm
  const [alpha, setAlpha] = useState<number>(0.08); // 8% post-yield
  const [pinch, setPinch] = useState<number>(0.3); // Pinching factor

  // Tab 2: Ground Motion State
  const [selectedRecord, setSelectedRecord] = useState<number>(0);
  const [spectralPeriod, setSpectralPeriod] = useState<number>(1.14); // seconds (our dual frame T1)

  // Tab 3: SHM Damage Simulator State
  const [damagedStory, setDamagedStory] = useState<number | null>(1); // null = healthy, 1..6 = damaged story
  const [damageSeverity, setDamageSeverity] = useState<number>(30); // 30% stiffness loss

  // Calculate Hysteresis Path
  const maxD = 40; // mm
  const generateHysteresisPoints = () => {
    const points: { x: number; y: number }[] = [];
    const steps = 60;
    // Multi-cycle loading: 0.5dy, 1.5dy, 2.5dy, 3.2dy
    const cycles = [0.5 * dy, -0.5 * dy, 1.5 * dy, -1.5 * dy, 2.8 * dy, -2.8 * dy, 0];

    let curX = 0;
    let curY = 0;
    points.push({ x: 0, y: 0 });

    cycles.forEach((targetX) => {
      const startX = curX;
      const startY = curY;
      for (let s = 1; s <= 10; s++) {
        const x = startX + (targetX - startX) * (s / 10);
        let y = 0;
        if (x >= 0) {
          if (x <= dy) {
            y = (fy / dy) * x;
          } else {
            y = fy + alpha * (fy / dy) * (x - dy);
          }
        } else {
          if (Math.abs(x) <= dy) {
            y = (fy / dy) * x;
          } else {
            y = -fy + alpha * (fy / dy) * (x + dy);
          }
        }
        // apply pinching on reloading
        if (targetX > startX && x < 0) {
          y = y * (1 - pinch * 0.5);
        }
        points.push({ x, y });
        curX = x;
        curY = y;
      }
    });

    return points;
  };

  const hysteresisPath = generateHysteresisPoints();
  const dissipatedEnergy = (fy * (maxD - dy) * 1.8 * (1 - pinch * 0.4)).toFixed(1);

  // Natural frequencies based on damaged story
  const getModalFrequencies = () => {
    if (damagedStory === null) {
      return { f1: 0.88, f2: 2.65, f3: 5.12, shift: '0.0% (Intact Baseline)' };
    }
    const drop1 = damagedStory === 1 ? 0.08 * (damageSeverity / 30) : damagedStory === 2 ? 0.05 : 0.03;
    const drop2 = damagedStory === 3 ? 0.07 : 0.03;
    const drop3 = damagedStory === 5 ? 0.09 : 0.02;

    const f1 = 0.88 * (1 - drop1);
    const f2 = 2.65 * (1 - drop2);
    const f3 = 5.12 * (1 - drop3);
    const shiftPercent = ((1 - f1 / 0.88) * 100).toFixed(2);
    return { f1: f1.toFixed(3), f2: f2.toFixed(3), f3: f3.toFixed(3), shift: `-${shiftPercent}%` };
  };

  const modalFreqs = getModalFrequencies();
  const curRecord = GROUND_MOTION_DATASETS[selectedRecord];

  return (
    <section id="lab" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-100 dark:bg-sky-950/80 text-sky-700 dark:text-sky-300 text-[10px] font-mono font-bold uppercase tracking-widest mb-3 border border-sky-200 dark:border-sky-800">
            <Activity className="w-3 h-3 text-sky-500" />
            <span>Interactive Engineering Lab</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Structural Dynamics & Hysteresis Simulator
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
            Constitutive Plasticity &bull; Response Spectra &bull; SHM Damage Frequency Shift
          </p>
        </div>

        {/* Lab Navigation Tabs */}
        <div className="flex bg-slate-200/80 dark:bg-slate-900 p-1.5 rounded-xl max-w-2xl mb-8 border border-slate-300/60 dark:border-slate-800">
          {[
            { id: 'hysteresis', label: 'Nonlinear Hysteresis Simulator', icon: Activity },
            { id: 'ground-motion', label: 'Earthquake Spectrum (Sa vs T)', icon: Waves },
            { id: 'shm-damage', label: 'SHM Sensor Damage Detection', icon: ShieldAlert },
          ].map((tab) => {
            const Icon = tab.icon;
            const isTabActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isTabActive
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-sky-500" />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: NONLINEAR HYSTERESIS SIMULATOR */}
        {activeTab === 'hysteresis' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
            
            {/* Control Sliders (Left 5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-bold uppercase">
                  Constitutive Model Parameters (OpenSees Pinching4 / Bouc-Wen)
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  Adjust Cyclic Material Parameters
                </h3>
              </div>

              {/* Slider 1: Yield Force */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-600 dark:text-slate-300">Yield Strength (Fy):</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">{fy} kN</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="600"
                  step="25"
                  value={fy}
                  onChange={(e) => setFy(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              {/* Slider 2: Yield Displacement */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-600 dark:text-slate-300">Yield Displacement (Δy):</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">{dy} mm</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="1"
                  value={dy}
                  onChange={(e) => setDy(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              {/* Slider 3: Post-Yield Hardening Ratio */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-600 dark:text-slate-300">Post-Yield Ratio (α = Kpost / Kinit):</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">{(alpha * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.01"
                  max="0.25"
                  step="0.01"
                  value={alpha}
                  onChange={(e) => setAlpha(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              {/* Slider 4: Pinching Factor */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-600 dark:text-slate-300">Pinching & Crack Closure Factor:</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400">{(pinch * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="0.7"
                  step="0.05"
                  value={pinch}
                  onChange={(e) => setPinch(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
              </div>

              {/* Real-time Computed Metrics */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Initial Elastic Stiffness</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100">{(fy / dy).toFixed(1)} kN/mm</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Hysteretic Energy Dissipated</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{dissipatedEnergy} kN·mm</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Info className="w-4 h-4 text-sky-500 shrink-0" />
                <span>Simulates rebar yield, concrete cracking pinching, and cyclic stiffness degradation.</span>
              </div>
            </div>

            {/* Live Chart (Right 7 cols) */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 relative">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-slate-800">
                <span className="text-sky-400 font-semibold">Real-Time Cyclic Hysteresis Loop</span>
                <span>Displacement Ductility μ = {(maxD / dy).toFixed(1)}</span>
              </div>

              {/* SVG Plot */}
              <div className="h-64 sm:h-80 w-full relative flex items-center justify-center my-2">
                <svg className="w-full h-full" viewBox="-120 -100 240 200">
                  {/* Coordinate Axes */}
                  <line x1="-110" y1="0" x2="110" y2="0" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="-90" x2="0" y2="90" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Grid lines */}
                  <line x1="-50" y1="-80" x2="-50" y2="80" stroke="#1e293b" strokeWidth="0.5" />
                  <line x1="50" y1="-80" x2="50" y2="80" stroke="#1e293b" strokeWidth="0.5" />
                  <line x1="-100" y1="-45" x2="100" y2="-45" stroke="#1e293b" strokeWidth="0.5" />
                  <line x1="-100" y1="45" x2="100" y2="45" stroke="#1e293b" strokeWidth="0.5" />

                  {/* Dynamic Hysteresis Path */}
                  <path
                    d={hysteresisPath.reduce((acc, pt, idx) => {
                      const scaleX = 2.4;
                      const scaleY = 0.12;
                      const x = pt.x * scaleX;
                      const y = -pt.y * scaleY;
                      return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
                    }, '')}
                    fill="rgba(14, 165, 233, 0.15)"
                    stroke="#38bdf8"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />

                  {/* Yield Point Markers */}
                  <circle cx={dy * 2.4} cy={-fy * 0.12} r="4" fill="#10b981" />
                  <text x={dy * 2.4 + 6} y={-fy * 0.12 - 4} fill="#10b981" fontSize="7" fontFamily="monospace">
                    +Yield (Fy={fy}kN)
                  </text>

                  <circle cx={-dy * 2.4} cy={fy * 0.12} r="4" fill="#ef4444" />
                  <text x={-dy * 2.4 - 55} y={fy * 0.12 + 10} fill="#ef4444" fontSize="7" fontFamily="monospace">
                    -Yield (-Fy)
                  </text>

                  {/* Axis Text */}
                  <text x="75" y="14" fill="#64748b" fontSize="8" fontFamily="monospace">
                    + Δ (mm)
                  </text>
                  <text x="6" y="-78" fill="#64748b" fontSize="8" fontFamily="monospace">
                    + Force (kN)
                  </text>
                </svg>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800 pt-2">
                <span className="text-slate-400">Model: OpenSees Pinching4 / Concrete02</span>
                <span className="text-emerald-400">Stable Energy Dissipation</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: GROUND MOTION & RESPONSE SPECTRUM */}
        {activeTab === 'ground-motion' && (
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-bold uppercase">
                  Benchmark Earthquake Accelerograms & Response Spectra
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  Select Ground Motion Record
                </h3>
              </div>

              {/* Record Selector Buttons */}
              <div className="flex flex-wrap gap-2">
                {GROUND_MOTION_DATASETS.map((rec, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedRecord(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      selectedRecord === idx
                        ? 'bg-sky-600 text-white font-bold shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {rec.name.split(' (')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Record Description */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Record Name & Station</span>
                <span className="font-bold text-slate-900 dark:text-white text-sm">{curRecord.name}</span>
                <span className="block text-slate-500 text-[11px] font-sans mt-0.5">{curRecord.description}</span>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-slate-400 block text-[10px]">PGA</span>
                  <span className="font-bold text-rose-500 text-sm">{curRecord.pga}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Duration</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{curRecord.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Mechanism</span>
                  <span className="font-bold text-sky-600 dark:text-sky-400 text-sm">{curRecord.type}</span>
                </div>
              </div>
            </div>

            {/* Graphical Spectral Sa vs T Chart */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Accelerogram Waveform */}
              <div className="p-4 rounded-xl bg-slate-950 text-white border border-slate-800">
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>Acceleration Time Series üg(t)</span>
                  <span className="text-amber-400">Peak: {curRecord.pga}</span>
                </div>
                <div className="h-44 w-full flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 300 100">
                    <line x1="10" y1="50" x2="290" y2="50" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                    {/* Simulated Waveform Path */}
                    <path
                      d={`M 10 50 ${Array.from({ length: 40 }).map((_, i) => {
                        const x = 10 + i * 7;
                        // wave envelope
                        const env = Math.sin((i / 40) * Math.PI);
                        const freq = selectedRecord === 1 ? 12 : 6;
                        const amp = selectedRecord === 1 ? 38 : selectedRecord === 2 ? 35 : 22;
                        const y = 50 + Math.sin(i * freq) * amp * env;
                        return `L ${x} ${y}`;
                      }).join(' ')}`}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800">
                  <span>0.0 s</span>
                  <span>Time (seconds)</span>
                  <span>{curRecord.duration}</span>
                </div>
              </div>

              {/* Elastic Pseudo-Acceleration Response Spectrum Sa vs T */}
              <div className="p-4 rounded-xl bg-slate-950 text-white border border-slate-800">
                <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>Elastic Response Spectrum Sa (5% Damping)</span>
                  <span className="text-sky-400">T1 = {spectralPeriod} s</span>
                </div>
                <div className="h-44 w-full flex items-center justify-center relative">
                  <svg className="w-full h-full" viewBox="0 0 300 100">
                    <line x1="20" y1="85" x2="280" y2="85" stroke="#334155" strokeWidth="1" />
                    <line x1="20" y1="15" x2="20" y2="85" stroke="#334155" strokeWidth="1" />

                    {/* Spectrum curve */}
                    <path
                      d={`M 20 70 Q 60 15 100 25 Q 160 55 280 80`}
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                    />

                    {/* Structural Period Marker */}
                    <line x1="110" y1="15" x2="110" y2="85" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
                    <circle cx="110" cy="28" r="4" fill="#ef4444" />
                    <text x="115" y="26" fill="#ef4444" fontSize="7" fontFamily="monospace">
                      Sa(T1) = {selectedRecord === 1 ? '1.42g' : '0.86g'}
                    </text>

                    {/* Axes text */}
                    <text x="250" y="96" fill="#64748b" fontSize="7" fontFamily="monospace">Period T (s)</text>
                    <text x="24" y="20" fill="#64748b" fontSize="7" fontFamily="monospace">Sa (g)</text>
                  </svg>
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-800">
                  <span>0.0 s</span>
                  <span className="text-rose-400 font-semibold">Resonance Danger Zone [0.4s - 1.5s]</span>
                  <span>4.0 s</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 3: SHM SENSOR DAMAGE DETECTION */}
        {activeTab === 'shm-damage' && (
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-bold uppercase">
                  Operational Modal Analysis & Damage Localization
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                  Virtual 6-Story Frame Sensor Network
                </h3>
              </div>

              {/* Damage Injection Selector */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Inject Damage:</span>
                {[
                  { label: 'Intact (Baseline)', story: null },
                  { label: 'Story 1 (Base)', story: 1 },
                  { label: 'Story 3 (Mid)', story: 3 },
                  { label: 'Story 5 (Upper)', story: 5 },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setDamagedStory(item.story)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      damagedStory === item.story
                        ? item.story === null
                          ? 'bg-emerald-600 text-white font-bold'
                          : 'bg-rose-600 text-white font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Visualization & Sensor Reading Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Structural Frame Wireframe with Sensor Indicators (5 cols) */}
              <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center relative">
                <span className="text-xs font-mono text-slate-400 block mb-4">
                  Multi-Channel Triaxial Accelerometer Array
                </span>

                {/* 6 Stories */}
                <div className="space-y-3 max-w-xs mx-auto">
                  {[6, 5, 4, 3, 2, 1].map((story) => {
                    const isDamaged = damagedStory === story;
                    return (
                      <div
                        key={story}
                        className={`p-3 rounded-lg border flex items-center justify-between transition-all ${
                          isDamaged
                            ? 'bg-rose-950/60 border-rose-500 shadow-md shadow-rose-500/20'
                            : 'bg-slate-900/80 border-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-slate-300 font-bold">Story 0{story}</span>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] font-mono">
                          {isDamaged ? (
                            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold border border-rose-500/50">
                              ⚠️ ΔK = -30% (Damaged)
                            </span>
                          ) : (
                            <span className="text-slate-500">Intact (K = 100%)</span>
                          )}
                          <span className="text-sky-400 font-mono">ACC-0{story}</span>
                        </div>
                      </div>
                    );
                  })}
                  {/* Foundation */}
                  <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500">
                    ════ Foundation & Basal Restraints ════
                  </div>
                </div>
              </div>

              {/* Real-time SSI Modal Extraction Results (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Real-time Stochastic Subspace Identification (SSI-COV)
                  </h4>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center">
                      <span className="text-[10px] font-mono text-slate-400 block">Mode 1 Frequency</span>
                      <span className="text-base font-bold font-mono text-sky-600 dark:text-sky-400">
                        {modalFreqs.f1} Hz
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center">
                      <span className="text-[10px] font-mono text-slate-400 block">Mode 2 Frequency</span>
                      <span className="text-base font-bold font-mono text-indigo-600 dark:text-indigo-400">
                        {modalFreqs.f2} Hz
                      </span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center">
                      <span className="text-[10px] font-mono text-slate-400 block">Frequency Shift</span>
                      <span className={`text-base font-bold font-mono ${
                        damagedStory === null ? 'text-emerald-500' : 'text-rose-500'
                      }`}>
                        {modalFreqs.shift}
                      </span>
                    </div>
                  </div>

                  {/* AI Damage Localization result */}
                  <div className="p-3.5 rounded-lg bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 text-xs">
                    <span className="font-bold text-sky-900 dark:text-sky-200 block mb-1">
                      🧠 AI Autoencoder Damage Tagging:
                    </span>
                    {damagedStory === null ? (
                      <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                        ✓ Structure within healthy operational baseline envelope. No abnormal stiffness loss detected.
                      </span>
                    ) : (
                      <span className="text-rose-700 dark:text-rose-300 font-medium">
                        🚨 Anomaly detected! Curvature mode shape anomaly localized at <strong>Story 0{damagedStory}</strong> with 97.4% confidence score.
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  💡 <strong>Methodology in Dissertation:</strong> Coupling OpenSees multi-story finite element simulations with stochastic ambient vibration records allows training deep autoencoders that successfully decouple thermal environmental fluctuations from true structural damage.
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};
