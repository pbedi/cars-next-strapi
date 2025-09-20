import PageTemplate from '@/components/PageTemplate';

const car356Images = [
  {
    id: '1',
    src: '/images/cars/356/pfront-scaled.jpg',
    alt: '356 Heritage Classic',
    title: 'Timeless Beauty',
    description: 'Automotive art in its purest form',
  },
  {
    id: '2',
    src: '/images/cars/356/pside-scaled.jpg',
    alt: '356 Craftsmanship Detail',
    title: 'Artisan Craftsmanship',
    description: 'Every detail meticulously crafted',
  },
  {
    id: '3',
    src: '/images/cars/356/p-interior-1-scaled.jpg',
    alt: '356 Heritage Engine',
    title: 'Engineering Heritage',
    description: 'Precision engineering from a bygone era',
  },
  {
    id: '4',
    src: '/images/cars/356/ptail-scaled.jpg',
    alt: '356 Elegant Profile',
    title: 'Elegant Silhouette',
    description: 'A profile that defines automotive elegance',
  },
];

export const metadata = {
  title: '356 Heritage Collection - JuniorCars',
  description: 'Discover the timeless automotive art and engineering excellence of our 356 Heritage collection',
};

export default function Car356Page() {
  return (
    <PageTemplate
      heroTitle="356 Heritage Collection"
      heroSubtitle="Timeless Automotive Art"
      heroDescription="Discover the perfect harmony of design and engineering in our 356 Heritage collection"
      heroImageUrl="/images/cars/356/pfront-scaled.jpg"
      carouselTitle="356 Heritage Gallery"
      carouselImages={car356Images}
    >
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The 356 Heritage Story
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The 356 Heritage collection celebrates the golden age of automotive design, where
            form and function existed in perfect harmony. Each vehicle represents a masterpiece
            of engineering and artistry, carefully preserved to maintain its original character
            and charm.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Classic Specifications</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Engine:</strong> Air-cooled flat-four</li>
                <li><strong>Displacement:</strong> 1.6L naturally aspirated</li>
                <li><strong>Transmission:</strong> 4-speed manual</li>
                <li><strong>Body:</strong> Lightweight steel construction</li>
                <li><strong>Weight:</strong> Under 2,000 lbs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Philosophy</h3>
              <p className="text-gray-600">
                The 356 embodies the principle that beauty and performance are inseparable.
                Its aerodynamic curves weren't just aesthetic choices—they were functional
                elements that contributed to the car's exceptional handling and efficiency.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Heritage & Legacy
            </h3>
            <p className="text-gray-600 mb-6">
              The 356 series laid the foundation for decades of automotive excellence.
              Its influence can be seen in modern design language, proving that true
              beauty is indeed timeless.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">1948-1965</h4>
                <p className="text-sm text-gray-600">Production years</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">76,000+</h4>
                <p className="text-sm text-gray-600">Units produced</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Racing Heritage</h4>
                <p className="text-sm text-gray-600">Le Mans victories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
