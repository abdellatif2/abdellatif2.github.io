import React from 'react';
import { AWARDS_HONORS } from '../data/portfolioData';
import { Trophy, Award, Medal, Star, Sparkles } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="academic-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="mb-2">
          <h2 className="academic-section-title">
            Awards &amp; Honors
          </h2>
          <p className="mt-1 text-sm text-[#718096]">
            Recognitions for academic standing, competitive fellowships, and structural research contributions.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {AWARDS_HONORS.map((award) => (
            <div
              key={award.id}
              className="p-5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[#C49B3C]/60 transition-all shadow-2xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-50 border border-[#C49B3C]/30 flex items-center justify-center text-[#C49B3C] group-hover:bg-[#C49B3C] group-hover:text-white transition-colors">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#C49B3C]">
                    {award.year}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#002147] group-hover:text-[#003366] transition-colors leading-snug">
                  {award.title}
                </h3>

                <p className="mt-1 text-xs font-serif italic text-[#718096]">
                  {award.issuer}
                </p>

                <p className="mt-2 text-xs text-[#4A5568] leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
