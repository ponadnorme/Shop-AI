import {PageElement} from './styles';
import {
  ProductsResult
} from '@/app/produkty/components/ProductsResult/ProductsResult';

async function getTest(productSlug: string) {
  const response = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/slug/products/${productSlug}`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return response.json();
}

export default async function ProductsPage() {
  const productData = await getTest('krolik-3d-skarbonka-do-malowania-artbunny-krainapolapinki');

  return (
    <PageElement>
      <ProductsResult initialProductsList={productData}/>
    </PageElement>
  );
}
