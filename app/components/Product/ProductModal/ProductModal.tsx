'use client';

import {useSearchParams} from 'next/navigation';
import {Modal} from '@/app/components/Modal/Modal';

export const ProductModal = () => {
  const searchParams = useSearchParams();
  const productId = searchParams.get('id');

  if (searchParams.get('productModal') === null
    || productId === null
  ) {
    return <></>;
  }

  return (
    <Modal title={'Karta produktu'}>
      Produkt
    </Modal>
  );
};
