export type ProductType = {
  id: string,
  images: Array<ImageType>,
  price: number,
  quantity: number,
  title: string,
  features: Array<FeatureType>,
  slug: string,
  rating: number,
  ratingCount: number,
  bestRating: number,
  tag: string | null,
  regularPrice: number,
  lowestPrice: number,
};

export type ImageType = {
  id: string,
  isMain: boolean,
  variants: Array<ImageVariantType>,
};

export type ImageVariantType = {
  variant: string,
  url: string,
};

export type FeatureType = {
  name: string,
  code: string,
  values: Array<{
    value: string,
    meta?: {
      categoryUrl: string,
    },
  }>
};
