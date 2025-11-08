import { Metadata } from 'next';
import { COMPANY } from './constants';

// Extended company type for optional properties
interface ExtendedCompany {
  twitterHandle?: string;
  twitterSiteId?: string;
  phone?: string;
  socialMedia?: string[];
  address?: {
    '@type'?: string;
    [key: string]: unknown;
  };
  geo?: {
    '@type'?: string;
    [key: string]: unknown;
  };
}

// Helper function to truncate title to optimal length (50-60 chars)
function optimizeTitle(title: string): string {
  const maxLength = 60;
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3).trim() + '...';
}

// Helper function to truncate description to optimal length (150-160 chars)
function optimizeDescription(description: string): string {
  const maxLength = 160;
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3).trim() + '...';
}

export function generateMetadata({
  title,
  description,
  path = '',
  image,
  type = 'website',
  noindex = false,
  publishedTime,
  modifiedTime,
  authors,
  section,
  tags,
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
  keywords?: string[];
}): Metadata {
  const fullTitle = title
    ? optimizeTitle(`${title} | ${COMPANY.brandName}`)
    : optimizeTitle(`${COMPANY.brandName} - ${COMPANY.description}`);
  const fullDescription = optimizeDescription(description || COMPANY.description);
  const url = `https://${COMPANY.domain}${path}`;
  const ogImage = image || `https://${COMPANY.domain}/assets/logo/RDLogo-02.png`;
  const metaKeywords = keywords || [];
  const combinedKeywords = [...metaKeywords, ...COMPANY.seoKeywords].filter((v, i, a) => a.indexOf(v) === i).slice(0, 10).join(', ');

  const metadata: Metadata = {
    title: fullTitle,
    description: fullDescription,
    keywords: combinedKeywords,
    authors: authors ? authors.map(name => ({ name })) : [{ name: COMPANY.brandName }],
    creator: COMPANY.brandName,
    publisher: COMPANY.brandName,
    metadataBase: new URL(`https://${COMPANY.domain}`),
    applicationName: COMPANY.brandName,
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        { url: '/assets/logo/favicon (2).ico', sizes: 'any' },
        { url: '/assets/logo/favicon (2).ico', type: 'image/x-icon', sizes: '16x16 32x32' },
      ],
      apple: [
        { url: '/assets/logo/RDLogo-02.png', sizes: '57x57', type: 'image/png' },
        { url: '/assets/logo/RDLogo-02.png', sizes: '60x60', type: 'image/png' },
        { url: '/assets/logo/RDLogo-02.png', sizes: '72x72', type: 'image/png' },
        { url: '/assets/logo/RDLogo-02.png', sizes: '76x76', type: 'image/png' },
        { url: '/assets/logo/RDLogo-02.png', sizes: '114x114', type: 'image/png' },
        { url: '/assets/logo/RDLogo-02.png', sizes: '120x120', type: 'image/png' },
        { url: '/assets/logo/RDLogo-02.png', sizes: '144x144', type: 'image/png' },
        { url: '/assets/logo/RDLogo-02.png', sizes: '152x152', type: 'image/png' },
        { url: '/assets/logo/RDLogo-02.png', sizes: '180x180', type: 'image/png' },
      ],
      shortcut: [
        { url: '/assets/logo/favicon (2).ico', type: 'image/x-icon' },
      ],
    },
    manifest: '/manifest.json',
    alternates: {
      canonical: url,
      languages: {
        'en-US': url,
        'en': url,
        'x-default': url,
      },
      types: {
        'application/rss+xml': [{ url: `https://${COMPANY.domain}/feed.xml`, title: `${COMPANY.brandName} RSS Feed` }],
        'application/atom+xml': [{ url: `https://${COMPANY.domain}/feed.xml`, title: `${COMPANY.brandName} Atom Feed` }],
      },
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: url,
      siteName: COMPANY.brandName,
      type: type,
      locale: 'en_US',
      alternateLocale: ['en_US', 'en'],
      images: [
        {
          url: ogImage.startsWith('https') ? ogImage : `https://${COMPANY.domain}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle || COMPANY.brandName,
          secureUrl: ogImage.startsWith('https') ? ogImage : `https://${COMPANY.domain}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`,
          type: image?.endsWith('.jpg') || image?.endsWith('.jpeg') ? 'image/jpeg' : image?.endsWith('.webp') ? 'image/webp' : 'image/png',
        },
      ],
      countryName: COMPANY.targetCountries[0] || 'US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage.startsWith('https') ? ogImage : `https://${COMPANY.domain}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`],
      creator: (COMPANY as ExtendedCompany).twitterHandle || '@' + COMPANY.brandName.replace(/\s+/g, ''),
      site: (COMPANY as ExtendedCompany).twitterHandle || '@' + COMPANY.brandName.replace(/\s+/g, ''),
      siteId: (COMPANY as ExtendedCompany).twitterSiteId || undefined,
    },
    robots: {
      index: noindex ? false : true,
      follow: noindex ? false : true,
      nocache: false,
      googleBot: {
        index: noindex ? false : true,
        follow: noindex ? false : true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    verification: {
      // Add verification codes here when available
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-verification-code',
      // bing: 'your-bing-verification-code',
      // other: {
      //   'msvalidate.01': 'your-bing-verification-code',
      //   'facebook-domain-verification': 'your-facebook-verification-code',
      // },
    },
    other: {
      'geo.region': COMPANY.targetCountries[0] || 'US',
      'geo.placename': 'United States',
      'geo.position': '39.8283;-98.5795', // Approximate US center
      'ICBM': '39.8283, -98.5795',
      'rating': '4.9',
      'rating:scale': '5',
      'rating:value': '4.9',
      'author': COMPANY.brandName,
      'copyright': `© ${new Date().getFullYear()} ${COMPANY.brandName}. All rights reserved.`,
      'revisit-after': '7 days',
      'distribution': 'global',
      'language': 'en-US',
      'content-language': 'en-US',
      'timezone': 'America/New_York',
      'generator': 'Next.js',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': COMPANY.brandName,
      'msapplication-TileColor': COMPANY.brandColors.primary,
      'msapplication-config': '/browserconfig.xml',
      'format-detection': 'telephone=no',
      'theme-color': COMPANY.brandColors.primary,
      'hreflang-en': url,
      'hreflang-en-us': url,
      'hreflang-x-default': url,
    },
  };

  // Add article-specific metadata
  if (type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: publishedTime,
      modifiedTime: modifiedTime,
      authors: authors || [COMPANY.brandName],
      section: section,
      tags: tags,
    };
  }

  return metadata;
}

