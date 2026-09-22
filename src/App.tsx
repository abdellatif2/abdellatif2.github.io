import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InstitutionsBanner } from './components/InstitutionsBanner';
import { AboutSection } from './components/AboutSection';
import { Publications } from './components/Publications';
import { NumericalModels } from './components/NumericalModels';
import { CommunicationsSection } from './components/CommunicationsSection';
import { PeerReviewSection } from './components/PeerReviewSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { TeachingSection } from './components/TeachingSection';
import { SkillsGrid } from './components/SkillsGrid';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { LinktreeHub } from './components/LinktreeHub';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);
  const [view, setView] = useState<'hub' | 'portfolio'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const params = new URLSearchParams(window.location.search);
      if (params.get('view') === 'portfolio') return 'portfolio';
      if (hash && hash !== '#hub' && hash !== '#' && hash !== '') {
        return 'portfolio';
      }
    }
    return 'hub';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#hub') {
        setView('hub');
      } else if (hash === '#portfolio' || hash.length > 1) {
        setView('portfolio');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenPortfolio = (targetSection?: string) => {
    setView('portfolio');
    if (targetSection) {
      window.location.hash = targetSection;
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.hash = 'portfolio';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackToHub = () => {
    setView('hub');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {view === 'hub' ? (
        <LinktreeHub 
          onOpenPortfolio={handleOpenPortfolio}
          onOpenCvModal={() => setCvModalOpen(true)}
        />
      ) : (
        <div className="min-h-screen bg-[#FAFAFA] text-[#4A5568] font-sans antialiased selection:bg-[#C49B3C] selection:text-white relative">
          
          {/* Top Navbar with Scroll Progress & Hub return button */}
          <Navbar 
            onOpenCvModal={() => setCvModalOpen(true)} 
            onBackToHub={handleBackToHub}
          />

          {/* Main Content Area */}
          <main>
            {/* 1. Hero: Name, Role, Institutional Affiliations, Portrait & Clean Action Toolbar */}
            <Hero onOpenCvModal={() => setCvModalOpen(true)} />

            {/* 2. Institutional Logos (LGSDS Lab, ENP School, IISEE Institute) */}
            <InstitutionsBanner />

            {/* 3. About & Research */}
            <AboutSection />

            {/* 4. Publications & Theses */}
            <Publications />

            {/* 5. Numerical Models & Projects */}
            <NumericalModels />

            {/* 6. Scientific Communications */}
            <CommunicationsSection />

            {/* 7. Peer Review Activities */}
            <PeerReviewSection />

            {/* 8. Professional & Research Experience */}
            <ExperienceTimeline />

            {/* 9. Education */}
            <EducationSection />

            {/* 10. Teaching & Supervision */}
            <TeachingSection />

            {/* 11. Technical Skills */}
            <SkillsGrid />
          </main>

          {/* Footer with Scholarly Links & Contact */}
          <Footer onBackToHub={handleBackToHub} />

          {/* Floating Return to Quick Links Hub Button */}
          <button
            onClick={handleBackToHub}
            className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 py-2 bg-[#002147] hover:bg-[#003366] text-white text-xs font-semibold rounded-full shadow-lg border border-[#C49B3C]/50 hover:scale-105 transition-all cursor-pointer"
            title="Return to Quick Links Hub"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C49B3C]" />
            <span>Links Hub</span>
          </button>
        </div>
      )}

      {/* Printable Academic CV Modal (accessible from both views) */}
      <CvModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
      />
    </>
  );
}
