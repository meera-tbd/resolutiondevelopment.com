import { generateMetadata, generateBreadcrumbStructuredData, generateItemListStructuredData, generateServiceStructuredData } from '@/utils/seo';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/utils/constants';

export const metadata = generateMetadata({
  title: 'Our Services',
  description: `Comprehensive IT services from ${COMPANY.brandName}: Custom software development, web applications, mobile apps, cloud solutions, and IT consulting.`,
  path: '/services',
  keywords: [
    'IT services',
    'software development services',
    'web application development',
    'mobile app development',
    'cloud solutions',
    'DevOps services',
    'IT consulting',
    'UI/UX design',
    'data analytics',
    'cybersecurity services',
  ],
});

const serviceDetails = [
  {
    title: 'Custom Software Development',
    slug: 'custom-software-development',
    description: 'Tailored software solutions designed to meet your specific business requirements. From concept to deployment, we build robust applications that scale with your business.',
    features: [
      'Enterprise application development',
      'Legacy system modernization',
      'API development and integration',
      'Microservices architecture',
      'Quality assurance and testing',
    ],
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
  },
  {
    title: 'Web Application Development',
    slug: 'web-application-development',
    description: 'Modern, responsive web applications built with cutting-edge technologies. We create user-friendly interfaces and powerful backends that deliver exceptional user experiences.',
    features: [
      'Full-stack web development',
      'Progressive Web Apps (PWA)',
      'E-commerce solutions',
      'Content Management Systems',
      'Real-time applications',
    ],
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    gradient: 'from-purple-500 via-purple-600 to-pink-500',
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Native and cross-platform mobile applications for iOS and Android. We deliver high-performance apps that engage users and drive business results.',
    features: [
      'iOS and Android development',
      'Cross-platform solutions (React Native, Flutter)',
      'App store optimization',
      'Mobile UI/UX design',
      'App maintenance and updates',
    ],
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    gradient: 'from-green-500 via-emerald-600 to-teal-500',
  },
  {
    title: 'Cloud Solutions & DevOps',
    slug: 'cloud-solutions-devops',
    description: 'Scalable cloud infrastructure and DevOps practices to accelerate development and ensure reliable deployments. We help you leverage the power of cloud computing.',
    features: [
      'Cloud migration and strategy',
      'AWS, Azure, GCP implementation',
      'CI/CD pipeline setup',
      'Container orchestration (Kubernetes)',
      'Infrastructure as Code',
    ],
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    gradient: 'from-orange-500 via-amber-600 to-yellow-500',
  },
  {
    title: 'IT Consulting & Strategy',
    slug: 'it-consulting-strategy',
    description: 'Strategic technology consulting to help you make informed decisions. We analyze your needs and provide expert guidance on technology adoption and digital transformation.',
    features: [
      'Technology assessment',
      'Digital transformation strategy',
      'Architecture design and planning',
      'Technology stack selection',
      'Best practices and training',
    ],
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    gradient: 'from-indigo-500 via-blue-600 to-purple-500',
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'User-centered design solutions that create intuitive and engaging digital experiences. We combine creativity with usability to deliver designs that users love.',
    features: [
      'User research and analysis',
      'Wireframing and prototyping',
      'Visual design and branding',
      'User experience optimization',
      'Design system development',
    ],
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    gradient: 'from-pink-500 via-rose-600 to-red-500',
  },
  {
    title: 'Data Analytics & BI',
    slug: 'data-analytics-bi',
    description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions. Make data-driven decisions that drive growth.',
    features: [
      'Data warehouse design',
      'Business intelligence dashboards',
      'Predictive analytics',
      'Data visualization',
      'Machine learning integration',
    ],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-500',
  },
  {
    title: 'Cybersecurity Services',
    slug: 'cybersecurity-services',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance. We safeguard your business from threats and vulnerabilities.',
    features: [
      'Security assessment and auditing',
      'Penetration testing',
      'Security architecture design',
      'Compliance and governance',
      'Incident response planning',
    ],
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    gradient: 'from-red-500 via-orange-600 to-yellow-500',
  },
  {
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    description: 'Leverage artificial intelligence and machine learning to automate processes, gain insights, and create intelligent solutions that transform your business operations.',
    features: [
      'Machine learning model development',
      'Natural language processing',
      'Computer vision solutions',
      'AI integration and automation',
      'Predictive analytics and modeling',
    ],
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    gradient: 'from-violet-500 via-purple-600 to-fuchsia-500',
  },
  {
    title: 'DevOps & Infrastructure',
    slug: 'devops-infrastructure',
    description: 'Streamline your development and operations with comprehensive DevOps practices. Automate deployments, improve collaboration, and accelerate delivery cycles.',
    features: [
      'CI/CD pipeline implementation',
      'Infrastructure automation',
      'Containerization and orchestration',
      'Monitoring and logging solutions',
      'Performance optimization',
    ],
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    gradient: 'from-teal-500 via-cyan-600 to-blue-500',
  },
  {
    title: 'Data Science & Analytics',
    slug: 'data-science-analytics',
    description: 'Transform raw data into strategic insights with advanced data science techniques. Build predictive models and analytics solutions that drive informed decision-making.',
    features: [
      'Statistical analysis and modeling',
      'Data mining and exploration',
      'Predictive modeling',
      'Data visualization and reporting',
      'Big data processing',
    ],
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    gradient: 'from-emerald-500 via-green-600 to-teal-500',
  },
  {
    title: 'Blockchain Development',
    slug: 'blockchain-development',
    description: 'Build secure, decentralized applications using blockchain technology. From smart contracts to DApps, we help you leverage the power of distributed ledger technology.',
    features: [
      'Smart contract development',
      'Decentralized application (DApp) development',
      'Blockchain integration',
      'Cryptocurrency solutions',
      'NFT marketplace development',
    ],
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    gradient: 'from-amber-500 via-yellow-600 to-orange-500',
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);

  const itemListSchema = generateItemListStructuredData(
    serviceDetails.map((service, index) => ({
      name: service.title,
      description: service.description,
      url: `/services/${service.slug}`,
      position: index + 1,
    }))
  );

  const serviceSchemas = serviceDetails.map((service) =>
    generateServiceStructuredData({
      name: service.title,
      description: service.description,
      url: `https://${COMPANY.domain}/services/${service.slug}`,
      serviceType: service.title,
      areaServed: COMPANY.targetCountries,
    })
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-20" role="banner">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6 drop-shadow-lg">Our Services</h1>
            <p className="text-xl sm:text-2xl text-blue-50 leading-relaxed drop-shadow-md">
              Comprehensive IT solutions tailored to your business needs. From custom software 
              to cloud infrastructure, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white" aria-label="Service Listings">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {serviceDetails.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden h-full flex flex-col"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon with gradient background */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className={`relative inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Button */}
                  <Button 
                    href={`/services/${service.slug}`} 
                    variant="outline"
                    className={`w-full border-2 group-hover:border-transparent group-hover:bg-gradient-to-r ${service.gradient} group-hover:text-white transition-all duration-300`}
                  >
                    Learn More
                  </Button>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Every business is unique. Let&apos;s discuss your specific requirements and create 
            a tailored solution that fits your needs perfectly.
          </p>
          <Button href="/contact" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </>
  );
}
