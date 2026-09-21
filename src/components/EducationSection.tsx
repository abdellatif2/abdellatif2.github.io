import React from 'react';
import { EDUCATION_HISTORY } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2" />
        </div>

        {/* Straightforward Academic List */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {EDUCATION_HISTORY.map((edu) => (
            <div key={edu.id} className="py-5 text-left space-y-1.5">
              {/* Degree Title & Dates */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-bold text-slate-900">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs font-semibold text-[#C49B3C] shrink-0">
                  {edu.period}
                </span>
              </div>

              {/* Institution and Location */}
              <p className="text-xs sm:text-sm font-medium text-slate-700">
                {edu.institution} &middot; {edu.location}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
