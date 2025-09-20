import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutCarousel extends Struct.ComponentSchema {
  collectionName: 'components_layout_carousels';
  info: {
    description: 'Image carousel with 4 images';
    displayName: 'Carousel';
  };
  attributes: {
    autoPlay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    autoPlayInterval: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 10000;
          min: 1000;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5000>;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    showArrows: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showDots: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showThumbnails: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    description: 'Hero section with image/video and text overlay';
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    ctaLink: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    overlay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    subtitle: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    textPosition: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    description: 'Navigation menu item with optional submenu';
    displayName: 'Menu Item';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    submenu: Schema.Attribute.Component<'navigation.submenu-item', true>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    url: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface NavigationSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_social_links';
  info: {
    description: 'Social media links for footer';
    displayName: 'Social Link';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    platform: Schema.Attribute.Enumeration<
      ['instagram', 'youtube', 'tiktok', 'facebook', 'twitter']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface NavigationSubmenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_submenu_items';
  info: {
    description: 'Submenu item for navigation';
    displayName: 'Submenu Item';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO metadata for pages';
    displayName: 'SEO';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    keywords: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.carousel': LayoutCarousel;
      'layout.hero': LayoutHero;
      'navigation.menu-item': NavigationMenuItem;
      'navigation.social-link': NavigationSocialLink;
      'navigation.submenu-item': NavigationSubmenuItem;
      'shared.seo': SharedSeo;
    }
  }
}
