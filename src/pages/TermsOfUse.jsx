import React from 'react';
import { FaShieldAlt, FaFileContract, FaUserCheck, FaExclamationTriangle } from 'react-icons/fa';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center">
              <FaFileContract className="text-blue-600 text-4xl" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Terms of Use</h1>
          <p className="text-lg text-gray-600">Last Updated: January 3, 2026</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to Artify! These Terms of Use govern your access to and use of the Artify platform, including our website, services, and applications. By accessing or using Artify, you agree to be bound by these terms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Please read these terms carefully before using our platform. If you do not agree to these terms, please do not use Artify.
          </p>
        </div>

        {/* Quick Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaUserCheck className="text-green-600 text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">User Rights</h3>
            <p className="text-gray-600 text-sm">You retain ownership of your artwork and content</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaShieldAlt className="text-blue-600 text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Privacy Protected</h3>
            <p className="text-gray-600 text-sm">Your data is secure and handled responsibly</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <FaExclamationTriangle className="text-yellow-600 text-3xl mx-auto mb-3" />
            <h3 className="font-bold text-gray-800 mb-2">Community Rules</h3>
            <p className="text-gray-600 text-sm">Respectful behavior is required from all users</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              By creating an account or using Artify, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. These terms apply to all users of the platform, including artists, viewers, and visitors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              To access certain features of Artify, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Providing accurate and complete registration information</li>
              <li>Maintaining the security of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              You must be at least 13 years old to create an account. Users under 18 should have parental consent.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Content Ownership and License</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Your Content:</strong> You retain all ownership rights to the artwork and content you upload to Artify. By uploading content, you grant Artify a non-exclusive, worldwide, royalty-free license to display, distribute, and promote your content on our platform.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Our Content:</strong> All Artify branding, design, features, and functionality are owned by Artify and protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not copy, modify, or distribute our platform's code or design without explicit permission.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Content Guidelines</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              When using Artify, you agree not to upload or share content that:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Infringes on others' intellectual property rights</li>
              <li>Contains illegal, harmful, or offensive material</li>
              <li>Promotes violence, discrimination, or harassment</li>
              <li>Contains explicit adult content without appropriate warnings</li>
              <li>Violates any applicable laws or regulations</li>
              <li>Contains malware, viruses, or harmful code</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              We reserve the right to remove any content that violates these guidelines without prior notice.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. User Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You agree to use Artify responsibly and respectfully. Prohibited activities include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Harassing, bullying, or threatening other users</li>
              <li>Creating fake accounts or impersonating others</li>
              <li>Spamming or engaging in manipulative behavior</li>
              <li>Attempting to hack, disrupt, or damage the platform</li>
              <li>Scraping or collecting user data without permission</li>
              <li>Using automated systems to interact with the platform</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Copyright and DMCA</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Artify respects intellectual property rights. If you believe your work has been used in a way that constitutes copyright infringement, please contact us with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Description of the copyrighted work</li>
              <li>Location of the allegedly infringing content</li>
              <li>Your contact information</li>
              <li>A statement of good faith belief</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              Repeated copyright violations may result in account termination.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Disclaimers and Limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Artify is provided "as is" without warranties of any kind. We do not guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Uninterrupted or error-free service</li>
              <li>The accuracy or reliability of user-generated content</li>
              <li>The security of your data or account</li>
              <li>Compatibility with all devices or browsers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              To the fullest extent permitted by law, Artify shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We reserve the right to suspend or terminate your account at any time for violations of these terms or for any other reason at our discretion. Upon termination:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Your right to access the platform will immediately cease</li>
              <li>We may delete your account and content</li>
              <li>You remain liable for any obligations incurred before termination</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              You may delete your account at any time through your account settings.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to Service</h2>
            <p className="text-gray-700 leading-relaxed">
              Artify reserves the right to modify, suspend, or discontinue any part of the service at any time without prior notice. We are not liable to you or any third party for any modifications, suspensions, or discontinuations of the service.
            </p>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which Artify operates, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the appropriate courts of that jurisdiction.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> legal@artify.com</p>
              <p className="text-gray-700"><strong>Address:</strong> 123 Art Street, Creative City, CC 12345</p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
          <p className="text-gray-700 leading-relaxed">
            <strong>Important:</strong> By continuing to use Artify, you acknowledge that you have read and understood these Terms of Use and agree to be bound by them. If you do not agree with any part of these terms, you must discontinue use of the platform immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;