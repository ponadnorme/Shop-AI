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
import {ReactNode} from 'react';

type ModalPropsType = {
  title: string,
  children: ReactNode,
  className?: string,
};

export const Modal = ({title, children, className}: ModalPropsType) => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <ModalElement className={className}>
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
        {children}
      </ModalContentElement>
    </ModalElement>
  );
};
