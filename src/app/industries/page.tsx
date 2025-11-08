import { generateMetadata } from '@/utils/seo';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/utils/constants';
import { 
  FaHospital, 
  FaCreditCard, 
  FaShoppingBag, 
  FaGraduationCap, 
  FaIndustry, 
  FaHome, 
  FaTruck, 
  FaLandmark 
} from 'react-icons/fa';

export const metadata = generateMetadata({
  title: 'Industries We Serve',
  description: `${COMPANY.brandName} provides IT solutions across various industries including healthcare, finance, retail, education, and more.`,
  path: '/industries',
  keywords: [
    'industries',
    'healthcare IT solutions',
    'finance software',
    'retail technology',
    'education software',
    'manufacturing IT',
    'real estate technology',
    'logistics software',
    'government IT solutions',
    'industry-specific software',
  ],
});

const industries = [
  {
    name: 'Healthcare',
    description: 'HIPAA-compliant solutions for patient management, electronic health records, and telemedicine platforms.',
    solutions: ['EHR Systems', 'Telemedicine', 'Patient Portals', 'Medical Billing'],
    icon: FaHospital,
    gradient: 'from-red-500 via-pink-600 to-rose-500',
  },
  {
    name: 'Finance & Banking',
    description: 'Secure financial applications, trading platforms, and banking solutions with regulatory compliance.',
    solutions: ['Banking Apps', 'Trading Platforms', 'Payment Systems', 'Risk Management'],
    icon: FaCreditCard,
    gradient: 'from-yellow-500 via-amber-600 to-orange-500',
  },
  {
    name: 'Retail & E-Commerce',
    description: 'Scalable e-commerce platforms, inventory management, and omnichannel retail solutions.',
    solutions: ['E-Commerce Platforms', 'POS Systems', 'Inventory Management', 'Customer Analytics'],
    icon: FaShoppingBag,
    gradient: 'from-purple-500 via-violet-600 to-fuchsia-500',
  },
  {
    name: 'Education',
    description: 'Learning management systems, student portals, and educational technology solutions.',
    solutions: ['LMS Platforms', 'Student Portals', 'Online Learning', 'Assessment Tools'],
    icon: FaGraduationCap,
    gradient: 'from-blue-500 via-cyan-600 to-teal-500',
  },
  {
    name: 'Manufacturing',
    description: 'Industrial IoT solutions, supply chain management, and production optimization systems.',
    solutions: ['IoT Integration', 'Supply Chain', 'Quality Control', 'Production Planning'],
    icon: FaIndustry,
    gradient: 'from-orange-500 via-red-600 to-pink-500',
  },
  {
    name: 'Real Estate',
    description: 'Property management systems, real estate platforms, and CRM solutions for property professionals.',
    solutions: ['Property Management', 'Listing Platforms', 'CRM Systems', 'Virtual Tours'],
    icon: FaHome,
    gradient: 'from-green-500 via-emerald-600 to-teal-500',
  },
  {
    name: 'Logistics & Transportation',
    description: 'Fleet management, route optimization, and logistics tracking solutions.',
    solutions: ['Fleet Management', 'Route Optimization', 'Tracking Systems', 'Warehouse Management'],
    icon: FaTruck,
    gradient: 'from-indigo-500 via-blue-600 to-purple-500',
  },
  {
    name: 'Government',
    description: 'Secure government applications, citizen portals, and public service platforms.',
    solutions: ['Citizen Portals', 'Document Management', 'Public Services', 'Compliance Systems'],
    icon: FaLandmark,
    gradient: 'from-gray-600 via-slate-700 to-gray-800',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Industries We Serve</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We deliver specialized IT solutions across diverse industries, understanding each sector&apos;s unique requirements.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
              <Card key={index} hover className="h-full flex flex-col group">
                {/* Icon with gradient background */}
                <div className="mb-5 flex justify-center">
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${industry.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{industry.description}</p>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Solutions:</p>
                    <ul className="space-y-1.5">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <svg className="h-4 w-4 text-blue-600 mr-1.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Industry Not Listed?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We have experience working across many industries. Even if your industry isn&apos;t listed above, 
            we can adapt our solutions to meet your specific needs.
          </p>
          <Button href="/contact" size="lg">
            Discuss Your Industry Needs
          </Button>
        </div>
      </section>
    </>
  );
}

