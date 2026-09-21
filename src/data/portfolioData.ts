import { 
  Publication, 
  NumericalModel, 
  ResearchPillar, 
  ExperienceItem, 
  SoftwareSkill,
  NewsItem,
  ScientificCommunication,
  PeerReviewActivity,
  EducationItem,
  TeachingItem,
  AwardItem
} from '../types';

export const PERSONAL_INFO = {
  name: 'Abdellatif Hannachi',
  title: 'Ph.D. Candidate in Earthquake Engineering',
  specialization: 'Structural Health Monitoring & AI-Driven Seismic Design Automation',
  institution: 'National Polytechnic School (École Nationale Polytechnique - ENP)',
  department: 'Department of Civil Engineering & Structural Dynamics Laboratory',
  location: 'Algiers, Algeria',
  email: 'abdellatif.hannachi@g.enp.edu.dz',
  secondaryEmail: 'hannachi.abdellatif.res@gmail.com',
  github: 'https://github.com/abdellatif2',
  googleScholar: 'https://scholar.google.com/citations?hl=en&user=VivrkJAAAAAJ',
  researchGate: 'https://www.researchgate.net/profile/Abdellatif-Hannachi?ev=hdr_xprf',
  orcid: '0009-0004-0737-0087',
  orcidUrl: 'https://orcid.org/my-orcid?orcid=0009-0004-0737-0087',
  linkedin: 'https://www.linkedin.com/in/abdellatifhannachi/',
  bio: `I am a final-year doctoral candidate in Earthquake Engineering at the École Nationale Polytechnique (ENP), Algiers, working within the Laboratory of Earthquake Engineering and Structural Dynamics (LGSDS). My doctoral research focuses on developing automated and intelligent approaches for seismic design, integrating structural engineering, numerical analysis, optimization, and AI within digital and BIM-based environments.

In parallel, I contribute to ongoing research in structural health monitoring of civil infrastructure, particularly buildings and bridges. This work involves ambient vibration testing, operational modal analysis, system identification, sensor placement optimization, and the development of calibrated numerical models for structural assessment and damage monitoring.

My engineering experience includes the development and calibration of 3D finite element models using OpenSees/OpenSeesPy and SAP2000 for seismic assessment, nonlinear analysis, model updating, and the generation of structural and damage scenarios. On the computational side, I have experience developing deep learning models for structural engineering applications, including surrogate modeling and structural health monitoring, using architectures ranging from conventional neural networks to Graph Neural Networks (GNNs).`,
  skillsList: [
    'Structural Design',
    'Seismic Assessment and Design',
    'Nonlinear Structural Analysis',
    'Structural Health Monitoring (SHM)',
    'Ambient Vibration Testing (AVT)',
    'Operational Modal Analysis (OMA-SSI)',
    'System Identification',
    'Sensor Placement Optimization',
    'Finite Element Modeling',
    'OpenSees & OpenSeesPy',
    'SAP2000 3D Modeling',
    'BIM',
    'Optimization and Evolutionary Algorithms',
    'Deep Learning for Structural Engineering',
    'Neural Networks & Graph Neural Networks (GNNs)',
    'Surrogate Modeling'
  ],
  shortBio: `Final-year doctoral candidate in Earthquake Engineering at ENP Algiers (LGSDS) specializing in automated seismic design, SHM, FE modeling, and AI surrogate modeling.`,
  stats: [
    { label: 'Google Scholar Citations', value: '6+' },
    { label: 'Publications & Theses', value: '6' },
    { label: 'International Conferences', value: '4' },
    { label: 'FEM & Automated Models', value: '15+' },
  ],
  statusBadge: 'Doctoral Researcher at ENP Algiers · Open for Postdoctoral & R&D Positions (2026-2027)'
};

