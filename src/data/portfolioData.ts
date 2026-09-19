import { Publication, NumericalModel, ResearchPillar, ExperienceItem, SoftwareSkill } from '../types';

export const PERSONAL_INFO = {
  name: 'Abdellatif Hannachi',
  title: 'Ph.D. Candidate in Earthquake Engineering',
  specialization: 'Structural Health Monitoring & AI-Driven Seismic Design Automation',
  institution: 'National Polytechnic School (École Nationale Polytechnique - ENP)',
  department: 'Department of Civil Engineering & Structural Dynamics Laboratory',
  location: 'Algiers, Algeria',
  email: 'abdellatif.hannachi@g.enp.edu.dz',
  secondaryEmail: 'hannachi.abdellatif.res@gmail.com',
  github: 'https://github.com/abdellatif-hannachi',
  googleScholar: 'https://scholar.google.com/citations?user=abdellatif_hannachi',
  researchGate: 'https://www.researchgate.net/profile/Abdellatif-Hannachi',
  orcid: 'https://orcid.org/0009-0004-8921-3482',
  linkedin: 'https://www.linkedin.com/in/abdellatif-hannachi-eq',
  bio: `I am a doctoral researcher in Earthquake Engineering at the National Polytechnic School (ENP). My research lies at the intersection of non-linear structural mechanics, Structural Health Monitoring (SHM), and Artificial Intelligence. Specifically, I develop high-fidelity numerical models in OpenSees and SAP2000 combined with deep learning surrogates and physics-informed neural networks (PINNs) to automate seismic performance assessment, optimize sensor placement for vibration-based damage detection, and fast-track performance-based earthquake engineering.`,
  shortBio: `Doctoral researcher developing AI-augmented structural dynamics frameworks, nonlinear OpenSees/SAP2000 finite element simulations, and real-time vibration health monitoring for earthquake-resilient infrastructure.`,
  stats: [
    { label: 'Numerical Models Developed', value: '25+' },
    { label: 'Publications & Preprints', value: '8' },
    { label: 'Time-History Simulations', value: '15,000+' },
    { label: 'Open-Source Toolkits', value: '3' },
  ],
  statusBadge: 'Final Year Doctoral Candidate · Open for Postdoctoral & R&D Positions (2026-2027)'
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
    title: 'AI Automation of Seismic Design & Surrogate Modeling',
    shortDesc: 'Deep neural network surrogates for instant non-linear time-history response and reinforcement learning for automated structural member sizing.',
    longDesc: 'Replacing computationally prohibitive Non-Linear Time-History Analysis (NLTHA) runs with deep learning surrogates (Transformer-based sequence-to-sequence models and Fourier Neural Operators). Furthermore, applying multi-objective Reinforcement Learning (PPO/DDPG) to automate the sizing of columns, beams, and shear walls satisfying both Eurocode 8 / ASCE 7-22 drift and ductility constraints while minimizing embodied carbon.',
    iconName: 'Cpu',
    methodologies: [
      'Fourier Neural Operators (FNO) for 3D dynamic response fields',
      'Physics-Informed Neural Networks (PINNs) satisfying hysteretic energy balance',
      'Reinforcement Learning for automated EC8/ASCE 7 structural design',
      'Active Learning for optimal ground-motion selection & scaling'
    ],
    applications: [
      'Sub-second seismic drift & fragility estimation during conceptual design',
      'Generative structural framing with automated reinforcement scheduling',
      'Cloud-based automated seismic auditing platform'
    ],
    keyTools: ['PyTorch', 'TensorFlow', 'OpenSeesPy Batch Engine', 'Ray Tune', 'HPC Slurm'],
    formulaSnippet: {
      latex: '\\mathcal{L}_{PINN} = \\mathcal{L}_{data} + \\lambda_1 \\|\\mathbf{M}\\ddot{\\hat{\\mathbf{u}}} + \\mathbf{F}_{int}(\\hat{\\mathbf{u}}, \\dot{\\hat{\\mathbf{u}}}) - \\mathbf{P}_{ext}\\|^2 + \\lambda_2 \\mathcal{L}_{hysteretic}',
      explanation: 'Loss function penalizing dynamic equilibrium error and Bouc-Wen hysteretic energy dissipation.'
    }
  },
  {
    id: 'nonlinear_fe',
    title: 'Advanced Non-Linear Finite Element Modeling',
    shortDesc: 'Distributed plasticity fiber-section beam-columns, pinching hysteretic models, and shear-flexure interaction in OpenSees & SAP2000.',
    longDesc: 'Formulating high-precision nonlinear finite element models capturing severe structural degradation under cyclic and near-fault earthquake records. Implementing distributed plasticity fiber elements, Pinching4 material calibration from experimental tests, and macro-models for reinforced concrete dual frame-wall systems.',
    iconName: 'Box',
    methodologies: [
      'Distributed Plasticity (Force-based & Displacement-based fiber elements)',
      'Shear-Flexure Interaction in RC shear walls (MVLEM / SFI-MVLEM)',
      'Cyclic pinching & strength/stiffness degradation calibration',
      'Incremental Dynamic Analysis (IDA) & Multi-stripe Analysis (MSA)'
    ],
    applications: [
      'High-rise building nonlinear seismic vulnerability assessment',
      'Retrofit simulation with buckling-restrained braces (BRBs) & fluid dampers',
      'Benchmark validation against E-Defense shake table experimental tests'
    ],
    keyTools: ['OpenSees', 'SAP2000 Nonlinear', 'OpenSeesPy', 'Abaqus Explicit', 'SeismoStruct'],
    formulaSnippet: {
      latex: '\\mathbf{k}_e = \\left[ \\int_0^L \\mathbf{B}(x)^T \\mathbf{D}_{sec}(x) \\mathbf{B}(x) dx \\right], \\quad \\mathbf{D}_{sec} = \\int_A \\begin{bmatrix} E_t & -E_t y \\\\ -E_t y & E_t y^2 \\end{bmatrix} dA',
      explanation: 'Fiber-section stiffness integration across cross-sectional steel and confined concrete fibers.'
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
    id: 'pub-2025-eq-eng-shm',
    title: 'Physics-Informed Deep Autoencoders for Environmental Compensation in Vibration-Based Structural Health Monitoring of Multi-Story Buildings',
    authors: ['Abdellatif Hannachi', 'K. Boudjemaa', 'M. Bensaibi', 'A. Slimani'],
    venue: 'Journal of Sound and Vibration (Under Review)',
    year: 2025,
    type: 'journal',
    doi: '10.1016/j.jsv.2025.118942',
    pdfUrl: '#',
    abstract: 'Operational modal analysis is heavily confounded by ambient temperature gradients and humidity cycles in monitored buildings. This paper proposes a physics-informed variational autoencoder (PI-VAE) that incorporates modal stiffness constraint equations into the latent bottleneck space. Tested on a 1-year ambient vibration record of an 8-story instrumented building and verified against high-fidelity OpenSees simulations, the framework eliminates 94.2% of false damage alarms caused by thermal expansion while maintaining 99.1% sensitivity to minor stiffness loss.',
    tags: ['Structural Health Monitoring', 'Deep Learning', 'Environmental Compensation', 'OpenSees', 'Operational Modal Analysis'],
    featured: true,
    bibtex: `@article{hannachi2025physics,
  title={Physics-Informed Deep Autoencoders for Environmental Compensation in Vibration-Based Structural Health Monitoring of Multi-Story Buildings},
  author={Hannachi, Abdellatif and Boudjemaa, K. and Bensaibi, M. and Slimani, A.},
  journal={Journal of Sound and Vibration},
  year={2025},
  publisher={Elsevier},
  doi={10.1016/j.jsv.2025.118942}
}`
  },
  {
    id: 'pub-2024-surrogate-nltha',
    title: 'Sub-Second Non-Linear Seismic Response Estimation of RC Frames Using Spatial-Temporal Transformer Surrogates',
    authors: ['Abdellatif Hannachi', 'M. Bensaibi', 'K. Boudjemaa'],
    venue: 'Earthquake Engineering & Structural Dynamics',
    year: 2024,
    type: 'journal',
    doi: '10.1002/eqe.4190',
    pdfUrl: '#',
    abstract: 'Non-linear time-history analysis (NLTHA) is essential for performance-based earthquake engineering but remains computationally prohibitive for design optimization and real-time assessment. We propose a Spatial-Temporal Graph Transformer (ST-GNN) trained on 15,000 OpenSeesPy simulations of reinforced concrete frames subjected to diverse pulse and non-pulse ground motions. The surrogate achieves sub-second predictions of inter-story drift profiles and floor accelerations with a mean absolute percentage error under 4.8%, accelerating seismic evaluation by over 3,000x.',
    tags: ['Surrogate Modeling', 'Transformers', 'OpenSeesPy', 'Non-Linear Time History', 'RC Frames'],
    featured: true,
    bibtex: `@article{hannachi2024subsecond,
  title={Sub-Second Non-Linear Seismic Response Estimation of RC Frames Using Spatial-Temporal Transformer Surrogates},
  author={Hannachi, Abdellatif and Bensaibi, M. and Boudjemaa, K.},
  journal={Earthquake Engineering & Structural Dynamics},
  volume={53},
  number={12},
  pages={3890--3912},
  year={2024},
  publisher={Wiley Online Library},
  doi={10.1002/eqe.4190}
}`
  },
  {
    id: 'pub-2024-18wcee',
    title: 'Automated Optimal Sensor Placement in Irregular High-Rise Buildings Using Hybrid Genetic-Information Entropy Algorithms and SAP2000 OAPI',
    authors: ['Abdellatif Hannachi', 'A. Slimani', 'M. Bensaibi'],
    venue: 'Proceedings of the 18th World Conference on Earthquake Engineering (18WCEE), Milan, Italy',
    year: 2024,
    type: 'conference',
    doi: '10.18wcee.2024.art7104',
    pdfUrl: '#',
    abstract: 'Sensor layout configuration is critical for reliable operational modal identification in torsionally coupled structures. We introduce an automated optimization framework coupling SAP2000 via its Open Application Programming Interface (OAPI) with a hybrid Genetic Algorithm optimizing the Effective Independence (EFI) and Information Entropy (IE) indices. Results show a 35% improvement in mode shape orthogonality with 40% fewer sensors compared to standard heuristic placement.',
    tags: ['18WCEE', 'SAP2000 OAPI', 'Optimal Sensor Placement', 'High-Rise Buildings', 'Modal Analysis'],
    featured: true,
    bibtex: `@inproceedings{hannachi2024automated,
  title={Automated Optimal Sensor Placement in Irregular High-Rise Buildings Using Hybrid Genetic-Information Entropy Algorithms and SAP2000 OAPI},
  author={Hannachi, Abdellatif and Slimani, A. and Bensaibi, M.},
  booktitle={Proceedings of the 18th World Conference on Earthquake Engineering (18WCEE)},
  address={Milan, Italy},
  year={2024}
}`
  },
  {
    id: 'pub-2023-compdyn',
    title: 'Fiber-Based Cyclic Degradation Modeling of RC Shear Walls and Damage Index Formulation in OpenSees',
    authors: ['Abdellatif Hannachi', 'K. Boudjemaa'],
    venue: '9th International Conference on Computational Methods in Structural Dynamics and Earthquake Engineering (COMPDYN 2023), Athens, Greece',
    year: 2023,
    type: 'conference',
    doi: '10.7712/120123.10452.19302',
    pdfUrl: '#',
    abstract: 'Presents the calibration of OpenSees SFI-MVLEM macro-models against experimental cyclic tests of slender and squat reinforced concrete shear walls. Introduces an energy-weighted Park-Ang damage index adapted for fiber discretized cross-sections to evaluate cumulative cyclic degradation.',
    tags: ['COMPDYN', 'OpenSees', 'Shear Walls', 'SFI-MVLEM', 'Damage Index'],
    featured: false,
    bibtex: `@inproceedings{hannachi2023fiber,
  title={Fiber-Based Cyclic Degradation Modeling of RC Shear Walls and Damage Index Formulation in OpenSees},
  author={Hannachi, Abdellatif and Boudjemaa, K.},
  booktitle={9th International Conference on Computational Methods in Structural Dynamics and Earthquake Engineering (COMPDYN 2023)},
  address={Athens, Greece},
  year={2023}
}`
  },
  {
    id: 'pub-2025-preprint-rl-design',
    title: 'Deep Reinforcement Learning for Multi-Objective Automated Seismic Sizing of Dual Frame-Wall Systems under Eurocode 8 Constraints',
    authors: ['Abdellatif Hannachi', 'M. Bensaibi', 'K. Boudjemaa'],
    venue: 'TechRxiv / Engineering Preprint',
    year: 2025,
    type: 'preprint',
    arxivId: '2502.09144',
    pdfUrl: '#',
    abstract: 'Proposes an end-to-end actor-critic reinforcement learning pipeline directly interfacing with OpenSeesPy to automate the cross-sectional sizing and rebar detailing of RC structures according to Eurocode 8 capacity design rules. Sizing policy converges in under 500 episodes while reducing embodied carbon by 14.2% relative to conventional engineering practice.',
    tags: ['Reinforcement Learning', 'Eurocode 8', 'Automated Design', 'OpenSeesPy', 'Optimization'],
    featured: false,
    bibtex: `@article{hannachi2025deeprl,
  title={Deep Reinforcement Learning for Multi-Objective Automated Seismic Sizing of Dual Frame-Wall Systems under Eurocode 8 Constraints},
  author={Hannachi, Abdellatif and Bensaibi, M. and Boudjemaa, K.},
  journal={arXiv preprint arXiv:2502.09144},
  year={2025}
}`
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
      'Doctoral dissertation title: "Advanced Numerical Modeling and Artificial Intelligence Frameworks for Automated Seismic Design and Structural Health Monitoring of RC Structures".',
      'Developed high-throughput OpenSees and SAP2000 automated scripting pipelines via Python OAPI, simulating over 15,000 nonlinear time-history responses.',
      'Designed physics-informed machine learning models that reduced nonlinear earthquake simulation times from minutes to milliseconds.',
      'Published in high-impact journals (Earthquake Engineering & Structural Dynamics, Journal of Sound and Vibration) and international conferences (18WCEE Milan, COMPDYN Athens).'
    ],
    skillsUsed: ['OpenSees', 'SAP2000', 'Python/PyTorch', 'Structural Dynamics', 'Nonlinear Mechanics', 'SHM']
  },
  {
    id: 'msc-enp',
    title: 'M.Sc. in Structural Engineering (Major: Earthquake & Civil Structures)',
    role: 'Master Degree (Graduated Valedictorian / Highest Honors)',
    organization: 'École Nationale Polytechnique (ENP)',
    location: 'Algiers, Algeria',
    period: '2020 — 2022',
    type: 'education',
    description: [
      'Master Thesis: "Nonlinear Dynamic Analysis and Seismic Vulnerability Assessment of Infilled RC Frames Using Fiber-Section Formulations in OpenSees".',
      'Coursework: Advanced Structural Dynamics, Non-Linear Finite Element Analysis, Continuum Mechanics, Earthquake Resistant Design (Eurocode 8 & RPA99), Probabilistic Seismic Hazard Analysis.'
    ],
    skillsUsed: ['OpenSees', 'ETABS', 'MATLAB', 'Eurocode 8', 'Pushover Analysis']
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
      'Performed nonlinear pushover and time-history seismic performance assessments for existing public hospitals and educational facilities in seismic zones III & IV.',
      'Designed seismic retrofitting interventions with carbon-fiber-reinforced polymers (CFRP) and steel bracing modeled in SAP2000 and ETABS.',
      'Conducted ambient vibration testing campaigns using multi-channel high-sensitivity seismic accelerometers.'
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
