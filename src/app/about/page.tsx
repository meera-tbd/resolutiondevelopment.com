import { generateMetadata, generateBreadcrumbStructuredData } from '@/utils/seo';
import Card from '@/components/ui/Card';
import { COMPANY } from '@/utils/constants';

export const metadata = generateMetadata({
  title: 'About Us',
  description: `Learn about ${COMPANY.brandName} - Our history, mission, values, and commitment to delivering exceptional IT solutions since ${COMPANY.establishedYear}.`,
  path: '/about',
  keywords: [
    'about us',
    'IT company',
    'software development company',
    'technology company',
    'IT solutions provider',
    'software development team',
    'IT services company',
  ],
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]);

  const timeline = [
    { year: COMPANY.establishedYear, event: 'Company Founded', description: `${COMPANY.brandName} was established with a vision to deliver innovative IT solutions.` },
    { year: '2005', event: 'First Major Client', description: 'Secured our first enterprise client and expanded our service offerings.' },
    { year: '2010', event: 'Cloud Solutions Launch', description: 'Introduced cloud computing and DevOps services to our portfolio.' },
    { year: '2015', event: 'International Expansion', description: 'Expanded operations to serve clients globally.' },
    { year: '2020', event: 'Digital Transformation Leader', description: 'Recognized as a leader in digital transformation solutions.' },
    { year: '2025', event: 'AI & Innovation Leadership', description: 'Leading the way in AI-powered solutions and next-generation technology services.' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends and continuously innovate to deliver cutting-edge solutions.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      gradient: 'from-yellow-400 via-orange-500 to-red-500',
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to client service.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      gradient: 'from-blue-400 via-indigo-500 to-purple-500',
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      gradient: 'from-green-400 via-emerald-500 to-teal-500',
    },
    {
      title: 'Client Focus',
      description: 'Your success is our success. We prioritize understanding and meeting your unique needs.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      gradient: 'from-pink-400 via-rose-500 to-red-500',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-20" role="banner">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6 drop-shadow-lg">About {COMPANY.brandName}</h1>
            <p className="text-xl sm:text-2xl text-blue-50 leading-relaxed drop-shadow-md">
              Established in {COMPANY.establishedYear}, we&apos;ve been at the forefront of IT innovation, 
              helping businesses transform through technology.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-label="Company Story">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  {COMPANY.brandName} was founded in {COMPANY.establishedYear} with a simple yet powerful mission: 
                  to help businesses leverage technology for growth and success. What started as a small team 
                  of passionate developers has grown into a trusted partner for companies worldwide.
                </p>
                <p>
                  Over the years, we&apos;ve completed hundreds of projects, from small business websites to 
                  enterprise-scale applications. Our commitment to quality, innovation, and client success 
                  has earned us a reputation as a reliable technology partner.
                </p>
                <p>
                  Today, we continue to evolve with the technology landscape, adopting new tools, 
                  methodologies, and best practices to deliver solutions that drive real business value.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <Card className="border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 ml-4">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage.
                </p>
              </Card>
              <Card className="border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 ml-4">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the leading IT solutions provider, recognized for excellence, innovation, 
                  and transformative impact on our clients&apos; businesses.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} hover className="text-center border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 bg-white h-full flex flex-col items-center">
                <div className={`relative mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that shaped our growth and success
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-200 transform md:-translate-x-1/2"></div>
            <div className="space-y-12 pl-12 md:pl-0">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  <div className={`flex-1 w-full md:w-auto ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:order-2'}`}>
                    <Card className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-white">
                      <div className="flex items-baseline flex-wrap gap-2 mb-3">
                        <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{item.year}</span>
                        <h3 className="text-xl font-bold text-gray-900">{item.event}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-2 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 top-0 md:top-1/2 md:-translate-y-1/2"></div>
                  <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold sm:text-5xl mb-6">Ready to Work With Us?</h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can help transform your business with innovative technology solutions.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-white px-8 py-4 text-blue-600 font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
