import React from 'react';
import { TEACHING_ACTIVITIES } from '../data/portfolioData';

export const TeachingSection: React.FC = () => {
  return (
    <section id="teaching" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Teaching &amp; Supervision
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2 mb-3" />
          <p className="text-xs sm:text-sm text-slate-500">
            85+ hours of university-level lecture tutorials and computational finite element lab sessions at École Nationale Polytechnique (ENP Algiers).
          </p>
        </div>

        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {TEACHING_ACTIVITIES.map((item) => (
            <div key={item.id} className="py-5 text-left">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  {item.course}
                </h3>
                <span className="font-mono text-xs font-semibold text-[#C49B3C] shrink-0">
                  {item.period} &middot; {item.hours}
                </span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-slate-600 mb-2">
                <span className="text-[#002147] font-semibold">{item.role}</span> &middot; {item.level} ({item.institution})
              </p>

              <div className="text-xs sm:text-sm text-slate-600">
                <span className="font-mono text-[11px] uppercase font-bold text-slate-500 block mb-1">
                  Core Topics Covered:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-4 list-disc marker:text-[#C49B3C]">
                  {item.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="leading-snug">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
