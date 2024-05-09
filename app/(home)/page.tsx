import {
  ProductSliderAi
} from '@/app/components/ProductSliderAi/ProductSliderAi';
import {CenteredContentContainerElement} from '@/app/styles/common';
import {fetchProducts} from '@/app/store/api/products';
import dynamic from 'next/dynamic';

export default async function HomePage() {
  const {products} = await fetchProducts({});

  const Map = dynamic(() => import('@/app/components/Map/Map'), {
    ssr: false,
  });

  return (
    <>
      <CenteredContentContainerElement>
        <h1>Shop AI - Twój nagłówek</h1>
        {!!products && (
          <ProductSliderAi items={products}/>
        )}
        <Map/>
      </CenteredContentContainerElement>
    </>
  );
}
