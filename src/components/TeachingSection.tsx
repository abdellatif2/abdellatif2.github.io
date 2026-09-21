import React from 'react';

export const TeachingSection: React.FC = () => {
  return (
    <section id="teaching" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Teaching &amp; Student Supervision
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2" />
        </div>

        {/* Straightforward Content List */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          
          {/* Teaching Assistant */}
          <div className="py-5 text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-base font-bold text-slate-900">
                Teaching Assistant &middot; Civil Engineering Department
              </h3>
              <span className="font-mono text-xs font-semibold text-[#C49B3C] shrink-0">
                2024 — 2026
              </span>
            </div>

            <p className="text-xs sm:text-sm font-medium text-slate-700">
              École Nationale Polytechnique (ENP) &middot; Algiers, Algeria
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-0.5">
              Teaching assistant in the <strong className="font-semibold text-slate-800">Strength of Materials Laboratory</strong>, assisting with and conducting laboratory experiments for civil engineering students.
            </p>
          </div>

          {/* Master's Thesis Supervision */}
          <div className="py-5 text-left space-y-3">
            <h3 className="text-base font-bold text-slate-900">
              Master’s Thesis Supervision
            </h3>

            <div className="space-y-4">
              {/* 2025 Thesis */}
              <div className="space-y-1">
                <span className="font-mono text-xs font-semibold text-[#C49B3C] block">
                  2025
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-slate-800 leading-relaxed">
                  &ldquo;Hybrid AI-Based Sensor Optimization for Structural Health Monitoring of Multi-Story Buildings — Case Study: HQ Tower R+12&rdquo;
                </p>
              </div>

              {/* 2026 Thesis */}
              <div className="space-y-1">
                <span className="font-mono text-xs font-semibold text-[#C49B3C] block">
                  2026
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-slate-800 leading-relaxed">
                  &ldquo;Structural Health Monitoring of Steel Space Frame Connections: A Deep Learning Approach for Automated Damage Detection and Localization&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
