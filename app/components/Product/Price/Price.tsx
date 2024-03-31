import {
  PriceElementVariantEnum,
} from './types';
import {LowestPriceInfo, PriceElement, RegularPriceElement} from './styles';

export const Price = (
  {
    price,
    regularPrice = 0,
    lowestPrice = 0,
    variant = PriceElementVariantEnum.normal,
    className
  }: {
    price: number,
    regularPrice?: number,
    lowestPrice?: number,
    variant?: PriceElementVariantEnum,
    className?: string,
  }) => {
  const handlePriceFormat = (price: number) => {
    return price.toFixed(2).replace('.', ',');
  };

  return (
    <PriceElement
      variant={variant}
      className={className}
    >
      {regularPrice !== price && regularPrice > 0 ? (
        <RegularPriceElement>
          {handlePriceFormat(regularPrice)} zł
        </RegularPriceElement>
      ) : (
        <></>
      )}
      <div>{handlePriceFormat(price)} zł</div>
      {lowestPrice > 0 ? (
        <>
          <LowestPriceInfo>Najniższa cena z ostatnich 30
            dni: {handlePriceFormat(lowestPrice)} zł.</LowestPriceInfo>
        </>
      ) : (
        <></>
      )}
    </PriceElement>
  );
};
