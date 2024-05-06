import {
  ProductSliderAi
} from '@/app/components/ProductSliderAi/ProductSliderAi';
import {CenteredContentContainerElement} from '@/app/styles/common';
import {fetchProducts} from '@/app/store/api/products';

export default async function HomePage() {
  const {products} = await fetchProducts({});

  return (
    <>
      <CenteredContentContainerElement>
        <h1>Shop AI - Twój nagłówek</h1>
        {!!products && (
          <ProductSliderAi items={products}/>
        )}
      </CenteredContentContainerElement>
    </>
  );
}
