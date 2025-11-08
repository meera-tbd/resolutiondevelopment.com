import { generateMetadata, generateBreadcrumbStructuredData, generateReviewStructuredData, generateHowToStructuredData } from '@/utils/seo';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { COMPANY } from '@/utils/constants';

export const metadata = generateMetadata({
  title: `${COMPANY.brandName} - ${COMPANY.description}`,
  description: `${COMPANY.description} - Leading IT solutions since ${COMPANY.establishedYear}. Custom software development, web applications, mobile apps, cloud solutions, and IT consulting services.`,
  path: '/',
  keywords: [
    'IT solutions',
    'software development company',
    'web development services',
    'custom software development',
    'enterprise software solutions',
    'cloud computing services',
    'mobile app development',
    'IT consulting',
    'digital transformation',
    'technology solutions',
  ],
});

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
  ]);

  const stats = [
    { value: '200+', label: 'Projects Completed', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: '150+', label: 'Happy Clients', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { value: '50+', label: 'Team Members', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
    { value: '24/7', label: 'Support', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
  ];

  const features = [
    {
      title: 'Fast Delivery',
      description: 'Agile development methodology ensures rapid delivery without compromising quality. We deliver on time, every time.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability built into every solution. Your data and applications are protected.',
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    },
    {
      title: 'Expert Team',
      description: 'Skilled professionals with deep expertise in modern technologies and best practices. Certified and experienced.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    },
    {
      title: 'Scalable Solutions',
      description: 'Build for today, scale for tomorrow. Our solutions grow with your business needs and handle increasing demands.',
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    },
    {
      title: 'Cost-Effective',
      description: 'Optimized development processes and efficient resource management deliver maximum value for your investment.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
      title: 'Innovation Driven',
      description: 'Stay ahead with cutting-edge technologies and innovative approaches. We leverage the latest tools and frameworks.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    },
  ];

  const technologies = [
    { name: 'React & Next.js', category: 'Frontend' },
    { name: 'Node.js & Python', category: 'Backend' },
    { name: 'AWS & Azure', category: 'Cloud' },
    { name: 'Docker & Kubernetes', category: 'DevOps' },
    { name: 'MongoDB & PostgreSQL', category: 'Database' },
    { name: 'React Native & Flutter', category: 'Mobile' },
  ];

  const testimonials = [
    {
      quote: 'Resolution Development transformed our business operations with their innovative software solutions. The team is professional, responsive, and delivers exceptional results.',
      author: 'Priya Sharma',
     
      rating: 5,
    },
    {
      quote: 'Outstanding service and technical expertise. They understood our requirements perfectly and delivered a solution that exceeded our expectations. Highly recommended!',
      author: 'Rajesh Kumar',

      rating: 5,
    },
    {
      quote: 'Working with Resolution Development has been a game-changer. Their cloud solutions have improved our efficiency by 40% and reduced costs significantly.',
      author: 'Anjali Patel',
     
      rating: 5,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your business needs, goals, and requirements to create a comprehensive project plan.',
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our team creates intuitive designs and prototypes to ensure the solution meets your vision.',
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing ensures quality and timely delivery of features.',
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Smooth deployment followed by ongoing support and maintenance to keep your solution running perfectly.',
    },
  ];

  const reviewSchema = generateReviewStructuredData(
    testimonials.map((testimonial) => ({
      author: testimonial.author,
      rating: testimonial.rating,
      reviewBody: testimonial.quote,
      datePublished: new Date().toISOString(),
    }))
  );

  const howToSchema = generateHowToStructuredData(
    processSteps.map((step, index) => ({
      name: step.title,
      text: step.description,
      position: index + 1,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Hero
        title="Innovative IT Solutions"
        subtitle="Transforming Businesses Through Technology"
        description="We deliver cutting-edge software development, web applications, and cloud solutions that drive business growth and digital transformation."
        primaryCTA={{ text: 'Get Started', href: '/contact' }}
        secondaryCTA={{ text: 'Our Services', href: '/services' }}
      />

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100" aria-label="Company Statistics">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 mb-4 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-label="About Us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Businesses Through Technology
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                {COMPANY.description}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With over {new Date().getFullYear() - parseInt(COMPANY.establishedYear)} years of experience in the IT industry, 
                we&apos;ve helped hundreds of businesses transform their digital presence and streamline their operations 
                through innovative technology solutions. Our commitment to excellence and client success drives everything we do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/about" size="lg">
                  Learn More About Us
                </Button>
                <Button href="/portfolio" size="lg" variant="outline">
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl transform rotate-6 opacity-10"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">200+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                      <div className="text-sm text-gray-600">Team Members</div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600 mb-1">150+</div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" aria-label="Why Choose Us">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Excellence in Every Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver results that drive growth and innovation
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} hover className="border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 bg-white h-full flex flex-col">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white mb-6 shadow-xl">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base flex-grow">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-label="Technologies We Use">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              Modern Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build robust, scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <Card className="text-center border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center py-8 px-6 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50">
                  <div className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {tech.name}
                  </div>
                  <div className="text-sm font-medium text-gray-500 group-hover:text-blue-700 transition-colors">
                    {tech.category}
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/technology" size="lg" variant="outline">
              Explore All Technologies
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white" aria-label="Our Process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to launch
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-cyan-200 transform translate-x-4"></div>
                )}
                <Card className="border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold text-lg flex items-center justify-center shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/process" size="lg">
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 via-cyan-50 to-white" aria-label="Client Testimonials">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from businesses we&apos;ve helped succeed
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 flex-grow leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/testimonials" size="lg" variant="outline">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white" aria-label="Call to Action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-5xl mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how our innovative IT solutions can drive growth and digital transformation for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started Today
              </Button>
              <Button href="/solutions" size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
