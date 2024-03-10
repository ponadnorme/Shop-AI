import {ProductType} from "@/app/components/Product/types";
import {Product} from "@/app/components/Product";

export default function Home() {
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
    </>
  );
}
