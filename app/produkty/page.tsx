import {PageElement} from './styles';
import {
  ProductsResult
} from '@/app/produkty/components/ProductsResult/ProductsResult';
import {fetchProducts} from '@/app/store/api/products';

type QueryParameters = {
  query?: string,
  'page-limit': number,
  'page-offset': number,
  'price-from': number,
  'price-to': number,
}

type PageProps = {
  searchParams: QueryParameters,
}

export default async function ProductsPage(props: PageProps) {
  let filters: any = {};
  if (props.searchParams.query !== undefined) {
    filters['query'] = props.searchParams.query;
  }
  if (props.searchParams['page-limit'] !== undefined) {
    filters['limit'] = props.searchParams['page-limit'];
  }
  if (props.searchParams['page-offset'] !== undefined) {
    filters['limit'] = props.searchParams['page-offset'];
  }
  if (props.searchParams['price-from'] !== undefined) {
    filters['priceFrom'] = props.searchParams['price-from'];
  }
  if (props.searchParams['price-to'] !== undefined) {
    filters['priceTo'] = props.searchParams['price-to'];
  }
  const {products} = await fetchProducts({...filters});

  return (
    <PageElement>
      {!!products && (
        <ProductsResult
          initialProductsList={products}
          query={props.searchParams.query}
        />
      )}
    </PageElement>
  );
}
