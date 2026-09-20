import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Activity, Cpu, Layers, ShieldCheck, Database, Compass, Radio, Building2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const researchTags = [
    'Structural Health Monitoring (SHM)',
    'Operational Modal Analysis (OMA-SSI)',
    'Ambient Vibration Testing (AVT)',
    'Nonlinear Dynamic Analysis',
    'OpenSees & OpenSeesPy',
    'SAP2000 3D Shell Modeling',
    'Physics-Informed Deep Learning',
    'Seismic Fragility & Risk',
    'Historic Masonry Preservation',
    'Sensor Placement Optimization',
    'Eurocode 8 & RPA99 Compliance',
    'High-Performance Computing (HPC)'
  ];

  return (
    <section id="about" className="academic-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#002147] tracking-tight">
          About &amp; Research
        </h2>
        <div className="w-16 h-1 bg-[#C49B3C] mt-2 mb-6" />

        <div className="mt-6 space-y-4 text-sm sm:text-base text-[#4A5568] leading-relaxed">
          <p>
            I am a final-year Ph.D. candidate in Earthquake Engineering and Structural Dynamics at the{' '}
            <strong className="text-[#002147] font-semibold">École Nationale Polytechnique (ENP)</strong> in Algiers, 
            working within the Department of Civil Engineering and the Structural Dynamics Laboratory. 
            My doctoral research focuses on developing data-driven and physics-informed computational frameworks 
            for the <strong>automated seismic performance assessment and real-time vibration health monitoring</strong> of complex civil infrastructure.
          </p>

          <p>
            My work bridges experimental on-site testing and high-fidelity numerical simulation. On the experimental side, 
            I conduct in-situ <strong>Ambient Vibration Testing (AVT)</strong> campaigns using multi-channel high-sensitivity seismic accelerometers, 
            extracting operational modal parameters via Stochastic Subspace Identification (SSI) and Frequency Domain Decomposition (FDD). 
            On the numerical side, I construct calibrated 3D finite element models in <strong>OpenSees and SAP2000</strong>, including 
            nonlinear distributed plasticity fiber elements and thick/thin shell discretizations for complex historical heritage structures 
            (such as multi-phase Moorish palace complexes featuring up to 47 unique wall thickness sections).
          </p>

          <p>
            To overcome the prohibitive computational cost of non-linear response-history analysis, I engineer 
            <strong>deep learning surrogate models</strong> (spatial-temporal graph neural networks and physics-informed neural operators) 
            that accelerate time-history damage predictions by over 400x. I hold a State Engineering Degree (Ranked 1st / Valedictorian, Summa Cum Laude) 
            and Master of Science from ENP Algiers.
          </p>
        </div>

        {/* Research Keywords Tags */}
        <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
          <h3 className="font-mono text-xs uppercase font-bold text-[#718096] mb-3">
            Core Research &amp; Engineering Disciplines
          </h3>
          <div className="flex flex-wrap gap-2">
            {researchTags.map((tag) => (
              <span key={tag} className="academic-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
