import React, { useState } from 'react';
import { PUBLICATIONS } from '../data/portfolioData';
import { Publication } from '../types';
import { 
  BookOpen, 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  X,
  Quote
} from 'lucide-react';

export const Publications: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
  const [bibtexModalPub, setBibtexModalPub] = useState<Publication | null>(null);
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
  };

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

  const handleCopyBibtex = (bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2000);
  };

  return (
    <section id="publications" className="border-b border-slate-200 pb-14">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Publications & Refereed Proceedings
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Journal articles, international conference papers (18WCEE, COMPDYN), and preprints.
          </p>
        </div>

        <div className="text-xs font-mono text-slate-500 self-start sm:self-auto bg-slate-50 px-3 py-1.5 rounded border border-slate-200">
          <strong className="text-slate-900">{PUBLICATIONS.length}</strong> Total Scholarly Items
        </div>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {[
            { id: 'all', label: 'All Publications' },
            { id: 'journal', label: 'Journal Articles' },
            { id: 'conference', label: 'Conferences (18WCEE / COMPDYN)' },
            { id: 'preprint', label: 'Preprints' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedType(tab.id)}
              className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedType === tab.id
                  ? 'bg-slate-900 text-white font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search keywords, OpenSees, year..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1 bg-white border border-slate-300 rounded text-xs text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
          />
        </div>

      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {filteredPubs.length === 0 ? (
          <div className="text-center py-10 text-xs text-slate-500">
            No papers matched your search criteria.
          </div>
        ) : (
          filteredPubs.map((pub, idx) => {
            const isExpanded = expandedAbstracts[pub.id] || false;
            const isJournal = pub.type === 'journal';
            const isConference = pub.type === 'conference';

            return (
              <div
                key={pub.id}
                className="p-4 sm:p-5 rounded-lg bg-white border border-slate-200 space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1 flex-1">
                    
                    {/* Badge row */}
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className={`px-2 py-0.5 rounded font-semibold text-[10px] uppercase ${
                        isJournal 
                          ? 'bg-sky-100 text-sky-800 border border-sky-200' 
                          : isConference 
                          ? 'bg-slate-100 text-slate-800 border border-slate-300' 
                          : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}>
                        {isJournal ? 'Journal' : isConference ? 'Conference' : 'Preprint'}
                      </span>
                      <span className="text-slate-500 font-bold">{pub.year}</span>
                      {pub.featured && (
                        <span className="text-amber-700 text-[10px] font-bold">
                          ★ Featured
                        </span>
                      )}
                    </div>

                    {/* Paper Title */}
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {pub.title}
                    </h3>

                    {/* Authors */}
                    <p className="text-xs text-slate-600">
                      {pub.authors.map((author, aIdx) => {
                        const isSelf = author.includes('Hannachi');
                        return (
                          <span key={aIdx}>
                            <span className={isSelf ? 'font-bold text-slate-900 underline' : ''}>
                              {author}
                            </span>
                            {aIdx < pub.authors.length - 1 ? ', ' : ''}
                          </span>
                        );
                      })}
                    </p>

                    {/* Venue / Journal Name */}
                    <p className="text-xs italic text-slate-700">
                      {pub.venue}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {pub.tags.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                          #{t}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Actions (BibTeX, DOI, Abstract) */}
                  <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                    <button
                      onClick={() => setBibtexModalPub(pub)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-mono transition-colors cursor-pointer"
                      title="View BibTeX"
                    >
                      <Quote className="w-3 h-3 text-slate-600" />
                      <span>BibTeX</span>
                    </button>

                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-mono transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>DOI</span>
                      </a>
                    )}

                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="inline-flex items-center gap-1 px-2 py-1 text-slate-500 hover:text-slate-800 text-xs font-medium transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide' : 'Abstract'}</span>
                      {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  </div>

                </div>

                {/* Abstract Accordion */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded">
                    <span className="font-bold text-slate-800 block mb-0.5">Abstract:</span>
                    {pub.abstract}
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

      {/* BibTeX Modal */}
      {bibtexModalPub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-2xs">
          <div className="bg-white rounded-lg max-w-lg w-full p-5 border border-slate-300 shadow-xl space-y-3">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="text-xs font-mono font-bold text-slate-900 flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5 text-sky-600" />
                BibTeX Citation
              </span>
              <button
                onClick={() => setBibtexModalPub(null)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 truncate">
              {bibtexModalPub.title}
            </p>

            <pre className="p-3 bg-slate-900 text-slate-100 font-mono text-xs rounded overflow-x-auto leading-relaxed max-h-56">
              <code>{bibtexModalPub.bibtex}</code>
            </pre>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setBibtexModalPub(null)}
                className="px-3 py-1.5 rounded text-xs text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => handleCopyBibtex(bibtexModalPub.bibtex)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
              >
                {copiedBibtex ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedBibtex ? 'Copied!' : 'Copy BibTeX'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
