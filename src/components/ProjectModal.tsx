import React, { useState, useEffect } from 'react';
import { NumericalModel } from '../types';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  Activity, 
  Copy, 
  Check, 
  Maximize2, 
  FileCode, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

interface ProjectModalProps {
  project: NumericalModel | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    url: string;
    caption: string;
    tag: string;
  } | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeLightboxImage) {
          setActiveLightboxImage(null);
        } else if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeLightboxImage, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Group images into regular photos/models and mode shape animations
  const modeShapeImages = project.images?.filter(img => img.type === 'mode_shape') || [];
  const structuralImages = project.images?.filter(img => img.type !== 'mode_shape') || [];

  return (
    <>
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 print:p-0 print:bg-white"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Container */}
        <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Modal Sticky Top Control Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-4 bg-[#002147] text-white border-b border-slate-800">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Layers className="w-5 h-5 text-[#C49B3C] shrink-0" />
              <div className="flex items-center gap-2 truncate">
                <span className="font-bold text-xs sm:text-sm tracking-wide">
                  Project Dossier: {project.software}
                </span>
                <span className="hidden sm:inline-block text-slate-400 text-xs">
                  &middot; {project.category} ({project.year})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Document Body */}
          <div className="p-6 sm:p-8 space-y-8 bg-white text-slate-900 text-left">
            
            {/* Title & Metadata Banner */}
            <div className="border-b border-slate-200 pb-6 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-xs font-semibold bg-[#002147] text-white">
                  {project.software}
                </span>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-xs font-semibold bg-amber-50 text-[#C49B3C] border border-[#C49B3C]/30">
                  {project.category}
                </span>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-xs text-slate-600 bg-slate-100">
                  Year {project.year}
                </span>
              </div>

              <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#002147] leading-tight">
                {project.title}
              </h1>

              <p className="text-xs sm:text-sm font-medium text-slate-600">
                <strong className="text-slate-900">Context:</strong> {project.projectContext}
              </p>

              {/* Key Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                {project.metrics.degreesOfFreedom && (
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      Degrees of Freedom
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#002147] font-mono">
                      {project.metrics.degreesOfFreedom.toLocaleString()} DOFs
                    </span>
                  </div>
                )}
                {project.metrics.fundamentalPeriod && (
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      Fundamental Period
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#002147] font-mono">
                      {project.metrics.fundamentalPeriod}
                    </span>
                  </div>
                )}
                {project.metrics.computationalTime && (
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      Solution Time
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-800 font-mono">
                      {project.metrics.computationalTime}
                    </span>
                  </div>
                )}
                {project.metrics.driftReduction && (
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      Validation &amp; Status
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-700">
                      {project.metrics.driftReduction}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Objective Callout */}
            <div className="bg-amber-50/50 border-l-4 border-[#C49B3C] p-4 rounded-r-lg space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C49B3C] font-mono">
                Project Objective
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                {project.objective}
              </p>
            </div>

            {/* Comprehensive Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono border-b border-slate-100 pb-1">
                Project Overview &amp; Numerical Formulation
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Visual Gallery: Real Photos & Finite Element Discretization */}
            {structuralImages.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                    Finite Element Mesh &amp; Structural Models
                  </h3>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Click image to expand
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {structuralImages.map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setActiveLightboxImage(img)}
                      className="group cursor-pointer rounded-lg overflow-hidden border border-slate-200 hover:border-[#002147] hover:shadow-md transition-all bg-slate-950 flex flex-col"
                    >
                      <div className="relative h-44 bg-slate-900 overflow-hidden flex items-center justify-center">
                        <img 
                          src={img.url} 
                          alt={img.caption}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 bg-[#002147]/90 text-white font-mono text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs">
                          {img.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#002147] text-xs font-semibold px-2.5 py-1 rounded shadow-sm inline-flex items-center gap-1">
                            <Maximize2 className="w-3.5 h-3.5" /> Enlarge
                          </span>
                        </div>
                      </div>
                      <div className="p-2.5 bg-white border-t border-slate-100 text-left">
                        <p className="text-[11px] text-slate-700 line-clamp-2 leading-snug">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dynamic Mode Shapes & Animated Gifs Gallery */}
            {modeShapeImages.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#C49B3C]" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                      Dynamic Mode Shapes &amp; Eigenvalue Oscillations ({modeShapeImages.length} Modes)
                    </h3>
                  </div>
                  <span className="text-[11px] text-emerald-700 font-mono font-medium">
                    3D Animated Mode Shapes
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {modeShapeImages.map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setActiveLightboxImage(img)}
                      className="group cursor-pointer rounded-lg overflow-hidden border border-slate-200 hover:border-[#002147] hover:shadow-md transition-all bg-white flex flex-col"
                    >
                      <div className="relative h-44 bg-slate-950 overflow-hidden flex items-center justify-center">
                        <img 
                          src={img.url} 
                          alt={img.caption}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 bg-[#002147]/90 text-white font-mono text-[10px] font-semibold px-2 py-0.5 rounded shadow-xs">
                          {img.tag}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#002147] text-xs font-semibold px-2.5 py-1 rounded shadow-sm inline-flex items-center gap-1">
                            <Maximize2 className="w-3.5 h-3.5" /> Full Size
                          </span>
                        </div>
                      </div>
                      <div className="p-3 bg-white border-t border-slate-100 text-left">
                        <p className="text-xs font-semibold text-slate-900 line-clamp-2 leading-snug">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Identification & Comparison Table */}
            {project.ambientVibrationTesting?.modalComparison && (
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                    Dynamic Modal Identification &amp; Eigenvalue Results
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.ambientVibrationTesting.idMethods?.join(' &middot; ')}
                  </span>
                </div>
                
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-50 text-slate-700 font-mono border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3 font-semibold">Mode #</th>
                        <th className="py-2.5 px-3 font-semibold">Vibration Mode Description</th>
                        <th className="py-2.5 px-3 font-semibold">Modal Freq. (Period)</th>
                        <th className="py-2.5 px-3 font-semibold">FEM Freq. (Period)</th>
                        <th className="py-2.5 px-3 font-semibold">MAC</th>
                        <th className="py-2.5 px-3 font-semibold">Damping</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                      {project.ambientVibrationTesting.modalComparison.map((m) => (
                        <tr key={m.mode} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-2 px-3 font-bold text-[#002147]">Mode {m.mode}</td>
                          <td className="py-2 px-3 font-sans text-slate-800 font-medium">{m.label}</td>
                          <td className="py-2 px-3 text-slate-900">{m.expFreq}</td>
                          <td className="py-2 px-3 text-slate-900">{m.femFreq}</td>
                          <td className="py-2 px-3 font-bold text-emerald-700">{m.mac}</td>
                          <td className="py-2 px-3 text-slate-600">{m.damping}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Wall Thickness Specifications for Masonry Structure */}
            {project.wallThicknessSpecs && (
              <div className="space-y-2.5 pt-2">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                    Wall Thickness Discretization (47 Distinct Sections: {project.wallThicknessSpecs.minThickness} to {project.wallThicknessSpecs.maxThickness})
                  </h3>
                  <span className="text-[11px] font-mono text-[#C49B3C] font-semibold">
                    Total {project.wallThicknessSpecs.totalSections} Section Types
                  </span>
                </div>
                
                <div className="overflow-x-auto border border-slate-200 rounded-lg">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-50 text-slate-700 font-mono border-b border-slate-200">
                      <tr>
                        <th className="py-2 px-3 font-semibold">Section ID</th>
                        <th className="py-2 px-3 font-semibold">Structural Element Role</th>
                        <th className="py-2 px-3 font-semibold">Thickness</th>
                        <th className="py-2 px-3 font-semibold">Constitutive Material</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-[11px]">
                      {project.wallThicknessSpecs.sampleSections.map((sec) => (
                        <tr key={sec.id} className="hover:bg-slate-50/80">
                          <td className="py-2 px-3 font-bold text-[#002147]">{sec.id}</td>
                          <td className="py-2 px-3 font-sans text-slate-900 font-medium">{sec.name}</td>
                          <td className="py-2 px-3 text-[#C49B3C] font-bold">{sec.thickness}</td>
                          <td className="py-2 px-3 font-sans text-slate-700">{sec.material}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Modeling Highlights */}
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono border-b border-slate-100 pb-1">
                Key Modeling Formulations &amp; Discretization Details
              </h3>
              <ul className="grid grid-cols-1 gap-2 pt-1">
                {project.modelingHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elements & Materials Two-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                  Finite Element Formulations
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.elementTypes.map((el, idx) => (
                    <span key={idx} className="font-mono text-xs px-2.5 py-1 rounded bg-white text-[#002147] border border-slate-300 font-medium">
                      {el}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                  Constitutive Material Models
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.materialModels.map((mat, idx) => (
                    <span key={idx} className="font-mono text-xs px-2.5 py-1 rounded bg-white text-slate-800 border border-slate-300">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Findings */}
            <div className="space-y-2.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono border-b border-slate-100 pb-1">
                Engineering Findings &amp; Dynamic Performance Conclusions
              </h3>
              <ul className="space-y-2 pt-1">
                {project.keyFindings.map((finding, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-[#C49B3C] shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Automated Code Snippet */}
            {project.codeSnippet && (
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-[#002147]" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                      Simulation Script ({project.codeSnippet.fileName})
                    </h3>
                  </div>
                  <button
                    onClick={() => handleCopyCode(project.codeSnippet!.code)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-[#002147] transition-colors cursor-pointer border border-slate-300"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied' : 'Copy Script'}</span>
                  </button>
                </div>
                <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto text-left font-mono text-xs text-slate-200 leading-relaxed border border-slate-800">
                  <pre>{project.codeSnippet.code}</pre>
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-mono">
                Laboratory of Earthquake Engineering and Structural Dynamics (LGSDS)
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#002147] hover:bg-[#001733] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                Close Project Dossier
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox for Zooming Images / GIFs */}
      {activeLightboxImage && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightboxImage(null)}
        >
          <button 
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-slate-300 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={activeLightboxImage.url} 
              alt={activeLightboxImage.caption}
              className="max-h-[75vh] w-auto object-contain rounded shadow-2xl"
            />
            <div className="mt-4 text-center text-white max-w-2xl space-y-1">
              <span className="inline-block font-mono text-xs font-semibold text-[#C49B3C] bg-white/10 px-2 py-0.5 rounded">
                {activeLightboxImage.tag}
              </span>
              <p className="text-sm text-slate-200">
                {activeLightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
