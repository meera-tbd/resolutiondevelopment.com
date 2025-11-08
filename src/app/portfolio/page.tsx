import { generateMetadata, generateBreadcrumbStructuredData } from '@/utils/seo';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/utils/constants';

export const metadata = generateMetadata({
  title: 'Portfolio',
  description: `View our portfolio of successful projects. ${COMPANY.brandName} has delivered innovative software solutions for clients across various industries.`,
  path: '/portfolio',
  keywords: [
    'portfolio',
    'projects',
    'case studies',
    'software development projects',
    'IT solutions portfolio',
    'successful projects',
    'client work',
  ],
});

const projects = [
  {
    title: 'Enterprise E-Commerce Platform',
    industry: 'Retail',
    description: 'Built a scalable e-commerce platform handling millions of transactions with advanced inventory management and analytics.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    gradient: 'from-blue-500 via-blue-600 to-cyan-500',
  },
  {
    title: 'Healthcare Management System',
    industry: 'Healthcare',
    description: 'Developed a comprehensive healthcare management system with patient records, scheduling, and billing integration.',
    technologies: ['Angular', 'Python', 'MongoDB', 'Azure'],
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    gradient: 'from-red-500 via-pink-600 to-rose-500',
  },
  {
    title: 'Financial Trading Platform',
    industry: 'Finance',
    description: 'Created a real-time trading platform with advanced charting, risk management, and compliance features.',
    technologies: ['Vue.js', 'Java', 'Redis', 'Kubernetes'],
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    gradient: 'from-green-500 via-emerald-600 to-teal-500',
  },
  {
    title: 'Mobile Banking App',
    industry: 'Banking',
    description: 'Developed a secure mobile banking application with biometric authentication and real-time transaction processing.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Docker'],
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    gradient: 'from-indigo-500 via-blue-600 to-purple-500',
  },
  {
    title: 'Supply Chain Management',
    industry: 'Logistics',
    description: 'Built an end-to-end supply chain management system with IoT integration and predictive analytics.',
    technologies: ['React', 'Python', 'MongoDB', 'AWS IoT'],
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    gradient: 'from-orange-500 via-amber-600 to-yellow-500',
  },
  {
    title: 'Learning Management System',
    industry: 'Education',
    description: 'Created a comprehensive LMS with video streaming, assessments, and collaborative learning features.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'CloudFront'],
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    gradient: 'from-purple-500 via-purple-600 to-pink-500',
  },
];

export default function PortfolioPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
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
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6 drop-shadow-lg">Our Portfolio</h1>
            <p className="text-xl sm:text-2xl text-blue-50 leading-relaxed drop-shadow-md">
              Explore our successful projects and see how we&apos;ve helped businesses transform through technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} hover className="flex flex-col border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={project.icon} />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-4 text-center">
                    <span className="inline-block px-4 py-1.5 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">{project.description}</p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Button href="/contact" variant="outline" size="sm" className="w-full">
                  Contact Us
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can bring your vision to life with innovative technology solutions.
          </p>
          <Button href="/contact" size="lg">
            Get Started
          </Button>
        </div>
      </section>
    </>
  );
}

