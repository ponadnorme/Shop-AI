import {
  ImageGalleryAIModalDataGuard,
  ImageGalleryAIModalDataType
} from '@/app/components/Product/ImageGalleryAi/Modal/types';
import {
  useOpenModal as useBaseOpenModal,
  useModalData as useBaseModalData,
} from '@/app/components/Modal/hooks';
import {Modal} from '@/app/components/Modal/types';

export const useOpenModal = () => {
  const openModal = useBaseOpenModal(Modal.imageGalleryAiModal);

  return (productId: string, imageId: string) => {
    openModal({
      productId,
      imageId,
    });
  };
};

export const useModalData = (): ImageGalleryAIModalDataType | null => {
  return useBaseModalData<ImageGalleryAIModalDataType>(ImageGalleryAIModalDataGuard, Modal.imageGalleryAiModal);
};
