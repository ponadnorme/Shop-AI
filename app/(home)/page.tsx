import {ProductType} from '@/app/components/Product/types';
import {Product} from '@/app/components/Product';
import {ProductModal} from '@/app/components/Product/ProductModal';
import Swipeable from '@/app/components/Swipeable/Swipeable';

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

  return (
    <>
      <h1>Shop AI</h1>
      <div style={{
        display: 'flex',
        gap: 8,
        width: 1200,
        margin: '0 auto',
        padding: '32px 0',
      }}>
        <Swipeable>
          {products.data.map((product: ProductType) => (
            <Product
              product={product}
              key={product.id}
            />
          ))}
        </Swipeable>
      </div>
      <ProductModal/>
    </>
  );
}
