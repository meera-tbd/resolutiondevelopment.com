import { generateMetadata, generateBreadcrumbStructuredData } from '@/utils/seo';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { COMPANY } from '@/utils/constants';

export const metadata = generateMetadata({
  title: 'Blog',
  description: `Read the latest insights, tutorials, and news from ${COMPANY.brandName}. Stay updated with technology trends and best practices.`,
  path: '/blog',
});

const blogPosts = [
  {
    title: 'The Future of Cloud Computing in 2025',
    slug: 'the-future-of-cloud-computing-in-2025',
    excerpt: 'Exploring emerging trends and technologies shaping the cloud computing landscape.',
    category: 'Technology',
    image: '/assets/images/growtika-Am6pBe2FpJw-unsplash (1).jpg',
  },
  {
    title: 'Best Practices for React Performance Optimization',
    slug: 'best-practices-for-react-performance-optimization',
    excerpt: 'Learn how to optimize your React applications for better performance and user experience.',
    category: 'Development',
    image: '/assets/images/atomic-molecule-life-science-study-experiment-graphic (2).jpg',
  },
  {
    title: 'Mobile-First Design: Why It Matters',
    slug: 'mobile-first-design-why-it-matters',
    excerpt: 'Understanding the importance of mobile-first design in today\'s digital landscape.',
    category: 'Design',
    image: '/assets/images/lifestyle-designer-using-3d-printer (1).jpg',
  },
  {
    title: 'DevOps Best Practices for Modern Teams',
    slug: 'devops-best-practices-for-modern-teams',
    excerpt: 'Essential DevOps practices that can help your team deliver faster and more reliably.',
    category: 'DevOps',
    image: '/assets/images/growtika-f7uCQxhucw4-unsplash.jpg',
  },
  {
    title: 'Security Best Practices for Web Applications',
    slug: 'security-best-practices-for-web-applications',
    excerpt: 'Critical security measures every developer should implement in their web applications.',
    category: 'Security',
    image: '/assets/images/dan-lefebvre-7I96SlGpauY-unsplash (1).jpg',
  },
  {
    title: 'Introduction to Microservices Architecture',
    slug: 'introduction-to-microservices-architecture',
    excerpt: 'A comprehensive guide to understanding and implementing microservices architecture.',
    category: 'Architecture',
    image: '/assets/images/vishnu-mohanan-2YfhLptMxsg-unsplash (1).jpg',
  },
  {
    title: 'API Design Principles for Modern Applications',
    slug: 'api-design-principles-for-modern-applications',
    excerpt: 'Learn the fundamental principles of designing robust and scalable APIs for modern applications.',
    category: 'Development',
    image: '/assets/images/programming-background-with-html2.jpg',
  },
  {
    title: 'Database Optimization Strategies',
    slug: 'database-optimization-strategies',
    excerpt: 'Essential techniques for optimizing database performance and improving query efficiency.',
    category: 'Technology',
    image: '/assets/images/steve-johnson-luT1PtFOWZU-unsplash (1).jpg',
  },
  {
    title: 'Building Scalable Web Applications',
    slug: 'building-scalable-web-applications',
    excerpt: 'Key strategies and patterns for building web applications that can scale with your business.',
    category: 'Architecture',
    image: '/assets/images/person-working-relation-innovation (1).jpg',
  },
];

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16" role="banner">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Blog & Insights</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Stay updated with the latest technology trends, best practices, and industry insights.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Blog Articles">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={index} itemScope itemType="https://schema.org/BlogPosting">
                <Card hover className="flex flex-col overflow-hidden p-0">
                <div className="relative w-full h-48 bg-gray-200">
                  <Image
                    src={post.image}
                    alt={`${post.title} - ${post.category} article featured image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                  <Button href={`/blog/${post.slug}`} variant="outline" size="sm" className="mt-auto">
                    Read More
                  </Button>
                </div>
              </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles and insights directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>
    </>
  );
}

