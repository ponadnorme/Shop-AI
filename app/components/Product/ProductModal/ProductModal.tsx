'use client';

import {useSearchParams} from "next/navigation";
import {
  ModalContentElement,
  ModalElement
} from "@/app/components/Product/ProductModal/styles";

export const ProductModal = () => {
  const searchParams = useSearchParams();

  if (searchParams.get('productModal') === null) {
    return <></>;
  }

  return (
    <>
      <ModalElement>
        <ModalContentElement>
          test
        </ModalContentElement>
      </ModalElement>
    </>
  );
}
