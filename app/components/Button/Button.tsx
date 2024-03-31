import {ButtonElement} from '@/app/components/Button/styles';
import Link from 'next/link';
import React from 'react';

export const Button = ({linkTo, children}: {
  linkTo?: string,
  children: React.ReactNode,
}) => {
  const linkProps = linkTo ? {
    as: Link,
    href: linkTo,
  } : {};

  return (
    <>
      <ButtonElement
        {...linkProps}
      >
        {children}
      </ButtonElement>
    </>
  );
};
