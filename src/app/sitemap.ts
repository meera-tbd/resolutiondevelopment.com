import { MetadataRoute } from 'next';
import { COMPANY } from '@/utils/constants';
import { ROUTES } from '@/utils/constants';
import { serviceDetails } from '@/data/services';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${COMPANY.domain}`;
  const currentDate = new Date().toISOString();
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const lastYear = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString();

  // Static pages with priorities
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}${ROUTES.services}`,
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}${ROUTES.about}`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}${ROUTES.solutions}`,
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}${ROUTES.portfolio}`,
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}${ROUTES.technology}`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}${ROUTES.industries}`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}${ROUTES.process}`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}${ROUTES.blog}`,
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}${ROUTES.testimonials}`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}${ROUTES.careers}`,
      lastModified: lastWeek,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}${ROUTES.faq}`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}${ROUTES.resources}`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}${ROUTES.support}`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}${ROUTES.contact}`,
      lastModified: lastMonth,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}${ROUTES.privacy}`,
      lastModified: lastYear,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}${ROUTES.terms}`,
      lastModified: lastYear,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Dynamic service pages
  const servicePages = serviceDetails.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: lastWeek,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Blog posts
  const blogPosts = [
    {
      slug: 'the-future-of-cloud-computing-in-2025',
      lastModified: lastWeek,
    },
    {
      slug: 'best-practices-for-react-performance-optimization',
      lastModified: lastWeek,
    },
    {
      slug: 'mobile-first-design-why-it-matters',
      lastModified: lastWeek,
    },
    {
      slug: 'devops-best-practices-for-modern-teams',
      lastModified: lastWeek,
    },
    {
      slug: 'security-best-practices-for-web-applications',
      lastModified: lastWeek,
    },
    {
      slug: 'introduction-to-microservices-architecture',
      lastModified: lastWeek,
    },
    {
      slug: 'api-design-principles-for-modern-applications',
      lastModified: lastWeek,
    },
    {
      slug: 'database-optimization-strategies',
      lastModified: lastWeek,
    },
    {
      slug: 'building-scalable-web-applications',
      lastModified: lastWeek,
    },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}

