import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Building, 
  Send, 
  Copy, 
  Check, 
  ExternalLink,
  BookOpen,
  Github
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Postdoctoral Opportunity / Academic Collaboration',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`[Academic Portfolio] ${formData.subject}`)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="border-b border-slate-200 pb-14">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Contact & Academic Inquiries
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Open for postdoctoral opportunities, academic research collaborations, and script/benchmark model sharing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info (Left Col) */}
        <div className="lg:col-span-5 space-y-4 text-xs sm:text-sm">
          
          {/* Institutional Email Card */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-slate-500 block">
              Official Academic Email
            </span>
            <div className="flex items-center justify-between gap-2">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="font-mono font-bold text-slate-900 hover:text-sky-800 break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 cursor-pointer shrink-0"
                title="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Alt: <a href={`mailto:${PERSONAL_INFO.secondaryEmail}`} className="underline">{PERSONAL_INFO.secondaryEmail}</a>
            </p>
          </div>

          {/* Department address */}
          <div className="p-4 rounded-lg bg-white border border-slate-200 space-y-2">
            <div className="flex items-start gap-2">
              <Building className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold">{PERSONAL_INFO.institution}</strong>
                <span className="text-slate-600 text-xs">{PERSONAL_INFO.department}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <span className="text-slate-600 text-xs">
                10 Avenue Hassen Badi, BP 182, El Harrach, Algiers 16200, Algeria
              </span>
            </div>
          </div>

          {/* Direct profiles */}
          <div className="p-4 rounded-lg bg-white border border-slate-200 space-y-2 text-xs font-mono">
            <span className="font-bold text-slate-700 block uppercase text-[11px]">Direct Scholarly Links</span>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-slate-50 border border-slate-200 hover:bg-slate-100 flex items-center justify-between"
              >
                <span>Google Scholar</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={PERSONAL_INFO.researchGate}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-slate-50 border border-slate-200 hover:bg-slate-100 flex items-center justify-between"
              >
                <span>ResearchGate</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={PERSONAL_INFO.orcid}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-slate-50 border border-slate-200 hover:bg-slate-100 flex items-center justify-between"
              >
                <span>ORCID ID</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-slate-50 border border-slate-200 hover:bg-slate-100 flex items-center justify-between"
              >
                <span>GitHub Code</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Contact Form (Right Col) */}
        <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-lg border border-slate-200 space-y-4">
          <h3 className="text-base font-bold text-slate-900">
            Send a Direct Message
          </h3>

          {formSubmitted ? (
            <div className="p-4 rounded bg-emerald-50 border border-emerald-200 text-xs space-y-2">
              <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Message Dispatched to Your Mail Client</span>
              </div>
              <p className="text-emerald-800">
                Your email draft has been generated for <code>{PERSONAL_INFO.email}</code>.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="underline text-emerald-900 cursor-pointer pt-1 block"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">
                    Your Email:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. j.smith@university.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1">
                  Subject:
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900 bg-white"
                >
                  <option value="Postdoctoral Opportunity / Academic Collaboration">Postdoctoral / Faculty Research Inquiry</option>
                  <option value="Research Collaboration & Joint Paper">Joint Research Collaboration</option>
                  <option value="OpenSees / SAP2000 Model or Script Request">OpenSees / SAP2000 Script Request</option>
                  <option value="General Academic Inquiry">General Academic Inquiry</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-700 block mb-1">
                  Message:
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your research project, question, or collaboration opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-slate-900 resize-y"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Inquiry</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
