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
    title: 'Complex Historic Masonry Structure: 3D FEM Modeling & Ambient Vibration Testing (AVT)',
    software: 'SAP2000',
    category: 'Historic Masonry',
    projectContext: 'Structural Health & Heritage Conservation: Historic Moorish-Mediterranean Palace Complex (Algiers)',
    year: 2024,
    objective: 'Develop a high-fidelity 3D FEM shell model incorporating 47 distinct wall section thicknesses (7 cm to 98 cm), calibrated via in-situ Ambient Vibration Testing (AVT) and Operational Modal Analysis (OMA) for structural health and seismic vulnerability assessment.',
    description: 'Comprehensive structural modeling, dynamic identification, and seismic assessment of an irregular multi-story historic masonry palace. Built through successive historical periods, the building exhibits high architectural complexity including multi-level courtyards, decorative arches, vaults, timber-joist diaphragms, and a central hemispherical dome. Geometrical and architectural surveying identified 47 distinct wall section profiles—ranging from thin 7 cm interior partitions to 98 cm thick load-bearing perimeter stone walls. To evaluate structural properties without causing damage to cultural heritage fabric, an on-site Ambient Vibration Testing (AVT) campaign was performed using high-sensitivity seismic accelerometers. Frequency Domain Decomposition (FDD) and Stochastic Subspace Identification (SSI) extracted experimental natural frequencies, mode shapes, and modal damping. These served as empirical benchmarks to update and calibrate the 3D SAP2000 finite element model (optimizing masonry Young\'s modulus, shear modulus, and foundation soil spring constants), yielding modal assurance criterion (MAC) values above 0.93.',
    modelingHighlights: [
      'Discretization of 47 distinct wall sections with thicknesses precisely mapped from 7 cm to 98 cm',
      'Curved thick-shell element formulations for the central hemispherical dome, drum, and transitional pendentives',
      'Explicit modeling of timber joists, floor diaphragms, and courtyard arcade masonry piers',
      'In-situ Ambient Vibration Testing (AVT) capturing environmental micro-tremors and wind excitation',
      'Operational Modal Analysis (OMA) via FDD and SSI-DATA extracting 4 fundamental vibration modes',
      'Finite Element Model Updating (FEMU) calibrating masonry modulus (E = 1,200 to 2,400 MPa) and foundation spring stiffness',
      'High modal correlation achieved between experimental and numerical models (MAC > 0.93, average frequency error < 2.5%)',
      'Seismic vulnerability and stress concentration assessment under Eurocode 8 and Algerian code (RPA 99 / v2003)'
    ],
    elementTypes: [
      'Area Shell (Thick / Thin formulations for dome and 47 wall thicknesses)',
      'Frame (Timber floor joists & tie beams)',
      'Link / Spring Elements (Soil-Structure Interaction under stone footings)',
      'Constraint Diaphragms (Semi-rigid floor modeling)'
    ],
    materialModels: [
      'Calibrated Linear-Elastic Masonry with cracked stiffness factors',
      'Heritage Rubble Stone & Lime Mortar (E = 1,800 MPa, rho = 21 kN/m3, nu = 0.20)',
      'Dressed Stone & Fired Brick Masonry (E = 2,200 - 2,400 MPa)',
      'Traditional Timber Joists (E = 9,500 MPa)'
    ],
    analysisTypes: [
      'Modal Eigenvalue & Ritz Extraction',
      'Operational Modal Analysis (OMA: FDD & SSI)',
      'Parametric Model Updating & Sensitivity Analysis',
      'Multi-Directional Response Spectrum Analysis (RPA 99 & Eurocode 8)',
      'In-Plane Shear and Out-of-Plane Flexural Stress Check'
    ],
    keyFindings: [
      'Modeled and classified 47 distinct wall sections (7 cm to 98 cm); the massive 98 cm perimeter walls resist over 64% of total base shear.',
      'In-situ AVT successfully identified the fundamental coupled transverse-torsional mode at 2.61 Hz (T1 = 0.383 s), closely matched by the calibrated FEM model at 2.63 Hz (error +0.77%, MAC = 0.96).',
      'FE model updating revealed that standard empirical code formulas overestimated fundamental periods by 32% because they neglected the stiffening contribution of masonry vaults and arch keystones.',
      'Stress distribution analysis highlighted critical tension concentrations around the drum base of the central dome and upper window lintels, pinpointing exact locations for non-invasive composite tie-rod reinforcement.'
    ],
    images: [
      {
        url: './AVT/fem_model_1.png',
        caption: 'High-fidelity 3D finite element shell discretization in SAP2000 representing the multi-level historic masonry palace with 47 distinct wall thickness sections and load-bearing perimeter walls.',
        tag: 'FEM Model (3D Shell Mesh)',
        type: 'fem_model'
      },
      {
        url: './AVT/mode_shape_1.gif',
        caption: 'Animated dynamic mode shape oscillation of the masonry palace structure identified through in-situ Ambient Vibration Testing (AVT) and Operational Modal Analysis (OMA).',
        tag: 'Dynamic Mode Shape 1 (Animation)',
        type: 'mode_shape'
      },
      {
        url: './AVT/mode_shape_2.gif',
        caption: 'Animated mode shape vibration showing coupled transverse-torsional response under operational ambient vibrations, matching calibrated modal properties (MAC > 0.94).',
        tag: 'Dynamic Mode Shape 2 (Animation)',
        type: 'mode_shape'
      },
      {
        url: './AVT/fem_model_2.png',
        caption: 'Detailed 3D numerical model perspective displaying wall thickness assignments, arcade pier elements, floor diaphragm constraints, and foundation spring boundaries.',
        tag: 'FEM Model (Structural Discretization)',
        type: 'fem_model'
      },
      {
        url: './AVT/building_photo.jpg',
        caption: 'Field photograph of the surveyed historic Moorish-Mediterranean masonry structure in Algiers investigated during the Ambient Vibration Testing (AVT) experimental campaign.',
        tag: 'In-Situ Field Survey',
        type: 'site_photo'
      }
    ],
    wallThicknessSpecs: {
      totalSections: 47,
      minThickness: '7 cm (0.07 m)',
      maxThickness: '98 cm (0.98 m)',
      sampleSections: [
        { id: 'W_EXT_98', name: 'Perimeter Basal Wall', thickness: '98 cm', material: 'Rubble stone masonry with lime mortar', role: 'Main load-bearing foundation retaining & perimeter shear wall' },
        { id: 'W_EXT_75', name: 'Facade External Wall', thickness: '75 cm', material: 'Dressed ashlar stone & brick coursing', role: 'Primary facade lateral force resisting system' },
        { id: 'W_INT_55', name: 'Courtyard Arcade Piers', thickness: '55 cm', material: 'Solid fired brick with hydraulic lime', role: 'Arcade structural support and interior shear transfers' },
        { id: 'W_INT_40', name: 'First Floor Bearing Wall', thickness: '40 cm', material: 'Double-wythe brick masonry', role: 'Gravity & lateral partition support' },
        { id: 'W_DOME_28', name: 'Roof Dome & Drum Shell', thickness: '28 cm', material: 'Curved fired brick masonry shell', role: 'Central dome vaulting and radial arch support' },
        { id: 'W_PART_15', name: 'Secondary Internal Walls', thickness: '15 cm', material: 'Single-wythe hollow/solid brick', role: 'Internal room division and secondary stability' },
        { id: 'W_SCRN_07', name: 'Decorative & Screen Walls', thickness: '7 cm', material: 'Thin brick / plaster infill screen', role: 'Non-structural partition and decorative arcade infill' }
      ]
    },
    ambientVibrationTesting: {
      sensorLayout: 'Triaxial high-sensitivity piezoelectric seismic accelerometers deployed at 18 nodal stations across ground, 1st floor, terrace, and dome base.',
      acquisitionDuration: '60 minutes continuous recording per setup under environmental ambient excitation (wind, micro-tremors).',
      samplingRate: '200 Hz (Nyquist frequency 100 Hz, anti-aliasing filtered at 25 Hz).',
      idMethods: ['Enhanced Frequency Domain Decomposition (EFDD)', 'Stochastic Subspace Identification (SSI-DATA)', 'Peak-Picking (PP)'],
      modalComparison: [
        { mode: 1, label: 'Transverse-Torsional coupled mode', expFreq: '2.61 Hz (0.383 s)', femFreq: '2.63 Hz (0.380 s)', error: '+0.77%', mac: '0.96', damping: '2.8%' },
        { mode: 2, label: 'Longitudinal flexural translation', expFreq: '3.15 Hz (0.317 s)', femFreq: '3.23 Hz (0.310 s)', error: '+2.54%', mac: '0.94', damping: '3.1%' },
        { mode: 3, label: 'Dominant torsional global mode', expFreq: '4.42 Hz (0.226 s)', femFreq: '4.55 Hz (0.220 s)', error: '+2.94%', mac: '0.93', damping: '3.6%' },
        { mode: 4, label: '2nd Transverse + Local Dome breathing mode', expFreq: '6.12 Hz (0.163 s)', femFreq: '6.30 Hz (0.159 s)', error: '+2.94%', mac: '0.91', damping: '4.2%' }
      ]
    },
    metrics: {
      degreesOfFreedom: 18420,
      fundamentalPeriod: 'T1 = 0.38 s (f1 = 2.61 Hz)',
      computationalTime: '1.8 min (Modal) / 6.5 min (RSA)',
      driftReduction: 'Calibrated to In-Situ AVT (MAC > 0.94)'
    },
    codeSnippet: {
      language: 'python',
      fileName: 'sap2000_masonry_47_sections_setup.py',
      code: `import comtypes.client
import numpy as np

# 1. Initialize SAP2000 OAPI Connection
helper = comtypes.client.CreateObject('SAP2000v1.Helper')
helper = helper.QueryInterface(comtypes.client.lazybind.IUnknown)
SapModel = helper.GetObject('CSI.SAP2000.API.SapObject').SapModel

# 2. Define Material Properties for Historical Masonry
mat_name = "Heritage_Masonry"
SapModel.PropMaterial.SetMaterial(mat_name, 2)  # Masonry/Concrete type
# E = 2100 MPa, nu = 0.20, G = 875 MPa
SapModel.PropMaterial.SetMPIsotropic(mat_name, 2100000.0, 0.20, 0.00001)
SapModel.PropMaterial.SetWeightAndMass(mat_name, 1, 21.0) # Weight density: 21 kN/m3

# 3. Parametric Batch Definition of 47 Wall Section Thicknesses (0.07m to 0.98m)
wall_thicknesses_cm = [
    7, 10, 12, 15, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 42, 45, 
    48, 50, 52, 55, 58, 60, 62, 65, 68, 70, 72, 75, 78, 80, 82, 85, 
    88, 90, 92, 95, 98 # 47 section variations with intermediate wythes
]

for t_cm in wall_thicknesses_cm:
    sec_name = f"WALL_THK_{t_cm}CM"
    t_meters = t_cm / 100.0
    # SetAreaShell: Shell type (1=Shell Thick), Material, Thickness, Bending Thickness
    SapModel.PropArea.SetShell_1(sec_name, 1, True, mat_name, 0.0, t_meters, t_meters)
    print(f"Created Section: {sec_name} (Thickness = {t_meters:.2f} m)")

# 4. Extract Modal Frequencies for AVT Model Updating
SapModel.Analyze.RunAnalysis()
ret = SapModel.Results.ModalPeriod()
periods = ret[4] # Periods array
print("\\n--- Calibrated Modal Frequencies ---")
for i in range(4):
    freq = 1.0 / periods[i]
    print(f"Mode {i+1}: f = {freq:.3f} Hz (T = {periods[i]:.3f} s)")`
    },
    tags: ['SAP2000', 'Historic Masonry', 'Ambient Vibration Testing', 'Operational Modal Analysis', 'Model Updating', '47 Wall Sections', 'Heritage Conservation']
  },
  {
    id: 'opensees-12story-dual-frame',
    title: '12-Story Dual Frame-Wall RC Building under Near-Fault Pulses',
    software: 'OpenSeesPy',
    category: 'Shear Wall System',
    projectContext: 'Ph.D. Doctoral Research: Nonlinear Response & AI Surrogate Training on 12-Story RC System',
    year: 2025,
    objective: 'Simulate high-mode effects, shear-flexure interaction, and rebar strain accumulation under velocity pulse-like ground motions.',
    description: 'A 3D multi-degree-of-freedom model of a 12-story RC dual frame-shear wall structure located in high seismic zone (PGA = 0.45g). Columns and beams are modeled with force-based beam-column elements with fiber sections (Concrete02 Kent-Park confined core, unconfined cover, and Steel02 Giuffre-Menegotto-Pinto). Shear walls utilize SFI-MVLEM elements capturing flexural cracking and shear degradation.',
    modelingHighlights: [
      'Force-Based Fiber Beam-Column Elements with 5 Gauss-Lobatto integration points per member',
      'SFI-MVLEM (Shear-Flexure-Interaction Multi-Vertical-Line-Element-Model) for core shear walls',
      'Corotational geometric transformation capturing P-Delta and large displacement effects',
      'Rayleigh damping calibrated to 2.5% at \\(T_1 = 1.14\\text{ s}\\) and \\(T_3 = 0.28\\text{ s}\\)',
      'Rigid diaphragm constraints using OpenSees `rigidDiaphragm` multi-point constraints'
    ],
    elementTypes: ['forceBeamColumn', 'SFI_MVLEM', 'zeroLength (rigid link)', 'rigidDiaphragm'],
    materialModels: ['Concrete02', 'Steel02', 'ElasticIsotropic'],
    analysisTypes: ['Modal Eigenvalue', 'Displacement-Controlled 3D Pushover', 'Nonlinear Time-History Analysis (NLTHA) with 80 PEER records', 'Incremental Dynamic Analysis (IDA)'],
    keyFindings: [
      'Near-fault forward-directivity pulses amplified the top-story drift ratio by 42% compared to far-field records with identical PGA.',
      'SFI-MVLEM correctly predicted shear sliding failure at the plastic hinge zone of the ground floor shear wall.',
      'Model was automated via Python to run 4,000 parallel cloud simulations, serving as training dataset for a Transformer-based surrogate model.'
    ],
    codeSnippet: {
      language: 'python',
      fileName: 'opensees_dual_wall_fiber.py',
      code: `import openseespy.opensees as ops
import numpy as np

# 1. Initialize OpenSees Model
ops.wipe()
ops.model('basic', '-ndm', 3, '-ndf', 6)

# 2. Material Definitions: Confined Concrete, Unconfined Cover, Steel Rebar
fc_unconfined = -25.0e3  # kPa
fc_confined = -32.0e3    # kPa (Mander model)
eps_c0 = -0.002
eps_cu = -0.006
fy_steel = 420.0e3       # kPa
Es_steel = 200.0e6       # kPa

ops.uniaxialMaterial('Concrete02', 1, fc_confined, -0.004, -6.4e3, -0.02, 0.1, 2.5e3, 0.05)
ops.uniaxialMaterial('Concrete02', 2, fc_unconfined, eps_c0, -5.0e3, eps_cu, 0.1, 2.5e3, 0.05)
ops.uniaxialMaterial('Steel02', 3, fy_steel, Es_steel, 0.015, 18.5, 0.925, 0.15)

# 3. Create Fiber Section for 600x600mm RC Column
ops.section('Fiber', 101, '-GJ', 1.0e8)
# Confined core fiber patch
ops.patch('rect', 1, 12, 12, -0.25, -0.25, 0.25, 0.25)
# Unconfined outer covers
ops.patch('rect', 2, 2, 14, -0.30, -0.30, -0.25, 0.30)
ops.patch('rect', 2, 2, 14, 0.25, -0.30, 0.30, 0.30)
# Longitudinal Steel Rebars (8x phi25)
ops.layer('straight', 3, 4, 0.000491, -0.22, -0.22, -0.22, 0.22)
ops.layer('straight', 3, 4, 0.000491, 0.22, -0.22, 0.22, 0.22)

# 4. Geometric Transformation & Element Definition
ops.geomTransf('Corotational', 1, 0.0, 0.0, 1.0)
ops.beamIntegration('Lobatto', 1, 101, 5)

# 5. Non-linear Dynamic Solver Settings
ops.constraints('Transformation')
ops.numberer('RCM')
ops.system('BandGeneral')
ops.test('NormDispIncr', 1.0e-5, 100, 2)
ops.algorithm('KrylovNewton')
ops.integrator('Newmark', 0.5, 0.25)
print("Model initialized successfully. Ready for NLTHA execution.")`
    },
    metrics: {
      degreesOfFreedom: 4320,
      fundamentalPeriod: 'T1 = 1.14 s, T2 = 0.38 s',
      computationalTime: '12.4 min / ground motion',
      aiSurrogateSpeedup: '3,800x faster (< 0.2s)'
    },
    hysteresisCurve: {
      xLabel: 'Roof Lateral Drift (%)',
      yLabel: 'Normalized Base Shear (V / W)',
      points: [
        { x: -2.5, y: -0.28 }, { x: -2.0, y: -0.27 }, { x: -1.5, y: -0.25 }, { x: -1.0, y: -0.21 },
        { x: -0.5, y: -0.14 }, { x: 0.0, y: 0.0 }, { x: 0.5, y: 0.15 }, { x: 1.0, y: 0.22 },
        { x: 1.5, y: 0.26 }, { x: 2.0, y: 0.28 }, { x: 2.5, y: 0.29 }, { x: 2.0, y: 0.22 },
        { x: 1.0, y: 0.08 }, { x: 0.0, y: -0.05 }, { x: -1.0, y: -0.19 }, { x: -2.0, y: -0.26 }
      ]
    },
    tags: ['OpenSeesPy', 'Fiber Elements', 'SFI-MVLEM', 'Nonlinear Time History', 'P-Delta', 'Dual System']
  },
  {
    id: 'sap2000-8story-shm-benchmark',
    title: '8-Story Instrumented RC Frame with Simulated SHM Sensor Grid',
    software: 'SAP2000',
    category: 'SHM Instrumented Building',
    projectContext: 'National Structural Health Monitoring Research Project & Field Test Validation',
    year: 2024,
    objective: 'Simulate triaxial accelerometer sensor network response, evaluate SSI modal extraction, and test progressive stiffness degradation detection.',
    description: 'Full 3D finite element model constructed in SAP2000 with Python OAPI (Open Application Programming Interface) automation. Simulates the dynamic response of an 8-story reinforced concrete building with asymmetric floor plan. The model incorporates lumped plasticity nonlinear hinges (ASCE 41-17 P-M2-M3 and M3) with Takeda hysteretic rules to benchmark sensor-based damage localization algorithms.',
    modelingHighlights: [
      'SAP2000 OAPI automated model generation & continuous parameter tuning',
      'ASCE 41-17 Table 10-7 P-M2-M3 interacting plastic hinges at column ends',
      'Takeda degrading hysteresis rule capturing pinching and stiffness deterioration',
      'Synthetic ambient excitation (Gaussian white noise + traffic spectrum) injected at foundation',
      'Simulated multi-channel triaxial sensor array with 5% measurement noise'
    ],
    elementTypes: ['Frame (3D Beam/Column)', 'Area (Shell Thick)', 'Link/Support Spring (Soil-Structure Interaction)'],
    materialModels: ['Concrete C30/37 with cracking reduction factor (0.5Ig, 0.35Ib)', 'B500B Steel'],
    analysisTypes: ['Modal Ritz & Eigen', 'Multi-Step Fast Nonlinear Analysis (FNA)', 'ASCE 41-17 Nonlinear Static Pushover', 'Stochastic Subspace Ambient Simulation'],
    keyFindings: [
      'Identified first 5 modal frequencies (f1 = 0.88 Hz, f2 = 1.02 Hz, f3 = 1.45 Hz) with 98.6% MAC (Modal Assurance Criterion) against field ambient vibration testing.',
      'Demonstrated that a 15% stiffness loss in ground floor beams produces a 4.1% shift in fundamental frequency, localized via our proposed wavelet curvature index.',
      'Automated batch runs in SAP2000 via Python script to produce 2,500 damage scenarios for machine learning classifier training.'
    ],
    codeSnippet: {
      language: 'python',
      fileName: 'sap2000_oapi_shm_automation.py',
      code: `import comtypes.client
import numpy as np

# 1. Connect to running SAP2000 instance via OAPI
helper = comtypes.client.CreateObject('SAP2000v1.Helper')
helper = helper.QueryInterface(comtypes.client.lazybind.IUnknown)
SapModel = helper.GetObject('CSI.SAP2000.API.SapObject').SapModel

# 2. Unlock model and apply parametric damage (stiffness reduction)
SapModel.SetModelIsLocked(False)
target_frame = "C_G1_Story1"
current_prop = "COL_60x60"

# Apply 30% flexural stiffness reduction (E*I) to simulate seismic crack
mod_factors = [1.0, 1.0, 1.0, 1.0, 0.70, 0.70, 1.0, 1.0] # Axial, Shear, Torsion, I22, I33...
SapModel.FrameObj.SetModifiers(target_frame, mod_factors)

# 3. Run Modal Analysis
SapModel.Analyze.RunAnalysis()

# 4. Extract Natural Frequencies & Mode Shapes for Virtual Sensor Nodes
sensor_joints = ["J_Story1", "J_Story3", "J_Story5", "J_Story8"]
ret = SapModel.Results.ModalPeriod()
periods = ret[4] # Array of periods for modes 1..N
freqs = [1.0 / p for p in periods[:6]]

print(f"Damaged State Fundamental Frequency: {freqs[0]:.4f} Hz")
print("Virtual accelerometer records extracted successfully.")`
    },
    metrics: {
      degreesOfFreedom: 2160,
      fundamentalPeriod: 'T1 = 1.13 s (0.88 Hz)',
      computationalTime: '35 s (Modal) / 4.2 min (FNA)',
      driftReduction: 'Verified to ASCE 41-17 Limits'
    },
    hysteresisCurve: {
      xLabel: 'Hinge Rotation \\(\\theta\\) (rad)',
      yLabel: 'Bending Moment \\(M_3\\) (kN·m)',
      points: [
        { x: -0.025, y: -420 }, { x: -0.018, y: -480 }, { x: -0.008, y: -470 }, { x: -0.003, y: -310 },
        { x: 0.0, y: 0 }, { x: 0.003, y: 315 }, { x: 0.008, y: 475 }, { x: 0.018, y: 485 },
        { x: 0.025, y: 430 }, { x: 0.015, y: 220 }, { x: 0.005, y: 50 }, { x: 0.0, y: -40 },
        { x: -0.010, y: -350 }, { x: -0.020, y: -460 }
      ]
    },
    tags: ['SAP2000', 'Python OAPI', 'ASCE 41-17', 'Damage Localization', 'Modal Analysis', 'Takeda Hysteresis']
  },
  {
    id: 'opensees-isolated-bridge',
    title: 'Lead-Rubber Bearing (LRB) Base-Isolated Multi-Span Bridge',
    software: 'OpenSees',
    category: 'Base Isolated',
    projectContext: 'Seismic Mitigation of Critical Transport Infrastructure Under Pulse Earthquakes',
    year: 2024,
    objective: 'Evaluate isolation efficiency, deck displacement demands, and residual pier drift under maximum considered earthquakes (MCE).',
    description: 'Nonlinear model of a 3-span continuous prestressed concrete box-girder bridge supported on reinforced concrete circular piers with Lead-Rubber Bearings (LRB). The bearings are modeled with OpenSees `elastomericBearingBoucWen` elements capturing bi-directional hysteretic coupling and post-yield stiffness.',
    modelingHighlights: [
      'elastomericBearingBoucWen element with coupled 2D shear plasticity',
      'Fiber section RC piers with Steel01 and Concrete01 models',
      'Impact/gap contact elements (`impactMaterial`) at bridge abutment expansion joints',
      'Nonlinear soil springs modeled with PySimple1 and TzSimple1 p-y curves at foundation piles'
    ],
    elementTypes: ['elastomericBearingBoucWen', 'nonlinearBeamColumn', 'zeroLength (Abutment Pounding)', 'p-y soil elements'],
    materialModels: ['Concrete01', 'Steel01', 'ImpactMaterial', 'BoucWen'],
    analysisTypes: ['Bidirectional Non-Linear Time-History Analysis', 'Bearing Displacement Orbit Tracking', 'Pounding Assessment'],
    keyFindings: [
      'Base isolation reduced pier base shear by 68% and top-pier curvature ductility demand by 74%.',
      'Deck displacement stayed within the 350 mm bearing displacement capacity even under 1994 Northridge (Sylmar) record.',
      'Identified critical abutment clearance threshold (180 mm) to prevent destructive bridge deck pounding.'
    ],
    codeSnippet: {
      language: 'tcl',
      fileName: 'bridge_lrb_isolation.tcl',
      code: `# OpenSees TCL Model: Lead-Rubber Bearing Isolation Element
# Node 1: Pier Top, Node 2: Girder Base
node 1   0.0   0.0   8.0
node 2   0.0   0.0   8.4

# Bearing parameters: kInit, qd (yield strength), alpha (post-yield ratio)
set kInit  15000.0 ; # kN/m
set qd     120.0   ; # kN
set alpha  0.10    ; # Post-yield stiffness ratio
set Cd     50.0    ; # Viscous damping coefficient

# Element: elastomericBearingBoucWen tag iNode jNode kInit qd alpha mu eta beta gamma ...
element elastomericBearingBoucWen 101 1 2 $kInit $qd $alpha 1.0 1.0 0.5 0.5 0.0 0.0 1.0 -orient 0 1 0 0 0 1

puts "Lead Rubber Bearing Element successfully created."`
    },
    metrics: {
      driftReduction: '68% Base Shear Reduction',
      fundamentalPeriod: 'Isolated T = 2.45 s (Fixed = 0.62 s)',
      computationalTime: '8.5 min / run',
      degreesOfFreedom: 1140
    },
    hysteresisCurve: {
      xLabel: 'Bearing Shear Displacement (mm)',
      yLabel: 'Lateral Force (kN)',
      points: [
        { x: -300, y: -260 }, { x: -200, y: -220 }, { x: -100, y: -180 }, { x: -20, y: -120 },
        { x: 0, y: 0 }, { x: 20, y: 120 }, { x: 100, y: 180 }, { x: 200, y: 220 },
        { x: 300, y: 260 }, { x: 250, y: 190 }, { x: 100, y: 60 }, { x: 0, y: -60 },
        { x: -100, y: -140 }, { x: -250, y: -230 }
      ]
    },
    tags: ['OpenSees', 'Base Isolation', 'Lead Rubber Bearings', 'Bridge Engineering', 'Bouc-Wen', 'Pounding']
  },
  {
    id: 'opensees-steel-mrf-brb',
    title: '6-Story Steel Moment Frame with Buckling-Restrained Braces (BRB)',
    software: 'OpenSees',
    category: 'Steel MRF',
    projectContext: 'Comparative Seismic Performance of BRBF vs Traditional SMF with AI Optimization',
    year: 2024,
    objective: 'Model hysteretic energy dissipation of BRBs with Steel02 / Pinching4 and optimize brace placement across height using Genetic Algorithms.',
    description: 'A 6-story 3-bay steel building frame designed to AISC 341-16 and Eurocode 8. Beams and columns are modeled using distributed plasticity beam-column elements with W-shape fiber sections. BRBs are modeled as nonlinear truss elements with asymmetric yielding/strain hardening in compression and tension.',
    modelingHighlights: [
      'W-section fiber discretization for HEB and IPE profiles',
      'Asymmetric tension-compression hysteretic yield core model for BRBs',
      'Panel zone shear distortion modeled via Krawinkler parallelogram joint model',
      'P-Delta leaning column to capture overall building P-Delta effects'
    ],
    elementTypes: ['dispBeamColumn', 'corotTruss', 'zeroLength (Krawinkler Panel Zone)'],
    materialModels: ['Steel02 (Giuffre-Menegotto-Pinto)', 'Fatigue Material'],
    analysisTypes: ['Cyclic Loading Protocol (AISC 341)', 'Dynamic Shake-Table Validation', 'AI Genetic Algorithm Optimization'],
    keyFindings: [
      'BRB system concentrated 85% of total hysteretic plastic energy dissipation away from main gravity beams and columns.',
      'AI optimization algorithm reduced total required brace steel tonnage by 18.5% while reducing peak inter-story drift from 1.8% to 0.72%.',
      'No residual story drift was observed up to 1.2% roof drift due to elastic reserve moment frame action.'
    ],
    codeSnippet: {
      language: 'python',
      fileName: 'opensees_brb_frame_optimizer.py',
      code: `import openseespy.opensees as ops

# BRB Nonlinear Core Material (Tension/Compression Hardening)
ops.uniaxialMaterial('Steel02', 10, 240.0e3, 200.0e6, 0.025, 20, 0.925, 0.15)

# BRB Truss Element Definition
ops.element('corotTruss', 501, 11, 22, 0.0028, 10) # 28 cm^2 steel core area

# Panel Zone Modeling (Krawinkler Model)
ops.uniaxialMaterial('Bilinear', 20, 1.2e5, 0.03)
ops.element('zeroLength', 601, 101, 102, '-mat', 20, '-dir', 6)
print("Steel MRF with BRB elements initialized.")`
    },
    metrics: {
      driftReduction: '58% Inter-Story Drift Reduction',
      fundamentalPeriod: 'T1 = 0.74 s (Unbraced = 1.22 s)',
      computationalTime: '3.1 min / run',
      degreesOfFreedom: 864
    },
    hysteresisCurve: {
      xLabel: 'Brace Axial Strain \\(\\varepsilon\\) (%)',
      yLabel: 'Axial Force (kN)',
      points: [
        { x: -2.0, y: -820 }, { x: -1.5, y: -780 }, { x: -0.8, y: -720 }, { x: -0.15, y: -600 },
        { x: 0.0, y: 0 }, { x: 0.15, y: 600 }, { x: 0.8, y: 690 }, { x: 1.5, y: 740 },
        { x: 2.0, y: 780 }, { x: 1.2, y: 350 }, { x: 0.0, y: -200 }, { x: -1.0, y: -680 }
      ]
    },
    tags: ['OpenSees', 'Steel MRF', 'BRB', 'Panel Zone', 'Genetic Algorithms', 'AISC 341']
  },
  {
    id: 'sap2000-highrise-corewall',
    title: '30-Story High-Rise RC Core-Wall with Outriggers & Viscous Dampers',
    software: 'SAP2000',
    category: 'RC Frame',
    projectContext: 'Tall Building Seismic Vulnerability & Vibration Mitigation Study',
    year: 2025,
    objective: 'Analyze core-wall overturning moments, outrigger truss engagement, and damper energy dissipation under subduction earthquakes.',
    description: '30-story 105-meter high-rise building with reinforced concrete central shear core, perimeter composite CFT columns, structural steel outrigger trusses at stories 15 and 30, and nonlinear fluid viscous dampers (FVD). The model was analyzed in SAP2000 with geometric nonlinear P-Delta plus large displacements.',
    modelingHighlights: [
      'Layered Shell Elements for nonlinear RC core wall with rebar and concrete layers',
      'Nonlinear Maxwell Dampers (`Damper - Bilinear`) for outrigger connections',
      'P-Delta with Large Displacements for high-rise stability verification',
      'Comprehensive modal spectral & fast nonlinear response history analysis'
    ],
    elementTypes: ['Layered Shell (Nonlinear Wall)', 'Frame (CFT Column)', 'Link (Viscous Damper)', 'Truss (Outrigger)'],
    materialModels: ['Nonlinear Concrete Layer', 'Von Mises Steel', 'Maxwell Fluid Viscous'],
    analysisTypes: ['Fast Nonlinear Analysis (FNA)', 'Response Spectrum ASCE 7-22', 'Direct Integration NLTHA (10 Records)'],
    keyFindings: [
      'Outrigger trusses engaged perimeter columns, reducing core wall base overturning moment by 34%.',
      'Fluid viscous dampers added 12% supplementary equivalent damping, cutting roof acceleration from 0.82g to 0.44g.',
      'Inter-story drift ratio maintained below 1.0% under severe 2,475-year return period earthquake.'
    ],
    codeSnippet: {
      language: 'python',
      fileName: 'sap2000_tall_building_damper.py',
      code: `# Script configuring SAP2000 Damper Links
# Damper exponential force: F = C * sgn(v) * |v|^alpha
damper_prop = "FVD_500kN_s_m"
c_val = 650.0   # kN*(s/m)^alpha
alpha_exp = 0.35 # Non-linear velocity exponent

# Assign to outrigger top diagonal link
# LinkObj.SetDamperProperty(damper_name, c_val, alpha_exp)`
    },
    metrics: {
      degreesOfFreedom: 18400,
      fundamentalPeriod: 'T1 = 3.28 s, T2 = 1.05 s, T3 = 0.48 s',
      driftReduction: '46% Peak Acceleration Reduction',
      computationalTime: '45 min (Direct Integration NLTHA)'
    },
    hysteresisCurve: {
      xLabel: 'Damper Stroke / Velocity (m/s)',
      yLabel: 'Damping Force (kN)',
      points: [
        { x: -0.6, y: -580 }, { x: -0.4, y: -510 }, { x: -0.2, y: -410 }, { x: -0.05, y: -260 },
        { x: 0.0, y: 0 }, { x: 0.05, y: 260 }, { x: 0.2, y: 410 }, { x: 0.4, y: 510 },
        { x: 0.6, y: 580 }, { x: 0.3, y: 460 }, { x: 0.1, y: 320 }, { x: 0.0, y: 0 }
      ]
    },
    tags: ['SAP2000', 'Tall Buildings', 'Core Wall', 'Outriggers', 'Fluid Viscous Dampers', 'Layered Shell']
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
    id: 'phd-candidate',
    title: 'Ph.D. Candidate in Earthquake Engineering',
    role: 'Doctoral Researcher',
    organization: 'National Polytechnic School (École Nationale Polytechnique - ENP)',
    location: 'Algiers, Algeria',
    period: '2022 — Present (Expected Defense: 2026)',
    type: 'education',
    description: [
      'Doctoral research: "AI-Aided Structural Health Monitoring and Automated Seismic Design of RC Systems per Eurocode 8 and RPA2024", under the supervision of Prof. Nouredine Bourahla.',
      'Developed automated optimization pipelines coupling ETABS via API and finite element models (OpenSees, SAP2000) for code-compliant structural member sizing and sensor placement.',
      'Designed Genetic Algorithm (GA) frameworks for optimal sensor placement in multi-story buildings and historic monuments, and for knee-braced steel frame dissipation.',
      'Published and presented research in peer-reviewed venues including the Academic Journal of Civil Engineering, 18th World Conference on Earthquake Engineering (18WCEE Milan), and 18WCSI Antalya.'
    ],
    skillsUsed: ['OpenSees', 'SAP2000', 'ETABS API', 'Python', 'Structural Dynamics', 'SHM', 'RPA2024']
  },
  {
    id: 'msc-enp',
    title: 'M.Sc. & State Engineer Degree in Civil Engineering',
    role: 'State Engineer (Graduated Valedictorian / Ranked 1st in Class)',
    organization: 'École Nationale Polytechnique (ENP)',
    location: 'Algiers, Algeria',
    period: '2017 — 2022',
    type: 'education',
    description: [
      'Graduation Thesis: "Etude d\'un bâtiment contreventé par des portiques en béton préfabriqué" (Dynamic analysis and seismic design of precast concrete framed structures).',
      'Advanced coursework: Non-Linear Finite Element Analysis, Structural Dynamics, Continuum Mechanics, Seismic Resistant Design (Eurocode 8 & RPA99), Soil-Structure Interaction.'
    ],
    skillsUsed: ['SAP2000', 'ETABS', 'MATLAB', 'Eurocode 8', 'RPA99', 'Precast Concrete']
  },
  {
    id: 'teaching-ta',
    title: 'Graduate Teaching Assistant',
    role: 'Instructor & Lab Lead',
    organization: 'National Polytechnic School (ENP)',
    location: 'Algiers, Algeria',
    period: '2023 — Present',
    type: 'teaching',
    description: [
      'Led computer lab sessions for "Nonlinear Finite Element Modeling of Structures" using OpenSees and SAP2000 for Master-level civil engineering students (45+ students/year).',
      'Supervised 4 Master degree graduation capstone projects on seismic isolation, pushover analysis, and vibration-based damage detection.',
      'Conducted tutorials on Structural Dynamics (SDOF/MDOF modal response, Fourier transforms, response spectrum method).'
    ],
    skillsUsed: ['OpenSees', 'SAP2000', 'Teaching', 'Academic Mentorship', 'Structural Dynamics']
  },
  {
    id: 'structural-consultant',
    title: 'Computational Structural Engineering Consultant (Part-Time)',
    role: 'Seismic & Structural Specialist',
    organization: 'Civil Engineering Consulting Bureau & Seismic Audits',
    location: 'Algiers, Algeria',
    period: '2021 — 2024',
    type: 'industry',
    description: [
      'Conducted on-site Ambient Vibration Testing (AVT) campaigns and 3D FEM modeling for historic masonry structures, including complex heritage palaces with 47 distinct wall thickness sections (7 cm to 98 cm) calibrated via Operational Modal Analysis (FDD/SSI).',
      'Performed nonlinear pushover and time-history seismic performance assessments for existing public hospitals and cultural heritage facilities in high seismic zones.',
      'Designed seismic retrofitting interventions with carbon-fiber-reinforced polymers (CFRP), tie rods, and steel bracing modeled and verified in SAP2000 and ETABS.'
    ],
    skillsUsed: ['SAP2000', 'ETABS', 'Seismic Retrofit', 'Ambient Vibration Testing', 'RPA99/Eurocode 8']
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
    id: 'comm-1',
    title: 'APPLICATION OF AN INTELLIGENT MULTI-DAMAGE DETECTION FRAMEWORK FOR SHM ON FULL-SCALE STRUCTURE',
    event: '18th World Conference on Earthquake Engineering (18WCEE)',
    type: 'Oral Presentation',
    location: 'Milan, Italy',
    date: 'July 2024',
    details: 'Presented deep neural network (DNN) multi-damage detection framework for a thousand-year-old historic monument in Algiers combining GA-based Sensor Number and Placement Optimization (SNPO) with Operational Modal Analysis.'
  },
  {
    id: 'comm-2',
    title: 'GA-Based Optimisation of Dissipative Knee Braced Steel Frames',
    event: '18th World Conference on Seismic Isolation, Energy Dissipation and Active Vibration Control of Structures (18WCSI)',
    type: 'Oral Presentation',
    location: 'Antalya, Turkey',
    date: 'November 2023',
    details: 'Presented genetic algorithm optimization of knee-braced steel frames (KBF) to maximize height-wise dissipative energy dissipation and prevent story drift mechanisms.'
  },
  {
    id: 'comm-3',
    title: 'Performance assessment and improvement of automated structural seismic design of RC systems per EC08 and RPA2024',
    event: 'Rencontres Universitaires de Génie Civil (RUGC 2025) / AUGC',
    type: 'Oral Presentation',
    location: 'RUGC 2025',
    date: '2025',
    details: 'Presented algorithmic framework for automated seismic layout sizing of RC frames and shear walls satisfying Eurocode 8 and Algerian Code RPA2024 under response spectrum analysis.'
  },
  {
    id: 'comm-4',
    title: 'AUTOMATED OPTIMIZATION OF SHEAR WALL DESIGN UNDER THE NEW RPA2024 PROVISIONS',
    event: 'The First International Conference on Recent Challenges in Civil Engineering (ICRCE)',
    type: 'Oral Presentation',
    location: 'Algiers, Algeria',
    date: '2025',
    details: 'Presented end-to-end ETABS API automation pipeline formulating shear wall rebar and concrete sizing as a constrained mathematical optimization problem.'
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
    id: 'edu-1',
    degree: 'Ph.D. in Civil & Earthquake Engineering (Candidate)',
    institution: 'École Nationale Polytechnique (ENP)',
    location: 'Algiers, Algeria',
    period: '2022 — Present (Defense Expected: Late 2026)',
    honors: 'Doctoral Excellence Fellowship',
    thesisTitle: 'AI-Aided Structural Health Monitoring and Automated Seismic Design of RC Systems per Eurocode 8 and RPA2024',
    advisors: 'Supervised by Prof. Nouredine Bourahla (Laboratory of Earthquake Engineering & Structural Dynamics)',
    description: 'Research centered on AI-aided structural health monitoring, ambient vibration testing, finite element model updating in OpenSees/SAP2000, and automated structural seismic design under Eurocode 8 and the new Algerian Seismic Code RPA2024.'
  },
  {
    id: 'edu-2',
    degree: 'State Engineer Degree & Master of Science in Civil Engineering',
    institution: 'École Nationale Polytechnique (ENP)',
    location: 'Algiers, Algeria',
    period: '2017 — 2022',
    honors: 'Valedictorian — Ranked 1st in Class (Summa Cum Laude)',
    thesisTitle: 'Etude d\'un bâtiment contreventé par des portiques en béton préfabriqué',
    description: 'Rigorous 5-year Grande École curriculum encompassing advanced structural mechanics, finite element analysis, soil-structure interaction, continuum mechanics, concrete & steel design, and applied mathematics.'
  },
  {
    id: 'edu-3',
    degree: 'Classes Préparatoires aux Grandes Écoles d’Ingénieurs (CPGE)',
    institution: 'École Nationale Polytechnique (ENP)',
    location: 'Algiers, Algeria',
    period: '2015 — 2017',
    honors: 'Admitted via National Competitive Entrance Examination (Concours National)',
    description: 'Intensive two-year foundation in advanced higher mathematics (linear algebra, differential geometry, multivariable calculus), physics (classical mechanics, thermodynamics, electromagnetism), and numerical algorithm design.'
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
