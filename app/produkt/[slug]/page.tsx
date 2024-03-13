import {ProductImage} from "@/app/components/Product/ProductImage";
import {
  getMainImageVariants
} from "@/app/components/Product/ProductImage/utils";

export default function Product({params}: { params: { slug: string } }) {
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
  const mainImageVariants = getMainImageVariants(exampleProduct.images);

  return (
    <>
      <h1>Strona produktu</h1>
      {params.slug}
      <ProductImage
        images={mainImageVariants}
        alt={exampleProduct.title}
      />
    </>
  );
};
