import React, { useState } from 'react';
import { NUMERICAL_MODELS } from '../data/portfolioData';
import { NumericalModel } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  Layers, 
  Maximize2, 
  ExternalLink
} from 'lucide-react';

export const NumericalModels: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<NumericalModel | null>(null);

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
            Finite element models, structural dynamics analyses, and computational simulations developed in SAP2000 and OpenSees.
          </p>
        </div>

        {/* Balanced Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NUMERICAL_MODELS.map((model, idx) => {
            // Find thumbnail image
            const thumbnail = model.images && model.images.length > 0 ? model.images[0] : null;

            return (
              <div 
                key={model.id}
                onClick={() => setActiveModalProject(model)}
                className="group relative flex flex-col bg-white rounded-xl border border-slate-200 hover:border-[#002147] hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden text-left"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveModalProject(model);
                  }
                }}
              >
                {/* Card Image Thumbnail */}
                <div className="relative h-48 w-full bg-slate-950 overflow-hidden flex items-center justify-center">
                  {thumbnail ? (
                    <img 
                      src={thumbnail.url} 
                      alt={model.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-slate-400">
                      <Layers className="w-8 h-8" />
                    </div>
                  )}

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-[#002147]/90 text-white shadow-xs">
                      {model.software}
                    </span>
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-[#002147]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#002147] text-xs font-bold px-3 py-1.5 rounded-lg shadow-md inline-flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" />
                      Open Full Dossier
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    {/* Index & Category */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#002147]">
                        [{idx + 1}] {model.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#002147] transition-colors leading-snug line-clamp-2">
                      {model.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {model.description}
                    </p>
                  </div>

                  {/* Bottom Area: Action Link */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between pt-1">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#002147] group-hover:text-[#C49B3C] transition-colors">
                        <span>View Project Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Click to view
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Full Project Modal Window */}
      <ProjectModal 
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
