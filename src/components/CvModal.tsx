import React from 'react';
import { PERSONAL_INFO, PUBLICATIONS, EXPERIENCES, NUMERICAL_MODELS, SOFTWARE_SKILLS } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  MapPin, 
  BookOpen, 
  GraduationCap, 
  Building,
  Layers,
  Award
} from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      
      {/* Container */}
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 print:my-0 print:border-none print:shadow-none print:bg-white print:text-black">
        
        {/* Modal Top Control Bar (Hidden on print) */}
        <div className="no-print sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-sky-400" />
            <span className="font-bold text-sm">Academic Curriculum Vitae — Abdellatif Hannachi</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content (Formatted Academic Style) */}
        <div className="p-8 sm:p-12 space-y-8 bg-white text-slate-900 print:p-8">
          
          {/* Header & Bio */}
          <div className="border-b-2 border-slate-900 pb-6 text-center space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight uppercase font-serif text-slate-950">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-semibold text-slate-700">
              {PERSONAL_INFO.title} · {PERSONAL_INFO.department}
            </p>
            <p className="text-sm text-slate-600">
              {PERSONAL_INFO.institution} · {PERSONAL_INFO.location}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-700 pt-2">
              <span>Email: <strong>{PERSONAL_INFO.email}</strong></span>
              <span>•</span>
              <span>ORCID: {PERSONAL_INFO.orcid}</span>
              <span>•</span>
              <span>Google Scholar: Abdellatif Hannachi</span>
            </div>
          </div>

          {/* Research Focus */}
          <div className="space-y-2 print-break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-mono">
              Research Focus & Specialization
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Nonlinear structural dynamics, Structural Health Monitoring (SHM), Operational Modal Analysis (OMA), fiber-section finite element modeling in OpenSees & SAP2000, and physics-informed AI surrogate modeling for automated earthquake-resistant design.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4 print-break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-mono">
              Education
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-950">
                  <span>Ph.D. in Earthquake Engineering & Structural Mechanics</span>
                  <span>2022 — 2026 (Expected)</span>
                </div>
                <div className="text-xs text-slate-700 italic">École Nationale Polytechnique (ENP), Algiers, Algeria</div>
                <p className="text-xs text-slate-600 mt-1">
                  Dissertation: <em>"Advanced Numerical Modeling and AI Frameworks for Automated Seismic Design and Structural Health Monitoring of RC Structures."</em>
                </p>
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-bold text-slate-950">
                  <span>M.Sc. in Structural Engineering (Major: Earthquake & Civil Structures)</span>
                  <span>2020 — 2022</span>
                </div>
                <div className="text-xs text-slate-700 italic">École Nationale Polytechnique (ENP), Algiers, Algeria (Valedictorian)</div>
              </div>
            </div>
          </div>

          {/* Numerical Models & Computational Projects */}
          <div className="space-y-4 print-break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-mono">
              Key Numerical Models Developed (OpenSees & SAP2000)
            </h2>
            <div className="space-y-3">
              {NUMERICAL_MODELS.map((m, idx) => (
                <div key={idx} className="text-xs text-slate-800 space-y-1">
                  <div className="flex justify-between font-bold text-slate-950">
                    <span>{idx + 1}. {m.title}</span>
                    <span className="font-mono text-[11px] font-normal">[{m.software}]</span>
                  </div>
                  <p className="text-slate-600">
                    <strong>Context:</strong> {m.projectContext}
                  </p>
                  <p className="text-slate-600">
                    <strong>Highlights:</strong> {m.modelingHighlights.slice(0, 2).join('; ')}.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="space-y-4 print-break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-mono">
              Selected Publications & Proceedings
            </h2>
            <div className="space-y-2.5">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="text-xs text-slate-800 space-y-0.5">
                  <p>
                    <span className="font-bold">[{idx + 1}]</span> {pub.authors.join(', ')} ({pub.year}). "{pub.title}". <em className="italic">{pub.venue}</em>. {pub.doi && `DOI: ${pub.doi}`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Teaching & Supervision */}
          <div className="space-y-3 print-break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-mono">
              Teaching Experience & Academic Mentorship
            </h2>
            <div className="text-xs text-slate-800 space-y-2">
              <div>
                <div className="flex justify-between font-bold">
                  <span>Graduate Teaching Assistant — ENP Algiers</span>
                  <span>2023 — Present</span>
                </div>
                <p className="text-slate-600">
                  Courses: Nonlinear FEA in OpenSees & SAP2000, Structural Dynamics, Earthquake Resistant Design (EC8 & RPA99). Supervised 4 Master degree graduation capstone theses.
                </p>
              </div>
            </div>
          </div>

          {/* Technical & Computational Arsenal */}
          <div className="space-y-3 print-break-inside-avoid">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-mono">
              Computational & Numerical Toolkit
            </h2>
            <div className="text-xs text-slate-800 space-y-1">
              <p><strong>Finite Element Software:</strong> OpenSees, OpenSeesPy, SAP2000 Nonlinear, ETABS, Abaqus, SeismoSignal, SeismoStruct.</p>
              <p><strong>Scientific & AI Programming:</strong> Python (PyTorch, TensorFlow, SciPy, Scikit-Learn), MATLAB, C++, Tcl, SAP2000 OAPI.</p>
              <p><strong>Design Codes & Standards:</strong> Eurocode 8 (EN 1998-1/3), ASCE/SEI 7-22, ASCE 41-17, ACI 318, RPA99.</p>
            </div>
          </div>

          {/* References */}
          <div className="space-y-1 print-break-inside-avoid pt-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 font-mono">
              Academic References
            </h2>
            <p className="text-xs text-slate-600 italic">
              Complete reference letters from doctoral advisors and department chairs available upon request.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
