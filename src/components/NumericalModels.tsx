import React, { useState } from 'react';
import { NUMERICAL_MODELS } from '../data/portfolioData';
import { NumericalModel } from '../types';
import { 
  Layers, 
  Code2, 
  Copy, 
  Check, 
  ChevronRight, 
  Info,
  CheckCircle2
} from 'lucide-react';

export const NumericalModels: React.FC = () => {
  const [selectedSoftware, setSelectedSoftware] = useState<string>('All');
  const [activeModel, setActiveModel] = useState<NumericalModel>(NUMERICAL_MODELS[0]);
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'specs'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  const softwareFilters = ['All', 'OpenSees / OpenSeesPy', 'SAP2000'];

  const filteredModels = NUMERICAL_MODELS.filter((model) => {
    if (selectedSoftware === 'All') return true;
    if (selectedSoftware === 'OpenSees / OpenSeesPy') return model.software.includes('OpenSees');
    if (selectedSoftware === 'SAP2000') return model.software === 'SAP2000';
    return true;
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="models" className="border-b border-slate-200 pb-14">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Numerical Models & Structural Engineering Projects
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            OpenSees finite element models, SAP2000 OAPI automation, and non-linear dynamic analysis (NLTHA).
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          {softwareFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setSelectedSoftware(filter);
                const matched = NUMERICAL_MODELS.find(m => 
                  filter === 'All' ? true :
                  filter === 'OpenSees / OpenSeesPy' ? m.software.includes('OpenSees') :
                  m.software === 'SAP2000'
                );
                if (matched) setActiveModel(matched);
              }}
              className={`px-2.5 py-1 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                selectedSoftware === filter
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid: Left Model List, Right Detailed Model Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Col: Model List */}
        <div className="lg:col-span-5 space-y-2.5">
          {filteredModels.map((model) => {
            const isSelected = activeModel.id === model.id;
            return (
              <button
                key={model.id}
                onClick={() => setActiveModel(model)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-50 border-sky-600 ring-1 ring-sky-600/30'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700">
                    {model.software}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {model.year}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {model.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                  {model.objective}
                </p>

                <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{model.category}</span>
                  <span className="text-sky-700 font-semibold flex items-center gap-1">
                    Details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Col: Active Model Inspection Dossier */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg p-6 space-y-6">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800 border border-sky-200">
                {activeModel.software}
              </span>
              <span className="text-xs font-mono text-slate-500">
                Category: {activeModel.category} &bull; Year: {activeModel.year}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              {activeModel.title}
            </h3>
            <p className="text-xs text-slate-600 font-medium mt-1">
              📍 {activeModel.projectContext}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs font-mono">
            {activeModel.metrics.degreesOfFreedom && (
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">DOFs</span>
                <span className="font-bold text-slate-900">{activeModel.metrics.degreesOfFreedom}</span>
              </div>
            )}
            {activeModel.metrics.fundamentalPeriod && (
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Periods (T1)</span>
                <span className="font-bold text-slate-900 truncate block" title={activeModel.metrics.fundamentalPeriod}>
                  {activeModel.metrics.fundamentalPeriod}
                </span>
              </div>
            )}
            {activeModel.metrics.computationalTime && (
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">NLTHA Run</span>
                <span className="font-bold text-slate-900">{activeModel.metrics.computationalTime}</span>
              </div>
            )}
            {activeModel.metrics.driftReduction ? (
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">Response</span>
                <span className="font-bold text-sky-800">{activeModel.metrics.driftReduction}</span>
              </div>
            ) : activeModel.metrics.aiSurrogateSpeedup ? (
              <div>
                <span className="text-slate-500 block text-[10px] uppercase">AI Speedup</span>
                <span className="font-bold text-emerald-800">{activeModel.metrics.aiSurrogateSpeedup}</span>
              </div>
            ) : null}
          </div>

          {/* Inner Tab Selector */}
          <div className="flex border-b border-slate-200 text-xs font-semibold gap-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-slate-900 text-slate-900 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Overview & Objectives
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'code'
                  ? 'border-slate-900 text-slate-900 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              FEA Script / Code Snippet
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-2 border-b-2 transition-colors cursor-pointer ${
                activeTab === 'specs'
                  ? 'border-slate-900 text-slate-900 font-bold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              Formulations & Findings
            </button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <h4 className="font-mono text-xs uppercase font-bold text-slate-500 mb-1">
                  Objective
                </h4>
                <p className="font-medium text-slate-800 bg-slate-50 p-2.5 rounded border border-slate-200">
                  {activeModel.objective}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase font-bold text-slate-500 mb-1">
                  Description
                </h4>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                  {activeModel.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase font-bold text-slate-500 mb-2">
                  Key Highlights
                </h4>
                <ul className="space-y-1.5">
                  {activeModel.modelingHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {activeModel.tags.map((t, i) => (
                  <span key={i} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[11px] font-mono rounded">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Code */}
          {activeTab === 'code' && (
            <div className="space-y-3">
              {activeModel.codeSnippet ? (
                <div>
                  <div className="flex items-center justify-between bg-slate-100 px-3 py-2 rounded-t border border-slate-300 text-xs font-mono">
                    <span className="font-bold text-slate-800">{activeModel.codeSnippet.fileName}</span>
                    <button
                      onClick={() => handleCopyCode(activeModel.codeSnippet!.code)}
                      className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-950 font-semibold cursor-pointer"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <pre className="p-3.5 bg-slate-900 text-slate-100 rounded-b font-mono text-xs overflow-x-auto leading-relaxed max-h-80">
                    <code>{activeModel.codeSnippet.code}</code>
                  </pre>
                </div>
              ) : (
                <p className="text-xs text-slate-500">Code snippet available upon request.</p>
              )}
            </div>
          )}

          {/* Tab 3: Specs & Findings */}
          {activeTab === 'specs' && (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 rounded bg-slate-50 border border-slate-200">
                  <h4 className="font-mono uppercase font-bold text-slate-700 mb-1.5">
                    Finite Element Formulations
                  </h4>
                  <ul className="space-y-1">
                    {activeModel.elementTypes.map((el, i) => (
                      <li key={i} className="text-slate-600 flex items-center gap-1.5 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded bg-slate-50 border border-slate-200">
                  <h4 className="font-mono uppercase font-bold text-slate-700 mb-1.5">
                    Material Constitutive Laws
                  </h4>
                  <ul className="space-y-1">
                    {activeModel.materialModels.map((mat, i) => (
                      <li key={i} className="text-slate-600 flex items-center gap-1.5 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-mono uppercase font-bold text-slate-700 mb-2">
                  Key Findings & Quantitative Engineering Takeaways
                </h4>
                <div className="space-y-2">
                  {activeModel.keyFindings.map((f, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 border border-slate-200 rounded flex items-start gap-2">
                      <span className="font-bold text-sky-800 font-mono text-xs">{i + 1}.</span>
                      <p className="text-slate-700 text-xs leading-relaxed">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
