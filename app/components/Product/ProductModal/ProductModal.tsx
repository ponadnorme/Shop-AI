'use client';

import {
  hasRequiredSessionValues,
  Modal
} from '@/app/components/Modal/Modal';
import {useSessionStorage} from 'usehooks-ts';
import {
  ProductSummaryModalDataType
} from '@/app/components/Product/ProductModal/types';
import {usePathname} from 'next/navigation';

export const modalSessionName = 'productSummaryModal';
const modalSessionParameters = ['productId'];

const ProductModal = () => {
  const pathname = usePathname();
  const [modalSessionValue, , removeModalSessionValue] = useSessionStorage<ProductSummaryModalDataType | undefined>(modalSessionName, undefined);
  const productId = !!modalSessionValue ? modalSessionValue.productId : null;

  if (
    !hasRequiredSessionValues(modalSessionValue, modalSessionParameters)
    || modalSessionValue.url !== pathname
  ) {
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

export default ProductModal;
