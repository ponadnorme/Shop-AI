'use client';

import {useSessionCleanup} from '@/app/components/Modal/hooks';
import {Suspense} from 'react';

export const ModalSessionManager = () => {
  return (
    <Suspense fallback={null}>
      <SearchParamHandler />
    </Suspense>
  );
};

const SearchParamHandler = () => {
  useSessionCleanup();
  return null;
};
