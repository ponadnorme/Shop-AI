import {fetchProducts} from '@/app/store/api/products';
import {notFound} from 'next/navigation';

export default async function ProductCategoryPage({params}: {
  params: { slug: string[] }
}) {
  const {products, productsMeta, productsStatusCode} = await fetchProducts({});

  if (productsStatusCode === 404) {
    notFound();
  }

  return (
    <>
      Strona kategorii.
    </>
  );
}
