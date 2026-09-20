import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const researchAndIndustryItems = EXPERIENCES.filter(
    item => item.type === 'industry' || item.type === 'teaching' || item.id === 'exp-phd'
  );

  return (
    <section id="experience" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Professional &amp; Research Experience
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2 mb-3" />
          <p className="text-xs sm:text-sm text-slate-500">
            Doctoral research positions, academic appointments, and advanced structural earthquake engineering consulting.
          </p>
        </div>

        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {researchAndIndustryItems.map((item) => (
            <div key={item.id} className="py-5 text-left">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <span className="font-mono text-xs font-semibold text-[#C49B3C] shrink-0">
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-slate-600 mb-2">
                <span className="text-[#002147] font-semibold">{item.role}</span> &middot; {item.organization} ({item.location})
              </p>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-4 list-disc marker:text-[#C49B3C]">
                {Array.isArray(item.description) ? (
                  item.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed">
                      {desc}
                    </li>
                  ))
                ) : (
                  <li className="leading-relaxed">{item.description}</li>
                )}
              </ul>

              {item.skillsUsed && (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {item.skillsUsed.map(skill => (
                    <span key={skill} className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
