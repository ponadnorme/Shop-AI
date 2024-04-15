// Is client component. Needs 'use client' boundary.

import {
  ProductInformationColumnElement,
  ProductInformationElement,
  ProductPriceElement,
  SearchedItemElement
} from './styles';
import {ProductType} from '@/app/store/api/types';
import {Pages, buildRoute} from '@/app/routes';
import {ProductImage} from '@/app/components/Product/ProductImage';
import Link from 'next/link';
import {
  getMainImageVariants
} from '@/app/components/Product/ProductImage/utils';

type SearchedItemProps = {
  product: ProductType,
  hideSearchedItems: () => void,
  clearInput: () => void,
}

export const SearchedItem = (
  {
    product,
    hideSearchedItems,
    clearInput
  }: SearchedItemProps) => {
  const {images, slug, title, price} = product;

  const mainImageVariants = getMainImageVariants(images);

  const clearSearchEngine = () => {
    clearInput();
    hideSearchedItems();
  };

  return (
    <SearchedItemElement>
      <Link
        onClick={clearSearchEngine}
        href={buildRoute(Pages.product, [slug]) as string}
      >
        <ProductInformationElement>
          <ProductImage
            images={mainImageVariants}
            alt={title}
          />
          <ProductInformationColumnElement>
            <h3>{title}</h3>
            <ProductPriceElement>{price} zł</ProductPriceElement>
          </ProductInformationColumnElement>
        </ProductInformationElement>
      </Link>
    </SearchedItemElement>
  );
};
