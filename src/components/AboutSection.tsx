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
    <section id="about" className="academic-section bg-white border-b border-[#E2E8F0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002147] tracking-tight">
            About &amp; Research
          </h2>
          <div className="w-12 h-1 bg-[#C49B3C] mt-2 mb-3" />
          <p className="text-xs sm:text-sm text-slate-500">
            Doctoral research profile, experimental vibration campaigns, and computational earthquake engineering specializations.
          </p>
        </div>

        <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            I am a final-year Ph.D. candidate in Earthquake Engineering and Structural Dynamics at the{' '}
            <strong className="text-[#002147] font-semibold">École Nationale Polytechnique (ENP)</strong> in Algiers, 
            working within the Department of Civil Engineering and the Structural Dynamics Laboratory (LGSDS). 
            My doctoral research focuses on developing data-driven and physics-informed computational frameworks 
            for the <strong className="text-slate-800 font-semibold">automated seismic performance assessment and real-time vibration health monitoring</strong> of complex civil infrastructure.
          </p>

          <p>
            My work bridges experimental on-site testing and high-fidelity numerical simulation. On the experimental side, 
            I conduct in-situ <strong className="text-slate-800 font-semibold">Ambient Vibration Testing (AVT)</strong> campaigns using multi-channel high-sensitivity seismic accelerometers, 
            extracting operational modal parameters via Stochastic Subspace Identification (SSI) and Frequency Domain Decomposition (FDD). 
            On the numerical side, I construct calibrated 3D finite element models in <strong className="text-[#002147] font-semibold">OpenSees and SAP2000</strong>, including 
            nonlinear distributed plasticity fiber elements and thick/thin shell discretizations for complex historical heritage structures 
            (such as multi-phase Moorish palace complexes featuring up to 47 unique wall thickness sections).
          </p>

          <p>
            To overcome the prohibitive computational cost of non-linear response-history analysis, I engineer 
            <strong className="text-slate-800 font-semibold"> deep learning surrogate models</strong> (spatial-temporal graph neural networks and physics-informed neural operators) 
            that accelerate time-history damage predictions by over 400x. I hold a State Engineering Degree (Ranked 1st / Valedictorian, Summa Cum Laude) 
            and Master of Science from ENP Algiers.
          </p>
        </div>

        {/* Research Keywords Tags */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <h3 className="font-mono text-[11px] uppercase font-bold text-[#002147] mb-2.5">
            Core Research &amp; Engineering Disciplines
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {researchTags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#C49B3C] hover:text-[#002147] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
