'use client';

import {Filters} from '@/app/produkty/components/Filters';
import {useRouter} from 'next/navigation';
import {buildRoute, Pages} from '@/app/routes';
import {ProductFiltersType} from '@/app/produkty/components/Filters/types';
import {ProductsContainer} from '@/app/produkty/components/ProductsContainer';
import {
  ContentAreaElement,
  ProductsResultWrapperElement, SidebarElement
} from '@/app/produkty/components/ProductsResult/styles';
import {ProductType} from '@/app/store/api/types';

type ProductsResultProps = {
  initialProductsList: ProductType[],
  query?: string,
}

export const ProductsResult = (
  {
    initialProductsList,
    query
  }: ProductsResultProps) => {
  const router = useRouter();

  const handleFilters = (data: ProductFiltersType) => {
    let queryParameters: any = {};

    if (!!query) {
      queryParameters['query'] = query;
    }

    if (!!data.minPrice) {
      queryParameters['price-from'] = data.minPrice;
    }

    if (!!data.maxPrice) {
      queryParameters['price-to'] = data.maxPrice;
    }

    const queryParams = new URLSearchParams(queryParameters);
    router.push(`${buildRoute(Pages.products)}?${queryParams.toString()}`);
  };

  return (
    <ProductsResultWrapperElement>
      <SidebarElement>
        <Filters
          onFilter={handleFilters}
        />
      </SidebarElement>
      <ContentAreaElement>
        <h1>Lista produktów</h1>
        <ProductsContainer
          products={initialProductsList}
        />
      </ContentAreaElement>
    </ProductsResultWrapperElement>
  );
};
