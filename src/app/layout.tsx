import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { generateMetadata as generateBaseMetadata, generateStructuredData } from "@/utils/seo";
import { COMPANY } from "@/utils/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = generateBaseMetadata({
  title: undefined,
  description: undefined,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateStructuredData('Organization');
  const websiteSchema = generateStructuredData('WebSite');
  const localBusinessSchema = generateStructuredData('LocalBusiness');

  return (
    <html lang="en-US" itemScope itemType="https://schema.org/WebSite">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content={COMPANY.brandColors.primary} />
        <meta name="msapplication-TileColor" content={COMPANY.brandColors.primary} />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={COMPANY.brandName} />
        <meta name="generator" content="Next.js" />
        <meta name="language" content="en-US" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="copyright" content={`© ${new Date().getFullYear()} ${COMPANY.brandName}. All rights reserved.`} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" hrefLang="en" href={`https://${COMPANY.domain}`} />
        <link rel="alternate" hrefLang="en-US" href={`https://${COMPANY.domain}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://${COMPANY.domain}`} />
        <link rel="preload" href="/assets/logo/RDLogo-02.png" as="image" type="image/png" />
        <link rel="preload" href="/assets/logo/favicon (2).ico" as="image" type="image/x-icon" />
        <link rel="alternate" type="application/rss+xml" title={`${COMPANY.brandName} RSS Feed`} href={`https://${COMPANY.domain}/feed.xml`} />
        <link rel="icon" type="image/x-icon" href="/assets/logo/favicon (2).ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/logo/favicon (2).ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/logo/favicon (2).ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/assets/logo/RDLogo-02.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/logo/RDLogo-02.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/logo/RDLogo-02.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/logo/RDLogo-02.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/logo/RDLogo-02.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/logo/RDLogo-02.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/logo/RDLogo-02.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/logo/RDLogo-02.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo/RDLogo-02.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} itemScope itemType="https://schema.org/Organization">
        <Header />
        <main className="min-h-screen" itemScope itemType="https://schema.org/WebPage">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
