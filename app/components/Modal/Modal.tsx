// 'use parent client';

import {
  CloseModalElement,
  ModalContentElement,
  ModalElement,
  ModalHeaderElement,
} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/navigation';
import {ReactNode, useEffect, useState} from 'react';

type ModalPropsType = {
  title: string,
  children: ReactNode,
  className?: string,
};

export const Modal = ({title, children, className}: ModalPropsType) => {
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setIsOpened(true);
    });
  }, []);

  const closeModal = () => {
    router.back();
  };

  return (
    <ModalElement className={className} isOpened={isOpened}>
      <ModalContentElement>
        <ModalHeaderElement>
          <span>{title}</span>
          <CloseModalElement
            onClick={closeModal}
          >
            <FontAwesomeIcon
              icon={faXmark}
            />
          </CloseModalElement>
        </ModalHeaderElement>
        {children}
      </ModalContentElement>
    </ModalElement>
  );
};
