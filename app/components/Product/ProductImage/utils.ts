import {ImageType} from '@/app/store/api/types';

export function getMainImageVariants(imagesList: Array<ImageType>) {
  const mainImageItem = imagesList.find(imageItem => {
    return imageItem.isMain;
  });

  if (!mainImageItem) {
    return null;
  }

  return mainImageItem.variants;
}