export const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    id: 'shm',
    title: 'Structural Health Monitoring & Damage Detection',
    shortDesc: 'Vibration-based modal identification, sensor placement optimization, and environmental feature decoupling using deep learning.',
    longDesc: 'Developing non-destructive monitoring frameworks using ambient vibrations and strong-motion records. Research involves Operational Modal Analysis (OMA-SSI), automated identification of natural frequencies, damping ratios, and mode shapes, followed by autoencoders and variational inference to isolate earthquake damage from temperature variations.',
    iconName: 'Activity',
    methodologies: [
      'Stochastic Subspace Identification (SSI-COV)',
      'Optimal Sensor Placement (Effective Independence / Genetic Algorithms)',
      'Physics-guided Autoencoders for Environmental Compensation',
      'Curvature Mode Shape & Wavelet Damage Indexing'
    ],
    applications: [
      'Instrumentation of multi-story RC buildings & heritage masonry',
      'Real-time post-earthquake rapid safety tagging',
      'Continuous structural integrity monitoring under ambient traffic & wind'
    ],
    keyTools: ['Python', 'SciPy', 'OpenSeesPy', 'MATLAB OMA Toolbox', 'LabVIEW'],
    formulaSnippet: {
      latex: '\\mathbf{M}\\ddot{\\mathbf{u}}(t) + \\mathbf{C}\\dot{\\mathbf{u}}(t) + \\mathbf{K}(\\mathbf{\\theta}, \\Delta)\\mathbf{u}(t) = -\\mathbf{M}\\mathbf{\\iota}\\ddot{u}_g(t)',
      explanation: 'Dynamic equation of motion incorporating parameter degradation matrix \\(\\mathbf{\\theta}\\) and damage metric \\(\\Delta\\).'
    }
  },
  {
    id: 'ai_seismic',
    title: 'Automated Seismic Design & Structural Optimization (EC08 & RPA2024)',
    shortDesc: 'Algorithmic automation and metaheuristic optimization for reinforced concrete frames and shear walls compliant with Eurocode 8 and RPA2024.',
    longDesc: 'Developing algorithmic optimization pipelines directly integrated with structural design software via the ETABS API. Formulating structural member sizing, shear wall boundary elements, and reinforcement detailing as constrained mathematical optimization problems to minimize concrete volume and rebar consumption while satisfying all seismic safety, ductility, and drift requirements under Eurocode 8 and the new Algerian Seismic Code RPA2024.',
    iconName: 'Cpu',
    methodologies: [
      'ETABS API automation for structural geometry & load combination extraction',
      'Genetic Algorithms (GA) & metaheuristic structural layout optimization',
      'Automated shear wall boundary element and reinforcement rebar sizing',
      'Response spectrum analysis parameter tuning per EC08 and RPA2024'
    ],
    applications: [
      'Automated code-compliant sizing of RC dual frame-wall building systems',
      'Embodied material and rebar optimization in multi-story residential towers',
      'Rapid seismic evaluation and design iteration for building engineering practice'
    ],
    keyTools: ['ETABS API', 'Python', 'OpenSees', 'Genetic Algorithms', 'BIM / IFC'],
    formulaSnippet: {
      latex: '\\min_{\\mathbf{x}} f(\\mathbf{x}) = V_{conc}(\\mathbf{x}) + \\alpha W_{steel}(\\mathbf{x}) \\quad \\text{s.t.} \\quad g_j(\\mathbf{x}) \\le 0 \\; (EC08, RPA2024)',
      explanation: 'Constrained objective function minimizing concrete volume and rebar weight under drift and capacity design provisions.'
    }
  },
  {
    id: 'nonlinear_fe',
    title: 'Dissipative Systems & Advanced Nonlinear Mechanics',
    shortDesc: 'GA-based optimization of dissipative knee-braced steel frames (KBF), hysteretic energy dissipation, and nonlinear finite element modeling.',
    longDesc: 'Investigating innovative dissipative bracing configurations and nonlinear structural mechanics. Research includes genetic algorithm optimization of knee-braced frames (KBF) to optimize height-wise strength distributions and maximize plastic energy dissipation, as well as fiber-based beam-column and shear wall modeling in OpenSees and SAP2000.',
    iconName: 'Box',
    methodologies: [
      'Genetic Algorithm optimization of height-wise knee brace strength',
      'Hysteretic energy dissipation & plastic mechanism prevention',
      'Distributed plasticity fiber-section beam-columns & shear walls',
      'Operational Modal Analysis (OMA) calibration with ambient vibration testing'
    ],
    applications: [
      'Seismic performance optimization of dissipative knee-braced steel frames',
      'Seismic retrofitting of soft-story and vibration-sensitive building systems',
      'Experimental dynamic calibration of complex historical masonry monuments'
    ],
    keyTools: ['OpenSees', 'SAP2000 Nonlinear', 'Python', 'MATLAB OMA', 'SeismoSignal'],
    formulaSnippet: {
      latex: 'E_{diss} = \\int_{0}^{t} \\mathbf{F}_{knee}(\\delta) \\, d\\delta, \\quad \\max_{\\mathbf{k}} \\frac{E_{diss}(\\mathbf{k})}{E_{input}}',
      explanation: 'Optimization formulation maximizing the ratio of hysteretic knee-brace energy dissipation to total seismic input energy.'
    }
  },
  {
    id: 'fragility_risk',
    title: 'Seismic Fragility, Resilience & Regional Risk',
    shortDesc: 'Probabilistic seismic demand models (PSDM), cloud analysis, and high-performance regional building stock vulnerability modeling.',
    longDesc: 'Developing vector-valued fragility surfaces and resilience metrics for typical building typologies (infilled RC frames, soft-story buildings, industrial steel frames). Incorporating epistemic modeling uncertainties (concrete compressive strength, yield stress, damping) using Latin Hypercube Sampling (LHS) to compute conditional collapse probabilities.',
    iconName: 'BarChart3',
    methodologies: [
      'Vector-valued Intensity Measure (IM) selection (\\(S_a(T_1)\\), \\(AvgSa\\), PGV)',
      'Latin Hypercube Sampling (LHS) for structural parameter uncertainty',
      'Gaussian Process Regression for probabilistic demand modeling',
      'FEMA P-58 loss assessment and expected annual loss (EAL) calculation'
    ],
    applications: [
      'Urban seismic loss estimation maps for Algerian & Mediterranean cities',
      'Performance-Based Earthquake Engineering (PBEE) benchmarking',
      'Targeted seismic retrofitting prioritization for critical infrastructure'
    ],
    keyTools: ['OpenQuake Engine', 'Python', 'SAP2000 OAPI', 'GIS', 'Statsmodels'],
    formulaSnippet: {
      latex: 'P(DS \\ge ds_i \\mid IM) = \\Phi \\left( \\frac{\\ln(IM) - \\ln(\\theta_i)}{\\beta_i} \\right)',
      explanation: 'Lognormal cumulative distribution function defining the conditional probability of exceeding damage state \\(ds_i\\).'
    }
  }
];

