import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setScrolled(window.scrollY > 20);

      // Scroll progress percentage
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPct = (winScroll / height) * 100;
      setScrollProgress(scrolledPct);

      // Active section detection
      const sections = [
        'hero',
        'about',
        'publications',
        'models',
        'communications',
        'peer-review',
        'experience',
        'education',
        'teaching',
        'skills',
        'contact'
      ];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', name: 'About', href: '#about', id: 'about' },
    { num: '02', name: 'Publications', href: '#publications', id: 'publications' },
    { num: '03', name: 'FEM & Projects', href: '#models', id: 'models' },
    { num: '04', name: 'Communications', href: '#communications', id: 'communications' },
    { num: '05', name: 'Peer Review', href: '#peer-review', id: 'peer-review' },
    { num: '06', name: 'Experience', href: '#experience', id: 'experience' },
    { num: '07', name: 'Education', href: '#education', id: 'education' },
    { num: '08', name: 'Teaching', href: '#teaching', id: 'teaching' },
    { num: '09', name: 'Stack', href: '#skills', id: 'skills' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] z-50 transition-all duration-75 pointer-events-none"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #C49B3C, #D4AF5A, #C49B3C)',
          boxShadow: '0 0 8px rgba(196, 155, 60, 0.5)'
        }}
      />

      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#002147]/95 backdrop-blur-md shadow-lg border-b border-white/10' 
            : 'bg-[#002147] border-b border-[#002147]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Empty left spacer or home anchor */}
            <a 
              href="#hero" 
              className="text-white/40 hover:text-[#C49B3C] text-xs font-mono transition-colors"
              title="Return to top"
              aria-label="Return to top"
            >
              <span className="text-[#C49B3C] font-bold">&sect;</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-2.5 py-1 text-xs font-medium transition-colors rounded-xs ${
                      isActive
                        ? 'text-[#C49B3C] font-semibold bg-white/5'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Secondary Action: CV Modal Button */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#C49B3C] hover:text-white border border-[#C49B3C] hover:bg-[#C49B3C] rounded transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Academic CV</span>
              </button>
            </div>

            {/* Mobile / Tablet Hamburger Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={onOpenCvModal}
                className="hidden xs:inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#C49B3C] border border-[#C49B3C] rounded hover:bg-[#C49B3C] hover:text-white transition-colors"
              >
                <FileText className="w-3 h-3" />
                <span>CV</span>
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-white hover:text-[#C49B3C] rounded focus:outline-hidden"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Full-screen Overlay Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-14 bottom-0 bg-[#002147] z-50 overflow-y-auto px-6 py-6 border-t border-white/10 flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-4 border-b border-[#C49B3C]/30">
                <p className="font-serif text-xl text-white font-bold">Abdellatif Hannachi</p>
                <p className="text-xs text-[#C49B3C] font-mono mt-0.5">PhD Candidate &middot; École Nationale Polytechnique (ENP)</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 py-2 text-white/90 hover:text-[#C49B3C] text-sm transition-colors"
                  >
                    <span className="font-mono text-xs text-[#C49B3C] font-bold">{link.num}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-[#002147] bg-[#C49B3C] hover:bg-[#D4AF5A] rounded transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Academic CV</span>
              </button>
              <p className="text-center text-xs font-mono text-white/60">
                <a href="mailto:abdellatif.hannachi@g.enp.edu.dz" className="hover:text-white">
                  abdellatif.hannachi@g.enp.edu.dz
                </a>
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
