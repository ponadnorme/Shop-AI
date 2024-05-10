import {PageElement} from './styles';
import {
  ProductsResult
} from '@/app/produkty/components/ProductsResult/ProductsResult';
import {fetchProducts} from '@/app/store/api/products';

type QueryParameters = {
  query?: string,
  pageLimit?: number,
  page?: number,
  priceFrom?: number,
  priceTo?: number,
}

type PageProps = {
  searchParams: QueryParameters,
}

export default async function ProductsPage(props: PageProps) {
  let filters: any = {};

  let itemsPerPage = 30;

  if (props.searchParams.query !== undefined) {
    filters['query'] = props.searchParams.query;
  }
  if (props.searchParams.pageLimit !== undefined) {
    itemsPerPage = props.searchParams.pageLimit;
  }
  if (props.searchParams.page !== undefined) {
    filters['offset'] = (props.searchParams.page - 1) * itemsPerPage;
  }
  if (props.searchParams.priceFrom !== undefined) {
    filters['priceFrom'] = props.searchParams.priceFrom;
  }
  if (props.searchParams.priceTo !== undefined) {
    filters['priceTo'] = props.searchParams.priceTo;
  }

  filters['limit'] = itemsPerPage;
  const {products, productsMeta} = await fetchProducts({...filters});

  return (
    <PageElement>
      {!!products && (
        <ProductsResult
          initialProductsList={products}
          productsMeta={productsMeta}
          itemsPerPage={itemsPerPage}
        />
      )}
    </PageElement>
  );
}