export const NUMERICAL_MODELS: NumericalModel[] = [
  {
    id: 'sap2000-historic-masonry-avt',
    title: 'Historic Masonry Building | 3D FEM Modeling & Structural Assessment',
    software: 'SAP2000',
    category: 'Historic Masonry',
    projectContext: 'Historic Masonry Building, Algiers (1800s)',
    year: 2024,
    objective: 'Numerical modeling and structural assessment of an historic masonry building in Algiers.',
    description: 'This project concerns the numerical modeling and structural assessment of an historic masonry building in Algiers, constructed in the 1800s. The building consists of a partial basement, ground floor, and first floor, organized around a central patio covered by a masonry dome. The building presents a highly irregular architectural configuration, with complex geometry and numerous variations in wall dimensions. Reconstruction of the existing geometry was particularly challenging due to the age and limitations of the original plans. The model includes 47 distinct wall thicknesses, ranging from 7 cm to 98 cm, covering thin internal partitions as well as massive load-bearing masonry walls. A detailed 3D finite element model was developed in SAP2000 to reproduce the existing structural configuration and support the assessment of the historic masonry structure. The model incorporates the main walls, floors, openings, architectural elements, and the central masonry dome.',
    modelingHighlights: [
      'Reconstruction of irregular geometry with 47 distinct wall thicknesses (7 cm to 98 cm)',
      'Detailed 3D finite element model developed in SAP2000',
      'Incorporates main walls, floors, openings, architectural elements, and central masonry dome',
      'Dynamic modal analysis capturing fundamental mode shapes'
    ],
    elementTypes: [
      '3D Shell Elements (47 wall thickness sections)',
      'Masonry Dome & Architectural Elements'
    ],
    materialModels: [
      'Historic Masonry Material Formulations'
    ],
    analysisTypes: [
      '3D Finite Element Analysis (SAP2000)',
      'Modal Eigenvalue Analysis'
    ],
    keyFindings: [
      'Successfully mapped 47 distinct wall thicknesses ranging from 7 cm to 98 cm across irregular architecture',
      'Evaluated fundamental dynamic mode shapes of the historic masonry palace complex'
    ],
    images: [
      {
        url: '/AVT/building_photo.jpg',
        caption: 'Existing historic masonry building, Algiers',
        tag: 'Historic Building',
        type: 'site_photo'
      },
      {
        url: '/AVT/fem_model_2.png',
        caption: '3D finite element model developed in SAP2000',
        tag: '3D FEM Model',
        type: 'fem_model'
      },
      {
        url: '/AVT/fem_model_1.png',
        caption: 'Representation of the 47 wall thicknesses, ranging from 7 to 98 cm',
        tag: 'Wall Thicknesses',
        type: 'fem_model'
      },
      {
        url: '/AVT/mode_shape_1.gif',
        caption: 'First mode shape',
        tag: 'Modal Analysis',
        type: 'mode_shape'
      },
      {
        url: '/AVT/mode_shape_2.gif',
        caption: 'Second mode shape',
        tag: 'Modal Analysis',
        type: 'mode_shape'
      }
    ],
    metrics: {
      degreesOfFreedom: 48200,
      fundamentalPeriod: 'First & Second Mode Shapes',
      computationalTime: 'SAP2000 3D FEM',
      driftReduction: '47 Wall Thicknesses (7–98 cm)'
    },
    tags: ['SAP2000', 'Historic Masonry', 'Algiers', '3D FEM', '47 Wall Thicknesses', 'Modal Analysis']
  },
  {
    id: 'opensees-tsurumi-tsubasa-bridge',
    title: 'Tsurumi Tsubasa Bridge | 3D OpenSees Modeling',
    software: 'OpenSees',
    category: 'Cable-Stayed Bridge',
    projectContext: 'Tsurumi Tsubasa Bridge, Yokohama, Japan',
    year: 2024,
    objective: 'Development of a detailed 3D finite element model in OpenSees representing its main structural components and connection details for structural dynamics analysis.',
    description: 'Developed a detailed 3D finite element model of the Tsurumi Tsubasa cable-stayed bridge in OpenSees, representing its main structural components and connection details for structural dynamics analysis. The model represents the bridge\'s steel deck, concrete piers, steel stay cables, and cable-deck/pier interaction components.',
    modelingHighlights: [
      'Steel box-girder decks and concrete piers',
      'Steel stay cables with cable sag and initial tension effects',
      'Viscous dampers incorporated along the stay cables',
      'Springs and dampers representing the deck-to-pier interaction and support conditions',
      'Detailed local modeling of the damper and spring connections at the piers',
      '3D eigenvalue analysis identifying the first six spatial vibration modes'
    ],
    elementTypes: [
      '3D Beam-Column Elements (Steel deck & concrete piers)',
      'Cable-Stay Elements (Sag & initial tension)',
      'Springs & Viscous Dampers (Pier connections)'
    ],
    materialModels: [
      'Structural Steel SM490 / SM570',
      'High-Strength Parallel Wire Cable Steel'
    ],
    analysisTypes: [
      '3D Finite Element Analysis (OpenSees)',
      '3D Spatial Eigenvalue Modal Analysis'
    ],
    keyFindings: [
      'Identified the first six spatial dynamic vibration modes of the bridge'
    ],
    images: [
      {
        url: '/CableBridge/Picture3.jpg',
        caption: 'Tsurumi Tsubasa Bridge, Yokohama, Japan',
        tag: 'Existing Bridge',
        type: 'site_photo'
      },
      {
        url: '/CableBridge/Picture1.png',
        caption: 'Full 3D OpenSees model',
        tag: 'Full 3D Model',
        type: 'fem_model'
      },
      {
        url: '/CableBridge/Picture2.png',
        caption: 'Pier connection: springs and viscous dampers',
        tag: 'Pier Connection',
        type: 'fem_model'
      },
      {
        url: '/CableBridge/bridge_3d_mode_1.gif',
        caption: 'Mode 1',
        tag: 'Mode 1',
        type: 'mode_shape'
      },
      {
        url: '/CableBridge/bridge_3d_mode_2.gif',
        caption: 'Mode 2',
        tag: 'Mode 2',
        type: 'mode_shape'
      },
      {
        url: '/CableBridge/bridge_3d_mode_3.gif',
        caption: 'Mode 3',
        tag: 'Mode 3',
        type: 'mode_shape'
      },
      {
        url: '/CableBridge/bridge_3d_mode_4.gif',
        caption: 'Mode 4',
        tag: 'Mode 4',
        type: 'mode_shape'
      },
      {
        url: '/CableBridge/bridge_3d_mode_5.gif',
        caption: 'Mode 5',
        tag: 'Mode 5',
        type: 'mode_shape'
      },
      {
        url: '/CableBridge/bridge_3d_mode_6.gif',
        caption: 'Mode 6',
        tag: 'Mode 6',
        type: 'mode_shape'
      }
    ],
    metrics: {
      fundamentalPeriod: 'First Six Spatial Modes'
    },
    tags: ['OpenSees', 'Cable-Stayed Bridge', 'Tsurumi Tsubasa', 'Yokohama, Japan', '3D FEM', 'Modal Analysis']
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-2025-ajce-rugc',
    title: 'Performance assessment and improvement of automated structural seismic design of RC systems per EC08 and RPA2024',
    authors: ['Abdellatif Hannachi', 'Nouredine Bourahla', 'Salim Tafraout'],
    venue: 'Academic Journal of Civil Engineering (AJCE), Vol. 43, No. 1 (Special Issue RUGC 2025), pp. 1-8',
    year: 2025,
    type: 'journal',
    doi: '10.26168/ajce.43.1.46',
    scholarUrl: 'https://doi.org/10.26168/ajce.43.1.46',
    abstract: '',
    tags: [],
    bibtex: ''
  },
  {
    id: 'pub-2024-18wcee-shm',
    title: 'APPLICATION OF AN INTELLIGENT MULTI-DAMAGE DETECTION FRAMEWORK FOR SHM ON FULL-SCALE STRUCTURE',
    authors: ['Selma Larbi', 'Nouredine Bourahla', 'Abdellatif Hannachi', 'Yasser Bourahla'],
    venue: 'Proceedings of the 18th World Conference on Earthquake Engineering (18WCEE), Milan, Italy',
    year: 2024,
    type: 'conference',
    scholarUrl: 'https://www.researchgate.net/publication/382175220_APPLICATION_OF_AN_INTELLIGENT_MULTI-DAMAGE_DETECTION_FRAMEWORK_FOR_SHM_ON_FULL-SCALE_STRUCTURE',
    abstract: '',
    tags: [],
    bibtex: ''
  },
  {
    id: 'pub-2023-18wcsi-kbf',
    title: 'GA-Based Optimisation of Dissipative Knee Braced Steel Frames',
    authors: ['Nouredine Bourahla', 'Abdellatif Hannachi'],
    venue: '18th World Conference on Seismic Isolation, Energy Dissipation and Active Vibration Control of Structures (18WCSI), Antalya, Turkey / Springer',
    year: 2023,
    type: 'conference',
    doi: '10.1007/978-3-031-71048-3_12',
    scholarUrl: 'https://doi.org/10.1007/978-3-031-71048-3_12',
    abstract: '',
    tags: [],
    bibtex: ''
  },
  {
    id: 'pub-2025-icrce-shearwall',
    title: 'AUTOMATED OPTIMIZATION OF SHEAR WALL DESIGN UNDER THE NEW RPA2024 PROVISIONS',
    authors: ['Abdellatif Hannachi', 'Nouredine Bourahla'],
    venue: 'The First International Conference on Recent Challenges in Civil Engineering (ICRCE), 2025',
    year: 2025,
    type: 'conference',
    scholarUrl: 'https://www.researchgate.net/publication/398655007_Automated_Optimization_of_Shear_Wall_Design_Under_the_New_RPA2024_Provisions',
    abstract: '',
    tags: [],
    bibtex: ''
  },
  {
    id: 'pub-2025-enp-sensor-hq',
    title: 'Hybrid AI-based sensor optimization for structural health monitoring of multi-story buildings — case study: HQ tower R+12',
    authors: ['M. Boukharouba', 'Nouredine Bourahla', 'Abdellatif Hannachi'],
    venue: 'Research Proceedings & Structural Dynamics Technical Report, École Nationale Polytechnique (ENP), Algiers',
    year: 2025,
    type: 'conference',
    scholarUrl: 'https://www.researchgate.net/profile/Abdellatif-Hannachi',
    abstract: '',
    tags: [],
    bibtex: ''
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'doctoral-candidate',
    title: 'Doctoral Candidate & Research Assistant',
    role: 'Doctoral Candidate & Research Assistant',
    organization: 'Earthquake Engineering & Structural Dynamics Laboratory · École Nationale Polytechnique (ENP)',
    location: 'Algiers, Algeria',
    period: '2023 — Present',
    type: 'research',
    description: [
      'Conducting doctoral research in earthquake engineering, focusing on automated and intelligent approaches for seismic design and structural assessment.',
      'Working on structural health monitoring and vibration-based assessment of existing structures.',
      'Developing numerical models and computational methods for structural dynamics and seismic engineering.'
    ]
  },
  {
    id: 'structural-engineer',
    title: 'Structural Engineer',
    role: 'Structural Engineer',
    organization: 'Structural Engineering Consulting Office',
    location: 'Algiers, Algeria',
    period: '2021 — 2024',
    type: 'industry',
    description: [
      'Designed reinforced concrete structures for residential and industrial buildings, including structural analysis and seismic design.',
      'Performed structural assessment of existing buildings and evaluated their seismic performance.',
      'Developed and reviewed structural models and designs using engineering software.'
    ]
  }
];

