import { generateMetadata } from '@/utils/seo';
import { COMPANY } from '@/utils/constants';
import Card from '@/components/ui/Card';

export const metadata = generateMetadata({
  title: 'Privacy Policy',
  description: `Privacy Policy for ${COMPANY.brandName}. Learn how we collect, use, and protect your personal information.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6 drop-shadow-lg">Privacy Policy</h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed drop-shadow-md">
              Last updated: 7/04/2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {COMPANY.brandName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website {COMPANY.domain} and use our services.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <p className="text-lg text-gray-700 mb-6">We may collect information about you in a variety of ways:</p>
                  <div className="space-y-4">
                    <div className="pl-4 border-l-4 border-blue-500">
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">Personal Information:</strong> Name, email address, phone number, company name, and other information you provide when contacting us or using our services.
                      </p>
                    </div>
                    <div className="pl-4 border-l-4 border-purple-500">
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.
                      </p>
                    </div>
                    <div className="pl-4 border-l-4 border-pink-500">
                      <p className="text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and store certain information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p className="text-lg text-gray-700 mb-6">We use the information we collect to:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">Provide, maintain, and improve our services</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">Respond to your inquiries and provide customer support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">Send you updates, newsletters, and marketing communications (with your consent)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">Monitor and analyze usage patterns and trends</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">Detect, prevent, and address technical issues and security threats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                  <p className="text-lg text-gray-700 mb-6">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">With service providers who assist us in operating our website and conducting our business</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">When required by law or to protect our rights and safety</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">In connection with a business transfer or merger</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">With your explicit consent</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Security</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information. 
                    However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
                    guarantee absolute security.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <p className="text-lg text-gray-700 mb-6">Depending on your location, you may have the following rights regarding your personal information:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">Access and receive a copy of your personal data</span>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">Rectify inaccurate or incomplete data</span>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">Request deletion of your personal data</span>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">Object to processing of your personal data</span>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">Request restriction of processing</span>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">Data portability</span>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 rounded-lg md:col-span-2">
                      <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 leading-relaxed">Withdraw consent at any time</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Cookies</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We use cookies to enhance your experience on our website. You can choose to disable cookies through 
                    your browser settings, though this may affect the functionality of our website.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                    of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                    information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                    new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg border-2 border-blue-500">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-100">
                    <p className="text-gray-700 mb-3">
                      <strong className="text-gray-900 text-lg">Email:</strong>{' '}
                      <a href={`mailto:${COMPANY.primaryContact}`} className="text-blue-600 hover:text-blue-700 hover:underline font-medium text-lg">
                        {COMPANY.primaryContact}
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <strong className="text-gray-900 text-lg">Company:</strong>{' '}
                      <span className="text-lg">{COMPANY.brandName}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
