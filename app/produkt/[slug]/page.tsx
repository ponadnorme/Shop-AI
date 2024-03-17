import {ImagePreview} from "@/app/components/Product/ImagePreview/ImagePreview";

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

  return (
    <>
      <h1>Strona produktu</h1>
      {params.slug}
      <ImagePreview
        images={exampleProduct.images}
        title={exampleProduct.title}
      />
    </>
  );
};
