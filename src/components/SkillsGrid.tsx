import React from 'react';
import { SOFTWARE_SKILLS } from '../data/portfolioData';

export const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002147] tracking-tight">
            Computational &amp; FEA Stack
          </h2>
          <div className="w-16 h-1 bg-[#C49B3C] mt-2 mb-3" />
          <p className="text-sm sm:text-base text-[#718096]">
            Finite element solvers, scientific programming languages, machine learning surrogate frameworks, and seismic codes.
          </p>
        </div>

        {/* Categories formatted as flat academic lists without boxed cards */}
        <div className="space-y-8">
          {SOFTWARE_SKILLS.map((cat, idx) => (
            <div key={idx} className="space-y-2">
              
              {/* Category Subheader */}
              <div className="border-b border-slate-200 pb-2">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#002147]">
                  {cat.category}
                </h3>
              </div>

              {/* Flat list with hairline dividers */}
              <div className="divide-y divide-slate-100">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-6 text-left"
                  >
                    {/* Tool Name & Level */}
                    <div className="sm:w-64 shrink-0">
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {skill.name}
                      </h4>
                      <span className="text-[11px] font-mono text-[#C49B3C] block mt-0.5 font-medium">
                        {skill.level}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-1 pt-0.5">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
