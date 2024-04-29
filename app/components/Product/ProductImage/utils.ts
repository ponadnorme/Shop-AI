import {ImageType} from '@/app/store/api/types';

export function getMainImageVariants(imagesList: ImageType[]) {
  const mainImageItem = getMainImage(imagesList);

  return !!mainImageItem
    ? mainImageItem.variants
    : null;
}

export function getImageVariants(imageId: string, imagesList: ImageType[]) {
  const imageItem = imagesList.find(imageItem => {
    return imageItem.id === imageId;
  });

  return !!imageItem
    ? imageItem.variants
    : null;
}

export const getMainImageId = (imagesList: ImageType[]) => {
  const mainImageItem = getMainImage(imagesList);

  return !!mainImageItem
    ? mainImageItem.id
    : null;
};

const getMainImage = (imagesList: ImageType[]) => {
  const mainImageItem = imagesList.find(imageItem => {
    return imageItem.isMain;
  });

  return !!mainImageItem
    ? mainImageItem
    : null;
};
