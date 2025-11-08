import { generateMetadata } from '@/utils/seo';
import Card from '@/components/ui/Card';
import { COMPANY } from '@/utils/constants';

export const metadata = generateMetadata({
  title: 'Our Process',
  description: `Learn about ${COMPANY.brandName}'s development process. From initial consultation to deployment and support, we ensure transparent communication and quality delivery.`,
  path: '/process',
  keywords: [
    'development process',
    'software development methodology',
    'agile development',
    'project management',
    'software development lifecycle',
    'SDLC',
    'development workflow',
    'IT project process',
  ],
});

const processSteps = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description: 'We start by understanding your business goals, requirements, and challenges. Through detailed discussions and analysis, we create a comprehensive project plan.',
    activities: [
      'Requirements gathering',
      'Stakeholder interviews',
      'Technical feasibility analysis',
      'Project roadmap creation',
    ],
    icon: '🔍',
  },
  {
    step: 2,
    title: 'Design & Architecture',
    description: 'Our team designs the solution architecture, user interfaces, and system workflows. We create wireframes, mockups, and technical specifications.',
    activities: [
      'System architecture design',
      'UI/UX design',
      'Database schema design',
      'API specification',
    ],
    icon: '🎨',
  },
  {
    step: 3,
    title: 'Development',
    description: 'Using agile methodology, we develop your solution in iterative sprints. Regular demos and feedback ensure we\'re building exactly what you need.',
    activities: [
      'Sprint planning',
      'Code development',
      'Code reviews',
      'Regular demos',
    ],
    icon: '💻',
  },
  {
    step: 4,
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive testing ensures your solution is bug-free, secure, and performs optimally. We conduct unit, integration, and user acceptance testing.',
    activities: [
      'Automated testing',
      'Manual testing',
      'Security testing',
      'Performance testing',
    ],
    icon: '✅',
  },
  {
    step: 5,
    title: 'Deployment',
    description: 'We handle the deployment process, ensuring smooth transition to production. This includes environment setup, data migration, and go-live support.',
    activities: [
      'Environment configuration',
      'Deployment automation',
      'Data migration',
      'Go-live support',
    ],
    icon: '🚀',
  },
  {
    step: 6,
    title: 'Support & Maintenance',
    description: 'Ongoing support and maintenance ensure your solution continues to perform optimally. We provide monitoring, updates, and enhancements.',
    activities: [
      '24/7 monitoring',
      'Bug fixes',
      'Performance optimization',
      'Feature enhancements',
    ],
    icon: '🔧',
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Our Development Process</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A proven methodology that ensures quality delivery, transparent communication, and successful outcomes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">
                      {process.step}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <div className="flex items-start mb-4">
                      <span className="text-4xl mr-4">{process.icon}</span>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">{process.title}</h2>
                        <p className="text-gray-600 mb-4">{process.description}</p>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-2">Key Activities:</p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {process.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start text-sm text-gray-700">
                                <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-16 bottom-0 w-0.5 bg-blue-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agile Methodology</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              We follow agile principles with regular sprints, continuous feedback, and iterative improvements. 
              This approach ensures flexibility, transparency, and alignment with your evolving needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Transparent Communication</h3>
                <p className="text-sm text-gray-600">Regular updates and open communication channels</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Adaptation</h3>
                <p className="text-sm text-gray-600">Ability to adjust priorities and requirements</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Continuous Delivery</h3>
                <p className="text-sm text-gray-600">Regular releases and incremental value delivery</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

