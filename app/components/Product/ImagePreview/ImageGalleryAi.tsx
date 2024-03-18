'use client';

import {ImageType} from "@/app/components/Product/types";
import {ProductImage} from "@/app/components/Product/ProductImage";
import {
  getMainImageVariants
} from "@/app/components/Product/ProductImage/utils";
import {ThumbnailsElement} from "@/app/components/Product/ImagePreview/styles";

export const ImageGalleryAi = ({images, title}: {images: Array<ImageType>, title: string}) => {
  const mainImageVariants = getMainImageVariants(images);

  return (
    <>
      <ProductImage
        images={mainImageVariants}
        alt={title}
      />
      <ThumbnailsElement>
        {images.map((imageType) => {
          return (
            <>
              <ProductImage
                images={imageType.variants}
                alt={title}
                key={imageType.id}
              />
            </>
          );
        })}
      </ThumbnailsElement>
    </>
  );
};
