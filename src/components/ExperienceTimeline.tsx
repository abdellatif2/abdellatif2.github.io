import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Professional &amp; Research Experience
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2" />
        </div>

        {/* Straightforward Professional Layout */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {EXPERIENCES.map((item) => (
            <div key={item.id} className="py-5 text-left space-y-2">
              {/* Job Title & Dates */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <span className="font-mono text-xs font-semibold text-[#C49B3C] shrink-0">
                  {item.period}
                </span>
              </div>

              {/* Organization and Location */}
              <p className="text-xs sm:text-sm font-medium text-slate-700">
                {item.organization} &middot; {item.location}
              </p>

              {/* Concise Bullet Points */}
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-4 list-disc marker:text-[#C49B3C] pt-0.5">
                {Array.isArray(item.description) ? (
                  item.description.map((bullet, i) => (
                    <li key={i} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))
                ) : (
                  <li className="leading-relaxed">{item.description}</li>
                )}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
