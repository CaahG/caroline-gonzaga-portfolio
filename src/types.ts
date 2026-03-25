export interface Profile {
  name: string;
  initials: string;
  title: string;
  subtitle: string;
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
  behance: string;
  medium: string;
  coverageRate: string;
  resumeLink: string;
}

export interface Nav {
  about: string;
  experience: string;
  skills: string;
  projects: string;
  contact: string;
  value: string;
  certs: string;
}

export interface Hero {
  title: string;
  highlight: string;
  viewProjects: string;
  getInTouch: string;
  downloadResume: string;
}

export interface ValuePropositionItem {
  title: string;
  description: string;
  icon: string;
  metric: string;
}

export interface ValueProposition {
  title: string;
  items: ValuePropositionItem[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Certifications {
  title: string;
  items: CertificationItem[];
}

export interface Stat {
  label: string;
  value: string;
  type: 'primary' | 'secondary';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  current: boolean;
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
  color: 'primary' | 'secondary';
  special?: boolean;
}

export interface SkillsHeader {
  subtitle: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  year: string;
}

export interface EducationBadge {
  title: string;
  subtitle: string;
}

export interface Education {
  title: string;
  badge: EducationBadge;
  items: EducationItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Projects {
  title: string;
  subtitle: string;
  githubLink: string;
  items: ProjectItem[];
}

export interface Footer {
  tagline: string;
}

export interface Contact {
  title: string;
  subtitle: string;
  emailBtn: string;
}

export interface LanguageContent {
  profile: Profile;
  nav: Nav;
  hero: Hero;
  stats: Stat[];
  valueProposition: ValueProposition;
  experience: Experience[];
  skills: Skill[];
  skillsHeader: SkillsHeader;
  certifications: Certifications;
  education: Education;
  projects: Projects;
  footer: Footer;
  contact: Contact;
}

export interface PortfolioData {
  pt: LanguageContent;
  en: LanguageContent;
}
