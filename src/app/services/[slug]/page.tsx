import { generateMetadata as generateBaseMetadata, generateServiceStructuredData, generateBreadcrumbStructuredData } from '@/utils/seo';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/utils/constants';
import Link from 'next/link';
import { serviceDetails } from '@/data/services';

export function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails.find(s => s.slug === slug);
  return generateBaseMetadata({
    title: service?.title || 'Service Details',
    description: service?.description || '',
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Button href="/services">Back to Services</Button>
        </div>
      </div>
    );
  }

  const serviceSchema = generateServiceStructuredData({
    name: service.title,
    description: service.description,
    url: `https://${COMPANY.domain}/services/${slug}`,
    serviceType: service.title,
    areaServed: COMPANY.targetCountries,
  });

  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className={`bg-gradient-to-br ${service.gradient} text-white py-20`} role="banner">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6 drop-shadow-lg">{service.title}</h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed drop-shadow-md">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" itemScope itemType="https://schema.org/Service">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.longDescription}
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {service.features.map((feature, index) => (
                    <Card key={index} className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-4`}>
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-medium pt-2">{feature}</p>
                      </div>
                    </Card>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our {service.title} Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team consists of experienced professionals with deep expertise in their respective domains. We stay current with the latest technologies, methodologies, and industry best practices to deliver solutions that meet the highest standards.
                    </p>
                  </Card>
                  <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Methodology</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We follow established methodologies and frameworks that have been refined through years of experience. Our structured approach ensures consistent quality, timely delivery, and successful project outcomes.
                    </p>
                  </Card>
                  <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Client-Centric Approach</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your success is our priority. We work closely with you throughout the project, maintaining transparent communication and incorporating your feedback at every stage. We&apos;re committed to understanding your business and delivering solutions that truly meet your needs.
                    </p>
                  </Card>
                  <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We build solutions that grow with your business. Our architectures are designed for scalability, allowing you to handle increased load and expand functionality as your needs evolve, without requiring complete rebuilds.
                    </p>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
                <div className="space-y-6 mb-12">
                  <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-4 text-white font-bold`}>
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery & Planning</h3>
                        <p className="text-gray-600 leading-relaxed">
                          We begin by understanding your business objectives, current challenges, and requirements. Through workshops and discussions, we gather comprehensive information to create a detailed project plan and roadmap.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-4 text-white font-bold`}>
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Design & Development</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Our team creates detailed designs and specifications, then proceeds with development using agile methodologies. We deliver working software incrementally, allowing for early feedback and continuous improvement.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-4 text-white font-bold`}>
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Testing & Quality Assurance</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Quality is built into every stage of development. We conduct comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure the solution meets all requirements and performs flawlessly.
                        </p>
                      </div>
                    </div>
                  </Card>
                  <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-4 text-white font-bold`}>
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Deployment & Support</h3>
                        <p className="text-gray-600 leading-relaxed">
                          We handle the deployment process, ensuring smooth transition to production. After launch, we provide ongoing support, maintenance, and enhancements to keep your solution running optimally and aligned with your evolving needs.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="border-2 border-gray-200 sticky top-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started</h3>
                <p className="text-gray-600 mb-6">
                  Ready to transform your business with our {service.title.toLowerCase()} services? 
                  Let&apos;s discuss your project requirements.
                </p>
                <div className="space-y-4">
                  <Button href="/contact" variant="primary" className="w-full">
                    Request a Quote
                  </Button>
                  <Button href="/services" variant="outline" className="w-full">
                    View All Services
                  </Button>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Email:</strong> {COMPANY.primaryContact}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Phone:</strong> Contact us for details
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Common Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Discover how businesses leverage our {service.title.toLowerCase()} services to solve real-world challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Process Automation</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline repetitive tasks and workflows, reducing manual effort and human error while improving efficiency and productivity across your organization.
              </p>
            </Card>
            <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Transformation</h3>
              <p className="text-gray-600 leading-relaxed">
                Modernize legacy systems and processes, enabling your business to compete effectively in the digital age with improved agility and customer experiences.
              </p>
            </Card>
            <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Advantage</h3>
              <p className="text-gray-600 leading-relaxed">
                Gain a strategic edge in your market with innovative solutions that differentiate your business and create new opportunities for growth and expansion.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Related Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore other services that might interest you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceDetails
              .filter(s => s.slug !== service.slug)
              .slice(0, 3)
              .map((relatedService) => (
                <Card key={relatedService.slug} hover className="border-2 border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-300">
                  <Link href={`/services/${relatedService.slug}`} className="block">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${relatedService.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={relatedService.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{relatedService.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.description}</p>
                    <span className="text-blue-600 font-semibold hover:text-blue-700">
                      Learn More →
                    </span>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

