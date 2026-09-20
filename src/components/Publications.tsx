import React, { useState } from 'react';
import { PUBLICATIONS } from '../data/portfolioData';
import { Publication } from '../types';
import { 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Quote
} from 'lucide-react';

export const Publications: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [copiedBibtex, setCopiedBibtex] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyBibtex = (pubId: string, bibtex?: string) => {
    if (!bibtex) return;
    navigator.clipboard.writeText(bibtex);
    setCopiedBibtex(pubId);
    setTimeout(() => setCopiedBibtex(null), 2000);
  };

  const journalCount = PUBLICATIONS.filter(p => p.type === 'journal').length;
  const conferenceCount = PUBLICATIONS.filter(p => p.type === 'conference').length;
  const thesisCount = PUBLICATIONS.filter(p => p.type === 'thesis').length;

  // Filter based on search and selected tab
  const filteredPubs = PUBLICATIONS.filter(pub => {
    const matchesType = selectedType === 'all' || pub.type === selectedType;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      pub.title.toLowerCase().includes(q) ||
      pub.venue.toLowerCase().includes(q) ||
      pub.authors.some(a => a.toLowerCase().includes(q)) ||
      pub.tags.some(t => t.toLowerCase().includes(q));
    return matchesType && matchesSearch;
  });

  const journalArticles = filteredPubs.filter(p => p.type === 'journal');
  const conferencePapers = filteredPubs.filter(p => p.type === 'conference');
  const thesesPapers = filteredPubs.filter(p => p.type === 'thesis');

  const formatAuthors = (authors: string[]) => {
    if (!authors || authors.length === 0) return '';
    return authors.map((author, i) => {
      const isUser = author.toLowerCase().includes('hannachi');
      return (
        <span key={i} className={isUser ? 'font-bold text-slate-900' : 'text-slate-600'}>
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
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002147] tracking-tight">
            Publications
          </h2>
          <div className="w-16 h-1 bg-[#C49B3C] mt-2 mb-3" />
          <p className="text-sm sm:text-base text-[#718096]">
            {PUBLICATIONS.length} peer-reviewed publications in journals, international earthquake engineering conferences (18WCEE, 18WCSI, ICRCE), and engineering theses.
          </p>
        </div>

        {/* Toolbar: Category Filters & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8">
          {/* Filter Buttons matching reference style */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-3.5 py-1 text-xs font-semibold rounded-xs border transition-all cursor-pointer ${
                selectedType === 'all'
                  ? 'bg-[#002147] border-[#002147] text-white'
                  : 'bg-white border-[#002147] text-[#002147] hover:bg-slate-50'
              }`}
            >
              All {PUBLICATIONS.length}
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

            {thesisCount > 0 && (
              <button
                onClick={() => setSelectedType('thesis')}
                className={`px-3.5 py-1 text-xs font-semibold rounded-xs border transition-all cursor-pointer ${
                  selectedType === 'thesis'
                    ? 'bg-[#002147] border-[#002147] text-white'
                    : 'bg-white border-[#002147] text-[#002147] hover:bg-slate-50'
                }`}
              >
                Theses {thesisCount}
              </button>
            )}
          </div>

          {/* Clean Search Input */}
          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#E2E8F0] rounded-xs focus:outline-hidden focus:border-[#C49B3C]"
            />
          </div>
        </div>

        {/* Publications List Grouped by Category */}
        <div className="space-y-10">
          
          {/* 1. Journal Articles */}
          {journalArticles.length > 0 && (
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#002147]">
                  Journal Articles
                </h3>
                <ChevronDown className="w-4 h-4 text-[#002147]" />
              </div>

              <div className="divide-y divide-slate-100">
                {journalArticles.map((pub) => {
                  globalIndex += 1;
                  const currentIndex = globalIndex;
                  const isExpanded = !!expandedAbstracts[pub.id];

                  return (
                    <div key={pub.id} className="py-4 sm:py-5 flex items-start gap-3 sm:gap-5">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-[#002147] pt-0.5 shrink-0">
                        [{currentIndex}]
                      </span>

                      <div className="flex-1 space-y-1 text-left">
                        <p className="text-xs sm:text-sm text-slate-600">
                          {formatAuthors(pub.authors)}, {pub.year}.
                        </p>

                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {pub.title}
                        </h4>

                        <p className="font-serif italic text-xs sm:text-sm text-slate-600">
                          {pub.venue}.
                        </p>

                        <div className="pt-1">
                          <button
                            onClick={() => toggleAbstract(pub.id)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#C49B3C] hover:text-[#a07b27] hover:underline cursor-pointer transition-colors"
                          >
                            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t border-slate-100 space-y-3">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/80 p-3.5 rounded border border-slate-100">
                              {pub.abstract}
                            </p>

                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              {pub.scholarUrl && (
                                <a
                                  href={pub.scholarUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#002147]/5 hover:bg-[#002147]/10 text-[#002147] text-xs font-semibold transition-colors"
                                >
                                  <Quote className="w-3 h-3 text-[#C49B3C]" />
                                  <span>Google Scholar</span>
                                  <ExternalLink className="w-3 h-3 text-slate-400" />
                                </a>
                              )}
                              {pub.doi && (
                                <a
                                  href={`https://doi.org/${pub.doi}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#002147]/5 hover:bg-[#002147]/10 text-[#002147] text-xs font-semibold transition-colors"
                                >
                                  <span>DOI: {pub.doi}</span>
                                  <ExternalLink className="w-3 h-3 text-slate-400" />
                                </a>
                              )}
                              {pub.bibtex && (
                                <button
                                  onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-slate-200 hover:border-[#C49B3C] text-slate-700 hover:text-[#002147] text-xs font-medium transition-colors cursor-pointer"
                                >
                                  {copiedBibtex === pub.id ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-600" />
                                      <span className="text-emerald-700 font-semibold">BibTeX Copied</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3 text-[#C49B3C]" />
                                      <span>Copy BibTeX</span>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                        )}
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
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#002147]">
                  Conference Papers
                </h3>
                <ChevronDown className="w-4 h-4 text-[#002147]" />
              </div>

              <div className="divide-y divide-slate-100">
                {conferencePapers.map((pub) => {
                  globalIndex += 1;
                  const currentIndex = globalIndex;
                  const isExpanded = !!expandedAbstracts[pub.id];

                  return (
                    <div key={pub.id} className="py-4 sm:py-5 flex items-start gap-3 sm:gap-5">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-[#002147] pt-0.5 shrink-0">
                        [{currentIndex}]
                      </span>

                      <div className="flex-1 space-y-1 text-left">
                        <p className="text-xs sm:text-sm text-slate-600">
                          {formatAuthors(pub.authors)}, {pub.year}.
                        </p>

                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {pub.title}
                        </h4>

                        <p className="font-serif italic text-xs sm:text-sm text-slate-600">
                          {pub.venue}.
                        </p>

                        <div className="pt-1">
                          <button
                            onClick={() => toggleAbstract(pub.id)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#C49B3C] hover:text-[#a07b27] hover:underline cursor-pointer transition-colors"
                          >
                            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t border-slate-100 space-y-3">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/80 p-3.5 rounded border border-slate-100">
                              {pub.abstract}
                            </p>

                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              {pub.scholarUrl && (
                                <a
                                  href={pub.scholarUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#002147]/5 hover:bg-[#002147]/10 text-[#002147] text-xs font-semibold transition-colors"
                                >
                                  <Quote className="w-3 h-3 text-[#C49B3C]" />
                                  <span>Google Scholar</span>
                                  <ExternalLink className="w-3 h-3 text-slate-400" />
                                </a>
                              )}
                              {pub.doi && (
                                <a
                                  href={`https://doi.org/${pub.doi}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#002147]/5 hover:bg-[#002147]/10 text-[#002147] text-xs font-semibold transition-colors"
                                >
                                  <span>DOI: {pub.doi}</span>
                                  <ExternalLink className="w-3 h-3 text-slate-400" />
                                </a>
                              )}
                              {pub.bibtex && (
                                <button
                                  onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-slate-200 hover:border-[#C49B3C] text-slate-700 hover:text-[#002147] text-xs font-medium transition-colors cursor-pointer"
                                >
                                  {copiedBibtex === pub.id ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-600" />
                                      <span className="text-emerald-700 font-semibold">BibTeX Copied</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3 text-[#C49B3C]" />
                                      <span>Copy BibTeX</span>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. Theses & Dissertations */}
          {thesesPapers.length > 0 && (
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#002147]">
                  Theses &amp; Dissertations
                </h3>
                <ChevronDown className="w-4 h-4 text-[#002147]" />
              </div>

              <div className="divide-y divide-slate-100">
                {thesesPapers.map((pub) => {
                  globalIndex += 1;
                  const currentIndex = globalIndex;
                  const isExpanded = !!expandedAbstracts[pub.id];

                  return (
                    <div key={pub.id} className="py-4 sm:py-5 flex items-start gap-3 sm:gap-5">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-[#002147] pt-0.5 shrink-0">
                        [{currentIndex}]
                      </span>

                      <div className="flex-1 space-y-1 text-left">
                        <p className="text-xs sm:text-sm text-slate-600">
                          {formatAuthors(pub.authors)}, {pub.year}.
                        </p>

                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                          {pub.title}
                        </h4>

                        <p className="font-serif italic text-xs sm:text-sm text-slate-600">
                          {pub.venue}.
                        </p>

                        <div className="pt-1">
                          <button
                            onClick={() => toggleAbstract(pub.id)}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#C49B3C] hover:text-[#a07b27] hover:underline cursor-pointer transition-colors"
                          >
                            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t border-slate-100 space-y-3">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/80 p-3.5 rounded border border-slate-100">
                              {pub.abstract}
                            </p>

                            <div className="flex flex-wrap items-center gap-2 pt-1">
                              {pub.scholarUrl && (
                                <a
                                  href={pub.scholarUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#002147]/5 hover:bg-[#002147]/10 text-[#002147] text-xs font-semibold transition-colors"
                                >
                                  <Quote className="w-3 h-3 text-[#C49B3C]" />
                                  <span>Google Scholar</span>
                                  <ExternalLink className="w-3 h-3 text-slate-400" />
                                </a>
                              )}
                              {pub.bibtex && (
                                <button
                                  onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-slate-200 hover:border-[#C49B3C] text-slate-700 hover:text-[#002147] text-xs font-medium transition-colors cursor-pointer"
                                >
                                  {copiedBibtex === pub.id ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-600" />
                                      <span className="text-emerald-700 font-semibold">BibTeX Copied</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3 text-[#C49B3C]" />
                                      <span>Copy BibTeX</span>
                                    </>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                        )}
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