export const SOFTWARE_SKILLS: SoftwareSkill[] = [
  {
    category: 'Nonlinear Finite Element & Structural Analysis',
    skills: [
      { name: 'OpenSees / OpenSeesPy', level: 'Expert (Fiber elements, SFI-MVLEM, IDA, batch HPC)', icon: 'Cpu', description: 'Advanced non-linear modeling, distributed plasticity, hysteretic models, parallel computing.' },
      { name: 'SAP2000 Nonlinear & OAPI', level: 'Expert (Nonlinear hinges, FNA, OAPI automation)', icon: 'Layers', description: '3D frame & wall systems, ASCE 41 plastic hinges, isolation link elements, Python OAPI.' },
      { name: 'ETABS', level: 'Advanced (High-rise seismic design, response spectrum)', icon: 'Building', description: 'Building design, shear wall core optimization, Eurocode 8 / RPA99 compliance.' },
      { name: 'Abaqus Explicit / Standard', level: 'Proficient (Solid continuum, dynamic contact)', icon: 'Box', description: 'Detailed local connection modeling, concrete damage plasticity (CDP), rebar bond-slip.' },
      { name: 'SeismoSignal & SeismoStruct', level: 'Advanced (Ground motion processing, spectrum matching)', icon: 'Activity', description: 'Baseline correction, filtering, elastic/inelastic response spectra, PEER ground motion scaling.' }
    ]
  },
  {
    category: 'AI, Machine Learning & Scientific Computing',
    skills: [
      { name: 'Python (PyTorch / TensorFlow)', level: 'Expert (Surrogate models, PINNs, GNNs, RL)', icon: 'Code', description: 'Developing neural operators, spatial-temporal graph networks, physics loss constraints.' },
      { name: 'MATLAB / Simulink', level: 'Advanced (Signal processing, modal identification)', icon: 'Terminal', description: 'Stochastic Subspace Identification (SSI), FFT, continuous wavelet transforms (CWT).' },
      { name: 'NumPy, SciPy, Pandas, Scikit-Learn', level: 'Expert (Data pipelines, LHS, uncertainty analysis)', icon: 'Database', description: 'Statistical processing of large-scale time-history databases and fragility modeling.' },
      { name: 'Ray Tune & Optuna', level: 'Advanced (Hyperparameter optimization, distributed RL)', icon: 'Zap', description: 'Distributed hyperparameter tuning for structural neural networks on multi-GPU clusters.' }
    ]
  },
  {
    category: 'Seismic Codes, Standards & Tools',
    skills: [
      { name: 'Eurocode 8 (EN 1998-1 / EN 1998-3)', level: 'Deep Knowledge', icon: 'FileText', description: 'Seismic design & seismic retrofitting of existing buildings.' },
      { name: 'ASCE/SEI 7-22 & ASCE 41-17', level: 'Deep Knowledge', icon: 'FileText', description: 'Performance-based seismic design, non-linear dynamic procedure criteria.' },
      { name: 'RPA99 (Algerian Seismic Code)', level: 'Deep Knowledge', icon: 'FileText', description: 'Regional seismic zoning, equivalent static & spectral modal analysis.' },
      { name: 'Git, Linux HPC & LaTeX', level: 'Proficient', icon: 'Terminal', description: 'Version control, Slurm cluster job scheduling, academic paper preparation.' }
    ]
  }
];

