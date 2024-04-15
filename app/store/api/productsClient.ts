'use client';

import useSWR from 'swr';
import {ProductType} from '@/app/store/api/types';

// @ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json());

type ProductsResponseType = {
  products: ProductType[] | null,
  productsMeta: {
    totalRows: number,
  },
  productsIsLoading: boolean,
  productsError: Error | undefined,
  productsErrors: any,
};

export const useProducts = ({category, limit, query}: {
  category?: string,
  limit?: number,
  query?: string
}, shouldFetch = false): ProductsResponseType => {
  let queryParameters: any = {};

  if (category) {
    queryParameters['category-slug'] = category;
  }

  if (limit) {
    queryParameters['page[limit]'] = limit;
  }

  if (query) {
    queryParameters['query'] = query;
  }

  const parsedQueryParameters = new URLSearchParams(queryParameters).toString();
  const urlParameters = parsedQueryParameters ? `?${parsedQueryParameters}` : '';
  const url = `/api/list/products${urlParameters}`;

  const {data, error, isLoading} = useSWR(shouldFetch ? url : null, fetcher);

  return {
    products: !!data ? data.data : null as ProductType[] | null,
    productsMeta: data?.meta,
    productsIsLoading: isLoading,
    productsError: error,
    productsErrors: data?.errors,
  };
};
