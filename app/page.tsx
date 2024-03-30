import {ProductType} from "@/app/components/Product/types";
import {Product} from "@/app/components/Product";
import {ProductModal} from "@/app/components/Product/ProductModal";

async function getTest(productSlug: string) {
  const response = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/slug/products/${productSlug}`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return response.json();
}

export default async function HomePage() {
  const productData = await getTest('krolik-3d-skarbonka-do-malowania-artbunny-krainapolapinki');
  const exampleProduct = productData.data;

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
        <Product
          product={exampleProduct as ProductType}
        />
      </div>
      <ProductModal/>
    </>
  );
}
