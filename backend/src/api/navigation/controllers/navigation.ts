/**
 * navigation controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::navigation.navigation', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany('api::navigation.navigation', {
      ...query,
      populate: {
        mainMenu: {
          populate: {
            submenu: true,
          },
        },
        footerMenu: true,
        socialLinks: true,
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
