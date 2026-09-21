import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="academic-section bg-white border-b border-[#E2E8F0] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            About &amp; Research
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2 mb-3" />
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            I am a final-year doctoral candidate in Earthquake Engineering at the École Nationale Polytechnique (ENP), Algiers, working within the Laboratory of Earthquake Engineering and Structural Dynamics (LGSDS). My doctoral research focuses on developing automated and intelligent approaches for seismic design, integrating structural engineering, numerical analysis, optimization, and AI within digital and BIM-based environments.
          </p>
          <p>
            In parallel, I contribute to ongoing research in structural health monitoring of civil infrastructure, particularly buildings and bridges. This work involves ambient vibration testing, operational modal analysis, system identification, sensor placement optimization, and the development of calibrated numerical models for structural assessment and damage monitoring.
          </p>
          <p>
            My engineering experience includes the development and calibration of 3D finite element models using OpenSees/OpenSeesPy and SAP2000 for seismic assessment, nonlinear analysis, model updating, and the generation of structural and damage scenarios. On the computational side, I have experience developing deep learning models for structural engineering applications, including surrogate modeling and structural health monitoring, using architectures ranging from conventional neural networks to Graph Neural Networks (GNNs).
          </p>
        </div>

        {/* Core Engineering & Research Skills */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <h3 className="font-serif text-lg font-bold text-[#002147] mb-4">
            Core Engineering &amp; Research Skills
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-800">
            {PERSONAL_INFO.skillsList.map((skill, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C49B3C] mt-2 shrink-0" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
