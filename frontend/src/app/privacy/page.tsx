import Layout from '@/components/Layout';

export const metadata = {
  title: 'Privacy Policy - JuniorCars',
  description: 'JuniorCars Privacy Policy - How we collect, use, and protect your information',
};

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2>Information We Collect</h2>
            <p>
              At JuniorCars, we collect information you provide directly to us, such as when you:
            </p>
            <ul>
              <li>Contact us through our website or email</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our collection</li>
              <li>Schedule a showroom visit</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you information about our collection and services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share your information:
            </p>
            <ul>
              <li>With service providers who assist us in operating our website</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or sale</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing 
              experience. You can control cookie settings through your browser preferences.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect 
              personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any 
              changes by posting the new policy on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>
                <strong>JuniorCars</strong><br />
                Email: privacy@juniorcars.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Classic Car Lane, Los Angeles, CA 90210
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
