import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, BookOpen, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 py-10 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
          <div>
            <span className="font-bold text-slate-900 text-sm block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-slate-500 font-mono text-xs">
              {PERSONAL_INFO.institution} &bull; {PERSONAL_INFO.department}
            </span>
          </div>

          <div className="flex items-center gap-4 font-mono">
            <a href="#hero" className="hover:text-slate-900">About</a>
            <a href="#research" className="hover:text-slate-900">Research</a>
            <a href="#models" className="hover:text-slate-900">Numerical Models</a>
            <a href="#publications" className="hover:text-slate-900">Publications</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded border border-slate-300 hover:bg-white text-slate-700"
              title="Google Scholar"
            >
              <BookOpen className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded border border-slate-300 hover:bg-white text-slate-700"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded border border-slate-300 hover:bg-white text-slate-700"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 font-mono text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Abdellatif Hannachi. Academic CV & Research Portfolio.
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-slate-900 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
