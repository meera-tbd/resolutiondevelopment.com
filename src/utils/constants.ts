import companyData from '@/data/company.json';

export const COMPANY = companyData;

export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  contact: '/contact',
  portfolio: '/portfolio',
  team: '/team',
  careers: '/careers',
  blog: '/blog',
  faq: '/faq',
  testimonials: '/testimonials',
  solutions: '/solutions',
  technology: '/technology',
  process: '/process',
  industries: '/industries',
  resources: '/resources',
  partners: '/partners',
  support: '/support',
  privacy: '/privacy',
  terms: '/terms',
  sitemap: '/site-map'
};

export const NAVIGATION = [
  { label: 'Home', href: ROUTES.home },
  { label: 'About', href: ROUTES.about },
  { label: 'Services', href: ROUTES.services },
  { label: 'Solutions', href: ROUTES.solutions },
  { label: 'Portfolio', href: ROUTES.portfolio },
  { label: 'Careers', href: ROUTES.careers },
  { label: 'Contact', href: ROUTES.contact }
];

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', href: ROUTES.about },
    { label: 'Careers', href: ROUTES.careers }
  ],
  services: [
    { label: 'All Services', href: ROUTES.services },
    { label: 'Solutions', href: ROUTES.solutions },
    { label: 'Technology Stack', href: ROUTES.technology },
    { label: 'Industries', href: ROUTES.industries }
  ],
  resources: [
    { label: 'Blog', href: ROUTES.blog },
    { label: 'FAQ', href: ROUTES.faq },
    { label: 'Testimonials', href: ROUTES.testimonials },
    { label: 'Support', href: ROUTES.support }
  ],
  legal: [
    { label: 'Privacy Policy', href: ROUTES.privacy },
    { label: 'Terms of Service', href: ROUTES.terms }
  ]
};

