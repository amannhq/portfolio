export const SITE = {
  title: 'aman',
  description: 'Full-stack engineer building developer tools and crafting intuitive experiences.',
  url: 'https://amanhq.dev',
  author: 'Aman Pandit',
  locale: 'en_US',
} as const;

export const SOCIAL = {
  email: 'amanpandit1406@gmail.com',
  github: 'https://github.com/amannhq',
  linkedin: 'https://www.linkedin.com/in/amanhq/',
  twitter: 'https://x.com/amannhq',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
] as const;

export const FOOTER_LINKS = [
  { href: SOCIAL.github, label: 'GitHub', external: true },
  { href: SOCIAL.linkedin, label: 'LinkedIn', external: true },
  { href: SOCIAL.twitter, label: 'X', external: true },
  { href: `mailto:${SOCIAL.email}`, label: 'Email', external: true },
] as const;
