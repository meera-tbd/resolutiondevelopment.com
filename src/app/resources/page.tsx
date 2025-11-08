import { generateMetadata } from '@/utils/seo';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/utils/constants';
import { FaLaptopCode, FaCloud, FaShieldAlt, FaBolt, FaMobileAlt, FaRocket, FaDollarSign, FaCogs, FaCheckCircle } from 'react-icons/fa';

export const metadata = generateMetadata({
  title: 'Resources',
  description: `Access valuable resources from ${COMPANY.brandName} including whitepapers, case studies, guides, and tools to help your business.`,
  path: '/resources',
  keywords: [
    'resources',
    'whitepapers',
    'case studies',
    'guides',
    'tools',
    'software development resources',
    'IT resources',
    'technology guides',
    'best practices',
    'downloads',
  ],
});

const resources = [
  {
    title: 'Software Development Guide',
    type: 'Guide',
    description: 'Comprehensive guide to modern software development practices and methodologies.',
    download: true,
    icon: FaLaptopCode,
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
  },
  {
    title: 'Cloud Migration Checklist',
    type: 'Checklist',
    description: 'Step-by-step checklist for migrating your infrastructure to the cloud.',
    download: true,
    icon: FaCloud,
    gradient: 'from-purple-500 via-purple-600 to-pink-500',
  },
  {
    title: 'Security Best Practices',
    type: 'Whitepaper',
    description: 'Essential security practices for protecting your applications and data.',
    download: true,
    icon: FaShieldAlt,
    gradient: 'from-green-500 via-emerald-600 to-teal-500',
  },
  {
    title: 'API Integration Guide',
    type: 'Guide',
    description: 'Learn how to integrate third-party APIs into your applications effectively.',
    download: true,
    icon: FaBolt,
    gradient: 'from-orange-500 via-amber-600 to-yellow-500',
  },
  {
    title: 'Mobile App Development Trends',
    type: 'Report',
    description: 'Latest trends and insights in mobile app development for 2025.',
    download: true,
    icon: FaMobileAlt,
    gradient: 'from-indigo-500 via-blue-600 to-purple-500',
  },
  {
    title: 'DevOps Implementation Guide',
    type: 'Guide',
    description: 'Complete guide to implementing DevOps practices in your organization.',
    download: true,
    icon: FaRocket,
    gradient: 'from-red-500 via-pink-600 to-rose-500',
  },
];

const tools = [
  {
    title: 'Project Cost Calculator',
    description: 'Estimate the cost of your software project based on requirements.',
    icon: FaDollarSign,
    gradient: 'from-green-500 via-emerald-600 to-teal-500',
  },
  {
    title: 'Technology Stack Selector',
    description: 'Get recommendations for the best technology stack for your project.',
    icon: FaCogs,
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
  },
  {
    title: 'Security Audit Checklist',
    description: 'Comprehensive checklist for auditing your application security.',
    icon: FaCheckCircle,
    gradient: 'from-purple-500 via-purple-600 to-pink-500',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Resources</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Access guides, whitepapers, tools, and insights to help you make informed technology decisions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Downloads & Guides</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
              <Card key={index} hover className="flex flex-col">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${resource.gradient} flex items-center justify-center shadow-xl`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                </div>
                <Button href="/login" variant="outline" size="sm">
                  Download
                </Button>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tools & Calculators</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
              <Card key={index} hover className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center shadow-xl mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <Button href="/contact" variant="outline" size="sm">
                  Use Tool
                </Button>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Resources?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a specific question or need custom resources? Our team is here to help.
          </p>
          <Button href="/contact" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}

