import {ImageGalleryAi} from '@/app/components/Product/ImageGalleryAi';
import {Rating} from '@/app/components/Rating';
import {Price} from '@/app/components/Product/Price';
import {Button} from '@/app/components/Button';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {productModalRoute} from '@/app/routes';
import {
  ImageGalleryAiModal
} from '@/app/components/Product/ImageGalleryAi/Modal/ImageGalleryAiModal';

async function getTest(productSlug: string) {
  const response = await fetch(`${process.env.NEXT_APP_BASE_URL}/api/slug/products/${productSlug}`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }

  return response.json();
}

export default async function ProductPage({params}: {
  params: { slug: string }
}) {
  const productData = await getTest(params.slug);
  const exampleProduct = productData.data;

  return (
    <>
      <h1>Strona produktu</h1>
      <ImageGalleryAi
        images={exampleProduct.images}
        title={exampleProduct.title}
        productId={exampleProduct.id}
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
        <Button
          linkTo={productModalRoute(exampleProduct.id)}
        >
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
      <ImageGalleryAiModal/>
    </>
  );
};