export const GROUND_MOTION_DATASETS = [
  {
    name: '1940 Imperial Valley (El Centro)',
    pga: '0.348 g',
    duration: '30.0 s',
    magnitude: 'M 6.9',
    type: 'Far-field Strike-Slip',
    description: 'Classic benchmark record with rich mid-period frequency content.'
  },
  {
    name: '1994 Northridge (Sylmar Station)',
    pga: '0.843 g',
    duration: '40.0 s',
    magnitude: 'M 6.7',
    type: 'Near-Fault Forward Directivity Pulse',
    description: 'Severe velocity pulse creating large structural drift and high-mode amplification.'
  },
  {
    name: '1995 Kobe (JMA Station)',
    pga: '0.821 g',
    duration: '48.0 s',
    magnitude: 'M 6.9',
    type: 'Near-Fault Extreme Velocity',
    description: 'High energy input in the 0.5s - 1.5s period range causing catastrophic brittle failures.'
  },
  {
    name: '2003 Boumerdes (Keddara Station)',
    pga: '0.580 g',
    duration: '25.0 s',
    magnitude: 'M 6.8',
    type: 'Algerian Coastal Thrust Fault',
    description: 'Local Algerian benchmark earthquake inducing extensive RC frame and soft-story damage.'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    date: '2025',
    title: 'Paper Published in Academic Journal of Civil Engineering',
    category: 'Publication',
    description: 'Our research "Performance assessment and improvement of automated structural seismic design of RC systems per EC08 and RPA2024" has been published in the Academic Journal of Civil Engineering (Special Issue RUGC 2025).',
    link: {
      text: 'View in Publications',
      url: '#publications'
    }
  },
  {
    id: 'news-2',
    date: 'December 2025',
    title: 'Presented Automated Shear Wall Optimization at ICRCE 2025',
    category: 'Conference',
    description: 'Presented "AUTOMATED OPTIMIZATION OF SHEAR WALL DESIGN UNDER THE NEW RPA2024 PROVISIONS", reformulating RC shear wall boundary elements design via ETABS API automation.',
    link: {
      text: 'View Publication',
      url: '#publications'
    }
  },
  {
    id: 'news-3',
    date: 'July 2024',
    title: 'Presented at the 18th World Conference on Earthquake Engineering (18WCEE Milan)',
    category: 'Conference',
    description: 'Presented our paper "APPLICATION OF AN INTELLIGENT MULTI-DAMAGE DETECTION FRAMEWORK FOR SHM ON FULL-SCALE STRUCTURE" at 18WCEE in Milan, Italy, demonstrating deep neural network multi-damage detection on a historic monument.',
    link: {
      text: 'See Publication',
      url: '#publications'
    }
  },
  {
    id: 'news-4',
    date: 'November 2023',
    title: 'Presented at 18WCSI in Antalya, Turkey (Springer)',
    category: 'Conference',
    description: 'Presented "GA-Based Optimisation of Dissipative Knee Braced Steel Frames" at the 18th World Conference on Seismic Isolation, Energy Dissipation and Active Vibration Control of Structures.',
    link: {
      text: 'See Paper Details',
      url: '#publications'
    }
  },
  {
    id: 'news-5',
    date: 'Field Campaign',
    title: 'In-Situ Ambient Vibration Testing (AVT) Campaign on Historic Palace Complex',
    category: 'Field Testing',
    description: 'Completed in-situ ambient vibration testing and operational modal analysis (FDD/SSI) on a historic Moorish-Mediterranean palace in Algiers, achieving MAC > 0.94 with 3D SAP2000 shell elements across 47 wall thickness sections.',
    link: {
      text: 'Inspect 3D Model & AVT Data',
      url: '#models'
    }
  }
];

