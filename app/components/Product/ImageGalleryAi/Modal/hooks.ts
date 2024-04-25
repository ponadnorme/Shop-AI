import {usePathname} from 'next/navigation';
import {useSessionStorage} from 'usehooks-ts';
import {
  ImageGalleryAIModalDataType
} from '@/app/components/Product/ImageGalleryAi/Modal/types';
import {useHasRequiredSessionValues} from '@/app/components/Modal/hooks';

export const useImageGalleryAiModalSessionStorage = () => {
  return useSessionStorage<ImageGalleryAIModalDataType | undefined>('imageGalleryAiModal', undefined);
}

export const useOpenImageGalleryAiModal = () => {
  const pathname = usePathname();
  const [, setImageGalleryModal] = useImageGalleryAiModalSessionStorage();

  return (productId: string, imageId: string) => {
    setImageGalleryModal({
      productId,
      imageId,
      url: pathname,
    });
  };
};

export const useImageGalleryAiModalData = (): ImageGalleryAIModalDataType | null => {
  const modalSessionParameters = ['productId', 'imageId'];
  const [modalSessionValue] = useImageGalleryAiModalSessionStorage();
  const hasAllData = useHasRequiredSessionValues(modalSessionValue, modalSessionParameters);

  if (!hasAllData) {
    return null;
  }

  return modalSessionValue as ImageGalleryAIModalDataType;
};
