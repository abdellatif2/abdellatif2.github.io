import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, BookOpen, Github, Linkedin, Globe, FileCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#002147] text-white/80 border-t border-white/10 py-12 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <span className="font-serif font-bold text-white text-lg block">
              Abdellatif Hannachi
            </span>
            <span className="text-[#C49B3C] font-mono text-xs block mt-0.5">
              Doctoral Candidate &middot; École Nationale Polytechnique (ENP Algiers)
            </span>
            <span className="text-white/60 text-[11px] block mt-1">
              Department of Civil Engineering &middot; Structural Dynamics &amp; Earthquake Engineering Laboratory (LGSDS)
            </span>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="text-[#C49B3C] hover:underline font-mono text-[11px] block mt-1"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 text-xs font-mono text-white/70">
            <a href="#about" className="hover:text-[#C49B3C] transition-colors">About</a>
            <a href="#publications" className="hover:text-[#C49B3C] transition-colors">Publications</a>
            <a href="#models" className="hover:text-[#C49B3C] transition-colors">FEM Models</a>
            <a href="#communications" className="hover:text-[#C49B3C] transition-colors">Communications</a>
            <a href="#peer-review" className="hover:text-[#C49B3C] transition-colors">Peer Review</a>
            <a href="#experience" className="hover:text-[#C49B3C] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#C49B3C] transition-colors">Education</a>
            <a href="#teaching" className="hover:text-[#C49B3C] transition-colors">Teaching</a>
            <a href="#skills" className="hover:text-[#C49B3C] transition-colors">Stack</a>
            <a href="#contact" className="hover:text-[#C49B3C] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={PERSONAL_INFO.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-white/5 hover:bg-[#C49B3C] hover:text-[#002147] text-white transition-colors"
              title="Google Scholar"
            >
              <BookOpen className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.researchGate}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-white/5 hover:bg-[#C49B3C] hover:text-[#002147] text-white transition-colors"
              title="ResearchGate"
            >
              <Globe className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.orcidUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-white/5 hover:bg-[#C49B3C] hover:text-[#002147] text-white transition-colors"
              title="ORCID"
            >
              <FileCheck className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-white/5 hover:bg-[#C49B3C] hover:text-[#002147] text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded bg-white/5 hover:bg-[#C49B3C] hover:text-[#002147] text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Abdellatif Hannachi. Designed with Swiss minimalist academic typography for structural engineering and research dissemination.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/70 hover:text-[#C49B3C] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