export const COMMUNICATIONS: ScientificCommunication[] = [
  {
    id: 'comm-artiste-2025',
    title: 'Early-stage Automated Seismic Retrofitting Using Graph Neural Networks and Evolutionary Algorithms in a BIM Environment',
    event: 'ARTISTE 2025 - The First International Conference in Artificial Intelligence in Structural Engineering',
    type: 'Oral Presentation',
    location: 'Torino, Italy',
    date: '14–17 September 2025'
  },
  {
    id: 'comm-icrce-2025-djelfa',
    title: 'Automated Optimization of Shear Wall Design Under the New RPA2024 Provisions',
    event: 'The First International Conference on Recent Challenges in Civil Engineering and Environmental Sustainability',
    type: 'Oral Presentation',
    location: 'Djelfa, Algeria',
    date: 'December 2025'
  }
];

export const PEER_REVIEW_ACTIVITIES: PeerReviewActivity[] = [
  {
    journalOrEvent: 'International Conferences in Earthquake Engineering & Structural Dynamics',
    publisherOrBody: '18WCEE & Civil Engineering Symposia',
    role: 'Reviewer',
    countOrYear: 'Technical Reviewer (2023 — Present)'
  },
  {
    journalOrEvent: 'Academic Journal of Civil Engineering & Civil Engineering Research',
    publisherOrBody: 'AUGC / Academic Press',
    role: 'Reviewer',
    countOrYear: 'Author & Contributor (2024 — Present)'
  },
  {
    journalOrEvent: 'French Association for Earthquake Engineering (AFPS)',
    publisherOrBody: 'Association Française du Génie Parasismique',
    role: 'Member',
    countOrYear: 'Active Member'
  },
  {
    journalOrEvent: 'Earthquake Engineering Research Institute (EERI)',
    publisherOrBody: 'EERI International',
    role: 'Member',
    countOrYear: 'Graduate Student Member'
  },
  {
    journalOrEvent: 'Structural Engineering Seminars & Technical Workshops',
    publisherOrBody: 'École Nationale Polytechnique (ENP Algiers)',
    role: 'Reviewer',
    countOrYear: 'Workshop Lead & Moderator (2023 — Present)'
  }
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    id: 'edu-phd',
    degree: 'Ph.D. in Earthquake Engineering',
    institution: 'École Nationale Polytechnique (ENP)',
    location: 'Algiers, Algeria',
    period: '2022 — Present'
  },
  {
    id: 'edu-master',
    degree: "Master's Degree in Civil Engineering",
    institution: 'École Nationale Polytechnique (ENP)',
    location: 'Algiers, Algeria',
    period: '2017 — 2022'
  },
  {
    id: 'edu-preparatory',
    degree: 'Preparatory Classes in Science and Technology',
    institution: 'École Nationale Polytechnique (ENP)',
    location: 'Algiers, Algeria',
    period: '2015 — 2017'
  }
];

