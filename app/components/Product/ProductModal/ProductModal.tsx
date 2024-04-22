'use client';

import {
  hasRequiredSessionValues,
  Modal
} from '@/app/components/Modal/Modal';
import {useSessionStorage} from 'usehooks-ts';

const modalSessionParameters = ['productId'];

export const ProductModal = () => {
  const [modalSessionValue, , removeModalSessionValue] = useSessionStorage('productSummaryModal');
  const productId = !!modalSessionValue ? modalSessionValue.productId : null;

  if (!hasRequiredSessionValues(modalSessionValue, modalSessionParameters)) {
    return <></>;
  }

  return (
    <Modal
      title={`Karta produktu ${productId}`}
      onAfterClose={() => {
        removeModalSessionValue();
      }}
    >
      Produkt
    </Modal>
  );
};
