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
  useRouter,
} from 'next/navigation';
import {ReactNode, useEffect, useState} from 'react';

type ModalPropsType = {
  title: string,
  children: ReactNode,
  className?: string,
  queryParameters: string[],
};

export const Modal = ({title, children, className, queryParameters}: ModalPropsType) => {
  const router = useRouter();
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      setIsOpened(true);
    });
  }, []);

  const closeModal = () => {
    setIsOpened(false);
    setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      queryParameters.forEach((parameter) => {
        params.delete(parameter);
      });
      router.replace(`${window.location.pathname}?${params}`)
    }, 300);
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

export const hasRequiredParameters = (searchParameters: ReadonlyURLSearchParams, parameters: string[]) => {
  return parameters.filter((parameter) => {
    return searchParameters.get(parameter) !== null;
  }).length === parameters.length;
};
