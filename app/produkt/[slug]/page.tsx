import {ImageGalleryAi} from '@/app/components/Product/ImageGalleryAi';
import {Rating} from '@/app/components/Rating';
import {Price} from '@/app/components/Product/Price';
import {
  AddToCartButton
} from '@/app/components/Product/AddToCartButton/AddToCartButton';
import {fetchProductBySlug} from '@/app/store/api/products';

export default async function ProductPage({params}: {
  params: { slug: string }
}) {
  const {product} = await fetchProductBySlug(params.slug);
  
  if (!product) {
    return null;
  }

  return (
    <>
      <h1>Strona produktu</h1>
      <ImageGalleryAi
        images={product.images}
        title={product.title}
        productId={product.id}
      />
      <h1>{product.title}</h1>
      <div style={{
        width: 200,
      }}>
        <Rating
          rating={product.rating}
        />
      </div>
      <div>
        <Price
          price={product.price}
          regularPrice={product.regularPrice}
          lowestPrice={product.lowestPrice}
        />
        <AddToCartButton productId={product.id} buttonText={'Dodaj do koszyka'}/>
      </div>
      <div>
        {product.quantity > 0 ? <>
            Dostępny ({product.quantity} szt.)
          </>
          : <>
            Niedostępny
          </>}
      </div>
    </>
  );
};
