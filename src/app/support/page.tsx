import { generateMetadata } from '@/utils/seo';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/utils/constants';
import { FaBook, FaSearch, FaTicketAlt, FaComments, FaEnvelope, FaPhone } from 'react-icons/fa';

export const metadata = generateMetadata({
  title: 'Support',
  description: `Get support from ${COMPANY.brandName}. Access documentation, submit tickets, and get help with your software solutions.`,
  path: '/support',
  keywords: [
    'support',
    'customer support',
    'technical support',
    'help desk',
    'documentation',
    'knowledge base',
    'support tickets',
    'IT support',
    'software support',
    '24/7 support',
  ],
});

const supportOptions = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides, API documentation, and tutorials to help you get the most out of your solutions.',
    icon: FaBook,
    link: '/contact',
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
  },
  {
    title: 'Knowledge Base',
    description: 'Search our knowledge base for answers to common questions and troubleshooting guides.',
    icon: FaSearch,
    link: '/contact',
    gradient: 'from-purple-500 via-purple-600 to-pink-500',
  },
  {
    title: 'Submit a Ticket',
    description: 'Create a support ticket for technical issues, feature requests, or general inquiries.',
    icon: FaTicketAlt,
    link: '/contact',
    gradient: 'from-green-500 via-emerald-600 to-teal-500',
  },
  {
    title: 'Live Chat',
    description: 'Chat with our support team in real-time for immediate assistance during business hours.',
    icon: FaComments,
    link: '/contact',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
  },
  {
    title: 'Email Support',
    description: 'Send us an email and we\'ll respond within 24 hours with detailed assistance.',
    icon: FaEnvelope,
    link: '/contact',
    gradient: 'from-orange-500 via-amber-600 to-yellow-500',
  },
  {
    title: 'Phone Support',
    description: 'Speak directly with our support team for urgent issues requiring immediate attention.',
    icon: FaPhone,
    link: '/contact',
    gradient: 'from-red-500 via-pink-600 to-rose-500',
  },
];

const supportTiers = [
  {
    tier: 'Basic',
    description: 'Standard support for all clients',
    features: [
      'Email support (24-48 hour response)',
      'Access to knowledge base',
      'Documentation access',
      'Bug fixes and patches',
    ],
  },
  {
    tier: 'Professional',
    description: 'Enhanced support for professional clients',
    features: [
      'Priority email support (12-24 hour response)',
      'Phone support during business hours',
      'Live chat access',
      'Priority bug fixes',
      'Monthly health checks',
    ],
  },
  {
    tier: 'Enterprise',
    description: 'Dedicated support for enterprise clients',
    features: [
      '24/7 phone and email support',
      'Dedicated support manager',
      'SLA guarantees',
      'Priority feature requests',
      'Quarterly business reviews',
      'Custom training sessions',
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Support Center</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We&apos;re here to help. Access resources, get assistance, and find answers to your questions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get Support</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} hover className="flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center shadow-xl`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4">{option.description}</p>
                  </div>
                  <Button href={option.link} variant="outline" size="sm">
                    Access
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center"></h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {supportTiers.map((tier, index) => {
              const tierGradients = [
                'from-blue-500 via-blue-600 to-cyan-500',
                'from-purple-500 via-purple-600 to-pink-500',
                'from-indigo-500 via-blue-600 to-purple-500',
              ];
              return (
                <Card key={index} hover className="flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl border-t-4 border-t-blue-500">
                  <div className="mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tierGradients[index]} flex items-center justify-center shadow-lg mb-4`}>
                      <span className="text-white font-bold text-lg">{tier.tier[0]}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 flex-1 mb-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our support team directly for urgent issues or questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Contact Support
            </Button>
            <Button href={`mailto:${COMPANY.primaryContact}`} size="lg" variant="outline">
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

