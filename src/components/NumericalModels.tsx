import React, { useState, useEffect } from 'react';
import { NUMERICAL_MODELS } from '../data/portfolioData';
import { NumericalModel } from '../types';
import { 
  Layers, 
  Cpu, 
  Activity, 
  Code2, 
  ExternalLink, 
  Check, 
  Copy, 
  Maximize2, 
  X, 
  Info,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Ruler,
  Building2,
  Eye,
  ChevronLeft,
  Sparkles,
  Play
} from 'lucide-react';

export const NumericalModels: React.FC = () => {
  const [selectedSoftware, setSelectedSoftware] = useState<string>('All');
  
  // Track expanded projects: default to the featured masonry project
  const [expandedModelIds, setExpandedModelIds] = useState<Set<string>>(
    new Set(['sap2000-historic-masonry-avt'])
  );

  // Active tab per project
  const [activeTabs, setActiveTabs] = useState<Record<string, 'visuals' | 'overview' | 'wall_sections' | 'avt' | 'code' | 'specs'>>({
    'sap2000-historic-masonry-avt': 'visuals',
    'opensees-rc-mrfs': 'overview',
    'sap2000-oapi-automation': 'code'
  });

  // Selected image index per project
  const [selectedImageIndices, setSelectedImageIndices] = useState<Record<string, number>>({
    'sap2000-historic-masonry-avt': 0
  });

  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  
  // Lightbox Modal state
  const [lightboxData, setLightboxData] = useState<{
    images: { url: string; caption: string; tag: string; type?: string }[];
    index: number;
  } | null>(null);

  const softwareFilters = ['All', 'Historic Masonry & AVT', 'SAP2000', 'OpenSees / OpenSeesPy'];

  const filteredModels = NUMERICAL_MODELS.filter((model) => {
    if (selectedSoftware === 'All') return true;
    if (selectedSoftware === 'Historic Masonry & AVT') return model.category.includes('Masonry') || model.tags.includes('Historic Masonry');
    if (selectedSoftware === 'OpenSees / OpenSeesPy') return model.software.includes('OpenSees');
    if (selectedSoftware === 'SAP2000') return model.software.includes('SAP2000');
    return true;
  });

  const toggleModel = (id: string) => {
    setExpandedModelIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const setTabForModel = (modelId: string, tab: 'visuals' | 'overview' | 'wall_sections' | 'avt' | 'code' | 'specs') => {
    setActiveTabs((prev) => ({ ...prev, [modelId]: tab }));
  };

  const setImageIndexForModel = (modelId: string, idx: number) => {
    setSelectedImageIndices((prev) => ({ ...prev, [modelId]: idx }));
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxData) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxData(null);
      } else if (e.key === 'ArrowLeft') {
        setLightboxData((prev) => {
          if (!prev) return null;
          const nextIdx = (prev.index - 1 + prev.images.length) % prev.images.length;
          return { ...prev, index: nextIdx };
        });
      } else if (e.key === 'ArrowRight') {
        setLightboxData((prev) => {
          if (!prev) return null;
          const nextIdx = (prev.index + 1) % prev.images.length;
          return { ...prev, index: nextIdx };
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxData]);

  return (
    <section id="models" className="academic-section academic-section-alt">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="academic-section-title">
              Numerical Models &amp; Projects
            </h2>
            <p className="mt-1 text-sm text-[#718096]">
              High-fidelity 3D FEM models, Ambient Vibration Testing (AVT) calibration, OpenSees fiber formulations, and SAP2000 OAPI automation.
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto">
            {softwareFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedSoftware(filter)}
                className={`px-3 py-1 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                  selectedSoftware === filter
                    ? 'bg-[#002147] border-[#002147] text-white'
                    : 'bg-white border-[#E2E8F0] text-[#4A5568] hover:bg-slate-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Full-Width Expandable Project Cards (Dropdown Accordion) */}
        <div className="space-y-4">
          {filteredModels.map((model, projectIndex) => {
            const isExpanded = expandedModelIds.has(model.id);
            const currentTab = activeTabs[model.id] || (model.images && model.images.length > 0 ? 'visuals' : 'overview');
            const images = model.images || [];
            const activeImageIdx = selectedImageIndices[model.id] || 0;
            const activeImage = images[Math.min(activeImageIdx, images.length - 1)] || images[0];

            return (
              <div
                key={model.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-[#002147]/40 shadow-sm ring-1 ring-[#002147]/10'
                    : 'bg-white border-[#E2E8F0] hover:border-slate-300 shadow-2xs'
                }`}
              >
                {/* Clickable Card Header / Title Bar */}
                <div
                  onClick={() => toggleModel(model.id)}
                  className="p-4 sm:p-5 cursor-pointer select-none transition-colors hover:bg-slate-50/70"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Left: Metadata, Title & Context */}
                    <div className="space-y-1.5 flex-1 min-w-0">
                      
                      {/* Badge Strip */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-[#C49B3C]">
                          PROJECT 0{projectIndex + 1}
                        </span>
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#002147] text-white">
                          {model.software}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {model.category}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {model.year}
                        </span>
                        {images.length > 0 && (
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 flex items-center gap-1">
                            <Eye className="w-3 h-3 text-[#C49B3C]" />
                            {images.length} FEM Models &amp; Mode Shapes
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="text-base sm:text-lg font-bold text-[#002147] leading-snug group-hover:text-[#003366]">
                        {model.title}
                      </h3>

                      {/* Context / Subtitle */}
                      <p className="text-xs text-[#718096] flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#C49B3C] shrink-0" />
                        <span>{model.projectContext}</span>
                      </p>

                    </div>

                    {/* Right: Quick Metrics & Dropdown Action Button */}
                    <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                      
                      {/* Compact Highlights (visible even when collapsed) */}
                      <div className="hidden sm:flex items-center gap-3 text-right font-mono text-xs pr-2">
                        {model.metrics.degreesOfFreedom && (
                          <div className="border-r border-slate-200 pr-3">
                            <span className="text-[10px] uppercase text-slate-600 block font-semibold">DOFs</span>
                            <span className="font-bold text-slate-900">{model.metrics.degreesOfFreedom.toLocaleString()}</span>
                          </div>
                        )}
                        {model.wallThicknessSpecs && (
                          <div className="border-r border-slate-200 pr-3">
                            <span className="text-[10px] uppercase text-slate-600 block font-semibold">Thicknesses</span>
                            <span className="font-bold text-slate-900">{model.wallThicknessSpecs.totalSections} sections</span>
                          </div>
                        )}
                        {model.metrics.aiSurrogateSpeedup && (
                          <div className="border-r border-slate-200 pr-3">
                            <span className="text-[10px] uppercase text-slate-600 block font-semibold">Surrogate</span>
                            <span className="font-bold text-emerald-700">{model.metrics.aiSurrogateSpeedup}</span>
                          </div>
                        )}
                      </div>

                      {/* Dropdown Toggle Trigger Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleModel(model.id);
                        }}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                          isExpanded
                            ? 'bg-[#002147] text-white shadow-xs'
                            : 'bg-slate-100 hover:bg-[#002147] text-[#002147] hover:text-white border border-slate-200'
                        }`}
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Full Details'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-[#C49B3C]" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-[#C49B3C]" />
                        )}
                      </button>

                    </div>

                  </div>
                </div>

                {/* EXPANDABLE DROPDOWN BODY (Inline Full-Width Dossier) */}
                {isExpanded && (
                  <div className="border-t border-[#E2E8F0] p-4 sm:p-6 bg-[#FAFAFA] space-y-6">
                    
                    {/* Quick Metrics Bar across full width */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3.5 rounded-lg border border-slate-200 text-xs font-mono shadow-2xs">
                      {model.metrics.degreesOfFreedom && (
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">DOFs</span>
                          <span className="font-bold text-slate-900 text-sm">{model.metrics.degreesOfFreedom.toLocaleString()}</span>
                        </div>
                      )}
                      {model.metrics.fundamentalPeriod && (
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Fundamental Mode</span>
                          <span className="font-bold text-slate-900 truncate block text-sm" title={model.metrics.fundamentalPeriod}>
                            {model.metrics.fundamentalPeriod}
                          </span>
                        </div>
                      )}
                      {model.wallThicknessSpecs && (
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Wall Thicknesses</span>
                          <span className="font-bold text-slate-900 text-sm">{model.wallThicknessSpecs.totalSections} distinct (7–98 cm)</span>
                        </div>
                      )}
                      {model.metrics.driftReduction ? (
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Calibration / Code</span>
                          <span className="font-bold text-sky-800 truncate block text-sm" title={model.metrics.driftReduction}>
                            {model.metrics.driftReduction}
                          </span>
                        </div>
                      ) : model.metrics.aiSurrogateSpeedup ? (
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Surrogate Speedup</span>
                          <span className="font-bold text-emerald-800 text-sm">{model.metrics.aiSurrogateSpeedup}</span>
                        </div>
                      ) : model.metrics.computationalTime ? (
                        <div>
                          <span className="text-slate-500 block text-[10px] uppercase font-bold">Run Time</span>
                          <span className="font-bold text-slate-900 text-sm">{model.metrics.computationalTime}</span>
                        </div>
                      ) : null}
                    </div>

                    {/* Tab Navigation for this Project */}
                    <div className="flex border-b border-slate-200 text-xs font-semibold gap-2 overflow-x-auto pb-0.5">
                      {images.length > 0 && (
                        <button
                          onClick={() => setTabForModel(model.id, 'visuals')}
                          className={`pb-2.5 px-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                            currentTab === 'visuals'
                              ? 'border-[#002147] text-[#002147] font-bold'
                              : 'border-transparent text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5 text-[#C49B3C]" />
                          <span>3D FEM &amp; Mode Shapes ({images.length})</span>
                        </button>
                      )}

                      <button
                        onClick={() => setTabForModel(model.id, 'overview')}
                        className={`pb-2.5 px-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                          currentTab === 'overview'
                            ? 'border-[#002147] text-[#002147] font-bold'
                            : 'border-transparent text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        Overview &amp; Objectives
                      </button>

                      {model.wallThicknessSpecs && (
                        <button
                          onClick={() => setTabForModel(model.id, 'wall_sections')}
                          className={`pb-2.5 px-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                            currentTab === 'wall_sections'
                              ? 'border-[#002147] text-[#002147] font-bold'
                              : 'border-transparent text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          <Ruler className="w-3.5 h-3.5 text-[#C49B3C]" />
                          <span>47 Wall Sections (7–98 cm)</span>
                        </button>
                      )}

                      {model.ambientVibrationTesting && (
                        <button
                          onClick={() => setTabForModel(model.id, 'avt')}
                          className={`pb-2.5 px-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                            currentTab === 'avt'
                              ? 'border-[#002147] text-[#002147] font-bold'
                              : 'border-transparent text-slate-500 hover:text-slate-800'
                          }`}
                        >
                          <Activity className="w-3.5 h-3.5 text-emerald-600" />
                          <span>AVT &amp; MAC Validation</span>
                        </button>
                      )}

                      <button
                        onClick={() => setTabForModel(model.id, 'code')}
                        className={`pb-2.5 px-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                          currentTab === 'code'
                            ? 'border-[#002147] text-[#002147] font-bold'
                            : 'border-transparent text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        <Code2 className="w-3.5 h-3.5 text-slate-600" />
                        <span>FEA Script / OAPI Code</span>
                      </button>

                      <button
                        onClick={() => setTabForModel(model.id, 'specs')}
                        className={`pb-2.5 px-2 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                          currentTab === 'specs'
                            ? 'border-[#002147] text-[#002147] font-bold'
                            : 'border-transparent text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        Formulations &amp; Findings
                      </button>
                    </div>

                    {/* TAB 1: VISUALS & 3D MODEL GALLERY */}
                    {currentTab === 'visuals' && images.length > 0 && activeImage && (() => {
                      const isGif = activeImage.url.toLowerCase().endsWith('.gif') || activeImage.type === 'mode_shape';
                      const isFem = activeImage.type === 'fem_model';
                      const isSite = activeImage.type === 'site_photo';

                      return (
                        <div className="space-y-4">
                          
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-600 pb-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#002147]">
                                Real Project Assets: 3D FEM Shell Mesh &amp; Dynamic Mode Shapes
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
                                Authentic Field &amp; Numerical Data
                              </span>
                            </div>
                            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
                              <span>{activeImageIdx + 1} / {images.length}</span>
                              <span className="text-slate-300">|</span>
                              <button
                                onClick={() => setLightboxData({ images, index: activeImageIdx })}
                                className="text-[#002147] hover:text-[#C49B3C] font-semibold flex items-center gap-1 cursor-pointer"
                              >
                                <Maximize2 className="w-3 h-3" />
                                <span>Fullscreen Lightbox</span>
                              </button>
                            </div>
                          </div>

                          {/* Featured Image & Animation Stage */}
                          <div 
                            onClick={() => setLightboxData({ images, index: activeImageIdx })}
                            className="group relative rounded-xl overflow-hidden border border-slate-300 bg-[#001733] cursor-pointer shadow-md"
                          >
                            <div className="relative w-full h-72 sm:h-96 md:h-[420px] flex items-center justify-center bg-black/40">
                              <img 
                                src={activeImage.url} 
                                alt={activeImage.caption}
                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]" 
                              />
                            </div>
                            
                            {/* Floating Tag Badge */}
                            <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                              {isGif ? (
                                <div className="bg-[#002147]/95 backdrop-blur-xs text-white text-[11px] font-mono px-3 py-1 rounded-md border border-emerald-400/40 flex items-center gap-2 shadow-lg">
                                  <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                  </span>
                                  <span className="font-bold text-emerald-300">MODE SHAPE ANIMATION (AVT)</span>
                                </div>
                              ) : isFem ? (
                                <div className="bg-[#002147]/95 backdrop-blur-xs text-white text-[11px] font-mono px-3 py-1 rounded-md border border-sky-400/40 flex items-center gap-2 shadow-lg">
                                  <Layers className="w-3.5 h-3.5 text-sky-300" />
                                  <span className="font-bold text-sky-200">3D FEM NUMERICAL MODEL</span>
                                </div>
                              ) : isSite ? (
                                <div className="bg-[#002147]/95 backdrop-blur-xs text-white text-[11px] font-mono px-3 py-1 rounded-md border border-[#C49B3C]/40 flex items-center gap-2 shadow-lg">
                                  <Building2 className="w-3.5 h-3.5 text-[#D4AF5A]" />
                                  <span className="font-bold text-[#F5E6C4]">IN-SITU FIELD SURVEY</span>
                                </div>
                              ) : (
                                <div className="bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded border border-white/20">
                                  {activeImage.tag}
                                </div>
                              )}

                              <span className="hidden sm:inline-block bg-white/10 backdrop-blur-xs text-white/90 text-[10px] font-mono px-2 py-0.5 rounded border border-white/15">
                                {activeImage.tag}
                              </span>
                            </div>

                            {/* Enlarge Button */}
                            <div className="absolute top-3 right-3 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-lg border border-slate-200 shadow-md opacity-90 group-hover:opacity-100 transition-all flex items-center gap-1.5 text-xs font-semibold">
                              <Maximize2 className="w-3.5 h-3.5 text-[#002147]" />
                              <span className="hidden sm:inline text-[11px]">Enlarge</span>
                            </div>

                            {/* Bottom Caption Bar */}
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-950 via-slate-950/85 to-transparent p-3.5 pt-8 text-white text-xs">
                              <p className="leading-relaxed text-slate-200 text-xs sm:text-[13px] max-w-4xl">
                                {activeImage.caption}
                              </p>
                            </div>
                          </div>

                          {/* Interactive Thumbnails Strip */}
                          <div className="space-y-1.5 pt-1">
                            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                              <span className="font-bold uppercase text-slate-700">Select Asset to Inspect:</span>
                              <span>Click any thumbnail to preview</span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                              {images.map((img, idx) => {
                                const isSelected = idx === activeImageIdx;
                                const isThumbGif = img.url.toLowerCase().endsWith('.gif') || img.type === 'mode_shape';
                                const isThumbFem = img.type === 'fem_model';
                                const isThumbSite = img.type === 'site_photo';

                                return (
                                  <button
                                    key={idx}
                                    onClick={() => setImageIndexForModel(model.id, idx)}
                                    className={`text-left rounded-lg overflow-hidden border transition-all cursor-pointer relative group flex flex-col ${
                                      isSelected
                                        ? 'ring-2 ring-[#C49B3C] border-[#002147] shadow-sm bg-white'
                                        : 'border-[#E2E8F0] hover:border-slate-400 bg-white opacity-85 hover:opacity-100'
                                    }`}
                                  >
                                    <div className="relative h-24 w-full bg-slate-900 overflow-hidden">
                                      <img 
                                        src={img.url} 
                                        alt={img.tag}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                      />
                                      {isThumbGif && (
                                        <div className="absolute top-1.5 right-1.5 bg-emerald-600/90 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs flex items-center gap-1">
                                          <Play className="w-2 h-2 fill-white" />
                                          <span>GIF</span>
                                        </div>
                                      )}
                                      {isThumbFem && (
                                        <div className="absolute top-1.5 right-1.5 bg-sky-700/90 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                                          FEM
                                        </div>
                                      )}
                                      {isThumbSite && (
                                        <div className="absolute top-1.5 right-1.5 bg-amber-700/90 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow-xs">
                                          SITE
                                        </div>
                                      )}
                                    </div>

                                    <div className="p-2 flex-1 flex flex-col justify-between text-[11px]">
                                      <span className={`font-bold block truncate leading-tight ${isSelected ? 'text-[#002147]' : 'text-slate-700'}`}>
                                        {img.tag}
                                      </span>
                                      <span className="text-[10px] text-slate-500 font-mono mt-1 block">
                                        {isThumbGif ? 'Dynamic Mode Shape' : isThumbFem ? 'SAP2000 Mesh' : 'In-Situ Survey'}
                                      </span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          {/* Technical Validation Note */}
                          <div className="bg-sky-50/80 border border-sky-200 rounded-lg p-3.5 text-xs text-sky-950 space-y-1">
                            <div className="font-bold flex items-center gap-1.5 font-mono text-xs">
                              <Info className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                              <span>Experimental Calibration &amp; Numerical Formulation:</span>
                            </div>
                            <p className="text-slate-700 leading-relaxed text-[11px]">
                              The images above illustrate the genuine 3D finite element numerical model discretized into thick/thin shell elements representing <strong>47 distinct wall thickness sections (7 cm to 98 cm)</strong>. The mode shape animations present the fundamental operational vibration frequencies captured through <strong>Ambient Vibration Testing (AVT)</strong> and <strong>Operational Modal Analysis (OMA: EFDD &amp; SSI-DATA)</strong>, achieving verified modal correlation of <strong>MAC &gt; 0.94</strong>.
                            </p>
                          </div>

                        </div>
                      );
                    })()}

                    {/* TAB 2: OVERVIEW & OBJECTIVES */}
                    {currentTab === 'overview' && (
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <h4 className="font-mono uppercase font-bold text-slate-700 text-xs mb-2">
                            Research Description &amp; Engineering Scope
                          </h4>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {model.description}
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <h4 className="font-mono uppercase font-bold text-slate-700 text-xs mb-3">
                            Key Modeling Highlights &amp; Innovations
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {model.modelingHighlights.map((highlight, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                <span className="text-[#C49B3C] font-bold mt-0.5">&bull;</span>
                                <span className="leading-relaxed">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <h4 className="font-mono uppercase font-bold text-slate-700 text-xs mb-2">
                            Analysis Procedures &amp; Code Checks
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {model.analysisTypes.map((t, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB 3: 47 WALL SECTIONS */}
                    {currentTab === 'wall_sections' && model.wallThicknessSpecs && (
                      <div className="space-y-4">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3.5 text-xs text-amber-950 space-y-1">
                          <div className="font-bold flex items-center gap-1.5 font-mono text-xs">
                            <Ruler className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                            <span>Wall Thickness Discretization Strategy:</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed text-[11px]">
                            Unlike simplified equivalent-frame or uniform-thickness macro models, this 3D FE formulation categorizes the palace perimeter walls, courtyard arcade pillars, and partition walls into <strong>{model.wallThicknessSpecs.totalSections} distinct thickness values</strong> ranging from <strong>{model.wallThicknessSpecs.minThickness}</strong> to <strong>{model.wallThicknessSpecs.maxThickness}</strong>.
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <h4 className="font-mono uppercase font-bold text-slate-800 text-xs">
                              Representative Wall Thickness Hierarchy &amp; Structural Roles
                            </h4>
                            <span className="text-[11px] font-mono text-[#002147] font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200 self-start sm:self-auto">
                              Total: 47 Discretized Shell Section Classes
                            </span>
                          </div>

                          <div className="overflow-x-auto border border-slate-200 rounded-lg">
                            <table className="w-full text-left font-mono text-[11px]">
                              <thead className="bg-slate-100 text-slate-700 border-b border-slate-200 uppercase text-[10px]">
                                <tr>
                                  <th className="p-2.5">Section ID</th>
                                  <th className="p-2.5">Component Description</th>
                                  <th className="p-2.5">Thickness</th>
                                  <th className="p-2.5">Masonry Material Type</th>
                                  <th className="p-2.5">Structural &amp; Seismic Role</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200 text-slate-800">
                                {model.wallThicknessSpecs.sampleSections.map((sec) => (
                                  <tr key={sec.id} className="hover:bg-slate-50">
                                    <td className="p-2.5 font-bold text-[#002147]">{sec.id}</td>
                                    <td className="p-2.5 font-semibold text-slate-900">{sec.name}</td>
                                    <td className="p-2.5 font-bold text-[#C49B3C] bg-amber-50/50">{sec.thickness}</td>
                                    <td className="p-2.5 text-slate-700">{sec.material}</td>
                                    <td className="p-2.5 text-slate-600 text-[10px] leading-relaxed">{sec.role}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            * The 47 sections allow realistic stiffness distribution, preventing artificial stress concentrations common in uniform thickness approximations.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* TAB 4: AVT & MODAL UPDATING */}
                    {currentTab === 'avt' && model.ambientVibrationTesting && (
                      <div className="space-y-4">
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-xs text-emerald-950 space-y-1">
                          <div className="font-bold flex items-center gap-1.5 font-mono">
                            <Activity className="w-3.5 h-3.5 text-emerald-800" />
                            <span>In-Situ Ambient Vibration Testing (AVT) Setup:</span>
                          </div>
                          <p className="text-slate-700 leading-relaxed text-[11px]">
                            Operational Modal Analysis was conducted utilizing high-sensitivity triaxial force-balance accelerometers placed across key floor levels and roof corners. Frequency Domain Decomposition (FDD) and Stochastic Subspace Identification (SSI) extracted four primary dynamic modes with low damping (&xi; = 1.6% to 2.4%).
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <h4 className="font-mono uppercase font-bold text-slate-800 text-xs">
                              Experimental (AVT) vs. Calibrated 3D FEM Modal Correlation
                            </h4>
                            <span className="text-[11px] font-mono text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 self-start sm:self-auto">
                              MAC &gt; 0.91 across all identified modes
                            </span>
                          </div>

                          <div className="overflow-x-auto border border-slate-200 rounded-lg">
                            <table className="w-full text-left font-mono text-[11px]">
                              <thead className="bg-slate-100 text-slate-700 border-b border-slate-200 uppercase text-[10px]">
                                <tr>
                                  <th className="p-2.5">Mode</th>
                                  <th className="p-2.5">Mode Shape Description</th>
                                  <th className="p-2.5">In-Situ AVT (Exp)</th>
                                  <th className="p-2.5">Calibrated 3D FEM</th>
                                  <th className="p-2.5">&Delta;f (%)</th>
                                  <th className="p-2.5">MAC</th>
                                  <th className="p-2.5">Damping (&xi;)</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200 text-slate-800">
                                {model.ambientVibrationTesting.modalComparison.map((row) => (
                                  <tr key={row.mode} className="hover:bg-slate-50">
                                    <td className="p-2.5 font-bold text-slate-900">Mode {row.mode}</td>
                                    <td className="p-2.5 font-medium text-slate-700">{row.label}</td>
                                    <td className="p-2.5 font-bold text-sky-800">{row.expFreq}</td>
                                    <td className="p-2.5 font-bold text-slate-900">{row.femFreq}</td>
                                    <td className="p-2.5 font-semibold text-emerald-700">{row.error}</td>
                                    <td className="p-2.5 font-bold text-emerald-800 bg-emerald-50/50">{row.mac}</td>
                                    <td className="p-2.5 text-slate-600">{row.damping}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed">
                            * <strong>MAC (Modal Assurance Criterion)</strong> values exceeding 0.90 confirm rigorous dynamic equivalence between in-situ ambient spatial vibrations and numerical shell eigenvectors.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* TAB 5: CODE SNIPPET */}
                    {currentTab === 'code' && (
                      <div className="space-y-3">
                        {model.codeSnippet ? (
                          <div className="bg-white rounded-lg border border-slate-300 overflow-hidden shadow-2xs">
                            <div className="flex items-center justify-between bg-slate-100 px-3 py-2 border-b border-slate-300 text-xs font-mono">
                              <span className="font-bold text-slate-800">{model.codeSnippet.fileName}</span>
                              <button
                                onClick={() => handleCopyCode(model.codeSnippet!.code, model.id)}
                                className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-950 font-semibold cursor-pointer"
                              >
                                {copiedCodeId === model.id ? (
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <Copy className="w-3.5 h-3.5" />
                                )}
                                <span>{copiedCodeId === model.id ? 'Copied!' : 'Copy'}</span>
                              </button>
                            </div>
                            <pre className="p-4 bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed max-h-96">
                              <code>{model.codeSnippet.code}</code>
                            </pre>
                          </div>
                        ) : (
                          <p className="text-xs text-slate-500">Computational script available upon request.</p>
                        )}
                      </div>
                    )}

                    {/* TAB 6: SPECS & FINDINGS */}
                    {currentTab === 'specs' && (
                      <div className="space-y-4 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                            <h4 className="font-mono uppercase font-bold text-slate-700 mb-2">
                              Finite Element Formulations
                            </h4>
                            <ul className="space-y-1.5">
                              {model.elementTypes.map((el, i) => (
                                <li key={i} className="text-slate-600 flex items-center gap-1.5 font-mono">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                                  <span>{el}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                            <h4 className="font-mono uppercase font-bold text-slate-700 mb-2">
                              Material Constitutive Laws
                            </h4>
                            <ul className="space-y-1.5">
                              {model.materialModels.map((mat, i) => (
                                <li key={i} className="text-slate-600 flex items-center gap-1.5 font-mono">
                                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                                  <span>{mat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-slate-200">
                          <h4 className="font-mono uppercase font-bold text-slate-700 mb-2">
                            Key Findings &amp; Quantitative Engineering Takeaways
                          </h4>
                          <div className="space-y-2">
                            {model.keyFindings.map((f, i) => (
                              <div key={i} className="p-2.5 bg-slate-50 border border-slate-200 rounded flex items-start gap-2">
                                <span className="font-bold text-sky-800 font-mono text-xs">{i + 1}.</span>
                                <p className="text-slate-700 text-xs leading-relaxed">{f}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Collapse Button at the bottom of the dossier */}
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={() => toggleModel(model.id)}
                        className="px-3 py-1.5 rounded bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <ChevronUp className="w-3.5 h-3.5 text-[#C49B3C]" />
                        <span>Collapse Project Details</span>
                      </button>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* FULLSCREEN LIGHTBOX MODAL */}
        {lightboxData && lightboxData.images[lightboxData.index] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-xs">
            <div className="relative max-w-5xl w-full bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                  <span className="text-sky-400 font-bold">[{lightboxData.index + 1}/{lightboxData.images.length}]</span>
                  <span className="font-semibold text-white truncate max-w-md">{lightboxData.images[lightboxData.index].tag}</span>
                </div>
                <button
                  onClick={() => setLightboxData(null)}
                  className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer transition-colors"
                  title="Close Lightbox (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Area */}
              <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 bg-black overflow-hidden min-h-[50vh]">
                <img 
                  src={lightboxData.images[lightboxData.index].url} 
                  alt={lightboxData.images[lightboxData.index].caption}
                  className="max-h-[68vh] max-w-full object-contain rounded select-none" 
                />

                {/* Prev Button */}
                {lightboxData.images.length > 1 && (
                  <button
                    onClick={() => {
                      const nextIdx = (lightboxData.index - 1 + lightboxData.images.length) % lightboxData.images.length;
                      setLightboxData({ ...lightboxData, index: nextIdx });
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all cursor-pointer shadow-lg"
                    title="Previous image (Left Arrow)"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {/* Next Button */}
                {lightboxData.images.length > 1 && (
                  <button
                    onClick={() => {
                      const nextIdx = (lightboxData.index + 1) % lightboxData.images.length;
                      setLightboxData({ ...lightboxData, index: nextIdx });
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all cursor-pointer shadow-lg"
                    title="Next image (Right Arrow)"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Modal Footer Caption */}
              <div className="px-4 py-3 border-t border-slate-800 bg-slate-950 text-xs text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <p className="leading-relaxed text-slate-200">
                  {lightboxData.images[lightboxData.index].caption}
                </p>
                <div className="flex items-center gap-1.5 shrink-0">
                  {lightboxData.images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setLightboxData({ ...lightboxData, index: dotIdx })}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        dotIdx === lightboxData.index ? 'bg-[#C49B3C] w-5' : 'bg-slate-600 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
