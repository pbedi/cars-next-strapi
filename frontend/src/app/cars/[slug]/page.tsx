import PageTemplate from '@/components/PageTemplate';
import { cmsService, cmsHelpers } from '@/lib/cms-service';
import { notFound } from 'next/navigation';

interface CarSeriesPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CarSeriesPageProps) {
  try {
    const carSeries = await cmsService.getCarSeriesBySlug(params.slug);
    
    if (!carSeries) {
      return {
        title: 'Car Series Not Found - JuniorCars',
        description: 'The requested car series could not be found.',
      };
    }

    return {
      title: `${carSeries.name} - JuniorCars`,
      description: carSeries.description,
      keywords: [carSeries.name.toLowerCase(), 'car', 'automotive', 'collection', 'juniorcars'],
    };
  } catch (error) {
    return {
      title: 'Car Series - JuniorCars',
      description: 'Explore our premium automotive collection.',
    };
  }
}

// Generate static params for all car series (for static generation)
export async function generateStaticParams() {
  try {
    const carSeries = await cmsService.getCarSeries();
    return carSeries
      .filter(series => series.published)
      .map(series => ({
        slug: series.slug,
      }));
  } catch (error) {
    console.error('Error generating static params for car series:', error);
    return [];
  }
}

export default async function CarSeriesPage({ params }: CarSeriesPageProps) {
  let pageProps;
  let carSeries;
  
  try {
    // Fetch car series data from CMS
    carSeries = await cmsService.getCarSeriesBySlug(params.slug);
    
    if (!carSeries || !carSeries.published) {
      notFound();
    }
    
    pageProps = cmsHelpers.carSeriesToProps(carSeries);
    
  } catch (error) {
    console.error(`Error fetching car series data for ${params.slug}:`, error);
    notFound();
  }

  return (
    <PageTemplate
      {...pageProps}
    >
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The {carSeries.name} Legacy
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {carSeries.description}
          </p>
          
          {/* Specifications Section */}
          {carSeries.specifications && (
            <div className="bg-gray-50 rounded-lg p-8 my-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {carSeries.specifications.engine && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Engine</h4>
                    <p className="text-gray-600">{carSeries.specifications.engine}</p>
                  </div>
                )}
                {carSeries.specifications.power && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Power</h4>
                    <p className="text-gray-600">{carSeries.specifications.power}</p>
                  </div>
                )}
                {carSeries.specifications.transmission && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Transmission</h4>
                    <p className="text-gray-600">{carSeries.specifications.transmission}</p>
                  </div>
                )}
                {carSeries.specifications.acceleration && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Acceleration</h4>
                    <p className="text-gray-600">{carSeries.specifications.acceleration}</p>
                  </div>
                )}
                {carSeries.specifications.topSpeed && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Top Speed</h4>
                    <p className="text-gray-600">{carSeries.specifications.topSpeed}</p>
                  </div>
                )}
              </div>
              
              {/* Features */}
              {carSeries.specifications.features && carSeries.specifications.features.length > 0 && (
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {carSeries.specifications.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Price Section */}
          {carSeries.price && (
            <div className="bg-primary-50 rounded-lg p-8 my-12 text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Starting Price
              </h3>
              <p className="text-4xl font-bold text-primary-600 mb-4">
                ${carSeries.price.toLocaleString()}
              </p>
              <p className="text-gray-600">
                Contact us for detailed pricing and availability
              </p>
            </div>
          )}

          {/* Why Choose This Series */}
          <div className="bg-gray-50 rounded-lg p-8 my-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose {carSeries.name}?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Premium Quality</h4>
                <p className="text-sm text-gray-600">Exceptional craftsmanship and attention to detail</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Proven Heritage</h4>
                <p className="text-sm text-gray-600">Decades of automotive excellence and innovation</p>
              </div>
              <div className="text-center">
                <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Investment Value</h4>
                <p className="text-sm text-gray-600">Strong market performance and collector appeal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
