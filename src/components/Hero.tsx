import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  FileText, 
  Mail, 
  Check, 
  Copy, 
  ExternalLink, 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  Layers, 
  Github, 
  Globe, 
  FileCheck,
  Compass
} from 'lucide-react';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [copied, setCopied] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-10 pb-12 border-b border-[#E2E8F0] overflow-hidden bg-white/60">
      {/* Subtle background glow */}
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full pointer-events-none opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(196, 155, 60, 0.20) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Top Header: Title & Portrait */}
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 mb-8">
          
          {/* Left Text Block */}
          <div className="flex-1 text-center md:text-left space-y-4">
            
            {/* Name */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#002147] font-bold tracking-tight leading-tight">
                Abdellatif Hannachi
              </h1>
              
              {/* Primary Role */}
              <p className="mt-2 text-base sm:text-lg font-semibold text-[#002147] tracking-tight">
                Doctoral Candidate in Earthquake Engineering
              </p>
            </div>

            {/* Structured Institutional Affiliations */}
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 border-l-2 border-[#C49B3C] pl-3.5 text-left">
              <p className="font-semibold text-[#002147]">
                Department of Civil Engineering &middot; Structural Dynamics &amp; Earthquake Engineering Laboratory (LGSDS)
              </p>
              <p className="text-slate-600 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C49B3C] shrink-0" />
                <span>École Nationale Polytechnique (ENP) &middot; Algiers, Algeria</span>
              </p>
              <p className="text-slate-600 flex items-center gap-1.5 pt-0.5">
                <Compass className="w-3.5 h-3.5 text-[#C49B3C] shrink-0" />
                <span>Trainee at International Institute of Seismology and Earthquake Engineering, Building Research Institute, Japan.</span>
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#002147] hover:bg-[#003366] text-white text-xs sm:text-sm font-semibold rounded-xs transition-all shadow-xs cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#C49B3C]" />
                <span>Curriculum Vitae</span>
              </button>

              <a
                href="#publications"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 text-[#002147] border border-[#E2E8F0] hover:border-[#C49B3C] text-xs sm:text-sm font-semibold rounded-xs transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#C49B3C]" />
                <span>Publications &amp; Theses</span>
              </a>

              <a
                href="#models"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 text-[#002147] border border-[#E2E8F0] hover:border-[#C49B3C] text-xs sm:text-sm font-medium rounded-xs transition-all"
              >
                <Layers className="w-4 h-4 text-[#C49B3C]" />
                <span>Numerical Models &amp; Projects</span>
              </a>
            </div>

          </div>

          {/* Right Portrait Column */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="relative">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1 border-2 border-[#C49B3C] shadow-md bg-white">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center relative">
                  {!imgError ? (
                    <img 
                      src="/perso_image.jpg"
                      alt="Abdellatif Hannachi"
                      className="w-full h-full object-cover object-center"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-linear-to-b from-[#002147] to-[#003366] text-white p-4 text-center">
                      <GraduationCap className="w-12 h-12 text-[#C49B3C] mb-2" />
                      <span className="font-serif font-bold text-lg tracking-wide">Abdellatif Hannachi</span>
                      <span className="text-[10px] font-mono text-[#C49B3C] uppercase tracking-widest mt-1">ENP &middot; Civil &amp; Seismic</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Organized Contact & Academic Profiles Grid */}
        <div id="contact" className="pt-6 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left">
            
            {/* 1. EMAIL */}
            <div className="border-b border-[#E2E8F0] pb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#002147] uppercase block mb-1">
                EMAIL
              </span>
              <div className="flex items-center justify-between gap-2">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="text-sm font-medium text-slate-900 hover:text-[#002147] hover:underline"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 rounded text-slate-400 hover:text-[#002147] hover:bg-slate-100 transition-colors cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* 2. GOOGLE SCHOLAR */}
            <div className="border-b border-[#E2E8F0] pb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#002147] uppercase block mb-1">
                GOOGLE SCHOLAR
              </span>
              <a 
                href={PERSONAL_INFO.googleScholar} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-[#002147] hover:underline group"
              >
                <BookOpen className="w-4 h-4 text-[#002147] shrink-0" />
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* 3. RESEARCHGATE */}
            <div className="border-b border-[#E2E8F0] pb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#002147] uppercase block mb-1">
                RESEARCHGATE
              </span>
              <a 
                href={PERSONAL_INFO.researchGate} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-[#002147] hover:underline group"
              >
                <Globe className="w-4 h-4 text-[#002147] shrink-0" />
                <span>ResearchGate</span>
                <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* 4. ORCID */}
            <div className="border-b border-[#E2E8F0] pb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#002147] uppercase block mb-1">
                ORCID
              </span>
              <a 
                href={PERSONAL_INFO.orcidUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-[#002147] hover:underline font-mono group"
              >
                <FileCheck className="w-4 h-4 text-[#C49B3C] shrink-0" />
                <span>{PERSONAL_INFO.orcid}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* 5. LINKEDIN */}
            <div className="border-b border-[#E2E8F0] pb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#002147] uppercase block mb-1">
                LINKEDIN
              </span>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-[#002147] hover:underline group"
              >
                <div className="w-5 h-5 rounded bg-[#002147] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  in
                </div>
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* 6. GITHUB */}
            <div className="border-b border-[#E2E8F0] pb-3">
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#002147] uppercase block mb-1">
                GITHUB
              </span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-[#002147] hover:underline group"
              >
                <Github className="w-4 h-4 text-[#002147] shrink-0" />
                <span>github.com/abdellatif2</span>
                <ExternalLink className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

 

          </div>
        </div>

      </div>
    </section>
  );
};
