'use client';

import {
  hasRequiredSessionValues,
  Modal
} from '@/app/components/Modal/Modal';
import {useSessionStorage} from 'usehooks-ts';
import {
  ProductSummaryModalDataType
} from '@/app/components/Product/ProductModal/types';

export const modalSessionName = 'productSummaryModal';
const modalSessionParameters = ['productId'];

export const ProductModal = () => {
  const [modalSessionValue, , removeModalSessionValue] = useSessionStorage<ProductSummaryModalDataType | undefined>(modalSessionName, undefined);
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
