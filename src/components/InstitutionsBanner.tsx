import React from 'react';

interface InstitutionLogo {
  id: string;
  name: string;
  logo: string;
  href?: string;
}

const INSTITUTIONS: InstitutionLogo[] = [
  {
    id: 'lgsds',
    name: 'Laboratoire de Génie Sismique et Dynamique des Structures (LGSDS)',
    logo: '/lgsds_logo.png',
  },
  {
    id: 'enp',
    name: 'École Nationale Polytechnique (ENP Algiers)',
    logo: '/logo_enp.png',
    href: 'https://www.enp.edu.dz/',
  },
  {
    id: 'iisee',
    name: 'International Institute of Seismology and Earthquake Engineering (IISEE)',
    logo: '/iisee_logo.png',
    href: 'https://iisee.kenken.go.jp/',
  },
];

export const InstitutionsBanner: React.FC = () => {
  return (
    <section 
      id="affiliations" 
      aria-label="Affiliated Institutions"
      className="bg-white border-b border-[#E2E8F0] py-6 sm:py-8 shadow-2xs"
    >
      <div className="academic-container">
        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-24 lg:gap-32">
          {INSTITUTIONS.map((inst) => {
            const imageElement = (
              <img
                src={inst.logo}
                alt={inst.name}
                title={inst.name}
                className="h-12 sm:h-16 md:h-20 w-auto max-w-[140px] sm:max-w-[190px] object-contain transition-transform duration-300 hover:scale-105 select-none"
                loading="eager"
              />
            );

            return inst.href ? (
              <a
                key={inst.id}
                href={inst.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-slate-50/80 transition-colors"
                title={inst.name}
              >
                {imageElement}
              </a>
            ) : (
              <div
                key={inst.id}
                className="inline-flex items-center justify-center p-2"
                title={inst.name}
              >
                {imageElement}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
