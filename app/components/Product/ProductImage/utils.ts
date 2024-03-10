export function getMainImageVariants(imagesList: Array<any>) {
  const mainImageItem = imagesList.find(imageItem => {
    return imageItem.isMain;
  });

  if (!mainImageItem) {
    return null;
  }

  return mainImageItem.variants;
}
