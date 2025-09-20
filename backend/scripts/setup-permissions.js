/**
 * Setup API permissions for public access
 * Run with: npm run strapi script scripts/setup-permissions.js
 */

module.exports = async ({ strapi }) => {
  console.log('🔧 Setting up API permissions...');

  try {
    // Get the public role
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (!publicRole) {
      console.error('❌ Public role not found');
      return;
    }

    console.log('✅ Found public role:', publicRole.id);

    // Define permissions to enable
    const permissionsToEnable = [
      // Page permissions
      { action: 'api::page.page.find', enabled: true },
      { action: 'api::page.page.findOne', enabled: true },
      
      // Car Series permissions
      { action: 'api::car-series.car-series.find', enabled: true },
      { action: 'api::car-series.car-series.findOne', enabled: true },
      
      // Navigation permissions
      { action: 'api::navigation.navigation.find', enabled: true },
      { action: 'api::navigation.navigation.findOne', enabled: true },
      
      // Upload permissions (for images)
      { action: 'plugin::upload.content-api.find', enabled: true },
      { action: 'plugin::upload.content-api.findOne', enabled: true },
    ];

    // Update permissions
    for (const permission of permissionsToEnable) {
      try {
        // Find existing permission
        const existingPermission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: {
            action: permission.action,
            role: publicRole.id
          }
        });

        if (existingPermission) {
          // Update existing permission
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: existingPermission.id },
            data: { enabled: permission.enabled }
          });
          console.log(`✅ Updated permission: ${permission.action}`);
        } else {
          // Create new permission
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action: permission.action,
              enabled: permission.enabled,
              policy: '',
              role: publicRole.id
            }
          });
          console.log(`✅ Created permission: ${permission.action}`);
        }
      } catch (error) {
        console.log(`⚠️  Permission ${permission.action} might not exist yet:`, error.message);
      }
    }

    console.log('🎉 Permissions setup completed!');
    console.log('📝 You can now access the API endpoints:');
    console.log('   - http://localhost:1337/api/pages');
    console.log('   - http://localhost:1337/api/car-series-collection');
    console.log('   - http://localhost:1337/api/navigations');

  } catch (error) {
    console.error('❌ Error setting up permissions:', error);
  }
};
