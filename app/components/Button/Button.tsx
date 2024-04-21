// 'use parent client';

import {ButtonElement} from '@/app/components/Button/styles';
import Link from 'next/link';
import React from 'react';

export const Button = ({linkTo, children, ...props}: {
  linkTo?: string,
  children: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const linkProps = linkTo ? {
    as: Link,
    href: linkTo,
  } : {};

  return (
    <>
      <ButtonElement
        {...linkProps}
        {...props}
      >
        {children}
      </ButtonElement>
    </>
  );
};
