import PageTemplate from '@/components/PageTemplate';

const landroverImages = [
  {
    id: '1',
    src: '/images/cars/land-junior/z6583827501229_521c0b1046c5da29e87089abf33db4ee.jpg',
    alt: 'Landrover Adventure Ready',
    title: 'Adventure Awaits',
    description: 'Built to conquer any terrain',
  },
  {
    id: '2',
    src: '/images/cars/land-junior/z6583829627738_dcb9f989f3654c81b759a6fefa41e416.jpg',
    alt: 'Landrover Luxury Interior',
    title: 'Refined Comfort',
    description: 'Luxury meets rugged capability',
  },
  {
    id: '3',
    src: '/images/cars/land-junior/z6583830341515_24e5f8b8e9b547fa26006ceaf41a65a5.jpg',
    alt: 'Landrover Off-Road Capability',
    title: 'Unstoppable Performance',
    description: 'Where others stop, we continue',
  },
  {
    id: '4',
    src: '/images/cars/land-junior/z6583832674303_9710819ee865d980fba72e0d5d977d21.jpg',
    alt: 'Landrover Heritage Design',
    title: 'Iconic Design',
    description: 'Instantly recognizable silhouette',
  },
];

export const metadata = {
  title: 'Landrover Collection - JuniorCars',
  description: 'Built for adventure, designed for excellence - explore our Landrover collection',
};

export default function LandroverPage() {
  return (
    <PageTemplate
      heroTitle="Landrover Collection"
      heroSubtitle="Built for Adventure"
      heroDescription="Experience the perfect combination of luxury and capability in our Landrover collection"
      heroImageUrl="/images/cars/land-junior/z6583826932912_9ef8b10ae0d9f90b78d09676f04e6ab9.jpg"
      carouselTitle="Landrover Gallery"
      carouselImages={landroverImages}
    >
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Landrover Legacy
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            For over seven decades, Landrover has been synonymous with adventure, capability,
            and uncompromising quality. Our collection features vehicles that embody the spirit
            of exploration while delivering the luxury and refinement expected from a premium brand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Capability Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Terrain Response:</strong> Adaptive all-terrain system</li>
                <li><strong>Wading Depth:</strong> Up to 900mm water fording</li>
                <li><strong>Ground Clearance:</strong> 291mm for obstacle clearance</li>
                <li><strong>Approach Angle:</strong> 34° for steep inclines</li>
                <li><strong>Towing Capacity:</strong> Up to 3,500kg</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Luxury Amenities</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Seating:</strong> Premium leather with heating/cooling</li>
                <li><strong>Infotainment:</strong> Touch Pro Duo system</li>
                <li><strong>Audio:</strong> Meridian surround sound</li>
                <li><strong>Climate:</strong> Four-zone climate control</li>
                <li><strong>Lighting:</strong> Adaptive LED headlights</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Adventure Ready
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you're navigating city streets or exploring remote wilderness,
              Landrover delivers unmatched versatility and confidence in every journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold text-xl">4x4</span>
                </div>
                <h4 className="font-semibold mb-2">All-Terrain</h4>
                <p className="text-sm text-gray-600">Permanent four-wheel drive</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold text-xl">AIR</span>
                </div>
                <h4 className="font-semibold mb-2">Air Suspension</h4>
                <p className="text-sm text-gray-600">Adaptive ride height</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold text-xl">360°</span>
                </div>
                <h4 className="font-semibold mb-2">Surround Camera</h4>
                <p className="text-sm text-gray-600">Complete visibility</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold text-xl">WADE</span>
                </div>
                <h4 className="font-semibold mb-2">Wade Sensing</h4>
                <p className="text-sm text-gray-600">Water depth monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
