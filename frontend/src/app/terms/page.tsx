import Layout from '@/components/Layout';

export const metadata = {
  title: 'Terms & Conditions - JuniorCars',
  description: 'JuniorCars Terms & Conditions - Terms of use for our website and services',
};

export default function TermsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the JuniorCars website, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on JuniorCars' 
              website for personal, non-commercial transitory viewing only. This is the grant of a 
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              The materials on JuniorCars' website are provided on an 'as is' basis. JuniorCars 
              makes no warranties, expressed or implied, and hereby disclaims and negates all other 
              warranties including without limitation, implied warranties or conditions of 
              merchantability, fitness for a particular purpose, or non-infringement of intellectual 
              property or other violation of rights.
            </p>

            <h2>Limitations</h2>
            <p>
              In no event shall JuniorCars or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on JuniorCars' website.
            </p>

            <h2>Vehicle Information</h2>
            <p>
              All vehicle information, specifications, and pricing are subject to change without notice. 
              While we strive for accuracy, we cannot guarantee that all information is current or 
              error-free. Please contact us directly to verify specific details about any vehicle.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, 
              and software, is the property of JuniorCars and is protected by copyright and other 
              intellectual property laws.
            </p>

            <h2>User Conduct</h2>
            <p>You agree not to use the website to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
            </ul>

            <h2>Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              your use of the website, to understand our practices.
            </p>

            <h2>Modifications</h2>
            <p>
              JuniorCars may revise these terms of service at any time without notice. By using this 
              website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of 
              California and you irrevocably submit to the exclusive jurisdiction of the courts in 
              that State or location.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>
                <strong>JuniorCars</strong><br />
                Email: legal@juniorcars.com<br />
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
