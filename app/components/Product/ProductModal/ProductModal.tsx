'use client';

import {
  Modal
} from '@/app/components/Modal/Modal';
import {
  useModalData,
} from '@/app/components/Product/ProductModal/hooks';

const ProductModal = () => {
  const modalSessionValue = useModalData();

  if (!modalSessionValue) {
    return <></>;
  }

  return (
    <Modal
      title={`Karta produktu ${modalSessionValue.productId}`}
    >
      Produkt
    </Modal>
  );
};

export default ProductModal;
