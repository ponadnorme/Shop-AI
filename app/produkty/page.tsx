import {PageElement} from './styles';
import {
  ProductsResult
} from '@/app/produkty/components/ProductsResult/ProductsResult';
import {getProducts} from '@/app/store/api/products';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <PageElement>
      <ProductsResult initialProductsList={products.data}/>
    </PageElement>
  );
}
