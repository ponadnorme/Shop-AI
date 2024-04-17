'use client';

import {Modal} from '@/app/components/Modal/Modal';
import {useSearchParams} from 'next/navigation';

export const ImageGalleryAiModal = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  if (searchParams.get('imageGallery') === null
    || productId === null
  ) {
    return <></>;
  }

  return (
    <Modal title={`Galeria dla produktu: ${productId}`}/>
  );
};
