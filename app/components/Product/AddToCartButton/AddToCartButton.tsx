'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {ButtonElement} from './styles';
import {useSessionStorage} from 'usehooks-ts';
import {modalSessionName} from '@/app/components/Product/ProductModal/ProductModal';
import {
  ProductSummaryModalDataType
} from '@/app/components/Product/ProductModal/types';
import {usePathname} from 'next/navigation';

type AddToCartButtonProps = {
  productId: string,
  buttonText?: string,
};

export const AddToCartButton = ({productId, buttonText}: AddToCartButtonProps) => {
  const pathname = usePathname();
  const [, setProductSummaryModal] = useSessionStorage<ProductSummaryModalDataType | undefined>(modalSessionName, undefined);

  return (
    <ButtonElement
      onClick={() => {
        setProductSummaryModal(() => {
          return {
            productId,
            url: pathname,
          };
        });
      }}
    >
      <FontAwesomeIcon icon={faCartPlus}/>
      {!!buttonText && <span>{buttonText}</span>}
    </ButtonElement>
  );
};
