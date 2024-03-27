'use client';

import {useSearchParams, useRouter} from "next/navigation";
import {
  ModalContentElement,
  ModalElement
} from "@/app/components/Product/ProductModal/styles";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const ProductModal = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const productId = searchParams.get('id');

  if (searchParams.get('productModal') === null
    || productId === null
  ) {
    return <></>;
  }

  const closeModal = () => {
    router.back();
  };

  return (
    <>
      <ModalElement>
        <ModalContentElement>
          <button
            onClick={closeModal}
          >
            <FontAwesomeIcon
              icon={faXmark}
              style={{
                height: 28,
              }}
            />
          </button>
        </ModalContentElement>
      </ModalElement>
    </>
  );
}
