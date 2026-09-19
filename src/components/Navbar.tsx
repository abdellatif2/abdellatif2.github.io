import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ['hero', 'research', 'models', 'publications', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

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
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Research', href: '#research', id: 'research' },
    { name: 'Numerical Models', href: '#models', id: 'models' },
    { name: 'Publications', href: '#publications', id: 'publications' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-xs transition-all duration-200 border-b ${
        scrolled ? 'border-slate-200 shadow-2xs' : 'border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Name */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded bg-slate-900 text-white font-mono font-bold text-sm flex items-center justify-center">
              AH
            </span>
            <div className="leading-tight">
              <span className="font-bold text-slate-900 text-sm sm:text-base tracking-tight block group-hover:text-sky-700 transition-colors">
                Abdellatif Hannachi
              </span>
              <span className="text-[11px] text-slate-500 font-mono block">
                Ph.D. Candidate &bull; ENP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-sky-700 font-semibold bg-sky-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full CV (PDF)</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100 border border-slate-200 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                activeSection === link.id
                  ? 'text-sky-700 bg-sky-50 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-slate-900 text-white font-medium text-xs"
            >
              <FileText className="w-4 h-4" />
              View & Print Full Academic CV
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
