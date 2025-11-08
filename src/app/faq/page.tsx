import { generateFAQStructuredData, generateMetadata, generateBreadcrumbStructuredData } from '@/utils/seo';
import { COMPANY } from '@/utils/constants';
import FAQClient from './FAQClient';
import { faqs } from '@/data/faqs';

export const metadata = generateMetadata({
  title: 'Frequently Asked Questions',
  description: `Find answers to common questions about ${COMPANY.brandName}'s IT services, development process, pricing, and more. Get expert answers about custom software development, web applications, and cloud solutions.`,
  path: '/faq',
});

export default function FAQPage() {
  const faqSchema = generateFAQStructuredData(faqs);
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQClient />
    </>
  );
}

