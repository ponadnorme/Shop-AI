'use client';

import {ProductImage} from '@/app/components/Product/ProductImage';
import {
  getMainImageId,
  getMainImageVariants
} from '@/app/components/Product/ProductImage/utils';
import {
  ThumbnailsElement
} from '@/app/components/Product/ImageGalleryAi/styles';
import {ImageType, ImageVariantType} from '@/app/store/api/types';
import {productImagesGalleryRoute} from '@/app/routes';
import {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import {useRouter} from 'next/navigation';

type ImageGalleryAiPropsType = {
  images: Array<ImageType>,
  title: string,
  productId: string,
};

export const ImageGalleryAi = (
  {
    images,
    title,
    productId
  }: ImageGalleryAiPropsType) => {
  const router = useRouter();
  const mainImageVariants = getMainImageVariants(images);
  const mainImageId = getMainImageId(images);

  const [selectedImageVariants, setSelectedImageVariants] = useState(mainImageVariants as ImageVariantType[]);
  const [selectedImageId, setSelectedImageId] = useState(mainImageId as string);

  const updateMainImage = (imageType: ImageType) => {
    setSelectedImageId(imageType.id);
    setSelectedImageVariants(imageType.variants);
  };

  if (!mainImageId) {
    return <></>;
  }

  return (
    <>
      <ProductImage
        images={selectedImageVariants}
        alt={title}
        onClick={() => {
          router.replace(productImagesGalleryRoute(productId, selectedImageId));
        }}
      />
      <ThumbnailsElement>
        <Swiper
          freeMode={true}
          modules={[FreeMode]}
          spaceBetween={2}
          slidesPerView={'auto'}
        >
          {images.map((imageType) => {
            return (
              <SwiperSlide
                role={'button'}
                key={imageType.id}
                onClick={() => updateMainImage(imageType)}
              >
                <ProductImage
                  images={imageType.variants}
                  alt={title}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </ThumbnailsElement>
    </>
  );
};