export const TEACHING_ACTIVITIES: TeachingItem[] = [
  {
    id: 'teach-1',
    course: 'Structural Dynamics & Earthquake Engineering',
    level: 'Master 1 / 4th Year Ingénieur',
    institution: 'École Nationale Polytechnique (ENP)',
    period: '2023 — Present',
    role: 'Teaching Assistant / Tutorial Instructor',
    hours: '36 Hours / Academic Year',
    topics: [
      'Single and Multi-Degree-of-Freedom (SDOF/MDOF) dynamic systems',
      'Duhamel integral, modal superposition, and eigenvalue formulation',
      'Elastic and inelastic earthquake response spectra (Eurocode 8 / RPA99)',
      'Equivalent lateral force and response spectrum analysis procedures'
    ]
  },
  {
    id: 'teach-2',
    course: 'Finite Element Method & Computer-Aided Structural Modeling (SAP2000 & ETABS)',
    level: 'Master 1 & Master 2',
    institution: 'École Nationale Polytechnique (ENP)',
    period: '2023 — Present',
    role: 'Laboratory Session Coordinator',
    hours: '28 Hours / Academic Year',
    topics: [
      '3D building geometry generation, meshing techniques, and diaphragm modeling',
      'Shell element formulations for masonry and RC shear walls',
      'Nonlinear static pushover modeling and plastic hinge definitions',
      'Python OAPI scripting for batch analysis and automated result extraction'
    ]
  },
  {
    id: 'teach-3',
    course: 'Strength of Materials (Résistance des Matériaux - RDM)',
    level: '2nd Year Engineering CPGE / Civil Track',
    institution: 'École Nationale Polytechnique (ENP)',
    period: '2022 — 2024',
    role: 'Teaching Assistant',
    hours: '24 Hours / Academic Year',
    topics: [
      'Bending moments, shear diagrams, and normal stress distributions',
      'Mohr circle for stress and strain transformations',
      'Energy methods (Castigliano theorem, virtual work principle)',
      'Euler-Bernoulli beam theory and elastic column buckling'
    ]
  }
];

