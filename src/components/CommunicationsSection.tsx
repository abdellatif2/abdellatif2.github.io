import React from 'react';
import { COMMUNICATIONS } from '../data/portfolioData';

export const CommunicationsSection: React.FC = () => {
  return (
    <section id="communications" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Scientific Communications
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2 mb-3" />
          <p className="text-xs sm:text-sm text-slate-500">
            Oral presentations and technical lectures at world conferences and structural engineering symposiums.
          </p>
        </div>

        {/* Clean Flat List matching reference */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          {COMMUNICATIONS.map((comm) => {
            const isOral = comm.type.toLowerCase().includes('oral');

            return (
              <div
                key={comm.id}
                className="py-4 sm:py-5 flex items-start gap-4 sm:gap-6"
              >
                {/* Type Badge (Dark Navy ORAL / Subtle POSTER) */}
                <div className="pt-0.5 shrink-0">
                  <span className={`inline-block px-3 py-1 rounded text-[11px] font-mono font-bold tracking-wider text-center min-w-[72px] uppercase ${
                    isOral 
                      ? 'bg-[#002147] text-white shadow-2xs' 
                      : 'bg-sky-50 text-sky-800 border border-sky-200'
                  }`}>
                    {isOral ? 'ORAL' : 'POSTER'}
                  </span>
                </div>

                {/* Event & Presentation Details */}
                <div className="flex-1 space-y-1 text-left">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                    {comm.event}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium">
                    {comm.date} &middot; {comm.location}
                  </p>

                  <p className="text-xs sm:text-sm font-serif italic text-slate-700 leading-snug pt-0.5">
                    "{comm.title}"
                  </p>

                  {comm.details && (
                    <p className="text-xs text-slate-500 leading-relaxed pt-1">
                      {comm.details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
