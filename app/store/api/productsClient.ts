'use client';

import useSWR from 'swr';
import {ErrorModelType, ImageType, ProductType} from '@/app/store/api/types';
import {fetcher} from '@/app/store/api/requestProcessor';

type ProductsResponseType = {
  products: ProductType[] | null | undefined,
  productsMeta: {
    totalRows: number,
  },
  productsIsLoading: boolean,
  productsError: Error | undefined,
  productsErrors: ErrorModelType[] | null | undefined,
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
  const url = `/api/summary/products${urlParameters}`;

  const {data, error, isLoading} = useSWR(shouldFetch ? url : null, fetcher);

  return {
    products: data === null ? null : data?.data,
    productsMeta: data?.meta,
    productsIsLoading: isLoading,
    productsError: error,
    productsErrors: data === null ? null : data?.errors,
  };
};

type ProductImagesResponseType = {
  productImages: ImageType[] | null,
  productImagesError: Error | undefined,
  productImagesIsLoading: boolean,
};

export const useProductImages = (productId: string, shouldFetch: boolean): ProductImagesResponseType => {
  const {data, error, isLoading} = useSWR(shouldFetch ? `/api/image/products/${productId}` : null, fetcher);

  return {
    productImages: !!data ? data.data : null as ImageType[] | null,
    productImagesError: error,
    productImagesIsLoading: isLoading,
  };
};
