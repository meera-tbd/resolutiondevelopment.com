'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { COMPANY, NAVIGATION } from '@/utils/constants';

const servicesList = [
  { title: 'Custom Software Development', slug: 'custom-software-development' },
  { title: 'Web Application Development', slug: 'web-application-development' },
  { title: 'Mobile App Development', slug: 'mobile-app-development' },
  { title: 'Cloud Solutions & DevOps', slug: 'cloud-solutions-devops' },
  { title: 'IT Consulting & Strategy', slug: 'it-consulting-strategy' },
  { title: 'UI/UX Design', slug: 'ui-ux-design' },
  { title: 'Data Analytics & BI', slug: 'data-analytics-bi' },
  { title: 'Cybersecurity Services', slug: 'cybersecurity-services' },
  { title: 'AI & Machine Learning', slug: 'ai-machine-learning' },
  { title: 'DevOps & Infrastructure', slug: 'devops-infrastructure' },
  { title: 'Data Science & Analytics', slug: 'data-science-analytics' },
  { title: 'Blockchain Development', slug: 'blockchain-development' },
];

const solutionsList = [
  { title: 'Solutions', href: '/solutions' },
  { title: 'Technology Stack', href: '/technology' },
  { title: 'Industries', href: '/industries' },
];

const resourcesList = [
  { title: 'Blog', href: '/blog' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Testimonials', href: '/testimonials' },
  { title: 'Support', href: '/support' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logo/RDLogo-02.png"
                alt={COMPANY.brandName}
                width={3371}
                height={926}
                className="h-16 w-auto"
                quality={100}
                priority
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              const isServices = item.label === 'Services';
              const isSolutions = item.label === 'Solutions';
              const isResources = item.label === 'Resources';
              
              if (isServices) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors ${
                        isActive ? 'border-b-2 border-blue-600 pb-1' : ''
                      }`}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200 max-h-96 overflow-y-auto">
                        <Link
                          href="/services"
                          className="block px-4 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors border-b border-gray-100"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          View All Services
                        </Link>
                        {servicesList.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              if (isSolutions) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors ${
                        isActive ? 'border-b-2 border-blue-600 pb-1' : ''
                      }`}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {isSolutionsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200">
                        {solutionsList.map((solution) => (
                          <Link
                            key={solution.href}
                            href={solution.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            {solution.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              if (isResources) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors ${
                        isActive ? 'border-b-2 border-blue-600 pb-1' : ''
                      }`}
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {isResourcesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200">
                        {resourcesList.map((resource) => (
                          <Link
                            key={resource.href}
                            href={resource.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                            onClick={() => setIsResourcesOpen(false)}
                          >
                            {resource.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors ${
                    isActive ? 'border-b-2 border-blue-600 pb-1' : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/login"
              className={`text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors ${
                pathname === '/login' ? 'border-b-2 border-blue-600 pb-1' : ''
              }`}
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-bold text-white hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {NAVIGATION.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                const isServices = item.label === 'Services';
                const isSolutions = item.label === 'Solutions';
                const isResources = item.label === 'Resources';
                
                if (isServices) {
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`w-full flex items-center justify-between rounded-md px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50 ${
                          isActive ? 'border-l-4 border-blue-600 pl-2' : ''
                        }`}
                      >
                        {item.label}
                        <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isServicesOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          <Link
                            href="/services"
                            className="block rounded-md px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            View All Services
                          </Link>
                          {servicesList.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                if (isSolutions) {
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                        className={`w-full flex items-center justify-between rounded-md px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50 ${
                          isActive ? 'border-l-4 border-blue-600 pl-2' : ''
                        }`}
                      >
                        {item.label}
                        <svg className={`w-4 h-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isSolutionsOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {solutionsList.map((solution) => (
                            <Link
                              key={solution.href}
                              href={solution.href}
                              className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsSolutionsOpen(false);
                              }}
                            >
                              {solution.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                if (isResources) {
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                        className={`w-full flex items-center justify-between rounded-md px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50 ${
                          isActive ? 'border-l-4 border-blue-600 pl-2' : ''
                        }`}
                      >
                        {item.label}
                        <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isResourcesOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {resourcesList.map((resource) => (
                            <Link
                              key={resource.href}
                              href={resource.href}
                              className="block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsResourcesOpen(false);
                              }}
                            >
                              {resource.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50 ${
                      isActive ? 'border-l-4 border-blue-600 pl-2' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/login"
                className={`block rounded-md px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-50 ${
                  pathname === '/login' ? 'border-l-4 border-blue-600 pl-2' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/contact"
                className="block rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-2 text-base font-bold text-white hover:from-blue-600 hover:to-cyan-600 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

