/**
 * page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.entityService.findOne('api::page.page', id, {
      ...query,
      populate: {
        hero: {
          populate: {
            backgroundImage: true,
            backgroundVideo: true,
          },
        },
        carousel: {
          populate: {
            images: true,
          },
        },
        seo: {
          populate: {
            metaImage: true,
          },
        },
      },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  async find(ctx) {
    const { query } = ctx;

    const entities = await strapi.entityService.findMany('api::page.page', {
      ...query,
      populate: {
        hero: {
          populate: {
            backgroundImage: true,
            backgroundVideo: true,
          },
        },
        carousel: {
          populate: {
            images: true,
          },
        },
        seo: {
          populate: {
            metaImage: true,
          },
        },
      },
    });

    const sanitizedEntities = await this.sanitizeOutput(entities, ctx);
    return this.transformResponse(sanitizedEntities);
  },
}));
