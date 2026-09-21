import React, { useState } from 'react';
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

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#4A5568] font-sans antialiased selection:bg-[#C49B3C] selection:text-white">
      
      {/* Top Navbar with Scroll Progress */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero: Name, Role, Institutional Affiliations, Portrait & Clean Action Toolbar */}
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 2. Institutional Logos (LGSDS Lab, ENP School, IISEE Institute) */}
        <InstitutionsBanner />

        {/* 3. About & Research (Placed just after the logos as requested) */}
        <AboutSection />

        {/* 4. Publications & Theses (Minimalist citation list style matching reference) */}
        <Publications />

        {/* 5. Numerical Models & Projects (Directly under Publications) */}
        <NumericalModels />

        {/* 6. Scientific Communications (Clean list with badges) */}
        <CommunicationsSection />

        {/* 7. Peer Review Activities (Simple and direct) */}
        <PeerReviewSection />

        {/* 8. Professional & Research Experience */}
        <ExperienceTimeline />

        {/* 9. Education (Ph.D., State Engineer Valedictorian, CPGE) */}
        <EducationSection />

        {/* 10. Teaching & Supervision */}
        <TeachingSection />

        {/* 11. Technical Skills */}
        <SkillsGrid />
      </main>

      {/* Footer with Scholarly Links & Contact */}
      <Footer />

      {/* Printable Academic CV Modal */}
      <CvModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
      />
    </div>
  );
}
