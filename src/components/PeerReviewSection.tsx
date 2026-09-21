import React from 'react';

export const PeerReviewSection: React.FC = () => {
  return (
    <section id="peer-review" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Peer Review Activities
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2 mb-3" />
          <p className="text-xs sm:text-sm text-slate-500">
            Manuscript evaluation and scientific review contributions for indexed international journals.
          </p>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600">
          <p className="leading-relaxed">
            I served as a peer reviewer for international scientific journals, including:
          </p>

          <ul className="space-y-2 pl-4 list-disc marker:text-[#C49B3C]">
            <li className="font-medium text-slate-900">
              Journal of Building Pathology and Rehabilitation <span className="text-[11px] font-mono font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 ml-1.5">(Q2)</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};
