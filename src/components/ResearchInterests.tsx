import React, { useState } from 'react';
import { RESEARCH_PILLARS } from '../data/portfolioData';
import { 
  Activity, 
  Cpu, 
  Box, 
  BarChart3, 
  CheckCircle2, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { ResearchPillar } from '../types';

export const ResearchInterests: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-4 h-4 text-sky-700" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-sky-700" />;
      case 'Box': return <Box className="w-4 h-4 text-sky-700" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4 text-sky-700" />;
      default: return <Sparkles className="w-4 h-4 text-sky-700" />;
    }
  };

  const current = RESEARCH_PILLARS[activeTab];

  return (
    <section id="research" className="border-b border-slate-200 pb-12">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <span>Research Focus & Domains</span>
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Nonlinear structural dynamics, operational modal analysis (OMA), OpenSees numerical simulations, and machine learning surrogates.
        </p>
      </div>

      {/* Tabs / Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
        {RESEARCH_PILLARS.map((pillar, idx) => {
          const isSelected = activeTab === idx;
          return (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(idx)}
              className={`p-3.5 rounded-lg border text-left transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-sky-50 border-sky-600 text-sky-900 shadow-2xs'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                {getIcon(pillar.iconName)}
                <span className="font-semibold text-xs leading-snug">
                  {pillar.title}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-1">
                {pillar.shortDesc}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Details Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {current.title}
            </h3>
            <span className="text-xs font-mono text-sky-800 font-medium">
              Core Doctoral Focus &bull; ENP Laboratory
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {current.keyTools.map((tool, tIdx) => (
              <span key={tIdx} className="px-2 py-0.5 rounded bg-white border border-slate-300 text-slate-700 text-xs font-mono">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed">
          {current.longDesc}
        </p>

        {/* Governing Equation */}
        {current.formulaSnippet && (
          <div className="bg-white border border-slate-200 rounded p-3.5 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="font-bold uppercase tracking-wider text-[10px]">Governing Formulation</span>
              <span>LaTeX / Mechanics</span>
            </div>
            <div className="font-mono text-xs sm:text-sm text-slate-900 bg-slate-50 py-2 px-3 rounded text-center border border-slate-200 overflow-x-auto">
              {current.formulaSnippet.latex}
            </div>
            <p className="text-xs text-slate-500 italic">
              {current.formulaSnippet.explanation}
            </p>
          </div>
        )}

        {/* 2-Col Methodologies and Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Applied Methodologies</span>
            </h4>
            <ul className="space-y-1.5">
              {current.methodologies.map((item, mIdx) => (
                <li key={mIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-600" />
              <span>Real-World Applications</span>
            </h4>
            <ul className="space-y-1.5">
              {current.applications.map((item, aIdx) => (
                <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
