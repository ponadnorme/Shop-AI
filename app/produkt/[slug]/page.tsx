import {ImageGalleryAi} from "@/app/components/Product/ImageGalleryAi";
import {Rating} from "@/app/components/Rating";

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
      {
        id: 'id2',
        isMain: false,
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
      <ImageGalleryAi
        images={exampleProduct.images}
        title={exampleProduct.title}
      />
      <h1>{exampleProduct.title}</h1>
      <Rating
        rating={exampleProduct.rating}
      />
    </>
  );
};
