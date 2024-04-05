import {ProductModal} from '@/app/components/Product/ProductModal';
import {
  ProductSliderAi
} from '@/app/components/ProductSliderAi/ProductSliderAi';
import {CenteredContentContainerElement} from '@/app/styles/common';

async function getProducts() {
  const response = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/list/products`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return response.json();
}

export default async function HomePage() {
  const products = await getProducts();
  const productsList = [...products.data];

  return (
    <>
      <h1>Shop AI</h1>
      <CenteredContentContainerElement>
        <ProductSliderAi items={productsList}/>
      </CenteredContentContainerElement>
      <ProductModal/>
    </>
  );
}
