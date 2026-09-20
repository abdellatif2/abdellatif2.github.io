export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'preprint' | 'book_chapter' | 'thesis';
  doi?: string;
  pdfUrl?: string;
  arxivId?: string;
  scholarUrl?: string;
  citations?: number;
  bibtex: string;
  abstract: string;
  tags: string[];
  featured?: boolean;
}

export interface NumericalModel {
  id: string;
  title: string;
  software: 'OpenSees' | 'SAP2000' | 'OpenSeesPy' | 'Abaqus' | string;
  category: 'Historic Masonry' | 'RC Frame' | 'Steel MRF' | 'Shear Wall System' | 'Bridge Pier' | 'Base Isolated' | 'SHM Instrumented Building' | string;
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
  images?: {
    url: string;
    caption: string;
    tag: string;
    type?: 'fem_model' | 'structural_framing' | 'site_photo' | 'modal_plot' | 'mode_shape';
  }[];
  wallThicknessSpecs?: {
    totalSections: number;
    minThickness: string;
    maxThickness: string;
    sampleSections: {
      id: string;
      name: string;
      thickness: string;
      material: string;
      role: string;
    }[];
  };
  ambientVibrationTesting?: {
    sensorLayout: string;
    acquisitionDuration: string;
    samplingRate: string;
    idMethods: string[];
    modalComparison: {
      mode: number;
      label: string;
      expFreq: string;
      femFreq: string;
      error: string;
      mac: string;
      damping: string;
    }[];
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

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: 'Publication' | 'Conference' | 'Field Testing' | 'Award' | 'Software' | 'Milestone';
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

export interface ScientificCommunication {
  id: string;
  title: string;
  event: string;
  type: 'Oral Presentation' | 'Invited Seminar' | 'Keynote' | 'Poster' | 'Workshop';
  location: string;
  date: string;
  details?: string;
}

export interface PeerReviewActivity {
  journalOrEvent: string;
  publisherOrBody: string;
  role: 'Reviewer' | 'Session Chair' | 'Scientific Committee' | 'Member';
  countOrYear?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors?: string;
  thesisTitle?: string;
  advisors?: string;
  description?: string;
}

export interface TeachingItem {
  id: string;
  course: string;
  level: string;
  institution: string;
  period: string;
  role: string;
  hours?: string;
  topics: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
}