export function generateStructuredData(type: 'Organization' | 'WebSite' | 'BreadcrumbList' | 'LocalBusiness' = 'Organization') {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  if (type === 'Organization') {
    return {
      ...baseStructuredData,
      name: COMPANY.brandName,
      url: `https://${COMPANY.domain}`,
      logo: {
        '@type': 'ImageObject',
        url: `https://${COMPANY.domain}/assets/logo/RDLogo-02.png`,
        width: 1200,
        height: 630,
      },
      image: {
        '@type': 'ImageObject',
        url: `https://${COMPANY.domain}/assets/logo/RDLogo-02.png`,
        width: 1200,
        height: 630,
      },
      description: COMPANY.description,
      foundingDate: COMPANY.establishedYear,
      foundingLocation: {
        '@type': 'Place',
        addressCountry: 'US',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          email: COMPANY.primaryContact,
          telephone: (COMPANY as ExtendedCompany).phone || undefined,
          contactType: 'Customer Service',
          areaServed: COMPANY.targetCountries,
          availableLanguage: ['en', 'en-US'],
        },
        {
          '@type': 'ContactPoint',
          email: COMPANY.primaryContact,
          telephone: (COMPANY as ExtendedCompany).phone || undefined,
          contactType: 'Sales',
          areaServed: COMPANY.targetCountries,
          availableLanguage: ['en', 'en-US'],
        },
        {
          '@type': 'ContactPoint',
          email: COMPANY.primaryContact,
          telephone: (COMPANY as ExtendedCompany).phone || undefined,
          contactType: 'Technical Support',
          areaServed: COMPANY.targetCountries,
          availableLanguage: ['en', 'en-US'],
        },
      ],
      sameAs: (COMPANY as ExtendedCompany).socialMedia || [
        `https://www.facebook.com/${COMPANY.brandName.replace(/\s+/g, '')}`,
        `https://twitter.com/${COMPANY.brandName.replace(/\s+/g, '')}`,
        `https://www.linkedin.com/company/${COMPANY.brandName.toLowerCase().replace(/\s+/g, '-')}`,
        `https://www.instagram.com/${COMPANY.brandName.toLowerCase().replace(/\s+/g, '')}`,
      ],
      address: (COMPANY as ExtendedCompany).address ? (typeof (COMPANY as ExtendedCompany).address === 'object' && (COMPANY as ExtendedCompany).address?.['@type'] ? (COMPANY as ExtendedCompany).address : {
        '@type': 'PostalAddress',
        ...(COMPANY as ExtendedCompany).address,
      }) : {
        '@type': 'PostalAddress',
        addressCountry: COMPANY.targetCountries[0] || 'US',
        addressLocality: 'United States',
      },
      geo: (COMPANY as ExtendedCompany).geo ? (typeof (COMPANY as ExtendedCompany).geo === 'object' && (COMPANY as ExtendedCompany).geo?.['@type'] ? (COMPANY as ExtendedCompany).geo : {
        '@type': 'GeoCoordinates',
        ...(COMPANY as ExtendedCompany).geo,
      }) : {
        '@type': 'GeoCoordinates',
        latitude: '39.8283',
        longitude: '-98.5795',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: '50-100',
      },
      legalName: COMPANY.brandName,
    };
  }

  if (type === 'WebSite') {
    return {
      ...baseStructuredData,
      name: COMPANY.brandName,
      url: `https://${COMPANY.domain}`,
      description: COMPANY.description,
      inLanguage: 'en-US',
      publisher: {
        '@type': 'Organization',
        name: COMPANY.brandName,
        logo: {
          '@type': 'ImageObject',
          url: `https://${COMPANY.domain}/assets/logo/RDLogo-02.png`,
          width: 1200,
          height: 630,
        },
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `https://${COMPANY.domain}/search?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      ],
      copyrightHolder: {
        '@type': 'Organization',
        name: COMPANY.brandName,
      },
      copyrightYear: new Date().getFullYear(),
    };
  }

  if (type === 'LocalBusiness') {
    const address = (COMPANY as ExtendedCompany).address || {
      '@type': 'PostalAddress',
      addressCountry: COMPANY.targetCountries[0] || 'US',
      addressLocality: 'United States',
    };

    const geo = (COMPANY as ExtendedCompany).geo || {
      '@type': 'GeoCoordinates',
      latitude: '39.8283',
      longitude: '-98.5795',
    };

    return {
      ...baseStructuredData,
      name: COMPANY.brandName,
      url: `https://${COMPANY.domain}`,
      description: COMPANY.description,
      email: COMPANY.primaryContact,
      telephone: (COMPANY as ExtendedCompany).phone || undefined,
      priceRange: '$$',
      paymentAccepted: 'Credit Card, Bank Transfer',
      currenciesAccepted: 'USD',
      address: typeof address === 'object' && address['@type'] ? address : {
        '@type': 'PostalAddress',
        ...address,
      },
      geo: typeof geo === 'object' && geo['@type'] ? geo : {
        '@type': 'GeoCoordinates',
        ...geo,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
        timeZone: 'America/New_York',
      },
      image: {
        '@type': 'ImageObject',
        url: `https://${COMPANY.domain}/assets/logo/RDLogo-02.png`,
        width: 1200,
        height: 630,
      },
      logo: {
        '@type': 'ImageObject',
        url: `https://${COMPANY.domain}/assets/logo/RDLogo-02.png`,
        width: 1200,
        height: 630,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
      sameAs: (COMPANY as ExtendedCompany).socialMedia || [
        `https://www.facebook.com/${COMPANY.brandName.replace(/\s+/g, '')}`,
        `https://twitter.com/${COMPANY.brandName.replace(/\s+/g, '')}`,
        `https://www.linkedin.com/company/${COMPANY.brandName.toLowerCase().replace(/\s+/g, '-')}`,
        `https://www.instagram.com/${COMPANY.brandName.toLowerCase().replace(/\s+/g, '')}`,
      ],
    };
  }

  if (type === 'BreadcrumbList') {
    return {
      ...baseStructuredData,
      itemListElement: [],
    };
  }

  return baseStructuredData;
}

export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://${COMPANY.domain}${item.url}`,
    })),
  };
}

