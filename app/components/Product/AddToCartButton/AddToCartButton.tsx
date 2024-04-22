'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {ButtonElement} from './styles';
import {useSessionStorage} from 'usehooks-ts';

type AddToCartButtonProps = {
  productId: string,
  buttonText?: string,
};

export const AddToCartButton = ({productId, buttonText}: AddToCartButtonProps) => {
  const [, setProductSummaryModal] = useSessionStorage('productSummaryModal', null);
  return (
    <ButtonElement
      onClick={() => {
        setProductSummaryModal({
          productId,
        });
      }}
    >
      <FontAwesomeIcon icon={faCartPlus}/>
      {!!buttonText && <span>{buttonText}</span>}
    </ButtonElement>
  );
};
