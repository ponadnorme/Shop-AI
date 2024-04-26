import {useSessionStorage} from 'usehooks-ts';
import {usePathname} from 'next/navigation';
import {
  ProductSummaryModalDataType
} from '@/app/components/Product/ProductModal/types';
import {useHasRequiredSessionValues} from '@/app/components/Modal/hooks';

export const useModalSessionStorage = () => {
  return useSessionStorage<ProductSummaryModalDataType | undefined>('productSummaryModal', undefined);
}

export const useOpenModal = () => {
  const pathname = usePathname();
  const [, setInitialModalData] = useModalSessionStorage();

  return (productId: string) => {
    setInitialModalData({
      productId,
      url: pathname,
    });
  };
};

export const useModalData = (): ProductSummaryModalDataType | null => {
  const [modalSessionValue] = useModalSessionStorage();

  const modalSessionParameters = ['productId'];
  const hasAllData = useHasRequiredSessionValues(modalSessionValue, modalSessionParameters);
  if (!hasAllData) {
    return null;
  }

  return modalSessionValue as ProductSummaryModalDataType;
};
