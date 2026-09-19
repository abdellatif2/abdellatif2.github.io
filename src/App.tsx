import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResearchInterests } from './components/ResearchInterests';
import { NumericalModels } from './components/NumericalModels';
import { Publications } from './components/Publications';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsGrid } from './components/SkillsGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900 font-sans antialiased">
      {/* Top Navbar */}
      <Navbar 
        onOpenCvModal={() => setCvModalOpen(true)} 
      />

      {/* Main Content: Direct CV & Research Portfolio */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* 1. Academic Bio & Background */}
        <Hero onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 2. Research Focus & Core Areas */}
        <ResearchInterests />

        {/* 3. Numerical Models & Structural Engineering Projects (OpenSees & SAP2000) */}
        <NumericalModels />

        {/* 4. Publications, Papers & BibTeX */}
        <Publications />

        {/* 5. Education & Academic Trajectory */}
        <ExperienceTimeline />

        {/* 6. Technical Stack & FEA Toolkit */}
        <SkillsGrid />

        {/* 7. Contact Information */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable Academic CV Modal */}
      <CvModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
      />
    </div>
  );
}
