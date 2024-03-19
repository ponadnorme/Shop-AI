'use client';

import {ImageType} from "@/app/components/Product/types";
import {ProductImage} from "@/app/components/Product/ProductImage";
import {
  getMainImageVariants
} from "@/app/components/Product/ProductImage/utils";
import {ThumbnailsElement} from "@/app/components/Product/ImagePreview/styles";
import Swipeable from "@/app/components/Swipeable/Swipeable";

export const ImageGalleryAi = ({images, title}: {images: Array<ImageType>, title: string}) => {
  const mainImageVariants = getMainImageVariants(images);

  return (
    <>
      <ProductImage
        images={mainImageVariants}
        alt={title}
      />
      <ThumbnailsElement>
        <Swipeable>
          {images.map((imageType) => {
            return (
              <a
                key={imageType.id}
              >
                <ProductImage
                  images={imageType.variants}
                  alt={title}
                />
              </a>
            );
          })}
        </Swipeable>
      </ThumbnailsElement>
    </>
  );
};
