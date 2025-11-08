import { generateMetadata, generateBreadcrumbStructuredData } from '@/utils/seo';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/utils/constants';

export const metadata = generateMetadata({
  title: 'Solutions',
  description: `Comprehensive technology solutions from ${COMPANY.brandName}. Enterprise software, digital transformation, and custom solutions tailored to your business needs.`,
  path: '/solutions',
  keywords: [
    'technology solutions',
    'enterprise software solutions',
    'digital transformation',
    'custom software solutions',
    'business solutions',
    'IT solutions',
    'technology consulting',
  ],
});

const solutions = [
  {
    title: 'Digital Transformation',
    description: 'We help businesses modernize their operations by replacing outdated systems with cutting-edge technology. Our approach focuses on understanding your current processes and identifying opportunities for improvement through automation and digital tools.',
    features: [
      'Legacy system modernization',
      'Process automation',
      'Cloud migration',
      'Data analytics integration',
    ],
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
  },
  {
    title: 'Enterprise Software',
    description: 'Building custom software solutions that fit your organization like a glove. We create enterprise applications that your team will actually want to use, with intuitive interfaces and powerful functionality that makes daily work more efficient.',
    features: [
      'ERP solutions',
      'CRM systems',
      'Business intelligence',
      'Workflow automation',
    ],
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    gradient: 'from-indigo-500 via-blue-600 to-purple-500',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Creating online stores that convert visitors into customers. We build e-commerce platforms that handle everything from product catalogs to checkout, giving you the tools to grow your online business and compete with major retailers.',
    features: [
      'Multi-channel integration',
      'Payment processing',
      'Inventory management',
      'Analytics and reporting',
    ],
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    gradient: 'from-purple-500 via-purple-600 to-pink-500',
  },
  {
    title: 'API Integration',
    description: 'Connecting your systems with the tools and services your business relies on. We build robust integrations that keep your data synchronized across platforms, eliminating manual work and reducing errors.',
    features: [
      'RESTful API development',
      'Third-party integrations',
      'Data synchronization',
      'Real-time connectivity',
    ],
    icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    gradient: 'from-green-500 via-emerald-600 to-teal-500',
  },
  {
    title: 'Data Analytics',
    description: 'Turning the data you already collect into insights that drive better decisions. We help you understand what your numbers mean and build dashboards that make it easy for your team to spot trends and opportunities.',
    features: [
      'Data visualization',
      'Business intelligence',
      'Predictive analytics',
      'Custom dashboards',
    ],
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-500',
  },
  {
    title: 'Security Solutions',
    description: 'Protecting your business from threats that could disrupt operations or damage your reputation. We implement security measures that are strong enough to stop attacks but practical enough for your team to work with daily.',
    features: [
      'Security audits',
      'Encryption implementation',
      'Access control',
      'Compliance management',
    ],
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    gradient: 'from-red-500 via-orange-600 to-yellow-500',
  },
];

export default function SolutionsPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Solutions', url: '/solutions' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6 drop-shadow-lg">Technology Solutions</h1>
            <p className="text-xl sm:text-2xl text-blue-50 leading-relaxed drop-shadow-md">
              Comprehensive solutions designed to address your specific business challenges and drive innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <Card key={index} hover className="flex flex-col border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center shadow-xl`}>
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={solution.icon} />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Every business is unique. Let&apos;s work together to create a solution tailored to your specific needs.
          </p>
          <Button href="/contact" size="lg">
            Discuss Your Requirements
          </Button>
        </div>
      </section>
    </>
  );
}

