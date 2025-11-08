import { generateMetadata } from '@/utils/seo';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { ROUTES } from '@/utils/constants';

export const metadata = generateMetadata({
  title: 'Sitemap',
  description: 'Complete sitemap of all pages on Resolution Development website.',
  path: '/site-map',
});

const sitemapStructure = [
  {
    category: 'Main Pages',
    pages: [
      { name: 'Home', path: ROUTES.home },
      { name: 'About Us', path: ROUTES.about },
      { name: 'Contact', path: ROUTES.contact },
    ],
  },
  {
    category: 'Services',
    pages: [
      { name: 'Our Services', path: ROUTES.services },
      { name: 'Solutions', path: ROUTES.solutions },
      { name: 'Technology Stack', path: ROUTES.technology },
      { name: 'Our Process', path: ROUTES.process },
      { name: 'Industries We Serve', path: ROUTES.industries },
    ],
  },
  {
    category: 'Company',
    pages: [
      { name: 'Portfolio', path: ROUTES.portfolio },
      { name: 'Our Team', path: ROUTES.team },
      { name: 'Careers', path: ROUTES.careers },
      { name: 'Partners', path: ROUTES.partners },
    ],
  },
  {
    category: 'Resources',
    pages: [
      { name: 'Blog', path: ROUTES.blog },
      { name: 'Resources', path: ROUTES.resources },
      { name: 'FAQ', path: ROUTES.faq },
      { name: 'Testimonials', path: ROUTES.testimonials },
      { name: 'Support', path: ROUTES.support },
    ],
  },
  {
    category: 'Legal',
    pages: [
      { name: 'Privacy Policy', path: ROUTES.privacy },
      { name: 'Terms of Service', path: ROUTES.terms },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Sitemap</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Find all pages and sections of our website organized by category.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sitemapStructure.map((section, index) => (
              <Card key={index}>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{section.category}</h2>
                <ul className="space-y-2">
                  {section.pages.map((page, idx) => (
                    <li key={idx}>
                      <Link
                        href={page.path}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

