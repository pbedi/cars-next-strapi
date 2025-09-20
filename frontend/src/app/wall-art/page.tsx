import PageTemplate from '@/components/PageTemplate';

const wallArtImages = [
  {
    id: '1',
    src: '/images/wall-art-1.jpg',
    alt: 'Classic Car Photography Print',
    title: 'Classic Elegance',
    description: 'Timeless automotive photography',
  },
  {
    id: '2',
    src: '/images/wall-art-2.jpg',
    alt: 'Modern Car Art Print',
    title: 'Modern Masterpiece',
    description: 'Contemporary automotive art',
  },
  {
    id: '3',
    src: '/images/wall-art-3.jpg',
    alt: 'Vintage Racing Poster',
    title: 'Racing Heritage',
    description: 'Vintage racing memorabilia',
  },
  {
    id: '4',
    src: '/images/wall-art-4.jpg',
    alt: 'Abstract Car Design',
    title: 'Abstract Beauty',
    description: 'Artistic interpretation of automotive design',
  },
];

export const metadata = {
  title: 'Wall Art Collection - JuniorCars',
  description: 'Transform your space with our premium automotive wall art collection',
};

export default function WallArtPage() {
  return (
    <PageTemplate
      heroTitle="Wall Art Collection"
      heroSubtitle="Automotive Art for Your Space"
      heroDescription="Transform your home or office with our curated collection of premium automotive wall art"
      heroImageUrl="/images/wall-art-hero.jpg"
      carouselTitle="Featured Artwork"
      carouselImages={wallArtImages}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Curated Automotive Art
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each piece in our collection is carefully selected to capture the essence of 
            automotive beauty, from classic elegance to modern performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Photography Prints</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Photography Prints</h3>
              <p className="text-gray-600 mb-4">
                High-quality photographic prints capturing the beauty of classic and modern vehicles.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Museum-quality paper</li>
                <li>• Multiple size options</li>
                <li>• Professional framing available</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Canvas Art</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Canvas Art</h3>
              <p className="text-gray-600 mb-4">
                Gallery-wrapped canvas prints that bring automotive art to life with texture and depth.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Gallery-wrapped edges</li>
                <li>• Fade-resistant inks</li>
                <li>• Ready to hang</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-square bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Metal Prints</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Metal Prints</h3>
              <p className="text-gray-600 mb-4">
                Modern aluminum prints that offer vibrant colors and a sleek, contemporary look.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Vibrant color reproduction</li>
                <li>• Scratch and weather resistant</li>
                <li>• Modern floating mount</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Custom Commissions
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a specific vehicle or vision in mind? We offer custom automotive art 
              commissions to create the perfect piece for your space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Consultation</h4>
              <p className="text-gray-600">
                Discuss your vision and requirements with our art specialists
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Creation</h4>
              <p className="text-gray-600">
                Our artists create your custom piece with attention to every detail
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                Receive your unique artwork, professionally packaged and ready to display
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
