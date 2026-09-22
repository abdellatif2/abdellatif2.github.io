import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Globe, 
  Mail, 
  FileText, 
  BookOpen, 
  Layers, 
  GraduationCap, 
  ExternalLink, 
  Copy, 
  Check, 
  ArrowRight, 
  Linkedin, 
  Github,
  MapPin
} from 'lucide-react';

interface LinktreeHubProps {
  onOpenPortfolio: (targetSection?: string) => void;
  onOpenCvModal: () => void;
}

export const LinktreeHub: React.FC<LinktreeHubProps> = ({ 
  onOpenPortfolio, 
  onOpenCvModal 
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between py-10 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 rounded-full pointer-events-none opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(196, 155, 60, 0.15) 0%, rgba(0, 33, 71, 0.08) 60%, transparent 100%)' }}
      />

      <div className="w-full max-w-md mx-auto relative z-10 space-y-6">
        
        {/* Profile Card Header */}
        <div className="text-center space-y-3.5 pt-2">
          {/* Portrait with refined gold ring */}
          <div className="relative inline-block">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border-2 border-[#C49B3C] bg-white shadow-md mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                {!imgError ? (
                  <img 
                    src="/perso_image.jpg" 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#002147] text-white">
                    <GraduationCap className="w-10 h-10 text-[#C49B3C]" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Name & Academic Title */}
          <div>
            <h1 className="font-serif text-2xl sm:text-[1.75rem] font-bold text-[#002147] tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-slate-800 mt-1">
              Ph.D. Candidate in Earthquake Engineering
            </p>
            <p className="text-xs text-slate-500 flex items-center justify-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#C49B3C] shrink-0" />
              <span>École Nationale Polytechnique (ENP) &middot; Algiers</span>
            </p>
          </div>

          {/* Research Tagline */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700">
            Structural Health Monitoring &middot; AI &middot; Seismic Design
          </div>
        </div>

        {/* Quick Access Links Stack */}
        <div className="space-y-3 pt-2">
          
          {/* 1. PRIMARY FEATURED: Full Academic Portfolio */}
          <button
            onClick={() => onOpenPortfolio()}
            className="w-full group relative flex items-center justify-between p-4 bg-[#002147] hover:bg-[#002d62] text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-[#C49B3C]/50 cursor-pointer text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#C49B3C]/20 border border-[#C49B3C]/40 flex items-center justify-center text-[#C49B3C] shrink-0 group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white tracking-wide">
                    Full Academic Portfolio
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-[#C49B3C] text-[#002147] rounded-xs uppercase">
                    Explore
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">
                  Publications, numerical models, experience &amp; CV
                </p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#C49B3C] shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* 2. WHATSAPP DIRECT CONTACT */}
          <div className="w-full flex items-center bg-white hover:bg-slate-50 border border-slate-200 hover:border-emerald-500 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden">
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-3.5 p-3.5 text-left"
            >
              {/* WhatsApp SVG Icon */}
              <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-slate-900">
                    WhatsApp Message
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <p className="text-xs font-mono text-emerald-700 font-medium truncate">
                  {PERSONAL_INFO.phone}
                </p>
              </div>
            </a>
            {/* Quick Copy Number button */}
            <button
              onClick={handleCopyPhone}
              className="p-3.5 text-slate-400 hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors border-l border-slate-100"
              title="Copy WhatsApp phone number"
            >
              {copiedPhone ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* 3. DIRECT EMAIL */}
          <div className="w-full flex items-center bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#002147] rounded-xl shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex-1 flex items-center gap-3.5 p-3.5 text-left"
            >
              <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#002147] shrink-0">
                <Mail className="w-5 h-5 text-[#002147]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-slate-900">
                    Send an Email
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <p className="text-xs text-slate-500 truncate font-mono">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </a>
            {/* Quick Copy Email button */}
            <button
              onClick={handleCopyEmail}
              className="p-3.5 text-slate-400 hover:text-[#002147] hover:bg-slate-100 transition-colors border-l border-slate-100"
              title="Copy email address"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-600" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* 4. CURRICULUM VITAE (CV) */}
          <button
            onClick={onOpenCvModal}
            className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#C49B3C] rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#C49B3C] shrink-0">
                <FileText className="w-5 h-5 text-[#C49B3C]" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 block">
                  Curriculum Vitae (Academic CV)
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Degrees, research, supervision &amp; credentials
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

          {/* 5. PUBLICATIONS & PAPERS */}
          <button
            onClick={() => onOpenPortfolio('publications')}
            className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-400 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                <BookOpen className="w-5 h-5 text-[#002147]" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 block">
                  Publications &amp; Papers
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Peer-reviewed journals, conferences &amp; citations
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

          {/* 6. NUMERICAL MODELS & PROJECTS */}
          <button
            onClick={() => onOpenPortfolio('models')}
            className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-400 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer text-left"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                <Layers className="w-5 h-5 text-[#C49B3C]" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 block">
                  Numerical Models &amp; Projects
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  OpenSees, SAP2000 &amp; structural dynamics models
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </button>

        </div>

        {/* Scholarly & Social Profiles Grid */}
        <div className="pt-2">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 text-center mb-3">
            Academic &amp; Professional Profiles
          </p>
          <div className="flex items-center justify-center gap-3">
            {/* Google Scholar */}
            <a
              href={PERSONAL_INFO.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#002147] hover:bg-slate-50 text-slate-700 hover:text-[#002147] transition-all shadow-xs"
              title="Google Scholar"
            >
              <GraduationCap className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-[#002147] hover:bg-slate-50 text-slate-700 hover:text-blue-700 transition-all shadow-xs"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* ResearchGate */}
            <a
              href={PERSONAL_INFO.researchGate}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-emerald-600 hover:bg-slate-50 text-slate-700 hover:text-emerald-600 transition-all shadow-xs font-bold text-xs"
              title="ResearchGate"
            >
              <span className="w-5 h-5 flex items-center justify-center font-serif text-sm">RG</span>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-slate-900 hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-all shadow-xs"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* ORCID */}
            <a
              href={PERSONAL_INFO.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-emerald-500 hover:bg-slate-50 text-slate-700 hover:text-emerald-600 transition-all shadow-xs"
              title="ORCID Profile"
            >
              <span className="w-5 h-5 flex items-center justify-center font-mono font-bold text-xs text-emerald-600">iD</span>
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 text-center text-xs text-slate-400 space-y-1">
          <p>
            Laboratoire de Génie Parasismique et Dynamique des Structures (LGSDS)
          </p>
          <p className="font-mono text-[11px] text-slate-400">
            &copy; {new Date().getFullYear()} Abdellatif Hannachi &middot; ENP Algiers
          </p>
        </div>

      </div>
    </div>
  );
};
