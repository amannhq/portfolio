export interface Project {
  name: string;
  description: string;
  tech: string[];
  url: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  current: boolean;
}

export interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
}
