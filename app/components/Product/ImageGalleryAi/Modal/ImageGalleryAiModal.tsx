'use client';

import {ReadonlyURLSearchParams, useSearchParams} from 'next/navigation';
import {useProductImages} from '@/app/store/api/productsClient';
import {useEffect, useState} from 'react';
import {MainImageElement, Modal, ThumbnailsElement} from './styles';
import {ProductImage} from '@/app/components/Product/ProductImage';
import {
  getMainImageVariants
} from '@/app/components/Product/ProductImage/utils';

const hasRequiredParameters = (searchParams: ReadonlyURLSearchParams) => {
  const productId = searchParams.get('id');

  return searchParams.get('imageGallery') !== null
    && productId !== null;
};

export const ImageGalleryAiModal = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  const [shouldFetch, setShouldFetch] = useState(false);
  const {productImages} = useProductImages(productId as string, shouldFetch);

  const mainImageVariants = !!productImages
    ? getMainImageVariants(productImages)
    : null;

  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedImageVariants, setSelectedImageVariants] = useState(null);

  useEffect(() => {
    setShouldFetch(hasRequiredParameters(searchParams));
    setSelectedImageId(searchParams.get('image'));
  }, [searchParams]);

  useEffect(() => {
    if (!!productImages) {
      setSelectedImageVariants(getMainImageVariants(productImages));
    } else {
      setSelectedImageVariants(null);
    }
  }, [productImages]);

  if (!hasRequiredParameters(searchParams)) {
    return <></>;
  }

  return (
    <Modal title={`Galeria dla produktu: ${productId}`}>
      <MainImageElement>
        <ProductImage
          images={selectedImageVariants}
          alt={'Sklep z mangami Ponadnorme'}
        />
      </MainImageElement>
      <ThumbnailsElement>
        {!!productImages && productImages.map((image) => (
          <ProductImage
            images={image.variants}
            alt={'Sklep z mangami Ponadnorme'}
            key={image.id}
          />
        ))}
      </ThumbnailsElement>
    </Modal>
  );
};
