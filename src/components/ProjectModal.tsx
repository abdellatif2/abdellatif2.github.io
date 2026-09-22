import React, { useState, useEffect } from 'react';
import { NumericalModel } from '../types';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  Activity, 
  Copy, 
  Check, 
  Maximize2, 
  FileCode, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

interface ProjectModalProps {
  project: NumericalModel | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState<boolean>(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    url: string;
    caption: string;
    tag: string;
  } | null>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeLightboxImage) {
          setActiveLightboxImage(null);
        } else if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeLightboxImage, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Group images into regular photos/models and mode shape animations
  const modeShapeImages = project.images?.filter(img => img.type === 'mode_shape') || [];
  const structuralImages = project.images?.filter(img => img.type !== 'mode_shape') || [];
  const isHistoricMasonry = project.id === 'sap2000-historic-masonry-avt';
  const isTsurumiBridge = project.id === 'opensees-tsurumi-tsubasa-bridge';
  const isCorrosionBridge = project.id === 'opensees-corrosion-rc-bridge';

  return (
    <>
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 print:p-0 print:bg-white"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Container */}
        <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Modal Sticky Top Control Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-3.5 bg-[#002147] text-white border-b border-slate-800">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Layers className="w-4 h-4 text-[#C49B3C] shrink-0" />
              <span className="font-semibold text-xs sm:text-sm tracking-wide truncate">
                {project.title}
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Document Body */}
          <div className="p-6 sm:p-8 bg-white text-slate-900 text-left">
            
            {isHistoricMasonry ? (
              /* Dedicated Clean, Technical & Visual Layout for Historic Masonry Building */
              <div className="space-y-8">
                
                {/* Title Header */}
                <div className="border-b border-slate-200 pb-4">
                  <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#002147] leading-tight">
                    Historic Masonry Building | 3D FEM Modeling &amp; Structural Assessment
                  </h1>
                </div>

                {/* 1. Historic Building (Prominently at the beginning) */}
                <div className="space-y-2.5">
                  <div 
                    onClick={() => setActiveLightboxImage({
                      url: '/AVT/building_photo.jpg',
                      caption: 'Existing historic masonry building, Algiers',
                      tag: 'Existing Building'
                    })}
                    className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col max-w-2xl mx-auto"
                  >
                    <div className="relative h-72 sm:h-96 w-full overflow-hidden flex items-center justify-center bg-white">
                      <img 
                        src="/AVT/building_photo.jpg" 
                        alt="Existing historic masonry building, Algiers"
                        className="max-h-full w-auto object-contain rounded-md group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge Photograph
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                    Existing historic masonry building, Algiers
                  </p>
                </div>

                {/* Introduction */}
                <div className="space-y-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#002147] border-b border-slate-100 pb-1">
                    Introduction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    This project concerns the numerical modeling and structural assessment of an historic masonry building in Algiers, constructed in the 1800s. The building consists of a partial basement, ground floor, and first floor, organized around a central patio covered by a masonry dome.
                  </p>
                </div>

                {/* Structural Complexity */}
                <div className="space-y-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#002147] border-b border-slate-100 pb-1">
                    Structural Complexity
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The building presents a highly irregular architectural configuration, with complex geometry and numerous variations in wall dimensions. Reconstruction of the existing geometry was particularly challenging due to the age and limitations of the original plans.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The model includes <strong className="font-semibold text-slate-900">47 distinct wall thicknesses, ranging from 7 cm to 98 cm</strong>, covering thin internal partitions as well as massive load-bearing masonry walls.
                  </p>
                </div>

                {/* Numerical Model */}
                <div className="space-y-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#002147] border-b border-slate-100 pb-1">
                    Numerical Model
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    A detailed <strong className="font-semibold text-slate-900">3D finite element model was developed in SAP2000</strong> to reproduce the existing structural configuration and support the assessment of the historic masonry structure. The model incorporates the main walls, floors, openings, architectural elements, and the central masonry dome.
                  </p>
                </div>

                {/* Visual Content: 3D FEM Model, Wall Thicknesses & Modal Analysis */}
                <div className="space-y-8 pt-2">
                  
                  {/* 2. 3D FEM Model */}
                  <div className="space-y-2.5">
                    <div 
                      onClick={() => setActiveLightboxImage({
                        url: '/AVT/fem_model_2.png',
                        caption: '3D finite element model developed in SAP2000',
                        tag: '3D FEM Model'
                      })}
                      className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                    >
                      <div className="relative h-72 sm:h-88 w-full overflow-hidden flex items-center justify-center bg-white">
                        <img 
                          src="/AVT/fem_model_2.png" 
                          alt="3D finite element model developed in SAP2000"
                          className="max-h-full w-auto object-contain group-hover:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge 3D Model
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                      3D finite element model developed in SAP2000
                    </p>
                  </div>

                  {/* 3. Wall Thicknesses */}
                  <div className="space-y-2.5">
                    <div 
                      onClick={() => setActiveLightboxImage({
                        url: '/AVT/fem_model_1.png',
                        caption: 'Representation of the 47 wall thicknesses, ranging from 7 to 98 cm',
                        tag: 'Wall Thicknesses'
                      })}
                      className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                    >
                      <div className="relative h-72 sm:h-88 w-full overflow-hidden flex items-center justify-center bg-white">
                        <img 
                          src="/AVT/fem_model_1.png" 
                          alt="Representation of the 47 wall thicknesses, ranging from 7 to 98 cm"
                          className="max-h-full w-auto object-contain group-hover:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge Wall Thickness Representation
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                      Representation of the 47 wall thicknesses, ranging from 7 to 98 cm
                    </p>
                  </div>

                  {/* 4. Modal Analysis (Side-by-side Mode Shape GIFs) */}
                  <div className="space-y-3 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Mode 1 */}
                      <div className="space-y-2">
                        <div 
                          onClick={() => setActiveLightboxImage({
                            url: '/AVT/mode_shape_1.gif',
                            caption: 'First mode shape',
                            tag: 'Mode 1'
                          })}
                          className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                        >
                          <div className="relative h-56 sm:h-64 overflow-hidden flex items-center justify-center bg-white">
                            <img 
                              src="/AVT/mode_shape_1.gif" 
                              alt="First mode shape"
                              className="w-full h-full object-contain group-hover:opacity-90 transition-opacity"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-2.5 py-1 rounded shadow-xs inline-flex items-center gap-1">
                                <Maximize2 className="w-3.5 h-3.5" /> Full Size
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                          First mode shape
                        </p>
                      </div>

                      {/* Mode 2 */}
                      <div className="space-y-2">
                        <div 
                          onClick={() => setActiveLightboxImage({
                            url: '/AVT/mode_shape_2.gif',
                            caption: 'Second mode shape',
                            tag: 'Mode 2'
                          })}
                          className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                        >
                          <div className="relative h-56 sm:h-64 overflow-hidden flex items-center justify-center bg-white">
                            <img 
                              src="/AVT/mode_shape_2.gif" 
                              alt="Second mode shape"
                              className="w-full h-full object-contain group-hover:opacity-90 transition-opacity"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-2.5 py-1 rounded shadow-xs inline-flex items-center gap-1">
                                <Maximize2 className="w-3.5 h-3.5" /> Full Size
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                          Second mode shape
                        </p>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            ) : isTsurumiBridge ? (
              /* Dedicated Clean, Technical & Visual Layout for Tsurumi Tsubasa Bridge */
              <div className="space-y-8">
                
                {/* Title Header */}
                <div className="border-b border-slate-200 pb-4">
                  <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#002147] leading-tight">
                    Tsurumi Tsubasa Bridge | 3D OpenSees Modeling
                  </h1>
                </div>

                {/* 1. Existing Bridge (Prominently at the beginning) */}
                <div className="space-y-2.5">
                  <div 
                    onClick={() => setActiveLightboxImage({
                      url: '/CableBridge/Picture3.jpg',
                      caption: 'Tsurumi Tsubasa Bridge, Yokohama, Japan',
                      tag: 'Existing Bridge'
                    })}
                    className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col max-w-2xl mx-auto"
                  >
                    <div className="relative h-72 sm:h-96 w-full overflow-hidden flex items-center justify-center bg-white">
                      <img 
                        src="/CableBridge/Picture3.jpg" 
                        alt="Tsurumi Tsubasa Bridge, Yokohama, Japan"
                        className="max-h-full w-auto object-contain rounded-md group-hover:opacity-90 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge Photograph
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                    Tsurumi Tsubasa Bridge, Yokohama, Japan
                  </p>
                </div>

                {/* Introduction */}
                <div className="space-y-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#002147] border-b border-slate-100 pb-1">
                    Introduction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Developed a detailed <strong className="font-semibold text-slate-900">3D finite element model of the Tsurumi Tsubasa cable-stayed bridge in OpenSees</strong>, representing its main structural components and connection details for structural dynamics analysis.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The model represents the bridge's <strong className="font-semibold text-slate-900">steel deck, concrete piers, steel stay cables, and cable-deck/pier interaction components</strong>.
                  </p>
                </div>

                {/* Modeling Complexity */}
                <div className="space-y-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#002147] border-b border-slate-100 pb-1">
                    Modeling Complexity
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The model includes:
                  </p>
                  <ul className="space-y-1.5 pl-1 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C49B3C] shrink-0 mt-2" />
                      <span>Steel box-girder decks and concrete piers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C49B3C] shrink-0 mt-2" />
                      <span>Steel stay cables with cable sag and initial tension effects.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C49B3C] shrink-0 mt-2" />
                      <span>Viscous dampers incorporated along the stay cables.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C49B3C] shrink-0 mt-2" />
                      <span>Springs and dampers representing the deck-to-pier interaction and support conditions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C49B3C] shrink-0 mt-2" />
                      <span>Detailed local modeling of the damper and spring connections at the piers.</span>
                    </li>
                  </ul>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
                    The model was used to perform <strong className="font-semibold text-slate-900">3D eigenvalue analysis and identify the first six spatial vibration modes</strong> of the bridge.
                  </p>
                </div>

                {/* 2. OpenSees FEM Model (Side by Side) */}
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    
                    {/* Full 3D FEM Model */}
                    <div className="space-y-2">
                      <div 
                        onClick={() => setActiveLightboxImage({
                          url: '/CableBridge/Picture1.png',
                          caption: 'Full 3D OpenSees model',
                          tag: 'Full 3D Model'
                        })}
                        className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                      >
                        <div className="relative h-64 sm:h-72 w-full overflow-hidden flex items-center justify-center bg-white p-2">
                          <img 
                            src="/CableBridge/Picture1.png" 
                            alt="Full 3D OpenSees model"
                            className="max-h-full w-auto object-contain group-hover:opacity-90 transition-opacity"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                              <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge Model
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                        Full 3D OpenSees model
                      </p>
                    </div>

                    {/* Zoomed view of the pier connection */}
                    <div className="space-y-2">
                      <div 
                        onClick={() => setActiveLightboxImage({
                          url: '/CableBridge/Picture2.png',
                          caption: 'Pier connection: springs and viscous dampers',
                          tag: 'Pier Connection'
                        })}
                        className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                      >
                        <div className="relative h-64 sm:h-72 w-full overflow-hidden flex items-center justify-center bg-white p-2">
                          <img 
                            src="/CableBridge/Picture2.png" 
                            alt="Pier connection: springs and viscous dampers"
                            className="max-h-full w-auto object-contain group-hover:opacity-90 transition-opacity"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                              <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge Connection
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                        Pier connection: springs and viscous dampers
                      </p>
                    </div>

                  </div>
                </div>

                {/* 3. Modal Analysis (First Six Mode Shapes in 2-Column Grid) */}
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { num: 1, file: '/CableBridge/bridge_3d_mode_1.gif', title: 'Mode 1' },
                      { num: 2, file: '/CableBridge/bridge_3d_mode_2.gif', title: 'Mode 2' },
                      { num: 3, file: '/CableBridge/bridge_3d_mode_3.gif', title: 'Mode 3' },
                      { num: 4, file: '/CableBridge/bridge_3d_mode_4.gif', title: 'Mode 4' },
                      { num: 5, file: '/CableBridge/bridge_3d_mode_5.gif', title: 'Mode 5' },
                      { num: 6, file: '/CableBridge/bridge_3d_mode_6.gif', title: 'Mode 6' }
                    ].map((mode) => (
                      <div key={mode.num} className="space-y-2">
                        <div 
                          onClick={() => setActiveLightboxImage({
                            url: mode.file,
                            caption: mode.title,
                            tag: `Mode ${mode.num}`
                          })}
                          className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                        >
                          <div className="relative h-56 sm:h-64 w-full overflow-hidden flex items-center justify-center bg-white p-1">
                            <img 
                              src={mode.file} 
                              alt={mode.title}
                              className="max-h-full w-auto object-contain group-hover:opacity-90 transition-opacity"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                                <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge Animation
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                          {mode.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : isCorrosionBridge ? (
              /* Dedicated Clean, Technical & Visual Layout for Two-Span RC Bridge (Corrosion Effects) */
              <div className="space-y-8">
                
                {/* Title Header */}
                <div className="border-b border-slate-200 pb-4">
                  <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[#002147] leading-tight">
                    Two-Span RC Bridge | Nonlinear Modeling of Corrosion Effects
                  </h1>
                </div>

                {/* Introduction */}
                <div className="space-y-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#002147] border-b border-slate-100 pb-1">
                    Introduction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Developed a nonlinear <strong className="font-semibold text-slate-900">OpenSees model of a two-span reinforced concrete bridge</strong> to investigate the influence of reinforcement corrosion on its seismic response.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The bridge has a reinforced concrete deck supported by circular RC piers. The pier nonlinear behavior is represented using <strong className="font-semibold text-slate-900">nonlinear rotational springs at the pier ends</strong>, capturing the plastic hinge regions.
                  </p>
                </div>

                {/* Corrosion Modeling */}
                <div className="space-y-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#002147] border-b border-slate-100 pb-1">
                    Corrosion Modeling
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The main focus of the model is the representation of <strong className="font-semibold text-slate-900">corrosion-induced degradation in the nonlinear pier response</strong>.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Corrosion is incorporated by modifying the hysteresis behavior of the RC plastic hinges to account for changes in reinforcement properties and structural capacity. A modified peak-oriented hysteresis model is adjusted for different corrosion levels and implemented in OpenSees.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The model is then subjected to earthquake ground motions to study the resulting nonlinear response.
                  </p>
                </div>

                {/* Visual Content: Exactly in the requested order */}
                <div className="space-y-8 pt-2">

                  {/* 1. Numerical Model */}
                  <div className="space-y-2.5">
                    <div 
                      onClick={() => setActiveLightboxImage({
                        url: '/corrosion/numerical_model.png',
                        caption: 'Numerical model of the two-span RC bridge',
                        tag: 'Numerical Model'
                      })}
                      className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col max-w-2xl mx-auto"
                    >
                      <div className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center justify-center bg-white p-2">
                        <img 
                          src="/corrosion/numerical_model.png" 
                          alt="Numerical model of the two-span RC bridge"
                          className="max-h-full w-auto object-contain rounded-md group-hover:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge Image
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                      Numerical model of the two-span RC bridge
                    </p>
                  </div>

                  {/* 2. Moment-Rotation Backbone */}
                  <div className="space-y-2.5">
                    <div 
                      onClick={() => setActiveLightboxImage({
                        url: '/corrosion/moment_rotation_backbone.png',
                        caption: 'Corrosion-dependent moment-rotation backbone',
                        tag: 'Backbone Curves'
                      })}
                      className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col max-w-2xl mx-auto"
                    >
                      <div className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center justify-center bg-white p-2">
                        <img 
                          src="/corrosion/moment_rotation_backbone.png" 
                          alt="Corrosion-dependent moment-rotation backbone"
                          className="max-h-full w-auto object-contain rounded-md group-hover:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge Image
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                      Corrosion-dependent moment-rotation backbone
                    </p>
                  </div>

                  {/* 3. Bridge Geometry & Pier Detailing (Side by Side) */}
                  <div className="space-y-3 pt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Bridge geometry */}
                      <div className="space-y-2">
                        <div 
                          onClick={() => setActiveLightboxImage({
                            url: '/corrosion/bridge_geometry.png',
                            caption: 'Bridge geometry',
                            tag: 'Geometry'
                          })}
                          className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                        >
                          <div className="relative h-56 sm:h-64 overflow-hidden flex items-center justify-center bg-white p-2">
                            <img 
                              src="/corrosion/bridge_geometry.png" 
                              alt="Bridge geometry"
                              className="w-full h-full object-contain group-hover:opacity-90 transition-opacity"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-2.5 py-1 rounded shadow-xs inline-flex items-center gap-1">
                                <Maximize2 className="w-3.5 h-3.5" /> Full Size
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                          Bridge geometry
                        </p>
                      </div>

                      {/* Pier reinforcement detailing */}
                      <div className="space-y-2">
                        <div 
                          onClick={() => setActiveLightboxImage({
                            url: '/corrosion/pier_steel_detailling.png',
                            caption: 'Pier reinforcement detailing',
                            tag: 'Pier Detailing'
                          })}
                          className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                        >
                          <div className="relative h-56 sm:h-64 overflow-hidden flex items-center justify-center bg-white p-2">
                            <img 
                              src="/corrosion/pier_steel_detailling.png" 
                              alt="Pier reinforcement detailing"
                              className="w-full h-full object-contain group-hover:opacity-90 transition-opacity"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-2.5 py-1 rounded shadow-xs inline-flex items-center gap-1">
                                <Maximize2 className="w-3.5 h-3.5" /> Full Size
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                          Pier reinforcement detailing
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* 4. OpenSees Model & Three Mode-Shape Images Directly Below */}
                  <div className="space-y-4 pt-1">
                    
                    {/* OpenSees model */}
                    <div className="space-y-2.5">
                      <div 
                        onClick={() => setActiveLightboxImage({
                          url: '/corrosion/opensees_model.png',
                          caption: 'Nonlinear OpenSees model',
                          tag: 'OpenSees Model'
                        })}
                        className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col max-w-2xl mx-auto"
                      >
                        <div className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center justify-center bg-white p-2">
                          <img 
                            src="/corrosion/opensees_model.png" 
                            alt="Nonlinear OpenSees model"
                            className="max-h-full w-auto object-contain rounded-md group-hover:opacity-90 transition-opacity"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                              <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge Model
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                        Nonlinear OpenSees model
                      </p>
                    </div>

                    {/* Three mode-shape images directly below it: Mode 1, Mode 2, Mode 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                      {[
                        { url: '/corrosion/mode1.png', title: 'Mode 1' },
                        { url: '/corrosion/mode2.png', title: 'Mode 2' },
                        { url: '/corrosion/mode3.png', title: 'Mode 3' }
                      ].map((mode) => (
                        <div key={mode.title} className="space-y-2">
                          <div 
                            onClick={() => setActiveLightboxImage({
                              url: mode.url,
                              caption: mode.title,
                              tag: mode.title
                            })}
                            className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                          >
                            <div className="relative h-44 sm:h-48 overflow-hidden flex items-center justify-center bg-white p-2">
                              <img 
                                src={mode.url} 
                                alt={mode.title}
                                className="w-full h-full object-contain group-hover:opacity-90 transition-opacity"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-2 py-1 rounded shadow-xs inline-flex items-center gap-1">
                                  <Maximize2 className="w-3 h-3" /> Full Size
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                            {mode.title}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* 5. Earthquake Input */}
                  <div className="space-y-2.5 pt-1">
                    <div 
                      onClick={() => setActiveLightboxImage({
                        url: '/corrosion/earthquake_time_history.png',
                        caption: 'Earthquake ground motion',
                        tag: 'Ground Motion'
                      })}
                      className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col max-w-2xl mx-auto"
                    >
                      <div className="relative h-60 sm:h-72 w-full overflow-hidden flex items-center justify-center bg-white p-2">
                        <img 
                          src="/corrosion/earthquake_time_history.png" 
                          alt="Earthquake ground motion"
                          className="max-h-full w-auto object-contain rounded-md group-hover:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5 text-[#C49B3C]" /> Enlarge Acceleration History
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                      Earthquake ground motion
                    </p>
                  </div>

                  {/* 6. Nonlinear Response (Side by Side) */}
                  <div className="space-y-3 pt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Hysteresis loop */}
                      <div className="space-y-2">
                        <div 
                          onClick={() => setActiveLightboxImage({
                            url: '/corrosion/hysterisis_loop.png',
                            caption: 'Pier hysteresis response',
                            tag: 'Hysteresis Loop'
                          })}
                          className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                        >
                          <div className="relative h-56 sm:h-64 overflow-hidden flex items-center justify-center bg-white p-2">
                            <img 
                              src="/corrosion/hysterisis_loop.png" 
                              alt="Pier hysteresis response"
                              className="w-full h-full object-contain group-hover:opacity-90 transition-opacity"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-2.5 py-1 rounded shadow-xs inline-flex items-center gap-1">
                                <Maximize2 className="w-3.5 h-3.5" /> Full Size
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                          Pier hysteresis response
                        </p>
                      </div>

                      {/* Pier-base rotation */}
                      <div className="space-y-2">
                        <div 
                          onClick={() => setActiveLightboxImage({
                            url: '/corrosion/rotation_at_pier_base.png',
                            caption: 'Pier base rotation',
                            tag: 'Base Rotation'
                          })}
                          className="group relative cursor-pointer overflow-hidden transition-all bg-white flex flex-col"
                        >
                          <div className="relative h-56 sm:h-64 overflow-hidden flex items-center justify-center bg-white p-2">
                            <img 
                              src="/corrosion/rotation_at_pier_base.png" 
                              alt="Pier base rotation"
                              className="w-full h-full object-contain group-hover:opacity-90 transition-opacity"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-[#002147] text-xs font-semibold px-2.5 py-1 rounded shadow-xs inline-flex items-center gap-1">
                                <Maximize2 className="w-3.5 h-3.5" /> Full Size
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-center text-xs sm:text-sm font-bold text-slate-900">
                          Pier base rotation
                        </p>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            ) : (
              /* Fallback Layout */
              <div className="space-y-6">
                <h1 className="font-serif text-2xl font-bold text-[#002147]">
                  {project.title}
                </h1>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-6 mt-8 border-t border-slate-200 flex items-center justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#002147] hover:bg-[#001733] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                Close Project Dossier
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox for Zooming Images / GIFs */}
      {activeLightboxImage && (
        <div 
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightboxImage(null)}
        >
          <button 
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-4 right-4 text-white hover:text-slate-300 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-xl p-3 sm:p-5 max-h-[75vh] flex items-center justify-center shadow-2xl">
              <img 
                src={activeLightboxImage.url} 
                alt={activeLightboxImage.caption}
                className="max-h-[68vh] w-auto object-contain rounded"
              />
            </div>
            <div className="mt-4 text-center text-white max-w-2xl space-y-1">
              <span className="inline-block font-mono text-xs font-semibold text-[#C49B3C] bg-white/10 px-2 py-0.5 rounded">
                {activeLightboxImage.tag}
              </span>
              <p className="text-sm text-slate-200">
                {activeLightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
