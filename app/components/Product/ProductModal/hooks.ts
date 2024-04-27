import {
  ProductSummaryModalDataGuard,
  ProductSummaryModalDataType
} from '@/app/components/Product/ProductModal/types';
import {
  useOpenModal as useBaseOpenModal,
  useModalData as useBaseModalData,
} from '@/app/components/Modal/hooks';
import {Modal} from '@/app/components/Modal/types';

export const useOpenModal = () => {
  const openModal = useBaseOpenModal(Modal.productSummary);

  return (productId: string) => {
    openModal({
      productId,
    });
  };
};

export const useModalData = (): ProductSummaryModalDataType | null => {
  return useBaseModalData<ProductSummaryModalDataType>(ProductSummaryModalDataGuard, Modal.productSummary);
};
