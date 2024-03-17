'use client';

import {ImageType} from "@/app/components/Product/types";
import {ProductImage} from "@/app/components/Product/ProductImage";
import {
  getMainImageVariants
} from "@/app/components/Product/ProductImage/utils";

export const ImagePreview = ({images, title}: {images: Array<ImageType>, title: string}) => {
  const mainImageVariants = getMainImageVariants(images);

  return (
    <>
      <ProductImage
        images={mainImageVariants}
        alt={title}
      />
    </>
  );
};
