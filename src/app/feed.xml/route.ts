import { COMPANY } from '@/utils/constants';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = `https://${COMPANY.domain}`;
  const currentDate = new Date().toISOString();
  const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  // Blog posts (should match your blog data structure)
  const blogPosts = [
    {
      slug: 'the-future-of-cloud-computing-in-2025',
      title: 'The Future of Cloud Computing in 2025',
      description: 'Exploring the latest trends and innovations in cloud computing technology.',
      pubDate: lastWeek,
    },
    {
      slug: 'best-practices-for-react-performance-optimization',
      title: 'Best Practices for React Performance Optimization',
      description: 'Learn how to optimize React applications for better performance and user experience.',
      pubDate: lastWeek,
    },
    {
      slug: 'mobile-first-design-why-it-matters',
      title: 'Mobile-First Design: Why It Matters',
      description: 'Understanding the importance of mobile-first design in modern web development.',
      pubDate: lastWeek,
    },
  ];

  const items = blogPosts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${post.pubDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <category>Technology</category>
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <channel>
    <title><![CDATA[${COMPANY.brandName} - Blog Feed]]></title>
    <link>${baseUrl}</link>
    <description><![CDATA[${COMPANY.description}]]></description>
    <language>en-US</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/assets/logo/RDLogo-02.png</url>
      <title>${COMPANY.brandName}</title>
      <link>${baseUrl}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <copyright>© ${new Date().getFullYear()} ${COMPANY.brandName}. All rights reserved.</copyright>
    <managingEditor>${COMPANY.primaryContact} (${COMPANY.brandName})</managingEditor>
    <webMaster>${COMPANY.primaryContact} (${COMPANY.brandName})</webMaster>
    <category>Technology</category>
    <category>Software Development</category>
    <category>IT Services</category>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