export function generateArticleStructuredData({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  publisher = COMPANY.brandName,
  section,
  tags,
  authorName,
  authorUrl,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  publisher?: string;
  section?: string;
  tags?: string[];
  authorName?: string;
  authorUrl?: string;
}) {
  const articleImage = image || `https://${COMPANY.domain}/assets/logo/RDLogo-02.png`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: {
      '@type': 'ImageObject',
      url: articleImage,
      width: 1200,
      height: 630,
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: authorName ? {
      '@type': 'Person',
      name: authorName,
      ...(authorUrl && { url: authorUrl }),
      ...(authorUrl && { sameAs: [authorUrl] }),
    } : {
      '@type': 'Organization',
      name: publisher,
      url: `https://${COMPANY.domain}`,
    },
    publisher: {
      '@type': 'Organization',
      name: publisher,
      logo: {
        '@type': 'ImageObject',
        url: `https://${COMPANY.domain}/assets/logo/RDLogo-02.png`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    articleSection: section,
    keywords: tags?.join(', ') || COMPANY.seoKeywords.join(', '),
    inLanguage: 'en-US',
  };
}

export function generateServiceStructuredData({
  name,
  description,
  url,
  image,
  provider = COMPANY.brandName,
  serviceType,
  areaServed,
  offers,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: string;
  serviceType?: string;
  areaServed?: string[];
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
  };
}) {
  const serviceImage = image || `https://${COMPANY.domain}/assets/logo/RDLogo-02.png`;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    url: url,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: `https://${COMPANY.domain}`,
      logo: {
        '@type': 'ImageObject',
        url: `https://${COMPANY.domain}/assets/logo/RDLogo-02.png`,
        width: 1200,
        height: 630,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: serviceImage,
      width: 1200,
      height: 630,
    },
    serviceType: serviceType,
    areaServed: (areaServed || COMPANY.targetCountries).map((country) => ({
      '@type': 'Country',
      name: country,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    ...(offers && {
      offers: {
        '@type': 'Offer',
        price: offers.price,
        priceCurrency: offers.priceCurrency || 'USD',
        availability: offers.availability || 'https://schema.org/InStock',
      },
    }),
  };
}

export function generateFAQStructuredData(faqs: { question: string; answer: string }[]) {
  if (!faqs || !Array.isArray(faqs)) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [],
    };
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateReviewStructuredData(reviews: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished?: string;
}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.brandName,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      datePublished: review.datePublished || new Date().toISOString(),
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    })),
  };
}

export function generateItemListStructuredData(items: {
  name: string;
  description: string;
  url: string;
  image?: string;
  position: number;
}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      item: {
        '@type': 'Service',
        name: item.name,
        description: item.description,
        url: `https://${COMPANY.domain}${item.url}`,
        ...(item.image && {
          image: {
            '@type': 'ImageObject',
            url: item.image.startsWith('http') ? item.image : `https://${COMPANY.domain}${item.image}`,
          },
        }),
        provider: {
          '@type': 'Organization',
          name: COMPANY.brandName,
          url: `https://${COMPANY.domain}`,
        },
      },
    })),
  };
}

export function generateHowToStructuredData(steps: {
  name: string;
  text: string;
  position: number;
  image?: string;
}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How We Work - Development Process',
    description: 'A proven methodology that ensures successful project delivery from concept to launch',
    step: steps.map((step) => ({
      '@type': 'HowToStep',
      position: step.position,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image.startsWith('http') ? step.image : `https://${COMPANY.domain}${step.image}`,
        },
      }),
    })),
  };
}

