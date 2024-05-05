import {
  ProductsContainerElement,
} from './styles';
import {LoaderSpinner} from '@/app/components/LoaderSpinner';
import {Product} from '@/app/components/Product';
import {JSX} from 'react';
import {ProductType} from '@/app/store/api/types';

export const ProductsContainer = (
  {
    products,
    emptyListPlaceholder,
    listWrap = true,
  }: {
    products: ProductType[] | null,
    emptyListPlaceholder?: JSX.Element,
    listWrap?: boolean,
  }) => {
  return (
    <>
      <ProductsContainerElement
        $wrap={listWrap}
      >
        {!!products ? (
          products.length > 0 ? (
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
              />
            ))
          ) : (
            emptyListPlaceholder !== undefined
              ? emptyListPlaceholder
              : 'Brak produktów do pokazania.'
          )
        ) : (
          <LoaderSpinner/>
        )}
      </ProductsContainerElement>
    </>
  );
};
