'use client';

import {Filters} from '@/app/produkty/components/Filters';
import {useRouter, useSearchParams} from 'next/navigation';
import {buildRoute, Pages} from '@/app/routes';
import {ProductFiltersType} from '@/app/produkty/components/Filters/types';
import {ProductsContainer} from '@/app/produkty/components/ProductsContainer';
import {
  ContentAreaElement,
  ProductsResultWrapperElement,
  SidebarElement
} from '@/app/produkty/components/ProductsResult/styles';
import {ProductType} from '@/app/store/api/types';
import {Button} from '@/app/components/Button';
import {ButtonVariants} from '@/app/components/Button/types';
import {useState} from 'react';
import {Pagination} from '@/app/components/Pagination';

type ProductsResultProps = {
  initialProductsList: ProductType[],
  productsMeta: {
    totalRows: number,
  } | undefined,
  itemsPerPage: number,
}

export const ProductsResult = (
  {
    initialProductsList,
    productsMeta,
    itemsPerPage,
  }: ProductsResultProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  const currentPage = parseInt(searchParams.get('page') || '1');
  const totalPages = !!productsMeta && Math.ceil(productsMeta.totalRows / itemsPerPage) || 1;

  const handleFilters = (data: ProductFiltersType) => {
    let queryParameters: any = {};

    if (!!query) {
      queryParameters['query'] = query;
    }

    if (!!data.minPrice) {
      queryParameters['priceFrom'] = data.minPrice;
    }

    if (!!data.maxPrice) {
      queryParameters['priceTo'] = data.maxPrice;
    }

    const queryParams = new URLSearchParams(queryParameters);
    router.push(`${buildRoute(Pages.products)}?${queryParams.toString()}`);
  };

  const [sort, setSort] = useState('popular');

  const filtersFromUrl = () => {
    let filters: ProductFiltersType = {
      minPrice: '0',
      maxPrice: '0',
      sort,
    };

    const minPrice = searchParams.get('priceFrom') as string;
    if (!!minPrice) {
      filters.minPrice = minPrice;
    }

    const maxPrice = searchParams.get('priceTo') as string;
    if (!!maxPrice) {
      filters.maxPrice = maxPrice;
    }

    return filters;
  };

  const buildPaginationPages = () => {
    let pages: any = {};

    const minPage = (currentPage - 10) < 1
      ? 1
      : currentPage - 10;
    const maxPage = currentPage + 10;

    const filters = filtersFromUrl();

    for (let i = minPage; i <= maxPage; i++) {
      let queryParameters: any = {
        page: i.toString(),
      };

      if (!!query) {
        queryParameters['query'] = query;
      }

      if (parseInt(filters.minPrice) > 0) {
        queryParameters['priceFrom'] = filters.minPrice;
      }

      if (parseInt(filters.maxPrice) > 0) {
        queryParameters['priceTo'] = filters.maxPrice;
      }

      const queryParams = new URLSearchParams(queryParameters);
      pages[i] = `${buildRoute(Pages.products)}?${queryParams.toString()}`;
    }

    return pages;
  };

  const pages = buildPaginationPages();

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
        <Button variant={ButtonVariants.secondary}>
          test
        </Button>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          pages={pages}
        />
      </ContentAreaElement>
    </ProductsResultWrapperElement>
  );
};
