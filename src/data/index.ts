import type { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    name: 'devflow',
    description: 'CLI tool that automates repetitive development tasks. Reduced setup time by 80%.',
    tech: ['Go', 'CLI'],
    url: 'https://github.com/amannhq/devflow',
  },
  {
    name: 'synthwave',
    description: 'Real-time collaborative code editor with AI-powered suggestions.',
    tech: ['TypeScript', 'WebSocket', 'React'],
    url: 'https://github.com/amannhq/synthwave',
  },
  {
    name: 'neural-search',
    description: 'Semantic search engine for codebases using embeddings.',
    tech: ['Python', 'FastAPI', 'Vector DB'],
    url: 'https://github.com/amannhq/neural-search',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'TechCorp',
    period: '2023 - Present',
    current: true,
  },
  {
    role: 'Software Engineer',
    company: 'StartupXYZ',
    period: '2021 - 2023',
    current: false,
  },
  {
    role: 'Junior Developer',
    company: 'AgencyName',
    period: '2020 - 2021',
    current: false,
  },
];

export const SKILLS = [
  'TypeScript',
  'Go',
  'Python',
  'React',
  'Node.js',
  'PostgreSQL',
  'Redis',
  'Docker',
  'AWS',
] as const;
