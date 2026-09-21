import React from 'react';

export const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2" />
        </div>

        {/* Straightforward categories without badges, bars, or scores */}
        <div className="divide-y divide-slate-100 border-t border-slate-100">
          
          {/* Structural Engineering */}
          <div className="py-5 text-left space-y-2.5">
            <h3 className="text-base font-bold text-slate-900">
              Structural Engineering
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-4 list-disc marker:text-[#C49B3C]">
              <li>Structural analysis and design of reinforced concrete and steel structures</li>
              <li>Seismic design and assessment of existing structures</li>
              <li>Nonlinear static analysis and pushover analysis</li>
              <li>Structural dynamics and modal analysis</li>
              <li>Seismic retrofitting and strengthening</li>
              <li>Finite element modeling</li>
            </ul>
          </div>

          {/* Software & Numerical Modeling */}
          <div className="py-5 text-left space-y-2.5">
            <h3 className="text-base font-bold text-slate-900">
              Software &amp; Numerical Modeling
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-4 list-disc marker:text-[#C49B3C]">
              <li><strong className="font-semibold text-slate-900">ETABS</strong> &mdash; structural analysis and seismic design</li>
              <li><strong className="font-semibold text-slate-900">SAP2000</strong> &mdash; structural analysis, finite element modeling, and seismic assessment</li>
              <li><strong className="font-semibold text-slate-900">OpenSees / OpenSeesPy</strong> &mdash; nonlinear structural and dynamic modeling</li>
              <li><strong className="font-semibold text-slate-900">MATLAB</strong> &mdash; numerical analysis and signal processing</li>
              <li><strong className="font-semibold text-slate-900">Python</strong> &mdash; scientific computing, automation, data analysis, and machine learning</li>
            </ul>
          </div>

          {/* AI & Computational Methods */}
          <div className="py-5 text-left space-y-2.5">
            <h3 className="text-base font-bold text-slate-900">
              AI &amp; Computational Methods
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-4 list-disc marker:text-[#C49B3C]">
              <li>Machine learning for structural engineering</li>
              <li>Graph neural networks (GNNs)</li>
              <li>Genetic algorithms and evolutionary optimization</li>
              <li>Structural health monitoring and vibration-based damage detection</li>
              <li>Automated structural design and analysis</li>
              <li>Data-driven structural engineering</li>
            </ul>
          </div>

          {/* Codes & Standards */}
          <div className="py-5 text-left space-y-2.5">
            <h3 className="text-base font-bold text-slate-900">
              Codes &amp; Standards
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-4 list-disc marker:text-[#C49B3C]">
              <li><strong className="font-semibold text-slate-900">RPA2024 / RPA99</strong> &mdash; Algerian seismic design code</li>
              <li><strong className="font-semibold text-slate-900">Eurocode 8</strong> &mdash; seismic design and assessment</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="py-5 text-left space-y-2.5">
            <h3 className="text-base font-bold text-slate-900">
              Languages
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-4 list-disc marker:text-[#C49B3C]">
              <li><strong className="font-semibold text-slate-900">Arabic:</strong> Native</li>
              <li><strong className="font-semibold text-slate-900">English:</strong> C1</li>
              <li><strong className="font-semibold text-slate-900">French:</strong> C1</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
