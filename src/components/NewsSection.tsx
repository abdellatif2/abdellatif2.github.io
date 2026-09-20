import React from 'react';
import { NEWS_ITEMS } from '../data/portfolioData';
import { Calendar, ArrowRight, Bell, Tag } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'Publication':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      case 'Field Testing':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Conference':
        return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'Software':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Award':
        return 'bg-yellow-50 text-yellow-900 border-yellow-300';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="news" className="academic-section border-t border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="flex items-center justify-between gap-4 mb-2">
          <h2 className="academic-section-title">
            News &amp; Updates
          </h2>
          <span className="text-xs font-mono text-[#718096] hidden sm:inline-block">
            Chronological Academic Feed
          </span>
        </div>

        <div className="mt-8 space-y-4">
          {NEWS_ITEMS.map((item) => (
            <div 
              key={item.id}
              className="p-4 sm:p-5 rounded-lg bg-white border border-[#E2E8F0] hover:border-[#C49B3C]/50 transition-all shadow-2xs group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#718096] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C49B3C]" />
                    <span>{item.date}</span>
                  </span>
                  <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded border ${getBadgeStyle(item.category)}`}>
                    {item.category}
                  </span>
                </div>

                {item.link && (
                  <a 
                    href={item.link.url}
                    className="text-xs font-semibold text-[#002147] group-hover:text-[#C49B3C] flex items-center gap-1 transition-colors"
                  >
                    <span>{item.link.text}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-[#002147] mb-1.5 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
