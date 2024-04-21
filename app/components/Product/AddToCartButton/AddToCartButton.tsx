'use client';

import {productModalRoute} from '@/app/routes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/navigation';
import {ButtonElement} from './styles';

type AddToCartButtonProps = {
  productId: string,
  buttonText?: string,
};

export const AddToCartButton = ({productId, buttonText}: AddToCartButtonProps) => {
  const router = useRouter();
  return (
    <ButtonElement
      onClick={() => {
        router.replace(productModalRoute(productId));
      }}
    >
      <FontAwesomeIcon icon={faCartPlus}/>
      {!!buttonText && <span>{buttonText}</span>}
    </ButtonElement>
  );
};
