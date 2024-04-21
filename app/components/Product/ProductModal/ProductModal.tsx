'use client';

import {useSearchParams} from 'next/navigation';
import {hasRequiredParameters, Modal} from '@/app/components/Modal/Modal';

const modalQueryParameters = ['productModal', 'id'];

export const ProductModal = () => {
  const searchParameters = useSearchParams();
  const productId = searchParameters.get('id');

  if (!hasRequiredParameters(searchParameters, modalQueryParameters)) {
    return <></>;
  }

  return (
    <Modal
      title={'Karta produktu'}
      queryParameters={modalQueryParameters}
    >
      Produkt
    </Modal>
  );
};
