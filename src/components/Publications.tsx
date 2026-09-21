import React, { useState } from 'react';
import { PUBLICATIONS } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

export const Publications: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  // Filter out theses and filter by type
  const activePubs = PUBLICATIONS.filter(pub => pub.type !== 'thesis');
  const journalCount = activePubs.filter(p => p.type === 'journal').length;
  const conferenceCount = activePubs.filter(p => p.type === 'conference').length;

  const filteredPubs = activePubs.filter(pub => {
    if (selectedType === 'all') return true;
    return pub.type === selectedType;
  });

  // Sort chronologically (newest first: 2025 down to 2023)
  const sortedPubs = [...filteredPubs].sort((a, b) => b.year - a.year);

  const journalArticles = sortedPubs.filter(p => p.type === 'journal');
  const conferencePapers = sortedPubs.filter(p => p.type === 'conference');

  const formatAuthors = (authors: string[]) => {
    if (!authors || authors.length === 0) return '';
    return authors.map((author, i) => {
      const isUser = author.toLowerCase().includes('hannachi');
      return (
        <span key={i} className={isUser ? 'font-bold text-slate-900' : 'text-slate-700'}>
          {author}{i < authors.length - 1 ? ', ' : ''}
        </span>
      );
    });
  };

  let globalIndex = 0;

  return (
    <section id="publications" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Publications
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2 mb-3" />
        </div>

        {/* Filter Buttons (No search box) */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-3.5 py-1 text-xs font-semibold rounded-xs border transition-all cursor-pointer ${
              selectedType === 'all'
                ? 'bg-[#002147] border-[#002147] text-white'
                : 'bg-white border-[#002147] text-[#002147] hover:bg-slate-50'
            }`}
          >
            All {activePubs.length}
          </button>

          <button
            onClick={() => setSelectedType('journal')}
            className={`px-3.5 py-1 text-xs font-semibold rounded-xs border transition-all cursor-pointer ${
              selectedType === 'journal'
                ? 'bg-[#002147] border-[#002147] text-white'
                : 'bg-white border-[#002147] text-[#002147] hover:bg-slate-50'
            }`}
          >
            Journals {journalCount}
          </button>

          <button
            onClick={() => setSelectedType('conference')}
            className={`px-3.5 py-1 text-xs font-semibold rounded-xs border transition-all cursor-pointer ${
              selectedType === 'conference'
                ? 'bg-[#002147] border-[#002147] text-white'
                : 'bg-white border-[#002147] text-[#002147] hover:bg-slate-50'
            }`}
          >
            Conferences {conferenceCount}
          </button>
        </div>

        {/* Publications List Grouped by Category */}
        <div className="space-y-10">
          
          {/* 1. Journal Articles */}
          {journalArticles.length > 0 && (
            <div>
              <div className="border-b border-slate-200 pb-2 mb-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#002147]">
                  Journal Articles
                </h3>
              </div>

              <div className="space-y-6">
                {journalArticles.map((pub) => {
                  globalIndex += 1;
                  const currentIndex = globalIndex;

                  return (
                    <div key={pub.id} className="flex items-start gap-3 sm:gap-5 pb-4 border-b border-slate-100 last:border-b-0">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-[#002147] pt-0.5 shrink-0">
                        [{currentIndex}]
                      </span>

                      <div className="flex-1 space-y-1 text-left">
                        {/* Authors and Year on the right */}
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-xs sm:text-sm text-slate-700">
                            {formatAuthors(pub.authors)}
                          </p>
                          <span className="font-mono text-xs font-bold text-[#002147] px-2 py-0.5 bg-slate-100 rounded border border-slate-200 shrink-0">
                            {pub.year}
                          </span>
                        </div>

                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {pub.title}
                        </h4>

                        <p className="font-serif italic text-xs sm:text-sm text-slate-600">
                          {pub.venue}
                        </p>

                        {/* DOI or Link directly under */}
                        <div className="pt-1.5 flex items-center gap-2">
                          {pub.doi ? (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#002147] hover:text-[#C49B3C] hover:underline transition-colors"
                            >
                              <span className="font-semibold text-slate-500">DOI:</span>
                              <span>{pub.doi}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          ) : (
                            <a
                              href={pub.scholarUrl || 'https://www.researchgate.net/profile/Abdellatif-Hannachi'}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#002147] hover:text-[#C49B3C] hover:underline transition-colors"
                            >
                              <span className="font-semibold text-slate-500">Link:</span>
                              <span>ResearchGate Access</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. Conference Papers */}
          {conferencePapers.length > 0 && (
            <div>
              <div className="border-b border-slate-200 pb-2 mb-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#002147]">
                  Conference Papers
                </h3>
              </div>

              <div className="space-y-6">
                {conferencePapers.map((pub) => {
                  globalIndex += 1;
                  const currentIndex = globalIndex;

                  return (
                    <div key={pub.id} className="flex items-start gap-3 sm:gap-5 pb-4 border-b border-slate-100 last:border-b-0">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-[#002147] pt-0.5 shrink-0">
                        [{currentIndex}]
                      </span>

                      <div className="flex-1 space-y-1 text-left">
                        {/* Authors and Year on the right */}
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-xs sm:text-sm text-slate-700">
                            {formatAuthors(pub.authors)}
                          </p>
                          <span className="font-mono text-xs font-bold text-[#002147] px-2 py-0.5 bg-slate-100 rounded border border-slate-200 shrink-0">
                            {pub.year}
                          </span>
                        </div>

                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {pub.title}
                        </h4>

                        <p className="font-serif italic text-xs sm:text-sm text-slate-600">
                          {pub.venue}
                        </p>

                        {/* DOI or Link directly under */}
                        <div className="pt-1.5 flex items-center gap-2">
                          {pub.doi ? (
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#002147] hover:text-[#C49B3C] hover:underline transition-colors"
                            >
                              <span className="font-semibold text-slate-500">DOI:</span>
                              <span>{pub.doi}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          ) : (
                            <a
                              href={pub.scholarUrl || 'https://www.researchgate.net/profile/Abdellatif-Hannachi'}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#002147] hover:text-[#C49B3C] hover:underline transition-colors"
                            >
                              <span className="font-semibold text-slate-500">Link:</span>
                              <span>ResearchGate Access</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
