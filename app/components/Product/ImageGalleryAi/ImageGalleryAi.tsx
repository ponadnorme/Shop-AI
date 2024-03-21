'use client';

import {ImageType} from "@/app/components/Product/types";
import {ProductImage} from "@/app/components/Product/ProductImage";
import {
  getMainImageVariants
} from "@/app/components/Product/ProductImage/utils";
import {ThumbnailsElement} from "@/app/components/Product/ImageGalleryAi/styles";
import Swipeable from "@/app/components/Swipeable/Swipeable";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const ImageGalleryAi = ({images, title}: {images: Array<ImageType>, title: string}) => {
  const mainImageVariants = getMainImageVariants(images);

  const {data, error} = useSWR('/api/test', fetcher);

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
