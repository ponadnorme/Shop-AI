import {ErrorModelType, ProductType} from '@/app/store/api/types';
import {fetcher} from '@/app/store/api/requestProcessor';
import {getRequest, handleResponse} from '@/app/utils/apiUtils';

type ProductsProps = {
  offset?: number,
  limit?: number,
  query?: string,
  priceFrom?: number,
  priceTo?: number,
}

type ProductsResponseType = {
  products?: ProductType[],
  productsMeta?: {
    totalRows: number,
  },
  productsErrors?: ErrorModelType[],
  productsStatusCode: number,
}

export const fetchProducts = async (
  {
    offset,
    limit,
    query,
    priceFrom,
    priceTo,
  }: ProductsProps): Promise<ProductsResponseType> => {

  let queryParameters: any = {};
  if (offset) {
    queryParameters['page[offset]'] = offset;
  }
  if (limit) {
    queryParameters['page[limit]'] = limit;
  }
  if (priceFrom) {
    queryParameters['filters[price][from]'] = priceFrom;
  }
  if (priceTo) {
    queryParameters['filters[price][to]'] = priceTo;
  }
  if (query) {
    queryParameters['query'] = query;
  }

  const parsedQueryParameters = new URLSearchParams(queryParameters).toString();
  const urlParameters = parsedQueryParameters ? `?${parsedQueryParameters}` : '';
  const url = `/summary/products${urlParameters}`;

  const {data, statusCode} = await handleResponse(await getRequest(url));

  return {
    products: data?.data,
    productsMeta: data?.meta,
    productsErrors: data?.errors,
    productsStatusCode: statusCode,
  };
};

type ProductBySlugResponseType = {
  product?: ProductType,
  productErrors?: ErrorModelType[],
  productStatusCode: number,
}

export const fetchProductBySlug = async (slug: string): Promise<ProductBySlugResponseType> => {
  const url = `/slug/products/${slug}`;
  const {data, statusCode} = await handleResponse(await getRequest(url));
  return {
    product: data?.data,
    productErrors: data?.errors,
    productStatusCode: statusCode,
  };
};
