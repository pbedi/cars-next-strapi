import PageTemplate from '@/components/PageTemplate';
import { cmsService, cmsHelpers, fallbackData } from '@/lib/cms-service';

// Server component to fetch data from CMS
export default async function HomePage() {
  let pageProps;

  try {
    // Try to fetch homepage data from CMS
    const homePage = await cmsService.getPageBySlug('home');

    if (homePage) {
      pageProps = cmsHelpers.pageToProps(homePage);
    } else {
      // Fallback to default data if no CMS page found
      pageProps = fallbackData.homepage;
    }
  } catch (error) {
    console.error('Error fetching homepage data from CMS:', error);
    // Use fallback data if CMS is unavailable
    pageProps = fallbackData.homepage;
  }

  return (
    <PageTemplate
      {...pageProps}
    >
      {/* Additional content section */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Welcome to JuniorCars
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We specialize in premium automotive collections, featuring carefully selected vehicles
          from the Series 1, 300, 356, and Landrover collections. Each vehicle in our collection
          represents the pinnacle of automotive craftsmanship and design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">S1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Series 1</h3>
            <p className="text-gray-600">Classic elegance redefined</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">300</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">300 Series</h3>
            <p className="text-gray-600">Power meets sophistication</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">356</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">356 Heritage</h3>
            <p className="text-gray-600">Timeless automotive art</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary-600">LR</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Landrover</h3>
            <p className="text-gray-600">Adventure awaits</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
