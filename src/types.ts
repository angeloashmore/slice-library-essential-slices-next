// Code generated by prismic-typescript-generator. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title for the page
   * - **API ID Path**: page.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Slice Zone (`slices`) field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   */
  slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/** Slice for *Page → Slice Zone (`slices`)* */
type PageDocumentDataSlicesSlice =
  | AlternateGridSlice
  | CallToActionSlice
  | CardsCarouselSlice
  | CustomerLogosSlice
  | FaqSectionSlice
  | ImagesSliderSlice
  | PricingTableSlice
  | TestimonialsSliderSlice
  | VideoHighlightsSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<PageDocumentData, "page", Lang>;
/** Primary content in CardsCarousel → Primary */
interface CardsCarouselSliceDefaultSlicePrimary {
  /**
   * Eyebrow Headline field in *CardsCarousel → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_carousel.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  eyebrowHeadline: prismicT.RichTextField;
  /**
   * Title field in *CardsCarousel → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_carousel.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Description field in *CardsCarousel → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_carousel.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  description: prismicT.RichTextField;
}
/** Primary content in CardsCarousel → Items */
interface CardsCarouselSliceDefaultSliceItem {
  /**
   * Image field in *CardsCarousel → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_carousel.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   */
  image: prismicT.ImageField<null>;
  /**
   * Title field in *CardsCarousel → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_carousel.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Content field in *CardsCarousel → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards_carousel.items[].content
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  content: prismicT.RichTextField;
}
/**
 * Default slice variation for CardsCarousel Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: `CardsCarousel`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
type CardsCarouselSliceDefaultSlice = prismicT.SharedSliceVariation<
  "default-slice",
  Simplify<CardsCarouselSliceDefaultSlicePrimary>,
  Simplify<CardsCarouselSliceDefaultSliceItem>
>;
/**
 * CardsCarousel Shared Slice
 *
 * - **API ID**: `cards_carousel`
 * - **Description**: `CardsCarousel`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
export type CardsCarouselSlice = prismicT.SharedSlice<
  "cards_carousel",
  CardsCarouselSliceDefaultSlice
>;
/** Primary content in CallToAction → Primary */
interface CallToActionSliceDefaultSlicePrimary {
  /**
   * Icon Image field in *CallToAction → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.iconImage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   */
  iconImage: prismicT.ImageField<null>;
  /**
   * Title field in *CallToAction → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Paragraph field in *CallToAction → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  paragraph: prismicT.RichTextField;
  /**
   * Button Link field in *CallToAction → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action.primary.buttonLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   */
  buttonLink: prismicT.LinkField;
  /**
   * Button Label field in *CallToAction → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Text for button
   * - **API ID Path**: call_to_action.primary.buttonLabel
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   */
  buttonLabel: prismicT.KeyTextField;
}
/**
 * Default slice variation for CallToAction Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: `Call to action`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
type CallToActionSliceDefaultSlice = prismicT.SharedSliceVariation<
  "default-slice",
  Simplify<CallToActionSliceDefaultSlicePrimary>,
  never
>;
/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: `Call to action`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
export type CallToActionSlice = prismicT.SharedSlice<
  "call_to_action",
  CallToActionSliceDefaultSlice
>;
/** Primary content in CustomerLogos → Primary */
interface CustomerLogosSliceDefaultSlicePrimary {
  /**
   * Eyebrow Headline field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Trusted by
   * - **API ID Path**: customer_logos.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  eyebrowHeadline: prismicT.TitleField;
  /**
   * Call to Action field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: View customer stories
   * - **API ID Path**: customer_logos.primary.callToAction
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  callToAction: prismicT.RichTextField;
  /**
   * Call to Action Link field in *CustomerLogos → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Could be a signup link, or a link to customer stories
   * - **API ID Path**: customer_logos.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   */
  callToActionLink: prismicT.LinkField;
}
/** Primary content in CustomerLogos → Items */
interface CustomerLogosSliceDefaultSliceItem {
  /**
   * Logo field in *CustomerLogos → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: customer_logos.items[].logo
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   */
  logo: prismicT.ImageField<null>;
  /**
   * Link field in *CustomerLogos → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Could be a link to use case, press article, signup...
   * - **API ID Path**: customer_logos.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   */
  link: prismicT.LinkField;
}
/**
 * Default slice variation for CustomerLogos Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: `CustomerLogos`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
type CustomerLogosSliceDefaultSlice = prismicT.SharedSliceVariation<
  "default-slice",
  Simplify<CustomerLogosSliceDefaultSlicePrimary>,
  Simplify<CustomerLogosSliceDefaultSliceItem>
>;
/**
 * CustomerLogos Shared Slice
 *
 * - **API ID**: `customer_logos`
 * - **Description**: `CustomerLogos`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
export type CustomerLogosSlice = prismicT.SharedSlice<
  "customer_logos",
  CustomerLogosSliceDefaultSlice
>;
/** Primary content in AlternateGrid → Primary */
interface AlternateGridSliceDefaultSlicePrimary {
  /**
   * Eyebrow Headline field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  eyebrowHeadline: prismicT.RichTextField;
  /**
   * Title field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Description field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  description: prismicT.RichTextField;
  /**
   * Optional Image field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.primary.optionalImage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   */
  optionalImage: prismicT.ImageField<null>;
  /**
   * Image Side field in *AlternateGrid → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: left
   * - **API ID Path**: alternate_grid.primary.imageSide
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   */
  imageSide: prismicT.SelectField<"left" | "right", "filled">;
}
/** Primary content in AlternateGrid → Items */
interface AlternateGridSliceDefaultSliceItem {
  /**
   * Optional Icon field in *AlternateGrid → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].optionalIcon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   */
  optionalIcon: prismicT.ImageField<null>;
  /**
   * Title field in *AlternateGrid → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Description field in *AlternateGrid → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: alternate_grid.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  description: prismicT.RichTextField;
}
/**
 * Default slice variation for AlternateGrid Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: `AlternateGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
type AlternateGridSliceDefaultSlice = prismicT.SharedSliceVariation<
  "default-slice",
  Simplify<AlternateGridSliceDefaultSlicePrimary>,
  Simplify<AlternateGridSliceDefaultSliceItem>
>;
/**
 * AlternateGrid Shared Slice
 *
 * - **API ID**: `alternate_grid`
 * - **Description**: `AlternateGrid`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
export type AlternateGridSlice = prismicT.SharedSlice<
  "alternate_grid",
  AlternateGridSliceDefaultSlice
>;
/** Primary content in FaqSection → Primary */
interface FaqSectionSliceDefaultSlicePrimary {
  /**
   * Eyebrow Headline field in *FaqSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: To be displayed before title
   * - **API ID Path**: faq_section.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  eyebrowHeadline: prismicT.RichTextField;
  /**
   * Title field in *FaqSection → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title
   * - **API ID Path**: faq_section.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Description field in *FaqSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq_section.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  description: prismicT.RichTextField;
  /**
   * Optional Image field in *FaqSection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: faq_section.primary.optionalImage
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   */
  optionalImage: prismicT.ImageField<null>;
}
/** Primary content in FaqSection → Items */
interface FaqSectionSliceDefaultSliceItem {
  /**
   * Title field in *FaqSection → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Which browsers do you support?
   * - **API ID Path**: faq_section.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Text field in *FaqSection → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: The answer to the question
   * - **API ID Path**: faq_section.items[].text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  text: prismicT.RichTextField;
}
/**
 * Default slice variation for FaqSection Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: `FaqSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
type FaqSectionSliceDefaultSlice = prismicT.SharedSliceVariation<
  "default-slice",
  Simplify<FaqSectionSliceDefaultSlicePrimary>,
  Simplify<FaqSectionSliceDefaultSliceItem>
>;
/**
 * FaqSection Shared Slice
 *
 * - **API ID**: `faq_section`
 * - **Description**: `FaqSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
export type FaqSectionSlice = prismicT.SharedSlice<
  "faq_section",
  FaqSectionSliceDefaultSlice
>;
/** Primary content in PricingTable → Primary */
interface PricingTableSliceDefaultSlicePrimary {
  /**
   * Eyebrow Headline field in *PricingTable → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Pricing plans
   * - **API ID Path**: pricing_table.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  eyebrowHeadline: prismicT.TitleField;
  /**
   * Title field in *PricingTable → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Choose the plan
   * - **API ID Path**: pricing_table.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Description field in *PricingTable → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Choose the version that works for you ...
   * - **API ID Path**: pricing_table.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  description: prismicT.RichTextField;
}
/** Primary content in PricingTable → Items */
interface PricingTableSliceDefaultSliceItem {
  /**
   * Plan title field in *PricingTable → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Simple, Gold, Premium...
   * - **API ID Path**: pricing_table.items[].planTitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  planTitle: prismicT.TitleField;
  /**
   * Price Option field in *PricingTable → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Free, $19, Contact us...
   * - **API ID Path**: pricing_table.items[].priceOption
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  priceOption: prismicT.RichTextField;
  /**
   * Features field in *PricingTable → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A list of features using bullet list
   * - **API ID Path**: pricing_table.items[].features
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  features: prismicT.RichTextField;
  /**
   * Call To Action field in *PricingTable → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link to Signup / More info...
   * - **API ID Path**: pricing_table.items[].callToAction
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   */
  callToAction: prismicT.LinkField;
  /**
   * Call To Action Text field in *PricingTable → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Start your free trial
   * - **API ID Path**: pricing_table.items[].callToActionText
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  callToActionText: prismicT.RichTextField;
}
/**
 * Default slice variation for PricingTable Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: `PricingTable`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
type PricingTableSliceDefaultSlice = prismicT.SharedSliceVariation<
  "default-slice",
  Simplify<PricingTableSliceDefaultSlicePrimary>,
  Simplify<PricingTableSliceDefaultSliceItem>
>;
/**
 * PricingTable Shared Slice
 *
 * - **API ID**: `pricing_table`
 * - **Description**: `PricingTable`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
export type PricingTableSlice = prismicT.SharedSlice<
  "pricing_table",
  PricingTableSliceDefaultSlice
>;
/** Primary content in TestimonialsSlider → Primary */
interface TestimonialsSliderSliceDefaultSlicePrimary {
  /**
   * Eyebrow Headline field in *TestimonialsSlider → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slider.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  eyebrowHeadline: prismicT.RichTextField;
  /**
   * Title field in *TestimonialsSlider → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slider.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Paragraph field in *TestimonialsSlider → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slider.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  paragraph: prismicT.RichTextField;
}
/** Primary content in TestimonialsSlider → Items */
interface TestimonialsSliderSliceDefaultSliceItem {
  /**
   * Image field in *TestimonialsSlider → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slider.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   */
  image: prismicT.ImageField<null>;
  /**
   * Testimonial field in *TestimonialsSlider → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials_slider.items[].testimonial
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  testimonial: prismicT.RichTextField;
  /**
   * Person field in *TestimonialsSlider → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Their full name
   * - **API ID Path**: testimonials_slider.items[].person
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   */
  person: prismicT.KeyTextField;
  /**
   * Title field in *TestimonialsSlider → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Their title
   * - **API ID Path**: testimonials_slider.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   */
  title: prismicT.KeyTextField;
}
/**
 * Default slice variation for TestimonialsSlider Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: `TestimonialsSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
type TestimonialsSliderSliceDefaultSlice = prismicT.SharedSliceVariation<
  "default-slice",
  Simplify<TestimonialsSliderSliceDefaultSlicePrimary>,
  Simplify<TestimonialsSliderSliceDefaultSliceItem>
>;
/**
 * TestimonialsSlider Shared Slice
 *
 * - **API ID**: `testimonials_slider`
 * - **Description**: `TestimonialsSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
export type TestimonialsSliderSlice = prismicT.SharedSlice<
  "testimonials_slider",
  TestimonialsSliderSliceDefaultSlice
>;
/** Primary content in ImagesSlider → Primary */
interface ImagesSliderSliceDefaultSlicePrimary {
  /**
   * Eyebrow Headline field in *ImagesSlider → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: images_slider.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  eyebrowHeadline: prismicT.RichTextField;
  /**
   * Title field in *ImagesSlider → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: images_slider.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Description field in *ImagesSlider → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: images_slider.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  description: prismicT.RichTextField;
}
/** Primary content in ImagesSlider → Items */
interface ImagesSliderSliceDefaultSliceItem {
  /**
   * Full Width Image field in *ImagesSlider → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: images_slider.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   */
  image: prismicT.ImageField<null>;
  /**
   * Description field in *ImagesSlider → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: images_slider.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  description: prismicT.RichTextField;
}
/**
 * Default slice variation for ImagesSlider Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: `ImagesSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
type ImagesSliderSliceDefaultSlice = prismicT.SharedSliceVariation<
  "default-slice",
  Simplify<ImagesSliderSliceDefaultSlicePrimary>,
  Simplify<ImagesSliderSliceDefaultSliceItem>
>;
/**
 * ImagesSlider Shared Slice
 *
 * - **API ID**: `images_slider`
 * - **Description**: `ImagesSlider`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
export type ImagesSliderSlice = prismicT.SharedSlice<
  "images_slider",
  ImagesSliderSliceDefaultSlice
>;
/** Primary content in VideoHighlights → Primary */
interface VideoHighlightsSliceDefaultSlicePrimary {
  /**
   * Eyebrow Headline field in *VideoHighlights → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: To be displayed before title
   * - **API ID Path**: video_highlights.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  eyebrowHeadline: prismicT.RichTextField;
  /**
   * Title field in *VideoHighlights → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Video Highlights
   * - **API ID Path**: video_highlights.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  title: prismicT.TitleField;
  /**
   * Description field in *VideoHighlights → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: These are some awesome videos ...
   * - **API ID Path**: video_highlights.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  description: prismicT.RichTextField;
}
/** Primary content in VideoHighlights → Items */
interface VideoHighlightsSliceDefaultSliceItem {
  /**
   * Video Title field in *VideoHighlights → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: My awesome video
   * - **API ID Path**: video_highlights.items[].videoTitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   */
  videoTitle: prismicT.RichTextField;
  /**
   * Video Source field in *VideoHighlights → Items*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: video_highlights.items[].videoSource
   * - **Documentation**: https://prismic.io/docs/core-concepts/embed
   */
  videoSource: prismicT.EmbedField;
}
/**
 * Default slice variation for VideoHighlights Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: `VideoHighlights`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
type VideoHighlightsSliceDefaultSlice = prismicT.SharedSliceVariation<
  "default-slice",
  Simplify<VideoHighlightsSliceDefaultSlicePrimary>,
  Simplify<VideoHighlightsSliceDefaultSliceItem>
>;
/**
 * VideoHighlights Shared Slice
 *
 * - **API ID**: `video_highlights`
 * - **Description**: `VideoHighlights`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 */
export type VideoHighlightsSlice = prismicT.SharedSlice<
  "video_highlights",
  VideoHighlightsSliceDefaultSlice
>;