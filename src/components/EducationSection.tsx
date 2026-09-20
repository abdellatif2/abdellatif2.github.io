import React from 'react';
import { EDUCATION_HISTORY } from '../data/portfolioData';
import { Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2 mb-3" />
          <p className="text-xs sm:text-sm text-slate-500">
            Academic degrees and formal engineering diplomas from École Nationale Polytechnique (ENP Algiers).
          </p>
        </div>

        {/* Flat Academic List matching other sections */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {EDUCATION_HISTORY.map((edu) => (
            <div key={edu.id} className="py-5 text-left">
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                  {edu.honors && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-50 text-[#C49B3C] border border-[#C49B3C]/30 inline-flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>{edu.honors}</span>
                    </span>
                  )}
                </div>

                <span className="font-mono text-xs font-semibold text-[#C49B3C] shrink-0">
                  {edu.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-slate-600 mb-2">
                <span className="text-[#002147] font-semibold">{edu.institution}</span> &middot; {edu.location}
              </p>

              {edu.thesisTitle && (
                <div className="mt-2 text-xs sm:text-sm text-slate-600 space-y-0.5">
                  <span className="font-mono text-[11px] uppercase font-bold text-slate-500 block">
                    Thesis Dissertation:
                  </span>
                  <p className="font-serif italic text-slate-800">
                    &ldquo;{edu.thesisTitle}&rdquo;
                  </p>
                  {edu.advisors && (
                    <p className="text-xs text-slate-500">
                      Laboratory: {edu.advisors}
                    </p>
                  )}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
