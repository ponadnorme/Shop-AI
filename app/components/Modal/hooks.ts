import {usePathname} from 'next/navigation';

type SessionValue = {
  [key: string]: any,
  url?: string,
};

export const useHasRequiredSessionValues = (sessionValue: SessionValue | undefined, parameters: string[]) => {
  const pathname = usePathname();

  if (sessionValue === undefined) {
    return false;
  }

  const hasRequiredParameters = parameters.every(parameter => sessionValue.hasOwnProperty(parameter));

  return hasRequiredParameters && sessionValue.url === pathname;
};
