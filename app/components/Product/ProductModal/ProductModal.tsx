'use client';

import {
  Modal
} from '@/app/components/Modal/Modal';
import {
  useProductModalData,
  useProductModalSessionStorage
} from '@/app/components/Product/ProductModal/hooks';

const ProductModal = () => {
  const modalSessionValue = useProductModalData();
  const [, , removeModalSessionValue] = useProductModalSessionStorage();

  if (!modalSessionValue) {
    return <></>;
  }

  return (
    <Modal
      title={`Karta produktu ${modalSessionValue.productId}`}
      onAfterClose={() => {
        removeModalSessionValue();
      }}
    >
      Produkt
    </Modal>
  );
};

export default ProductModal;
