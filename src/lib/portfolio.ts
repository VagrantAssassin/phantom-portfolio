export const portfolioSections = [
  { to: '/', label: 'HOME', number: '01' },
  { to: '/about', label: 'ABOUT ME', number: '02' },
  { to: '/skills', label: 'SKILLS', number: '03' },
  { to: '/projects', label: 'PROJECTS', number: '04' },
  { to: '/achievements', label: 'ACHIEVEMENTS', number: '05' },
  { to: '/contact', label: 'CONTACT', number: '06' },
] as const;

export function portfolioHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} — Ryo's Phantom Portfolio` },
      { name: 'description', content: description },
      { property: 'og:title', content: `${title} — Ryo's Phantom Portfolio` },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  };
}
