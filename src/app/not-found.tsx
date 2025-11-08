import Link from 'next/link';
import { ROUTES } from '@/utils/constants';
import { FaHome, FaBriefcase, FaInfoCircle, FaEnvelope, FaPalette, FaTools } from 'react-icons/fa';

export default function NotFound() {
  const popularPages = [
    { title: 'Home', href: ROUTES.home, icon: FaHome, color: 'text-red-500' },
    { title: 'Services', href: ROUTES.services, icon: FaBriefcase, color: 'text-amber-600' },
    { title: 'About Us', href: ROUTES.about, icon: FaInfoCircle, color: 'text-blue-500' },
    { title: 'Contact', href: ROUTES.contact, icon: FaEnvelope, color: 'text-red-500' },
    { title: 'Portfolio', href: ROUTES.portfolio, icon: FaPalette, color: 'text-yellow-500' },
    { title: 'Solutions', href: ROUTES.solutions, icon: FaTools, color: 'text-gray-700' },
  ];

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full text-center">
        {/* Large 404 Graphic */}
        <div className="relative mb-8">
          <div className="text-[180px] md:text-[240px] font-bold text-gray-100 select-none">
            4
            <span className="relative inline-block mx-2">
              <svg
                className="w-32 h-32 md:w-40 md:h-40 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            4
          </div>
        </div>

        {/* Page Not Found Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>

        {/* Descriptive Text */}
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Oops! The page you&apos;re looking for seems to have wandered off. Don&apos;t worry though, we&apos;ll help you find your way back.
        </p>

        {/* Error Code Label */}
        <div className="inline-block mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-medium">
            Error Code: 404 - Page Not Found
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href={ROUTES.home}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Back to Homepage
          </Link>
          <Link
            href={ROUTES.contact}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Get Help
          </Link>
        </div>

        {/* Explore Popular Pages */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Explore Popular Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {popularPages.map((page) => {
              const IconComponent = page.icon;
              return (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex flex-col items-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all transform hover:scale-105"
                >
                  <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform ${page.color}`}>
                    <IconComponent />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {page.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

