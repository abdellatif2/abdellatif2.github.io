import React from 'react';

export const PeerReviewSection: React.FC = () => {
  return (
    <section id="peer-review" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002147] tracking-tight">
          Peer Review Activities
        </h2>
        <div className="w-16 h-1 bg-[#C49B3C] mt-2 mb-6" />

        <div className="space-y-4 text-slate-800 text-sm sm:text-base">
          <p className="leading-relaxed text-slate-700">
            I serve as a peer reviewer for international scientific journals, including:
          </p>

          <ul className="space-y-2.5 pl-5 list-disc marker:text-[#C49B3C]">
            <li className="font-medium text-slate-900">
              Scientific Reports <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 ml-1.5">(Q1)</span>
            </li>
            <li className="font-medium text-slate-900">
              BMC Medical Research Methodology <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 ml-1.5">(Q1)</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};
