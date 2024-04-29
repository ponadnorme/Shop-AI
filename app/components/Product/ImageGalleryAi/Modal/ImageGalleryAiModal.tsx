'use client';

import {useProductImages} from '@/app/store/api/productsClient';
import {useEffect, useState} from 'react';
import {MainImageElement, Modal, ThumbnailsElement} from './styles';
import {ProductImage} from '@/app/components/Product/ProductImage';
import {
  getMainImageVariants
} from '@/app/components/Product/ProductImage/utils';
import {ImageType, ImageVariantType} from '@/app/store/api/types';
import {
  useModalData,
} from '@/app/components/Product/ImageGalleryAi/Modal/hooks';

const ImageGalleryAiModal = () => {
  const modalSessionValue = useModalData();

  const productId = !!modalSessionValue ? modalSessionValue.productId : null;

  const [shouldFetch, setShouldFetch] = useState(false);
  const {productImages} = useProductImages(productId as string, shouldFetch);

  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [selectedImageVariants, setSelectedImageVariants] = useState<ImageVariantType[] | null>(null);

  useEffect(() => {
    setShouldFetch(!!modalSessionValue);
    setSelectedImageId(!!modalSessionValue ? modalSessionValue.imageId : null);
  }, [modalSessionValue]);

  useEffect(() => {
    if (!!productImages) {
      setSelectedImageVariants(getMainImageVariants(productImages));
    } else {
      setSelectedImageVariants(null);
    }
  }, [productImages]);

  if (!modalSessionValue) {
    return <></>;
  }

  const thumbnailClicked = (image: ImageType) => {
    setSelectedImageVariants(image.variants);
    setSelectedImageId(image.id);
  };

  return (
    <Modal
      title={`Galeria dla produktu: ${productId}`}
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
export default ImageGalleryAiModal;
