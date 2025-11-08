import { generateMetadata, generateBreadcrumbStructuredData } from '@/utils/seo';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/utils/constants';
import {
  FaDollarSign,
  FaHeartbeat,
  FaLaptopHouse,
  FaGraduationCap,
  FaClock,
  FaUsers,
  FaMapMarkerAlt,
  FaBriefcase,
  FaArrowRight,
} from 'react-icons/fa';

export const metadata = generateMetadata({
  title: 'Careers',
  description: `Join the ${COMPANY.brandName} team. We're looking for talented developers, designers, and technology professionals to help us build the future.`,
  path: '/careers',
  keywords: [
    'careers',
    'jobs',
    'employment',
    'software developer jobs',
    'IT careers',
    'tech jobs',
    'software engineering jobs',
    'remote jobs',
  ],
});

const openPositions = [
  {
    title: 'Senior Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'We are seeking an experienced full-stack developer to join our engineering team.',
    requirements: [
      '5+ years of experience in web development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure)',
      'Strong problem-solving and communication skills',
    ],
  },
  {
    title: 'Mobile App Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Looking for a skilled mobile developer to build innovative iOS and Android applications.',
    requirements: [
      '3+ years of mobile development experience',
      'Proficiency in React Native or Flutter',
      'Experience with native iOS/Android development',
      'Portfolio of published apps',
    ],
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Hybrid',
    type: 'Full-time',
    description: 'Join our design team to create beautiful and intuitive user experiences.',
    requirements: [
      '4+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Strong portfolio showcasing design process',
      'Understanding of front-end development',
    ],
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help us build and maintain scalable infrastructure and deployment pipelines.',
    requirements: [
      '3+ years of DevOps experience',
      'Experience with Kubernetes, Docker, CI/CD',
      'Knowledge of cloud platforms (AWS, Azure, GCP)',
      'Infrastructure as Code experience',
    ],
  },
];

const benefits = [
  { title: 'Competitive Salary', icon: FaDollarSign, color: 'text-green-600' },
  { title: 'Health Insurance', icon: FaHeartbeat, color: 'text-red-600' },
  { title: 'Remote Work', icon: FaLaptopHouse, color: 'text-blue-600' },
  { title: 'Professional Development', icon: FaGraduationCap, color: 'text-purple-600' },
  { title: 'Flexible Hours', icon: FaClock, color: 'text-orange-600' },
  { title: 'Team Events', icon: FaUsers, color: 'text-indigo-600' },
];

export default function CareersPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6 tracking-tight">
              Build Your Career With Us
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl leading-relaxed">
              Join a team of passionate professionals building innovative technology solutions that shape the future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At {COMPANY.brandName}, we foster a culture of innovation, collaboration, and continuous learning. 
              We invest in our people because they are our greatest asset.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} hover className="text-center p-8 border border-gray-100 hover:border-blue-200 transition-all">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gray-50 mb-4 ${benefit.color}`}>
                    <IconComponent className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                </Card>
              );
            })}
          </div>

          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600">
              Explore our current opportunities and find the perfect role for your career growth.
            </p>
          </div>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} hover className="border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="px-4 py-1.5 text-sm font-semibold text-blue-700 bg-blue-50 rounded-full border border-blue-200">
                        {position.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-gray-400" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaBriefcase className="text-gray-400" />
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">{position.description}</p>
                    <div>
                      <p className="text-base font-semibold text-gray-900 mb-3">Key Requirements:</p>
                      <ul className="space-y-2 text-gray-700">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1.5">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="lg:ml-8 flex-shrink-0">
                    <Button href="/login" size="lg" className="w-full lg:w-auto">
                      Apply Now
                      <FaArrowRight className="ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Don&apos;t See a Fit?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            We&apos;re always interested in connecting with talented individuals who share our passion for innovation. 
            Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Button href="/login" size="lg" variant="primary">
            Send Your Resume
            <FaArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
}

