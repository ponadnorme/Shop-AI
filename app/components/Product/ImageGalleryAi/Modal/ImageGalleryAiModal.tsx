'use client';

import {ReadonlyURLSearchParams, useSearchParams} from 'next/navigation';
import {useProductImages} from '@/app/store/api/productsClient';
import {useEffect, useState} from 'react';
import {Modal} from './styles';

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

  useEffect(() => {
    setShouldFetch(hasRequiredParameters(searchParams));
  }, [searchParams]);

  if (!hasRequiredParameters(searchParams)) {
    return <></>;
  }

  return (
    <Modal title={`Galeria dla produktu: ${productId}`}>
      Galeria
    </Modal>
  );
};
