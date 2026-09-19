export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'preprint' | 'book_chapter';
  doi?: string;
  pdfUrl?: string;
  arxivId?: string;
  bibtex: string;
  abstract: string;
  tags: string[];
  featured?: boolean;
}

export interface NumericalModel {
  id: string;
  title: string;
  software: 'OpenSees' | 'SAP2000' | 'OpenSeesPy' | 'Abaqus';
  category: 'RC Frame' | 'Steel MRF' | 'Shear Wall System' | 'Bridge Pier' | 'Base Isolated' | 'SHM Instrumented Building';
  projectContext: string;
  year: number;
  objective: string;
  description: string;
  modelingHighlights: string[];
  elementTypes: string[];
  materialModels: string[];
  analysisTypes: string[];
  keyFindings: string[];
  codeSnippet?: {
    language: 'python' | 'tcl' | 'matlab';
    fileName: string;
    code: string;
  };
  metrics: {
    degreesOfFreedom?: number;
    driftReduction?: string;
    computationalTime?: string;
    aiSurrogateSpeedup?: string;
    fundamentalPeriod?: string;
  };
  hysteresisCurve?: {
    points: { x: number; y: number }[];
    xLabel: string;
    yLabel: string;
  };
  tags: string[];
}

export interface ResearchPillar {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  methodologies: string[];
  applications: string[];
  keyTools: string[];
  formulaSnippet?: {
    latex: string;
    explanation: string;
  };
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  skillsUsed?: string[];
  type: 'education' | 'research' | 'teaching' | 'industry';
}

export interface SoftwareSkill {
  category: string;
  skills: {
    name: string;
    level: string;
    icon: string;
    description: string;
  }[];
}
