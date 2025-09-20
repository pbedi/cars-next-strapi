/**
 * Bootstrap function to set up initial permissions and content
 */
module.exports = async ({ strapi }) => {
  console.log('🚀 Starting JuniorCars bootstrap...');

  try {
    // Set up public permissions for API access
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (publicRole) {
      // Enable permissions for content types
      const permissions = [
        // Page permissions
        'api::page.page.find',
        'api::page.page.findOne',
        
        // Car Series permissions
        'api::car-series.car-series.find',
        'api::car-series.car-series.findOne',
        
        // Navigation permissions
        'api::navigation.navigation.find',
        'api::navigation.navigation.findOne',
      ];

      for (const permission of permissions) {
        const [controller, action] = permission.split('.').slice(-2);
        
        await strapi.query('plugin::users-permissions.permission').updateMany({
          where: {
            role: publicRole.id,
            action: `${permission}`,
          },
        }, {
          data: { enabled: true },
        });
      }

      console.log('✅ Public permissions configured');
    }

    // Create initial navigation if it doesn't exist
    const existingNavigation = await strapi.entityService.findMany('api::navigation.navigation');
    
    if (!existingNavigation || existingNavigation.length === 0) {
      await strapi.entityService.create('api::navigation.navigation', {
        data: {
          mainMenu: [
            {
              label: 'Cars',
              url: '/cars',
              order: 1,
              submenu: [
                { label: 'Series 1', url: '/cars/series-1', order: 1 },
                { label: '300', url: '/cars/300', order: 2 },
                { label: '356', url: '/cars/356', order: 3 },
                { label: 'Landrover', url: '/cars/landrover', order: 4 },
              ]
            },
            { label: 'Wall Art', url: '/wall-art', order: 2 },
            { label: 'About', url: '/about', order: 3 },
            { label: 'Contact', url: '/contact', order: 4 },
          ],
          footerMenu: [
            { label: 'Cars', url: '/cars', order: 1 },
            { label: 'Wall Art', url: '/wall-art', order: 2 },
            { label: 'About', url: '/about', order: 3 },
            { label: 'Contact', url: '/contact', order: 4 },
          ],
          socialLinks: [
            { platform: 'instagram', url: 'https://instagram.com/juniorcars', order: 1 },
            { platform: 'youtube', url: 'https://youtube.com/@juniorcars', order: 2 },
            { platform: 'tiktok', url: 'https://tiktok.com/@juniorcars', order: 3 },
          ]
        }
      });
      
      console.log('✅ Initial navigation created');
    }

    console.log('🎉 JuniorCars bootstrap completed successfully!');
    
  } catch (error) {
    console.error('❌ Bootstrap error:', error);
  }
};
