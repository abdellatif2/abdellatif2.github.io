import React from 'react';
import { SOFTWARE_SKILLS } from '../data/portfolioData';
import { Layers, Cpu, FileText } from 'lucide-react';

export const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="border-b border-slate-200 pb-14">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Computational & Engineering Skills
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Finite element software, scientific programming, AI architectures, and international seismic codes.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="space-y-8">
        {SOFTWARE_SKILLS.map((cat, idx) => (
          <div key={idx} className="space-y-3">
            
            <div className="flex items-center gap-2 border-b border-slate-200 pb-1.5">
              {idx === 0 ? <Layers className="w-4 h-4 text-sky-800" /> :
               idx === 1 ? <Cpu className="w-4 h-4 text-sky-800" /> :
               <FileText className="w-4 h-4 text-sky-800" />}
              <h3 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
                {cat.category}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-lg bg-white border border-slate-200 space-y-1 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 font-mono">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                      {skill.level.split(' (')[0]}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>

                  {skill.level.includes('(') && (
                    <span className="text-[10px] font-mono text-slate-400 block pt-1">
                      {skill.level.substring(skill.level.indexOf('('))}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
