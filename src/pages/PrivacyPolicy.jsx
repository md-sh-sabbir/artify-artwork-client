import React from 'react';
import { FaLock, FaUserShield, FaDatabase, FaCookieBite, FaEye, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center">
              <FaUserShield className="text-green-600 text-4xl" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last Updated: January 3, 2026</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            At Artify, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully to understand our practices regarding your personal data.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using Artify, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our platform.
          </p>
        </div>

        {/* Quick Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaLock className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Secure Data</h3>
            <p className="text-gray-600 text-sm">Your information is encrypted and protected</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaEye className="text-purple-600 text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Transparency</h3>
            <p className="text-gray-600 text-sm">We're clear about what data we collect</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaUserShield className="text-green-600 text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Your Control</h3>
            <p className="text-gray-600 text-sm">You can manage your privacy settings</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaDatabase className="text-blue-600" />
              1. Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you create an account or use Artify, we may collect the following personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Name and username</li>
              <li>Email address</li>
              <li>Profile information (bio, profile picture)</li>
              <li>Artwork and creative content you upload</li>
              <li>Comments, likes, and interactions with other users</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you access our platform, we automatically collect certain information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on the platform</li>
              <li>Referring website addresses</li>
              <li>Operating system and device identifiers</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Provide Services:</strong> To create and manage your account, display your artwork, and enable platform features</li>
              <li><strong>Improve Platform:</strong> To analyze usage patterns and enhance user experience</li>
              <li><strong>Communication:</strong> To send you updates, notifications, and respond to your inquiries</li>
              <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security threats</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
              <li><strong>Marketing:</strong> To send promotional content (with your consent)</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We do not sell your personal information. However, we may share your information in the following circumstances:
            </p>
            
            <div className="space-y-4 ml-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Public Content</h4>
                <p className="text-gray-700">Artwork, comments, and profile information you choose to make public will be visible to other users.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Service Providers</h4>
                <p className="text-gray-700">We may share information with third-party service providers who help us operate the platform (hosting, analytics, email services).</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Legal Requirements</h4>
                <p className="text-gray-700">We may disclose information if required by law, court order, or to protect our rights and safety.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Business Transfers</h4>
                <p className="text-gray-700">In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaCookieBite className="text-yellow-600" />
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Artify uses cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Remember your login status and preferences</li>
              <li>Analyze platform usage and performance</li>
              <li>Provide personalized content and recommendations</li>
              <li>Deliver relevant advertisements (if applicable)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              You can control cookie settings through your browser preferences. However, disabling cookies may limit certain features of the platform.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication protocols</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and monitoring</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and personal data</li>
              <li><strong>Data Portability:</strong> Request your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Object:</strong> Object to certain processing of your data</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              To exercise these rights, please contact us at privacy@artify.com. We will respond to your request within 30 days.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. When you delete your account, we will remove your personal information within 90 days, except where we are required to retain it for legal or regulatory purposes. Publicly shared content may remain visible in cached or archived versions.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies only to information collected by Artify.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Artify is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Users between 13 and 18 years old should use Artify with parental guidance and consent.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. These countries may have different data protection laws. By using Artify, you consent to the transfer of your information to our servers and third-party service providers, wherever they are located. We ensure appropriate safeguards are in place to protect your data.
            </p>
          </div>

          {/* Section 11 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically. Your continued use of Artify after changes are posted constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaEnvelope className="text-red-600" />
              12. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> privacy@artify.com</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Art Street, Creative City, CC 12345</p>
              <p className="text-gray-700"><strong>Data Protection Officer:</strong> dpo@artify.com</p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed mb-3">
            <strong>Your Privacy Matters:</strong> We are committed to protecting your privacy and being transparent about our data practices. This policy is designed to help you understand what information we collect, how we use it, and your rights regarding your personal data.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you have any concerns or questions, please don't hesitate to reach out to our privacy team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;