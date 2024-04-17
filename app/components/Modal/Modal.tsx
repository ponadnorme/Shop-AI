// 'use client'; Is client component. Needs 'use client' boundary.

import {
  CloseModalElement,
  ModalContentElement,
  ModalElement,
  ModalHeaderElement,
} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/navigation';

type ModalPropsType = {
  title: string,
};

export const Modal = ({title}: ModalPropsType) => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <ModalElement>
      <ModalContentElement>
        <ModalHeaderElement>
          <span>{title}</span>
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
  );
};
