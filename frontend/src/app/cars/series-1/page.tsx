import PageTemplate from '@/components/PageTemplate';

const series1Images = [
  {
    id: '1',
    src: '/images/cars/series-1/IMG_5573.jpg',
    alt: 'Series 1 Classic Model',
    title: 'Classic Elegance',
    description: 'The timeless design that started it all',
  },
  {
    id: '2',
    src: '/images/cars/series-1/IMG_5625.jpg',
    alt: 'Series 1 Interior',
    title: 'Luxurious Interior',
    description: 'Handcrafted details and premium materials',
  },
  {
    id: '3',
    src: '/images/cars/series-1/IMG_5660.jpg',
    alt: 'Series 1 Engine',
    title: 'Powerful Performance',
    description: 'Engineering excellence under the hood',
  },
  {
    id: '4',
    src: '/images/cars/series-1/IMG_5666.jpg',
    alt: 'Series 1 Profile',
    title: 'Iconic Profile',
    description: 'A silhouette that defines automotive beauty',
  },
];

export const metadata = {
  title: 'Series 1 Collection - JuniorCars',
  description: 'Experience the timeless beauty and sophisticated engineering of our Series 1 collection',
};

export default function Series1Page() {
  return (
    <PageTemplate
      heroTitle="Series 1 Collection"
      heroSubtitle="Classic Elegance Redefined"
      heroDescription="Experience the timeless beauty and sophisticated engineering of our Series 1 collection"
      heroImageUrl="/images/hero/hero-car-1.jpg"
      carouselTitle="Series 1 Gallery"
      carouselImages={series1Images}
    >
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Series 1 Legacy
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The Series 1 represents the pinnacle of classic automotive design, where traditional
            craftsmanship meets modern performance. Each vehicle in this collection has been
            meticulously restored and maintained to preserve its original character while
            incorporating contemporary reliability and safety features.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Engine:</strong> Classic inline-6 configuration</li>
                <li><strong>Transmission:</strong> 4-speed manual</li>
                <li><strong>Body:</strong> Steel construction with chrome accents</li>
                <li><strong>Interior:</strong> Hand-stitched leather upholstery</li>
                <li><strong>Features:</strong> Wire wheels, wood dashboard</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Heritage</h3>
              <p className="text-gray-600">
                Originally produced in the golden age of automotive design, the Series 1
                has become an icon of automotive excellence. Our collection features
                carefully selected examples that showcase the best of this legendary series.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Series 1?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Timeless Design</h4>
                <p className="text-sm text-gray-600">Classic lines that never go out of style</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Proven Heritage</h4>
                <p className="text-sm text-gray-600">Decades of automotive excellence</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Investment Value</h4>
                <p className="text-sm text-gray-600">Appreciating classic with strong market</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
