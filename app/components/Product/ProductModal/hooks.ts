import {useSessionStorage} from 'usehooks-ts';
import {usePathname} from 'next/navigation';
import {
  ProductSummaryModalDataType
} from '@/app/components/Product/ProductModal/types';
import {useHasRequiredSessionValues} from '@/app/components/Modal/hooks';

export const useProductModalSessionStorage = () => {
  return useSessionStorage<ProductSummaryModalDataType | undefined>('productSummaryModal', undefined);
}

export const useOpenProductModal = () => {
  const pathname = usePathname();
  const [, setInitialModalData] = useProductModalSessionStorage();

  return (productId: string) => {
    setInitialModalData({
      productId,
      url: pathname,
    });
  };
};

export const useProductModalData = (): ProductSummaryModalDataType | null => {
  const [modalSessionValue] = useProductModalSessionStorage();

  const modalSessionParameters = ['productId'];
  const hasAllData = useHasRequiredSessionValues(modalSessionValue, modalSessionParameters);
  if (!hasAllData) {
    return null;
  }

  return modalSessionValue as ProductSummaryModalDataType;
};
