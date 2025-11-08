import { MetadataRoute } from 'next';
import { COMPANY } from '@/utils/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/login',
          '/signup',
          '/_error',
          '/private/',
          '/internal/',
          '/*.json$',
          '/_buildManifest.js',
          '/_ssgManifest.js',
          '/404',
          '/500',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/login',
          '/signup',
          '/_error',
          '/private/',
          '/internal/',
          '/*.json$',
          '/_buildManifest.js',
          '/_ssgManifest.js',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/login',
          '/signup',
          '/_error',
          '/private/',
          '/internal/',
          '/*.json$',
          '/_buildManifest.js',
          '/_ssgManifest.js',
        ],
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/login',
          '/signup',
          '/_error',
          '/private/',
          '/internal/',
          '/*.json$',
          '/_buildManifest.js',
          '/_ssgManifest.js',
        ],
      },
    ],
    sitemap: `https://${COMPANY.domain}/sitemap.xml`,
    host: `https://${COMPANY.domain}`,
  };
}

