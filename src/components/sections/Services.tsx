import Button from '@/components/ui/Button';
import { COMPANY } from '@/utils/constants';

const serviceIcons = [
  // Custom Software Development - Code icon
  'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  // Web Application Development - Globe icon
  'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  // Mobile App Development - Mobile phone icon
  'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  // Cloud Solutions & DevOps - Cloud icon
  'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  // IT Consulting & Strategy - Lightbulb/Strategy icon
  'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  // Data Analytics & Business Intelligence - Chart icon
  'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
];

const serviceGradients = [
  'from-blue-500 via-blue-600 to-cyan-500',
  'from-purple-500 via-purple-600 to-pink-500',
  'from-green-500 via-emerald-600 to-teal-500',
  'from-orange-500 via-amber-600 to-yellow-500',
  'from-indigo-500 via-blue-600 to-purple-500',
  'from-red-500 via-rose-600 to-pink-500',
];

const serviceDescriptions = [
  'Tailored software solutions built from the ground up to meet your unique business requirements and drive operational efficiency.',
  'Modern, responsive web applications that deliver exceptional user experiences and scale with your growing business needs.',
  'Native and cross-platform mobile applications that engage users and provide seamless experiences across iOS and Android devices.',
  'Scalable cloud infrastructure and DevOps practices that ensure reliability, security, and continuous deployment capabilities.',
  'Strategic IT consulting services that align technology with business objectives and optimize your digital transformation journey.',
  'Advanced data analytics and business intelligence solutions that transform raw data into actionable insights and drive informed decision-making.',
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COMPANY.keyServices.map((service, index) => {
            const gradient = serviceGradients[index % serviceGradients.length];
            const icon = serviceIcons[index % serviceIcons.length];
            const description = serviceDescriptions[index] || `Professional ${service.toLowerCase()} services designed to drive your business forward with cutting-edge technology solutions.`;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className={`relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {service}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                  </p>
                  
                  {/* Button */}
                  <a
                    href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`inline-flex items-center font-semibold text-sm group/btn relative`}
                  >
                    <span className={`relative z-10 text-transparent bg-clip-text bg-gradient-to-r ${gradient} group-hover/btn:from-blue-600 group-hover/btn:to-cyan-600 transition-all duration-300`}>
                      Learn More
                    </span>
                    <svg 
                      className={`ml-2 h-4 w-4 text-transparent bg-clip-text bg-gradient-to-r ${gradient} group-hover/btn:translate-x-1 transition-transform duration-300`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${gradient} group-hover/btn:w-full transition-all duration-300`}></span>
                  </a>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-bl-full transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button href="/services" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}

