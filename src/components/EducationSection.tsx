import React from 'react';
import { EDUCATION_HISTORY } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="academic-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="mb-2">
          <h2 className="academic-section-title">
            Education
          </h2>
          <p className="mt-1 text-sm text-[#718096]">
            Academic degrees and formal engineering diplomas from École Nationale Polytechnique (ENP Algiers).
          </p>
        </div>

        <div className="mt-8 relative border-l-2 border-[#E2E8F0] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {EDUCATION_HISTORY.map((edu) => (
            <div key={edu.id} className="relative group">
              {/* Timeline marker with gold accent */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#C49B3C] group-hover:bg-[#C49B3C] transition-colors" />

              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="font-mono text-xs text-[#C49B3C] font-semibold">
                  {edu.period}
                </span>

                {edu.honors && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-[#C49B3C] border border-[#C49B3C]/30 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>{edu.honors}</span>
                  </span>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#002147] group-hover:text-[#003366] transition-colors">
                {edu.degree}
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-[#4A5568]">
                {edu.institution} &middot; <span className="font-normal text-[#718096]">{edu.location}</span>
              </p>

              {edu.thesisTitle && (
                <div className="mt-2 p-3 bg-slate-50 border border-slate-200 rounded text-xs text-[#4A5568]">
                  <span className="font-mono font-bold text-[#002147] uppercase text-[10px] block mb-0.5">
                    Thesis Dissertation:
                  </span>
                  <p className="font-serif italic text-slate-800">
                    &ldquo;{edu.thesisTitle}&rdquo;
                  </p>
                  {edu.advisors && (
                    <p className="mt-1 text-[11px] text-[#718096]">
                      Laboratory: {edu.advisors}
                    </p>
                  )}
                </div>
              )}

              <p className="mt-2 text-xs sm:text-sm text-[#718096] leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
