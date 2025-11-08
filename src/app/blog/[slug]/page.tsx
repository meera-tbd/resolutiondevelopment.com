import { generateMetadata as generateBaseMetadata, generateArticleStructuredData, generateBreadcrumbStructuredData } from '@/utils/seo';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY } from '@/utils/constants';

const blogPosts = [
  {
    title: 'The Future of Cloud Computing in 2025',
    slug: 'the-future-of-cloud-computing-in-2025',
    excerpt: 'Exploring emerging trends and technologies shaping the cloud computing landscape.',
    category: 'Technology',
    image: '/assets/images/growtika-Am6pBe2FpJw-unsplash (1).jpg',
    content: `
      <p>Cloud computing has evolved dramatically over the past decade, and as we look toward 2025, the landscape continues to shift in ways that will fundamentally change how businesses operate. What started as a way to reduce infrastructure costs has become the backbone of modern digital transformation.</p>
      
      <p>One of the most significant trends we're seeing is the move toward edge computing. While centralized cloud data centers aren't going away, more processing is happening closer to where data is generated. This shift addresses latency concerns for real-time applications like autonomous vehicles, IoT devices, and augmented reality experiences. Companies are investing in edge infrastructure to deliver faster response times and better user experiences.</p>
      
      <p>Serverless computing is another area experiencing rapid growth. The ability to run code without managing servers has revolutionized how developers build applications. We're seeing more organizations adopt serverless architectures for everything from API endpoints to data processing pipelines. The pay-per-use model makes it cost-effective for applications with variable workloads.</p>
      
      <p>Multi-cloud strategies are becoming the norm rather than the exception. Organizations are spreading workloads across multiple cloud providers to avoid vendor lock-in, improve redundancy, and take advantage of best-in-class services from different providers. This approach requires careful planning and management, but the benefits often outweigh the complexity.</p>
      
      <p>Security and compliance remain top priorities. As more sensitive data moves to the cloud, providers are enhancing their security offerings. Zero-trust architectures, advanced encryption, and automated compliance monitoring are becoming standard features. Organizations need to stay informed about these capabilities and ensure their teams understand how to implement them effectively.</p>
      
      <p>Artificial intelligence and machine learning are being integrated directly into cloud platforms, making it easier for businesses to leverage these technologies without building everything from scratch. Cloud providers are offering pre-trained models, automated ML pipelines, and tools that make AI accessible to organizations without deep technical expertise.</p>
      
      <p>Looking ahead, we expect to see continued innovation in containerization, Kubernetes orchestration, and cloud-native development practices. The focus will be on making cloud infrastructure more accessible, more secure, and more cost-effective for businesses of all sizes.</p>
    `,
  },
  {
    title: 'Best Practices for React Performance Optimization',
    slug: 'best-practices-for-react-performance-optimization',
    excerpt: 'Learn how to optimize your React applications for better performance and user experience.',
    category: 'Development',
    image: '/assets/images/atomic-molecule-life-science-study-experiment-graphic (2).jpg',
    content: `
      <p>Building fast React applications requires understanding how React works under the hood and applying optimization techniques strategically. Performance issues often creep in as applications grow, but with the right approach, you can keep your app responsive even as complexity increases.</p>
      
      <p>One of the most effective optimizations is using React.memo to prevent unnecessary re-renders. When a component receives the same props, React.memo can skip rendering that component entirely. This is particularly valuable for components that render frequently or have expensive rendering logic. However, it's important to use it judiciously - wrapping every component can actually hurt performance due to the comparison overhead.</p>
      
      <p>Code splitting is essential for large applications. Using React.lazy and Suspense allows you to load components only when they're needed. This reduces the initial bundle size and improves time to interactive. Route-based code splitting is a common pattern, but you can also split at the component level for heavy features that aren't immediately visible.</p>
      
      <p>Virtualization becomes crucial when rendering long lists. Libraries like react-window or react-virtualized render only the visible items, dramatically improving performance for lists with hundreds or thousands of items. This technique is especially important for data tables, chat applications, and feed-based interfaces.</p>
      
      <p>State management plays a significant role in performance. Keeping state as local as possible prevents unnecessary re-renders across the component tree. When you need shared state, consider using context carefully - context updates cause all consuming components to re-render, so splitting contexts by concern can help minimize this impact.</p>
      
      <p>Memoization with useMemo and useCallback can prevent expensive recalculations and function recreations. However, these hooks have their own overhead, so they should be used when the computation is genuinely expensive or when you're passing functions to memoized child components. Overusing them can actually make your code slower.</p>
      
      <p>Image optimization is often overlooked but can have a huge impact. Using Next.js Image component or similar solutions provides automatic optimization, lazy loading, and responsive images. For applications with many images, this can reduce load times significantly.</p>
      
      <p>Finally, profiling your application with React DevTools Profiler helps identify actual bottlenecks rather than guessing. Measure before and after optimizations to ensure you're making real improvements. Sometimes the performance issue isn't where you think it is.</p>
    `,
  },
  {
    title: 'Mobile-First Design: Why It Matters',
    slug: 'mobile-first-design-why-it-matters',
    excerpt: 'Understanding the importance of mobile-first design in today\'s digital landscape.',
    category: 'Design',
    image: '/assets/images/lifestyle-designer-using-3d-printer (1).jpg',
    content: `
      <p>Mobile-first design isn't just a trend - it's become a fundamental approach to building digital products. With mobile devices accounting for over half of all web traffic globally, designing for mobile first ensures your product works well for the majority of your users.</p>
      
      <p>The mobile-first approach means starting your design process with the smallest screen size and progressively enhancing for larger devices. This is the opposite of the traditional desktop-first approach, where designs were created for large screens and then scaled down. Starting small forces you to prioritize what's truly important and create more focused, efficient interfaces.</p>
      
      <p>One of the key benefits is performance. Mobile-first designs tend to be lighter and faster because you're not loading unnecessary assets for mobile users. This improves user experience and can positively impact search engine rankings, as page speed is a ranking factor. Users on slower connections or older devices will particularly appreciate the faster load times.</p>
      
      <p>Touch interactions require different considerations than mouse interactions. Buttons and interactive elements need to be large enough for fingers, typically at least 44x44 pixels. Spacing between elements matters more to prevent accidental taps. Gestures like swipe and pinch become important interaction patterns that don't exist in desktop interfaces.</p>
      
      <p>Content hierarchy becomes critical when screen real estate is limited. You must decide what information is most important and ensure it's visible without scrolling. This discipline often leads to better designs overall, as it forces clarity and focus. The constraints of mobile design can actually improve the desktop version as well.</p>
      
      <p>Responsive design techniques like flexible grids, fluid images, and media queries make it possible to create one design that works across all devices. However, true mobile-first design goes beyond just making things fit - it's about creating experiences optimized for how people actually use mobile devices.</p>
      
      <p>Testing on actual devices is crucial. Emulators and browser dev tools are helpful, but they can't replicate the experience of using a real device. Touch latency, screen brightness, and network conditions all affect the user experience in ways that are difficult to simulate. Regular testing on various devices helps catch issues before they reach users.</p>
    `,
  },
  {
    title: 'DevOps Best Practices for Modern Teams',
    slug: 'devops-best-practices-for-modern-teams',
    excerpt: 'Essential DevOps practices that can help your team deliver faster and more reliably.',
    category: 'DevOps',
    image: '/assets/images/growtika-f7uCQxhucw4-unsplash.jpg',
    content: `
      <p>DevOps has transformed from a buzzword into a fundamental practice for teams that want to deliver software quickly and reliably. The core idea is simple: break down the silos between development and operations, but implementing it effectively requires cultural change and the right tooling.</p>
      
      <p>Continuous Integration and Continuous Deployment form the backbone of modern DevOps practices. CI ensures that code changes are automatically tested and integrated into the main branch frequently. This catches integration issues early when they're easier to fix. CD takes this further by automatically deploying code that passes all tests to production or staging environments.</p>
      
      <p>Infrastructure as Code is essential for maintaining consistency and reproducibility. By defining your infrastructure in code, you can version control it, review changes, and recreate environments reliably. Tools like Terraform, Ansible, and CloudFormation make it possible to manage complex infrastructure through code, reducing manual errors and enabling faster recovery from failures.</p>
      
      <p>Monitoring and observability give you visibility into what's happening in production. Logging, metrics, and distributed tracing help you understand system behavior and quickly diagnose issues. Setting up proper alerting ensures you know about problems before users do. However, it's important to avoid alert fatigue - too many alerts that aren't actionable will cause teams to ignore them.</p>
      
      <p>Automated testing at multiple levels provides confidence in deployments. Unit tests catch logic errors, integration tests verify component interactions, and end-to-end tests validate user workflows. Having a comprehensive test suite allows you to deploy frequently with confidence. The key is maintaining test quality and keeping tests fast enough that they don't slow down the development cycle.</p>
      
      <p>Security should be integrated into every stage of the development process, not treated as an afterthought. This means scanning code for vulnerabilities, keeping dependencies updated, using secrets management, and implementing security checks in your CI/CD pipeline. DevSecOps practices help catch security issues early when they're cheaper and easier to fix.</p>
      
      <p>Documentation and knowledge sharing prevent bottlenecks and enable team members to work independently. Runbooks for common operations, architecture diagrams, and clear documentation of processes help new team members get up to speed and reduce dependency on specific individuals. This is especially important as teams grow and change.</p>
      
      <p>Finally, fostering a blameless culture encourages experimentation and learning from failures. When incidents happen, focus on understanding what went wrong and how to prevent it, rather than assigning blame. Post-mortems should be learning opportunities that lead to system improvements.</p>
    `,
  },
  {
    title: 'Security Best Practices for Web Applications',
    slug: 'security-best-practices-for-web-applications',
    excerpt: 'Critical security measures every developer should implement in their web applications.',
    category: 'Security',
    image: '/assets/images/dan-lefebvre-7I96SlGpauY-unsplash (1).jpg',
    content: `
      <p>Web application security is an ongoing concern that requires attention at every stage of development. Attackers are constantly finding new vulnerabilities, so staying informed and implementing security best practices is essential for protecting user data and maintaining trust.</p>
      
      <p>Authentication and authorization are fundamental security concerns. Implementing strong password policies, multi-factor authentication, and proper session management helps prevent unauthorized access. OAuth and JWT tokens should be implemented correctly with appropriate expiration times and secure storage. Never store passwords in plain text - always use strong hashing algorithms like bcrypt or Argon2.</p>
      
      <p>Input validation is critical for preventing injection attacks. All user input should be validated and sanitized on both the client and server side. SQL injection, XSS, and command injection attacks often exploit insufficient input validation. Use parameterized queries for database operations and escape output to prevent XSS attacks. Content Security Policy headers can also help mitigate XSS risks.</p>
      
      <p>HTTPS should be used for all communications, not just login pages. Encrypting data in transit protects it from interception. Use strong TLS configurations and keep certificates up to date. HTTP Strict Transport Security headers force browsers to use HTTPS, preventing downgrade attacks.</p>
      
      <p>Dependency management is often overlooked but crucial. Regularly update dependencies to patch known vulnerabilities. Use tools like npm audit or Snyk to identify vulnerable packages. Be cautious about adding new dependencies - each one increases your attack surface. Review dependencies for security issues before including them in your project.</p>
      
      <p>Error handling should never expose sensitive information. Generic error messages for users prevent information leakage, while detailed error logs for developers help with debugging. Be careful about what information appears in stack traces, as these can reveal system architecture and potential attack vectors.</p>
      
      <p>Rate limiting protects against brute force attacks and denial of service attempts. Implement limits on login attempts, API calls, and other sensitive operations. This prevents attackers from trying thousands of password combinations or overwhelming your system with requests.</p>
      
      <p>Security headers provide additional layers of protection. Headers like X-Content-Type-Options, X-Frame-Options, and Content-Security-Policy help prevent various attack vectors. These are easy to implement and provide significant security benefits with minimal effort.</p>
      
      <p>Regular security audits and penetration testing help identify vulnerabilities before attackers do. Automated scanning tools can catch many issues, but manual security reviews provide deeper insights. Consider engaging security professionals for critical applications, especially those handling sensitive data.</p>
      
      <p>Finally, keep security in mind throughout the development process, not just at the end. Security reviews should be part of code review processes, and security considerations should influence architectural decisions. Building security in from the start is much more effective than trying to add it later.</p>
    `,
  },
  {
    title: 'Introduction to Microservices Architecture',
    slug: 'introduction-to-microservices-architecture',
    excerpt: 'A comprehensive guide to understanding and implementing microservices architecture.',
    category: 'Architecture',
    image: '/assets/images/vishnu-mohanan-2YfhLptMxsg-unsplash (1).jpg',
    content: `
      <p>Microservices architecture has gained significant attention as organizations look for ways to build more scalable and maintainable systems. Unlike monolithic applications where everything is tightly coupled, microservices break applications into smaller, independent services that communicate over well-defined APIs.</p>
      
      <p>The fundamental principle behind microservices is that each service should be responsible for a single business capability. This means services are organized around business functions rather than technical layers. For example, you might have separate services for user management, order processing, and payment handling, each with its own database and deployment pipeline.</p>
      
      <p>One of the primary benefits is independent deployment. Teams can deploy their services without coordinating with other teams, enabling faster release cycles. This independence extends to technology choices - different services can use different programming languages, frameworks, or databases if that makes sense for their specific requirements.</p>
      
      <p>Scalability becomes more granular with microservices. Instead of scaling the entire application, you can scale individual services based on their specific load. A service that handles image processing might need more resources than a service that serves static content, and you can allocate resources accordingly.</p>
      
      <p>However, microservices introduce complexity that monoliths don't have. Service-to-service communication requires careful design. Synchronous communication can create tight coupling and cascading failures, while asynchronous communication adds complexity in handling eventual consistency. API gateways help manage this complexity by providing a single entry point and handling concerns like authentication and rate limiting.</p>
      
      <p>Data management becomes more challenging in a microservices architecture. Each service typically has its own database, which means data that was once in a single database is now distributed. This requires careful consideration of data consistency patterns. Sometimes eventual consistency is acceptable, but other times you need stronger guarantees.</p>
      
      <p>Distributed systems are harder to debug and monitor. A request might flow through multiple services, making it difficult to trace issues. Distributed tracing tools like Jaeger or Zipkin help visualize request flows across services. Centralized logging and monitoring become essential for understanding system behavior.</p>
      
      <p>Service discovery is necessary so services can find and communicate with each other. In a dynamic environment where services can be created, destroyed, or moved, hardcoded addresses don't work. Service registries and service meshes help manage this complexity.</p>
      
      <p>Testing microservices requires different approaches than testing monoliths. Integration tests become more important, and you need to test service interactions. Contract testing ensures that services can communicate correctly even as they evolve independently.</p>
      
      <p>Microservices aren't the right choice for every application. They add operational complexity and require mature DevOps practices. For smaller applications or teams, a well-structured monolith might be more appropriate. The decision should be based on your specific needs, team size, and organizational capabilities.</p>
      
      <p>If you do choose microservices, start small. You can begin with a modular monolith and gradually extract services as boundaries become clear. This approach lets you learn and adapt without taking on all the complexity at once.</p>
    `,
  },
  {
    title: 'API Design Principles for Modern Applications',
    slug: 'api-design-principles-for-modern-applications',
    excerpt: 'Learn the fundamental principles of designing robust and scalable APIs for modern applications.',
    category: 'Development',
    image: '/assets/images/programming-background-with-html2.jpg',
    content: `
      <p>Well-designed APIs are the foundation of modern applications. They enable different systems to communicate, allow frontend and backend teams to work independently, and make it possible to build ecosystems around your platform. Good API design requires balancing simplicity, flexibility, and performance.</p>
      
      <p>RESTful principles provide a solid foundation, but they're not the only approach. REST works well for many use cases, emphasizing resources, HTTP methods, and stateless interactions. However, GraphQL offers advantages for complex queries where clients need to fetch related data efficiently. gRPC excels for high-performance internal service communication. Choose the approach that fits your specific needs.</p>
      
      <p>Consistency is crucial for API usability. Use consistent naming conventions, response formats, and error handling across all endpoints. This makes APIs easier to learn and use. If you use snake_case in one endpoint, use it everywhere. If you return errors in a specific format, maintain that format consistently.</p>
      
      <p>Versioning prevents breaking changes from disrupting API consumers. There are several approaches: URL versioning, header-based versioning, or semantic versioning. The important thing is to choose a strategy and stick with it. When you need to make breaking changes, introduce a new version while maintaining the old one for a transition period.</p>
      
      <p>Error handling should be clear and helpful. Use appropriate HTTP status codes, and provide error messages that help developers understand what went wrong and how to fix it. Include error codes that can be programmatically handled, and provide additional context when possible. Avoid generic error messages that don't help diagnose issues.</p>
      
      <p>Pagination is essential for endpoints that return lists. Large result sets should be paginated to avoid overwhelming clients and servers. Use consistent pagination parameters across your API. Cursor-based pagination often works better than offset-based pagination for large datasets, as it avoids performance issues with large offsets.</p>
      
      <p>Filtering, sorting, and field selection give clients control over the data they receive. This reduces payload sizes and improves performance. Allow clients to specify which fields they need, filter results, and sort by different criteria. This flexibility makes your API more useful for different use cases.</p>
      
      <p>Rate limiting protects your API from abuse and ensures fair usage. Implement clear rate limits and communicate them to API consumers through headers. Provide information about current usage and when limits reset. This helps developers understand and work within the constraints.</p>
      
      <p>Documentation is critical for API adoption. Clear, comprehensive documentation with examples makes it much easier for developers to integrate with your API. Interactive documentation tools like Swagger or Postman collections let developers try the API without writing code first. Keep documentation up to date as the API evolves.</p>
      
      <p>Security should be built in from the start. Use HTTPS for all communications, implement proper authentication and authorization, and validate all inputs. Consider OAuth 2.0 for third-party access, and use API keys or tokens for programmatic access. Regularly review and update security practices as threats evolve.</p>
      
      <p>Finally, design APIs with the consumer in mind. Think about how developers will use your API, what workflows they need to support, and what makes their job easier. Good APIs feel intuitive and require minimal documentation because the design itself guides correct usage.</p>
    `,
  },
  {
    title: 'Database Optimization Strategies',
    slug: 'database-optimization-strategies',
    excerpt: 'Essential techniques for optimizing database performance and improving query efficiency.',
    category: 'Technology',
    image: '/assets/images/steve-johnson-luT1PtFOWZU-unsplash (1).jpg',
    content: `
      <p>Database performance directly impacts application responsiveness and user experience. Slow queries can make even well-designed applications feel sluggish. Understanding how databases work and applying optimization techniques can dramatically improve performance.</p>
      
      <p>Indexing is one of the most effective optimization techniques. Proper indexes can turn queries that take seconds into queries that complete in milliseconds. However, indexes come with trade-offs - they consume storage space and slow down write operations. The key is identifying which columns benefit from indexing based on query patterns. Columns used in WHERE clauses, JOIN conditions, and ORDER BY clauses are good candidates.</p>
      
      <p>Query optimization requires understanding how your database executes queries. Use EXPLAIN or similar tools to see the query execution plan. Look for full table scans, which indicate missing indexes, and identify opportunities to rewrite queries for better performance. Sometimes a small change in how you write a query can result in dramatically different execution plans.</p>
      
      <p>Normalization is important for data integrity and reducing redundancy, but denormalization can improve read performance. The key is finding the right balance. For read-heavy applications, some denormalization might be worth the trade-off in storage and update complexity. Analyze your access patterns to determine where denormalization makes sense.</p>
      
      <p>Connection pooling reduces the overhead of establishing database connections. Instead of creating a new connection for each request, connections are reused from a pool. This is especially important for applications with high concurrency. Configure pool sizes based on your database's capacity and application load.</p>
      
      <p>Caching can dramatically reduce database load. Frequently accessed data that doesn't change often is a good candidate for caching. In-memory caches like Redis can serve data much faster than database queries. However, cache invalidation is challenging - you need strategies to keep cached data consistent with the database.</p>
      
      <p>Partitioning large tables can improve query performance by allowing the database to scan only relevant partitions. Range partitioning works well for time-series data, while hash partitioning can distribute load evenly. Partitioning requires careful planning and maintenance, but can significantly improve performance for large datasets.</p>
      
      <p>Query result pagination prevents loading large result sets into memory. Instead of fetching all matching records, fetch them in smaller chunks. This reduces memory usage and improves response times. Cursor-based pagination is often more efficient than offset-based pagination for large datasets.</p>
      
      <p>Database maintenance tasks like updating statistics, rebuilding indexes, and cleaning up old data help maintain performance over time. Automated maintenance jobs can handle these tasks during low-traffic periods. Regular monitoring helps identify when maintenance is needed before performance degrades significantly.</p>
      
      <p>Read replicas can distribute read load across multiple database servers. This is particularly useful for read-heavy applications where writes are less frequent. Replication lag needs to be considered - applications that need strongly consistent reads might need to read from the primary database.</p>
      
      <p>Finally, monitor database performance continuously. Set up alerts for slow queries, connection pool exhaustion, and other performance issues. Understanding your database's performance characteristics helps you make informed optimization decisions and catch problems before they impact users.</p>
    `,
  },
  {
    title: 'Building Scalable Web Applications',
    slug: 'building-scalable-web-applications',
    excerpt: 'Key strategies and patterns for building web applications that can scale with your business.',
    category: 'Architecture',
    image: '/assets/images/person-working-relation-innovation (1).jpg',
    content: `
      <p>Building applications that can scale is one of the most important challenges in software development. What works for a hundred users often breaks with a hundred thousand users. Planning for scale from the beginning, even if you don't need it immediately, makes future growth much easier.</p>
      
      <p>Horizontal scaling, adding more servers, is generally more flexible than vertical scaling, adding more resources to existing servers. Cloud platforms make horizontal scaling easier with load balancers and auto-scaling groups. Design your application to be stateless so any server can handle any request. This means avoiding server-side sessions and storing state in databases or caches instead.</p>
      
      <p>Database scaling is often the biggest challenge. Read replicas can handle read traffic, but writes typically need to go to a primary database. For write-heavy applications, you might need to consider database sharding, where data is partitioned across multiple databases. This adds complexity but can support much higher write loads.</p>
      
      <p>Caching strategies reduce load on your database and improve response times. Cache frequently accessed data that doesn't change often. Use CDNs for static assets to serve them from locations closer to users. Application-level caching with Redis or Memcached can dramatically reduce database queries. However, cache invalidation requires careful thought to maintain data consistency.</p>
      
      <p>Asynchronous processing moves time-consuming tasks out of request-response cycles. Background jobs can handle email sending, image processing, report generation, and other tasks that don't need immediate responses. Message queues like RabbitMQ or AWS SQS help coordinate these background processes and provide reliability guarantees.</p>
      
      <p>API rate limiting protects your application from being overwhelmed and ensures fair resource usage. Implement limits based on user identity, IP address, or API keys. Provide clear feedback about rate limits through response headers so clients can adjust their behavior. This is especially important for public APIs.</p>
      
      <p>Monitoring and observability are essential for understanding how your application performs under load. Metrics, logs, and distributed tracing help identify bottlenecks and issues. Set up alerts for key metrics like response times, error rates, and resource utilization. This helps you respond to problems quickly and understand capacity needs.</p>
      
      <p>Code architecture matters for scalability. Tightly coupled code is harder to scale because you can't scale components independently. Microservices or modular monoliths allow you to scale different parts of your application based on their specific load. However, these architectures add complexity, so choose based on your actual needs.</p>
      
      <p>Database query optimization becomes critical at scale. Slow queries that work fine with small datasets can become major bottlenecks with large datasets. Use indexes effectively, avoid N+1 query problems, and consider denormalization for read-heavy workloads. Regular query analysis helps identify optimization opportunities.</p>
      
      <p>Content delivery networks distribute static assets geographically, reducing latency for users far from your servers. CDNs cache content at edge locations, serving it from locations closer to users. This is especially valuable for applications with global audiences. Many CDNs also provide DDoS protection and other security features.</p>
      
      <p>Finally, design for failure. Systems will fail, networks will have issues, and databases will have problems. Design your application to degrade gracefully rather than failing completely. Implement retries with exponential backoff, circuit breakers to prevent cascading failures, and fallback mechanisms for critical dependencies.</p>
      
      <p>Remember that premature optimization can be wasteful. Build for your current needs with an eye toward future growth, but don't over-engineer solutions you might never need. Start simple, measure performance, and scale when necessary. The key is building in the flexibility to scale when the time comes.</p>
    `,
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  // Generate deterministic dates for metadata based on slug
  const slugHash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const daysAgo = slugHash % 90;
  const modifiedDays = (slugHash % 7) + 1;
  
  const publishedDate = new Date();
  publishedDate.setDate(publishedDate.getDate() - daysAgo);
  const modifiedDate = new Date(publishedDate);
  modifiedDate.setDate(modifiedDate.getDate() + modifiedDays);

  return generateBaseMetadata({
    title: post?.title || 'Blog Post',
    description: post?.excerpt || '',
    path: `/blog/${slug}`,
    type: 'article',
    image: post?.image ? `https://${COMPANY.domain}${post.image}` : undefined,
    publishedTime: publishedDate.toISOString(),
    modifiedTime: modifiedDate.toISOString(),
    section: post?.category,
    tags: post?.category ? [post.category] : undefined,
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Button href="/blog">Back to Blog</Button>
        </div>
      </div>
    );
  }

  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  // Generate deterministic published dates based on slug (for SEO consistency)
  const slugHash = slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const daysAgo = slugHash % 90; // 0-89 days ago
  const modifiedDays = (slugHash % 7) + 1; // 1-7 days after publish
  
  const publishedDate = new Date();
  publishedDate.setDate(publishedDate.getDate() - daysAgo);
  const modifiedDate = new Date(publishedDate);
  modifiedDate.setDate(modifiedDate.getDate() + modifiedDays);

  const articleSchema = generateArticleStructuredData({
    title: post.title,
    description: post.excerpt,
    url: `https://${COMPANY.domain}/blog/${slug}`,
    image: `https://${COMPANY.domain}${post.image}`,
    publishedTime: publishedDate.toISOString(),
    modifiedTime: modifiedDate.toISOString(),
    section: post.category,
    tags: [post.category],
    authorName: COMPANY.brandName,
    publisher: COMPANY.brandName,
  });

  const breadcrumbSchema = generateBreadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="bg-white" itemScope itemType="https://schema.org/Article">
        <div className="relative h-96 w-full">
          <Image
            src={post.image}
            alt={`${post.title} - Featured image for ${post.category} article by ${COMPANY.brandName}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="mx-auto max-w-4xl">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="prose prose-lg prose-blue max-w-none">
            <div 
              className="text-gray-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Articles</h2>
            <p className="text-lg text-gray-600">Continue reading with these related posts</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((relatedPost) => (
              <Link 
                key={relatedPost.slug} 
                href={`/blog/${relatedPost.slug}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={relatedPost.image}
                    alt={`${relatedPost.title} - ${relatedPost.category} article thumbnail`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button href="/blog" variant="outline">
              Back to Blog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

