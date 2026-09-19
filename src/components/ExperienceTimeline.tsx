import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'education' | 'teaching' | 'industry'>('all');

  const filteredItems = EXPERIENCES.filter(
    item => filter === 'all' || item.type === filter
  );

  return (
    <section id="experience" className="border-b border-slate-200 pb-14">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Academic Background & Experience
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Doctoral research at École Nationale Polytechnique (ENP), pedagogy, and structural engineering consulting.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 self-start sm:self-auto">
          {[
            { id: 'all', label: 'All' },
            { id: 'education', label: 'Degrees' },
            { id: 'teaching', label: 'Teaching' },
            { id: 'industry', label: 'Consulting' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-2.5 py-1 text-xs font-semibold rounded border transition-colors cursor-pointer ${
                filter === tab.id
                  ? 'bg-slate-900 border-slate-900 text-white'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Experience List */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-4 sm:p-5 rounded-lg bg-white border border-slate-200 space-y-2 hover:border-slate-300 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-sky-800 mr-2">
                  {item.role}
                </span>
                <span className="text-xs font-mono text-slate-500">
                  {item.organization} &bull; {item.location}
                </span>
              </div>

              <span className="text-xs font-mono text-slate-500 font-medium">
                {item.period}
              </span>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              {item.title}
            </h3>

            <ul className="space-y-1 pt-1">
              {item.description.map((desc, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>

            {item.skillsUsed && (
              <div className="flex flex-wrap items-center gap-1 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-mono uppercase text-slate-400 mr-1">Applied:</span>
                {item.skillsUsed.map((s, idx) => (
                  <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Academic Service Note */}
      <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div>
          <span className="font-bold text-slate-900 block font-mono">Academic Service & Peer Review</span>
          <span className="text-slate-600">
            Invited peer reviewer for international earthquake engineering & structural mechanics journals (Elsevier, Springer) & Student Member of IAEE.
          </span>
        </div>
        <span className="px-2.5 py-1 rounded bg-white border border-slate-300 font-mono font-semibold text-slate-800 shrink-0 text-center">
          12+ Reviews Completed
        </span>
      </div>
    </section>
  );
};
