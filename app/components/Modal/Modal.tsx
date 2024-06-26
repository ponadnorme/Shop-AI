// 'use parent client';

import {
  CloseModalElement,
  ModalContentElement,
  ModalElement,
  ModalHeaderElement,
} from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {
  ReadonlyURLSearchParams,
} from 'next/navigation';
import {ReactNode, RefObject, useEffect, useState} from 'react';
import {useCloseModal} from '@/app/components/Modal/hooks';

type ModalPropsType = {
  title: string,
  children: ReactNode,
  className?: string,
  onAfterClose?: () => void,
  closeRef?: RefObject<HTMLButtonElement>,
};

export const Modal = ({title, children, className, onAfterClose, closeRef}: ModalPropsType) => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setIsOpened(true);
    });
  }, []);

  const removeModalData = useCloseModal();

  const closeModal = () => {
    setIsOpened(false);
    setTimeout(() => {
      removeModalData();
      onAfterClose && onAfterClose();
    }, 300);
  };

  let closeModalProps: any = {};

  if (!!closeRef) {
    closeModalProps['ref'] = closeRef;
  }

  return (
    <ModalElement className={className} isOpened={isOpened}>
      <ModalContentElement>
        <ModalHeaderElement>
          <span>{title}</span>
          <CloseModalElement
            onClick={closeModal}
            {...closeModalProps}
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

export const hasRequiredParameters = (searchParameters: ReadonlyURLSearchParams, parameters: string[]) => {
  return parameters.filter((parameter) => {
    return searchParameters.get(parameter) !== null;
  }).length === parameters.length;
};

export const hasRequiredSessionValues = (sessionValue: object | undefined, parameters: string[]) => {
  if (sessionValue === undefined) {
    return false;
  }

  return parameters.filter((parameter) => {
    return sessionValue.hasOwnProperty(parameter);
  }).length === parameters.length;
};
