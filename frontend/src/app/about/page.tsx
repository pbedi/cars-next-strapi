import PageTemplate from '@/components/PageTemplate';

export const metadata = {
  title: 'About Us - JuniorCars',
  description: 'Learn about JuniorCars and our passion for automotive excellence',
};

export default function AboutPage() {
  return (
    <PageTemplate
      heroTitle="About JuniorCars"
      heroSubtitle="Passion for Automotive Excellence"
      heroDescription="Discover our story and commitment to preserving automotive heritage"
      heroImageUrl="/images/hero/hero-car-2.jpg"
    >
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            JuniorCars was founded with a simple yet profound mission: to celebrate and preserve
            the artistry of automotive design. What started as a personal passion for classic
            vehicles has evolved into a curated collection that spans decades of automotive excellence.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            We believe that automobiles are more than just transportation—they are works of art,
            expressions of human ingenuity, and symbols of the dreams and aspirations of their era.
            Each vehicle in our collection tells a story, and we are honored to be the custodians
            of these automotive treasures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To preserve automotive heritage while making it accessible to enthusiasts and
                collectors who share our passion for exceptional design and engineering.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the premier destination for automotive enthusiasts seeking authentic,
                well-preserved vehicles and related art that celebrate the golden age of design.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Authenticity</h3>
              <p className="text-gray-600">
                Every vehicle is thoroughly authenticated and documented to ensure complete provenance.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">
                Our team combines decades of automotive knowledge with a passion for preservation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">
                We're not just dealers—we're enthusiasts who understand the emotional connection to these machines.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Commitment
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We are committed to maintaining the highest standards in everything we do. From the
            meticulous restoration of classic vehicles to the curation of automotive art, we
            approach each project with the respect and attention it deserves.
          </p>

          <p className="text-lg text-gray-600 mb-8">
            Whether you're a seasoned collector or someone just beginning to appreciate automotive
            artistry, we invite you to explore our collection and discover the stories behind
            these remarkable machines.
          </p>

          <div className="bg-primary-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Contact us to learn more about our collection or to discuss your automotive interests.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
