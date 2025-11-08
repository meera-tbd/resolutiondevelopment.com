import { generateMetadata, generateBreadcrumbStructuredData, generateReviewStructuredData } from '@/utils/seo';
import Card from '@/components/ui/Card';
import { COMPANY } from '@/utils/constants';

export const metadata = generateMetadata({
  title: 'Testimonials',
  description: `Read what our clients say about ${COMPANY.brandName}. See how we've helped businesses achieve their goals through innovative technology solutions.`,
  path: '/testimonials',
  keywords: [
    'testimonials',
    'client reviews',
    'customer testimonials',
    'client feedback',
    'reviews',
    'success stories',
    'client stories',
  ],
});

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'TechCorp India',
    role: 'CEO',
    content: 'Resolution Development transformed our business operations with their innovative software solutions. Their team was professional, responsive, and delivered exactly what we needed.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Priya Sharma',
    company: 'Retail Solutions Pvt Ltd',
    role: 'CTO',
    content: 'Working with Resolution Development was a game-changer. They understood our requirements perfectly and delivered a solution that exceeded our expectations. Highly recommended!',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Amit Patel',
    company: 'FinanceHub India',
    role: 'Product Manager',
    content: 'The team at Resolution Development is incredibly skilled and professional. They delivered our mobile app on time and within budget. The quality of their work is outstanding.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Anjali Reddy',
    company: 'HealthCare Plus',
    role: 'Operations Director',
    content: 'We needed a complex healthcare management system, and Resolution Development delivered beyond our expectations. Their expertise and attention to detail are remarkable.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Vikram Singh',
    company: 'E-Commerce Pro',
    role: 'Founder',
    content: 'Resolution Development built our e-commerce platform from scratch. The result is a robust, scalable solution that has significantly increased our online sales.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Kavita Mehta',
    company: 'Education Tech Solutions',
    role: 'CEO',
    content: 'Their cloud migration services helped us modernize our infrastructure and reduce costs. The team was knowledgeable, professional, and always available when we needed them.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Rahul Desai',
    company: 'Digital Innovations Ltd',
    role: 'Chief Technology Officer',
    content: 'Resolution Development helped us build a cutting-edge fintech platform. Their technical expertise and commitment to quality are unmatched. We saw a 300% increase in user engagement.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Sneha Iyer',
    company: 'Logistics Hub India',
    role: 'Operations Manager',
    content: 'The logistics management system they developed for us streamlined our entire supply chain. Their attention to detail and understanding of our business needs was exceptional.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Arjun Malhotra',
    company: 'Startup Ventures',
    role: 'Co-Founder',
    content: 'As a startup, we needed a cost-effective solution that could scale with us. Resolution Development delivered exactly that. Their agile approach and quick turnaround times were impressive.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Divya Nair',
    company: 'Healthcare Innovations',
    role: 'IT Director',
    content: 'Their healthcare management system has revolutionized how we serve our patients. The user-friendly interface and robust backend have significantly improved our operational efficiency.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Suresh Menon',
    company: 'Manufacturing Solutions',
    role: 'VP of Technology',
    content: 'Resolution Development created an integrated ERP system that transformed our manufacturing operations. Their team understood our complex requirements and delivered a seamless solution.',
    rating: 5,
    image: '👤',
  },
  {
    name: 'Meera Joshi',
    company: 'Real Estate Tech',
    role: 'CEO',
    content: 'The property management platform they built for us has been a game-changer. Their expertise in real estate technology and commitment to excellence made all the difference.',
    rating: 5,
    image: '👤',
  },
];

export default function TestimonialsPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Testimonials', url: '/testimonials' },
  ]);

  const reviewSchema = generateReviewStructuredData(
    testimonials.map((testimonial) => ({
      author: `${testimonial.name} - ${testimonial.company}`,
      rating: testimonial.rating,
      reviewBody: testimonial.content,
      datePublished: new Date().toISOString(),
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
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Client Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            See what our clients have to say about working with {COMPANY.brandName}.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover className="flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl border-l-4 border-l-blue-500">
                <div className="flex items-start mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xl font-bold mr-4 shadow-lg flex-shrink-0">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</h3>
                    <p className="text-sm font-medium text-blue-600 mb-1">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="relative mb-4">
                  <svg className="absolute top-0 left-0 w-8 h-8 text-blue-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-3.313 1.538-5.996 4.153-5.996 7.849h4v10h-7.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-3.313 1.538-5.996 4.153-5.996 7.849h3.983v10h-6.983z"/>
                  </svg>
                </div>
                <p className="text-gray-700 flex-1 italic leading-relaxed pl-6 text-sm">&quot;{testimonial.content}&quot;</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Become Our Next Success Story</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied clients who have transformed their businesses with our solutions.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </>
  );
}

