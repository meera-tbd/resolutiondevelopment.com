import { generateMetadata, generateBreadcrumbStructuredData } from '@/utils/seo';
import { COMPANY } from '@/utils/constants';
import { FaPalette, FaServer, FaMobileAlt, FaCloud, FaDatabase } from 'react-icons/fa';

export const metadata = generateMetadata({
  title: 'Technology Stack',
  description: `Explore the modern technologies and tools ${COMPANY.brandName} uses to build innovative software solutions.`,
  path: '/technology',
  keywords: [
    'technology stack',
    'programming languages',
    'web development technologies',
    'software development tools',
    'tech stack',
    'development frameworks',
    'programming frameworks',
  ],
});

const technologies = {
  frontend: [
    { name: 'React', description: 'Modern UI library for building interactive user interfaces' },
    { name: 'Next.js', description: 'React framework for production-ready applications' },
    { name: 'TypeScript', description: 'Typed JavaScript for better code quality' },
    { name: 'Vue.js', description: 'Progressive JavaScript framework' },
    { name: 'Angular', description: 'Platform for building mobile and desktop apps' },
  ],
  backend: [
    { name: 'Node.js', description: 'JavaScript runtime for server-side development' },
    { name: 'Python', description: 'Versatile language for web and data applications' },
    { name: 'Java', description: 'Enterprise-grade application development' },
    { name: '.NET', description: 'Microsoft framework for building applications' },
    { name: 'Go', description: 'Efficient language for scalable systems' },
  ],
  mobile: [
    { name: 'React Native', description: 'Cross-platform mobile app development' },
    { name: 'Flutter', description: 'Google\'s UI toolkit for native apps' },
    { name: 'Swift', description: 'iOS native development' },
    { name: 'Kotlin', description: 'Android native development' },
  ],
  cloud: [
    { name: 'AWS', description: 'Amazon Web Services cloud platform' },
    { name: 'Azure', description: 'Microsoft cloud computing services' },
    { name: 'GCP', description: 'Google Cloud Platform' },
    { name: 'Docker', description: 'Containerization platform' },
    { name: 'Kubernetes', description: 'Container orchestration' },
  ],
  databases: [
    { name: 'PostgreSQL', description: 'Advanced open-source relational database' },
    { name: 'MongoDB', description: 'NoSQL document database' },
    { name: 'MySQL', description: 'Popular relational database' },
  ],
};

export default function TechnologyPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Technology', url: '/technology' },
  ]);

  const categoryColors: Record<string, string> = {
    frontend: 'from-purple-500 to-pink-500',
    backend: 'from-blue-500 to-cyan-500',
    mobile: 'from-green-500 to-emerald-500',
    cloud: 'from-orange-500 to-red-500',
    databases: 'from-indigo-500 to-purple-500',
  };

  const categoryIconColors: Record<string, string> = {
    frontend: 'text-purple-500',
    backend: 'text-blue-500',
    mobile: 'text-green-500',
    cloud: 'text-orange-500',
    databases: 'text-indigo-500',
  };

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <FaPalette className="text-4xl" />,
    backend: (
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-lg blur-sm opacity-50"></div>
        <FaServer className="text-4xl relative text-blue-500" />
      </div>
    ),
    mobile: <FaMobileAlt className="text-4xl" />,
    cloud: <FaCloud className="text-4xl" />,
    databases: <FaDatabase className="text-4xl" />,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 drop-shadow-lg">
              Our Technology Stack
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and proven tools to build robust, scalable solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {Object.entries(technologies).map(([category, items]) => (
              <div key={category} className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className={categoryIconColors[category]}>
                    {categoryIcons[category]}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 capitalize tracking-tight">
                    {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend' : category === 'mobile' ? 'Mobile' : category === 'cloud' ? 'Cloud & DevOps' : 'Databases'}
                  </h2>
                  <div className={`flex-1 h-0.5 bg-gradient-to-r ${categoryColors[category]} opacity-30 ml-4`}></div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((tech, index) => (
                    <div
                      key={index}
                      className="group relative bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[category]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      <div className="relative p-6 h-full flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {tech.name}
                          </h3>
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${categoryColors[category]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                          {tech.description}
                        </p>
                        <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${categoryColors[category]} transition-all duration-500 rounded-full`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

