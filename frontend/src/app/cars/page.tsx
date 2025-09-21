import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';
import { cmsService, cmsHelpers, fallbackData } from '@/lib/cms-service';

export default async function CarsPage() {
  let pageProps;
  let carSeries;

  try {
    // Try to fetch cars page data from CMS
    const carsPage = await cmsService.getPageBySlug('cars');
    const carSeriesData = await cmsService.getCarSeries();

    if (carsPage) {
      pageProps = cmsHelpers.pageToProps(carsPage);
    } else {
      // Fallback page props
      pageProps = {
        heroTitle: "Our Car Collection",
        heroSubtitle: "Premium Automotive Excellence",
        heroDescription: "Explore our carefully curated collection of classic and modern vehicles",
        heroImageUrl: "/images/cars-hero.jpg"
      };
    }

    // Transform car series data for display
    carSeries = cmsHelpers.carSeriesListToOverview(carSeriesData);

  } catch (error) {
    console.error('Error fetching cars page data from CMS:', error);
    // Use fallback data if CMS is unavailable
    pageProps = {
      heroTitle: "Our Car Collection",
      heroSubtitle: "Premium Automotive Excellence",
      heroDescription: "Explore our carefully curated collection of classic and modern vehicles",
      heroImageUrl: "/images/cars-hero.jpg"
    };
    carSeries = fallbackData.carSeries;
  }

  return (
    <PageTemplate
      {...pageProps}
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
