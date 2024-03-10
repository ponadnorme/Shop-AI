import {
  BottomWrapperElement,
  CartElement,
  ImageWrapperElement,
  ProductElement,
  PurchaseWrapperElement,
  TagElement,
} from "@/app/components/Product/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {Price} from "@/app/components/Product/Price"
import {ProductImage} from "@/app/components/Product/ProductImage";
import {getMainImageVariants} from "@/app/components/Product/ProductImage/utils";
import {PriceElementVariantEnum} from "@/app/components/Product/Price/types";
import {ProductType} from "@/app/components/Product/types";

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
          <h2 itemProp="name" title={product.title}>{product.title}</h2>
          <PurchaseWrapperElement itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <Price
              price={product.price}
              regularPrice={product.regularPrice}
              variant={PriceElementVariantEnum.bold}
            />
            <meta itemProp="priceCurrency" content={'PLN'}/>
            <meta itemProp="price" content={product.price.toFixed(2)}/>
            <CartElement>
              <FontAwesomeIcon icon={faCartPlus} />
              <span />
            </CartElement>
          </PurchaseWrapperElement>
        </BottomWrapperElement>
      </ProductElement>
    </>
  );
}