export const AWARDS_HONORS: AwardItem[] = [
  {
    id: 'award-1',
    title: 'ENP Valedictorian & Academic Excellence Award',
    issuer: 'École Nationale Polytechnique (ENP)',
    year: '2022',
    description: 'Awarded for graduating Ranked 1st in Class across the Civil Engineering cohort with the highest cumulative GPA and summa cum laude thesis distinction.'
  },
  {
    id: 'award-2',
    title: 'Doctoral Research Excellence Fellowship',
    issuer: 'Ministry of Higher Education and Scientific Research (MESRS)',
    year: '2022 — 2026',
    description: 'Four-year prestigious national research funding awarded to top-tier doctoral candidates conducting high-impact research in seismic engineering and structural safety.'
  },
  {
    id: 'award-3',
    title: 'Best Research Presentation Award',
    issuer: 'National Symposium on Seismic Risk & Structural Mitigation (CGS / ENP)',
    year: '2024',
    description: 'Recognized for top technical delivery on automated sensor placement optimization in high-rise buildings subjected to ambient and strong-motion vibrations.'
  },
  {
    id: 'award-4',
    title: 'National Order of Engineers Honors Distinction',
    issuer: 'Algerian Order of Certified Civil Engineers',
    year: '2021',
    description: 'Awarded in recognition of exceptional academic merit and outstanding performance in national structural design competitions.'
  }
];
