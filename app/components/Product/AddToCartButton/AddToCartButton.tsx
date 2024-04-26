'use client';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {ButtonElement} from './styles';
import {useOpenProductModal} from '@/app/components/Product/ProductModal/hooks';

type AddToCartButtonProps = {
  productId: string,
  buttonText?: string,
};

export const AddToCartButton = ({productId, buttonText}: AddToCartButtonProps) => {
  const openModal = useOpenProductModal();

  return (
    <ButtonElement
      onClick={() => {
        openModal(productId);
      }}
    >
      <FontAwesomeIcon icon={faCartPlus}/>
      {!!buttonText && <span>{buttonText}</span>}
    </ButtonElement>
  );
};
