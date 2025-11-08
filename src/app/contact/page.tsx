import { generateMetadata, generateBreadcrumbStructuredData, generateStructuredData } from '@/utils/seo';
import ContactForm from '@/components/forms/ContactForm';
import Card from '@/components/ui/Card';
import { COMPANY } from '@/utils/constants';

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: `Get in touch with ${COMPANY.brandName}. Reach out for inquiries, quotes, or support. We're here to help with your IT needs.`,
  path: '/contact',
  keywords: [
    'contact us',
    'IT consulting contact',
    'software development contact',
    'get quote',
    'IT services inquiry',
    'technology solutions contact',
  ],
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  const localBusinessSchema = generateStructuredData('LocalBusiness');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <ContactForm />
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mr-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a href={`mailto:${COMPANY.primaryContact}`} className="text-blue-600 hover:underline">
                      {COMPANY.primaryContact}
                    </a>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mr-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Response Time</h3>
                    <p className="text-gray-600">We typically respond within 24 hours</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 mr-4">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
