import {ProductType} from "@/app/components/Product/types";
import {Product} from "@/app/components/Product";
import {ProductModal} from "@/app/components/Product/ProductModal";

async function getTest() {
  const response = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/test`);
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return response.json();
}

export default async function Home() {
  await getTest();

  const exampleProduct = {
    title: 'test',
    images: [
      {
        id: 'id',
        isMain: true,
        variants: [
          {
            variant: 'original',
            url: '/sample-image.png',
          },
        ],
      },
    ],
    features: [],
    lowestPrice: 12.99,
    price: 12.99,
    tag: 'Bestseller',
    rating: 6,
    ratingCount: 3,
    bestRating: 6,
    quantity: 99,
    slug: 'product-slug',
    regularPrice: 22.49,
    id: 'stringified',
  };

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
