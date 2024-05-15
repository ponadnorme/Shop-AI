import {ErrorModelType, ProductType} from '@/app/store/api/types';
import {fetcher} from '@/app/store/api/requestProcessor';

type ProductsProps = {
  offset?: number,
  limit?: number,
  query?: string,
  priceFrom?: number,
  priceTo?: number,
}

type ProductsResponseType = {
  products: ProductType[] | undefined,
  productsMeta: {
    totalRows: number,
  } | undefined,
  productsErrors: ErrorModelType[] | undefined,
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
  const url = `${process.env.NEXT_API_URL}/summary/products${urlParameters}`;

  const response = await fetcher(url, {
    cache: 'no-store',
  });

  return {
    products: response?.data,
    productsMeta: response?.meta,
    productsErrors: response?.errors,
  };
};
