import {usePathname, useSearchParams} from 'next/navigation';
import {useSessionStorage} from 'usehooks-ts';
import {Modal} from '@/app/components/Modal/types';
import {useCallback, useEffect} from 'react';

type SessionValue = {
  [key: string]: any,
  url?: string,
};

const useModalSessionStorage = () => {
  return useSessionStorage<object | undefined>('sessionModal', undefined);
}

export const useOpenModal = (id: Modal) => {
  const pathname = usePathname();
  const [, setInitialModalData] = useModalSessionStorage();

  return (data: object) => {
    setInitialModalData({
      ...data,
      id,
      url: pathname,
    });
  };
};

export const useCloseModal = () => {
  const [, , removeModalSessionValue] = useModalSessionStorage();
  return useCallback(() => {
    removeModalSessionValue();
  }, [removeModalSessionValue]);
};

export const useModalData = <T>(guardObject: object, id: Modal): T | null => {
  const [modalSessionValue] = useModalSessionStorage();

  if (!hasRequiredData(modalSessionValue, guardObject, id)) {
    return null;
  }

  return modalSessionValue as T;
}

const hasRequiredData = (modalSessionValue: SessionValue | undefined, guardObject: object, id: Modal) => {
  if (modalSessionValue === undefined
    || modalSessionValue.id !== id
  ) {
    return false;
  }

  return Object.keys(guardObject).every(key => key in modalSessionValue);
}

export const useHasRequiredSessionValues = (sessionValue: SessionValue | undefined, parameters: string[]) => {
  const pathname = usePathname();

  if (sessionValue === undefined) {
    return false;
  }

  const hasRequiredParameters = parameters.every(parameter => sessionValue.hasOwnProperty(parameter));

  return hasRequiredParameters && sessionValue.url === pathname;
};

export const useSessionCleanup = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const closeModal = useCloseModal();

  useEffect(() => {
    closeModal();
  }, [pathname, searchParams, closeModal]);
};
