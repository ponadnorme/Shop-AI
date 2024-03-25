import {ImageGalleryAi} from "@/app/components/Product/ImageGalleryAi";
import {Rating} from "@/app/components/Rating";
import {Price} from "@/app/components/Product/Price";
import {Button} from "@/app/components/Button";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
      <div style={{
        width: 200,
      }}>
        <Rating
          rating={exampleProduct.rating}
        />
      </div>
      <div>
        <Price
          price={exampleProduct.price}
          regularPrice={exampleProduct.regularPrice}
          lowestPrice={exampleProduct.lowestPrice}
        />
        <Button>
          <FontAwesomeIcon
            icon={faCartPlus}
            style={{
              height: 28,
              marginRight: 6,
            }}
          />
          <span>Dodaj do koszyka</span>
        </Button>
      </div>
      <div>
        {exampleProduct.quantity > 0 ? <>
            Dostępny ({exampleProduct.quantity} szt.)
          </>
          : <>
            Niedostępny
          </>}
      </div>
    </>
  );
};
