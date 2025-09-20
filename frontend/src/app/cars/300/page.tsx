import PageTemplate from '@/components/PageTemplate';

const car300Images = [
  {
    id: '1',
    src: '/images/cars/300/Merc Silver (1).jpg',
    alt: '300 Series Performance Model',
    title: 'Raw Power',
    description: 'Unleash the beast within',
  },
  {
    id: '2',
    src: '/images/cars/300/Merc creme (17).jpg',
    alt: '300 Series Interior',
    title: 'Sport Interior',
    description: 'Racing-inspired cockpit design',
  },
  {
    id: '3',
    src: '/images/cars/300/merc light blue (15).jpg',
    alt: '300 Series Engine Bay',
    title: 'High Performance Engine',
    description: 'Precision engineering for maximum power',
  },
  {
    id: '4',
    src: '/images/cars/300/300-vito-blue-black.jpg',
    alt: '300 Series Action Shot',
    title: 'Built for Speed',
    description: 'Performance that speaks for itself',
  },
];

export const metadata = {
  title: '300 Series Collection - JuniorCars',
  description: 'Power meets sophistication in our 300 Series collection',
};

export default function Car300Page() {
  return (
    <PageTemplate
      heroTitle="300 Series Collection"
      heroSubtitle="Power Meets Sophistication"
      heroDescription="Experience the perfect balance of raw power and refined elegance in our 300 Series collection"
      heroImageUrl="/images/cars/300/300-midnight-blue-black.jpg"
      carouselTitle="300 Series Gallery"
      carouselImages={car300Images}
    >
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The 300 Series Experience
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The 300 Series represents the perfect fusion of power and sophistication. Built for
            those who demand both performance and luxury, each vehicle delivers an exhilarating
            driving experience while maintaining the comfort and refinement expected from a
            premium automobile.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Specs</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Engine:</strong> High-performance V8</li>
                <li><strong>Power:</strong> 400+ horsepower</li>
                <li><strong>Transmission:</strong> 8-speed automatic</li>
                <li><strong>0-60 mph:</strong> Under 5 seconds</li>
                <li><strong>Top Speed:</strong> 155 mph (electronically limited)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Luxury Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Interior:</strong> Premium leather and carbon fiber</li>
                <li><strong>Technology:</strong> Advanced infotainment system</li>
                <li><strong>Sound:</strong> Premium audio system</li>
                <li><strong>Climate:</strong> Dual-zone automatic climate control</li>
                <li><strong>Safety:</strong> Advanced driver assistance systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
