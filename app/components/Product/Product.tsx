import {
  BottomWrapperElement,
  ImageWrapperElement,
  ProductElement,
  PurchaseWrapperElement,
  TagElement,
} from '@/app/components/Product/styles';
import {Price} from '@/app/components/Product/Price';
import {ProductImage} from '@/app/components/Product/ProductImage';
import {
  getMainImageVariants,
} from '@/app/components/Product/ProductImage/utils';
import {PriceElementVariantEnum} from '@/app/components/Product/Price/types';
import Link from 'next/link';
import {buildRoute, Pages} from '@/app/routes';
import {ProductType} from '@/app/store/api/types';
import {
  AddToCartButton
} from '@/app/components/Product/AddToCartButton/AddToCartButton';

export const Product = ({product}: {
  product: ProductType,
}) => {
  const mainImageVariants = getMainImageVariants(product.images);

  return (
    <>
      <ProductElement
        itemScope
        itemType="https://schema.org/Product"
      >
        {!!product.tag && <TagElement>{product.tag}</TagElement>}
        <ImageWrapperElement>
          <ProductImage
            images={mainImageVariants}
            alt={product.title}
          />
        </ImageWrapperElement>
        <BottomWrapperElement>
          <h2 itemProp="name" title={product.title}>
            <Link
              href={buildRoute(Pages.product, [product.slug])}
            >
              {product.title}
            </Link>
          </h2>
          <PurchaseWrapperElement
            itemProp="offers" itemScope
            itemType="https://schema.org/Offer"
          >
            <Price
              price={product.price}
              regularPrice={product.regularPrice}
              variant={PriceElementVariantEnum.bold}
            />
            <meta itemProp="priceCurrency" content={'PLN'}/>
            <meta itemProp="price" content={product.price.toFixed(2)}/>
            <AddToCartButton productId={product.id}/>
          </PurchaseWrapperElement>
        </BottomWrapperElement>
      </ProductElement>
    </>
  );
};
