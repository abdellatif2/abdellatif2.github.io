import React, { useState } from 'react';
import { NUMERICAL_MODELS } from '../data/portfolioData';
import { 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Layers, 
  Maximize2, 
  X,
  FileCode,
  Activity,
  CheckCircle2
} from 'lucide-react';

export const NumericalModels: React.FC = () => {
  const [selectedSoftware, setSelectedSoftware] = useState<string>('All');
  const [expandedModels, setExpandedModels] = useState<Record<string, boolean>>({
    'sap2000-historic-masonry-avt': true // Default open the highlighted research project
  });
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  
  // Clean Lightbox modal state for images/gifs
  const [lightboxImage, setLightboxImage] = useState<{
    url: string;
    caption: string;
    tag: string;
  } | null>(null);

  const softwareFilters = ['All', 'Historic Masonry & AVT', 'SAP2000', 'OpenSees'];

  const filteredModels = NUMERICAL_MODELS.filter((model) => {
    if (selectedSoftware === 'All') return true;
    if (selectedSoftware === 'Historic Masonry & AVT') return model.category.includes('Masonry') || model.tags.includes('Historic Masonry');
    if (selectedSoftware === 'OpenSees') return model.software.includes('OpenSees');
    if (selectedSoftware === 'SAP2000') return model.software.includes('SAP2000');
    return true;
  });

  const toggleDetails = (id: string) => {
    setExpandedModels((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <section id="models" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Numerical Models &amp; Projects
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2 mb-3" />
          <p className="text-xs sm:text-sm text-slate-500">
            High-fidelity finite element modeling (FEM), in-situ Ambient Vibration Testing (AVT) calibration, OpenSees fiber formulations, and SAP2000 OAPI automation.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {softwareFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedSoftware(filter)}
              className={`px-3.5 py-1 text-xs font-semibold rounded-xs border transition-all cursor-pointer ${
                selectedSoftware === filter
                  ? 'bg-[#002147] border-[#002147] text-white'
                  : 'bg-white border-[#002147] text-[#002147] hover:bg-slate-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Flat Academic List matching other sections */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {filteredModels.map((model, idx) => {
            const isExpanded = !!expandedModels[model.id];

            return (
              <div key={model.id} className="py-5 text-left">
                
                {/* Header Row: Index / Tag & Year */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-[#002147]">
                      [{idx + 1}]
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {model.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#C49B3C] shrink-0">
                    {model.software} &middot; {model.year}
                  </span>
                </div>

                {/* Subtitle / Context */}
                <p className="text-xs sm:text-sm font-medium text-slate-600 mb-1.5">
                  <span className="text-[#002147] font-semibold">{model.category}</span> &middot; {model.projectContext}
                </p>

                {/* Summary / Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {model.description}
                </p>

                {/* Tag Pills */}
                {model.tags && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {model.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Toggle Button */}
                <div className="pt-2">
                  <button
                    onClick={() => toggleDetails(model.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#C49B3C] hover:text-[#a07b27] hover:underline cursor-pointer transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Technical Details' : 'View Technical Details & Formulations'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Smooth Technical Details Drawer */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-4 bg-slate-50/60 p-4 rounded-xs border">
                    
                    {/* Visual Highlights Gallery (if images exist) */}
                    {model.images && model.images.length > 0 && (
                      <div className="space-y-2">
                        <span className="font-mono text-[11px] uppercase font-bold text-[#002147] block">
                          Model Visualizations &amp; Mode Shapes:
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                          {model.images.map((img, imgIdx) => (
                            <div
                              key={imgIdx}
                              onClick={() => setLightboxImage(img)}
                              className="group relative h-24 rounded border border-slate-200 bg-white overflow-hidden cursor-pointer hover:border-[#C49B3C] transition-all shadow-2xs"
                              title={img.caption}
                            >
                              <img
                                src={img.url}
                                alt={img.tag}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 className="w-4 h-4 text-white drop-shadow" />
                              </div>
                              <span className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-white text-[9px] font-mono px-1 py-0.5 truncate text-center">
                                {img.tag}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Modeling Highlights & Elements */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                      
                      {/* Highlights */}
                      <div className="space-y-1.5">
                        <span className="font-mono text-[11px] uppercase font-bold text-[#002147] block">
                          Finite Element Formulations:
                        </span>
                        <ul className="space-y-1 pl-4 list-disc marker:text-[#C49B3C] text-slate-600">
                          {model.modelingHighlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="leading-snug">
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Findings / Validations */}
                      <div className="space-y-1.5">
                        <span className="font-mono text-[11px] uppercase font-bold text-[#002147] block">
                          Validation &amp; Results:
                        </span>
                        <ul className="space-y-1 pl-4 list-disc marker:text-[#C49B3C] text-slate-600">
                          {model.keyFindings.map((finding, fIdx) => (
                            <li key={fIdx} className="leading-snug">
                              {finding}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Key Metrics Strip */}
                    {model.metrics && (
                      <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-700">
                        {model.metrics.fundamentalPeriod && (
                          <div>
                            <span className="text-slate-400">Modal Period: </span>
                            <span className="font-bold text-[#002147]">{model.metrics.fundamentalPeriod}</span>
                          </div>
                        )}
                        {model.metrics.degreesOfFreedom && (
                          <div>
                            <span className="text-slate-400">DOFs: </span>
                            <span className="font-bold text-[#002147]">{model.metrics.degreesOfFreedom.toLocaleString()}</span>
                          </div>
                        )}
                        {model.metrics.driftReduction && (
                          <div>
                            <span className="text-slate-400">Assessment: </span>
                            <span className="font-bold text-[#002147]">{model.metrics.driftReduction}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Code Script Sample */}
                    {model.codeSnippet && (
                      <div className="pt-2">
                        <div className="flex items-center justify-between bg-slate-900 text-slate-200 px-3 py-1.5 rounded-t-xs text-xs font-mono">
                          <div className="flex items-center gap-2">
                            <FileCode className="w-3.5 h-3.5 text-[#C49B3C]" />
                            <span>{model.codeSnippet.fileName}</span>
                          </div>
                          <button
                            onClick={() => handleCopyCode(model.codeSnippet!.code, model.id)}
                            className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white cursor-pointer transition-colors"
                          >
                            {copiedCodeId === model.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400 font-semibold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 text-[#C49B3C]" />
                                <span>Copy Script</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-3 bg-slate-950 text-slate-200 text-[11px] font-mono rounded-b-xs overflow-x-auto max-h-48 border-x border-b border-slate-900">
                          <code>{model.codeSnippet.code}</code>
                        </pre>
                      </div>
                    )}

                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal for Enlarged Views */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="bg-white rounded-xs max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#002147] text-white">
              <span className="font-mono text-xs font-semibold text-[#C49B3C]">
                {lightboxImage.tag}
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1 text-white/70 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-2 bg-slate-950 flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img 
                src={lightboxImage.url} 
                alt={lightboxImage.tag} 
                className="max-h-[65vh] w-auto object-contain"
              />
            </div>

            <div className="p-3 bg-white text-xs text-slate-700 border-t border-slate-200">
              <p>{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
