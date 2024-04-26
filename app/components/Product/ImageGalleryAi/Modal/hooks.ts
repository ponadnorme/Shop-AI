import {usePathname} from 'next/navigation';
import {useSessionStorage} from 'usehooks-ts';
import {
  ImageGalleryAIModalDataType
} from '@/app/components/Product/ImageGalleryAi/Modal/types';
import {useHasRequiredSessionValues} from '@/app/components/Modal/hooks';

export const useModalSessionStorage = () => {
  return useSessionStorage<ImageGalleryAIModalDataType | undefined>('imageGalleryAiModal', undefined);
}

export const useOpenModal = () => {
  const pathname = usePathname();
  const [, setImageGalleryModal] = useModalSessionStorage();

  return (productId: string, imageId: string) => {
    setImageGalleryModal({
      productId,
      imageId,
      url: pathname,
    });
  };
};

export const useModalData = (): ImageGalleryAIModalDataType | null => {
  const modalSessionParameters = ['productId', 'imageId'];
  const [modalSessionValue] = useModalSessionStorage();
  const hasAllData = useHasRequiredSessionValues(modalSessionValue, modalSessionParameters);

  if (!hasAllData) {
    return null;
  }

  return modalSessionValue as ImageGalleryAIModalDataType;
};
