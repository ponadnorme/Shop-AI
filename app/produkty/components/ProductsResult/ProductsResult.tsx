'use client';

import {ProductsContainer} from '@/app/produkty/components/ProductsContainer';

export const ProductsResult = ({initialProductsList}: {
  initialProductsList: any
}) => {
  return <>
    <div>
      <h1>Lista produktów</h1>
      <ProductsContainer
        products={initialProductsList}
      />
    </div>
  </>;
};
