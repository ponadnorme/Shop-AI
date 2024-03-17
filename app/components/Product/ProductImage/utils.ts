import {ImageType} from "@/app/components/Product/types";

export function getMainImageVariants(imagesList: Array<ImageType>) {
  const mainImageItem = imagesList.find(imageItem => {
    return imageItem.isMain;
  });

  if (!mainImageItem) {
    return null;
  }

  return mainImageItem.variants;
}
