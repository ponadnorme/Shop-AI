'use client';

import {
  useSearchParams
} from 'next/navigation';
import {useProductImages} from '@/app/store/api/productsClient';
import {useEffect, useState} from 'react';
import {MainImageElement, Modal, ThumbnailsElement} from './styles';
import {ProductImage} from '@/app/components/Product/ProductImage';
import {
  getMainImageVariants
} from '@/app/components/Product/ProductImage/utils';
import {ImageType, ImageVariantType} from '@/app/store/api/types';
import {hasRequiredParameters} from '@/app/components/Modal/Modal';

const modalQueryParameters = ['imageGallery', 'id', 'image'];

export const ImageGalleryAiModal = () => {
  const searchParameters = useSearchParams();
  const productId = searchParameters.get('id');

  const [shouldFetch, setShouldFetch] = useState(false);
  const {productImages} = useProductImages(productId as string, shouldFetch);

  const mainImageVariants = !!productImages
    ? getMainImageVariants(productImages)
    : null;

  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [selectedImageVariants, setSelectedImageVariants] = useState<ImageVariantType[] | null>(null);

  useEffect(() => {
    setShouldFetch(hasRequiredParameters(searchParameters, modalQueryParameters));
    setSelectedImageId(searchParameters.get('image'));
  }, [searchParameters]);

  useEffect(() => {
    if (!!productImages) {
      setSelectedImageVariants(getMainImageVariants(productImages));
    } else {
      setSelectedImageVariants(null);
    }
  }, [productImages]);

  if (!hasRequiredParameters(searchParameters, modalQueryParameters)) {
    return <></>;
  }

  const thumbnailClicked = (image: ImageType) => {
    setSelectedImageVariants(image.variants);
    setSelectedImageId(image.id);
  };

  return (
    <Modal
      title={`Galeria dla produktu: ${productId}`}
      queryParameters={modalQueryParameters}
    >
      <MainImageElement>
        <ProductImage
          images={selectedImageVariants}
          alt={'Produkt'}
        />
      </MainImageElement>
      <ThumbnailsElement>
        {!!productImages && productImages.map((image) => (
          <ProductImage
            images={image.variants}
            alt={'Produkt'}
            key={image.id}
            onClick={() => thumbnailClicked(image)}
          />
        ))}
      </ThumbnailsElement>
    </Modal>
  );
};
