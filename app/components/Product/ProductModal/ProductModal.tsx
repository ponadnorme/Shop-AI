'use client';

import {useSearchParams, useRouter} from "next/navigation";
import {
  CloseModalElement,
  ModalContentElement,
  ModalElement,
  ModalHeaderElement,
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
          <ModalHeaderElement>
            <span>Karta produktu</span>
            <CloseModalElement
              onClick={closeModal}
            >
              <FontAwesomeIcon
                icon={faXmark}
                style={{
                  height: 28,
                }}
              />
            </CloseModalElement>
          </ModalHeaderElement>
        </ModalContentElement>
      </ModalElement>
    </>
  );
}
