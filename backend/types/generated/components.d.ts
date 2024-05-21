import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentLink extends Schema.Component {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero section';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    image: Attribute.Media;
    link: Attribute.Component<'component.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.link': ComponentLink;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
