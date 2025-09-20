import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';

const carSeries = [
  {
    name: 'Series 1',
    slug: 'series-1',
    description: 'Classic elegance redefined with modern performance',
    image: '/images/series-1-hero.jpg',
  },
  {
    name: '300 Series',
    slug: '300',
    description: 'Power meets sophistication in every detail',
    image: '/images/300-hero.jpg',
  },
  {
    name: '356 Heritage',
    slug: '356',
    description: 'Timeless automotive art and engineering excellence',
    image: '/images/356-hero.jpg',
  },
  {
    name: 'Landrover',
    slug: 'landrover',
    description: 'Built for adventure, designed for excellence',
    image: '/images/landrover-hero.jpg',
  },
];

export default function CarsPage() {
  return (
    <PageTemplate
      heroTitle="Our Car Collection"
      heroSubtitle="Premium Automotive Excellence"
      heroDescription="Explore our carefully curated collection of classic and modern vehicles"
      heroImageUrl="/images/cars-hero.jpg"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Series
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each series represents a unique blend of heritage, performance, and craftsmanship. 
            Discover the collection that speaks to your automotive passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {carSeries.map((series) => (
            <Link
              key={series.slug}
              href={`/cars/${series.slug}`}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">{series.name}</h3>
                  <p className="text-gray-200">{series.description}</p>
                </div>
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-gray-600 text-lg font-semibold">
                    {series.name} Image
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                    Explore Collection
                  </span>
                  <svg
                    className="w-5 h-5 text-primary-600 group-hover:text-primary-700 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
