import { generateMetadata } from '@/utils/seo';
import { COMPANY } from '@/utils/constants';
import Card from '@/components/ui/Card';

export const metadata = generateMetadata({
  title: 'Terms of Service',
  description: `Terms of Service for ${COMPANY.brandName}. Read our terms and conditions for using our website and services.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl mb-6 drop-shadow-lg">Terms of Service</h1>
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed drop-shadow-md">
              Last updated: 7/04/2024
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    By accessing and using {COMPANY.domain} (the &quot;Website&quot;), you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Use License</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Permission is granted to temporarily access the materials on {COMPANY.brandName}&apos;s website for personal, 
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">Modify or copy the materials</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">Use the materials for any commercial purpose or for any public display</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">Attempt to reverse engineer any software contained on the website</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">Remove any copyright or other proprietary notations from the materials</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {COMPANY.brandName} provides IT consulting, software development, and related technology services. 
                    All services are provided subject to separate service agreements that will be executed between you and {COMPANY.brandName}.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The Website and its original content, features, and functionality are owned by {COMPANY.brandName} and 
                    are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">User Accounts</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    When you create an account with us, you must provide information that is accurate, complete, and current. 
                    You are responsible for safeguarding the password and for all activities that occur under your account.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Prohibited Uses</h2>
                  <p className="text-lg text-gray-700 mb-6">You may not use our Website:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">In any way that violates any applicable national or international law or regulation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The materials on {COMPANY.brandName}&apos;s website are provided on an &apos;as is&apos; basis. {COMPANY.brandName} makes no warranties, 
                    expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                    implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
                    intellectual property or other violation of rights.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Limitations</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In no event shall {COMPANY.brandName} or its suppliers be liable for any damages (including, without limitation, 
                    damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                    the materials on {COMPANY.brandName}&apos;s website, even if {COMPANY.brandName} or an authorized representative has been 
                    notified orally or in writing of the possibility of such damage.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Revisions and Errata</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The materials appearing on {COMPANY.brandName}&apos;s website could include technical, typographical, or photographic errors. 
                    {COMPANY.brandName} does not warrant that any of the materials on its website are accurate, complete, or current. 
                    {COMPANY.brandName} may make changes to the materials contained on its website at any time without notice.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Links</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {COMPANY.brandName} has not reviewed all of the sites linked to its website and is not responsible for the contents 
                    of any such linked site. The inclusion of any link does not imply endorsement by {COMPANY.brandName} of the site. 
                    Use of any such linked website is at the user&apos;s own risk.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Modifications</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {COMPANY.brandName} may revise these terms of service for its website at any time without notice. By using this website 
                    you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-white shadow-lg">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Governing Law</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably 
                    submit to the exclusive jurisdiction of the courts in that location.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    If you have any questions about these Terms of Service, please contact us at:
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
