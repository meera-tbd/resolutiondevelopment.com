import Link from 'next/link';
import Image from 'next/image';
import { COMPANY, FOOTER_LINKS, NAVIGATION } from '@/utils/constants';
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = parseInt(COMPANY.establishedYear) || 2001;

  return (
    <footer className="bg-[#1A1D28] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/assets/logo/RDLogo-03.png"
                alt={COMPANY.brandName}
                width={3371}
                height={926}
                className="h-16 w-auto"
                quality={100}
                unoptimized
              />
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              {COMPANY.description}
            </p>
            
            {/* Contact Details */}
            <div className="mb-4 space-y-3">
              <div className="flex items-center bg-[#252833] rounded-lg px-3 py-2.5">
                <FaEnvelope className="text-teal-400 mr-3 flex-shrink-0" size={18} />
                <a href={`mailto:${COMPANY.primaryContact}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {COMPANY.primaryContact}
                </a>
              </div>
              <div className="flex items-center bg-[#252833] rounded-lg px-3 py-2.5">
                <FaPhone className="text-teal-400 mr-3 flex-shrink-0" size={18} />
                <a href="tel:9998275582" className="text-sm text-gray-300 hover:text-white transition-colors">
                  9998275582
                </a>
              </div>
              <div className="flex items-start bg-[#252833] rounded-lg px-3 py-2.5">
                <FaMapMarkerAlt className="text-teal-400 mr-3 flex-shrink-0 mt-0.5" size={18} />
                <address className="text-sm text-gray-300 not-italic leading-relaxed">
                  sun gravitas, 837, Rajmani Society, Shyamal, Ahmedabad, Gujarat 380015
                </address>
              </div>
            </div>

            {/* Social Media */}
            <div className="hidden flex items-center space-x-3">
              <a 
                href={COMPANY.socialMedia?.facebook || `https://www.facebook.com/${COMPANY.brandName.replace(/\s+/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-full bg-[#252833] flex items-center justify-center hover:bg-[#2d3142] transition-colors"
              >
                <FaFacebook className="text-white" size={18} />
              </a>
              <a 
                href={COMPANY.socialMedia?.twitter || `https://twitter.com/${COMPANY.brandName.replace(/\s+/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="w-10 h-10 rounded-full bg-[#252833] flex items-center justify-center hover:bg-[#2d3142] transition-colors"
              >
                <FaTwitter className="text-white" size={18} />
              </a>
              <a 
                href={COMPANY.socialMedia?.instagram || `https://www.instagram.com/${COMPANY.brandName.toLowerCase().replace(/\s+/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full bg-[#252833] flex items-center justify-center hover:bg-[#2d3142] transition-colors"
              >
                <FaInstagram className="text-white" size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-5 bg-blue-500 mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAVIGATION.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
              </li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-5 bg-blue-500 mr-2"></span>
              Top Services
            </h3>
            <ul className="space-y-2 mb-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-5 bg-blue-500 mr-2"></span>
              Resources
            </h3>
            <ul className="space-y-2 mb-6">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-bold text-white mb-4 flex items-center mt-6">
              <span className="w-1 h-5 bg-blue-500 mr-2"></span>
              Legal
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {startYear}-{currentYear} {COMPANY.brandName}. All rights reserved. Established {COMPANY.establishedYear} • Empowering businesses through innovative digital solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

