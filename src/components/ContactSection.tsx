import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Globe, 
  BookOpen, 
  Github, 
  FileCheck, 
  Check, 
  Copy,
  ExternalLink
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            Contact &amp; Profiles
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2 mb-3" />
          <p className="text-xs sm:text-sm text-slate-500">
            Get in touch for academic inquiries, postdoctoral collaborations, or technical consultations.
          </p>
        </div>

        {/* 2-Column Grid matching reference order */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          
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
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
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
    </section>
  );
};
