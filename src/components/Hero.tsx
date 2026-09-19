import React, { useState } from 'react';
import { 
  PERSONAL_INFO 
} from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  FileText,
  Building,
  Mail,
  ExternalLink,
  Code
} from 'lucide-react';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-8 pb-4">
      {/* Top Academic Profile Header */}
      <div className="border-b border-slate-200 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded inline-block">
                Ph.D. Candidate &bull; Earthquake Engineering & Structural Mechanics
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base sm:text-lg text-slate-700 font-medium">
                {PERSONAL_INFO.specialization}
              </p>
            </div>

            {/* Affiliation info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-slate-600 font-mono">
              <div className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{PERSONAL_INFO.institution} &bull; {PERSONAL_INFO.department}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Academic Bio */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl pt-1">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action buttons & Email */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Download Academic CV (PDF)</span>
              </button>

              <a
                href="#models"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Numerical Models</span>
                <span className="text-slate-400">&rarr;</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-mono transition-colors cursor-pointer"
                title="Copy academic email"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{PERSONAL_INFO.email}</span>
                {copied && <span className="text-emerald-700 font-bold ml-1">Copied</span>}
              </button>
            </div>

            {/* Scholarly profiles links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-600 font-mono">
              <span className="text-slate-400 uppercase text-[11px] font-bold">Profiles:</span>
              <a
                href={PERSONAL_INFO.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-sky-700 underline underline-offset-2"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Google Scholar
              </a>
              <span className="text-slate-300">&bull;</span>
              <a
                href={PERSONAL_INFO.researchGate}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-sky-700 underline underline-offset-2"
              >
                ResearchGate
              </a>
              <span className="text-slate-300">&bull;</span>
              <a
                href={PERSONAL_INFO.orcid}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-sky-700 underline underline-offset-2"
              >
                ORCID ({PERSONAL_INFO.orcid.split('/').pop()})
              </a>
              <span className="text-slate-300">&bull;</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-sky-700 underline underline-offset-2"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>

          </div>

          {/* Quick Summary Card (Right 4 cols) */}
          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-4">
            <h3 className="text-xs uppercase font-mono font-bold text-slate-500 tracking-wider">
              Research & FEA Summary
            </h3>

            <div className="space-y-3 text-xs">
              <div className="border-b border-slate-200 pb-2">
                <span className="text-slate-500 block font-mono">Primary Finite Element Tools</span>
                <span className="font-semibold text-slate-900 font-mono">OpenSees / OpenSeesPy, SAP2000 OAPI</span>
              </div>

              <div className="border-b border-slate-200 pb-2">
                <span className="text-slate-500 block font-mono">Computational Focus</span>
                <span className="font-semibold text-slate-900 font-mono">Nonlinear Dynamic (NLTHA), Fiber Sections, Damage Identification</span>
              </div>

              <div className="border-b border-slate-200 pb-2">
                <span className="text-slate-500 block font-mono">Seismic Design Codes</span>
                <span className="font-semibold text-slate-900 font-mono">ASCE 41-17, Eurocode 8, RPA 99 / 2003</span>
              </div>

              <div>
                <span className="text-slate-500 block font-mono">Status</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Doctoral Thesis in Progress (Final Stage)
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded p-3 text-center sm:text-left">
              <div className="text-2xl font-bold font-mono text-slate-900">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
