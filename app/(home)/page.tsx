import {ProductModal} from '@/app/components/Product/ProductModal';
import {
  ProductSliderAi
} from '@/app/components/ProductSliderAi/ProductSliderAi';
import {CenteredContentContainerElement} from '@/app/styles/common';
import {getProducts} from '@/app/store/api/products';

export default async function HomePage() {
  const products = await getProducts();
  const productsList = [...products.data];

  return (
    <>
      <CenteredContentContainerElement>
        <h1>Shop AI - Twój nagłówek</h1>
        <ProductSliderAi items={productsList}/>
      </CenteredContentContainerElement>
      <ProductModal/>
    </>
  );
}
